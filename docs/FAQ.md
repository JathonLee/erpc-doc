---
sidebar_position: 100
---
# FAQ

## 常见问题

### 1、如何升级 erpc 包版本
```js
go get -u talkcheap.xiaoeknow.com/erpc/erpc/...
```

### 2、如何知道 erpc 各版本升级内容
[changeLog](https://doc.weixin.qq.com/doc/w3_Ac8AyAY3AKkePEi3mYKTkSPeTzw4w?scode=ALQAnAdhAAYMDCmmhTAc8AyAY3AKk)

### 3、如何设置请求灰度
:::warning 注意
⚠️ erpc 包版本要求 ≥ 0.1.14
:::
```go
err = http.Post(url).
	GrayID(req.AppID). // 灰度 id 设置
	Json(req).
	SendForJson(ctx, &resp)
```

### 4、异常请求日志怎么看
目前 erpc 的请求日志是 Debug 等级，默认 Info，导致正常情况并不会输出到日志文件中。详见 https://doc.weixin.qq.com/doc/w3_Ac8AyAY3AKkV765cGotSp6HVBdXSp?scode=ALQAnAdhAAYs4JyouJAc8AyAY3AKk 。

如果接口有异常，即接口返回了错误（code 非0），服务是会记录请求错误日志的，如何排查异常日志流程查看下面描述。

如何排查异常接口：
1.让业务异常方提供异常请求的 Trace-Id，具体可从响应 Header 的 xe-safe-trace-id 拿。
2.查看链路追踪，海外 Skywalking 地址：http://skywalking.knowlink-tools.com/general ；
a.每个接口都会在 Response Header 中设置一个 xe-safe-trace-id，可拿值去 Skywalking 上检索。日志上也会打印。
3.如在 service 中返回了 err 时，会记录一条错误日志，可通过 level: error 来检索错误日志，也可以 level: error AND msg:"request error" 来检索请求错误日志。

### 5、如何接入自定义 server
目前 erpc 是将 server 抽象成一个 Server interface，实现该接口即可。
// cmd/server/main.go
```go
func newApp(ctx context.Context) *erpc.App {
	//初始化各个组件
	svc := service.NewKlMaterialOsService(repo)
	return erpc.NewApp(
		erpc.Name("kl_material_os"),
		erpc.Server(
			NewCustomServer(ctx, svc), // 自定义 server 实现
		),
	)
}
```

⚠️需要注意：
1.Server 需要手动接入 Skywalking 链路追踪。
2.Server 返回时，需要添加响应 Header：xe-safe-trace-id。

### 6、链路追踪不生效
1.检查 internal/config/config.go 中的 getStrEnvOrDefault("TRACE_SERVER_ADDR", "localhost:11800")  的 TRACE_SERVER_ADDR 是否拼写错误，新模板已修复。
2.检查TRACE配置是否正常
TRACE_ENABLE=true # 需要开启
TRACE_SAMPLE_RATE=1
TRACE_SERVER_ADDR=skywalking-oap.skywalking.svc.cluster.local:11800

3.检查 ctx 是否透传下去了

### 7、异步 Goroutine Context 透传问题
异步 goroutine 直接使用 API 请求的 ctx 时，会在接口返回时，被 server cancel 掉，从而影响 goroutine 的流程。
context 提供新的一个函数，可取消掉原 ctx 的 cancel，详见：
```go
newCtx := context.WithoutCancel(ctx) // 来取消掉原 ctx 的 cancel 处理，并赋予到新的 ctx 中。
```

### 8、链路追踪多个服务串不起来
talkcheap.xiaoeknow.com/erpc/erpc/contrib/server/grpc-gateway v0.1.14 版本��修复，可升级组件进行修复。

### 9、如何获取 HTTP Request Header
获取 Header 代码示例：
确保 talkcheap.xiaoeknow.com/erpc/erpc/contrib/server/grpc-gateway 版本大于 v0.1.8

```go
// import grpcgateway "talkcheap.xiaoeknow.com/erpc/erpc/contrib/server/grpc-gateway"
func (s *XiaoeAdminService) Get(ctx context.Context, req *v1.GetRequest) (*v1.GetResponse, error) {
	header := grpcgateway.GetRawHeaders(ctx)
	appID:= header.Get("xe-safe-app-id")
}
```

### 10、如何设置 Response Header
设置 Header 代码示例：
```go
func (s *XiaoeAdminService) Get(ctx context.Context, req *v1.GetRequest) (*v1.GetResponse, error) {
	if err := grpc.SendHeader(ctx, metadata.Pairs(
		"Set-Cookie", "",
		"Xe-Safe-Custom-Header", "xiaoe_admin", // 自定义 Header
	)); err != nil {
		return nil, err
	}
}
```

### 11、如何设置一个下游 HTTP Request Header
也就是如何给下游服务发请求时设置一个 Header。
```go
func doSth(ctx) {
    ctx = metadata.AppendToOutgoingContext(ctx,
        "xe-safe-custom-key", "customvalue",
    )
    // do something...，在后续http发请求时，会在request header 上自动带上该key
} 
```

### 12、获取并解析 HTTP Cookie
```go
import (
     grpcgw talkcheap.xiaoeknow.com/erpc/erpc/contrib/server/grpc-gateway
     talkcheap.xiaoeknow.com/erpc/erpc/http
 )
func fn(ctx, req) {
    headers := grpcgw.GetRawHeaders(ctx)
    cookies, err := http.ParseCookies(headers.Get("cookie"))
    if err != nil {
        return nil, err 
    }
    token, ok := cookies.Get("ops-token")
}
```

### 13、如何返回自定义 Content-Type 类型的响应
1.修改对应 Protobuf 文件
```proto
syntax = "proto3";

package demo.v1;

import "google/api/annotations.proto";
+ import "google/api/httpbody.proto"; // 新增该行

option go_package = "demo/internal/gen/proto/demo/v1;v1";

service DemoService {
-  rpc Get(GetRequest) returns (GetResponse) {
+  rpc Get(GetRequest) returns (google.api.HttpBody) {
    option (google.api.http) = {get: "/foo"};
  }
}

message GetRequest {}
```

2.修改server 代码中 WithMarshalerOption 配置
```go
runtime.WithMarshalerOption(
	runtime.MIMEWildcard,
+	&runtime.HTTPBodyMarshaler{ // 新增该结构体
		Marshaler: &runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{
				EmitUnpopulated: true,
				UseProtoNames:   true,
			},
+		},
	},
),
```

3.生成代码并实现对应接口，和返回对应内容
```go
func (s *DemoService) Get(ctx context.Context, req *v1.GetRequest) (*httpbody.HttpBody, error) {
	return &httpbody.HttpBody{
		ContentType: "text/html", // 自定义 Content-Type
		Data:        []byte("Hello World"), // 响应体
	}, nil
}
```

4.测试接口

### 14、gorm 如何设置连接池参数
```go
import (
    egorm "talkcheap.xiaoeknow.com/erpc/erpc/contrib/gorm"
    "gorm.io/gorm"
)
func NewXxxDB() {
    maxIdleConn := 100
    egorm.DialMySQL(
        "DSN String",
        /*GORM官方配置：*/&gorm.Config{}
        /*连接池配置：*/    &egorm.DBConnectConfig{MaxIdleConns:&maxIdleConn},
)
}
```

### 15、Swagger 如何设置必填选项
文档地址：https://grpc-ecosystem.github.io/grpc-gateway/docs/mapping/customizing_openapi_output/ 
添加：(google.api.field_behavior) = REQUIRED 
```proto
import "google/api/field_behavior.proto";

message MyMessage {
    string a_required_field = 1 [(google.api.field_behavior) = REQUIRED];
}
```

### 16、拆分多个 ProtoBuf 文件后，如何合并输出为单个 Swagger 文件
修改 buf.gen.yaml：
```yaml
version: v2
managed:
  enabled: true # default: false
  disable:
    - module: buf.build/googleapis/googleapis
plugins:
  - remote: buf.build/protocolbuffers/go:v1.34.2
    out: internal/gen/proto
    opt: paths=source_relative
  - remote: buf.build/grpc-ecosystem/openapiv2:v2.21.0
    out: docs
    opt: 
      - json_names_for_fields=false
      - enums_as_ints=true
      - omit_enum_default_value=true
++      - allow_merge=true,merge_file_name=api # 合并输出的文件名称为 api.swagger.json
  - remote: buf.build/grpc/go:v1.5.1
    out: internal/gen/proto
    opt: paths=source_relative,require_unimplemented_servers=false
  - remote: buf.build/grpc-ecosystem/gateway:v2.21.0
    out: internal/gen/proto
    opt: paths=source_relative
inputs:
  - directory: proto
```

### 17、如何本地起多个服务
erpc 目前是使用 grpc-gateway + grpc-server 的，所以只要其中一个端口被占用就会启动不了，所以在启动时需要指定两个 server 的端口，如：
```sh
# 第一个服务
go run ./server -port 8080 -gport 9090
# 第二个服务
go run ./server -port 8081 -gport 9091
```

GoLand 配置如图（详见 Program arguments）：

### 18、如何实现 302 跳转
文档：https://grpc-ecosystem.github.io/grpc-gateway/docs/mapping/customizing_your_gateway/#mutate-response-messages-or-set-response-headers 
步骤：
1.ProtoBuf 文件里定义一个新的 message
```proto
message RedirectResponse {
    uint32 code = 1;
    string msg = 2;
    string url = 3;
}
// 需要重定向的接口的返回值改为这个（RedirectResponse），例如：
rpc Get(GetRequest) returns (RedirectResponse) {
  option (google.api.http) = {get: "/api/v1/foo"};
}
```

2.internal/server/server.go 中新增转发方法
```go
func redirectForward(ctx context.Context, w http.ResponseWriter, resp proto.Message) error {
	rr, ok := resp.(*v1.RedirectResponse) // 刚刚定义的 pb 中的 message
	if ok {
		w.Header().Set("Location", rr.Url)
		w.WriteHeader(int(rr.Code))
	}
	return nil
}
```

3.internal/server/server.go 中 New 方法新增代码
```go
func New(ctx context.Context, srv v1.KlMaterialOsServiceServer) server.Server {
	return grpcgw.New(
		grpcgw.WithServerMuxAddress(":"+*port),
		grpcgw.WithServerMuxOptions(
			runtime.WithMarshalerOption(
				runtime.MIMEWildcard,
				&runtime.JSONPb{
					MarshalOptions: protojson.MarshalOptions{
						EmitUnpopulated: true,
						UseProtoNames:   true,
					},
				},
			),
++        runtime.WithForwardResponseOption(redirectForward), // 刚刚新增的方法
		),
		grpcgw.WithServerMuxRegisterFuncs(
			v1.RegisterKlMaterialOsServiceHandlerFromEndpoint,
		),
		grpcgw.WithGRPCServerAddress(":"+*gport),
		grpcgw.WithGRPCServerOptions(
			grpc.ChainUnaryInterceptor(
				middleware.RecoverUnaryServerInterceptor(),
				middleware.SkywalkingUnaryServerInterceptor(),
				middleware.RequestLogUnaryServerInterceptor(),
				middleware.XESafeMetadataUnaryServerInterceptor(),
				middleware.ValidatorServerInterceptor(),
			),
		),
		grpcgw.WithGRPCServerRegisterFuncs(
			func(s grpc.ServiceRegistrar) {
				v1.RegisterKlMaterialOsServiceServer(s, srv)
			},
		),
		grpcgw.WithHealth(),
		grpcgw.WithMetrics(),
		grpcgw.WithPprof(),
	)
}
```

4. `internal/service/service.go` 编写重定向代码
```go
func (s *RedirectDemoService) Get(ctx context.Context, req *v1.GetRequest) (*v1.RedirectResponse, error) {
    return &v1.RedirectResponse{
        Code: 302,
        Msg: "redirect",
        Url: "https://www.baidu.com",
    }, nil
}
```

5.验证

### 19、请求带上未知字段报错问题
ℹ️ 现默认行为是客户端传了未知字段会报解析失败错误，并打印错误日志（erpc/server/grpc-gateway 版本需≥ v0.1.15）。主要是为了保证数据的完整性和保证后续迭代中协议破坏性变更的问题。

⚠️ 如果涉及接收第三方回调接口，还是建议设置 DiscardUnknown: true。具体配置流程如下

配置流程：
1. 在 internal/server/server.go New 方法中新增以下代码：
```go title="internal/server/server.go"
func New(ctx context.Context, srv v1.KlMaterialApiServiceServer) server.Server {
	return grpcgw.New(
		grpcgw.WithServerMuxAddress(":"+*port),
		grpcgw.WithServerMuxOptions(
			runtime.WithMarshalerOption(
				runtime.MIMEWildcard,
				&runtime.JSONPb{
					MarshalOptions: protojson.MarshalOptions{
						EmitUnpopulated: true,
						UseProtoNames:   true,
					},
					UnmarshalOptions: protojson.UnmarshalOptions{
						DiscardUnknown: true,
					},
				},
			),
		),
       //...
    )
}
```
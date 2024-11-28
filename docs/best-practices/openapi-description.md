---
title: 补充 OpenAPI 描述
sidebar_position: 4
---

# 补充 OpenAPI 描述
:::note
具体文档 👉🏻
[**_OpenAPI_**](https://grpc-ecosystem.github.io/grpc-gateway/docs/mapping/customizing_openapi_output/)
:::

#### 1. 在 buf.yaml 中的 deps 新增下列：
```yaml title="buf.yaml"
deps:
  - buf.build/grpc-ecosystem/grpc-gateway # 新增该行
```

#### 2. 在 ProtoBuf 文件中新增描述
:::tip
    ⚠️ 需要导入依赖 ProtoBuf 文件.
:::
```js
import "protoc-gen-openapiv2/options/annotations.proto"; 

message MyMessage {
  // This comment will end up direcly in your Open API definition
  string uuid = 1 [(grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {description: "The UUID field."}];
}
```

#### 3. 最后执行生成命令即可
```js
buf dep update && erpc gen
```



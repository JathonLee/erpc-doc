---
sidebar_position: 4
---
# 新增 HTTP Client 调用

该章节描述如何添加 HTTP 调用下游服务客户端代码.

在该目录：`{项目根目录}/internal/repo/dao` 下新增 `upstream_service_http.go` 文件.

代码示例
```go title="upstream_service_http.go"
package dao

import (
	"context"
	stdhttp "net/http"

	"{项目名称}/internal/repo/model"

	"talkcheap.xiaoeknow.com/erpc/erpc/http"
	"talkcheap.xiaoeknow.com/erpc/erpc/errors"
)

type UpstreamServiceHTTP struct {
    // 如有连接池配置需求，可以添加 client 字段
}

func NewUpstreamServiceHTTP() *UpstreamServiceHTTP {
	return &UpstreamServiceHTTP{
		// 如有连接池配置需求，可以添加 client 字段
	}
}

// 获取用户信息，返回 model 里的 UserInfo 信息
func (h *UpstreamServiceHTTP) GetUserInfo(ctx context.Context, appID string, id int) (model.UserInfo, error) {
	var resp struct {
		Code int            `json:"code"`
		Msg  string         `json:"msg"`
		Data model.UserInfo `json:"data"`
	}
	if err := http.Post(os.Getenv("LB_SHOP_USER_CENTER_GO")+"/xe.shop.user.info/1.0.0").
		Json(map[string]any{
			"user_id": id,
			"app_id":  appID,
		}).
		SendForJson(ctx, &resp); err != nil {
		return false, err
	}
	if resp.Code != 0 {
		return false, errors.New(resp.Code, "获取用户信息失败：" + resp.Msg)
	}
	return resp.Data, nil
}

```
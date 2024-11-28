---
sidebar_position: 7
---
# 错误处理

目前 erpc 内置了 `errors` 包,APIs 响应错误时可以直接使用 `errors` 包中的 `New` 方法来声明一个接口报错.

示例：
```go
import "talkcheap.xiaoeknow.com/erpc/erpc/errors"

func (s *ShopUserCenterService) GetUserInfo(ctx context.Context, req *v1.GetUserInfoRequest) (*v1.GetUserInfoResponse, error) {
    user, err := s.repo.GetUser(ctx, req.GetAppId(), req.GetUserId())
    if err != nil {
        // code 为 400，msg信息为：获取用户信息失败
        return nil, errors.New(400, "获取用户信息失败")
        // 或
        return nil. errors.BadRequest("获取用户信息失败")
    }
    return &v1.GetUserInfoResponse{
        Data: &v1.UserInfo{
            AppId:    user.AppID,
            UserId:   user.UserID,
            UserName: user.UserName,
        },
    }, nil
}

```

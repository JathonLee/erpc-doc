---
sidebar_position: 2
---
# 新增/修改路由

## 1. 修改/新增对应 rpc 方法

接口规范查看：[接口规范](https://doc.weixin.qq.com/doc/w3_m_YJUBzOQwkKdd?scode=ALQAnAdhAAYxDjum0qAAYAOga8ACU)

```go
service ShopUserCenterService {
  // 获取用户信息
  rpc GetUserInfo(GetUserInfoRequest) returns (GetUserInfoResponse) {
    option (google.api.http) = {get: "/xe.shop.user.get/1.0.0"};
  }
}
message GetUserInfoRequest {
  string app_id = 1;
  int32 user_id = 2;
}
message GetUserInfoResponse{
  int32 code = 1;
  string msg = 2;
  UserInfo data = 3;
}
message UserInfo {
  string app_id = 1;
  string user_id = 2;
  string username = 3;
}
```

## 2. 生成代码
:::warning
更改后需要在项目根目录执行
```js
erpc gen
```
:::

## 3. 更新 service 代码
修改 internal/service 内对应代码，让对应 service 实现 pb 结构体即可
```go
// ...
type ShopUserCenterService struct {}
var _ v1.ShopUserCenterServiceServer = (*ShopUserCenterService)(nil)
// ...
// 新增理方法
func (s *ShopUserCenterService) GetUserInfo(ctx context.Context, req *v1.GetUserInfoRequest) (*v1.GetUserInfoResponse, error) {
    // 从 DB 获取信息
    user, err := s.repo.GetUser(ctx, req.GetAppId(), req.GetUserId())
    if err != nil {
        return nil, errors.New(400, "获取用户信息失败")
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
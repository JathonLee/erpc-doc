---
title: Error 管理
sidebar_position: 3
---
# 服务业务 error 管理

可以在项目 internal 目录下新增 errors/errors.go 文件,内部定义该服务专属的错误.

:::warning
  error包要指定 
  
  **import  "talkcheap.xiaoeknow.com/erpc/erpc/errors**
:::

示例：
```go title="internal/errors/errors.go"
package errors

import "talkcheap.xiaoeknow.com/erpc/erpc/errors"

var (
    ErrUserNotExist      = errors.New(10010, "用户不存在")
    ErrUserNotPermission = errors.New(10011, "用户无权限")
    // ...
)
```
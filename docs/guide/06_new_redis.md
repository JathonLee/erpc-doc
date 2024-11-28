---
sidebar_position: 6
---
# 新增 Redis


### 自动添加
:::tip **推荐使用方法**
erpc-cli 已支持自动生成 DB,推荐使用命令工具生成,无需关心初始化代码.

eg.
```js
erpc comp add redis -n fooRedis
```
命令详情 👉🏻 [**_erpc-cli-comp_**](../tools/erpc-cli.md#comp---组件功能)
:::


### 手动添加
示例: 

在该目录：`{项目根目录}/internal/repo/dao` 下新增 `{实例名称}_redis.go` 文件.

初始化完需要在：
> 1. `internal/config/config.go` 中新增参数；
> 2. `repo` 中新增 `NewXxxRepo` 方法参数；
> 3. `cmd/server/main.go` 中新增NewXxxDB 初始化逻辑，传入 Repo 参数；

代码示例：
```go title="material_center_redis.go"
package dao

import (
	"fmt"

	"{项目名称}/internal/config"
	"{项目名称}/internal/repo/model"

	"github.com/redis/go-redis/v9"
	eredis "talkcheap.xiaoeknow.com/erpc/erpc/contrib/redis"
)

type MaterialCenterRedis struct {
	client *redis.Client
}

func NewMaterialCenterRedis(cfg config.Redis) (*MaterialCenterRedis, error) {
	client, err := eredis.Dial(&redis.Options{
		Addr:     fmt.Sprintf("%s:%d", cfg.Host, cfg.Port),
		Password: cfg.Password,
		DB:       cfg.Database,
	})
	if err != nil {
		return nil, err
	}
	return &MaterialCenterRedis{client: client}, nil
}

func (mcr *MaterialCenterRedis) Get(ctx context.Context, appID string, mid string) (model.MaterialInfo, error) {
    // 执行查询 redis 操作
    // mcr.client.HGet(ctx, appID, mid)
}
```
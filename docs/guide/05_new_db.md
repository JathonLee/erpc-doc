---
sidebar_position: 5
---
# 新增 DB


### 自动添加(推荐)
:::tip **推荐使用方法**
erpc-cli 已支持自动生成 DB,推荐使用命令工具生成,无需关心初始化代码.

eg.
```js
erpc comp add gorm -n fooDB
```
命令详情 👉🏻 [**_erpc-cli-comp_**](../tools/erpc-cli.md#comp---组件功能)
:::

### 手动添加
示例: 

在该目录：`{项目根目录}/internal/repo/dao` 下新增 `{数据库}_gorm.go` 文件.

初始化完需要在：
> 1. `internal/config/config.go` 中新增参数；
> 2. `repo` 中新增 `NewXxxRepo` 方法参数；
> 3. `cmd/server/main.go` 中新增NewXxxDB 初始化逻辑，传入 Repo 参数；

代码示例：
```go title="material_center_gorm.go"
package dao

import (
	"{项目名称}/internal/config"
	"{项目名称}/internal/repo/model"

	"gorm.io/gorm"
	egorm "talkcheap.xiaoeknow.com/erpc/erpc/contrib/gorm"
)

type MaterialCenterDB struct {
	db *gorm.DB
	// 后续有新增 DB，例如素材中心-只读库之类的，可以放到这里统一查询/管理
}

func NewMaterialCenterDB(cfg config.DB) (*MaterialCenterDB, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		cfg.User, cfg.Password, cfg.Host, cfg.Port, 	cfg.Database,
	)
	db, err := egorm.DialMySQL(dsn)
	if err != nil {
		return nil, err
	}
	return &MaterialCenterDB{
		db: db,
	}, nil
}

// 获取素材信息，返回 model 里的 MaterialInfo 信息
func (mcdb *materialCenterDB) GetMaterialInfo(ctx context.Context, materialID string) (model.MaterialInfo, error)
	// 这里进行 DB 查询。后续如有只读库，这里的 db 可以改成只读库实例。
	// mcdb.db.Model(&model.MaterialInfo).Where().First()
	// mcdb.readDB.Model(&model.MaterialInfo).Where().First()
}

// 保存素材信息，返回保存后的 MaterialInfo 信息
func (mcdb *materialCenterDB) SaveMaterialInfo(ctx context.Context, info model.MaterialInfo) (model.MaterialInfo, error)
	// 这里进行 DB 创建。后续如有核心库只读库区分，这里的 db 可以改成核心库实例。
	// mcdb.db.Create(info)
	// mcdb.masterDB.Create(info)
}
```
---
title: changeLog
sidebar_position: 99
---
:::tip LOOK
- erpc cli 更新可通过 erpc upgrade 命令自动升级
- erpc 包可通过 go get -u talkcheap.xiaoeknow.com/erpc/erpc/... 方式升级erpc 下所有组件版本
:::

:::note ⏰ -> **2024/11/20**
### **_cmd/erpc - v0.1.12_**
- 组件自动化添加:  新增 erpc comp add 自动流程 (一行命令新增组件,无需修改初始化代码)
  - comp add (组件类型,eg: redis/gorm) -n(必填) (组件名称) -k(可选) (组件 env key 前缀)
- swag 新增页面内本地调用测试
  - erpc swag -p 8090 -t 8080 -f ./api.swagger.json
  - -p(非必填): swag ui 端口  (默认 8090)
  - -t(非必填): 本地服务目标服务端口 (默认 8080 - 与 erpc 框架默认端口一致)
:::

:::note ⏰ -> **2024/11/15**
### **_contrib/server/grpc-gateway - v0.1.15_**
- server/grpc-gateway: grpc-gateway 错误处理中新增错误日志打印
:::

:::note ⏰ -> **2024/10/21**
### **_erpc - v0.1.15_**
- metric: 新增 NamedCounter 和 NamedGauge 方法
:::

:::note ⏰ -> **2024/10/17**
### **_erpc - v0.1.14_**
- http: 新增设置灰度 id 方法
:::

:::note ⏰ -> **2024/10/16**
### **_contrib/server/grpc-gateway - v0.1.14_**
- server/grpc-gateway: 修复 Skywalking 没获取到父 Span 信息问题
:::

:::note ⏰ -> **2024/10/12**
### **_erpc - v0.1.13_**
- http: 取消 Skywalking HTTP 的 ClientOperationName 设置，改用组件默认生成
:::

:::note ⏰ -> **2024/10/10**
### **_erpc - v0.1.12_**
- http: 调整为默认记录请求失败日志
:::

:::note ⏰ -> **2024/10/09**
### **_contrib/gorm - v0.1.4_**
- gorm: 修复无法获取MySQL配置问题和新增 addr labal
:::

:::note ⏰ -> **2024/10/09**
### **_contrib/server/grpc-gateway - v0.1.12_**
- server/grpc-gateway: 调整 metrics 包
:::

:::note ⏰ -> **2024/10/08**
### **_contrib/redis - v0.1.2_**
- redis: 新增连接池 metrics 指标和调整 skywalking Hook 获取 tracer 位置
:::

:::note ⏰ -> **2024/09/30**
### **_erpc - v0.1.11_**
- http: 修复当 resp 为空时记录 debug 日志空指针 panic 问题
:::

:::note ⏰ -> **2024/09/30**
### **_contrib/server/grpc-gateway - v0.1.11_**
- server/grpc-gateway: 获取 Header 保留 X-Forwarded-For 和 X-Forwarded-Host
:::

:::note ⏰ -> **2024/09/20**
### **_contrib/gorm - v0.1.3_**
- contrib/gorm: 新增数据库指标
:::

:::note ⏰ -> **2024/09/19**
### **_erpc - v0.1.10_**
- metric&http: metric 包移至 erpc 主体中；http 调用新增调用错误指标
:::

:::note ⏰ -> **2024/09/14**
### **_contrib/server/grpc-gateway - v0.1.10_**
- server/grpc-gateway：修复 Recover 捕获时不修改 err 错误问题
:::

:::note ⏰ -> **2024/09/11**
### **_erpc - v0.1.9_**
- errors: 兼容 gRPC status 错误
:::

:::note ⏰ -> **2024/09/10**
### **_contrib/server/grpc-gateway - v0.1.9_**
- server/grpc-gateway: 新增全局校验中间件
:::

:::note ⏰ -> **2024/08/26**
### **_cmd/erpc - v1.0.8_**
- erpc 远端版本检测机制优化
- erpc gen 错误不展示,报错时展示相关错误信息
- 输入未知命令时，重复打印
- erpc swag 组件兼容多种输入路径方式 (ex: ./docs/* ;  docs/*)
- erpc 修复初始化项目选择组件时执行 ctrl + c 会出现终端乱行,光标消失的问题
- erpc cli 展示问题:
  - 创建项目时,运行提示的 二进制名称展示错误,应固定为 ./bin/server
  - 服务名称如有中划线，erpc new 时会提示
:::

:::note ⏰ -> **2024/08/21**
### **_cmd/erpc - v1.0.7_**
- erpc 新增远端版本更新检测. erpc 有更新时,会在命令行中提示
- erpc new 命令
  - 删除创建空模板时二次交互.选择组件时按 q 直接创建空模板,不会二次询问
  - 创建模板取消超时时间(原 60s)
  - 修复 windows 系统原终端在 new 命令时出现 "吞指令" 的问题
- erpc 优化部分错误提示
:::

:::note ⏰ -> **2024/08/20**
### **_cmd/erpc - v1.0.6_**
- erpc 新增命令 comp 
  - comp add Redis(组件名) material(实例名): 自动新增 redis,需要自行将New 代码放置初始化位置
  - comp list: 展示目前支持添加的所有组件名单
- erpc 新增 "无交互式" 创建项目. 实例: erpc new xiao_admin --comps Redis,Gorm  (创建拥有 Redis,Gorm 组件的项目目录)
- erpc 优化部分错误提示
:::
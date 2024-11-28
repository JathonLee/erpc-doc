---
sidebar_position: 2
---
# 开发流程

### 数据层调整

> - **dao -> repo -> service**

### 路由调整

> - **proto -> 执行 erpc gen -> service**

### 步骤

1. 初始化项目
2. 新增/修改路由
   - 修改服务 ProtoBuf 文件
   - 执行代码生成（erpc gen）
3. DB/Redis 添加新方法
   - 新增 DB/Redis 和相关 DB/Redis 逻辑代码
   - Repo 层新增业务逻辑,如有新增 DB/Redis,Repo 需要注入新增的实例
   - Service 层调用 repo 新方法即可

### Web 启动命令

- 默认：`./server`,不指定 Port 默认 8080,不指定 config 默认读取 `.env.production`.
- 如需指定：`./server -port 2345 -config .env.local`

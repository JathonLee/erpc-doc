---
sidebar_position: 3
---
# 请求链路

服务内部组件层的请求链路：

- **DAO**：从各个数据源（DB、Redis、HTTP）获取数据
- **Repo**：DAO 的数据组装,例如：从 Redis 获取缓存,再从 DB 获取
- **Service**：实现 API 接口,调用 Repo

![查看详细流程图](./img/image.png)

---
title: 拆分 ProtoBuf 文件
sidebar_position: 3
---
# 拆分文件

在一个 ProtoBuf 文件中即写 Service RPC 方法,又写 Message 结构体,导致一个文件过长,那么可以将各块的 Message 根据功能拆封出去. 下面介绍如何拆分.

#### 1. 确保 buf.gen.yaml 中有以下内容
```js title="buf.gen.yaml"
inputs:
  - directory: proto
```

#### 2. 创建新 ProtoBuf 文件
:::tip
路径与 service proto 相同,以素材过滤服务`material_filter`举例,新建个 `cdn message` 的 ProtoBuf 文件.
:::

```js title="proto/material_filter/v1/material_filter_cdn.proto"
syntax = "proto3";

package material_filter.v1;

option go_package = "material_filter/internal/gen/proto/material_filter/v1;v1";

message CDNPingRequest {}
message CDNPingResponse {}
```

#### 3. 在 Service 中的 ProtoBuf 文件,新增新文件的 import 语句.
```js
syntax = "proto3";

package material_filter.v1;

import "google/api/annotations.proto";
import "material_filter/v1/material_filter_message.proto"; // 新增该行

```
#### 4. 最后执行生成命令
```js
erpc gen
```
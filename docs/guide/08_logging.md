---
sidebar_position: 8
---
# 日志打印

日志规范详见：[日志规范](https://doc.weixin.qq.com/doc/w3_Ac8AyAY3AKkV765cGotSp6HVBdXSp?scode=ALQAnAdhAAYs4JyouJAc8AyAY3AKk)

## 日志配置

配置中的 `LOG_FILENAME` 如为空,则输出至标准输出.

## 如何打印日志

示例：
```go
package main

import "talkcheap.xiaoeknow.com/erpc/erpc/log"

func main() {
	ctx := context.Background()
	log.SetGlobalLogger(zerolog.NewLogger(
		// 配置日志轮转策略
		zerolog.WithWriter(&lumberjack.Logger{
			Filename:   config.Cfg.Log.Filename,
			MaxSize:    config.Cfg.Log.MaxSize,
			MaxBackups: config.Cfg.Log.MaxBackups,
			MaxAge:     config.Cfg.Log.MaxAge,
		}),
		// 配置日志最小等级为info
		zerolog.WithLevel(log.ParseLevel("info")),
	))
	
	log.Debug(ctx,
		"debug message", // 消息体
		"module", "http", // 单个 key-value
		"自定义日志Key", "自定义日志Value", // 单个 key-value
	) // 由于日志等级不满足最小日志等级，该日志不会打印
	log.Info(ctx, "info message", "module", "http", "自定义日志Key", 12)
	log.Warn(ctx, "warn message", "module", "http", "自定义日志Key", map[string]any{"key": "value"})
	log.Error(ctx, "error message", "module", "http", "自定义日志Key", []int{1, 2, 3}, "error", err)
	log.Fatal(ctx, "fatal message")
}
```
:::tip **日志样式**
- 目前日志会自动带上链路追踪的 TraceID/SpanID.
```json
{
    "time":"2024-08-14T19:02:51.370708986+08:00",
    "level":"DEBUG",
    "msg":"Debug message",
    "trace_id":"b8fabb7b5a2c11efb93400155d1f4057",
    "span_id":"0",
    "caller":"/app/main.go:20"
    "key1":"value1",
    "key2":233
}
```
:::



"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3698],{3157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"guide/logging","title":"\u65e5\u5fd7\u6253\u5370","description":"\u65e5\u5fd7\u89c4\u8303\u8be6\u89c1\uff1a\u65e5\u5fd7\u89c4\u8303","source":"@site/docs/guide/08_logging.md","sourceDirName":"guide","slug":"/guide/logging","permalink":"/erpc-doc/docs/guide/logging","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/08_logging.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"\u9519\u8bef\u5904\u7406","permalink":"/erpc-doc/docs/guide/error_handling"},"next":{"title":"\u6846\u67b6\u6269\u5c55","permalink":"/erpc-doc/docs/guide/framework_extension"}}');var i=t(4848),r=t(8453);const s={sidebar_position:8},a="\u65e5\u5fd7\u6253\u5370",c={},l=[{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u5982\u4f55\u6253\u5370\u65e5\u5fd7",id:"\u5982\u4f55\u6253\u5370\u65e5\u5fd7",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u65e5\u5fd7\u6253\u5370",children:"\u65e5\u5fd7\u6253\u5370"})}),"\n",(0,i.jsxs)(n.p,{children:["\u65e5\u5fd7\u89c4\u8303\u8be6\u89c1\uff1a",(0,i.jsx)(n.a,{href:"https://doc.weixin.qq.com/doc/w3_Ac8AyAY3AKkV765cGotSp6HVBdXSp?scode=ALQAnAdhAAYs4JyouJAc8AyAY3AKk",children:"\u65e5\u5fd7\u89c4\u8303"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u65e5\u5fd7\u914d\u7f6e",children:"\u65e5\u5fd7\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u914d\u7f6e\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"LOG_FILENAME"})," \u5982\u4e3a\u7a7a,\u5219\u8f93\u51fa\u81f3\u6807\u51c6\u8f93\u51fa."]}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55\u6253\u5370\u65e5\u5fd7",children:"\u5982\u4f55\u6253\u5370\u65e5\u5fd7"}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "talkcheap.xiaoeknow.com/erpc/erpc/log"\n\nfunc main() {\n\tctx := context.Background()\n\tlog.SetGlobalLogger(zerolog.NewLogger(\n\t\t// \u914d\u7f6e\u65e5\u5fd7\u8f6e\u8f6c\u7b56\u7565\n\t\tzerolog.WithWriter(&lumberjack.Logger{\n\t\t\tFilename:   config.Cfg.Log.Filename,\n\t\t\tMaxSize:    config.Cfg.Log.MaxSize,\n\t\t\tMaxBackups: config.Cfg.Log.MaxBackups,\n\t\t\tMaxAge:     config.Cfg.Log.MaxAge,\n\t\t}),\n\t\t// \u914d\u7f6e\u65e5\u5fd7\u6700\u5c0f\u7b49\u7ea7\u4e3ainfo\n\t\tzerolog.WithLevel(log.ParseLevel("info")),\n\t))\n\t\n\tlog.Debug(ctx,\n\t\t"debug message", // \u6d88\u606f\u4f53\n\t\t"module", "http", // \u5355\u4e2a key-value\n\t\t"\u81ea\u5b9a\u4e49\u65e5\u5fd7Key", "\u81ea\u5b9a\u4e49\u65e5\u5fd7Value", // \u5355\u4e2a key-value\n\t) // \u7531\u4e8e\u65e5\u5fd7\u7b49\u7ea7\u4e0d\u6ee1\u8db3\u6700\u5c0f\u65e5\u5fd7\u7b49\u7ea7\uff0c\u8be5\u65e5\u5fd7\u4e0d\u4f1a\u6253\u5370\n\tlog.Info(ctx, "info message", "module", "http", "\u81ea\u5b9a\u4e49\u65e5\u5fd7Key", 12)\n\tlog.Warn(ctx, "warn message", "module", "http", "\u81ea\u5b9a\u4e49\u65e5\u5fd7Key", map[string]any{"key": "value"})\n\tlog.Error(ctx, "error message", "module", "http", "\u81ea\u5b9a\u4e49\u65e5\u5fd7Key", []int{1, 2, 3}, "error", err)\n\tlog.Fatal(ctx, "fatal message")\n}\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"\u65e5\u5fd7\u6837\u5f0f"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u76ee\u524d\u65e5\u5fd7\u4f1a\u81ea\u52a8\u5e26\u4e0a\u94fe\u8def\u8ffd\u8e2a\u7684 TraceID/SpanID."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "time":"2024-08-14T19:02:51.370708986+08:00",\n    "level":"DEBUG",\n    "msg":"Debug message",\n    "trace_id":"b8fabb7b5a2c11efb93400155d1f4057",\n    "span_id":"0",\n    "caller":"/app/main.go:20"\n    "key1":"value1",\n    "key2":233\n}\n'})})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
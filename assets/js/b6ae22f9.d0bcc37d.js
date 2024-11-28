"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8154],{2014:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"best-practices/service-error-management","title":"Error \u7ba1\u7406","description":"\u53ef\u4ee5\u5728\u9879\u76ee internal \u76ee\u5f55\u4e0b\u65b0\u589e errors/errors.go \u6587\u4ef6,\u5185\u90e8\u5b9a\u4e49\u8be5\u670d\u52a1\u4e13\u5c5e\u7684\u9519\u8bef.","source":"@site/docs/best-practices/service-error-management.md","sourceDirName":"best-practices","slug":"/best-practices/service-error-management","permalink":"/erpc-doc/docs/best-practices/service-error-management","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/best-practices/service-error-management.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Error \u7ba1\u7406","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"ProtoBuf \u63a5\u53e3\u53c2\u6570\u6821\u9a8c","permalink":"/erpc-doc/docs/best-practices/protobuf-parameter-validation"},"next":{"title":"\u8865\u5145 OpenAPI \u63cf\u8ff0","permalink":"/erpc-doc/docs/best-practices/openapi-description"}}');var o=t(4848),s=t(8453);const c={title:"Error \u7ba1\u7406",sidebar_position:3},i="\u670d\u52a1\u4e1a\u52a1 error \u7ba1\u7406",a={},p=[];function d(e){const r={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"\u670d\u52a1\u4e1a\u52a1-error-\u7ba1\u7406",children:"\u670d\u52a1\u4e1a\u52a1 error \u7ba1\u7406"})}),"\n",(0,o.jsx)(r.p,{children:"\u53ef\u4ee5\u5728\u9879\u76ee internal \u76ee\u5f55\u4e0b\u65b0\u589e errors/errors.go \u6587\u4ef6,\u5185\u90e8\u5b9a\u4e49\u8be5\u670d\u52a1\u4e13\u5c5e\u7684\u9519\u8bef."}),"\n",(0,o.jsxs)(r.admonition,{type:"warning",children:[(0,o.jsx)(r.p,{children:"error\u5305\u8981\u6307\u5b9a"}),(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:'import  "talkcheap.xiaoeknow.com/erpc/erpc/errors'})})]}),"\n",(0,o.jsx)(r.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-go",metastring:'title="internal/errors/errors.go"',children:'package errors\n\nimport "talkcheap.xiaoeknow.com/erpc/erpc/errors"\n\nvar (\n    ErrUserNotExist      = errors.New(10010, "\u7528\u6237\u4e0d\u5b58\u5728")\n    ErrUserNotPermission = errors.New(10011, "\u7528\u6237\u65e0\u6743\u9650")\n    // ...\n)\n'})})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>i});var n=t(6540);const o={},s=n.createContext(o);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
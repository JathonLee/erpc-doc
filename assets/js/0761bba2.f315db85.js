"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[514],{304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"reference/ide-plugin-configuration","title":"IDE \u63d2\u4ef6\u914d\u7f6e","description":"\u63d2\u4ef6\u5730\u5740 \ud83d\udc49\ud83c\udffb VsCode-buf","source":"@site/docs/reference/ide-plugin-configuration.md","sourceDirName":"reference","slug":"/reference/ide-plugin-configuration","permalink":"/erpc-doc/docs/reference/ide-plugin-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/ide-plugin-configuration.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"IDE \u63d2\u4ef6\u914d\u7f6e","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"http client","permalink":"/erpc-doc/docs/reference/http-client"},"next":{"title":"\u6700\u4f73\u5b9e\u8df5","permalink":"/erpc-doc/docs/category/\u6700\u4f73\u5b9e\u8df5"}}');var a=r(4848),o=r(8453),s=r(1470),u=r(9365);const l={title:"IDE \u63d2\u4ef6\u914d\u7f6e",sidebar_position:3},i=void 0,c={},d=[];function f(e){const t={a:"a",admonition:"admonition",em:"em",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsx)(t.admonition,{title:"buf \u63d2\u4ef6",type:"tip",children:(0,a.jsxs)(s.A,{children:[(0,a.jsxs)(u.A,{value:"VsCode",label:"VsCode",children:[" ",(0,a.jsx)(t.strong,{children:"\u63d2\u4ef6\u5730\u5740"})," \ud83d\udc49\ud83c\udffb ",(0,a.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=bufbuild.vscode-buf",children:(0,a.jsx)(t.em,{children:"VsCode-buf"})})," "]}),(0,a.jsxs)(u.A,{value:"GoLand",label:"GoLand",children:[" ",(0,a.jsx)(t.strong,{children:"\u63d2\u4ef6\u5730\u5740"})," \ud83d\udc49\ud83c\udffb ",(0,a.jsx)(t.a,{href:"https://plugins.jetbrains.com/plugin/19147-buf-for-protocol-buffers",children:(0,a.jsx)(t.em,{children:"GoLand-buf"})})," "]})]})})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var o=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),a=r(4164),o=r(3104),s=r(6347),u=r(205),l=r(7485),i=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=f(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,d]=b({queryString:r,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=i??m;return p({value:e,tabValues:o})?e:null})();(0,u.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=u[r].value;a!==n&&(i(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:u.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function j(e){const t=(0,h.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>u});var n=r(6540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
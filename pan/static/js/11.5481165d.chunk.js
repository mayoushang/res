(this["webpackJsonpcloudreve-frontend-pro"]=this["webpackJsonpcloudreve-frontend-pro"]||[]).push([[11],{7774:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(5),o=a(0),c=a.n(o),i=a(119),l=a(38),p=a(32),d=Object(p.a)(o.createElement(o.Fragment,null,o.createElement("path",{d:"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"}),o.createElement("path",{d:"M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"})),"MenuBook"),f=a(58),u=a(216),m=a(128),b=a(209),s=a(9),g=a(8),h=a(4),k=a(478),v=a.n(k);a.d(t,"default",(function(){return E}));var w=Object(i.a)((function(e){return{readMeContainer:Object(n.a)({marginTop:30},e.breakpoints.down("sm"),{marginTop:e.spacing(2)}),readMeHeader:{padding:"10px 16px",display:"flex",color:e.palette.text.secondary},readMeIcon:{marginRight:8},content:{},"@global":{".for-container":{border:"none!important"},".for-container .for-editor .for-editor-edit":{height:"0!important"},".for-container > div:first-child":{borderTopLeftRadius:"0!important",borderTopRightRadius:"0!important"},".for-container .for-editor .for-panel .for-preview":{backgroundColor:e.palette.background.paper+"!important",color:e.palette.text.primary+"!important"},".for-container .for-markdown-preview pre":{backgroundColor:e.palette.background.default+"!important",color:"dark"===e.palette.type?"#fff !important":"rgba(0, 0, 0, 0.87);!important"},".for-container .for-markdown-preview code":{backgroundColor:e.palette.background.default+"!important"},".for-container .for-markdown-preview a":{color:"dark"===e.palette.type?"#67aeff !important":"#0366d6 !important"},".for-container .for-markdown-preview table th":{backgroundColor:e.palette.background.default+"!important"}}}}));function E(e){var t=w(),a=Object(l.a)(),n=Object(o.useState)(!0),i=Object(r.a)(n,2),p=i[0],k=i[1],E=Object(o.useState)(""),j=Object(r.a)(E,2),M=j[0],O=j[1],C=Object(g.d)(),R=Object(o.useCallback)((function(e,t,a,r){return C(Object(h.S)(e,t,a,r))}),[C]),y=c.a.createRef();return Object(o.useEffect)((function(){k(!0);var t="/"===e.file.path?e.file.path+e.file.name:e.file.path+"/"+e.file.name;s.b.get("/share/readme/"+e.share.key+"?path="+encodeURIComponent(t)).then((function(e){O(e.rawData.toString())})).catch((function(e){R("top","right","\u65e0\u6cd5\u8bfb\u53d6 README \u5185\u5bb9\uff0c"+e.message,"error")})).then((function(){k(!1)}))}),[e.share,e.file]),c.a.createElement(m.a,{className:t.readMeContainer},c.a.createElement("div",{className:t.readMeHeader},c.a.createElement(d,{className:t.readMeIcon}),c.a.createElement(f.a,null,e.file.name)),c.a.createElement(u.a,null),c.a.createElement("div",{className:t.content},p&&c.a.createElement(b.a,null),!p&&c.a.createElement(v.a,{ref:y,style:{boxShadow:"none",borderRadius:4,backgroundColor:a.palette.background.paper},height:"100%",value:M,onChange:function(e){return O(e)},preview:!0,toolbar:{}})))}}}]);
//# sourceMappingURL=11.5481165d.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1074:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(19)),o=a(n(24)),l=a(n(0)),p=a(n(2)),u=a(n(5)),c=a(n(1075)),d=u.default.bind(c.default),m={content:p.default.element,extensions:p.default.element,footer:p.default.element,header:p.default.element},i=function(e){var t,n,a,p,u=e.content,c=e.extensions,m=e.footer,i=e.header,s=(0,o.default)(e,["content","extensions","footer","header"]),f=d(["menu","fill",s.className]);return i&&(t=l.default.createElement("div",{className:d(["fit","header"])},i)),u&&(n=l.default.createElement("div",{className:d(["fill","content"])},l.default.createElement("div",{className:d("normalizer")},u))),c&&(a=l.default.createElement("div",{className:d(["fit","widget"])},c)),m&&(p=l.default.createElement("div",{className:d(["fit","footer"])},m)),l.default.createElement("div",(0,r.default)({},s,{className:f}),t,l.default.createElement("div",{className:d(["fill","body"])},a,n),p)};i.propTypes=m;var s=i;t.default=s},1075:function(e,t,n){e.exports={fit:"ApplicationMenuLayout-module__fit___2_ZyC",fill:"ApplicationMenuLayout-module__fill___-mAIP",menu:"ApplicationMenuLayout-module__menu___2MW9V",header:"ApplicationMenuLayout-module__header___rjp8P",footer:"ApplicationMenuLayout-module__footer___3YHVr",body:"ApplicationMenuLayout-module__body___2a4kY",widgets:"ApplicationMenuLayout-module__widgets___33Lug",content:"ApplicationMenuLayout-module__content___dGOMr",normalizer:"ApplicationMenuLayout-module__normalizer___3ImZQ"}},1386:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),o=n(1022),l=n.n(o),p=function(e){var t=e.url;return r.a.createElement(l.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-menu-layout",name:"terra-application-menu-layout",version:"3.23.0",url:t})}},1522:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(5)),l=a(n(1074)),p=a(n(1523)),u=a(n(1525)),c=o.default.bind(u.default),d=function(){return r.default.createElement("div",{className:c("content-wrapper")},r.default.createElement(l.default,{header:r.default.createElement(p.default,{text:"Header",type:"header"}),footer:r.default.createElement(p.default,{text:"Footer",type:"footer"}),extensions:r.default.createElement(p.default,{text:"Extensions",type:"extensions"}),content:r.default.createElement(p.default,{text:"Content"})}))};t.default=d},1523:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(5)),l=a(n(2)),p=a(n(1524)),u=o.default.bind(p.default),c={text:l.default.string,type:l.default.string},d=function(e){var t=e.text,n=e.type;return r.default.createElement("div",{className:u("wrapper1-".concat(n))},r.default.createElement("div",{className:u("wrapper2")},r.default.createElement("div",{className:u("wrapper3")},r.default.createElement("h3",null,t))))};d.propTypes=c,d.defaultProps={text:"PlaceHolder",type:"default"};var m=d;t.default=m},1524:function(e,t,n){e.exports={"wrapper1-default":"Placeholder-module__wrapper1-default___92Yyq","wrapper1-header":"Placeholder-module__wrapper1-header___3TN8T","wrapper1-footer":"Placeholder-module__wrapper1-footer___nR26y","wrapper1-extensions":"Placeholder-module__wrapper1-extensions___3OiWL",wrapper2:"Placeholder-module__wrapper2___2cj5m",wrapper3:"Placeholder-module__wrapper3___2Qfvu"}},1525:function(e,t,n){e.exports={"content-wrapper":"MenuWireframe-module__content-wrapper___2C--N"}},2138:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(19),r=n.n(a),o=n(24),l=n.n(o),p=n(0),u=n.n(p),c=n(361),d=n(1386),m=n(1034),i=n.n(m),s=function(){return Object(c.mdx)(i.a,{rows:[{name:"content",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Content element to be placed within the fill area of the header."))}return t.isMDXComponent=!0,t({})}},{name:"extensions",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Extensions element to be placed before the end of the header."))}return t.isMDXComponent=!0,t({})}},{name:"footer",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Footer element to be placed at the end of the header."))}return t.isMDXComponent=!0,t({})}},{name:"header",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Header element to be placed at the start of the header."))}return t.isMDXComponent=!0,t({})}}]})},f=n(1522),x=n.n(f),b={};function _(e){var t=e.components,n=l()(e,["components"]);return Object(c.mdx)("wrapper",r()({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport classNames from \'classnames/bind\';\nimport ApplicationMenuLayout from \'terra-application-menu-layout\';\nimport PlaceHolder from \'terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder\';\nimport styles from \'./MenuWireframe.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst Menu = () => (\n  <div className={cx(\'content-wrapper\')}>\n    <ApplicationMenuLayout\n      header={<PlaceHolder text="Header" type="header" />}\n      footer={<PlaceHolder text="Footer" type="footer" />}\n      extensions={<PlaceHolder text="Extensions" type="extensions" />}\n      content={<PlaceHolder text="Content" />}\n    />\n  </div>\n);\n\nexport default Menu;\n\n')))}_.isMDXComponent=!0;var y=n(1024),j=n.n(y),O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return u.a.createElement(j.a,{title:t||"Menu Wireframe",description:n,example:u.a.createElement(x.a,null),exampleSrc:u.a.createElement(_,null),isExpanded:a})},h={};function v(e){var t=e.components,n=l()(e,["components"]);return Object(c.mdx)("wrapper",r()({},h,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(d.a,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"terra-application-menu-layout"},"Terra Application Menu Layout"),Object(c.mdx)("p",null,"This component renders an application menu layout. To be used with terra-layout or terra-navigation-layout."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",r()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-menu-layout"))))),Object(c.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(c.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",r()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(c.mdx)("th",r()({parentName:"tr"},{align:null}),"Version"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"react"),Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"react-dom"),Object(c.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")))),Object(c.mdx)("h2",{id:"component-features"},"Component Features"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",r()({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(O,{mdxType:"MenuWireframe"}),Object(c.mdx)("h2",{id:"application-menu-layout-props-table"},"Application menu layout props table"),Object(c.mdx)(s,{mdxType:"MenuLayoutPropsTable"}))}v.isMDXComponent=!0}}]);
//# sourceMappingURL=143-3bb8a47486723fdbbf61.js.map
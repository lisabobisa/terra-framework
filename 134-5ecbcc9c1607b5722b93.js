(window.webpackJsonp=window.webpackJsonp||[]).push([[134,133,135,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171],{1022:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(2)),o=u(a(5)),n=u(a(1023));function u(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(n.default),_={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,a=e.name,r=e.url,o=e.version,n=l.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},l.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(o))),u=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},n,u)};c.propTypes=_;var s=c;t.default=s},1023:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1024:function(e,t,a){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=r?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}a.default=e,t&&t.set(e,a);return a}(a(0)),o=s(a(2)),n=s(a(5)),u=a(136),d=s(a(1031)),_=s(a(363)),c=s(a(1032));function s(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],l=!0,r=!1,o=void 0;try{for(var n,u=e[Symbol.iterator]();!(l=(n=u.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){r=!0,o=e}finally{try{l||null==u.return||u.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var f=n.default.bind(c.default),b={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},y=function(e){var t=e.example,a=e.exampleSrc,l=e.title,o=e.description,n=e.isExpanded,c=m((0,r.useState)(n),2),s=c[0],i=c[1],p=m((0,r.useState)(!1),2),b=p[0],y=p[1],h=r.default.useContext(u.ThemeContext);return r.default.createElement("div",{className:f("template",h.className)},r.default.createElement("div",{className:f("header")},l&&r.default.createElement("h2",{className:f("title")},l)),r.default.createElement("div",{className:f("content",{"dynamic-content":b})},o&&r.default.createElement("div",{className:f("description")},o),t),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:function(){return y(!b)}},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:function(){return i(!s)}},r.default.createElement(d.default,{className:f("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(_.default,{className:f("chevron")}))),s&&r.default.createElement("div",{className:f("code")},a)))};y.propTypes=b,y.defaultProps={isExpanded:!1};var h=y;t.default=h},1031:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(0)),r=o(a(39));function o(e){return e&&e.__esModule?e:{default:e}}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=n({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=u;t.default=d},1032:function(e,t,a){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1034:function(e,t,a){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=r?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}a.default=e,t&&t.set(e,a);return a}(a(0)),o=_(a(2)),n=_(a(5)),u=a(136),d=_(a(1037));function _(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}var s=n.default.bind(d.default),i={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},m=function(e){var t=e.rows,a=(0,r.useContext)(u.ThemeContext);return r.default.createElement("table",{className:s("table",a.className)},r.default.createElement("thead",null,r.default.createElement("tr",{className:s("tr")},r.default.createElement("th",{className:s("th")},"Prop Name"),r.default.createElement("th",{className:s("th")},"Type"),r.default.createElement("th",{className:s("th")},"Is Required"),r.default.createElement("th",{className:s("th")},"Default Value"),r.default.createElement("th",{className:s("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:s("tr","props-tr"),key:e.name},r.default.createElement("td",{className:s(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:s(["td","props-td"])},e.type()),r.default.createElement("td",{className:s(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:s(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:s(["td","props-td"])},e.description()))}))))};m.propTypes=i;var p=m;t.default=p},1037:function(e,t,a){e.exports={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3s97-","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1050:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(2)),o=u(a(5)),n=u(a(1076));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.default.bind(n.default),s={variant:r.default.oneOf(["light","dark"]),title:r.default.string},i=function(e){var t=e.variant,a=e.title,r=_(e,["variant","title"]),o=c(["placeholder",r.className]),n=c(["inner","is-".concat(t)]);return l.default.createElement("div",d({},r,{className:o}),l.default.createElement("div",{className:n},l.default.createElement("h2",null,a)))};i.propTypes=s,i.defaultProps={variant:"dark",title:""};var m=i;t.default=m},1076:function(e,t,a){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}}}]);
//# sourceMappingURL=134-5ecbcc9c1607b5722b93.js.map
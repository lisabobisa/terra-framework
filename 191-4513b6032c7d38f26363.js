(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1027:function(e,t,r){e.exports={"form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},1029:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),o=i(r(2)),a=i(r(5)),l=i(r(1027));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=a.default.bind(l.default),g={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,name:o.default.string,pattern:o.default.string,placeholder:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},v={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,placeholder:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},O=function(e){function t(){return p(this,t),m(this,h(t).apply(this,arguments))}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,o=t.disabled,a=t.isIncomplete,l=t.isInvalid,i=t.onBlur,u=t.onChange,p=t.onFocus,b=t.name,m=t.pattern,h=t.placeholder,y=t.refCallback,g=t.required,v=t.type,O=t.ariaLabel,w=t.value,I=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},f(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","placeholder","refCallback","required","type","ariaLabel","value"])),j=_(["form-input",{"form-error":l},{"form-incomplete":a&&g&&!l},I.className]);return I&&Object.prototype.hasOwnProperty.call(I,"aria-label")?e=O||I["aria-label"]:O&&(e=O),I["aria-label"]=e,g&&(I["aria-required"]="true"),void 0!==w?I.value=w:void 0!==r&&(I.defaultValue=r),n.default.createElement("input",d({},I,{ref:function(e){y&&y(e)},name:b,type:v,pattern:m,placeholder:h,onBlur:i,onChange:u,onFocus:p,disabled:o,required:g,className:j}))}}])&&b(r.prototype,o),a&&b(r,a),t}(n.default.Component);O.propTypes=g,O.defaultProps=v,O.isInput=!0;var w=O;t.default=w},1046:function(e,t,r){"use strict";var n=r(13),o=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(170)),l=o(r(19)),i=o(r(24)),u=n(r(0)),d=o(r(2)),c=r(9),s=o(r(11)),f=o(r(5)),p=o(r(8)),b=o(r(173)),m=o(r(365)),h=o(r(172)),y=o(r(1057)),_=o(r(1051));function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=f.default.bind(_.default),w={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},I={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},j=function(e){var t=e.dayAttributes,r=e.disabled,n=e.displayFormat,o=e.error,a=e.help,d=e.hideRequired,f=e.isIncomplete,_=e.isInline,g=e.isInvalid,w=e.isLegendHidden,I=e.legend,j=e.legendAttributes,F=e.monthAttributes,E=(e.maxWidth,e.name),P=e.onBlur,q=e.onChange,T=e.onFocus,D=e.required,A=e.showOptional,x=e.value,C=e.yearAttributes,N=(0,i.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),k=(0,u.useRef)((0,b.default)()),S=u.default.useContext(p.default),L=(0,s.default)(O("date-input-field",{"is-inline":_},S.className),N.className),B=(0,s.default)(O("legend",S.className),j.className),R=a?"terra-date-input-field-description-help-".concat(k.current):"",M=g&&o?"terra-date-input-field-description-error-".concat(k.current):"",W="".concat(M," ").concat(R),H=F["aria-describedby"]?F["aria-describedby"]:"",V="".concat(W," ").concat(H),J=t["aria-describedby"]?t["aria-describedby"]:"",z="".concat(W," ").concat(J),G=C["aria-describedby"]?C["aria-describedby"]:"",Z="".concat(W," ").concat(G),Q=u.default.createElement("legend",{className:O(["legend-group",{"legend-group-hidden":w}])},u.default.createElement("div",(0,l.default)({},j,{className:B}),g&&u.default.createElement("span",{className:O("error-icon")},u.default.createElement(m.default,null)),D&&(g||!d)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:O("required")},"*"),u.default.createElement(c.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return u.default.createElement(h.default,{text:e})}))),I,D&&!g&&d&&u.default.createElement("span",{className:O("required-hidden")},"*"),A&&!D&&u.default.createElement(c.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return u.default.createElement("span",{className:O("optional")},e)})),!g&&u.default.createElement("span",{className:O("error-icon-hidden")})));return u.default.createElement("fieldset",(0,l.default)({},N,{className:L}),Q,u.default.createElement(y.default,{name:E,onChange:q,onBlur:P,onFocus:T,value:x,displayFormat:n,disabled:r,isInvalid:g,isIncomplete:f,required:D,monthAttributes:v(v({},F),{"aria-describedby":V}),dayAttributes:v(v({},t),{"aria-describedby":z}),yearAttributes:v(v({},C),{"aria-describedby":Z})}),g&&o&&u.default.createElement("div",{id:M,className:O("error-text")},o),a&&u.default.createElement("div",{id:R,className:O("help-text")},a))};j.propTypes=w,j.defaultProps=I;var F=j;t.default=F},1051:function(e,t,r){e.exports={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___3o9p-","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___23J9g","date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}},1874:function(e,t,r){"use strict";var n=r(13),o=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(86)),l=n(r(0)),i=o(r(1046)),u=function(){var e=(0,l.useState)("1999-03-10"),t=(0,a.default)(e,2),r=t[0],n=t[1],o=(0,l.useState)(!1),u=(0,a.default)(o,2),d=u[0],c=u[1];return l.default.createElement("div",null,l.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return n(t)},required:!0,hideRequired:!0,error:"Error message",help:"Help message",isInvalid:d}),l.default.createElement("p",null,"DateInputField Value: ".concat(r)),l.default.createElement("button",{type:"button",onClick:function(){return c((function(e){return!e}))}},"Toggle isInvalid"))};t.default=u},362:function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var u,d=[],c=!1,s=-1;function f(){c&&u&&(c=!1,u.length?d=u.concat(d):s=-1,d.length&&p())}function p(){if(!c){var e=i(f);c=!0;for(var t=d.length;t;){for(u=d,d=[];++s<t;)u&&u[s].run();s=-1,t=d.length}u=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];d.push(new b(e,t)),1!==d.length||c||i(p)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);
//# sourceMappingURL=191-4513b6032c7d38f26363.js.map
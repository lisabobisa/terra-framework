(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1027:function(e,t,n){e.exports={"form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},1029:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(2)),o=i(n(5)),l=i(n(1027));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=o.default.bind(l.default),_={defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,name:a.default.string,pattern:a.default.string,placeholder:a.default.string,refCallback:a.default.func,required:a.default.bool,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),ariaLabel:a.default.string},v={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,placeholder:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},O=function(e){function t(){return p(this,t),m(this,h(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,a=t.disabled,o=t.isIncomplete,l=t.isInvalid,i=t.onBlur,u=t.onChange,p=t.onFocus,b=t.name,m=t.pattern,h=t.placeholder,y=t.refCallback,_=t.required,v=t.type,O=t.ariaLabel,w=t.value,I=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","placeholder","refCallback","required","type","ariaLabel","value"])),j=g(["form-input",{"form-error":l},{"form-incomplete":o&&_&&!l},I.className]);return I&&Object.prototype.hasOwnProperty.call(I,"aria-label")?e=O||I["aria-label"]:O&&(e=O),I["aria-label"]=e,_&&(I["aria-required"]="true"),void 0!==w?I.value=w:void 0!==n&&(I.defaultValue=n),r.default.createElement("input",d({},I,{ref:function(e){y&&y(e)},name:b,type:v,pattern:m,placeholder:h,onBlur:i,onChange:u,onFocus:p,disabled:a,required:_,className:j}))}}])&&b(n.prototype,a),o&&b(n,o),t}(r.default.Component);O.propTypes=_,O.defaultProps=v,O.isInput=!0;var w=O;t.default=w},1046:function(e,t,n){"use strict";var r=n(13),a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(170)),l=a(n(19)),i=a(n(24)),u=r(n(0)),d=a(n(2)),c=n(9),s=a(n(11)),f=a(n(5)),p=a(n(8)),b=a(n(173)),m=a(n(365)),h=a(n(172)),y=a(n(1057)),g=a(n(1051));function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=f.default.bind(g.default),w={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},I={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},j=function(e){var t=e.dayAttributes,n=e.disabled,r=e.displayFormat,a=e.error,o=e.help,d=e.hideRequired,f=e.isIncomplete,g=e.isInline,_=e.isInvalid,w=e.isLegendHidden,I=e.legend,j=e.legendAttributes,E=e.monthAttributes,F=(e.maxWidth,e.name),P=e.onBlur,T=e.onChange,q=e.onFocus,D=e.required,A=e.showOptional,C=e.value,x=e.yearAttributes,S=(0,i.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),N=(0,u.useRef)((0,b.default)()),k=u.default.useContext(p.default),L=(0,s.default)(O("date-input-field",{"is-inline":g},k.className),S.className),B=(0,s.default)(O("legend",k.className),j.className),R=o?"terra-date-input-field-description-help-".concat(N.current):"",M=_&&a?"terra-date-input-field-description-error-".concat(N.current):"",H="".concat(M," ").concat(R),V=E["aria-describedby"]?E["aria-describedby"]:"",W="".concat(H," ").concat(V),J=t["aria-describedby"]?t["aria-describedby"]:"",z="".concat(H," ").concat(J),G=x["aria-describedby"]?x["aria-describedby"]:"",Z="".concat(H," ").concat(G),Q=u.default.createElement("legend",{className:O(["legend-group",{"legend-group-hidden":w}])},u.default.createElement("div",(0,l.default)({},j,{className:B}),_&&u.default.createElement("span",{className:O("error-icon")},u.default.createElement(m.default,null)),D&&(_||!d)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:O("required")},"*"),u.default.createElement(c.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return u.default.createElement(h.default,{text:e})}))),I,D&&!_&&d&&u.default.createElement("span",{className:O("required-hidden")},"*"),A&&!D&&u.default.createElement(c.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return u.default.createElement("span",{className:O("optional")},e)})),!_&&u.default.createElement("span",{className:O("error-icon-hidden")})));return u.default.createElement("fieldset",(0,l.default)({},S,{className:L}),Q,u.default.createElement(y.default,{name:F,onChange:T,onBlur:P,onFocus:q,value:C,displayFormat:r,disabled:n,isInvalid:_,isIncomplete:f,required:D,monthAttributes:v(v({},E),{"aria-describedby":W}),dayAttributes:v(v({},t),{"aria-describedby":z}),yearAttributes:v(v({},x),{"aria-describedby":Z})}),_&&a&&u.default.createElement("div",{id:M,className:O("error-text")},a),o&&u.default.createElement("div",{id:R,className:O("help-text")},o))};j.propTypes=w,j.defaultProps=I;var E=j;t.default=E},1051:function(e,t,n){e.exports={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___3o9p-","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___23J9g","date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}},1877:function(e,t,n){"use strict";var r=n(13),a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(86)),l=r(n(0)),i=a(n(1046)),u=function(){var e=(0,l.useState)("1999-03-10"),t=(0,o.default)(e,2),n=t[0],r=t[1],a=(0,l.useState)("1999-03-10"),u=(0,o.default)(a,2),d=u[0],c=u[1],s=(0,l.useState)(!0),f=(0,o.default)(s,2),p=f[0],b=f[1],m=(0,l.useState)(!1),h=(0,o.default)(m,2),y=h[0],g=h[1];return l.default.createElement("div",null,l.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:n,onChange:function(e,t){return r(t)},isInline:p,isInvalid:y,error:"Error message",help:"Help message"}),l.default.createElement(i.default,{legend:"Legend text",name:"date-input-value",value:d,onChange:function(e,t){return c(t)},isInline:p,isInvalid:y,error:"Error message",help:"Help message"}),l.default.createElement("p",null,"First DateInputField Value: ".concat(n)),l.default.createElement("p",null,"Second DateInputField Value: ".concat(d)),l.default.createElement("button",{type:"button",onClick:function(){return b((function(e){return!e}))}},"Toggle isInline"),l.default.createElement("button",{type:"button",onClick:function(){return g((function(e){return!e}))}},"Toggle isInvalid"))};t.default=u},362:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var u,d=[],c=!1,s=-1;function f(){c&&u&&(c=!1,u.length?d=u.concat(d):s=-1,d.length&&p())}function p(){if(!c){var e=i(f);c=!0;for(var t=d.length;t;){for(u=d,d=[];++s<t;)u&&u[s].run();s=-1,t=d.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new b(e,t)),1!==d.length||c||i(p)},b.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}}]);
//# sourceMappingURL=193-6ab3df8878d5e40ccfc9.js.map
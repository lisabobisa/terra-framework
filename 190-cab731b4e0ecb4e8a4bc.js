(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1027:function(e,t,r){e.exports={"form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},1029:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(0)),o=l(r(2)),a=l(r(5)),u=l(r(1027));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=a.default.bind(u.default),v={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,name:o.default.string,pattern:o.default.string,placeholder:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},_={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,placeholder:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},O=function(e){function t(){return p(this,t),m(this,h(t).apply(this,arguments))}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,o=t.disabled,a=t.isIncomplete,u=t.isInvalid,l=t.onBlur,i=t.onChange,p=t.onFocus,b=t.name,m=t.pattern,h=t.placeholder,y=t.refCallback,v=t.required,_=t.type,O=t.ariaLabel,w=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},f(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","placeholder","refCallback","required","type","ariaLabel","value"])),I=g(["form-input",{"form-error":u},{"form-incomplete":a&&v&&!u},j.className]);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=O||j["aria-label"]:O&&(e=O),j["aria-label"]=e,v&&(j["aria-required"]="true"),void 0!==w?j.value=w:void 0!==r&&(j.defaultValue=r),n.default.createElement("input",d({},j,{ref:function(e){y&&y(e)},name:b,type:_,pattern:m,placeholder:h,onBlur:l,onChange:i,onFocus:p,disabled:o,required:v,className:I}))}}])&&b(r.prototype,o),a&&b(r,a),t}(n.default.Component);O.propTypes=v,O.defaultProps=_,O.isInput=!0;var w=O;t.default=w},1046:function(e,t,r){"use strict";var n=r(13),o=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(170)),u=o(r(19)),l=o(r(24)),i=n(r(0)),d=o(r(2)),c=r(9),s=o(r(11)),f=o(r(5)),p=o(r(8)),b=o(r(173)),m=o(r(365)),h=o(r(172)),y=o(r(1057)),g=o(r(1051));function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=f.default.bind(g.default),w={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},j={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},I=function(e){var t=e.dayAttributes,r=e.disabled,n=e.displayFormat,o=e.error,a=e.help,d=e.hideRequired,f=e.isIncomplete,g=e.isInline,v=e.isInvalid,w=e.isLegendHidden,j=e.legend,I=e.legendAttributes,F=e.monthAttributes,E=(e.maxWidth,e.name),C=e.onBlur,T=e.onChange,P=e.onFocus,q=e.required,D=e.showOptional,A=e.value,x=e.yearAttributes,k=(0,l.default)(e,["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"]),B=(0,i.useRef)((0,b.default)()),N=i.default.useContext(p.default),S=(0,s.default)(O("date-input-field",{"is-inline":g},N.className),k.className),R=(0,s.default)(O("legend",N.className),I.className),L=a?"terra-date-input-field-description-help-".concat(B.current):"",M=v&&o?"terra-date-input-field-description-error-".concat(B.current):"",W="".concat(M," ").concat(L),H=F["aria-describedby"]?F["aria-describedby"]:"",V="".concat(W," ").concat(H),J=t["aria-describedby"]?t["aria-describedby"]:"",z="".concat(W," ").concat(J),G=x["aria-describedby"]?x["aria-describedby"]:"",Z="".concat(W," ").concat(G),Q=i.default.createElement("legend",{className:O(["legend-group",{"legend-group-hidden":w}])},i.default.createElement("div",(0,u.default)({},I,{className:R}),v&&i.default.createElement("span",{className:O("error-icon")},i.default.createElement(m.default,null)),q&&(v||!d)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:O("required")},"*"),i.default.createElement(c.FormattedMessage,{id:"Terra.date.input.required"},(function(e){return i.default.createElement(h.default,{text:e})}))),j,q&&!v&&d&&i.default.createElement("span",{className:O("required-hidden")},"*"),D&&!q&&i.default.createElement(c.FormattedMessage,{id:"Terra.date.input.optional"},(function(e){return i.default.createElement("span",{className:O("optional")},e)})),!v&&i.default.createElement("span",{className:O("error-icon-hidden")})));return i.default.createElement("fieldset",(0,u.default)({},k,{className:S}),Q,i.default.createElement(y.default,{name:E,onChange:T,onBlur:C,onFocus:P,value:A,displayFormat:n,disabled:r,isInvalid:v,isIncomplete:f,required:q,monthAttributes:_(_({},F),{"aria-describedby":V}),dayAttributes:_(_({},t),{"aria-describedby":z}),yearAttributes:_(_({},x),{"aria-describedby":Z})}),v&&o&&i.default.createElement("div",{id:M,className:O("error-text")},o),a&&i.default.createElement("div",{id:L,className:O("help-text")},a))};I.propTypes=w,I.defaultProps=j;var F=I;t.default=F},1051:function(e,t,r){e.exports={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___3o9p-","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___23J9g","date-input-field":"DateInputField-module__date-input-field___3OhAN","is-inline":"DateInputField-module__is-inline___3ybbS","legend-group":"DateInputField-module__legend-group___3EFZW","legend-group-hidden":"DateInputField-module__legend-group-hidden___1BTOn",legend:"DateInputField-module__legend___12gOI","error-icon":"DateInputField-module__error-icon___sBkYW","error-icon-hidden":"DateInputField-module__error-icon-hidden___CTMdH",required:"DateInputField-module__required___3PcZR","required-hidden":"DateInputField-module__required-hidden___xq1oX",optional:"DateInputField-module__optional___2G3Od","help-text":"DateInputField-module__help-text___bmpIC","error-text":"DateInputField-module__error-text____FqDM"}},1873:function(e,t,r){"use strict";var n=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(26)),a=n(r(27)),u=n(r(31)),l=n(r(28)),i=n(r(29)),d=n(r(30)),c=n(r(0)),s=n(r(1046));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var p=function(e){(0,l.default)(r,e);var t=f(r);function r(e){var n;return(0,o.default)(this,r),(n=t.call(this,e)).state={blurTriggerCount:0,focusTriggerCount:0,value:""},n.handleBlur=n.handleBlur.bind((0,u.default)(n)),n.handleFocus=n.handleFocus.bind((0,u.default)(n)),n.blurCount=0,n.focusCount=0,n}return(0,a.default)(r,[{key:"handleBlur",value:function(){this.blurCount+=1,this.setState({blurTriggerCount:this.blurCount})}},{key:"handleFocus",value:function(){this.focusCount+=1,this.setState({focusTriggerCount:this.focusCount})}},{key:"handleOnChangeFocus",value:function(e,t){this.setState({value:t})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:"date-input-value"},c.default.createElement("h3",null,"onBlur Trigger Count:",c.default.createElement("span",{id:"blur-count"},this.state.blurTriggerCount),c.default.createElement("br",null),c.default.createElement("br",null),"onFocus Trigger Count:",c.default.createElement("span",{id:"focus-count"},this.state.focusTriggerCount))),c.default.createElement(s.default,{legend:"Legend text",name:"date-input",value:this.state.value,onChange:this.handleOnChange,onBlur:this.handleBlur,onFocus:this.handleFocus,error:"Error message",help:"Help message"}))}}]),r}(c.default.Component);t.default=p},362:function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var i,d=[],c=!1,s=-1;function f(){c&&i&&(c=!1,i.length?d=i.concat(d):s=-1,d.length&&p())}function p(){if(!c){var e=l(f);c=!0;for(var t=d.length;t;){for(i=d,d=[];++s<t;)i&&i[s].run();s=-1,t=d.length}i=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];d.push(new b(e,t)),1!==d.length||c||l(p)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);
//# sourceMappingURL=190-cab731b4e0ecb4e8a4bc.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1027:function(e,t,r){e.exports={"form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},1029:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),o=i(r(2)),a=i(r(5)),l=i(r(1027));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=a.default.bind(l.default),O={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,name:o.default.string,pattern:o.default.string,placeholder:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},g={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,placeholder:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},w=function(e){function t(){return p(this,t),h(this,y(t).apply(this,arguments))}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,o=t.disabled,a=t.isIncomplete,l=t.isInvalid,i=t.onBlur,u=t.onChange,p=t.onFocus,b=t.name,h=t.pattern,y=t.placeholder,m=t.refCallback,O=t.required,g=t.type,w=t.ariaLabel,_=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},d(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","placeholder","refCallback","required","type","ariaLabel","value"])),x=v(["form-input",{"form-error":l},{"form-incomplete":a&&O&&!l},j.className]);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=w||j["aria-label"]:w&&(e=w),j["aria-label"]=e,O&&(j["aria-required"]="true"),void 0!==_?j.value=_:void 0!==r&&(j.defaultValue=r),n.default.createElement("input",s({},j,{ref:function(e){m&&m(e)},name:b,type:g,pattern:h,placeholder:y,onBlur:i,onChange:u,onFocus:p,disabled:o,required:O,className:x}))}}])&&b(r.prototype,o),a&&b(r,a),t}(n.default.Component);w.propTypes=O,w.defaultProps=g,w.isInput=!0;var _=w;t.default=_},1395:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(0)),o=u(r(2)),a=u(r(365)),l=u(r(1056)),i=u(r(1396));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={inputId:o.default.string.isRequired,label:o.default.node.isRequired,defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,error:o.default.node,errorIcon:o.default.element,help:o.default.node,hideRequired:o.default.bool,inputAttrs:o.default.object,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLabelHidden:o.default.bool,labelAttrs:o.default.object,maxWidth:o.default.string,onChange:o.default.func,placeholder:o.default.string,required:o.default.bool,showOptional:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number])},d={defaultValue:void 0,disabled:!1,error:null,errorIcon:n.default.createElement(a.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,showOptional:!1,value:void 0},p=function(e){var t,r=e.defaultValue,o=e.disabled,a=e.error,u=e.errorIcon,f=e.help,d=e.hideRequired,p=e.inputAttrs,b=e.inputId,h=e.isIncomplete,y=e.isInline,m=e.isInvalid,v=e.isLabelHidden,O=e.label,g=e.labelAttrs,w=e.maxWidth,_=e.required,j=e.showOptional,x=e.onChange,I=e.placeholder,P=e.value,C=c(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","required","showOptional","onChange","placeholder","value"]);return f&&a&&m?t="".concat(b,"-error ").concat(b,"-help"):(f&&(t="".concat(b,"-help")),a&&m&&(t="".concat(b,"-error"))),n.default.createElement(l.default,s({},C,{label:O,labelAttrs:g,error:a,errorIcon:u,help:f,hideRequired:d,required:_,showOptional:j,isInvalid:m,isInline:y,isLabelHidden:v,htmlFor:b,maxWidth:w}),n.default.createElement(i.default,s({},p,{disabled:p.disabled||o,id:b,isIncomplete:h,onChange:x,placeholder:I||p.placeholder,value:P,defaultValue:r,"aria-describedby":t})))};p.propTypes=f,p.defaultProps=d;var b=p;t.default=b},1396:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var n=i(r(0)),o=i(r(2)),a=i(r(5)),l=i(r(1397));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=a.default.bind(l.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var v={small:2,medium:5,large:10},O={ariaLabel:o.default.string,defaultValue:o.default.string,disabled:o.default.bool,isAutoResizable:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,name:o.default.string,onChange:o.default.func,onFocus:o.default.func,placeholder:o.default.string,required:o.default.bool,rows:o.default.number,size:o.default.oneOf(["small","medium","large","full"]),value:o.default.string,refCallback:o.default.func,disableResize:o.default.bool},g={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,placeholder:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},w=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=b(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?h(n):o).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),r.onChange=r.onChange.bind(h(r)),r.onFocus=r.onFocus.bind(h(r)),r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||v[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,o=r.name,a=r.required,l=(r.onChange,r.onFocus,r.placeholder),i=r.isAutoResizable,u=r.isIncomplete,p=r.isInvalid,b=r.value,h=r.defaultValue,y=r.rows,O=r.size,g=r.ariaLabel,w=r.refCallback,_=r.disableResize,j=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},d(r,["name","required","onChange","onFocus","placeholder","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"])),x=m(["textarea",{"form-error":p},{"form-incomplete":u&&a&&!p},{"full-size":"full"===O},{resizable:i&&!this.isMobileDevice},{"no-resize":_},j.className]);j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=g||j["aria-label"]:g&&(e=g),j["aria-label"]=e,a&&(j["aria-required"]="true");var I=y||v[O];return void 0!==b?j.value=b:j.defaultValue=h,n.default.createElement("textarea",s({},j,{ref:function(e){t.textarea=e,w&&w(e)},name:o,onFocus:this.onFocus,onChange:this.onChange,placeholder:l,required:a,rows:I,className:x}))}}])&&p(r.prototype,o),a&&p(r,a),t}(n.default.Component);w.propTypes=O,w.defaultProps=g,w.isTextarea=!0;var _=w;t.default=_},1397:function(e,t,r){e.exports={textarea:"Textarea-module__textarea___1cA7J","full-size":"Textarea-module__full-size___39LhZ","no-resize":"Textarea-module__no-resize___3JpeK",resizable:"Textarea-module__resizable___1CQUn","form-error":"Textarea-module__form-error___1KRBv","form-incomplete":"Textarea-module__form-incomplete___791M-"}}}]);
//# sourceMappingURL=245-cd171ba8cd8376b120ef.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1027:function(e,t,n){e.exports={"form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},1029:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(2)),i=l(n(5)),u=l(n(1027));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=i.default.bind(u.default),O={defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,name:a.default.string,pattern:a.default.string,placeholder:a.default.string,refCallback:a.default.func,required:a.default.bool,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),ariaLabel:a.default.string},g={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,placeholder:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},x=function(e){function t(){return p(this,t),b(this,v(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,a=t.disabled,i=t.isIncomplete,u=t.isInvalid,l=t.onBlur,o=t.onChange,p=t.onFocus,f=t.name,b=t.pattern,v=t.placeholder,h=t.refCallback,O=t.required,g=t.type,x=t.ariaLabel,j=t.value,F=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","placeholder","refCallback","required","type","ariaLabel","value"])),S=y(["form-input",{"form-error":u},{"form-incomplete":i&&O&&!u},F.className]);return F&&Object.prototype.hasOwnProperty.call(F,"aria-label")?e=x||F["aria-label"]:x&&(e=x),F["aria-label"]=e,O&&(F["aria-required"]="true"),void 0!==j?F.value=j:void 0!==n&&(F.defaultValue=n),r.default.createElement("input",s({},F,{ref:function(e){h&&h(e)},name:f,type:g,pattern:b,placeholder:v,onBlur:l,onChange:o,onFocus:p,disabled:a,required:O,className:S}))}}])&&f(n.prototype,a),i&&f(n,i),t}(r.default.Component);x.propTypes=O,x.defaultProps=g,x.isInput=!0;var j=x;t.default=j},1145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),i=n(1022),u=n.n(i),l=function(e){var t=e.url;return a.a.createElement(u.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-form-validation",name:"terra-form-validation",version:"1.37.0",url:t})}},1448:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(175)),i=r(n(26)),u=r(n(27)),l=function(){function e(){(0,i.default)(this,e)}return(0,u.default)(e,null,[{key:"isUnderMaxLength",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))&&e.length<=t}},{key:"isOverMinLength",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))&&e.length>=t}},{key:"hasNoWhitespace",value:function(e){return("string"==typeof e||e instanceof String)&&!/\s/.test(e)}},{key:"containsCharacters",value:function(e,t){if(!("string"==typeof e||e instanceof String)||!t||"object"!==(0,a.default)(t)||t.constructor!==Array)return!1;for(var n=0;n<t.length;n+=1)if(e.includes(t[n]))return!0;return!1}},{key:"isOverMinValue",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t))&&e>=t}},{key:"isUnderMaxValue",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t))&&e<=t}},{key:"isPrecise",value:function(e,t){if(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))return!1;var n=e.split(".");return!(2===n.length&&n[1].length>t)}},{key:"isNonnegative",value:function(e){return("string"==typeof e||e instanceof String)&&parseFloat(e)>=0}}]),e}();t.default=l},1617:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(170)),i=r(n(26)),u=r(n(27)),l=r(n(31)),o=r(n(28)),s=r(n(29)),m=r(n(30)),c=r(n(1331)),d=r(n(1332)),p=r(n(0)),f=n(1112),b=r(n(1121)),v=r(n(61)),h=r(n(370));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,m.default)(e);if(t){var a=(0,m.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var x=function(){var e=(0,d.default)(c.default.mark((function e(t){var n;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return e(t?"TerraUser"!==t?"":"Name is Unavailable":"Required")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){(0,o.default)(n,e);var t=g(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return p.default.createElement("form",{noValidate:!0,onSubmit:t},p.default.createElement(f.Field,{name:"user_name",validate:x},(function(e){var t=e.input,n=e.meta;return p.default.createElement(b.default,{inputId:"user-name-async",label:"User Name",error:n.error,help:"TerraUser is unavailable. Use this name to test async",isInvalid:n.submitFailed&&void 0!==n.error,onChange:function(e){t.onChange(e.target.value)},inputAttrs:O({},t),value:t.value,required:!0})})),p.default.createElement(v.default,{text:"Submit",type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(h.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,validateOnBlur:!0}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(p.default.Component);t.default=j},1618:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(170)),i=r(n(26)),u=r(n(27)),l=r(n(31)),o=r(n(28)),s=r(n(29)),m=r(n(30)),c=r(n(0)),d=n(1112),p=r(n(1121)),f=r(n(61)),b=r(n(370));function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,m.default)(e);if(t){var a=(0,m.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var O=function(e){return e?e.replace(/[^\d]/g,""):e},g=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,"");return t.length<=3?t:t.length<=7?"(".concat(t.slice(0,3),") ").concat(t.slice(3)):"(".concat(t.slice(0,3),") ").concat(t.slice(3,6),"-").concat(t.slice(6,10))},x=function(e){return e?void 0:"Required"},j=function(e){(0,o.default)(n,e);var t=y(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit,n=e.pristine,r=e.invalid;return c.default.createElement("form",{noValidate:!0,onSubmit:t},c.default.createElement(d.Field,{name:"vacation_days",validate:x,parse:O},(function(e){var t=e.input,n=e.meta;return c.default.createElement(p.default,{inputId:"vacation-days",label:"Vacation Days Remaining",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:h({placeholder:"# of Vacation Days remaining"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),c.default.createElement(d.Field,{name:"phone_number",validate:x,parse:g},(function(e){var t=e.input,n=e.meta;return c.default.createElement(p.default,{inputId:"phone-number",label:"Phone Number",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:h({placeholder:"(###) ###-####"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),c.default.createElement(f.default,{text:"Submit",isDisabled:r||n,type:f.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(b.default,{marginBottom:"small"},c.default.createElement(d.Form,{onSubmit:this.submitForm,render:this.renderForm}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(c.default.Component);t.default=j},1619:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(170)),i=r(n(26)),u=r(n(27)),l=r(n(31)),o=r(n(28)),s=r(n(29)),m=r(n(30)),c=r(n(0)),d=n(1112),p=r(n(1121)),f=r(n(61)),b=r(n(370)),v=r(n(1448));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,m.default)(e);if(t){var a=(0,m.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var g=function(e){return v.default.isOverMinValue(e,10)?v.default.isUnderMaxValue(e,100)?v.default.isPrecise(e,3)?void 0:"Value has more than 3 decimal points":"Value should not be over 100.":"Value should not be less than 10."},x=function(e){(0,o.default)(n,e);var t=O(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return c.default.createElement("form",{noValidate:!0,onSubmit:t},c.default.createElement(d.Field,{name:"numExample",validate:g},(function(e){var t=e.input,n=e.meta;return c.default.createElement(p.default,{inputId:"numExample",label:"Numeric Example",error:n.error,isInvalid:void 0!==n.error,inputAttrs:y({type:"number"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),c.default.createElement(f.default,{text:"Submit",type:f.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(b.default,{marginBottom:"small"},c.default.createElement(d.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{numExample:""},validate:function(e){var t={};return e.numExample||(t.numExample="Required"),t}}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(c.default.Component);t.default=x},1620:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(170)),i=r(n(26)),u=r(n(27)),l=r(n(31)),o=r(n(28)),s=r(n(29)),m=r(n(30)),c=r(n(0)),d=n(1112),p=r(n(1121)),f=r(n(61)),b=r(n(370)),v=r(n(1448));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,m.default)(e);if(t){var a=(0,m.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var g=function(e){if(!v.default.isUnderMaxLength(e,8))return"Name needs to be less than 9 characters long"},x=function(e){(0,o.default)(n,e);var t=O(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return c.default.createElement("form",{noValidate:!0,onSubmit:t},c.default.createElement(d.Field,{name:"example",validate:g},(function(e){var t=e.input,n=e.meta;return c.default.createElement(p.default,{inputId:"example",label:"Example",error:n.error,isInvalid:void 0!==n.error,inputAttrs:y({placeholder:"Example"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),c.default.createElement(f.default,{text:"Submit",type:f.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(b.default,{marginBottom:"small"},c.default.createElement(d.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{example:""},validate:function(e){var t={};return e.example||(t.example="Required"),t}}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(c.default.Component);t.default=x},2120:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var r=n(19),a=n.n(r),i=n(24),u=n.n(i),l=n(0),o=n.n(l),s=n(361),m=n(1145),c=n(1617),d=n.n(c),p={};function f(e){var t=e.components,n=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (!name) {\n      return resolve('Required');\n    }\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-async\"\n              label=\"User Name\"\n              error={meta.error}\n              help=\"TerraUser is unavailable. Use this name to test async\"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={{ ...input }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          validateOnBlur\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}f.isMDXComponent=!0;var b=n(1024),v=n.n(b),h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"Validation Asynchronous",description:n,example:o.a.createElement(d.a,null),exampleSrc:o.a.createElement(f,null),isExpanded:r})},y=n(1618),O=n.n(y),g={};function x(e){var t=e.components,n=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},g,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst numericOnly = (value) => {\n  if (!value) return value;\n  const onlyNums = value.replace(/[^\\d]/g, '');\n  return onlyNums;\n};\n\nconst enforcePhoneNumber = (value) => {\n  if (!value) return value;\n  const onlyNums = value.replace(/[^\\d]/g, '');\n  if (onlyNums.length <= 3) return onlyNums;\n  if (onlyNums.length <= 7) return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;\n\n  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(\n    6,\n    10,\n  )}`;\n};\n\nconst required = value => (value ? undefined : 'Required');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"vacation_days\"\n          validate={required}\n          parse={numericOnly}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"vacation-days\"\n              label=\"Vacation Days Remaining\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={{\n                placeholder: '# of Vacation Days remaining',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"phone_number\"\n          validate={required}\n          parse={enforcePhoneNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"phone-number\"\n              label=\"Phone Number\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={{\n                placeholder: '(###) ###-####',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}x.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"Validation Parsing",description:n,example:o.a.createElement(O.a,null),exampleSrc:o.a.createElement(x,null),isExpanded:r})},F=n(1619),S=n.n(F),N={};function E(e){var t=e.components,n=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},N,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateNumber = (value) => {\n  if (!FormValidationUtil.isOverMinValue(value, 10)) {\n    return 'Value should not be less than 10.';\n  }\n  if (!FormValidationUtil.isUnderMaxValue(value, 100)) {\n    return 'Value should not be over 100.';\n  }\n  if (!FormValidationUtil.isPrecise(value, 3)) {\n    return 'Value has more than 3 decimal points';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"numExample\"\n          validate={validateNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"numExample\"\n              label=\"Numeric Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={{\n                type: 'number',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ numExample: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.numExample) {\n              errors.numExample = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}E.isMDXComponent=!0;var V=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"Numeric Validation",description:n,example:o.a.createElement(S.a,null),exampleSrc:o.a.createElement(E,null),isExpanded:r})},w=n(1620),P=n.n(w),C={};function I(e){var t=e.components,n=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateLength = (name) => {\n  if (!FormValidationUtil.isUnderMaxLength(name, 8)) {\n    return 'Name needs to be less than 9 characters long';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"example\"\n          validate={validateLength}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"example\"\n              label=\"Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={{\n                placeholder: 'Example',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ example: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.example) {\n              errors.example = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}I.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"Max Length Input",description:n,example:o.a.createElement(P.a,null),exampleSrc:o.a.createElement(I,null),isExpanded:r})},M={};function U(e){var t=e.components,n=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},M,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)(m.a,{mdxType:"Badge"}),Object(s.mdx)("h1",{id:"validation-functions"},"Validation Functions"),Object(s.mdx)("p",null,Object(s.mdx)("em",{parentName:"p"},"react-final-form")," gives you the ability to create your own validation functions. For custom validations, the idea is that a message will be returned if the function finds an error with the form input value, or returns undefined if no errors are detected for the given input value."),Object(s.mdx)("h2",{id:"asynchronous-validations"},"Asynchronous Validations"),Object(s.mdx)("p",null,"There maybe times you need to do remote validations such as Unique Username checks. To best handle this scenario with wide browser support, an OnBlurValidation can be added to a component, where the function takes in two parameters: the value of the input, and a callback setError that sets the error status of the input."),Object(s.mdx)("p",null,Object(s.mdx)("strong",{parentName:"p"},"Note")),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"If you need to run this in IE11, the ",Object(s.mdx)("a",a()({parentName:"li"},{href:"https://www.npmjs.com/package/babel-plugin-transform-async-to-generator"}),"transform-async-to-generator")," plugin needs to be added to your .babelrc file."),Object(s.mdx)("li",{parentName:"ul"},"The promise can be any kind of promise, including calls with axios and other libraries.")),Object(s.mdx)("h1",{id:"parsing"},"Parsing"),Object(s.mdx)("p",null,"Form inputs can be parsed to ensure input values follow specific formats. This could be useful when you want to restrict numeric inputs to only allow users to enter in digits, and force formating of phone numbers."),Object(s.mdx)("p",null,"Consult ",Object(s.mdx)("a",a()({parentName:"p"},{href:"https://github.com/final-form/react-final-form"}),"react-final-form")," for further functionality that can be used."),Object(s.mdx)("h2",{id:"formvalidationutil-class"},"FormValidationUtil Class"),Object(s.mdx)("p",null,"In order to make creating form validation functions easier, we have a FormValidationUtil class in the ",Object(s.mdx)("inlineCode",{parentName:"p"},"terra-form-validation")," package. It contains the following functions."),Object(s.mdx)("h4",{id:"isundermaxlength"},"isUnderMaxLength"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isUnderMaxValue(value, maximum)\n")),Object(s.mdx)("p",null,"Checks given value's length against maximum. Returns true if value's length is less than the maximum."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"maximum")," is a nonnegative whole number.")),Object(s.mdx)("h4",{id:"isoverminlength"},"isOverMinLength"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isOverMinLength(value, minimum)\n")),Object(s.mdx)("p",null,"Checks given value's length against minimum. Returns true if value's length is greater than the minimum."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"minimum")," is a nonnegative whole number.")),Object(s.mdx)("h4",{id:"hasnowhitespace"},"hasNoWhitespace"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.hasNoWhitespace(value)\n")),Object(s.mdx)("p",null,"Checks given value for extraneous whitespace. return true if there is no whitespace."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"value")," is the value string")),Object(s.mdx)("h4",{id:"containscharacters"},"containsCharacters"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.containsCharacters(value, chars)\n")),Object(s.mdx)("p",null,"Checks given value for any string in given array. return true if value does not contain any of them."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"chars")," is an array of strings")),Object(s.mdx)("h4",{id:"isoverminvalue"},"isOverMinValue"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isOverMinValue(value, minimum)\n")),Object(s.mdx)("p",null,"Checks given value against a minimum value. Returns true if value is greater then or equal to the minimum"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"minimum")," is the minimum numeric value")),Object(s.mdx)("h4",{id:"isundermaxvalue"},"isUnderMaxValue"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isUnderMaxValue(value, maximum)\n")),Object(s.mdx)("p",null,"Checks given value against a maximum value. Returns true if value is less then or equal to the maximum"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"maximum")," is the maximum numeric value")),Object(s.mdx)("h4",{id:"isprecise"},"isPrecise"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isPrecise(value, precision)\n")),Object(s.mdx)("p",null,"Checks given value for a specific level of precision. Returns true if value has less than or an equal amount of precision"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"precision")," is a nonnegative whole number")),Object(s.mdx)("h4",{id:"isnonnegative"},"isNonnegative"),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-javascript"}),"FormValidationUtil.isNonnegative(value)\n")),Object(s.mdx)("p",null,"Checks given value for if it is a negative value. Returns true if it is nonnegative."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"value")," is the value string")),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(h,{title:"Asynchronous Function",mdxType:"ValidationAsynchronous"}),Object(s.mdx)(j,{title:"Parsing Function",mdxType:"ValidationParsing"}),Object(s.mdx)(V,{title:"Numeric Validations",description:"Making a Numeric Input With Minimum, Maximum, and Precision Validations",mdxType:"NumericValidation"}),Object(s.mdx)(k,{title:"Max Length Input",description:"Making an Input With a Maximum Length",mdxType:"TestFormValidation"}))}U.isMDXComponent=!0}}]);
//# sourceMappingURL=150-229e5c383e16845b3467.js.map
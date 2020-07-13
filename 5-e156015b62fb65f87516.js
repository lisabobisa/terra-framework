(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1028:function(e,t,n){"use strict";var i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n(26)),a=i(n(27)),o=function(){function e(){(0,u.default)(this,e)}return(0,a.default)(e,null,[{key:"validNumericInput",value:function(e){return 0===e.length||/^\d+$/.test(e)}},{key:"parseTwelveHourTime",value:function(e,t,n){var i={hourString:e},u=parseInt(e,10);return u>=12?(i.meridiem=n,u>12&&(u-=12)):(i.meridiem=t,0===u&&(u=12)),i.hourString=u<10?"0".concat(u.toString()):u.toString(),i}},{key:"incrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?12:23;if(e){var i=Number(e);return i<n?(i+=1)<10?"0".concat(i.toString()):i.toString():t===this.FORMAT_12_HOUR?"01":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"decrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?1:0;if(e){var i=Number(e);return i>n?(i-=1)<10?"0".concat(i.toString()):i.toString():t===this.FORMAT_12_HOUR?"12":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"incrementMinute",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementMinute",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"incrementSecond",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementSecond",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"splitHour",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length){var n=Number(t[0]);if(n>=0&&n<24)return 1===t[0].length?"0".concat(t[0]):t[0]}return""}return""}},{key:"splitMinute",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>1){var n=Number(t[1]);if(n>=0&&n<60)return 1===t[1].length?"0".concat(t[1]):t[1]}return""}return""}},{key:"splitSecond",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>2){var n=Number(t[2]);if(n>=0&&n<60)return 1===t[2].length?"0".concat(t[2]):t[2]}return""}return""}},{key:"validateTime",value:function(e,t){return t?/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(e):/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(e)}},{key:"getVariantFromLocale",value:function(e){var t=e.intl,n=e.variant;return t.messages["Terra.timeInput.am"]&&t.messages["Terra.timeInput.pm"]?n:this.FORMAT_24_HOUR}}]),e}();o.inputType={HOUR:0,MINUTE:1,MERIDIEM:2,SECOND:3},o.isConsideredMobileDevice=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},Object.defineProperty(o,"FORMAT_12_HOUR",{value:"12-hour",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(o,"FORMAT_24_HOUR",{value:"24-hour",configurable:!1,enumerable:!0,writable:!1});var s=o;t.default=s},1030:function(e,t,n){"use strict";(function(e){var i=n(13),u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(19)),o=u(n(24)),s=u(n(26)),r=u(n(27)),l=u(n(31)),d=u(n(28)),h=u(n(29)),c=u(n(30)),m=u(n(0)),f=u(n(2)),p=u(n(11)),v=u(n(5)),g=u(n(8)),_=u(n(1029)),M=u(n(1054)),I=n(9),y=i(n(21)),T=u(n(1028)),b=u(n(1038));function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.default)(e);if(t){var u=(0,c.default)(this).constructor;n=Reflect.construct(i,arguments,u)}else n=i.apply(this,arguments);return(0,h.default)(this,n)}}var S=v.default.bind(b.default),C={disabled:f.default.bool,inputAttributes:f.default.object,hourAttributes:f.default.object,intl:I.intlShape.isRequired,isIncomplete:f.default.bool,isInvalid:f.default.bool,isInvalidMeridiem:f.default.bool,minuteAttributes:f.default.object,name:f.default.string.isRequired,onBlur:f.default.func,onChange:f.default.func,onFocus:f.default.func,refCallback:f.default.func,required:f.default.bool,secondAttributes:f.default.object,showSeconds:f.default.bool,value:f.default.string,variant:f.default.oneOf([T.default.FORMAT_12_HOUR,T.default.FORMAT_24_HOUR])},R={disabled:!1,inputAttributes:{},isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,minuteAttributes:{},hourAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,required:!1,secondAttributes:{},showSeconds:!1,value:void 0,variant:T.default.FORMAT_24_HOUR},O=function(t){(0,d.default)(i,t);var n=F(i);function i(t){var u;(0,s.default)(this,i);var a=(u=n.call(this,t)).props.value,o=u.props.showSeconds;a&&!T.default.validateTime(a,o)&&("production"!==e.env&&console.warn("An invalid time value, ".concat(a,", has been passed to the terra-time-picker. ")+"This value has been ignored and will not be rendered. "+"Time values must be in ".concat(o?"hh:mm:ss":"hh:mm"," format because showSeconds is ").concat(o,".")),a=void 0),u.timeInputContainer=m.default.createRef(),u.handleHourChange=u.handleHourChange.bind((0,l.default)(u)),u.handleMinuteChange=u.handleMinuteChange.bind((0,l.default)(u)),u.handleSecondChange=u.handleSecondChange.bind((0,l.default)(u)),u.handleHourInputKeyDown=u.handleHourInputKeyDown.bind((0,l.default)(u)),u.handleMinuteInputKeyDown=u.handleMinuteInputKeyDown.bind((0,l.default)(u)),u.handleSecondInputKeyDown=u.handleSecondInputKeyDown.bind((0,l.default)(u)),u.handleFocus=u.handleFocus.bind((0,l.default)(u)),u.handleHourFocus=u.handleHourFocus.bind((0,l.default)(u)),u.handleMinuteFocus=u.handleMinuteFocus.bind((0,l.default)(u)),u.handleSecondFocus=u.handleSecondFocus.bind((0,l.default)(u)),u.handleHourBlur=u.handleHourBlur.bind((0,l.default)(u)),u.handleMinuteBlur=u.handleMinuteBlur.bind((0,l.default)(u)),u.handleSecondBlur=u.handleSecondBlur.bind((0,l.default)(u)),u.handleMeridiemButtonFocus=u.handleMeridiemButtonFocus.bind((0,l.default)(u)),u.handleMeridiemButtonBlur=u.handleMeridiemButtonBlur.bind((0,l.default)(u)),u.handleMeridiemButtonChange=u.handleMeridiemButtonChange.bind((0,l.default)(u));var r,d=T.default.splitHour(a);if(T.default.getVariantFromLocale(t)===T.default.FORMAT_12_HOUR)if(u.props.intl.messages["Terra.timeInput.am"]&&u.props.intl.messages["Terra.timeInput.pm"]?(u.anteMeridiem=u.props.intl.formatMessage({id:"Terra.timeInput.am"}),u.postMeridiem=u.props.intl.formatMessage({id:"Terra.timeInput.pm"})):("production"!==e.env&&console.warn("This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed"),u.anteMeridiem="",u.postMeridiem=""),d){var h=T.default.parseTwelveHourTime(d,u.anteMeridiem,u.postMeridiem);d=h.hourString,r=h.meridiem}else r=u.anteMeridiem;return u.state={hour:d,minute:T.default.splitMinute(a),second:T.default.splitSecond(a),isFocused:!1,meridiem:r,hourInitialFocused:!1,minuteInitialFocused:!1,secondInitialFocused:!1},u}return(0,r.default)(i,[{key:"componentDidUpdate",value:function(e){var t=T.default.getVariantFromLocale(this.props);if(this.props.value!==e.value||t!==T.default.getVariantFromLocale(e)){var n=T.default.splitHour(this.props.value),i=this.state.meridiem;if(t===T.default.FORMAT_12_HOUR&&(this.anteMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.am"}),this.postMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.pm"}),n)){var u=T.default.parseTwelveHourTime(n,this.anteMeridiem,this.postMeridiem);n=u.hourString,i=u.meridiem}this.setState({hour:n,minute:T.default.splitMinute(this.props.value),second:T.default.splitSecond(this.props.value),meridiem:i})}}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleSecondFocus",value:function(e){this.handleFocus(e),this.setState({secondInitialFocused:!0}),T.default.isConsideredMobileDevice()||this.secondInput.setSelectionRange(0,this.secondInput.value.length)}},{key:"handleMinuteFocus",value:function(e){this.handleFocus(e),this.setState({minuteInitialFocused:!0}),T.default.isConsideredMobileDevice()||this.minuteInput.setSelectionRange(0,this.minuteInput.value.length)}},{key:"handleHourFocus",value:function(e){this.handleFocus(e),this.setState({hourInitialFocused:!0}),T.default.isConsideredMobileDevice()||this.hourInput.setSelectionRange(0,this.hourInput.value.length)}},{key:"handleHourBlur",value:function(e){this.handleBlur(e,T.default.inputType.HOUR),this.setState({hourInitialFocused:!1})}},{key:"handleMinuteBlur",value:function(e){this.handleBlur(e,T.default.inputType.MINUTE),this.setState({minuteInitialFocused:!1})}},{key:"handleSecondBlur",value:function(e){this.handleBlur(e,T.default.inputType.SECOND),this.setState({secondInitialFocused:!1})}},{key:"handleMeridiemButtonBlur",value:function(e){this.handleBlur(e,T.default.inputType.MERIDIEM)}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===T.default.inputType.HOUR||t===T.default.inputType.MINUTE||t===T.default.inputType.SECOND){var n=e.target.value;1===n.length&&(n=T.default.getVariantFromLocale(this.props)===T.default.FORMAT_12_HOUR&&t===T.default.inputType.HOUR&&"0"===n?"12":"0".concat(n),this.handleValueChange(e,t,n,this.state.meridiem))}if(this.props.onBlur){var i=e.relatedTarget?e.relatedTarget:document.activeElement;this.timeInputContainer.current.contains(i)||this.props.onBlur(e)}}},{key:"handleHourChange",value:function(e){var t=this;if(T.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.hour,u=T.default.getVariantFromLocale(this.props),a=u===T.default.FORMAT_12_HOUR?12:23;if(!(n===i||n.length>2||Number(n)>a)){if(n.length>=i.length){var o=["3","4","5","6","7","8","9"];u===T.default.FORMAT_12_HOUR&&o.push("2"),o.indexOf(n)>-1&&(n="0".concat(n))}"00"===n&&u===T.default.FORMAT_12_HOUR&&(n="12");this.handleValueChange(e,T.default.inputType.HOUR,n,this.state.meridiem,(function(){2===n.length&&t.minuteInput.focus()}))}}}},{key:"handleMinuteChange",value:function(e){var t=this;if(T.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.minute;if(!(n===i||n.length>2||Number(n)>59)){if(n.length>=i.length){["6","7","8","9"].indexOf(n)>-1&&(n="0".concat(n))}this.handleValueChange(e,T.default.inputType.MINUTE,n,this.state.meridiem,(function(){2===n.length&&t.props.showSeconds&&t.secondInput.focus()}))}}}},{key:"handleSecondChange",value:function(e){if(T.default.validNumericInput(e.target.value)){var t=e.target.value,n=this.state.second;if(!(t===n||t.length>2||Number(t)>59)){if(t.length>=n.length){["6","7","8","9"].indexOf(t)>-1&&(t="0".concat(t))}this.handleValueChange(e,T.default.inputType.SECOND,t,this.state.meridiem)}}}},{key:"handleMeridiemButtonFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e)}},{key:"handleHourInputKeyDown",value:function(e){var t=this.state.hour,n=this.state.meridiem,i=t,u=T.default.getVariantFromLocale(this.props);e.keyCode===y.KEY_UP&&(t=T.default.incrementHour(t,u),u===T.default.FORMAT_12_HOUR&&"12"===t&&(n=n!==this.postMeridiem&&i?this.postMeridiem:this.anteMeridiem)),e.keyCode===y.KEY_DOWN&&(t=T.default.decrementHour(t,u),u===T.default.FORMAT_12_HOUR&&"11"===t&&(n=n===this.postMeridiem?this.anteMeridiem:this.postMeridiem)),t!==i&&this.handleValueChange(e,T.default.inputType.HOUR,t,n),e.keyCode===y.KEY_RIGHT&&this.focusMinuteFromHour(e)}},{key:"focusMinuteFromHour",value:function(e){0!==this.state.hour.length&&this.state.hour.length!==this.hourInput.selectionEnd||(this.minuteInput.focus(),this.minuteInput.setSelectionRange(0,0),e.preventDefault())}},{key:"handleMinuteInputKeyDown",value:function(e){var t=this.state.minute,n=t;e.keyCode===y.KEY_UP&&(t=T.default.incrementMinute(t)),e.keyCode===y.KEY_DOWN&&(t=T.default.decrementMinute(t)),n!==t&&this.handleValueChange(e,T.default.inputType.MINUTE,t,this.state.meridiem),e.keyCode!==y.KEY_LEFT&&e.keyCode!==y.KEY_DELETE&&e.keyCode!==y.KEY_BACK_SPACE||this.focusHour(e),e.keyCode===y.KEY_RIGHT&&this.props.showSeconds&&this.focusSecondFromMinute(e)}},{key:"focusHour",value:function(e){0===this.minuteInput.selectionEnd&&(this.hourInput.focus(),this.state.hour&&(this.hourInput.setSelectionRange(this.state.hour.length,this.state.hour.length),e.preventDefault()))}},{key:"focusSecondFromMinute",value:function(e){0!==this.state.minute.length&&this.state.minute.length!==this.minuteInput.selectionEnd||!this.secondInput||(this.secondInput.focus(),this.state.second&&(this.secondInput.setSelectionRange(0,0),e.preventDefault()))}},{key:"handleSecondInputKeyDown",value:function(e){var t=this.state.second,n=t;e.keyCode===y.KEY_UP&&(t=T.default.incrementSecond(t)),e.keyCode===y.KEY_DOWN&&(t=T.default.decrementSecond(t)),n!==t&&this.handleValueChange(e,T.default.inputType.SECOND,t,this.state.meridiem),e.keyCode!==y.KEY_LEFT&&e.keyCode!==y.KEY_DELETE&&e.keyCode!==y.KEY_BACK_SPACE||this.focusMinuteFromSecond(e)}},{key:"focusMinuteFromSecond",value:function(e){0===this.secondInput.selectionEnd&&(this.minuteInput.focus(),this.state.minute&&(this.minuteInput.setSelectionRange(this.state.minute.length,this.state.minute.length),e.preventDefault()))}},{key:"handleValueChange",value:function(e,t,n,i,u){if(t===T.default.inputType.HOUR?this.setState({hour:n,meridiem:i,hourInitialFocused:!1},u):t===T.default.inputType.MINUTE?this.setState({minute:n,minuteInitialFocused:!1},u):this.setState({second:n,secondInitialFocused:!1},u),this.props.onChange&&1!==n.length){var a=t===T.default.inputType.HOUR?n:this.state.hour,o=t===T.default.inputType.MINUTE?n:this.state.minute,s=t===T.default.inputType.SECOND?n:this.state.second;""===a&&""===o&&""===s?this.props.onChange(e,""):this.props.onChange(e,this.formatHour(a,i).concat(":",o).concat(this.props.showSeconds?":".concat(s):""))}}},{key:"formatHour",value:function(e,t){if(!e)return e;var n=parseInt(e,10);T.default.getVariantFromLocale(this.props)===T.default.FORMAT_12_HOUR&&(t===this.postMeridiem&&n<12?n+=12:t===this.anteMeridiem&&12===n&&(n=0));var i=n.toString();return i.length<2&&(i="0".concat(i)),i}},{key:"handleMeridiemButtonChange",value:function(e,t){this.handleValueChange(e,T.default.inputType.HOUR,this.state.hour.toString(),t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.disabled,i=t.inputAttributes,u=t.minuteAttributes,s=t.hourAttributes,r=t.intl,l=t.isIncomplete,d=t.isInvalid,h=t.isInvalidMeridiem,c=(t.onBlur,t.onChange,t.onFocus,t.name),f=t.refCallback,v=t.required,g=t.secondAttributes,I=t.showSeconds,y=(t.value,t.variant,(0,o.default)(t,["disabled","inputAttributes","minuteAttributes","hourAttributes","intl","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onFocus","name","refCallback","required","secondAttributes","showSeconds","value","variant"])),b=S(["meridiem-button",{"is-invalid":h&&this.state.meridiem===this.anteMeridiem}]),F=S(["meridiem-button",{"is-invalid":h&&this.state.meridiem===this.postMeridiem}]),C=T.default.getVariantFromLocale(this.props),R="";if(this.state.hour.length>0||this.state.minute.length>0||this.state.second.length>0&&I){var O=parseInt(this.state.hour,10);C===T.default.FORMAT_12_HOUR&&this.state.meridiem===this.postMeridiem&&(O+=12),R="T".concat(O,":",this.state.minute),I&&(R=R.concat(":",this.state.second))}var k=this.context,H=(0,p.default)(S({disabled:n},"time-input",{"is-focused":this.state.isFocused},{"is-invalid":d},{"is-incomplete":l&&v&&!d&&!h},k.className),y.className),E=S(["time-input-hour",{"with-second":I},{"initial-focus":this.state.hourInitialFocused}]),w=S(["time-input-minute",{"with-second":I},{"initial-focus":this.state.minuteInitialFocused}]),B=S(["time-input-second",{"initial-focus":this.state.secondInitialFocused}]);return m.default.createElement("div",(0,a.default)({},y,{ref:this.timeInputContainer,className:S("time-input-container")}),m.default.createElement("div",{className:H},m.default.createElement("input",{type:"hidden",name:c,value:R}),m.default.createElement(_.default,(0,a.default)({},i,s,{"aria-label":r.formatMessage({id:"Terra.timeInput.hours"}),refCallback:function(t){e.hourInput=t,f&&f(t)},className:E,type:"text",value:this.state.hour,name:"terra-time-hour-".concat(c),placeholder:r.formatMessage({id:"Terra.timeInput.hh"}),maxLength:"2",onChange:this.handleHourChange,onKeyDown:this.handleHourInputKeyDown,onFocus:this.handleHourFocus,onBlur:this.handleHourBlur,size:"2",pattern:"\\d*",disabled:n})),m.default.createElement("span",{className:S("time-spacer")},":"),m.default.createElement(_.default,(0,a.default)({},i,u,{refCallback:function(t){e.minuteInput=t},"aria-label":r.formatMessage({id:"Terra.timeInput.minutes"}),className:w,type:"text",value:this.state.minute,name:"terra-time-minute-".concat(c),placeholder:r.formatMessage({id:"Terra.timeInput.mm"}),maxLength:"2",onChange:this.handleMinuteChange,onKeyDown:this.handleMinuteInputKeyDown,onFocus:this.handleMinuteFocus,onBlur:this.handleMinuteBlur,size:"2",pattern:"\\d*",disabled:n})),I&&m.default.createElement(m.default.Fragment,null,m.default.createElement("span",{className:S("time-spacer")},":"),m.default.createElement(_.default,(0,a.default)({},i,g,{refCallback:function(t){e.secondInput=t},"aria-label":r.formatMessage({id:"Terra.timeInput.seconds"}),className:B,type:"text",value:this.state.second,name:"terra-time-second-".concat(c),placeholder:r.formatMessage({id:"Terra.timeInput.ss"}),maxLength:"2",onChange:this.handleSecondChange,onKeyDown:this.handleSecondInputKeyDown,onFocus:this.handleSecondFocus,onBlur:this.handleSecondBlur,size:"2",pattern:"\\d*",disabled:n})))),C===T.default.FORMAT_12_HOUR&&m.default.createElement(M.default,{selectedKeys:[this.state.meridiem],onChange:this.handleMeridiemButtonChange,className:S("meridiem-button-group")},m.default.createElement(M.default.Button,{key:this.anteMeridiem,className:b,text:this.anteMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:n}),m.default.createElement(M.default.Button,{key:this.postMeridiem,className:F,text:this.postMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:n})))}}]),i}(m.default.Component);O.propTypes=C,O.defaultProps=R,O.contextType=g.default;var k=(0,I.injectIntl)(O);t.default=k}).call(this,n(362))},1038:function(e,t,n){e.exports={"clinical-lowlight-theme":"TimeInput-module__clinical-lowlight-theme___2Ok5X","orion-fusion-theme":"TimeInput-module__orion-fusion-theme___2deKj","time-input-container":"TimeInput-module__time-input-container___33Rt0","time-input":"TimeInput-module__time-input___T4wlC","time-input-hour":"TimeInput-module__time-input-hour___2VQ6_","time-input-minute":"TimeInput-module__time-input-minute___1elGu","time-input-second":"TimeInput-module__time-input-second___3X_4K","is-focused":"TimeInput-module__is-focused___niMlR",disabled:"TimeInput-module__disabled___CSggS","is-invalid":"TimeInput-module__is-invalid___3o6NT","initial-focus":"TimeInput-module__initial-focus___3pBpb","with-second":"TimeInput-module__with-second___1EprD","is-incomplete":"TimeInput-module__is-incomplete___3O5ye","time-spacer":"TimeInput-module__time-spacer___kAFrV","meridiem-button-group":"TimeInput-module__meridiem-button-group___3sIUS","meridiem-button":"TimeInput-module__meridiem-button___2_S7a"}}}]);
//# sourceMappingURL=5-e156015b62fb65f87516.js.map
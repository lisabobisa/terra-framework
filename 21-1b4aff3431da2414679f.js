(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1152:function(e,t,s){"use strict";var n=s(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s(170)),a=n(s(24)),i=n(s(26)),o=n(s(27)),l=n(s(31)),u=n(s(28)),c=n(s(29)),d=n(s(30)),f=n(s(0)),m=n(s(2));function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return(0,c.default)(this,s)}}var v={items:m.default.arrayOf(m.default.shape({key:m.default.string.isRequired,component:m.default.element.isRequired})),render:m.default.func,disclose:m.default.func},y=function(e){(0,u.default)(s,e);var t=p(s);function s(e){var n;return(0,i.default)(this,s),(n=t.call(this,e)).requestFocus=n.requestFocus.bind((0,l.default)(n)),n.releaseFocus=n.releaseFocus.bind((0,l.default)(n)),n.setFocusState=n.setFocusState.bind((0,l.default)(n)),n.resetFocusState=n.resetFocusState.bind((0,l.default)(n)),n.renderItems=n.renderItems.bind((0,l.default)(n)),n.state={focusedItemId:void 0,focusedItemState:void 0},n}return(0,o.default)(s,[{key:"componentDidUpdate",value:function(e){var t,s=this.props.items,n=this.state.focusedItemId;this.props.items!==e.items&&(s.forEach((function(e){e.key===n&&(t=!0)})),t||this.releaseFocus(void 0,!0))}},{key:"setFocusState",value:function(e,t){this.setState({focusedItemId:e,focusedItemState:t})}},{key:"resetFocusState",value:function(){this.setFocusState()}},{key:"requestFocus",value:function(e,t){var s=this,n=this.props.disclose,i=this.state.focusedItemId;return new Promise((function(o,l){s.releaseFocus(i).then((function(){s.setFocusState(e,Object.freeze(t||{}));var i={};n&&(i.disclose=function(t){return s.state.focusedItemId!==e?Promise.reject():n(t).then((function(e){var t=e.afterDismiss,n=e.dismissDisclosure,i=(0,a.default)(e,["afterDismiss","dismissDisclosure"]);return s.forceDismissInstance=n,t.then((function(){s.forceDismissInstance=void 0,s.state.focusedItemId&&s.resetFocusState()})),function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){(0,r.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({afterDismiss:t,dismissDisclosure:n},i)}))}),o(i)})).catch((function(){l()}))}))}},{key:"releaseFocus",value:function(e,t){var s=this;return this.state.focusedItemId?e===this.state.focusedItemId||t?new Promise((function(e,t){s.forceDismissInstance?s.forceDismissInstance().then((function(){s.resetFocusState(),e()})).catch((function(){t()})):(s.resetFocusState(),e())})):Promise.reject():Promise.resolve()}},{key:"renderItems",value:function(){var e=this,t=this.props.items,s=this.state,n=s.focusedItemId,r=s.focusedItemState;return t.map((function(t){var s=n===t.key;return f.default.cloneElement(t.component,{key:t.key,aggregatorDelegate:{hasFocus:s,requestFocus:function(s){return e.requestFocus(t.key,s)},releaseFocus:s?function(){return e.releaseFocus(t.key)}:void 0,itemState:s?r:void 0}})}))}},{key:"render",value:function(){var e=this.renderItems();return this.props.render?this.props.render({items:e}):f.default.createElement("div",null,e)}}]),s}(f.default.Component);y.propTypes=v,y.defaultProps={items:[]};var g=y;t.default=g},1304:function(e,t,s){},1380:function(e,t,s){"use strict";var n=s(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s(0));s(1304);var a=function(e){var t=e.children,s=e.isPadded;return r.default.createElement("ul",{"aria-label":"Placeholder List",role:"listbox",className:s?"placeholder-list is-padded":"placeholder-list "},t)};t.default=a},1381:function(e,t,s){"use strict";var n=s(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s(19)),a=n(s(24)),i=n(s(0));s(1304);var o=function(e){var t=e.children,s=e.isSelected,n=e.onSelect,o=(0,a.default)(e,["children","isSelected","onSelect"]),l=s?"placeholder-list-item is-selected":"placeholder-list-item ";return i.default.createElement("li",(0,r.default)({},o,{"aria-selected":s,tabIndex:"0",className:l,onClick:n,onKeyDown:function(e){13!==e.nativeEvent.keyCode&&32!==e.nativeEvent.keyCode||(e.preventDefault(),n(e))},role:"option"}),t)};t.default=o},1465:function(e,t,s){"use strict";var n=s(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s(26)),a=n(s(27)),i=n(s(31)),o=n(s(28)),l=n(s(29)),u=n(s(30)),c=n(s(0)),d=n(s(2)),f=n(s(1380)),m=n(s(1381)),h=n(s(1726));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return(0,l.default)(this,s)}}var v=function(e){(0,o.default)(s,e);var t=p(s);function s(e){var n;return(0,r.default)(this,s),(n=t.call(this,e)).handleSelection=n.handleSelection.bind((0,i.default)(n)),n}return(0,a.default)(s,[{key:"handleSelection",value:function(e,t){var s=this.props,n=s.aggregatorDelegate,r=s.name;n.hasFocus&&n.itemState.selectedKey===t?n.releaseFocus():n.requestFocus({selectedKey:t}).then((function(e){var t=e.disclose;t&&t({preferredType:"panel",size:"small",content:{key:"Disclosure for ".concat(r),component:c.default.createElement(h.default,{identifier:"Disclosure for ".concat(r)})}})}))}},{key:"render",value:function(){var e,t=this,s=this.props,n=s.name,r=s.aggregatorDelegate,a=s.targetId;return r.hasFocus&&r.itemState&&void 0!==r.itemState.selectedKey&&(e=r.itemState.selectedKey),c.default.createElement(f.default,null,c.default.createElement(m.default,{isSelected:"test-key"===e,onSelect:function(e){return t.handleSelection(e,"test-key")}},c.default.createElement("div",{id:a},n)))}}]),s}(c.default.Component);v.propTypes={name:d.default.string,aggregatorDelegate:d.default.shape({}),targetId:d.default.string};var y=v;t.default=y},1726:function(e,t,s){"use strict";var n=s(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s(170)),a=n(s(26)),i=n(s(27)),o=n(s(31)),l=n(s(28)),u=n(s(29)),c=n(s(30)),d=n(s(0)),f=n(s(2)),m=n(s(57)),h=s(234),p=n(s(5)),v=n(s(1727));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return(0,u.default)(this,s)}}var g=p.default.bind(v.default),b=Object.keys(h.availableDisclosureHeights),k=Object.keys(h.availableDisclosureWidths),F=function(e){(0,l.default)(s,e);var t=y(s);function s(e){var n;return(0,a.default)(this,s),(n=t.call(this,e)).disclose=n.disclose.bind((0,o.default)(n)),n.dismiss=n.dismiss.bind((0,o.default)(n)),n.closeDisclosure=n.closeDisclosure.bind((0,o.default)(n)),n.goBack=n.goBack.bind((0,o.default)(n)),n.maximize=n.maximize.bind((0,o.default)(n)),n.minimize=n.minimize.bind((0,o.default)(n)),n.requestFocus=n.requestFocus.bind((0,o.default)(n)),n.releaseFocus=n.releaseFocus.bind((0,o.default)(n)),n.generateOptions=n.generateOptions.bind((0,o.default)(n)),n.handleSelectChange=n.handleSelectChange.bind((0,o.default)(n)),n.renderFormButton=n.renderFormButton.bind((0,o.default)(n)),n.renderForm=n.renderForm.bind((0,o.default)(n)),n.getId=n.getId.bind((0,o.default)(n)),n.state={id:"disclosureDimensions",disclosureHeight:b[0],disclosureWidth:k[0]},n}return(0,i.default)(s,[{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var s=this;return e.map((function(e,n){var r=n;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(s.props.nestedIndex),key:r,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,r.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var s=this,n=this.props,r=n.disclosureType,a=n.nestedIndex+1;return function(){s.props.disclosureManager.disclose({preferredType:r,size:e,dimensions:t,content:{key:"DemoContainer-".concat(a),component:d.default.createElement(D,{identifier:"DemoContainer-".concat(a),nestedIndex:a})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"requestFocus",value:function(){this.props.disclosureManager.requestFocus()}},{key:"releaseFocus",value:function(){this.props.disclosureManager.releaseFocus()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(b,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(k,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,s=e.identifier;return d.default.createElement(m.default,{id:s,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:g("header")},"Content Component")},d.default.createElement("p",null,"id:"," ",s),t&&t.releaseFocus?d.default.createElement("p",null,"Modal has lost focus!"):null,t&&t.requestFocus?d.default.createElement("p",null,"Modal has gained focus!"):null,d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("div",{className:g("content-form-wrapper")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,t&&t.requestFocus?d.default.createElement("button",{type:"button",className:"requestFocus",onClick:this.requestFocus},"Request Focus"):null,t&&t.releaseFocus?d.default.createElement("button",{type:"button",className:"releaseFocus",onClick:this.releaseFocus},"Release Focus"):null)}}]),s}(d.default.Component);F.propTypes={disclosureManager:h.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number},F.defaultProps={nestedIndex:0};var D=(0,h.withDisclosureManager)(F),I=D;t.default=I},1727:function(e,t,s){e.exports={header:"DisclosureComponent-module__header___3C9Jx","content-form-wrapper":"DisclosureComponent-module__content-form-wrapper___k5ep-"}}}]);
//# sourceMappingURL=21-1b4aff3431da2414679f.js.map
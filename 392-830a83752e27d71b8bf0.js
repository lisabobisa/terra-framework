(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{1073:function(e,t,n){e.exports={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___fWXaX","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___2iJks","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___2Qmwn","tab-content":"TabsTemplate-module__tab-content___1qjIg"}},1082:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(5)),o=r(n(2)),l=r(n(1073)),u=i.default.bind(l.default),c={isLabelHidden:o.default.bool,label:o.default.string,id:o.default.string},f=function(e){var t=e.isLabelHidden,n=e.label,r=e.id;return a.default.createElement("div",{className:u("tab-content"),id:r},t?a.default.createElement("h3",{className:"truncationHeader"},n):null,"Content for"," ",a.default.createElement("i",null,n))};f.propTypes=c;var s=f;t.default=s},1083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var r=u(n(0)),a=u(n(2)),i=u(n(174)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(237));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var b={children:a.default.node,onChange:a.default.func,onResize:a.default.func,tiny:a.default.element,small:a.default.element,medium:a.default.element,large:a.default.element,huge:a.default.element,enormous:a.default.element,responsiveTo:a.default.oneOf(["window","parent"])},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,a,l=d(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=l.call(this)).state={element:null},e.setContainer=e.setContainer.bind(h(e)),e.handleResize=e.handleResize.bind(h(e)),e.handleWindowResize=e.handleWindowResize.bind(h(e)),e.animationFrameID=null,e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new i.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,a=t.tiny,i=t.small,l=t.medium,u=t.large,c=t.huge,f=t.enormous;r&&r(e);var s,d=(0,o.activeBreakpointForSize)(e);n&&d!==this.breakpoint&&n(d),this.breakpoint=d,(a||i||l||u||c||f)&&(s=e>=o.default.enormous&&f?"enormous":e>=o.default.huge&&c?"huge":e>=o.default.large&&u?"large":e>=o.default.medium&&l?"medium":e>=o.default.small&&i?"small":"tiny",this.state.element!==s&&this.setState({element:s}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:r.default.createElement(r.default.Fragment,null,"parent"===n&&!this.container&&r.default.createElement("div",{ref:this.setContainer}),t)}}])&&f(t.prototype,n),a&&f(t,a),u}(r.default.Component);y.propTypes=b,y.defaultProps={responsiveTo:"parent"};var v=y;t.default=v},2071:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(26)),i=r(n(27)),o=r(n(31)),l=r(n(28)),u=r(n(29)),c=r(n(30)),f=r(n(0)),s=r(n(1105)),d=r(n(1082));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var h=function(e){(0,l.default)(n,e);var t=p(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={activeKey:"Tab2"},r.handleSelection=r.handleSelection.bind((0,o.default)(r)),r}return(0,i.default)(n,[{key:"handleSelection",value:function(e,t){t!==this.state.activeKey&&this.setState({activeKey:t})}},{key:"render",value:function(){var e=f.default.createElement(s.default.Pane,{label:"Tab 1",key:"Tab1",id:"tab1"},f.default.createElement(d.default,{label:"Tab 1",id:"tab1Content"})),t=f.default.createElement(s.default.Pane,{label:"Tab 2",key:"Tab2",id:"tab2"},f.default.createElement(d.default,{label:"Tab 2",id:"tab2Content"})),n=f.default.createElement(s.default.Pane,{label:"Tab 3",key:"Tab 3",id:"tab3"},f.default.createElement(d.default,{label:"Tab 3",id:"tab3Content"}));return f.default.createElement("div",null,f.default.createElement("div",{id:"current-selection"},f.default.createElement("p",null,"Last Triggered Tab:",this.state.activeKey)),f.default.createElement(s.default,{id:"controlledTabs",onChange:this.handleSelection,activeKey:this.state.activeKey},e,t,n))}}]),n}(f.default.Component);t.default=h}}]);
//# sourceMappingURL=392-830a83752e27d71b8bf0.js.map
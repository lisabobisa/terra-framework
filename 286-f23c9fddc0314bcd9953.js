(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{1073:function(e,t,n){e.exports={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___fWXaX","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___2iJks","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___2Qmwn","tab-content":"TabsTemplate-module__tab-content___1qjIg"}},1082:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(5)),i=a(n(2)),o=a(n(1073)),u=r.default.bind(o.default),d={isLabelHidden:i.default.bool,label:i.default.string,id:i.default.string},f=function(e){var t=e.isLabelHidden,n=e.label,a=e.id;return l.default.createElement("div",{className:u("tab-content"),id:a},t?l.default.createElement("h3",{className:"truncationHeader"},n):null,"Content for"," ",l.default.createElement("i",null,n))};f.propTypes=d;var s=f;t.default=s},1083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var a=u(n(0)),l=u(n(2)),r=u(n(174)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var r=a?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(n,l,r):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(n(237));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var l=m(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var h={children:l.default.node,onChange:l.default.func,onResize:l.default.func,tiny:l.default.element,small:l.default.element,medium:l.default.element,large:l.default.element,huge:l.default.element,enormous:l.default.element,responsiveTo:l.default.oneOf(["window","parent"])},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,l,o=c(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=o.call(this)).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new r.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,a=t.onResize,l=t.tiny,r=t.small,o=t.medium,u=t.large,d=t.huge,f=t.enormous;a&&a(e);var s,c=(0,i.activeBreakpointForSize)(e);n&&c!==this.breakpoint&&n(c),this.breakpoint=c,(l||r||o||u||d||f)&&(s=e>=i.default.enormous&&f?"enormous":e>=i.default.huge&&d?"huge":e>=i.default.large&&u?"large":e>=i.default.medium&&o?"medium":e>=i.default.small&&r?"small":"tiny",this.state.element!==s&&this.setState({element:s}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:a.default.createElement(a.default.Fragment,null,"parent"===n&&!this.container&&a.default.createElement("div",{ref:this.setContainer}),t)}}])&&f(t.prototype,n),l&&f(t,l),u}(a.default.Component);y.propTypes=h,y.defaultProps={responsiveTo:"parent"};var v=y;t.default=v},1134:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(5)),i=a(n(2)),o=a(n(1105)),u=a(n(1082)),d=a(n(1073)),f=r.default.bind(d.default),s={fill:i.default.bool,tabFill:i.default.bool,id:i.default.string,containerClassName:i.default.string,responsiveTo:i.default.string},c=function(e){return l.default.createElement("div",{className:f(e.containerClassName),id:"tabs-container"},l.default.createElement(o.default,{tabFill:e.tabFill,fill:e.fill,id:e.id,responsiveTo:e.responsiveTo},l.default.createElement(o.default.Pane,{label:"Tab 1",key:"Tab1",id:"tab1"},l.default.createElement(u.default,{label:"Tab 1",id:"tab1Content"})),l.default.createElement(o.default.Pane,{label:"Tab 2",key:"Tab2",id:"tab2"},l.default.createElement(u.default,{label:"Tab 2",id:"tab2Content"})),l.default.createElement(o.default.Pane,{label:"Disabled Tab",key:"disabled",id:"disabled",isDisabled:!0}),l.default.createElement(o.default.Pane,{label:"Tab 4",key:"Tab4",id:"tab4"},l.default.createElement(u.default,{label:"Tab 4",id:"tab4Content"})),l.default.createElement(o.default.Pane,{label:"Tab 5",key:"Tab5",id:"tab5"},l.default.createElement(u.default,{label:"Tab 5",id:"tab5Content"})),l.default.createElement(o.default.Pane,{label:"Tab 6",key:"Tab6",id:"tab6"},l.default.createElement(u.default,{label:"Tab 6",id:"tab6Content"})),l.default.createElement(o.default.Pane,{label:"Tab 7",key:"Tab7",id:"tab7"},l.default.createElement(u.default,{label:"Tab 7",id:"tab7Content"})),l.default.createElement(o.default.Pane,{label:"Tab 8 with longer text that should truncate",key:"Tab8",id:"tab8"},l.default.createElement(u.default,{label:"Tab 8",id:"tab8Content"})),l.default.createElement(o.default.Pane,{label:"Tab 9",key:"Tab9",id:"tab9"},l.default.createElement(u.default,{label:"Tab 9",id:"tab9Content"})),l.default.createElement(o.default.Pane,{label:"Tab 10",key:"Tab10",id:"tab10"},l.default.createElement(u.default,{label:"Tab 10",id:"tab10Content"})),l.default.createElement(o.default.Pane,{label:"Tab 11",key:"Tab11",id:"tab11"},l.default.createElement(u.default,{label:"Tab 11",id:"tab11Content"})),l.default.createElement(o.default.Pane,{label:"Tab 12",key:"Tab12",id:"tab12"},l.default.createElement(u.default,{label:"Tab 12",id:"tab12Content"}))))};c.propTypes=s,c.defaultProps={containerClassName:"content-wrapper-default",responsiveTo:"parent"};var b=c;t.default=b},2073:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(1134));t.default=function(){return l.default.createElement(r.default,null)}}}]);
//# sourceMappingURL=286-f23c9fddc0314bcd9953.js.map
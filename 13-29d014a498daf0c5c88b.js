(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1059:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(2)),r=["location","parentPaths","showParent","showRoot","show"],i={propType:o.default.shape({location:o.default.shape({pathname:o.default.string}),parentPaths:o.default.arrayOf(o.default.string),showParent:o.default.func,showRoot:o.default.func,show:o.default.func}),create:function(e){var t={};return r.forEach((function(n){e&&e[n]&&(t[n]=e[n])})),Object.freeze(t)},isEqual:function(e,t){return e===t||!(!e||!t)&&!r.some((function(n){return e[n]!==t[n]}))}};t.default=i},1064:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.supportedComponentBreakpoints=t.processedRoutesPropType=t.componentConfigPropType=t.routePropType=t.routeConfigPropType=t.navigationLayoutConfigPropType=void 0;var o=a(n(175)),r=a(n(2)),i=["tiny","small","medium","large","huge"];t.supportedComponentBreakpoints=i;var u=r.default.objectOf((function(e,t,n,a,r){if(!("default"===t||i.indexOf(t)>=0))return new Error("Invalid prop '".concat(r,"' supplied to '").concat(n,"'. Validation failed."));var u=e[t],l=!0;return null!==u&&("object"!==(0,o.default)(u)||!u.componentClass||"object"!==(0,o.default)(u.props)&&null!==u.props&&void 0!==u.props)&&(l=!1),!!l||new Error("Invalid prop '".concat(r,"' supplied to '").concat(n,"'. Validation failed."))}));t.componentConfigPropType=u;var l=r.default.shape({path:function(e,t,n){return!!/\/.*/.test(e[t])||new Error("Invalid prop `".concat(t,"` supplied to")+" `".concat(n,"`. Validation failed. ").concat(t," must start with a forward slash (/)."))},component:u.isRequired});t.routePropType=l;var s=r.default.objectOf(l);t.routeConfigPropType=s;var d=r.default.shape({header:s,menu:s,content:s});t.navigationLayoutConfigPropType=d;var c=r.default.arrayOf(r.default.shape({path:r.default.string,componentClass:r.default.func,componentProps:r.default.object}));t.processedRoutesPropType=c},1109:function(e,t,n){e.exports={"clinical-lowlight-theme":"LayoutSlidePanel-module__clinical-lowlight-theme___2-Et6","orion-fusion-theme":"LayoutSlidePanel-module__orion-fusion-theme___2gQtp","content-container":"LayoutSlidePanel-module__content-container___1m5jV","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___3eewh",content:"LayoutSlidePanel-module__content___3B7TM",panel:"LayoutSlidePanel-module__panel___6Nxw2","is-animated":"LayoutSlidePanel-module__is-animated___kTH1Z","is-open":"LayoutSlidePanel-module__is-open___2sbzk","is-tiny":"LayoutSlidePanel-module__is-tiny___vnS05","is-small":"LayoutSlidePanel-module__is-small___2kbxc","is-overlay":"LayoutSlidePanel-module__is-overlay___2HevX","is-squish":"LayoutSlidePanel-module__is-squish___2WqMy","main-container":"LayoutSlidePanel-module__main-container___1O3uK"}},1116:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),r=a(n(24)),i=a(n(26)),u=a(n(31)),l=a(n(27)),s=a(n(28)),d=a(n(29)),c=a(n(30)),f=a(n(0)),p=a(n(2)),h=n(87),m=a(n(1123)),v=a(n(1382)),y=n(1064),g=n(1385);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var b=function(e){var t=e||window.innerWidth;return t>=1440?"huge":t>=1216?"large":t>=992?"medium":t>=768?"small":"tiny"},_={header:p.default.element,menu:p.default.element,children:p.default.element,menuText:p.default.string,config:y.navigationLayoutConfigPropType.isRequired,indexPath:p.default.string,location:p.default.object.isRequired,match:p.default.object.isRequired,history:p.default.object.isRequired,staticContext:p.default.object},O=function(e){(0,s.default)(n,e);var t=P(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).updateSize=a.updateSize.bind((0,u.default)(a)),a.state={size:b(),processedRoutes:n.processRouteConfig(e.config),prevPropsConfig:e.config},a}return(0,l.default)(n,null,[{key:"processRouteConfig",value:function(e){var t={};return y.supportedComponentBreakpoints.forEach((function(n){var a={};a.header=(0,g.reduceRouteConfig)(e.header,n),a.menu=(0,g.reduceRouteConfig)(e.menu,n),a.content=(0,g.reduceRouteConfig)(e.content,n),t[n]=a})),t}}]),(0,l.default)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"updateSize",value:function(){var e=b();this.state.size!==e&&this.setState({size:e})}},{key:"decorateElement",value:function(e,t){if(!e)return null;var n=this.state.size;return f.default.cloneElement(e,{navigationLayoutRoutes:t,navigationLayoutSize:n})}},{key:"render",value:function(){var e=this.props,t=e.header,n=e.children,a=e.menu,i=e.menuText,u=(e.config,e.indexPath),l=e.location,s=(e.match,e.history,e.staticContext,(0,r.default)(e,["header","children","menu","menuText","config","indexPath","location","match","history","staticContext"])),d=this.state,c=d.size,p=d.processedRoutes,h=t||f.default.createElement(v.default,null),y=n||f.default.createElement(v.default,{redirectPath:u}),P=a;return!P&&(0,g.validateMatchExists)(l.pathname,p[c].menu)&&(P=f.default.createElement(v.default,{stackNavigationIsEnabled:!0})),f.default.createElement(m.default,(0,o.default)({},s,{header:this.decorateElement(h,p[c].header),menu:this.decorateElement(P,p[c].menu),menuText:i}),this.decorateElement(y,p[c].content))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.config!==t.prevPropsConfig?{processedRoutes:n.processRouteConfig(e.config)}:null}}]),n}(f.default.Component);O.propTypes=_;var k=(0,h.withRouter)(O);t.default=k},1123:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),r=a(n(170)),i=a(n(26)),u=a(n(31)),l=a(n(27)),s=a(n(28)),d=a(n(29)),c=a(n(30)),f=a(n(0)),p=a(n(2)),h=a(n(5)),m=a(n(57)),v=a(n(375)),y=a(n(1109)),g=a(n(1139)),P=n(1155);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var k=h.default.bind(y.default),E={header:p.default.element,menu:p.default.element,menuText:p.default.string,children:p.default.element},R=function(e){(0,s.default)(n,e);var t=O(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).toggleMenu=a.toggleMenu.bind((0,u.default)(a)),a.togglePin=a.togglePin.bind((0,u.default)(a)),a.updateSize=(0,v.default)(a.updateSize.bind((0,u.default)(a)),100),a.renderHeader=a.renderHeader.bind((0,u.default)(a)),a.renderMenu=a.renderMenu.bind((0,u.default)(a)),a.renderContent=a.renderContent.bind((0,u.default)(a)),a.state=n.stateForProps(e,{size:(0,P.getBreakpointSize)(),prevProps:a.props}),a}return(0,l.default)(n,null,[{key:"stateForProps",value:function(e,t){var n="tiny"===t.size||"small"===t.size,a=!n,o=!!e.menu;return _(_({},t||{}),{},{isFixedMenu:a,isToggleMenu:n,menuIsPresent:o,menuIsOpen:o&&(t.menuIsOpen||a),menuIsPinned:o&&t.menuIsPinned})}},{key:"getDerivedStateFromProps",value:function(e,t){return e!==t.prevProps?n.stateForProps(e,t):null}}]),(0,l.default)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"updateSize",value:function(){var e=(0,P.getBreakpointSize)();this.state.size!==e&&this.setState(n.stateForProps(this.props,{size:e}))}},{key:"toggleMenu",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}),t)}))}},{key:"togglePin",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsPinned:!e.menuIsPinned}}),t)}))}},{key:"renderHeader",value:function(){var e=this.props.header,t=this.state,n=t.size,a=t.menuIsOpen,o=t.isToggleMenu,r=t.menuIsPresent;if(!e)return null;var i=o&&r;return f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:i?this.toggleMenu:void 0,menuIsOpen:a}})}},{key:"renderMenu",value:function(){var e=this.props.menu,t=this.state,n=t.size,a=t.menuIsOpen,o=t.menuIsPinned,r=t.isToggleMenu,i=t.menuIsPresent,u=r&&i;return i?f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:u?this.toggleMenu:void 0,menuIsOpen:a,menuIsPinned:o}}):null}},{key:"renderContent",value:function(){var e=this.props.children,t=this.state,n=t.size,a=t.menuIsOpen,o=t.isToggleMenu,r=t.menuIsPresent,i=o&&r;return f.default.createElement(m.default,{fill:!0,header:o&&this.renderHeader(),className:k("content-container")},e?f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:i?this.toggleMenu:void 0,menuIsOpen:a}}):null)}},{key:"render",value:function(){var e=this.props.menuText,t=this.state,n=t.menuIsOpen,a=t.menuIsPinned,r=t.size,i=t.isFixedMenu,u=t.isToggleMenu;return f.default.createElement(m.default,(0,o.default)({fill:!0,header:!u&&this.renderHeader()},(0,P.getCustomProps)(this.props,E)),f.default.createElement(g.default,{panelContent:this.renderMenu(),panelBehavior:a||i?"squish":"overlay",size:r,onToggle:this.toggleMenu,toggleText:e,isOpen:n,isAnimated:!0},this.renderContent()))}}]),n}(f.default.Component);R.propTypes=E;var S=R;t.default=S},1139:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),r=a(n(24)),i=a(n(26)),u=a(n(27)),l=a(n(31)),s=a(n(28)),d=a(n(29)),c=a(n(30)),f=a(n(0)),p=a(n(2)),h=a(n(11)),m=a(n(5)),v=a(n(8)),y=a(n(241)),g=a(n(242)),P=a(n(1084)),b=a(n(1109));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var O=m.default.bind(b.default),k={isAnimated:p.default.bool,isOpen:p.default.bool,isToggleEnabled:p.default.bool,children:p.default.element,panelBehavior:p.default.oneOf(["overlay","squish"]),panelContent:p.default.node,size:p.default.string.isRequired,onToggle:p.default.func,toggleText:p.default.string},E=function(e){(0,s.default)(n,e);var t=_(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,l.default)(a)),a.handleTransitionEnd=a.handleTransitionEnd.bind((0,l.default)(a)),a.preparePanelForTransition=a.preparePanelForTransition.bind((0,l.default)(a)),a.isHidden=!e.isOpen,a}return(0,u.default)(n,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,P.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,P.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,P.default)(this.panelNode)[0]&&(0,P.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,a=(e.isToggleEnabled,e.children),i=e.panelBehavior,u=e.panelContent,l=e.size,s=e.onToggle,d=(e.toggleText,(0,r.default)(e,["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"]));this.preparePanelForTransition();var c="tiny"===l,p="small"===l,m=c||p,v=!!m||"overlay"===i,P=n&&v,b=m?"dark":"clear",_=this.context,k=(0,h.default)(O("layout-slide-panel",{"is-open":n},{"is-overlay":v},{"is-squish":!v},_.className),d.className),E=O("panel",{"is-tiny":c},{"is-small":p},{"is-animated":t&&v&&!!u});return f.default.createElement("div",(0,o.default)({},d,{className:k}),f.default.createElement("div",{className:E,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},u),f.default.createElement(g.default,{className:O("content")},f.default.createElement(y.default,{isRelativeToContainer:!0,onRequestClose:s,isOpen:P,backgroundStyle:b,zIndex:"6000"}),f.default.createElement("main",{role:"main","data-terra-layout-main":!0,className:O("main-container")},a)))}}]),n}(f.default.Component);E.propTypes=k,E.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"},E.contextType=v.default;var R=E;t.default=R},1155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomProps=t.getBreakpointSize=void 0;var a=768,o=992,r=1216,i=1440;t.getBreakpointSize=function(e){var t=e||window.innerWidth;return t>=i?"huge":t>=r?"large":t>=o?"medium":t>=a?"small":"tiny"};t.getCustomProps=function(e,t){return Object.keys(e).filter((function(e){return!Object.keys(t).includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),{})}},1382:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(24)),r=a(n(0)),i=a(n(2)),u=n(87),l=a(n(5)),s=a(n(1383)),d=n(1064),c=a(n(1384)),f=l.default.bind(c.default),p={navigationLayoutRoutes:d.processedRoutesPropType,redirectPath:i.default.string,stackNavigationIsEnabled:i.default.bool},h=function(e){var t=e.navigationLayoutRoutes,n=e.redirectPath,a=e.stackNavigationIsEnabled,i=(0,o.default)(e,["navigationLayoutRoutes","redirectPath","stackNavigationIsEnabled"]);return r.default.createElement("div",{className:f("content")},r.default.createElement(s.default,{navEnabled:a,routes:t,ancestorProps:i},n&&r.default.createElement(u.Redirect,{to:n})))};h.propTypes=p;var m=h;t.default=m},1383:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(19)),r=a(n(26)),i=a(n(27)),u=a(n(31)),l=a(n(28)),s=a(n(29)),d=a(n(30)),c=a(n(0)),f=a(n(2)),p=n(87),h=a(n(1059));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var v={routes:n(1064).processedRoutesPropType,navEnabled:f.default.bool,location:f.default.object,history:f.default.object,children:f.default.node,ancestorProps:f.default.object},y=function(e){(0,l.default)(n,e);var t=m(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).updateStackLocation=a.updateStackLocation.bind((0,u.default)(a)),a.createRoutes=a.createRoutes.bind((0,u.default)(a)),a.state={stackLocation:void 0},a}return(0,i.default)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState({stackLocation:void 0})}},{key:"updateStackLocation",value:function(e){this.setState({stackLocation:{pathname:e}})}},{key:"createRoutes",value:function(e){var t=this,n=this.props,a=n.navEnabled,r=n.location,i=n.history,u=n.ancestorProps,l=this.state.stackLocation;if(e&&e.length)return e.map((function(e){var n={location:l||r,show:function(e){var n=e.path;(0,p.matchPath)(r.pathname,{path:n})?t.updateStackLocation(n):i.push(n)}};e.parentPaths&&e.parentPaths.length&&(n.parentPaths=e.parentPaths.reduce((function(e,t){var n=(0,p.matchPath)(r.pathname,{path:t});return n&&e.push(n.url),e}),[]),a&&n.parentPaths.length&&(n.showParent=function(){t.updateStackLocation(n.parentPaths[n.parentPaths.length-1])},n.parentPaths.length>1&&(n.showRoot=function(){t.updateStackLocation(n.parentPaths[0])})));var s=e.componentClass;return c.default.createElement(p.Route,{path:e.path,key:e.path,render:function(){return c.default.createElement(p.Route,{location:t.props.location,render:function(){return c.default.createElement(s,(0,o.default)({},u,e.componentProps,{routingStackDelegate:h.default.create(n)}))}})}})}))}},{key:"render",value:function(){var e=this.props,t=e.routes,n=e.location,a=e.children;return c.default.createElement(p.Switch,{location:this.state.stackLocation||n},this.createRoutes(t),a)}}]),n}(c.default.Component);y.propTypes=v;var g=(0,p.withRouter)(y);t.default=g},1384:function(e,t,n){e.exports={content:"NavigationLayoutContent-module__content___2DYgO"}},1385:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.validateMatchExists=t.reduceRouteConfig=void 0;var o=a(n(170)),r=a(n(175)),i=n(87);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.reduceRouteConfig=function(e,t){return e?Object.keys(e).reduce((function(n,a){var o,i=e[a];if("object"===(0,r.default)(i.component)){var u=i.component[t];u?o=u:i.component.default&&(o=i.component.default)}return o&&o.componentClass&&n.push({path:i.path,componentClass:o.componentClass,componentProps:o.props,parentPaths:[],refuseRoutingStackNavigation:o.refuseRoutingStackNavigation}),n}),[]).sort((function(e,t){return e.path<t.path?1:e.path>t.path?-1:0})).map((function(e,t,n){if("/"===e.path)return e;for(var a=e.path.split("/"),o=[],r=0,i=a.length;r<i-2;r+=1)a.pop(),o.push(a.join("/"));o.push("/");var u=n.filter((function(e){return-1!==o.indexOf(e.path)&&!e.refuseRoutingStackNavigation})).map((function(e){return e.path}));return l(l({},e),{},{parentPaths:u.reverse()})})):[]};t.validateMatchExists=function(e,t){if(!t||!e)return!1;for(var n=0,a=t.length;n<a;n+=1){var o=t[n];if((0,i.matchPath)(e,{path:o.path}))return!0}return!1}}}]);
//# sourceMappingURL=13-29d014a498daf0c5c88b.js.map
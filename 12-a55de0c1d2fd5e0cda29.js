(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1105:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),l=a(n(24)),r=a(n(26)),u=a(n(27)),s=a(n(31)),o=a(n(28)),d=a(n(29)),c=a(n(30)),f=a(n(0)),h=a(n(2)),p=a(n(11)),v=a(n(5)),y=a(n(8)),g=a(n(57)),m=a(n(1083)),C=a(n(1300)),b=a(n(1705)),k=a(n(1706)),R=a(n(1707)),w=a(n(1347));function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var O=v.default.bind(w.default),K={tabFill:h.default.bool,fill:h.default.bool,onChange:h.default.func,children:h.default.node.isRequired,activeKey:h.default.string,defaultActiveKey:h.default.string,responsiveTo:h.default.oneOf(["window","parent","none"])},S=function(e){(0,o.default)(n,e);var t=T(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).getInitialState=a.getInitialState.bind((0,s.default)(a)),a.getActiveTabIndex=a.getActiveTabIndex.bind((0,s.default)(a)),a.handleOnChange=a.handleOnChange.bind((0,s.default)(a)),a.handleTruncationChange=a.handleTruncationChange.bind((0,s.default)(a)),a.wrapPaneOnClick=a.wrapPaneOnClick.bind((0,s.default)(a)),a.setTabs=a.setTabs.bind((0,s.default)(a)),a.state={activeKey:a.getInitialState(),isLabelTruncated:!1,showCollapsedTabs:!1},a}return(0,u.default)(n,[{key:"getInitialState",value:function(){return this.props.activeKey?null:R.default.initialSelectedTabKey(this.props.children,this.props.defaultActiveKey)}},{key:"setTabs",value:function(e){var t="tiny"===e;this.state.showCollapsedTabs!==t&&this.setState({showCollapsedTabs:t})}},{key:"getActiveTabIndex",value:function(){var e=this,t=-1;return f.default.Children.forEach(this.props.children,(function(n,a){n.key!==e.state.activeKey&&n.key!==e.props.activeKey||(t=a)})),t}},{key:"handleOnChange",value:function(e,t){t.props.isDisabled||(this.props.onChange&&this.props.onChange(e,t.key),!this.props.activeKey&&R.default.shouldHandleSelection(this.state.activeKey,t.key)&&this.setState({activeKey:t.key}))}},{key:"handleTruncationChange",value:function(e){this.state.isLabelTruncated!==e&&this.setState({isLabelTruncated:e})}},{key:"wrapPaneOnClick",value:function(e){var t=this;return function(n){t.handleOnChange(n,e),e.props.onClick&&e.props.onClick(n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.tabFill,a=t.fill,r=(t.onChange,t.children),u=t.activeKey,s=(t.defaultActiveKey,t.responsiveTo),o=(0,l.default)(t,["tabFill","fill","onChange","children","activeKey","defaultActiveKey","responsiveTo"]),d=this.context,c=(0,p.default)(O("tabs-container",{"tab-fill":n},"structural",d.className),o.className),h=null,v=!1,y=[];f.default.Children.forEach(r,(function(t){var n=!1;t.key!==e.state.activeKey&&t.key!==u||(n=!0,h=t.props.children),t.props.isIconOnly&&(v=!0),y.push(f.default.cloneElement(t,{className:O({"is-active":n},t.props.className),onClick:e.wrapPaneOnClick(t),isActive:n}))})),h=f.default.Children.map(h,(function(t){return f.default.cloneElement(t,{isLabelHidden:v||e.state.isLabelTruncated})}));var C=function(){var t=f.default.createElement(b.default,{activeKey:u||e.state.activeKey,activeIndex:e.getActiveTabIndex(),onChange:e.handleOnChange,onTruncationChange:e.handleTruncationChange,variant:"structural"},y);if("parent"===s||"window"===s){var n=f.default.createElement(k.default,{activeKey:u||e.state.activeKey,onTruncationChange:e.handleTruncationChange},y);return f.default.createElement(m.default,{onChange:e.setTabs,responsiveTo:s},e.state.showCollapsedTabs?n:t)}return t}();return f.default.createElement(g.default,(0,i.default)({},o,{className:c,fill:a,header:C}),f.default.createElement("div",{role:"tabpanel",className:O("pane-content",{"fill-parent":a})},h))}}]),n}(f.default.Component);S.propTypes=K,S.defaultProps={tabFill:!1,fill:!1,responsiveTo:"parent"},S.Pane=C.default,S.Utils=R.default,S.contextType=y.default;var I=S;t.default=I},1463:function(e,t,n){"use strict";var a=n(13),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(19)),r=i(n(24)),u=i(n(26)),s=i(n(27)),o=i(n(31)),d=i(n(28)),c=i(n(29)),f=i(n(30)),h=i(n(0)),p=i(n(2)),v=i(n(5)),y=i(n(8)),g=i(n(367)),m=i(n(382)),C=a(n(21)),b=n(9),k=i(n(1347));function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var w=v.default.bind(k.default),T={activeKey:p.default.string,children:p.default.node,refCallback:p.default.func},O=function(e){(0,d.default)(n,e);var t=R(n);function n(e){var a;return(0,u.default)(this,n),(a=t.call(this,e)).handleOnRequestClose=a.handleOnRequestClose.bind((0,o.default)(a)),a.handleOnClick=a.handleOnClick.bind((0,o.default)(a)),a.handleOnKeyDown=a.handleOnKeyDown.bind((0,o.default)(a)),a.getTargetRef=a.getTargetRef.bind((0,o.default)(a)),a.setTargetRef=a.setTargetRef.bind((0,o.default)(a)),a.wrapOnClick=a.wrapOnClick.bind((0,o.default)(a)),a.state={isOpen:!1},a}return(0,s.default)(n,[{key:"getTargetRef",value:function(){return this.targetRef}},{key:"setTargetRef",value:function(e){this.targetRef=e,this.props.refCallback&&this.props.refCallback(e)}},{key:"handleOnRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"handleOnClick",value:function(){this.setState({isOpen:!0})}},{key:"handleOnKeyDown",value:function(e){e.nativeEvent.keyCode===C.KEY_RETURN&&this.setState({isOpen:!0})}},{key:"wrapOnClick",value:function(e){var t=this;return function(n){n.stopPropagation(),e.props.onClick&&e.props.onClick(n),t.setState({isOpen:!1})}}},{key:"render",value:function(){var e,t=this,n=[],a=!1;h.default.Children.forEach(this.props.children,(function(i){var u=i.props,s=u.label,o=(u.customDisplay,u.icon,u.isIconOnly,(0,r.default)(u,["label","customDisplay","icon","isIconOnly"])),d=!1;t.props.activeKey===i.key&&(e=s,d=!0,a=!0),n.push(h.default.createElement(g.default.Item,(0,l.default)({},o,{text:s,onClick:t.wrapOnClick(i),isSelected:d,isSelectable:!0,key:i.key})))}));var i=this.context;return h.default.createElement("div",{role:"button",tabIndex:"0",ref:this.setTargetRef,onClick:this.handleOnClick,onKeyDown:this.handleOnKeyDown,className:w("tab-menu",{"is-active":a},i.className),"data-terra-tabs-menu":!0},h.default.createElement(b.FormattedMessage,{id:"Terra.tabs.more"},(function(t){return h.default.createElement("span",null,e||t)})),h.default.createElement(m.default,null),h.default.createElement(g.default,{onRequestClose:this.handleOnRequestClose,targetRef:this.getTargetRef,isOpen:this.state.isOpen},n))}}]),n}(h.default.Component);O.propTypes=T,O.contextType=y.default;var K=O;t.default=K},1705:function(e,t,n){"use strict";var a=n(13),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(26)),r=i(n(27)),u=i(n(31)),s=i(n(28)),o=i(n(29)),d=i(n(30)),c=i(n(0)),f=i(n(2)),h=i(n(5)),p=i(n(8)),v=i(n(174)),y=a(n(21)),g=i(n(1463)),m=i(n(1347));function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,o.default)(this,n)}}var b=h.default.bind(m.default),k={activeKey:f.default.string.isRequired,activeIndex:f.default.number.isRequired,children:f.default.node.isRequired,variant:f.default.oneOf(["modular-centered","modular-left-aligned","structural"]).isRequired,onChange:f.default.func.isRequired,onTruncationChange:f.default.func},R=function(e){(0,s.default)(n,e);var t=C(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).setContainer=a.setContainer.bind((0,u.default)(a)),a.setMenuRef=a.setMenuRef.bind((0,u.default)(a)),a.resetCache=a.resetCache.bind((0,u.default)(a)),a.handleResize=a.handleResize.bind((0,u.default)(a)),a.handleSelectionAnimation=a.handleSelectionAnimation.bind((0,u.default)(a)),a.handleOnKeyDown=a.handleOnKeyDown.bind((0,u.default)(a)),a.handleMenuOnKeyDown=a.handleMenuOnKeyDown.bind((0,u.default)(a)),a.handleFocusLeft=a.handleFocusLeft.bind((0,u.default)(a)),a.handleFocusRight=a.handleFocusRight.bind((0,u.default)(a)),a.resetCache(),a}return(0,r.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new v.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.resizeObserver.observe(this.container),this.handleResize(this.contentWidth),this.handleSelectionAnimation()}},{key:"componentDidUpdate",value:function(e){this.isCalculating?(this.isCalculating=!1,this.handleResize(this.contentWidth)):c.default.Children.count(this.props.children)!==c.default.Children.count(e.children)?(this.resetCache(),this.forceUpdate()):this.handleSelectionAnimation()}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuRef",value:function(e){null!==e&&(this.menuRef=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"handleResize",value:function(e){for(var t=parseInt(window.getComputedStyle(this.menuRef,null).getPropertyValue("margin-left"),10),n=parseInt(window.getComputedStyle(this.menuRef,null).getPropertyValue("margin-right"),10),a=e-(this.menuRef.getBoundingClientRect().width+t+n),i=c.default.Children.count(this.props.children),l=i,r=0,u=!0,s=0;s<this.props.children.length;s+=1){var o=this.container.children[s],d=parseFloat(window.getComputedStyle(this.menuRef,null).getPropertyValue("margin-left")),f=parseFloat(window.getComputedStyle(this.menuRef,null).getPropertyValue("margin-right"));if((r+=parseFloat(window.getComputedStyle(o,null).getPropertyValue("min-width"))+d+f)>a&&!(s===i-1&&r<=e)){l=s,u=!1;break}}for(var h=!1,p=0,v=0;v<l;v+=1){if(p+=this.container.children[v].getBoundingClientRect().width,u&&p>e||!u&&p>a){h=!0;break}}this.props.onTruncationChange(h),this.menuHidden===u&&this.hiddenStartIndex===l||(this.menuHidden=u,this.hiddenStartIndex=l,this.forceUpdate())}},{key:"handleSelectionAnimation",value:function(){if(this.selectionBar&&window.getComputedStyle(this.selectionBar,null).getPropertyValue("transition-property").includes("transform")){var e=this.props.activeIndex>this.hiddenStartIndex?this.hiddenStartIndex:this.props.activeIndex,t=this.container.children[e];if(t){var n="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),a=t.getBoundingClientRect(),i=a.width,l=a.left-this.container.getBoundingClientRect().left;n&&(l=a.right-this.container.getBoundingClientRect().right),this.selectionBar.style.width="".concat(i,"px"),this.selectionBar.style.transform="translate3d(".concat(l,"px,0,0)")}}}},{key:"handleOnKeyDown",value:function(e){if(!(c.default.Children.count(this.props.children)<2)){var t="tablist"===e.target.getAttribute("role"),n="true"===e.target.getAttribute("data-terra-tabs-menu");if(t||n){var a="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),i=this.container.children;e.nativeEvent.keyCode===y.KEY_LEFT?a?this.handleFocusRight(i,e):this.handleFocusLeft(i,e):e.nativeEvent.keyCode===y.KEY_RIGHT&&(a?this.handleFocusLeft(i,e):this.handleFocusRight(i,e))}}}},{key:"handleFocusRight",value:function(e,t){if(!(this.props.activeIndex>=this.hiddenStartIndex))for(var n=this.props.activeIndex+1;n<e.length;n+=1)if(!this.props.children[n].props.isDisabled){if(e[n]===this.menuRef){this.menuRef.focus();break}this.props.onChange(t,this.props.children[n]);break}}},{key:"handleFocusLeft",value:function(e,t){var n=this.props.activeIndex-1;(n>=this.hiddenStartIndex||document.activeElement===this.menuRef)&&(n=this.hiddenStartIndex-1);for(var a=n;a>=0;a-=1)if(!this.props.children[a].props.isDisabled){document.activeElement===this.menuRef&&this.container.focus(),this.props.onChange(t,this.props.children[a]);break}}},{key:"handleMenuOnKeyDown",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this,t=[],n=[];c.default.Children.forEach(this.props.children,(function(a,i){i<e.hiddenStartIndex||e.hiddenStartIndex<0?t.push(a):n.push(a)}));var a=this.context,i=this.menuHidden?null:c.default.createElement(g.default,{onKeyDown:this.handleMenuOnKeyDown,refCallback:this.setMenuRef,activeKey:this.props.activeKey},n),l="modular-centered"===this.props.variant||"modular-left-aligned"===this.props.variant?c.default.createElement("div",{className:b("selection-bar"),ref:function(t){t&&(e.selectionBar=t)}}):null;return c.default.createElement("div",null,c.default.createElement("div",{className:b("collapsible-tabs-container",{"is-calculating":this.isCalculating},a.className),ref:this.setContainer,tabIndex:"0",onKeyDown:this.handleOnKeyDown,role:"tablist"},t,i),l)}}]),n}(c.default.Component);R.propTypes=k,R.contextType=p.default;var w=R;t.default=w},1706:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),l=a(n(2)),r=a(n(5)),u=a(n(8)),s=a(n(1463)),o=a(n(1347)),d=r.default.bind(o.default),c={activeKey:l.default.string,children:l.default.node,onTruncationChange:l.default.func},f=function(e){e.onTruncationChange(!1);var t=i.default.useContext(u.default);return i.default.createElement("div",{className:d("collapsed-tabs-container",t.className)},i.default.createElement(s.default,{activeKey:e.activeKey},e.children))};f.propTypes=c;var h=f;t.default=h},1707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={shouldHandleSelection:function(e,t){return t!==e},initialSelectedTabKey:function(e,t){return t||(e.length?e[0].key:e.key)}};t.default=a}}]);
//# sourceMappingURL=12-a55de0c1d2fd5e0cda29.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1047:function(e,n,t){"use strict";var l=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.SlidePanelPositions=n.default=void 0;var a=l(t(19)),i=l(t(24)),o=l(t(26)),r=l(t(27)),s=l(t(31)),d=l(t(28)),u=l(t(29)),p=l(t(30)),f=l(t(0)),c=l(t(2)),_=l(t(11)),m=l(t(5)),h=l(t(8)),v=l(t(1058));function P(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,l=(0,p.default)(e);if(n){var a=(0,p.default)(this).constructor;t=Reflect.construct(l,arguments,a)}else t=l.apply(this,arguments);return(0,u.default)(this,t)}}var S=m.default.bind(v.default),b={START:"start",END:"end"};n.SlidePanelPositions=b;var N={panelAriaLabel:c.default.string,mainAriaLabel:c.default.string,mainContent:c.default.node,panelContent:c.default.node,panelBehavior:c.default.oneOf(["overlay","squish"]),panelPosition:c.default.oneOf(["start","end"]),panelSize:c.default.oneOf(["small","large"]),isFullscreen:c.default.bool,isOpen:c.default.bool,fill:c.default.bool},g={panelBehavior:"overlay",panelPosition:b.END,panelSize:"small"},y=function(e){(0,d.default)(t,e);var n=P(t);function t(e){var l;return(0,o.default)(this,t),(l=n.call(this,e)).setPanelNode=l.setPanelNode.bind((0,s.default)(l)),l.mainNode=f.default.createRef(),l}return(0,r.default)(t,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,n=e.panelAriaLabel,t=e.mainAriaLabel,l=e.mainContent,o=e.panelContent,r=e.panelBehavior,s=e.panelPosition,d=e.panelSize,u=e.isFullscreen,p=e.isOpen,c=e.fill,m=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),h=this.context,v=(0,_.default)(S("slide-panel",{"is-open":p},{"is-fullscreen":u},{fill:c},h.className),m.className),P=f.default.createElement("div",{className:S(["panel"]),key:"panel",tabIndex:"-1","aria-label":n,"aria-hidden":p?"false":"true",ref:this.setPanelNode},o),N=f.default.createElement("div",{className:S("main"),key:"main",tabIndex:"-1","aria-label":t,ref:this.mainNode},l),g=s===b.START?f.default.createElement(f.default.Fragment,null,P,N):f.default.createElement(f.default.Fragment,null,N,P);return f.default.createElement("div",(0,a.default)({},m,{className:v,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":s,"data-slide-panel-panel-size":d}),g)}}]),t}(f.default.Component);y.propTypes=N,y.defaultProps=g,y.contextType=h.default;var O=y;n.default=O},1058:function(e,n,t){e.exports={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___2ZpLf","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___1gpNu","slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1122:function(e,n,t){e.exports={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___1FDjp","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___9DcFW","main-content":"SlidePanelDocCommon-test-module__main-content___25hpF","panel-content":"SlidePanelDocCommon-test-module__panel-content___3OmYU","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___1Zi-9",button:"SlidePanelDocCommon-test-module__button___3r3Sh"}},2059:function(e,n,t){"use strict";var l=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),i=l(t(5)),o=l(t(1047)),r=l(t(1122)),s=i.default.bind(r.default),d=function(){return a.default.createElement("div",{className:s("content-wrapper-large")},a.default.createElement(o.default,{mainContent:a.default.createElement("div",{className:s("main-content")}),panelContent:a.default.createElement("div",{className:s("panel-content")}),panelBehavior:"squish",panelSize:"large",isOpen:!0,fill:!0}))};n.default=d}}]);
//# sourceMappingURL=284-fe7d5ac0941c08ab97c0.js.map
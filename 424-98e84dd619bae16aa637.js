(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{1132:function(e,t,l){},1805:function(e,t,l){"use strict";var n=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(26)),o=n(l(27)),u=n(l(31)),d=n(l(28)),r=n(l(29)),i=n(l(30)),c=n(l(0)),s=n(l(235));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,r.default)(this,l)}}l(1132);var p=function(e){(0,d.default)(l,e);var t=f(l);function l(){var e;return(0,a.default)(this,l),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,u.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,u.default)(e)),e}return(0,o.default)(l,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(s.default,{ariaLabel:"Terra Modal",isOpen:this.state.isOpen,isFullscreen:!0,onRequestClose:this.handleCloseModal,classNameModal:"test-background-class"},c.default.createElement("div",null,c.default.createElement("h1",null,"Terra Modal"),c.default.createElement("h2",null,"Subtitle"),c.default.createElement("hr",null),c.default.createElement("p",null,"The Terra Modal is appended to the document body."),c.default.createElement("p",null,"Modal is assigned a role of 'document' for accessibility."),c.default.createElement("button",{type:"button",id:"modal-button",onClick:this.handleCloseModal},"Close Modal"))),c.default.createElement("button",{type:"button",id:"modal-open-button",onClick:this.handleOpenModal},"Open isOpen modal"))}}]),l}(c.default.Component);t.default=p}}]);
//# sourceMappingURL=424-98e84dd619bae16aa637.js.map
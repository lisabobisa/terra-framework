(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1098:function(e,t,l){"use strict";var a=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(l(19)),d=a(l(24)),i=a(l(0)),u=a(l(235)),n=a(l(2)),r=a(l(11)),s=a(l(5)),c=a(l(8)),_=a(l(1104)),m=s.default.bind(_.default),f={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},h={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(f)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},g=function(e){var t=e.header,l=e.footer,a=e.children,n=e.onRequestClose,s=e.isOpen,_=e.ariaLabel,h=e.width,g=e.closeOnOutsideClick,p=e.rootSelector,w=(0,d.default)(e,["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"]),v=i.default.useContext(c.default);if(!s)return null;var M=["dialog-modal-wrapper",v.className];return h in f?M.push("width-".concat(f[h])):M.push("width-1120"),i.default.createElement(u.default,{ariaLabel:_,role:"dialog",classNameModal:m(M),isOpen:s,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:g,rootSelector:p},i.default.createElement("div",(0,o.default)({},w,{className:(0,r.default)(m("dialog-modal-inner-wrapper"),w.className)}),i.default.createElement("div",{className:m("dialog-modal-container")},i.default.createElement("div",null,t),i.default.createElement("div",{className:m("dialog-modal-body")},a),i.default.createElement("div",null,l))))};g.propTypes=h,g.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var p=g;t.default=p},1104:function(e,t,l){e.exports={"clinical-lowlight-theme":"DialogModal-module__clinical-lowlight-theme___gVCR2","orion-fusion-theme":"DialogModal-module__orion-fusion-theme___-2y-b","dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___3L6PG","width-320":"DialogModal-module__width-320___1SJka","width-480":"DialogModal-module__width-480___2dOBX","width-560":"DialogModal-module__width-560___3zVv8","width-640":"DialogModal-module__width-640___2PEtl","width-800":"DialogModal-module__width-800___2rG5D","width-960":"DialogModal-module__width-960___wkRF0","width-1120":"DialogModal-module__width-1120___qNLsc","width-1280":"DialogModal-module__width-1280___1bosK","width-1440":"DialogModal-module__width-1440___1bYIL","width-1600":"DialogModal-module__width-1600___2Rb_O","width-1760":"DialogModal-module__width-1760___2xeul","width-1920":"DialogModal-module__width-1920___1Vq72","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___3kstA","dialog-modal-container":"DialogModal-module__dialog-modal-container___10XP8","dialog-modal-header":"DialogModal-module__dialog-modal-header___vojqY","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___2S67Y","dialog-modal-body":"DialogModal-module__dialog-modal-body___xtsrz"}},1737:function(e,t,l){e.exports={header:"DialogModalWithCustomHeaderAndCustomFooter-test-module__header___8-gP8",footer:"DialogModalWithCustomHeaderAndCustomFooter-test-module__footer___2st92","close-button":"DialogModalWithCustomHeaderAndCustomFooter-test-module__close-button___o8FK4"}},1946:function(e,t,l){"use strict";var a=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(l(26)),d=a(l(27)),i=a(l(31)),u=a(l(28)),n=a(l(29)),r=a(l(30)),s=a(l(0)),c=a(l(61)),_=a(l(5)),m=a(l(1098)),f=a(l(1737));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,a=(0,r.default)(e);if(t){var o=(0,r.default)(this).constructor;l=Reflect.construct(a,arguments,o)}else l=a.apply(this,arguments);return(0,n.default)(this,l)}}var g=_.default.bind(f.default),p=function(e){(0,u.default)(l,e);var t=h(l);function l(){var e;return(0,o.default)(this,l),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(l,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(m.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement("div",{className:g("header")},"Custom Header",s.default.createElement(c.default,{id:"close-dialog-modal",text:"Close",className:g("close-button"),onClick:this.handleCloseModal})),footer:s.default.createElement("div",{className:g("footer")},"Custom Footer")},s.default.createElement("p",null,e)),s.default.createElement(c.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),l}(s.default.Component);t.default=p}}]);
//# sourceMappingURL=267-541b9ab012a2a45e9b3a.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1022:function(e,d,t){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var n=m(t(0)),a=m(t(2)),l=m(t(5)),i=m(t(1023));function m(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(i.default),r={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},u=function(e){var d=e.src,t=e.name,a=e.url,l=e.version,i=n.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(l)},n.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:c("badge-version")},"v".concat(l))),m=d?n.default.createElement("a",{className:c("badge"),href:d},n.default.createElement("span",{className:c("badge-name")},"github"),n.default.createElement("span",{className:c("badge-version")},"source")):void 0;return n.default.createElement("div",{className:c("badge-container")},i,m)};u.propTypes=r;var b=u;d.default=b},1023:function(e,d,t){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},1159:function(e,d,t){"use strict";t.d(d,"a",(function(){return m}));var n=t(0),a=t.n(n),l=t(1022),i=t.n(l),m=function(e){var d=e.url;return a.a.createElement(i.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-navigation",name:"terra-application-navigation",version:"1.31.0",url:d})}},2158:function(e,d,t){"use strict";t.r(d),t.d(d,"default",(function(){return o}));var n=t(19),a=t.n(n),l=t(24),i=t.n(l),m=(t(0),t(361)),c=t(1159),r={};function u(e){var d=e.components,t=i()(e,["components"]);return Object(m.mdx)("wrapper",a()({},r,t,{components:d,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"changelog"},"Changelog"),Object(m.mdx)("h2",{id:"unreleased"},"Unreleased"),Object(m.mdx)("h3",{id:"fixed"},"Fixed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Fixed ",Object(m.mdx)("inlineCode",{parentName:"li"},"side-drawer")," not opening in IE for tiny viewport.")),Object(m.mdx)("h3",{id:"removed"},"Removed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Removed themeable variable --terra-application-navigation-content-layout-default-width"),Object(m.mdx)("li",{parentName:"ul"},"Removed themeable variable --terra-application-navigation-content-layout-medium-width")),Object(m.mdx)("h3",{id:"changed"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Fixed ",Object(m.mdx)("inlineCode",{parentName:"li"},"aria-haspopup")," and ",Object(m.mdx)("inlineCode",{parentName:"li"},"link")," role  incompatibility issue."),Object(m.mdx)("li",{parentName:"ul"},"Minor file changes to comply with eslint rules"),Object(m.mdx)("li",{parentName:"ul"},"Remove unused disable eslint directives")),Object(m.mdx)("h2",{id:"1290---june-16-2020"},"1.29.0 - (June 16, 2020)"),Object(m.mdx)("h3",{id:"changed-1"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(m.mdx)("h2",{id:"1280---june-9-2020"},"1.28.0 - (June 9, 2020)"),Object(m.mdx)("h3",{id:"changed-2"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Update failing jest snapshots")),Object(m.mdx)("h2",{id:"1270---june-2-2020"},"1.27.0 - (June 2, 2020)"),Object(m.mdx)("h3",{id:"fixed-1"},"Fixed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Removed outline on main content")),Object(m.mdx)("h2",{id:"1280---may-26-2020"},"1.28.0 - (May 26, 2020)"),Object(m.mdx)("h3",{id:"fixed-2"},"Fixed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Focus should be returned to ",Object(m.mdx)("inlineCode",{parentName:"li"},"Tab")," key clicked when ",Object(m.mdx)("inlineCode",{parentName:"li"},"Navigation prompt")," is dismissed."),Object(m.mdx)("li",{parentName:"ul"},"Focus should be passed to ",Object(m.mdx)("inlineCode",{parentName:"li"},"Content")," when ",Object(m.mdx)("inlineCode",{parentName:"li"},"Navigation prompt")," is accepted."),Object(m.mdx)("li",{parentName:"ul"},"Updated the static focusMainContent method to use the useCallback hook to fix lint errors")),Object(m.mdx)("h2",{id:"1270---may-19-2020"},"1.27.0 - (May 19, 2020)"),Object(m.mdx)("h3",{id:"changed-3"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(m.mdx)("h2",{id:"1260---april-28-2020"},"1.26.0 - (April 28, 2020)"),Object(m.mdx)("h3",{id:"added"},"Added"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Added ",Object(m.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",Object(m.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json")),Object(m.mdx)("h3",{id:"changed-4"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config"),Object(m.mdx)("li",{parentName:"ul"},"Regenerate wdio fusion screenshots due to bottom border style changes in terra-action-header.")),Object(m.mdx)("h3",{id:"removed-1"},"Removed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')),Object(m.mdx)("h2",{id:"1250---april-6-2020"},"1.25.0 - (April 6, 2020)"),Object(m.mdx)("h3",{id:"changed-5"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Updated test examples to provide ",Object(m.mdx)("inlineCode",{parentName:"li"},"initials")," in userConfig")),Object(m.mdx)("h2",{id:"1240---march-31-2020"},"1.24.0 - (March 31, 2020)"),Object(m.mdx)("h3",{id:"added-1"},"Added"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme wdio screenshots")),Object(m.mdx)("h2",{id:"1230---march-10-2020"},"1.23.0 - (March 10, 2020)"),Object(m.mdx)("h3",{id:"changed-6"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(m.mdx)("h2",{id:"1220---march-3-2020"},"1.22.0 - (March 3, 2020)"),Object(m.mdx)("h3",{id:"changed-7"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Update docs to use MDX syntax"),Object(m.mdx)("li",{parentName:"ul"},"Updated wdio screenshots")),Object(m.mdx)("h2",{id:"1210---february-25-2020"},"1.21.0 - (February 25, 2020)"),Object(m.mdx)("h3",{id:"changed-8"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(m.mdx)("h2",{id:"1200---february-18-2020"},"1.20.0 - (February 18, 2020)"),Object(m.mdx)("h3",{id:"added-2"},"Added"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme theming files")),Object(m.mdx)("h3",{id:"fixed-3"},"Fixed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Fixed Drawer menu not closing in Internet Explorer on clicking outside of drawer menu.")),Object(m.mdx)("h2",{id:"1190---february-11-2020"},"1.19.0 - (February 11, 2020)"),Object(m.mdx)("h3",{id:"fixed-4"},"Fixed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Fixed ",Object(m.mdx)("inlineCode",{parentName:"li"},"settings")," api called when ",Object(m.mdx)("inlineCode",{parentName:"li"},"help")," clicked in drawer menu.")),Object(m.mdx)("h2",{id:"1180---february-4-2020"},"1.18.0 - (February 4, 2020)"),Object(m.mdx)("h3",{id:"changed-9"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(m.mdx)("h2",{id:"1170---january-28-2020"},"1.17.0 - (January 28, 2020)"),Object(m.mdx)("h3",{id:"changed-10"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")),Object(m.mdx)("h2",{id:"1160---january-7-2020"},"1.16.0 - (January 7, 2020)"),Object(m.mdx)("h3",{id:"changed-11"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(m.mdx)("h2",{id:"1150---december-16-2019"},"1.15.0 - (December 16, 2019)"),Object(m.mdx)("h3",{id:"changed-12"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Updated Jest snapshots."),Object(m.mdx)("li",{parentName:"ul"},"Fixed axe issue for wrong aria-roles")),Object(m.mdx)("h2",{id:"1140---december-10-2019"},"1.14.0 - (December 10, 2019)"),Object(m.mdx)("h3",{id:"added-3"},"Added"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},'Added reference wdio screenshots for "orion-fusion-theme".')),Object(m.mdx)("h3",{id:"changed-13"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Updated Jest Snapshots due to changes in ",Object(m.mdx)("inlineCode",{parentName:"li"},"avatar"),".")),Object(m.mdx)("h2",{id:"1130---november-20-2019"},"1.13.0 - (November 20, 2019)"),Object(m.mdx)("h3",{id:"changed-14"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency updates")),Object(m.mdx)("h2",{id:"1120---november-18-2019"},"1.12.0 - (November 18, 2019)"),Object(m.mdx)("h3",{id:"changed-15"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency updates")),Object(m.mdx)("h2",{id:"1110---november-7-2019"},"1.11.0 - (November 7, 2019)"),Object(m.mdx)("h3",{id:"added-4"},"Added"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("inlineCode",{parentName:"li"},"onDrawerMenuStateChange")," callback added for Drawer menu state change.")),Object(m.mdx)("h3",{id:"changed-16"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Resolved lint warnings for multiple empty lines")),Object(m.mdx)("h2",{id:"1100---october-30-2019"},"1.10.0 - (October 30, 2019)"),Object(m.mdx)("h3",{id:"changed-17"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency updates")),Object(m.mdx)("h2",{id:"190---october-21-2019"},"1.9.0 - (October 21, 2019)"),Object(m.mdx)("h3",{id:"changed-18"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency updates")),Object(m.mdx)("h2",{id:"180---october-16-2019"},"1.8.0 - (October 16, 2019)"),Object(m.mdx)("h3",{id:"changed-19"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency updates")),Object(m.mdx)("h2",{id:"170---october-3-2019"},"1.7.0 - (October 3, 2019)"),Object(m.mdx)("h3",{id:"changed-20"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Update terra-icon package version."),Object(m.mdx)("li",{parentName:"ul"},"Adjusted title margin and padding"),Object(m.mdx)("li",{parentName:"ul"},"Update tests and screenshots to support theme tests")),Object(m.mdx)("h3",{id:"fixed-5"},"Fixed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Fix wdio test url.")),Object(m.mdx)("h2",{id:"160---september-26-2019"},"1.6.0 - (September 26, 2019)"),Object(m.mdx)("h3",{id:"changed-21"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency updates")),Object(m.mdx)("h2",{id:"150---september-19-2019"},"1.5.0 - (September 19, 2019)"),Object(m.mdx)("h3",{id:"changed-22"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Update underlying structure to handle new theme variables."),Object(m.mdx)("li",{parentName:"ul"},"Revert test wrapper changes."),Object(m.mdx)("li",{parentName:"ul"},"Update Jest snapshots"),Object(m.mdx)("li",{parentName:"ul"},"Removed ",Object(m.mdx)("inlineCode",{parentName:"li"},"details")," tag from doc-site."),Object(m.mdx)("li",{parentName:"ul"},"Corrected lint warnings"),Object(m.mdx)("li",{parentName:"ul"},"Theme border-bottom focus")),Object(m.mdx)("h3",{id:"fixed-6"},"Fixed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"fix clip bug.")),Object(m.mdx)("h3",{id:"added-5"},"Added"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Added en-CA translations.")),Object(m.mdx)("h2",{id:"140---september-6-2019"},"1.4.0 - (September 6, 2019)"),Object(m.mdx)("h3",{id:"changed-23"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files"),Object(m.mdx)("li",{parentName:"ul"},"Added check to prevent rendering of Utility Button or Nav Drawer Button if they are empty."),Object(m.mdx)("li",{parentName:"ul"},"Updated ",Object(m.mdx)("inlineCode",{parentName:"li"},"keycode-js")," from ",Object(m.mdx)("inlineCode",{parentName:"li"},"v1.0.4")," to ",Object(m.mdx)("inlineCode",{parentName:"li"},"v2.0.1"))),Object(m.mdx)("h2",{id:"130---august-21-2019"},"1.3.0 - (August 21, 2019)"),Object(m.mdx)("h3",{id:"changed-24"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(m.mdx)("h2",{id:"120---august-14-2019"},"1.2.0 - (August 14, 2019)"),Object(m.mdx)("h3",{id:"changed-25"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"updated package.json test scripts")),Object(m.mdx)("h2",{id:"110---july-30-2019"},"1.1.0 - (July 30, 2019)"),Object(m.mdx)("h3",{id:"changed-26"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Prevent outside clicks from passing through to content when drawer open.")),Object(m.mdx)("h3",{id:"removed-2"},"Removed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Removed DEPENDENCIES.md file")),Object(m.mdx)("h3",{id:"changed-27"},"Changed"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Re-generate screenshots with different mouseover positioning.")),Object(m.mdx)("h2",{id:"101---july-23-2019"},"1.0.1 - (July 23, 2019)"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Corrected themeable variable name that slipped through lint filter.")),Object(m.mdx)("h2",{id:"100---july-23-2019"},"1.0.0 - (July 23, 2019)"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Initial release")))}u.isMDXComponent=!0;var b={};function o(e){var d=e.components,t=i()(e,["components"]);return Object(m.mdx)("wrapper",a()({},b,t,{components:d,mdxType:"MDXLayout"}),Object(m.mdx)(c.a,{mdxType:"Badge"}),Object(m.mdx)(u,{mdxType:"ChangeLog"}))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=311-a9124b361a4478263fd6.js.map
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[293],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2475:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={sidebar_position:3,sidebar_label:"Cross-communication"},l={unversionedId:"concepts/cross-communication",id:"concepts/cross-communication",isDocsHomePage:!1,title:"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",description:"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043f\u043e \u0437\u043e\u043d\u0430\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 (layer, slice, segment)",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/concepts/cross-communication.md",sourceDirName:"concepts",slug:"/concepts/cross-communication",permalink:"/docs/concepts/cross-communication",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/ru/docusaurus-plugin-content-docs/current/concepts/cross-communication.md",version:"current",lastUpdatedAt:1629747723,formattedLastUpdatedAt:"23.08.2021",sidebar_label:"Cross-communication",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Cross-communication"},sidebar:"tutorialSidebar",previous:{title:"\u041e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0435 \u0437\u0430\u0434\u0430\u0447",permalink:"/docs/concepts/needs-driven"},next:{title:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/docs/concepts/app-splitting"}},p=[{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",children:[]},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u043e",id:"\u043f\u0440\u0430\u0432\u0438\u043b\u043e",children:[]},{value:"\u0412\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0432\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",children:[]},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043f\u043e \u0437\u043e\u043d\u0430\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting"},"(layer, slice, segment)")),(0,i.kt)("p",null,"\u0421\u043b\u043e\u0438, \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c, \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"\u0412\u043d\u0438\u0437\u0443" \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 (ui-kit, \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430), \u043a\u0430\u043a \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0435'),(0,i.kt)("li",{parentName:"ul"},'\u0410 \u043f\u043e \u043c\u0435\u0440\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f "\u0432\u0432\u0435\u0440\u0445" \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438.')),(0,i.kt)("p",null,"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u043a \u043a\u0430\u043a\u043e\u043c\u0443-\u043b\u0438\u0431\u043e \u0441\u043b\u0430\u0439\u0441\u0443, \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/public-api"},(0,i.kt)("strong",{parentName:"a"},"\u043e\u0431\u044f\u0437\u0430\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0430")),"."),(0,i.kt)("h2",{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u0441 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0440\u044f\u0434\u0430 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u0421\u043b\u0430\u0431\u043e\u0435 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u0435")," \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043b\u0430\u0431\u043e \u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c"),' - \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f "\u0441\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b" \u043d\u0430 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},'\u0415\u0441\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c \u0438\u043c\u0435\u0435\u0442 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439 (\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 "\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e") - \u044d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043c\u0435\u0447\u0435\u043d\u043e \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u043d\u044c\u0448\u0435')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u041e\u0442\u0441\u0442\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0446\u0438\u043a\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439")," \u043d\u0430 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u0427\u0430\u0441\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0442 \u043a \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e\u043c\u0443, \u043d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044e, \u043b\u0443\u0447\u0448\u0435 \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0438\u0445 \u0441\u043e\u0432\u0441\u0435\u043c"))))),(0,i.kt)("h2",{id:"\u043f\u0440\u0430\u0432\u0438\u043b\u043e"},"\u041f\u0440\u0430\u0432\u0438\u043b\u043e"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439, \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u0412\u0430\u0436\u043d\u043e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'\u041c\u043e\u0434\u0443\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 "\u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445" \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043d\u043e \u043d\u0435 \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0441 \u0442\u043e\u0433\u043e \u0436\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0441\u043b\u043e\u044f'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"features/auth")," ",(0,i.kt)("strong",{parentName:"li"},"\u043d\u0435 \u043c\u043e\u0436\u0435\u0442")," \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"features/filters")," ",(0,i.kt)("strong",{parentName:"li"},"\u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"features/auth")," ",(0,i.kt)("strong",{parentName:"li"},"\u043c\u043e\u0436\u0435\u0442")," \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"shared/ui/button"),", ",(0,i.kt)("strong",{parentName:"li"},"\u043d\u043e \u043d\u0435 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442"))),(0,i.kt)("p",null,"\u0421\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u0430\u0432\u0438\u043b\u0443 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 ",(0,i.kt)("strong",{parentName:"p"},'"\u043e\u0434\u043d\u043e\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438"')," - \u0447\u0442\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 ",(0,i.kt)("strong",{parentName:"p"},"\u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0446\u0438\u043a\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u044b")," \u0438 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e ",(0,i.kt)("strong",{parentName:"p"},"\u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439")," \u043c\u0435\u0436\u0434\u0443 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438."),(0,i.kt)("h2",{id:"\u0432\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c"},"\u0412\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"),(0,i.kt)("p",null,"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0438\u0433\u043d\u0430\u043b\u043e\u043c \u043f\u0440\u043e\u0431\u043b\u0435\u043c:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u044c \u0438\u043c\u0435\u0435\u0442 ",(0,i.kt)("strong",{parentName:"li"},"\u0438\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f")," \u0441\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043b\u043e\u044f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043c\u043e\u0434\u0443\u043b\u044c \u0431\u044b\u043b ",(0,i.kt)("strong",{parentName:"li"},"\u0438\u0437\u043b\u0438\u0448\u043d\u0435 \u0440\u0430\u0437\u0434\u0440\u043e\u0431\u043b\u0435\u043d")," \u0438\u043b\u0438 \u0438\u043c\u0435\u0435\u0442 ",(0,i.kt)("strong",{parentName:"li"},"\u043b\u0438\u0448\u043d\u044e\u044e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c.")),(0,i.kt)("li",{parentName:"ul"},"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 ",(0,i.kt)("strong",{parentName:"li"},"\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c")," \u0435\u0433\u043e \u0441 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u043c \u043c\u043e\u0434\u0443\u043b\u0435\u043c \u0438\u043b\u0438 ",(0,i.kt)("strong",{parentName:"li"},"\u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0438\u043b\u0438 \u0446\u0435\u043b\u0438\u043a\u043e\u043c) \u043d\u0430 \u0441\u043b\u043e\u0439 \u043d\u0438\u0436\u0435")," \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0438\u043a\u0443 \u0441\u0432\u044f\u0437\u0435\u0439 \u0432 \u043c\u043e\u0434\u0443\u043b\u0438 \u043d\u0430 \u0432\u044b\u0448\u0435\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0441\u043b\u043e\u044f\u0445."))),(0,i.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u044c ",(0,i.kt)("strong",{parentName:"li"},"\u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u0438\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438")," \u0441\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043b\u043e\u044f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043c\u043e\u0434\u0443\u043b\u044c \u0438\u043c\u0435\u0435\u0442 ",(0,i.kt)("strong",{parentName:"li"},"\u043b\u0438\u0448\u043d\u044e\u044e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c.")),(0,i.kt)("li",{parentName:"ul"},"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 ",(0,i.kt)("strong",{parentName:"li"},"\u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0438\u043b\u0438 \u0446\u0435\u043b\u0438\u043a\u043e\u043c) \u043d\u0430 \u0441\u043b\u043e\u0439 \u043d\u0438\u0436\u0435"),", \u043b\u0438\u0431\u043e \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043b\u043e\u0433\u0438\u043a\u0443 \u0441\u0432\u044f\u0437\u0435\u0439 \u0432 \u043c\u043e\u0434\u0443\u043b\u0438 \u043d\u0430 \u0432\u044b\u0448\u0435\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0441\u043b\u043e\u044f\u0445."))),(0,i.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u044c ",(0,i.kt)("strong",{parentName:"li"},"\u0438\u043c\u0435\u0435\u0442 \u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0438\u0437 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439")," \u0441\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043b\u043e\u044f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043c\u043e\u0434\u0443\u043b\u044c \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043a ",(0,i.kt)("strong",{parentName:"li"},"\u0434\u0440\u0443\u0433\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438.")),(0,i.kt)("li",{parentName:"ul"},"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 ",(0,i.kt)("strong",{parentName:"li"},"\u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e (\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0438\u043b\u0438 \u0446\u0435\u043b\u0438\u043a\u043e\u043c) \u043d\u0430 \u0441\u043b\u043e\u0439 \u0432\u044b\u0448\u0435"),".")))),(0,i.kt)("h2",{id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/low-coupling"},"(\u0413\u0430\u0439\u0434) \u041f\u0440\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 \u043d\u0438\u0437\u043a\u043e\u0439 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/49"},"(\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435) Entities \u0432 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0438\u0445 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/65#discussioncomment-480822"},"(\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435) \u041f\u0440\u043e cross-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0438 \u0430\u043d\u0430\u043b\u0438\u0437 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/GRASP"},"\u041f\u0430\u0442\u0442\u0435\u0440\u043d\u044b ",(0,i.kt)("strong",{parentName:"a"},"GRASP")))))}c.isMDXComponent=!0}}]);
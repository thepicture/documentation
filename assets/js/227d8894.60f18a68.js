"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9573],{2995:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=i(3117),s=i(102),u=(i(7294),i(4137)),r=i(6889),o=["components"],a={sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},l="Decouple entities",d={unversionedId:"guides/decouple-entities",id:"guides/decouple-entities",isDocsHomePage:!1,title:"Decouple entities",description:"\u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e \u0438 \u043f\u0440\u043e \u0442\u043e - \u043a\u0430\u043a \u044f\u0432\u043d\u043e \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/decouple-entities.mdx",sourceDirName:"guides",slug:"/guides/decouple-entities",permalink:"/docs/guides/decouple-entities",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/ru/docusaurus-plugin-content-docs/current/guides/decouple-entities.mdx",tags:[],version:"current",lastUpdatedAt:1635073101,formattedLastUpdatedAt:"24.10.2021",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Low Coupling & High Cohesion",permalink:"/docs/guides/low-coupling"},next:{title:"White Labels",permalink:"/docs/guides/white-labels"}},c=[{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435",children:[],level:2}],p={toc:c};function m(e){var t=e.components,i=(0,s.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"decouple-entities"},"Decouple entities"),(0,u.kt)(r.ZP,{ticket:"202",mdxType:"WIP"}),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e \u0438 \u043f\u0440\u043e \u0442\u043e - \u043a\u0430\u043a \u044f\u0432\u043d\u043e \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u043e \u043c\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 absolutely-decoupled entities")),(0,u.kt)("h2",{id:"\u0441\u043c-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3633"},"(\u0422\u0440\u0435\u0434) \u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u0440\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043f\u043e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c \u0438 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u044f\u0432\u043d\u044b\u0445 \u0441\u0432\u044f\u0437\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3316"},'(\u0422\u0440\u0435\u0434) \u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0434\u043b\u044f "\u0441\u0432\u044f\u0437\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439" (users/pets/friends)')),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4276"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432/\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432 \u0432 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u0445")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4521"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0444\u0438\u0447"))))}m.isMDXComponent=!0}}]);
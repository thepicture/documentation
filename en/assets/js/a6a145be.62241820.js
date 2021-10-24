"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8344],{235:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var n=a(3117),i=a(102),r=(a(7294),a(4137)),s=["components"],o={sidebar_position:5},d="Widgets",l={unversionedId:"reference/layers/widgets",id:"reference/layers/widgets",isDocsHomePage:!1,title:"Widgets",description:"The layer is experimental, be careful when using it",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/widgets.md",sourceDirName:"reference/layers",slug:"/reference/layers/widgets",permalink:"/en/docs/reference/layers/widgets",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/widgets.md",tags:[],version:"current",lastUpdatedAt:1635073101,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"referenceSidebar",previous:{title:"Pages",permalink:"/en/docs/reference/layers/pages"},next:{title:"Features",permalink:"/en/docs/reference/layers/features"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Application header",id:"application-header",children:[],level:3},{value:"Tweet Card",id:"tweet-card",children:[],level:3},{value:"Product card",id:"product-card",children:[],level:3}],level:2}],c={toc:p};function h(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"widgets"},"Widgets"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"EXPERIMENTAL")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The layer is experimental, be careful when using it"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"OPTIONAL")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The layer is optional, and is needed only if the complexity of the project requires it"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"widgets-themed-bordered",src:a(9414).Z})),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This is usually where independent and complex page widgets are located, composing the underlying layers"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The layer was introduced as an experimental one to solve the existing problems when using other layers"),(0,r.kt)("p",{parentName:"blockquote"},"So far, no best practices have been developed for this layer (apart from those that apply to other layers), so use it only if necessary and consciously")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"application-header"},"Application header"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Header")," is a fairly common part of web applications"),(0,r.kt)("p",null,'At the same time, more and more often in practice there are examples when we do not have "one single header for the entire application", but differs from page to page'),(0,r.kt)("p",null,"And if the first option is easy to implement, then everything becomes not so trivial with the second one:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Or the reused component of the header is located in the wrong place of the structure, which causes cross-imports"),(0,r.kt)("li",{parentName:"ul"},"Or they duplicate the implementation of the header on each page (especially when one header is used in half of the pages, and the second one is used in the other half)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The widget layer is designed to help with this case")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=widgets/header/ui.tsx",title:"widgets/header/ui.tsx"},'import { SearchBar } from "features/search-bar";\nimport { Layout } from "shared/ui";\n\n// The header may differ from page to page\n// At the same time, this logic must be composed somewhere\nexport const Header = ({ theme, withSearch, withNav ...}: Props) => (\n    <Layout.Header theme={theme}>\n        {withSearch && <SearchBar ... />}\n        {withNav && <Navigation ... />}\n        ...\n    <Layout.Header>\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/some-page/ui.tsx",title:"pages/some-page/ui.tsx"},'import { Header } from "widgets/header";\nimport { Layout } from "shared/ui";\n\nexport const SomePage = () => (\n    <Layout>\n        {/* Header#1 on one page */}\n        <Header sticky={true} />\n        <Layout.Content>\n            ...\n        </Layout.Content>\n    </Layout>\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/another-page/ui.tsx",title:"pages/another-page/ui.tsx"},'import { Header } from "widgets/header";\nimport { Layout } from "shared/ui";\n\nexport const AnotherPage = () => (\n    <Layout>\n        {/* Header#2 on another page */}\n        <Header extra={...} theme={...} />\n        <Layout.Content>\n            ...\n        </Layout.Content>\n    </Layout>\n)\n')),(0,r.kt)("h3",{id:"tweet-card"},"Tweet Card"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=widgets/tweet-item/ui.tsx",title:"widgets/tweet-item/ui.tsx"},'import { ShareTweet } from "features/tweets/share";\nimport { LikeTweet } from "features/tweets/like";\nimport { TweetCard } from "entities/tweet";\nimport { UserThumbnail } from "entities/user";\n\n// The component uses a template for tweets from the entities layer\n// At the same time it provides it with certain features-actions,\n// which the entities layer is not supposed to know about because of its scope of responsibility\n//\n// Other features and entities are also used here (e.g., AuthorThumbnail)\n\n// At the same time, if such a composition was usually carried out at the page level,\n// Now, such logic becomes reused\n// and takes away some of the responsibility from the pages\n//\n// Because of which the pages contain only the most necessary logic \n// (and become thin thanks to this approach)\nexport const TweetItem = ({ data,...}: Props) => (\n    <TweetCard\n        before={<UserThumbnail withPopup={true} />}\n        data={data}\n        ...\n        extra={[\n            <LikeTweet key="like" tweetId={data.id} ... />\n            <ShareTweet key="share" tweetId={data.id} ... />\n        ]}\n    />\n);\n')),(0,r.kt)("h3",{id:"product-card"},"Product card"),(0,r.kt)("p",null,"Similar to the tweet card"))}h.isMDXComponent=!0},9414:function(e,t,a){t.Z=a.p+"assets/images/widgets-628b4c80d4059c8ec5ef60fcb60d8a29.png"}}]);
"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[103],{6786:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(3366),l=n(7294),a=n(6888),r=n(2125),o=r.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-1gaaq1l-0"})(["position:relative;display:flex;flex-direction:row;main{padding-right:10px;}@media (max-width:996px){margin:0;margin-top:0;width:100%;max-width:100%;padding:0;main{padding-right:0;}.markdown{> h2,> p{padding:0 var(--ifm-spacing-horizontal);}}}"]),c=r.ZP.div.withConfig({displayName:"styles__Nav",componentId:"sc-1gaaq1l-1"})([""]),d=["sidebar","toc","children"];function s(e){e.sidebar;var t=e.toc,n=e.children,r=(0,i.Z)(e,d);return l.createElement(a.Z,r,l.createElement(o,{className:"container margin-vert--lg"},l.createElement("main",{itemScope:!0,itemType:"http://schema.org/Blog"},n),t&&l.createElement(c,null,t)))}},223:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(7294),l=n(6010),a=n(5999),r=n(9960),o=n(4996),c=n(8824),d=n(8780),s=n(5042),m=n(6114),u=n(6233),p="blogPostDetailsFull_enUA";function h(e){n=(0,c.c)().selectMessage;var t,n,h=(0,o.C)().withBaseUrl,g=e.children,f=e.frontMatter,x=e.assets,w=e.metadata,v=e.truncated,y=e.isBlogPostPage,E=void 0!==y&&y,b=(w.date,w.formattedDate,w.permalink,w.tags),Z=(w.readingTime,w.title),_=w.editUrl,F=(w.authors,null!=(t=x.image)?t:f.image),k=!E&&v,C=b.length>0;return i.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},F&&i.createElement("meta",{itemProp:"image",content:h(F,{absolute:!0})}),i.createElement("div",{id:E?d.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},i.createElement(s.Z,null,g)),(C||v)&&i.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",E&&p)},C&&i.createElement("div",{className:(0,l.Z)("col",{"col--9":k})},i.createElement(u.Z,{tags:b})),E&&_&&i.createElement("div",{className:"col margin-top--sm"},i.createElement(m.Z,{editUrl:_})),k&&i.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":C})},i.createElement(r.Z,{to:w.permalink,"aria-label":(0,a.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:Z})},i.createElement("b",null,i.createElement(a.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4648:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(3366),l=n(7294),a=n(3654),r=n(2263),o=n(2611),c=n(4006),d=["href","children","title"];function s(e){var t=e.href,n=e.children,s=e.title,m=((0,i.Z)(e,d),(0,r.Z)().i18n.currentLocale),u=s&&s.indexOf(":")>=0?(0,a.zGw)((0,a.Vl2)(","),(0,a.UID)((0,a.Vl2)(":")),a.Pen,(0,o.M_)(a.fyY))(s):s?{title:s}:{},p=!!u.icon,h=(0,a.xbD)(u),g="export"===u.type,f="btnMore"===u.type;return u.local=u.local||m,l.createElement(l.Fragment,null,h&&m===u.local?l.createElement(c.rU,{to:t},n):null,p&&m===u.local?l.createElement(c.ku,{to:t,icon:u.icon},n):null,g&&m===u.local?l.createElement(c.xP,{to:t},n):null,f&&m===u.local?l.createElement(c.o7,{to:t},n):null)}},9180:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(3366),l=n(7294),a=n(3654),r=n(4006),o=n(2611),c=["className","alt","src","title"];function d(e){var t=e.className,n=e.alt,d=e.src,s=e.title,m=((0,i.Z)(e,c),s&&s.indexOf(":")>=0?(0,a.zGw)((0,a.Vl2)(","),(0,a.UID)((0,a.Vl2)(":")),a.Pen,(0,o.M_)(a.fyY))(s):s?{title:s}:{});return l.createElement(r.Ee,{src:d,className:t,alt:n,to:m.to},l.createElement(r.ZT,{size:20},m.title))}},4502:function(e,t,n){n.d(t,{Z:function(){return V}});var i=n(7294),l=n(3066),a=n(7164),r=n(2861),o=n.n(r),c=n(3654),d=n(5934),s=n(2611),m=n(9180),u=n(3581),p=n(2125),h=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-10csc5s-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:0 -8px;overflow:hidden;position:relative;@media (max-width:996px){margin:0 14px;}"]),g=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-10csc5s-1"})(["width:20%;padding:8px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;> div{width:100%;height:100%;border-radius:8px;}@media (max-width:996px){width:50%;}"]),f=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,c.u4g)((function(e,t){return"image"===t.type?e.push(t):t.children&&t.children.length&&(e=e.concat(n([],t.children))),e})),i=(0,s.IC)("image",(function(e,t){return e.push(t),e}),[e]);r(i)}()}),[]),i.createElement(h,null,i.createElement(u.V,{size:4},l&&l.length?l.map((function(e){var t=e.url,n=e.alt,l=e.title;return i.createElement(g,{key:(0,d.Z)()},i.createElement(m.Z,{src:t,alt:n,title:l}))})):null))},x=n(7462),w=n(3366),v=n(4648),y=n(9960),E=p.ZP.div.withConfig({displayName:"styles__LinkList",componentId:"sc-aigwwo-0"})(["margin:0 -10px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;@media (max-width:996px){margin:0;flex-direction:column;}"]),b=((0,p.ZP)(y.Z).withConfig({displayName:"styles__LinkStyle",componentId:"sc-aigwwo-1"})(["margin:10px;height:100px;border-radius:10px;border:1px solid #00A6FB;width:30%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-size:22px;color:var(--safe-text-color);padding:20px;span{margin-left:10px;}@media (max-width:996px){width:100%;margin:10px 0;}"]),["children"]),Z=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,s.IC)("link",(function(e,t){return e.push(t),e}),[e]);r(n)}()}),[]),i.createElement(E,null,l&&l.length&&l.map((function(e){var t=e.children,n=(0,w.Z)(e,b);return i.createElement(v.Z,(0,x.Z)({key:(0,d.Z)()},n),t[0].value)})))},_=n(5124),F=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-18duw7t-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:0 -8px;overflow:hidden;position:relative;@media (max-width:996px){margin:0 14px;}"]),k=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-18duw7t-1"})(["width:50%;padding:8px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;> div{width:100%;height:100%;border-radius:10px;}@media (max-width:996px){width:100%;}"]),C=p.ZP.h4.withConfig({displayName:"styles__Title",componentId:"sc-18duw7t-2"})(["height:27px;font-size:22px;font-weight:400;color:#FFFFFF;line-height:27px;"]),I=p.ZP.p.withConfig({displayName:"styles__Desc",componentId:"sc-18duw7t-3"})(["height:30px;font-size:16px;font-weight:300;color:#FFFFFF;line-height:30px;"]),N=(0,p.ZP)(y.Z).withConfig({displayName:"styles__LinkStyle",componentId:"sc-18duw7t-4"})(["height:19px;font-size:16px;font-weight:400;color:#FFFFFF;line-height:19px;"]),P=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,s.IC)("listItem",(function(e,t){return e.concat(t.children)}),[e]);r(n)}()}),[]);return i.createElement(F,null,l&&l.length&&l.map((function(e){return function(e){var t,n,l,a=(0,d.Z)(),r="image"===(null==(t=e[0])?void 0:t.type)?e[0]:null,o="text"===(null==(n=e[1])?void 0:n.type)?e[1].value.split("\n"):[],c="link"===(null==(l=e[2])?void 0:l.type)?e[2].url:"";return i.createElement(k,{key:a},r&&r.type?i.createElement(_.E,{src:""},i.createElement(C,null,o[0]),i.createElement(I,null,o[1]),i.createElement(N,{to:c},i.createElement("u",null,"More"))):null)}(e.children)})))},z=n(1262),D=n(8907),S=n(9992),j=p.ZP.div.attrs((function(e){return{width:document.body.clientWidth}})).withConfig({displayName:"styles__SubscribeStyle",componentId:"sc-1qcu86k-0"})(["--ifm-body-width:","px;--ifm-container-right-body:calc("," - var(--ifm-container-width));width:var( --ifm-body-width );height:400px;background-image:url(https://static.stoneatom.com/assets/rc-upload-1652691483537-2_subscribeBg.png);background-repeat:no-repeat;background-position:right center;background-size:100% 100%;margin:60px auto;margin-left:-12%;@media (max-width:996px){width:100%;margin-left:0;background-image:none;height:auto;}"],(function(e){return e.width}),(function(e){return e.width})),M=(0,p.ZP)(D.D.Message).withConfig({displayName:"styles__Message",componentId:"sc-1qcu86k-1"})(["color:#fff;.br{border-color:#fff;min-width:30px;max-width:30px;}@media (max-width:996px){background-color:#00A6FB;padding:var(--ifm-spacing-horizontal);}"]),L=((0,p.ZP)(D.D.Form).withConfig({displayName:"styles__FormStyle",componentId:"sc-1qcu86k-2"})(["width:300px;height:300px;background:#FFFFFF;box-shadow:0px 30px 50px 0px rgba(55,60,67,0.2);border-radius:10px;padding:20px;.ant-btn{width:100%;}"]),(0,p.ZP)(D.D.Tip).withConfig({displayName:"styles__TipStyle",componentId:"sc-1qcu86k-3"})(["width:300px;height:300px;background:#FFFFFF;box-shadow:0px 30px 50px 0px rgba(55,60,67,0.2);border-radius:10px;padding:20px;.ant-btn{width:100%;}@media (max-width:996px){width:92%;height:auto;flex:1;margin-top:-20px;margin-bottom:20px;margin-left:var(--ifm-spacing-horizontal);margin-right:var(--ifm-spacing-horizontal);}"])),q=(0,p.ZP)(S.S).withConfig({displayName:"styles__Doc",componentId:"sc-1qcu86k-4"})(["height:100%;margin-right:-12%;@media (max-width:996px){margin-right:0;}"]),B=p.ZP.div.withConfig({displayName:"styles__Mail",componentId:"sc-1qcu86k-5"})(["height:100%;width:100%;> div:first-child{width:60%;}@media (max-width:996px){> div:first-child{width:100%;}}"]),T=function(){return i.createElement(z.Z,null,(function(){return i.createElement(j,null,i.createElement(q,null,i.createElement(B,null,i.createElement(M,null),i.createElement(L,null))))}))},U=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-1qi3pjs-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;overflow:hidden;position:relative;margin:10px -20px;"]),O=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-1qi3pjs-1"})(["width:50%;padding:0 20px;padding-left:30px;"]),R={"language-custom-eventList":P,"language-custom-subscribe":T,"language-custom-joinList":Z,"language-custom-teamList":f,"language-custom-docLinksList":function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];return(0,i.useEffect)((function(){var e;e=(0,a.l)().use(o()).parse(t),(0,s.IC)("list",(function(e,t){var n=(0,s.IC)("listItem",(function(e,t){var n=[],i=t.children.filter((function(e){return"paragraph"===e.type})),l=t.children.filter((function(e){return"list"===e.type}));if((null==i?void 0:i.length)===(null==l?void 0:l.length)&&1===(null==l?void 0:l.length)){var a,r=null==(a=i[0])?void 0:a.children[0];n.push(Object.assign({},r,{text:r.children[0].value,children:(0,s.IC)("paragraph",(function(e,t){return e.concat(t.children)}),l)}))}else n=t.children;return e.concat(n)}),t.children);return e.concat(n)}),[e]),r(e)}),[]),i.createElement(U,null,l&&l.length&&l.map((function(e){var t=e.children,n=e.text,l=e.url,a=e.title;return i.createElement(O,null,i.createElement(v.Z,{key:(0,d.Z)(),to:l,title:a},n),i.createElement(U,null,t&&t.length&&t.map((function(e){var t=e.children,n=e.url,l=e.title;return i.createElement(O,null,i.createElement(v.Z,{key:(0,d.Z)(),to:n,title:l},t[0].value))}))))})))}};function V(e){var t,n=e.children.props,a=n.children,r=n.className,o=n.originalType,c=r.indexOf("custom")<0,d=R[r];return i.createElement(i.Fragment,null,c?i.createElement(l.Z,(0,i.isValidElement)(e.children)&&"code"===o?null==(t=e.children)?void 0:t.props:Object.assign({},e)):i.createElement(d,null,a))}},962:function(e,t,n){var i=n(3075),l=n(9180),a=n(4648),r=n(4502),o=Object.assign({},i.Z,{img:l.Z,a:a.Z,pre:r.Z});t.Z=o}}]);
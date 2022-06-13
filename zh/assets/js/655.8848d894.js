"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[655],{8166:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(6010),l=n(1944),o=n(5281),i=n(1627),c=n(223),s=n(7462),u=n(5999),m=n(2244);function d(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(m.Z,(0,s.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(m.Z,(0,s.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var f=n(9407);function v(e){var t,n=e.content,r=n.assets,o=n.metadata,i=o.title,c=o.description,s=o.date,u=o.tags,m=o.authors,d=o.frontMatter,f=d.keywords,v=null!=(t=r.image)?t:d.image;return a.createElement(l.d,{title:i,description:c,keywords:f,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),u.length>0&&a.createElement("meta",{property:"article:tag",content:u.map((function(e){return e.label})).join(",")}))}function g(e){var t=e.content,n=e.sidebar,r=t.assets,l=t.metadata,o=l.nextItem,s=l.prevItem,u=l.frontMatter,m=u.hide_table_of_contents,v=u.toc_min_heading_level,g=u.toc_max_heading_level;return a.createElement(i.Z,{sidebar:n,toc:!m&&t.toc&&t.toc.length>0?a.createElement(f.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:g}):void 0},a.createElement(c.Z,{frontMatter:u,assets:r,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),(o||s)&&a.createElement(d,{nextItem:o,prevItem:s}))}function p(e){return a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(v,e),a.createElement(g,e))}},9407:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(3743),c="tableOfContents_bqdL",s=["className"];function u(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar",t)},l.createElement(i.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),l=n(7294),o=["parentIndex"];function i(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,o);n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(6668);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,l.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=m(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function v(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(v,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var g=l.memo(v),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,v=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,L=(0,r.Z)(e,p),E=(0,s.L)(),x=null!=h?h:E.tableOfContents.minHeadingLevel,H=null!=b?b:E.tableOfContents.maxHeadingLevel,N=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:H});return f((0,l.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:x,maxHeadingLevel:H}}),[m,v,x,H])),l.createElement(g,(0,a.Z)({toc:N,className:o,linkClassName:m},L))}},8824:function(e,t,n){n.d(t,{c:function(){return s}});var a=n(7294),r=n(2263),l=["zero","one","two","few","many","other"];function o(e){return l.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:o(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),i}var t,n}),[e])}function s(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}}}}]);
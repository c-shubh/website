"use strict";(self.webpackChunkwebsite_docu=self.webpackChunkwebsite_docu||[]).push([[7643],{8831:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(758);var n=a(3526),s=a(9669),r=a(7610),i=a(4202),l=a(8477),o=a(7787),c=a(8145),d=a(870),g=a(6975),m=a(5969),u=a(6070);function h(e){const t=(0,m.kJ)(e);return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.A)(),{blogDescription:n,blogTitle:i,permalink:l}=t,o="/"===l?a:i;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.be,{title:o,description:n}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:a,sidebar:n}=e;return(0,u.jsxs)(l.A,{sidebar:n,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(o.A,{metadata:t})]})}function j(e){return(0,u.jsxs)(r.e3,{className:(0,n.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,u.jsx)(x,{...e}),(0,u.jsx)(h,{...e}),(0,u.jsx)(p,{...e})]})}},7787:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var n=a(2076),s=a(5780),r=a(6070);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(s.A,{permalink:a,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(s.A,{permalink:i,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8347:(e,t,a)=>{a.d(t,{A:()=>L});a(758);var n=a(3526),s=a(5969),r=a(6070);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(6857);const o={title:"title_wPh5"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,s.e7)(),{permalink:c,title:d}=a,g=i?"h1":"h2";return(0,r.jsx)(g,{className:(0,n.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=a(2076),g=a(839),m=a(1339);const u={container:"container_LUC1"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,s.e7)(),{date:i,readingTime:l}=a,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,n.A)(u.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}var b=a(6362);const A={authorCol:"authorCol_FFcn",imageOnlyAuthorRow:"imageOnlyAuthorRow_Yy7m",imageOnlyAuthorCol:"imageOnlyAuthorCol_aJYg"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,s.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?A.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,n.A)(!l&&(o?"col col--12":"col col--6"),l?A.imageOnlyAuthorCol:A.authorCol),children:(0,r.jsx)(b.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(f,{})]})}var N=a(1853),_=a(1104);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,s.e7)();return(0,r.jsx)("div",{id:i?N.LU:void 0,className:(0,n.A)("markdown",a),children:(0,r.jsx)(_.A,{children:t})})}var w=a(4202),k=a(5577),y=a(109);const P={tags:"tags_G0nL",tag:"tag_xDIY"};function C(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,n.A)(P.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:P.tag,children:(0,r.jsx)(y.A,{...e})},e.permalink)))})]})}function R(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function U(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(R,{})})}function F(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,m=a.length>0;if(!(m||g||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,n.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(C,{tags:a})})}),e&&(0,r.jsx)(k.A,{className:(0,n.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,n.A)("col",{"col--9":g}),children:(0,r.jsx)(C,{tags:a})}),g&&(0,r.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":m}),children:(0,r.jsx)(U,{blogPostTitle:i,to:e.permalink})})]})}function L(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,n.A)(l,a),children:[(0,r.jsx)(v,{}),(0,r.jsx)(T,{children:t}),(0,r.jsx)(F,{})]})}},870:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var n=a(5969),s=a(8347),r=a(6070);function i(e){let{items:t,component:a=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},5780:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var n=a(3526),s=a(6857),r=a(6070);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},109:(e,t,a)=>{a.d(t,{A:()=>l});a(758);var n=a(3526),s=a(6857);const r={tag:"tag_gJje",tagRegular:"tagRegular_tEFj",tagWithCount:"tagWithCount_jWrF"};var i=a(6070);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}}}]);
"use strict";(self.webpackChunkwebsite_docu=self.webpackChunkwebsite_docu||[]).push([[2029],{1199:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>x,contentTitle:()=>v,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>m});var a=o(6070),r=o(5658),n=o(513),i=o(6235),s=o(8618),l=o(8277),d=o(8377),c=o(758);function p(){const[e,t]=(0,c.useState)(""),o=()=>{const t=e.split("\n");for(const e of t)e&&window.open(e)};return(0,a.jsx)(i.A,{children:()=>(0,a.jsxs)(l.A,{spacing:2,children:[(0,a.jsx)(d.A,{label:"Paste URLs",multiline:!0,maxRows:10,value:e,onChange:e=>t(e.target.value),placeholder:"Paste URLs",autoFocus:!0}),(0,a.jsxs)("p",{children:["Remember to ",(0,a.jsx)("strong",{children:"allow popups"})," from this site in your browser."]}),(0,a.jsx)(s.A,{variant:"contained",sx:{width:"fit-content"},onClick:o,children:"Open all URLs"})]})})}const u={title:"Bulk URL Opener"},v="Bulk URL Opener",h={type:"mdx",permalink:"/tools/bulk-url-opener/",source:"@site/src/pages/tools/bulk-url-opener/index.mdx",title:"Bulk URL Opener",description:"<Breadcrumbs",frontMatter:{title:"Bulk URL Opener"},unlisted:!1},x={},m=[];function b(e){const t={br:"br",h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.A,{items:[{text:"Tools",url:"/tools"},{text:"Bulk URL Opener"}]}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"bulk-url-opener",children:"Bulk URL Opener"})}),"\n",(0,a.jsxs)(t.p,{children:["Paste a list of URLs in the textbox below to open all of them in new tabs.",(0,a.jsx)(t.br,{}),"\n","Note: Enter ",(0,a.jsx)(t.strong,{children:"one URL per line"}),"."]}),"\n",(0,a.jsx)(p,{})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},8350:(e,t,o)=>{o.d(t,{A:()=>a});const a=o(758).createContext(void 0)},6489:(e,t,o)=>{o.d(t,{A:()=>a});const a=o(758).createContext({})},8618:(e,t,o)=>{o.d(t,{A:()=>B});var a=o(758),r=o(3526),n=o(545),i=o(385),s=o(7191),l=o(8655),d=o(9755),c=o(4752),p=o(4602),u=o(2648),v=o(3383),h=o(6689),x=o(5731),m=o(7159);function b(e){return(0,m.Ay)("MuiButton",e)}const g=(0,x.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var y=o(6489),S=o(8350),f=o(6070);const z=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],A=(0,d.Ay)(u.A,{shouldForwardProp:e=>(0,l.A)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,v.A)(o.color)}`],t[`size${(0,v.A)(o.size)}`],t[`${o.variant}Size${(0,v.A)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((0,c.A)((({theme:e})=>{const t="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],o="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${g.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${g.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${g.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${g.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(e.palette).filter((0,h.A)()).map((([t])=>({props:{color:t},style:{"--variant-textColor":(e.vars||e).palette[t].main,"--variant-outlinedColor":(e.vars||e).palette[t].main,"--variant-outlinedBorder":e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.5)`:(0,s.X4)(e.palette[t].main,.5),"--variant-containedColor":(e.vars||e).palette[t].contrastText,"--variant-containedBg":(e.vars||e).palette[t].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[t].dark,"--variant-textBg":e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette[t].main,e.palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[t].main,"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette[t].main,e.palette.action.hoverOpacity)}}}}))),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:o,"--variant-textBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette.text.primary,e.palette.action.hoverOpacity),"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette.text.primary,e.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}}))),w=(0,d.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,v.A)(o.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...z]}),R=(0,d.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,v.A)(o.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...z]}),B=a.forwardRef((function(e,t){const o=a.useContext(y.A),s=a.useContext(S.A),l=(0,n.A)(o,e),d=(0,p.b)({props:l,name:"MuiButton"}),{children:c,color:u="primary",component:h="button",className:x,disabled:m=!1,disableElevation:g=!1,disableFocusRipple:z=!1,endIcon:B,focusVisibleClassName:C,fullWidth:$=!1,size:j="medium",startIcon:k,type:I,variant:L="text",...O}=d,E={...d,color:u,component:h,disabled:m,disableElevation:g,disableFocusRipple:z,fullWidth:$,size:j,type:I,variant:L},M=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:r,variant:n,classes:s}=e,l={root:["root",n,`${n}${(0,v.A)(t)}`,`size${(0,v.A)(r)}`,`${n}Size${(0,v.A)(r)}`,`color${(0,v.A)(t)}`,o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,v.A)(r)}`],endIcon:["icon","endIcon",`iconSize${(0,v.A)(r)}`]},d=(0,i.A)(l,b,s);return{...s,...d}})(E),W=k&&(0,f.jsx)(w,{className:M.startIcon,ownerState:E,children:k}),U=B&&(0,f.jsx)(R,{className:M.endIcon,ownerState:E,children:B}),N=s||"";return(0,f.jsxs)(A,{ownerState:E,className:(0,r.A)(o.className,M.root,x,N),component:h,disabled:m,focusRipple:!z,focusVisibleClassName:(0,r.A)(M.focusVisible,C),ref:t,type:I,...O,classes:M,children:[W,c,U]})}))},513:(e,t,o)=>{o.d(t,{A:()=>d});var a=o(6857),r=o(6176),n=o(6750),i=o(2880),s=o(716),l=o(6070);function d(e){let{items:t}=e;return(0,l.jsx)(n.A,{separator:(0,l.jsx)(r.A,{fontSize:"small"}),"aria-label":"breadcrumb",className:"margin-bottom--md",children:t.map(((e,o)=>{let{text:r,url:n}=e;return o===t.length-1?(0,l.jsx)(s.A,{sx:{color:"text.primary"},children:r},"3"):(0,l.jsx)(i.A,{color:"inherit",component:a.A,underline:n?"hover":void 0,href:n||void 0,children:r},o)}))})}}}]);
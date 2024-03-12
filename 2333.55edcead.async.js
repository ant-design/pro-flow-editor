"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[2333],{32333:function(dt,ke,r){r.d(ke,{Z:function(){return at}});var n=r(50959),De=r(82187),O=r.n(De),I=r(53262),le=r(81322),Ee=r(35588),ue=r(80918),Pe=n.createContext(null),ve=n.createContext({}),fe=Pe,me=r(67469),J=r(37469),ge=r(10091),re=r(75924),se=r(50361),Ie=r(48230),Me=r(78404),Ze=["prefixCls","className","containerRef"],je=function(t){var s=t.prefixCls,a=t.className,l=t.containerRef,i=(0,Ie.Z)(t,Ze),c=n.useContext(ve),d=c.panel,v=(0,Me.x1)(d,l);return n.createElement("div",(0,J.Z)({className:O()("".concat(s,"-content"),a),role:"dialog",ref:v},(0,se.Z)(t,{aria:!0}),{"aria-modal":"true"},i))},Re=je,ze=r(24694);function he(e){return typeof e=="string"&&String(Number(e))===e?((0,ze.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}function ut(e){warning(!("wrapperClassName"in e),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!e.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var Ce={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Ke(e,t){var s,a,l,i=e.prefixCls,c=e.open,d=e.placement,v=e.inline,g=e.push,x=e.forceRender,k=e.autoFocus,$=e.keyboard,h=e.classNames,C=e.rootClassName,y=e.rootStyle,o=e.zIndex,Z=e.className,M=e.id,D=e.style,p=e.motion,S=e.width,K=e.height,w=e.children,f=e.mask,E=e.maskClosable,Q=e.maskMotion,q=e.maskClassName,F=e.maskStyle,L=e.afterOpenChange,R=e.onClose,H=e.onMouseEnter,_=e.onMouseOver,ee=e.onMouseLeave,V=e.onClick,te=e.onKeyDown,ne=e.onKeyUp,b=e.styles,j=n.useRef(),P=n.useRef(),z=n.useRef();n.useImperativeHandle(t,function(){return j.current});var W=function(N){var Y=N.keyCode,G=N.shiftKey;switch(Y){case re.Z.TAB:{if(Y===re.Z.TAB){if(!G&&document.activeElement===z.current){var ce;(ce=P.current)===null||ce===void 0||ce.focus({preventScroll:!0})}else if(G&&document.activeElement===P.current){var de;(de=z.current)===null||de===void 0||de.focus({preventScroll:!0})}}break}case re.Z.ESC:{R&&$&&(N.stopPropagation(),R(N));break}}};n.useEffect(function(){if(c&&k){var u;(u=j.current)===null||u===void 0||u.focus({preventScroll:!0})}},[c]);var oe=n.useState(!1),ae=(0,le.Z)(oe,2),Oe=ae[0],X=ae[1],m=n.useContext(fe),T;typeof g=="boolean"?T=g?{}:{distance:0}:T=g||{};var U=(s=(a=(l=T)===null||l===void 0?void 0:l.distance)!==null&&a!==void 0?a:m==null?void 0:m.pushDistance)!==null&&s!==void 0?s:180,lt=n.useMemo(function(){return{pushDistance:U,push:function(){X(!0)},pull:function(){X(!1)}}},[U]);n.useEffect(function(){if(c){var u;m==null||(u=m.push)===null||u===void 0||u.call(m)}else{var N;m==null||(N=m.pull)===null||N===void 0||N.call(m)}},[c]),n.useEffect(function(){return function(){var u;m==null||(u=m.pull)===null||u===void 0||u.call(m)}},[]);var rt=f&&n.createElement(ge.ZP,(0,J.Z)({key:"mask"},Q,{visible:c}),function(u,N){var Y=u.className,G=u.style;return n.createElement("div",{className:O()("".concat(i,"-mask"),Y,h==null?void 0:h.mask,q),style:(0,I.Z)((0,I.Z)((0,I.Z)({},G),F),b==null?void 0:b.mask),onClick:E&&c?R:void 0,ref:N})}),st=typeof p=="function"?p(d):p,B={};if(Oe&&U)switch(d){case"top":B.transform="translateY(".concat(U,"px)");break;case"bottom":B.transform="translateY(".concat(-U,"px)");break;case"left":B.transform="translateX(".concat(U,"px)");break;default:B.transform="translateX(".concat(-U,"px)");break}d==="left"||d==="right"?B.width=he(S):B.height=he(K);var it={onMouseEnter:H,onMouseOver:_,onMouseLeave:ee,onClick:V,onKeyDown:te,onKeyUp:ne},ct=n.createElement(ge.ZP,(0,J.Z)({key:"panel"},st,{visible:c,forceRender:x,onVisibleChanged:function(N){L==null||L(N)},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),function(u,N){var Y=u.className,G=u.style;return n.createElement("div",(0,J.Z)({className:O()("".concat(i,"-content-wrapper"),h==null?void 0:h.wrapper,Y),style:(0,I.Z)((0,I.Z)((0,I.Z)({},B),G),b==null?void 0:b.wrapper)},(0,se.Z)(e,{data:!0})),n.createElement(Re,(0,J.Z)({id:M,containerRef:N,prefixCls:i,className:O()(Z,h==null?void 0:h.content),style:(0,I.Z)((0,I.Z)({},D),b==null?void 0:b.content)},(0,se.Z)(e,{aria:!0}),it),w))}),$e=(0,I.Z)({},y);return o&&($e.zIndex=o),n.createElement(fe.Provider,{value:lt},n.createElement("div",{className:O()(i,"".concat(i,"-").concat(d),C,(0,me.Z)((0,me.Z)({},"".concat(i,"-open"),c),"".concat(i,"-inline"),v)),style:$e,tabIndex:-1,ref:j,onKeyDown:W},rt,n.createElement("div",{tabIndex:0,ref:P,style:Ce,"aria-hidden":"true","data-sentinel":"start"}),ct,n.createElement("div",{tabIndex:0,ref:z,style:Ce,"aria-hidden":"true","data-sentinel":"end"})))}var Le=n.forwardRef(Ke),He=Le,We=function(t){var s=t.open,a=s===void 0?!1:s,l=t.prefixCls,i=l===void 0?"rc-drawer":l,c=t.placement,d=c===void 0?"right":c,v=t.autoFocus,g=v===void 0?!0:v,x=t.keyboard,k=x===void 0?!0:x,$=t.width,h=$===void 0?378:$,C=t.mask,y=C===void 0?!0:C,o=t.maskClosable,Z=o===void 0?!0:o,M=t.getContainer,D=t.forceRender,p=t.afterOpenChange,S=t.destroyOnClose,K=t.onMouseEnter,w=t.onMouseOver,f=t.onMouseLeave,E=t.onClick,Q=t.onKeyDown,q=t.onKeyUp,F=t.panelRef,L=n.useState(!1),R=(0,le.Z)(L,2),H=R[0],_=R[1],ee=n.useState(!1),V=(0,le.Z)(ee,2),te=V[0],ne=V[1];(0,ue.Z)(function(){ne(!0)},[]);var b=te?a:!1,j=n.useRef(),P=n.useRef();(0,ue.Z)(function(){b&&(P.current=document.activeElement)},[b]);var z=function(X){var m;if(_(X),p==null||p(X),!X&&P.current&&!((m=j.current)!==null&&m!==void 0&&m.contains(P.current))){var T;(T=P.current)===null||T===void 0||T.focus({preventScroll:!0})}},W=n.useMemo(function(){return{panel:F}},[F]);if(!D&&!H&&!b&&S)return null;var oe={onMouseEnter:K,onMouseOver:w,onMouseLeave:f,onClick:E,onKeyDown:Q,onKeyUp:q},ae=(0,I.Z)((0,I.Z)({},t),{},{open:b,prefixCls:i,placement:d,autoFocus:g,keyboard:k,width:h,mask:y,maskClosable:Z,inline:M===!1,afterOpenChange:z,ref:j},oe);return n.createElement(ve.Provider,{value:W},n.createElement(Ee.Z,{open:b||D||H,autoDestroy:!1,getContainer:M,autoLock:y&&(b||H)},n.createElement(He,ae)))},Te=We,Ue=Te,Be=r(81293),ye=r(74021),Ae=r(55609),ie=r(95965),Fe=r(36293),Ve=r(67810),Xe=r(99800),Ye=r(40863),be=e=>{var t,s;const{prefixCls:a,title:l,footer:i,extra:c,closeIcon:d,closable:v,onClose:g,headerStyle:x,bodyStyle:k,footerStyle:$,children:h,classNames:C,styles:y}=e,{drawer:o}=n.useContext(ie.E_),Z=n.useCallback(w=>n.createElement("button",{type:"button",onClick:g,"aria-label":"Close",className:`${a}-close`},w),[g]),M=n.useMemo(()=>typeof(o==null?void 0:o.closable)=="object"&&o.closable.closeIcon?o.closable.closeIcon:o==null?void 0:o.closeIcon,[o==null?void 0:o.closable,o==null?void 0:o.closeIcon]),[D,p]=(0,Ye.Z)({closable:v!=null?v:o==null?void 0:o.closable,closeIcon:typeof d!="undefined"?d:M,customCloseIconRender:Z,defaultClosable:!0}),S=n.useMemo(()=>{var w,f;return!l&&!D?null:n.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(w=o==null?void 0:o.styles)===null||w===void 0?void 0:w.header),x),y==null?void 0:y.header),className:O()(`${a}-header`,{[`${a}-header-close-only`]:D&&!l&&!c},(f=o==null?void 0:o.classNames)===null||f===void 0?void 0:f.header,C==null?void 0:C.header)},n.createElement("div",{className:`${a}-header-title`},p,l&&n.createElement("div",{className:`${a}-title`},l)),c&&n.createElement("div",{className:`${a}-extra`},c))},[D,p,c,x,a,l]),K=n.useMemo(()=>{var w,f;if(!i)return null;const E=`${a}-footer`;return n.createElement("div",{className:O()(E,(w=o==null?void 0:o.classNames)===null||w===void 0?void 0:w.footer,C==null?void 0:C.footer),style:Object.assign(Object.assign(Object.assign({},(f=o==null?void 0:o.styles)===null||f===void 0?void 0:f.footer),$),y==null?void 0:y.footer)},i)},[i,$,a]);return n.createElement(n.Fragment,null,S,n.createElement("div",{className:O()(`${a}-body`,C==null?void 0:C.body,(t=o==null?void 0:o.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(s=o==null?void 0:o.styles)===null||s===void 0?void 0:s.body),k),y==null?void 0:y.body)},h),K)},A=r(63504),Ge=r(41504),Je=r(40073);const Qe=e=>{const t="100%";return{left:`translateX(-${t})`,right:`translateX(${t})`,top:`translateY(-${t})`,bottom:`translateY(${t})`}[e]},pe=(e,t)=>({"&-enter, &-appear":Object.assign(Object.assign({},e),{"&-active":t}),"&-leave":Object.assign(Object.assign({},t),{"&-active":e})}),xe=(e,t)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${t}`}}},pe({opacity:e},{opacity:1})),qe=(e,t)=>[xe(.7,t),pe({transform:Qe(e)},{transform:"none"})];var _e=e=>{const{componentCls:t,motionDurationSlow:s}=e;return{[t]:{[`${t}-mask-motion`]:xe(0,s),[`${t}-panel-motion`]:["left","right","top","bottom"].reduce((a,l)=>Object.assign(Object.assign({},a),{[`&-${l}`]:qe(l,s)}),{})}}};const et=e=>{const{componentCls:t,zIndexPopup:s,colorBgMask:a,colorBgElevated:l,motionDurationSlow:i,motionDurationMid:c,padding:d,paddingLG:v,fontSizeLG:g,lineHeightLG:x,lineWidth:k,lineType:$,colorSplit:h,marginSM:C,colorIcon:y,colorIconHover:o,colorText:Z,fontWeightStrong:M,footerPaddingBlock:D,footerPaddingInline:p}=e,S=`${t}-content-wrapper`;return{[t]:{position:"fixed",inset:0,zIndex:s,pointerEvents:"none","&-pure":{position:"relative",background:l,display:"flex",flexDirection:"column",[`&${t}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${t}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${t}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${t}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${t}-mask`]:{position:"absolute",inset:0,zIndex:s,background:a,pointerEvents:"auto"},[S]:{position:"absolute",zIndex:s,maxWidth:"100vw",transition:`all ${i}`,"&-hidden":{display:"none"}},[`&-left > ${S}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${S}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${S}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${S}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${t}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:l,pointerEvents:"auto"},[`${t}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,A.bf)(d)} ${(0,A.bf)(v)}`,fontSize:g,lineHeight:x,borderBottom:`${(0,A.bf)(k)} ${$} ${h}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${t}-extra`]:{flex:"none"},[`${t}-close`]:{display:"inline-block",marginInlineEnd:C,color:y,fontWeight:M,fontSize:g,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${c}`,textRendering:"auto","&:focus, &:hover":{color:o,textDecoration:"none"}},[`${t}-title`]:{flex:1,margin:0,color:Z,fontWeight:e.fontWeightStrong,fontSize:g,lineHeight:x},[`${t}-body`]:{flex:1,minWidth:0,minHeight:0,padding:v,overflow:"auto"},[`${t}-footer`]:{flexShrink:0,padding:`${(0,A.bf)(D)} ${(0,A.bf)(p)}`,borderTop:`${(0,A.bf)(k)} ${$} ${h}`},"&-rtl":{direction:"rtl"}}}},tt=e=>({zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding});var we=(0,Ge.I$)("Drawer",e=>{const t=(0,Je.TS)(e,{});return[et(t),_e(t)]},tt),Se=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(s[a[l]]=e[a[l]]);return s};const mt=null,nt={distance:180},Ne=e=>{var t;const{rootClassName:s,width:a,height:l,size:i="default",mask:c=!0,push:d=nt,open:v,afterOpenChange:g,onClose:x,prefixCls:k,getContainer:$,style:h,className:C,visible:y,afterVisibleChange:o,maskStyle:Z,drawerStyle:M,contentWrapperStyle:D}=e,p=Se(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:S,getPrefixCls:K,direction:w,drawer:f}=n.useContext(ie.E_),E=K("drawer",k),[Q,q,F]=we(E),L=$===void 0&&S?()=>S(document.body):$,R=O()({"no-mask":!c,[`${E}-rtl`]:w==="rtl"},s,q,F),H=n.useMemo(()=>a!=null?a:i==="large"?736:378,[a,i]),_=n.useMemo(()=>l!=null?l:i==="large"?736:378,[l,i]),ee={motionName:(0,ye.m)(E,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},V=oe=>({motionName:(0,ye.m)(E,`panel-motion-${oe}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),te=(0,Xe.H)(),[ne,b]=(0,Be.Cn)("Drawer",p.zIndex),{classNames:j={},styles:P={}}=p,{classNames:z={},styles:W={}}=f||{};return Q(n.createElement(Ve.BR,null,n.createElement(Fe.Ux,{status:!0,override:!0},n.createElement(Ae.Z.Provider,{value:b},n.createElement(Ue,Object.assign({prefixCls:E,onClose:x,maskMotion:ee,motion:V},p,{classNames:{mask:O()(j.mask,z.mask),content:O()(j.content,z.content)},styles:{mask:Object.assign(Object.assign(Object.assign({},P.mask),Z),W.mask),content:Object.assign(Object.assign(Object.assign({},P.content),M),W.content),wrapper:Object.assign(Object.assign(Object.assign({},P.wrapper),D),W.wrapper)},open:v!=null?v:y,mask:c,push:d,width:H,height:_,style:Object.assign(Object.assign({},f==null?void 0:f.style),h),className:O()(f==null?void 0:f.className,C),rootClassName:R,getContainer:L,afterOpenChange:g!=null?g:o,panelRef:te,zIndex:ne}),n.createElement(be,Object.assign({prefixCls:E},p,{onClose:x})))))))},ot=e=>{const{prefixCls:t,style:s,className:a,placement:l="right"}=e,i=Se(e,["prefixCls","style","className","placement"]),{getPrefixCls:c}=n.useContext(ie.E_),d=c("drawer",t),[v,g,x]=we(d),k=O()(d,`${d}-pure`,`${d}-${l}`,g,x,a);return v(n.createElement("div",{className:k,style:s},n.createElement(be,Object.assign({prefixCls:d},i))))};Ne._InternalPanelDoNotUseOrYouWillBeFired=ot;var at=Ne}}]);

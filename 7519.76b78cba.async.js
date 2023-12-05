"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[7519],{17519:function(st,fe,v){v.d(fe,{Z:function(){return et}});var s=v(50959),ge=v(63445),pe=v(78655),me=v(98613),ve=v(41693),he=v(84875),A=v.n(he),Ce=v(87017),_=v(31594),ee=v(38126),B=v(33346),te=v(11582),re={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},oe=function(){var t=(0,s.useRef)([]),r=(0,s.useRef)(null);return(0,s.useEffect)(function(){var o=Date.now(),n=!1;t.current.forEach(function(c){if(c){n=!0;var i=c.style;i.transitionDuration=".3s, .3s, .3s, .06s",r.current&&o-r.current<100&&(i.transitionDuration="0s, 0s")}}),n&&(r.current=Date.now())}),t.current},ye=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],Se=function(t){var r=(0,B.Z)((0,B.Z)({},re),t),o=r.className,n=r.percent,c=r.prefixCls,i=r.strokeColor,a=r.strokeLinecap,l=r.strokeWidth,u=r.style,d=r.trailColor,g=r.trailWidth,S=r.transition,h=(0,te.Z)(r,ye);delete h.gapPosition;var C=Array.isArray(n)?n:[n],m=Array.isArray(i)?i:[i],f=oe(),$=l/2,b=100-l/2,y="M ".concat(a==="round"?$:0,",").concat($,`
         L `).concat(a==="round"?b:100,",").concat($),p="0 0 100 ".concat(l),x=0;return s.createElement("svg",(0,ee.Z)({className:A()("".concat(c,"-line"),o),viewBox:p,preserveAspectRatio:"none",style:u},h),s.createElement("path",{className:"".concat(c,"-line-trail"),d:y,strokeLinecap:a,stroke:d,strokeWidth:g||l,fillOpacity:"0"}),C.map(function(W,P){var E=1;switch(a){case"round":E=1-l/100;break;case"square":E=1-l/2/100;break;default:E=1;break}var N={strokeDasharray:"".concat(W*E,"px, 100px"),strokeDashoffset:"-".concat(x,"px"),transition:S||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},O=m[P]||m[m.length-1];return x+=W,s.createElement("path",{key:P,className:"".concat(c,"-line-path"),d:y,strokeLinecap:a,stroke:O,strokeWidth:l,fillOpacity:"0",ref:function(I){f[P]=I},style:N})}))},$e=Se,Z=v(40727),be=v(32682),ke=v(63490),ne=0,xe=(0,ke.Z)();function Ee(){var e;return xe?(e=ne,ne+=1):e="TEST_OR_SSR",e}var Pe=function(e){var t=s.useState(),r=(0,be.Z)(t,2),o=r[0],n=r[1];return s.useEffect(function(){n("rc_progress_".concat(Ee()))},[]),e||o},se=function(t){var r=t.bg,o=t.children;return s.createElement("div",{style:{width:"100%",height:"100%",background:r}},o)};function ie(e,t){return Object.keys(e).map(function(r){var o=parseFloat(r),n="".concat(Math.floor(o*t),"%");return"".concat(e[r]," ").concat(n)})}var Oe=s.forwardRef(function(e,t){var r=e.prefixCls,o=e.color,n=e.gradientId,c=e.radius,i=e.style,a=e.ptg,l=e.strokeLinecap,u=e.strokeWidth,d=e.size,g=e.gapDegree,S=o&&(0,Z.Z)(o)==="object",h=S?"#FFF":void 0,C=d/2,m=s.createElement("circle",{className:"".concat(r,"-circle-path"),r:c,cx:C,cy:C,stroke:h,strokeLinecap:l,strokeWidth:u,opacity:a===0?0:1,style:i,ref:t});if(!S)return m;var f="".concat(n,"-conic"),$=g?"".concat(180+g/2,"deg"):"0deg",b=ie(o,(360-g)/360),y=ie(o,1),p="conic-gradient(from ".concat($,", ").concat(b.join(", "),")"),x="linear-gradient(to ".concat(g?"bottom":"top",", ").concat(y.join(", "),")");return s.createElement(s.Fragment,null,s.createElement("mask",{id:f},m),s.createElement("foreignObject",{x:0,y:0,width:d,height:d,mask:"url(#".concat(f,")")},s.createElement(se,{bg:x},s.createElement(se,{bg:p}))))}),Ie=Oe,T=100,V=function(t,r,o,n,c,i,a,l,u,d){var g=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,S=o/100*360*((360-i)/360),h=i===0?0:{bottom:0,top:180,left:90,right:-90}[a],C=(100-n)/100*r;u==="round"&&n!==100&&(C+=d/2,C>=r&&(C=r-.01));var m=T/2;return{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:C+g,transform:"rotate(".concat(c+S+h,"deg)"),transformOrigin:"".concat(m,"px ").concat(m,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},Le=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function ae(e){var t=e!=null?e:[];return Array.isArray(t)?t:[t]}var We=function(t){var r=(0,B.Z)((0,B.Z)({},re),t),o=r.id,n=r.prefixCls,c=r.steps,i=r.strokeWidth,a=r.trailWidth,l=r.gapDegree,u=l===void 0?0:l,d=r.gapPosition,g=r.trailColor,S=r.strokeLinecap,h=r.style,C=r.className,m=r.strokeColor,f=r.percent,$=(0,te.Z)(r,Le),b=T/2,y=Pe(o),p="".concat(y,"-gradient"),x=b-i/2,W=Math.PI*2*x,P=u>0?90+u/2:-90,E=W*((360-u)/360),N=(0,Z.Z)(c)==="object"?c:{count:c,space:2},O=N.count,R=N.space,I=ae(f),k=ae(m),D=k.find(function(H){return H&&(0,Z.Z)(H)==="object"}),G=D&&(0,Z.Z)(D)==="object",w=G?"butt":S,tt=V(W,E,0,100,P,u,d,g,w,i),de=oe(),rt=function(){var K=0;return I.map(function(F,j){var J=k[j]||k[k.length-1],M=V(W,E,K,F,P,u,d,J,w,i);return K+=F,s.createElement(Ie,{key:j,color:J,ptg:F,radius:x,prefixCls:n,gradientId:p,style:M,strokeLinecap:w,strokeWidth:i,gapDegree:u,ref:function(q){de[j]=q},size:T})}).reverse()},ot=function(){var K=Math.round(O*(I[0]/100)),F=100/O,j=0;return new Array(O).fill(null).map(function(J,M){var U=M<=K-1?k[0]:g,q=U&&(0,Z.Z)(U)==="object"?"url(#".concat(p,")"):void 0,ue=V(W,E,j,F,P,u,d,U,"butt",i,R);return j+=(E-ue.strokeDashoffset+R)*100/E,s.createElement("circle",{key:M,className:"".concat(n,"-circle-path"),r:x,cx:b,cy:b,stroke:q,strokeWidth:i,opacity:1,style:ue,ref:function(nt){de[M]=nt}})})};return s.createElement("svg",(0,ee.Z)({className:A()("".concat(n,"-circle"),C),viewBox:"0 0 ".concat(T," ").concat(T),style:h,id:o,role:"presentation"},$),!O&&s.createElement("circle",{className:"".concat(n,"-circle-trail"),r:x,cx:b,cy:b,stroke:g,strokeLinecap:w,strokeWidth:a||i,style:tt}),O?ot():rt())},ce=We,it={Line:$e,Circle:ce},De=v(32618),Q=v(81548);function L(e){return!e||e<0?0:e>100?100:e}function X(e){let{success:t,successPercent:r}=e,o=r;return t&&"progress"in t&&(o=t.progress),t&&"percent"in t&&(o=t.percent),o}const Ne=e=>{let{percent:t,success:r,successPercent:o}=e;const n=L(X({success:r,successPercent:o}));return[n,L(L(t)-n)]},we=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:o}=t;return[o||Q.ez.green,r||null]},z=(e,t,r)=>{var o,n,c,i;let a=-1,l=-1;if(t==="step"){const u=r.steps,d=r.strokeWidth;typeof e=="string"||typeof e=="undefined"?(a=e==="small"?2:14,l=d!=null?d:8):typeof e=="number"?[a,l]=[e,e]:[a=14,l=8]=e,a*=u}else if(t==="line"){const u=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e=="undefined"?l=u||(e==="small"?6:8):typeof e=="number"?[a,l]=[e,e]:[a=-1,l=8]=e}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e=="undefined"?[a,l]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[a,l]=[e,e]:(a=(n=(o=e[0])!==null&&o!==void 0?o:e[1])!==null&&n!==void 0?n:120,l=(i=(c=e[0])!==null&&c!==void 0?c:e[1])!==null&&i!==void 0?i:120));return[a,l]},je=3,Ae=e=>je/e*100;var Ze=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:o="round",gapPosition:n,gapDegree:c,width:i=120,type:a,children:l,success:u,size:d=i}=e,[g,S]=z(d,"circle");let{strokeWidth:h}=e;h===void 0&&(h=Math.max(Ae(g),6));const C={width:g,height:S,fontSize:g*.15+6},m=s.useMemo(()=>{if(c||c===0)return c;if(a==="dashboard")return 75},[c,a]),f=n||a==="dashboard"&&"bottom"||void 0,$=Object.prototype.toString.call(e.strokeColor)==="[object Object]",b=we({success:u,strokeColor:e.strokeColor}),y=A()(`${t}-inner`,{[`${t}-circle-gradient`]:$}),p=s.createElement(ce,{percent:Ne(e),strokeWidth:h,trailWidth:h,strokeColor:b,strokeLinecap:o,trailColor:r,prefixCls:t,gapDegree:m,gapPosition:f});return s.createElement("div",{className:y,style:C},g<=20?s.createElement(De.Z,{title:l},s.createElement("span",null,p)):s.createElement(s.Fragment,null,p,l))},Te=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const Re=e=>{let t=[];return Object.keys(e).forEach(r=>{const o=parseFloat(r.replace(/%/g,""));isNaN(o)||t.push({key:o,value:e[r]})}),t=t.sort((r,o)=>r.key-o.key),t.map(r=>{let{key:o,value:n}=r;return`${n} ${o}%`}).join(", ")},Fe=(e,t)=>{const{from:r=Q.ez.blue,to:o=Q.ez.blue,direction:n=t==="rtl"?"to left":"to right"}=e,c=Te(e,["from","to","direction"]);if(Object.keys(c).length!==0){const i=Re(c);return{backgroundImage:`linear-gradient(${n}, ${i})`}}return{backgroundImage:`linear-gradient(${n}, ${r}, ${o})`}};var Me=e=>{const{prefixCls:t,direction:r,percent:o,size:n,strokeWidth:c,strokeColor:i,strokeLinecap:a="round",children:l,trailColor:u=null,success:d}=e,{direction:g}=(0,s.useContext)(_.E_),S=i&&typeof i!="string"?Fe(i,r):{backgroundColor:i},h=a==="square"||a==="butt"?0:void 0,C={backgroundColor:u||void 0,borderRadius:h},m=n!=null?n:[-1,c||(n==="small"?6:8)],[f,$]=z(m,"line",{strokeWidth:c}),b=Object.assign({width:"100%",height:$,borderRadius:h,clipPath:g==="rtl"?`inset(0 0 0 ${100-L(o)}% round 100px)`:`inset(0 ${100-L(o)}% 0 0 round 100px)`},S),y=X(e),p={width:"100%",height:$,borderRadius:h,clipPath:g==="rtl"?`inset(0 0 0 ${100-L(y)}% round 100px)`:`inset(0 ${100-L(y)}% 0 0 round 100px)`,backgroundColor:d==null?void 0:d.strokeColor},x={width:f<0?"100%":f,height:$};return s.createElement(s.Fragment,null,s.createElement("div",{className:`${t}-outer`,style:x},s.createElement("div",{className:`${t}-inner`,style:C},s.createElement("div",{className:`${t}-bg`,style:b}),y!==void 0?s.createElement("div",{className:`${t}-success-bg`,style:p}):null)),l)},Be=e=>{const{size:t,steps:r,percent:o=0,strokeWidth:n=8,strokeColor:c,trailColor:i=null,prefixCls:a,children:l}=e,u=Math.round(r*(o/100)),d=t==="small"?2:14,g=t!=null?t:[d,n],[S,h]=z(g,"step",{steps:r,strokeWidth:n}),C=S/r,m=new Array(r);for(let f=0;f<r;f++){const $=Array.isArray(c)?c[f]:c;m[f]=s.createElement("div",{key:f,className:A()(`${a}-steps-item`,{[`${a}-steps-item-active`]:f<=u-1}),style:{backgroundColor:f<=u-1?$:i,width:C,height:h}})}return s.createElement("div",{className:`${a}-steps-outer`},m,l)},Y=v(71584),Xe=v(6301),ze=v(81501),Ge=v(90467);const le=e=>{const t=e?"100%":"-100%";return new Y.E4(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},He=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},(0,Xe.Wf)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize,marginInlineEnd:e.marginXS,marginBottom:e.marginXS},[`${t}-outer`]:{display:"inline-block",width:"100%"},[`&${t}-show-info`]:{[`${t}-outer`]:{marginInlineEnd:`calc(-2em - ${(0,Y.bf)(e.marginXS)})`,paddingInlineEnd:`calc(2em + ${(0,Y.bf)(e.paddingXS)})`}},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",backgroundColor:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",width:"2em",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:le(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:le(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Ke=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Ue=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Ve=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},Qe=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`});var Ye=(0,ze.I$)("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=(0,Ge.TS)(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[He(r),Ke(r),Ue(r),Ve(r)]},Qe),Je=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const dt=null,qe=["normal","exception","active","success"];var _e=s.forwardRef((e,t)=>{const{prefixCls:r,className:o,rootClassName:n,steps:c,strokeColor:i,percent:a=0,size:l="default",showInfo:u=!0,type:d="line",status:g,format:S,style:h}=e,C=Je(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style"]),m=s.useMemo(()=>{var I,k;const D=X(e);return parseInt(D!==void 0?(I=D!=null?D:0)===null||I===void 0?void 0:I.toString():(k=a!=null?a:0)===null||k===void 0?void 0:k.toString(),10)},[a,e.success,e.successPercent]),f=s.useMemo(()=>!qe.includes(g)&&m>=100?"success":g||"normal",[g,m]),{getPrefixCls:$,direction:b,progress:y}=s.useContext(_.E_),p=$("progress",r),[x,W]=Ye(p),P=s.useMemo(()=>{if(!u)return null;const I=X(e);let k;const D=S||(w=>`${w}%`),G=d==="line";return S||f!=="exception"&&f!=="success"?k=D(L(a),L(I)):f==="exception"?k=G?s.createElement(me.Z,null):s.createElement(ve.Z,null):f==="success"&&(k=G?s.createElement(ge.Z,null):s.createElement(pe.Z,null)),s.createElement("span",{className:`${p}-text`,title:typeof k=="string"?k:void 0},k)},[u,a,m,f,d,p,S]),E=Array.isArray(i)?i[0]:i,N=typeof i=="string"||Array.isArray(i)?i:void 0;let O;d==="line"?O=c?s.createElement(Be,Object.assign({},e,{strokeColor:N,prefixCls:p,steps:c}),P):s.createElement(Me,Object.assign({},e,{strokeColor:E,prefixCls:p,direction:b}),P):(d==="circle"||d==="dashboard")&&(O=s.createElement(Ze,Object.assign({},e,{strokeColor:E,prefixCls:p,progressStatus:f}),P));const R=A()(p,`${p}-status-${f}`,`${p}-${d==="dashboard"&&"circle"||c&&"steps"||d}`,{[`${p}-inline-circle`]:d==="circle"&&z(l,"circle")[0]<=20,[`${p}-show-info`]:u,[`${p}-${l}`]:typeof l=="string",[`${p}-rtl`]:b==="rtl"},y==null?void 0:y.className,o,n,W);return x(s.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},y==null?void 0:y.style),h),className:R,role:"progressbar","aria-valuenow":m},(0,Ce.Z)(C,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),O))}),et=_e}}]);

(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[829],{61593:function(a,h,e){"use strict";e.r(h);var f=e(16568),l=e(11527);h.default=function(){return(0,l.jsx)(f.F,{placeholder:"\u8BF7\u8F93\u5165"})}},16568:function(a,h,e){"use strict";e.d(h,{F:function(){return Q}});var f=e(57213),l=e.n(f),t=e(54306),u=e.n(t),v=e(12342),C=e.n(v),j=e(82178),M=e(22877),x=e(50959),E=e(11527),V=["value","onChange","onValueChanging","onChangeEnd"],Q=(0,x.memo)(function(y){var O=y.value,W=y.onChange,Z=y.onValueChanging,I=y.onChangeEnd,ee=C()(y,V),m=O||"",b=(0,x.useState)(m),p=u()(b,2),_=p[0],D=p[1],F=(0,x.useRef)(null),P=(0,x.useRef)(!1),S=(0,x.useRef)(!1),B=(0,x.useCallback)(function(){W==null||W(_)},[_]);return(0,x.useEffect)(function(){typeof O!="undefined"&&D(O)},[O]),(0,E.jsx)(M.I,l()(l()({ref:F},ee),{},{value:_,onCompositionStart:function(){P.current=!0},onCompositionEnd:function(){P.current=!1},onFocus:function(){S.current=!0},onBlur:function(){S.current=!1,I==null||I(_)},onChange:function(L){D(L.target.value),Z==null||Z(L.target.value)},onPressEnter:function(L){!L.shiftKey&&!P.current&&(L.preventDefault(),B(),S.current=!1,I==null||I(_))},suffix:O===_?(0,E.jsx)("span",{}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(j.ZP,{type:"link",size:"small",onClick:function(){D(O)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,E.jsx)(j.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){B()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},22877:function(a,h,e){"use strict";e.d(h,{I:function(){return I},K:function(){return ee}});var f=e(57213),l=e.n(f),t=e(12342),u=e.n(t),v=e(99951),C=e(50959),j=e(92935),M=e.n(j),x=e(41955),E,V,Q,y=(0,x.kc)(function(m){var b=m.css,p=m.token;return{input:b(E||(E=M()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),p.motionEaseOut),block:b(V||(V=M()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),p.colorFillTertiary,p.colorFillQuaternary),textarea:b(Q||(Q=M()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),p.motionEaseOut)}}),O=e(11527),W=["className","type"],Z=["className","type"],I=(0,C.forwardRef)(function(m,b){var p=m.className,_=m.type,D=_===void 0?"ghost":_,F=u()(m,W),P=y(),S=P.styles,B=P.cx;return(0,O.jsx)(v.Z,l()({className:B(S.input,D==="block"&&S.block,p),ref:b},F))}),ee=(0,C.memo)((0,C.forwardRef)(function(m,b){var p=m.className,_=m.type,D=_===void 0?"ghost":_,F=u()(m,Z),P=y(),S=P.styles,B=P.cx;return(0,O.jsx)(v.Z.TextArea,l()({className:B(S.textarea,D==="block"&&S.block,p),ref:b},F))}))},99951:function(a,h,e){"use strict";e.d(h,{Z:function(){return Ee}});var f=e(84875),l=e.n(f),t=e(50959),u=e(43190),v=e(3879),C=e(29890),M=n=>{const{getPrefixCls:c,direction:s}=(0,t.useContext)(u.E_),{prefixCls:o,className:r=""}=n,g=c("input-group",o),G=c("input"),[z,H]=(0,C.ZP)(G),J=l()(g,{[`${g}-lg`]:n.size==="large",[`${g}-sm`]:n.size==="small",[`${g}-compact`]:n.compact,[`${g}-rtl`]:s==="rtl"},H,r),K=(0,t.useContext)(v.aM),k=(0,t.useMemo)(()=>Object.assign(Object.assign({},K),{isFormItemInput:!1}),[K]);return z(t.createElement("span",{className:J,style:n.style,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,onFocus:n.onFocus,onBlur:n.onBlur},t.createElement(v.aM.Provider,{value:k},n.children)))},x=e(86865),E=e(31966),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},Q=V,y=e(86793),O=function(c,s){return t.createElement(y.Z,(0,E.Z)({},c,{ref:s,icon:Q}))},W=t.forwardRef(O),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},I=Z,ee=function(c,s){return t.createElement(y.Z,(0,E.Z)({},c,{ref:s,icon:I}))},m=t.forwardRef(ee),b=e(21641),p=e(84526),_=e(57829),D=function(n,c){var s={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&c.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)c.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(s[o[r]]=n[o[r]]);return s};const F=n=>n?t.createElement(m,null):t.createElement(W,null),P={click:"onClick",hover:"onMouseOver"};var B=t.forwardRef((n,c)=>{const{visibilityToggle:s=!0}=n,o=typeof s=="object"&&s.visible!==void 0,[r,g]=(0,t.useState)(()=>o?s.visible:!1),G=(0,t.useRef)(null);t.useEffect(()=>{o&&g(s.visible)},[o,s]);const z=(0,_.Z)(G),H=()=>{const{disabled:se}=n;se||(r&&z(),g(T=>{var A;const Y=!T;return typeof s=="object"&&((A=s.onVisibleChange)===null||A===void 0||A.call(s,Y)),Y}))},J=se=>{const{action:T="click",iconRender:A=F}=n,Y=P[T]||"",q=A(r),re={[Y]:H,className:`${se}-icon`,key:"passwordIcon",onMouseDown:ie=>{ie.preventDefault()},onMouseUp:ie=>{ie.preventDefault()}};return t.cloneElement(t.isValidElement(q)?q:t.createElement("span",null,q),re)},{className:K,prefixCls:k,inputPrefixCls:le,size:N}=n,ne=D(n,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:ue}=t.useContext(u.E_),ce=ue("input",le),X=ue("input-password",k),oe=s&&J(X),w=l()(X,K,{[`${X}-${N}`]:!!N}),de=Object.assign(Object.assign({},(0,b.Z)(ne,["suffix","iconRender","visibilityToggle"])),{type:r?"text":"password",className:w,prefixCls:ce,suffix:oe});return N&&(de.size=N),t.createElement(x.Z,Object.assign({ref:(0,p.sQ)(c,G)},de))}),R=e(32132),L=e(21858),me=e(82178),pe=e(45823),_e=e(69475),he=function(n,c){var s={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&c.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)c.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(s[o[r]]=n[o[r]]);return s},Ce=t.forwardRef((n,c)=>{const{prefixCls:s,inputPrefixCls:o,className:r,size:g,suffix:G,enterButton:z=!1,addonAfter:H,loading:J,disabled:K,onSearch:k,onChange:le,onCompositionStart:N,onCompositionEnd:ne}=n,ue=he(n,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:ce,direction:X}=t.useContext(u.E_),oe=t.useRef(!1),w=ce("input-search",s),de=ce("input",o),{compactSize:se}=(0,_e.ri)(w,X),T=(0,pe.Z)(i=>{var d;return(d=g!=null?g:se)!==null&&d!==void 0?d:i}),A=t.useRef(null),Y=i=>{i&&i.target&&i.type==="click"&&k&&k(i.target.value,i),le&&le(i)},q=i=>{var d;document.activeElement===((d=A.current)===null||d===void 0?void 0:d.input)&&i.preventDefault()},re=i=>{var d,$;k&&k(($=(d=A.current)===null||d===void 0?void 0:d.input)===null||$===void 0?void 0:$.value,i)},ie=i=>{oe.current||J||re(i)},ge=typeof z=="boolean"?t.createElement(R.Z,null):null,fe=`${w}-button`;let ae;const U=z||{},ve=U.type&&U.type.__ANT_BUTTON===!0;ve||U.type==="button"?ae=(0,L.Tm)(U,Object.assign({onMouseDown:q,onClick:i=>{var d,$;($=(d=U==null?void 0:U.props)===null||d===void 0?void 0:d.onClick)===null||$===void 0||$.call(d,i),re(i)},key:"enterButton"},ve?{className:fe,size:T}:{})):ae=t.createElement(me.ZP,{className:fe,type:z?"primary":void 0,size:T,disabled:K,key:"enterButton",onMouseDown:q,onClick:re,loading:J,icon:ge},z),H&&(ae=[ae,(0,L.Tm)(H,{key:"addonAfter"})]);const ye=l()(w,{[`${w}-rtl`]:X==="rtl",[`${w}-${T}`]:!!T,[`${w}-with-button`]:!!z},r),Oe=i=>{oe.current=!0,N==null||N(i)},be=i=>{oe.current=!1,ne==null||ne(i)};return t.createElement(x.Z,Object.assign({ref:(0,p.sQ)(A,c),onPressEnter:ie},ue,{size:T,onCompositionStart:Oe,onCompositionEnd:be,prefixCls:de,addonAfter:ae,suffix:G,onChange:Y,className:ye,disabled:K}))}),xe=e(94936);const te=x.Z;te.Group=M,te.Search=Ce,te.TextArea=xe.Z,te.Password=B;var Ee=te},12342:function(a,h,e){var f=e(20006);function l(t,u){if(t==null)return{};var v=f(t,u),C,j;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(t);for(j=0;j<M.length;j++)C=M[j],!(u.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(t,C)&&(v[C]=t[C])}return v}a.exports=l,a.exports.__esModule=!0,a.exports.default=a.exports},20006:function(a){function h(e,f){if(e==null)return{};var l={},t=Object.keys(e),u,v;for(v=0;v<t.length;v++)u=t[v],!(f.indexOf(u)>=0)&&(l[u]=e[u]);return l}a.exports=h,a.exports.__esModule=!0,a.exports.default=a.exports},92935:function(a){function h(e,f){return f||(f=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(f)}}))}a.exports=h,a.exports.__esModule=!0,a.exports.default=a.exports}}]);

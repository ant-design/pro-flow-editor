"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[3933],{88868:function(k,V,o){o.d(V,{F:function(){return I}});var G=o(26068),L=o.n(G),$=o(48305),Z=o.n($),A=o(67825),T=o.n(A),x=o(26820),v=o(77949),P=o(50959),D=o(11527),F=["value","onChange","onValueChanging","onChangeEnd"],I=(0,P.memo)(function(j){var s=j.value,M=j.onChange,N=j.onValueChanging,y=j.onChangeEnd,m=T()(j,F),C=s||"",K=(0,P.useState)(C),S=Z()(K,2),c=S[0],l=S[1],U=(0,P.useRef)(null),h=(0,P.useRef)(!1),b=(0,P.useRef)(!1),z=(0,P.useCallback)(function(){M==null||M(c)},[c]);return(0,P.useEffect)(function(){typeof s!="undefined"&&l(s)},[s]),(0,D.jsx)(v.I,L()(L()({ref:U},m),{},{value:c,onCompositionStart:function(){h.current=!0},onCompositionEnd:function(){h.current=!1},onFocus:function(){b.current=!0},onBlur:function(){b.current=!1,y==null||y(c)},onChange:function(R){l(R.target.value),N==null||N(R.target.value)},onPressEnter:function(R){!R.shiftKey&&!h.current&&(R.preventDefault(),z(),b.current=!1,y==null||y(c))},suffix:s===c?(0,D.jsx)("span",{}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x.ZP,{type:"link",size:"small",onClick:function(){l(s)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,D.jsx)(x.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){z()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},41529:function(k,V,o){o.d(V,{AC:function(){return F},iq:function(){return s},oR:function(){return D}});var G=o(15558),L=o.n(G),$=o(50959),Z=o(29303),A=o(66644),T=o(56794),x=o(11527),v=function(N){var y=N.collapsedKeys,m=N.onCollapsedKeysChange;return(0,Z.Ue)(function(C,K){return{collapsedKeys:y!=null?y:[],onCollapsedKeysChange:m,toggleCollapsedKey:function(c){var l,U,h=[];K().collapsedKeys.includes(c)?h=K().collapsedKeys.filter(function(b){return b!==c}):h=[].concat(L()(K().collapsedKeys),[c]),C({collapsedKeys:h}),(l=(U=K()).onCollapsedKeysChange)===null||l===void 0||l.call(U,h)}}})},P=(0,A.k)(),D=P.useStore,F=P.useStoreApi,I=P.Provider,j=(0,$.memo)(function(M){var N=M.collapsedKeys,y=F(),m=(0,T.N)(y);return m("collapsedKeys",N),null}),s=(0,$.memo)(function(M){var N=M.children,y=M.defaultCollapsedKeys,m=M.onCollapsedKeysChange,C=M.collapsedKeys;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(I,{createStore:function(){return v({collapsedKeys:y,onCollapsedKeysChange:m})},children:[N,(0,x.jsx)(j,{collapsedKeys:C})]})})})},83933:function(k,V,o){var G=o(26068),L=o.n(G),$=o(67825),Z=o.n($),A=o(53649),T=o.n(A),x=o(30614),v=o(51385),P=o(46033),D=o(50959),F=o(31635),I=o(49658),j=o(41529),s=o(11527),M=["id","onTitleChange","onCollapsedKeysChange"],N,y,m=(0,P.kc)(function(c){var l=c.css,U=c.token,h=c.prefixCls;return{container:l(N||(N=T()([`
    will-change: transform;
    width: 100%;
    max-width: 600px;
    border: 1px solid `,`;
    border-radius: 12px;
    .`,`-card-head {
      padding-right: 16px;
    }

    .editor-field-item-container:not(:last-child) {
      margin-bottom: 24px;
    }
  `])),U.colorBorder,h),selected:l(y||(y=T()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),U.colorPrimary)}}),C=(0,D.memo)(function(c){var l=c.active,U=c.collapsedKeys,h=c.onCollapsedKeysChange,b=c.onTitleChange,z=c.style,J=c.className,R=c.title,X=c.children,ne=c.extra,q=m(),ee=q.styles,te=q.cx,Q=(0,D.useRef)(null);return(0,s.jsx)(x.ZP,{getPopupContainer:function(){return Q.current||document.body},children:(0,s.jsx)(j.iq,{collapsedKeys:U,onCollapsedKeysChange:h,children:(0,s.jsx)(v.Z,{ref:Q,title:(0,s.jsx)(F.Z,{onChange:b,value:R||"\u57FA\u7840\u8282\u70B9"}),className:te(ee.container,l&&ee.selected,J),extra:ne,style:z,children:X})})})}),K=(0,D.memo)(function(c){var l=c.id,U=c.onTitleChange,h=c.onCollapsedKeysChange,b=Z()(c,M),z=(0,I.d)();return(0,s.jsx)(C,L()({onTitleChange:function(R){z.updateNodeMeta(l,"title",R),U==null||U(R)},onCollapsedKeysChange:function(R){z.updateNodeState(l,"collapsedKeys",R),h==null||h(R)}},b))}),S=K;S.Preview=C,V.Z=S},31635:function(k,V,o){var G=o(48305),L=o.n(G),$=o(27019),Z=o(19638),A=o(50959),T=o(24819),x=o(88868),v=o(11527),P=(0,A.memo)(function(D){var F=D.value,I=D.onChange,j=(0,A.useState)(!1),s=L()(j,2),M=s[0],N=s[1];return M?(0,v.jsx)(x.F,{onChange:I,onChangeEnd:function(){N(!1)},value:F}):(0,v.jsxs)(T.D,{gap:8,align:"center",horizontal:!0,children:[(0,v.jsx)("span",{style:{lineHeight:1},children:F}),(0,v.jsx)(Z.Z,{icon:(0,v.jsx)($.Z,{}),onClick:function(){N(!M)},placement:"right",title:"Edit"})]})});V.Z=P},49658:function(k,V,o){o.d(V,{d:function(){return D}});var G=o(26068),L=o.n(G),$=o(67825),Z=o.n($),A=o(22653),T=o(50959),x=o(67799),v=o(31279),P=["yjsDoc","flattenEdges","selectedKeys","onFlattenNodesChange","onEdgesChange","onFlattenEdgesChange","onNodesChange","beforeNodesChange","afterNodesChange","onViewPortChange","onNodesTreeChange","onSelectionChange","onElementSelectChange","updateEdgesOnEdgeChange","updateEdgesOnConnection","internalUpdateEdges","internalUpdateNodes","internalUpdateSelection"],D=function(){var I=(0,v.AC)(),j=(0,x._K)(),s=I.getState(),M=s.yjsDoc,N=s.flattenEdges,y=s.selectedKeys,m=s.onFlattenNodesChange,C=s.onEdgesChange,K=s.onFlattenEdgesChange,S=s.onNodesChange,c=s.beforeNodesChange,l=s.afterNodesChange,U=s.onViewPortChange,h=s.onNodesTreeChange,b=s.onSelectionChange,z=s.onElementSelectChange,J=s.updateEdgesOnEdgeChange,R=s.updateEdgesOnConnection,X=s.internalUpdateEdges,ne=s.internalUpdateNodes,q=s.internalUpdateSelection,ee=Z()(s,P),te=(0,A.Z)(function(){return I.getState().flattenNodes}),Q=(0,A.Z)(function(){return I.getState().flattenEdges}),W=(0,A.Z)(function(){return I.getState().selectedKeys}),ae=(0,T.useCallback)(function(re){return j?j.screenToFlowPosition(re):{x:0,y:0}},[j]);return(0,T.useMemo)(function(){return L()(L()({},ee),{},{screenToFlowPosition:ae,getFlattenNodes:te,getSelectedKeys:W,getFlattenEdges:Q})},[ee])}},31279:function(k,V,o){o.d(V,{zt:function(){return Pe},ze:function(){return Oe},oR:function(){return Me},AC:function(){return Ke}});var G=o(75914),L=o(30952),$=o(47236),Z=o(66644),A=o(48305),T=o.n(A),x=o(62657),v=o.n(x),P=o(21742),D=o.n(P),F=o(83136),I=o.n(F),j=o(17069),s=o.n(j),M=o(25298),N=o.n(M),y=o(82092),m=o.n(y),C=o(67859),K=s()(function E(i){N()(this,E),m()(this,"type",void 0),m()(this,"name",void 0),m()(this,"timestamp",void 0),this.type=i.type,this.name=i.name,this.timestamp=i.timestamp}),S=function(E){D()(t,E);var i=I()(t);function t(a){var e;return N()(this,t),e=i.call(this,a),m()(v()(e),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),m()(v()(e),"undoManager",void 0),m()(v()(e),"updateHistoryData",function(n){var d=e.getMap(e._internalHistoryKey);Object.entries(n).forEach(function(r){var u=T()(r,2),f=u[0],_=u[1];d.set(f,_)})}),m()(v()(e),"recordHistoryData",function(n,d){e.transact(function(){e.updateHistoryData(n)},new K(d))}),m()(v()(e),"getHistoryMap",function(){return e.getMap(e._internalHistoryKey)}),m()(v()(e),"getHistoryJSON",function(){var n=e.getMap(e._internalHistoryKey);return n.toJSON()}),m()(v()(e),"redo",function(){return e.undoManager.redo()}),m()(v()(e),"undo",function(){return e.undoManager.undo()}),e.undoManager=new C.H6(e.getHistoryMap(),{trackedOrigins:new Set([K])}),e}return s()(t)}(C.QW),c=o(26068),l=o.n(c),U={reactflow:{},flattenNodes:{},flattenEdges:{},selectedKeys:[],yjsDoc:new S},h=o(67825),b=o.n(h);function z(E){switch(E.type){case"addNode":return[{item:E.node,type:"add"}];case"addNodes":return Object.keys(E.nodes).map(function(i){return{item:E.nodes[i],type:"add"}});case"deleteNode":return[{id:E.id,type:"remove"}];case"updateNodePosition":return[{id:E.id,type:"position",position:E.position}];default:return[]}}function J(E){switch(E.type){case"addEdge":return[{item:E.edge,type:"add"}];case"addEdges":return Object.keys(E.edges).map(function(i){return{item:E.edges[i],type:"add"}});case"deleteEdge":return[{id:E.id,type:"remove"}];default:return[]}}var R="$$",X="@@",ne=function(i,t){return i+X+(t||"")},q=function(i,t,a,e){return ne(i,a)+R+ne(t,e)},ee=function(i){var t=i.split(R),a=_slicedToArray(t,2),e=a[0],n=a[1];if(!e||!n)return{source:"",target:"",sourceHandle:"",targetHandle:""};var d=e.split(X),r=_slicedToArray(d,2),u=r[0],f=r[1],_=n.split(X),g=_slicedToArray(_,2),p=g[0],Y=g[1];return{source:u,target:p,sourceHandle:f,targetHandle:Y}},te=o(3341),Q=o.n(te),W=o(64461),ae=o(62071),re=function(i,t){switch(t.type){case"addEdge":return(0,W.Uy)(i,function(a){a[t.edge.id]=t.edge});case"addEdges":return(0,W.Uy)(i,function(a){var e=t.edges;e&&Object.keys(e).forEach(function(n){a[n]||(a[n]=e[n])})});case"updateEdge":return(0,W.Uy)(i,function(a){var e=t.id,n=t.edge;console.log(a[e]),a[e]=l()(l()({},a[e]),n)});case"updateEdgeData":return(0,W.Uy)(i,function(a){var e=t.newData,n=t.id,d=t.deepReplace;if(a[n]=l()(l()({},a[n]),{},{data:e}),!!a[n]){var r=a[n];d?a[n]=l()(l()(l()({},a[n]),r),{},{data:l()(l()({},r.data),e)}):a[n]=l()(l()(l()({},a[n]),r),{},{data:(0,ae.Z)(r.data,e)})}});case"deleteEdge":return(0,W.Uy)(i,function(a){delete a[t.id]});case"createEdgeFromConnection":return(0,W.Uy)(i,function(a){var e=t.edge;a[e.id]=e});default:return i}},ue=["type"],ce=function(i,t){return{internalUpdateEdges:function(e,n){var d,r;i({flattenEdges:e},!1,n),(d=(r=t()).onFlattenEdgesChange)===null||d===void 0||d.call(r,e)},dispatchEdges:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},d=n.recordHistory,r=d===void 0?!0:d,u=e.type,f=b()(e,ue),_=t(),g=_.beforeEdgesChange,p=_.onEdgesChange,Y=_.afterEdgesChange,O=_.internalUpdateEdges,H=_.yjsDoc,B=J(e),w=re(t().flattenEdges,e);Q()(w,t().flattenEdges)||g&&!g(B)||(p&&p(B),Y&&Y(B),O(w,{type:"dispatchFlattenEdges/".concat(u),payload:f}),r&&H.recordHistoryData({flattenEdges:w},{type:"edge",name:e.type,timestamp:Date.now()}))},addEdges:function(e,n){t().dispatchEdges({type:"addEdges",edges:e},n)},updateEdgesOnConnection:function(e){var n=e.source,d=e.target,r=e.sourceHandle,u=e.targetHandle;if(!(!n||!d)){var f=q(n,d,r,u),_={id:f,source:n,target:d,sourceHandle:r,targetHandle:u};return t().dispatchEdges({type:"addEdge",edge:_}),_}},updateEdgesOnEdgeChange:function(e){e.forEach(function(n){switch(n.type){case"remove":t().deselectElement(n.id),t().dispatchEdges({type:"deleteEdge",id:n.id})}})},deleteEdge:function(e){t().deselectElement(e),t().dispatchEdges({type:"deleteEdge",id:e})},deleteEdges:function(e){e.forEach(function(n){t().deselectElement(n),t().dispatchEdges({type:"deleteEdge",id:n})})},updateEdgeData:function(e,n){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=arguments.length>3?arguments[3]:void 0;t().dispatchEdges({type:"updateEdgeData",id:e,newData:n,deepReplace:d},r)},updateEdge:function(e,n,d){t().dispatchEdges({type:"updateEdge",id:e,edge:n},d)},handleEdgesChange:function(e){var n=t(),d=n.dispatchEdges,r=n.onElementSelectChange,u=n.beforeEdgesChange,f=n.onEdgesChange,_=n.afterEdgesChange,g=n.deselectElement;e.forEach(function(p){switch(p.type){case"add":d({type:"addEdge",edge:p.item});break;case"remove":g(p.id),d({type:"deleteEdge",id:p.id});break;case"select":if(u&&!u(e))return;f&&f(e),r(p.id,p.selected),_&&_(e)}})}}},_e=function(i,t){switch(t.type){case"addNode":return(0,W.Uy)(i,function(a){!t.node||!t.node.id||(a[t.node.id]=t.node)});case"addNodes":return(0,W.Uy)(i,function(a){var e=t.nodes;e&&Object.keys(e).forEach(function(n){a[n]||(a[n]=e[n])})});case"deleteNode":return(0,W.Uy)(i,function(a){delete a[t.id]});case"updateNodePosition":return(0,W.Uy)(i,function(a){a[t.id]&&t.position&&(a[t.id].position=t.position)});case"updateNodeMeta":return(0,W.Uy)(i,function(a){if(a[t.id]){var e=a[t.id];e.data.meta[t.key]=t.value}});case"updateNodeState":return(0,W.Uy)(i,function(a){if(a[t.id]){var e=a[t.id];e.data.state[t.key]=t.value}});case"updateNodeContent":return(0,W.Uy)(i,function(a){var e=t.key,n=t.id,d=t.value;if(a[n]){var r=a[n];r.data.content?r.data.content[e]=d:r.data.content=m()({},e,d)}});case"updateNodeData":return(0,W.Uy)(i,function(a){var e=t.newData,n=t.id,d=t.deepReplace;if(a[n]){var r=a[n];d?r.data=l()(l()({},r.data),e):(0,ae.Z)(r.data,e)}});default:return i}},pe=["type"],fe=function(i,t){return{internalUpdateNodes:function(e,n){var d,r;Q()(e,t().flattenNodes)||(i({flattenNodes:e},!1,n),(d=(r=t()).onFlattenNodesChange)===null||d===void 0||d.call(r,e))},dispatchNodes:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},d=n.recordHistory,r=d===void 0?!0:d,u=t(),f=u.beforeNodesChange,_=u.onNodesChange,g=u.afterNodesChange,p=u.internalUpdateNodes,Y=u.yjsDoc,O=e.type,H=b()(e,pe),B=z(e),w=_e(t().flattenNodes,e);Q()(w,t().flattenNodes)||f&&!f(B)||(_&&_(B),g&&g(B),p(w,{type:"dispatchFlattenNodes/".concat(O),payload:H}),r&&Y.recordHistoryData({flattenNodes:w},{type:"nodes",name:e.type,timestamp:Date.now()}))},updateNodeMeta:function(e,n,d,r){t().dispatchNodes({type:"updateNodeMeta",id:e,key:n,value:d},r)},updateNodeState:function(e,n,d,r){t().dispatchNodes({type:"updateNodeState",id:e,key:n,value:d},r)},updateNodeContent:function(e,n,d,r){t().dispatchNodes({type:"updateNodeContent",id:e,key:n,value:d},r)},updateNodeData:function(e,n){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=arguments.length>3?arguments[3]:void 0;t().dispatchNodes({type:"updateNodeData",id:e,newData:n,deepReplace:d},r)},addNode:function(e){t().dispatchNodes({type:"addNode",node:e})},addNodes:function(e,n){t().dispatchNodes({type:"addNodes",nodes:e},n)},deleteNode:function(e){t().deselectElement(e),t().dispatchNodes({type:"deleteNode",id:e})},deleteNodes:function(e){e.forEach(function(n){t().deselectElement(n),t().dispatchNodes({type:"deleteNode",id:n})})},handleNodesChange:function(e){var n=t(),d=n.dispatchNodes,r=n.onElementSelectChange,u=n.deselectElement,f=n.beforeNodesChange,_=n.onNodesChange,g=n.afterNodesChange;e.forEach(function(p){switch(p.type){case"add":d({type:"addNode",node:p.item});break;case"position":if(!p.dragging)break;d({type:"updateNodePosition",position:p.position,id:p.id});break;case"remove":u(p.id),d({type:"deleteNode",id:p.id});break;case"select":if(f&&!f(e))return;_&&_(e),r(p.id,p.selected),g&&g(e)}})}}},ge=o(335),Ee=o.n(ge),ve=o(90228),de=o.n(ve),me=o(87999),ie=o.n(me),he=o(15558),oe=o.n(he),ye=o(67197),Ce=(0,ye.kP)("0123456789abcdefghijklmnopqrstuvwxyz",16),De=function(i,t){return{internalUpdateSelection:function(e,n){var d,r;i({selectedKeys:e},!1,n),(d=(r=t()).onSelectionChange)===null||d===void 0||d.call(r,e)},onElementSelectChange:function(e,n){n?t().selectElement(e):t().deselectElement(e)},actionList:function(){var e=t(),n=e.yjsDoc;return{undo:n.undoManager.undoStack.length,redo:n.undoManager.redoStack.length}},selectElement:function(e){t().selectedKeys.includes(e)||t().internalUpdateSelection([].concat(oe()(t().selectedKeys),[e]),{type:"selection/selectElement",payload:{id:e}})},selectElements:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;t().internalUpdateSelection(n?[].concat(oe()(t().selectedKeys),oe()(e)):e,{type:"selection/selectElements",payload:{ids:e}})},selectAll:function(){var e=t().reactflow.getNodes(),n=t().reactflow.getEdges(),d=[].concat(oe()(e.map(function(r){return r.id})),oe()(n.map(function(r){return r.id})));t().internalUpdateSelection(d,{type:"selection/selectAll",payload:{ids:d}})},deselectElement:function(e){t().internalUpdateSelection(t().selectedKeys.filter(function(n){return n!==e}),{type:"selection/deselectElement",payload:{id:e}})},deselectAll:function(){t().internalUpdateSelection([],{type:"selection/deselectAll",payload:{}})},deleteSelection:function(){var e=t(),n=e.selectedKeys,d=e.flattenEdges,r=e.flattenNodes,u=e.dispatchNodes,f=e.dispatchEdges,_=e.deselectAll;_(),n.forEach(function(g){r[g]&&u({type:"deleteNode",id:g}),d[g]&&f({type:"deleteEdge",id:g})})},copySelection:function(){var a=ie()(de()().mark(function n(){var d,r,u,f,_,g,p,Y,O,H;return de()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(d=t(),r=d.selectedKeys,u=d.flattenEdges,f=d.flattenNodes,r.length!==0){w.next=3;break}return w.abrupt("return");case 3:return _=Object.values(f).filter(function(le){return r.includes(le.id)}),g=Object.values(u).filter(function(le){return r.includes(le.id)}),p={nodes:_,edges:g},Y=new Blob([JSON.stringify(p)],{type:"text/html"}),O=new Blob([JSON.stringify(p)],{type:"text/plain"}),H=new ClipboardItem({"text/html":Y,"text/plain":O}),w.next=11,navigator.clipboard.write([H]);case 11:return w.abrupt("return",p);case 12:case"end":return w.stop()}},n)}));function e(){return a.apply(this,arguments)}return e}(),paste:function(){var a=ie()(de()().mark(function n(){var d;return de()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,navigator.clipboard.read();case 2:d=u.sent,d.forEach(function(f){var _=Ee()(f.types),g;try{for(_.s();!(g=_.n()).done;){var p=g.value;if(p==="text/plain"){var Y=f.getType(p);Y.then(function(O){O.text().then(function(H){var B=void 0;try{B=JSON.parse(H)}catch(w){}B&&t().pasteIntoFlow(B)})})}}}catch(O){_.e(O)}finally{_.f()}});case 4:case"end":return u.stop()}},n)}));function e(){return a.apply(this,arguments)}return e}(),pasteIntoFlow:function(e){var n=t(),d=n.yjsDoc,r=n.addEdges,u=n.addNodes,f=n.deselectAll,_=n.selectElements,g={},p={};f(),e.nodes.forEach(function(O){var H=Ce();g[H]=l()(l()({},O),{},{id:H,position:{x:O.position.x+10,y:O.position.y+10}}),e.edges.forEach(function(B){B.source===O.id&&(B.source=H),B.target===O.id&&(B.target=H)})}),e.edges.forEach(function(O){var H=q(O.source,O.target,O.sourceHandle,O.targetHandle);p[H]=l()(l()({},O),{},{id:H})}),u(g,{recordHistory:!1}),r(p,{recordHistory:!1}),d.recordHistoryData({flattenNodes:t().flattenNodes,flattenEdges:t().flattenEdges},{type:"paste",name:"\u7C98\u8D34",timestamp:Date.now()});var Y=Object.keys(g).concat(Object.keys(p));_(Y)},undo:function(){var e=t(),n=e.yjsDoc,d=e.internalUpdateEdges,r=e.internalUpdateNodes,u=n.undo(),f=n.getHistoryJSON(),_=f.flattenNodes,g=f.flattenEdges;r(_||{},{type:"history/undo",payload:u}),d(g||{},{type:"history/undo",payload:u})},redo:function(){var e=t(),n=e.yjsDoc,d=e.internalUpdateEdges,r=e.internalUpdateNodes,u=n.redo(),f=n.getHistoryJSON(),_=f.flattenNodes,g=f.flattenEdges;r(_,{type:"history/redo",payload:u}),d(g,{type:"history/redo",payload:u})}}},Ne=function(i){return function(){return l()(l()(l()(l()({},U),{},{yjsDoc:i},ce.apply(void 0,arguments)),fe.apply(void 0,arguments)),De.apply(void 0,arguments))}},Oe=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,t=new S;return(0,L.F)()((0,$.v)(i)(Ne(t),{name:"FLOW_EDITOR"}),G.X)},se=(0,Z.k)(),Pe=se.Provider,Me=se.useStore,Ke=se.useStoreApi},77949:function(k,V,o){o.d(V,{I:function(){return y},K:function(){return m}});var G=o(26068),L=o.n(G),$=o(67825),Z=o.n($),A=o(79197),T=o(50959),x=o(53649),v=o.n(x),P=o(46033),D,F,I,j=(0,P.kc)(function(C){var K=C.css,S=C.token;return{input:K(D||(D=v()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),S.motionEaseOut),block:K(F||(F=v()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),S.colorFillTertiary,S.colorFillQuaternary),textarea:K(I||(I=v()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),S.motionEaseOut)}}),s=o(11527),M=["className","type"],N=["className","type"],y=(0,T.forwardRef)(function(C,K){var S=C.className,c=C.type,l=c===void 0?"ghost":c,U=Z()(C,M),h=j(),b=h.styles,z=h.cx;return(0,s.jsx)(A.Z,L()({className:z(b.input,l==="block"&&b.block,S),ref:K},U))}),m=(0,T.memo)((0,T.forwardRef)(function(C,K){var S=C.className,c=C.type,l=c===void 0?"ghost":c,U=Z()(C,N),h=j(),b=h.styles,z=h.cx;return(0,s.jsx)(A.Z.TextArea,L()({className:z(b.textarea,l==="block"&&b.block,S),ref:K},U))}))}}]);

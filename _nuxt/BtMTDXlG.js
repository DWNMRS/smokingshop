import{_ as B}from"./X_4Is3n4.js";import{_ as h,P as N,a as G,L as P,b as X,R as t1,g as F,c as j,d as e1,e as o1,w as n1,t as s1,f as c1}from"./BSAMnJ21.js";import{x as r,D as C,H as e,d as x,c as g,o as a1,y as M,C as p,u as w,I as Z,J as c,L as v,a3 as K,T as L,V as S,W as D,M as b,N as H,a5 as _1,$ as i1,p as r1,s as l1,j as y,i as E,w as d1,S as C1,n as h1,U as O}from"./4hnnTRhZ.js";import{_ as q}from"./BUOC8SmU.js";const f1={},u1={width:"37",height:"37",viewBox:"0 0 37 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p1=e("path",{d:"M19.3261 24.1238C13.0054 24.1238 9.40022 19.7906 9.25 12.5801H12.4162C12.5201 17.8724 14.8542 20.1141 16.7031 20.5763V12.5801H19.6845V17.1444C21.5102 16.948 23.4281 14.868 24.0752 12.5801H27.0566C26.5597 15.3996 24.4798 17.4795 23.0007 18.3346C24.4798 19.0279 26.8487 20.8421 27.75 24.1238H24.4682C23.7633 21.9283 22.0071 20.2297 19.6845 19.9986V24.1238H19.3261Z",fill:"currentColor"},null,-1),m1=[p1];function v1(t,n){return r(),C("svg",u1,m1)}const U=h(f1,[["render",v1]]),$1={},k1={width:"37",height:"37",viewBox:"0 0 37 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w1=e("path",{d:"M27.5185 14.4535C27.3431 13.0684 26.543 12.1996 25.1227 12.0713C23.4966 11.9244 19.9763 11.8398 18.3435 11.8398C15.0036 11.8398 13.5111 11.9214 11.9316 12.0849C10.4265 12.2404 9.76763 12.9093 9.50863 14.2901C9.32726 15.2576 9.25 16.1639 9.25 18.3057C9.25 20.2297 9.34087 21.4397 9.48147 22.4577C9.6748 23.8557 10.6344 24.6413 12.0408 24.7584C13.6769 24.8946 16.9544 24.9626 18.5749 24.9626C20.1408 24.9626 23.6647 24.881 25.2315 24.704C26.6338 24.5455 27.3007 23.7964 27.5185 22.4169C27.5185 22.4169 27.75 20.9058 27.75 18.2921C27.75 16.8039 27.6412 15.4198 27.5185 14.4535ZM16.5329 21.0013V15.6831L21.5968 18.315L16.5329 21.0013Z",fill:"currentColor"},null,-1),g1=[w1];function x1(t,n){return r(),C("svg",k1,g1)}const W=h($1,[["render",x1]]),y1={},M1={width:"37",height:"37",viewBox:"0 0 37 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b1=e("path",{d:"M26.1728 10.8666C26.1728 10.8666 27.8842 10.1993 27.7416 11.8199C27.694 12.4872 27.2662 14.8229 26.9334 17.3491L25.7925 24.8327C25.7925 24.8327 25.6974 25.929 24.8417 26.1197C23.986 26.3104 22.7025 25.4524 22.4648 25.2617C22.2746 25.1187 18.8994 22.9737 17.711 21.9251C17.3782 21.6391 16.9978 21.0671 17.7585 20.3998L22.7501 15.6332C23.3205 15.0612 23.891 13.7265 21.514 15.3472L14.8587 19.8755C14.8587 19.8755 14.098 20.3521 12.6719 19.9231L9.58187 18.9698C9.58187 18.9698 8.44093 18.2548 10.39 17.5398C15.1439 15.2995 20.9911 13.0115 26.1728 10.8666Z",fill:"currentColor"},null,-1),H1=[b1];function V1(t,n){return r(),C("svg",M1,H1)}const Y=h(y1,[["render",V1]]),B1={},Z1={width:"16",height:"10",viewBox:"0 0 16 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I1=e("path",{d:"M0 1L16 1",stroke:"#96C361","stroke-width":"2"},null,-1),A1=e("path",{d:"M0 9L16 9",stroke:"#96C361","stroke-width":"2"},null,-1),F1=e("path",{d:"M0 5L16 5",stroke:"#96C361","stroke-width":"2"},null,-1),L1=[I1,A1,F1];function S1(t,n){return r(),C("svg",Z1,L1)}const T1=h(B1,[["render",S1]]),R1={key:0,class:"popup"},j1={class:"popup__buttons"},E1=x({__name:"Popup",props:{citySelected:{type:String,required:!1}},emits:["changeCity"],setup(t,{emit:n}){const o=g(!1),_=n,s=()=>{o.value=!1},i=()=>{o.value=!1,_("changeCity")};return a1(()=>{setTimeout(()=>{o.value=!0},1e3)}),(d,f)=>{const l=B;return r(),M(L,{name:"fade"},{default:p(()=>[w(o)?(r(),C("div",R1,[e("span",null,"Ваш город "+Z(t.citySelected)+" верно?",1),e("div",j1,[c(l,{secondary:"",class:"popup__button",onClick:s},{default:p(()=>[v("Дa ")]),_:1}),c(l,{primary:"",class:"popup__button",onClick:i},{default:p(()=>[v("Нет ")]),_:1})])])):K("",!0)]),_:1})}}}),N1=h(E1,[["__scopeId","data-v-4f938dfa"]]),K1=t=>(b("data-v-cf01235d"),t=t(),H(),t),D1={key:0,class:"modal-city"},O1={class:"modal-city__body"},q1=K1(()=>e("span",{class:"modal-city__request"},"Укажите ваш город",-1)),U1={class:"modal-city__buttons"},W1=x({__name:"Modal",props:{cities:{type:Object,required:!0},showModal:{type:Boolean,required:!0}},emits:["selectCity"],setup(t,{emit:n}){const o=n,_=s=>{o("selectCity",s)};return(s,i)=>{const d=B;return r(),M(L,{name:"fade"},{default:p(()=>[t.showModal?(r(),C("div",D1,[e("div",O1,[q1,e("div",U1,[(r(!0),C(S,null,D(t.cities,(f,l)=>(r(),M(d,{key:l,unstyled:"",class:"modal-city__button",onClick:u=>_(l)},{default:p(()=>[v(Z(f.name),1)]),_:2},1032,["onClick"]))),128))])])])):K("",!0)]),_:1})}}}),Y1=h(W1,[["__scopeId","data-v-cf01235d"]]),z1=t=>(b("data-v-ffe1592b"),t=t(),H(),t),J1={class:"top-bar"},Q1={class:"container"},G1={class:"top-bar__social"},P1={href:"#"},X1={href:"#"},t2={href:"#"},e2=z1(()=>e("span",null,"Меню",-1)),o2=x({__name:"TheTopBar",setup(t){const n=g(!1),o=g("Москва"),_=g([{name:"Москва",selected:!0},{name:"Киров",selected:!1},{name:"Пермь",selected:!1},{name:"Казань",selected:!1},{name:"Сыктывкар",selected:!1},{name:"Нижний Новгород",selected:!1},{name:"Кострома",selected:!1}]),s=d=>{let f=Number(d);_.value.forEach(u=>{u.selected=!1});let l=_.value[f];_.value[f].selected=!0,o.value=l.name,n.value=!1},i=()=>{n.value=!0};return(d,f)=>{const l=B,u=U,m=W,a=Y,$=T1,V=N1,k=Y1;return r(),C("div",J1,[e("div",Q1,[c(l,{unstyled:"",class:"top-bar__button",type:"button",onClick:i},{default:p(()=>[v(" г. "+Z(w(o)),1)]),_:1}),e("div",G1,[e("a",P1,[c(u)]),e("a",X1,[c(m)]),e("a",t2,[c(a)])]),c(l,{unstyled:"",type:"button",class:"top-bar__menu"},{default:p(()=>[e2,c($,{class:"top-bar__menu-icon"})]),_:1}),c(V,{citySelected:w(o),onChangeCity:i},null,8,["citySelected"]),(r(),M(_1,{to:"body"},[c(k,{cities:w(_),showModal:w(n),onSelectCity:s},null,8,["cities","showModal"])]))])])}}}),n2=h(o2,[["__scopeId","data-v-ffe1592b"]]),s2={},c2={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a2=e("path",{d:"M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z",fill:"#3D3D3D"},null,-1),_2=[a2];function i2(t,n){return r(),C("svg",c2,_2)}const r2=h(s2,[["render",i2]]),l2={},d2={width:"31",height:"24",viewBox:"0 0 31 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C2=e("path",{d:"M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975775 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30202 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z",fill:"#3D3D3D"},null,-1),h2=e("circle",{cx:"23.001",cy:"8",r:"7",fill:"#96C361",stroke:"white","stroke-width":"2"},null,-1),f2=e("path",{d:"M25.121 8.83C25.121 7.58 24.101 6.62 22.951 6.62C22.841 6.62 22.751 6.63 22.661 6.65L24.251 4.4H23.001L21.351 6.73C21.121 7.06 20.951 7.31 20.841 7.49C20.731 7.67 20.641 7.87 20.561 8.1C20.491 8.32 20.451 8.56 20.451 8.82C20.421 10.12 21.531 11.13 22.781 11.11C24.041 11.11 25.121 10.12 25.121 8.83ZM24.071 8.83C24.071 9.2 23.941 9.52 23.691 9.77C23.441 10.02 23.141 10.14 22.781 10.14C22.411 10.14 22.111 10.02 21.861 9.77C21.611 9.52 21.491 9.2 21.491 8.83C21.491 8.46 21.611 8.15 21.861 7.9C22.111 7.65 22.411 7.52 22.781 7.52C23.141 7.52 23.441 7.65 23.691 7.9C23.941 8.15 24.071 8.46 24.071 8.83Z",fill:"white"},null,-1),u2=[C2,h2,f2];function p2(t,n){return r(),C("svg",d2,u2)}const m2=h(l2,[["render",p2]]),v2={},$2={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k2=e("path",{d:"M18.1601 10.1012H8.12598",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),w2=e("path",{d:"M15.7212 7.6709L18.1612 10.1009L15.7212 12.5309",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),g2=e("path",{d:"M13.634 6.35866C13.359 3.37533 12.2424 2.29199 7.8007 2.29199C1.8832 2.29199 1.8832 4.21699 1.8832 10.0003C1.8832 15.7837 1.8832 17.7087 7.8007 17.7087C12.2424 17.7087 13.359 16.6253 13.634 13.642",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),x2=[k2,w2,g2];function y2(t,n){return r(),C("svg",$2,x2)}const M2=h(v2,[["render",y2]]),z=""+new URL("logo.cOh923WR.png",import.meta.url).href,J=t=>(b("data-v-734d2565"),t=t(),H(),t),b2={class:"header"},H2=J(()=>e("img",{src:z},null,-1)),V2={class:"header__nav"},B2={class:"header__menu"},Z2={href:"#"},I2=J(()=>e("span",null,"Войти",-1)),A2=x({__name:"TheHeader",setup(t){function n(_){o.value.forEach((s,i)=>{i===_?s.selected=!0:s.selected=!1})}const o=g([{path:"/",name:"Главная",selected:!0},{path:"/catalog",name:"Каталог",selected:!1},{path:"/blog",name:"Блог",selected:!1},{path:"/about",name:"О нас",selected:!1}]);return(_,s)=>{const i=q,d=r2,f=B,l=m2,u=M2;return r(),C("header",b2,[c(i,{to:"/"},{default:p(()=>[H2]),_:1}),e("div",V2,[(r(!0),C(S,null,D(w(o),(m,a)=>(r(),M(i,{key:a,class:i1(["header__nav-item",{"header__nav-item--active":m.selected===!0}]),to:m.path,onClick:$=>n(a)},{default:p(()=>[v(Z(m.name),1)]),_:2},1032,["class","to","onClick"]))),128))]),e("div",B2,[c(f,{unstyled:""},{default:p(()=>[c(d)]),_:1}),e("a",Z2,[c(l)]),c(f,{class:"header__button-login"},{default:p(()=>[c(u,{class:"header__button-icon"}),I2]),_:1})])])}}}),F2=h(A2,[["__scopeId","data-v-734d2565"]]),L2=x({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const n=t.renderKey,o=t.route,_={};for(const s in t.route)Object.defineProperty(_,s,{get:()=>n===t.renderKey?t.route[s]:o[s]});return r1(N,l1(_)),()=>y(t.vnode,{ref:t.vnodeRef})}}),S2=x({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:n,slots:o,expose:_}){const s=G(),i=g(),d=E(N,null);let f;_({pageRef:i});const l=E(P,null);let u;const m=s.deferHydration();if(s.isHydrating){const a=s.hooks.hookOnce("app:error",m);X().beforeEach(a)}return t.pageKey&&d1(()=>t.pageKey,(a,$)=>{a!==$&&s.callHook("page:loading:start")}),()=>y(t1,{name:t.name,route:t.route,...n},{default:a=>{const $=R2(d,a.route,a.Component),V=d&&d.matched.length===a.route.matched.length;if(!a.Component){if(u&&!V)return u;m();return}if(u&&l&&!l.isCurrent(a.route))return u;if($&&d&&(!l||l!=null&&l.isCurrent(d)))return V?u:null;const k=F(a,t.pageKey);!s.isHydrating&&!j2(d,a.route,a.Component)&&f===k&&s.callHook("page:loading:end"),f=k;const A=!!(t.transition??a.route.meta.pageTransition??j),Q=A&&T2([t.transition,a.route.meta.pageTransition,j,{onAfterLeave:()=>{s.callHook("page:transition:finish",a.Component)}}].filter(Boolean)),T=t.keepalive??a.route.meta.keepalive??e1;return u=o1(L,A&&Q,n1(T,y(C1,{suspensible:!0,onPending:()=>s.callHook("page:start",a.Component),onResolve:()=>{h1(()=>s.callHook("page:finish",a.Component).then(()=>s.callHook("page:loading:end")).finally(m))}},{default:()=>{const R=y(L2,{key:k||void 0,vnode:o.default?y(S,void 0,o.default(a)):a.Component,route:a.route,renderKey:k||void 0,trackRootNodes:A,vnodeRef:i});return T&&(R.type.name=a.Component.type.name||a.Component.type.__name||"RouteProvider"),R}}))).default(),u}})}});function T2(t){const n=t.map(o=>({...o,onAfterLeave:o.onAfterLeave?s1(o.onAfterLeave):void 0}));return c1(...n)}function R2(t,n,o){if(!t)return!1;const _=n.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(o==null?void 0:o.type)});return!_||_===-1?!1:n.matched.slice(0,_).some((s,i)=>{var d,f,l;return((d=s.components)==null?void 0:d.default)!==((l=(f=t.matched[i])==null?void 0:f.components)==null?void 0:l.default)})||o&&F({route:n,Component:o})!==F({route:t,Component:o})}function j2(t,n,o){return t?n.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(o==null?void 0:o.type)})<n.matched.length-1:!1}const E2={},N2={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K2=e("path",{d:"M11.9604 2.29199C15.0446 2.63449 17.4813 5.06783 17.8279 8.15199",stroke:"#96C361","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),D2=e("path",{d:"M11.9604 5.24414C13.4363 5.53081 14.5896 6.68497 14.8771 8.16081",stroke:"#96C361","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),O2=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.41715 13.5825C0.668834 7.83352 1.48623 5.20096 2.0922 4.35263C2.17005 4.21552 4.08881 1.34323 6.14557 3.02839C11.2508 7.23288 4.78767 6.63843 9.07458 10.9261C13.3624 15.2128 12.767 8.74996 16.9717 13.8541C18.6569 15.9117 15.7845 17.8303 15.6483 17.9073C14.7999 18.5141 12.1664 19.3315 6.41715 13.5825Z",stroke:"#96C361","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),q2=[K2,D2,O2];function U2(t,n){return r(),C("svg",N2,q2)}const W2=h(E2,[["render",U2]]),Y2={},z2={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},J2=e("path",{d:"M14.6208 7.5166C14.6208 7.5166 11.9457 10.7271 9.98919 10.7271C8.03347 10.7271 5.32837 7.5166 5.32837 7.5166",stroke:"#96C361","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Q2=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.04346 9.97428C2.04346 4.27587 4.02758 2.37695 9.97997 2.37695C15.9323 2.37695 17.9165 4.27587 17.9165 9.97428C17.9165 15.6719 15.9323 17.5716 9.97997 17.5716C4.02758 17.5716 2.04346 15.6719 2.04346 9.97428Z",stroke:"#96C361","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),G2=[J2,Q2];function P2(t,n){return r(),C("svg",z2,G2)}const X2=h(Y2,[["render",P2]]),t3={},e3={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o3=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.092 8.92555C12.092 7.77449 11.1593 6.8418 10.0082 6.8418C8.85799 6.8418 7.92529 7.77449 7.92529 8.92555C7.92529 10.0758 8.85799 11.0085 10.0082 11.0085C11.1593 11.0085 12.092 10.0758 12.092 8.92555Z",stroke:"#96C361","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),n3=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.99959 17.5C7.58457 17.5 3.75 13.2989 3.75 8.8322C3.75 5.33539 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.33539 16.25 8.8322C16.25 13.2989 12.4154 17.5 9.99959 17.5Z",stroke:"#96C361","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),s3=[o3,n3];function c3(t,n){return r(),C("svg",e3,s3)}const a3=h(t3,[["render",c3]]),_3={},i3=t=>(b("data-v-43126610"),t=t(),H(),t),r3={class:"bottom-bar"},l3={class:"container"},d3=i3(()=>e("img",{src:z},null,-1)),C3={class:"bottom-bar__link",href:"tel:+7-900-000-99-99"},h3={class:"bottom-bar__link",href:"mailto:contact@greenshop.com"},f3={class:"bottom-bar__link",href:"#"};function u3(t,n){const o=q,_=W2,s=X2,i=a3;return r(),C("div",r3,[e("div",l3,[c(o,{to:"/"},{default:p(()=>[d3]),_:1}),e("a",C3,[c(_,{class:"bottom-bar__link-icon"}),v("+7 900 000 99 99 ")]),e("a",h3,[c(s,{class:"bottom-bar__link-icon"}),v("contact@greenshop.com ")]),e("a",f3,[c(i,{class:"bottom-bar__link-icon"}),v("610001, Кировская обл, г Киров, Комсомольская ул, д. 46/6, оф. 401 ")])])])}const p3=h(_3,[["render",u3],["__scopeId","data-v-43126610"]]),m3={},v3={width:"72",height:"72",viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$3=e("circle",{cx:"36",cy:"36",r:"35",stroke:"#96C361","stroke-width":"2"},null,-1),k3=e("path",{d:"M18.89 26H20.84V47H16.55V30.98L11.84 32.96V28.73L18.89 26ZM37.1096 36.02C39.2096 36.89 40.3496 38.78 40.3496 41.09C40.3496 44.99 36.8996 47.36 32.2796 47.36C27.6896 47.36 24.2396 44.99 24.2396 41.09C24.2396 38.78 25.3796 36.89 27.4796 36.02C25.8296 35.24 24.8396 33.59 24.8396 31.61C24.8396 28.1 28.0796 25.64 32.2796 25.64C36.5096 25.64 39.7496 28.1 39.7496 31.61C39.7496 33.59 38.7296 35.24 37.1096 36.02ZM32.2796 29.66C30.1196 29.66 29.1296 30.71 29.1296 32.15C29.1296 33.47 29.9396 34.37 32.2796 34.37C34.6196 34.37 35.4596 33.47 35.4596 32.15C35.4596 30.71 34.4396 29.66 32.2796 29.66ZM32.2796 43.34C34.6796 43.34 36.0296 42.41 36.0296 40.7C36.0296 38.9 34.7096 38.09 32.2796 38.09C29.8796 38.09 28.5596 38.9 28.5596 40.7C28.5596 42.41 29.9096 43.34 32.2796 43.34ZM53.438 30.65V36.08H58.808V40.16H53.438V45.59H49.148V40.16H43.778V36.08H49.148V30.65H53.438Z",fill:"#3D3D3D"},null,-1),w3=[$3,k3];function g3(t,n){return r(),C("svg",v3,w3)}const x3=h(m3,[["render",g3]]),y3={},M3={width:"222",height:"50",viewBox:"0 0 222 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b3=O('<rect width="222" height="50" rx="25" fill="#161616"></rect><path d="M14 28.0806C14.9951 33.288 18.8094 37.5004 23.7847 39.0594C25.9738 36.4059 27.4996 31.8618 27.9639 27.6494C22.7565 29.0425 17.8144 29.142 14 28.0806Z" fill="#FBBE3E"></path><path d="M19.105 19.7872C17.2475 21.0807 15.8876 22.5733 14.8926 23.9664C18.1431 24.5966 22.9857 24.2317 27.9278 22.6728C27.1981 18.3278 24.5446 15.9728 19.105 19.7872Z" fill="#FBBE3E"></path><path d="M39.3047 16.3401C36.6844 13.0896 32.6378 11 28.1269 11C23.1849 11 18.8066 13.4876 16.2195 17.302C19.1051 15.6436 23.4502 13.7861 26.5017 15.2787C28.4255 16.2074 29.8517 18.6619 30.4156 21.7797C34.2299 20.254 37.3146 18.2971 39.3047 16.3401Z" fill="#FBBE3E"></path><path d="M30.8853 26.7546C30.7858 26.7877 30.6863 26.8209 30.5868 26.8541C30.1556 31.0001 28.3645 35.5442 24.6165 39.3254C25.7442 39.5907 26.9051 39.7566 28.0991 39.7566C36.0264 39.7566 42.4611 33.3219 42.4611 25.3615C42.4611 23.8026 42.1957 22.2768 41.7314 20.8506C38.9121 23.2055 35.164 25.2288 30.8853 26.7546Z" fill="#FBBE3E"></path><path d="M62.5282 18.0992C62.2628 17.867 61.9311 17.7344 61.5 17.7344H50.0569C49.6588 17.7344 49.294 17.867 49.0286 18.0992C48.7633 18.3314 48.6306 18.6631 48.6306 19.0611C48.6306 19.4923 48.7633 19.824 49.0286 20.0893C49.294 20.3547 49.6257 20.4874 50.0569 20.4874H54.4019V31.5656C54.4019 31.9968 54.5346 32.3285 54.7999 32.5938C55.0653 32.8592 55.4301 32.9919 55.8282 32.9919C56.2262 32.9919 56.5579 32.8592 56.79 32.5938C57.0222 32.3285 57.1549 31.9968 57.1549 31.5656V20.5205H61.5C61.9311 20.5205 62.2628 20.3879 62.5282 20.1225C62.7935 19.8572 62.9262 19.4923 62.9262 19.0943C62.9262 18.6631 62.7935 18.3314 62.5282 18.0992Z" fill="#FAFAFA"></path><path d="M144.851 18.0992C144.586 17.867 144.254 17.7344 143.823 17.7344H132.38C131.982 17.7344 131.617 17.867 131.351 18.0992C131.086 18.3314 130.953 18.6631 130.953 19.0611C130.953 19.4923 131.086 19.824 131.351 20.0893C131.617 20.3547 131.948 20.4874 132.38 20.4874H136.725V31.5656C136.725 31.9968 136.857 32.3285 137.123 32.5938C137.388 32.8592 137.753 32.9919 138.151 32.9919C138.549 32.9919 138.881 32.8592 139.113 32.5938C139.345 32.3285 139.478 31.9968 139.478 31.5656V20.5205H143.823C144.254 20.5205 144.586 20.3879 144.851 20.1225C145.116 19.8572 145.249 19.4923 145.249 19.0943C145.249 18.6631 145.116 18.3314 144.851 18.0992Z" fill="#FAFAFA"></path><path d="M73.605 29.9061C72.8753 30.3704 72.0129 30.6026 71.0842 30.6026C70.1555 30.6026 69.3263 30.3704 68.5634 29.9061C67.8005 29.4417 67.2035 28.8447 66.7723 28.0486C66.3411 27.2526 66.1089 26.357 66.1089 25.3952C66.1089 24.4001 66.3411 23.5046 66.7723 22.7085C67.2035 21.9125 67.8005 21.2823 68.5634 20.8511C69.3263 20.3867 70.1555 20.1546 71.0842 20.1546C72.0461 20.1546 72.8753 20.3867 73.605 20.8511C74.3347 21.3154 74.9317 21.9125 75.3629 22.7085C75.7941 23.5046 75.9931 24.4001 75.9931 25.3952C75.9931 26.3902 75.7941 27.2526 75.3629 28.0486C74.9317 28.8115 74.3347 29.4417 73.605 29.9061ZM77.7179 21.415C77.0545 20.2541 76.1258 19.3253 74.9649 18.6288C73.804 17.9654 72.5104 17.6006 71.051 17.6006C69.5916 17.6006 68.2981 17.9323 67.1372 18.6288C65.9763 19.2922 65.0475 20.2209 64.3842 21.415C63.7208 22.5758 63.356 23.9026 63.356 25.362C63.356 26.8214 63.6545 28.1481 64.2847 29.309C64.9149 30.4699 65.7441 31.3986 66.8386 32.062C67.9 32.7254 69.1273 33.0902 70.4872 33.0902C71.8471 33.0902 73.0743 32.7585 74.1357 32.062C74.799 31.6308 75.3629 31.1333 75.8604 30.5363V31.5645C75.8604 31.9625 75.9931 32.3274 76.2585 32.5927C76.5238 32.858 76.8555 32.9907 77.2867 32.9907C77.6847 32.9907 78.0496 32.858 78.3149 32.5927C78.5802 32.3274 78.7129 31.9957 78.7129 31.5645V25.362C78.7461 23.9026 78.3812 22.5758 77.7179 21.415Z" fill="#FAFAFA"></path><path d="M92.0425 29.7725C91.5781 30.1374 90.9811 30.3032 90.2182 30.3032H84.8117V26.2567H90.2182C90.9479 26.2567 91.5781 26.4557 92.0425 26.8537C92.5068 27.2517 92.739 27.7492 92.739 28.3463C92.739 28.9433 92.5068 29.4077 92.0425 29.7725ZM91.7439 20.8171C92.1088 21.1487 92.2746 21.5468 92.2746 22.0111C92.2746 22.575 92.142 23.0393 91.8434 23.4042C91.5449 23.769 91.1801 23.9349 90.7157 23.9349H90.2845H88.0954H84.8117V20.3527H90.384C90.9479 20.3527 91.3791 20.5185 91.7439 20.8171ZM94.7954 26.4888C94.3642 25.8586 93.734 25.3943 92.938 25.0294C92.9048 24.9963 92.8717 24.9963 92.8053 24.9631C93.1038 24.7973 93.4024 24.6314 93.6677 24.3992C94.4638 23.7027 94.8949 22.8072 94.8949 21.7458C94.8949 20.9497 94.6959 20.2864 94.2979 19.6562C93.8999 19.0591 93.3692 18.5948 92.7058 18.2299C92.0425 17.8982 91.2464 17.6992 90.384 17.6992H83.4187H83.3855C82.9875 17.6992 82.6558 17.8319 82.4236 18.0972C82.1583 18.3626 82.0256 18.6943 81.9924 19.0923V31.5636C81.9924 31.9616 82.1251 32.3265 82.3905 32.5918C82.6558 32.8572 82.9875 32.9899 83.4187 32.9899H90.2514C91.2796 32.9899 92.1751 32.7908 92.9712 32.426C93.7672 32.0611 94.3642 31.5304 94.8286 30.9002C95.2598 30.2369 95.492 29.5072 95.492 28.678C95.4588 27.8488 95.2266 27.119 94.7954 26.4888Z" fill="#FAFAFA"></path><path d="M111.55 18.0972C111.285 17.8319 110.953 17.6992 110.522 17.6992C110.124 17.6992 109.759 17.8319 109.494 18.0972C109.229 18.3626 109.096 18.6943 109.096 19.1255V26.9864C109.096 27.6497 108.897 28.2468 108.532 28.8106C108.167 29.3413 107.67 29.7725 107.039 30.1042C106.409 30.4359 105.713 30.5686 104.917 30.5686C104.087 30.5686 103.325 30.4027 102.661 30.071C101.998 29.7394 101.467 29.2418 101.069 28.5785C100.671 27.9151 100.472 27.0527 100.472 25.9913V19.1255C100.472 18.7274 100.339 18.3626 100.074 18.0972C99.8087 17.8319 99.4771 17.6992 99.0459 17.6992C98.6478 17.6992 98.283 17.8319 98.0176 18.0972C97.7523 18.3626 97.6196 18.6943 97.6196 19.1255V25.9913C97.6196 27.5171 97.9181 28.8438 98.482 29.9052C99.079 30.9666 99.8751 31.7626 100.87 32.3265C101.898 32.8904 103.026 33.1557 104.32 33.1557C105.58 33.1557 106.675 32.8904 107.636 32.3597C108.167 32.0611 108.632 31.7295 109.03 31.2983V31.5968C109.03 31.9948 109.162 32.3597 109.428 32.625C109.693 32.8904 110.025 33.023 110.456 33.023C110.887 33.023 111.219 32.8904 111.484 32.625C111.749 32.3597 111.882 32.028 111.882 31.5968V19.1586C111.948 18.6943 111.816 18.3626 111.55 18.0972Z" fill="#FAFAFA"></path><path d="M125.41 29.9061C124.681 30.3704 123.818 30.6026 122.89 30.6026C121.961 30.6026 121.132 30.3704 120.369 29.9061C119.606 29.4417 119.009 28.8447 118.578 28.0486C118.147 27.2526 117.914 26.357 117.914 25.3952C117.914 24.4001 118.147 23.5046 118.578 22.7085C119.009 21.9125 119.606 21.2823 120.369 20.8511C121.132 20.3867 121.961 20.1546 122.89 20.1546C123.852 20.1546 124.681 20.3867 125.41 20.8511C126.14 21.3154 126.737 21.9125 127.168 22.7085C127.6 23.5046 127.799 24.4001 127.799 25.3952C127.799 26.3902 127.6 27.2526 127.168 28.0486C126.77 28.8115 126.173 29.4417 125.41 29.9061ZM129.523 21.415C128.86 20.2541 127.931 19.3253 126.77 18.6288C125.609 17.9654 124.316 17.6006 122.856 17.6006C121.397 17.6006 120.103 17.9323 118.943 18.6288C117.782 19.2922 116.853 20.2209 116.19 21.415C115.526 22.5758 115.161 23.9026 115.161 25.362C115.161 26.8214 115.46 28.1481 116.09 29.309C116.72 30.4699 117.55 31.3986 118.644 32.062C119.705 32.7254 120.933 33.0902 122.293 33.0902C123.652 33.0902 124.88 32.7585 125.941 32.062C126.604 31.6308 127.168 31.1333 127.666 30.5363V31.5645C127.666 31.9625 127.799 32.3274 128.064 32.5927C128.329 32.858 128.661 32.9907 129.092 32.9907C129.49 32.9907 129.855 32.858 130.12 32.5927C130.386 32.3274 130.518 31.9957 130.518 31.5645V25.362C130.552 23.9026 130.22 22.5758 129.523 21.415Z" fill="#FAFAFA"></path><path d="M164.88 31.1353C165.942 31.1353 166.904 30.87 167.766 30.3724C168.628 29.8749 169.292 29.1784 169.789 28.316C170.287 27.4536 170.519 26.4586 170.519 25.364C170.519 24.2695 170.287 23.2744 169.789 22.412C169.292 21.5496 168.628 20.8531 167.766 20.3556C166.904 19.8581 165.942 19.5927 164.88 19.5927C163.819 19.5927 162.89 19.8581 162.028 20.3556C161.166 20.8531 160.502 21.5496 160.038 22.412C159.573 23.2744 159.308 24.2695 159.308 25.364C159.308 26.4586 159.54 27.4205 160.038 28.316C160.502 29.1784 161.199 29.8749 162.028 30.3724C162.89 30.87 163.819 31.1353 164.88 31.1353ZM158.313 37.8022C157.981 37.8022 157.716 37.7027 157.517 37.5036C157.318 37.3046 157.219 37.0393 157.219 36.7076V25.2645C157.252 23.8383 157.583 22.5115 158.247 21.3838C158.91 20.2229 159.839 19.3274 161 18.664C162.161 18.0006 163.454 17.6689 164.88 17.6689C166.373 17.6689 167.667 18.0006 168.827 18.664C169.988 19.3274 170.917 20.2561 171.58 21.417C172.244 22.5779 172.575 23.9046 172.575 25.364C172.575 26.8234 172.244 28.117 171.58 29.3111C170.917 30.4719 170.022 31.4007 168.894 32.064C167.766 32.7274 166.506 33.0591 165.079 33.0591C163.852 33.0591 162.724 32.7937 161.729 32.263C160.734 31.7323 159.905 31.0358 159.308 30.1734V36.7076C159.308 37.0393 159.209 37.3046 159.01 37.5036C158.877 37.7027 158.612 37.8022 158.313 37.8022Z" fill="#FBBE3E"></path><path d="M184.62 17.9996C184.155 17.7674 183.492 17.6348 182.663 17.6348C181.601 17.6348 180.606 17.9001 179.744 18.3976C179.014 18.8288 178.417 19.3595 177.92 20.0561V18.8288C177.92 18.4971 177.82 18.2318 177.654 18.066C177.455 17.8669 177.223 17.8006 176.891 17.8006C176.56 17.8006 176.294 17.9001 176.129 18.066C175.93 18.265 175.863 18.4971 175.863 18.8288V31.8972C175.863 32.2289 175.963 32.4942 176.129 32.6601C176.328 32.8591 176.56 32.9254 176.891 32.9254C177.223 32.9254 177.489 32.8259 177.654 32.6601C177.853 32.461 177.92 32.2289 177.92 31.8972V23.6051C177.92 22.7427 178.152 21.9798 178.616 21.3496C179.081 20.7194 179.711 20.2551 180.54 19.9566C181.336 19.658 182.265 19.5585 183.293 19.6249C183.592 19.658 183.89 19.658 184.122 19.6912C184.388 19.7244 184.587 19.658 184.752 19.5917C184.918 19.4922 185.051 19.3264 185.117 19.0278C185.283 18.5635 185.084 18.2318 184.62 17.9996Z" fill="#FBBE3E"></path><path d="M194.468 31.1343C195.529 31.1343 196.491 30.869 197.353 30.3714C198.216 29.8739 198.879 29.1774 199.343 28.315C199.808 27.4526 200.073 26.4576 200.073 25.363C200.073 24.2684 199.841 23.2734 199.343 22.3778C198.879 21.5155 198.182 20.8189 197.353 20.3214C196.491 19.8239 195.529 19.5585 194.468 19.5585C193.406 19.5585 192.444 19.8239 191.582 20.3214C190.719 20.8189 190.056 21.5155 189.559 22.3778C189.061 23.2402 188.829 24.2353 188.829 25.363C188.829 26.4907 189.061 27.4526 189.559 28.315C190.056 29.1774 190.719 29.8739 191.582 30.3714C192.411 30.869 193.373 31.1343 194.468 31.1343ZM194.468 33.0581C192.975 33.0581 191.681 32.7264 190.52 32.063C189.36 31.3997 188.431 30.4709 187.768 29.31C187.104 28.1491 186.772 26.8224 186.772 25.363C186.772 23.8704 187.104 22.5437 187.768 21.3828C188.431 20.2219 189.36 19.2932 190.52 18.6298C191.681 17.9664 193.008 17.6348 194.468 17.6348C195.96 17.6348 197.254 17.9664 198.415 18.6298C199.575 19.2932 200.471 20.2219 201.134 21.3828C201.798 22.5437 202.129 23.8704 202.163 25.363C202.163 26.8556 201.831 28.1491 201.168 29.31C200.504 30.4709 199.575 31.3997 198.415 32.063C197.254 32.7264 195.927 33.0581 194.468 33.0581Z" fill="#FBBE3E"></path><path d="M164.516 37.8002C164.317 37.8002 164.118 37.7339 164.018 37.6012C163.919 37.4686 163.819 37.3027 163.819 37.1037C163.819 36.9047 163.886 36.7057 164.018 36.6062C164.151 36.5067 164.317 36.4072 164.516 36.4072H202.394C204.716 36.4072 206.607 34.5166 206.607 32.1948V18.5957C206.607 16.2739 204.716 14.3833 202.394 14.3833H156.954C154.632 14.3833 152.741 16.2739 152.741 18.5957V37.1037C152.741 37.3027 152.675 37.5017 152.542 37.6012C152.41 37.7339 152.244 37.8002 152.045 37.8002C151.846 37.8002 151.647 37.7339 151.547 37.6012C151.448 37.4686 151.348 37.3027 151.348 37.1037V18.5957C151.348 15.511 153.869 12.9902 156.954 12.9902H202.394C205.479 12.9902 208 15.511 208 18.5957V32.1948C208 35.2794 205.479 37.8002 202.394 37.8002H164.516Z" fill="#FBBE3E"></path>',15),H3=[b3];function V3(t,n){return r(),C("svg",M3,H3)}const B3=h(y3,[["render",V3]]),Z3={},I=t=>(b("data-v-7fca3d23"),t=t(),H(),t),I3={class:"footer"},A3={class:"footer__top"},F3=O('<div class="footer__links" data-v-7fca3d23><h3 class="footer__links-title" data-v-7fca3d23>Мой аккаунт</h3><a class="footer__links-item" href="#" data-v-7fca3d23>Мой аккаунт</a><a class="footer__links-item" href="#" data-v-7fca3d23>История заказов</a><a class="footer__links-item" href="#" data-v-7fca3d23>Наши контакты</a><a class="footer__links-item" href="#" data-v-7fca3d23>Политика</a><a class="footer__links-item" href="#" data-v-7fca3d23>Блог</a></div><div class="footer__links" data-v-7fca3d23><h3 class="footer__links-title" data-v-7fca3d23>Помощь</h3><a class="footer__links-item" href="#" data-v-7fca3d23>Поддержка</a><a class="footer__links-item" href="#" data-v-7fca3d23>Как купить</a><a class="footer__links-item" href="#" data-v-7fca3d23>Оплата и доставка</a><a class="footer__links-item" href="#" data-v-7fca3d23>Как вернуть</a><a class="footer__links-item" href="#" data-v-7fca3d23>Контакты</a></div><div class="footer__links" data-v-7fca3d23><h3 class="footer__links-title" data-v-7fca3d23>Категории</h3><a class="footer__links-item" href="#" data-v-7fca3d23>IQOS</a><a class="footer__links-item" href="#" data-v-7fca3d23>Аксессуары</a><a class="footer__links-item" href="#" data-v-7fca3d23>Кальяные смеси</a><a class="footer__links-item" href="#" data-v-7fca3d23>Кальяны</a><a class="footer__links-item" href="#" data-v-7fca3d23>Комплектующие</a><a class="footer__links-item" href="#" data-v-7fca3d23>Мерч</a><a class="footer__links-item" href="#" data-v-7fca3d23>Уголь</a><a class="footer__links-item" href="#" data-v-7fca3d23>Электронные сигареты</a></div>',3),L3={class:"footer__links"},S3=I(()=>e("h3",{class:"footer__links-title"},"Соц сети",-1)),T3={class:"footer__social"},R3={href:"#"},j3={href:"#"},E3={href:"#"},N3=I(()=>e("a",{class:"footer__info",href:"#"},"© 2023 Smoking Shop.Все права защищены.",-1)),K3=I(()=>e("a",{class:"footer__inn",href:"#"},"ИНН 4345427922 КПП 434501001 ОГРН 1154350010473",-1)),D3=I(()=>e("div",{class:"footer__bottom"},[e("span",{class:"footer__bottom-warning"},"МИНЗДРАВ ПРЕДУПРЕЖДАЕТ: КУРЕНИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ!"),e("p",{class:"footer__bottom-info"},"Мы не рекламируем табак и курение. Вся информация на сайте носит информационный характер. Дистанционная продажа табачных изделий не ведется.")],-1)),O3={href:"#",class:"footer__dev"};function q3(t,n){const o=U,_=W,s=Y,i=x3,d=B3;return r(),C("footer",I3,[e("div",A3,[F3,e("div",L3,[S3,e("div",T3,[e("a",R3,[c(o)]),e("a",j3,[c(_)]),e("a",E3,[c(s)])]),N3,K3,c(i,{class:"footer__restriction"})])]),D3,e("a",O3,[v(" Разработка сайта "),c(d,{class:"footer__dev-icon"})])])}const U3=h(Z3,[["render",q3],["__scopeId","data-v-7fca3d23"]]),W3={},Y3={class:"container"},z3={class:"container"};function J3(t,n){const o=n2,_=F2,s=S2,i=p3,d=U3;return r(),C("main",null,[c(o),e("div",Y3,[c(_),c(s)]),c(i),e("div",z3,[c(d)])])}const t9=h(W3,[["render",J3]]);export{t9 as default};

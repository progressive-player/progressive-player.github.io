var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function a(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function o(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(){return t=" ",document.createTextNode(t);var t}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let h;function m(t){h=t}const $=[],g=[],p=[],v=[],x=Promise.resolve();let b=!1;function w(t){p.push(t)}let y=!1;const z=new Set;function H(){if(!y){y=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];m(n),M(n.$$)}for($.length=0;g.length;)g.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];z.has(n)||(z.add(n),n())}p.length=0}while($.length);for(;v.length;)v.pop()();b=!1,y=!1,z.clear()}}function M(t){if(null!==t.fragment){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const k=new Set;function _(t,n){t&&t.i&&(k.delete(t),t.i(n))}function L(t,n,e,a){if(t&&t.o){if(k.has(t))return;k.add(t),(void 0).c.push(()=>{k.delete(t),a&&(e&&t.d(1),a())}),t.o(n)}}function C(t){t&&t.c()}function V(t,e,r){const{fragment:l,on_mount:c,on_destroy:o,after_update:i}=t.$$;l&&l.m(e,r),w(()=>{const e=c.map(n).filter(s);o?o.push(...e):a(e),t.$$.on_mount=[]}),i.forEach(w)}function B(t,n){const e=t.$$;null!==e.fragment&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&($.push(t),b||(b=!0,x.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(n,s,r,l,c,i,u=[-1]){const f=h;m(n);const d=s.props||{},$=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:u};let g=!1;if($.ctx=r?r(n,d,(t,e,...a)=>{const s=a.length?a[0]:e;return $.ctx&&c($.ctx[t],$.ctx[t]=s)&&($.bound[t]&&$.bound[t](s),g&&S(n,t)),e}):[],$.update(),g=!0,a($.before_update),$.fragment=!!l&&l($.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);$.fragment&&$.fragment.l(t),t.forEach(o)}else $.fragment&&$.fragment.c();s.intro&&_(n.$$.fragment),V(n,s.target,s.anchor),H()}m(f)}class A{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function N(n){let e,a,s;return{c(){e=u("svg"),a=u("path"),s=u("path"),d(a,"d","M0 0h24v24H0z"),d(a,"fill","none"),d(s,"d","M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"),d(s,"class","svg"),d(e,"viewBox","0 0 24 24")},m(t,n){c(t,e,n),l(e,a),l(e,s)},p:t,i:t,o:t,d(t){t&&o(e)}}}class j extends A{constructor(t){super(),E(this,t,null,N,r,{})}}function D(n){let e,a,s,r;return{c(){e=u("svg"),a=u("path"),s=u("circle"),r=u("path"),d(a,"d","M0 0h24v24H0z"),d(a,"fill","none"),d(s,"cx","6.18"),d(s,"cy","17.82"),d(s,"r","2.18"),d(s,"class","svg"),d(r,"d","M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"),d(r,"class","svg"),d(e,"viewBox","0 0 24 24")},m(t,n){c(t,e,n),l(e,a),l(e,s),l(e,r)},p:t,i:t,o:t,d(t){t&&o(e)}}}class F extends A{constructor(t){super(),E(this,t,null,D,r,{})}}function O(n){let e,a,s,r;return{c(){e=u("svg"),a=u("path"),s=u("path"),r=u("path"),d(a,"d","M0 0h24v24H0V0z"),d(a,"fill","none"),d(s,"d","M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"),d(s,"class","svg-primary"),d(r,"d","M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"),d(r,"class","svg"),d(e,"viewBox","0 0 24 24")},m(t,n){c(t,e,n),l(e,a),l(e,s),l(e,r)},p:t,i:t,o:t,d(t){t&&o(e)}}}class T extends A{constructor(t){super(),E(this,t,null,O,r,{})}}function q(n){let e,a,s;return{c(){e=u("svg"),a=u("path"),s=u("path"),d(a,"d","M0 0h24v24H0z"),d(a,"fill","none"),d(s,"d","M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"),d(s,"class","svg"),d(e,"viewBox","0 0 24 24")},m(t,n){c(t,e,n),l(e,a),l(e,s)},p:t,i:t,o:t,d(t){t&&o(e)}}}class P extends A{constructor(t){super(),E(this,t,null,q,r,{})}}function G(n){let e,a,s;return{c(){e=u("svg"),a=u("path"),s=u("path"),d(a,"d","M0 0h24v24H0V0z"),d(a,"fill","none"),d(s,"d","M19.1 12.9c0-0.3 0.1-0.6 0.1-0.9 0-0.3 0-0.6-0.1-0.9l2-1.6c0.2-0.1 0.2-0.4 0.1-0.6l-1.9-3.3c-0.1-0.2-0.4-0.3-0.6-0.2l-2.4 1c-0.5-0.4-1-0.7-1.6-0.9L14.4 2.8c0-0.2-0.2-0.4-0.5-0.4h-3.8c-0.2 0-0.4 0.2-0.5 0.4L9.3 5.4C8.7 5.6 8.1 5.9 7.6 6.3L5.2 5.3c-0.2-0.1-0.5 0-0.6 0.2L2.7 8.9C2.6 9.1 2.7 9.3 2.9 9.5l2 1.6C4.8 11.4 4.8 11.7 4.8 12s0 0.6 0.1 0.9l-2 1.6c-0.2 0.1-0.2 0.4-0.1 0.6l1.9 3.3c0.1 0.2 0.4 0.3 0.6 0.2l2.4-1c0.5 0.4 1 0.7 1.6 0.9l0.4 2.5c0.1 0.2 0.2 0.4 0.5 0.4h3.8c0.2 0 0.4-0.2 0.5-0.4l0.4-2.5c0.6-0.2 1.1-0.6 1.6-0.9l2.4 1c0.2 0.1 0.5 0 0.6-0.2l1.9-3.3c0.1-0.2 0.1-0.5-0.1-0.6L19.1 12.9zM12 15.6c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6S14 15.6 12 15.6z"),d(s,"class","svg"),d(e,"viewBox","0 0 24 24")},m(t,n){c(t,e,n),l(e,a),l(e,s)},p:t,i:t,o:t,d(t){t&&o(e)}}}class I extends A{constructor(t){super(),E(this,t,null,G,r,{})}}function J(n){let e,a,s,r,u,h,m,$,g,p,v,x,b,w,y,z,H,M,k,S,E,A,N,D,O,q,G,J,K,Q;return u=new j({}),v=new F({}),H=new T({}),N=new P({}),K=new I({}),{c(){e=i("nav"),a=i("ul"),s=i("li"),r=i("a"),C(u.$$.fragment),h=f(),m=i("span"),m.textContent="Home",$=f(),g=i("li"),p=i("a"),C(v.$$.fragment),x=f(),b=i("span"),b.textContent="Feeds",w=f(),y=i("li"),z=i("a"),C(H.$$.fragment),M=f(),k=i("span"),k.textContent="Library",S=f(),E=i("li"),A=i("a"),C(N.$$.fragment),D=f(),O=i("span"),O.textContent="Downloads",q=f(),G=i("li"),J=i("a"),C(K.$$.fragment),d(m,"class","link-text"),d(r,"href","./"),d(r,"class","nav-link"),d(r,"aria-label","Home"),d(s,"class","nav-item"),d(b,"class","link-text"),d(p,"href","./feeds"),d(p,"class","nav-link"),d(p,"aria-label","Feeds"),d(g,"class","nav-item"),d(k,"class","link-text"),d(z,"href","./library"),d(z,"class","nav-link"),d(z,"aria-label","Library"),d(y,"class","nav-item"),d(O,"class","link-text"),d(A,"href","./downloads"),d(A,"class","nav-link"),d(A,"aria-label","Downloads"),d(E,"class","nav-item"),d(J,"href","./settings"),d(J,"class","nav-link"),d(J,"aria-label","Settings"),d(G,"class","nav-item sidebar-settings"),d(a,"class","navbar-nav"),d(e,"class","navbar")},m(t,n){c(t,e,n),l(e,a),l(a,s),l(s,r),V(u,r,null),l(r,h),l(r,m),l(a,$),l(a,g),l(g,p),V(v,p,null),l(p,x),l(p,b),l(a,w),l(a,y),l(y,z),V(H,z,null),l(z,M),l(z,k),l(a,S),l(a,E),l(E,A),V(N,A,null),l(A,D),l(A,O),l(a,q),l(a,G),l(G,J),V(K,J,null),Q=!0},p:t,i(t){Q||(_(u.$$.fragment,t),_(v.$$.fragment,t),_(H.$$.fragment,t),_(N.$$.fragment,t),_(K.$$.fragment,t),Q=!0)},o(t){L(u.$$.fragment,t),L(v.$$.fragment,t),L(H.$$.fragment,t),L(N.$$.fragment,t),L(K.$$.fragment,t),Q=!1},d(t){t&&o(e),B(u),B(v),B(H),B(N),B(K)}}}class K extends A{constructor(t){super(),E(this,t,null,J,r,{})}}function Q(n){let e,a,s;return{c(){e=u("svg"),a=u("path"),s=u("path"),d(a,"d","M0 0h24v24H0z"),d(a,"fill","none"),d(s,"d","M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"),d(s,"class","svg"),d(e,"viewBox","0 0 24 24")},m(t,n){c(t,e,n),l(e,a),l(e,s)},p:t,i:t,o:t,d(t){t&&o(e)}}}class R extends A{constructor(t){super(),E(this,t,null,Q,r,{})}}function U(n){let e,a,s,r,u,h,m,$,g,p;return u=new R({}),g=new I({}),{c(){e=i("nav"),a=i("ul"),s=i("li"),r=i("div"),C(u.$$.fragment),h=f(),m=i("li"),$=i("a"),C(g.$$.fragment),d(r,"class","nav-link"),d(r,"aria-label","Settings"),d(s,"class","top-item"),d($,"href","./settings"),d($,"class","nav-link"),d($,"aria-label","Settings"),d(m,"class","top-item"),d(a,"class","topbar-nav"),d(e,"class","topbar")},m(t,n){c(t,e,n),l(e,a),l(a,s),l(s,r),V(u,r,null),l(a,h),l(a,m),l(m,$),V(g,$,null),p=!0},p:t,i(t){p||(_(u.$$.fragment,t),_(g.$$.fragment,t),p=!0)},o(t){L(u.$$.fragment,t),L(g.$$.fragment,t),p=!1},d(t){t&&o(e),B(u),B(g)}}}class W extends A{constructor(t){super(),E(this,t,null,U,r,{})}}function X(n){let e;return{c(){e=i("main"),e.innerHTML="<h1>Home</h1>"},m(t,n){c(t,e,n)},p:t,i:t,o:t,d(t){t&&o(e)}}}class Y extends A{constructor(t){super(),E(this,t,null,X,r,{})}}function Z(n){let e,a,s,r,l,i;return e=new K({}),s=new W({}),l=new Y({}),{c(){C(e.$$.fragment),a=f(),C(s.$$.fragment),r=f(),C(l.$$.fragment)},m(t,n){V(e,t,n),c(t,a,n),V(s,t,n),c(t,r,n),V(l,t,n),i=!0},p:t,i(t){i||(_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),i=!0)},o(t){L(e.$$.fragment,t),L(s.$$.fragment,t),L(l.$$.fragment,t),i=!1},d(t){B(e,t),t&&o(a),B(s,t),t&&o(r),B(l,t)}}}const tt=new class extends A{constructor(t){super(),E(this,t,null,Z,r,{})}}({target:document.body});return window.app=tt,tt}();
//# sourceMappingURL=bundle.js.map

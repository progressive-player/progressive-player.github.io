!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(2)},function(t,e,n){},function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function c(){return Object.create(null)}function u(t){t.forEach(r)}function l(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function i(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}new Set;let m;function $(t){m=t}const y=[],g=[],b=[],x=[],_=Promise.resolve();let w=!1;function v(){w||(w=!0,_.then(k))}function S(t){b.push(t)}let j=!1;const O=new Set;function k(){if(!j){j=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];$(e),E(e.$$)}for(y.length=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];O.has(e)||(O.add(e),e())}b.length=0}while(y.length);for(;x.length;)x.pop()();w=!1,j=!1,O.clear()}}function E(t){if(null!==t.fragment){t.update(),u(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const M=new Set;function T(t,e){t&&t.i&&(M.delete(t),t.i(e))}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let C;function P(t,e){const n=t.$$;null!==n.fragment&&(u(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e,n,a,i,f,d=[-1]){const p=m;$(t);const h=e.props||{},g=t.$$={fragment:null,ctx:null,props:f,update:o,not_equal:i,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:c(),dirty:d};let b=!1;if(g.ctx=n?n(t,h,(e,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&i(g.ctx[e],g.ctx[e]=r)&&(g.bound[e]&&g.bound[e](r),b&&function(t,e){-1===t.$$.dirty[0]&&(y.push(t),v(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],g.update(),b=!0,u(g.before_update),g.fragment=!!a&&a(g.ctx),e.target){if(e.hydrate){const t=(x=e.target,Array.from(x.childNodes));g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();e.intro&&T(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:c,on_destroy:a,after_update:i}=t.$$;o&&o.m(e,n),S(()=>{const e=c.map(r).filter(l);a?a.push(...e):u(e),t.$$.on_mount=[]}),i.forEach(S)}(t,e.target,e.anchor),k()}var x;$(p)}"function"==typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){P(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class q{$destroy(){P(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}n(1);function H(t){let e,n,r,c;return{c(){e=d("h1"),n=p("Hello "),r=p(t[0]),c=p("!"),h(e,"class","svelte-14phz9j")},m(t,o){f(t,e,o),i(e,n),i(e,r),i(e,c)},p(t,[e]){var n,o;1&e&&(n=r,o=""+(o=t[0]),n.data!==o&&(n.data=o))},i:o,o:o,d(t){t&&s(e)}}}function N(t,e,n){let{name:o}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name)},[o]}const L=new class extends q{constructor(t){super(),A(this,t,N,H,a,{name:0})}}({target:document.body,props:{name:"world"}});window.app=L;e.default=L}]);
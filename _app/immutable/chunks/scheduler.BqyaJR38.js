function D(){}const X=t=>t;function O(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function Y(){return Object.create(null)}function L(t){t.forEach(B)}function Z(t){return typeof t=="function"}function $(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let h;function tt(t,n){return t===n?!0:(h||(h=document.createElement("a")),h.href=n,t===h.href)}function nt(t){return Object.keys(t).length===0}function N(t,...n){if(t==null){for(const i of n)i(void 0);return D}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function et(t){let n;return N(t,e=>n=e)(),n}function it(t,n,e){t.$$.on_destroy.push(N(n,e))}function rt(t,n,e,i){if(t){const r=A(t,n,e,i);return t[0](r)}}function A(t,n,e,i){return t[1]&&i?O(e.ctx.slice(),t[1](i(n))):e.ctx}function ct(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function lt(t,n,e,i,r,u){if(r){const c=A(n,e,i,u);t.p(c,r)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ut(t){return t??""}function at(t,n,e){return t.set(e),n}let p=!1;function ot(){p=!0}function ft(){p=!1}function M(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&l.push(o)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const a=n[l].claim_order,o=(r>0&&n[e[r]].claim_order<=a?r+1:M(1,r,q=>n[e[q]].claim_order,a))-1;i[l]=e[o]+1;const E=o+1;e[E]=l,r=Math.max(E,r)}const u=[],c=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<u.length&&c[l].claim_order>=u[a].claim_order;)a++;const o=a<u.length?u[a]:null;t.insertBefore(c[l],o)}}function H(t,n){t.appendChild(n)}function I(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function _t(t){const n=j("style");return n.textContent="/* empty */",R(I(t),n),n.sheet}function R(t,n){return H(t.head||t,n),n.sheet}function z(t,n){if(p){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){p&&!e?z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function ht(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function j(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function pt(){return v(" ")}function bt(){return v("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function gt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t){return t.dataset.svelteH}function wt(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function Et(t){return t===""?null:+t}function kt(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,r=!1){U(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function S(t,n,e,i){return C(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Nt(t,n,e){return S(t,n,e,j)}function At(t,n,e){return S(t,n,e,F)}function W(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function jt(t){return W(t," ")}function Ct(t,n){n=""+n,t.data!==n&&(t.data=n)}function St(t,n){t.value=n??""}function Pt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function qt(t,n,e){t.classList.toggle(n,!!e)}function G(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Dt(t,n){return new t(n)}let m;function b(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Ot(t){w().$$.on_mount.push(t)}function Bt(t){w().$$.after_update.push(t)}function Lt(){const t=w();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=G(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}function Mt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],k=[];let _=[];const g=[],P=Promise.resolve();let x=!1;function J(){x||(x=!0,P.then(Q))}function Tt(){return J(),P}function K(t){_.push(t)}function Ht(t){g.push(t)}const y=new Set;let f=0;function Q(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,b(n),V(n.$$)}}catch(n){throw d.length=0,f=0,n}for(b(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];y.has(e)||(y.add(e),e())}_.length=0}while(d.length);for(;g.length;)g.pop()();x=!1,y.clear(),b(t)}function V(t){if(t.fragment!==null){t.update(),L(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}function It(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{tt as $,lt as A,st as B,ct as C,I as D,_t as E,K as F,G,X as H,Y as I,Q as J,nt as K,It as L,m as M,b as N,B as O,d as P,J as Q,ot as R,ft as S,et as T,qt as U,at as V,mt as W,vt as X,yt as Y,F as Z,At as _,N as a,ut as a0,gt as a1,Lt as a2,Ht as a3,Mt as a4,wt as a5,St as a6,Et as a7,pt as b,Nt as c,kt as d,j as e,W as f,ht as g,jt as h,Z as i,dt as j,z as k,Ct as l,it as m,D as n,Ot as o,bt as p,Bt as q,L as r,$ as s,v as t,xt as u,Pt as v,k as w,Dt as x,Tt as y,rt as z};
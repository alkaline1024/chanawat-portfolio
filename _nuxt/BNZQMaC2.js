import{ax as $,aB as y,s as m,B as x,f as M,aC as E,aD as S,aE as b,aF as I,aG as c,aH as w,aI as j,x as B,aA as L,aJ as P,k as g,aK as C}from"./E6XTyCoh.js";let k=0;function F(t,n="reka"){const s=$({useId:void 0});return y?`${n}-${y()}`:s.useId?`${n}-${s.useId()}`:`${n}-${++k}`}const W=b?window:void 0;function z(t){var n;const s=c(t);return(n=s==null?void 0:s.$el)!=null?n:s}function A(...t){const n=[],s=()=>{n.forEach(e=>e()),n.length=0},r=(e,u,a,o)=>(e.addEventListener(u,a,o),()=>e.removeEventListener(u,a,o)),l=M(()=>{const e=I(c(t[0])).filter(u=>u!=null);return e.every(u=>typeof u!="string")?e:void 0}),h=w(()=>{var e,u;return[(u=(e=l.value)==null?void 0:e.map(a=>z(a)))!=null?u:[W].filter(a=>a!=null),I(c(l.value?t[1]:t[0])),I(g(l.value?t[2]:t[1])),c(l.value?t[3]:t[2])]},([e,u,a,o])=>{if(s(),!(e!=null&&e.length)||!(u!=null&&u.length)||!(a!=null&&a.length))return;const p=P(o)?{...o}:o;n.push(...e.flatMap(f=>u.flatMap(v=>a.map(i=>r(f,v,i,p)))))},{flush:"post"}),d=()=>{h(),s()};return j(s),d}function D(){const t=m(!1),n=L();return n&&B(()=>{t.value=!0},n),t}function O(t){const n=D();return M(()=>(n.value,!!t()))}const Q=Symbol("vueuse-ssr-width");function R(){const t=E()?S(Q,null):null;return typeof t=="number"?t:void 0}function G(t,n={}){const{window:s=W,ssrWidth:r=R()}=n,l=O(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function"),h=m(typeof r=="number"),d=m(),e=m(!1),u=a=>{e.value=a.matches};return x(()=>{if(h.value){h.value=!l.value;const a=c(t).split(",");e.value=a.some(o=>{const p=o.includes("not all"),f=o.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),v=o.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let i=!!(f||v);return f&&i&&(i=r>=C(f[1])),v&&i&&(i=r<=C(v[1])),p?!i:i});return}l.value&&(d.value=s.matchMedia(c(t)),e.value=d.value.matches)}),A(d,"change",u,{passive:!0}),M(()=>e.value)}export{G as a,F as u};

(function(){"use strict";var e={7266:function(e,t,n){var o=n(3396);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(89);const r={},l=(0,a.Z)(r,[["render",i]]);var u=l,c=n(2483);const s={class:"scene"};function v(e,t,n,i,a,r){const l=(0,o.up)("base-component"),u=(0,o.up)("ball-component");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(l),(0,o.Wm)(u)])}var g=n(7139),h=n(4870);function f(e,t,n=0){const o=Math.max(Math.min(t,e),n);return{value:o,clampNeedeed:o!==e}}function d(e,t,n){return e>=n&&e<=t}function p(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function w(e,t,n){const o=(Math.pow(e,2)+Math.pow(t,2)-Math.pow(n,2))/(2*e*t),i=Math.acos(o);return i}var m=n(1020);const B=(0,m.Q_)("ballStore",(()=>{const e=(0,h.iH)({x:0,y:0}),t=(0,h.iH)(20),n=(0,h.iH)({x:5,y:5}),i=(0,o.Fl)((()=>e.value)),a=(0,o.Fl)((()=>t.value)),r=(0,o.Fl)((()=>n.value));function l(t){e.value=t}function u(e){t.value=e}function c(e){n.value=e}function s(){n.value.x=-n.value.x}function v(){n.value.y=-n.value.y}return{getBallPosition:i,getBallSize:a,getVector:r,changeBallPosition:l,changeBallSize:u,changeVector:c,mirrorVectorX:s,mirrorVectorY:v}})),x=(0,m.Q_)("baseStore",(()=>{const e=(0,h.iH)({x:0,y:0}),t=(0,h.iH)({x:0,y:0}),n=(0,o.Fl)((()=>e.value)),i=(0,o.Fl)((()=>t.value));function a(e){r(e.x),l(e.y)}function r(t){e.value.x=t}function l(t){e.value.y=t}function u(e){t.value=e}function c(e){t.value.x=e}return{getBasePosition:n,getBaseSize:i,changeBasePosition:a,changeBasePositionX:r,changeBaseSize:u,changeBaseWidth:c}})),y=(0,o.aZ)({name:"BallComponent"});var b=(0,o.aZ)({...y,setup(e){let t,n=8,i=!0,a=B(),r=(0,h.iH)(B()),l=x();function u(){let e=a.getBallPosition.y>=l.getBasePosition.y-a.getBallSize,t=d(a.getBallPosition.x,l.getBasePosition.x+l.getBaseSize.x,l.getBasePosition.x);return e&&t}function c(){P();let e=l.getBasePosition.x+l.getBaseSize.x/2,t={x:e,y:l.getBasePosition.y},n=a.getBallPosition.x-a.getVector.x,o=a.getBallPosition.y-a.getVector.y,i={x:n,y:o},r=l.getBaseSize.x/2,u=p(t,i),c=p(l.getBasePosition,i);const s=w(r,u,c),v=Math.PI-s;let g=Math.sqrt(Math.pow(a.getVector.x,2)+Math.pow(a.getVector.y,2)),h=g*Math.sin(v),f=g*Math.cos(v);a.changeVector({x:f,y:-h})}function s(e=!1){let n=f(a.getBallPosition.x+a.getVector.x,window.innerWidth-a.getBallSize),o=f(a.getBallPosition.y+a.getVector.y,window.innerHeight-a.getBallSize);a.changeBallPosition({x:n.value,y:o.value}),t.style.left=n.value+"px",t.style.top=o.value+"px",o.value==window.innerHeight-a.getBallSize&&(i=!1),e||(n.clampNeedeed&&a.mirrorVectorX(),o.clampNeedeed&&a.mirrorVectorY())}function v(){let e=u();e&&c(),s(e),setTimeout((()=>{i&&requestAnimationFrame(v)}),n)}function m(){t||(t=document.getElementById("ball"),y(),b()),t&&requestAnimationFrame(v)}function y(){let e=Math.max(window.innerWidth,window.innerHeight)/120;a.changeBallSize(e)}function b(){let e=window.innerWidth/200,t=window.innerHeight/400;a.changeVector({x:e,y:t})}function P(){let e=document.getElementById("base");e?.classList.add("hit"),setTimeout((()=>{e?.classList.remove("hit")}),150)}return(0,o.bv)((()=>{m()})),(0,o.Ah)((()=>{i=!1})),(e,t)=>((0,o.wg)(),(0,o.iD)("div",{id:"ball",class:"ball",style:(0,g.j5)({height:(0,h.SU)(r).getBallSize+"px"})},null,4))}});const P=b;var S=P;const z=(0,o.aZ)({name:"BaseComponent"});var M=(0,o.aZ)({...z,setup(e){let t;const n=(0,h.iH)(x());function i(){let e=window.innerHeight/100,t=window.innerWidth/10,o=window.innerWidth/192;n.value.changeBaseSize({x:t,y:o});let i=window.innerWidth/2-n.value.getBaseSize.x/2,a=window.innerHeight-(o+e);n.value.changeBasePosition({x:i,y:a})}function a(e){const t=f(e.clientX,window.innerWidth-n.value.getBaseSize.x-2);n.value.changeBasePositionX(t.value)}function r(){t||(t=document.getElementById("base")),i(),window.addEventListener("mousemove",a)}return(0,o.bv)((()=>{r()})),(0,o.Ah)((()=>{window.removeEventListener("mousemove",a)})),(e,t)=>((0,o.wg)(),(0,o.iD)("div",{id:"base",class:"base",style:(0,g.j5)({left:n.value.getBasePosition.x+"px",top:n.value.getBasePosition.y+"px",width:n.value.getBaseSize.x+"px",height:n.value.getBaseSize.y+"px"})},null,4))}});const V=M;var H=V,O=(0,o.aZ)({name:"HomeView",components:{BallComponent:S,BaseComponent:H}});const W=(0,a.Z)(O,[["render",v],["__scopeId","data-v-41503edd"]]);var j=W;const k=[{path:"/",name:"home",component:j}],F=(0,c.p7)({history:(0,c.PO)("/"),routes:k});var _=F,Z=n(9242);const C=(0,m.WB)(),E=(0,Z.ri)(u);E.use(_).use(C).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var r=1/0;for(s=0;s<e.length;s++){o=e[s][0],i=e[s][1],a=e[s][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,a<r&&(r=a));if(l){e.splice(s--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],l=o[1],u=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(u)var s=u(n)}for(t&&t(o);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkbrick_breaker"]=self["webpackChunkbrick_breaker"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7266)}));o=n.O(o)})();
//# sourceMappingURL=app.185d93b3.js.map
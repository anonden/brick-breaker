(function(){"use strict";var e={6866:function(e,t,n){var o=n(3396);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(89);const r={},l=(0,a.Z)(r,[["render",i]]);var u=l,s=n(2483),c=n(7139),g=n(4870);function v(e,t,n=0){const o=Math.max(Math.min(t,e),n);return{value:o,clampNeedeed:o!==e}}function h(e,t,n){return e>=n&&e<=t}function f(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function d(e,t,n){const o=(Math.pow(e,2)+Math.pow(t,2)-Math.pow(n,2))/(2*e*t),i=Math.acos(o);return i}var w=n(1020);const m=(0,w.Q_)("ballStore",(()=>{const e=(0,g.iH)({x:0,y:0}),t=(0,g.iH)(20),n=(0,g.iH)({x:5,y:5}),i=(0,o.Fl)((()=>e.value)),a=(0,o.Fl)((()=>t.value)),r=(0,o.Fl)((()=>n.value));function l(t){e.value=t}function u(e){t.value=e}function s(e){n.value=e}function c(){n.value.x=-n.value.x}function v(){n.value.y=-n.value.y}return{getBallPosition:i,getBallSize:a,getVector:r,changeBallPosition:l,changeBallSize:u,changeVector:s,mirrorVectorX:c,mirrorVectorY:v}})),p=(0,w.Q_)("baseStore",(()=>{const e=(0,g.iH)({x:0,y:0}),t=(0,g.iH)({x:0,y:0}),n=(0,o.Fl)((()=>e.value)),i=(0,o.Fl)((()=>t.value));function a(e){r(e.x),l(e.y)}function r(t){e.value.x=t}function l(t){e.value.y=t}function u(e){t.value=e}function s(e){t.value.x=e}return{getBasePosition:n,getBaseSize:i,changeBasePosition:a,changeBasePositionX:r,changeBaseSize:u,changeBaseWidth:s}})),B=(0,o.aZ)({name:"BallComponent"});var x=(0,o.aZ)({...B,setup(e){let t,n=8,i=!0,a=m(),r=(0,g.iH)(m()),l=p();function u(){let e=a.getBallPosition.y>=l.getBasePosition.y-a.getBallSize,t=h(a.getBallPosition.x,l.getBasePosition.x+l.getBaseSize.x,l.getBasePosition.x);return e&&t}function s(){P();let e=l.getBasePosition.x+l.getBaseSize.x/2,t={x:e,y:l.getBasePosition.y},n=a.getBallPosition.x-a.getVector.x,o=a.getBallPosition.y-a.getVector.y,i={x:n,y:o},r=l.getBaseSize.x/2,u=f(t,i),s=f(l.getBasePosition,i);const c=d(r,u,s),g=Math.PI-c;let v=Math.sqrt(Math.pow(a.getVector.x,2)+Math.pow(a.getVector.y,2)),h=v*Math.sin(g),w=v*Math.cos(g);a.changeVector({x:w,y:-h})}function w(e=!1){let n=v(a.getBallPosition.x+a.getVector.x,window.innerWidth-a.getBallSize),o=v(a.getBallPosition.y+a.getVector.y,window.innerHeight-a.getBallSize);a.changeBallPosition({x:n.value,y:o.value}),t.style.left=n.value+"px",t.style.top=o.value+"px",o.value==window.innerHeight-a.getBallSize&&(i=!1),e||(n.clampNeedeed&&a.mirrorVectorX(),o.clampNeedeed&&a.mirrorVectorY())}function B(){let e=u();e&&s(),w(e),setTimeout((()=>{i&&requestAnimationFrame(B)}),n)}function x(){t||(t=document.getElementById("ball"),y(),b()),t&&requestAnimationFrame(B)}function y(){let e=Math.max(window.innerWidth,window.innerHeight)/120;a.changeBallSize(e)}function b(){let e=window.innerWidth/200,t=window.innerHeight/400;a.changeVector({x:e,y:t})}function P(){let e=document.getElementById("base");e?.classList.add("hit"),setTimeout((()=>{e?.classList.remove("hit")}),150)}return(0,o.bv)((()=>{x()})),(0,o.Ah)((()=>{i=!1})),(e,t)=>((0,o.wg)(),(0,o.iD)("div",{id:"ball",class:"ball",style:(0,c.j5)({height:(0,g.SU)(r).getBallSize+"px"})},null,4))}});const y=x;var b=y;const P=(0,o.aZ)({name:"BaseComponent"});var S=(0,o.aZ)({...P,setup(e){let t;const n=(0,g.iH)(p());function i(){let e=window.innerHeight/100,t=window.innerWidth/10,o=window.innerWidth/192;n.value.changeBaseSize({x:t,y:o});let i=window.innerWidth/2-n.value.getBaseSize.x/2,a=window.innerHeight-(o+e);n.value.changeBasePosition({x:i,y:a})}function a(e){const t=v(e.clientX,window.innerWidth-n.value.getBaseSize.x-2);n.value.changeBasePositionX(t.value)}function r(){t||(t=document.getElementById("base")),i(),window.addEventListener("mousemove",a)}return(0,o.bv)((()=>{console.log("base mounted"),r()})),(0,o.Ah)((()=>{window.removeEventListener("mousemove",a)})),(e,t)=>((0,o.wg)(),(0,o.iD)("div",{id:"base",class:"base",style:(0,c.j5)({left:n.value.getBasePosition.x+"px",top:n.value.getBasePosition.y+"px",width:n.value.getBaseSize.x+"px",height:n.value.getBaseSize.y+"px"})},null,4))}});const z=S;var M=z;const V={class:"scene"},H=(0,o.aZ)({name:"GameView",components:{BallComponent:b,BaseComponent:M}});var O=(0,o.aZ)({...H,setup(e){return(0,o.bv)((()=>{console.log("mounted gameview")})),(e,t)=>((0,o.wg)(),(0,o.iD)("div",V,[(0,o.Wm)(M),(0,o.Wm)(b)]))}});const W=(0,a.Z)(O,[["__scopeId","data-v-163c73d2"]]);var j=W;const k=[{path:"/",name:"home",component:j}],F=(0,s.p7)({history:(0,s.PO)(""),routes:k});var Z=F,_=n(9242);const C=(0,w.WB)(),E=(0,_.ri)(u);E.use(Z).use(C).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],a=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,a<r&&(r=a));if(l){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],l=o[1],u=o[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(u)var c=u(n)}for(t&&t(o);s<r.length;s++)a=r[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkbrick_breaker"]=self["webpackChunkbrick_breaker"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6866)}));o=n.O(o)})();
//# sourceMappingURL=app.e5bbc841.js.map
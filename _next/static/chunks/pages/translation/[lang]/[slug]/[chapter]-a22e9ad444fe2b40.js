(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{9373:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/translation/[lang]/[slug]/[chapter]",function(){return n(709)}])},709:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return w}});var c=n(5893),r=n(1664),s=n.n(r),i=n(1163),a=n(7294),o=n(1716),u=n(9863);let l={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},h={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},p="mousemove",d="mouseup";function g(e,t){if(0===t)return e;let n=Math.PI/180*t,c=e[0]*Math.cos(n)+e[1]*Math.sin(n),r=e[1]*Math.cos(n)-e[0]*Math.sin(n);return[c,r]}var f=n(9144),O=n(6435),j=!0,w=e=>{let{meta:t,source:n,previous:r,next:j}=e,w=(0,i.useRouter)(),{lang:v,slug:b,chapter:S}=w.query,m="en"===v?"jp":"en",E=t.draft?"draft":"";(0,a.useEffect)(()=>{let e=e=>{"ArrowLeft"===e.code&&r?(w.push("/translation/".concat(v,"/").concat(b,"/").concat(r)),(0,f.k3)()):"ArrowRight"===e.code&&j&&(w.push("/translation/".concat(v,"/").concat(b,"/").concat(j)),(0,f.k3)())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[w]);let T=function(e){var t,n,c;let r;let{trackMouse:s}=e,i=a.useRef(Object.assign({},h)),o=a.useRef(Object.assign({},l)),u=a.useRef(Object.assign({},o.current));for(r in u.current=Object.assign({},o.current),o.current=Object.assign(Object.assign({},l),e),l)void 0===o.current[r]&&(o.current[r]=l[r]);let[f,O]=a.useMemo(()=>(function(e,t){let n=t=>{let n="touches"in t;n&&t.touches.length>1||e((e,r)=>{r.trackMouse&&!n&&(document.addEventListener(p,c),document.addEventListener(d,i));let{clientX:s,clientY:a}=n?t.touches[0]:t,o=g([s,a],r.rotationAngle);return r.onTouchStartOrOnMouseDown&&r.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),h),{initial:o.slice(),xy:o,start:t.timeStamp||0})})},c=t=>{e((e,n)=>{let c="touches"in t;if(c&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;let{clientX:r,clientY:s}=c?t.touches[0]:t,[i,a]=g([r,s],n.rotationAngle),o=i-e.xy[0],u=a-e.xy[1],h=Math.abs(o),p=Math.abs(u),d=(t.timeStamp||0)-e.start,f=Math.sqrt(h*h+p*p)/(d||1),O=[o/(d||1),u/(d||1)],j=h>p?o>0?"Right":"Left":u>0?"Down":"Up",w="number"==typeof n.delta?n.delta:n.delta[j.toLowerCase()]||l.delta;if(h<w&&p<w&&!e.swiping)return e;let v={absX:h,absY:p,deltaX:o,deltaY:u,dir:j,event:t,first:e.first,initial:e.initial,velocity:f,vxvy:O};v.first&&n.onSwipeStart&&n.onSwipeStart(v),n.onSwiping&&n.onSwiping(v);let b=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${j}`])&&(b=!0),b&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:v,swiping:!0})})},r=t=>{e((e,n)=>{let c;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){c=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(c);let r=n[`onSwiped${c.dir}`];r&&r(c)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),h),{eventData:c})})},s=()=>{document.removeEventListener(p,c),document.removeEventListener(d,i)},i=e=>{s(),r(e)},a=(e,t)=>{let s=()=>{};if(e&&e.addEventListener){let i=Object.assign(Object.assign({},l.touchEventOptions),t.touchEventOptions),a=[["touchstart",n,i],["touchmove",c,Object.assign(Object.assign({},i),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",r,i]];a.forEach(([t,n,c])=>e.addEventListener(t,n,c)),s=()=>a.forEach(([t,n])=>e.removeEventListener(t,n))}return s},o={ref:t=>{null!==t&&e((e,n)=>{if(e.el===t)return e;let c={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),c.cleanUpTouch=void 0),n.trackTouch&&t&&(c.cleanUpTouch=a(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),c)})}};return t.trackMouse&&(o.onMouseDown=n),[o,a]})(e=>i.current=e(i.current,o.current),{trackMouse:s}),[s]);return i.current=(t=i.current,n=o.current,c=u.current,n.trackTouch&&t.el?t.cleanUpTouch?n.preventScrollOnSwipe!==c.preventScrollOnSwipe||n.touchEventOptions.passive!==c.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:O(t.el,n)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:O(t.el,n)}):(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0}))),f}({onSwipedRight(){r&&(w.push("/translation/".concat(v,"/").concat(b,"/").concat(r)),(0,f.k3)())},onSwipedLeft(){j&&(w.push("/translation/".concat(v,"/").concat(b,"/").concat(j)),(0,f.k3)())}});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(O.Z,{title:t.title}),(0,c.jsxs)("section",{id:"chapter",className:"container page",...T,children:[(0,c.jsx)("article",{children:(0,c.jsxs)("header",{id:"header_novel",children:[(0,c.jsx)("div",{id:"title",children:(0,c.jsx)("h1",{children:t.title})}),(0,c.jsx)("div",{id:"lang",children:(0,c.jsx)(s(),{href:"/translation/".concat(m,"/").concat(b,"/").concat(S),children:(0,c.jsx)("img",{src:"/assets/images/".concat(m,".png"),alt:m})})})]})}),(0,c.jsx)(o.D,{rehypePlugins:[u.Z],children:n,className:"translation_".concat(v," ").concat(E),components:f.RZ}),(0,c.jsxs)("center",{children:[r&&(0,c.jsx)(s(),{href:"/translation/".concat(v,"/").concat(b,"/").concat(r),onClick:f.k3,children:"en"===v?"Previous":"前"}),j&&(0,c.jsx)(s(),{href:"/translation/".concat(v,"/").concat(b,"/").concat(j),onClick:f.k3,children:"en"===v?"Next":"次"})]})]})]})}},9144:function(e,t,n){"use strict";n.d(t,{RZ:function(){return i},k3:function(){return a}});var c=n(5893),r=n(1664),s=n.n(r);let i={a:e=>{let{href:t,children:n,title:r}=e,i=!t.match(/^(https?:)?\/\//)&&!t.match(/^\/assets/);return void 0!==r?(0,c.jsx)("a",{href:t,title:r,children:n}):i?(0,c.jsx)(s(),{href:t,children:n}):(0,c.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n})}},a=()=>{window.scrollTo(0,0)}},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[254,774,888,179],function(){return e(e.s=9373)}),_N_E=e.O()}]);
!function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){r(1),t.exports={Accordion:r(2)}},function(t,e){/*! (C) WebReflection Mit Style License */
!function(t,e,r,n){"use strict";function a(t,e){for(var r=0,n=t.length;n>r;r++)g(t[r],e)}function o(t){for(var e,r=0,n=t.length;n>r;r++)e=t[r],L(e,_[u(e)])}function i(t){return function(e){nt(e)&&(g(e,t),a(e.querySelectorAll(U),t))}}function u(t){var e=t.getAttribute("is"),r=t.nodeName.toUpperCase(),n=K.call(R,e?k+e.toUpperCase():S+r);return e&&n>-1&&!l(r,e)?-1:n}function l(t,e){return-1<U.indexOf(t+'[is="'+e+'"]')}function s(t){var e=t.currentTarget,r=t.attrChange,n=t.attrName,a=t.target;bt&&(!a||a===e)&&e.attributeChangedCallback&&"style"!==n&&t.prevValue!==t.newValue&&e.attributeChangedCallback(n,r===t[O]?null:t.prevValue,r===t[B]?null:t.newValue)}function c(t){var e=i(t);return function(t){h.push(e,t.target)}}function f(t){vt&&(vt=!1,t.currentTarget.removeEventListener(P,f)),a((t.target||e).querySelectorAll(U),t.detail===N?N:y),rt&&v()}function d(t,e){var r=this;it.call(r,t,e),E.call(r,{target:r})}function p(t,e){Q(t,e),x?x.observe(t,st):(pt&&(t.setAttribute=d,t[C]=m(t),t.addEventListener(M,E)),t.addEventListener(I,s)),t.createdCallback&&bt&&(t.created=!0,t.createdCallback(),t.created=!1)}function v(){for(var t,e=0,r=at.length;r>e;e++)t=at[e],q.contains(t)||(r--,at.splice(e--,1),g(t,N))}function b(t){throw new Error("A "+t+" type is already registered")}function g(t,e){var r,n=u(t);n>-1&&(T(t,_[n]),n=0,e!==y||t[y]?e===N&&!t[N]&&(t[y]=!1,t[N]=!0,n=1):(t[N]=!1,t[y]=!0,n=1,rt&&K.call(at,t)<0&&at.push(t)),n&&(r=t[e+"Callback"])&&r.call(t))}if(!(n in e)){var h,E,A,m,x,T,L,C="__"+n+(1e5*Math.random()>>0),y="attached",N="detached",w="extends",O="ADDITION",D="MODIFICATION",B="REMOVAL",I="DOMAttrModified",P="DOMContentLoaded",M="DOMSubtreeModified",S="<",k="=",F=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,V=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],R=[],_=[],U="",q=e.documentElement,K=R.indexOf||function(t){for(var e=this.length;e--&&this[e]!==t;);return e},X=r.prototype,H=X.hasOwnProperty,Y=X.isPrototypeOf,j=r.defineProperty,W=r.getOwnPropertyDescriptor,Z=r.getOwnPropertyNames,G=r.getPrototypeOf,z=r.setPrototypeOf,$=!!r.__proto__,J=r.create||function gt(t){return t?(gt.prototype=t,new gt):this},Q=z||($?function(t,e){return t.__proto__=e,t}:Z&&W?function(){function t(t,e){for(var r,n=Z(e),a=0,o=n.length;o>a;a++)r=n[a],H.call(t,r)||j(t,r,W(e,r))}return function(e,r){do t(e,r);while((r=G(r))&&!Y.call(r,e));return e}}():function(t,e){for(var r in e)t[r]=e[r];return t}),tt=t.MutationObserver||t.WebKitMutationObserver,et=(t.HTMLElement||t.Element||t.Node).prototype,rt=!Y.call(et,q),nt=rt?function(t){return 1===t.nodeType}:function(t){return Y.call(et,t)},at=rt&&[],ot=et.cloneNode,it=et.setAttribute,ut=et.removeAttribute,lt=e.createElement,st=tt&&{attributes:!0,characterData:!0,attributeOldValue:!0},ct=tt||function(t){pt=!1,q.removeEventListener(I,ct)},ft=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,10)},dt=!1,pt=!0,vt=!0,bt=!0;z||$?(T=function(t,e){Y.call(e,t)||p(t,e)},L=p):(T=function(t,e){t[C]||(t[C]=r(!0),p(t,e))},L=T),rt?(pt=!1,function(){var t=W(et,"addEventListener"),e=t.value,r=function(t){var e=new CustomEvent(I,{bubbles:!0});e.attrName=t,e.prevValue=this.getAttribute(t),e.newValue=null,e[B]=e.attrChange=2,ut.call(this,t),this.dispatchEvent(e)},n=function(t,e){var r=this.hasAttribute(t),n=r&&this.getAttribute(t),a=new CustomEvent(I,{bubbles:!0});it.call(this,t,e),a.attrName=t,a.prevValue=r?n:null,a.newValue=e,r?a[D]=a.attrChange=1:a[O]=a.attrChange=0,this.dispatchEvent(a)},a=function(t){var e,r=t.currentTarget,n=r[C],a=t.propertyName;n.hasOwnProperty(a)&&(n=n[a],e=new CustomEvent(I,{bubbles:!0}),e.attrName=n.name,e.prevValue=n.value||null,e.newValue=n.value=r[a]||null,null==e.prevValue?e[O]=e.attrChange=0:e[D]=e.attrChange=1,r.dispatchEvent(e))};t.value=function(t,o,i){t===I&&this.attributeChangedCallback&&this.setAttribute!==n&&(this[C]={className:{name:"class",value:this.className}},this.setAttribute=n,this.removeAttribute=r,e.call(this,"propertychange",a)),e.call(this,t,o,i)},j(et,"addEventListener",t)}()):tt||(q.addEventListener(I,ct),q.setAttribute(C,1),q.removeAttribute(C),pt&&(E=function(t){var e,r,n,a=this;if(a===t.target){e=a[C],a[C]=r=m(a);for(n in r){if(!(n in e))return A(0,a,n,e[n],r[n],O);if(r[n]!==e[n])return A(1,a,n,e[n],r[n],D)}for(n in e)if(!(n in r))return A(2,a,n,e[n],r[n],B)}},A=function(t,e,r,n,a,o){var i={attrChange:t,currentTarget:e,attrName:r,prevValue:n,newValue:a};i[o]=t,s(i)},m=function(t){for(var e,r,n={},a=t.attributes,o=0,i=a.length;i>o;o++)e=a[o],r=e.name,"setAttribute"!==r&&(n[r]=e.value);return n})),e[n]=function(t,r){if(n=t.toUpperCase(),dt||(dt=!0,tt?(x=function(t,e){function r(t,e){for(var r=0,n=t.length;n>r;e(t[r++]));}return new tt(function(n){for(var a,o,i,u=0,l=n.length;l>u;u++)a=n[u],"childList"===a.type?(r(a.addedNodes,t),r(a.removedNodes,e)):(o=a.target,bt&&o.attributeChangedCallback&&"style"!==a.attributeName&&(i=o.getAttribute(a.attributeName),i!==a.oldValue&&o.attributeChangedCallback(a.attributeName,a.oldValue,i)))})}(i(y),i(N)),x.observe(e,{childList:!0,subtree:!0})):(h=[],ft(function E(){for(;h.length;)h.shift().call(null,h.shift());ft(E)}),e.addEventListener("DOMNodeInserted",c(y)),e.addEventListener("DOMNodeRemoved",c(N))),e.addEventListener(P,f),e.addEventListener("readystatechange",f),e.createElement=function(t,r){var n=lt.apply(e,arguments),a=""+t,o=K.call(R,(r?k:S)+(r||a).toUpperCase()),i=o>-1;return r&&(n.setAttribute("is",r=r.toLowerCase()),i&&(i=l(a.toUpperCase(),r))),bt=!e.createElement.innerHTMLHelper,i&&L(n,_[o]),n},et.cloneNode=function(t){var e=ot.call(this,!!t),r=u(e);return r>-1&&L(e,_[r]),t&&o(e.querySelectorAll(U)),e}),-2<K.call(R,k+n)+K.call(R,S+n)&&b(t),!F.test(n)||-1<K.call(V,n))throw new Error("The type "+t+" is invalid");var n,s,d=function(){return v?e.createElement(g,n):e.createElement(g)},p=r||X,v=H.call(p,w),g=v?r[w].toUpperCase():n;return v&&-1<K.call(R,S+g)&&b(g),s=R.push((v?k:S)+n)-1,U=U.concat(U.length?",":"",v?g+'[is="'+t.toLowerCase()+'"]':g),d.prototype=_[s]=H.call(p,"prototype")?p.prototype:J(et),a(e.querySelectorAll(U),y),d}}}(window,document,Object,"registerElement")},function(t,e,r){const n=r(3),a=document.registerElement("aria-accordion",{prototype:Object.create(window.HTMLElement.prototype,{attachedCallback:{value:function(){n.setup(this)}},detachedCallback:{value:function(){n.teardown(this)}},selectTab:{value:function(t){return n.selectTab(this,t)}},selectTabByIndex:{value:function(t){return n.selectTabByIndex(this,t)}},selectTabByPanelId:{value:function(t){return n.selectTabByPanelId(this,t)}},tabs:{get:function(){return n.getTabs(this)}},panels:{get:function(){return n.getPanels(this)}}})});t.exports=a},function(t,e,r){const n=r(4),a=r(5),o=r(6),i=r(7),u="true",l="tablist",s=r(8),c=Array.prototype.slice,f=function(t){t.setAttribute("role",l),M(t);var e=x(t);if(e.forEach(i.setup),b(t));else{var r=p(t);r?h(t,r):m(t,0)}},d=function(t){S(t)},p=function(t){return t.querySelector(o.TAB+"[aria-expanded=true]")},v=function(t){return t.matches(o.TABLIST)?t:s(t,o.TABLIST)},b=function(t){return t.getAttribute(n.MULTISELECTABLE)===u},g=function(t,e){return e="string"==typeof e?e===u:!!e,t.setAttribute(n.MULTISELECTABLE,e)},h=function(t,e){b(t)||i.isExpanded(e)?i.toggle(e):x(t).forEach(function(t,r){i.toggle(t,t===e)})},E=function(t,e){var r=x(t).filter(function(t){return t.getAttribute(n.CONTROLS)===e})[0];if(!r)throw new Error('no panel with id: "'+e+'"');return h(t,r)},A=function(t,e){var r=x(t);return 0>e&&(e=r.length+e),r[e]},m=function(t,e){var r=A(t,e);if(!r)throw new Error("no tab at index "+e);return h(t,r)},x=function(t){return c.call(t.querySelectorAll(o.TAB))},T=function(t){return x(t).map(getPanel)},L=function(t,e){var r=v(t),n=x(r),a=n.indexOf(t)+e;return n[a]},C=function(t,e){var r=v(tab),n=T(r),a=n.indexOf(t)+e;return n[a]},y=a.delegate(o.TAB,function(t){var e=L(t.target,-1);e&&e.focus()}),N=a.delegate(o.TAB,function(t){var e=L(t.target,1);e&&e.focus()}),w=a.delegate(o.TABPANEL,function(t){var e=E(t.target);e&&e.focus()}),O=a.delegate(o.TABPANEL,function(t){var e=C(t.target,-1);if(e){var r=i.getTab(e);r.focus()}}),D=a.delegate(o.TAB,function(t){var e=A(this,0);e&&e.focus()}),B=a.delegate(o.TAB,function(t){var e=A(this,-1);e&&e.focus()}),I=a.delegate(o.TAB,function(t){h(this,t.target)}),P=a.keymap({ArrowLeft:y,ArrowRight:N,ArrowUp:y,ArrowDown:N,Home:D,End:B,"Alt+ArrowUp":w,"Control+PageUp":a.all(O,B),"Control+PageDown":a.all(w,D)}),M=function(t){t.addEventListener(a.CLICK,I),t.addEventListener(a.KEYDOWN,P)},S=function(t){t.removeEventListener(a.CLICK,I),t.removeEventListener(a.KEYDOWN,P)};t.exports.role=l,t.exports.setup=f,t.exports.teardown=d,t.exports.addEventListeners=M,t.exports.removeEventListeners=S,t.exports.isMultiselectable=b,t.exports.setMultiselectable=g,t.exports.getPanel=i.getTarget,t.exports.getPanels=T,t.exports.getTab=i.getTab,t.exports.getTabs=x,t.exports.getTabByIndex=A,t.exports.getTablist=v,t.exports.selectTab=h,t.exports.selectTabByIndex=m,t.exports.selectTabByPanelId=E},function(t,e){t.exports.CONTROLS="aria-controls",t.exports.TABINDEX="tabindex",t.exports.EXPANDED="aria-expanded",t.exports.SELECTED="aria-selected",t.exports.HIDDEN="aria-hidden",t.exports.DESCRIBED_BY="aria-describedby",t.exports.LABELED_BY="aria-labelledby",t.exports.MULTISELECTABLE="aria-multiselectable"},function(t,e){var r=Array.prototype.slice,n=function(t,e){return function(r){return r.target.matches(t)?e.apply(this,arguments):void 0}},a=function(){var t,e=r.call(arguments),n=e.length;return function(r){for(t=0;n>t&&e[t].call(this,r)!==!1;t++);}},o=function(t){return function(e){return t.call(this,e.target)}},i="+",u=["Alt","Control","Meta","Shift"],l="OS",s=function(t){var e=Object.keys(t).some(function(t){return t.indexOf(i)>-1});return function(r){var n=r.key;if(!(n===l||u.indexOf(n)>-1))return e&&u.forEach(function(t){r.getModifierState(t)&&(n=[t,n].join(i))}),n in t?t[n].call(this,r):void 0}};t.exports.all=a,t.exports.delegate=n,t.exports.keymap=s,t.exports.targetAdapter=o,t.exports.CLICK="click",t.exports.KEYDOWN="keydown"},function(t,e){t.exports.TAB="[role=tab]",t.exports.TABLIST="[role=tablist]",t.exports.TABPANEL="[role=tabpanel]"},function(t,e,r){const n=r(4),a=r(5),o=r(6),i=r(8),u="true",l="tab",s="aria-tab-",c=r(9),f=function(t,e){return"boolean"!=typeof e&&(e=!d(t)),p(t,e)},d=function(t){return t.getAttribute(n.EXPANDED)===u},p=function(t,e){return e=e&&"false"!==e,t.setAttribute(n.EXPANDED,e),v(t,e),e},v=function(t,e){"boolean"!=typeof e&&(e=d(t));var r=g(t);r.setAttribute(n.EXPANDED,e),r.setAttribute(n.HIDDEN,!e),r.setAttribute(n.TABINDEX,e?0:-1)},b=function(t){return document.querySelector('[aria-controls="'+t.id+'"]')},g=function(t){var e=t.getAttribute(n.CONTROLS);if(!e)throw new Error("expected an id in tab @aria-controls, but got: "+e);var r=document.getElementById(e);if(!r)throw new Error('no tab target found with @aria-controls id "'+e+'"');return r},h=function(t){var e=t.target.getAttribute("role")===l?t.target:i(t.target,o.TAB);f(e)},E=function(t){t.addEventListener(a.CLICK,h)},A=function(t){t.removeEventListener(a.CLICK,h)},m=function(t){t.setAttribute("role",l),t.hasAttribute(n.EXPANDED)||t.setAttribute(n.EXPANDED,"false"),v(t),E(t);var e=g(t);e.hasAttribute(n.LABELED_BY)||(t.id||(t.id=c(s)),e.setAttribute(n.LABELED_BY,t.id))},x=function(t){A(t)};t.exports.role=l,t.exports.setup=m,t.exports.teardown=x,t.exports.addEventListeners=E,t.exports.removeEventListeners=A,t.exports.getTab=b,t.exports.getTarget=g,t.exports.update=v,t.exports.toggle=f,t.exports.isExpanded=d},function(t,e){t.exports=function(t,e){for(;t=t.parentNode;){if(t===document)return;if(t.matches(e))return t}}},function(t,e){const r="aria-",n=36;var a=0;t.exports=function(t){return a+=n,(t||r)+(Date.now()+a).toString(n)}}]);
//# sourceMappingURL=aria-elements.js.map
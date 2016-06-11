!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){r(10).polyfill(),window.ariaTools={events:r(5),getAncestor:r(8),roles:r(11),uid:r(9)}},,,function(t,e,r){const n=r(4),o=r(5),a=r(6),i=r(7),s="true",u="tablist",c=r(8),l=Array.prototype.slice,f=function(t){t.setAttribute("role",u),O(t);var e=T(t);if(e.forEach(i.setup),A(t));else{var r=d(t);r?g(t,r):L(t,0)}},p=function(t){k(t)},d=function(t){return t.querySelector(a.TAB+"[aria-expanded=true]")},E=function(t){return t.matches(a.TABLIST)?t:c(t,a.TABLIST)},A=function(t){return t.getAttribute(n.MULTISELECTABLE)===s},x=function(t,e){return e="string"==typeof e?e===s:!!e,t.setAttribute(n.MULTISELECTABLE,e)},g=function(t,e){A(t)||i.isExpanded(e)?i.toggle(e):T(t).forEach(function(t,r){i.toggle(t,t===e)})},b=function(t,e){var r=T(t).filter(function(t){return t.getAttribute(n.CONTROLS)===e})[0];if(!r)throw new Error('no panel with id: "'+e+'"');return g(t,r)},v=function(t,e){var r=T(t);return 0>e&&(e=r.length+e),r[e]},L=function(t,e){var r=v(t,e);if(!r)throw new Error("no tab at index "+e);return g(t,r)},T=function(t){return l.call(t.querySelectorAll(a.TAB))},y=function(t){return T(t).map(getPanel)},h=function(t,e){var r=E(t),n=T(r),o=n.indexOf(t)+e;return n[o]},C=function(t,e){var r=E(tab),n=y(r),o=n.indexOf(t)+e;return n[o]},w=o.delegate(a.TAB,function(t){var e=h(t.target,-1);e&&e.focus()}),D=o.delegate(a.TAB,function(t){var e=h(t.target,1);e&&e.focus()}),B=o.delegate(a.TABPANEL,function(t){var e=b(t.target);e&&e.focus()}),m=o.delegate(a.TABPANEL,function(t){var e=C(t.target,-1);if(e){var r=i.getTab(e);r.focus()}}),S=o.delegate(a.TAB,function(t){var e=v(this,0);e&&e.focus()}),N=o.delegate(a.TAB,function(t){var e=v(this,-1);e&&e.focus()}),P=o.delegate(a.TAB,function(t){g(this,t.target)}),I=o.keymap({ArrowLeft:w,ArrowRight:D,ArrowUp:w,ArrowDown:D,Home:S,End:N,"Alt+ArrowUp":B,"Control+PageUp":o.all(m,N),"Control+PageDown":o.all(B,S)}),O=function(t){t.addEventListener(o.CLICK,P),t.addEventListener(o.KEYDOWN,I)},k=function(t){t.removeEventListener(o.CLICK,P),t.removeEventListener(o.KEYDOWN,I)};t.exports.role=u,t.exports.setup=f,t.exports.teardown=p,t.exports.addEventListeners=O,t.exports.removeEventListeners=k,t.exports.isMultiselectable=A,t.exports.setMultiselectable=x,t.exports.getPanel=i.getTarget,t.exports.getPanels=y,t.exports.getTab=i.getTab,t.exports.getTabs=T,t.exports.getTabByIndex=v,t.exports.getTablist=E,t.exports.selectTab=g,t.exports.selectTabByIndex=L,t.exports.selectTabByPanelId=b},function(t,e){t.exports.CONTROLS="aria-controls",t.exports.TABINDEX="tabindex",t.exports.EXPANDED="aria-expanded",t.exports.SELECTED="aria-selected",t.exports.HIDDEN="aria-hidden",t.exports.DESCRIBED_BY="aria-describedby",t.exports.LABELED_BY="aria-labelledby",t.exports.MULTISELECTABLE="aria-multiselectable"},function(t,e){var r=Array.prototype.slice,n=function(t,e){return function(r){return r.target.matches(t)?e.apply(this,arguments):void 0}},o=function(){var t,e=r.call(arguments),n=e.length;return function(r){for(t=0;n>t&&e[t].call(this,r)!==!1;t++);}},a=function(t){return function(e){return t.call(this,e.target)}},i="+",s=["Alt","Control","Meta","Shift"],u="OS",c=function(t){var e=Object.keys(t).some(function(t){return t.indexOf(i)>-1});return function(r){var n=r.key;if(!(n===u||s.indexOf(n)>-1))return e&&s.forEach(function(t){r.getModifierState(t)&&(n=[t,n].join(i))}),n in t?t[n].call(this,r):void 0}};t.exports.all=o,t.exports.delegate=n,t.exports.keymap=c,t.exports.targetAdapter=a,t.exports.CLICK="click",t.exports.KEYDOWN="keydown"},function(t,e){t.exports.TAB="[role=tab]",t.exports.TABLIST="[role=tablist]",t.exports.TABPANEL="[role=tabpanel]"},function(t,e,r){const n=r(4),o=r(5),a=r(6),i=r(8),s="true",u="tab",c="aria-tab-",l=r(9),f=function(t,e){return"boolean"!=typeof e&&(e=!p(t)),d(t,e)},p=function(t){return t.getAttribute(n.EXPANDED)===s},d=function(t,e){return e=e&&"false"!==e,t.setAttribute(n.EXPANDED,e),E(t,e),e},E=function(t,e){"boolean"!=typeof e&&(e=p(t));var r=x(t);r.setAttribute(n.EXPANDED,e),r.setAttribute(n.HIDDEN,!e),r.setAttribute(n.TABINDEX,e?0:-1)},A=function(t){return document.querySelector('[aria-controls="'+t.id+'"]')},x=function(t){var e=t.getAttribute(n.CONTROLS);if(!e)throw new Error("expected an id in tab @aria-controls, but got: "+e);var r=document.getElementById(e);if(!r)throw new Error('no tab target found with @aria-controls id "'+e+'"');return r},g=function(t){var e=t.target.getAttribute("role")===u?t.target:i(t.target,a.TAB);f(e)},b=function(t){t.addEventListener(o.CLICK,g)},v=function(t){t.removeEventListener(o.CLICK,g)},L=function(t){t.setAttribute("role",u),t.hasAttribute(n.EXPANDED)||t.setAttribute(n.EXPANDED,"false"),E(t),b(t);var e=x(t);e.hasAttribute(n.LABELED_BY)||(t.id||(t.id=l(c)),e.setAttribute(n.LABELED_BY,t.id))},T=function(t){v(t)};t.exports.role=u,t.exports.setup=L,t.exports.teardown=T,t.exports.addEventListeners=b,t.exports.removeEventListeners=v,t.exports.getTab=A,t.exports.getTarget=x,t.exports.update=E,t.exports.toggle=f,t.exports.isExpanded=p},function(t,e){t.exports=function(t,e){for(;t=t.parentNode;){if(t===document)return;if(t.matches(e))return t}}},function(t,e){const r="aria-",n=36;var o=0;t.exports=function(t){return o+=n,(t||r)+(Date.now()+o).toString(n)}},function(t,e,r){var n,o;!function(){function a(){if(!("KeyboardEvent"in window)||"key"in KeyboardEvent.prototype)return!1;var t={get:function(t){var e=s.keys[this.which||this.keyCode];return Array.isArray(e)&&(e=e[+this.shiftKey]),e}};return Object.defineProperty(KeyboardEvent.prototype,"key",t),t}var i,s={polyfill:a,keys:{3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"}};for(i=1;25>i;i++)s.keys[111+i]="F"+i;var u="";for(i=65;91>i;i++)u=String.fromCharCode(i),s.keys[i]=[u.toLowerCase(),u.toUpperCase()];n=s,o="function"==typeof n?n.call(e,r,e,t):n,!(void 0!==o&&(t.exports=o))}()},function(t,e,r){t.exports={tab:r(7),tablist:r(3)}}]);
//# sourceMappingURL=aria-tools.js.map
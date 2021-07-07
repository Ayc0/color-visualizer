function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequiree5a9;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){let e=i[t];delete i[t];let r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(t,e){i[t]=e},e.parcelRequiree5a9=r);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol();class l{constructor(t,e){if(e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return o&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const a=new Map,h=t=>{let e=a.get(t);return void 0===e&&a.set(t,e=new l(t,s)),e},c=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(t instanceof l)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return h(n)},d=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>h("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u,p,v,f;const m={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},g=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g};class b extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const i=this.Πp(n,e);void 0!==i&&(this.Πm.set(i,n),t.push(i))})),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static"Πp"(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return n=e,i=this.constructor.elementStyles,o?n.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,n.appendChild(e)})),e;var n,i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,n){this.K(t,n)}"Πj"(t,e,n=y){var i,r;const o=this.constructor.Πp(t,n);if(void 0!==o&&!0===n.reflect){const s=(null!==(r=null===(i=n.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:m.toAttribute)(e,n.type);this.Πh=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this.Πh=null}}K(t,e){var n,i,r;const o=this.constructor,s=o.Πm.get(t);if(void 0!==s&&this.Πh!==s){const t=o.getPropertyOptions(s),l=t.converter,a=null!==(r=null!==(i=null===(n=l)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==r?r:m.fromAttribute;this.Πh=s,this[s]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===n.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const n=this.L;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(n)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w,x,$,k;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null===(p=(u=globalThis).reactiveElementPlatformSupport)||void 0===p||p.call(u,{ReactiveElement:b}),(null!==(v=(f=globalThis).reactiveElementVersions)&&void 0!==v?v:f.reactiveElementVersions=[]).push("1.0.0-rc.2");const C=globalThis.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,M="?"+P,N=`<${M}>`,R=document,O=(t="")=>R.createComment(t),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,H=t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,I=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,L=/'/g,B=/"/g,z=/^(?:script|style|textarea)$/i,D=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),_=D(1),q=(D(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),V=new WeakMap,J=R.createTreeWalker(R,129,null,!1),G=(t,e)=>{const n=t.length-1,i=[];let r,o=2===e?"<svg>":"",s=T;for(let e=0;e<n;e++){const n=t[e];let l,a,h=-1,c=0;for(;c<n.length&&(s.lastIndex=c,a=s.exec(n),null!==a);)c=s.lastIndex,s===T?"!--"===a[1]?s=A:void 0!==a[1]?s=I:void 0!==a[2]?(z.test(a[2])&&(r=RegExp("</"+a[2],"g")),s=j):void 0!==a[3]&&(s=j):s===j?">"===a[0]?(s=null!=r?r:T,h=-1):void 0===a[1]?h=-2:(h=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?j:'"'===a[3]?B:L):s===B||s===L?s=j:s===A||s===I?s=T:(s=j,r=void 0);const d=s===j&&t[e+1].startsWith("/>")?" ":"";o+=s===T?n+N:h>=0?(i.push(l),n.slice(0,h)+"$lit$"+n.slice(h)+P+d):n+P+(-2===h?(i.push(void 0),e):d)}const l=o+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==S?S.createHTML(l):l,i]};class K{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,o=0;const s=t.length-1,l=this.parts,[a,h]=G(t,e);if(this.el=K.createElement(a,n),J.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=J.nextNode())&&l.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(P)){const n=h[o++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+"$lit$").split(P),e=/([.?@])?(.*)/.exec(n);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?tt:"@"===e[1]?et:Y})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(z.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=C?C.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],O()),J.nextNode(),l.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===M)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)l.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const n=R.createElement("template");return n.innerHTML=t,n}}function F(t,e,n=t,i){var r,o,s,l;if(e===q)return e;let a=void 0!==i?null===(r=n.Σi)||void 0===r?void 0:r[i]:n.Σo;const h=U(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a.O)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,n,i)),void 0!==i?(null!==(s=(l=n).Σi)&&void 0!==s?s:l.Σi=[])[i]=a:n.Σo=a),void 0!==a&&(e=F(t,a.S(t,e.values),a,i)),e}class Z{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:n},parts:i}=this.D,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:R).importNode(n,!0);J.currentNode=r;let o=J.nextNode(),s=0,l=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new X(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new nt(o,this,t)),this.l.push(e),a=i[++l]}s!==(null==a?void 0:a.index)&&(o=J.nextNode(),s++)}return r}v(t){let e=0;for(const n of this.l)void 0!==n&&(void 0!==n.strings?(n.I(t,n,e),e+=n.strings.length-2):n.I(t[e])),e++}}class X{constructor(t,e,n,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=n,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=F(this,t,e),U(t)?t===W||null==t||""===t?(this.H!==W&&this.R(),this.H=W):t!==this.H&&t!==q&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):H(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(R.createTextNode(t)),this.H=t}_(t){var e;const{values:n,_$litType$:i}=t,r="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=K.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===r)this.H.v(n);else{const t=new Z(r,this),e=t.u(this.options);t.v(n),this.$(e),this.H=t}}C(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}g(t){E(this.H)||(this.H=[],this.R());const e=this.H;let n,i=0;for(const r of t)i===e.length?e.push(n=new X(this.k(O()),this.k(O()),this,this.options)):n=e[i],n.I(r),i++;i<e.length&&(this.R(n&&n.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var n;for(null===(n=this.P)||void 0===n||n.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class Y{constructor(t,e,n,i,r){this.type=1,this.H=W,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this.H=Array(n.length-1).fill(W),this.strings=n):this.H=W}get tagName(){return this.element.tagName}I(t,e=this,n,i){const r=this.strings;let o=!1;if(void 0===r)t=F(this,t,e,0),o=!U(t)||t!==this.H&&t!==q,o&&(this.H=t);else{const i=t;let s,l;for(t=r[0],s=0;s<r.length-1;s++)l=F(this,i[n+s],e,s),l===q&&(l=this.H[s]),o||(o=!U(l)||l!==this.H[s]),l===W?t=W:t!==W&&(t+=(null!=l?l:"")+r[s+1]),this.H[s]=l}o&&!i&&this.W(t)}W(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends Y{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===W?void 0:t}}class tt extends Y{constructor(){super(...arguments),this.type=4}W(t){t&&t!==W?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class et extends Y{constructor(){super(...arguments),this.type=5}I(t,e=this){var n;if((t=null!==(n=F(this,t,e,0))&&void 0!==n?n:W)===q)return;const i=this.H,r=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,n;"function"==typeof this.H?this.H.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this.H.handleEvent(t)}}class nt{constructor(t,e,n){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=n}I(t){F(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,rt,ot,st,lt,at;null===(x=(w=globalThis).litHtmlPlatformSupport)||void 0===x||x.call(w,K,X),(null!==($=(k=globalThis).litHtmlVersions)&&void 0!==$?$:k.litHtmlVersions=[]).push("2.0.0-rc.3");(null!==(it=(at=globalThis).litElementVersions)&&void 0!==it?it:at.litElementVersions=[]).push("3.0.0-rc.2");class ht extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();super.update(t),this.Φt=((t,e,n)=>{var i,r;const o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new X(e.insertBefore(O(),t),t,void 0,n)}return s.I(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return q}}ht.finalized=!0,ht._$litElement$=!0,null===(ot=(rt=globalThis).litElementHydrateSupport)||void 0===ot||ot.call(rt,{LitElement:ht}),null===(lt=(st=globalThis).litElementPlatformSupport)||void 0===lt||lt.call(st,{LitElement:ht});const ct=t=>e=>{return"function"==typeof e?(n=t,i=e,window.customElements.define(n,i),i):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n,i},dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,n)=>{return void 0!==n?(i=t,r=n,void e.constructor.createProperty(r,i)):dt(t,e);var i,r}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return ut({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=({finisher:t,descriptor:e})=>(n,i)=>{var r;if(void 0===i){const i=null!==(r=n.originalKey)&&void 0!==r?r:n.key,o=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(n.key)}:{...n,key:i};return null!=t&&(o.finisher=function(e){t(e,i)}),o}{const r=n.constructor;void 0!==e&&Object.defineProperty(n,i,e(i)),null==t||t(r,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ft(t,e){return vt({descriptor:n=>{const i={get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof n?Symbol():"__"+n;i.get=function(){var n;return void 0===this[e]&&(this[e]=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(t)),this[e]}}return i}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt=Element.prototype;mt.msMatchesSelector||mt.webkitMatchesSelector;var gt=r("iGikD");function yt(t,e){void 0===e&&(e=function(t){return t});var n=new Set,i=e(t),r={cancelled:!1},o=function(t,o){var s=e(t);if(!(i===s||Number.isNaN(i)&&Number.isNaN(s))){r.cancelled=!0;var l={cancelled:!1};r=l,i=s,n.forEach((function(t){l.cancelled||t(i,o)}))}};function s(t,e){return void 0===e&&(e=new WeakSet),0===arguments.length?i:Promise.resolve("function"==typeof t?t(i):t).then((function(t){return e.has(s)||(e.add(s),o(t,e)),i}))}return s.on=function(t){n.add(t);var e=function(){return n.delete(t)};return Object.defineProperty(e,"listening",{get:function(){return n.has(t)}}),e},s.clear=function(){return n.clear()},s}const bt=(gt=r("iGikD")).lch(57,110,283.8),wt=gt.lab(bt),xt=gt.rgb(bt.formatHex()),$t=gt.hsl(bt.formatHex()),kt=yt(bt,(t=>(t.l=Lt(0,t.l,100),t.c=Lt(0,t.c,132),t.h=Lt(0,t.h,360),t))),Ct=yt(wt,(t=>(t.l=Lt(0,t.l,100),t.a=Lt(-128,t.a,127),t.b=Lt(-128,t.b,127),t))),St=yt(xt,(t=>(t.r=Lt(0,t.r,255),t.g=Lt(0,t.g,255),t.b=Lt(0,t.b,255),t))),Pt=yt($t,(t=>(t.h=Lt(0,t.h,360),t.s=Lt(0,t.s,1),t.l=Lt(0,t.l,1),t))),Mt=yt(bt.l,(t=>Lt(0,t,100))),Nt=yt(bt.c,(t=>Lt(0,t,132))),Rt=yt(bt.h,(t=>Lt(0,t,360))),Ot=yt(wt.a,(t=>Lt(-128,t,127))),Ut=yt(wt.b,(t=>Lt(-128,t,127))),Et=yt(xt.r,(t=>Lt(0,t,255))),Ht=yt(xt.g,(t=>Lt(0,t,255))),Tt=yt(xt.b,(t=>Lt(0,t,255))),At=yt($t.h,(t=>Lt(0,t,360))),It=yt($t.s,(t=>Lt(0,t,1))),jt=yt($t.l,(t=>Lt(0,t,1)));function Lt(t,e,n){return Math.min(n,Math.max(t,e||0))}function Bt(t,e){const n=gt.lch(e);return n.l!==t.l||n.c!==t.c||n.h!==t.h?n:t}function zt(t,e){const n=gt.lab(e);return n.l!==t.l||n.a!==t.a||n.b!==t.b?n:t}function Dt(t,e){const n=gt.rgb(e.formatHex());return n.r!==t.r||n.g!==t.g||n.b!==t.b?n:t}function _t(t,e){const n=gt.hsl(e.formatHex());return n.h!==t.h||n.s!==t.s||n.l!==t.l?n:t}kt.on(((t,e)=>{Mt(t.l,e),Nt(t.c,e),Rt(t.h,e),Ct((e=>zt(e,t)),e),St((e=>Dt(e,t)),e),Pt((e=>_t(e,t)),e)})),Ct.on(((t,e)=>{Mt(t.l,e),Ot(t.a,e),Ut(t.b,e),kt((e=>Bt(e,t)),e),St((e=>Dt(e,t)),e),Pt((e=>_t(e,t)),e)})),St.on(((t,e)=>{Et(t.r,e),Tt(t.b,e),Ht(t.g,e),kt((e=>Bt(e,t)),e),Ct((e=>zt(e,t)),e),Pt((e=>_t(e,t)),e)})),Pt.on(((t,e)=>{At(t.h,e),It(t.s,e),jt(t.l,e),kt((e=>Bt(e,t)),e),Ct((e=>zt(e,t)),e),St((e=>Dt(e,t)),e)})),Mt.on(((t,e)=>{kt((e=>{const n=e.copy();return n.l=t,n}),e),Ct((e=>{const n=e.copy();return n.l=t,n}),e)})),Nt.on(((t,e)=>{kt((e=>{const n=e.copy();return n.c=t,n}),e)})),Rt.on(((t,e)=>{kt((e=>{const n=e.copy();return n.h=t,n}),e)})),Ot.on(((t,e)=>{Ct((e=>{const n=e.copy();return n.a=t,n}),e)})),Ut.on(((t,e)=>{Ct((e=>{const n=e.copy();return n.b=t,n}),e)})),Et.on(((t,e)=>{St((e=>{const n=e.copy();return n.r=t,n}),e)})),Ht.on(((t,e)=>{St((e=>{const n=e.copy();return n.g=t,n}),e)})),Tt.on(((t,e)=>{St((e=>{const n=e.copy();return n.b=t,n}),e)})),At.on(((t,e)=>{Pt((e=>{const n=e.copy();return n.h=t,n}),e)})),It.on(((t,e)=>{Pt((e=>{const n=e.copy();return n.s=t,n}),e)})),jt.on(((t,e)=>{Pt((e=>{const n=e.copy();return n.l=t,n}),e)})),r.register("4NDvj",(function(t,e){t.exports=r("kqdCP")("generate-colors.worker.0bf242fc.js",!0)})),r.register("kqdCP",(function(t,e){var n=r("jAAjo");t.exports=function(t,e){var i=n.getBundleURL()+t;if(n.getOrigin(i)===self.location.origin)return i;{let t=e?"import "+JSON.stringify(i)+";":"importScripts("+JSON.stringify(i)+");";return URL.createObjectURL(new Blob([t],{type:"application/javascript"}))}}})),r.register("jAAjo",(function(e,n){var i,r;t(e.exports,"getOrigin",(()=>i),(t=>i=t)),t(e.exports,"getBundleURL",(()=>r),(t=>r=t));var o=null;function s(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(){return o||(o=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return s(t[0])}return"/"}()),o},i=function(t){let e=(""+t).match(/(https?|file|ftp):\/\/[^/]+/);if(!e)throw new Error("Origin not found");return e[0]}}));const qt=()=>{let t;return(e,n,i)=>{const o=new Worker(r("4NDvj"),{type:"module"});return t&&t.terminate(),t=o,new Promise((t=>{o.onmessage=e=>{t(e.data.slice())},o.postMessage([e,n,i])}))}};var Wt=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Vt=class extends ht{constructor(){super(),this.width=500,this.height=300,this.isPressed=!1,this.generateColors=qt(),this.updateMarkerPosition=()=>{const t=this.marker,e=this.canvas;if(!t||!e)return;const n=e.getBoundingClientRect(),i=Math.floor(kt().c/132*n.width),r=Math.floor((1-kt().l/100)*n.height);t.style.cssText=`transform: translate(calc(${i}px - 50%), calc(${r}px - 50%))`},this.updateCanvasColors=()=>{const t=this.canvas;if(!t)return;const e=t.getContext("2d");e&&this.generateColors(kt().h,this.width,this.height).then((t=>{const n=new ImageData(t,this.width,this.height);e.putImageData(n,0,0)}))},Rt.on((()=>this.updateCanvasColors())),kt.on((()=>this.updateMarkerPosition()))}onPositionChange(t){const e=this.canvas;if(!e||!this.isPressed)return;const n=e.getBoundingClientRect(),i=Math.min(Math.max(t.clientX-n.x,0),n.width),r=Math.min(Math.max(t.clientY-n.y,0),n.height),o=gt.lch(Math.floor(100*(1-r/n.height)),Math.floor(i/n.width*132),kt().h);kt(o)}firstUpdated(){this.updateMarkerPosition()}updated(t){(t.has("width")||t.has("height"))&&this.updateCanvasColors()}render(){return _`\n      <div class="wrapper">\n        <canvas\n          @pointerdown=${t=>{t.currentTarget.setPointerCapture(t.pointerId),this.isPressed=!0,this.onPositionChange(t)}}\n          @pointermove=${this.onPositionChange}\n          @pointerup=${t=>{t.currentTarget.releasePointerCapture(t.pointerId),this.isPressed=!1}}\n          width="${this.width}px"\n          height="${this.height}px"\n        ></canvas>\n        <div class="marker"></div>\n      </div>\n    `}};var Jt;Vt.styles=c`\n    :host canvas {\n      border-radius: 5px;\n      border: 1px solid grey;\n      max-width: calc(100vw - 4em);\n      /* Avoid making the page scroll on mobile when we are pressing on it */\n      touch-action: none;\n    }\n\n    :host .wrapper {\n      position: relative;\n    }\n\n    :host .marker {\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      pointer-events: none;\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      border: 1px solid var(--contrast);\n      z-index: 1;\n    }\n  `,Wt([ut({type:Number})],Vt.prototype,"width",void 0),Wt([ut({type:Number})],Vt.prototype,"height",void 0),Wt([ft("canvas")],Vt.prototype,"canvas",void 0),Wt([ft(".marker")],Vt.prototype,"marker",void 0),Wt([(Jt={passive:!0},vt({finisher:(t,e)=>{Object.assign(t.prototype[e],Jt)}}))],Vt.prototype,"onPositionChange",null),Vt=Wt([ct("lch-paint")],Vt);gt=r("iGikD");var Gt=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};const Kt=c`\n  width: ${14}px;\n  height: ${22}px;\n  background: #00000000;\n  box-shadow: 0 0 0 ${1}px var(--black),\n    inset 0 0 0 ${1}px var(--white);\n  border-radius: 3px;\n  cursor: pointer;\n`,Ft=(c`var(--track-background-hover, #bbbbbb)`,c`var(--track-background-focus, #cbcbcb)`,c`\n  background: ${c`var(--track-background, #9e9e9e)`};\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  box-shadow: 0 0 0 ${1}px ${c`var(--contrast)`};\n  border-radius: 3px;\n  width: 100%;\n  height: ${20}px;\n  cursor: pointer;\n`);let Zt=class extends ht{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.referenceColor=gt.rgb(0,0,0),this.valueToModify="h",this.getBackgroundRange=()=>{clearTimeout(this.throttleId);const t=this.referenceColor.copy(),e={...t};delete e[this.valueToModify];const n=JSON.stringify(e);if(this.prevBackgroundRange){if(this.prevColor===n)return this.prevBackgroundRange;const t=performance.now();if(null!=this.timePrevOp&&t-this.timePrevOp<100)return this.throttleId=window.setTimeout((()=>this.requestUpdate()),100),this.prevBackgroundRange}const i=Math.round((this.max-this.min)/this.step),r=new Uint8ClampedArray(4*i);for(let e=0;e<=i;e++){t[this.valueToModify]=e*this.step;const n=t.rgb(),i=4*e;r[i+0]=n.r,r[i+1]=n.g,r[i+2]=n.b,r[i+3]=255}const o=document.createElement("canvas");o.width=i,o.height=1;const s=new ImageData(r,i,1);o.getContext("2d",{alpha:!1}).putImageData(s,0,0);const l=o.toDataURL();return this.prevBackgroundRange=l,this.prevColor=n,this.timePrevOp=performance.now(),l}}render(){return _`<input\n      .min=${this.min}\n      .max=${this.max}\n      .step=${this.step}\n      .value=${this.value}\n      style="--track-background: url(${this.getBackgroundRange()})"\n      type="range"\n      @input=${t=>{const e=t.target,n=Number(e.value);this.value=Number.isNaN(n)?void 0:n}}\n    />`}};Zt.styles=c`\n    :host input[type="range"] {\n      width: 100%;\n      margin: 0.5px 0;\n      background-color: transparent;\n      -webkit-appearance: none;\n    }\n\n    :host input[type="range"]::-webkit-slider-runnable-track {\n      ${Ft}\n    }\n    :host input[type="range"]::-moz-range-track {\n      ${Ft}\n    }\n\n    :host input[type="range"]::-moz-range-thumb {\n      ${Kt}\n    }\n    :host input[type="range"]::-webkit-slider-thumb {\n      ${Kt}\n      margin-top: -${1}px;\n      -webkit-appearance: none;\n    }\n\n    :host input[type="range"]:focus {\n      outline: none;\n    }\n\n    :host input[type="range"]:hover::-moz-range-thumb {\n      background: #00000044;\n    }\n    :host input[type="range"]:hover::-webkit-slider-thumb {\n      background: #00000044;\n    }\n    :host input[type="range"]:focus-visible::-moz-range-thumb {\n      outline: -moz-mac-focusring auto 1px;\n      outline-offset: 1px;\n    }\n    :host input[type="range"]:focus-visible::-webkit-slider-thumb {\n      outline: -webkit-focus-ring-color auto 1px;\n      outline-offset: 1px;\n    }\n  `,Gt([ut({type:Number,reflect:!0})],Zt.prototype,"min",void 0),Gt([ut({type:Number,reflect:!0})],Zt.prototype,"max",void 0),Gt([ut({type:Number,reflect:!0})],Zt.prototype,"step",void 0),Gt([ut({type:Number,reflect:!0})],Zt.prototype,"value",void 0),Gt([pt()],Zt.prototype,"referenceColor",void 0),Gt([pt()],Zt.prototype,"valueToModify",void 0),Zt=Gt([ct("color-slider")],Zt);class Xt{constructor(t,e){this.host=t,t.addController(this),this.cup=e,this.listener=e.on((()=>this.host.requestUpdate()))}hostDisconnected(){this.listener()}}var Yt=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};function Qt(t){return Math.floor(t).toString(16).padStart(2,"0")}function te(t,e=2){const n=10**e;return Math.round(t*n)/n}const ee=window.matchMedia("(max-width: 595px)");let ne=class extends ht{constructor(){super(),this.lchController=new Xt(this,kt),this.isMobile=ee.matches,this.viewListener=t=>{this.isMobile=t.matches},ee.addListener(this.viewListener)}disconnectedCallback(){ee.removeListener(this.viewListener)}renderInput({label:t,shortName:e=t[0].toUpperCase(),id:n=t[0],cup:i,min:r,max:o,step:s=1,mod:l=(t=>t),unit:a="",referenceColor:h}){return _`\n      <label for="lab-${n}">${e} (${t})</label>\n      <color-slider\n        .id="lab-${n}"\n        .min=${r}\n        .max=${o}\n        .step=${s}\n        .value=${i()}\n        .referenceColor=${h}\n        .valueToModify=${t[0]}\n        @input=${t=>{const e=t.target,n=(s=e.value||0,Math.min(o,Math.max(r,s)));var s;e.value=n,i(n)}}\n      ></color-slider>\n      <span\n        >${te(l(i()),Math.floor(-Math.log(s)/Math.log(10)))}${a}</span\n      >\n    `}willUpdate(t){const e=new Set(t.keys());e.delete("luminance"),e.delete("chroma"),e.delete("hue"),0===e.size&&kt()}render(){const t=`#${Qt(Et())}${Qt(Ht())}${Qt(Tt())}`;return _`\n      <div class="wrapper">\n        <details open>\n          <summary><h2>LCH</h2></summary>\n          <div class="group">\n            ${this.renderInput({label:"luminance",cup:Mt,min:0,max:100,unit:"º",referenceColor:kt()})}\n            ${this.renderInput({label:"chroma",cup:Nt,min:0,max:132,referenceColor:kt()})}\n            ${this.renderInput({label:"hue",cup:Rt,min:0,max:360,referenceColor:kt()})}\n\n            <pre class="code-wrapper"><code class="code">LCH(${te(Mt())}% ${te(Nt())} ${te(Rt())})</code></pre>\n          </div>\n        </details>\n\n        <details ?open=${!this.isMobile}>\n          <summary><h2>Lab</h2></summary>\n          <div class="group">\n            ${this.renderInput({label:"luminance",cup:Mt,min:0,max:100,unit:"º",id:"L2",referenceColor:Ct()})}\n            ${this.renderInput({label:"a",shortName:"a",cup:Ot,min:-128,max:127,referenceColor:Ct()})}\n            ${this.renderInput({label:"b",shortName:"b",cup:Ut,min:-128,max:127,referenceColor:Ct()})}\n\n            <pre class="code-wrapper"><code class='code'>Lab(${te(Mt())}% ${te(Ot())} ${te(Ut())})</code></pre>\n          </div>\n        </details>\n\n        <details ?open=${!this.isMobile}>\n          <summary><h2>RGB</h2></summary>\n          <div class="group">\n            ${this.renderInput({label:"red",cup:Et,min:0,max:255,referenceColor:St()})}\n            ${this.renderInput({label:"green",cup:Ht,min:0,max:255,referenceColor:St()})}\n            ${this.renderInput({label:"blue",cup:Tt,min:0,max:255,referenceColor:St()})}\n\n            <pre class="code-wrapper"><code class='code'>rgb(${te(Et())} ${te(Ht())} ${te(Tt())})</code>\n<code class='code'>${t}</code></pre>\n          </div>\n        </details>\n\n        <details ?open=${!this.isMobile}>\n          <summary><h2>HSL</h2></summary>\n          <div class="group">\n            ${this.renderInput({label:"hue",cup:At,min:0,max:360,referenceColor:Pt()})}\n            ${this.renderInput({label:"saturation",cup:It,min:0,step:.01,max:1,mod:t=>100*t,unit:"%",referenceColor:Pt()})}\n            ${this.renderInput({label:"lightness",cup:jt,min:0,step:.01,max:1,mod:t=>100*t,unit:"%",referenceColor:Pt()})}\n            <pre class="code-wrapper"><code class='code'>hsl(${te(At())} ${100*te(It())}% ${te(100*jt())}%)</code></pre>\n          </div>\n        </details>\n      </div>\n    `}};ne.styles=c`\n    :host label {\n      display: block;\n    }\n\n    :host .wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      row-gap: 1em;\n      column-gap: 2em;\n      margin-bottom: 1em;\n    }\n    @media (max-width: 595px) {\n      :host .wrapper {\n        grid-template-columns: 1fr;\n      }\n    }\n\n    :host .group {\n      display: grid;\n      grid-template-columns: 1fr 5ch;\n      grid-template-rows: repeat(6, auto) 1fr;\n      column-gap: 1em;\n      row-gap: 0.5em;\n\n      margin-top: 1em;\n    }\n\n    :host h2 {\n      display: inline-block;\n      margin: 0;\n    }\n\n    :host label {\n      grid-column: span 2;\n    }\n\n    :host color-slider {\n      /* Avoid making the page scroll on mobile when we are pressing on it */\n      touch-action: none;\n    }\n\n    :host .code-wrapper {\n      grid-column: span 2;\n    }\n    :host .code {\n      font-family: "Fira Code", monospace;\n    }\n  `,Yt([pt()],ne.prototype,"isMobile",void 0),ne=Yt([ct("color-picker")],ne),document.documentElement.style.backgroundColor=St().formatHex(),St.on((t=>{document.documentElement.style.backgroundColor=t.formatHex()}));
//# sourceMappingURL=index.9ad680c4.js.map

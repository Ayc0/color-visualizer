var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,r=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,n=(t,n)=>{for(var o in n||(n={}))e.call(n,o)&&r(t,o,n[o]);if(i)for(var o of i(n))s.call(n,o)&&r(t,o,n[o]);return t};import{l as o,a as h,r as l}from"./lch-vendors.cd2c9a8e.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var a,c,d,u;!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(i){const s=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((i,n)=>{const o=new URL(t,s);if(self[e].moduleMap[o])return i(self[e].moduleMap[o]);const h=new Blob([`import * as m from '${o}';`,`${e}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(h),onerror(){n(new Error(`Failed to import: ${t}`)),r(l)},onload(){i(self[e].moduleMap[o]),r(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("/color-visualizer/assets/");const p=globalThis.trustedTypes,m=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,f="?"+v,g=`<${f}>`,y=document,b=(t="")=>y.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,C=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,H=/"/g,E=/^(?:script|style|textarea)$/i,L=(N=1,(t,...e)=>({_$litType$:N,strings:t,values:e})),R=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),O=new WeakMap,M=y.createTreeWalker(y,129,null,!1);var N;class A{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,h=this.parts,[l,a]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=$;for(let l=0;l<i;l++){const e=t[l];let i,h,a=-1,c=0;for(;c<e.length&&(o.lastIndex=c,h=o.exec(e),null!==h);)c=o.lastIndex,o===$?"!--"===h[1]?o=S:void 0!==h[1]?o=C:void 0!==h[2]?(E.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=P):void 0!==h[3]&&(o=P):o===P?">"===h[0]?(o=null!=r?r:$,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,i=h[1],o=void 0===h[3]?P:'"'===h[3]?H:k):o===H||o===k?o=P:o===S||o===C?o=$:(o=P,r=void 0);const d=o===P&&t[l+1].startsWith("/>")?" ":"";n+=o===$?e+g:a>=0?(s.push(i),e.slice(0,a)+"$lit$"+e.slice(a)+v+d):e+v+(-2===a?(s.push(void 0),l):d)}const h=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(h):h,s]})(t,e);if(this.el=A.createElement(l,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=M.nextNode())&&h.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const i=a[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(i);h.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?z:"?"===e[1]?_:"@"===e[1]?F:I})}else h.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(E.test(s.tagName)){const t=s.textContent.split(v),e=t.length-1;if(e>0){s.textContent=p?p.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],b()),M.nextNode(),h.push({type:2,index:++r});s.append(t[e],b())}}}else if(8===s.nodeType)if(s.data===f)h.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(v,t+1));)h.push({type:7,index:r}),t+=v.length-1}r++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function T(t,e,i=t,s){var r,n,o,h;if(e===R)return e;let l=void 0!==s?null===(r=i.Σi)||void 0===r?void 0:r[s]:i.Σo;const a=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(n=null==l?void 0:l.O)||void 0===n||n.call(l,!1),void 0===a?l=void 0:(l=new a(t),l.T(t,i,s)),void 0!==s?(null!==(o=(h=i).Σi)&&void 0!==o?o:h.Σi=[])[s]=l:i.Σo=l),void 0!==l&&(e=T(t,l.S(t,e.values),l,s)),e}class B{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(i,!0);M.currentNode=r;let n=M.nextNode(),o=0,h=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new j(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new D(n,this,t)),this.l.push(e),l=s[++h]}o!==(null==l?void 0:l.index)&&(n=M.nextNode(),o++)}return r}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class j{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=T(this,t,e),w(t)?t===U||null==t||""===t?(this.H!==U&&this.R(),this.H=U):t!==this.H&&t!==R&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(y.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=A.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===r)this.H.v(i);else{const t=new B(r,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new A(t)),e}g(t){x(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const r of t)s===e.length?e.push(i=new j(this.k(b()),this.k(b()),this,this.options)):i=e[s],i.I(r),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class I{constructor(t,e,i,s,r){this.type=1,this.H=U,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(U),this.strings=i):this.H=U}get tagName(){return this.element.tagName}I(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=T(this,t,e,0),n=!w(t)||t!==this.H&&t!==R,n&&(this.H=t);else{const s=t;let o,h;for(t=r[0],o=0;o<r.length-1;o++)h=T(this,s[i+o],e,o),h===R&&(h=this.H[o]),n||(n=!w(h)||h!==this.H[o]),h===U?t=U:t!==U&&(t+=(null!=h?h:"")+r[o+1]),this.H[o]=h}n&&!s&&this.W(t)}W(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class z extends I{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===U?void 0:t}}class _ extends I{constructor(){super(...arguments),this.type=4}W(t){t&&t!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class F extends I{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=T(this,t,e,0))&&void 0!==i?i:U)===R)return;const s=this.H,r=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class D{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){T(this,t)}}null===(c=(a=globalThis).litHtmlPlatformSupport)||void 0===c||c.call(a,A,j),(null!==(d=(u=globalThis).litHtmlVersions)&&void 0!==d?d:u.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol();class V{constructor(t,e){if(e!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return G&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const q=new Map,K=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof V)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);let s=q.get(i);return void 0===s&&q.set(i,s=new V(i,W)),s},J=G?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new V(t+"",W))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var Z,X,Y,Q;const tt={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},et=(t,e)=>e!==t&&(e==e||t==t),it={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:et};class st extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||it}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(J(t))}else void 0!==t&&e.push(J(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,s=this.constructor.elementStyles,G?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,i.appendChild(e)})),e;var i,s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=it){var s,r;const n=this.constructor.Πp(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:tt.toAttribute)(e,i.type);this.Πh=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this.Πh=null}}K(t,e){var i,s,r;const n=this.constructor,o=n.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=n.getPropertyOptions(o),h=t.converter,l=null!==(r=null!==(s=null===(i=h)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof h?h:null)&&void 0!==r?r:tt.fromAttribute;this.Πh=o,this[o]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||et)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(s){throw e=!1,this.Π$(),s}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var rt,nt,ot,ht,lt,at;st.finalized=!0,st.shadowRootOptions={mode:"open"},null===(X=(Z=globalThis).reactiveElementPlatformSupport)||void 0===X||X.call(Z,{ReactiveElement:st}),(null!==(Y=(Q=globalThis).reactiveElementVersions)&&void 0!==Y?Y:Q.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(rt=(at=globalThis).litElementVersions)&&void 0!==rt?rt:at.litElementVersions=[]).push("3.0.0-rc.1");class ct extends st{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new j(e.insertBefore(b(),t),t,void 0,i)}return o.I(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return R}}ct.finalized=!0,ct._$litElement$=!0,null===(ot=(nt=globalThis).litElementHydrateSupport)||void 0===ot||ot.call(nt,{LitElement:ct}),null===(lt=(ht=globalThis).litElementPlatformSupport)||void 0===lt||lt.call(ht,{LitElement:ct});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>e=>{return"function"==typeof e?(i=t,s=e,window.customElements.define(i,s),s):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i,s},ut=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?n(n({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function pt(t){return(e,i)=>{return void 0!==i?(s=t,r=i,void e.constructor.createProperty(r,s)):ut(t,e);var s,r}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return pt(n(n({},t),{state:!0,attribute:!1}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=({finisher:t,descriptor:e})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:n(n({},i),{key:s});return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(r,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ft(){return new Worker("/color-visualizer/assets/generate-colors.worker.a661e73b.js",{type:"module"})}let gt;var yt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,wt=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?bt(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&yt(e,i,n),n};let xt=class extends ct{constructor(){super(...arguments),this.hue=0,this.width=500,this.height=300}onClick(t){const e=this.canvas;if(!e)return;const i=e.getBoundingClientRect(),s=Math.min(Math.max(t.clientX-i.x,0),this.width),r=Math.min(Math.max(t.clientY-i.y,0),this.height),n={chroma:Math.floor(s/this.width*100),luminance:Math.floor(100*(1-r/this.height)),hue:this.hue},o=new CustomEvent("change",{detail:n,bubbles:!0,composed:!0});this.dispatchEvent(o)}updated(){const t=this.canvas;if(!t)return;const e=t.getContext("2d");e&&function(t,e,i){const s=new ft;return gt&&gt.terminate(),gt=s,new Promise((r=>{s.onmessage=t=>{r(t.data.slice())},s.postMessage([t,e,i])}))}(this.hue,this.width,this.height).then((t=>{const i=new ImageData(t,this.width,this.height);e.putImageData(i,0,0)}))}render(){return L`
      <canvas
        @click="${this.onClick}"
        width="${this.width}px"
        height="${this.height}px"
      ></canvas>
    `}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $t,St,Ct;xt.styles=K`
    :host canvas {
      border-radius: 5px;
      border: 1px solid grey;
      max-width: calc(100vw - 4em);
    }
  `,wt([pt({type:Number,reflect:!0})],xt.prototype,"hue",2),wt([pt({type:Number})],xt.prototype,"width",2),wt([pt({type:Number})],xt.prototype,"height",2),wt([($t="canvas",vt({descriptor:t=>{const e={get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector($t)},enumerable:!0,configurable:!0};if(St){const i="symbol"==typeof t?Symbol():"__"+t;e.get=function(){var t;return void 0===this[i]&&(this[i]=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector($t)),this[i]}}return e}}))],xt.prototype,"canvas",2),wt([(Ct={passive:!0},vt({finisher:(t,e)=>{Object.assign(t.prototype[e],Ct)}}))],xt.prototype,"onClick",1),xt=wt([dt("lch-paint")],xt);var Pt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,Ht=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?kt(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&Pt(e,i,n),n};function Et(t){return t.toString(16).padStart(2,"0")}let Lt=class extends ct{constructor(){super(...arguments),this.chroma=0,this.luminance=0,this.hue=0,this.a=0,this.b=0,this.red=0,this.green=0,this.blue=0,this.setLCH=t=>{const e=o(t);this.luminance=e.l,this.chroma=e.c,this.hue=e.h},this.setLab=t=>{const e=h(t);this.luminance=e.l,this.a=e.a,this.b=e.b},this.setRGB=t=>{const e=l(t);this.red=Math.min(255,Math.max(0,Math.floor(e.r))),this.blue=Math.min(255,Math.max(0,Math.floor(e.b))),this.green=Math.min(255,Math.max(0,Math.floor(e.g)))},this.setFromLCH=({chroma:t=this.chroma,luminance:e=this.luminance,hue:i=this.hue}={})=>{const s=o(e,t,i);this.setLab(s),this.setRGB(s),this.setLCH(s)},this.setFromLab=({luminance:t=this.luminance,a:e=this.a,b:i=this.b}={})=>{const s=h(t,e,i);this.setLCH(s),this.setRGB(s),this.setLab(s)},this.setFromRGB=({red:t=this.red,green:e=this.green,blue:i=this.blue}={})=>{const s=l(t,e,i);this.setLCH(s),this.setLab(s),this.setRGB(s)}}connectedCallback(){super.connectedCallback(),this.setFromLCH()}renderInput(t,e,i,{min:s,max:r}){return L`
      <label for="lab-${t}">${t} (${e}) </label>
      <input
        id="lab-${t}"
        type="number"
        min=${s}
        max=${r}
        value=${this[e]}
        @input=${t=>{const n=Math.min(r,Math.max(s,Number(t.target.value)));t.target.value=Number.isNaN(n)?"":n||0,i({[e]:n||0})}}
      />
    `}updated(){this.setFromLCH();const t={chroma:this.chroma,luminance:this.luminance,hue:this.hue},e=new CustomEvent("change",{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){const t=`#${Et(this.red)}${Et(this.green)}${Et(this.blue)}`;return L`
      <div class="wrapper">
        <div class="group">
          <h2>LCH</h2>
          ${this.renderInput("L","luminance",this.setFromLCH,{min:0,max:100})}
          ${this.renderInput("C","chroma",this.setFromLCH,{min:0,max:132})}
          ${this.renderInput("H","hue",this.setFromLCH,{min:0,max:360})}
        </div>

        <div class="group">
          <h2>Lab</h2>
          ${this.renderInput("L","luminance",this.setFromLCH,{min:0,max:100})}
          ${this.renderInput("a","a",this.setFromLab,{min:-128,max:127})}
          ${this.renderInput("b","b",this.setFromLab,{min:-128,max:127})}
        </div>

        <div class="group">
          <h2>RGB</h2>
          ${this.renderInput("R","red",this.setFromRGB,{min:0,max:255})}
          ${this.renderInput("G","green",this.setFromRGB,{min:0,max:255})}
          ${this.renderInput("B","blue",this.setFromRGB,{min:0,max:255})}
        </div>

        <div class="previsualization" style="background: ${t}"></div>
      </div>

      <hr />

      <pre><code>LCH(${this.luminance}% ${this.chroma} ${this.hue})
Lab(${this.luminance}% ${this.a} ${this.b})
rgb(${this.red} ${this.green} ${this.blue})
${t}</code></pre>
    `}};Lt.styles=K`
    :host label {
      display: block;
    }

    :host .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
      margin-bottom: 1em;
    }
    @media (max-width: 595px) {
      :host .wrapper {
        grid-template-columns: 1fr;
      }
    }

    :host .group {
      display: grid;
      /* 93px looks good */
      grid-template-columns: 93px 1fr;
      column-gap: 1em;
      row-gap: 0.5em;
    }

    :host .previsualization {
      box-sizing: border-box;
      aspect-ratio: 5/3;
      border-radius: 5px;
      border: 1px solid grey;
      width: calc(100% - 2em);
      max-height: 150px;
      place-self: center;
    }
    @media (min-width: 595px) {
      :host .previsualization {
        place-self: end;
        margin-right: 1em;
      }
    }

    :host h2 {
      grid-column: span 2;
    }
  `,Ht([pt({type:Number,reflect:!0})],Lt.prototype,"chroma",2),Ht([pt({type:Number,reflect:!0})],Lt.prototype,"luminance",2),Ht([pt({type:Number,reflect:!0})],Lt.prototype,"hue",2),Ht([mt()],Lt.prototype,"a",2),Ht([mt()],Lt.prototype,"b",2),Ht([mt()],Lt.prototype,"red",2),Ht([mt()],Lt.prototype,"green",2),Ht([mt()],Lt.prototype,"blue",2),Lt=Ht([dt("color-picker")],Lt);

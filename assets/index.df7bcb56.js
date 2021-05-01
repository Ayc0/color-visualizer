var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,r=(t,r)=>{for(var o in r||(r={}))e.call(r,o)&&n(t,o,r[o]);if(i)for(var o of i(r))s.call(r,o)&&n(t,o,r[o]);return t};import{l as o,a as l,r as h}from"./lch-vendors.cd2c9a8e.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var a,c,d,u;!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(i){const s=new URL(t,location),n=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((i,r)=>{const o=new URL(t,s);if(self[e].moduleMap[o])return i(self[e].moduleMap[o]);const l=new Blob([`import * as m from '${o}';`,`${e}.moduleMap['${o}']=m;`],{type:"text/javascript"}),h=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${t}`)),n(h)},onload(){i(self[e].moduleMap[o]),n(h)}});document.head.appendChild(h)})),self[e].moduleMap={}}}("/color-visualizer/assets/");const p=globalThis.trustedTypes,v=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,f="?"+m,y=`<${f}>`,b=document,g=(t="")=>b.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,x=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,N=/"/g,U=/^(?:script|style|textarea)$/i,E=(M=1,(t,...e)=>({_$litType$:M,strings:t,values:e})),H=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),R=new WeakMap,L=b.createTreeWalker(b,129,null,!1);var M;class A{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[h,a]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=S;for(let h=0;h<i;h++){const e=t[h];let i,l,a=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===S?"!--"===l[1]?o=C:void 0!==l[1]?o=x:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=P):void 0!==l[3]&&(o=P):o===P?">"===l[0]?(o=null!=n?n:S,a=-1):void 0===l[1]?a=-2:(a=o.lastIndex-l[2].length,i=l[1],o=void 0===l[3]?P:'"'===l[3]?N:k):o===N||o===k?o=P:o===C||o===x?o=S:(o=P,n=void 0);const d=o===P&&t[h+1].startsWith("/>")?" ":"";r+=o===S?e+y:a>=0?(s.push(i),e.slice(0,a)+"$lit$"+e.slice(a)+m+d):e+m+(-2===a?(s.push(void 0),h):d)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==v?v.createHTML(l):l,s]})(t,e);if(this.el=A.createElement(h,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=a[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?_:"?"===e[1]?z:"@"===e[1]?D:B})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(U.test(s.tagName)){const t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=p?p.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],g()),L.nextNode(),l.push({type:2,index:++n});s.append(t[e],g())}}}else if(8===s.nodeType)if(s.data===f)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)l.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function T(t,e,i=t,s){var n,r,o,l;if(e===H)return e;let h=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const a=$(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h.O)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,s)),void 0!==s?(null!==(o=(l=i).Σi)&&void 0!==o?o:l.Σi=[])[s]=h:i.Σo=h),void 0!==h&&(e=T(t,h.S(t,e.values),h,s)),e}class I{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);L.currentNode=n;let r=L.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new j(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new W(r,this,t)),this.l.push(e),h=s[++l]}o!==(null==h?void 0:h.index)&&(r=L.nextNode(),o++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class j{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=T(this,t,e),$(t)?t===O||null==t||""===t?(this.H!==O&&this.R(),this.H=O):t!==this.H&&t!==H&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(b.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=A.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new I(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new A(t)),e}g(t){w(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new j(this.k(g()),this.k(g()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class B{constructor(t,e,i,s,n){this.type=1,this.H=O,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(O),this.strings=i):this.H=O}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=T(this,t,e,0),r=!$(t)||t!==this.H&&t!==H,r&&(this.H=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=T(this,s[i+o],e,o),l===H&&(l=this.H[o]),r||(r=!$(l)||l!==this.H[o]),l===O?t=O:t!==O&&(t+=(null!=l?l:"")+n[o+1]),this.H[o]=l}r&&!s&&this.W(t)}W(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class _ extends B{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===O?void 0:t}}class z extends B{constructor(){super(...arguments),this.type=4}W(t){t&&t!==O?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class D extends B{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=T(this,t,e,0))&&void 0!==i?i:O)===H)return;const s=this.H,n=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==O&&(s===O||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){T(this,t)}}null===(c=(a=globalThis).litHtmlPlatformSupport)||void 0===c||c.call(a,A,j),(null!==(d=(u=globalThis).litHtmlVersions)&&void 0!==d?d:u.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class q{constructor(t,e){if(e!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return V&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const K=new Map,F=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof q)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);let s=K.get(i);return void 0===s&&K.set(i,s=new q(i,G)),s},J=V?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new q(t+"",G))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var Z,X,Y,Q;const tt={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},et=(t,e)=>e!==t&&(e==e||t==t),it={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:et};class st extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||it}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(J(t))}else void 0!==t&&e.push(J(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,s=this.constructor.elementStyles,V?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,i.appendChild(e)})),e;var i,s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=it){var s,n;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:tt.toAttribute)(e,i.type);this.Πh=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this.Πh=null}}K(t,e){var i,s,n;const r=this.constructor,o=r.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=r.getPropertyOptions(o),l=t.converter,h=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:tt.fromAttribute;this.Πh=o,this[o]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||et)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(s){throw e=!1,this.Π$(),s}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,rt,ot,lt,ht,at;st.finalized=!0,st.shadowRootOptions={mode:"open"},null===(X=(Z=globalThis).reactiveElementPlatformSupport)||void 0===X||X.call(Z,{ReactiveElement:st}),(null!==(Y=(Q=globalThis).reactiveElementVersions)&&void 0!==Y?Y:Q.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(nt=(at=globalThis).litElementVersions)&&void 0!==nt?nt:at.litElementVersions=[]).push("3.0.0-rc.1");class ct extends st{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new j(e.insertBefore(g(),t),t,void 0,i)}return o.I(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return H}}ct.finalized=!0,ct._$litElement$=!0,null===(ot=(rt=globalThis).litElementHydrateSupport)||void 0===ot||ot.call(rt,{LitElement:ct}),null===(ht=(lt=globalThis).litElementPlatformSupport)||void 0===ht||ht.call(lt,{LitElement:ct});
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
 */var i,s},ut=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?r(r({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function pt(t){return(e,i)=>{return void 0!==i?(s=t,n=i,void e.constructor.createProperty(n,s)):ut(t,e);var s,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(t){return pt(r(r({},t),{state:!0,attribute:!1}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:r(r({},i),{key:s});return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ft(){return new Worker("/color-visualizer/assets/generate-colors.worker.a661e73b.js",{type:"module"})}let yt;var bt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,$t=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?gt(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&bt(e,i,r),r};let wt=class extends ct{constructor(){super(...arguments),this.hue=0,this.width=500,this.height=300}onClick(t){const e=this.canvas;if(!e)return;const i=e.getBoundingClientRect(),s=Math.min(Math.max(t.clientX-i.x,0),this.width),n=Math.min(Math.max(t.clientY-i.y,0),this.height),r={chroma:Math.floor(s/this.width*100),luminance:Math.floor(100*(1-n/this.height)),hue:this.hue},o=new CustomEvent("change",{detail:r,bubbles:!0,composed:!0});this.dispatchEvent(o)}render(){return E`
      <canvas
        @click="${this.onClick}"
        width="${this.width}px"
        height="${this.height}px"
      ></canvas>
    `}updated(){const t=this.canvas;if(!t)return;const e=t.getContext("2d");e&&function(t,e,i){const s=new ft;return yt&&yt.terminate(),yt=s,new Promise((n=>{s.onmessage=t=>{n(t.data.slice())},s.postMessage([t,e,i])}))}(this.hue,this.width,this.height).then((t=>{const i=new ImageData(t,this.width,this.height);e.putImageData(i,0,0)}))}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var St,Ct,xt;wt.styles=F`
    :host canvas {
      border-radius: 5px;
      border: 1px solid grey;
    }
  `,$t([pt({type:Number,reflect:!0})],wt.prototype,"hue",2),$t([pt({type:Number})],wt.prototype,"width",2),$t([pt({type:Number})],wt.prototype,"height",2),$t([(St="canvas",mt({descriptor:t=>{const e={get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(St)},enumerable:!0,configurable:!0};if(Ct){const i="symbol"==typeof t?Symbol():"__"+t;e.get=function(){var t;return void 0===this[i]&&(this[i]=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(St)),this[i]}}return e}}))],wt.prototype,"canvas",2),$t([(xt={passive:!0},mt({finisher:(t,e)=>{Object.assign(t.prototype[e],xt)}}))],wt.prototype,"onClick",1),wt=$t([dt("lch-paint")],wt);var Pt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,Nt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?kt(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&Pt(e,i,r),r};let Ut=class extends ct{constructor(){super(...arguments),this.chroma=0,this.luminance=0,this.hue=0,this.a=0,this.b=0,this.red=0,this.green=0,this.blue=0}connectedCallback(){super.connectedCallback(),this.modifyLCH()}modifyLCH({chroma:t=this.chroma,luminance:e=this.luminance,hue:i=this.hue}={}){const s=o(e,t,i);this.luminance=e,this.chroma=t,this.hue=i;const n=l(s);this.a=n.a,this.b=n.b;const r=h(s);this.red=r.r,this.blue=r.b,this.green=r.g}modifyLab({luminance:t=this.luminance,a:e=this.a,b:i=this.b}={}){const s=l(t,e,i);this.luminance=t,this.a=e,this.b=i;const n=o(s);this.chroma=n.c,this.hue=n.h;const r=h(s);this.red=r.r,this.blue=r.b,this.green=r.g}modifyRGB({red:t=this.red,green:e=this.green,blue:i=this.blue}={}){const s=h(t,e,i);this.red=t,this.blue=e,this.green=i;const n=o(s);this.luminance=n.l,this.chroma=n.c,this.hue=n.h;const r=l(s);this.a=r.a,this.b=r.b}renderLCHInput(t,e,i,s){return console.log(this[e]),E`
      <label for="lch-${t}">${t} (${e}) </label>
      <input
        id="lch-${t}"
        type="number"
        min=${i}
        max=${s}
        value=${this[e]}
        @input=${t=>{const n=Math.min(s,Math.max(i,Number(t.target.value)));t.target.value=Number.isNaN(n)?"":n||0,this.modifyLCH({[e]:n||0})}}
      />
    `}renderLabInput(t,e,i,s){return E`
      <label for="lab-${t}">${t} (${e}) </label>
      <input
        id="lab-${t}"
        type="number"
        min=${i}
        max=${s}
        value=${this[e]}
        @input=${t=>{const n=Math.min(s,Math.max(i,Number(t.target.value)));t.target.value=Number.isNaN(n)?"":n||0,this.modifyLab({[e]:n||0})}}
      />
    `}renderRGBInput(t,e,i,s){return E`
      <label for="rgb-${t}">${t} (${e}) </label>
      <input
        id="rgb-${t}"
        type="number"
        min=${i}
        max=${s}
        value=${this[e]}
        @input=${t=>{const n=Math.min(s,Math.max(i,Number(t.target.value)));t.target.value=Number.isNaN(n)?"":n||0,this.modifyRGB({[e]:n||0})}}
      />
    `}render(){return E`
      <div class="wrapper">
        <h2>LCH</h2>
        ${this.renderLCHInput("L","luminance",0,100)}
        ${this.renderLCHInput("C","chroma",0,132)}
        ${this.renderLCHInput("H","hue",0,360)}

        <h2>Lab</h2>
        ${this.renderLabInput("L","luminance",0,100)}
        ${this.renderLabInput("a","a",-128,127)}
        ${this.renderLabInput("b","b",-128,127)}

        <h2>RGB</h2>
        ${this.renderRGBInput("R","red",0,255)}
        ${this.renderRGBInput("G","green",0,255)}
        ${this.renderRGBInput("b","blue",0,255)}
      </div>

      <div>LCH(${this.luminance}% ${this.chroma} ${this.hue})</div>
      <div>Lab(${this.luminance}% ${this.a} ${this.b})</div>
      <div>rgb(${this.red}% ${this.green} ${this.blue})</div>
    `}};Ut.styles=F`
    :host label {
      display: block;
    }
    :host .wrapper {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 1em;
    }
    :host h2 {
      grid-column: span 2;
    }
  `,Nt([pt({type:Number,reflect:!0})],Ut.prototype,"chroma",2),Nt([pt({type:Number,reflect:!0})],Ut.prototype,"luminance",2),Nt([pt({type:Number,reflect:!0})],Ut.prototype,"hue",2),Nt([vt()],Ut.prototype,"a",2),Nt([vt()],Ut.prototype,"b",2),Nt([vt()],Ut.prototype,"red",2),Nt([vt()],Ut.prototype,"green",2),Nt([vt()],Ut.prototype,"blue",2),Ut=Nt([dt("color-picker")],Ut);

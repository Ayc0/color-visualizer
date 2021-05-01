var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,o=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,n=(t,n)=>{for(var l in n||(n={}))e.call(n,l)&&o(t,l,n[l]);if(i)for(var l of i(n))s.call(n,l)&&o(t,l,n[l]);return t};import{l,a as r,r as h}from"./lch-vendors.2c6acd71.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var a,d,c,p;!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(i){const s=new URL(t,location),o=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((i,n)=>{const l=new URL(t,s);if(self[e].moduleMap[l])return i(self[e].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${e}.moduleMap['${l}']=m;`],{type:"text/javascript"}),h=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${t}`)),o(h)},onload(){i(self[e].moduleMap[l]),o(h)}});document.head.appendChild(h)})),self[e].moduleMap={}}}("/color-visualizer/assets/");const u=globalThis.trustedTypes,m=u?u.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,y="?"+b,M=`<${y}>`,x=document,v=(t="")=>x.createComment(t),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,Z=/>/g,L=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,j=/'/g,X=/"/g,C=/^(?:script|style|textarea)$/i,Y=(H=1,(t,...e)=>({_$litType$:H,strings:t,values:e})),z=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),K=new WeakMap,W=x.createTreeWalker(x,129,null,!1);var H;class k{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,r=this.parts,[h,a]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",l=g;for(let h=0;h<i;h++){const e=t[h];let i,r,a=-1,d=0;for(;d<e.length&&(l.lastIndex=d,r=l.exec(e),null!==r);)d=l.lastIndex,l===g?"!--"===r[1]?l=T:void 0!==r[1]?l=Z:void 0!==r[2]?(C.test(r[2])&&(o=RegExp("</"+r[2],"g")),l=L):void 0!==r[3]&&(l=L):l===L?">"===r[0]?(l=null!=o?o:g,a=-1):void 0===r[1]?a=-2:(a=l.lastIndex-r[2].length,i=r[1],l=void 0===r[3]?L:'"'===r[3]?X:j):l===X||l===j?l=L:l===T||l===Z?l=g:(l=L,o=void 0);const c=l===L&&t[h+1].startsWith("/>")?" ":"";n+=l===g?e+M:a>=0?(s.push(i),e.slice(0,a)+"$lit$"+e.slice(a)+b+c):e+b+(-2===a?(s.push(void 0),h):c)}const r=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(r):r,s]})(t,e);if(this.el=k.createElement(h,i),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=W.nextNode())&&r.length<l;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=a[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?R:"@"===e[1]?I:D})}else r.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(C.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=u?u.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],v()),W.nextNode(),r.push({type:2,index:++o});s.append(t[e],v())}}}else if(8===s.nodeType)if(s.data===y)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)r.push({type:7,index:o}),t+=b.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function w(t,e,i=t,s){var o,n,l,r;if(e===z)return e;let h=void 0!==s?null===(o=i.Σi)||void 0===o?void 0:o[s]:i.Σo;const a=G(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h.O)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,s)),void 0!==s?(null!==(l=(r=i).Σi)&&void 0!==l?l:r.Σi=[])[s]=h:i.Σo=h),void 0!==h&&(e=w(t,h.S(t,e.values),h,s)),e}class O{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);W.currentNode=o;let n=W.nextNode(),l=0,r=0,h=s[0];for(;void 0!==h;){if(l===h.index){let e;2===h.type?e=new f(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new U(n,this,t)),this.l.push(e),h=s[++r]}l!==(null==h?void 0:h.index)&&(n=W.nextNode(),l++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class f{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=w(this,t,e),G(t)?t===S||null==t||""===t?(this.H!==S&&this.R(),this.H=S):t!==this.H&&t!==z&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return N(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(x.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=k.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new O(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new k(t)),e}g(t){N(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const o of t)s===e.length?e.push(i=new f(this.k(v()),this.k(v()),this,this.options)):i=e[s],i.I(o),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class D{constructor(t,e,i,s,o){this.type=1,this.H=S,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(S),this.strings=i):this.H=S}get tagName(){return this.element.tagName}I(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=w(this,t,e,0),n=!G(t)||t!==this.H&&t!==z,n&&(this.H=t);else{const s=t;let l,r;for(t=o[0],l=0;l<o.length-1;l++)r=w(this,s[i+l],e,l),r===z&&(r=this.H[l]),n||(n=!G(r)||r!==this.H[l]),r===S?t=S:t!==S&&(t+=(null!=r?r:"")+o[l+1]),this.H[l]=r}n&&!s&&this.W(t)}W(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends D{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===S?void 0:t}}class R extends D{constructor(){super(...arguments),this.type=4}W(t){t&&t!==S?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class I extends D{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=w(this,t,e,0))&&void 0!==i?i:S)===z)return;const s=this.H,o=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==S&&(s===S||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class U{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){w(this,t)}}null===(d=(a=globalThis).litHtmlPlatformSupport)||void 0===d||d.call(a,k,f),(null!==(c=(p=globalThis).litHtmlVersions)&&void 0!==c?c:p.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol();class J{constructor(t,e){if(e!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return E&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const Q=new Map,F=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof J)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);let s=Q.get(i);return void 0===s&&Q.set(i,s=new J(i,P)),s},B=E?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new J(t+"",P))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var A,$,q,_;const tt={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},et=(t,e)=>e!==t&&(e==e||t==t),it={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:et};class st extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||it}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(B(t))}else void 0!==t&&e.push(B(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,s=this.constructor.elementStyles,E?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,i.appendChild(e)})),e;var i,s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=it){var s,o;const n=this.constructor.Πp(t,i);if(void 0!==n&&!0===i.reflect){const l=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:tt.toAttribute)(e,i.type);this.Πh=t,null==l?this.removeAttribute(n):this.setAttribute(n,l),this.Πh=null}}K(t,e){var i,s,o;const n=this.constructor,l=n.Πm.get(t);if(void 0!==l&&this.Πh!==l){const t=n.getPropertyOptions(l),r=t.converter,h=null!==(o=null!==(s=null===(i=r)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof r?r:null)&&void 0!==o?o:tt.fromAttribute;this.Πh=l,this[l]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||et)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(s){throw e=!1,this.Π$(),s}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot,nt,lt,rt,ht,at;st.finalized=!0,st.shadowRootOptions={mode:"open"},null===($=(A=globalThis).reactiveElementPlatformSupport)||void 0===$||$.call(A,{ReactiveElement:st}),(null!==(q=(_=globalThis).reactiveElementVersions)&&void 0!==q?q:_.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(ot=(at=globalThis).litElementVersions)&&void 0!==ot?ot:at.litElementVersions=[]).push("3.0.0-rc.1");class dt extends st{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new f(e.insertBefore(v(),t),t,void 0,i)}return l.I(t),l})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return z}}dt.finalized=!0,dt._$litElement$=!0,null===(lt=(nt=globalThis).litElementHydrateSupport)||void 0===lt||lt.call(nt,{LitElement:dt}),null===(ht=(rt=globalThis).litElementPlatformSupport)||void 0===ht||ht.call(rt,{LitElement:dt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>e=>{return"function"==typeof e?(i=t,s=e,window.customElements.define(i,s),s):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i,s},pt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?n(n({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ut(t){return(e,i)=>{return void 0!==i?(s=t,o=i,void e.constructor.createProperty(o,s)):pt(t,e);var s,o}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return ut(n(n({},t),{state:!0,attribute:!1}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,l=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:n(n({},i),{key:s});return null!=t&&(l.finisher=function(e){t(e,s)}),l}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function yt(){return new Worker("data:application/javascript;base64,ZnVuY3Rpb24gdCh0LGUsbil7dC5wcm90b3R5cGU9ZS5wcm90b3R5cGU9bixuLmNvbnN0cnVjdG9yPXR9ZnVuY3Rpb24gZSh0LGUpe3ZhciBuPU9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUpO2Zvcih2YXIgaSBpbiBlKW5baV09ZVtpXTtyZXR1cm4gbn1mdW5jdGlvbiBuKCl7fXZhciBpPTEvLjcscj0iXFxzKihbKy1dP1xcZCspXFxzKiIsYT0iXFxzKihbKy1dP1xcZCpcXC4/XFxkKyg/OltlRV1bKy1dP1xcZCspPylcXHMqIixvPSJcXHMqKFsrLV0/XFxkKlxcLj9cXGQrKD86W2VFXVsrLV0/XFxkKyk/KSVcXHMqIixzPS9eIyhbMC05YS1mXXszLDh9KSQvLGg9bmV3IFJlZ0V4cCgiXnJnYlxcKCIrW3IscixyXSsiXFwpJCIpLGw9bmV3IFJlZ0V4cCgiXnJnYlxcKCIrW28sbyxvXSsiXFwpJCIpLHU9bmV3IFJlZ0V4cCgiXnJnYmFcXCgiK1tyLHIscixhXSsiXFwpJCIpLGM9bmV3IFJlZ0V4cCgiXnJnYmFcXCgiK1tvLG8sbyxhXSsiXFwpJCIpLGc9bmV3IFJlZ0V4cCgiXmhzbFxcKCIrW2EsbyxvXSsiXFwpJCIpLGY9bmV3IFJlZ0V4cCgiXmhzbGFcXCgiK1thLG8sbyxhXSsiXFwpJCIpLGQ9e2FsaWNlYmx1ZToxNTc5MjM4MyxhbnRpcXVld2hpdGU6MTY0NDQzNzUsYXF1YTo2NTUzNSxhcXVhbWFyaW5lOjgzODg1NjQsYXp1cmU6MTU3OTQxNzUsYmVpZ2U6MTYxMTkyNjAsYmlzcXVlOjE2NzcwMjQ0LGJsYWNrOjAsYmxhbmNoZWRhbG1vbmQ6MTY3NzIwNDUsYmx1ZToyNTUsYmx1ZXZpb2xldDo5MDU1MjAyLGJyb3duOjEwODI0MjM0LGJ1cmx5d29vZDoxNDU5NjIzMSxjYWRldGJsdWU6NjI2NjUyOCxjaGFydHJldXNlOjgzODgzNTIsY2hvY29sYXRlOjEzNzg5NDcwLGNvcmFsOjE2NzQ0MjcyLGNvcm5mbG93ZXJibHVlOjY1OTE5ODEsY29ybnNpbGs6MTY3NzUzODgsY3JpbXNvbjoxNDQyMzEwMCxjeWFuOjY1NTM1LGRhcmtibHVlOjEzOSxkYXJrY3lhbjozNTcyMyxkYXJrZ29sZGVucm9kOjEyMDkyOTM5LGRhcmtncmF5OjExMTE5MDE3LGRhcmtncmVlbjoyNTYwMCxkYXJrZ3JleToxMTExOTAxNyxkYXJra2hha2k6MTI0MzMyNTksZGFya21hZ2VudGE6OTEwOTY0MyxkYXJrb2xpdmVncmVlbjo1NTk3OTk5LGRhcmtvcmFuZ2U6MTY3NDc1MjAsZGFya29yY2hpZDoxMDA0MDAxMixkYXJrcmVkOjkxMDk1MDQsZGFya3NhbG1vbjoxNTMwODQxMCxkYXJrc2VhZ3JlZW46OTQxOTkxOSxkYXJrc2xhdGVibHVlOjQ3MzQzNDcsZGFya3NsYXRlZ3JheTozMTAwNDk1LGRhcmtzbGF0ZWdyZXk6MzEwMDQ5NSxkYXJrdHVycXVvaXNlOjUyOTQ1LGRhcmt2aW9sZXQ6OTY5OTUzOSxkZWVwcGluazoxNjcxNjk0NyxkZWVwc2t5Ymx1ZTo0OTE1MSxkaW1ncmF5OjY5MDgyNjUsZGltZ3JleTo2OTA4MjY1LGRvZGdlcmJsdWU6MjAwMzE5OSxmaXJlYnJpY2s6MTE2NzQxNDYsZmxvcmFsd2hpdGU6MTY3NzU5MjAsZm9yZXN0Z3JlZW46MjI2Mzg0MixmdWNoc2lhOjE2NzExOTM1LGdhaW5zYm9ybzoxNDQ3NDQ2MCxnaG9zdHdoaXRlOjE2MzE2NjcxLGdvbGQ6MTY3NjY3MjAsZ29sZGVucm9kOjE0MzI5MTIwLGdyYXk6ODQyMTUwNCxncmVlbjozMjc2OCxncmVlbnllbGxvdzoxMTQwMzA1NSxncmV5Ojg0MjE1MDQsaG9uZXlkZXc6MTU3OTQxNjAsaG90cGluazoxNjczODc0MCxpbmRpYW5yZWQ6MTM0NTg1MjQsaW5kaWdvOjQ5MTUzMzAsaXZvcnk6MTY3NzcyMDAsa2hha2k6MTU3ODc2NjAsbGF2ZW5kZXI6MTUxMzI0MTAsbGF2ZW5kZXJibHVzaDoxNjc3MzM2NSxsYXduZ3JlZW46ODE5MDk3NixsZW1vbmNoaWZmb246MTY3NzU4ODUsbGlnaHRibHVlOjExMzkzMjU0LGxpZ2h0Y29yYWw6MTU3NjE1MzYsbGlnaHRjeWFuOjE0NzQ1NTk5LGxpZ2h0Z29sZGVucm9keWVsbG93OjE2NDQ4MjEwLGxpZ2h0Z3JheToxMzg4MjMyMyxsaWdodGdyZWVuOjk0OTgyNTYsbGlnaHRncmV5OjEzODgyMzIzLGxpZ2h0cGluazoxNjc1ODQ2NSxsaWdodHNhbG1vbjoxNjc1Mjc2MixsaWdodHNlYWdyZWVuOjIxNDI4OTAsbGlnaHRza3libHVlOjg5MDAzNDYsbGlnaHRzbGF0ZWdyYXk6NzgzMzc1MyxsaWdodHNsYXRlZ3JleTo3ODMzNzUzLGxpZ2h0c3RlZWxibHVlOjExNTg0NzM0LGxpZ2h0eWVsbG93OjE2Nzc3MTg0LGxpbWU6NjUyODAsbGltZWdyZWVuOjMzMjkzMzAsbGluZW46MTY0NDU2NzAsbWFnZW50YToxNjcxMTkzNSxtYXJvb246ODM4ODYwOCxtZWRpdW1hcXVhbWFyaW5lOjY3MzczMjIsbWVkaXVtYmx1ZToyMDUsbWVkaXVtb3JjaGlkOjEyMjExNjY3LG1lZGl1bXB1cnBsZTo5NjYyNjgzLG1lZGl1bXNlYWdyZWVuOjM5NzgwOTcsbWVkaXVtc2xhdGVibHVlOjgwODc3OTAsbWVkaXVtc3ByaW5nZ3JlZW46NjQxNTQsbWVkaXVtdHVycXVvaXNlOjQ3NzIzMDAsbWVkaXVtdmlvbGV0cmVkOjEzMDQ3MTczLG1pZG5pZ2h0Ymx1ZToxNjQ0OTEyLG1pbnRjcmVhbToxNjEyMTg1MCxtaXN0eXJvc2U6MTY3NzAyNzMsbW9jY2FzaW46MTY3NzAyMjksbmF2YWpvd2hpdGU6MTY3Njg2ODUsbmF2eToxMjgsb2xkbGFjZToxNjY0MzU1OCxvbGl2ZTo4NDIxMzc2LG9saXZlZHJhYjo3MDQ4NzM5LG9yYW5nZToxNjc1MzkyMCxvcmFuZ2VyZWQ6MTY3MjkzNDQsb3JjaGlkOjE0MzE1NzM0LHBhbGVnb2xkZW5yb2Q6MTU2NTcxMzAscGFsZWdyZWVuOjEwMDI1ODgwLHBhbGV0dXJxdW9pc2U6MTE1Mjk5NjYscGFsZXZpb2xldHJlZDoxNDM4MTIwMyxwYXBheWF3aGlwOjE2NzczMDc3LHBlYWNocHVmZjoxNjc2NzY3MyxwZXJ1OjEzNDY4OTkxLHBpbms6MTY3NjEwMzUscGx1bToxNDUyNDYzNyxwb3dkZXJibHVlOjExNTkxOTEwLHB1cnBsZTo4Mzg4NzM2LHJlYmVjY2FwdXJwbGU6NjY5Nzg4MSxyZWQ6MTY3MTE2ODAscm9zeWJyb3duOjEyMzU3NTE5LHJveWFsYmx1ZTo0Mjg2OTQ1LHNhZGRsZWJyb3duOjkxMjcxODcsc2FsbW9uOjE2NDE2ODgyLHNhbmR5YnJvd246MTYwMzI4NjQsc2VhZ3JlZW46MzA1MDMyNyxzZWFzaGVsbDoxNjc3NDYzOCxzaWVubmE6MTA1MDY3OTcsc2lsdmVyOjEyNjMyMjU2LHNreWJsdWU6ODkwMDMzMSxzbGF0ZWJsdWU6Njk3MDA2MSxzbGF0ZWdyYXk6NzM3Mjk0NCxzbGF0ZWdyZXk6NzM3Mjk0NCxzbm93OjE2Nzc1OTMwLHNwcmluZ2dyZWVuOjY1NDA3LHN0ZWVsYmx1ZTo0NjIwOTgwLHRhbjoxMzgwODc4MCx0ZWFsOjMyODk2LHRoaXN0bGU6MTQyMDQ4ODgsdG9tYXRvOjE2NzM3MDk1LHR1cnF1b2lzZTo0MjUxODU2LHZpb2xldDoxNTYzMTA4Nix3aGVhdDoxNjExMzMzMSx3aGl0ZToxNjc3NzIxNSx3aGl0ZXNtb2tlOjE2MTE5Mjg1LHllbGxvdzoxNjc3Njk2MCx5ZWxsb3dncmVlbjoxMDE0NTA3NH07ZnVuY3Rpb24gYigpe3JldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleCgpfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRSZ2IoKX1mdW5jdGlvbiB5KHQpe3ZhciBlLG47cmV0dXJuIHQ9KHQrIiIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLChlPXMuZXhlYyh0KSk/KG49ZVsxXS5sZW5ndGgsZT1wYXJzZUludChlWzFdLDE2KSw2PT09bj93KGUpOjM9PT1uP25ldyBOKGU+PjgmMTV8ZT4+NCYyNDAsZT4+NCYxNXwyNDAmZSwoMTUmZSk8PDR8MTUmZSwxKTo4PT09bj9tKGU+PjI0JjI1NSxlPj4xNiYyNTUsZT4+OCYyNTUsKDI1NSZlKS8yNTUpOjQ9PT1uP20oZT4+MTImMTV8ZT4+OCYyNDAsZT4+OCYxNXxlPj40JjI0MCxlPj40JjE1fDI0MCZlLCgoMTUmZSk8PDR8MTUmZSkvMjU1KTpudWxsKTooZT1oLmV4ZWModCkpP25ldyBOKGVbMV0sZVsyXSxlWzNdLDEpOihlPWwuZXhlYyh0KSk/bmV3IE4oMjU1KmVbMV0vMTAwLDI1NSplWzJdLzEwMCwyNTUqZVszXS8xMDAsMSk6KGU9dS5leGVjKHQpKT9tKGVbMV0sZVsyXSxlWzNdLGVbNF0pOihlPWMuZXhlYyh0KSk/bSgyNTUqZVsxXS8xMDAsMjU1KmVbMl0vMTAwLDI1NSplWzNdLzEwMCxlWzRdKTooZT1nLmV4ZWModCkpP3EoZVsxXSxlWzJdLzEwMCxlWzNdLzEwMCwxKTooZT1mLmV4ZWModCkpP3EoZVsxXSxlWzJdLzEwMCxlWzNdLzEwMCxlWzRdKTpkLmhhc093blByb3BlcnR5KHQpP3coZFt0XSk6InRyYW5zcGFyZW50Ij09PXQ/bmV3IE4oTmFOLE5hTixOYU4sMCk6bnVsbH1mdW5jdGlvbiB3KHQpe3JldHVybiBuZXcgTih0Pj4xNiYyNTUsdD4+OCYyNTUsMjU1JnQsMSl9ZnVuY3Rpb24gbSh0LGUsbixpKXtyZXR1cm4gaTw9MCYmKHQ9ZT1uPU5hTiksbmV3IE4odCxlLG4saSl9ZnVuY3Rpb24gayh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIG58fCh0PXkodCkpLHQ/bmV3IE4oKHQ9dC5yZ2IoKSkucix0LmcsdC5iLHQub3BhY2l0eSk6bmV3IE59ZnVuY3Rpb24gTih0LGUsbixpKXt0aGlzLnI9K3QsdGhpcy5nPStlLHRoaXMuYj0rbix0aGlzLm9wYWNpdHk9K2l9ZnVuY3Rpb24gTSgpe3JldHVybiIjIit2KHRoaXMucikrdih0aGlzLmcpK3YodGhpcy5iKX1mdW5jdGlvbiB4KCl7dmFyIHQ9dGhpcy5vcGFjaXR5O3JldHVybigxPT09KHQ9aXNOYU4odCk/MTpNYXRoLm1heCgwLE1hdGgubWluKDEsdCkpKT8icmdiKCI6InJnYmEoIikrTWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsTWF0aC5yb3VuZCh0aGlzLnIpfHwwKSkrIiwgIitNYXRoLm1heCgwLE1hdGgubWluKDI1NSxNYXRoLnJvdW5kKHRoaXMuZyl8fDApKSsiLCAiK01hdGgubWF4KDAsTWF0aC5taW4oMjU1LE1hdGgucm91bmQodGhpcy5iKXx8MCkpKygxPT09dD8iKSI6IiwgIit0KyIpIil9ZnVuY3Rpb24gdih0KXtyZXR1cm4oKHQ9TWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsTWF0aC5yb3VuZCh0KXx8MCkpKTwxNj8iMCI6IiIpK3QudG9TdHJpbmcoMTYpfWZ1bmN0aW9uIHEodCxlLG4saSl7cmV0dXJuIGk8PTA/dD1lPW49TmFOOm48PTB8fG4+PTE/dD1lPU5hTjplPD0wJiYodD1OYU4pLG5ldyBFKHQsZSxuLGkpfWZ1bmN0aW9uIFIodCl7aWYodCBpbnN0YW5jZW9mIEUpcmV0dXJuIG5ldyBFKHQuaCx0LnMsdC5sLHQub3BhY2l0eSk7aWYodCBpbnN0YW5jZW9mIG58fCh0PXkodCkpLCF0KXJldHVybiBuZXcgRTtpZih0IGluc3RhbmNlb2YgRSlyZXR1cm4gdDt2YXIgZT0odD10LnJnYigpKS5yLzI1NSxpPXQuZy8yNTUscj10LmIvMjU1LGE9TWF0aC5taW4oZSxpLHIpLG89TWF0aC5tYXgoZSxpLHIpLHM9TmFOLGg9by1hLGw9KG8rYSkvMjtyZXR1cm4gaD8ocz1lPT09bz8oaS1yKS9oKzYqKGk8cik6aT09PW8/KHItZSkvaCsyOihlLWkpL2grNCxoLz1sPC41P28rYToyLW8tYSxzKj02MCk6aD1sPjAmJmw8MT8wOnMsbmV3IEUocyxoLGwsdC5vcGFjaXR5KX1mdW5jdGlvbiBFKHQsZSxuLGkpe3RoaXMuaD0rdCx0aGlzLnM9K2UsdGhpcy5sPStuLHRoaXMub3BhY2l0eT0raX1mdW5jdGlvbiAkKHQsZSxuKXtyZXR1cm4gMjU1Kih0PDYwP2UrKG4tZSkqdC82MDp0PDE4MD9uOnQ8MjQwP2UrKG4tZSkqKDI0MC10KS82MDplKX10KG4seSx7Y29weTpmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgdGhpcy5jb25zdHJ1Y3Rvcix0aGlzLHQpfSxkaXNwbGF5YWJsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJnYigpLmRpc3BsYXlhYmxlKCl9LGhleDpiLGZvcm1hdEhleDpiLGZvcm1hdEhzbDpmdW5jdGlvbigpe3JldHVybiBSKHRoaXMpLmZvcm1hdEhzbCgpfSxmb3JtYXRSZ2I6cCx0b1N0cmluZzpwfSksdChOLChmdW5jdGlvbih0LGUsbixpKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/ayh0KTpuZXcgTih0LGUsbixudWxsPT1pPzE6aSl9KSxlKG4se2JyaWdodGVyOmZ1bmN0aW9uKHQpe3JldHVybiB0PW51bGw9PXQ/aTpNYXRoLnBvdyhpLHQpLG5ldyBOKHRoaXMucip0LHRoaXMuZyp0LHRoaXMuYip0LHRoaXMub3BhY2l0eSl9LGRhcmtlcjpmdW5jdGlvbih0KXtyZXR1cm4gdD1udWxsPT10Py43Ok1hdGgucG93KC43LHQpLG5ldyBOKHRoaXMucip0LHRoaXMuZyp0LHRoaXMuYip0LHRoaXMub3BhY2l0eSl9LHJnYjpmdW5jdGlvbigpe3JldHVybiB0aGlzfSxkaXNwbGF5YWJsZTpmdW5jdGlvbigpe3JldHVybi0uNTw9dGhpcy5yJiZ0aGlzLnI8MjU1LjUmJi0uNTw9dGhpcy5nJiZ0aGlzLmc8MjU1LjUmJi0uNTw9dGhpcy5iJiZ0aGlzLmI8MjU1LjUmJjA8PXRoaXMub3BhY2l0eSYmdGhpcy5vcGFjaXR5PD0xfSxoZXg6TSxmb3JtYXRIZXg6TSxmb3JtYXRSZ2I6eCx0b1N0cmluZzp4fSkpLHQoRSwoZnVuY3Rpb24odCxlLG4saSl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP1IodCk6bmV3IEUodCxlLG4sbnVsbD09aT8xOmkpfSksZShuLHticmlnaHRlcjpmdW5jdGlvbih0KXtyZXR1cm4gdD1udWxsPT10P2k6TWF0aC5wb3coaSx0KSxuZXcgRSh0aGlzLmgsdGhpcy5zLHRoaXMubCp0LHRoaXMub3BhY2l0eSl9LGRhcmtlcjpmdW5jdGlvbih0KXtyZXR1cm4gdD1udWxsPT10Py43Ok1hdGgucG93KC43LHQpLG5ldyBFKHRoaXMuaCx0aGlzLnMsdGhpcy5sKnQsdGhpcy5vcGFjaXR5KX0scmdiOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5oJTM2MCszNjAqKHRoaXMuaDwwKSxlPWlzTmFOKHQpfHxpc05hTih0aGlzLnMpPzA6dGhpcy5zLG49dGhpcy5sLGk9bisobjwuNT9uOjEtbikqZSxyPTIqbi1pO3JldHVybiBuZXcgTigkKHQ+PTI0MD90LTI0MDp0KzEyMCxyLGkpLCQodCxyLGkpLCQodDwxMjA/dCsyNDA6dC0xMjAscixpKSx0aGlzLm9wYWNpdHkpfSxkaXNwbGF5YWJsZTpmdW5jdGlvbigpe3JldHVybigwPD10aGlzLnMmJnRoaXMuczw9MXx8aXNOYU4odGhpcy5zKSkmJjA8PXRoaXMubCYmdGhpcy5sPD0xJiYwPD10aGlzLm9wYWNpdHkmJnRoaXMub3BhY2l0eTw9MX0sZm9ybWF0SHNsOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcGFjaXR5O3JldHVybigxPT09KHQ9aXNOYU4odCk/MTpNYXRoLm1heCgwLE1hdGgubWluKDEsdCkpKT8iaHNsKCI6ImhzbGEoIikrKHRoaXMuaHx8MCkrIiwgIisxMDAqKHRoaXMuc3x8MCkrIiUsICIrMTAwKih0aGlzLmx8fDApKyIlIisoMT09PXQ/IikiOiIsICIrdCsiKSIpfX0pKTtjb25zdCBIPU1hdGguUEkvMTgwLGo9MTgwL01hdGguUEksST00LzI5LE89Ni8yOSxQPTMqTypPO2Z1bmN0aW9uIFModCl7aWYodCBpbnN0YW5jZW9mIEMpcmV0dXJuIG5ldyBDKHQubCx0LmEsdC5iLHQub3BhY2l0eSk7aWYodCBpbnN0YW5jZW9mIEYpcmV0dXJuIEcodCk7dCBpbnN0YW5jZW9mIE58fCh0PWsodCkpO3ZhciBlLG4saT1VKHQucikscj1VKHQuZyksYT1VKHQuYiksbz16KCguMjIyNTA0NSppKy43MTY4Nzg2KnIrLjA2MDYxNjkqYSkvMSk7cmV0dXJuIGk9PT1yJiZyPT09YT9lPW49bzooZT16KCguNDM2MDc0NyppKy4zODUwNjQ5KnIrLjE0MzA4MDQqYSkvLjk2NDIyKSxuPXooKC4wMTM5MzIyKmkrLjA5NzEwNDUqcisuNzE0MTczMyphKS8uODI1MjEpKSxuZXcgQygxMTYqby0xNiw1MDAqKGUtbyksMjAwKihvLW4pLHQub3BhY2l0eSl9ZnVuY3Rpb24gQyh0LGUsbixpKXt0aGlzLmw9K3QsdGhpcy5hPStlLHRoaXMuYj0rbix0aGlzLm9wYWNpdHk9K2l9ZnVuY3Rpb24geih0KXtyZXR1cm4gdD4uMDA4ODU2NDUxNjc5MDM1NjMxP01hdGgucG93KHQsMS8zKTp0L1ArSX1mdW5jdGlvbiBBKHQpe3JldHVybiB0Pk8/dCp0KnQ6UCoodC1JKX1mdW5jdGlvbiBMKHQpe3JldHVybiAyNTUqKHQ8PS4wMDMxMzA4PzEyLjkyKnQ6MS4wNTUqTWF0aC5wb3codCwxLzIuNCktLjA1NSl9ZnVuY3Rpb24gVSh0KXtyZXR1cm4odC89MjU1KTw9LjA0MDQ1P3QvMTIuOTI6TWF0aC5wb3coKHQrLjA1NSkvMS4wNTUsMi40KX1mdW5jdGlvbiBCKHQpe2lmKHQgaW5zdGFuY2VvZiBGKXJldHVybiBuZXcgRih0LmgsdC5jLHQubCx0Lm9wYWNpdHkpO2lmKHQgaW5zdGFuY2VvZiBDfHwodD1TKHQpKSwwPT09dC5hJiYwPT09dC5iKXJldHVybiBuZXcgRihOYU4sMDx0LmwmJnQubDwxMDA/MDpOYU4sdC5sLHQub3BhY2l0eSk7dmFyIGU9TWF0aC5hdGFuMih0LmIsdC5hKSpqO3JldHVybiBuZXcgRihlPDA/ZSszNjA6ZSxNYXRoLnNxcnQodC5hKnQuYSt0LmIqdC5iKSx0LmwsdC5vcGFjaXR5KX1mdW5jdGlvbiBEKHQsZSxuLGkpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD9CKHQpOm5ldyBGKHQsZSxuLG51bGw9PWk/MTppKX1mdW5jdGlvbiBGKHQsZSxuLGkpe3RoaXMuaD0rdCx0aGlzLmM9K2UsdGhpcy5sPStuLHRoaXMub3BhY2l0eT0raX1mdW5jdGlvbiBHKHQpe2lmKGlzTmFOKHQuaCkpcmV0dXJuIG5ldyBDKHQubCwwLDAsdC5vcGFjaXR5KTt2YXIgZT10LmgqSDtyZXR1cm4gbmV3IEModC5sLE1hdGguY29zKGUpKnQuYyxNYXRoLnNpbihlKSp0LmMsdC5vcGFjaXR5KX10KEMsKGZ1bmN0aW9uKHQsZSxuLGkpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD9TKHQpOm5ldyBDKHQsZSxuLG51bGw9PWk/MTppKX0pLGUobix7YnJpZ2h0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBDKHRoaXMubCsxOCoobnVsbD09dD8xOnQpLHRoaXMuYSx0aGlzLmIsdGhpcy5vcGFjaXR5KX0sZGFya2VyOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgQyh0aGlzLmwtMTgqKG51bGw9PXQ/MTp0KSx0aGlzLmEsdGhpcy5iLHRoaXMub3BhY2l0eSl9LHJnYjpmdW5jdGlvbigpe3ZhciB0PSh0aGlzLmwrMTYpLzExNixlPWlzTmFOKHRoaXMuYSk/dDp0K3RoaXMuYS81MDAsbj1pc05hTih0aGlzLmIpP3Q6dC10aGlzLmIvMjAwO3JldHVybiBuZXcgTihMKDMuMTMzODU2MSooZT0uOTY0MjIqQShlKSktMS42MTY4NjY3Kih0PTEqQSh0KSktLjQ5MDYxNDYqKG49LjgyNTIxKkEobikpKSxMKC0uOTc4NzY4NCplKzEuOTE2MTQxNSp0Ky4wMzM0NTQqbiksTCguMDcxOTQ1MyplLS4yMjg5OTE0KnQrMS40MDUyNDI3Km4pLHRoaXMub3BhY2l0eSl9fSkpLHQoRixELGUobix7YnJpZ2h0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBGKHRoaXMuaCx0aGlzLmMsdGhpcy5sKzE4KihudWxsPT10PzE6dCksdGhpcy5vcGFjaXR5KX0sZGFya2VyOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgRih0aGlzLmgsdGhpcy5jLHRoaXMubC0xOCoobnVsbD09dD8xOnQpLHRoaXMub3BhY2l0eSl9LHJnYjpmdW5jdGlvbigpe3JldHVybiBHKHRoaXMpLnJnYigpfX0pKSxvbm1lc3NhZ2U9ZnVuY3Rpb24odCl7Y29uc3RbZSxuLGldPXQuZGF0YSxyPW5ldyBVaW50OENsYW1wZWRBcnJheShuKmkqNCk7Zm9yKGNvbnN0e2Nvb3JkaW5hdGVzOmEsY29sb3JzOm99b2YgZnVuY3Rpb24qKHQsZSxuKXtjb25zdCBpPUQodCwwLDApO2ZvcihsZXQgcj0wO3I8ZTtyKz0xKWZvcihsZXQgdD0wO3Q8bjt0Kz0xKWkuYz1NYXRoLmZsb29yKHIvZSoxMDApLGkubD1NYXRoLmZsb29yKDEwMCooMS10L24pKSx5aWVsZHtjb29yZGluYXRlczp7eDpyLHk6dH0sY29sb3JzOmkucmdiKCl9fShlLG4saSkpe2NvbnN0IHQ9NCooYS55Km4rYS54KTtyW3QrMF09by5yLHJbdCsxXT1vLmcsclt0KzJdPW8uYixyW3QrM109MjU1fXBvc3RNZXNzYWdlKHIpfTsK",{type:"module"})}let Mt;var xt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Gt=(t,e,i,s)=>{for(var o,n=s>1?void 0:s?vt(e,i):e,l=t.length-1;l>=0;l--)(o=t[l])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&xt(e,i,n),n};let Nt=class extends dt{constructor(){super(...arguments),this.hue=0,this.width=500,this.height=300}onClick(t){const e=this.canvas;if(!e)return;const i=e.getBoundingClientRect(),s=Math.min(Math.max(t.clientX-i.x,0),this.width),o=Math.min(Math.max(t.clientY-i.y,0),this.height),n={chroma:Math.floor(s/this.width*100),luminance:Math.floor(100*(1-o/this.height)),hue:this.hue},l=new CustomEvent("change",{detail:n,bubbles:!0,composed:!0});this.dispatchEvent(l)}updated(){const t=this.canvas;if(!t)return;const e=t.getContext("2d");e&&function(t,e,i){const s=new yt;return Mt&&Mt.terminate(),Mt=s,new Promise((o=>{s.onmessage=t=>{o(t.data.slice())},s.postMessage([t,e,i])}))}(this.hue,this.width,this.height).then((t=>{const i=new ImageData(t,this.width,this.height);e.putImageData(i,0,0)}))}render(){return Y`
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
var gt,Tt,Zt;Nt.styles=F`
    :host canvas {
      border-radius: 5px;
      border: 1px solid grey;
      max-width: calc(100vw - 4em);
    }
  `,Gt([ut({type:Number,reflect:!0})],Nt.prototype,"hue",2),Gt([ut({type:Number})],Nt.prototype,"width",2),Gt([ut({type:Number})],Nt.prototype,"height",2),Gt([(gt="canvas",bt({descriptor:t=>{const e={get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(gt)},enumerable:!0,configurable:!0};if(Tt){const i="symbol"==typeof t?Symbol():"__"+t;e.get=function(){var t;return void 0===this[i]&&(this[i]=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(gt)),this[i]}}return e}}))],Nt.prototype,"canvas",2),Gt([(Zt={passive:!0},bt({finisher:(t,e)=>{Object.assign(t.prototype[e],Zt)}}))],Nt.prototype,"onClick",1),Nt=Gt([ct("lch-paint")],Nt);var Lt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Xt=(t,e,i,s)=>{for(var o,n=s>1?void 0:s?jt(e,i):e,l=t.length-1;l>=0;l--)(o=t[l])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&Lt(e,i,n),n};function Ct(t){return t.toString(16).padStart(2,"0")}let Yt=class extends dt{constructor(){super(...arguments),this.chroma=0,this.luminance=0,this.hue=0,this.a=0,this.b=0,this.red=0,this.green=0,this.blue=0,this.setLCH=t=>{const e=l(t);this.luminance=e.l,this.chroma=e.c,this.hue=e.h},this.setLab=t=>{const e=r(t);this.luminance=e.l,this.a=e.a,this.b=e.b},this.setRGB=t=>{const e=h(t);this.red=Math.min(255,Math.max(0,Math.floor(e.r))),this.blue=Math.min(255,Math.max(0,Math.floor(e.b))),this.green=Math.min(255,Math.max(0,Math.floor(e.g)))},this.setFromLCH=({chroma:t=this.chroma,luminance:e=this.luminance,hue:i=this.hue}={})=>{const s=l(e,t,i);this.setLab(s),this.setRGB(s),this.setLCH(s)},this.setFromLab=({luminance:t=this.luminance,a:e=this.a,b:i=this.b}={})=>{const s=r(t,e,i);this.setLCH(s),this.setRGB(s),this.setLab(s)},this.setFromRGB=({red:t=this.red,green:e=this.green,blue:i=this.blue}={})=>{const s=h(t,e,i);this.setLCH(s),this.setLab(s),this.setRGB(s)}}connectedCallback(){super.connectedCallback(),this.setFromLCH()}renderInput(t,e,i,{min:s,max:o,unit:n=""}){return Y`
      <label for="lab-${t}">${t} (${e}) </label>
      <span>${Math.floor(this[e])}${n}</span>
      <input
        id="lab-${t}"
        type="range"
        min=${s}
        max=${o}
        value=${this[e]}
        @input=${t=>{const n=(l=Number(t.target.value),Math.min(o,Math.max(s,l)));var l;t.target.value=Number.isNaN(n)?"":n||0,i({[e]:n||0})}}
      />
    `}updated(){this.setFromLCH();const t={chroma:this.chroma,luminance:this.luminance,hue:this.hue},e=new CustomEvent("change",{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){const t=`#${Ct(this.red)}${Ct(this.green)}${Ct(this.blue)}`;return Y`
      <div class="wrapper">
        <div class="group">
          <h2>LCH</h2>
          ${this.renderInput("L","luminance",this.setFromLCH,{min:0,max:100,unit:"º"})}
          ${this.renderInput("C","chroma",this.setFromLCH,{min:0,max:132})}
          ${this.renderInput("H","hue",this.setFromLCH,{min:0,max:360})}
        </div>

        <div class="group">
          <h2>Lab</h2>
          ${this.renderInput("L","luminance",this.setFromLCH,{min:0,max:100,unit:"º"})}
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
    `}};Yt.styles=F`
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
      grid-template-columns: 100px 3ch 1fr;
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
      grid-column: span 3;
    }
  `,Xt([ut({type:Number,reflect:!0})],Yt.prototype,"chroma",2),Xt([ut({type:Number,reflect:!0})],Yt.prototype,"luminance",2),Xt([ut({type:Number,reflect:!0})],Yt.prototype,"hue",2),Xt([mt()],Yt.prototype,"a",2),Xt([mt()],Yt.prototype,"b",2),Xt([mt()],Yt.prototype,"red",2),Xt([mt()],Yt.prototype,"green",2),Xt([mt()],Yt.prototype,"blue",2),Yt=Xt([ct("color-picker")],Yt);
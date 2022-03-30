function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=e.parcelRequiree5a9;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequiree5a9=n),n.register("27Lyk",(function(e,i){var r,n;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>n),(t=>n=t));var s={};r=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)s[e[i]]=t[e[i]]},n=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n("27Lyk").register(JSON.parse('{"1LzKV":"index.72430e13.js","4KU9L":"generate-colors.worker.6004df98.js"}'));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new Map;class l{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=a.get(this.cssText);return s&&void 0===t&&(a.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new l(i,o)},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u;const d=window.trustedTypes,p=d?d.emptyScript:"",g=window.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v};class y extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,r=this.constructor.elementStyles,s?i.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const e=document.createElement("style"),r=window.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=t.cssText,i.appendChild(e)})),e;var i,r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=m){var r,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const o=(null!==(n=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:f.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Ei=null}}_$AK(t,e){var i,r,n;const s=this.constructor,o=s._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=s.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(r=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==n?n:f.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:y}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.3.1");const $=globalThis.trustedTypes,w=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,k="?"+_,x=`<${k}>`,A=document,E=(t="")=>A.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,N=t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,R=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,H=/"/g,T=/^(?:script|style|textarea|title)$/i,L=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=L(1),j=(L(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),B=new WeakMap,D=A.createTreeWalker(A,129,null,!1),q=(t,e)=>{const i=t.length-1,r=[];let n,s=2===e?"<svg>":"",o=M;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===M?"!--"===l[1]?o=P:void 0!==l[1]?o=R:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=null!=n?n:M,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?O:'"'===l[3]?H:U):o===H||o===U?o=O:o===P||o===R?o=M:(o=O,n=void 0);const u=o===O&&t[e+1].startsWith("/>")?" ":"";s+=o===M?i+x:h>=0?(r.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+_+u):i+_+(-2===h?(r.push(void 0),e):u)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,r]};class V{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const o=t.length-1,a=this.parts,[l,h]=q(t,e);if(this.el=V.createElement(l,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=D.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=h[s++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?X:"@"===e[1]?Y:F})}else a.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(T.test(r.tagName)){const t=r.textContent.split(_),e=t.length-1;if(e>0){r.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],E()),D.nextNode(),a.push({type:2,index:++n});r.append(t[e],E())}}}else if(8===r.nodeType)if(r.data===k)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(_,t+1));)a.push({type:7,index:n}),t+=_.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,r){var n,s,o,a;if(e===j)return e;let l=void 0!==r?null===(n=i._$Cl)||void 0===n?void 0:n[r]:i._$Cu;const h=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,r)),void 0!==r?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=J(t,l._$AS(t,e.values),l,r)),e}class K{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);D.currentNode=n;let s=D.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new W(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new Q(s,this,t)),this.v.push(e),l=r[++a]}o!==(null==l?void 0:l.index)&&(s=D.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,r){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),C(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==j&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):N(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==z&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=V.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new K(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new V(t)),e}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new W(this.A(E()),this.A(E()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,r,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let s=!1;if(void 0===n)t=J(this,t,e,0),s=!C(t)||t!==this._$AH&&t!==j,s&&(this._$AH=t);else{const r=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=J(this,r[i+o],e,o),a===j&&(a=this._$AH[o]),s||(s=!C(a)||a!==this._$AH[o]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}s&&!r&&this.C(t)}C(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends F{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===z?void 0:t}}const G=$?$.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}C(t){t&&t!==z?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class Y extends F{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=J(this,t,e,0))&&void 0!==i?i:z)===j)return;const r=this._$AH,n=t===z&&r!==z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==z&&(r===z||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const tt=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;null==tt||tt(V,W),(null!==(b=globalThis.litHtmlVersions)&&void 0!==b?b:globalThis.litHtmlVersions=[]).push("2.2.1");class rt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,n;const s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let o=s._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new W(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return j}}rt.finalized=!0,rt._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:rt});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:rt});(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ot(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return at({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(s.finisher=function(e){t(e,r)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}}
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
function ct(t,e){return ht({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ut;null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements;function dt(t,e,i){t.prototype=e.prototype=i,i.constructor=t}function pt(t,e){var i=Object.create(t.prototype);for(var r in e)i[r]=e[r];return i}function gt(){}var ft="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",vt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",mt=/^#([0-9a-f]{3,8})$/,yt=new RegExp("^rgb\\(\\s*([+-]?\\d+)\\s*,\\s*([+-]?\\d+)\\s*,\\s*([+-]?\\d+)\\s*\\)$"),bt=new RegExp(`^rgb\\(${vt},${vt},${vt}\\)$`),$t=new RegExp(`^rgba\\(\\s*([+-]?\\d+)\\s*,\\s*([+-]?\\d+)\\s*,\\s*([+-]?\\d+)\\s*,${ft}\\)$`),wt=new RegExp(`^rgba\\(${vt},${vt},${vt},${ft}\\)$`),_t=new RegExp(`^hsl\\(${ft},${vt},${vt}\\)$`),kt=new RegExp(`^hsla\\(${ft},${vt},${vt},${ft}\\)$`),xt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function At(){return this.rgb().formatHex()}function Et(){return this.rgb().formatRgb()}function Ct(t){var e,i;return t=(t+"").trim().toLowerCase(),(e=mt.exec(t))?(i=e[1].length,e=parseInt(e[1],16),6===i?St(e):3===i?new Rt(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===i?Nt(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===i?Nt(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=yt.exec(t))?new Rt(e[1],e[2],e[3],1):(e=bt.exec(t))?new Rt(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=$t.exec(t))?Nt(e[1],e[2],e[3],e[4]):(e=wt.exec(t))?Nt(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=_t.exec(t))?It(e[1],e[2]/100,e[3]/100,1):(e=kt.exec(t))?It(e[1],e[2]/100,e[3]/100,e[4]):xt.hasOwnProperty(t)?St(xt[t]):"transparent"===t?new Rt(NaN,NaN,NaN,0):null}function St(t){return new Rt(t>>16&255,t>>8&255,255&t,1)}function Nt(t,e,i,r){return r<=0&&(t=e=i=NaN),new Rt(t,e,i,r)}function Mt(t){return t instanceof gt||(t=Ct(t)),t?new Rt((t=t.rgb()).r,t.g,t.b,t.opacity):new Rt}function Pt(t,e,i,r){return 1===arguments.length?Mt(t):new Rt(t,e,i,null==r?1:r)}function Rt(t,e,i,r){this.r=+t,this.g=+e,this.b=+i,this.opacity=+r}function Ot(){return`#${Lt(this.r)}${Lt(this.g)}${Lt(this.b)}`}function Ut(){const t=Ht(this.opacity);return`${1===t?"rgb(":"rgba("}${Tt(this.r)}, ${Tt(this.g)}, ${Tt(this.b)}${1===t?")":`, ${t})`}`}function Ht(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Tt(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Lt(t){return((t=Tt(t))<16?"0":"")+t.toString(16)}function It(t,e,i,r){return r<=0?t=e=i=NaN:i<=0||i>=1?t=e=NaN:e<=0&&(t=NaN),new Bt(t,e,i,r)}function jt(t){if(t instanceof Bt)return new Bt(t.h,t.s,t.l,t.opacity);if(t instanceof gt||(t=Ct(t)),!t)return new Bt;if(t instanceof Bt)return t;var e=(t=t.rgb()).r/255,i=t.g/255,r=t.b/255,n=Math.min(e,i,r),s=Math.max(e,i,r),o=NaN,a=s-n,l=(s+n)/2;return a?(o=e===s?(i-r)/a+6*(i<r):i===s?(r-e)/a+2:(e-i)/a+4,a/=l<.5?s+n:2-s-n,o*=60):a=l>0&&l<1?0:o,new Bt(o,a,l,t.opacity)}function zt(t,e,i,r){return 1===arguments.length?jt(t):new Bt(t,e,i,null==r?1:r)}function Bt(t,e,i,r){this.h=+t,this.s=+e,this.l=+i,this.opacity=+r}function Dt(t){return(t=(t||0)%360)<0?t+360:t}function qt(t){return Math.max(0,Math.min(1,t||0))}function Vt(t,e,i){return 255*(t<60?e+(i-e)*t/60:t<180?i:t<240?e+(i-e)*(240-t)/60:e)}dt(gt,Ct,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:At,formatHex:At,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return jt(this).formatHsl()},formatRgb:Et,toString:Et}),dt(Rt,Pt,pt(gt,{brighter(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new Rt(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new Rt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Rt(Tt(this.r),Tt(this.g),Tt(this.b),Ht(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ot,formatHex:Ot,formatHex8:function(){return`#${Lt(this.r)}${Lt(this.g)}${Lt(this.b)}${Lt(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Ut,toString:Ut})),dt(Bt,zt,pt(gt,{brighter(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new Bt(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new Bt(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,i=this.l,r=i+(i<.5?i:1-i)*e,n=2*i-r;return new Rt(Vt(t>=240?t-240:t+120,n,r),Vt(t,n,r),Vt(t<120?t+240:t-120,n,r),this.opacity)},clamp(){return new Bt(Dt(this.h),qt(this.s),qt(this.l),Ht(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Ht(this.opacity);return`${1===t?"hsl(":"hsla("}${Dt(this.h)}, ${100*qt(this.s)}%, ${100*qt(this.l)}%${1===t?")":`, ${t})`}`}}));const Jt=Math.PI/180,Kt=180/Math.PI;function Wt(t){if(t instanceof Zt)return new Zt(t.l,t.a,t.b,t.opacity);if(t instanceof ie)return re(t);t instanceof Rt||(t=Mt(t));var e,i,r=Qt(t.r),n=Qt(t.g),s=Qt(t.b),o=Gt((.2225045*r+.7168786*n+.0606169*s)/1);return r===n&&n===s?e=i=o:(e=Gt((.4360747*r+.3850649*n+.1430804*s)/.96422),i=Gt((.0139322*r+.0971045*n+.7141733*s)/.82521)),new Zt(116*o-16,500*(e-o),200*(o-i),t.opacity)}function Ft(t,e,i,r){return 1===arguments.length?Wt(t):new Zt(t,e,i,null==r?1:r)}function Zt(t,e,i,r){this.l=+t,this.a=+e,this.b=+i,this.opacity=+r}function Gt(t){return t>.008856451679035631?Math.pow(t,1/3):t/.12841854934601665+.13793103448275862}function Xt(t){return t>.20689655172413793?t*t*t:.12841854934601665*(t-.13793103448275862)}function Yt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Qt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function te(t){if(t instanceof ie)return new ie(t.h,t.c,t.l,t.opacity);if(t instanceof Zt||(t=Wt(t)),0===t.a&&0===t.b)return new ie(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*Kt;return new ie(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function ee(t,e,i,r){return 1===arguments.length?te(t):new ie(i,e,t,null==r?1:r)}function ie(t,e,i,r){this.h=+t,this.c=+e,this.l=+i,this.opacity=+r}function re(t){if(isNaN(t.h))return new Zt(t.l,0,0,t.opacity);var e=t.h*Jt;return new Zt(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}dt(Zt,Ft,pt(gt,{brighter(t){return new Zt(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker(t){return new Zt(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,i=isNaN(this.b)?t:t-this.b/200;return new Rt(Yt(3.1338561*(e=.96422*Xt(e))-1.6168667*(t=1*Xt(t))-.4906146*(i=.82521*Xt(i))),Yt(-.9787684*e+1.9161415*t+.033454*i),Yt(.0719453*e-.2289914*t+1.4052427*i),this.opacity)}})),dt(ie,(function(t,e,i,r){return 1===arguments.length?te(t):new ie(t,e,i,null==r?1:r)}),pt(gt,{brighter(t){return new ie(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker(t){return new ie(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb(){return re(this).rgb()}}));const ne={lch:{l:[0,100],c:[0,132],h:[0,360]},lab:{l:[0,100],a:[-128,127],b:[-128,127]},rgb:{r:[0,255],g:[0,255],b:[0,255]},hsl:{h:[0,360],s:[0,1],l:[0,1]}},se=ue(ee(57,110,283.8)),oe=(t,e)=>{switch(t.type){case"lch":{const i=ee(e.lch.raw),r=t.kind;return i[r]=le(t.value,...ne.lch[r]),ce(i,e.lch.raw)?e:ue(i)}case"lab":{const i=Ft(e.lab.raw),r=t.kind;return i[r]=le(t.value,...ne.lab[r]),ce(i,e.lab.raw)?e:ue(i)}case"rgb":{const i=Pt(e.rgb.raw),r=t.kind;return i[r]=le(t.value,...ne.rgb[r]),ce(i,e.rgb.raw)?e:ue(i)}case"hsl":{const i=zt(e.hsl.raw),r=t.kind;return i[r]=le(t.value,...ne.hsl[r]),ce(i,e.hsl.raw)?e:ue(i)}}},ae=function(t,e){void 0===e&&(e=function(t){return t});var i=function(){var t=new Set;return[function(e){return t.add(e),e()},t]}(),r=i[0],n=i[1],s=e("function"==typeof t?t(r):t),o=new Set,a={value:!1},l=function(t,i){var r=e(t,s);if(!Object.is(s,r)){a.value=!0;var n={value:!1};a=n,s=r,o.forEach((function(t){n.value||t(s,i)}))}};function h(t,e){return void 0===e&&(e=new WeakSet),0===arguments.length?s:Promise.resolve("function"==typeof t?t(s):t).then((function(t){return e.has(h)||(e.add(h),l(t,e)),s}))}return"function"==typeof t&&n.forEach((function(e){e.on((function(e,i){l(t(r),i)}))})),h.on=function(t){o.add(t);var e=function(){return o.delete(t)};return Object.defineProperty(e,"listening",{get:function(){return o.has(t)}}),e},h}([],((t,e=se)=>{let i=e;for(const e of t)i=oe(e,i);return i}));function le(t,e,i){return Math.min(i,Math.max(e,t||0))}function he(t){return JSON.stringify(Object.entries(t).sort((([t,e])=>t[0].localeCompare(e[0]))))}function ce(t,e){return he(t)===he(e)}function ue(t){const e=ee(t),i=Ft(t),r=Pt(t.formatHex()),n=zt(t.formatHex());return{lch:{values:{l:e.l,c:e.c,h:e.h},raw:e},lab:{values:{l:i.l,a:i.a,b:i.b},raw:i},rgb:{values:{r:r.r,g:r.g,b:r.b},raw:r},hsl:{values:{h:n.h,s:n.s,l:n.l},raw:n}}}var de,pe;pe=function(t,e,i){if(e===self.location.origin)return t;var r=i?"import "+JSON.stringify(t)+";":"importScripts("+JSON.stringify(t)+");";return URL.createObjectURL(new Blob([r],{type:"application/javascript"}))};let ge=new URL(n("27Lyk").resolve("4KU9L"),import.meta.url);de=pe(ge.toString(),ge.origin,!0);const fe=()=>{let t;return(e,i,r)=>{const n=new Worker(de);return t&&t.terminate(),t=n,new Promise((t=>{n.onmessage=e=>{t(e.data.slice())},n.postMessage([e,i,r])}))}};var ve=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let me=class extends rt{constructor(){super(),this.width=500,this.height=300,this.isPressed=!1,this.generateColors=fe(),this.updateMarkerPosition=()=>{const t=this.marker,e=this.canvas;if(!t||!e)return;const i=e.getBoundingClientRect(),r=ae().lch.values,n=Math.floor(r.c/132*i.width),s=Math.floor((1-r.l/100)*i.height);t.style.cssText=`transform: translate(calc(${n}px - 50%), calc(${s}px - 50%))`},this.updateCanvasColors=()=>{const t=this.canvas;if(!t)return;const e=t.getContext("2d");if(!e)return;const i=ae().lch.values;this.generateColors(i.h,this.width,this.height).then((t=>{const i=new ImageData(t,this.width,this.height);e.putImageData(i,0,0)}))},ae.on((()=>{this.updateCanvasColors(),this.updateMarkerPosition()}))}onPositionChange(t){const e=this.canvas;if(!e||!this.isPressed)return;const i=e.getBoundingClientRect(),r=Math.min(Math.max(t.clientX-i.x,0),i.width),n=Math.min(Math.max(t.clientY-i.y,0),i.height),s=Math.floor(100*(1-n/i.height)),o=Math.floor(r/i.width*132);ae([{type:"lch",kind:"l",value:s},{type:"lch",kind:"c",value:o}])}firstUpdated(){this.updateMarkerPosition()}updated(t){(t.has("width")||t.has("height"))&&this.updateCanvasColors()}render(){return I`
      <div class="wrapper">
        <canvas
          @pointerdown=${t=>{t.currentTarget.setPointerCapture(t.pointerId),this.isPressed=!0,this.onPositionChange(t)}}
          @pointermove=${this.onPositionChange}
          @pointerup=${t=>{t.currentTarget.releasePointerCapture(t.pointerId),this.isPressed=!1}}
          width="${this.width}px"
          height="${this.height}px"
        ></canvas>
        <div class="marker"></div>
      </div>
    `}};me.styles=h`
    :host canvas {
      border-radius: 5px;
      border: 1px solid grey;
      max-width: calc(100vw - 4em);
      /* Avoid making the page scroll on mobile when we are pressing on it */
      touch-action: none;
    }

    :host .wrapper {
      position: relative;
    }

    :host .marker {
      position: absolute;
      top: 0px;
      left: 0px;
      pointer-events: none;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 1px solid var(--contrast);
      z-index: 1;
    }
  `,ve([at({type:Number})],me.prototype,"width",void 0),ve([at({type:Number})],me.prototype,"height",void 0),ve([ct("canvas")],me.prototype,"canvas",void 0),ve([ct(".marker")],me.prototype,"marker",void 0),ve([function(t){return ht({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}({passive:!0})],me.prototype,"onPositionChange",null),me=ve([st("lch-paint")],me);var ye=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};const be=h`
  width: ${14}px;
  height: ${22}px;
  background: #00000000;
  box-shadow: 0 0 0 ${1}px var(--black),
    inset 0 0 0 ${1}px var(--white);
  border-radius: 3px;
  cursor: pointer;
`,$e=h`
  background: ${h`var(--track-background, #9e9e9e), var(--previous-track-background, #9e9e9e)`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 ${1}px ${h`var(--contrast)`};
  border-radius: 3px;
  width: 100%;
  height: ${20}px;
  cursor: pointer;
`;let we=class extends rt{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.referenceColor=Pt(0,0,0),this.valueToModify="h",this.getBackgroundRange=()=>{clearTimeout(this.throttleId);const t=this.referenceColor.copy(),e={...t};delete e[this.valueToModify];const i=JSON.stringify(e);if(this.prevBackgroundRange){if(this.prevColor===i)return this.prevBackgroundRange;const t=performance.now();if(null!=this.timePrevOp&&t-this.timePrevOp<100)return this.throttleId=window.setTimeout((()=>this.requestUpdate()),100),this.prevBackgroundRange}const r=Math.round((this.max-this.min)/this.step),n=new Uint8ClampedArray(4*r);for(let e=0;e<=r;e++){t[this.valueToModify]=e*this.step+this.min;const i=t.rgb(),r=4*e;n[r+0]=i.r,n[r+1]=i.g,n[r+2]=i.b,n[r+3]=255}const s=document.createElement("canvas");s.width=r,s.height=1;const o=new ImageData(n,r,1);s.getContext("2d",{alpha:!1}).putImageData(o,0,0);const a=s.toDataURL();return this.prevBackgroundRange=a,this.prevColor=i,this.timePrevOp=performance.now(),a}}render(){return I`<input
      .min=${this.min}
      .max=${this.max}
      .step=${this.step}
      .value=${this.value}
      style="--previous-track-background: url(${this.prevBackgroundRange}); --track-background: url(${this.getBackgroundRange()})"
      type="range"
      @input=${t=>{const e=t.target,i=Number(e.value);this.value=Number.isNaN(i)?void 0:i}}
    />`}};we.styles=h`
    :host input[type="range"] {
      width: 100%;
      margin: 0.5px 0;
      background-color: transparent;
      -webkit-appearance: none;
    }

    :host input[type="range"]::-webkit-slider-runnable-track {
      ${$e}
    }
    :host input[type="range"]::-moz-range-track {
      ${$e}
    }

    :host input[type="range"]::-moz-range-thumb {
      ${be}
    }
    :host input[type="range"]::-webkit-slider-thumb {
      ${be}
      margin-top: -${1}px;
      -webkit-appearance: none;
    }

    :host input[type="range"]:focus {
      outline: none;
    }

    :host input[type="range"]:hover::-moz-range-thumb {
      background: #00000044;
    }
    :host input[type="range"]:hover::-webkit-slider-thumb {
      background: #00000044;
    }
    :host input[type="range"]:focus-visible::-moz-range-thumb {
      outline: -moz-mac-focusring auto 1px;
      outline-offset: 1px;
    }
    :host input[type="range"]:focus-visible::-webkit-slider-thumb {
      outline: -webkit-focus-ring-color auto 1px;
      outline-offset: 1px;
    }
  `,ye([at({type:Number,reflect:!0})],we.prototype,"min",void 0),ye([at({type:Number,reflect:!0})],we.prototype,"max",void 0),ye([at({type:Number,reflect:!0})],we.prototype,"step",void 0),ye([at({type:Number,reflect:!0})],we.prototype,"value",void 0),ye([lt()],we.prototype,"referenceColor",void 0),ye([lt()],we.prototype,"valueToModify",void 0),we=ye([st("color-slider")],we);class _e{constructor(t,e){this.host=t,t.addController(this),this.cup=e,this.listener=e.on((()=>this.host.requestUpdate()))}hostDisconnected(){this.listener()}}var ke=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};function xe(t){return Math.floor(t).toString(16).padStart(2,"0")}function Ae(t,e=2){const i=10**e;return Math.round(t*i)/i}const Ee=window.matchMedia("(max-width: 595px)");let Ce=class extends rt{constructor(){super(),this.lchController=new _e(this,ae),this.isMobile=Ee.matches,this.viewListener=t=>{this.isMobile=t.matches},Ee.addListener(this.viewListener)}disconnectedCallback(){Ee.removeListener(this.viewListener)}renderInput({category:t,kind:e,label:i,shortName:r=e.toUpperCase(),min:n,max:s,step:o=1,mod:a=(t=>t),unit:l=""}){const h=ae(),c=h[t].values[e],u=`${t}--${e}`;return I`
      <label for="slider-${u}">${r} (${i})</label>
      <color-slider
        .id="slider-${u}"
        .min=${n}
        .max=${s}
        .step=${o}
        .value=${c}
        .referenceColor=${h[t].raw}
        .valueToModify=${e}
        @input=${i=>{const r=i.target,o=(a=r.value||0,Math.min(s,Math.max(n,a)));var a;r.value=o,ae([{type:t,kind:e,value:o}])}}
      ></color-slider>
      <span
        >${Ae(a(c),Math.floor(-Math.log(o)/Math.log(10)))}${l}</span
      >
    `}willUpdate(t){const e=new Set(t.keys());e.delete("luminance"),e.delete("chroma"),e.delete("hue"),e.size}render(){const t=ae(),e=`#${xe(t.rgb.values.r)}${xe(t.rgb.values.g)}${xe(t.rgb.values.b)}`;return I`
      <div class="wrapper">
        <details open>
          <summary><h2>LCH</h2></summary>
          <div class="group">
            ${this.renderInput({category:"lch",kind:"l",label:"luminance",min:0,max:100,unit:"º"})}
            ${this.renderInput({category:"lch",kind:"c",label:"chroma",min:0,max:132})}
            ${this.renderInput({category:"lch",kind:"h",label:"hue",min:0,max:360})}

            <pre class="code-wrapper"><code class="code">LCH(${Ae(t.lch.values.l)}% ${Ae(t.lch.values.c)} ${Ae(t.lch.values.h)})</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>Lab</h2></summary>
          <div class="group">
            ${this.renderInput({category:"lab",kind:"l",label:"luminance",min:0,max:100,unit:"º"})}
            ${this.renderInput({category:"lab",kind:"a",label:"a",shortName:"a",min:-128,max:127})}
            ${this.renderInput({category:"lab",kind:"b",label:"b",shortName:"b",min:-128,max:127})}

            <pre class="code-wrapper"><code class='code'>Lab(${Ae(t.lab.values.l)}% ${Ae(t.lab.values.a)} ${Ae(t.lab.values.b)})</code></pre>
          </div>
        </details>
        <!--  -->
        <details ?open=${!this.isMobile}>
          <summary><h2>RGB</h2></summary>
          <div class="group">
            ${this.renderInput({category:"rgb",kind:"r",label:"red",min:0,max:255})}
            ${this.renderInput({category:"rgb",kind:"g",label:"green",min:0,max:255})}
            ${this.renderInput({category:"rgb",kind:"b",label:"blue",min:0,max:255})}

            <pre class="code-wrapper"><code class='code'>rgb(${Ae(t.rgb.values.r)} ${Ae(t.rgb.values.g)} ${Ae(t.rgb.values.b)})</code>
<code class='code'>${e}</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>HSL</h2></summary>
          <div class="group">
            ${this.renderInput({category:"hsl",kind:"h",label:"hue",min:0,max:360})}
            ${this.renderInput({category:"hsl",kind:"s",label:"saturation",min:0,step:.01,max:1,mod:t=>100*t,unit:"%"})}
            ${this.renderInput({category:"hsl",kind:"l",label:"lightness",min:0,step:.01,max:1,mod:t=>100*t,unit:"%"})}

            <pre class="code-wrapper"><code class='code'>hsl(${Ae(t.hsl.values.h)} ${100*Ae(t.hsl.values.s)}% ${Ae(100*t.hsl.values.l)}%)</code></pre>
          </div>
        </details>
      </div>
    `}};Ce.styles=h`
    :host label {
      display: block;
    }

    :host .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1em;
      column-gap: 2em;
      margin-bottom: 1em;
    }
    @media (max-width: 595px) {
      :host .wrapper {
        grid-template-columns: 1fr;
      }
    }

    :host .group {
      display: grid;
      grid-template-columns: 1fr 5ch;
      grid-template-rows: repeat(6, auto) 1fr;
      column-gap: 1em;
      row-gap: 0.5em;

      margin-top: 1em;
    }

    :host h2 {
      display: inline-block;
      margin: 0;
    }

    :host label {
      grid-column: span 2;
    }

    :host color-slider {
      /* Avoid making the page scroll on mobile when we are pressing on it */
      touch-action: none;
    }

    :host .code-wrapper {
      grid-column: span 2;
    }
    :host .code {
      font-family: "Fira Code", monospace;
    }
  `,ke([lt()],Ce.prototype,"isMobile",void 0),Ce=ke([st("color-picker")],Ce),document.documentElement.style.backgroundColor=ae().rgb.raw.formatHex(),ae.on((({rgb:t})=>{document.documentElement.style.backgroundColor=t.raw.formatHex()}));
//# sourceMappingURL=index.72430e13.js.map

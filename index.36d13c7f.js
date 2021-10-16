function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=e.parcelRequiree5a9;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequiree5a9=n),n.register("bXuNP",(function(e,i){var r,n;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>n),(t=>n=t));var s={};r=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)s[e[i]]=t[e[i]]},n=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n("bXuNP").register(JSON.parse('{"d3X8m":"index.36d13c7f.js","WugCC":"generate-colors.worker.b6689dd7.js"}'));
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
 */;var u;const d=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,r=this.constructor.elementStyles,s?i.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const e=document.createElement("style"),r=window.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=t.cssText,i.appendChild(e)})),e;var i,r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=f){var r,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const o=(null!==(n=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:p.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Ei=null}}_$AK(t,e){var i,r,n;const s=this.constructor,o=s._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=s.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(r=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==n?n:p.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.0.1");const b=globalThis.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,_=`<${w}>`,k=document,x=(t="")=>k.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,S=t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,N=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,O=/"/g,U=/^(?:script|style|textarea)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),T=H(1),I=(H(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),L=new WeakMap,z=k.createTreeWalker(k,129,null,!1),B=(t,e)=>{const i=t.length-1,r=[];let n,s=2===e?"<svg>":"",o=C;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===C?"!--"===l[1]?o=M:void 0!==l[1]?o=N:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=P):void 0!==l[3]&&(o=P):o===P?">"===l[0]?(o=null!=n?n:C,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?P:'"'===l[3]?O:R):o===O||o===R?o=P:o===M||o===N?o=C:(o=P,n=void 0);const u=o===P&&t[e+1].startsWith("/>")?" ":"";s+=o===C?i+_:h>=0?(r.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+$+u):i+$+(-2===h?(r.push(void 0),e):u)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==y?y.createHTML(a):a,r]};class D{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const o=t.length-1,a=this.parts,[l,h]=B(t,e);if(this.el=D.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=z.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=h[s++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?F:"@"===e[1]?K:V})}else a.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(U.test(r.tagName)){const t=r.textContent.split($),e=t.length-1;if(e>0){r.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],x()),z.nextNode(),a.push({type:2,index:++n});r.append(t[e],x())}}}else if(8===r.nodeType)if(r.data===w)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf($,t+1));)a.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,r){var n,s,o,a;if(e===I)return e;let l=void 0!==r?null===(n=i._$Cl)||void 0===n?void 0:n[r]:i._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,r)),void 0!==r?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,r)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);z.currentNode=n;let s=z.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new J(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new Z(s,this,t)),this.v.push(e),l=r[++a]}o!==(null==l?void 0:l.index)&&(s=z.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,r){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),A(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==I&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):S(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==j&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(k.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=D.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new W(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new D(t)),e}M(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new J(this.A(x()),this.A(x()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,r,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let s=!1;if(void 0===n)t=q(this,t,e,0),s=!A(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{const r=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=q(this,r[i+o],e,o),a===I&&(a=this._$AH[o]),s||(s=!A(a)||a!==this._$AH[o]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}s&&!r&&this.k(t)}k(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends V{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===j?void 0:t}}class F extends V{constructor(){super(...arguments),this.type=4}k(t){t&&t!==j?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class K extends V{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:j)===I)return;const r=this._$AH,n=t===j&&r!==j||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==j&&(r===j||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const G=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,Q;null==G||G(D,J),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.0.1");class tt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,n;const s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let o=s._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new J(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return I}}tt.finalized=!0,tt._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt});(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(t){return nt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(s.finisher=function(e){t(e,r)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}}
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
function at(t,e){return ot({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t,e,i){t.prototype=e.prototype=i,i.constructor=t}function ht(t,e){var i=Object.create(t.prototype);for(var r in e)i[r]=e[r];return i}function ct(){}var ut="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",dt="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",pt=/^#([0-9a-f]{3,8})$/,gt=new RegExp("^rgb\\("+["\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*"]+"\\)$"),ft=new RegExp("^rgb\\("+[dt,dt,dt]+"\\)$"),vt=new RegExp("^rgba\\("+["\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*",ut]+"\\)$"),mt=new RegExp("^rgba\\("+[dt,dt,dt,ut]+"\\)$"),bt=new RegExp("^hsl\\("+[ut,dt,dt]+"\\)$"),yt=new RegExp("^hsla\\("+[ut,dt,dt,ut]+"\\)$"),$t={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function wt(){return this.rgb().formatHex()}function _t(){return this.rgb().formatRgb()}function kt(t){var e,i;return t=(t+"").trim().toLowerCase(),(e=pt.exec(t))?(i=e[1].length,e=parseInt(e[1],16),6===i?xt(e):3===i?new Ct(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===i?At(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===i?At(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=gt.exec(t))?new Ct(e[1],e[2],e[3],1):(e=ft.exec(t))?new Ct(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=vt.exec(t))?At(e[1],e[2],e[3],e[4]):(e=mt.exec(t))?At(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=bt.exec(t))?Rt(e[1],e[2]/100,e[3]/100,1):(e=yt.exec(t))?Rt(e[1],e[2]/100,e[3]/100,e[4]):$t.hasOwnProperty(t)?xt($t[t]):"transparent"===t?new Ct(NaN,NaN,NaN,0):null}function xt(t){return new Ct(t>>16&255,t>>8&255,255&t,1)}function At(t,e,i,r){return r<=0&&(t=e=i=NaN),new Ct(t,e,i,r)}function Et(t){return t instanceof ct||(t=kt(t)),t?new Ct((t=t.rgb()).r,t.g,t.b,t.opacity):new Ct}function St(t,e,i,r){return 1===arguments.length?Et(t):new Ct(t,e,i,null==r?1:r)}function Ct(t,e,i,r){this.r=+t,this.g=+e,this.b=+i,this.opacity=+r}function Mt(){return"#"+Pt(this.r)+Pt(this.g)+Pt(this.b)}function Nt(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Pt(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Rt(t,e,i,r){return r<=0?t=e=i=NaN:i<=0||i>=1?t=e=NaN:e<=0&&(t=NaN),new Ht(t,e,i,r)}function Ot(t){if(t instanceof Ht)return new Ht(t.h,t.s,t.l,t.opacity);if(t instanceof ct||(t=kt(t)),!t)return new Ht;if(t instanceof Ht)return t;var e=(t=t.rgb()).r/255,i=t.g/255,r=t.b/255,n=Math.min(e,i,r),s=Math.max(e,i,r),o=NaN,a=s-n,l=(s+n)/2;return a?(o=e===s?(i-r)/a+6*(i<r):i===s?(r-e)/a+2:(e-i)/a+4,a/=l<.5?s+n:2-s-n,o*=60):a=l>0&&l<1?0:o,new Ht(o,a,l,t.opacity)}function Ut(t,e,i,r){return 1===arguments.length?Ot(t):new Ht(t,e,i,null==r?1:r)}function Ht(t,e,i,r){this.h=+t,this.s=+e,this.l=+i,this.opacity=+r}function Tt(t,e,i){return 255*(t<60?e+(i-e)*t/60:t<180?i:t<240?e+(i-e)*(240-t)/60:e)}lt(ct,kt,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:wt,formatHex:wt,formatHsl:function(){return Ot(this).formatHsl()},formatRgb:_t,toString:_t}),lt(Ct,St,ht(ct,{brighter:function(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new Ct(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Ct(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Mt,formatHex:Mt,formatRgb:Nt,toString:Nt})),lt(Ht,Ut,ht(ct,{brighter:function(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new Ht(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Ht(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,i=this.l,r=i+(i<.5?i:1-i)*e,n=2*i-r;return new Ct(Tt(t>=240?t-240:t+120,n,r),Tt(t,n,r),Tt(t<120?t+240:t-120,n,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));const It=Math.PI/180,jt=180/Math.PI;function Lt(t){if(t instanceof Bt)return new Bt(t.l,t.a,t.b,t.opacity);if(t instanceof Ft)return Kt(t);t instanceof Ct||(t=Et(t));var e,i,r=Jt(t.r),n=Jt(t.g),s=Jt(t.b),o=Dt((.2225045*r+.7168786*n+.0606169*s)/1);return r===n&&n===s?e=i=o:(e=Dt((.4360747*r+.3850649*n+.1430804*s)/.96422),i=Dt((.0139322*r+.0971045*n+.7141733*s)/.82521)),new Bt(116*o-16,500*(e-o),200*(o-i),t.opacity)}function zt(t,e,i,r){return 1===arguments.length?Lt(t):new Bt(t,e,i,null==r?1:r)}function Bt(t,e,i,r){this.l=+t,this.a=+e,this.b=+i,this.opacity=+r}function Dt(t){return t>.008856451679035631?Math.pow(t,1/3):t/.12841854934601665+.13793103448275862}function qt(t){return t>.20689655172413793?t*t*t:.12841854934601665*(t-.13793103448275862)}function Wt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Jt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Vt(t){if(t instanceof Ft)return new Ft(t.h,t.c,t.l,t.opacity);if(t instanceof Bt||(t=Lt(t)),0===t.a&&0===t.b)return new Ft(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*jt;return new Ft(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Xt(t,e,i,r){return 1===arguments.length?Vt(t):new Ft(i,e,t,null==r?1:r)}function Ft(t,e,i,r){this.h=+t,this.c=+e,this.l=+i,this.opacity=+r}function Kt(t){if(isNaN(t.h))return new Bt(t.l,0,0,t.opacity);var e=t.h*It;return new Bt(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}lt(Bt,zt,ht(ct,{brighter:function(t){return new Bt(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Bt(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,i=isNaN(this.b)?t:t-this.b/200;return new Ct(Wt(3.1338561*(e=.96422*qt(e))-1.6168667*(t=1*qt(t))-.4906146*(i=.82521*qt(i))),Wt(-.9787684*e+1.9161415*t+.033454*i),Wt(.0719453*e-.2289914*t+1.4052427*i),this.opacity)}})),lt(Ft,(function(t,e,i,r){return 1===arguments.length?Vt(t):new Ft(t,e,i,null==r?1:r)}),ht(ct,{brighter:function(t){return new Ft(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Ft(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Kt(this).rgb()}}));const Zt={lch:{l:[0,100],c:[0,132],h:[0,360]},lab:{l:[0,100],a:[-128,127],b:[-128,127]},rgb:{r:[0,255],g:[0,255],b:[0,255]},hsl:{h:[0,360],s:[0,1],l:[0,1]}},Gt=re(Xt(57,110,283.8)),Yt=(t,e)=>{switch(t.type){case"lch":{const i=Xt(e.lch.raw),r=t.kind;return i[r]=te(t.value,...Zt.lch[r]),ie(i,e.lch.raw)?e:re(i)}case"lab":{const i=zt(e.lab.raw),r=t.kind;return i[r]=te(t.value,...Zt.lab[r]),ie(i,e.lab.raw)?e:re(i)}case"rgb":{const i=St(e.rgb.raw),r=t.kind;return i[r]=te(t.value,...Zt.rgb[r]),ie(i,e.rgb.raw)?e:re(i)}case"hsl":{const i=Ut(e.hsl.raw),r=t.kind;return i[r]=te(t.value,...Zt.hsl[r]),ie(i,e.hsl.raw)?e:re(i)}}},Qt=function(t,e){void 0===e&&(e=function(t){return t});var i=new Set,r=function(){var t=new Set;return[function(e){return t.add(e),e()},t]}(),n=r[0],s=r[1],o=e("function"==typeof t?t(n):t),a={cancelled:!1},l=function(t,r){var n=e(t,o);if(!Object.is(o,n)){a.cancelled=!0;var s={cancelled:!1};a=s,o=n,i.forEach((function(t){s.cancelled||t(o,r)}))}};function h(t,e){return void 0===e&&(e=new WeakSet),0===arguments.length?o:Promise.resolve("function"==typeof t?t(o):t).then((function(t){return e.has(h)||(e.add(h),l(t,e)),o}))}return"function"==typeof t&&s.forEach((function(e){e.on((function(e,i){l(t(n),i)}))})),h.on=function(t){i.add(t);var e=function(){return i.delete(t)};return Object.defineProperty(e,"listening",{get:function(){return i.has(t)}}),e},h}([],((t,e=Gt)=>{let i=e;for(const e of t)i=Yt(e,i);return i}));function te(t,e,i){return Math.min(i,Math.max(e,t||0))}function ee(t){return JSON.stringify(Object.entries(t).sort((([t,e])=>t[0].localeCompare(e[0]))))}function ie(t,e){return ee(t)===ee(e)}function re(t){const e=Xt(t),i=zt(t),r=St(t.formatHex()),n=Ut(t.formatHex());return{lch:{values:{l:e.l,c:e.c,h:e.h},raw:e},lab:{values:{l:i.l,a:i.a,b:i.b},raw:i},rgb:{values:{r:r.r,g:r.g,b:r.b},raw:r},hsl:{values:{h:n.h,s:n.s,l:n.l},raw:n}}}var ne,se,oe,ae;se=function(t,e,i){if(e===self.location.origin)return t;var r=i?"import "+JSON.stringify(t)+";":"importScripts("+JSON.stringify(t)+");";return URL.createObjectURL(new Blob([r],{type:"application/javascript"}))};var le={};function he(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}oe=function(t){var e=le[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return he(t[2])}return"/"}(),le[t]=e),e},ae=function(t){var e=(""+t).match(/(https?|file|ftp):\/\/[^/]+/);if(!e)throw new Error("Origin not found");return e[0]};let ce=oe("d3X8m")+n("bXuNP").resolve("WugCC");ne=se(ce,ae(ce),!0);const ue=()=>{let t;return(e,i,r)=>{const n=new Worker(ne,{type:"module"});return t&&t.terminate(),t=n,new Promise((t=>{n.onmessage=e=>{t(e.data.slice())},n.postMessage([e,i,r])}))}};var de=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let pe=class extends tt{constructor(){super(),this.width=500,this.height=300,this.isPressed=!1,this.generateColors=ue(),this.updateMarkerPosition=()=>{const t=this.marker,e=this.canvas;if(!t||!e)return;const i=e.getBoundingClientRect(),r=Qt().lch.values,n=Math.floor(r.c/132*i.width),s=Math.floor((1-r.l/100)*i.height);t.style.cssText=`transform: translate(calc(${n}px - 50%), calc(${s}px - 50%))`},this.updateCanvasColors=()=>{const t=this.canvas;if(!t)return;const e=t.getContext("2d");if(!e)return;const i=Qt().lch.values;this.generateColors(i.h,this.width,this.height).then((t=>{const i=new ImageData(t,this.width,this.height);e.putImageData(i,0,0)}))},Qt.on((()=>{this.updateCanvasColors(),this.updateMarkerPosition()}))}onPositionChange(t){const e=this.canvas;if(!e||!this.isPressed)return;const i=e.getBoundingClientRect(),r=Math.min(Math.max(t.clientX-i.x,0),i.width),n=Math.min(Math.max(t.clientY-i.y,0),i.height),s=Math.floor(100*(1-n/i.height)),o=Math.floor(r/i.width*132);Qt([{type:"lch",kind:"l",value:s},{type:"lch",kind:"c",value:o}])}firstUpdated(){this.updateMarkerPosition()}updated(t){(t.has("width")||t.has("height"))&&this.updateCanvasColors()}render(){return T`
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
    `}};var ge;pe.styles=h`
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
  `,de([nt({type:Number})],pe.prototype,"width",void 0),de([nt({type:Number})],pe.prototype,"height",void 0),de([at("canvas")],pe.prototype,"canvas",void 0),de([at(".marker")],pe.prototype,"marker",void 0),de([(ge={passive:!0},ot({finisher:(t,e)=>{Object.assign(t.prototype[e],ge)}}))],pe.prototype,"onPositionChange",null),pe=de([it("lch-paint")],pe);var fe=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};const ve=h`
  width: ${14}px;
  height: ${22}px;
  background: #00000000;
  box-shadow: 0 0 0 ${1}px var(--black),
    inset 0 0 0 ${1}px var(--white);
  border-radius: 3px;
  cursor: pointer;
`,me=(h`var(--track-background-hover, #bbbbbb)`,h`var(--track-background-focus, #cbcbcb)`,h`
  background: ${h`var(--track-background, #9e9e9e)`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 ${1}px ${h`var(--contrast)`};
  border-radius: 3px;
  width: 100%;
  height: ${20}px;
  cursor: pointer;
`);let be=class extends tt{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.referenceColor=St(0,0,0),this.valueToModify="h",this.getBackgroundRange=()=>{clearTimeout(this.throttleId);const t=this.referenceColor.copy(),e={...t};delete e[this.valueToModify];const i=JSON.stringify(e);if(this.prevBackgroundRange){if(this.prevColor===i)return this.prevBackgroundRange;const t=performance.now();if(null!=this.timePrevOp&&t-this.timePrevOp<100)return this.throttleId=window.setTimeout((()=>this.requestUpdate()),100),this.prevBackgroundRange}const r=Math.round((this.max-this.min)/this.step),n=new Uint8ClampedArray(4*r);for(let e=0;e<=r;e++){t[this.valueToModify]=e*this.step;const i=t.rgb(),r=4*e;n[r+0]=i.r,n[r+1]=i.g,n[r+2]=i.b,n[r+3]=255}const s=document.createElement("canvas");s.width=r,s.height=1;const o=new ImageData(n,r,1);s.getContext("2d",{alpha:!1}).putImageData(o,0,0);const a=s.toDataURL();return this.prevBackgroundRange=a,this.prevColor=i,this.timePrevOp=performance.now(),a}}render(){return T`<input
      .min=${this.min}
      .max=${this.max}
      .step=${this.step}
      .value=${this.value}
      style="--track-background: url(${this.getBackgroundRange()})"
      type="range"
      @input=${t=>{const e=t.target,i=Number(e.value);this.value=Number.isNaN(i)?void 0:i}}
    />`}};be.styles=h`
    :host input[type="range"] {
      width: 100%;
      margin: 0.5px 0;
      background-color: transparent;
      -webkit-appearance: none;
    }

    :host input[type="range"]::-webkit-slider-runnable-track {
      ${me}
    }
    :host input[type="range"]::-moz-range-track {
      ${me}
    }

    :host input[type="range"]::-moz-range-thumb {
      ${ve}
    }
    :host input[type="range"]::-webkit-slider-thumb {
      ${ve}
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
  `,fe([nt({type:Number,reflect:!0})],be.prototype,"min",void 0),fe([nt({type:Number,reflect:!0})],be.prototype,"max",void 0),fe([nt({type:Number,reflect:!0})],be.prototype,"step",void 0),fe([nt({type:Number,reflect:!0})],be.prototype,"value",void 0),fe([st()],be.prototype,"referenceColor",void 0),fe([st()],be.prototype,"valueToModify",void 0),be=fe([it("color-slider")],be);class ye{constructor(t,e){this.host=t,t.addController(this),this.cup=e,this.listener=e.on((()=>this.host.requestUpdate()))}hostDisconnected(){this.listener()}}var $e=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};function we(t){return Math.floor(t).toString(16).padStart(2,"0")}function _e(t,e=2){const i=10**e;return Math.round(t*i)/i}const ke=window.matchMedia("(max-width: 595px)");let xe=class extends tt{constructor(){super(),this.lchController=new ye(this,Qt),this.isMobile=ke.matches,this.viewListener=t=>{this.isMobile=t.matches},ke.addListener(this.viewListener)}disconnectedCallback(){ke.removeListener(this.viewListener)}renderInput({category:t,kind:e,label:i,shortName:r=e.toUpperCase(),min:n,max:s,step:o=1,mod:a=(t=>t),unit:l=""}){const h=Qt(),c=h[t].values[e],u=`${t}--${e}`;return T`
      <label for="slider-${u}">${r} (${i})</label>
      <color-slider
        .id="slider-${u}"
        .min=${n}
        .max=${s}
        .step=${o}
        .value=${c}
        .referenceColor=${h[t].raw}
        .valueToModify=${i[0]}
        @input=${i=>{const r=i.target,o=(a=r.value||0,Math.min(s,Math.max(n,a)));var a;r.value=o,Qt([{type:t,kind:e,value:o}])}}
      ></color-slider>
      <span
        >${_e(a(c),Math.floor(-Math.log(o)/Math.log(10)))}${l}</span
      >
    `}willUpdate(t){const e=new Set(t.keys());e.delete("luminance"),e.delete("chroma"),e.delete("hue"),e.size}render(){const t=Qt(),e=`#${we(t.rgb.values.r)}${we(t.rgb.values.g)}${we(t.rgb.values.b)}`;return T`
      <div class="wrapper">
        <details open>
          <summary><h2>LCH</h2></summary>
          <div class="group">
            ${this.renderInput({category:"lch",kind:"l",label:"luminance",min:0,max:100,unit:"º"})}
            ${this.renderInput({category:"lch",kind:"c",label:"chroma",min:0,max:132})}
            ${this.renderInput({category:"lch",kind:"h",label:"hue",min:0,max:360})}

            <pre class="code-wrapper"><code class="code">LCH(${_e(t.lch.values.l)}% ${_e(t.lch.values.c)} ${_e(t.lch.values.h)})</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>Lab</h2></summary>
          <div class="group">
            ${this.renderInput({category:"lab",kind:"l",label:"luminance",min:0,max:100,unit:"º"})}
            ${this.renderInput({category:"lab",kind:"a",label:"a",shortName:"a",min:-128,max:127})}
            ${this.renderInput({category:"lab",kind:"b",label:"b",shortName:"b",min:-128,max:127})}

            <pre class="code-wrapper"><code class='code'>Lab(${_e(t.lab.values.l)}% ${_e(t.lab.values.a)} ${_e(t.lab.values.b)})</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>RGB</h2></summary>
          <div class="group">
            ${this.renderInput({category:"rgb",kind:"r",label:"red",min:0,max:255})}
            ${this.renderInput({category:"rgb",kind:"g",label:"green",min:0,max:255})}
            ${this.renderInput({category:"rgb",kind:"b",label:"blue",min:0,max:255})}

            <pre class="code-wrapper"><code class='code'>rgb(${_e(t.rgb.values.r)} ${_e(t.rgb.values.g)} ${_e(t.rgb.values.b)})</code>
<code class='code'>${e}</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>HSL</h2></summary>
          <div class="group">
            ${this.renderInput({category:"hsl",kind:"h",label:"hue",min:0,max:360})}
            ${this.renderInput({category:"hsl",kind:"s",label:"saturation",min:0,step:.01,max:1,mod:t=>100*t,unit:"%"})}
            ${this.renderInput({category:"hsl",kind:"l",label:"lightness",min:0,step:.01,max:1,mod:t=>100*t,unit:"%"})}

            <pre class="code-wrapper"><code class='code'>hsl(${_e(t.hsl.values.h)} ${100*_e(t.hsl.values.s)}% ${_e(100*t.hsl.values.l)}%)</code></pre>
          </div>
        </details>
      </div>
    `}};xe.styles=h`
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
  `,$e([st()],xe.prototype,"isMobile",void 0),xe=$e([it("color-picker")],xe),document.documentElement.style.backgroundColor=Qt().rgb.raw.formatHex(),Qt.on((({rgb:t})=>{document.documentElement.style.backgroundColor=t.raw.formatHex()}));
//# sourceMappingURL=index.36d13c7f.js.map

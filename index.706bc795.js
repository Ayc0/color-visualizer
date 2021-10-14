function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=e.parcelRequiree5a9;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return i[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},e.parcelRequiree5a9=r),r.register("bXuNP",(function(e,i){var n,r;t(e.exports,"register",(()=>n),(t=>n=t)),t(e.exports,"resolve",(()=>r),(t=>r=t));var o={};n=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)o[e[i]]=t[e[i]]},r=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("bXuNP").register(JSON.parse('{"d3X8m":"index.706bc795.js","WugCC":"generate-colors.worker.b6689dd7.js"}'));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new Map;class l{constructor(t,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=a.get(this.cssText);return o&&void 0===t&&(a.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new l(i,s)},c=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u;const d=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,n=this.constructor.elementStyles,o?i.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const e=document.createElement("style"),n=window.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=t.cssText,i.appendChild(e)})),e;var i,n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=g){var n,r;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const s=(null!==(r=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==r?r:p.toAttribute)(e,i.type);this._$Ei=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(t,e){var i,n,r;const o=this.constructor,s=o._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=o.getPropertyOptions(s),a=t.converter,l=null!==(r=null!==(n=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==r?r:p.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:m}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.0.1");const b=globalThis.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,_=`<${w}>`,x=document,A=(t="")=>x.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,E=t=>{var e;return C(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,M=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,O=/"/g,U=/^(?:script|style|textarea)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),T=H(1),I=(H(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),j=new WeakMap,z=x.createTreeWalker(x,129,null,!1),B=(t,e)=>{const i=t.length-1,n=[];let r,o=2===e?"<svg>":"",s=S;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(s.lastIndex=c,l=s.exec(i),null!==l);)c=s.lastIndex,s===S?"!--"===l[1]?s=N:void 0!==l[1]?s=M:void 0!==l[2]?(U.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=P):void 0!==l[3]&&(s=P):s===P?">"===l[0]?(s=null!=r?r:S,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?P:'"'===l[3]?O:R):s===O||s===R?s=P:s===N||s===M?s=S:(s=P,r=void 0);const u=s===P&&t[e+1].startsWith("/>")?" ":"";o+=s===S?i+_:h>=0?(n.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+$+u):i+$+(-2===h?(n.push(void 0),e):u)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==y?y.createHTML(a):a,n]};class D{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[l,h]=B(t,e);if(this.el=D.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=z.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=h[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?F:"@"===e[1]?K:J})}else a.push({type:6,index:r})}for(const e of t)n.removeAttribute(e)}if(U.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],A()),z.nextNode(),a.push({type:2,index:++r});n.append(t[e],A())}}}else if(8===n.nodeType)if(n.data===w)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)a.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,n){var r,o,s,a;if(e===I)return e;let l=void 0!==n?null===(r=i._$Cl)||void 0===r?void 0:r[n]:i._$Cu;const h=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,n)),void 0!==n?(null!==(s=(a=i)._$Cl)&&void 0!==s?s:a._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,n)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);z.currentNode=r;let o=z.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new V(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Z(o,this,t)),this.v.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(o=z.nextNode(),s++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{constructor(t,e,i,n){var r;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),k(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==I&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):E(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==L&&k(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=D.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new W(r,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new D(t)),e}M(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new V(this.A(A()),this.A(A()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,n,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(void 0===r)t=q(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const n=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=q(this,n[i+s],e,s),a===I&&(a=this._$AH[s]),o||(o=!k(a)||a!==this._$AH[s]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends J{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}class F extends J{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class K extends J{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:L)===I)return;const n=this._$AH,r=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==L&&(n===L||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const G=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,Q;null==G||G(D,V),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.1");class tt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,r;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new V(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return I}}tt.finalized=!0,tt._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt});(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){return rt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=({finisher:t,descriptor:e})=>(i,n)=>{var r;if(void 0===n){const n=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(o.finisher=function(e){t(e,n)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(r,n)}}
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
function at(t,e){return st({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t,e,i){t.prototype=e.prototype=i,i.constructor=t}function ht(t,e){var i=Object.create(t.prototype);for(var n in e)i[n]=e[n];return i}function ct(){}var ut="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",dt="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",pt=/^#([0-9a-f]{3,8})$/,ft=new RegExp("^rgb\\("+["\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*"]+"\\)$"),gt=new RegExp("^rgb\\("+[dt,dt,dt]+"\\)$"),mt=new RegExp("^rgba\\("+["\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*",ut]+"\\)$"),vt=new RegExp("^rgba\\("+[dt,dt,dt,ut]+"\\)$"),bt=new RegExp("^hsl\\("+[ut,dt,dt]+"\\)$"),yt=new RegExp("^hsla\\("+[ut,dt,dt,ut]+"\\)$"),$t={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function wt(){return this.rgb().formatHex()}function _t(){return this.rgb().formatRgb()}function xt(t){var e,i;return t=(t+"").trim().toLowerCase(),(e=pt.exec(t))?(i=e[1].length,e=parseInt(e[1],16),6===i?At(e):3===i?new St(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===i?kt(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===i?kt(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=ft.exec(t))?new St(e[1],e[2],e[3],1):(e=gt.exec(t))?new St(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=mt.exec(t))?kt(e[1],e[2],e[3],e[4]):(e=vt.exec(t))?kt(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=bt.exec(t))?Rt(e[1],e[2]/100,e[3]/100,1):(e=yt.exec(t))?Rt(e[1],e[2]/100,e[3]/100,e[4]):$t.hasOwnProperty(t)?At($t[t]):"transparent"===t?new St(NaN,NaN,NaN,0):null}function At(t){return new St(t>>16&255,t>>8&255,255&t,1)}function kt(t,e,i,n){return n<=0&&(t=e=i=NaN),new St(t,e,i,n)}function Ct(t){return t instanceof ct||(t=xt(t)),t?new St((t=t.rgb()).r,t.g,t.b,t.opacity):new St}function Et(t,e,i,n){return 1===arguments.length?Ct(t):new St(t,e,i,null==n?1:n)}function St(t,e,i,n){this.r=+t,this.g=+e,this.b=+i,this.opacity=+n}function Nt(){return"#"+Pt(this.r)+Pt(this.g)+Pt(this.b)}function Mt(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Pt(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Rt(t,e,i,n){return n<=0?t=e=i=NaN:i<=0||i>=1?t=e=NaN:e<=0&&(t=NaN),new Ht(t,e,i,n)}function Ot(t){if(t instanceof Ht)return new Ht(t.h,t.s,t.l,t.opacity);if(t instanceof ct||(t=xt(t)),!t)return new Ht;if(t instanceof Ht)return t;var e=(t=t.rgb()).r/255,i=t.g/255,n=t.b/255,r=Math.min(e,i,n),o=Math.max(e,i,n),s=NaN,a=o-r,l=(o+r)/2;return a?(s=e===o?(i-n)/a+6*(i<n):i===o?(n-e)/a+2:(e-i)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Ht(s,a,l,t.opacity)}function Ut(t,e,i,n){return 1===arguments.length?Ot(t):new Ht(t,e,i,null==n?1:n)}function Ht(t,e,i,n){this.h=+t,this.s=+e,this.l=+i,this.opacity=+n}function Tt(t,e,i){return 255*(t<60?e+(i-e)*t/60:t<180?i:t<240?e+(i-e)*(240-t)/60:e)}lt(ct,xt,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:wt,formatHex:wt,formatHsl:function(){return Ot(this).formatHsl()},formatRgb:_t,toString:_t}),lt(St,Et,ht(ct,{brighter:function(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new St(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new St(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Nt,formatHex:Nt,formatRgb:Mt,toString:Mt})),lt(Ht,Ut,ht(ct,{brighter:function(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new Ht(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Ht(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,i=this.l,n=i+(i<.5?i:1-i)*e,r=2*i-n;return new St(Tt(t>=240?t-240:t+120,r,n),Tt(t,r,n),Tt(t<120?t+240:t-120,r,n),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));const It=Math.PI/180,Lt=180/Math.PI;function jt(t){if(t instanceof Bt)return new Bt(t.l,t.a,t.b,t.opacity);if(t instanceof Ft)return Kt(t);t instanceof St||(t=Ct(t));var e,i,n=Vt(t.r),r=Vt(t.g),o=Vt(t.b),s=Dt((.2225045*n+.7168786*r+.0606169*o)/1);return n===r&&r===o?e=i=s:(e=Dt((.4360747*n+.3850649*r+.1430804*o)/.96422),i=Dt((.0139322*n+.0971045*r+.7141733*o)/.82521)),new Bt(116*s-16,500*(e-s),200*(s-i),t.opacity)}function zt(t,e,i,n){return 1===arguments.length?jt(t):new Bt(t,e,i,null==n?1:n)}function Bt(t,e,i,n){this.l=+t,this.a=+e,this.b=+i,this.opacity=+n}function Dt(t){return t>.008856451679035631?Math.pow(t,1/3):t/.12841854934601665+.13793103448275862}function qt(t){return t>.20689655172413793?t*t*t:.12841854934601665*(t-.13793103448275862)}function Wt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Vt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Jt(t){if(t instanceof Ft)return new Ft(t.h,t.c,t.l,t.opacity);if(t instanceof Bt||(t=jt(t)),0===t.a&&0===t.b)return new Ft(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*Lt;return new Ft(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Xt(t,e,i,n){return 1===arguments.length?Jt(t):new Ft(i,e,t,null==n?1:n)}function Ft(t,e,i,n){this.h=+t,this.c=+e,this.l=+i,this.opacity=+n}function Kt(t){if(isNaN(t.h))return new Bt(t.l,0,0,t.opacity);var e=t.h*It;return new Bt(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}function Zt(t,e){void 0===e&&(e=function(t){return t});var i=new Set,n=e(t),r={cancelled:!1},o=function(t,o){var s=e(t);if(!(n===s||Number.isNaN(n)&&Number.isNaN(s))){r.cancelled=!0;var a={cancelled:!1};r=a,n=s,i.forEach((function(t){a.cancelled||t(n,o)}))}};function s(t,e){return void 0===e&&(e=new WeakSet),0===arguments.length?n:Promise.resolve("function"==typeof t?t(n):t).then((function(t){return e.has(s)||(e.add(s),o(t,e)),n}))}return s.on=function(t){i.add(t);var e=function(){return i.delete(t)};return Object.defineProperty(e,"listening",{get:function(){return i.has(t)}}),e},s.clear=function(){return i.clear()},s}lt(Bt,zt,ht(ct,{brighter:function(t){return new Bt(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Bt(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,i=isNaN(this.b)?t:t-this.b/200;return new St(Wt(3.1338561*(e=.96422*qt(e))-1.6168667*(t=1*qt(t))-.4906146*(i=.82521*qt(i))),Wt(-.9787684*e+1.9161415*t+.033454*i),Wt(.0719453*e-.2289914*t+1.4052427*i),this.opacity)}})),lt(Ft,(function(t,e,i,n){return 1===arguments.length?Jt(t):new Ft(t,e,i,null==n?1:n)}),ht(ct,{brighter:function(t){return new Ft(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Ft(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Kt(this).rgb()}}));const Gt=Xt(57,110,283.8),Yt=zt(Gt),Qt=Et(Gt.formatHex()),te=Ut(Gt.formatHex()),ee=Zt(Gt,(t=>(t.l=me(0,t.l,100),t.c=me(0,t.c,132),t.h=me(0,t.h,360),t))),ie=Zt(Yt,(t=>(t.l=me(0,t.l,100),t.a=me(-128,t.a,127),t.b=me(-128,t.b,127),t))),ne=Zt(Qt,(t=>(t.r=me(0,t.r,255),t.g=me(0,t.g,255),t.b=me(0,t.b,255),t))),re=Zt(te,(t=>(t.h=me(0,t.h,360),t.s=me(0,t.s,1),t.l=me(0,t.l,1),t))),oe=Zt(Gt.l,(t=>me(0,t,100))),se=Zt(Gt.c,(t=>me(0,t,132))),ae=Zt(Gt.h,(t=>me(0,t,360))),le=Zt(Yt.a,(t=>me(-128,t,127))),he=Zt(Yt.b,(t=>me(-128,t,127))),ce=Zt(Qt.r,(t=>me(0,t,255))),ue=Zt(Qt.g,(t=>me(0,t,255))),de=Zt(Qt.b,(t=>me(0,t,255))),pe=Zt(te.h,(t=>me(0,t,360))),fe=Zt(te.s,(t=>me(0,t,1))),ge=Zt(te.l,(t=>me(0,t,1)));function me(t,e,i){return Math.min(i,Math.max(t,e||0))}function ve(t,e){const i=Xt(e);return i.l!==t.l||i.c!==t.c||i.h!==t.h?i:t}function be(t,e){const i=zt(e);return i.l!==t.l||i.a!==t.a||i.b!==t.b?i:t}function ye(t,e){const i=Et(e.formatHex());return i.r!==t.r||i.g!==t.g||i.b!==t.b?i:t}function $e(t,e){const i=Ut(e.formatHex());return i.h!==t.h||i.s!==t.s||i.l!==t.l?i:t}ee.on(((t,e)=>{oe(t.l,e),se(t.c,e),ae(t.h,e),ie((e=>be(e,t)),e),ne((e=>ye(e,t)),e),re((e=>$e(e,t)),e)})),ie.on(((t,e)=>{oe(t.l,e),le(t.a,e),he(t.b,e),ee((e=>ve(e,t)),e),ne((e=>ye(e,t)),e),re((e=>$e(e,t)),e)})),ne.on(((t,e)=>{ce(t.r,e),de(t.b,e),ue(t.g,e),ee((e=>ve(e,t)),e),ie((e=>be(e,t)),e),re((e=>$e(e,t)),e)})),re.on(((t,e)=>{pe(t.h,e),fe(t.s,e),ge(t.l,e),ee((e=>ve(e,t)),e),ie((e=>be(e,t)),e),ne((e=>ye(e,t)),e)})),oe.on(((t,e)=>{ee((e=>{const i=e.copy();return i.l=t,i}),e),ie((e=>{const i=e.copy();return i.l=t,i}),e)})),se.on(((t,e)=>{ee((e=>{const i=e.copy();return i.c=t,i}),e)})),ae.on(((t,e)=>{ee((e=>{const i=e.copy();return i.h=t,i}),e)})),le.on(((t,e)=>{ie((e=>{const i=e.copy();return i.a=t,i}),e)})),he.on(((t,e)=>{ie((e=>{const i=e.copy();return i.b=t,i}),e)})),ce.on(((t,e)=>{ne((e=>{const i=e.copy();return i.r=t,i}),e)})),ue.on(((t,e)=>{ne((e=>{const i=e.copy();return i.g=t,i}),e)})),de.on(((t,e)=>{ne((e=>{const i=e.copy();return i.b=t,i}),e)})),pe.on(((t,e)=>{re((e=>{const i=e.copy();return i.h=t,i}),e)})),fe.on(((t,e)=>{re((e=>{const i=e.copy();return i.s=t,i}),e)})),ge.on(((t,e)=>{re((e=>{const i=e.copy();return i.l=t,i}),e)}));var we,_e,xe,Ae;_e=function(t,e,i){if(e===self.location.origin)return t;var n=i?"import "+JSON.stringify(t)+";":"importScripts("+JSON.stringify(t)+");";return URL.createObjectURL(new Blob([n],{type:"application/javascript"}))};var ke={};function Ce(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}xe=function(t){var e=ke[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return Ce(t[2])}return"/"}(),ke[t]=e),e},Ae=function(t){var e=(""+t).match(/(https?|file|ftp):\/\/[^/]+/);if(!e)throw new Error("Origin not found");return e[0]};let Ee=xe("d3X8m")+r("bXuNP").resolve("WugCC");we=_e(Ee,Ae(Ee),!0);const Se=()=>{let t;return(e,i,n)=>{const r=new Worker(we,{type:"module"});return t&&t.terminate(),t=r,new Promise((t=>{r.onmessage=e=>{t(e.data.slice())},r.postMessage([e,i,n])}))}};var Ne=function(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let Me=class extends tt{constructor(){super(),this.width=500,this.height=300,this.isPressed=!1,this.generateColors=Se(),this.updateMarkerPosition=()=>{const t=this.marker,e=this.canvas;if(!t||!e)return;const i=e.getBoundingClientRect(),n=Math.floor(ee().c/132*i.width),r=Math.floor((1-ee().l/100)*i.height);t.style.cssText=`transform: translate(calc(${n}px - 50%), calc(${r}px - 50%))`},this.updateCanvasColors=()=>{const t=this.canvas;if(!t)return;const e=t.getContext("2d");e&&this.generateColors(ee().h,this.width,this.height).then((t=>{const i=new ImageData(t,this.width,this.height);e.putImageData(i,0,0)}))},ae.on((()=>this.updateCanvasColors())),ee.on((()=>this.updateMarkerPosition()))}onPositionChange(t){const e=this.canvas;if(!e||!this.isPressed)return;const i=e.getBoundingClientRect(),n=Math.min(Math.max(t.clientX-i.x,0),i.width),r=Math.min(Math.max(t.clientY-i.y,0),i.height),o=Xt(Math.floor(100*(1-r/i.height)),Math.floor(n/i.width*132),ee().h);ee(o)}firstUpdated(){this.updateMarkerPosition()}updated(t){(t.has("width")||t.has("height"))&&this.updateCanvasColors()}render(){return T`
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
    `}};var Pe;Me.styles=h`
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
  `,Ne([rt({type:Number})],Me.prototype,"width",void 0),Ne([rt({type:Number})],Me.prototype,"height",void 0),Ne([at("canvas")],Me.prototype,"canvas",void 0),Ne([at(".marker")],Me.prototype,"marker",void 0),Ne([(Pe={passive:!0},st({finisher:(t,e)=>{Object.assign(t.prototype[e],Pe)}}))],Me.prototype,"onPositionChange",null),Me=Ne([it("lch-paint")],Me);var Re=function(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};const Oe=h`
  width: ${14}px;
  height: ${22}px;
  background: #00000000;
  box-shadow: 0 0 0 ${1}px var(--black),
    inset 0 0 0 ${1}px var(--white);
  border-radius: 3px;
  cursor: pointer;
`,Ue=(h`var(--track-background-hover, #bbbbbb)`,h`var(--track-background-focus, #cbcbcb)`,h`
  background: ${h`var(--track-background, #9e9e9e)`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 ${1}px ${h`var(--contrast)`};
  border-radius: 3px;
  width: 100%;
  height: ${20}px;
  cursor: pointer;
`);let He=class extends tt{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.referenceColor=Et(0,0,0),this.valueToModify="h",this.getBackgroundRange=()=>{clearTimeout(this.throttleId);const t=this.referenceColor.copy(),e={...t};delete e[this.valueToModify];const i=JSON.stringify(e);if(this.prevBackgroundRange){if(this.prevColor===i)return this.prevBackgroundRange;const t=performance.now();if(null!=this.timePrevOp&&t-this.timePrevOp<100)return this.throttleId=window.setTimeout((()=>this.requestUpdate()),100),this.prevBackgroundRange}const n=Math.round((this.max-this.min)/this.step),r=new Uint8ClampedArray(4*n);for(let e=0;e<=n;e++){t[this.valueToModify]=e*this.step;const i=t.rgb(),n=4*e;r[n+0]=i.r,r[n+1]=i.g,r[n+2]=i.b,r[n+3]=255}const o=document.createElement("canvas");o.width=n,o.height=1;const s=new ImageData(r,n,1);o.getContext("2d",{alpha:!1}).putImageData(s,0,0);const a=o.toDataURL();return this.prevBackgroundRange=a,this.prevColor=i,this.timePrevOp=performance.now(),a}}render(){return T`<input
      .min=${this.min}
      .max=${this.max}
      .step=${this.step}
      .value=${this.value}
      style="--track-background: url(${this.getBackgroundRange()})"
      type="range"
      @input=${t=>{const e=t.target,i=Number(e.value);this.value=Number.isNaN(i)?void 0:i}}
    />`}};He.styles=h`
    :host input[type="range"] {
      width: 100%;
      margin: 0.5px 0;
      background-color: transparent;
      -webkit-appearance: none;
    }

    :host input[type="range"]::-webkit-slider-runnable-track {
      ${Ue}
    }
    :host input[type="range"]::-moz-range-track {
      ${Ue}
    }

    :host input[type="range"]::-moz-range-thumb {
      ${Oe}
    }
    :host input[type="range"]::-webkit-slider-thumb {
      ${Oe}
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
  `,Re([rt({type:Number,reflect:!0})],He.prototype,"min",void 0),Re([rt({type:Number,reflect:!0})],He.prototype,"max",void 0),Re([rt({type:Number,reflect:!0})],He.prototype,"step",void 0),Re([rt({type:Number,reflect:!0})],He.prototype,"value",void 0),Re([ot()],He.prototype,"referenceColor",void 0),Re([ot()],He.prototype,"valueToModify",void 0),He=Re([it("color-slider")],He);class Te{constructor(t,e){this.host=t,t.addController(this),this.cup=e,this.listener=e.on((()=>this.host.requestUpdate()))}hostDisconnected(){this.listener()}}var Ie=function(t,e,i,n){var r,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};function Le(t){return Math.floor(t).toString(16).padStart(2,"0")}function je(t,e=2){const i=10**e;return Math.round(t*i)/i}const ze=window.matchMedia("(max-width: 595px)");let Be=class extends tt{constructor(){super(),this.lchController=new Te(this,ee),this.isMobile=ze.matches,this.viewListener=t=>{this.isMobile=t.matches},ze.addListener(this.viewListener)}disconnectedCallback(){ze.removeListener(this.viewListener)}renderInput({label:t,shortName:e=t[0].toUpperCase(),id:i=t[0],cup:n,min:r,max:o,step:s=1,mod:a=(t=>t),unit:l="",referenceColor:h}){return T`
      <label for="lab-${i}">${e} (${t})</label>
      <color-slider
        .id="lab-${i}"
        .min=${r}
        .max=${o}
        .step=${s}
        .value=${n()}
        .referenceColor=${h}
        .valueToModify=${t[0]}
        @input=${t=>{const e=t.target,i=(s=e.value||0,Math.min(o,Math.max(r,s)));var s;e.value=i,n(i)}}
      ></color-slider>
      <span
        >${je(a(n()),Math.floor(-Math.log(s)/Math.log(10)))}${l}</span
      >
    `}willUpdate(t){const e=new Set(t.keys());e.delete("luminance"),e.delete("chroma"),e.delete("hue"),0===e.size&&ee()}render(){const t=`#${Le(ce())}${Le(ue())}${Le(de())}`;return T`
      <div class="wrapper">
        <details open>
          <summary><h2>LCH</h2></summary>
          <div class="group">
            ${this.renderInput({label:"luminance",cup:oe,min:0,max:100,unit:"º",referenceColor:ee()})}
            ${this.renderInput({label:"chroma",cup:se,min:0,max:132,referenceColor:ee()})}
            ${this.renderInput({label:"hue",cup:ae,min:0,max:360,referenceColor:ee()})}

            <pre class="code-wrapper"><code class="code">LCH(${je(oe())}% ${je(se())} ${je(ae())})</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>Lab</h2></summary>
          <div class="group">
            ${this.renderInput({label:"luminance",cup:oe,min:0,max:100,unit:"º",id:"L2",referenceColor:ie()})}
            ${this.renderInput({label:"a",shortName:"a",cup:le,min:-128,max:127,referenceColor:ie()})}
            ${this.renderInput({label:"b",shortName:"b",cup:he,min:-128,max:127,referenceColor:ie()})}

            <pre class="code-wrapper"><code class='code'>Lab(${je(oe())}% ${je(le())} ${je(he())})</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>RGB</h2></summary>
          <div class="group">
            ${this.renderInput({label:"red",cup:ce,min:0,max:255,referenceColor:ne()})}
            ${this.renderInput({label:"green",cup:ue,min:0,max:255,referenceColor:ne()})}
            ${this.renderInput({label:"blue",cup:de,min:0,max:255,referenceColor:ne()})}

            <pre class="code-wrapper"><code class='code'>rgb(${je(ce())} ${je(ue())} ${je(de())})</code>
<code class='code'>${t}</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>HSL</h2></summary>
          <div class="group">
            ${this.renderInput({label:"hue",cup:pe,min:0,max:360,referenceColor:re()})}
            ${this.renderInput({label:"saturation",cup:fe,min:0,step:.01,max:1,mod:t=>100*t,unit:"%",referenceColor:re()})}
            ${this.renderInput({label:"lightness",cup:ge,min:0,step:.01,max:1,mod:t=>100*t,unit:"%",referenceColor:re()})}
            <pre class="code-wrapper"><code class='code'>hsl(${je(pe())} ${100*je(fe())}% ${je(100*ge())}%)</code></pre>
          </div>
        </details>
      </div>
    `}};Be.styles=h`
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
  `,Ie([ot()],Be.prototype,"isMobile",void 0),Be=Ie([it("color-picker")],Be),document.documentElement.style.backgroundColor=ne().formatHex(),ne.on((t=>{document.documentElement.style.backgroundColor=t.formatHex()}));
//# sourceMappingURL=index.706bc795.js.map

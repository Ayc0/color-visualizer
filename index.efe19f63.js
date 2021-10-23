function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=e.parcelRequiree5a9;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequiree5a9=n),n.register("bXuNP",(function(e,i){var r,n;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>n),(t=>n=t));var s={};r=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)s[e[i]]=t[e[i]]},n=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n("bXuNP").register(JSON.parse('{"d3X8m":"index.efe19f63.js","WugCC":"generate-colors.worker.b6689dd7.js"}'));var s,o;(o=s||(s={})).RERENDER_INNER_HTML="rerenderInnnerHTML",o.NONE="none";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),h=new Map;class c{constructor(t,e){if(this._$cssResult$=!0,e!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=h.get(this.cssText);return a&&void 0===t&&(h.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const u=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new c(i,l)},d=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new c("string"==typeof t?t:t+"",l))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var p;const g=window.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v};class b extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,r=this.constructor.elementStyles,a?i.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const e=document.createElement("style"),r=window.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=t.cssText,i.appendChild(e)})),e;var i,r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=m){var r,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const o=(null!==(n=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:f.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Ei=null}}_$AK(t,e){var i,r,n;const s=this.constructor,o=s._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=s.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(r=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==n?n:f.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:b}),(null!==(p=globalThis.reactiveElementVersions)&&void 0!==p?p:globalThis.reactiveElementVersions=[]).push("1.0.1");const $=globalThis.trustedTypes,w=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,k="?"+_,x=`<${k}>`,A=document,E=(t="")=>A.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,M=t=>{var e;return C(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,R=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,H=/"/g,T=/^(?:script|style|textarea)$/i,I=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=I(1),j=(I(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),B=new WeakMap,D=A.createTreeWalker(A,129,null,!1),q=(t,e)=>{const i=t.length-1,r=[];let n,s=2===e?"<svg>":"",o=N;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===N?"!--"===l[1]?o=P:void 0!==l[1]?o=R:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=null!=n?n:N,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?O:'"'===l[3]?H:U):o===H||o===U?o=O:o===P||o===R?o=N:(o=O,n=void 0);const u=o===O&&t[e+1].startsWith("/>")?" ":"";s+=o===N?i+x:h>=0?(r.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+_+u):i+_+(-2===h?(r.push(void 0),e):u)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==w?w.createHTML(a):a,r]};class W{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const o=t.length-1,a=this.parts,[l,h]=q(t,e);if(this.el=W.createElement(l,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=D.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=h[s++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Z:"@"===e[1]?G:F})}else a.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(T.test(r.tagName)){const t=r.textContent.split(_),e=t.length-1;if(e>0){r.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],E()),D.nextNode(),a.push({type:2,index:++n});r.append(t[e],E())}}}else if(8===r.nodeType)if(r.data===k)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(_,t+1));)a.push({type:7,index:n}),t+=_.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,r){var n,s,o,a;if(e===j)return e;let l=void 0!==r?null===(n=i._$Cl)||void 0===n?void 0:n[r]:i._$Cu;const h=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,r)),void 0!==r?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=J(t,l._$AS(t,e.values),l,r)),e}class V{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);D.currentNode=n;let s=D.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new X(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new Y(s,this,t)),this.v.push(e),l=r[++a]}o!==(null==l?void 0:l.index)&&(s=D.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{constructor(t,e,i,r){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),S(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==j&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):M(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==z&&S(this._$AH)?this._$AA.nextSibling.data=t:this.S(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=W.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new V(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new W(t)),e}M(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new X(this.A(E()),this.A(E()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,r,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let s=!1;if(void 0===n)t=J(this,t,e,0),s=!S(t)||t!==this._$AH&&t!==j,s&&(this._$AH=t);else{const r=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=J(this,r[i+o],e,o),a===j&&(a=this._$AH[o]),s||(s=!S(a)||a!==this._$AH[o]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}s&&!r&&this.k(t)}k(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===z?void 0:t}}class Z extends F{constructor(){super(...arguments),this.type=4}k(t){t&&t!==z?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class G extends F{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=J(this,t,e,0))&&void 0!==i?i:z)===j)return;const r=this._$AH,n=t===z&&r!==z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==z&&(r===z||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const Q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;null==Q||Q(W,X),(null!==(y=globalThis.litHtmlVersions)&&void 0!==y?y:globalThis.litHtmlVersions=[]).push("2.0.1");class it extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,n;const s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let o=s._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new X(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return j}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:it});(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return ot({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(s.finisher=function(e){t(e,r)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}}
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
function ht(t,e){return lt({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t,e,i){t.prototype=e.prototype=i,i.constructor=t}function ut(t,e){var i=Object.create(t.prototype);for(var r in e)i[r]=e[r];return i}function dt(){}var pt="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",gt="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ft=/^#([0-9a-f]{3,8})$/,vt=new RegExp("^rgb\\("+["\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*"]+"\\)$"),mt=new RegExp("^rgb\\("+[gt,gt,gt]+"\\)$"),bt=new RegExp("^rgba\\("+["\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*","\\s*([+-]?\\d+)\\s*",pt]+"\\)$"),yt=new RegExp("^rgba\\("+[gt,gt,gt,pt]+"\\)$"),$t=new RegExp("^hsl\\("+[pt,gt,gt]+"\\)$"),wt=new RegExp("^hsla\\("+[pt,gt,gt,pt]+"\\)$"),_t={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function kt(){return this.rgb().formatHex()}function xt(){return this.rgb().formatRgb()}function At(t){var e,i;return t=(t+"").trim().toLowerCase(),(e=ft.exec(t))?(i=e[1].length,e=parseInt(e[1],16),6===i?Et(e):3===i?new Nt(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===i?St(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===i?St(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=vt.exec(t))?new Nt(e[1],e[2],e[3],1):(e=mt.exec(t))?new Nt(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=bt.exec(t))?St(e[1],e[2],e[3],e[4]):(e=yt.exec(t))?St(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=$t.exec(t))?Ut(e[1],e[2]/100,e[3]/100,1):(e=wt.exec(t))?Ut(e[1],e[2]/100,e[3]/100,e[4]):_t.hasOwnProperty(t)?Et(_t[t]):"transparent"===t?new Nt(NaN,NaN,NaN,0):null}function Et(t){return new Nt(t>>16&255,t>>8&255,255&t,1)}function St(t,e,i,r){return r<=0&&(t=e=i=NaN),new Nt(t,e,i,r)}function Ct(t){return t instanceof dt||(t=At(t)),t?new Nt((t=t.rgb()).r,t.g,t.b,t.opacity):new Nt}function Mt(t,e,i,r){return 1===arguments.length?Ct(t):new Nt(t,e,i,null==r?1:r)}function Nt(t,e,i,r){this.r=+t,this.g=+e,this.b=+i,this.opacity=+r}function Pt(){return"#"+Ot(this.r)+Ot(this.g)+Ot(this.b)}function Rt(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function Ot(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Ut(t,e,i,r){return r<=0?t=e=i=NaN:i<=0||i>=1?t=e=NaN:e<=0&&(t=NaN),new It(t,e,i,r)}function Ht(t){if(t instanceof It)return new It(t.h,t.s,t.l,t.opacity);if(t instanceof dt||(t=At(t)),!t)return new It;if(t instanceof It)return t;var e=(t=t.rgb()).r/255,i=t.g/255,r=t.b/255,n=Math.min(e,i,r),s=Math.max(e,i,r),o=NaN,a=s-n,l=(s+n)/2;return a?(o=e===s?(i-r)/a+6*(i<r):i===s?(r-e)/a+2:(e-i)/a+4,a/=l<.5?s+n:2-s-n,o*=60):a=l>0&&l<1?0:o,new It(o,a,l,t.opacity)}function Tt(t,e,i,r){return 1===arguments.length?Ht(t):new It(t,e,i,null==r?1:r)}function It(t,e,i,r){this.h=+t,this.s=+e,this.l=+i,this.opacity=+r}function Lt(t,e,i){return 255*(t<60?e+(i-e)*t/60:t<180?i:t<240?e+(i-e)*(240-t)/60:e)}ct(dt,At,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:kt,formatHex:kt,formatHsl:function(){return Ht(this).formatHsl()},formatRgb:xt,toString:xt}),ct(Nt,Mt,ut(dt,{brighter:function(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new Nt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Nt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Pt,formatHex:Pt,formatRgb:Rt,toString:Rt})),ct(It,Tt,ut(dt,{brighter:function(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new It(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new It(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,i=this.l,r=i+(i<.5?i:1-i)*e,n=2*i-r;return new Nt(Lt(t>=240?t-240:t+120,n,r),Lt(t,n,r),Lt(t<120?t+240:t-120,n,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));const jt=Math.PI/180,zt=180/Math.PI;function Bt(t){if(t instanceof qt)return new qt(t.l,t.a,t.b,t.opacity);if(t instanceof Zt)return Gt(t);t instanceof Nt||(t=Ct(t));var e,i,r=Xt(t.r),n=Xt(t.g),s=Xt(t.b),o=Wt((.2225045*r+.7168786*n+.0606169*s)/1);return r===n&&n===s?e=i=o:(e=Wt((.4360747*r+.3850649*n+.1430804*s)/.96422),i=Wt((.0139322*r+.0971045*n+.7141733*s)/.82521)),new qt(116*o-16,500*(e-o),200*(o-i),t.opacity)}function Dt(t,e,i,r){return 1===arguments.length?Bt(t):new qt(t,e,i,null==r?1:r)}function qt(t,e,i,r){this.l=+t,this.a=+e,this.b=+i,this.opacity=+r}function Wt(t){return t>.008856451679035631?Math.pow(t,1/3):t/.12841854934601665+.13793103448275862}function Jt(t){return t>.20689655172413793?t*t*t:.12841854934601665*(t-.13793103448275862)}function Vt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Xt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Ft(t){if(t instanceof Zt)return new Zt(t.h,t.c,t.l,t.opacity);if(t instanceof qt||(t=Bt(t)),0===t.a&&0===t.b)return new Zt(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*zt;return new Zt(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Kt(t,e,i,r){return 1===arguments.length?Ft(t):new Zt(i,e,t,null==r?1:r)}function Zt(t,e,i,r){this.h=+t,this.c=+e,this.l=+i,this.opacity=+r}function Gt(t){if(isNaN(t.h))return new qt(t.l,0,0,t.opacity);var e=t.h*jt;return new qt(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}ct(qt,Dt,ut(dt,{brighter:function(t){return new qt(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new qt(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,i=isNaN(this.b)?t:t-this.b/200;return new Nt(Vt(3.1338561*(e=.96422*Jt(e))-1.6168667*(t=1*Jt(t))-.4906146*(i=.82521*Jt(i))),Vt(-.9787684*e+1.9161415*t+.033454*i),Vt(.0719453*e-.2289914*t+1.4052427*i),this.opacity)}})),ct(Zt,(function(t,e,i,r){return 1===arguments.length?Ft(t):new Zt(t,e,i,null==r?1:r)}),ut(dt,{brighter:function(t){return new Zt(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Zt(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Gt(this).rgb()}}));const Yt={lch:{l:[0,100],c:[0,132],h:[0,360]},lab:{l:[0,100],a:[-128,127],b:[-128,127]},rgb:{r:[0,255],g:[0,255],b:[0,255]},hsl:{h:[0,360],s:[0,1],l:[0,1]}},Qt=se(Kt(57,110,283.8)),te=(t,e)=>{switch(t.type){case"lch":{const i=Kt(e.lch.raw),r=t.kind;return i[r]=ie(t.value,...Yt.lch[r]),ne(i,e.lch.raw)?e:se(i)}case"lab":{const i=Dt(e.lab.raw),r=t.kind;return i[r]=ie(t.value,...Yt.lab[r]),ne(i,e.lab.raw)?e:se(i)}case"rgb":{const i=Mt(e.rgb.raw),r=t.kind;return i[r]=ie(t.value,...Yt.rgb[r]),ne(i,e.rgb.raw)?e:se(i)}case"hsl":{const i=Tt(e.hsl.raw),r=t.kind;return i[r]=ie(t.value,...Yt.hsl[r]),ne(i,e.hsl.raw)?e:se(i)}}},ee=function(t,e){void 0===e&&(e=function(t){return t});var i=new Set,r=function(){var t=new Set;return[function(e){return t.add(e),e()},t]}(),n=r[0],s=r[1],o=e("function"==typeof t?t(n):t),a={cancelled:!1},l=function(t,r){var n=e(t,o);if(!Object.is(o,n)){a.cancelled=!0;var s={cancelled:!1};a=s,o=n,i.forEach((function(t){s.cancelled||t(o,r)}))}};function h(t,e){return void 0===e&&(e=new WeakSet),0===arguments.length?o:Promise.resolve("function"==typeof t?t(o):t).then((function(t){return e.has(h)||(e.add(h),l(t,e)),o}))}return"function"==typeof t&&s.forEach((function(e){e.on((function(e,i){l(t(n),i)}))})),h.on=function(t){i.add(t);var e=function(){return i.delete(t)};return Object.defineProperty(e,"listening",{get:function(){return i.has(t)}}),e},h}([],((t,e=Qt)=>{let i=e;for(const e of t)i=te(e,i);return i}));function ie(t,e,i){return Math.min(i,Math.max(e,t||0))}function re(t){return JSON.stringify(Object.entries(t).sort((([t,e])=>t[0].localeCompare(e[0]))))}function ne(t,e){return re(t)===re(e)}function se(t){const e=Kt(t),i=Dt(t),r=Mt(t.formatHex()),n=Tt(t.formatHex());return{lch:{values:{l:e.l,c:e.c,h:e.h},raw:e},lab:{values:{l:i.l,a:i.a,b:i.b},raw:i},rgb:{values:{r:r.r,g:r.g,b:r.b},raw:r},hsl:{values:{h:n.h,s:n.s,l:n.l},raw:n}}}var oe,ae,le,he;ae=function(t,e,i){if(e===self.location.origin)return t;var r=i?"import "+JSON.stringify(t)+";":"importScripts("+JSON.stringify(t)+");";return URL.createObjectURL(new Blob([r],{type:"application/javascript"}))};var ce={};function ue(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}le=function(t){var e=ce[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return ue(t[2])}return"/"}(),ce[t]=e),e},he=function(t){var e=(""+t).match(/(https?|file|ftp):\/\/[^/]+/);if(!e)throw new Error("Origin not found");return e[0]};let de=le("d3X8m")+n("bXuNP").resolve("WugCC");oe=ae(de,he(de),!0);const pe=()=>{let t;return(e,i,r)=>{const n=new Worker(oe,{type:"module"});return t&&t.terminate(),t=n,new Promise((t=>{n.onmessage=e=>{t(e.data.slice())},n.postMessage([e,i,r])}))}};var ge=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let fe=class extends it{constructor(){super(),this.width=500,this.height=300,this.isPressed=!1,this.generateColors=pe(),this.updateMarkerPosition=()=>{const t=this.marker,e=this.canvas;if(!t||!e)return;const i=e.getBoundingClientRect(),r=ee().lch.values,n=Math.floor(r.c/132*i.width),s=Math.floor((1-r.l/100)*i.height);t.style.cssText=`transform: translate(calc(${n}px - 50%), calc(${s}px - 50%))`},this.updateCanvasColors=()=>{const t=this.canvas;if(!t)return;const e=t.getContext("2d");if(!e)return;const i=ee().lch.values;this.generateColors(i.h,this.width,this.height).then((t=>{const i=new ImageData(t,this.width,this.height);e.putImageData(i,0,0)}))},ee.on((()=>{this.updateCanvasColors(),this.updateMarkerPosition()}))}onPositionChange(t){const e=this.canvas;if(!e||!this.isPressed)return;const i=e.getBoundingClientRect(),r=Math.min(Math.max(t.clientX-i.x,0),i.width),n=Math.min(Math.max(t.clientY-i.y,0),i.height),s=Math.floor(100*(1-n/i.height)),o=Math.floor(r/i.width*132);ee([{type:"lch",kind:"l",value:s},{type:"lch",kind:"c",value:o}])}firstUpdated(){this.updateMarkerPosition()}updated(t){(t.has("width")||t.has("height"))&&this.updateCanvasColors()}render(){return L`
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
    `}};var ve;fe.styles=u`
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
  `,ge([ot({type:Number})],fe.prototype,"width",void 0),ge([ot({type:Number})],fe.prototype,"height",void 0),ge([ht("canvas")],fe.prototype,"canvas",void 0),ge([ht(".marker")],fe.prototype,"marker",void 0),ge([(ve={passive:!0},lt({finisher:(t,e)=>{Object.assign(t.prototype[e],ve)}}))],fe.prototype,"onPositionChange",null),fe=ge([nt("lch-paint")],fe);var me=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};const be=u`
  width: ${14}px;
  height: ${22}px;
  background: #00000000;
  box-shadow: 0 0 0 ${1}px var(--black),
    inset 0 0 0 ${1}px var(--white);
  border-radius: 3px;
  cursor: pointer;
`,ye=u`
  background: ${u`var(--track-background, #9e9e9e), var(--previous-track-background, #9e9e9e)`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 ${1}px ${u`var(--contrast)`};
  border-radius: 3px;
  width: 100%;
  height: ${20}px;
  cursor: pointer;
`;let $e=class extends it{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.referenceColor=Mt(0,0,0),this.valueToModify="h",this.getBackgroundRange=()=>{clearTimeout(this.throttleId);const t=this.referenceColor.copy(),e={...t};delete e[this.valueToModify];const i=JSON.stringify(e);if(this.prevBackgroundRange){if(this.prevColor===i)return this.prevBackgroundRange;const t=performance.now();if(null!=this.timePrevOp&&t-this.timePrevOp<100)return this.throttleId=window.setTimeout((()=>this.requestUpdate()),100),this.prevBackgroundRange}const r=Math.round((this.max-this.min)/this.step),n=new Uint8ClampedArray(4*r);for(let e=0;e<=r;e++){t[this.valueToModify]=e*this.step;const i=t.rgb(),r=4*e;n[r+0]=i.r,n[r+1]=i.g,n[r+2]=i.b,n[r+3]=255}const s=document.createElement("canvas");s.width=r,s.height=1;const o=new ImageData(n,r,1);s.getContext("2d",{alpha:!1}).putImageData(o,0,0);const a=s.toDataURL();return this.prevBackgroundRange=a,this.prevColor=i,this.timePrevOp=performance.now(),a}}render(){return L`<input
      .min=${this.min}
      .max=${this.max}
      .step=${this.step}
      .value=${this.value}
      style="--previous-track-background: url(${this.prevBackgroundRange}); --track-background: url(${this.getBackgroundRange()})"
      type="range"
      @input=${t=>{const e=t.target,i=Number(e.value);this.value=Number.isNaN(i)?void 0:i}}
    />`}};$e.styles=u`
    :host input[type="range"] {
      width: 100%;
      margin: 0.5px 0;
      background-color: transparent;
      -webkit-appearance: none;
    }

    :host input[type="range"]::-webkit-slider-runnable-track {
      ${ye}
    }
    :host input[type="range"]::-moz-range-track {
      ${ye}
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
  `,me([ot({type:Number,reflect:!0})],$e.prototype,"min",void 0),me([ot({type:Number,reflect:!0})],$e.prototype,"max",void 0),me([ot({type:Number,reflect:!0})],$e.prototype,"step",void 0),me([ot({type:Number,reflect:!0})],$e.prototype,"value",void 0),me([at()],$e.prototype,"referenceColor",void 0),me([at()],$e.prototype,"valueToModify",void 0),$e=me([nt("color-slider")],$e);class we{constructor(t,e){this.host=t,t.addController(this),this.cup=e,this.listener=e.on((()=>this.host.requestUpdate()))}hostDisconnected(){this.listener()}}var _e=function(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};function ke(t){return Math.floor(t).toString(16).padStart(2,"0")}function xe(t,e=2){const i=10**e;return Math.round(t*i)/i}const Ae=window.matchMedia("(max-width: 595px)");let Ee=class extends it{constructor(){super(),this.lchController=new we(this,ee),this.isMobile=Ae.matches,this.viewListener=t=>{this.isMobile=t.matches},Ae.addListener(this.viewListener)}disconnectedCallback(){Ae.removeListener(this.viewListener)}renderInput({category:t,kind:e,label:i,shortName:r=e.toUpperCase(),min:n,max:s,step:o=1,mod:a=(t=>t),unit:l=""}){const h=ee(),c=h[t].values[e],u=`${t}--${e}`;return L`
      <label for="slider-${u}">${r} (${i})</label>
      <color-slider
        .id="slider-${u}"
        .min=${n}
        .max=${s}
        .step=${o}
        .value=${c}
        .referenceColor=${h[t].raw}
        .valueToModify=${i[0]}
        @input=${i=>{const r=i.target,o=(a=r.value||0,Math.min(s,Math.max(n,a)));var a;r.value=o,ee([{type:t,kind:e,value:o}])}}
      ></color-slider>
      <span
        >${xe(a(c),Math.floor(-Math.log(o)/Math.log(10)))}${l}</span
      >
    `}willUpdate(t){const e=new Set(t.keys());e.delete("luminance"),e.delete("chroma"),e.delete("hue"),e.size}render(){const t=ee(),e=`#${ke(t.rgb.values.r)}${ke(t.rgb.values.g)}${ke(t.rgb.values.b)}`;return L`
      <div class="wrapper">
        <details open>
          <summary><h2>LCH</h2></summary>
          <div class="group">
            ${this.renderInput({category:"lch",kind:"l",label:"luminance",min:0,max:100,unit:"º"})}
            ${this.renderInput({category:"lch",kind:"c",label:"chroma",min:0,max:132})}
            ${this.renderInput({category:"lch",kind:"h",label:"hue",min:0,max:360})}

            <pre class="code-wrapper"><code class="code">LCH(${xe(t.lch.values.l)}% ${xe(t.lch.values.c)} ${xe(t.lch.values.h)})</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>Lab</h2></summary>
          <div class="group">
            ${this.renderInput({category:"lab",kind:"l",label:"luminance",min:0,max:100,unit:"º"})}
            ${this.renderInput({category:"lab",kind:"a",label:"a",shortName:"a",min:-128,max:127})}
            ${this.renderInput({category:"lab",kind:"b",label:"b",shortName:"b",min:-128,max:127})}

            <pre class="code-wrapper"><code class='code'>Lab(${xe(t.lab.values.l)}% ${xe(t.lab.values.a)} ${xe(t.lab.values.b)})</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>RGB</h2></summary>
          <div class="group">
            ${this.renderInput({category:"rgb",kind:"r",label:"red",min:0,max:255})}
            ${this.renderInput({category:"rgb",kind:"g",label:"green",min:0,max:255})}
            ${this.renderInput({category:"rgb",kind:"b",label:"blue",min:0,max:255})}

            <pre class="code-wrapper"><code class='code'>rgb(${xe(t.rgb.values.r)} ${xe(t.rgb.values.g)} ${xe(t.rgb.values.b)})</code>
<code class='code'>${e}</code></pre>
          </div>
        </details>

        <details ?open=${!this.isMobile}>
          <summary><h2>HSL</h2></summary>
          <div class="group">
            ${this.renderInput({category:"hsl",kind:"h",label:"hue",min:0,max:360})}
            ${this.renderInput({category:"hsl",kind:"s",label:"saturation",min:0,step:.01,max:1,mod:t=>100*t,unit:"%"})}
            ${this.renderInput({category:"hsl",kind:"l",label:"lightness",min:0,step:.01,max:1,mod:t=>100*t,unit:"%"})}

            <pre class="code-wrapper"><code class='code'>hsl(${xe(t.hsl.values.h)} ${100*xe(t.hsl.values.s)}% ${xe(100*t.hsl.values.l)}%)</code></pre>
          </div>
        </details>
      </div>
    `}};Ee.styles=u`
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
  `,_e([at()],Ee.prototype,"isMobile",void 0),Ee=_e([nt("color-picker")],Ee),document.documentElement.style.backgroundColor=ee().rgb.raw.formatHex(),ee.on((({rgb:t})=>{document.documentElement.style.backgroundColor=t.raw.formatHex()}));
//# sourceMappingURL=index.efe19f63.js.map

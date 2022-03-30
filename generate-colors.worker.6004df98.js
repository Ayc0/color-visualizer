(()=>{function t(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function e(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function r(){}var n=.7,i=1.4285714285714286,a="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",s="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",o=/^#([0-9a-f]{3,8})$/,h=new RegExp("^rgb\\(\\s*([+-]?\\d+)\\s*,\\s*([+-]?\\d+)\\s*,\\s*([+-]?\\d+)\\s*\\)$"),l=new RegExp(`^rgb\\(${s},${s},${s}\\)$`),u=new RegExp(`^rgba\\(\\s*([+-]?\\d+)\\s*,\\s*([+-]?\\d+)\\s*,\\s*([+-]?\\d+)\\s*,${a}\\)$`),c=new RegExp(`^rgba\\(${s},${s},${s},${a}\\)$`),g=new RegExp(`^hsl\\(${a},${s},${s}\\)$`),d=new RegExp(`^hsla\\(${a},${s},${s},${a}\\)$`),p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function b(){return this.rgb().formatHex()}function f(){return this.rgb().formatRgb()}function y(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=o.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?w(e):3===r?new k(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?m(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?m(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=h.exec(t))?new k(e[1],e[2],e[3],1):(e=l.exec(t))?new k(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=u.exec(t))?m(e[1],e[2],e[3],e[4]):(e=c.exec(t))?m(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=g.exec(t))?H(e[1],e[2]/100,e[3]/100,1):(e=d.exec(t))?H(e[1],e[2]/100,e[3]/100,e[4]):p.hasOwnProperty(t)?w(p[t]):"transparent"===t?new k(NaN,NaN,NaN,0):null}function w(t){return new k(t>>16&255,t>>8&255,255&t,1)}function m(t,e,r,n){return n<=0&&(t=e=r=NaN),new k(t,e,r,n)}function $(t){return t instanceof r||(t=y(t)),t?new k((t=t.rgb()).r,t.g,t.b,t.opacity):new k}function k(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function N(){return`#${q(this.r)}${q(this.g)}${q(this.b)}`}function x(){const t=M(this.opacity);return`${1===t?"rgb(":"rgba("}${v(this.r)}, ${v(this.g)}, ${v(this.b)}${1===t?")":`, ${t})`}`}function M(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function v(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function q(t){return((t=v(t))<16?"0":"")+t.toString(16)}function H(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new E(t,e,r,n)}function R(t){if(t instanceof E)return new E(t.h,t.s,t.l,t.opacity);if(t instanceof r||(t=y(t)),!t)return new E;if(t instanceof E)return t;var e=(t=t.rgb()).r/255,n=t.g/255,i=t.b/255,a=Math.min(e,n,i),s=Math.max(e,n,i),o=NaN,h=s-a,l=(s+a)/2;return h?(o=e===s?(n-i)/h+6*(n<i):n===s?(i-e)/h+2:(e-n)/h+4,h/=l<.5?s+a:2-s-a,o*=60):h=l>0&&l<1?0:o,new E(o,h,l,t.opacity)}function E(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function j(t){return(t=(t||0)%360)<0?t+360:t}function I(t){return Math.max(0,Math.min(1,t||0))}function O(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}t(r,y,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:b,formatHex:b,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return R(this).formatHsl()},formatRgb:f,toString:f}),t(k,(function(t,e,r,n){return 1===arguments.length?$(t):new k(t,e,r,null==n?1:n)}),e(r,{brighter(t){return t=null==t?i:Math.pow(i,t),new k(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?n:Math.pow(n,t),new k(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new k(v(this.r),v(this.g),v(this.b),M(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:N,formatHex:N,formatHex8:function(){return`#${q(this.r)}${q(this.g)}${q(this.b)}${q(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:x,toString:x})),t(E,(function(t,e,r,n){return 1===arguments.length?R(t):new E(t,e,r,null==n?1:n)}),e(r,{brighter(t){return t=null==t?i:Math.pow(i,t),new E(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?n:Math.pow(n,t),new E(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new k(O(t>=240?t-240:t+120,i,n),O(t,i,n),O(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new E(j(this.h),I(this.s),I(this.l),M(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=M(this.opacity);return`${1===t?"hsl(":"hsla("}${j(this.h)}, ${100*I(this.s)}%, ${100*I(this.l)}%${1===t?")":`, ${t})`}`}}));const P=Math.PI/180,S=180/Math.PI,C=.96422,z=.82521,A=4/29,L=6/29,U=.12841854934601665;function B(t){if(t instanceof D)return new D(t.l,t.a,t.b,t.opacity);if(t instanceof V)return W(t);t instanceof k||(t=$(t));var e,r,n=K(t.r),i=K(t.g),a=K(t.b),s=F((.2225045*n+.7168786*i+.0606169*a)/1);return n===i&&i===a?e=r=s:(e=F((.4360747*n+.3850649*i+.1430804*a)/C),r=F((.0139322*n+.0971045*i+.7141733*a)/z)),new D(116*s-16,500*(e-s),200*(s-r),t.opacity)}function D(t,e,r,n){this.l=+t,this.a=+e,this.b=+r,this.opacity=+n}function F(t){return t>.008856451679035631?Math.pow(t,1/3):t/U+A}function G(t){return t>L?t*t*t:U*(t-A)}function J(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function K(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Q(t){if(t instanceof V)return new V(t.h,t.c,t.l,t.opacity);if(t instanceof D||(t=B(t)),0===t.a&&0===t.b)return new V(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*S;return new V(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function T(t,e,r,n){return 1===arguments.length?Q(t):new V(t,e,r,null==n?1:n)}function V(t,e,r,n){this.h=+t,this.c=+e,this.l=+r,this.opacity=+n}function W(t){if(isNaN(t.h))return new D(t.l,0,0,t.opacity);var e=t.h*P;return new D(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}t(D,(function(t,e,r,n){return 1===arguments.length?B(t):new D(t,e,r,null==n?1:n)}),e(r,{brighter(t){return new D(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker(t){return new D(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,r=isNaN(this.b)?t:t-this.b/200;return new k(J(3.1338561*(e=C*G(e))-1.6168667*(t=1*G(t))-.4906146*(r=z*G(r))),J(-.9787684*e+1.9161415*t+.033454*r),J(.0719453*e-.2289914*t+1.4052427*r),this.opacity)}})),t(V,T,e(r,{brighter(t){return new V(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker(t){return new V(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb(){return W(this).rgb()}})),onmessage=function(t){const[e,r,n]=t.data,i=new Uint8ClampedArray(r*n*4);for(const{coordinates:t,colors:a}of function*(t,e,r){const n=T(t,0,0);for(let t=0;t<e;t+=1)for(let i=0;i<r;i+=1)n.c=Math.floor(t/e*132),n.l=Math.floor(100*(1-i/r)),yield{coordinates:{x:t,y:i},colors:n.rgb()}}(e,r,n)){const e=4*(t.y*r+t.x);i[e+0]=a.r,i[e+1]=a.g,i[e+2]=a.b,i[e+3]=255}postMessage(i)}})();
//# sourceMappingURL=generate-colors.worker.6004df98.js.map

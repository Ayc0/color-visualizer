function t(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function e(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function n(){}var i=1/.7,r="\\s*([+-]?\\d+)\\s*",a="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",o="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",s=/^#([0-9a-f]{3,8})$/,h=new RegExp("^rgb\\("+[r,r,r]+"\\)$"),l=new RegExp("^rgb\\("+[o,o,o]+"\\)$"),u=new RegExp("^rgba\\("+[r,r,r,a]+"\\)$"),c=new RegExp("^rgba\\("+[o,o,o,a]+"\\)$"),g=new RegExp("^hsl\\("+[a,o,o]+"\\)$"),d=new RegExp("^hsla\\("+[a,o,o,a]+"\\)$"),f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function p(){return this.rgb().formatHex()}function b(){return this.rgb().formatRgb()}function w(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=s.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?y(e):3===n?new M(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?m(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?m(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=h.exec(t))?new M(e[1],e[2],e[3],1):(e=l.exec(t))?new M(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=u.exec(t))?m(e[1],e[2],e[3],e[4]):(e=c.exec(t))?m(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=g.exec(t))?R(e[1],e[2]/100,e[3]/100,1):(e=d.exec(t))?R(e[1],e[2]/100,e[3]/100,e[4]):f.hasOwnProperty(t)?y(f[t]):"transparent"===t?new M(NaN,NaN,NaN,0):null}function y(t){return new M(t>>16&255,t>>8&255,255&t,1)}function m(t,e,n,i){return i<=0&&(t=e=n=NaN),new M(t,e,n,i)}function k(t){return t instanceof n||(t=w(t)),t?new M((t=t.rgb()).r,t.g,t.b,t.opacity):new M}function N(t,e,n,i){return 1===arguments.length?k(t):new M(t,e,n,null==i?1:i)}function M(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}function v(){return"#"+q(this.r)+q(this.g)+q(this.b)}function x(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function q(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function R(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new $(t,e,n,i)}function E(t){if(t instanceof $)return new $(t.h,t.s,t.l,t.opacity);if(t instanceof n||(t=w(t)),!t)return new $;if(t instanceof $)return t;var e=(t=t.rgb()).r/255,i=t.g/255,r=t.b/255,a=Math.min(e,i,r),o=Math.max(e,i,r),s=NaN,h=o-a,l=(o+a)/2;return h?(s=e===o?(i-r)/h+6*(i<r):i===o?(r-e)/h+2:(e-i)/h+4,h/=l<.5?o+a:2-o-a,s*=60):h=l>0&&l<1?0:s,new $(s,h,l,t.opacity)}function $(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}function H(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}t(n,w,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:p,formatHex:p,formatHsl:function(){return E(this).formatHsl()},formatRgb:b,toString:b}),t(M,N,e(n,{brighter:function(t){return t=null==t?i:Math.pow(i,t),new M(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new M(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:v,formatHex:v,formatRgb:x,toString:x})),t($,(function(t,e,n,i){return 1===arguments.length?E(t):new $(t,e,n,null==i?1:i)}),e(n,{brighter:function(t){return t=null==t?i:Math.pow(i,t),new $(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new $(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new M(H(t>=240?t-240:t+120,r,i),H(t,r,i),H(t<120?t+240:t-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));const j=Math.PI/180,I=180/Math.PI,O=4/29,P=6/29,S=3*P*P;function z(t){if(t instanceof L)return new L(t.l,t.a,t.b,t.opacity);if(t instanceof Q)return T(t);t instanceof M||(t=k(t));var e,n,i=F(t.r),r=F(t.g),a=F(t.b),o=A((.2225045*i+.7168786*r+.0606169*a)/1);return i===r&&r===a?e=n=o:(e=A((.4360747*i+.3850649*r+.1430804*a)/.96422),n=A((.0139322*i+.0971045*r+.7141733*a)/.82521)),new L(116*o-16,500*(e-o),200*(o-n),t.opacity)}function C(t,e,n,i){return 1===arguments.length?z(t):new L(t,e,n,null==i?1:i)}function L(t,e,n,i){this.l=+t,this.a=+e,this.b=+n,this.opacity=+i}function A(t){return t>.008856451679035631?Math.pow(t,1/3):t/S+O}function B(t){return t>P?t*t*t:S*(t-O)}function D(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function F(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function G(t){if(t instanceof Q)return new Q(t.h,t.c,t.l,t.opacity);if(t instanceof L||(t=z(t)),0===t.a&&0===t.b)return new Q(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*I;return new Q(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function J(t,e,n,i){return 1===arguments.length?G(t):new Q(n,e,t,null==i?1:i)}function K(t,e,n,i){return 1===arguments.length?G(t):new Q(t,e,n,null==i?1:i)}function Q(t,e,n,i){this.h=+t,this.c=+e,this.l=+n,this.opacity=+i}function T(t){if(isNaN(t.h))return new L(t.l,0,0,t.opacity);var e=t.h*j;return new L(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}t(L,C,e(n,{brighter:function(t){return new L(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new L(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new M(D(3.1338561*(e=.96422*B(e))-1.6168667*(t=1*B(t))-.4906146*(n=.82521*B(n))),D(-.9787684*e+1.9161415*t+.033454*n),D(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),t(Q,K,e(n,{brighter:function(t){return new Q(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Q(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return T(this).rgb()}}));export{C as a,K as h,J as l,N as r};

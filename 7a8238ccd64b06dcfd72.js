(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,n){t.exports=n(127)},127:function(t,e,n){"use strict";n.r(e),function(t){n(44),n(97),n(4);var e=n(22),r=(n(62),n(88),n(16)),o=(n(102),n(103),n(3),n(1),n(5),n(15),n(106),n(136),n(144),n(146),n(7)),c=n(122),f=n(86),l=n(8),h=n(25),d=n(72);o.default.component(d.a.name,d.a),o.default.component("NLink",d.a),t.fetch||(t.fetch=c.a);var m,x,v=[],y=window.__NUXT__||{};Object.assign(o.default.config,{silent:!0,performance:!1});var w=o.default.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function O(t,e,n){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,f,h,d=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._pathChanged=Boolean(m.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(l.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,this._pathChanged||!this._queryChanged){t.next=11;break}return t.next=8,Object(l.n)(e,(function(t,e){return{Component:t,instance:e}}));case 8:o=t.sent,o.some((function(t){var r=t.Component,o=t.instance,c=r.options.watchQuery;return!0===c||(Array.isArray(c)?c.some((function(t){return d._diffQuery[t]})):"function"==typeof c&&c.apply(o,[e.query,n.query]))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();case 11:r(),t.next=25;break;case 14:if(t.prev=14,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,h=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(h)){t.next=22;break}return window.location.reload(!0),t.abrupt("return");case 22:this.error({statusCode:f,message:h}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 25:case"end":return t.stop()}}),t,this,[[4,14]])})))).apply(this,arguments)}function C(t,e){return y.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function j(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=C(Object(l.o)(e),y.data?y.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function $(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof f.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f.a[t])})),!c)return Object(l.k)(o,e)}function E(t,e,n){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,f,d,x,y,w,O,k,C,j,E,R,T,S,P,N,A,D=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?v=[]:(o=[],v=Object(l.e)(n,o).map((function(t,i){return Object(l.b)(n.matched[o[i]].path)(n.params)}))),c=!1,f=function(path){n.path===path.path&&D.$loading.finish&&D.$loading.finish(),n.path!==path.path&&D.$loading.pause&&D.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(l.p)(m,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err),d=[],(x=Object(l.e)(e,d)).length){t.next=26;break}return t.next=14,$.call(this,x,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return y=(h.a.options||h.a).layout,t.next=19,this.loadLayout("function"==typeof y?y.call(h.a,m.context):y);case 19:return w=t.sent,t.next=22,$.call(this,x,m.context,w);case 22:if(!c){t.next=24;break}return t.abrupt("return");case 24:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 26:return x.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(_(x,e,n)),t.prev=28,t.next=31,$.call(this,x,m.context);case 31:if(!c){t.next=33;break}return t.abrupt("return");case 33:if(!m.context._errored){t.next=35;break}return t.abrupt("return",r());case 35:return"function"==typeof(O=x[0].options.layout)&&(O=O(m.context)),t.next=39,this.loadLayout(O);case 39:return O=t.sent,t.next=42,$.call(this,x,m.context,O);case 42:if(!c){t.next=44;break}return t.abrupt("return");case 44:if(!m.context._errored){t.next=46;break}return t.abrupt("return",r());case 46:k=!0,t.prev=47,C=!0,j=!1,E=void 0,t.prev=51,R=x[Symbol.iterator]();case 53:if(C=(T=R.next()).done){t.next=65;break}if("function"==typeof(S=T.value).options.validate){t.next=57;break}return t.abrupt("continue",62);case 57:return t.next=59,S.options.validate(m.context);case 59:if(k=t.sent){t.next=62;break}return t.abrupt("break",65);case 62:C=!0,t.next=53;break;case 65:t.next=71;break;case 67:t.prev=67,t.t0=t.catch(51),j=!0,E=t.t0;case 71:t.prev=71,t.prev=72,C||null==R.return||R.return();case 74:if(t.prev=74,!j){t.next=77;break}throw E;case 77:return t.finish(74);case 78:return t.finish(71);case 79:t.next=85;break;case 81:return t.prev=81,t.t1=t.catch(47),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 85:if(k){t.next=88;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 88:return t.next=90,Promise.all(x.map((function(t,i){if(t._path=Object(l.b)(e.matched[d[i]].path)(e.params),t._dataRefresh=!1,D._pathChanged&&D._queryChanged||t._path!==v[i])t._dataRefresh=!0;else if(!D._pathChanged&&D._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)?t._dataRefresh=r.some((function(t){return D._diffQuery[t]})):"function"==typeof r&&(P||(P=Object(l.f)(e)),t._dataRefresh=r.apply(P[i],[e.query,n.query]))}if(D._hadError||!D._isMounted||t._dataRefresh){var o=[],c=t.options.asyncData&&"function"==typeof t.options.asyncData,f=Boolean(t.options.fetch),h=c&&f?30:45;if(c){var x=Object(l.m)(t.options.asyncData,m.context).then((function(e){Object(l.a)(t,e),D.$loading.increase&&D.$loading.increase(h)}));o.push(x)}if(D.$loading.manual=!1===t.options.loading,f){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((function(t){D.$loading.increase&&D.$loading.increase(h)})),o.push(p)}return Promise.all(o)}})));case 90:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=107;break;case 93:if(t.prev=93,t.t2=t.catch(28),"ERR_REDIRECT"!==(N=t.t2||{}).message){t.next=98;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,N));case 98:return v=[],Object(l.i)(N),"function"==typeof(A=(h.a.options||h.a).layout)&&(A=A(m.context)),t.next=104,this.loadLayout(A);case 104:this.error(N),this.$nuxt.$emit("routeChanged",e,n,N),r();case 107:case"end":return t.stop()}}),t,this,[[28,93],[47,81],[51,67,71,79],[72,,74,78]])})))).apply(this,arguments)}function T(t,n){Object(l.c)(t,(function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.default.extend(t))._Ctor=t,r.components[c]=t),t}))}function S(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?(h.a.options||h.a).layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function P(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=Object(l.f)(t),c=Object(l.e)(t);o.default.nextTick((function(){r.forEach((function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&c[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.default.set(t.$data,n,e[n]);window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}})),S.call(n,t)}))}}function N(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),x.afterEach((function(e,n){o.default.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}function A(){return(A=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,x=e.router,e.store,n=new o.default(m),r=function(){n.$mount("#__nuxt"),x.afterEach(T),x.afterEach(P.bind(n)),o.default.nextTick((function(){N(n)}))},t.next=7,Promise.all(j(x));case 7:if(c=t.sent,n.setTransitions=n.$options.nuxt.setTransitions.bind(n),c.length&&(n.setTransitions(_(c,x.currentRoute)),v=x.currentRoute.matched.map((function(t){return Object(l.b)(t.path)(x.currentRoute.params)}))),n.$loading={},y.error&&n.error(y.error),x.beforeEach(O.bind(n)),x.beforeEach(E.bind(n)),!y.serverRendered){t.next=17;break}return r(),t.abrupt("return");case 17:f=function(){T(x.currentRoute,x.currentRoute),S.call(n,x.currentRoute),r()},E.call(n,x.currentRoute,x.currentRoute,(function(path){if(path){var t=x.afterEach((function(e,n){t(),f()}));x.push(path,void 0,(function(t){t&&w(t)}))}else f()}));case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(h.b)().then((function(t){return A.apply(this,arguments)})).catch(w)}.call(this,n(31))},155:function(t,e,n){"use strict";var r=n(69);n.n(r).a},156:function(t,e,n){(e=n(38)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=e},157:function(t,e,n){"use strict";var r=n(70);n.n(r).a},158:function(t,e,n){(e=n(38)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},165:function(t,e,n){"use strict";var r=n(71);n.n(r).a},166:function(t,e,n){(e=n(38)(!1)).push([t.i,"h1{margin-bottom:24px}.fullheight{height:100vh;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;overflow-x:hidden}.content{max-width:560px;width:100%;margin:0 auto;padding:0 16px}",""]),t.exports=e},167:function(t,e,n){"use strict";n.r(e);n(15);var r=n(7),o=n(41);r.default.use(o.a);e.default=function(){return new o.a.Store({state:{amount:"",family:"",name:"",phone:""},getters:{getStore:function(t){return t}},mutations:{setAmount:function(t,data){t.amount=data},setPersonData:function(t,data){t.family=data.family,t.name=data.name,t.phone=data.phone}}})}},25:function(t,e,n){"use strict";n(62),n(6),n(4),n(3),n(1),n(5);var r=n(16),o=n(0),c=(n(15),n(7)),f=n(123),l=n(87),h=n.n(l),d=n(43),m=n.n(d),x=n(54),v=n(8);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var y=function(){},w=x.a.prototype.push;x.a.prototype.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,n=arguments.length>2?arguments[2]:void 0;return w.call(this,t,e,n)},c.default.use(x.a);var _={mode:"history",base:decodeURI("/indis/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(v.e)(t);o.length<2&&o.every((function(t){return!1!==t.options.scrollToTop}))?r={x:0,y:0}:o.some((function(t){return t.options.scrollToTop}))&&(r={x:0,y:0}),n&&(r=n);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/result",component:function(){return Object(v.j)(n.e(3).then(n.bind(null,184)))},name:"result"},{path:"/step1",component:function(){return Object(v.j)(n.e(4).then(n.bind(null,183)))},name:"step1"},{path:"/step2",component:function(){return Object(v.j)(n.e(5).then(n.bind(null,182)))},name:"step2"},{path:"/",component:function(){return Object(v.j)(n.e(2).then(n.bind(null,185)))},name:"index"}],fallback:!1};function O(){return new x.a(_)}var k,C={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var h=c[l]||f,d={};j.forEach((function(t){void 0!==h[t]&&(d[t]=h[t])}));var m={};$.forEach((function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))}));var x=m.beforeEnter;if(m.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),x)return x.call(o,t)},!1===h.css){var v=m.leave;(!v||v.length<2)&&(m.leave=function(t,e){v&&v.call(o,t),o.$nextTick(e)})}var y=t("routerView",data);return r.keepAlive&&(y=t("keep-alive",{props:r.keepAliveProps},[y])),t("transition",{props:d,on:m},[y])}},j=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],$=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],E={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},R=(n(155),n(37)),T=Object(R.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,S=(n(35),n(36),n(11),n(53)),P={name:"Nuxt",components:{NuxtChild:C,NuxtError:T},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured:function(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(v.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(S.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){var e=this;return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick((function(){return e.errorFromNuxtError=!1})),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick((function(){return e.displayingNuxtError=!1})),t(T,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},N=(n(44),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),A=(n(157),Object(R.a)(N,void 0,void 0,!1,null,null,null).exports),D=(n(159),n(161),n(163),n(165),{_default:Object(R.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fullheight"},[e("div",{staticClass:"content"},[e("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",appear:""}},[e("nuxt")],1)],1)])}),[],!1,null,null,null).exports}),L={head:{title:"indis",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"indis test"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:(k=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=Object(v.f)(this.$route)).length){t.next=3;break}return t.abrupt("return");case 3:return this.$loading.start(),n=e.map((function(t){var p=[];return t.$options.fetch&&p.push(Object(v.m)(t.$options.fetch,r.context)),t.$options.asyncData&&p.push(Object(v.m)(t.$options.asyncData,r.context).then((function(e){for(var n in e)c.default.set(t.$data,n,e[n])}))),Promise.all(p)})),t.prev=5,t.next=8,Promise.all(n);case 8:t.next=15;break;case 10:t.prev=10,t.t0=t.catch(5),this.$loading.fail(),Object(v.i)(t.t0),this.error(t.t0);case 15:this.$loading.finish();case 16:case"end":return t.stop()}}),t,this,[[5,10]])}))),function(){return k.apply(this,arguments)}),errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&D["_"+t]||(t="default"),this.layoutName=t,this.layout=D["_"+t],this.layout},loadLayout:function(t){return t&&D["_"+t]||(t="default"),Promise.resolve(D["_"+t])}},components:{NuxtLoading:A}},M=n(41);c.default.use(M.a);var I={};(I=function(t,e){if((t=t.default||t).commit)throw new Error("[nuxt] ".concat(e," should export a method that returns a Vuex instance."));return"function"!=typeof t&&(t=Object.assign({},t)),function(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in ".concat(e));var n=Object.assign({},t.state);t=Object.assign({},t,{state:function(){return n}})}return t}(t,e)}(n(167),"store/index.js")).modules=I.modules||{};var B=I instanceof Function?I:function(){return new M.a.Store(Object.assign({strict:!1},I))};var U=n(125);function F(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.default.use(U.a,{}),n.d(e,"b",(function(){return K})),n.d(e,"a",(function(){return T})),c.default.component(h.a.name,h.a),c.default.component(m.a.name,z({},m.a,{render:function(t,e){return m.a._warned||(m.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),m.a.render(t,e)}})),c.default.component(C.name,C),c.default.component("NChild",C),c.default.component(P.name,P),c.default.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var J={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function K(t){return H.apply(this,arguments)}function H(){return(H=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,f,l,path;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:return n=t.sent,(r=B(e)).$router=n,o=z({store:r,router:n,nuxt:{defaultTransition:J,transitions:[J],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},J,{name:t}):Object.assign({},J,t):J})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=Boolean(t),t=t?Object(v.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},L),r.app=o,f=e?e.next:function(t){return o.router.push(t)},e?l=n.resolve(e.url).route:(path=Object(v.d)(n.options.base,n.options.mode),l=n.resolve(path).route),t.next=11,Object(v.p)(o,{store:r,route:l,next:f,error:o.nuxt.error.bind(o),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 11:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use((function(){Object.prototype.hasOwnProperty.call(c.default,t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})})))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=16;break;case 16:t.next=19;break;case 19:return t.abrupt("return",{store:r,app:o,router:n});case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},69:function(t,e,n){var content=n(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("72daabed",content,!0,{sourceMap:!1})},70:function(t,e,n){var content=n(158);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("3191d5ad",content,!0,{sourceMap:!1})},71:function(t,e,n){var content=n(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("932a8f60",content,!0,{sourceMap:!1})},72:function(t,e,n){"use strict";n(1),n(97),n(4),n(3),n(102),n(103);var r=n(7),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},c=window.cancelIdleCallback||function(t){clearTimeout(t)},f=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()}))}));e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.prefetch&&!this.noPrefetch&&(this.handleId=o(this.observe,{timeout:2e3}))},beforeDestroy:function(){c(this.handleId),this.__observed&&(f.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){f&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),f.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetchLink:function(){if(this.canPrefetch()){f.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value,h=l();h instanceof Promise&&h.catch((function(){})),l.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}}},8:function(t,e,n){"use strict";n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return x})),n.d(e,"a",(function(){return v})),n.d(e,"o",(function(){return y})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return _})),n.d(e,"c",(function(){return O})),n.d(e,"n",(function(){return k})),n.d(e,"h",(function(){return C})),n.d(e,"p",(function(){return $})),n.d(e,"k",(function(){return R})),n.d(e,"m",(function(){return T})),n.d(e,"d",(function(){return S})),n.d(e,"b",(function(){return P})),n.d(e,"g",(function(){return N})),n.d(e,"l",(function(){return A}));n(6),n(4);var r=n(53),o=(n(21),n(148),n(149),n(22)),c=(n(35),n(36),n(68),n(117),n(11),n(62),n(16)),f=(n(44),n(3),n(1),n(5),n(15),n(0)),l=n(7);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t){l.default.config.errorHandler&&l.default.config.errorHandler(t)}function x(t){return t.then((function(t){return t.default||t}))}function v(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),d({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return w(t,e,"instances")}function O(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function k(t,e){return Promise.all(O(t,function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n,r,o,c){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return o.components[c]=n=y(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function C(t){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,k(e);case 4:return t.abrupt("return",d({},e,{meta:w(e).map((function(t,n){return d({},t.options.meta,{},(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(t,e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var c,f,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/indis/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=U(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([C(n.route),C(n.from)]);case 3:c=t.sent,f=Object(r.a)(c,2),l=f[0],h=f[1],n.route&&(e.context.route=l),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!1,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():T(t[0],e).then((function(){return R(t.slice(1),e)}))}function T(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function S(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function P(t,e){return function(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",B(e)));return function(e,r){for(var path="",data=e||{},o=(r||{}).pretty?L:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l=data[f.name||"pathMatch"],h=void 0;if(null==l){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d]),!n[c].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?L(l,!0):o(l),!n[c].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var l=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+l.length,h)path+=h[1];else{var m=t[c],x=n[2],v=n[3],y=n[4],w=n[5],_=n[6],O=n[7];path&&(r.push(path),path="");var k=null!=x&&null!=m&&m!==x,C="+"===_||"*"===_,j="?"===_||"*"===_,$=n[2]||f,pattern=y||w;r.push({name:v||o++,prefix:x||"",delimiter:$,optional:j,repeat:C,partial:k,asterisk:Boolean(O),pattern:pattern?I(pattern):O?".*":"[^"+M($)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e),e)}function N(t,e){var n={},r=d({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function A(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return d({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function M(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function I(t){return t.replace(/([=!:$/()])/g,"\\$1")}function B(t){return t&&t.sensitive?"":"i"}function U(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,f=t.split("/"),l=(n?n+"://":"//")+f.shift(),path=f.filter(Boolean).join("/");if(2===(f=path.split("#")).length){var h=f,d=Object(r.a)(h,2);path=d[0],c=d[1]}return l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),l+=c?"#"+c:""}},86:function(t,e,n){"use strict";e.a={}}},[[126,6,1,7]]]);
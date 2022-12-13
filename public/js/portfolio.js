/*! For license information please see portfolio.js.LICENSE.txt */
"use strict";(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[336],{45569:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,o=Object.create(i.prototype),s=new k(r||[]);return a(o,"_invoke",{value:C(t,n,s)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function p(){}function v(){}function m(){}var g={};u(g,s,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(j([])));b&&b!==e&&n.call(b,s)&&(g=b);var w=m.prototype=p.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(a,o,s,c){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==r(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return i("throw",t,s,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function C(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return E()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=S(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function j(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return v.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=u(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new x(d(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(w),u(w,l,"Generator"),u(w,s,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}n.r(e),n.d(e,{default:()=>o});const o={props:["initialData"],data:function(){return{loading:!0,isAuthed:void 0,user:void 0,settings:void 0,post:void 0,profile:void 0,settingsUrl:window._portfolio.path+"/settings"}},mounted:function(){var t=JSON.parse(this.initialData);this.post=t.post,this.profile=t.profile,this.isAuthed=t.authed,this.fetchUser()},methods:{fetchUser:function(){var t,e=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isAuthed){t.next=3;break}return t.next=3,axios.get("/api/v1/accounts/verify_credentials").then((function(t){e.user=t.data})).catch((function(t){}));case 3:return t.next=5,axios.get("/api/portfolio/account/settings.json",{params:{id:e.profile.id}}).then((function(t){e.settings=t.data})).then((function(){setTimeout((function(){e.loading=!1}),500)}));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,c,"next",t)}function c(t){a(o,r,i,s,c,"throw",t)}s(void 0)}))})()},profileUrl:function(){return"https://".concat(window._portfolio.domain).concat(window._portfolio.path,"/").concat(this.profile.username)},postUrl:function(t){return"/".concat(this.profile.username,"/").concat(t.id)},formatDate:function(t){return new Date(t).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"long",day:"numeric"})}}}},55685:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});n(4155),n(4570);var r=n(19755);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function d(t,e,n,i){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),s=new k(i||[]);return r(o,"_invoke",{value:C(t,n,s)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var h={};function p(){}function v(){}function m(){}var g={};u(g,s,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(j([])));b&&b!==e&&n.call(b,s)&&(g=b);var w=m.prototype=p.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function a(r,o,s,c){var l=f(t[r],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,c)}),(function(t){a("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,c)}))}c(l.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function C(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return E()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=S(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function j(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return v.prototype=m,r(w,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:v,configurable:!0}),v.displayName=u(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new x(d(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(w),u(w,l,"Generator"),u(w,s,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,c,"next",t)}function c(t){o(a,r,i,s,c,"throw",t)}s(void 0)}))}}const c={props:["initialData"],data:function(){return{loading:!0,user:void 0,profile:void 0,settings:void 0,feed:[],albumIndex:0,settingsUrl:window._portfolio.path+"/settings"}},mounted:function(){var t=JSON.parse(this.initialData);this.profile=t.profile,this.fetchUser()},methods:{fetchUser:function(){var t=this;return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return axios.get("/api/v1/accounts/verify_credentials").then((function(e){t.user=e.data})).catch((function(t){})),e.next=3,axios.get("/api/portfolio/account/settings.json",{params:{id:t.profile.id}}).then((function(e){t.settings=e.data})).then((function(){t.fetchFeed()}));case 3:case"end":return e.stop()}}),e)})))()},fetchFeed:function(){var t=this;return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/portfolio/"+t.profile.id+"/feed").then((function(e){t.feed=e.data.filter((function(t){return"photo"===t.pf_type}))})).then((function(){t.setAlbumSlide()})).then((function(){setTimeout((function(){t.loading=!1}),500)})).then((function(){"masonry"===t.settings.profile_layout&&setTimeout((function(){t.initMasonry()}),500)}));case 1:case"end":return e.stop()}}),e)})))()},postUrl:function(t){return"".concat(window._portfolio.path,"/").concat(this.profile.username,"/").concat(t.id)},albumPrev:function(){if(0!==this.albumIndex){if(1===this.albumIndex){this.albumIndex--;var t=new URL(window.location);return t.searchParams.delete("slide"),void window.history.pushState({},"",t)}this.albumIndex--;var e=new URL(window.location);e.searchParams.set("slide",this.albumIndex+1),window.history.pushState({},"",e)}},albumNext:function(){if(this.albumIndex!==this.feed.length-1){this.albumIndex++;var t=new URL(window.location);t.searchParams.set("slide",this.albumIndex+1),window.history.pushState({},"",t)}},setAlbumSlide:function(){var t=new URL(window.location);if(t.searchParams.has("slide")){var e=Number.parseInt(t.searchParams.get("slide"));if(Number.isNaN(e))return;if(e<=0)return;if(e>this.feed.length)return;this.albumIndex=t.searchParams.get("slide")-1}},initMasonry:function(){r('[data-fancybox="recent"]').fancybox({gutter:20,modal:!1})}}}},66164:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const r={data:function(){return{loading:!0,tabIndex:"Configure",tabs:["Configure","Customize","View Portfolio"],user:void 0,settings:void 0,recentPostsLoaded:!1,rpStart:0,recentPosts:[],recentPostsPage:void 0,selectedRecentPosts:[],isSavingCurated:!1,canSaveCurated:!1,customizeSettings:[],profileSourceOptions:[{value:null,text:"Please select an option",disabled:!0},{value:"recent",text:"Most recent posts"}],profileLayoutOptions:[{value:null,text:"Please select an option",disabled:!0},{value:"grid",text:"Grid"},{value:"masonry",text:"Masonry"},{value:"album",text:"Album"}]}},computed:{prevClass:function(){return 0===this.rpStart?"fa fa-arrow-circle-left fa-3x text-dark":"fa fa-arrow-circle-left fa-3x text-muted cursor-pointer"},nextClass:function(){return this.rpStart>this.recentPosts.length-9?"fa fa-arrow-circle-right fa-3x text-dark":"fa fa-arrow-circle-right fa-3x text-muted cursor-pointer"}},watch:{settings:{deep:!0,immediate:!0,handler:function(t,e){this.loading||(e.show_timestamp||(this.settings.show_link=!1),this.updateSettings())}}},mounted:function(){this.fetchUser()},methods:{fetchUser:function(){var t=this;axios.get("/api/v1/accounts/verify_credentials").then((function(e){t.user=e.data,e.data.statuses_count>0?t.profileSourceOptions=[{value:null,text:"Please select an option",disabled:!0},{value:"recent",text:"Most recent posts"},{value:"custom",text:"Curated posts"}]:setTimeout((function(){t.settings.active=!1,t.settings.profile_source="recent",t.tabIndex="Configure"}),1e3)})),axios.post(this.apiPath("/api/portfolio/self/settings.json")).then((function(e){t.settings=e.data,t.updateTabs(),e.data.metadata&&e.data.metadata.posts&&(t.selectedRecentPosts=e.data.metadata.posts)})).then((function(){t.initCustomizeSettings()})).then((function(){var e=new URL(window.location);if(e.searchParams.has("tab")){var n=e.searchParams.get("tab");-1!==("custom"===t.settings.profile_source?["curate","customize","share"]:["customize","share"]).indexOf(n)&&t.toggleTab(n.slice(0,1).toUpperCase()+n.slice(1))}})).then((function(){setTimeout((function(){t.loading=!1}),500)}))},apiPath:function(t){return t},toggleTab:function(t){if("Curate"!==t||this.recentPostsLoaded||this.loadRecentPosts(),this.tabIndex=t,this.rpStart=0,"Configure"==t){var e=new URL(window.location);e.searchParams.delete("tab"),window.history.pushState({},"",e)}else{if("View Portfolio"==t)return this.tabIndex="Configure",void(window.location.href="https://".concat(window._portfolio.domain).concat(window._portfolio.path,"/").concat(this.user.username));var n=new URL(window.location);n.searchParams.set("tab",t.toLowerCase()),window.history.pushState({},"",n)}},updateTabs:function(){"custom"===this.settings.profile_source?this.tabs=["Configure","Curate","Customize","View Portfolio"]:this.tabs=["Configure","Customize","View Portfolio"]},updateSettings:function(){var t=this;axios.post(this.apiPath("/api/portfolio/self/update-settings.json"),this.settings).then((function(e){t.updateTabs(),t.$bvToast.toast("Your settings have been successfully updated!",{variant:"dark",title:"Settings Updated",autoHideDelay:2e3,appendToast:!1})}))},loadRecentPosts:function(){var t=this;axios.get("/api/v1/accounts/"+this.user.id+"/statuses?only_media=1&media_types=photo&limit=100").then((function(e){e.data.length&&(t.recentPosts=e.data.filter((function(t){return"public"===t.visibility})))})).then((function(){setTimeout((function(){t.recentPostsLoaded=!0}),500)}))},toggleRecentPost:function(t){if(-1==this.selectedRecentPosts.indexOf(t)){if(24===this.selectedRecentPosts.length)return;this.selectedRecentPosts.push(t)}else this.selectedRecentPosts=this.selectedRecentPosts.filter((function(e){return e!==t}));this.canSaveCurated=!0},recentPostsPrev:function(){0!==this.rpStart&&(this.rpStart=this.rpStart-9)},recentPostsNext:function(){this.rpStart>this.recentPosts.length-9||(this.rpStart=this.rpStart+9)},clearSelected:function(){this.selectedRecentPosts=[]},saveCurated:function(){var t,e=this;this.isSavingCurated=!0,null===(t=event.currentTarget)||void 0===t||t.blur(),axios.post("/api/portfolio/self/curated.json",{ids:this.selectedRecentPosts}).then((function(t){e.isSavingCurated=!1,e.$bvToast.toast("Your curated posts have been updated!",{variant:"dark",title:"Portfolio Updated",autoHideDelay:2e3,appendToast:!1})})).catch((function(t){e.isSavingCurated=!1,e.$bvToast.toast("An error occured while attempting to update your portfolio, please try again later and contact an admin if this problem persists.",{variant:"dark",title:"Error",autoHideDelay:2e3,appendToast:!1})}))},initCustomizeSettings:function(){this.customizeSettings=[{title:"Post Settings",items:[{label:"Show Captions",model:"show_captions"},{label:"Show License",model:"show_license"},{label:"Show Location",model:"show_location"},{label:"Show Timestamp",model:"show_timestamp"},{label:"Link to Post",description:"Add link to timestamp to view the original post url, requires show timestamp to be enabled",model:"show_link",requiredWithTrue:"show_timestamp"}]},{title:"Profile Settings",items:[{label:"Show Avatar",model:"show_avatar"},{label:"Show Bio",model:"show_bio"}]}]}}}},30022:(t,e,n)=>{n.r(e),n.d(e,{render:()=>r,staticRenderFns:()=>i});var r=function(){var t=this,e=t._self._c;return e("div",[t.loading?e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[e("b-spinner")],1)]):e("div",[e("div",{staticClass:"container mb-5"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12 mb-4"},[e("div",{staticClass:"d-flex justify-content-center"},[e("img",{staticClass:"img-fluid mb-4",staticStyle:{"max-height":"80vh","object-fit":"contain"},attrs:{src:t.post.media_attachments[0].url}})])]),t._v(" "),e("div",{staticClass:"col-12 mb-4"},[t.settings.show_captions&&t.post.content_text?e("p",[t._v(t._s(t.post.content_text))]):t._e(),t._v(" "),e("div",{staticClass:"d-md-flex justify-content-between align-items-center"},[e("p",{staticClass:"small text-lighter"},[t._v("by "),e("a",{staticClass:"text-lighter font-weight-bold",attrs:{href:t.profileUrl()}},[t._v("@"+t._s(t.profile.username))])]),t._v(" "),t.settings.show_license&&t.post.media_attachments[0].license?e("p",{staticClass:"small text-muted"},[t._v("Licensed under "+t._s(t.post.media_attachments[0].license.title))]):t._e(),t._v(" "),t.settings.show_location&&t.post.place?e("p",{staticClass:"small text-muted"},[t._v(t._s(t.post.place.name)+", "+t._s(t.post.place.country))]):t._e(),t._v(" "),t.settings.show_timestamp?e("p",{staticClass:"small text-muted"},[t.settings.show_link?e("a",{staticClass:"text-lighter font-weight-bold",staticStyle:{"z-index":"2"},attrs:{href:t.post.url}},[t._v("\n                                "+t._s(t.formatDate(t.post.created_at))+"\n                            ")]):e("span",{staticClass:"user-select-none"},[t._v("\n                                "+t._s(t.formatDate(t.post.created_at))+"\n                            ")])]):t._e()])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"d-flex fixed-bottom p-3 justify-content-between align-items-center"},[t.user?e("a",{staticClass:"logo-mark logo-mark-sm mb-0 p-1",attrs:{href:"/"}},[e("span",{staticClass:"text-gradient-primary"},[t._v("portfolio")])]):e("span",{staticClass:"logo-mark logo-mark-sm mb-0 p-1"},[e("span",{staticClass:"text-gradient-primary"},[t._v("portfolio")])]),t._v(" "),t.user&&t.user.id===t.profile.id?e("p",{staticClass:"text-center mb-0"},[e("a",{staticClass:"text-muted",attrs:{href:t.settingsUrl}},[e("i",{staticClass:"far fa-cog fa-lg"})])]):t._e()])])])])])])},i=[]},9141:(t,e,n)=>{n.r(e),n.d(e,{render:()=>r,staticRenderFns:()=>i});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-100 h-100"},[t.loading?e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[e("b-spinner")],1)]):e("div",{staticClass:"container"},[e("div",{staticClass:"row py-5"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"d-flex align-items-center flex-column"},[e("img",{staticClass:"rounded-circle shadow",attrs:{src:t.profile.avatar,width:"60",height:"60",onerror:"this.onerror=null;this.src='/storage/avatars/default.png?v=0';"}}),t._v(" "),e("div",{staticClass:"py-3 text-center",staticStyle:{"max-width":"60%"}},[e("h1",{staticClass:"font-weight-bold"},[t._v(t._s(t.profile.username))]),t._v(" "),e("p",{staticClass:"font-weight-light mb-0"},[t._v(t._s(t.profile.note_text))])])])])]),t._v(" "),e("div",{staticClass:"container mb-5 pb-5"},[e("div",{class:["masonry"===t.settings.profile_layout?"card-columns":"row"],attrs:{id:"portContainer"}},["grid"===t.settings.profile_layout?t._l(t.feed,(function(n,r){return e("div",{staticClass:"col-12 col-md-4 mb-1 p-1"},[e("div",{staticClass:"square"},[e("a",{attrs:{href:t.postUrl(n)}},[e("img",{staticClass:"square-content pr-1",staticStyle:{overflow:"hidden","object-fit":"cover"},attrs:{src:n.media_attachments[0].url,width:"100%",height:"300"}})])])])})):"album"===t.settings.profile_layout?e("div",{staticClass:"col-12 mb-1 p-1"},[e("div",{staticClass:"d-flex justify-content-center"},[e("p",{staticClass:"text-muted font-weight-bold"},[t._v(t._s(t.albumIndex+1)+" "),e("span",{staticClass:"font-weight-light"},[t._v("/")]),t._v(" "+t._s(t.feed.length))])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center"},[0===t.albumIndex?e("span",[e("i",{staticClass:"fa fa-arrow-circle-left fa-3x text-dark"})]):e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.albumPrev()}}},[e("i",{staticClass:"fa fa-arrow-circle-left fa-3x text-muted"})]),t._v(" "),e("transition",{attrs:{name:"slide-fade"}},[e("a",{key:t.albumIndex,staticClass:"mx-4",attrs:{href:t.postUrl(t.feed[t.albumIndex])}},[e("img",{staticClass:"user-select-none",staticStyle:{height:"60vh",overflow:"hidden","object-fit":"contain"},attrs:{src:t.feed[t.albumIndex].media_attachments[0].url,width:"100%",draggable:!1}})])]),t._v(" "),t.albumIndex===t.feed.length-1?e("span",[e("i",{staticClass:"fa fa-arrow-circle-right fa-3x text-dark"})]):e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.albumNext()}}},[e("i",{staticClass:"fa fa-arrow-circle-right fa-3x text-muted"})])],1)]):"masonry"===t.settings.profile_layout?e("div",{staticClass:"col-12 p-0 m-0"},t._l(t.feed,(function(n,r){return e("div",{staticClass:"p-1"},[e("a",{attrs:{href:t.postUrl(n),"data-fancybox":"recent","data-src":n.media_attachments[0].url,"data-width":n.media_attachments[0].width,"data-height":n.media_attachments[0].height}},[e("img",{staticClass:"user-select-none",staticStyle:{overflow:"hidden","object-fit":"contain"},attrs:{src:n.media_attachments[0].url,width:"100%",draggable:!1}})])])})),0):t._e()],2)]),t._v(" "),e("div",{staticClass:"d-flex fixed-bottom p-3 justify-content-between align-items-center"},[t.user?e("a",{staticClass:"logo-mark logo-mark-sm mb-0 p-1",attrs:{href:"/"}},[e("span",{staticClass:"text-gradient-primary"},[t._v("portfolio")])]):e("span",{staticClass:"logo-mark logo-mark-sm mb-0 p-1"},[e("span",{staticClass:"text-gradient-primary"},[t._v("portfolio")])]),t._v(" "),t.user&&t.user.id==t.profile.id?e("p",{staticClass:"text-center mb-0"},[e("a",{staticClass:"text-muted",attrs:{href:t.settingsUrl}},[e("i",{staticClass:"far fa-cog fa-lg"})])]):t._e()])])])},i=[]},72526:(t,e,n)=>{n.r(e),n.d(e,{render:()=>r,staticRenderFns:()=>i});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"portfolio-settings px-3"},[t.loading?e("div",{staticClass:"d-flex justify-content-center align-items-center py-5"},[e("b-spinner",{attrs:{variant:"primary"}})],1):e("div",{staticClass:"row justify-content-center mb-5 pb-5"},[e("div",{staticClass:"col-12 col-md-8 bg-dark py-2 rounded"},[e("ul",{staticClass:"nav nav-pills nav-fill"},t._l(t.tabs,(function(n,r){return e("li",{staticClass:"nav-item",class:{disabled:0!==r&&!t.settings.active}},[0===r||t.settings.active?e("a",{staticClass:"nav-link",class:{active:n===t.tabIndex},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleTab(n)}}},[t._v(t._s(n))]):e("span",{staticClass:"nav-link"},[t._v(t._s(n))])])})),0)]),t._v(" "),e("transition",{attrs:{name:"slide-fade"}},["Configure"===t.tabIndex?e("div",{key:"0",staticClass:"col-12 col-md-8 bg-dark mt-3 py-2 rounded"},[t.user.statuses_count?t._e():e("div",{staticClass:"alert alert-danger"},[e("p",{staticClass:"mb-0 small font-weight-bold"},[t._v("You don't have any public posts, once you share public posts you can enable your portfolio.")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center py-2"},[e("div",{staticClass:"setting-label"},[e("p",{staticClass:"lead mb-0"},[t._v("Portfolio Enabled")]),t._v(" "),e("p",{staticClass:"small mb-0 text-muted"},[t._v("You must enable your portfolio before you or anyone can view it.")])]),t._v(" "),e("div",{staticClass:"setting-switch mt-n1"},[e("b-form-checkbox",{attrs:{name:"check-button",size:"lg",switch:"",disabled:!t.user.statuses_count},model:{value:t.settings.active,callback:function(e){t.$set(t.settings,"active",e)},expression:"settings.active"}})],1)]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center py-2"},[e("div",{staticClass:"setting-label",staticStyle:{"max-width":"50%"}},[e("p",{staticClass:"mb-0"},[t._v("Portfolio Source")]),t._v(" "),e("p",{staticClass:"small mb-0 text-muted"},[t._v("Choose how you want to populate your portfolio, select Most Recent posts to automatically update your portfolio with recent posts or Curated Posts to select specific posts for your portfolio.")])]),t._v(" "),e("div",{staticClass:"ml-3"},[e("b-form-select",{attrs:{options:t.profileSourceOptions,disabled:!t.user.statuses_count},model:{value:t.settings.profile_source,callback:function(e){t.$set(t.settings,"profile_source",e)},expression:"settings.profile_source"}})],1)])]):"Curate"===t.tabIndex?e("div",{key:"1",staticClass:"col-12 col-md-8 mt-3 py-2 px-0"},[t.recentPostsLoaded?[e("div",{staticClass:"mt-n2 mb-4"},[e("p",{staticClass:"text-muted small"},[t._v("Select up to 24 photos from your 100 most recent posts. You can only select public photo posts, videos are not supported at this time.")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("p",{staticClass:"font-weight-bold mb-0"},[t._v("Selected "+t._s(t.selectedRecentPosts.length)+"/24")]),t._v(" "),e("div",[e("button",{staticClass:"btn btn-link font-weight-bold mr-3 text-decoration-none",attrs:{disabled:!t.selectedRecentPosts.length},on:{click:t.clearSelected}},[t._v("\n                                    Clear selected\n                                ")]),t._v(" "),e("button",{staticClass:"btn btn-primary py-0 font-weight-bold",staticStyle:{width:"150px"},attrs:{disabled:!t.canSaveCurated},on:{click:function(e){return t.saveCurated()}}},[t.isSavingCurated?e("b-spinner",{attrs:{small:""}}):[t._v("Save")]],2)])])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("span",{on:{click:t.recentPostsPrev}},[e("i",{class:t.prevClass})]),t._v(" "),e("div",{staticClass:"row flex-grow-1 mx-2"},t._l(t.recentPosts.slice(t.rpStart,t.rpStart+9),(function(n,r){return e("div",{staticClass:"col-12 col-md-4 mb-1 p-1"},[e("div",{staticClass:"square user-select-none",on:{click:function(e){return e.preventDefault(),t.toggleRecentPost(n.id)}}},[e("transition",{attrs:{name:"fade"}},[e("img",{key:n.id,staticClass:"square-content pr-1",staticStyle:{overflow:"hidden","object-fit":"cover"},attrs:{src:n.media_attachments[0].url,width:"100%",height:"300",draggable:!1}})]),t._v(" "),-1!==t.selectedRecentPosts.indexOf(n.id)?e("div",{staticStyle:{position:"absolute",right:"-5px",bottom:"-5px"}},[e("div",{staticClass:"selected-badge"},[t._v(t._s(t.selectedRecentPosts.indexOf(n.id)+1))])]):t._e()],1)])})),0),t._v(" "),e("span",{on:{click:function(e){return t.recentPostsNext()}}},[e("i",{class:t.nextClass})])])]:e("div",{staticClass:"d-flex align-items-center justify-content-center py-5 my-5"},[e("div",{staticClass:"text-center"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v("Loading recent posts...")])])])],2):"Customize"===t.tabIndex?e("div",{key:"2",staticClass:"col-12 col-md-8 mt-3 py-2"},[t._l(t.customizeSettings,(function(n){return e("div",{staticClass:"card bg-dark mb-5"},[e("div",{staticClass:"card-header"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"list-group bg-dark"},t._l(n.items,(function(n){return e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"d-flex justify-content-between align-items-center py-2"},[e("div",{staticClass:"setting-label"},[e("p",{staticClass:"mb-0"},[t._v(t._s(n.label))]),t._v(" "),n.description?e("p",{staticClass:"small text-muted mb-0"},[t._v(t._s(n.description))]):t._e()]),t._v(" "),e("div",{staticClass:"setting-switch mt-n1"},[e("b-form-checkbox",{attrs:{name:"check-button",size:"lg",switch:"",disabled:n.requiredWithTrue&&!t.settings[n.requiredWithTrue]},model:{value:t.settings[n.model],callback:function(e){t.$set(t.settings,n.model,e)},expression:"settings[item.model]"}})],1)])])})),0)])})),t._v(" "),e("div",{staticClass:"card bg-dark mb-5"},[e("div",{staticClass:"card-header"},[t._v("Portfolio")]),t._v(" "),e("div",{staticClass:"list-group bg-dark"},[e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"d-flex justify-content-between align-items-center py-2"},[e("div",{staticClass:"setting-label"},[e("p",{staticClass:"mb-0"},[t._v("Layout")])]),t._v(" "),e("div",[e("b-form-select",{attrs:{options:t.profileLayoutOptions},model:{value:t.settings.profile_layout,callback:function(e){t.$set(t.settings,"profile_layout",e)},expression:"settings.profile_layout"}})],1)])])])])],2):"Share"===t.tabIndex?e("div",{key:"0",staticClass:"col-12 col-md-8 bg-dark mt-3 py-2 rounded"},[e("div",{staticClass:"py-2"},[e("p",{staticClass:"text-muted"},[t._v("Portfolio URL")]),t._v(" "),e("p",{staticClass:"lead mb-0"},[e("a",{attrs:{href:t.settings.url}},[t._v(t._s(t.settings.url))])])])]):t._e()])],1)])},i=[]},9209:(t,e,n)=>{n.r(e);var r=n(70538),i=n(25518);window.Vue=r.default,r.default.use(i.default),r.default.component("portfolio-post",n(15414).default),r.default.component("portfolio-profile",n(93324).default),r.default.component("portfolio-settings",n(8662).default)},15414:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var r=n(13168),i=n(45364),a={};for(const t in i)"default"!==t&&(a[t]=()=>i[t]);n.d(e,a);const o=(0,n(51900).default)(i.default,r.render,r.staticRenderFns,!1,null,null,null).exports},93324:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var r=n(56499),i=n(26880),a={};for(const t in i)"default"!==t&&(a[t]=()=>i[t]);n.d(e,a);const o=(0,n(51900).default)(i.default,r.render,r.staticRenderFns,!1,null,null,null).exports},8662:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var r=n(44635),i=n(63487),a={};for(const t in i)"default"!==t&&(a[t]=()=>i[t]);n.d(e,a);const o=(0,n(51900).default)(i.default,r.render,r.staticRenderFns,!1,null,null,null).exports},45364:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=n(45569),i={};for(const t in r)"default"!==t&&(i[t]=()=>r[t]);n.d(e,i);const a=r.default},26880:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=n(55685),i={};for(const t in r)"default"!==t&&(i[t]=()=>r[t]);n.d(e,i);const a=r.default},63487:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=n(66164),i={};for(const t in r)"default"!==t&&(i[t]=()=>r[t]);n.d(e,i);const a=r.default},13168:(t,e,n)=>{n.r(e);var r=n(30022),i={};for(const t in r)"default"!==t&&(i[t]=()=>r[t]);n.d(e,i)},56499:(t,e,n)=>{n.r(e);var r=n(9141),i={};for(const t in r)"default"!==t&&(i[t]=()=>r[t]);n.d(e,i)},44635:(t,e,n)=>{n.r(e);var r=n(72526),i={};for(const t in r)"default"!==t&&(i[t]=()=>r[t]);n.d(e,i)}},t=>{t.O(0,[898],(()=>{return e=9209,t(t.s=e);var e}));t.O()}]);
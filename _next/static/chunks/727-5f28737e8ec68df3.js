(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[727],{2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return m}});var o=r(7294),a=r(9008),n=r.n(a);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}var p=["keyOverride"],s=["crossOrigin"],d={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},u=function(e,t,r){void 0===t&&(t=[]);var a=void 0===r?{}:r,n=a.defaultWidth,i=a.defaultHeight;return t.reduce(function(t,r,a){return t.push(o.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:r.url})),r.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:r.width.toString()})):n&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.toString()})),r.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t},[])},c=function(e){var t,r,a,n,c,h=[];e.titleTemplate&&(d.templateTitle=e.titleTemplate);var m="";e.title?(m=e.title,d.templateTitle&&(m=d.templateTitle.replace(/%s/g,function(){return m}))):e.defaultTitle&&(m=e.defaultTitle),m&&h.push(o.createElement("title",{key:"title"},m));var f=void 0===e.noindex?d.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,g=void 0===e.nofollow?d.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,y="";if(e.robotsProps){var b=e.robotsProps,k=b.nosnippet,G=b.maxSnippet,v=b.maxImagePreview,_=b.maxVideoPreview,E=b.noarchive,w=b.noimageindex,O=b.notranslate,T=b.unavailableAfter;y=(k?",nosnippet":"")+(G?",max-snippet:"+G:"")+(v?",max-image-preview:"+v:"")+(E?",noarchive":"")+(T?",unavailable_after:"+T:"")+(w?",noimageindex":"")+(_?",max-video-preview:"+_:"")+(O?",notranslate":"")}if(f||g?(e.dangerouslySetAllPagesToNoIndex&&(d.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(d.nofollow=!0),h.push(o.createElement("meta",{key:"robots",name:"robots",content:(f?"noindex":"index")+","+(g?"nofollow":"follow")+y}))):h.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+y})),e.description&&h.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&h.push(o.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&h.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){h.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&h.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&h.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&h.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&h.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||m)&&h.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||m})),(null!=(r=e.openGraph)&&r.description||e.description)&&h.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(c=e.openGraph)?void 0:c.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&h.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var x=e.openGraph.type.toLowerCase();h.push(o.createElement("meta",{key:"og:type",property:"og:type",content:x})),"profile"===x&&e.openGraph.profile?(e.openGraph.profile.firstName&&h.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&h.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&h.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&h.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===x&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){h.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&h.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&h.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){h.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===x&&e.openGraph.article?(e.openGraph.article.publishedTime&&h.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&h.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&h.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){h.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&h.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){h.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===x||"video.episode"===x||"video.tv_show"===x||"video.other"===x)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&h.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&h.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){h.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){h.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&h.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&h.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){h.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&h.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(d.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(d.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&h.push.apply(h,u("image",e.openGraph.images,{defaultWidth:d.defaultOpenGraphImageWidth,defaultHeight:d.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(d.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(d.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&h.push.apply(h,u("video",e.openGraph.videos,{defaultWidth:d.defaultOpenGraphVideoWidth,defaultHeight:d.defaultOpenGraphVideoHeight})),e.openGraph.audio&&h.push.apply(h,u("audio",e.openGraph.audio)),e.openGraph.locale&&h.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&h.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&h.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,r,a=e.keyOverride,n=l(e,p);h.push(o.createElement("meta",i({key:"meta:"+(null!=(t=null!=(r=null!=a?a:n.name)?r:n.property)?t:n.httpEquiv)},n)))}),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach(function(e){var t,r=e.crossOrigin,a=l(e,s);h.push(o.createElement("link",i({key:"link"+(null!=(t=a.keyOverride)?t:a.href)+a.rel},a,{crossOrigin:"anonymous"===r||"use-credentials"===r||""===r?r:void 0})))}),h},h=function(e){return o.createElement(n(),null,c(e))},m=function(e){var t=e.title,r=e.themeColor,a=e.noindex,n=e.nofollow,i=e.robotsProps,l=e.description,p=e.canonical,s=e.openGraph,d=e.facebook,u=e.twitter,c=e.additionalMetaTags,m=e.titleTemplate,f=e.defaultTitle,g=e.mobileAlternate,y=e.languageAlternates,b=e.additionalLinkTags;return o.createElement(o.Fragment,null,o.createElement(h,{title:t,themeColor:r,noindex:a,nofollow:n,robotsProps:i,description:l,canonical:p,facebook:d,openGraph:s,additionalMetaTags:c,twitter:u,titleTemplate:m,defaultTitle:f,mobileAlternate:g,languageAlternates:y,additionalLinkTags:b}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return i},default:function(){return l}});let o=r(8754),a=(r(7294),o._(r(8976)));function n(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let r=a.default,o={loading:e=>{let{error:t,isLoading:r,pastDelay:o}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o={...o,...e}),o={...o,...t};let l=o.loader,p=()=>null!=l?l().then(n):Promise.resolve(n(()=>null));return(o.loadableGenerated&&(o={...o,...o.loadableGenerated},delete o.loadableGenerated),"boolean"!=typeof o.ssr||o.ssr)?r({...o,loader:p}):(delete o.webpack,delete o.modules,i(r,o))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let o=r(8754),a=o._(r(7294)),n=a.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let o=r(8754),a=o._(r(7294)),n=r(2254),i=[],l=[],p=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function i(){if(!o){let t=new d(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!p){let e=r.webpack?r.webpack():r.modules;e&&l.push(t=>{for(let r of e)if(-1!==t.indexOf(r))return i()})}function s(e,t){!function(){i();let e=a.default.useContext(n.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let l=a.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),a.default.useMemo(()=>{var t;return l.loading||l.error?a.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:o.retry}):l.loaded?a.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return s.preload=()=>i(),s.displayName="LoadableComponent",a.default.forwardRef(s)}(s,e)}function c(e,t){let r=[];for(;e.length;){let o=e.pop();r.push(o(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{c(i).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(p=!0,t());c(l,e).then(r,r)})),window.__NEXT_PRELOADREADY=u.preloadReady;let h=u},5152:function(e,t,r){e.exports=r(5677)},9008:function(e,t,r){e.exports=r(2636)}}]);
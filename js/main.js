document.addEventListener("DOMContentLoaded",function(){function t(){var t=GLOBAL_CONFIG.highlight.highlightCopy,e=GLOBAL_CONFIG.highlight.highlightLang,n=GLOBAL_CONFIG_SITE.isHighlightShrink,o=t||e||void 0!==n;const a="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(o&&a.length){var s="prismjs"===GLOBAL_CONFIG.highlight.plugin;let i="",c="";var l=!0===n?"closed":"";void 0!==n&&(i=`<i class="fas fa-angle-down expand ${l}"></i>`),t&&(c='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>');function r(t){const e=t.target.classList;e.contains("expand")?(t=>{const e=[...t.parentNode.children].slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[0])?e.forEach(t=>{t.style.display="block"}):e.forEach(t=>{t.style.display="none"})})(this):e.contains("copy-button")&&d(this)}var d=t=>{const e=t.parentNode;e.classList.add("copy-true");const n=window.getSelection(),o=document.createRange();s?o.selectNodeContents(e.querySelectorAll("pre code")[0]):o.selectNodeContents(e.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);n.toString();(t=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const e=t.previousElementSibling;e.innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout(()=>{e.style.opacity=0},700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport})(t.lastChild),n.removeAllRanges(),e.classList.remove("copy-true")},u=()=>{const t=document.createElement("div");return t.className=`highlight-tools ${l}`,t.addEventListener("click",r),t};e?s?a.forEach(function(t){var e=`<div class="code-lang">${void 0!==t.getAttribute("data-language")?t.getAttribute("data-language"):"Code"}</div>`;btf.wrap(t,"figure","","highlight");const n=u();n.innerHTML=i+e+c,t.parentNode.insertBefore(n,t)}):a.forEach(function(t){let e=t.getAttribute("class").split(" ")[1];"plain"!==e&&void 0!==e||(e="Code");var n=`<div class="code-lang">${e}</div>`;const o=u();o.innerHTML=i+n+c,t.insertBefore(o,t.firstChild)}):s?a.forEach(function(t){btf.wrap(t,"figure","","highlight");const e=u();e.innerHTML=i+c,t.parentNode.insertBefore(e,t)}):a.forEach(function(t){const e=u();e.innerHTML=i+c,t.insertBefore(e,t.firstChild)})}}var n=document.getElementById("site-name").offsetWidth,o=document.getElementById("menus").offsetWidth,e=()=>{const t=document.getElementById("nav");let e;e=window.innerWidth<768||n+o>t.offsetWidth-100,e?t.classList.add("hide-menu"):t.classList.remove("hide-menu")};let i=!1;function c(){let i=0,c=!0;const a=document.getElementById("rightside"),s=document.getElementById("nav");var l="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow;window.addEventListener("scroll",btf.throttle(function(t){var e,n,o=window.scrollY||document.documentElement.scrollTop,n=(n=(e=o)>i,i=e,n);56<o?(n?(s.classList.contains("visible")&&s.classList.remove("visible"),r&&!0===c&&(chatBtnHide(),c=!1)):(s.classList.contains("visible")||s.classList.add("visible"),l&&!1===c&&(chatBtnShow(),c=!0)),s.classList.add("fixed"),"0"===window.getComputedStyle(a).getPropertyValue("opacity")&&(a.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===o&&s.classList.remove("fixed","visible"),a.style.cssText="opacity: ''; transform: ''")},200))}function a(){const t=document.getElementById("card-toc"),a=t.getElementsByClassName("toc-content")[0];var s=a.querySelectorAll(".toc-link");const o=document.getElementById("article-container");window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop;n(e),c(e)},100));const n=function(t){var e=o.clientHeight,n=document.documentElement.clientHeight,n=(t-o.offsetTop)/(n<e?e-n:document.documentElement.scrollHeight-n),n=Math.round(100*n),n=100<n?100:n<=0?0:n;a.setAttribute("progress-percentage",n)};var l=GLOBAL_CONFIG.isanchor,e=()=>{t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},i=()=>{t.style.animation="toc-close .2s",setTimeout(()=>{t.style.cssText="opacity:''; animation: ''; right: ''"},100)};document.getElementById("mobile-toc-button").addEventListener("click",()=>{"0"===window.getComputedStyle(t).getPropertyValue("opacity")?e():i()}),a.addEventListener("click",t=>{t.preventDefault();const e=t.target.classList.contains("toc-link")?t.target:t.target.parentElement;btf.scrollToDest(document.querySelector(decodeURI(e.getAttribute("href"))).offsetTop,300),window.innerWidth<900&&i()});const r=o.querySelectorAll("h1,h2,h3,h4,h5,h6");let d="";const c=function(n){if(0===s.length)return!1;let o="",i="";if(r.forEach(function(t,e){n>t.offsetTop-70&&(o="#"+encodeURI(t.getAttribute("id")),i=e)}),d!==i){if(""===o)return a.querySelectorAll(".active").forEach(t=>{t.classList.remove("active")}),void(d=i);d=i,a.querySelectorAll(".active").forEach(t=>{t.classList.remove("active")});const c=s[i];var e;c.classList.add("active"),l&&(e=o,window.history.replaceState&&e!==window.location.hash&&window.history.replaceState(void 0,void 0,e)),setTimeout(function(){var t,e;t=c,e=t.getBoundingClientRect().top,t=a.scrollTop,e>document.documentElement.clientHeight-100&&(a.scrollTop=t+150),e<100&&(a.scrollTop=t-150)},0);let t=c.parentNode;for(;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}}var s={switchReadMode:()=>{document.body.classList.toggle("read-mode")},switchDarkMode:()=>{"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(()=>window.disqusReset(),200)},showOrHideBtn:()=>{document.getElementById("rightside-config-hide").classList.toggle("show")},scrollToTop:()=>{btf.scrollToDest(0,500)},hideAsideBtn:()=>{const t=document.documentElement.classList;t.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),t.toggle("hide-aside")}};document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":s.scrollToTop();break;case"rightside_config":s.showOrHideBtn();break;case"readmode":s.switchReadMode();break;case"darkmode":s.switchDarkMode();break;case"hide-aside-btn":s.hideAsideBtn()}});function l(t){t.forEach(t=>{const e=t;t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}var r,d={clickFnOfTabs:function(){document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){const e=this.parentNode;if(!e.classList.contains("active")){const i=e.parentNode.nextElementSibling;btf.siblings(e,"active")[0].classList.remove("active"),e.classList.add("active");var n=this.getAttribute("data-href").replace("#","");const c=[...i.children];c.forEach(t=>{t.id===n?t.classList.add("active"):t.classList.remove("active")});var o=i.querySelectorAll(`#${n} .justified-gallery`);0<o.length&&btf.initJustifiedGallery(o)}})})},backToTop:()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getParents(this,".tabs").offsetTop,300)})})}};window.refreshFn=function(){e(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&a(),void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){var t=GLOBAL_CONFIG.noticeOutdate,e=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(e>=t.limitDay){const n=document.createElement("div");n.className="post-outdate-notice",n.textContent=t.messagePrev+" "+e+" "+t.messageNext;const o=document.getElementById("article-container");"top"===t.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&l(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&l(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const t=document.getElementById("runtimeshow");var e;null!==t&&(e=t.getAttribute("data-publishDate"),t.innerText=btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime)})(),(()=>{const t=document.getElementById("last-push-date");var e;null!==t&&(e=t.getAttribute("data-lastPushDate"),t.innerText=btf.diffDate(e,!0))})(),function(){const t=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");0<t.length&&t.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();this.classList.toggle("expand");const e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"})})}()),(()=>{const e=document.getElementById("toggle-menu"),n=document.getElementById("sidebar-menus"),t=document.getElementById("menu-mask"),o=document.body;function i(){o.style.cssText="overflow: ''; padding-right: ''",btf.fadeOut(t,.5),n.classList.remove("open")}e.addEventListener("click",function(){btf.sidebarPaddingR(),o.style.overflow="hidden",btf.fadeIn(t,.5),n.classList.add("open")}),t.addEventListener("click",t=>{n.classList.contains("open")&&i()}),window.addEventListener("resize",t=>{btf.isHidden(e)&&n.classList.contains("open")&&i()})})(),GLOBAL_CONFIG_SITE.isHome&&document.getElementById("scroll-down").addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),GLOBAL_CONFIG.highlight&&t(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){const e=t.parentNode;if(!e.parentNode.classList.contains("justified-gallery")){const n=document.createElement("div");n.className="img-alt is-center",n.textContent=t.getAttribute("alt"),e.insertBefore(n,t.nextSibling)}}),function(){let t=document.querySelectorAll("#article-container .justified-gallery");if(t.length){t=$(t);const e=t.find("img");e.unwrap(),e.length&&e.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),i?btf.initJustifiedGallery(t):($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.justifiedGallery.css}">`),$.getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`,function(){btf.initJustifiedGallery(t)}),i=!0)}}(),"null"!==GLOBAL_CONFIG.lightbox&&function(){if("fancybox"===GLOBAL_CONFIG.lightbox){var e=document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img");e.length&&btf.isJqueryLoad(()=>{var t=t=>{t.each(function(t,e){const n=$(e);var o=n.attr("data-lazy-src")||n.attr("src"),e=n.attr("alt")||"";n.wrap(`<a href="${o}" data-fancybox="group" data-caption="${e}" class="fancybox"></a>`)}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})};void 0===$.fancybox?($("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.source.fancybox.css}">`),$.getScript(`${GLOBAL_CONFIG.source.fancybox.js}`,function(){t($(e))})):t($(e))})}else{const n=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));n.on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";n.update({background:e})})}}(),c(),function(){const t=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");t.length&&t.forEach(t=>{btf.wrap(t,"div","","table-wrap")})}(),function(){const t=document.querySelectorAll("#article-container .hide-button");t.length&&t.forEach(function(t){t.addEventListener("click",function(t){const e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})})}(),d.clickFnOfTabs(),d.backToTop(),function(){let t=!1;const e=document.querySelector("#comment-switch > .switch-btn");e&&e.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())})}()},refreshFn(),window.addEventListener("resize",e),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");const t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){const e=document.querySelectorAll("#nav .menus_item_child");e.forEach(t=>{btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(r=GLOBAL_CONFIG.copyright,document.body.oncopy=t=>{t.preventDefault();let e;var n=window.getSelection(0).toString();return e=n.length>r.limitCount?n+"\n\n\n"+r.languages.author+"\n"+r.languages.link+window.location.href+"\n"+r.languages.source+"\n"+r.languages.info:n,(t.clipboardData?t:window).clipboardData.setData("text",e)})});
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a){var b=new Image;b.src=a.getAttribute("data-src"),b.onload=function(){a.src=this.src,a.className+=" loaded"}}function e(a,b){var c=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return c.open("GET",a),c.onreadystatechange=function(){c.readyState>3&&200==c.status&&b(c.responseText)},c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.send(),c}b.exports={lazyLoadImages:d,get:e}},{}],2:[function(a,b,c){function d(a,b){for(var c=b.charAt(0);a&&a!==document;a=a.parentNode){if("."===c&&a.classList.contains(b.substr(1)))return a;if("#"===c&&a.id===b.substr(1))return a;if("["===c&&a.hasAttribute(b.substr(1,b.length-2)))return a;if(a.tagName.toLowerCase()===b)return a}return!1}b.exports={getClosest:d}},{}],3:[function(a,b,c){function d(){var a=320,b=q.length*a,c=r.length*a;w[0].setAttribute("style","width:"+b+"px"),x[0].setAttribute("style","width:"+c+"px"),m={pageLoaded:1,size:a,itemsPerPage:Math.ceil(l/a)},m.pages=Math.ceil(q.length/m.itemsPerPage),n={pageLoaded:1,size:a,itemsPerPage:Math.ceil(l/a)},n.pages=Math.ceil(r.length/n.itemsPerPage),i(q.slice(0,m.itemsPerPage)),i(r.slice(0,n.itemsPerPage))}function e(a){var b=this.scrollLeft,c=m.pageLoaded<m.pages,d=b>m.size*(m.itemsPerPage/2)*m.pageLoaded;c&&d&&(i(q.slice(m.itemsPerPage*m.pageLoaded,m.itemsPerPage*(m.pageLoaded+1))),m.pageLoaded++)}function f(a){var b=this.scrollLeft,c=n.pageLoaded<n.pages,d=b>n.size*(n.itemsPerPage/2)*n.pageLoaded;c&&d&&(i(r.slice(n.itemsPerPage*n.pageLoaded,n.itemsPerPage*(n.pageLoaded+1))),n.pageLoaded++)}function g(){var a=j.getClosest(this,"li");a.getElementsByClassName("review")[0].className+=" active"}function h(){var a=j.getClosest(this,"li");a.getElementsByClassName("review")[0].className=a.getElementsByClassName("review")[0].className.replace("active","")}function i(a){a.forEach(function(a){k.lazyLoadImages(a)})}var j=a("./_traversing.js"),k=a("./_ajax.js"),l=window.innerWidth,m={},n={},o=document.getElementById("books"),p=document.getElementById("films"),q=o.getElementsByClassName("img-cover"),r=p.getElementsByClassName("img-cover"),s=document.getElementsByClassName("open-review"),t=document.getElementsByClassName("close-review"),u=o.getElementsByClassName("h-scrollable"),v=p.getElementsByClassName("h-scrollable"),w=u[0].getElementsByTagName("ul"),x=v[0].getElementsByTagName("ul");q=Array.prototype.slice.call(q,0),r=Array.prototype.slice.call(r,0),s=Array.prototype.slice.call(s,0),t=Array.prototype.slice.call(t,0),s.forEach(function(a){a.addEventListener("click",g,!1)}),t.forEach(function(a){a.addEventListener("click",h,!1)}),u[0].addEventListener("scroll",e),v[0].addEventListener("scroll",f),b.exports={init:d}},{"./_ajax.js":1,"./_traversing.js":2}],4:[function(a,b,c){"use strict";function d(){i&&i.addEventListener("click",e,!1),j.length&&(g=j[0].getElementsByTagName("a"),g=Array.prototype.slice.call(g,0),g.forEach(function(a){a.addEventListener("click",e,!1)}))}function e(){h.className=f(h,"active-menu")===!0?"":"active-menu"}function f(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1}var g,h=document.body,i=document.getElementById("toggle-nav"),j=document.getElementsByClassName("menu");b.exports={init:d}},{}],5:[function(a,b,c){"use strict";var d=a("./h-scrolling.js"),e=a("./nav.js");document.onreadystatechange=function(){"complete"===document.readyState&&(d.init(),e.init())}},{"./h-scrolling.js":3,"./nav.js":4}]},{},[5]);
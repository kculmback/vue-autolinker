(function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),e._m(1),n("div",{staticClass:"examples"},[n("p",{directives:[{name:"autolinker",rawName:"v-autolinker",value:e.exampleOne,expression:"exampleOne"}]}),n("p",{directives:[{name:"autolinker",rawName:"v-autolinker:[options]",value:e.exampleTwo,expression:"exampleTwo",arg:e.options}]})])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For more information about configuration, check out "),n("a",{attrs:{href:"https://github.com/gregjacobs/Autolinker.js"}},[e._v("Autolinker.js")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" See vue-autolinker documentation "),n("a",{attrs:{href:"https://github.com/kculmback/vue-autolinker"}},[e._v("here")]),e._v(". ")])}],i={name:"app",data:function(){return{exampleOne:"Text with a link (https://github.com/gregjacobs/Autolinker.js).",exampleTwo:"Text with a link (vuejs.com), a mention (@vuejs), and a hashtag (#vue).",options:{mention:"twitter",hashtag:"twitter"}}}},u=i,l=(n("034f"),n("2877")),c=Object(l["a"])(u,o,a,!1,null,null,null),p=c.exports,s=n("62d3"),f="autolinker",v={bind:function(e,t){var n=t.arg||{};e.innerHTML=s["a"].link(t.value,n)}};r["a"].config.productionTip=!1,r["a"].directive(f,v),new r["a"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.9832c500.js.map
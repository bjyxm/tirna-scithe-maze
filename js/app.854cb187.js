(function(e){function n(n){for(var r,c,s=n[0],u=n[1],a=n[2],p=0,l=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&l.push(i[c][0]),i[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(l.length)l.shift()();return o.push.apply(o,a||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var u=t[s];0!==i[u]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},i={app:0},o=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/tirna-scithe-maze/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var a=0;a<s.length;a++)n(s[a]);var f=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"0704":function(e,n,t){e.exports=t.p+"img/101.5a1199e7.png"},"0725":function(e,n,t){e.exports=t.p+"img/100.147ff754.png"},"2a06":function(e,n,t){e.exports=t.p+"img/110.f37a309d.png"},"4c62":function(e,n,t){e.exports=t.p+"img/010.0656893d.png"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("button",{staticClass:"reset",on:{click:e.reset}},[e._v("Reset")]),t("div",{staticClass:"grid"},e._l(e.order,(function(n){return t("div",{key:n,staticClass:"item",on:{click:function(t){return e.toggle(n)}}},[t("img",{staticClass:"symbol",class:{selected:e.isSelected(n),answer:e.isAnswer(n)},attrs:{src:e.img(n)}})])})),0)])},o=[],c=(t("7db0"),t("c975"),t("13d5"),t("a434"),t("a9e3"),t("b06a")),s=t.n(c),u=t("b92e"),a=t.n(u),f=t("4c62"),p=t.n(f),l=t("f5a2"),d=t.n(l),h=t("0725"),b=t.n(h),g=t("0704"),m=t.n(g),v=t("2a06"),w=t.n(v),x=t("a813"),y=t.n(x),O={name:"App",data:function(){return{order:["000","001","010","011","100","101","110","111"],selection:[]}},computed:{combined:function(){if(4===this.selection.length){var e=function(e,n){return Number(e)+Number(n)};return String(this.selection.reduce(e))}return""},hasAnswer:function(){if(3!==this.combined.length)return!1;var e=0;return e+="1"===this.combined[0]||"3"===this.combined[0]?4:0,e+="1"===this.combined[1]||"3"===this.combined[1]?2:0,e+="1"===this.combined[2]||"3"===this.combined[2]?1:0,4===e||2===e||1===e},answer:function(){if(!this.hasAnswer)return"";var e,n,t=this.combined.indexOf("1"),r=this.combined.indexOf("3");return t>r?(e=t,n="1"):(e=r,n="0"),this.selection.find((function(t){return t[e]===n}))}},methods:{img:function(e){switch(e){case"000":return s.a;case"001":return a.a;case"010":return p.a;case"011":return d.a;case"100":return b.a;case"101":return m.a;case"110":return w.a;case"111":return y.a}},toggle:function(e){var n=this.selection.indexOf(e);n>-1?this.selection.splice(n,1):this.selection.push(e)},isSelected:function(e){return this.selection.indexOf(e)>-1},isAnswer:function(e){return this.answer===e},reset:function(){this.selection=[]}}},j=O,_=(t("034f"),t("2877")),S=Object(_["a"])(j,i,o,!1,null,null,null),P=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,n,t){},a813:function(e,n,t){e.exports=t.p+"img/111.dfd139c0.png"},b06a:function(e,n,t){e.exports=t.p+"img/000.abc336c4.png"},b92e:function(e,n,t){e.exports=t.p+"img/001.1a748c34.png"},f5a2:function(e,n,t){e.exports=t.p+"img/011.2d6045fb.png"}});
//# sourceMappingURL=app.854cb187.js.map
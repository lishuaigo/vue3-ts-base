(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about-me"],{"09c5":function(e,t,o){"use strict";var n=o("7a23");function a(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,Object(n["toDisplayString"])(e.author),1)}o("ac1f"),o("1276");var c=Object(n["defineComponent"])({name:"TestDemo",data:function(){return{pageName:"About",author:"author"}},methods:{caculatePageName:function(){this.pageName.split(",")}}}),r=c;r.render=a;t["a"]=r},"59e7":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),a={ref:"root",class:"about"},c=Object(n["createVNode"])("p",null,"about-me",-1);function r(e,t){var o=Object(n["resolveComponent"])("test-demo"),r=Object(n["resolveComponent"])("self-button");return Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[c,Object(n["createVNode"])(o),Object(n["createVNode"])(r)],512)}o("a15b"),o("ac1f"),o("1276");var u=o("09c5"),i=Object(n["createVNode"])("button",null,"self-button",-1);function b(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[i])}var l=Object(n["defineComponent"])({name:"SlefButton",data:function(){return{pageName:"About",author:"author"}},methods:{caculatePageName:function(){this.pageName.split(",")}}}),s=l;s.render=b;var f=s,p=Object(n["defineComponent"])({setup:function(){Object(n["onMounted"])((function(){}));var e=Object(n["ref"])(null);return{root:e}},components:{TestDemo:u["a"],SelfButton:f},data:function(){return{book:{pageName:"Chapter 1",author:"swift"}}},methods:{caculatePageName:function(){return this.book.pageName.split("-").reverse().join()}}}),d=p;d.render=r;t["default"]=d},a15b:function(e,t,o){"use strict";var n=o("23e7"),a=o("44ad"),c=o("fc6a"),r=o("a640"),u=[].join,i=a!=Object,b=r("join",",");n({target:"Array",proto:!0,forced:i||!b},{join:function(e){return u.call(c(this),void 0===e?",":e)}})}}]);
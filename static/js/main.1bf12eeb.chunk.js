(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),c=n.n(i),o=(n(10),n(4)),l=n(3);n(11);var s=function(e){var t=e.id,n=e.name,a=e.price,i=e.qty,c=e.updateQty;return r.a.createElement("div",{className:"CartItem"},r.a.createElement("div",null,n),r.a.createElement("div",null,"$",a),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return c(t,i-1)},disabled:i<=1},"-"),i,r.a.createElement("button",{onClick:function(){return c(t,i+1)}},"+")),r.a.createElement("div",null,"Total: $",i*a))};n(12);var m=function(e){var t=e.initialItems,n=JSON.parse(window.localStorage.getItem("items")),i=Object(a.useState)(n||t),c=Object(l.a)(i,2),m=c[0],u=c[1];Object(a.useEffect)((function(){window.localStorage.setItem("items",JSON.stringify(m))}),[m]);var d=function(e,t){var n=m.map((function(n){return n.id===e?Object(o.a)({},n,{qty:t}):n}));u(n)},p=m.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2);return r.a.createElement("div",{className:"Cart"},r.a.createElement("h1",{className:"Cart-title"},"Shopping Cart"),r.a.createElement("div",{className:"Cart-items"},m.map((function(e){return r.a.createElement(s,Object.assign({key:e.id,updateQty:d},e))}))),r.a.createElement("h2",{className:"Cart-total"},"Grand Total: $",p))},u=(n(13),[{id:1,name:"Taco Seasoning",price:2.25,qty:2},{id:2,name:"Pinto Beans",price:1.99,qty:3},{id:3,name:"Sour Cream",price:3.5,qty:1}]);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{initialItems:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.1bf12eeb.chunk.js.map
(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),l=n.n(c),r=(n(12),n(4)),i=n(1);n(13),n(14);var u=function(){var e=["Kaitlyn","Cathy","Joanne","coffee","boba tea","chocolate","pizza","dumpling","noodle"],t=["enjoys","tastes","plays","smells","wants","owns"];Math.floor(2*Math.random()+1);var n=e[Math.floor(Math.random()*e.length)],c=t[Math.floor(Math.random()*t.length)],l=e[Math.floor(Math.random()*e.length)],u=Object(a.useState)(n),s=Object(i.a)(u,2),m=s[0],h=s[1],f=Object(a.useState)(c),b=Object(i.a)(f,2),d=b[0],g=b[1],p=Object(a.useState)(l),v=Object(i.a)(p,2),j=v[0],E=v[1],O=Object(a.useState)(["".concat(m," ").concat(d," ").concat(j)]),M=Object(i.a)(O,2),y=M[0],k=M[1],w=Object(a.useState)(e),C=Object(i.a)(w,2),S=C[0],x=C[1],A=Object(a.useState)(t),J=Object(i.a)(A,2),z=J[0],B=J[1],I=Object(a.useState)(""),W=Object(i.a)(I,2),H=W[0],K=W[1],L=Object(a.useState)(""),N=Object(i.a)(L,2),R=N[0],V=N[1],$=Object(a.useState)(!1),q=Object(i.a)($,2),D=q[0],F=q[1];return console.log(H),console.log(z),console.log(D),o.a.createElement("div",{className:"App",style:{margin:"50px",backgroundColor:"#cfe8fc"}},o.a.createElement("div",null,"Hello there, ","welcome to my website","!"),o.a.createElement("p",null,"List of Items: ",S.join(", ")," "),o.a.createElement("p",null,"Verbs to choose from: ",z.join(", ")," "),o.a.createElement("div",{style:{margin:"5px"}},o.a.createElement("input",{type:"text",value:H,onChange:function(e){K(e.target.value)}}),o.a.createElement("button",{onClick:function(){x([].concat(Object(r.a)(S),[H])),K("")}},"Add an item")),o.a.createElement("div",{style:{margin:"5px"}},o.a.createElement("input",{type:"text",value:R,onChange:function(e){V(e.target.value)}}),o.a.createElement("button",{onClick:function(){B([].concat(Object(r.a)(z),[R])),V("")}},"Add a verb")),o.a.createElement("div",null,o.a.createElement("input",{type:"checkbox",value:D,onChange:function(e){F(!D)}}),o.a.createElement("span",null,"Remove verbs and objects that are used")),o.a.createElement("p",null,"Click to see the solitaire"),o.a.createElement("ol",null,y.map((function(e,t){return o.a.createElement("p",{key:t}," ",e," ")}))),o.a.createElement("div",null,0===S.length||0===z.length?o.a.createElement("p",null,"Out of items or verbs..."):null),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){var e=S.filter((function(e){return e!=j})),t=z.filter((function(e){return e!=d}));if((0===e.length||0===t.length)&&D)return x(e),void B(t);if(0!==S.length&&0!==z.length){var n=D?t[Math.floor(Math.random()*t.length)]:z[Math.floor(Math.random()*z.length)],a=D?e[Math.floor(Math.random()*e.length)]:S[Math.floor(Math.random()*S.length)],o="".concat(j," ").concat(n," ").concat(a);k([].concat(Object(r.a)(y),[o])),D&&(x(e),B(t)),h(j),g(n),E(a)}}},"Click me")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9e2d0e02.chunk.js.map
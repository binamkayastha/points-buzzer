(this.webpackJsonpjeopardy=this.webpackJsonpjeopardy||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},14:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=14},15:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),r=t(6),a=t.n(r),s=(t(11),t(2)),l=(t(12),t(0));var i=function(e){var n,t=e.name,o=e.color,c=e.onClick,r=e.children,a="";o&&"red"===o?(n="bg-red-400",a="active:bg-red-600"):o&&"green"===o?(n="bg-green-400",a="active:bg-green-600"):o&&"black"===o&&(n="bg-black",a="active:bg-gray-600");var s=o?"".concat(n," ").concat(a):"bg-blue-400 active:bg-blue-600";return Object(l.jsx)("button",{className:"\n        text-white font-bold uppercase text-sm px-6 py-3\n        rounded outline-none focus:outline-none mr-1 mb-1 ease-linear\n        transition-all duration-150 shadow hover:shadow-2xl\n        ".concat(s,"\n      "),type:"button",onClick:function(e){c&&c(e)},children:Object(l.jsxs)("div",{className:"flex flex-row justify-center",children:[r,t]})})};var u=function(e){var n=e.name,t=e.onChange;return Object(l.jsxs)("div",{className:"flex flex-row items-center",children:[Object(l.jsx)("span",{className:"w-1/3 text-lg font-bold",children:n}),Object(l.jsx)("input",{type:"text",onChange:t,placeholder:n,className:"max-w-lg px-3 py-4 placeholder-blueGray-700 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"})]})};var d=function(e){var n=e.handleUserDataChange,t=Object(o.useState)(""),c=Object(s.a)(t,2),r=c[0],a=c[1],d=Object(o.useState)(""),b=Object(s.a)(d,2),j=b[0],f=b[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"h-screen flex flex-col space-y-4 justify-center items-center",children:[Object(l.jsxs)("div",{className:"bg-purple-300 md:w-1/3 max-w-lg px-4 py-8 rounded shadow-lg",children:[Object(l.jsx)(u,{name:"Your Name",onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)(u,{name:"Room Id",onChange:function(e){f(e.target.value.toLowerCase())}})]}),Object(l.jsxs)("div",{className:"flex flex-row space-x-8",children:[Object(l.jsx)(i,{name:"Create New Game",onClick:function(){return console.log("CREATE new"),void n({username:r,roomId:j,loginAction:"CreateGame"})}}),Object(l.jsx)(i,{name:"Join Game",onClick:function(){n({username:r,roomId:j,loginAction:"JoinGame"})}})]})]})})};var b=function(e){var n=e.userData,t=e.handleUserDataChange,o=Object(l.jsx)(i,{name:"Logout",color:"black",onClick:function(){t({username:"",roomId:n.roomId,loginAction:"NotLoggedIn"})}});return Object(l.jsxs)("div",{className:"h-16 bg-purple-400 flex justify-center items-center",children:[Object(l.jsx)("span",{className:"text-3xl font-sans font-extrabold flex-grow",children:"Jeoparty"}),"NotLoggedIn"!==n.loginAction?o:""]})};function j(e,n){var t=Object(o.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(o){return console.log(o),n}})),c=Object(s.a)(t,2),r=c[0],a=c[1];return[r,function(n){try{var t=n instanceof Function?n(r):n;a(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(o){console.log(o)}}]}var f=t(4),m=t.n(f);function x(e){var n=e.userData,t=Object(o.useRef)(new m.a),c=Object(o.useRef)(),r=Object(o.useRef)(t.current.connect(n.roomId));Object(o.useEffect)((function(){var e=t.current;return e.on("open",(function(t){console.log("Peer connection opened"),console.log("Generated peerid"),console.log(t),c.current=t;var o=n.roomId;console.log("Sending test to ",o),r.current=e.connect(o),r.current.on("open",(function(){r.current.send({name:n.username,peerid:c.current,action:"CONNECTION"})}))})),e.on("connection",(function(n){console.log("Connection made"),console.log(n),n.on("open",(function(){n.on("data",(function(n){console.log("Received"),console.log(n),console.log(e)}))}))})),function(){console.log("Component Unmounted")}}),[]);var a=["awesome","admirable","amazing","beautiful","brilliant","cool","delightful","excellent","exceptional","extraordinary","fabulous","fantastic","first-class","glorious","good","grand","great","impressive","incredible","magnificent","marvellous","out of this world","outstanding","remarkable","spectacular","splendid","stellar","superb","swell","terrific","tip-top","top-notch","tremendous","wonderful"];var i=Object(o.useState)("awesome"),u=Object(s.a)(i,2),d=u[0],b=u[1];return Object(l.jsxs)("div",{className:"flex flex-col items-center",children:[Object(l.jsxs)("span",{className:"text-xl my-14   font-bold font-sans",children:["Hey ",n.username,", you're ",d,"!"]}),Object(l.jsxs)("button",{className:"rounded-full max-w-4xl w-72 h-72 text-white text-4xl font-bold bg-blue-400 active:bg-blue-600 ease-linear transition-all duration-150 shadow hover:shadow-2xl focus:outline-none ",onClick:function(){b(a[Math.floor(Math.random()*a.length)]),r.current.send({name:n.username,peerid:c.current,action:"BUZZ"})},children:["Buzz Buzz ",Object(l.jsx)("br",{}),"Bee"]})]})}var g=t(3);function O(e){var n=e.playerData,t=e.selected,c=e.onClick,r=Object(o.useState)("bg-gray-300"),a=Object(s.a)(r,2),i=a[0],u=a[1];return Object(o.useEffect)((function(){u(function(e){if("Locked"===n.buzzStatus||"NotBuzzed"===n.buzzStatus)return"bg-gray-300";if("Buzzed"===n.buzzStatus)return"bg-blue-300";if("Wrong"===n.buzzStatus)return"bg-red-300";throw Error("Buzz Status for player is not supported: ".concat(e))}(n.buzzStatus))}),[n]),Object(l.jsx)("div",{className:"px-4 py-2 m-1 rounded min-w-full\n        ".concat(i,"\n        ").concat(t?"border-2 border-black":"","\n      "),onClick:c,children:Object(l.jsxs)("b",{children:[n.name,":"," ",Object(l.jsx)("span",{className:n.points>=0?"text-green-800":"text-red-500",children:n.points})]})})}function p(e){var n=e.userData,t=Object(o.useRef)({}),c=Object(o.useState)({}),r=Object(s.a)(c,2),a=r[0],u=r[1],d=j("localPlayers",{}),b=Object(s.a)(d,2),f=b[0],x=b[1],p=Object(o.useState)(),z=Object(s.a)(p,2),v=z[0],h=z[1],w=Object(o.useRef)(!1),N=Object(o.useRef)("Unlocked"),C=Object(o.useState)("Lock Buzzers"),k=Object(s.a)(C,2),B=k[0],S=k[1];function y(e){if(console.log("UPDATE POINTS"),v){var n=t.current[v],o=n.points||0;t.current[v]=Object(g.a)(Object(g.a)({},n),{},{points:o+e}),u(Object(g.a)({},t.current)),x(Object(g.a)({},t.current))}}return Object(o.useEffect)((function(){f&&(t.current=Object(g.a)({},f),u(Object(g.a)({},t.current)));var e=new m.a(n.roomId);e.on("open",(function(e){console.log("Peer connection opened")})),e.on("connection",(function(e){console.log("Connection made"),console.log(e),e.on("open",(function(){e.on("data",(function(e){var n;if(console.log("GETTING CONNECTION FROM",e.peerid),"BUZZ"===e.action&&"Unlocked"===N.current)t.current[e.name]={name:e.name,peerId:e.peerId,buzzStatus:"Buzzed",points:(null===(n=t.current[e.name])||void 0===n?void 0:n.points)?t.current[e.name].points:0,timeLastBuzzed:t.current[e.name].timeLastBuzzed?t.current[e.name].timeLastBuzzed:Date.now()},console.log("FIRST BUZZ STATUS"),w.current||(h(e.name),w.current=!0),u(Object(g.a)({},t.current)),x(Object(g.a)({},t.current));else if("CONNECTION"===e.action){var o;t.current[e.name]={name:e.name,peerId:e.peerId,buzzStatus:"NotBuzzed",points:(null===(o=t.current[e.name])||void 0===o?void 0:o.points)?t.current[e.name].points:0,timeLastBuzzed:void 0},u(Object(g.a)({},t.current)),x(Object(g.a)({},t.current))}else console.log("Incoming request has no recognized action field",e)}))}))}))}),[]),Object(o.useEffect)((function(){return console.log("Component mounted"),function(){console.log("Component unmounted")}}),[]),Object(o.useEffect)((function(){"Lock Buzzers"===B||("Unlock Buzzers"===B?function(){for(var e in console.log("Reset buzzers"),t.current)t.current[e]=Object(g.a)(Object(g.a)({},t.current[e]),{},{buzzStatus:"Locked",timeLastBuzzed:void 0});w.current=!1,h(""),S("Unlock Buzzers"),u(Object(g.a)({},t.current)),x(Object(g.a)({},t.current))}():console.log("Unrecognized lockStateMessage: ",B))}),[B]),Object(l.jsxs)("div",{className:"flex flex-col items-center min-w-full",children:[Object(l.jsxs)("span",{className:"text-xl my-4 font-bold font-sans",children:["ROOM ID: ",n.roomId,Object(l.jsx)("br",{})]}),Object(l.jsxs)("div",{className:"flex flex-row px-4 min-w-full",children:[Object(l.jsx)("div",{className:"md:flex-grow"}),Object(l.jsxs)("div",{className:"flex-grow flex flex-col max-w-lg px-4",children:[Object(l.jsx)("span",{className:"font-bold underline",children:"Contestants"}),Object.values(a).sort((function(e,n){return"Buzzed"===e.buzzStatus&&"Buzzed"===n.buzzStatus&&void 0!==e.timeLastBuzzed&&void 0!==n.timeLastBuzzed?e.timeLastBuzzed-n.timeLastBuzzed:"Buzzed"===n.buzzStatus?1:"Buzzed"===e.buzzStatus||Number(n.points||0)<Number(e.points||0)?-1:Number(n.points||0)>Number(e.points||0)||n.name.toLowerCase()<e.name.toLowerCase()?1:-1})).map((function(e){return Object(l.jsx)(O,{playerData:e,onClick:function(){h(e.name)},selected:v===e.name})}))]}),Object(l.jsx)("div",{className:"flex-grow px-4",children:Object(l.jsxs)("div",{className:"flex flex-col items-center w-full",children:[Object(l.jsx)("span",{className:"font-bold underline",children:"Control Panel"}),"Lock Buzzers"===B?Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"})}):Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})}),Object(l.jsx)(i,{name:B,onClick:function(){N.current="Lock Buzzers"===B?"Locked":"Unlocked",S("Lock Buzzers"===B?"Unlock Buzzers":"Lock Buzzers")}}),Object(l.jsxs)("div",{className:"flex flex-row w-full",children:[Object(l.jsxs)("div",{className:"flex-grow flex flex-col",children:[Object(l.jsx)("span",{className:"font-bold",children:"Wrong"}),Object(l.jsx)(i,{name:"-200",color:"red",onClick:function(){return y(-200)}}),Object(l.jsx)(i,{name:"-400",color:"red",onClick:function(){return y(-400)}}),Object(l.jsx)(i,{name:"-600",color:"red",onClick:function(){return y(-600)}}),Object(l.jsx)(i,{name:"-800",color:"red",onClick:function(){return y(-800)}}),Object(l.jsx)(i,{name:"-1000",color:"red",onClick:function(){return y(-1e3)}})]}),Object(l.jsxs)("div",{className:"flex-grow flex flex-col",children:[Object(l.jsx)("span",{className:"font-bold",children:"Right"}),Object(l.jsx)(i,{name:"200",color:"green",onClick:function(){return y(200)}}),Object(l.jsx)(i,{name:"400",color:"green",onClick:function(){return y(400)}}),Object(l.jsx)(i,{name:"600",color:"green",onClick:function(){return y(600)}}),Object(l.jsx)(i,{name:"800",color:"green",onClick:function(){return y(800)}}),Object(l.jsx)(i,{name:"1000",color:"green",onClick:function(){return y(1e3)}})]})]})]})}),Object(l.jsx)("div",{className:"md:flex-grow"})]})]})}var z=function(){var e=j("userData",{loginAction:"NotLoggedIn"}),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(Object(l.jsx)("div",{children:"400"})),a=Object(s.a)(r,2),i=a[0],u=a[1];function f(e){c(e)}return Object(o.useEffect)((function(){console.log("UseEffect triggerd"),"NotLoggedIn"===t.loginAction?u(Object(l.jsx)(d,{handleUserDataChange:f})):"JoinGame"===t.loginAction?u(Object(l.jsx)(x,{userData:t})):"CreateGame"===t.loginAction?u(Object(l.jsx)(p,{userData:t})):console.log("ERROR: No loginAction not recognized: \n"+"userData: ".concat(t,"\n")+"loginAction: ".concat(t.loginAction))}),[t]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{userData:t,handleUserDataChange:f}),i]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.71daf3e1.chunk.js.map
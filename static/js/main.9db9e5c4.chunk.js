(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{14:function(e,t,n){e.exports={pocemonCard:"PocemonCard_pocemonCard__1PHtf",pocemonImg:"PocemonCard_pocemonImg__1rWcH",pocemonInfo:"PocemonCard_pocemonInfo__1BwYT",pocemonName:"PocemonCard_pocemonName__3hOQC",pocemonLike:"PocemonCard_pocemonLike__1VD-n"}},19:function(e,t,n){e.exports={header_logo:"Header_header_logo__2atw6",like:"Header_like__1_4Nk"}},28:function(e,t,n){e.exports={main:"Main_main__2R7jV"}},29:function(e,t,n){e.exports={main:"Favorite_main__1sROV"}},35:function(e,t,n){},4:function(e,t,n){e.exports={pocemonOutfit:"PocemonProfile_pocemonOutfit__3SFRC",pocemonImg:"PocemonProfile_pocemonImg__3DFMc",pocemonName:"PocemonProfile_pocemonName__1mTnl",pocemonProperty:"PocemonProfile_pocemonProperty__13I8M",propertyName:"PocemonProfile_propertyName__nwiD-",propertyValue:"PocemonProfile_propertyValue__1DWi3",button:"PocemonProfile_button__OO-F2",buttonRemove:"PocemonProfile_buttonRemove__36x9P",buttonAdd:"PocemonProfile_buttonAdd__HP1Bf"}},43:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(20),r=n.n(a),s=(n(35),n(10)),i=n.n(s),m=n(11),p=n(19),l=n.n(p),u=n(5),j=n(12),f="LOAD_POKEMONS",b="LOAD_FAVORITES",d="CHANGE_PATHNAME",h={pokemons:[],favorite:[],pathName:"/"},O=function(e){return{type:b,payload:e}},x=function(e){return{type:d,payload:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(j.a)(Object(j.a)({},e),{},{pokemons:t.payload});case b:return Object(j.a)(Object(j.a)({},e),{},{favorite:t.payload});case d:return Object(j.a)(Object(j.a)({},e),{},{pathName:t.payload});default:return e}},v=n(3),_=n(1),k=function(){var e=Object(v.f)(),t=Object(u.b)(),n=Object(u.c)((function(e){return e.homeReducer.pathName})),o=function(n){t(x(n)),e.push({pathname:n})};return Object(_.jsxs)("header",{className:l.a.header,children:[Object(_.jsx)("div",{onClick:function(){return o("/")},className:l.a.arrow,style:{marginRight:"auto",display:"/"!==n?"block":"none"},children:Object(_.jsx)("img",{src:"/img/icons/arrow.svg",alt:"arrow"})}),Object(_.jsx)("div",{className:l.a.header_logo,children:Object(_.jsx)("img",{src:"/img/icons/logoPocemon.svg",alt:"Pocemon Logo"})}),Object(_.jsxs)("div",{onClick:function(){return o("/favorites")},style:{display:"/"===n?"block":"none"},className:l.a.like,children:[" ",Object(_.jsx)("img",{src:"/img/icons/like.svg",alt:"like"})]})]})},N=n(18),y=n(28),P=n.n(y),w=n(14),C=n.n(w),I=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t).then((function(e){return e.json()})).then((function(e){return e.results})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t).then((function(e){return e.json()})).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return Object(_.jsx)("svg",{width:e.width,height:e.height,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(_.jsx)("path",{d:"M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z",fill:e.fill,stroke:e.stroke,strokeLinecap:"round",strokeLinejoin:"round"})})},R=function(e){var t=e.data,n=Object(o.useState)(null),c=Object(N.a)(n,2),a=c[0],r=c[1],s=Object(o.useState)(!0),p=Object(N.a)(s,2),l=p[0],j=p[1],f=Object(v.f)(),b=Object(u.b)(),d=Object(u.c)((function(e){return e.homeReducer.favorite})),h=t.url,O=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(h);case 2:t=e.sent,r(t),j(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){O()}),[]),l?"...Loading":Object(_.jsxs)("div",{onClick:function(){b(x("/pokemonProfile")),f.push({pathname:"/pokemonProfile",state:{pokemon:a}})},className:C.a.pocemonCard,children:[Object(_.jsx)("div",{className:C.a.pocemonImg,children:Object(_.jsx)("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(a.id,".png"),alt:"".concat(a.name)})}),Object(_.jsxs)("div",{className:C.a.pocemonInfo,children:[Object(_.jsx)("span",{className:C.a.pocemonName,children:a.name}),Object(_.jsx)("div",{className:C.a.pocemonLike,children:Object(_.jsx)(S,{fill:d.some((function(e){return e.name===a.name}))?"#201D2A":"none",stroke:"#201D2A",width:"16px",height:"16px"})})]})]})},A=function(){var e=Object(u.c)((function(e){return e.homeReducer.pokemons})),t=Object(o.useState)(!1),n=Object(N.a)(t,2);n[0],n[1];return Object(_.jsx)("main",{className:P.a.main,children:e.length?e.map((function(e,t){return Object(_.jsx)(R,{data:e},t)})):null})},L=n(30),V=n(4),E=n.n(V),D=function(){var e=Object(v.g)(),t=e.state.pokemon,n=Object(u.c)((function(e){return e.homeReducer.favorite})),c=Object(u.b)();Object(o.useEffect)((function(){c(x("/pokemonProfile"))}),[]);return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:E.a.pocemonOutfit,children:[Object(_.jsx)("div",{className:E.a.pocemonImg,children:Object(_.jsx)("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(e.state.pokemon.id,".png"),alt:"".concat(e.state.pokemon.name)})}),Object(_.jsx)("h1",{className:E.a.pocemonName,children:"".concat(e.state.pokemon.name)})]}),Object(_.jsxs)("main",{children:[Object(_.jsxs)("p",{className:E.a.pocemonProperty,children:[Object(_.jsx)("span",{className:E.a.propertyName,children:" Base Experience "}),Object(_.jsxs)("span",{className:E.a.propertyValue,children:[" ","".concat(e.state.pokemon.base_experience," XP")," "]})]}),Object(_.jsxs)("p",{className:E.a.pocemonProperty,children:[Object(_.jsx)("span",{className:E.a.propertyName,children:" Height "}),Object(_.jsxs)("span",{className:E.a.propertyValue,children:[" ","".concat(e.state.pokemon.height," m")," "]})]}),Object(_.jsxs)("p",{className:E.a.pocemonProperty,children:[Object(_.jsx)("span",{className:E.a.propertyName,children:" Weight "}),Object(_.jsxs)("span",{className:E.a.propertyValue,children:[" ","".concat(e.state.pokemon.weight," kg")," "]})]}),Object(_.jsxs)("p",{className:E.a.pocemonProperty,children:[Object(_.jsx)("span",{className:E.a.propertyName,children:" Types "}),Object(_.jsxs)("span",{className:E.a.propertyValue,children:[" ","".concat(e.state.pokemon.types[0].type.name)," "]})]}),Object(_.jsxs)("p",{className:E.a.pocemonProperty,children:[Object(_.jsx)("span",{className:E.a.propertyName,children:" Abilities "}),Object(_.jsxs)("span",{className:E.a.propertyValue,children:[" ","".concat(e.state.pokemon.abilities[0].ability.name)," "]})]})]}),Object(_.jsxs)("button",{onClick:function(){if(localStorage.getItem("favorite")){var e=[];n.some((function(e){return e.name===t.name}))?(e=n.filter((function(e){return e.name!==t.name})),localStorage.setItem("favorite",JSON.stringify(e)),c(O(e))):(e=[].concat(Object(L.a)(n),[t]),c(O(e)),localStorage.setItem("favorite",JSON.stringify(e)))}else c(O([t])),localStorage.setItem("favorite",JSON.stringify([t]))},className:"".concat(E.a.buttonAdd," ").concat(E.a.button),children:[n.some((function(e){return e.name===t.name}))?null:Object(_.jsx)(S,{fill:"none",stroke:"#FFFFFF",width:"20px",height:"20px"}),Object(_.jsx)("span",{children:n.some((function(e){return e.name===t.name}))?"Remove from Favorites":"Add to Favorites"})]})]})},H="https://pokeapi.co/api/v2/pokemon?limit=20&offset=20",M=n(29),T=n.n(M),B=function(){var e=Object(u.c)((function(e){return e.homeReducer.favorite})),t=Object(u.b)(),n=Object(u.c)((function(e){return e.homeReducer.pokemons})).filter((function(t){return e.some((function(e){return e.name===t.name}))}));return Object(o.useEffect)((function(){t(x("/favorites"))}),[]),Object(_.jsxs)("main",{className:T.a.main,children:[Object(_.jsx)("h1",{children:"Favorites"}),e.length?n.map((function(e,t){return Object(_.jsx)(R,{data:e},t)})):Object(_.jsx)("p",{children:" no pocemons "})]})},J=n(15);var W=function(){var e=Object(u.b)(),t=function(){var t=Object(m.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(H);case 2:n=t.sent,e({type:f,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){if(t(),localStorage.getItem("favorite")){var n=JSON.parse(localStorage.getItem("favorite"));e(O(n))}}),[]),Object(_.jsx)(J.a,{children:Object(_.jsxs)("div",{children:[Object(_.jsx)(k,{}),Object(_.jsxs)(v.c,{children:[Object(_.jsx)(v.a,{path:"/favorites",children:Object(_.jsx)(B,{})}),Object(_.jsx)(v.a,{path:"/pokemonProfile",children:Object(_.jsx)(D,{})}),Object(_.jsx)(v.a,{exact:!0,path:"/",children:Object(_.jsx)(A,{})}),Object(_.jsx)(v.a,{path:"*",children:Object(_.jsx)("div",{children:"page not found 404"})})]})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))},K=n(27),Q=Object(K.a)({homeReducer:g}),X=Object(K.b)(Q);r.a.render(Object(_.jsx)(u.a,{store:X,children:Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(W,{})})}),document.getElementById("root")),G()}},[[43,1,2]]]);
//# sourceMappingURL=main.9db9e5c4.chunk.js.map
(this.webpackJsonpapiproject=this.webpackJsonpapiproject||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/Portal.2ba7e0b8.png"},28:function(e,t,a){e.exports=a.p+"static/media/Heading.75509f2e.png"},29:function(e,t,a){e.exports=a.p+"static/media/Characters.53514534.png"},30:function(e,t,a){e.exports=a.p+"static/media/Location1.b169425d.png"},31:function(e,t,a){e.exports=a.p+"static/media/Episodes.6f67ea92.png"},32:function(e,t,a){e.exports=a.p+"static/media/404.c9b9dba6.png"},35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),l=a.n(r),i=(a(40),a(33)),s=a(1),o=(a(41),a(28)),m=a.n(o),u={bannerStyle:{textAlign:"center",background:"#333333"},imageStyle:{height:"30vh",filter:"drop-shadow(0 0 30px #000)",cursor:"pointer"}};var d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"banner",style:u.bannerStyle},c.a.createElement("img",{src:m.a,className:"",style:u.imageStyle,alt:"",onClick:function(){window.location.assign("/rick-and-morty")}})))},p=a(29),E=a.n(p),f=a(30),g=a.n(f),v=a(31),h=a.n(v),y=a(14),b=a.n(y),N=a(3);var x=function(e){return c.a.createElement("div",{style:{width:"100%",marginTop:"4vh"},onClick:e.handleClick},c.a.createElement("img",{src:e.source,className:"img-Item",style:{width:"100%"},alt:""}))};var w=function(e){var t=e.source,a=e.title,r=Object(n.useState)(a),l=Object(N.a)(r,1)[0],i={width:"100%",padding:20,paddingTop:"Locations"===a?"12vh":"4vh",boxSizing:"boder-box"};return c.a.createElement("div",{style:i,className:"img-Box"},c.a.createElement(x,{source:t,handleClick:function(e){window.location.assign("/rick-and-morty#/".concat(l))}}),c.a.createElement("h1",{style:{margin:"20px 0",padding:0,fontFamily:"rnmFont",textAlign:"center",textTransform:"uppercase",fontSize:"5em",color:"#fff",textShadow:"10px 10px 40px #000",filter:"drop-shadow(0 0 70px black)"},className:""},a))};var j=function(e){var t=e.width,a=e.source,n=e.back,r=e.title,l={width:t};return c.a.createElement("div",{className:"portal",style:l},c.a.createElement(w,{style:l,source:a,back:n,title:r,width:t}))},k={display:"flex",justifyContent:"space-evenly",marginTop:"-5vh",height:"70vh"};var O=function(){return c.a.createElement("div",{style:k},c.a.createElement(j,{source:g.a,back:b.a,width:"25%",title:"Locations"}),c.a.createElement(j,{source:E.a,back:null,width:"40%",title:"Characters"}),c.a.createElement(j,{source:h.a,back:b.a,width:"25%",title:"Episodes"}))};var S=function(){return c.a.createElement("div",{className:"teal",style:{textAlign:"center",fontSize:"1.5em",height:"5vh"}},"Made With \u2764 By Marmik")},C=a(12),F=a(9);var A=function(e){var t={padding:20,borderRadius:"10px"},a=Object(n.useState)(e.feilds),r=Object(N.a)(a,2),l=r[0],i=r[1],s=function(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(F.a)(Object(F.a)({},e),{},Object(C.a)({},a,n))}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"grey lighten-3",style:Object(F.a)(Object(F.a)({},t),{},{padding:"0px"})},c.a.createElement("h1",{style:{margin:0,padding:10,borderTop:"10px solid #00afc7",borderRadius:"10px"}},e.title)),c.a.createElement("br",null),c.a.createElement("div",{className:"input-box grey lighten-3",style:t},c.a.createElement("div",{className:"row",style:{margin:0}},function(){var e=[],t={page:"find_in_page",name:"account_circle",status:"sick",species:"accessibility",type:"supervised_user_circle",gender:"wc",dimension:"public",episode:"tv"};for(var a in l)e.push(c.a.createElement("div",{className:"input-field col s12",key:a},c.a.createElement("i",{className:"material-icons prefix"},t[a]),c.a.createElement("input",{value:l[a],id:a,type:"text",name:a,className:"validate",onChange:s}),c.a.createElement("label",{htmlFor:a},"Search ",a)));return e}())),c.a.createElement("br",null),c.a.createElement("div",{style:Object(F.a)(Object(F.a)({},t),{},{width:"100%"}),className:"grey lighten-3"},c.a.createElement("button",{className:"btn waves-effect waves-light",style:{width:"100%"},name:"action",onClick:function(){e.changeQuery(l)}},"Search",c.a.createElement("i",{className:"material-icons right"},"search"))))};var T=function(e){return c.a.createElement("div",{className:"card",style:{width:"30%"}},c.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},c.a.createElement("img",{className:"activator",src:e.content.image})),c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},e.content.name,c.a.createElement("i",{className:"material-icons right"},"more_vert")),c.a.createElement("p",null)),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},e.content.name,c.a.createElement("i",{className:"material-icons right"},"close")),c.a.createElement("ul",{className:"collection"},c.a.createElement("li",{className:"collection-item"},"Status : ",e.content.status?e.content.status:"N.A"),c.a.createElement("li",{className:"collection-item"},"Species : ",e.content.species?e.content.species:"N.A"),c.a.createElement("li",{className:"collection-item"},"Type : ",e.content.type?e.content.type:"N.A"),c.a.createElement("li",{className:"collection-item"},"Gender : ",e.content.gender?e.content.gender:"N.A"))))},z=a(10),_=a.n(z),H=a(32),I=a.n(H);var L=function(){var e={background:"url(".concat(I.a,")"),width:"100%",minHeight:"100vh",backgroundSize:"contain",backgroundPosition:"center",filter:"drop-shadow(0px 0px 40px #000)",backgroundRepeat:"no-repeat",marginTop:"-15vh",zIndex:"-1"};return c.a.createElement("div",{style:e},c.a.createElement("span",{className:"text",style:{position:"absolute",top:"90%",left:"50%",transform:"translate(-60%,-50%)",fontSize:"15em",color:"white",lineHeight:"20vh"}},"404",c.a.createElement("p",{style:{fontSize:"2rem",textAlign:"center"}},"Resource Not Found")))};var Q=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({page:1,name:"",status:"",species:"",type:"",gender:""}),i=Object(N.a)(l,2),s=i[0],o=i[1],m=Object(n.useState)(!1),u=Object(N.a)(m,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){console.log("calling API");var e="";for(var t in s)""!==s[t]&&(e+="page"===t?"":"&".concat(t,"=").concat(s[t]));_.a.get("https://rickandmortyapi.com/api/character/?page=".concat(s.page).concat(e)).then((function(e){e.data.error?r([]):(r(e.data.results),p(!1))})).catch((function(e){e.response&&p(!0)}))}),[s]),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s4"},c.a.createElement(A,{title:"Characters",changeQuery:function(e){o(e)},feilds:s})),c.a.createElement("div",{className:"col s8 char-area",style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-evenly"}},d?c.a.createElement(L,null):a.map((function(e){return c.a.createElement(T,{key:e.id,content:e})}))))};var R=function(e){return c.a.createElement("div",{className:"card blue-grey darken-1",style:{width:"30%"}},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title white-text"},e.content.name),c.a.createElement("ul",{className:"collection"},c.a.createElement("li",{className:"collection-item"},"Type:",e.content.type?e.content.type:"N.A"),c.a.createElement("li",{className:"collection-item"},"Dimension:",e.content.dimension?e.content.dimension:"N.A"))))};var B=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({page:1,name:"",type:"",dimension:""}),i=Object(N.a)(l,2),s=i[0],o=i[1],m=Object(n.useState)(!1),u=Object(N.a)(m,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){var e="";for(var t in s)""!==s[t]&&(e+="page"===t?"":"&".concat(t,"=").concat(s[t]));_.a.get("https://rickandmortyapi.com/api/location/?page=".concat(s.page).concat(e)).then((function(e){r(e.data.results),p(!1)})).catch((function(e){e.response&&p(!0)}))}),[s]),c.a.createElement("div",{className:"row",style:{minHeight:"65vh"}},c.a.createElement("div",{className:"col s4"},c.a.createElement(A,{title:"Locations",changeQuery:function(e){o(e)},feilds:s})),c.a.createElement("div",{className:"col s8 area",style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-evenly"}},d?c.a.createElement(L,null):a.map((function(e){return c.a.createElement(R,{key:e.id,content:e})}))))};var P=function(e){return c.a.createElement("div",{className:"card blue-grey darken-1",style:{width:"30%"}},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title white-text"},e.content.name),c.a.createElement("ul",{className:"collection"},c.a.createElement("li",{className:"collection-item"},"Air Date:",e.content.air_date),c.a.createElement("li",{className:"collection-item"},"Episode no and season : ",e.content.episode))))};var D=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({page:1,name:"",episode:""}),i=Object(N.a)(l,2),s=i[0],o=i[1],m=Object(n.useState)(!1),u=Object(N.a)(m,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){var e="";for(var t in s)""!==s[t]&&(e+="page"===t?"":"&".concat(t,"=").concat(s[t]));_.a.get("https://rickandmortyapi.com/api/episode/?page=".concat(s.page).concat(e)).then((function(e){r(e.data.results),p(!1)})).catch((function(e){e.response&&p(!0)}))}),[s]),c.a.createElement("div",{className:"row",style:{}},c.a.createElement("div",{className:"col s4"},c.a.createElement(A,{title:"Episodes",changeQuery:function(e){o(e)},feilds:s})),c.a.createElement("div",{className:"col s8 area",style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-evenly"}},d?c.a.createElement(L,null):a.map((function(e){return c.a.createElement(P,{key:e.id,content:e})}))))};var J=function(){return c.a.createElement(i.a,{basename:"/"},c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(O,null)}}),c.a.createElement(s.a,{exact:!0,path:"/characters",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,null))}})," ",c.a.createElement(s.a,{exact:!0,path:"/locations",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(B,null))}}),c.a.createElement(s.a,{exact:!0,path:"/episodes",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null))}}),c.a.createElement(S,null)))};l.a.render(c.a.createElement(J,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.288bec18.chunk.js.map
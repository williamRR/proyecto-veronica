(this["webpackJsonpproyecto-veronica"]=this["webpackJsonpproyecto-veronica"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(10),c=n.n(a),r=(n(140),n(194)),o=n(58),s=n(69),l=n(99),h=n(12),p=n(3),b=function(e){var t=e.component,n=(e.publicAccess,e.hasRole,Object(l.a)(e,["component","publicAccess","hasRole"]));return Object(p.jsx)(h.a,Object(s.a)(Object(s.a)({},n),{},{children:Object(p.jsx)(t,{})}))},u=n(51),j=n(177),d=n(178),m=function(){var e=Object(h.f)();return Object(p.jsxs)(j.a,{item:!0,container:!0,xs:12,justify:"center",alignContent:"center",style:{minHeight:"100vh"},children:[Object(p.jsx)(j.a,{item:!0,xs:12,container:!0,justify:"center",children:Object(p.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){return e.push("/attendance")},children:"Tomar Asistencia"})}),Object(p.jsx)(j.a,{item:!0,xs:12,container:!0,justify:"center",style:{marginTop:10},children:Object(p.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/attendance")},children:"Ver hist\xf3rico"})})]})},x=n(48),O=n(71),g=n.n(O),v=[{att:"name",label:"Nombre Alumno",root:"name",entity:"pupil",computed:!1},{att:"present",label:"Asistencia",computed:!0}],f=n(26),y=n(191),H=n(192),k=(n(193),n(181)),S=n(182),w=(n(195),n(176)),C=(n(179),n(180)),T=(Object(w.a)((function(e){return{head:{backgroundColor:"#333333",color:e.palette.common.white,maxWidth:170,minWidth:170},columnLabel:{color:"white","&:active, &.MuiTableSortLabel-active, &.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active":{color:e.palette.common.white}}}})),n(5),n(196),n(186),n(187)),A=n(197),L=(n(188),n(102)),B=(n(189),n(190)),I=n(183),E=(Object(w.a)((function(e){return{loading:{marginTop:e.spacing(20)},button:{fill:"currentColor",width:"1em",height:"1em",display:"inline-block",fontSize:"1.3928571428571428rem",transition:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",flexShrink:0,userSelect:"none"},table:{marginTop:e.spacing(23),marginBottom:e.spacing(20)}}})),n(95),n(94),Object(w.a)((function(e){return{selected:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},link:{cursor:"pointer"}}})),Object(w.a)((function(e){var t,n,i;return{planningDetails:(t={minHeight:"80vh",maxHeight:"80vh",border:"1px solid silver"},Object(f.a)(t,e.breakpoints.up("sm"),{minHeight:"70vh",maxHeight:"70vh"}),Object(f.a)(t,e.breakpoints.up("md"),{minHeight:"72vh",maxHeight:"72vh"}),t),planning:{minHeight:"85vh",maxHeight:"85vh",border:"1px solid silver"},tracking:(n={border:"1px solid silver",minHeight:"55vh",maxHeight:"55vh"},Object(f.a)(n,e.breakpoints.up("sm"),{minHeight:"36vh",maxHeight:"36vh"}),Object(f.a)(n,e.breakpoints.up("lg"),{minHeight:"60vh",maxHeight:"60vh"}),Object(f.a)(n,e.breakpoints.up("xl"),{minHeight:"70vh",maxHeight:"70vh"}),n),trackingDetails:(i={border:"1px solid silver",minHeight:"20vh",maxHeight:"20vh"},Object(f.a)(i,e.breakpoints.up("sm"),{minHeight:"40vh",maxHeight:"40vh"}),Object(f.a)(i,e.breakpoints.up("md"),{minHeight:"20vh",maxHeight:"20vh"}),Object(f.a)(i,e.breakpoints.up("lg"),{minHeight:"50vh",maxHeight:"50vh"}),i),footerContainer:{borderBottom:"none"},pagination:{display:"inline-flex",overflow:"hidden"}}})),function(e){var t="";return e.split(" ").forEach((function(e){var n=e.charAt(0).toUpperCase().concat(e.slice(1,e.length).toLowerCase());t=t.concat(" ").concat(n)})),t}),z=function(e){var t=[];return null===e||void 0===e||e.forEach((function(e){var n={name:E(e.name.concat(" ").concat(e.lastname)),pupilId:e.id,present:!0};t.push(n)})),t},M=n(96),R=n.n(M),D=n(97),J=[{id:"home",route:"/",public:!0,component:m,item:!1},{id:"attendance",route:"/attendance",public:!0,component:function(){var e=Object(i.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),r=Object(x.a)(c,2),o=r[0],s=r[1],l=Object(h.f)();Object(i.useEffect)((function(){s(!0),g.a.get("https://18.231.156.63:8081/api/pupils").then((function(e){var t=e.data;a(z(t))})),s(!1)}),[]),Object(i.useEffect)((function(){console.log("rendering")}),[n]);return Object(p.jsxs)(j.a,{container:!0,justify:"center",children:[Object(p.jsx)(j.a,{item:!0,xs:12,container:!0,justify:"center",children:Object(p.jsxs)(L.a,{children:["Asistencia para el d\xeda: ",D.DateTime.now().toLocaleString()]})}),Object(p.jsxs)(j.a,{item:!0,xs:8,style:{marginTop:20},children:[Object(p.jsx)(y.a,{children:Object(p.jsxs)(H.a,{id:"table-to-xls",size:"small",stickyHeader:!0,style:{border:"1px solid silver"},children:[Object(p.jsx)(C.a,{children:Object(p.jsx)(k.a,{style:{border:"1px solid silver"},children:v.map((function(e){return Object(p.jsx)(S.a,{align:"center",children:Object(p.jsx)(L.a,{variant:"body1",children:e.label})},e.att)}))})}),Object(p.jsx)(B.a,{children:o?Object(p.jsx)(k.a,{children:Object(p.jsx)(S.a,{align:"center",colSpan:2,children:Object(p.jsx)(I.a,{})})}):n.map((function(e){return Object(p.jsxs)(k.a,{children:[Object(p.jsx)(S.a,{align:"center",padding:"none",children:Object(p.jsxs)(L.a,{variant:"body2",children:[e.name," "]})}),Object(p.jsx)(S.a,{align:"center",padding:"none",children:Object(p.jsx)(T.a,{control:Object(p.jsx)(A.a,{style:e.present?{color:"#d3e3b6"}:{color:"#ff9b9b"},checked:e.present,onChange:function(){return function(e){var t=n.find((function(t){return t.pupilId===e.pupilId}));t.present=!t.present;var i=n;i.splice(i.indexOf(t),1),i.push(t),a(R.a.sortBy(i,"pupilId"))}(e)}})})})]},e.pupilId)}))})]})}),Object(p.jsx)(j.a,{item:!0,xs:12,container:!0,justify:"center",style:{marginTop:29},children:Object(p.jsx)(d.a,{variant:"outlined",onClick:function(){g.a.post("https://localhost:8080/api/attendances",{listOfAttendance:n,date:"2019-20-20",subject:"Lenguaje"}).then((function(){l.push("/")}))},children:"Enviar"})})]})]})},item:!0}],U=function(){return Object(p.jsx)(u.a,{children:Object(p.jsx)(h.c,{children:J.map((function(e){return Object(p.jsx)(b,{exact:!0,publicAccess:e.public,hasRole:e.hasRole,path:e.route,component:e.component},e.id)}))})})},W=n(98),F=Object(W.a)({shadows:["none"],props:{MuiButtonBase:{disableRipple:!0}},zIndex:{appBar:1251,modal:1250},typography:{fontFamily:["Ubuntu"].join(","),fontSize:13},palette:{text:{primary:"#666666",secondary:"#00000"},primary:{main:"#008ecc"},secondary:{main:"#333333"}}});var N=function(){return Object(p.jsx)(r.a,{theme:F,children:Object(p.jsx)(o.a,{maxSnack:2,transitionDuration:{appear:250,enter:250,exit:250},children:Object(p.jsx)(U,{})})})};c.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.8700b519.chunk.js.map
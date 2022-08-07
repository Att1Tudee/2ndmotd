(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(11),s=n.n(a),o=n(2),i=(n(16),n(6)),l=(n(17),n(0));function u(){return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(l.jsx)(i.c,{className:"navbar-brand",to:"/",children:Object(l.jsx)("h3",{class:"d-inline-block align-text-middle",children:"MOTD List"})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.c,{className:"nav-link",to:"/create",children:Object(l.jsx)("h3",{id:"createmotdlink",children:"Create New Motd"})})})})})]})})}var d=n(5),j=n(7),b=n(4),h=function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.record.author}),Object(l.jsx)("td",{children:t.record.motd}),Object(l.jsxs)("td",{children:[Object(l.jsx)(i.b,{className:"btn btn-link",to:"/edit/".concat(t.record._id),children:"Edit"})," |",Object(l.jsx)("button",{className:"btn btn-link",onClick:function(){t.deleteRecord(t.record._id)},children:"Delete"})]})]})};function O(){var t=Object(r.useState)([]),e=Object(b.a)(t,2),n=e[0],c=e[1];function a(){return(a=Object(j.a)(Object(d.a)().mark((function t(e){var r;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/".concat(e),{method:"DELETE"});case 2:r=n.filter((function(t){return t._id!==e})),c(r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function t(){return t=Object(j.a)(Object(d.a)().mark((function t(){var e,n,r;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/record/");case 2:if((e=t.sent).ok){t.next=7;break}return n="An error occured: ".concat(e.statusText),window.alert(n),t.abrupt("return");case 7:return t.next=9,e.json();case 9:r=t.sent,c(r);case 11:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n.length]),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-striped",style:{marginTop:0},children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Author"}),Object(l.jsx)("th",{children:"Motd"}),Object(l.jsx)("th",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:n.map((function(t){return Object(l.jsx)(h,{record:t,deleteRecord:function(){return function(t){return a.apply(this,arguments)}(t._id)}},t._id)}))})]})})}var p=n(8);function x(){var t=Object(r.useState)({author:"",motd:"",level:"",records:[]}),e=Object(b.a)(t,2),n=e[0],c=e[1],a=Object(o.g)(),s=Object(o.f)();function i(t){return c((function(e){return Object(p.a)(Object(p.a)({},e),t)}))}function u(){return(u=Object(j.a)(Object(d.a)().mark((function t(e){var r;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r={author:n.author,motd:n.motd,level:n.level},t.next=4,fetch("http://localhost:5000/update/".concat(a.id),{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});case 4:s("/");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function t(){return(t=Object(j.a)(Object(d.a)().mark((function t(){var e,n,r,o;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.id.toString(),t.next=3,fetch("http://localhost:5000/record/".concat(a.id.toString()));case 3:if((n=t.sent).ok){t.next=8;break}return r="An error has occured: ".concat(n.statusText),window.alert(r),t.abrupt("return");case 8:return t.next=10,n.json();case 10:if(o=t.sent){t.next=15;break}return window.alert("Record with id ".concat(e," not found")),s("/"),t.abrupt("return");case 15:c(o);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a.id,s]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Update MOTD"}),Object(l.jsxs)("form",{onSubmit:function(t){return u.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"authot",children:"Author: "}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"author",value:n.author,onChange:function(t){return i({author:t.target.value})}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"motd",children:"MOTD: "}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"motd",value:n.motd,onChange:function(t){return i({motd:t.target.value})}})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"submit",value:"Update MOTD",className:"btn btn-primary"})})]})]})}function f(){var t=Object(r.useState)({author:"",motd:"",level:"",randid:1}),e=Object(b.a)(t,2),n=e[0],c=e[1],a=Object(o.f)();function s(t){return c((function(e){return Object(p.a)(Object(p.a)({},e),t)}))}function i(){return(i=Object(j.a)(Object(d.a)().mark((function t(e){var r;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=Object(p.a)({},n),t.next=4,fetch("http://localhost:5000/record/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).catch((function(t){window.alert(t)}));case 4:c({author:"",motd:"",level:"",randid:""}),a("/");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Create New MOTD"}),Object(l.jsxs)("form",{onSubmit:function(t){return i.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"author",children:"Author"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"author",value:n.author,onChange:function(t){return s({author:t.target.value})}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"motd",children:"MOTD"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"motd",value:n.motd,onChange:function(t){return s({motd:t.target.value})}})]}),Object(l.jsx)("div",{className:"form-group"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"submit",value:"Create MOTD",className:"btn btn-primary"})})]})]})}var m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{style:{margin:50},children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",element:Object(l.jsx)(O,{})}),Object(l.jsx)(o.a,{path:"/edit/:id",element:Object(l.jsx)(x,{})}),Object(l.jsx)(o.a,{path:"/create",element:Object(l.jsx)(f,{})})]})})]})};n(19);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(m,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.091a7393.chunk.js.map
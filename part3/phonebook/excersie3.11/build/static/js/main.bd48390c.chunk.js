(this.webpackJsonppart2_2=this.webpackJsonppart2_2||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(15),o=n.n(r),u=n(6),a=n(3),i=n(4),s=n.n(i),l="/persons",j={getAll:function(){return s.a.get(l).then((function(e){return e.data}))},create:function(e){return s.a.post(l,e).then((function(e){return e.data}))},update:function(e,t){return s.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))},deleteP:function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))}},d=n(0),b=function(e){var t=e.person,n=e.removePerson;return Object(d.jsx)("div",{children:Object(d.jsx)("table",{children:Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[t.content," "]}),Object(d.jsx)("td",{children:t.number}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return n(t.id,t.content)},children:"Delete"})})]})})})})},f=function(e){var t=e.onChange;return Object(d.jsxs)("div",{children:["filter shown with \xa0",Object(d.jsx)("input",{onChange:t})]})},h=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{children:"add a new"}),Object(d.jsxs)("div",{children:["name: \xa0 \xa0 \xa0",Object(d.jsx)("input",{value:e.valueName,onChange:e.onChangeName})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:["number:\xa0\xa0\xa0",Object(d.jsx)("input",{type:"tel",pattern:"[0-9\\-]+",value:e.valueNumber,onChange:e.onChangeNumber})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",children:"add"})]}),Object(d.jsx)("br",{})]})})},O=(n(39),function(e){var t=e.message;return null===t?null:Object(d.jsx)("div",{className:"success",children:t})}),m=function(e){var t=e.err;return null===t?null:Object(d.jsx)("div",{className:"error",children:t})},x=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),i=Object(a.a)(o,2),s=i[0],l=i[1],x=Object(c.useState)(""),v=Object(a.a)(x,2),p=v[0],g=v[1],w=Object(c.useState)(""),C=Object(a.a)(w,2),N=C[0],S=C[1],y=Object(c.useState)(null),k=Object(a.a)(y,2),P=k[0],L=k[1],A=Object(c.useState)(null),D=Object(a.a)(A,2),E=D[0],J=D[1];Object(c.useEffect)((function(){console.log("effect"),j.getAll().then((function(e){console.log("promise fulfilled"),r(e),console.log(e)}))}),[]);var T=n.filter((function(e){return""===N?n:e.content.toLowerCase().includes(N.toLowerCase())?e:null})),_=function(e,t){window.confirm("Delete ".concat(t," ?"))&&j.deleteP(e).then((function(){return r(n.filter((function(t){return t.id!==e})))}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(O,{message:P}),Object(d.jsx)(m,{err:E}),Object(d.jsx)(f,{onChange:function(e){S(e.target.value)}}),Object(d.jsx)(h,{onSubmit:function(e){if(e.preventDefault(),n.find((function(e){return e.content===s}))){if(window.confirm("".concat(s," is already added to the phonebook,replace the old number with a new one?"))){var t=n.find((function(e){return e.content.toLowerCase().includes(s.toLowerCase())})),c=Object(u.a)(Object(u.a)({},t),{},{number:p});j.update(t.id,c).then((function(){r(n.map((function(e){return t.id!==e.id?e:c})))})).catch((function(e){J("".concat(t.content," has already been removed from server")),setTimeout((function(){return J(null)}),5e3),r(n.filter((function(e){return e.id!==t.id})))})),l(""),g("")}}else if(n.find((function(e){return e.number===p})))alert(p+" is already added to the phonebook");else{var o={content:s,number:p};j.create(o).then((function(e){r(n.concat(e)),l(""),g(""),L("Added ".concat(s," !")),setTimeout((function(){return L(null)}),5e3)}))}},valueName:s,onChangeName:function(e){l(e.target.value)},valueNumber:p,onChangeNumber:function(e){g(e.target.value)}}),Object(d.jsx)("h2",{children:"Numbers"}),T.map((function(e){return Object(d.jsx)(b,{person:e,removePerson:_},e.id)}))]})};o.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.bd48390c.chunk.js.map

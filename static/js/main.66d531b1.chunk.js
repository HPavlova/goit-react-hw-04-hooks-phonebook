(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",ContactForm__label:"ContactForm_ContactForm__label__jTzOR",ContactForm__input:"ContactForm_ContactForm__input__3onxO",ContactForm__button:"ContactForm_ContactForm__button__3V1To"}},,,function(t,e,n){t.exports={ContactList:"ContactList_ContactList__4TvGi",ContactList__button:"ContactList_ContactList__button__1tJt8"}},,function(t,e,n){t.exports={Filter__label:"Filter_Filter__label__1zfZ7",Filter__input:"Filter_Filter__input__3QdN_"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(9),r=n.n(c),i=(n(15),n(10)),s=n(2),u=n(20),l=(n(16),n(3)),b=n.n(l),m=n(0);function _(t){var e=t.onAddContact,n=Object(a.useState)(""),o=Object(s.a)(n,2),c=o[0],r=o[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],_=u[1],d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":_(a);break;default:return}};return Object(m.jsxs)("form",{className:b.a.ContactForm,onSubmit:function(t){t.preventDefault(),e(c,l),r(""),_("")},children:[Object(m.jsxs)("label",{className:b.a.ContactForm__label,children:["Name",Object(m.jsx)("input",{className:b.a.ContactForm__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:d})]}),Object(m.jsxs)("label",{className:b.a.ContactForm__label,children:["Number",Object(m.jsx)("input",{className:b.a.ContactForm__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:d})]}),Object(m.jsx)("button",{className:b.a.ContactForm__button,type:"submit",children:"Add contact"})]})}var d=n(6),j=n.n(d),C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{className:j.a.ContactList,children:e.map((function(t){return Object(m.jsxs)("li",{className:j.a.ContactList__item,children:[t.name+": "+t.number,Object(m.jsx)("button",{type:"button",className:j.a.ContactList__button,name:"delete",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},f=n(8),O=n.n(f),h=function(t){var e=t.value,n=t.onChangeFilter;return Object(m.jsx)("div",{children:Object(m.jsxs)("label",{className:O.a.Filter__label,children:["Find contacts by name",Object(m.jsx)("input",{className:O.a.Filter__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:function(t){n(t.target.value)}})]})})};var p=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function F(){var t=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),o=Object(s.a)(n,2),c=o[0],r=o[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,r]}("contacts",p),e=Object(s.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),r=Object(s.a)(c,2),l=r[0],b=r[1];var d=function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(_,{onAddContact:function(t,e){var a={id:Object(u.a)(),name:t,number:e},c=n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));c?alert("".concat(t," is already in contacts")):o((function(t){return[].concat(Object(i.a)(t),[a])}))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(h,{value:l,onChangeFilter:function(t){b(t)}}),Object(m.jsx)(C,{contacts:d,onDeleteContact:function(t){o(n.filter((function(e){return e.id!==t})))}})]})}r.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.66d531b1.chunk.js.map
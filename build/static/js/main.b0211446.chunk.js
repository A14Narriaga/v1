(this["webpackJsonpa14narriaga.github.io"]=this["webpackJsonpa14narriaga.github.io"]||[]).push([[0],{10:function(e,s,a){},11:function(e,s,a){"use strict";a.r(s);var t=a(4),n=a.n(t),c=a(3),i=a(1),r=a(0),o=function(e){var s=e.title,a=e.icon;return Object(r.jsx)("section",{className:"card",children:Object(r.jsxs)("a",{href:"/",children:[Object(r.jsx)("p",{children:s}),Object(r.jsx)("i",{className:a})]})})},j=function(e){var s=e.headerInfo,a=e.headerBtn,t=e.handleThemeChange,n=e.handleLanguajeChange;return Object(r.jsx)("div",{className:"header-container",children:Object(r.jsxs)("header",{children:[Object(r.jsxs)("section",{className:"card",children:[Object(r.jsx)("img",{src:"build/img/me.jpg",alt:"Alan Arriaga img"}),Object(r.jsxs)("section",{className:"info",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"ALAN"}),"ARRIAGA"]}),Object(r.jsx)("div",{onClick:n,children:Object(r.jsx)("i",{className:"fas fa-language"})}),Object(r.jsx)("div",{onClick:t,children:Object(r.jsx)("i",{className:"fas fa-sun"})})]}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)("p",{children:s})})]})]}),Object(r.jsx)("section",{className:"resume",children:Object(r.jsxs)("a",{href:"/",children:[Object(r.jsx)("i",{className:"fas fa-download"}),Object(r.jsx)("p",{children:a})]})})]})})},l=(a(10),localStorage.getItem("theme")||"light"),d=localStorage.getItem("languaje")||"spanish",h=function(){var e=Object(i.useState)(l),s=Object(c.a)(e,2),a=s[0],t=s[1],n=Object(i.useState)(d),h=Object(c.a)(n,2),b=h[0],g=h[1];return Object(i.useEffect)((function(){localStorage.setItem("theme",a),document.body.classList.toggle(a)}),[a]),Object(i.useEffect)((function(){localStorage.setItem("languaje",b),document.body.classList.toggle(b)}),[b]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{headerInfo:"spanish"===b?"Estudiante de Ingenier\xeda en Sistemas Computacionales":"Computer Systems Engineering Student",headerBtn:"spanish"===b?"Mi CV":"Resume",handleThemeChange:function(){t((function(e){return"dark"===e?"light":"dark"})),document.body.classList.toggle(a)},handleLanguajeChange:function(){g((function(e){return"spanish"===e?"english":"spanish"})),document.body.classList.toggle(b)}}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("main",{children:Object(r.jsxs)("section",{className:"cards",children:[Object(r.jsx)(o,{title:"spanish"===b?"Sobre mi":"About me",icon:"fas fa-user"}),Object(r.jsx)(o,{title:"spanish"===b?"Formaci\xf3n":"Training",icon:"fas fa-graduation-cap"}),Object(r.jsx)(o,{title:"spanish"===b?"Herramientas y Tecnolog\xedas":"Tools and Technologies",icon:"fas fa-cogs"}),Object(r.jsx)(o,{title:"spanish"===b?"Proyectos":"Projects",icon:"fas fa-folder"}),Object(r.jsx)(o,{title:"spanish"===b?"Experiencia":"Experience",icon:"fas fa-briefcase"}),Object(r.jsx)(o,{title:"spanish"===b?"Informaci\xf3n de contacto":"Contact information",icon:"fas fa-hand-peace"})]})})})]})};n.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b0211446.chunk.js.map
(this["webpackJsonpa14narriaga.github.io"]=this["webpackJsonpa14narriaga.github.io"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"spa":{"HEADER_INFO":"Estudiante de Ingenier\xeda en Sistemas Computacionales","HEADER_BTN":"Mi CV","CARD_1":"Sobre mi","CARD_2":"Formaci\xf3n","CARD_3":"Herramientas y Tecnolog\xedas","CARD_4":"Proyectos","CARD_5":"Experiencia","CARD_6":"Informaci\xf3n de contacto"},"eng":{"HEADER_INFO":"Computer Systems Engineering Student","HEADER_BTN":"Resume","CARD_1":"About me","CARD_2":"Education","CARD_3":"Tools and Technologies","CARD_4":"Projects","CARD_5":"Experience","CARD_6":"Contact information"},"icon":{"CARD_1":"fas fa-user","CARD_2":"fas fa-graduation-cap","CARD_3":"fas fa-cogs","CARD_4":"fas fa-folder","CARD_5":"fas fa-briefcase","CARD_6":"fas fa-hand-peace","SUN":"fas fa-cloud-sun","MOON":"fas fa-cloud-moon","SPA":"fas fa-globe-americas","ENG":"fas fa-globe-europe"}}')},12:function(e,s,c){},13:function(e,s,c){"use strict";c.r(s);var n=c(5),a=c.n(n),i=c(4),t=c(2),l=c(6),o=c(0),j=function(e){var s=e.title,c=e.icon;return Object(o.jsx)("section",{className:"card",children:Object(o.jsxs)("a",{href:"/",children:[Object(o.jsx)("p",{children:s}),Object(o.jsx)("i",{className:c})]})})},r=function(e){var s=e.headerInfo,c=e.headerBtn,n=e.themeIcon,a=e.languageIcon,i=e.handleThemeChange,t=e.handlelanguageChange;return Object(o.jsx)("div",{className:"header-container",children:Object(o.jsxs)("header",{children:[Object(o.jsxs)("section",{className:"card",children:[Object(o.jsx)("img",{src:"build/img/profile1.jpg",alt:"Alan Arriaga img"}),Object(o.jsxs)("section",{className:"info",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"ALAN"}),"ARRIAGA"]}),Object(o.jsx)("div",{onClick:t,children:Object(o.jsx)("i",{className:a})}),Object(o.jsx)("div",{onClick:i,children:Object(o.jsx)("i",{className:n})})]}),Object(o.jsx)("div",{className:"content",children:Object(o.jsx)("p",{children:s})})]})]}),Object(o.jsx)("section",{className:"resume",children:Object(o.jsxs)("a",{href:"/",children:[Object(o.jsx)("i",{className:"fas fa-download"}),Object(o.jsx)("p",{children:c})]})})]})})},d=function(e){var s=e.headerInfo,c=e.headerBtn,n=e.themeIcon,a=e.languageIcon,i=e.handleThemeChange,t=e.handlelanguageChange;return Object(o.jsxs)("div",{className:"header-container-movile",children:[Object(o.jsx)("div",{className:"back"}),Object(o.jsxs)("div",{className:"header-movile",children:[Object(o.jsxs)("div",{className:"btns",children:[Object(o.jsx)("div",{onClick:t,children:Object(o.jsx)("i",{className:a})}),Object(o.jsx)("div",{onClick:i,children:Object(o.jsx)("i",{className:n})})]}),Object(o.jsx)("div",{className:"title",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"ALAN"}),"ARRIAGA"]})}),Object(o.jsx)("div",{className:"img-content",children:Object(o.jsx)("img",{src:"build/img/profile1.jpg",alt:"Alan Arriaga img"})}),Object(o.jsx)("div",{className:"content",children:Object(o.jsx)("p",{children:s})}),Object(o.jsx)("section",{className:"resume",children:Object(o.jsxs)("a",{href:"/",children:[Object(o.jsx)("i",{className:"fas fa-download"}),Object(o.jsx)("p",{children:c})]})})]})]})},h=function(){return Object(o.jsx)("section",{className:"modal hidde",children:Object(o.jsxs)("div",{className:"header-modal",children:[Object(o.jsx)("div",{className:"actions-modal",children:Object(o.jsx)("i",{className:"fas fa-times"})}),Object(o.jsx)("div",{className:"title-modal",children:Object(o.jsx)("p",{children:"Proyectos"})})]})})},b=c(1),O=(c(12),localStorage.getItem("theme")||"light"),g=localStorage.getItem("language")||"spanish",m=function(){var e=Object(t.useState)(O),s=Object(i.a)(e,2),c=s[0],n=s[1],a=Object(t.useState)(g),m=Object(i.a)(a,2),A=m[0],x=m[1],R=Object(l.useMediaPredicate)("(max-width: 699px)"),C=function(){n((function(e){return"dark"===e?"light":"dark"})),document.body.classList.toggle(c)},p=function(){x((function(e){return"spanish"===e?"english":"spanish"})),document.body.classList.toggle(A)};return Object(t.useEffect)((function(){localStorage.setItem("theme",c),document.body.classList.toggle(c)}),[c]),Object(t.useEffect)((function(){localStorage.setItem("language",A),document.body.classList.toggle(A)}),[A]),Object(o.jsxs)(o.Fragment,{children:[R?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{headerInfo:"spanish"===A?b.spa.HEADER_INFO:b.eng.HEADER_INFO,headerBtn:"spanish"===A?b.spa.HEADER_BTN:b.eng.HEADER_BTN,themeIcon:"dark"===c?b.icon.MOON:b.icon.SUN,languageIcon:"spanish"===A?b.icon.SPA:b.icon.ENG,handleThemeChange:C,handlelanguageChange:p}),Object(o.jsx)("div",{className:"container-mobile",children:Object(o.jsx)("main",{children:Object(o.jsxs)("section",{className:"cards-mobile",children:[Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_1:b.eng.CARD_1,icon:b.icon.CARD_1}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_2:b.eng.CARD_2,icon:b.icon.CARD_2}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_3:b.eng.CARD_3,icon:b.icon.CARD_3}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_4:b.eng.CARD_4,icon:b.icon.CARD_4}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_5:b.eng.CARD_5,icon:b.icon.CARD_5}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_6:b.eng.CARD_6,icon:b.icon.CARD_6})]})})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r,{headerInfo:"spanish"===A?b.spa.HEADER_INFO:b.eng.HEADER_INFO,headerBtn:"spanish"===A?b.spa.HEADER_BTN:b.eng.HEADER_BTN,themeIcon:"dark"===c?b.icon.MOON:b.icon.SUN,languageIcon:"spanish"===A?b.icon.SPA:b.icon.ENG,handleThemeChange:C,handlelanguageChange:p}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("main",{children:Object(o.jsxs)("section",{className:"cards",children:[Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_1:b.eng.CARD_1,icon:b.icon.CARD_1}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_2:b.eng.CARD_2,icon:b.icon.CARD_2}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_3:b.eng.CARD_3,icon:b.icon.CARD_3}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_4:b.eng.CARD_4,icon:b.icon.CARD_4}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_5:b.eng.CARD_5,icon:b.icon.CARD_5}),Object(o.jsx)(j,{title:"spanish"===A?b.spa.CARD_6:b.eng.CARD_6,icon:b.icon.CARD_6})]})})})]}),Object(o.jsx)(h,{})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.51132909.chunk.js.map
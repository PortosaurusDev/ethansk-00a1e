(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1:function(e,a,t){e.exports={root:"Common_root__x6isM",cardBody:"Common_cardBody__219-l",innerCardBody:"Common_innerCardBody__1JhWc",avatarLogo:"Common_avatarLogo__kWh73",jobContent:"Common_jobContent__1M8hC",avatarMobileLogo:"Common_avatarMobileLogo__3LQQD",centerOnMobile:"Common_centerOnMobile__jRZfG",skill:"Common_skill__bAcc4",avatarContent:"Common_avatarContent__2VMli"}},19:function(e,a,t){e.exports=t.p+"static/media/defaultbanner.d1055b19.png"},2:function(e,a,t){e.exports={root:"Content_root__1Gjr9",backgroundImg:"Content_backgroundImg__P7Do_",heroInnerContent:"Content_heroInnerContent__2O5Mq",profilePic:"Content_profilePic__39y_t",announcement:"Content_announcement__2-N-W",announcementDark:"Content_announcementDark__ySpTR",announcementInner:"Content_announcementInner__1J9Z1"}},21:function(e,a,t){e.exports=t(38)},26:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),c=t(14),i=(t(26),t(27),t(3)),m=function(e){var a=e.fullName;return n.createElement("nav",{className:"navbar",style:{top:0,position:"fixed",zIndex:1e3,backgroundColor:"black"},id:"top"},n.createElement("div",{className:"navbar__inner"},n.createElement("div",{className:"navbar__items"},n.createElement("div",{className:"navbar__brand hoverLarge",style:{marginLeft:8},onClick:function(){i.animateScroll.scrollToTop({smooth:!0,duration:200})}},a),n.createElement("div",{className:"navbar__items navbar__items--right"},n.createElement(i.Link,{to:"experience"},n.createElement("span",{className:"navbar__item navbar__link"},"Experience")),n.createElement(i.Link,{to:"education"},n.createElement("span",{className:"navbar__item navbar__link"},"Education")),n.createElement(i.Link,{to:"skills"},n.createElement("span",{className:"navbar__item navbar__link"},"Skills")),n.createElement(i.Link,{to:"projects"},n.createElement("span",{className:"navbar__item navbar__link"},"Projects"))))))},s=t(20),d=function(e){var a=e.contacts;return n.createElement("footer",{className:"footer",style:{color:"white"}},n.createElement("div",{className:"container container--fluid text--center"},"Contact Me",n.createElement("div",{className:"footer__links"},a.map((function(e,a){var t=e.name,r=e.url,o=t.indexOf("s Profile")>0?"LinkedIn":t;return n.createElement("a",{key:a,className:"footer__link-item",target:"_blank",rel:"noopener noreferrer",href:r},o)})).reduce((function(e,a,t){return null===e?[a]:[].concat(Object(s.a)(e),[n.createElement("span",{key:-t,className:"footer__link-separator"},"\xb7"),a])}),null)),n.createElement("div",null,"Made with ",n.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," using ",n.createElement("a",{href:"https://portosaurus.herokuapp.com",target:"_blank",rel:"noopener noreferrer"},"Portosaurus"))))},u=t(2),v=t.n(u),E=function(e){return e.filter((function(e){return e.length>0})).join(" \xb7 ")},g=t(1),_=t.n(g),p=function(e){var a=e.poss;return r.a.createElement("div",{className:_.a.root,id:"experience"},r.a.createElement("div",{className:"card ".concat(_.a.cardBody)},r.a.createElement("div",{className:"card__header margin--auto"},r.a.createElement("h3",{style:{fontSize:36,marginTop:8,marginBottom:0}},"Experience")),r.a.createElement("div",{style:{textAlign:"center"}},a.length?a.map((function(e,a){var t=e.description,n=e.companyName,o=e.companyLogo,l=e.title,c=e.dateRange,i=e.location,m=e.url;return r.a.createElement("div",{key:a,className:"card__body ".concat(_.a.innerCardBody)},r.a.createElement("hr",{style:{marginTop:12}}),o&&r.a.createElement("div",{className:"avatar avatar--vertical ".concat(_.a.avatarMobileLogo," margin--auto")},m?r.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"hoverLarge",src:o,alt:n})):r.a.createElement("img",{src:o,alt:n})),r.a.createElement("div",{className:"avatar"},o&&r.a.createElement("div",{className:"avatar ".concat(_.a.avatarLogo)},m?r.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer",style:{width:"80%",height:"80%",margin:"auto"}},r.a.createElement("img",{className:"hoverLarge",src:o,alt:n})):r.a.createElement("img",{src:o,alt:n,style:{width:"80%",height:"80%",margin:"auto"}})),r.a.createElement("div",{className:"avatar__intro ".concat(_.a.avatarContent)},r.a.createElement("h4",{className:"avatar__name",style:{fontSize:20,marginBottom:4,textAlign:"left"}},l),r.a.createElement("div",{className:_.a.centerOnMobile},E(["".concat(n||""),c,null!==i&&void 0!==i?i:""])),r.a.createElement("div",{className:_.a.jobContent},null===t||void 0===t?void 0:t.map((function(e,a){return r.a.createElement("p",{key:a},e)}))))))})):r.a.createElement("div",{className:"card__body ".concat(_.a.innerCardBody)},r.a.createElement("hr",{style:{marginTop:12}}),r.a.createElement("h3",{style:{margin:"auto"}},"Add some positions and it'll appear here!")))))},h=function(e){var a=e.edus;return r.a.createElement("div",{className:_.a.root,id:"education"},r.a.createElement("div",{className:"card ".concat(_.a.cardBody)},r.a.createElement("div",{className:"card__header margin--auto"},r.a.createElement("h3",{style:{fontSize:36,marginTop:8,marginBottom:0}},"Education")),r.a.createElement("div",{style:{textAlign:"center"}},a.length?a.map((function(e,a){var t=e.degreeName,n=e.activities,o=e.fieldOfStudy,l=e.grade,c=e.schoolName,i=e.schoolLogo,m=e.notes,s=e.yearFrom,d=e.yearTo,u=e.url,v=s,g=d;return r.a.createElement("div",{key:a,className:"card__body ".concat(_.a.innerCardBody)},r.a.createElement("hr",{style:{marginTop:12}}),i&&r.a.createElement("div",{className:"avatar avatar--vertical ".concat(_.a.avatarMobileLogo," margin--auto")},u?r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"hoverLarge",src:i,alt:c})):r.a.createElement("img",{src:i,alt:i})),r.a.createElement("div",{className:"avatar"},i&&r.a.createElement("div",{className:"avatar ".concat(_.a.avatarLogo)},u?r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer",style:{width:"80%",height:"80%",margin:"auto"}},r.a.createElement("img",{className:"hoverLarge",src:i,alt:c})):r.a.createElement("img",{src:i,alt:c,style:{width:"80%",height:"80%",margin:"auto"}})," "),r.a.createElement("div",{className:"avatar__intro ".concat(_.a.avatarContent),style:{textAlign:"left"}},r.a.createElement("h4",{className:"avatar__name",style:{fontSize:20,marginBottom:4}},c),r.a.createElement("div",{className:_.a.centerOnMobile},E(["".concat(t," ").concat(o),"".concat(v," - ").concat(g)])),l&&r.a.createElement("p",null,"Grade: ",l),r.a.createElement("div",{className:_.a.jobContent},m&&r.a.createElement("h4",{style:{marginBottom:2,marginTop:8}},"Description"),null===m||void 0===m?void 0:m.map((function(e,a){return r.a.createElement("p",{key:a},e)}))),r.a.createElement("div",{className:_.a.jobContent},n&&r.a.createElement("h4",{style:{marginBottom:2,marginTop:8}},"Activities"),null===n||void 0===n?void 0:n.map((function(e,a){return r.a.createElement("p",{key:a},e)}))))))})):r.a.createElement("div",{className:"card__body ".concat(_.a.innerCardBody)},r.a.createElement("hr",{style:{marginTop:12}}),r.a.createElement("h3",{style:{margin:"auto"}},"Add education histories and it'll appear here!")))))},f=function(e){var a=e.skills;return r.a.createElement("div",{className:_.a.root,id:"skills"},r.a.createElement("div",{className:"card ".concat(_.a.cardBody)},r.a.createElement("div",{className:"card__header margin--auto"},r.a.createElement("h3",{style:{fontSize:36,marginTop:8,marginBottom:0}},"Skills")),r.a.createElement("div",{className:"card__body ".concat(_.a.innerCardBody)},r.a.createElement("hr",{style:{marginTop:12}}),r.a.createElement("div",{style:{margin:"auto",textAlign:"center"}},a.length?a.map((function(e,a){return r.a.createElement("span",{key:a,className:"".concat(_.a.skill," badge badge--secondary")},e)})):r.a.createElement("h3",null,"Add some skills and it'll appear here!")))))},y=function(e){var a=e.proj;return r.a.createElement("div",{className:"col col--4",style:{marginBottom:"1.5rem"}},r.a.createElement("div",{className:"card",style:{backgroundColor:"var(--ifm-color-gray-800)",height:"100%"}},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,a.title)),r.a.createElement("div",{className:"card__body",style:{textAlign:"justify"}},a.description&&a.description.map((function(e,a){return r.a.createElement("p",{key:a},e)}))),a.url&&r.a.createElement("div",{className:"card__footer"},r.a.createElement("a",{href:a.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"button button--secondary button--block"},"See Project")))))},N=function(e){var a=e.projs;return r.a.createElement("div",{className:_.a.root,id:"projects"},r.a.createElement("div",{className:"card ".concat(_.a.cardBody)},r.a.createElement("div",{className:"card__header margin--auto"},r.a.createElement("h3",{style:{fontSize:36,marginTop:8,marginBottom:0}},"Projects")),r.a.createElement("div",{className:"card__body ".concat(_.a.innerCardBody)},r.a.createElement("hr",{style:{marginTop:12}}),r.a.createElement("div",{style:{margin:"auto",textAlign:"center"},className:"row"},a.length?a.map((function(e,a){return r.a.createElement(y,{key:a,proj:e})})):r.a.createElement("h3",{style:{margin:"auto"}},"Add some projects and it'll appear here!")))))},b=t(19),k=t.n(b),C=function(e){var a,t,n=e.profile;return r.a.createElement("div",{className:v.a.heroRoot},r.a.createElement("img",{className:v.a.backgroundImg,src:n.backgroundPicUrl?n.backgroundPicUrl:k.a,alt:"Background"}),r.a.createElement("div",{className:v.a.heroInnerContent},r.a.createElement("div",{className:"avatar avatar--vertical"},r.a.createElement("img",{className:[v.a.profilePic,"avatar__photo"].join(" "),src:n.profilePicUrl,alt:"Profile"}),r.a.createElement("div",{className:"avatar__intro margin-check"},r.a.createElement("h4",{className:"avatar__name"},n.fullName),r.a.createElement("small",null,n.headline),r.a.createElement("small",null,E([null!==(a=n.currentCompany)&&void 0!==a?a:"",null!==(t=n.currentSchool)&&void 0!==t?t:""])),r.a.createElement("small",null,n.location)))))},j=function(e){var a=e.quote;return a.length?r.a.createElement("div",{style:{marginTop:-8},className:"".concat(v.a.announcement,", ").concat(v.a.announcementDark)},r.a.createElement("div",{className:v.a.announcementInner},a.map((function(e,a){return r.a.createElement("p",{key:a},e)})))):r.a.createElement("span",null)},B=function(e){var a,t=e.profile;return r.a.createElement("div",{className:v.a.root,id:"top"},r.a.createElement(C,{profile:t}),r.a.createElement(j,{quote:null!==(a=t.summary)&&void 0!==a?a:[]}),r.a.createElement(p,{poss:t.positions}),r.a.createElement(h,{edus:t.educations}),r.a.createElement(f,{skills:t.skills}),r.a.createElement(N,{projs:t.projects}))},L=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!1),i=Object(c.a)(l,2),s=i[0],u=i[1];return Object(n.useEffect)((function(){var e=window.localStorage.getItem("linkedInProfile");if(e){console.log("got from localStorage");var a=JSON.parse(e);o(a)}else console.log("fetching from json"),fetch("".concat("https://portosaurusdev.github.io/ethansk-00a1e","/linkedInProfile.json")).then((function(e){return e.json()})).then((function(e){o(e)})).catch((function(e){console.error(e),u(!0)}))}),[]),s?r.a.createElement("h3",{style:{textAlign:"center",marginTop:"45vh",fontSize:50}},"Oops... something went wrong!"):r.a.createElement("div",{className:"App"},t?r.a.createElement("div",null,r.a.createElement(m,{fullName:t.fullName}),r.a.createElement(B,{profile:t}),r.a.createElement(d,{contacts:t.contacts})):r.a.createElement("h3",{style:{textAlign:"center",marginTop:"45vh",fontSize:50}},"Loading..."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.834586a3.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7vrA":function(e,t,n){"use strict";var a=n("wx14"),l=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),s=n.n(c),r=n("vUet"),u=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,c=e.as,u=void 0===c?"div":c,d=e.className,h=Object(l.a)(e,["bsPrefix","fluid","as","className"]),p=Object(r.a)(n,"container");return s.a.createElement(u,Object(a.a)({ref:t},h,{className:i()(d,o?p+"-fluid":p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},Le1w:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),o=n("8Kt/"),i=n.n(o),c=n("7vrA"),s=l.a.createElement,r=function(e){var t=e.title,n=e.slug,a=e.height,o=void 0===a?265:a;return s(l.a.Fragment,null,s("p",{className:"codepen","data-height":o,"data-theme-id":"dark","data-default-tab":"result","data-user":"tywmick","data-slug-hash":n,style:{height:o+"px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid",marginBottom:"1em",padding:"1em"},"data-pen-title":t},s("span",null,"See the Pen"," ",s("a",{href:"https://codepen.io/tywmick/pen/"+n},t)," by Ty Mick (",s("a",{href:"https://codepen.io/tywmick"},"@tywmick"),") on"," ",s("a",{href:"https://codepen.io"},"CodePen"),".")))},u=l.a.createElement;t.default=function(){var e=Object(a.useState)(0),t=e[0],n=e[1];return Object(a.useEffect)((function(){n(window.innerHeight)}),[]),u(l.a.Fragment,null,u(i.a,null,u("title",null,"Technical documentation page \u2013 Ty Mick"),u("script",{type:"text/javascript",src:"/vendor/codepen/embed/ei.js"})),u(c.a,{fluid:!0,className:"mt-n3 mb-4 mb-lg-5"},u(r,{title:"Technical documentation page",slug:"EJrmvx",height:.6*t})),u(c.a,null,u("p",{className:"lead font-italic"},"View this app"," ",u("a",{href:"https://codepen.io/tywmick/full/EJrmvx"},"in its own window"),", or view the source on"," ",u("a",{href:"https://github.com/tywmick/technical-documentation-page"},"GitHub")," ","or ",u("a",{href:"https://codepen.io/tywmick/pen/EJrmvx"},"CodePen"),"."),u("h1",null,"Technical documentation page"),u("p",null,"I created this app in fulfillment of"," ",u("a",{href:"https://www.freecodecamp.org/"},"freeCodeCamp"),"'s Responsive Web Design Project"," ",u("a",{href:"https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page/"},"Build a Technical Documentation Page"),", using"," ",u("a",{href:"https://www.w3schools.com/w3css/default.asp"},"W3.CSS"),". I modeled it some after"," ",u("a",{href:"https://codepen.io/freeCodeCamp/pen/RKRbwL"},"their example"),", but I was more inspired more by"," ",u("a",{href:"https://www.w3schools.com"},"W3School"),"'s"," ",u("a",{href:"https://www.w3schools.com/w3css/w3css_sidebar.asp"},"sidebar tutorials"),". It fulfills the following user stories:"),u("ol",null,u("li",null,"I can see a ",u("code",null,"main")," element with a corresponding"," ",u("code",null,'id="main-doc"'),", which contains the page's main content (technical documentation)."),u("li",null,"Within the ",u("code",null,"#main-doc")," element, I can see several"," ",u("code",null,"section")," elements, each with a class of"," ",u("code",null,"main-section"),". There should be a minimum of 5."),u("li",null,"The first element within each ",u("code",null,".main-section")," should be a"," ",u("code",null,"header")," element which contains text that describes the topic of that section."),u("li",null,"Each ",u("code",null,"section")," element with the class of"," ",u("code",null,"main-section")," should also have an id that corresponds with the text of each ",u("code",null,"header")," contained within it. Any spaces should be replaced with underscores (e.g. The"," ",u("code",null,"section"),' that contains the header "JavaScript and Java" should have a corresponding ',u("code",null,'id="JavaScript_and_Java"'),")."),u("li",null,"The ",u("code",null,".main-section")," elements should contain at least 10"," ",u("code",null,"p")," elements total (not each)."),u("li",null,"The ",u("code",null,".main-section")," elements should contain at least 5"," ",u("code",null,"code")," elements total (not each)."),u("li",null,"The ",u("code",null,".main-section")," elements should contain at least 5"," ",u("code",null,"li")," items total (not each)."),u("li",null,"I can see a ",u("code",null,"nav")," element with a corresponding"," ",u("code",null,'id="navbar"'),"."),u("li",null,"The navbar element should contain one ",u("code",null,"header")," element which contains text that describes the topic of the technical documentation."),u("li",null,"Additionally, the navbar should contain link (",u("code",null,"a"),") elements with the class of ",u("code",null,"nav-link"),". There should be one for every element with the class ",u("code",null,"main-section"),"."),u("li",null,"The ",u("code",null,"header")," element in the navbar must come before any link (",u("code",null,"a"),") elements in the navbar."),u("li",null,"Each element with the class of ",u("code",null,"nav-link")," should contain text that corresponds to the ",u("code",null,"header")," text within each"," ",u("code",null,"section"),' (e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world").'),u("li",null,"When I click on a navbar element, the page should navigate to the corresponding section of the ",u("code",null,"main-doc")," element (e.g. If I click on a ",u("code",null,"nav-link"),' element that contains the text "Hello world", the page navigates to a ',u("code",null,"section")," element that has that id and contains the corresponding ",u("code",null,"header"),"."),u("li",null,"On regular sized devices (laptops, desktops), the element with"," ",u("code",null,'id="navbar"')," should be shown on the left side of the screen and should always be visible to the user."),u("li",null,"My Technical Documentation page should use at least one media query."))))}},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,a=n.propTypes,o=n.defaultProps,i=n.allowFallback,c=void 0!==i&&i,s=n.displayName,r=void 0===s?e.name||e.displayName:s,u=function(t,n){return e(t,n)};return Object.assign(l.default.forwardRef||!c?l.default.forwardRef(u):function(e){return u(e,null)},{displayName:r,propTypes:a,defaultProps:o})};var a,l=(a=n("q1tI"))&&a.__esModule?a:{default:a}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=l.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},eneS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/technical-documentation-page",function(){return n("Le1w")}])},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("wx14"),n("QA0p");var a=n("q1tI"),l=n.n(a),o=l.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(a.useContext)(o);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,"a",(function(){return a}))}},[["eneS",0,2,1]]]);
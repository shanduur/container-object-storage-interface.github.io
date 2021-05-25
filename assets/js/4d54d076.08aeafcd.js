(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(a,".").concat(d)]||b[d]||p[d]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(119)),a={title:"Contributing"},c={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"Are you interested in contributing to COSI? We, the maintainers and community, would love your suggestions, contributions, and help! Also, the maintainers can be contacted at any time to learn more about how to get involved.",source:"@site/docs/contributing.md",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/container-object-storage-interface/container-object-storage-interface.github.io/edit/master/docs/contributing.md",version:"current",lastUpdatedBy:"Tejas Parikh",lastUpdatedAt:1621982063,formattedLastUpdatedAt:"5/25/2021",sidebar:"docs",previous:{title:"Supported Kubernetes Releases",permalink:"/docs/kube_release_support"},next:{title:"Architecture",permalink:"/docs/cosi/architecture"}},u=[{value:"Contributing Guidelines",id:"contributing-guidelines",children:[{value:"Getting Started",id:"getting-started",children:[]},{value:"Mentorship",id:"mentorship",children:[]},{value:"Contact Information",id:"contact-information",children:[]}]}],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Are you interested in contributing to COSI? We, the maintainers and community, would love your suggestions, contributions, and help! Also, the maintainers can be contacted at any time to learn more about how to get involved."),Object(i.b)("p",null,'We encourage ALL active community participants to act as if they are maintainers, even if you don\'t have "official" write permissions. This is a community effort, we are here to serve the Kubernetes community. If you have an active interest and you want to get involved, you have real power! Don\'t assume that the only people who can get things done around here are the "maintainers". We also would love to add more "official" maintainers, so show us what you can do!'),Object(i.b)("p",null,"The COSI project is currently in need of maintainers for specific object storage drivers. Ideally each provider would have at least two maintainers. It would be nice if the maintainers run the provider in production, but it is not strictly required. Provider listed here that do not have a maintainer listed are in need of assistance."),Object(i.b)("p",null,"Read the ",Object(i.b)("a",{parentName:"p",href:"#contributing-guidelines"},"contributing guidelines")," and have a look at the contributing docs to learn about building the project, the project structure, and the purpose of each package."),Object(i.b)("h2",{id:"contributing-guidelines"},"Contributing Guidelines"),Object(i.b)("p",null,"Welcome to Kubernetes. We are excited about the prospect of you joining our ",Object(i.b)("a",{parentName:"p",href:"https://git.k8s.io/community"},"community"),"! The Kubernetes community abides by the CNCF ",Object(i.b)("a",{parentName:"p",href:"code-of-conduct.md"},"code of conduct"),". Here is an excerpt:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"As contributors and maintainers of this project, and in the interest of fostering an open and welcoming community, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.")),Object(i.b)("h3",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"We have full documentation on how to get started contributing here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://git.k8s.io/community/CLA.md"},"Contributor License Agreement")," Kubernetes projects require that you sign a Contributor License Agreement (CLA) before we can accept your pull requests"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://git.k8s.io/community/contributors/guide"},"Kubernetes Contributor Guide")," - Main contributor documentation, or you can just jump directly to the ",Object(i.b)("a",{parentName:"li",href:"https://git.k8s.io/community/contributors/guide#contributing"},"contributing section")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://git.k8s.io/community/contributors/guide/contributor-cheatsheet"},"Contributor Cheat Sheet")," - Common resources for existing developers")),Object(i.b)("h3",{id:"mentorship"},"Mentorship"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://git.k8s.io/community/mentoring"},"Mentoring Initiatives")," - We have a diverse set of mentorship programs available that are always looking for volunteers!")),Object(i.b)("h3",{id:"contact-information"},"Contact Information"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.slack.com/messages/sig-storage-cosi"},"Slack")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://groups.google.com/forum/#!forum/kubernetes-sig-storage"},"Mailing List"))))}l.isMDXComponent=!0}}]);
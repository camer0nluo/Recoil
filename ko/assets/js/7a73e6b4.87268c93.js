"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4064],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,i(i({ref:n},s),{},{components:t})):r.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5127:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),i=["components"],o={title:"\uc124\uce58"},p=void 0,c={unversionedId:"introduction/installation",id:"introduction/installation",title:"\uc124\uce58",description:"NPM",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/installation.md",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/ko/docs/introduction/installation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/introduction/installation.md",tags:[],version:"current",frontMatter:{title:"\uc124\uce58"},sidebar:"docs",previous:{title:"\uc8fc\uc694 \uac1c\ub150",permalink:"/ko/docs/introduction/core-concepts"},next:{title:"Recoil \uc2dc\uc791\ud558\uae30",permalink:"/ko/docs/introduction/getting-started"}},s=[{value:"NPM",id:"npm",children:[{value:"Bundler",id:"bundler",children:[],level:3},{value:"ES5 \uc9c0\uc6d0",id:"es5-\uc9c0\uc6d0",children:[],level:3}],level:2},{value:"CDN",id:"cdn",children:[],level:2},{value:"ESLint",id:"eslint",children:[],level:2},{value:"Nightly Builds",id:"nightly-builds",children:[],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"npm"},"NPM"),(0,a.kt)("p",null,"Recoil \ud328\ud0a4\uc9c0\ub294 ",(0,a.kt)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"},"npm"),"\uc5d0 \uc874\uc7ac\ud55c\ub2e4. \uc548\uc815\ud654\ub41c \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc124\uce58\ud558\ub824\uba74 \uc544\ub798\uc758 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 \ub41c\ub2e4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install recoil\n")),(0,a.kt)("p",null,"\ub610\ub294 ",(0,a.kt)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),"\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add recoil\n")),(0,a.kt)("h3",{id:"bundler"},"Bundler"),(0,a.kt)("p",null,"Recoil\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," \ub610\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup"),"\uacfc \uac19\uc740 \ubaa8\ub4c8 \ubc88\ub4e4\ub7ec\uc640\ub3c4 \ubb38\uc81c\uc5c6\uc774 \ud638\ud658\ub41c\ub2e4."),(0,a.kt)("h3",{id:"es5-\uc9c0\uc6d0"},"ES5 \uc9c0\uc6d0"),(0,a.kt)("p",null,"Recoil \ube4c\ub4dc\ub294 ES5\ub85c \ud2b8\ub79c\uc2a4\ud30c\uc77c \ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c, Recoil\uc744 ES5\uc640 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4. ES6 \uae30\ub2a5\uc744 natively\ud558\uac8c \uc81c\uacf5\ud558\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\ub97c \uc9c0\uc6d0\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel"),"\ub85c \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud558\uace0 preset ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"@babel/preset-env"),"\uc744 \uc774\uc6a9\ud558\uc5ec \uc774\ub97c \uc218\ud589\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,a.kt)("p",null,"\ud2b9\ud788, ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/javascript-environment-requirements.html"},"React\uc640 \uac19\uc774"),", Recoil\uc740 ES6\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," \ud0c0\uc785\uc5d0 \uc758\uc874\ud558\ub294\ub370, \uc774\ub7ec\ud55c ES6\uc758 \uc694\uc18c\ub4e4\uc744 polyfills\ub97c \ud1b5\ud574 \uc5d0\ubbac\ub808\uc774\uc158\ud558\ub294 \uac83\uc740 \uc131\ub2a5\uc0c1\uc758 \ubb38\uc81c\ub97c \uc57c\uae30\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"cdn"},"CDN"),(0,a.kt)("p",null,"\ubc84\uc804 0.0.11 \uc774\ud6c4, Recoil\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," \ud0dc\uadf8\uc5d0 \uc9c1\uc811 \uc0ac\uc6a9\ub420 \uc218 \uc788\ub294 UMD \ube4c\ub4dc\ub97c \uc81c\uacf5\ud558\uba70 ",(0,a.kt)("inlineCode",{parentName:"p"},"Recoil")," \uc2ec\ubcfc\uc744 \uae00\ub85c\ubc8c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \ub178\ucd9c\uc2dc\ud0a8\ub2e4. \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c\ubd80\ud130 \uc608\uae30\uce58 \uc54a\uc740 \uc190\uc0c1\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc548\uc815\ub41c \ud2b9\uc815 \ubc84\uc804 \ubc88\ud638 \ubc0f \ube4c\ub4dc\uc5d0 \uc5f0\uacb0\uc2dc\ud0a4\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/recoil@0.0.11/umd/recoil.production.js"><\/script>\n')),(0,a.kt)("p",null,"CDN\uc758 \ubaa8\ub4e0 Recoil \ud30c\uc77c\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/recoil"},"jsdelivr"),"\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"eslint"},"ESLint"),(0,a.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"eslint-plugin-react-hooks"),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0. \uc608\ub97c \ub4e4\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc774 eslint \uc124\uc815\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// \uc774\uc804\uc758 .eslint \uc124\uc815\n{\n  "plugins": ["react-hooks"],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": "warn"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"docs/api-reference/core/useRecoilCallback"},(0,a.kt)("inlineCode",{parentName:"a"},"'useRecoilCallback'")),"\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalHooks")," \ubaa9\ub85d\uc5d0 \ucd94\uac00\ud558\ub294 \uac83\uc774 \uc88b\ub2e4. \uc774\ub97c \ucd94\uac00\ud558\uba74, ESLint\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"useRecoilCallback()"),"\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc804\ub2ec\ub41c \uc885\uc18d\uc131\uc774 \uc798\ubabb \uc9c0\uc815\ub418\uc5c8\uc744 \ub54c \uacbd\uace0\ub97c \ud45c\uc2dc\ud558\uace0 \ud574\uacb0 \ubc29\uc548\uc744 \uc81c\uc2dc\ud55c\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalHooks"),"\uc758 \ud615\uc2dd\uc740 \uc815\uaddc\uc2dd(regex) \ubb38\uc790\uc5f4\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// \uc218\uc815\ub41c .eslint \uc124\uc815\n{\n  "plugins": ["react-hooks"],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": [\n      "warn",\n      {\n        "additionalHooks": "useRecoilCallback"\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h2",{id:"nightly-builds"},"Nightly Builds"),(0,a.kt)("p",null,"\uc6b0\ub9ac\ub294 \ub9e4\uc77c \ud55c \ubc88\uc529 \ud604\uc7ac\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \ube0c\ub79c\uce58\uc5d0 \uae30\ubc18\ud558\uc5ec \ud328\ud0a4\uc9c0\ub97c \ube4c\ub4dc\ud558\uace0 GitHub\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"nightly")," \ube0c\ub79c\uce58\ub85c \ubc30\ud3ec\ud55c\ub2e4. \uc544\ub798\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"nightly")," \ube0c\ub79c\uce58\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install https://github.com/facebookexperimental/Recoil.git#nightly\n")),(0,a.kt)("p",null," \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add https://github.com/facebookexperimental/Recoil.git#nightly\n")),(0,a.kt)("p",null,"  \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \ud30c\uc77c\uc5d0 \uc885\uc18d\uc131\uc744 \ucd94\uac00\ud55c \ub4a4, ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uba74 \ub41c\ub2e4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  "recoil": "facebookexperimental/Recoil.git#nightly",\n')))}d.isMDXComponent=!0}}]);
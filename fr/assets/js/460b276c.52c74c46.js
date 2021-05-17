(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),c=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?l.a.createElement(b,o(o({ref:t},i),{},{components:n})):l.a.createElement(b,o({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<a;i++)s[i]=n[i];return l.a.createElement.apply(null,s)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(3),l=n(8),a=(n(0),n(151)),s={title:"selector(options)",sidebar_label:"selector()"},o={unversionedId:"api-reference/core/selector",id:"api-reference/core/selector",isDocsHomePage:!1,title:"selector(options)",description:'Les s\xe9lecteurs repr\xe9sentent une fonction, ou un \xe9tat d\xe9riv\xe9 dans Recoil. Vous pouvez les consid\xe9rer comme similaires \xe0 une "fonction idempotente" ou "pure" sans effets secondaires qui renvoie toujours la m\xeame valeur pour un ensemble donn\xe9 de valeurs de d\xe9pendance. Si seule une fonction get est fournie, le s\xe9lecteur est en lecture seule et renvoie un objet RecoilValueReadOnly. Si un set est \xe9galement fourni, il renvoie un objet RecoilState inscriptible.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/selector.md",slug:"/api-reference/core/selector",permalink:"/fr/docs/api-reference/core/selector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/selector.md",version:"current",sidebar_label:"selector()",sidebar:"docs",previous:{title:"atome(options)",permalink:"/fr/docs/api-reference/core/atom"},next:{title:"class Loadable",permalink:"/fr/docs/api-reference/core/Loadable"}},u=[{value:"D\xe9pendances dynamiques",id:"d\xe9pendances-dynamiques",children:[]},{value:"S\xe9lecteurs inscriptibles",id:"s\xe9lecteurs-inscriptibles",children:[]},{value:"S\xe9lecteurs asynchrones",id:"s\xe9lecteurs-asynchrones",children:[]},{value:"Exemple (synchrone)",id:"exemple-synchrone",children:[]},{value:"Exemple (asynchrone)",id:"exemple-asynchrone",children:[]}],i={toc:u};function c(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Les ",Object(a.b)("em",{parentName:"p"},"s\xe9lecteurs")," repr\xe9sentent une fonction, ou un ",Object(a.b)("strong",{parentName:"p"},"\xe9tat d\xe9riv\xe9"),' dans Recoil. Vous pouvez les consid\xe9rer comme similaires \xe0 une "fonction idempotente" ou "pure" sans effets secondaires qui renvoie toujours la m\xeame valeur pour un ensemble donn\xe9 de valeurs de d\xe9pendance. Si seule une fonction ',Object(a.b)("inlineCode",{parentName:"p"},"get")," est fournie, le s\xe9lecteur est en lecture seule et renvoie un objet ",Object(a.b)("inlineCode",{parentName:"p"},"RecoilValueReadOnly"),". Si un ",Object(a.b)("inlineCode",{parentName:"p"},"set")," est \xe9galement fourni, il renvoie un objet",Object(a.b)("inlineCode",{parentName:"p"}," RecoilState")," inscriptible."),Object(a.b)("p",null,"Recoil g\xe8re les changements d'\xe9tat des atomes et des s\xe9lecteurs pour savoir quand notifier les composants abonn\xe9s \xe0 ce s\xe9lecteur pour qu'ils effectuent un nouveau rendu. Si une valeur d'objet d'un s\xe9lecteur est mut\xe9e directement, il peut le contourner et \xe9viter de notifier correctement les composants abonn\xe9s. Pour aider \xe0 d\xe9tecter les bogues, Recoil g\xe8lera les objets de valeur du s\xe9lecteur en mode d\xe9veloppement."),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function selector<T>({\n  key: string,\n\n  get: ({\n    get: GetRecoilValue\n  }) => T | Promise<T> | RecoilValue<T>,\n\n  set?: (\n    {\n      get: GetRecoilValue,\n      set: SetRecoilState,\n      reset: ResetRecoilState,\n    },\n    newValue: T | DefaultValue,\n  ) => void,\n\n  dangerouslyAllowMutability?: boolean,\n})\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"type ValueOrUpdater<T> = T | DefaultValue | ((prevValue: T) => T | DefaultValue);\ntype GetRecoilValue = <T>(RecoilValue<T>) => T;\ntype SetRecoilState = <T>(RecoilState<T>, ValueOrUpdater<T>) => void;\ntype ResetRecoilState = <T>(RecoilState<T>) => void;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"key")," - Une cha\xeene unique utilis\xe9e pour identifier l'atome en interne. Cette cha\xeene doit \xeatre unique par rapport aux autres atomes et s\xe9lecteurs dans l'ensemble de l'application. Il doit \xeatre stable entre les ex\xe9cutions s'il est utilis\xe9 pour la persistance."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"get")," - Une fonction qui \xe9value la valeur de l'\xe9tat d\xe9riv\xe9. Il peut renvoyer soit une valeur directement, soit une ",Object(a.b)("inlineCode",{parentName:"li"},"Promise")," asynchrone ou un autre atome ou s\xe9lecteur repr\xe9sentant le m\xeame type. Il est pass\xe9 un objet comme premier param\xe8tre contenant les propri\xe9t\xe9s suivantes:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"get")," - une fonction utilis\xe9e pour r\xe9cup\xe9rer les valeurs d'autres atomes / s\xe9lecteurs. Tous les atomes / s\xe9lecteurs pass\xe9s \xe0 cette fonction seront implicitement ajout\xe9s \xe0 une liste de ",Object(a.b)("strong",{parentName:"li"},"d\xe9pendances")," pour le s\xe9lecteur. Si l'une des d\xe9pendances du s\xe9lecteur change, le s\xe9lecteur r\xe9\xe9valuera."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"set?")," - Si cette propri\xe9t\xe9 est d\xe9finie, le s\xe9lecteur retournera l'\xe9tat ",Object(a.b)("strong",{parentName:"li"},"inscriptible"),". Une fonction qui re\xe7oit un objet de rappels en tant que premier param\xe8tre et nouvelle valeur entrante. La valeur entrante peut \xeatre une valeur de type ",Object(a.b)("inlineCode",{parentName:"li"},"T")," ou peut-\xeatre un objet de type ",Object(a.b)("inlineCode",{parentName:"li"},"DefaultValue")," si l'utilisateur r\xe9initialise le s\xe9lecteur. Les rappels incluent:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"get")," - une fonction utilis\xe9e pour r\xe9cup\xe9rer les valeurs d'autres atomes/s\xe9lecteurs. Cette fonction n'abonnera pas le s\xe9lecteur aux atomes/s\xe9lecteurs donn\xe9s."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"set")," - une fonction utilis\xe9e pour d\xe9finir les valeurs de l'\xe9tat Recoil en amont. Le premier param\xe8tre est l'\xe9tat Recoil et le second param\xe8tre est la nouvelle valeur. La nouvelle valeur peut \xeatre une fonction de mise \xe0 jour ou un objet ",Object(a.b)("inlineCode",{parentName:"li"},"DefaultValue")," pour propager les actions de r\xe9initialisation."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - Dans certains cas, il peut \xeatre souhaitable d'autoriser la mutation des objets stock\xe9s dans des s\xe9lecteurs qui ne repr\xe9sentent pas des changements d'\xe9tat. Utilisez cette option pour remplacer le gel des objets en mode d\xe9veloppement.")),Object(a.b)("hr",null),Object(a.b)("p",null,"Un s\xe9lecteur avec une simple d\xe9pendance statique:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => get(myAtom) * 100,\n});\n")),Object(a.b)("h3",{id:"d\xe9pendances-dynamiques"},"D\xe9pendances dynamiques"),Object(a.b)("p",null,"Un s\xe9lecteur en lecture seule a une m\xe9thode ",Object(a.b)("inlineCode",{parentName:"p"},"get")," qui \xe9value la valeur du s\xe9lecteur en fonction des d\xe9pendances. Si l'une de ces d\xe9pendances est mise \xe0 jour, le s\xe9lecteur r\xe9\xe9valuera. Les d\xe9pendances sont d\xe9termin\xe9es dynamiquement en fonction des atomes ou des s\xe9lecteurs que vous utilisez r\xe9ellement lors de l'\xe9valuation du s\xe9lecteur. En fonction des valeurs des d\xe9pendances pr\xe9c\xe9dentes, vous pouvez utiliser dynamiquement diff\xe9rentes d\xe9pendances suppl\xe9mentaires. Recoil mettra automatiquement \xe0 jour le graphique de flux de donn\xe9es actuel afin que le s\xe9lecteur ne soit abonn\xe9 qu'aux mises \xe0 jour de l'ensemble actuel de d\xe9pendances"),Object(a.b)("p",null,"Dans cet exemple, ",Object(a.b)("inlineCode",{parentName:"p"},"mySelector")," d\xe9pendra de l'atome",Object(a.b)("inlineCode",{parentName:"p"}," toggleState")," ainsi que de ",Object(a.b)("inlineCode",{parentName:"p"},"selectorA")," ou de",Object(a.b)("inlineCode",{parentName:"p"}," selectorB")," selon l'\xe9tat de ",Object(a.b)("inlineCode",{parentName:"p"},"toggleState"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const toggleState = atom({key: 'Toggle', default: false});\n\nconst mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => {\n    const toggle = get(toggleState);\n    if (toggle) {\n      return get(selectorA);\n    } else {\n      return get(selectorB);\n    }\n  },\n});\n")),Object(a.b)("h3",{id:"s\xe9lecteurs-inscriptibles"},"S\xe9lecteurs inscriptibles"),Object(a.b)("p",null,"Un s\xe9lecteur bidirectionnel re\xe7oit la valeur entrante en tant que param\xe8tre et peut l'utiliser pour propager les modifications en amont le long du graphe de flux de donn\xe9es. \xc9tant donn\xe9 que l'utilisateur peut d\xe9finir le s\xe9lecteur avec une nouvelle valeur ou r\xe9initialiser le s\xe9lecteur, la valeur entrante est soit du m\xeame type que le s\xe9lecteur repr\xe9sente, soit un objet ",Object(a.b)("inlineCode",{parentName:"p"},"DefaultValue")," qui repr\xe9sente une action de r\xe9initialisation."),Object(a.b)("p",null,"Ce s\xe9lecteur simple enveloppe essentiellement un atome pour ajouter un champ suppl\xe9mentaire. Il passe simplement par les op\xe9rations de d\xe9finition et de r\xe9initialisation de l'atome en amont."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const proxySelector = selector({\n  key: 'ProxySelector',\n  get: ({get}) => ({...get(myAtom), extraField: 'hi'}),\n  set: ({set}, newValue) => set(myAtom, newValue),\n});\n")),Object(a.b)("p",null,"Ce s\xe9lecteur transforme les donn\xe9es, il doit donc v\xe9rifier si la valeur entrante est une ",Object(a.b)("inlineCode",{parentName:"p"},"DefaultValue"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const transformSelector = selector({\n  key: 'TransformSelector',\n  get: ({get}) => get(myAtom) * 100,\n  set: ({set}, newValue) =>\n    set(myAtom, newValue instanceof DefaultValue ? newValue : newValue / 100),\n});\n")),Object(a.b)("h3",{id:"s\xe9lecteurs-asynchrones"},"S\xe9lecteurs asynchrones"),Object(a.b)("p",null,"Les s\xe9lecteurs peuvent \xe9galement avoir des fonctions d'\xe9valuation asynchrones et renvoyer une ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," \xe0 la valeur de sortie. Veuillez consulter ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"ce guide")," pour plus d'informations."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const myQuery = selector({\n  key: 'MyQuery',\n  get: async ({get}) => {\n    return await myAsyncQuery(get(queryParamState));\n  }\n});\n")),Object(a.b)("h3",{id:"exemple-synchrone"},"Exemple (synchrone)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilState, DefaultValue} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelsius = selector({\n  key: 'tempCelsius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) =>\n    set(\n      tempFahrenheit,\n      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32\n    ),\n});\n\nfunction TempCelsius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelsius);\n  const resetTemp = useResetRecoilState(tempCelsius);\n\n  const addTenCelsius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n  const reset = () => resetTemp();\n\n  return (\n    <div>\n      Temp (Celsius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelsius}>Add 10 Celsius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n      <br />\n      <button onClick={reset}>>Reset</button>\n    </div>\n  );\n}\n")),Object(a.b)("h3",{id:"exemple-asynchrone"},"Exemple (asynchrone)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import {selector, useRecoilValue} from 'recoil';\n\nconst myQuery = selector({\n  key: 'MyDBQuery',\n  get: async () => {\n    const response = await fetch(getMyRequestUrl());\n    return response.json();\n  },\n});\n\nfunction QueryResults() {\n  const queryResults = useRecoilValue(myQuery);\n\n  return (\n    <div>\n      {queryResults.foo}\n    </div>\n  );\n}\n\nfunction ResultsSection() {\n  return (\n    <React.Suspense fallback={<div>Loading...</div>}>\n      <QueryResults />\n    </React.Suspense>\n  );\n}\n")),Object(a.b)("p",null,"Veuillez consulter ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"ce guide")," pour des exemples plus complexes."))}c.isMDXComponent=!0}}]);
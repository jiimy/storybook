(self.webpackChunksnow_white_ui=self.webpackChunksnow_white_ui||[]).push([[769],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Configure.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RightArrow:()=>RightArrow,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__.p;__webpack_require__.p;__webpack_require__.p;__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p;const RightArrow=()=>{const _components={path:"path",svg:"svg",...(0,lib.a)()};return(0,jsx_runtime.jsx)(_components.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:(0,jsx_runtime.jsx)(_components.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Style Guide"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"sb-container",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-section-title",children:[(0,jsx_runtime.jsx)(_components.h1,{id:"소개",children:"소개"}),(0,jsx_runtime.jsx)(_components.p,{children:"styled-component + module scss기반의 스토리북 입니다."}),(0,jsx_runtime.jsx)(_components.h1,{id:"사용-가이드",children:"사용 가이드"}),(0,jsx_runtime.jsx)(_components.h2,{id:"설치",children:"설치"}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-node",children:"npm i snow-white-ui styled-components\r\n\n"})}),(0,jsx_runtime.jsx)(_components.h2,{id:"사용",children:"사용"}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Button } from 'snow-white-ui';\r\nimport 'snow-white-ui/build/styles/global.scss'; // npm에 포함된 theme 사용시\n"})}),(0,jsx_runtime.jsx)(_components.h3,{id:"정의된-스타일",children:"정의된 스타일"}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-scss",children:"// snow-white-ui/build/styles/global.scss\r\n:root {\r\n  --sw-primary-color: \r\n}\n"})})]}),(0,jsx_runtime.jsx)(_components.h1,{id:"style-guide",children:"Style Guide"}),(0,jsx_runtime.jsx)(_components.h2,{id:"colors",children:"colors"}),(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"pirmary"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"secondary"}),"\n"]}),(0,jsx_runtime.jsx)(_components.h2,{id:"state",children:"state"}),(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"success"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"warning"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"error"}),"\n"]}),(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"size"}),(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"small"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"medium"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"large"}),"\n"]}),(0,jsx_runtime.jsx)(_components.h2,{id:"style-override-하기",children:"style override 하기"}),(0,jsx_runtime.jsx)(_components.p,{children:"만약 snow-white-ui/build/styles/global.scss 를 연결하여 스타일을 사용중이라면\r\nstyled componenent으로 작성되었기 때문에 props로 전달받은 className으로 지정한 style에 override 되지 않습니다."}),(0,jsx_runtime.jsx)(_components.p,{children:"만약 override 해서 사용하려 한다면 아래의 방법이 있습니다."}),(0,jsx_runtime.jsxs)(_components.ol,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"상위 선택자로 선택하기"}),"\n"]}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-scss",children:"button.btn {\r\n  color: red;\r\n}\n"})}),(0,jsx_runtime.jsx)(_components.p,{children:"css파일상의 우선순위 높은 선택자를 사용해서 지정합니다."}),(0,jsx_runtime.jsxs)(_components.ol,{start:"2",children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"global css 변수 초기화 하기"}),"\n"]}),(0,jsx_runtime.jsx)(_components.p,{children:"root에서 global.css나 global.scss 를 연결하여 기존 npm에서 지정된 global css를 재지정합니다."}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-scss",children:"// snow-white-ui/build/styles/global.scss\r\n:root {\r\n  --sw-primary-color: blue;\r\n}\n"})}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-scss",children:"// 새로 변경할 global.scss \r\n:root {\r\n  --sw-primary-color: red;\r\n}\n"})}),(0,jsx_runtime.jsx)(_components.p,{children:"초기화가 가능한 속성은 아래와 같습니다."}),(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-primary-color"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-secondary-color"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-small-padding"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-success-color"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-warning-color"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-error-color"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-medium-padding"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-large-padding"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-small-font-size"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-medium-font-size"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"sw-large-font-size"}),"\n"]}),"\n"]}),(0,jsx_runtime.jsxs)(_components.ol,{start:"3",children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"!import 추가하기"}),"\n"]}),(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-scss",children:".btn {\r\n  color: red!important;\r\n}\n"})})]}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n  .sb-container {\n    margin-bottom: 48px;\n  }\n\n  .sb-section-title {\n    margin-bottom: 32px;\n  }\n\n \n\n  @media screen and (max-width: 800px) {\n  }\n\n  @media screen and (max-width: 600px) {\n  }\n  "})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
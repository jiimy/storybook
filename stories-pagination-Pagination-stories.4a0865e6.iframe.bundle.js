/*! For license information please see stories-pagination-Pagination-stories.4a0865e6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksnow_white_ui=self.webpackChunksnow_white_ui||[]).push([[51],{"./src/stories/pagination/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoPagingApi:()=>NoPagingApi,PagingApi:()=>PagingApi,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories});var axios=__webpack_require__("./node_modules/axios/lib/axios.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/stories/button/Button.tsx");const pagination_module_pagination="pagination_pagination__+RZOQ",pagination_module_is_select="pagination_is_select__qHoDU";var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pagination=_ref=>{let{theme="auto",isButton=!0,btnRange=10,pageRange=10,currentPage,totalPost,setCurrentPage,className}=_ref;const[currentBtn,setCurrentBtn]=(0,react.useState)(currentPage),EndBtnNumber=Math.ceil(totalPost/pageRange),[renderButton,setRenderButton]=(0,react.useState)(btnRange),btnGroupIndex=Math.ceil(currentBtn/btnRange),[startPage,setStartPage]=(0,react.useState)(1);(0,react.useEffect)((()=>{"auto"!==theme&&setStartPage((btnGroupIndex-1)*btnRange+1)}),[btnGroupIndex,btnRange]),(0,react.useEffect)((()=>{if("auto"!==theme)if(btnRange*pageRange>totalPost){const calc=Math.ceil(totalPost/pageRange);setRenderButton(calc)}else if(setRenderButton(btnRange),Math.ceil(currentBtn/btnRange)===Math.ceil(EndBtnNumber/btnRange)){const residue=Math.ceil((totalPost-btnRange*pageRange)/pageRange);setRenderButton(residue>btnRange?residue-btnRange:residue)}}),[totalPost,btnGroupIndex]),(0,react.useEffect)((()=>{setCurrentPage(currentBtn),"auto"===theme&&(Math.ceil(btnRange/2)<currentBtn&&currentBtn<=EndBtnNumber-Math.ceil(EndBtnNumber/btnRange)&&setStartPage(currentBtn-Math.round(btnRange/2)+1),Math.ceil(btnRange/2)>=currentBtn&&setStartPage(1),EndBtnNumber-renderButton+renderButton/2<currentBtn&&setStartPage(EndBtnNumber-renderButton+1),currentBtn===EndBtnNumber&&setStartPage(EndBtnNumber-btnRange+1))}),[currentBtn]);const StartButton=()=>(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>setCurrentBtn(1),children:"<<"}),EndButton=()=>(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>setCurrentBtn(EndBtnNumber),children:">>"}),PrevButton=()=>(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>setCurrentBtn((prev=>prev-1)),children:"<"}),NextButton=()=>(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>setCurrentBtn((prev=>prev+1)),children:">"});return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:pagination_module_pagination,children:[isButton&&currentBtn>1&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StartButton,{}),(0,jsx_runtime.jsx)(PrevButton,{})]}),(0,jsx_runtime.jsx)("div",{children:Array(renderButton).fill(startPage).map(((_,index)=>(0,jsx_runtime.jsx)(Button.Z,{theme:"secondary",onClick:()=>setCurrentBtn(startPage+index),className:classnames_default()("",{[pagination_module_is_select]:startPage+index===currentBtn}),children:startPage+index},index)))}),isButton&&EndBtnNumber!==currentBtn&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NextButton,{}),(0,jsx_runtime.jsx)(EndButton,{})]})]})})},pagination_Pagination=Pagination;try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"theme - auto, default\n<br/>\n<br/>\nauto: 자동으로 선택한 버튼이 가운데에 위치\n<br/>\ndefault: 버튼이 이동하지 않고, 컨트롤러를 이용해 다음 그룹으로 이동",displayName:"Pagination",props:{theme:{defaultValue:{value:"auto"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"default"'}]}},isButton:{defaultValue:{value:"true"},description:"",name:"isButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(index: number) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},btnRange:{defaultValue:{value:"10"},description:"",name:"btnRange",required:!1,type:{name:"number"}},pageRange:{defaultValue:{value:"10"},description:"",name:"pageRange",required:!1,type:{name:"number"}},totalPost:{defaultValue:null,description:"",name:"totalPost",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/stories/pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}const Pagination_stories={title:"Component/Pagination",component:pagination_Pagination,parameters:{},tags:["autodocs"],argTypes:{}},PagingApi={args:{isButton:!0,theme:"default",className:"",btnRange:10,pageRange:10,totalPost:112},render:function Render(args){const[post,setPosts]=(0,react.useState)([]),[index,setIndex]=(0,react.useState)(1);return(0,react.useEffect)((()=>{axios.Z.get("https://jsonplaceholder.typicode.com/photos?_page=".concat(index,"&_limit=").concat(10)).then((res=>{setPosts(res.data),console.log("data:",res.data)}))}),[index]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(pagination_Pagination,{theme:args.theme,totalPost:args.totalPost,setCurrentPage:setIndex,currentPage:index,btnRange:10})})}},NoPagingApi={args:{isButton:!0,theme:"auto",className:"",btnRange:5,pageRange:10,totalPost:112},render:function Render(args){const[post,setPosts]=(0,react.useState)([]),[index,setIndex]=(0,react.useState)(1);return(0,react.useEffect)((()=>{axios.Z.get("https://jsonplaceholder.typicode.com/todos").then((res=>{setPosts(1===index?res.data.slice(index-1,10*index):res.data.slice(10*(index-1),10*index))}))}),[index]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(pagination_Pagination,{theme:args.theme,totalPost:args.totalPost,setCurrentPage:setIndex,currentPage:index,btnRange:args.btnRange})})}};PagingApi.parameters={...PagingApi.parameters,docs:{...PagingApi.parameters?.docs,source:{originalSource:"{\n  args: {\n    isButton: true,\n    theme: 'default',\n    className: '',\n    btnRange: 10,\n    pageRange: 10,\n    totalPost: 112\n  },\n  render: function Render(args) {\n    const [post, setPosts] = useState([]); // 넘겨줄 데이터의 length\n    const [index, setIndex] = useState(1);\n    const viewPageCount = 10;\n\n    // 1. 페이징 처리가 안되어있는 api 일 경우\n    useEffect(() => {\n      // console.log('dindex', index);\n      axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=${viewPageCount}`).then(res => {\n        setPosts(res.data);\n        console.log('data:', res.data);\n      });\n    }, [index]);\n    return <>\r\n        <Pagination theme={args.theme} totalPost={args.totalPost} setCurrentPage={setIndex} currentPage={index} btnRange={10} />\r\n      </>;\n  }\n}",...PagingApi.parameters?.docs?.source}}},NoPagingApi.parameters={...NoPagingApi.parameters,docs:{...NoPagingApi.parameters?.docs,source:{originalSource:"{\n  args: {\n    isButton: true,\n    theme: 'auto',\n    className: '',\n    btnRange: 5,\n    pageRange: 10,\n    totalPost: 112\n  },\n  render: function Render(args) {\n    const [post, setPosts] = useState([]); // 넘겨줄 데이터의 length\n    const [index, setIndex] = useState(1);\n    const viewPageCount = 10;\n\n    // 1. 페이징 처리가 안되어있는 api 일 경우\n    useEffect(() => {\n      axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {\n        // index === 1 && setPosts(res.data.slice(index, index * viewPageCount))\n        index === 1 ? setPosts(res.data.slice(index - 1, index * viewPageCount)) : setPosts(res.data.slice((index - 1) * 10, index * 10));\n      });\n    }, [index]);\n    return <>\r\n        <Pagination theme={args.theme} totalPost={args.totalPost} setCurrentPage={setIndex} currentPage={index} btnRange={args.btnRange} />\r\n      </>;\n  }\n}",...NoPagingApi.parameters?.docs?.source}}};const __namedExportsOrder=["PagingApi","NoPagingApi"]},"./src/stories/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");__webpack_require__("./node_modules/react/index.js");const button_module_button="button_button__bhuPM";var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonStyle=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  ","\n\n  ","\n  ","\n\n  ","\n  ","\n  ","\n"])),(props=>props.full&&(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    width: 100%;\n    text-align: center;\n  "])))),(props=>"primary"===props.theme&&(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    background: var(--sw-primary-color);\n    color: var(--sw-white);\n  "])))),(props=>"secondary"===props.theme&&(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    background: var(--sw-secondary-color);\n    color: var(--sw-white);\n  "])))),(props=>"small"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    font-size: var(--sw-small-font-size);\n    padding: var(--sw-small-padding);\n  "])))),(props=>"medium"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    font-size: var(--sw-medium-font-size);\n    padding: var(--sw-medium-padding);\n  "])))),(props=>"large"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    font-size: var(--sw-large-font-size);\n    padding: var(--sw-large-padding);\n  "]))))),Button=_ref=>{let{theme="primary",size="medium",onClick,full,className,children}=_ref;return(0,jsx_runtime.jsx)(ButtonStyle,{theme,size,full,onClick,className:"".concat(button_module_button," ").concat(className),children})},button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLButtonElement>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
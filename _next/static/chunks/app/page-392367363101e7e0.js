(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{278:function(e,t,l){Promise.resolve().then(l.bind(l,531)),Promise.resolve().then(l.t.bind(l,98,23)),Promise.resolve().then(l.bind(l,7701)),Promise.resolve().then(l.bind(l,5463)),Promise.resolve().then(l.bind(l,1845)),Promise.resolve().then(l.bind(l,7388)),Promise.resolve().then(l.bind(l,6016)),Promise.resolve().then(l.t.bind(l,5935,23))},531:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return s}});var n=l(7437),a=l(4983);function s(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4126261814359480","data-ad-slot":"5536762597","data-ad-format":"auto","data-full-width-responsive":"true"}),(0,n.jsx)(a.default,{strategy:"afterInteractive",children:"\n        (adsbygoogle = window.adsbygoogle || []).push({});\n      "})]})}},7701:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var n=l(7437),a=l(8024),s=l(7535),r=l(2265);function i(){let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{function e(){window.scrollY>1e3?t(!0):t(!1)}return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{color:"var(--gray500)",border:"1px solid var(--gray300)"},className:"w-8 h-8 fixed bottom-20 right-10 z-50 bg-white rounded-md border",children:(0,n.jsx)(a.G,{icon:s.FPD,className:"text-sm"})})})}},5463:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return O}});var n=l(7437),a=l(2265);function s(e){return[{content:"높은순 정렬",value:""},{content:"이름",value:"name"},...e.map(e=>({content:e.kor,value:e.val}))]}function r(e,t){let l=e.filter(e=>"number"==typeof e[t]).sort((e,l)=>(l[t]||0)-(e[t]||0)),n=0;return l.length>=7?n=Number(l[6][t]):l.length>0&&(n=Number(l[l.length-1][t])),n}function i(e){return e.map(e=>{let t={};for(let l in e)null!==e[l]&&(t[l]=e[l]);return t})}var o=l(8024),c=l(7535),d=l(98),u=l.n(d);function h(e){let{children:t,title:l,id:s}=e,[r,i]=(0,a.useState)(!1);return(0,n.jsxs)("section",{id:s,className:"".concat(u().common_component," mx-auto"),children:[l&&(0,n.jsxs)("div",{className:"".concat(u().head),children:[(0,n.jsx)("h3",{className:"".concat(u().title),children:null!=l?l:""}),(0,n.jsx)("button",{onClick:()=>{i(!r)},children:(0,n.jsx)(o.G,{icon:r?c.gc2:c.onQ})})]}),!r&&t]})}function m(e){let{children:t,...l}=e;return(0,n.jsx)("button",{...l,children:t})}var x=l(1780),p=l.n(x);function f(e){let{id:t="",className:l="",value:a="",placeholder:s,type:r="text",onChange:i}=e,o=e=>{i&&i(e)};return(0,n.jsx)("div",{className:l,children:(0,n.jsx)("input",{id:t,type:r,value:a,onWheel:e=>e.currentTarget.blur(),placeholder:s,className:"px-2 py-1 rounded-md border border-gray-300 outline-none text-base leading-normal w-full placeholder-gray-700::placeholder",onChange:e=>o(e.target.value)})})}let v={kor:"내파",val:"nae",placeholder:null},j={kor:"쇄빙",val:"swe",placeholder:null},g={kor:"돌파",val:"dol",placeholder:null},b={ship:[{kor:"선원 수",val:"crew",placeholder:null},{kor:"최소 선원 수",val:"minCrew",placeholder:null},{kor:"내구도",val:"durability",placeholder:null},{kor:"적재량",val:"loadedQuantity",placeholder:null},j,g,{kor:"조력",val:"rowing",placeholder:null},v,{kor:"세로돛",val:"verticalSail",placeholder:null},{kor:"가로돛",val:"horizontalSail",placeholder:null},{kor:"능력치 1",val:"stat1",placeholder:"포격, 백병 위력 등"},{kor:"능력치 2",val:"stat2",placeholder:"포격, 백병 위력 등"},{kor:"능력치 3",val:"stat3",placeholder:"포격, 백병 위력 등"}],armor:[v],ram:[j,g],anchor:[v,j,g],special:[v,j,g],figurehead:[j,g]};var y=l(3449);function w(e){let{id:t,label:l,checked:a,onChange:s}=e;return(0,n.jsxs)("div",{className:"inline-flex items-center",children:[(0,n.jsx)("input",{type:"checkbox",id:t,checked:a,onChange:e=>{s(e.target.checked)},className:"sr-only"}),(0,n.jsxs)("label",{htmlFor:t,className:"inline-flex items-center cursor-pointer rounded-full px-3 py-1",style:{backgroundColor:a?"var(--main500)":""},children:[(0,n.jsx)(o.G,{icon:a?y.a3n:y.pL1,className:"mr-1 ".concat(a?"text-white":"text-gray-600")}),(0,n.jsx)("span",{className:"text-sm ".concat(a?"text-white":"text-gray-600"),children:l})]})]})}let S=["#55355c","#6c3453","#7c3645","#833f34","#804d26","#755c1d","#626b22","#467837"];function _(e){let{backgroundColor:t,children:l}=e;return t=null!=t?t:S[Number(l)%8],(0,n.jsx)("div",{className:"inline-flex rounded-md items-center m-0.5 px-2 py-0.5 text-xs text-white",style:{backgroundColor:"".concat(t)},children:l})}function N(e){let{option:t,index:l,onChange:a}=e,s=e=>{let{index:l,key:n,value:s}=e;t[n]=s,a(t,l)},r=b[t.kind];return(0,n.jsxs)("li",{className:p().item,style:"ship"===t.kind||t.isMount?{}:{borderStyle:"dashed"},children:[(0,n.jsxs)("section",{className:p().menu,children:[(0,n.jsx)("div",{className:"flex pr-5",children:(0,n.jsx)(w,{id:"".concat(t.kind,"_isUse_").concat(l),label:"".concat(t.isUse?"사용":"대기"),checked:t.isUse,onChange:e=>s({index:l,key:"isUse",value:e})})}),(0,n.jsx)("div",{className:"inline-flex items-center",children:(0,n.jsx)(m,{onClick:()=>{confirm("[".concat(t.name,"]을 삭제할까요?"))&&(t.isDelete=!0,a(t,l))},children:(0,n.jsx)(o.G,{icon:c.I7k,className:"text-gray-500"})})})]}),(0,n.jsxs)("section",{className:p().label,children:[t.isMount&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{backgroundColor:"var(--red500)",children:"#장착"}),(0,n.jsx)("br",{})]}),t.isNaeMin&&(0,n.jsx)(_,{backgroundColor:"var(--yellow700)",children:"내파 T7"}),t.isDolMin&&(0,n.jsx)(_,{backgroundColor:"var(--green700)",children:"돌파 T7"}),t.isSweMin&&(0,n.jsx)(_,{backgroundColor:"var(--blue600)",children:"쇄빙 T7"}),"ship"===t.kind&&(0,n.jsx)(_,{children:t.id})]}),(0,n.jsxs)("section",{className:p().head,children:[(0,n.jsx)("div",{className:p().icon,children:(()=>{switch(t.kind){case"armor":return(0,n.jsx)(o.G,{icon:c.isG});case"anchor":return(0,n.jsx)(o.G,{icon:c.SJR});case"figurehead":return(0,n.jsx)(o.G,{icon:c.SPn});case"ram":return(0,n.jsx)(o.G,{icon:c.o9Z});case"special":return(0,n.jsx)(o.G,{icon:c.Tab});default:return(0,n.jsx)(o.G,{icon:c.bkI})}})()}),(0,n.jsx)("div",{className:p().name,children:(0,n.jsx)(f,{id:"".concat(t.kind,"_name_").concat(l),value:t.name,className:p().input,placeholder:"선박 이름",onChange:e=>s({index:l,key:"name",value:e})})})]}),(0,n.jsx)("section",{className:p().body,children:r.map(e=>{var a,r;return(0,n.jsxs)("div",{className:p().stat_row,children:[(0,n.jsx)("label",{htmlFor:"".concat(t.kind,"_").concat(e.val,"_").concat(l),children:e.kor}),(0,n.jsx)(f,{type:"number",id:"".concat(t.kind,"_").concat(e.val,"_").concat(l),className:p().input,value:String(null!==(a=t[e.val])&&void 0!==a?a:""),placeholder:"".concat(null!==(r=e.placeholder)&&void 0!==r?r:"".concat(e.kor," 입력")),onChange:t=>s({index:l,key:e.val,value:Number(t)})})]},e.val)})})]})}function k(e){let{useItem:t,changeUseItem:l,addUseItem:a,kind:s}=e;return!function(e){let t=0,l=r(e,"nae"),n=r(e,"dol"),a=r(e,"swe");e.forEach((e,s)=>{e.isMount=!1,e.isNaeMin=!1,e.isDolMin=!1,e.isSweMin=!1,"ship"!==e.kind&&(e.isUse&&++t<=7&&(e.isMount=!0),e.nae&&e.nae>=l&&e.nae>0&&(e.isNaeMin=!0),e.dol&&e.dol>=n&&e.dol>0&&(e.isDolMin=!0),e.swe&&e.swe>=a&&e.swe>0&&(e.isSweMin=!0)),"ship"===e.kind&&(e.id=s+1)})}(t),(0,n.jsx)("div",{className:"".concat(p().wrap),children:(0,n.jsxs)("ul",{className:"".concat(p().list),children:[t.map((e,t)=>(0,n.jsx)(N,{index:t,option:e,onChange:l},t)),(0,n.jsx)("li",{className:"".concat(p().item," ").concat(p().add),children:(0,n.jsxs)(m,{onClick:()=>a(s),children:[(0,n.jsx)(o.G,{icon:c.r8p,className:"mr-2 text-lg"}),(0,n.jsx)("span",{className:"text-lg font-semibold",children:"추가"})]})})]})})}function C(e){var t;let{options:l,onSelect:s,selectedValue:r}=e,[i,d]=(0,a.useState)(null!=r?r:null),[u,h]=(0,a.useState)(!1),m=e=>{d(e),s(e),h(!1)};return(0,n.jsxs)("div",{className:"relative w-full text-left",children:[(0,n.jsxs)("button",{type:"button",className:"flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-300 focus:outline-none","aria-haspopup":"true","aria-expanded":u?"true":"false",onClick:()=>h(!u),children:[(0,n.jsx)("span",{className:"text-sm",children:null===(t=l.find(e=>e.value===i))||void 0===t?void 0:t.content}),(0,n.jsx)(o.G,{icon:c.eW2,className:"ml-3 ".concat(u?"transform rotate-180":"")})]}),u&&(0,n.jsx)("div",{className:"origin-top-right absolute right-0 mt-1 w-full rounded-md shadow-lg bg-white z-50",children:(0,n.jsx)("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:l.map((e,t)=>(0,n.jsx)("button",{onClick:()=>m(e.value),className:"whitespace-nowrap block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 hover:text-gray-900 focus:outline-none",role:"menuitem",children:e.content},t))})})]})}async function F(){return new Promise((e,t)=>{let l=window.indexedDB.open("dhoCalDB",1);l.onerror=()=>{console.error("Failed to open database"),t(l.error)},l.onsuccess=()=>{e(l.result)},l.onupgradeneeded=e=>{e.target.result.createObjectStore("useData",{keyPath:"id",autoIncrement:!0}).createIndex("by_kind","kind",{unique:!1})}})}async function I(e){let t=(await F()).transaction(["useData"],"readwrite").objectStore("useData").put(e);return new Promise((e,l)=>{t.onerror=()=>{console.error("Failed to save data"),l(t.error)},t.onsuccess=()=>{console.log("Data saved successfully"),e()}})}async function D(){let e=(await F()).transaction(["useData"],"readonly").objectStore("useData").getAll();return new Promise((t,l)=>{e.onerror=()=>{console.error("Failed to get data"),l(e.error)},e.onsuccess=()=>{t(e.result)}})}async function P(){try{let e=await D();if(0===e.length)return console.log("저장된 데이터가 없습니다."),null;let t=e[0];for(let l of e)l.id>t.id&&(t=l);return t}catch(e){return console.error("마지막 데이터 가져오기 실패:",e),null}}var A=l(946);let U=e=>{let{onClick:t,icon:l,text:a}=e;return(0,n.jsxs)("button",{onClick:t,className:"flex items-center py-2 px-3 mx-1 bg-white rounded-md focus:outline-none",style:{backgroundColor:"var(--main800)"},children:[(0,n.jsx)(o.G,{icon:l}),(0,n.jsx)("span",{className:"ml-2 text-sm",children:a})]})};function z(e){let{calculate:t,save:l,useCode:a,deleteAll:s}=e,r=()=>{let e=document.getElementById("result_table");e&&e.scrollIntoView()};return(0,n.jsxs)("section",{style:{borderTop:"1px solid var(--gray200)",minWidth:300,zIndex:999},className:"fixed bottom-0 text-white left-0 w-full bg-white px-2 py-3 flex justify-end",children:[(0,n.jsx)(U,{onClick:()=>{r(),t(),(0,A.Nf)({event:"click_calculate",eventCategory:"fleet"})},icon:c.lTt,text:"계산"}),(0,n.jsx)(U,{onClick:()=>{l(),(0,A.Nf)({event:"click_save",eventCategory:"fleet"})},icon:c.r6l,text:"저장"}),(0,n.jsx)(U,{onClick:()=>{a(),(0,A.Nf)({event:"click_useCode",eventCategory:"fleet"})},icon:c.dT$,text:"코드 사용"}),(0,n.jsx)("div",{className:"hidden md:flex",children:(0,n.jsx)(U,{onClick:()=>{s(),(0,A.Nf)({event:"click_deleteAll",eventCategory:"fleet"})},icon:c.d8e,text:"초기화"})})]})}function E(e){let{onApply:t,onClose:l,initText:s=""}=e,[r,i]=(0,a.useState)(s),o=async()=>{try{await navigator.clipboard.writeText(r),alert("코드가 복사되었습니다. 내용에 붙여넣으면 함대구성을 불러옵니다.")}catch(e){console.error("텍스트 복사 중 오류가 발생했습니다:",e)}};return(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center",style:{zIndex:51},children:(0,n.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md",style:{maxWidth:"800px",width:"90%",maxHeight:"90%",overflow:"auto"},children:[(0,n.jsx)("div",{children:(0,n.jsx)("p",{style:{lineHeight:1.4},children:"- 현재 코드를 지우고 이전에 저장한 코드를 불러와서 [적용]하면 해당 하는 함대구성을 불러옵니다."})}),(0,n.jsx)("textarea",{className:"w-full text-sm border border-gray-300 rounded-lg p-2 mt-4 mb-4  focus:outline-none focus:outline-blue-500",style:{height:"400px",lineHeight:"1.4"},value:r,onChange:e=>{i(e.target.value)},placeholder:"내용을 비우면 함대구성이 전체 삭제 됩니다.",autoFocus:!0}),(0,n.jsxs)("div",{className:"flex justify-end",children:[(0,n.jsx)("button",{onClick:()=>{t(r)},className:"px-4 py-2 text-white rounded-lg mr-1",style:{backgroundColor:"var(--main500)"},children:"적용"}),(0,n.jsx)("button",{onClick:o,className:"px-4 py-2 text-white rounded-lg mr-1",style:{backgroundColor:"var(--green500)"},children:"복사"}),(0,n.jsx)("button",{onClick:l,className:"px-4 py-2 bg-gray-300 text-gray-500 rounded-lg",children:"닫기"})]})]})})}function G(e){let{postFleetData:t}=e,[l,r]=(0,a.useState)(!1),[o,c]=(0,a.useState)({ship:0,armor:0,anchor:0,ram:0,special:0,figurehead:0}),[d,u]=(0,a.useState)([]),[m,x]=(0,a.useState)([]),[p,f]=(0,a.useState)([]),[v,j]=(0,a.useState)([]),[g,y]=(0,a.useState)([]),[w,S]=(0,a.useState)([]),[_,N]=(0,a.useState)(!1),[F,D]=(0,a.useState)("");(0,a.useEffect)(()=>{P().then(e=>{A(e),r(!0)}).catch(e=>{r(!0)})},[]),(0,a.useEffect)(()=>{T()},[l]);let A=e=>{u(e.useShips||[]),x(e.useArmors||[]),f(e.useRams||[]),j(e.useAnchor||[]),y(e.useSpecial||[]),S(e.useFigurehead||[]),c({ship:e.useShips?e.useShips.length:0,armor:e.useArmors?e.useArmors.length:0,ram:e.useRams?e.useRams.length:0,anchor:e.useAnchor?e.useAnchor.length:0,special:e.useSpecial?e.useSpecial.length:0,figurehead:e.useFigurehead?e.useFigurehead.length:0})},U=e=>{let t,l;let n="";switch(e){case"armor":t=[...m],l=x,n="장갑";break;case"ram":t=[...p],l=f,n="충각";break;case"anchor":t=[...v],l=j,n="닻";break;case"figurehead":t=[...w],l=S,n="선수상";break;case"special":t=[...g],l=y,n="특수";break;default:t=[...d],l=u,n="선박"}return{newUseItem:t,setUseItem:l,korLang:n}},G=e=>{var t,l,n,a,s,r,i,d,u,h,m,x,p,f,v,j,g;let{newUseItem:b,setUseItem:y,korLang:w}=U(e),S={name:null!==(l=(t={name:"".concat(o[e]+1,"번 ").concat(w),kind:e}).name)&&void 0!==l?l:"",kind:null!==(n=t.kind)&&void 0!==n?n:"ship",crew:null!==(a=t.crew)&&void 0!==a?a:null,minCrew:null!==(s=t.minCrew)&&void 0!==s?s:null,durability:null!==(r=t.durability)&&void 0!==r?r:null,loadedQuantity:null!==(i=t.loadedQuantity)&&void 0!==i?i:null,swe:null!==(d=t.swe)&&void 0!==d?d:null,dol:null!==(u=t.dol)&&void 0!==u?u:null,rowing:null!==(h=t.rowing)&&void 0!==h?h:null,nae:null!==(m=t.nae)&&void 0!==m?m:null,verticalSail:null!==(x=t.verticalSail)&&void 0!==x?x:null,horizontalSail:null!==(p=t.horizontalSail)&&void 0!==p?p:null,stat1:null!==(f=t.stat1)&&void 0!==f?f:null,stat2:null!==(v=t.stat2)&&void 0!==v?v:null,stat3:null!==(j=t.stat3)&&void 0!==j?j:null,isUse:null===(g=t.isUse)||void 0===g||g};c(t=>({...t,[e]:(t[e]||0)+1})),b.push(S),y(b)},M=(e,t)=>{let{newUseItem:l,setUseItem:n}=U(e.kind);e.isDelete?l.splice(t,1):l[t]=e,n(l)},Q=(e,t)=>{if(""===e)return;let{newUseItem:l,setUseItem:n}=U(t);n("name"===e?l.sort((t,l)=>t[e].localeCompare(l[e])):l.sort((t,l)=>(l[e]||0)-(t[e]||0)))},T=()=>{t({useShips:d,useArmors:m,useRams:p,useAnchor:v,useSpecial:g,useFigurehead:w})};return l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{calculate:T,save:()=>{I({useShips:i(d),useArmors:i(m),useRams:i(p),useAnchor:i(v),useSpecial:i(g),useFigurehead:i(w)}),alert("웹 브라우저에 저장되었습니다.")},useCode:()=>{D(JSON.stringify({useShips:i(d),useArmors:i(m),useRams:i(p),useAnchor:i(v),useSpecial:i(g),useFigurehead:i(w)})),N(!0)},deleteAll:()=>{confirm("전체 초기화 하시겠습니까?")&&(u([]),x([]),f([]),j([]),y([]),S([]))}}),(0,n.jsx)(h,{title:"선박 입력",children:(0,n.jsx)(k,{useItem:d,addUseItem:G,changeUseItem:M,kind:"ship"})}),(0,n.jsxs)(h,{title:"장갑 입력",children:[(0,n.jsx)("div",{className:"flex justify-end py-1 px-2",children:(0,n.jsx)("div",{className:"w-40",children:(0,n.jsx)(C,{options:s(b.armor),selectedValue:"",onSelect:e=>Q(e,"armor")})})}),(0,n.jsx)(k,{useItem:m,addUseItem:G,changeUseItem:M,kind:"armor"})]}),(0,n.jsxs)(h,{title:"충각 입력",children:[(0,n.jsx)("div",{className:"flex justify-end py-1 px-2",children:(0,n.jsx)("div",{className:"w-40",children:(0,n.jsx)(C,{options:s(b.ram),selectedValue:"",onSelect:e=>Q(e,"ram")})})}),(0,n.jsx)(k,{useItem:p,addUseItem:G,changeUseItem:M,kind:"ram"})]}),(0,n.jsxs)(h,{title:"닻 입력",children:[(0,n.jsx)("div",{className:"flex justify-end py-1 px-2",children:(0,n.jsx)("div",{className:"w-40",children:(0,n.jsx)(C,{options:s(b.anchor),selectedValue:"",onSelect:e=>Q(e,"anchor")})})}),(0,n.jsx)(k,{useItem:v,addUseItem:G,changeUseItem:M,kind:"anchor"})]}),(0,n.jsxs)(h,{title:"선수상 입력",children:[(0,n.jsx)("div",{className:"flex justify-end py-1 px-2",children:(0,n.jsx)("div",{className:"w-40",children:(0,n.jsx)(C,{options:s(b.figurehead),selectedValue:"",onSelect:e=>Q(e,"figurehead")})})}),(0,n.jsx)(k,{useItem:w,addUseItem:G,changeUseItem:M,kind:"figurehead"})]}),(0,n.jsxs)(h,{title:"특수 입력",children:[(0,n.jsx)("div",{className:"flex justify-end py-1 px-2",children:(0,n.jsx)("div",{className:"w-40",children:(0,n.jsx)(C,{options:s(b.special),selectedValue:"",onSelect:e=>Q(e,"special")})})}),(0,n.jsx)(k,{useItem:g,addUseItem:G,changeUseItem:M,kind:"special"})]}),_&&(0,n.jsx)(E,{initText:F,onApply:e=>{""===e.trim()&&(e="{}"),A(JSON.parse(e)),N(!1),alert("적용 되었습니다.")},onClose:()=>N(!1)})]}):null}function M(e){let{resultTableData:t,resultShipsParts:l,fleetData:s}=e,[r,i]=(0,a.useState)(null),[d,u]=(0,a.useState)("desc"),[m,x]=(0,a.useState)(!0),[f,v]=(0,a.useState)(0),[j,g]=(0,a.useState)(10);(0,a.useEffect)(()=>{x(!1)},[]);let y=e=>{r===e?u("asc"===d?"desc":"asc"):(i(e),u("desc"))},w=[...t].sort((e,t)=>{if(r){let l=parseFloat(String(e[r])),n=parseFloat(String(t[r]));return isNaN(l)||isNaN(n)?"asc"===d?String(e[r]).localeCompare(String(t[r])):String(t[r]).localeCompare(String(e[r])):"asc"===d?l-n:n-l}return 0}),S=function(e,t){let l=t.map(t=>e.find(e=>e.val===t)).filter(Boolean),n=e.filter(e=>!l.includes(e));return[...l,...n]}(b.ship,["nae","dol","swe","loadedQuantity"]);function N(e){let{columnName:t,columnNameKor:l}=e;return(0,n.jsxs)("th",{className:r===t?p().sorting:"",onClick:()=>y(t),children:[l," ",["nae","swe","dol","durability","verticalSail","horizontalSail","stat1","stat2","stat3"].includes(t)?"(a)":"",r===t?(0,n.jsx)(o.G,{icon:"asc"===d?c.foy:c.u9C,className:"ml-1"}):(0,n.jsx)(o.G,{icon:c.CmM,className:"ml-1"})]})}function k(e){let{value:t}=e;return t>0?(0,n.jsxs)("span",{style:{color:"var(--green500)"},children:["+",t]}):null}return(0,n.jsxs)(h,{id:"result_table",title:"함대 구성",children:[(0,n.jsx)("div",{className:"flex justify-end py-1 px-2",children:(0,n.jsx)("div",{className:"w-40",children:(0,n.jsx)(C,{options:[{value:"",content:"표시 개수"},{value:5,content:5},{value:10,content:10},{value:20,content:20},{value:50,content:50},{value:100,content:100}],selectedValue:"",onSelect:e=>g(Number(e))})})}),(0,n.jsx)("section",{className:p().result_table_wrap,children:!m&&(0,n.jsxs)("table",{className:p().result_table,children:[(0,n.jsxs)("colgroup",{children:[(0,n.jsx)("col",{width:50}),(0,n.jsx)("col",{width:"auto"}),S.map((e,t)=>(0,n.jsx)("col",{width:"minCrew"===e.val?90:70},t))]}),(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{align:"left",children:"순위"}),(0,n.jsx)("th",{align:"left",children:"구성"}),S.map((e,t)=>(0,n.jsx)(N,{columnName:e.val,columnNameKor:e.kor},t))]})}),(0,n.jsx)("tbody",{children:w.length>0?w.slice(0,j).map((e,t)=>(0,n.jsxs)(a.Fragment,{children:[(0,n.jsxs)("tr",{onClick:()=>v(t),children:[(0,n.jsx)("td",{children:t+1}),(0,n.jsx)("td",{children:e.ids.map(e=>(0,n.jsx)(_,{children:e},e))}),S.map((t,l)=>(0,n.jsx)("td",{align:"center",children:e[t.val]},l))]}),t===f&&(0,n.jsx)(n.Fragment,{children:e.ids.map((e,t)=>{let a=s.useShips.find(t=>t.id===e);if(a){var r,i,o;return(0,n.jsxs)("tr",{className:p().result_table_detail,children:[(0,n.jsx)("td",{}),(0,n.jsxs)("td",{className:"flex items-center",children:[(0,n.jsx)(_,{children:e}),(0,n.jsx)("div",{className:"ml-1",children:a.name})]}),(0,n.jsxs)("td",{align:"center",children:[a.nae," ",(0,n.jsx)(k,{value:null!==(r=l.nae[t])&&void 0!==r?r:0})]}),(0,n.jsxs)("td",{align:"center",children:[a.dol," ",(0,n.jsx)(k,{value:null!==(i=l.dol[t])&&void 0!==i?i:0})]}),(0,n.jsxs)("td",{align:"center",children:[a.swe," ",(0,n.jsx)(k,{value:null!==(o=l.swe[t])&&void 0!==o?o:0})]}),(0,n.jsx)("td",{align:"center",children:a.loadedQuantity}),(0,n.jsx)("td",{align:"center",children:a.crew}),(0,n.jsx)("td",{align:"center",children:a.minCrew}),(0,n.jsx)("td",{align:"center",children:a.durability}),(0,n.jsx)("td",{align:"center",children:a.rowing}),(0,n.jsx)("td",{align:"center",children:a.verticalSail}),(0,n.jsx)("td",{align:"center",children:a.horizontalSail}),(0,n.jsx)("td",{align:"center",children:a.stat1}),(0,n.jsx)("td",{align:"center",children:a.stat2}),(0,n.jsx)("td",{align:"center",children:a.stat3})]},e)}})})]},t)):(0,n.jsx)("tr",{children:(0,n.jsx)("td",{align:"left",colSpan:15,children:(0,n.jsx)("span",{style:{color:"var(--gray600)"},children:"데이터가 없습니다."})})})})]})})]})}function Q(e){let t={nae:[],dol:[],swe:[],loadedQuantity:[]};for(let l in e)if("useShips"!==l&&e.hasOwnProperty(l)){let n=e[l],a=0;n.forEach(e=>{if(e.isMount){for(let n in e)if(t.hasOwnProperty(n)){let s=e[n];if("number"==typeof s){var l;t[n][a]=(null!==(l=t[n][a])&&void 0!==l?l:0)+s}}}a++})}return t}function T(e){let{inputData:t}=e,[l,s]=(0,a.useState)(null),[r,i]=(0,a.useState)(Q(t));(0,a.useEffect)(()=>{o()},[t]);let o=()=>{let{useShips:e}=t,l=function(e,t){let l=e.filter(e=>e.isUse);if(0===l.length)return[];if(l.length<t)return[l];let n=[];return!function e(a,s){if(s.length===t){n.push([...s]);return}for(let t=a;t<l.length;t++)s.push(l[t]),e(t+1,s),s.pop()}(0,[]),n}(e,7),n=function(e){let t={nae:0,dol:0,swe:0,loadedQuantity:0};for(let l in e)"useShips"!==l&&e.hasOwnProperty(l)&&e[l].forEach(e=>{if(e.isMount){for(let n in e)if(t.hasOwnProperty(n)){let a=e[n];if("number"==typeof a){var l;t[n]=(null!==(l=t[n])&&void 0!==l?l:0)+a}}}});return t}(t),a=[];l.forEach(e=>{let{naeSum:t,sweSum:l,dolSum:s,loadedQuantitySum:r,crewSum:i,minCrewSum:o,durabilitySum:c,rowingSum:d,verticalSailSum:u,horizontalSailSum:h,stat1Sum:m,stat2Sum:x,stat3Sum:p}=e.reduce((e,t)=>{var l,n,a,s,r,i,o,c,d,u,h,m,x;return{naeSum:e.naeSum+(null!==(l=t.nae)&&void 0!==l?l:0),sweSum:e.sweSum+(null!==(n=t.swe)&&void 0!==n?n:0),dolSum:e.dolSum+(null!==(a=t.dol)&&void 0!==a?a:0),loadedQuantitySum:e.loadedQuantitySum+(null!==(s=t.loadedQuantity)&&void 0!==s?s:0),crewSum:e.crewSum+(null!==(r=t.crew)&&void 0!==r?r:0),minCrewSum:e.minCrewSum+(null!==(i=t.minCrew)&&void 0!==i?i:0),durabilitySum:e.durabilitySum+(null!==(o=t.durability)&&void 0!==o?o:0),rowingSum:e.rowingSum+(null!==(c=t.rowing)&&void 0!==c?c:0),verticalSailSum:e.verticalSailSum+(null!==(d=t.verticalSail)&&void 0!==d?d:0),horizontalSailSum:e.horizontalSailSum+(null!==(u=t.horizontalSail)&&void 0!==u?u:0),stat1Sum:e.stat1Sum+(null!==(h=t.stat1)&&void 0!==h?h:0),stat2Sum:e.stat2Sum+(null!==(m=t.stat2)&&void 0!==m?m:0),stat3Sum:e.stat3Sum+(null!==(x=t.stat3)&&void 0!==x?x:0)}},{naeSum:0,sweSum:0,dolSum:0,loadedQuantitySum:0,crewSum:0,minCrewSum:0,durabilitySum:0,rowingSum:0,verticalSailSum:0,horizontalSailSum:0,stat1Sum:0,stat2Sum:0,stat3Sum:0});a.push({ids:e.map(e=>Number(e.id)),nae:Number(((t+n.nae)/e.length).toFixed(2)),swe:Number(((l+n.swe)/e.length).toFixed(2)),dol:Number(((s+n.dol)/e.length).toFixed(2)),loadedQuantity:r+n.loadedQuantity,crew:i,minCrew:o,durability:Number((c/e.length).toFixed(2)),rowing:d,verticalSail:Number((u/e.length).toFixed(2)),horizontalSail:Number((h/e.length).toFixed(2)),stat1:Number((m/e.length).toFixed(2)),stat2:Number((x/e.length).toFixed(2)),stat3:Number((p/e.length).toFixed(2))})}),s(a),i(Q(t))};return(0,n.jsx)(n.Fragment,{children:l&&t&&(0,n.jsx)(M,{fleetData:t,resultTableData:l,resultShipsParts:r})})}function O(){let[e,t]=(0,a.useState)({useShips:[],useArmors:[],useRams:[],useAnchor:[],useSpecial:[],useFigurehead:[]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(T,{inputData:e}),(0,n.jsx)(G,{postFleetData:e=>{t(e)}})]})}},98:function(e){e.exports={content_header:"components_content_header__RISor",inner:"components_inner__9JA8l",common_component:"components_common_component__i8cRW",head:"components_head__GDvkt",title:"components_title__YE30R"}},1780:function(e){e.exports={wrap:"fleet_wrap__Vz8r_",list:"fleet_list__ufHl_",item:"fleet_item__TAaxz",add:"fleet_add__jTvzr",menu:"fleet_menu__azIr9",label:"fleet_label__tFwb2",head:"fleet_head__hAHJS",name:"fleet_name__YqVEZ",icon:"fleet_icon__fAqwD",body:"fleet_body__bE8PO",stat_row:"fleet_stat_row__clXz_",result_table_wrap:"fleet_result_table_wrap__6upgD",result_table:"fleet_result_table__hyPBa",result_table_detail:"fleet_result_table_detail__6g3xt",sorting:"fleet_sorting__N74XE"}}},function(e){e.O(0,[676,278,971,69,744],function(){return e(e.s=278)}),_N_E=e.O()}]);
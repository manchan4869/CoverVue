import{o as a,c as d,a as e,r as y,b as U,w as r,v as g,d as _,F as x,e as v,t as f,f as $,n as w,g as z,h as M,i as O,j as k,k as L}from"./vendor-da09abf7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(t){if(t.ep)return;t.ep=!0;const l=c(t);fetch(t.href,l)}})();const A=(m,n)=>{const c=m.__vccOpts||m;for(const[u,t]of n)c[u]=t;return c},H={},B={class:"text-xl bg-white flex border-b border-gray-100 p-2"},D=e("a",{class:"flex items-center",href:"/"},[e("h1",{class:"font-semibold mx-4"},"CoverVue")],-1),N=[D];function T(m,n){return a(),d("div",B,N)}const F=A(H,[["render",T]]),E={class:"flex md:flex-row flex-col bg-gray-50",style:{height:"calc(100vh - 1.75rem - 18px)"}},P={class:"bg-white shadow-sm p-4 flex flex-col md:w-1/4 overflow-auto"},I={class:"m-2 flex flex-col"},K=e("span",{class:"font-medium"},"博客标题",-1),R={class:"flex flex-col m-2"},Y=e("span",{class:"font-medium"},"作者",-1),q={class:"flex items-center"},W={class:"flex flex-col m-2 w-1/2"},G=e("span",{class:"font-medium"},"字体",-1),J=["label"],Q={class:"flex flex-col m-2 w-1/2"},X=e("span",{class:"font-medium"},"颜色",-1),Z={class:"border rounded flex items-center p-2 justify-between"},ee={class:"text-xl text-gray-700 mx-2",for:"color"},te={class:"flex flex-col m-2"},oe=e("span",{class:"font-medium"},"图标",-1),se={class:"flex"},le={class:"w-16 border-t border-r rounded-tr flex justify-center items-center"},ne=e("label",{for:"colored",class:"text-gray-500 align-middle mr-1"},"上色",-1),re=["label"],ie={class:"flex"},ae={class:"flex flex-col m-2 w-1/2"},de=e("span",{class:"font-medium"},"图案",-1),ce=["label"],ue={class:"flex flex-col m-2 w-1/2"},fe=e("span",{class:"font-medium"},"主题",-1),me=["label","title"],pe={class:"flex flex-col m-2"},he=e("span",{class:"font-medium"},"平台",-1),xe=M('<div class="m-2 items-center justify-center flex flex-col"><div class="shuffle-btn border bg-white p-2 rounded cursor-pointer"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-shuffle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"></path><path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"></path></svg></div></div>',1),_e={class:"flex flex-col items-center justify-center flex-auto"},ve={class:"md:w-full md:scale-100 scale-50"},be={class:"p-4 bg-white border"},ge={class:"px-12"},we={class:"text-3xl md:text-7xl text-gray-800 font-bold text-center break-words whitespace-pre-wrap"},ye={class:"flex mx-4 p-4 rounded-xl items-center bg-white"},ke={class:"mr-auto ml-2 items-center justify-center flex"},Ce={class:"text-4xl ml-auto mr-2 font-semibold"},je=e("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1),Ve=e("span",{class:"mx-2"},"下载",-1),Se=[je,Ve],Ue={__name:"Editor",setup(m){const n=y(),c=y([]),u=y(""),t=U({title:"Markdown首行缩进",author:"manchan",platform:"hashnode",font:"font-Smiley",color:"#327aff",theme:"basic",pattern:"tic-tac-toe",icon:"",colored:!1}),l={stylish:"时尚",modern:"现代",basic:"基本",preview:"预览",outline:"轮廓"},p=["basic"],C={none:"无","graph-paper":"坐标纸",jigsaw:"拼图",hideout:"隐藏",dots:"点","falling-triangles":"下三角","circuit-board":"电路板",temple:"寺庙",anchors:"锚",brickwall:"砖墙","overlapping-circles":"重叠圆",wiggle:"波纹","tic-tac-toe":"井字棋",leaf:"树叶",bubbles:"气泡",squares:"正方形",explorer:"探险家",jupiter:"木星",sun:"太阳"},j={"font-serif":"衬线字体","font-sans":"无衬线字体","font-mono":"等宽字体","font-SourceSerif":"思源宋体","font-SourceSans":"思源黑体","font-HarmonyOS":"HarmonyOS","font-misans":"MiSans","font-Smiley":"得意黑","font-ysbth":"优设标题黑","font-BWCKKT":"白无常可可体","font-Cubic":"Cubic","font-DOUYU":"斗鱼追光体","font-jxzk":"江西拙楷","font-lxgwwenkai":"霞鹜文楷","font-mksjh":"猫啃什锦黑","font-tjl":"铁蒺藜体"},V=["hashnode","dev","juejin"],S=()=>{O(n.value,{scale:2,letterRendering:!0,taintTest:!0,backgroundColor:null,scrollY:-window.scrollY,useCORS:!0}).then(h=>{let s=h.toDataURL("image/png");const o=document.createElement("a");typeof o.download=="string"?(o.href=s,o.download="cover",document.body.appendChild(o),o.click(),document.body.removeChild(o)):window.open(s)})};return fetch("https://gcore.jsdelivr.net/gh/devicons/devicon@latest/devicon.json").then(h=>h.json()).then(h=>{c.value=[{value:"none",version:"none"},...h.map(s=>({value:s.name,version:s.versions.font[0]}))]}),(h,s)=>(a(),d("div",E,[e("div",P,[e("div",I,[K,r(e("textarea",{type:"text",placeholder:"标题",class:"focus:outline-none border text-gray-700 text-xl rounded p-2","onUpdate:modelValue":s[0]||(s[0]=o=>t.title=o)},null,512),[[g,t.title]])]),e("div",R,[Y,r(e("input",{type:"text",placeholder:"作者",class:"focus:outline-none border text-gray-700 text-xl rounded bg-white p-2","onUpdate:modelValue":s[1]||(s[1]=o=>t.author=o)},null,512),[[g,t.author]])]),e("div",q,[e("div",W,[G,r(e("select",{class:"focus:outline-none text-gray-700 text-xl p-2 rounded border","onUpdate:modelValue":s[2]||(s[2]=o=>t.font=o)},[(a(),d(x,null,v(j,(o,i,b)=>e("option",{label:o},f(i),9,J)),64))],512),[[_,t.font]])]),e("div",Q,[X,e("div",Z,[e("label",ee,f(t.color),1),r(e("input",{type:"color",class:"h-8 w-8 rounded","onUpdate:modelValue":s[3]||(s[3]=o=>t.color=o),id:"color"},null,512),[[g,t.color]])])])]),e("div",te,[oe,e("div",se,[r(e("input",{type:"search",class:"focus:outline-none text-gray-700 p-1 px-3 rounded-tl flex-auto border border-b-0","onUpdate:modelValue":s[4]||(s[4]=o=>u.value=o),placeholder:"过滤"},null,512),[[g,u.value]]),e("div",le,[ne,r(e("input",{type:"checkbox",class:"w-4 h-4",id:"colored","onUpdate:modelValue":s[5]||(s[5]=o=>t.colored=o)},null,512),[[$,t.colored]])])]),r(e("select",{class:"focus:outline-none text-gray-700 text-xl p-2 rounded border rounded-t-none","onUpdate:modelValue":s[6]||(s[6]=o=>t.icon=o),size:"5"},[(a(!0),d(x,null,v(c.value.filter(o=>o.value.includes(u.value.toLowerCase())),(o,i)=>(a(),d("option",{key:i,class:w([[`devicon-${o.value}-${o.version}`,{colored:t.colored}],"pl-2 capitalize"]),label:o.value},f(`devicon-${o.value}-${o.version}`),11,re))),128))],512),[[_,t.icon]])]),e("div",ie,[e("div",ae,[de,r(e("select",{class:"focus:outline-none border text-xl p-2 rounded","onUpdate:modelValue":s[7]||(s[7]=o=>t.pattern=o)},[(a(),d(x,null,v(C,(o,i,b)=>e("option",{key:b,label:o},f(i),9,ce)),64))],512),[[_,t.pattern]])]),e("div",ue,[fe,r(e("select",{class:"focus:outline-none text-gray-700 text-xl p-2 rounded border","onUpdate:modelValue":s[8]||(s[8]=o=>t.theme=o)},[(a(),d(x,null,v(l,(o,i,b)=>e("option",{key:b,label:o+(p.includes(i)?"":"🛠"),disabled:"!availableThemes.includes(key)",title:p.includes(i)?"":"开发中"},f(i),9,me)),64))],512),[[_,t.theme]])])]),e("div",pe,[he,r(e("select",{class:"focus:outline-none text-gray-700 text-xl p-2 rounded border","onUpdate:modelValue":s[9]||(s[9]=o=>t.platform=o)},[(a(),d(x,null,v(V,o=>e("option",null,f(o),1)),64))],512),[[_,t.platform]])])]),xe,e("div",_e,[e("div",{ref_key:"imgDom",ref:n},[e("div",ve,[e("div",be,[e("div",{class:w(["overflow-y-hidden flex text-gray-800 items-center",[t.platform,t.pattern]]),style:z(`background-color:${t.color}`)},[e("div",{class:w(["bg-white md:w-10/12 m-auto flex flex-col pt-12 rounded-xl",t.font])},[e("div",ge,[e("div",null,[e("h1",we,f(t.title),1)])]),e("div",ye,[e("div",ke,[e("i",{class:w(["p-4 dev-icon text-5xl",[t.icon||"devicon-markdown-plain",{colored:t.colored}]])},null,2)]),e("h2",Ce,f(t.author),1)])],2)],6)])])],512),e("button",{class:"border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4 z-10",onClick:S},Se)])]))}},$e={__name:"App",setup(m){return(n,c)=>(a(),d(x,null,[k(F),k(Ue)],64))}};L($e).mount("#app");
import{u as Y,f as te,g as se,h as B,i as ae,P as le,t as re,j as oe,k as F,l as R,m as ue,n as M,p as s,q as ie,R as $,s as ne,v as ce,x as pe,C as ve,y as he,z as ye,A as de,B as me,D as ge,E as w,F as fe,G as be,H as qe,I as j,J as I,K as He}from"./app-BsCwuexf.js";const ke=["/","/posts/cpp/xmake-clangd.html","/posts/adobe/ae-scripts-beginner.html","/posts/adobe/ae-scripts-beginner2.html","/posts/adobe/ae-scripts-files.html","/posts/adobe/ae-scripts-particles.html","/posts/csharp/watch-excel.html","/posts/dev/starter.html","/posts/github/github-deployment.html","/posts/python/alembic-sqlite.html","/posts/python/circular-import-type.html","/posts/python/matplotlib-latex-render.html","/posts/python/photo-gps-search.html","/posts/python/sqlalchemy-sqlite-stddev.html","/posts/python/tkinter-trap.html","/posts/utility/nushell-vscode.html","/posts/vue/vue-clipboard.html","/posts/vue/quasar/custom-plalette.html","/posts/vue/quasar/vite-quasar-theme.html","/404.html","/posts/cpp/","/posts/","/posts/adobe/","/posts/csharp/","/posts/dev/","/posts/github/","/posts/python/","/posts/university/","/posts/utility/","/posts/vue/","/posts/vue/quasar/","/category/","/category/c__/","/category/xmake/","/category/ae/","/category/csharp/","/category/software/","/category/github/","/category/vuepress/","/category/backend/","/category/python/","/category/matplotlib/","/category/university/","/category/utility/","/category/vue/","/category/frontend/","/tag/","/tag/troubleshooting/","/tag/extendscript/","/tag/tutorial/","/tag/excel/","/tag/deployment/","/tag/alembic/","/tag/sqlalchemy/","/tag/sqlite/","/tag/import/","/tag/typing/","/tag/latex/","/tag/gps/","/tag/exif/","/tag/matplotlib/","/tag/summer-camp/","/tag/nushell/","/tag/terminal/","/tag/vscode/","/tag/frontend/","/tag/quasar/","/tag/css/","/article/","/star/","/timeline/"],xe="SEARCH_PRO_QUERY_HISTORY",g=Y(xe,[]),Re=()=>{const{queryHistoryCount:a}=w,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=w,f=Y(we,[]),Qe=()=>{const a=U>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Se=a=>{const l=ve(),r=B(),Q=he(),u=F(0),H=R(()=>u.value>0),y=ye([]);return de(()=>{const{search:d,terminate:S}=me(),b=ge(c=>{const q=c.join(" "),{searchFilter:C=h=>h,splitWord:D,suggestionsFilter:_,...m}=l.value;q?(u.value+=1,d(c.join(" "),r.value,m).then(h=>C(h,q,r.value,Q.value)).then(h=>{u.value-=1,y.value=h}).catch(h=>{console.warn(h),u.value-=1,u.value||(y.value=[])})):y.value=[]},w.searchDelay-w.suggestDelay);M([a,r],([c])=>b(c),{immediate:!0}),fe(()=>{S()})}),{isSearching:H,results:y}};var De=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),Q=B(),u=ae(le),{enabled:H,addQueryHistory:y,queryHistory:d,removeQueryHistory:S}=Re(),{enabled:b,resultHistory:c,addResultHistory:q,removeResultHistory:C}=Qe(),D=H||b,_=re(a,"queries"),{results:m,isSearching:h}=Se(_),o=oe({isQuery:!0,index:0}),p=F(0),v=F(0),O=R(()=>D&&(d.value.length>0||c.value.length>0)),L=R(()=>m.value.length>0),A=R(()=>m.value[p.value]||null),z=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?c.value.length-1:d.value.length-1):o.index=t-1},G=()=>{const{isQuery:e,index:t}=o;t===(e?d.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{p.value=p.value>0?p.value-1:m.value.length-1,v.value=A.value.contents.length-1},K=()=>{p.value=p.value<m.value.length-1?p.value+1:0,v.value=0},V=()=>{v.value<A.value.contents.length-1?v.value+=1:K()},N=()=>{v.value>0?v.value-=1:J()},E=e=>e.map(t=>He(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=be[e.index]||"$content",[i,x=""]=qe(t)?t[Q.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",E([i,...n,x])))}return e.display.map(t=>s("div",E(t)))},k=()=>{p.value=0,v.value=0,l("updateQuery",""),l("close")},X=()=>H?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),d.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),S(t)}})]))])):null,Z=()=>b?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{k()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(i=>E(i)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),C(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(L.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=A.value.contents[v.value];y(a.queries.join(" ")),q(t),r.push(P(t)),k()}}else if(b){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",d.value[t]),e.preventDefault()):(r.push(c.value[t].link),k())}}}}),M([p,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!L.value:!O.value}],id:"search-pro-results"},a.queries.length?h.value?s(ie,{hint:u.value.searching}):L.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},i)=>{const x=p.value===i;return s("li",{class:["search-pro-result-list-item",{active:x}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,ee)=>{const T=x&&v.value===ee;return s($,{to:P(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{y(a.queries.join(" ")),q(n),k()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:pe,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):u.value.emptyResult:D?O.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{De as default};

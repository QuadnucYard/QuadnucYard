import{a5 as t}from"./app-YJ_h_pZv.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline.quadnucyard.top",reaction:!0};const i=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-YJ_h_pZv.js").then(r=>r.a6),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

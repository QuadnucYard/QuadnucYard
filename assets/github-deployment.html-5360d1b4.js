import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as o,b as e,d as n,e as c,f as l}from"./app-37ff76a1.js";const r={},d=e("h1",{id:"github-部署相关-trouble-shooting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-部署相关-trouble-shooting","aria-hidden":"true"},"#"),n(" GitHub 部署相关 trouble-shooting")],-1),u=e("h2",{id:"部署失败-提示无法写入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署失败-提示无法写入","aria-hidden":"true"},"#"),n(" 部署失败，提示无法写入")],-1),p={href:"https://zhuanlan.zhihu.com/p/598824876",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>需要给 write 权限</p><p>操作：Settings / Actions / General / Workflow permissions，选择 Read and write permissions。</p><h2 id="跨仓库部署失败-提示无权限" tabindex="-1"><a class="header-anchor" href="#跨仓库部署失败-提示无权限" aria-hidden="true">#</a> 跨仓库部署失败，提示无权限</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[gh-pages (root-commit) 2fcb7c2] Initial gh-pages commit
/usr/bin/chmod -R +rw /home/runner/work/my-blog-private/my-blog-private/src/.vuepress/dist
/usr/bin/rsync -q -av --checksum --progress /home/runner/work/my-blog-private/my-blog-private/src/.vuepress/dist/. github-pages-deploy-action-temp-deployment-folder --delete --exclude CNAME --exclude .ssh --exclude .git --exclude .github
Checking if there are files to commit…
/usr/bin/git add --all .
/usr/bin/git checkout -b github-pages-deploy-action/yvl5selpu
Switched to a new branch &#39;github-pages-deploy-action/yvl5selpu&#39;
/usr/bin/git commit -m Deploying to gh-pages from @ QuadnucYard/my-blog-private@9017cb2e03ada05bbb5720ad864587ebac41490d 🚀 --quiet --no-verify
Force-pushing changes...
/usr/bin/git push --force ***github.com/QuadnucYard/my-blog.git github-pages-deploy-action/yvl5selpu:gh-pages
remote: Permission to QuadnucYard/my-blog.git denied to github-actions[bot].
fatal: unable to access &#39;https://github.com/QuadnucYard/my-blog.git/&#39;: The requested URL returned error: 403
Running post deployment cleanup jobs… 🗑️
/usr/bin/git checkout -B github-pages-deploy-action/yvl5selpu
Reset branch &#39;github-pages-deploy-action/yvl5selpu&#39;
/usr/bin/chmod -R +rw github-pages-deploy-action-temp-deployment-folder
/usr/bin/git worktree remove github-pages-deploy-action-temp-deployment-folder --force
Error: The deploy step encountered an error: The process &#39;/usr/bin/git&#39; failed with exit code 128 ❌
Notice: Deployment failed! ❌
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误信息比较多，关键一条是跨仓库部署时目标仓库拒绝访问。<br> 根据 <code>JamesIves/github-pages-deploy-action</code> 的指示，在跨仓库时，需要在 <code>with</code> 中加上 <code>token</code>项来说明 PAT，其值为源码仓库的一个 secret。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">repository-name</span><span class="token punctuation">:</span> QuadnucYard/QuadnucYard.github.io
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> src/.vuepress/dist
          <span class="token key atrule">token</span><span class="token punctuation">:</span>  $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.TARGET_REPO_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就成功了。<br> 这里是部署到 <code>&lt;USER&gt;.github.io</code>。如果是部署到 <code>&lt;USER&gt;.github.io/&lt;REPO&gt;</code> 还需要改 vuepress 的 <code>base</code>。</p>`,7);function m(h,v){const s=i("ExternalLinkIcon");return t(),o("div",null,[d,u,e("p",null,[n("参考 "),e("a",p,[n("https://zhuanlan.zhihu.com/p/598824876"),c(s)])]),b])}const y=a(r,[["render",m],["__file","github-deployment.html.vue"]]);export{y as default};

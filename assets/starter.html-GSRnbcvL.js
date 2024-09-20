import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,a}from"./app-BsCwuexf.js";const n={},t=a(`<h1 id="windows-装机软件指南-科研码农向" tabindex="-1"><a class="header-anchor" href="#windows-装机软件指南-科研码农向"><span>Windows 装机软件指南（科研码农向）</span></a></h1><p>本文描述实验室电脑（Windows11）配置过程。</p><h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体"><span>字体</span></a></h2><ul><li>JetBrains Mono（用于代码编辑器）：<a href="https://www.jetbrains.com/lp/mono/" target="_blank" rel="noopener noreferrer">https://www.jetbrains.com/lp/mono/</a></li><li>更纱黑体（用于中文终端）：<a href="https://github.com/be5invis/Sarasa-Gothic" target="_blank" rel="noopener noreferrer">https://github.com/be5invis/Sarasa-Gothic</a>。可走镜像下载，选 SuperTTC。</li><li>FiraCode Nerd Font Mono（用于美化终端）：大全：<a href="https://www.nerdfonts.com/" target="_blank" rel="noopener noreferrer">https://www.nerdfonts.com/</a>。在 Font Download 里找想要的字体下载。</li></ul><p>注意安装终端字体后需要<strong>重启</strong> VSCode 才能生效。</p><h2 id="基础软件" tabindex="-1"><a class="header-anchor" href="#基础软件"><span>基础软件</span></a></h2><h3 id="winget" tabindex="-1"><a class="header-anchor" href="#winget"><span>WinGet</span></a></h3><p>软件安装一把梭。国内默认下载是很慢的，但幸好我们能换源：</p><p>参考：<a href="https://mirrors.ustc.edu.cn/help/winget-source.html" target="_blank" rel="noopener noreferrer">https://mirrors.ustc.edu.cn/help/winget-source.html</a></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winget</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://mirrors.ustc.edu.cn/winget-source</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --trust-level</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> trusted</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以用其他 mirror，例如 nju：<a href="https://mirror.nju.edu.cn/winget-source/" target="_blank" rel="noopener noreferrer">https://mirror.nju.edu.cn/winget-source/</a>。</p><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h3><p>直接 winget：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Git.Git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要生成 ssh-key，然后上传到 GitHub：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;xxx@xxx.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解决 ssh 连接端口 22 错误的问题：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ssh: connect to host github.com port 22: Connection refused</span></span>
<span class="line"><span>fatal: Could not read from remote repository.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>民间解决方案：在 <code>~/.ssh/config</code> 增加如下内容：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Host github.com</span></span>
<span class="line"><span>User git</span></span>
<span class="line"><span>Hostname ssh.github.com</span></span>
<span class="line"><span>PreferredAuthentications publickey</span></span>
<span class="line"><span>IdentityFile ~/.ssh/id_rsa</span></span>
<span class="line"><span>Port 443</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VSCode</span></a></h3><p>官网下载，也可以 winget：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Microsoft.VisualStudioCode</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_7zip" tabindex="-1"><a class="header-anchor" href="#_7zip"><span>7zip</span></a></h3><p>Windows11 自带的压缩软件解压奇慢（网上有 benchmark），所以我们用 7zip 或 NanaZip：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 7zip.7zip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> M2Team.NanaZip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="powertoys" tabindex="-1"><a class="header-anchor" href="#powertoys"><span>PowerToys</span></a></h3><p>神器，提供一堆功能，包括改环境变量。</p><p>参考：<a href="https://learn.microsoft.com/zh-cn/windows/powertoys/install" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/zh-cn/windows/powertoys/install</a></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Microsoft.PowerToys</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winget</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>（这里加 <code>--source</code> 不然提示找不到）</p><p>需要设置以管理员模式启动，不然改不了全局环境变量。</p><h3 id="quicklook" tabindex="-1"><a class="header-anchor" href="#quicklook"><span>QuickLook</span></a></h3><p><a href="https://github.com/QL-Win/QuickLook" target="_blank" rel="noopener noreferrer">https://github.com/QL-Win/QuickLook</a></p><p>其实 PowerToys 支持该功能，但看图可能比 PowerToys 方便点。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> voidtools.Everything</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="pixpin" tabindex="-1"><a class="header-anchor" href="#pixpin"><span>PixPin</span></a></h3><p><a href="https://pixpinapp.com/" target="_blank" rel="noopener noreferrer">https://pixpinapp.com/</a></p><p>强大的截图工具，关键是它能把图片固定到屏幕，方便多任务工作。</p><h3 id="everything" tabindex="-1"><a class="header-anchor" href="#everything"><span>Everything</span></a></h3><p>全盘文件搜索软件。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> voidtools.Everything</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="wiztree" tabindex="-1"><a class="header-anchor" href="#wiztree"><span>Wiztree</span></a></h3><p>磁盘空间分析软件，同样能搜文件（扫盘比 Everything 快）。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> AntibodySoftware.WizTree</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="zotero" tabindex="-1"><a class="header-anchor" href="#zotero"><span>Zotero</span></a></h3><p><a href="https://www.zotero.org/download/" target="_blank" rel="noopener noreferrer">https://www.zotero.org/download/</a></p><p>科研用文献管理工具。除软件本体外，还有 Connector 用于导入浏览器中的文献。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DigitalScholar.Zotero</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="inkscape" tabindex="-1"><a class="header-anchor" href="#inkscape"><span>Inkscape</span></a></h3><p><a href="https://inkscape.org/" target="_blank" rel="noopener noreferrer">https://inkscape.org/</a></p><p>科研用矢量图绘制软件。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Inkscape.Inkscape</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>由于更新太慢，截至本文撰写时最新为 1.3.2，但是官网已经有了 1.4 beta，所以要最新体验的话还得官网下载。</p><h3 id="wsl" tabindex="-1"><a class="header-anchor" href="#wsl"><span>WSL</span></a></h3><p><a href="https://learn.microsoft.com/zh-cn/windows/wsl/install" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/zh-cn/windows/wsl/install</a></p><h2 id="编程语言开发" tabindex="-1"><a class="header-anchor" href="#编程语言开发"><span>编程语言开发</span></a></h2><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h3><h4 id="工具链-windows" tabindex="-1"><a class="header-anchor" href="#工具链-windows"><span>工具链（Windows）</span></a></h4><ul><li>llvm：<a href="https://github.com/llvm/llvm-project" target="_blank" rel="noopener noreferrer">https://github.com/llvm/llvm-project</a></li><li>llvm-mingw：<a href="https://github.com/mstorsjo/llvm-mingw" target="_blank" rel="noopener noreferrer">https://github.com/mstorsjo/llvm-mingw</a>，nightly：<a href="https://github.com/mstorsjo/llvm-mingw/releases/tag/nightly" target="_blank" rel="noopener noreferrer">https://github.com/mstorsjo/llvm-mingw/releases/tag/nightly</a></li><li>mingw: <a href="https://github.com/niXman/mingw-builds-binaries" target="_blank" rel="noopener noreferrer">https://github.com/niXman/mingw-builds-binaries</a></li><li>gcc-mcf：<a href="https://gcc-mcf.lhmouse.com/" target="_blank" rel="noopener noreferrer">https://gcc-mcf.lhmouse.com/</a></li></ul><h4 id="c-包管理器" tabindex="-1"><a class="header-anchor" href="#c-包管理器"><span>C++包管理器</span></a></h4><p><a href="https://xmake.io/" target="_blank" rel="noopener noreferrer">XMake</a></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Xmake-io.Xmake</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> winget</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="c-语言服务" tabindex="-1"><a class="header-anchor" href="#c-语言服务"><span>C++语言服务</span></a></h4><ul><li>Linter：<a href="https://clangd.llvm.org/" target="_blank" rel="noopener noreferrer">clangd</a></li><li>Formatter：<a href="https://clang.llvm.org/docs/ClangFormat.html" target="_blank" rel="noopener noreferrer">clang-format</a></li></ul><p>这个是 llvm 附带的。别的软件（尤其是 IDE）可能自带旧版的，所以装完后注意运行 <code>clang-format --version</code> 确定一下。</p><h3 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs"><span>NodeJS</span></a></h3><h4 id="nodejs-包管理器" tabindex="-1"><a class="header-anchor" href="#nodejs-包管理器"><span>NodeJS 包管理器</span></a></h4><ul><li><p><a href="https://bun.sh/" target="_blank" rel="noopener noreferrer">bun</a></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">winget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Oven-sh.Bun</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a></p></li></ul><p>推荐 bun，虽然目前 issue 很多，但运行快没得说。<br> bun 自带 bunx，功能类比 npx。</p><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h3><p><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">https://www.python.org/</a></p><h4 id="python-包管理器" tabindex="-1"><a class="header-anchor" href="#python-包管理器"><span>Python 包管理器</span></a></h4><ul><li><a href="https://rye.astral.sh/" target="_blank" rel="noopener noreferrer">Rye</a></li><li><a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">UV</a></li><li><a href="https://pdm-project.org/latest/" target="_blank" rel="noopener noreferrer">PDM</a></li><li><a href="https://python-poetry.org/" target="_blank" rel="noopener noreferrer">Poetry</a></li></ul><p>Rye、UV、PDM 都遵守 <code>pyproject.toml</code> 规范。<br> Rye 使用 UV 作为包管理器，包含了 UV 的功能，但在项目管理上功能有差异。Rust 开发，运行速度一流。<br> Rye 可帮你管理 Python 运行时，无需事先安装。<br> Rye tools 可以代替 pipx，用于全局软件下载。<br> Rye 和 UV 支持 workspace，但在 workspace 依赖解析上还有点不足。</p><h4 id="python-语言服务" tabindex="-1"><a class="header-anchor" href="#python-语言服务"><span>Python 语言服务</span></a></h4><ul><li>Linter + Formatter：<a href="https://docs.astral.sh/ruff/" target="_blank" rel="noopener noreferrer">Ruff</a>，有 VSCode 插件。Rye 自带</li><li>Type Checker：<a href="https://www.mypy-lang.org/" target="_blank" rel="noopener noreferrer">mypy</a>，有 VSCode 插件。</li></ul><p>二者通常需要放到 <code>pyproject.toml</code> 的 <code>dev-dependencies</code> 里。</p><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust"><span>Rust</span></a></h3><p><a href="https://rustup.rs/" target="_blank" rel="noopener noreferrer">rustup</a></p><p>需要 GCC 或 MSVC。</p><details class="hint-container details"><summary>踩坑</summary><p>我这边如果使用 GCC-MCF 会构建失败：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  = note: C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../x86_64-w64-mingw32/bin/ld.exe: C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../lib/crt2.o: in function \`__tmainCRTStartup&#39;:</span></span>
<span class="line"><span>          D:/lh_mouse/GitHub/MINGW-packages/mingw-w64-crt-git/src/mingw-w64/mingw-w64-crt/crt/crtexe.c:260:(.text+0x2d4): undefined reference to \`__MCF_cxa_atexit&#39;</span></span>
<span class="line"><span>          C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../x86_64-w64-mingw32/bin/ld.exe: C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../lib/crt2.o: in function \`atexit&#39;:</span></span>
<span class="line"><span>          D:/lh_mouse/GitHub/MINGW-packages/mingw-w64-crt-git/src/mingw-w64/mingw-w64-crt/crt/crtexe.c:339:(.text+0x42a): undefined reference to \`__MCF_cxa_atexit&#39;</span></span>
<span class="line"><span>          C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../x86_64-w64-mingw32/bin/ld.exe: C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../lib/libmingw32.a(lib64_libmingw32_a-tls_atexit.o): in function \`__mingw_cxa_atexit&#39;:</span></span>
<span class="line"><span>          D:/lh_mouse/GitHub/MINGW-packages/mingw-w64-crt-git/src/mingw-w64/mingw-w64-crt/crt/tls_atexit.c:20:(.text+0x1): undefined reference to \`__MCF_cxa_atexit&#39;</span></span>
<span class="line"><span>          C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../x86_64-w64-mingw32/bin/ld.exe: C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../lib/libmingw32.a(lib64_libmingw32_a-tls_atexit.o): in function \`__mingw_cxa_thread_atexit&#39;:</span></span>
<span class="line"><span>          D:/lh_mouse/GitHub/MINGW-packages/mingw-w64-crt-git/src/mingw-w64/mingw-w64-crt/crt/tls_atexit.c:25:(.text+0x11): undefined reference to \`__MCF_cxa_thread_atexit&#39;</span></span>
<span class="line"><span>          C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../x86_64-w64-mingw32/bin/ld.exe: C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../lib/libmingw32.a(lib64_libmingw32_a-exit_wrappers.o): in function \`exit&#39;:</span></span>
<span class="line"><span>          D:/lh_mouse/GitHub/MINGW-packages/mingw-w64-crt-git/src/mingw-w64/mingw-w64-crt/crt/exit_wrappers.c:20:(.text+0x5): undefined reference to \`__MCF_exit&#39;</span></span>
<span class="line"><span>          C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../x86_64-w64-mingw32/bin/ld.exe: C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../lib/libmingw32.a(lib64_libmingw32_a-exit_wrappers.o): in function \`_exit&#39;:</span></span>
<span class="line"><span>          D:/lh_mouse/GitHub/MINGW-packages/mingw-w64-crt-git/src/mingw-w64/mingw-w64-crt/crt/exit_wrappers.c:33:(.text+0x15): undefined reference to \`__MCF__Exit&#39;</span></span>
<span class="line"><span>          C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../x86_64-w64-mingw32/bin/ld.exe: C:/Program Files/mingw/bin/../lib/gcc/x86_64-w64-mingw32/14.2.1/../../../../lib/libmingw32.a(lib64_libmingw32_a-exit_wrappers.o): in function \`at_quick_exit&#39;:</span></span>
<span class="line"><span>          D:/lh_mouse/GitHub/MINGW-packages/mingw-w64-crt-git/src/mingw-w64/mingw-w64-crt/crt/exit_wrappers.c:49:(.text+0x2a): undefined reference to \`__MCF_cxa_at_quick_exit&#39;</span></span>
<span class="line"><span>          collect2.exe: error: ld returned 1 exit status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  = note: some \`extern\` functions couldn&#39;t be found; some native libraries may need to be installed or have their path specified</span></span>
<span class="line"><span>  = note: use the \`-l\` flag to specify native libraries to link</span></span>
<span class="line"><span>  = note: use the \`cargo:rustc-link-lib\` directive to specify the native libraries to link with Cargo (see https://doc.rust-lang.org/cargo/reference/build-scripts.html#rustc-link-lib)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提升缺少参数 <code>-lmcfgthread</code>，参考：<a href="https://github.com/lhmouse/mcfgthread/issues/80" target="_blank" rel="noopener noreferrer">https://github.com/lhmouse/mcfgthread/issues/80</a></p><p>换另一个 MinGW，仍然失败，不知为何跟 clang 扯上关系：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  = note: clang-19: warning: argument unused during compilation: &#39;-no-pie&#39; [-Wunused-command-line-argument]</span></span>
<span class="line"><span>          lld: error: unable to find library -lgcc_eh</span></span>
<span class="line"><span>          lld: error: unable to find library -lgcc</span></span>
<span class="line"><span>          clang-19: error: linker command failed with exit code 1 (use -v to see invocation)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因是找到了 llvm 的 gcc。在 <code>config.toml</code> 里修改路径：</p><div class="language-toml line-numbers-mode" data-highlighter="shiki" data-ext="toml" data-title="toml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">x86_64-pc-windows-gnu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">linker</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;path/to/bin/gcc.exe&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="rust-实用工具" tabindex="-1"><a class="header-anchor" href="#rust-实用工具"><span>Rust 实用工具</span></a></h4><ul><li><a href="https://github.com/RazrFalcon/cargo-bloat" target="_blank" rel="noopener noreferrer">cargo-bloat</a>：Find out what takes most of the space in your executable.</li><li><a href="https://github.com/EmbarkStudios/cargo-deny" target="_blank" rel="noopener noreferrer">cargo-deny</a>：❌ Cargo plugin for linting your dependencies 🦀</li><li><a href="https://github.com/jplatte/cargo-depgraph" target="_blank" rel="noopener noreferrer">cargo-depgraph</a>：Creates graphviz dependency graphs for Rust projects that use Cargo</li><li><a href="https://github.com/dtolnay/cargo-expand" target="_blank" rel="noopener noreferrer">cargo-expand</a>：Subcommand to show result of macro expansion。</li></ul><h3 id="shell" tabindex="-1"><a class="header-anchor" href="#shell"><span>Shell</span></a></h3><ul><li><a href="https://fishshell.com/" target="_blank" rel="noopener noreferrer">fish shell</a> 不过很遗憾这是 Windows 用不了</li><li><a href="https://www.nushell.sh/" target="_blank" rel="noopener noreferrer">Nushell</a></li></ul><p>美化：</p><ul><li><a href="https://github.com/starship/starship" target="_blank" rel="noopener noreferrer">starship</a> 适用于 pwsh 和 nushell，安装后可能需要重启才能找到环境变量中的 starship</li><li><a href="https://github.com/oh-my-fish/oh-my-fish" target="_blank" rel="noopener noreferrer">oh-my-fish</a></li><li><a href="https://github.com/JanDeDobbeleer/oh-my-posh" target="_blank" rel="noopener noreferrer">oh-my-posh</a> 适用于 pwsh 和 nushell</li></ul><h3 id="typst" tabindex="-1"><a class="header-anchor" href="#typst"><span>Typst</span></a></h3><p><a href="https://typst.app/" target="_blank" rel="noopener noreferrer">https://typst.app/</a><br><a href="https://github.com/typst/typst" target="_blank" rel="noopener noreferrer">https://github.com/typst/typst</a></p><ul><li>LSP：<a href="https://github.com/Myriad-Dreamin/tinymist" target="_blank" rel="noopener noreferrer">tinymist</a></li><li>Formatter：<a href="https://github.com/Enter-tainer/typstyle" target="_blank" rel="noopener noreferrer">typstyle</a></li><li>导航：<a href="https://typst-doc-cn.github.io/guide/" target="_blank" rel="noopener noreferrer">https://typst-doc-cn.github.io/guide/</a></li><li>小蓝书：<a href="https://typst-doc-cn.github.io/tutorial/" target="_blank" rel="noopener noreferrer">https://typst-doc-cn.github.io/tutorial/</a></li></ul><h2 id="游戏开发" tabindex="-1"><a class="header-anchor" href="#游戏开发"><span>游戏开发</span></a></h2><h3 id="godot" tabindex="-1"><a class="header-anchor" href="#godot"><span>Godot</span></a></h3><p><a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">https://godotengine.org/</a></p><ul><li>Linter + Formatter：<a href="https://github.com/Scony/godot-gdscript-toolkit" target="_blank" rel="noopener noreferrer">godot-gdscript-toolkit</a></li></ul>`,95),r=[t];function l(h,o){return s(),i("div",null,r)}const c=e(n,[["render",l],["__file","starter.html.vue"]]),g=JSON.parse('{"path":"/posts/dev/starter.html","title":"Windows 装机软件指南（科研码农向）","lang":"en-US","frontmatter":{"category":["software"],"isOriginal":true,"date":"2024-09-20T00:00:00.000Z","description":"Windows 装机软件指南（科研码农向） 本文描述实验室电脑（Windows11）配置过程。 字体 JetBrains Mono（用于代码编辑器）：https://www.jetbrains.com/lp/mono/ 更纱黑体（用于中文终端）：https://github.com/be5invis/Sarasa-Gothic。可走镜像下载，选 Sup...","head":[["meta",{"property":"og:url","content":"https://QuadnucYard.github.io/posts/dev/starter.html"}],["meta",{"property":"og:title","content":"Windows 装机软件指南（科研码农向）"}],["meta",{"property":"og:description","content":"Windows 装机软件指南（科研码农向） 本文描述实验室电脑（Windows11）配置过程。 字体 JetBrains Mono（用于代码编辑器）：https://www.jetbrains.com/lp/mono/ 更纱黑体（用于中文终端）：https://github.com/be5invis/Sarasa-Gothic。可走镜像下载，选 Sup..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-20T12:51:30.000Z"}],["meta",{"property":"article:author","content":"Stankle of QuadnucYard"}],["meta",{"property":"article:published_time","content":"2024-09-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-20T12:51:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows 装机软件指南（科研码农向）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-20T12:51:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Stankle of QuadnucYard\\",\\"url\\":\\"https://github.com/QuadnucYard\\"}]}"]]},"headers":[{"level":2,"title":"字体","slug":"字体","link":"#字体","children":[]},{"level":2,"title":"基础软件","slug":"基础软件","link":"#基础软件","children":[{"level":3,"title":"WinGet","slug":"winget","link":"#winget","children":[]},{"level":3,"title":"Git","slug":"git","link":"#git","children":[]},{"level":3,"title":"VSCode","slug":"vscode","link":"#vscode","children":[]},{"level":3,"title":"7zip","slug":"_7zip","link":"#_7zip","children":[]},{"level":3,"title":"PowerToys","slug":"powertoys","link":"#powertoys","children":[]},{"level":3,"title":"QuickLook","slug":"quicklook","link":"#quicklook","children":[]},{"level":3,"title":"PixPin","slug":"pixpin","link":"#pixpin","children":[]},{"level":3,"title":"Everything","slug":"everything","link":"#everything","children":[]},{"level":3,"title":"Wiztree","slug":"wiztree","link":"#wiztree","children":[]},{"level":3,"title":"Zotero","slug":"zotero","link":"#zotero","children":[]},{"level":3,"title":"Inkscape","slug":"inkscape","link":"#inkscape","children":[]},{"level":3,"title":"WSL","slug":"wsl","link":"#wsl","children":[]}]},{"level":2,"title":"编程语言开发","slug":"编程语言开发","link":"#编程语言开发","children":[{"level":3,"title":"C++","slug":"c","link":"#c","children":[]},{"level":3,"title":"NodeJS","slug":"nodejs","link":"#nodejs","children":[]},{"level":3,"title":"Python","slug":"python","link":"#python","children":[]},{"level":3,"title":"Rust","slug":"rust","link":"#rust","children":[]},{"level":3,"title":"Shell","slug":"shell","link":"#shell","children":[]},{"level":3,"title":"Typst","slug":"typst","link":"#typst","children":[]}]},{"level":2,"title":"游戏开发","slug":"游戏开发","link":"#游戏开发","children":[{"level":3,"title":"Godot","slug":"godot","link":"#godot","children":[]}]}],"git":{"createdTime":1726836690000,"updatedTime":1726836690000,"contributors":[{"name":"QuadnucYard","email":"2380433991@qq.com","commits":1}]},"readingTime":{"minutes":4.88,"words":1463},"filePathRelative":"posts/dev/starter.md","localizedDate":"September 20, 2024","excerpt":"\\n<p>本文描述实验室电脑（Windows11）配置过程。</p>\\n<h2>字体</h2>\\n<ul>\\n<li>JetBrains Mono（用于代码编辑器）：<a href=\\"https://www.jetbrains.com/lp/mono/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.jetbrains.com/lp/mono/</a></li>\\n<li>更纱黑体（用于中文终端）：<a href=\\"https://github.com/be5invis/Sarasa-Gothic\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/be5invis/Sarasa-Gothic</a>。可走镜像下载，选 SuperTTC。</li>\\n<li>FiraCode Nerd Font Mono（用于美化终端）：大全：<a href=\\"https://www.nerdfonts.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.nerdfonts.com/</a>。在 Font Download 里找想要的字体下载。</li>\\n</ul>","autoDesc":true}');export{c as comp,g as data};

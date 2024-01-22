<template><div><h1 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESlint</h1>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<h2 id="实践配置" tabindex="-1"><a class="header-anchor" href="#实践配置" aria-hidden="true">#</a> 实践配置</h2>
<h3 id="配合-vscode-自动格式化" tabindex="-1"><a class="header-anchor" href="#配合-vscode-自动格式化" aria-hidden="true">#</a> 配合 VSCode 自动格式化</h3>
<p>通过配置 VS Code 在编写代码保存后自动格式化代码：</p>
<ol>
<li>
<p>VS Code 安装 ESLint 插件</p>
<p><img src="@source/images/eslint.png" alt="image-20210809094011775"></p>
</li>
<li>
<p>设置 VS Code 配置文件 <a href="https://code.visualstudio.com/docs/getstarted/settings" target="_blank" rel="noopener noreferrer"><code v-pre>settings.json</code> <ExternalLinkIcon/></a></p>
<ol>
<li>
<p>在 VS Code <strong>用户设置</strong> 中添加配置，此项应用于个人 VS Code 配置 (使用 <code v-pre>Ctrl + p</code> 搜索 <code v-pre>setting.json</code> )：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"eslint.packageManager"</span><span class="token operator">:</span> <span class="token string">"npm"</span><span class="token punctuation">,</span>
    <span class="token property">"eslint.probe"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"javascript"</span><span class="token punctuation">,</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"html"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在<strong>工作区设置</strong>中添加配置（工作区设置会覆盖用户设置。工作区设置特定于项目，可以在项目的开发人员之间共享）：</p>
<ol>
<li>添加项目 vscode 文件： 在项目根目录直接添加 <code v-pre>.vscode</code> 目录，目录下添加 <code v-pre>setting.json</code> 文件，添加以上配置项；</li>
<li>直接配置工作区： 打开 <code v-pre>文件 -&gt; 首选项 -&gt; 设置 -&gt; 工作区 -&gt; 扩展 -&gt; ESLint</code> 配置</li>
</ol>
</li>
</ol>
</li>
<li>
<p>项目根目录加上 <code v-pre>.eslintrc.js</code>  文件 (<a href="https://eslint.org/docs/rules/" target="_blank" rel="noopener noreferrer">ESLint 配置文档<ExternalLinkIcon/></a>)</p>
</li>
</ol>
<h3 id="命令行-eslint-自动修复" tabindex="-1"><a class="header-anchor" href="#命令行-eslint-自动修复" aria-hidden="true">#</a> 命令行 ESlint 自动修复</h3>
<ol>
<li>
<p>在项目 <code v-pre>package.json</code>  文件中 script 字段添加脚本命令：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint --ext .js,.vue src --fix"</span> <span class="token comment">// 自动修复 src 目录下 .js,.vue 文件后缀格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>执行命令 <code v-pre>npm run lint</code></p>
</li>
</ol>
<p><strong>参考资料</strong></p>
<p><a href="https://eslint.org/docs/user-guide/getting-started" target="_blank" rel="noopener noreferrer">ESLint 文档<ExternalLinkIcon/></a></p>
<p><a href="https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/eslint.html#%E9%85%8D%E7%BD%AE%E9%A1%B9" target="_blank" rel="noopener noreferrer">vue-element-admin ESLint 配置<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/varHarrie/Dawn-Blossoms/issues/10" target="_blank" rel="noopener noreferrer">vscode 插件和配置推荐<ExternalLinkIcon/></a></p>
</div></template>



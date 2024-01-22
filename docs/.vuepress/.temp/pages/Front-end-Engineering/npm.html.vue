<template><div><h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h1>
<h2 id="使用本地-npm-包" tabindex="-1"><a class="header-anchor" href="#使用本地-npm-包" aria-hidden="true">#</a> 使用本地 npm 包</h2>
<h5 id="打包项目" tabindex="-1"><a class="header-anchor" href="#打包项目" aria-hidden="true">#</a> 打包项目</h5>
<ul>
<li>
<p>项目开发完成后，本地打包</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm run build
npm pack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>打包后生成: 项目名称-版本号.tgz 包</li>
</ul>
</li>
</ul>
<h5 id="使用项目" tabindex="-1"><a class="header-anchor" href="#使用项目" aria-hidden="true">#</a> 使用项目</h5>
<ul>
<li>将打包的包放入使用包的项目中；</li>
<li>使用命令安装  <code v-pre>npm i ./包名</code></li>
<li>项目使用： <code v-pre>import 包名 from &quot;包名&quot;</code></li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://www.axihe.com/api/npm/cli/npm-pack.html" target="_blank" rel="noopener noreferrer">npm pack<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/weixin_44003190/article/details/90713012" target="_blank" rel="noopener noreferrer">使用vue在npm上发布自己的ui组件包<ExternalLinkIcon/></a></p>
<h2 id="发布自己的-npm-包" tabindex="-1"><a class="header-anchor" href="#发布自己的-npm-包" aria-hidden="true">#</a> 发布自己的 npm 包</h2>
<ul>
<li>在命令行中登录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> login
<span class="token comment"># Username: authorname</span>
<span class="token comment"># Password:</span>
<span class="token comment"># Email: (this IS public) email@email.com</span>
<span class="token comment"># Logged in as authorname on https://registry.npmjs.org/.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用npm源
<ul>
<li>因为淘宝镜像源是只读源，所以要发布npm需要去npm源，不修改会报错</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nrm use <span class="token function">npm</span>
<span class="token comment"># 如果没有安装nrm可以使用原生</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token assign-left variable">registry</span><span class="token operator">=</span>http://registry.npmjs.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>进入需要发布的目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> publish-catalog
<span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改更新版本
<ul>
<li>如果要更新版本，需要先git上面提交代码，并且修改<code v-pre>package.json</code>里面的<code v-pre>&quot;version&quot;: &quot;1.1.0&quot;</code>，否则无法再次提交。</li>
</ul>
</li>
</ul>
<h3 id="在淘宝镜像下发布-npm-包" tabindex="-1"><a class="header-anchor" href="#在淘宝镜像下发布-npm-包" aria-hidden="true">#</a> 在淘宝镜像下发布 npm 包</h3>
<p>使用淘宝镜像</p>
<p>淘宝npm 地址： http://npm.taobao.org/</p>
<ul>
<li>1.临时使用</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm --registry https://registry.npm.taobao.org install express1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>2.持久使用</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在淘宝镜像下发布 npm 包</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm login --registry http://registry.npmjs.org
npm publish --registry http://registry.npmjs.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用自己的-npm-包" tabindex="-1"><a class="header-anchor" href="#使用自己的-npm-包" aria-hidden="true">#</a> 使用自己的 npm 包</h3>
</div></template>



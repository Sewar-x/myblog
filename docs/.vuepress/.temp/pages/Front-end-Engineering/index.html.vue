<template><div><h1 id="前端工程化" tabindex="-1"><a class="header-anchor" href="#前端工程化" aria-hidden="true">#</a> 前端工程化</h1>
<ul>
<li>
<p>概念：根据实际业务的特点，将前端开发的<strong>整个流程</strong> <strong>规范化、标准化</strong>，从创建项目——编码——预览测试——提交——部署，都遵循一定的标准和规范，通过不同的步骤采用不同的<strong>工具</strong>提高开发效率，减低成本的一种手段。</p>
</li>
<li>
<p>前端工程化涉及内容：</p>
<p><img src="@source/images/前端工程化.png" alt="前端工程化"></p>
</li>
<li>
<p>前端工程化相关工具</p>
<p><img src="@source/images/前端工程化相关工具.png" alt=""></p>
</li>
</ul>
<h2 id="脚手架" tabindex="-1"><a class="header-anchor" href="#脚手架" aria-hidden="true">#</a> 脚手架</h2>
<ul>
<li>
<p>概念：脚手架本质是开发人员的一个操作系统的客户端工具。它通过命令行执行。</p>
</li>
<li>
<p>脚手架作用：创建项目基本结构 提供项目规范和约定。</p>
<ul>
<li>
<p>相同的<strong>组织结构</strong></p>
</li>
<li>
<p>相同的<strong>开发范式</strong></p>
</li>
<li>
<p>相同的<strong>模块依赖</strong></p>
</li>
<li>
<p>相同的<strong>工具配置</strong></p>
</li>
<li>
<p>相同的<strong>代码基础</strong></p>
<p><img src="@source/images/脚手架生成.png" alt=""></p>
</li>
</ul>
</li>
<li>
<p>为什么需要脚手架？</p>
<ul>
<li>脚手架是实现前端自动化的关键工具。</li>
<li>开发脚手架的核心目标是：提升前端研发效能。</li>
<li>价值：
<ul>
<li>自动化：项目重复代码拷贝 / git操作 / 发布上线操作，实现自动化操作，减少人工操作风险</li>
<li>标准化：项目创建/git flow/发布流程/回滚流程，实现多个团队各个项目的一系列技术流程、技术操作标准化</li>
<li>数据化：研发过程系统化，数据化，使得研发过程可量化。比如新建项目的时间，我们可以通过脚手架工具实现其可统计为时间指标，有了指标就能够进一步为我们后续的脚手架迭代带来方向和目标。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>脚手架分类：</p>
<ul>
<li>
<p>通用脚手架工具：</p>
<ul>
<li><strong>Yeoman</strong> 通用项目脚手架 灵活易拓展</li>
<li><strong>Plop</strong> 创建特定类型的文件/模块</li>
</ul>
</li>
<li>
<p>专用脚手架工具：</p>
<ul>
<li>vue 脚手架工具： <a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vue-cli<ExternalLinkIcon/></a></li>
</ul>
<p><img src="@source/images/脚手架分类.png" alt=""></p>
</li>
</ul>
</li>
</ul>
<h3 id="yeoman" tabindex="-1"><a class="header-anchor" href="#yeoman" aria-hidden="true">#</a> <a href="https://yeoman.io/learning/index.html" target="_blank" rel="noopener noreferrer">Yeoman<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p>概念：</p>
<ul>
<li>
<p>Yeoman 是一个通用的脚手架系统，允许创建任何类型的应用程序。它允许快速开始新项目并简化现有项目的维护。</p>
</li>
<li>
<p>Yeoman 是语言不可知论者。它可以生成任何语言的项目（Web、Java、Python、C#等）</p>
</li>
<li>
<p>Yeoman 本身不做任何决定。每个决定都是由<em>生成器</em>做出的，<em>生成器</em>基本上是 Yeoman 环境中的插件。有<a href="https://yeoman.io/generators/" target="_blank" rel="noopener noreferrer">很多公开可用的生成器，<ExternalLinkIcon/></a>并且很容易<a href="https://yeoman.io/authoring/" target="_blank" rel="noopener noreferrer">创建一个新的<ExternalLinkIcon/></a><a href="https://yeoman.io/generators/" target="_blank" rel="noopener noreferrer">生成器<ExternalLinkIcon/></a>来匹配任何工作流程。Yeoman 始终是满足您脚手架需求的正确选择。</p>
<p>以下是一些常见的用例：</p>
<ul>
<li>快速创建新项目</li>
<li>创建项目的新部分，例如带有单元测试的新控制器</li>
<li>创建模块或包</li>
<li>引导新服务</li>
<li>执行标准、最佳实践和风格指南</li>
<li>通过让用户开始使用示例应用程序来推广新项目</li>
</ul>
</li>
</ul>
</li>
<li>
<p>yo 是 Yeoman 的命令行管理工具，可以在命令行运行 yeoman 的命令。</p>
</li>
<li>
<p>generator 生成器则是 Yeoman 中具体的脚手架。针对不同的项目，例如网站、APP、小程序等，有不同的脚手架生成器。</p>
<p><img src="@source/images/脚手架yo流程.png" alt=""></p>
</li>
<li>
<p>Yeoman 使用说明及使用步骤：具体使用查看<a href="https://yeoman.io/learning/index.html" target="_blank" rel="noopener noreferrer">Yeoman 文档<ExternalLinkIcon/></a></p>
<ul>
<li>全局安装 yo：<code v-pre>npm install -g yo</code></li>
<li>安装 generator：不同的 generator 可以生成不同的项目。</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install -g generator-webapp  ||  npm install -g generator-node 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>通过 yo 运行 generator：<code v-pre>yo webapp || yo node</code></li>
<li>启动应用：<code v-pre>npm run start</code></li>
</ul>
</li>
<li>
<p>使用步骤：</p>
<p>1：明确你的需求;</p>
<p>2：找到合适的 Generator;</p>
<p>3：全局范围安装找到的 Generator;</p>
<p>4：通过 Yo 运行对应的 Generator;</p>
<p>5：通过命令行交互填写选项;</p>
<p>6：生成你所需要的项目结构;</p>
</li>
<li>
<p>具体构建流程查看官方文档<a href="https://yeoman.io/learning/index.html" target="_blank" rel="noopener noreferrer">Yeoman 文档<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="构建脚手架" tabindex="-1"><a class="header-anchor" href="#构建脚手架" aria-hidden="true">#</a> 构建脚手架</h3>
<ul>
<li>
<p>创建脚手架流程</p>
<p><img src="@source/images/脚手架流程.png" alt=""></p>
</li>
<li>
<p>构建脚手架方式：</p>
<ul>
<li>使用 Yeoman</li>
<li>使用 Node 自定义：<a href="https://zhuanlan.zhihu.com/p/37929333" target="_blank" rel="noopener noreferrer">使用 Node.js 开发简单的脚手架工具<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> Vue-cli</h3>
<h4 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h4>
<ul>
<li>构建的 vue-cli 工程都到了哪些技术，它们的作用分别是什么？
<ul>
<li><code v-pre>vue.js</code>：<code v-pre>vue-cli</code> 工程的核心。</li>
<li><code v-pre>vue-router</code>：vue官方推荐使用的路由框架。</li>
<li><code v-pre>vuex</code>：专为 Vue.js 应用项目开发的状态管理器，主要用于维护vue组件间共用的一些 变量 和 方法。</li>
<li><code v-pre>axios</code>（ 或者 fetch 、ajax ）：用于发起 GET 、或 POST 等 http请求，基于 Promise 设计。</li>
<li><code v-pre>vux</code> 等组件库：一个专为 vue 设计的移动端UI组件库。</li>
<li><code v-pre>emit.js</code> 文件，用于 vue 事件机制的管理。</li>
<li><code v-pre>webpack</code>：模块加载和 vue-cli 工程打包器。</li>
</ul>
</li>
<li>vue-cli 工程常用的 npm 命令有哪些？
<ul>
<li>下载 node_modules 资源包的命令：<code v-pre>npm install</code></li>
<li>启动 vue-cli 开发环境的 npm命令：<code v-pre>npm run dev</code></li>
<li>vue-cli 生成 生产环境部署资源 的 npm命令：<code v-pre>npm run build</code></li>
<li>用于查看 vue-cli 生产环境部署资源文件大小的 npm命令：<code v-pre>npm run build --report</code></li>
</ul>
</li>
<li>自定义脚本命令： 在 script 添加命令，使用 <code v-pre>npm run 命令</code> 执行命令。</li>
<li>vue-cli目录解析：
<ul>
<li>build 文件夹：用于存放 webpack 相关配置和脚本。开发中仅 偶尔使用 到此文件夹下 webpack.base.conf.js 用于配置 less、sass等css预编译库，或者配置一下 UI 库。</li>
<li>config 文件夹：主要存放配置文件，用于区分开发环境、线上环境的不同。 常用到此文件夹下 config.js 配置开发环境的 端口号、是否开启热加载 或者 设置生产环境的静态资源相对路径、是否开启gzip压缩、npm run build 命令打包生成静态资源的名称和路径等。</li>
<li>dist 文件夹：默认 npm run build 命令打包生成的静态资源文件，用于生产部署。</li>
<li>node_modules：存放npm命令下载的开发环境和生产环境的依赖包。</li>
<li>src: 存放项目源码及需要引用的资源文件。</li>
<li>src/assets：存放项目中需要用到的资源文件，css、js、images等。</li>
<li>src/componets：存放vue开发中一些公共组件：header.vue、footer.vue等。</li>
<li>src/emit：自己配置的vue集中式事件管理机制。</li>
<li>src/router：vue-router vue路由的配置文件。</li>
<li>src/service：自己配置的vue请求后台接口方法。</li>
<li>src/page：存在vue页面组件的文件夹。</li>
<li>src/util：存放vue开发过程中一些公共的.js方法。</li>
<li>src/vuex：存放 vuex 为vue专门开发的状态管理器。</li>
<li>src/app.vue：使用标签<code v-pre>&lt;route-view&gt;&lt;/router-view&gt;</code>渲染整个工程的.vue组件。</li>
<li>src/main.js：vue-cli工程的入口文件。</li>
<li>index.html：设置项目的一些meta头信息和提供<code v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>用于挂载 vue 节点。</li>
<li>package.json：用于 node_modules资源部 和 启动、打包项目的 npm 命令管理。</li>
</ul>
</li>
</ul>
<h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4>
<ul>
<li>执行过程：
<ul>
<li>终端输入<code v-pre>vue create vue-test-app</code></li>
<li>终端解析出<code v-pre>vue</code>主命令</li>
<li>终端在环境变量中找到<code v-pre>vue</code>命令</li>
<li>终端根据<code v-pre>vue</code>命令链接到实际可执行文件vue.js</li>
<li>终端利用node执行vue.js</li>
<li>vue.js解析command和option</li>
<li>vue.js执行command</li>
<li>执行完毕，退出执行</li>
</ul>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://cli.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">vue-cli<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/6844903833160646663#heading-22" target="_blank" rel="noopener noreferrer">自己搭建vue开发环境<ExternalLinkIcon/></a></p>
<p><a href="https://cloud.tencent.com/developer/article/1781202#:~:text=Vue%20CLI%20%E6%98%AF%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20Vue.js%20%E8%BF%9B%E8%A1%8C%E5%BF%AB%E9%80%9F%E5%BC%80%E5%8F%91%E7%9A%84%E5%AE%8C%E6%95%B4%E7%B3%BB%E7%BB%9F%EF%BC%8C%E6%8F%90%E4%BE%9B%E4%BA%86%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7%E3%80%81%E9%9B%B6%E9%85%8D%E7%BD%AE%E8%84%9A%E6%89%8B%E6%9E%B6%E3%80%81%E6%8F%92%E4%BB%B6%E4%BD%93%E7%B3%BB%E3%80%81%E5%9B%BE%E5%BD%A2%E5%8C%96%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2%E7%AD%89%E3%80%82,%E6%9C%AC%E6%96%87%E6%9A%82%E4%B8%94%E5%8F%AA%E5%88%86%E6%9E%90%20%E9%A1%B9%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96%20%E9%83%A8%E5%88%86%EF%BC%8C%E4%B9%9F%E5%B0%B1%E6%98%AF%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7%E7%9A%84%E5%AE%9E%E7%8E%B0%E3%80%82%200.%20%E7%94%A8%E6%B3%95" target="_blank" rel="noopener noreferrer">剖析 Vue CLI 实现原理<ExternalLinkIcon/></a></p>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<p><a href="https://yeoman.io/learning/index.html" target="_blank" rel="noopener noreferrer">Yeoman 文档<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/kAHipuplQpe0XbnI7e8rnA" target="_blank" rel="noopener noreferrer">如何快速开发一个自己的项目脚手架？<ExternalLinkIcon/></a></p>
<p><a href="https://www.bilibili.com/video/BV1gV41177Bh?p=7" target="_blank" rel="noopener noreferrer">前端工程化体系建设从理念到实战<ExternalLinkIcon/></a></p>
<h2 id="构建工具" tabindex="-1"><a class="header-anchor" href="#构建工具" aria-hidden="true">#</a> 构建工具</h2>
<h3 id="npm-script" tabindex="-1"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> npm script</h3>
<ul>
<li>
<p>npm 允许在<code v-pre>package.json</code>文件里面，使用<code v-pre>scripts</code>字段定义脚本命令。</p>
<blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   	<span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"node build.js"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>npm script 任务：</p>
<p><img src="@source/images/npmscirpt.png" alt=""></p>
</li>
<li>
<p>原理：</p>
<ul>
<li>
<p>每当执行<code v-pre>npm run</code>，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。</p>
<p>比较特别的是，<code v-pre>npm run</code>新建的这个 Shell，会将当前目录的<code v-pre>node_modules/.bin</code>子目录加入<code v-pre>PATH</code>变量，执行结束后，再将<code v-pre>PATH</code>变量恢复原样。</p>
<p>这意味着，当前目录的<code v-pre>node_modules/.bin</code>子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写<code v-pre>mocha test</code>就可以了。</p>
<blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"mocha test"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p>而不用写成下面这样。</p>
<blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"./node_modules/.bin/mocha test"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p>由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。</p>
<p>npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是<code v-pre>0</code>，npm 就认为这个脚本执行失败</p>
</li>
</ul>
</li>
<li>
<p>应用：</p>
<ul>
<li>
<p>在项目，可以添加多个命令脚本，执行 <code v-pre>npm run 命令</code> 的方式执行不同的脚本</p>
<p><img src="@source/images/npmscript2.png" alt=""></p>
</li>
</ul>
</li>
</ul>
<h3 id="参考资料-1" tabindex="-1"><a class="header-anchor" href="#参考资料-1" aria-hidden="true">#</a> 参考资料</h3>
<p><a href="http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html" target="_blank" rel="noopener noreferrer">npm scripts 使用指南<ExternalLinkIcon/></a></p>
<h2 id="模块化打包工具" tabindex="-1"><a class="header-anchor" href="#模块化打包工具" aria-hidden="true">#</a> 模块化打包工具</h2>
<h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> WebPack</h3>
<h2 id="标准化规范和工具" tabindex="-1"><a class="header-anchor" href="#标准化规范和工具" aria-hidden="true">#</a> 标准化规范和工具</h2>
<h3 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h3>
<h4 id="javascript-代码规范" tabindex="-1"><a class="header-anchor" href="#javascript-代码规范" aria-hidden="true">#</a> JavaScript 代码规范</h4>
<p>在平常项目开发中，我们遵守一些基本规范，比如说：</p>
<ul>
<li>一个函数作用域中所有的变量声明应该尽量提到函数首部。</li>
<li>用一个var声明，不允许出现两个连续的var声明，声明时如果变量没有值，应该给该变量赋值对应类型的初始值，便于他人阅读代码时，能够一目了然的知道变量对应的类型值。</li>
<li>代码中出现地址、时间等字符串时需要使用常量代替。</li>
<li>在进行比较的时候吧，尽量使用 '===', '!==' 代替 '==', '!='。</li>
<li>不要在内置对象的原型上添加方法，如 Array,Date。</li>
<li>switch 语句必须带有 default 分支。</li>
<li>for 循环必须使用大括号。</li>
<li>if 语句必须使用大括号。</li>
</ul>
<h2 id="自动部署和工具" tabindex="-1"><a class="header-anchor" href="#自动部署和工具" aria-hidden="true">#</a> 自动部署和工具</h2>
</div></template>



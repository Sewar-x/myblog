<template><div><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2>
<h3 id="概念和api" tabindex="-1"><a class="header-anchor" href="#概念和api" aria-hidden="true">#</a> 概念和API</h3>
<ul>
<li>概念：Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js。它是 <em><a href="https://www.lullabot.com/articles/what-is-an-isomorphic-application" target="_blank" rel="noopener noreferrer">isomorphic<ExternalLinkIcon/></a></em> 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js <code v-pre>http</code> 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。</li>
<li>特性:
<ul>
<li>从浏览器创建 <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank" rel="noopener noreferrer">XMLHttpRequests<ExternalLinkIcon/></a></li>
<li>从 node.js 创建 <a href="http://nodejs.org/api/http.html" target="_blank" rel="noopener noreferrer">http<ExternalLinkIcon/></a> 请求</li>
<li>支持 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<ExternalLinkIcon/></a> API</li>
<li>拦截请求和响应</li>
<li>转换请求和响应数据</li>
<li>取消请求</li>
<li>自动转换JSON数据</li>
<li>客户端支持防御<a href="http://en.wikipedia.org/wiki/Cross-site_request_forgery" target="_blank" rel="noopener noreferrer">XSRF<ExternalLinkIcon/></a>：添加 <code v-pre>xsrf</code> 头，默认为 cookie的编码值： <code v-pre>{ 'X-XSRF-TOKEN':decodeURIComponent(document.cookie) }</code></li>
</ul>
</li>
<li>常用 API：
<ul>
<li><code v-pre>axios.request(config)</code></li>
<li><code v-pre>axios.get(url[, config])</code></li>
<li><code v-pre>axios.delete(url[, config])</code></li>
<li><code v-pre>axios.head(url[, config])</code></li>
<li><code v-pre>axios.options(url[, config])</code></li>
<li><code v-pre>axios.post(url[, data[, config]])</code></li>
<li><code v-pre>axios.put(url[, data[, config]])</code></li>
<li><code v-pre>axios.patch(url[, data[, config]])</code></li>
<li>并发请求：<code v-pre>Promise.all()</code></li>
<li>创建实例: <code v-pre>axios.create([config])</code></li>
</ul>
</li>
</ul>
<h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h3>
<p><img src="@source/flow-graph/axios流程.png" alt=""></p>
<ul>
<li>axios 执行流程：
<ol>
<li>在实例化 axios 时，通过创建 axios 实例添加实例配置或修改默认配置</li>
<li>使用 <code v-pre>axios.interceptors.request.use</code> 往 axios 实例中添加请求/响应拦截器</li>
<li>请求方法调用 <code v-pre>request()</code> 方法 (axios的所有请求方法都是该方法的封装)</li>
<li>request() 方法中循环遍历 request interceptors 和 response interceptors，分别将 request 和 respose 拦截器实例加入 chain 队列头部和尾部，生成 [请求拦截器, dispatchRequest, 响应拦截器] 堆栈(使用了promise的链式调用)</li>
<li>循环遍历执行堆栈: 传入 config promise 对象 -&gt; 执行所有 request handler -&gt; dispatchRequest -&gt; Adapter 对象 -&gt; 根据环境调用 http/xhr 对象 -&gt; settle() 方法验证结果 -&gt; 执行所有响应拦截器对象 -&gt; 前端/服务器。</li>
<li>前端/服务器使用axios请求方法发起请求 (axios.get, axios.post ...)</li>
</ol>
</li>
</ul>
<h3 id="axios-实例" tabindex="-1"><a class="header-anchor" href="#axios-实例" aria-hidden="true">#</a> axios 实例</h3>
<p>axios 实例使用方式:</p>
<ul>
<li>第1种使用方式：<code v-pre>axios(option)</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token punctuation">,</span>
  method<span class="token punctuation">,</span>
  headers<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第2种使用方式：<code v-pre>axios(url[, option])</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  method<span class="token punctuation">,</span>
  headers<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第3种使用方式（对于get、delete等方法）：<code v-pre>axios[method</code>](url[, option])</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  headers<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第4种使用方式（对于post、put等方法）：<code v-pre>axios[method</code>](url[, data[, option]])</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  headers<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第5种使用方式：<code v-pre>axios.request(option)</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token punctuation">,</span>
  method<span class="token punctuation">,</span>
  headers<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="axios-默认实例" tabindex="-1"><a class="header-anchor" href="#axios-默认实例" aria-hidden="true">#</a> axios 默认实例</h4>
<ul>
<li>
<p>导入默认 axios 实例：<code v-pre>import axios from 'axios'</code></p>
</li>
<li>
<p>axios 默认导出一个实例，修改了axios的默认配置，会影响所有的请求。</p>
<ul>
<li>
<p>当在 a.js 文件中导入 axios 并修改默认配置后</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>如果 b.js 中依赖 a.js 文件，在 b.js 中导入 axios，则 b.js 中的 axios 实例被 a.js 中影响</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//b.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL<span class="token punctuation">)</span> <span class="token comment">//https://api.example.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>解决方案： 每一个独立导入 axios 的文件中都创建新的 axios 实例，再修改配置。</p>
</li>
</ul>
</li>
</ul>
<p><strong>源码分析：</strong></p>
<ul>
<li>
<p>在入口文件中：使用默认配置创建一个 axios 实例并导出。定义在 <a href="https://github.com/axios/axios/blob/master/lib/axios.js" target="_blank" rel="noopener noreferrer">lib/axios.js<ExternalLinkIcon/></a></p>
<p><img src="@source/images/默认实例.png" alt=""></p>
</li>
<li>
<p>axios 实例对象定义默认配置和拦截器：定义在 <a href="https://github.com/axios/axios/blob/master/lib/core/Axios.js" target="_blank" rel="noopener noreferrer">lib/core/Axios.js<ExternalLinkIcon/></a></p>
</li>
</ul>
<p><img src="@source/images/实例对象.png" alt=""></p>
<h4 id="创建实例" tabindex="-1"><a class="header-anchor" href="#创建实例" aria-hidden="true">#</a> 创建实例</h4>
<ul>
<li>
<p>API ： <code v-pre>axios.create([config])</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://some-domain.com/api/'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'X-Custom-Header'</span><span class="token operator">:</span> <span class="token string">'foobar'</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>源码分析</strong></p>
<ul>
<li>
<p><code v-pre>axios.create([config]) </code> 通过传入实例参数，合并默认配置和传入配置项，使用原型式继承创建新的实例。定义在 <a href="https://github.com/axios/axios/blob/master/lib/axios.js" target="_blank" rel="noopener noreferrer">lib/axios.js<ExternalLinkIcon/></a></p>
<p><img src="@source/images/create.png" alt=""></p>
</li>
</ul>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<p>axios 配置分为三类：</p>
<ul>
<li>axios 默认配置：创建默认 axios 实例的默认配置；</li>
<li>axios 用户自定义实例配置： 通过 <code v-pre>axios.create(config)</code> 时传入的配置；</li>
<li>请求的 <code v-pre>config</code> 配置： 在实例使用时传入的配置项。</li>
</ul>
<h4 id="默认配置" tabindex="-1"><a class="header-anchor" href="#默认配置" aria-hidden="true">#</a> 默认配置</h4>
<ul>
<li>
<p>全局配置 <code v-pre>axios.defaults</code></p>
</li>
<li>
<p>自定义实例配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建实例时配置默认值</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://api.example.com'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建实例后修改默认值</span>
instance<span class="token punctuation">.</span>defaults
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>请求配置选项。只有 <code v-pre>url</code> 是必需的。如果没有指定 <code v-pre>method</code>，请求将默认使用 <code v-pre>GET</code> 方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// `url` 是用于请求的服务器 URL</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>

  <span class="token comment">// `method` 是创建请求时使用的方法</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。</span>
  <span class="token comment">// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://some-domain.com/api/'</span><span class="token punctuation">,</span>

  <span class="token comment">// `transformRequest` 允许在向服务器发送前，修改请求数据</span>
  <span class="token comment">// 它只能用与 'PUT', 'POST' 和 'PATCH' 这几个请求方法</span>
  <span class="token comment">// 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream</span>
  <span class="token comment">// 你可以修改请求头。</span>
  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对发送的 data 进行任意转换处理</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// `transformResponse` 在传递给 then/catch 前，允许修改响应数据</span>
  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对接收的 data 进行任意转换处理</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 自定义请求头</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'X-Requested-With'</span><span class="token operator">:</span> <span class="token string">'XMLHttpRequest'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `params` 是与请求一起发送的 URL 参数</span>
  <span class="token comment">// 必须是一个简单对象或 URLSearchParams 对象</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `paramsSerializer`是可选方法，主要用于序列化`params`</span>
  <span class="token comment">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)</span>
  <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">'brackets'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `data` 是作为请求体被发送的数据</span>
  <span class="token comment">// 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法</span>
  <span class="token comment">// 在没有设置 `transformRequest` 时，则必须是以下类型之一:</span>
  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>
  <span class="token comment">// - 浏览器专属: FormData, File, Blob</span>
  <span class="token comment">// - Node 专属: Stream, Buffer</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Fred'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 发送请求体数据的可选语法</span>
  <span class="token comment">// 请求方式 post</span>
  <span class="token comment">// 只有 value 会被发送，key 则不会</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'Country=Brasil&amp;City=Belo Horizonte'</span><span class="token punctuation">,</span>

  <span class="token comment">// `timeout` 指定请求超时的毫秒数。</span>
  <span class="token comment">// 如果请求时间超过 `timeout` 的值，则请求会被中断</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 默认值是 `0` (永不超时)</span>

  <span class="token comment">// `withCredentials` 表示跨域请求时是否需要使用凭证</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// `adapter` 允许自定义处理请求，这使测试更加容易。</span>
  <span class="token comment">// 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。</span>
  <span class="token function-variable function">adapter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `auth` HTTP Basic Auth</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'janedoe'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'s00pers3cret'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `responseType` 表示浏览器将要响应的数据类型</span>
  <span class="token comment">// 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'</span>
  <span class="token comment">// 浏览器专属：'blob'</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)</span>
  <span class="token comment">// 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求</span>
  <span class="token comment">// Note: Ignored for `responseType` of 'stream' or client-side requests</span>
  <span class="token literal-property property">responseEncoding</span><span class="token operator">:</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称</span>
  <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">'XSRF-TOKEN'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称</span>
  <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">'X-XSRF-TOKEN'</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `onUploadProgress` 允许为上传处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `onDownloadProgress` 允许为下载处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数</span>
  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// `maxBodyLength`（仅Node）定义允许的http请求内容的最大字节数</span>
  <span class="token literal-property property">maxBodyLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。</span>
  <span class="token comment">// 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，</span>
  <span class="token comment">// 则promise 将会 resolved，否则是 rejected。</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// 默认值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `maxRedirects` 定义了在node.js中要遵循的最大重定向数。</span>
  <span class="token comment">// 如果设置为0，则不会进行重定向</span>
  <span class="token literal-property property">maxRedirects</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// `socketPath` 定义了在node.js中使用的UNIX套接字。</span>
  <span class="token comment">// e.g. '/var/run/docker.sock' 发送请求到 docker 守护进程。</span>
  <span class="token comment">// 只能指定 `socketPath` 或 `proxy` 。</span>
  <span class="token comment">// 若都指定，这使用 `socketPath` 。</span>
  <span class="token literal-property property">socketPath</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// `httpAgent` and `httpsAgent` define a custom agent to be used when performing http</span>
  <span class="token comment">// and https requests, respectively, in node.js. This allows options to be added like</span>
  <span class="token comment">// `keepAlive` that are not enabled by default.</span>
  <span class="token literal-property property">httpAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">http<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">httpsAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">https<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// `proxy` 定义了代理服务器的主机名，端口和协议。</span>
  <span class="token comment">// 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。</span>
  <span class="token comment">// 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。</span>
  <span class="token comment">// `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。</span>
  <span class="token comment">// 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。</span>
  <span class="token comment">// 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">'https'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'mikeymike'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'rapunz3l'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// see https://axios-http.com/docs/cancellation</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// `decompress` indicates whether or not the response body should be decompressed </span>
  <span class="token comment">// automatically. If set to `true` will also remove the 'content-encoding' header </span>
  <span class="token comment">// from the responses objects of all decompressed responses</span>
  <span class="token comment">// - Node only (XHR cannot turn off decompression)</span>
  <span class="token literal-property property">decompress</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 默认值</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>源码分析：</strong></p>
<ul>
<li>
<p>默认配置选项在创建 axios 默认实例时传入，定义在 <a href="https://github.com/axios/axios/blob/master/lib/defaults.js" target="_blank" rel="noopener noreferrer">lib/defaults.js<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> defaults <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">getDefaultAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token function">transformRequest</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">normalizeHeaderName</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">'Accept'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">normalizeHeaderName</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">'Content-Type'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isFormData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isArrayBuffer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isBuffer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isStream</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isBlob</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isArrayBufferView</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>buffer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isURLSearchParams</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setContentTypeIfUnset</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">'application/x-www-form-urlencoded;charset=utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setContentTypeIfUnset</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">'application/json;charset=utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token function">transformResponse</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*eslint no-param-reassign:0*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* Ignore */</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

  <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">'XSRF-TOKEN'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">'X-XSRF-TOKEN'</span><span class="token punctuation">,</span>

  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxBodyLength</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">validateStatus</span><span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

defaults<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Accept'</span><span class="token operator">:</span> <span class="token string">'application/json, text/plain, */*'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'delete'</span><span class="token punctuation">,</span> <span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'head'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachMethodNoData</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  defaults<span class="token punctuation">.</span>headers<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'put'</span><span class="token punctuation">,</span> <span class="token string">'patch'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachMethodWithData</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  defaults<span class="token punctuation">.</span>headers<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_CONTENT_TYPE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="配置信息合并" tabindex="-1"><a class="header-anchor" href="#配置信息合并" aria-hidden="true">#</a> 配置信息合并</h4>
<ul>
<li>
<p>请求配置信息合并策略：请求的 <code v-pre>config</code> 参数 &gt; 实例的 <code v-pre>defaults</code> 属性 &gt; 库默认值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用库提供的默认配置创建实例</span>
<span class="token comment">// 此时超时配置的默认值是 `0`</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 重写库的超时默认值</span>
<span class="token comment">// 现在，所有使用此实例的请求都将等待2.5秒，然后才会超时</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">2500</span><span class="token punctuation">;</span>

<span class="token comment">// 重写此请求的超时时间，因为该请求需要很长时间</span>
instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/longRequest'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>源码分析</strong></p>
<ul>
<li>
<p>在 <code v-pre> axios.create(config)</code> 创建实例时候，将传入 配置项与默认配置项目通过 <code v-pre>mergeConfig</code> 合并，将实例配置覆盖默认配置。</p>
<p><img src="@source/images/请求合并.png" alt=""></p>
</li>
<li>
<p>在实际请求过程中，调用 <code v-pre>axios.request()</code> 方法请求，该方法将实际请求配置与默认配置合并，用实际配置覆盖默认配置。</p>
<p><img src="@source/images/请求合并2.png" alt=""></p>
</li>
<li>
<p><code v-pre>mergeConfig</code>定义在<a href="https://github.com/axios/axios/blob/e9965bfafc82d8b42765705061b9ebe2d5532493/lib/core/mergeConfig.js" target="_blank" rel="noopener noreferrer">lib/core/mergeConfig.js<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span><span class="token parameter">config1<span class="token punctuation">,</span> config2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint-disable-next-line no-param-reassign</span>
  config2 <span class="token operator">=</span> config2 <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> valueFromConfig2Keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'url'</span><span class="token punctuation">,</span> <span class="token string">'method'</span><span class="token punctuation">,</span> <span class="token string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> mergeDeepPropertiesKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'headers'</span><span class="token punctuation">,</span> <span class="token string">'auth'</span><span class="token punctuation">,</span> <span class="token string">'proxy'</span><span class="token punctuation">,</span> <span class="token string">'params'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> defaultToConfig2Keys <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'baseURL'</span><span class="token punctuation">,</span> <span class="token string">'transformRequest'</span><span class="token punctuation">,</span> <span class="token string">'transformResponse'</span><span class="token punctuation">,</span> <span class="token string">'paramsSerializer'</span><span class="token punctuation">,</span>
    <span class="token string">'timeout'</span><span class="token punctuation">,</span> <span class="token string">'timeoutMessage'</span><span class="token punctuation">,</span> <span class="token string">'withCredentials'</span><span class="token punctuation">,</span> <span class="token string">'adapter'</span><span class="token punctuation">,</span> <span class="token string">'responseType'</span><span class="token punctuation">,</span> <span class="token string">'xsrfCookieName'</span><span class="token punctuation">,</span>
    <span class="token string">'xsrfHeaderName'</span><span class="token punctuation">,</span> <span class="token string">'onUploadProgress'</span><span class="token punctuation">,</span> <span class="token string">'onDownloadProgress'</span><span class="token punctuation">,</span> <span class="token string">'decompress'</span><span class="token punctuation">,</span>
    <span class="token string">'maxContentLength'</span><span class="token punctuation">,</span> <span class="token string">'maxBodyLength'</span><span class="token punctuation">,</span> <span class="token string">'maxRedirects'</span><span class="token punctuation">,</span> <span class="token string">'transport'</span><span class="token punctuation">,</span> <span class="token string">'httpAgent'</span><span class="token punctuation">,</span>
    <span class="token string">'httpsAgent'</span><span class="token punctuation">,</span> <span class="token string">'cancelToken'</span><span class="token punctuation">,</span> <span class="token string">'socketPath'</span><span class="token punctuation">,</span> <span class="token string">'responseEncoding'</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> directMergeKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'validateStatus'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> utils<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> utils<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> utils<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> source<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">mergeDeepProperties</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span>config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">,</span> config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>valueFromConfig2Keys<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">valueFromConfig2</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>mergeDeepPropertiesKeys<span class="token punctuation">,</span> mergeDeepProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>

  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>defaultToConfig2Keys<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">defaultToConfig2</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>directMergeKeys<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token keyword">in</span> config2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span>config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">,</span> config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token keyword">in</span> config1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> axiosKeys <span class="token operator">=</span> valueFromConfig2Keys
    <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>mergeDeepPropertiesKeys<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>defaultToConfig2Keys<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>directMergeKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> otherKeys <span class="token operator">=</span> Object
    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>config1<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>config2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">filterAxiosKeys</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> axiosKeys<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>otherKeys<span class="token punctuation">,</span> mergeDeepProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h4 id="响应信息" tabindex="-1"><a class="header-anchor" href="#响应信息" aria-hidden="true">#</a> 响应信息</h4>
<ul>
<li>
<p>响应信息。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// `data` 由服务器提供的响应</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `status` 来自服务器响应的 HTTP 状态码</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// `statusText` 来自服务器响应的 HTTP 状态信息</span>
  <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">'OK'</span><span class="token punctuation">,</span>

  <span class="token comment">// `headers` 是服务器响应头</span>
  <span class="token comment">// 所有的 header 名称都是小写，而且可以使用方括号语法访问</span>
  <span class="token comment">// 例如: `response.headers['content-type']`</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `config` 是 `axios` 请求的配置信息</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// `request` 是生成此响应的请求</span>
  <span class="token comment">// 在node.js中它是最后一个ClientRequest实例 (in redirects)，</span>
  <span class="token comment">// 在浏览器中则是 XMLHttpRequest 实例</span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h3>
<ul>
<li>
<p>添加拦截器：在请求或响应被 then 或 catch 处理前拦截它们。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 添加请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在发送请求之前做些什么</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对请求错误做些什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应数据做点什么</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应错误做点什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>移除拦截器：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> myInterceptor <span class="token operator">=</span> axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">eject</span><span class="token punctuation">(</span>myInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>自定义的 axios 实例添加拦截器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>源码分析</strong></p>
<ul>
<li>
<p>axios 对象中拦截器的定义在 axios 实例中： <a href="https://github.com/axios/axios/blob/e9965bfafc82d8b42765705061b9ebe2d5532493/lib/core/Axios.js" target="_blank" rel="noopener noreferrer">lib/core/Axios.js<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Axios</span><span class="token punctuation">(</span><span class="token parameter">instanceConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>defaults <span class="token operator">=</span> instanceConfig<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//请求拦截器</span>
    <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//响应拦截器</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>拦截器定义：拦截器实际是一个队列，use 方法往队列中添加拦截器。定义在<a href="https://github.com/axios/axios/blob/e9965bfafc82d8b42765705061b9ebe2d5532493/lib/core/InterceptorManager.js" target="_blank" rel="noopener noreferrer">lib/core/InterceptorManager.js<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//拦截器对象</span>
<span class="token keyword">function</span> <span class="token function">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>handlers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//拦截器堆栈</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Add a new interceptor to the stack
 * 往拦截器堆栈中添加拦截器
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fulfilled</span> The function to handle `then` for a `Promise`
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">rejected</span> The function to handle `reject` for a `Promise`
 *
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> An ID used to remove interceptor later
 */</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">use</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">fulfilled<span class="token punctuation">,</span> rejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fulfilled</span><span class="token operator">:</span> fulfilled<span class="token punctuation">,</span>
    <span class="token literal-property property">rejected</span><span class="token operator">:</span> rejected
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Remove an interceptor from the stack
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">id</span> The ID that was returned by `use`
 */</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">eject</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> The function to call for each interceptor
 */</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">forEach</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachHandler</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h3>
<h4 id="核心方法-request" tabindex="-1"><a class="header-anchor" href="#核心方法-request" aria-hidden="true">#</a> 核心方法:request</h4>
<ul>
<li>
<p>Axios 构造函数的核心方法是 request 方法，各种 axios 的调用方式最终都是通过<code v-pre>axios.request(config)</code>方法发请求的。</p>
</li>
<li>
<p><code v-pre>axios.request(config)</code> 主要流程：</p>
<ul>
<li>合并请求配置；</li>
<li>创建循环队列，队列初始数据为请求适配器对象；</li>
<li>遍历请求拦截器队列，往循环队列头中添加请求拦截器；</li>
<li>遍历响应拦截器队列，往循环队列尾部添加响应拦截器；</li>
<li>串行执行异步循环队列；
<ul>
<li>注意：axios 请求是串行执行异步请求的，也就是说会按照请求入队列的逆序执行，某个请求的响应会等待上一个请求的响应返回后才能执行。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>源码：定义在 <a href="https://github.com/axios/axios/blob/e9965bfafc82d8b42765705061b9ebe2d5532493/lib/core/Axios.js" target="_blank" rel="noopener noreferrer">lib/core/Axios.js<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*eslint no-param-reassign:0*/</span>
  <span class="token comment">// Allow for axios('example/url'[, config]) a la fetch API</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> config <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    config<span class="token punctuation">.</span>url <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    config <span class="token operator">=</span> config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//合并用户传入配置和axios默认配置(this.defaults是创建axios实例时传入的mergeConfig(axios.defaults, instanceConfig))</span>
  config <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Set config.method</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>method <span class="token operator">=</span> config<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">'get'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Hook up interceptors middleware</span>
  <span class="token comment">//循环队列</span>
  <span class="token keyword">var</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span>dispatchRequest<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 将config对象当作参数传给Primise.resolve方法</span>
  <span class="token keyword">var</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//遍历所有请求拦截器，将所有请求拦截器添加到循环队列头部</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">unshiftRequestInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//遍历所有响应拦截器，将所有响应拦截器添加到循环队列尾部</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">pushResponseInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 添加了拦截器后的chain数组大概会是这样的：</span>
  <span class="token comment">// [</span>
  <span class="token comment">//   requestFulfilledFn, requestRejectedFn, ..., </span>
  <span class="token comment">//   dispatchRequest, undefined,</span>
  <span class="token comment">//   responseFulfilledFn, responseRejectedFn, ....,</span>
  <span class="token comment">// ]</span>
  <span class="token comment">// config会按序通过 请求拦截器 - dispatchRequest方法 - 响应拦截器</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>chain<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 串行执行循环队列 chain</span>
    promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> promise<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>模拟实现请求队列</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//请求1</span>
<span class="token keyword">let</span> <span class="token function-variable function">req1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'request1 start->'</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'request1->'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'request1 end->'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 请求2</span>
<span class="token keyword">let</span> <span class="token function-variable function">req2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'request2 start->'</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token string">'request2->'</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'request2 end->'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 请求3</span>
<span class="token keyword">let</span> <span class="token function-variable function">req3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'request3 start->'</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token string">'request3->'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'request3 end->'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//响应1</span>
<span class="token keyword">let</span> <span class="token function-variable function">res1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get response1->'</span><span class="token punctuation">)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'response1 ->'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1100</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//响应数据2</span>
<span class="token keyword">let</span> <span class="token function-variable function">res2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get response2->'</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token string">'response2->'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">res3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get response3->'</span><span class="token punctuation">)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token string">'response3->'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> requeseInter <span class="token operator">=</span> <span class="token punctuation">[</span>req1<span class="token punctuation">,</span>req2<span class="token punctuation">,</span>req3<span class="token punctuation">]</span>
<span class="token keyword">let</span> responseInter <span class="token operator">=</span> <span class="token punctuation">[</span>res1<span class="token punctuation">,</span>res2<span class="token punctuation">,</span>res3<span class="token punctuation">]</span>

requeseInter<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token operator">=></span>chain<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
responseInter<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token operator">=></span>chain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
    promise  <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：<img src="@source/images/moni-axios.png" alt="img"></p>
<h4 id="其他请求方法" tabindex="-1"><a class="header-anchor" href="#其他请求方法" aria-hidden="true">#</a> 其他请求方法</h4>
<ul>
<li>
<p>Axios 实例就是一个 axios 应用，其他方法都是对 Axios 内容的扩展，axios 构造函数的核心方法是 request 方法，各种 axios 的调用方式最终都是通过 request 方法发请求的。</p>
</li>
<li>
<ul>
<li><code v-pre>axios.get(url[, config])</code></li>
<li><code v-pre>axios.delete(url[, config])</code></li>
<li><code v-pre>axios.head(url[, config])</code></li>
<li><code v-pre>axios.options(url[, config])</code></li>
<li><code v-pre>axios.post(url[, data[, config]])</code></li>
<li><code v-pre>axios.put(url[, data[, config]])</code></li>
<li><code v-pre>axios.patch(url[, data[, config]])</code></li>
</ul>
</li>
<li>
<ul>
<li><code v-pre>axios.get(url[, config])</code></li>
<li><code v-pre>axios.delete(url[, config])</code></li>
<li><code v-pre>axios.head(url[, config])</code></li>
<li><code v-pre>axios.options(url[, config]).</code></li>
<li><code v-pre>axios.post(url[, data[, config]])</code></li>
<li><code v-pre>axios.put(url[, data[, config]])</code></li>
<li><code v-pre>axios.patch(url[, data[, config]])</code></li>
</ul>
</li>
<li>
<p>实现：遍历方法名，合并配置项目参数，返回 reques 方法。定义在 <a href="https://github.com/axios/axios/blob/e9965bfafc82d8b42765705061b9ebe2d5532493/lib/core/Axios.js" target="_blank" rel="noopener noreferrer">lib/core/Axios.js<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Provide aliases for supported request methods</span>
<span class="token comment">//所有请求方法都是封装 request 方法</span>
utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'delete'</span><span class="token punctuation">,</span> <span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'head'</span><span class="token punctuation">,</span> <span class="token string">'options'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachMethodNoData</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*eslint func-names:0*/</span>
  <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> url
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'put'</span><span class="token punctuation">,</span> <span class="token string">'patch'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachMethodWithData</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*eslint func-names:0*/</span>
  <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> data
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="发送请求" tabindex="-1"><a class="header-anchor" href="#发送请求" aria-hidden="true">#</a> 发送请求</h3>
<ul>
<li>
<p>在 axios 中请求方法都是通过 axios.request 完成，上面分析过：request 中初始队列中使用 <code v-pre>dispatchRequest</code> 方法，当拦截器队列中所有请求被串行执行完成后，执行 <code v-pre>dispatchRequest</code> 方法，最后执行响应拦截器。</p>
</li>
<li>
<p><code v-pre>dispatchRequest</code> 方法：定义在<a href="https://github.com/axios/axios/blob/e9965bfafc82d8b42765705061b9ebe2d5532493/lib/core/dispatchRequest.js" target="_blank" rel="noopener noreferrer">/lib/core/dispatchRequest.js<ExternalLinkIcon/></a></p>
<ul>
<li>检查是否取消，若取消则抛出请求取消错误；</li>
<li>处理请求配置 config、转换请求格式；</li>
<li>使用适配器发送请求；</li>
<li>最后处理响应数据：首先检查请求是否已经取消，已经取消抛出请求取消错误；否则转换响应数据并返回。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Dispatch a request to the server using the configured adapter.
 * 使用配置的适配器发送请求
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">config</span> The config that is to be used for the request
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">}</span></span> The Promise to be fulfilled
 */</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//如果已请求取消，抛出' Cancel '。</span>

  <span class="token comment">// Ensure headers exist</span>
  config<span class="token punctuation">.</span>headers <span class="token operator">=</span> config<span class="token punctuation">.</span>headers <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// Transform request data</span>
  <span class="token comment">//transformRequest 是在配置请求配置时候传入的自定义转换方法，在此处请求前转换。</span>
  config<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformData</span><span class="token punctuation">(</span>
    config<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>transformRequest
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Flatten headers</span>
  config<span class="token punctuation">.</span>headers <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span>config<span class="token punctuation">.</span>method<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>headers
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">'delete'</span><span class="token punctuation">,</span> <span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'head'</span><span class="token punctuation">,</span> <span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'put'</span><span class="token punctuation">,</span> <span class="token string">'patch'</span><span class="token punctuation">,</span> <span class="token string">'common'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token function">cleanHeaderConfig</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> adapter <span class="token operator">=</span> config<span class="token punctuation">.</span>adapter <span class="token operator">||</span> defaults<span class="token punctuation">.</span>adapter<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">adapter</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onAdapterResolution</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//响应成功处理方法</span>
    <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Transform response data</span>
    <span class="token comment">// </span>
    response<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformData</span><span class="token punctuation">(</span>
      response<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
      response<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
      config<span class="token punctuation">.</span>transformResponse
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">onAdapterRejection</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//响应失败处理方法</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isCancel</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// Transform response data</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>reason <span class="token operator">&amp;&amp;</span> reason<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        reason<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformData</span><span class="token punctuation">(</span>
          reason<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
          reason<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
          config<span class="token punctuation">.</span>transformResponse
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="适配器" tabindex="-1"><a class="header-anchor" href="#适配器" aria-hidden="true">#</a> 适配器</h3>
<ul>
<li>Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js。它是 <em><a href="https://www.lullabot.com/articles/what-is-an-isomorphic-application" target="_blank" rel="noopener noreferrer">isomorphic<ExternalLinkIcon/></a></em> 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js <code v-pre>http</code> 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。</li>
<li>isomorphic 的实现，使用适配器设计模式来屏蔽平台的差异性，让使用者可以在浏览器端和 NodeJS 环境中使用同一套 API 发起 http 请求。</li>
<li>http请求适配器就是一个方法，在axios项目里，http请求适配器主要指两种：XHR 和 HTTP。
<ul>
<li>XHR：核心是浏览器端的XMLHttpRequest对象。</li>
<li>HTTP：核心是 node 的 http/https 的 request 方法。</li>
</ul>
</li>
</ul>
<p><strong>源码分析：</strong></p>
<ul>
<li>
<p>添加默认是适配器：</p>
<ul>
<li>
<p>在默认导入 axios 实例时，axios 使用默配置创建 axios 实例。</p>
</li>
<li>
<p>在 <a href="https://github.com/axios/axios/blob/master/lib/defaults.js" target="_blank" rel="noopener noreferrer">lib/defaults.js<ExternalLinkIcon/></a>默认配置中使用 <code v-pre>getDefaultAdapter</code> 获取默认 adapter 适配器。</p>
</li>
<li>
<p><code v-pre>getDefaultAdapter</code> 方法：判断 <code v-pre>XMLHttpRequest</code> 和 <code v-pre>process</code> 对象，获取 xhr/http 适配器。</p>
<p><img src="@source/images/默认适配器.png" alt=""></p>
</li>
</ul>
</li>
<li>
<p>使用适配器：</p>
<ul>
<li>在上节中分析到： request 串行请求遍历拦截器 -&gt; <code v-pre>dispatchRequest</code> 返送请求 -&gt; 返回适配器。流程中<code v-pre>dispatchRequest</code> 方法调用适配器。</li>
</ul>
</li>
<li>
<p>XHR 适配器： 创建 <code v-pre>XMLHttpReques</code> 对象，添加请求结果处理、中断超时处理、错误处理方法，进行参数转换、xsrf 处理、请求取消处理等。定义在<a href="https://github.com/axios/axios/blob/e9965bfafc82d8b42765705061b9ebe2d5532493/lib/adapters/xhr.js" target="_blank" rel="noopener noreferrer">lib/adapters/xhr.js<ExternalLinkIcon/></a></p>
</li>
<li>
<p>HTTP 适配器： 参数、配置处理，根据配置创建 http/https/httpsFollow/httpFollow 对象，发送请求。</p>
</li>
<li>
<p>适配器中结果返回后，统一调用 sette() 方法进行结果验证。</p>
</li>
<li>
<p>settle 方法： 使用配置参数中自定义验证方法验证结果。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// /lib/core/settle.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">settle</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> validateStatus <span class="token operator">=</span> response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>validateStatus<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>validateStatus <span class="token operator">||</span> <span class="token function">validateStatus</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">createError</span><span class="token punctuation">(</span>
      <span class="token string">'Request failed with status code '</span> <span class="token operator">+</span> response<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
      response<span class="token punctuation">.</span>config<span class="token punctuation">,</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      response<span class="token punctuation">.</span>request<span class="token punctuation">,</span>
      response
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="取消请求" tabindex="-1"><a class="header-anchor" href="#取消请求" aria-hidden="true">#</a> 取消请求</h3>
<ul>
<li>
<p>使用 <em>cancel token</em> 取消一个请求：Axios 的 cancel token API 是基于被撤销 <a href="https://github.com/tc39/proposal-cancelable-promises" target="_blank" rel="noopener noreferrer">cancelable promises proposal<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>可以使用同一个 cancel token 取消多个请求。</p>
</li>
<li>
<p>取消请求方式：</p>
<ul>
<li>
<p>传递一个 executor 函数到 <code v-pre>CancelToken</code> 的构造函数来创建一个 cancel token：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">let</span> cancel<span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">executor</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// executor 函数接收一个 cancel 函数作为参数，调用 cancel 函数可以取消请求操作</span>
    cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消请求</span>
<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用 <code v-pre>CancelToken.source</code> 工厂方法创建一个 cancel token ：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">const</span> source <span class="token operator">=</span> CancelToken<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> source<span class="token punctuation">.</span>token
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">thrown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">isCancel</span><span class="token punctuation">(</span>thrown<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request canceled'</span><span class="token punctuation">,</span> thrown<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理错误</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'new name'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> source<span class="token punctuation">.</span>token
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 取消请求（message 参数是可选的）</span>
source<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token string">'Operation canceled by the user.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p><strong>源码分析：</strong></p>
<ul>
<li>
<p>取消请求判断时机：在 创建 axios实例 -&gt; 合并配置 -&gt; 添加拦截器 -&gt; 遍历拦截器队列 -&gt; dispatchRequest 分发请求前，检查请求是否取消 -&gt; 适配器发送请求时检查是否取消请求 -&gt; 适配器中响应数据返回到 <code v-pre>dispatchRequest </code> 方法后，再次检查请求是否取消。因此一共经过三次请求取消检查。</p>
<ul>
<li>第一次取消检查：dispatchRequest 分发请求前，检查请求是否取消。在<a href="https://github.com/axios/axios/blob/e9965bfafc82d8b42765705061b9ebe2d5532493/lib/core/dispatchRequest.js" target="_blank" rel="noopener noreferrer">/lib/core/dispatchRequest.js<ExternalLinkIcon/></a>。</li>
</ul>
<p><img src="@source/images/axios取消检查1.png" alt=""></p>
<ul>
<li>
<p>第二次取消检查：适配器发送请求时检查是否取消请求。</p>
<ul>
<li>XHR 适配器中：<img src="@source/images/axios取消检查xhr.png" alt=""></li>
<li>HTTP 是配器中：<img src="@source/images/axios取消检查htp.png" alt=""></li>
</ul>
</li>
<li>
<p>第三次取消检查：适配器中响应数据返回到 <code v-pre>dispatchRequest </code> 方法后，再次检查请求是否取消。</p>
<p><img src="@source/images/axios取消检查3.png" alt=""></p>
</li>
</ul>
</li>
<li>
<p>使用 cancel token 有两种不同使用方式：</p>
<ul>
<li>
<p>传递一个 executor 函数到 <code v-pre>CancelToken</code> 的构造函数来创建一个 cancel token。</p>
<ul>
<li>
<p><code v-pre>CancelToken</code> 的构造函数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 * 一个可以取消请求操作的 CancelToken 对象
 * <span class="token keyword">@class</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">executor</span> The executor function. 参数为执行器函数
 */</span>
<span class="token keyword">function</span> <span class="token function">CancelToken</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> executor <span class="token operator">!==</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//执行器必须为函数</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">'executor must be a function.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> resolvePromise<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">promiseExecutor</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resolvePromise <span class="token operator">=</span> resolve<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> token <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 保存对象上下文</span>
  <span class="token function">executor</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//执行执行器方法，传入 cancel 方法作为 执行器回调</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">.</span>reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Cancellation has already been requested</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    token<span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cancel</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建 cancel 对象</span>
    <span class="token function">resolvePromise</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回 cancel 对象作为回调</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>Cancle</code> 对象定义：只有一个 message 参数，表示取消信息，创建后 <code v-pre>__CANCEL__</code> 变量为 true，用于判断请求是否已经取消。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * <span class="token keyword">@class</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">=</span><span class="token punctuation">}</span></span> <span class="token parameter">message</span> The message.
 */</span>
<span class="token keyword">function</span> <span class="token function">Cancel</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Cancel</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'Cancel'</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">?</span> <span class="token string">': '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Cancel</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__CANCEL__ <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//用于判断请求是否已经取消。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>判断请求是否取消：<code v-pre>isCancel()</code>，判断 Cancel 对象原型中 <code v-pre>__CANCEL__</code> 变量。 当调用执行器的 <code v-pre>cancel()</code> 方法后，会创建<code v-pre>Cancel</code>对象，该对象<code v-pre>__CANCEL__</code> 变量为 true，表示已经取消请求。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">isCancel</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>__CANCEL__<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>使用 <code v-pre>CancelToken.source</code> 工厂方法创建一个 cancel token 过程：<code v-pre> CancelToken.source()</code>方法返回 CancelToken 对象和该对象的取消方法。</p>
<ul>
<li>
<p><code v-pre>CancelToken.source()</code> 源码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 * 返回一个 CancelToken 对象 和 cancel 方法
 */</span>
CancelToken<span class="token punctuation">.</span><span class="token function-variable function">source</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cancel<span class="token punctuation">;</span>
  <span class="token comment">// token 为  CancelToken 实例，传入默认执行器，使用 cancel 保存执行器的取消方法</span>
  <span class="token keyword">var</span> token <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">executor</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> token<span class="token punctuation">,</span>
    <span class="token literal-property property">cancel</span><span class="token operator">:</span> cancel
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3>
<ul>
<li>
<p>错误处理：<code v-pre>catch()</code>、 <code v-pre>validateStatus</code> 配置选项、</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 请求已经成功发起，但没有收到响应</span>
      <span class="token comment">// `error.request` 在浏览器中是 XMLHttpRequest 的实例，</span>
      <span class="token comment">// 而在node.js中是 http.ClientRequest 的实例</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 发送请求时出了点问题</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>validateStatus</code> 配置选项，可以自定义抛出错误的 HTTP code。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">// 处理状态码小于500的情况</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>toJSON</code> 可以获取更多关于HTTP错误的信息。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="请求体编码" tabindex="-1"><a class="header-anchor" href="#请求体编码" aria-hidden="true">#</a> 请求体编码</h3>
<p>默认情况下，axios将 JavaScript 对象序列化为 <code v-pre>JSON</code> 。</p>
<p>要以<code v-pre>application/x-www-form-urlencoded</code>格式发送数据，您可以使用以下选项之一。</p>
<p><strong>浏览器</strong></p>
<p>在浏览器中，可以使用<a href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams" target="_blank" rel="noopener noreferrer"><code v-pre>URLSearchParams</code><ExternalLinkIcon/></a> API，如下所示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'param1'</span><span class="token punctuation">,</span> <span class="token string">'value1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'param2'</span><span class="token punctuation">,</span> <span class="token string">'value2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/foo'</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>请注意，不是所有的浏览器(参见 <a href="http://www.caniuse.com/#feat=urlsearchparams" target="_blank" rel="noopener noreferrer">caniuse.com<ExternalLinkIcon/></a>)都支持 <code v-pre>URLSearchParams</code> ，但是可以使用<a href="https://github.com/WebReflection/url-search-params" target="_blank" rel="noopener noreferrer">polyfill<ExternalLinkIcon/></a> (确保 polyfill 全局环境)</p>
</blockquote>
<p>或者, 您可以使用<a href="https://github.com/ljharb/qs" target="_blank" rel="noopener noreferrer"><code v-pre>qs</code><ExternalLinkIcon/></a> 库编码数据:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> qs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'qs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/foo'</span><span class="token punctuation">,</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">'bar'</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者用另一种方式 (ES6),</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">'qs'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">'bar'</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'content-type'</span><span class="token operator">:</span> <span class="token string">'application/x-www-form-urlencoded'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
  url<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">axios</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Node.js</strong></p>
<ul>
<li>Query string</li>
</ul>
<p>在 node.js 中， 可以使用 <a href="https://nodejs.org/api/querystring.html" target="_blank" rel="noopener noreferrer"><code v-pre>querystring</code><ExternalLinkIcon/></a> 模块，如下所示:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> querystring <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'querystring'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'http://something.com/'</span><span class="token punctuation">,</span> querystring<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者从<a href="https://nodejs.org/api/url.html" target="_blank" rel="noopener noreferrer">'url module'<ExternalLinkIcon/></a>中使用<a href="https://nodejs.org/api/url.html#url_class_urlsearchparams" target="_blank" rel="noopener noreferrer">'URLSearchParams'<ExternalLinkIcon/></a>，如下所示:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'url'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">url<span class="token punctuation">.</span>URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'bar'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'http://something.com/'</span><span class="token punctuation">,</span> params<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您也可以使用 <a href="https://github.com/ljharb/qs" target="_blank" rel="noopener noreferrer"><code v-pre>qs</code><ExternalLinkIcon/></a> 库。</p>
<p><strong>注意</strong></p>
<p>如果需要对嵌套对象进行字符串化处理，则最好使用 <code v-pre>qs</code> 库，因为 querystring 方法在该用例中存在已知问题(https://github.com/nodejs/node-v0.x-archive/issues/1665)。</p>
<p><strong>Form data</strong></p>
<p>在 node.js, 您可以使用 <a href="https://github.com/form-data/form-data" target="_blank" rel="noopener noreferrer"><code v-pre>form-data</code><ExternalLinkIcon/></a> 库，如下所示:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> FormData <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'form-data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'my_field'</span><span class="token punctuation">,</span> <span class="token string">'my value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'my_buffer'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Buffer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'my_file'</span><span class="token punctuation">,</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">'/foo/bar.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'https://example.com'</span><span class="token punctuation">,</span> form<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> form<span class="token punctuation">.</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者, 使用一个拦截器:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>data <span class="token keyword">instanceof</span> <span class="token class-name">FormData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">,</span> config<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2>
<h3 id="axios-封装" tabindex="-1"><a class="header-anchor" href="#axios-封装" aria-hidden="true">#</a> axios 封装</h3>
<p>一般为了业务需要，会对 axios 进行封装，统一处理：环境配置、 默认配置、添加拦截器、请求方法封装等。</p>
<p>不同应用对于 axios 封装会有不同的方法，SPA 单页面应用和 SSR 服务端渲染的同构应用对于 axios 的配置不同：</p>
<ul>
<li>SPA 应用接口请求主要在浏览器端，无需服务端，无需区分浏览器环境和服务端；</li>
<li>SSR 同构应用涉及 服务端和浏览器端接口请求，需要区分不同环境的请求。
<ul>
<li>服务端渲染无登录相关，请求无需 token 处理、无弹窗提示等。</li>
</ul>
</li>
</ul>
<p><strong>封装时区分内容：</strong></p>
<ul>
<li>
<p><strong>创建 axios 实例</strong>：封装 axios 时候尽量创建一个新的 axios 实例，避免引入 axios 默认实例。</p>
</li>
<li>
<p>原因：引入 axios 默认实，在修改 axios 默认实例的默认配置后，默认配置会影响到所有其他引入 axios 默认实例的接口。在 SPA 单页面应用中一般没什么问题，但是在同构应用中，不同客户端和服务端请求处理不同，因此使用默认引入的 axios 实例容易导致错误。</p>
</li>
<li>
<p><strong>环境配置</strong>：单页面应用仅仅区分 开发/测试/生产环境，同构应用还要区分 浏览器和服务端环境。</p>
<ul>
<li>
<p>开发/测试/生产环境：根据 <code v-pre>process.env.NODE_ENV</code> 配置不同的 <code v-pre>baseURL</code>，使项目只需执行相应打包命令，就可以在不同环境中自动切换请求主机地址。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//单页面应用下，五服务端渲染环境时候封装方式</span>
<span class="token keyword">const</span> <span class="token function-variable function">getBaseUrl</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> base <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">production</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">development</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">'http://localhost:3001'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">[</span>env<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> base<span class="token operator">?</span> base <span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>浏览器和服务端环境：同构应用需要区分。根据 <code v-pre>process.env.isServer</code> (通过 webpack 打包时注入) 判断浏览器和 node 服务端运行环境，在浏览器和 node 服务端中，请求中 baseUrl 会略有差异：</p>
<ul>
<li>
<p>在 Node 服务器中，请求需要配置默认 baseUrl，因为服务器不知道请求域名/地址。</p>
</li>
<li>
<p>在浏览器中不需要配置 baseUrl，浏览器默认会使用当前页面下的域名作为 baseUrl 发送请求。（同构应用在服务端渲染时候获取初始接口数据，渲染静态化页面后进行客户端激活，客户端激活后处理客户端请求接口）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//SSR同构应用下， 服务端渲染和客户端渲染同时存在</span>
<span class="token keyword">const</span> <span class="token function-variable function">getBaseUrl</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">,</span>isServer <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>isServer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> base <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">production</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">development</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">'http://localhost:3001'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">[</span>env<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>isServer <span class="token operator">===</span> <span class="token string">'server'</span><span class="token punctuation">)</span><span class="token operator">?</span> <span class="token punctuation">(</span>base<span class="token operator">?</span> base <span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>默认配置/参数</strong>：如果是同构应用，需要区分浏览器环境和 Node 环境（服务端渲染），根据 <code v-pre>process.env.isServer</code> 判断。</p>
<ul>
<li>
<p>浏览器环境和 Node 环境的统一配置：</p>
<ul>
<li>配置超时时间 timeout 属性</li>
</ul>
</li>
<li>
<p>仅浏览器环境下配置：</p>
<ul>
<li>
<p>配置允许携带凭证 widthCredentials 属性设为 true 。客户端环境下添加， 服务端渲染时不需要。</p>
</li>
<li>
<p>添加 Token： 为了避免每次请求中手动添加 Token，可以在 header 中默认配置统一添加 token。，在 node 环境下(服务端渲染时) 不需要添加。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>client<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">post</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json;charset=UTF-8"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token string">"User-Token"</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取 token 方法</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>添加拦截器</strong>: 拦截器需要返回配置，否则整个请求不会进行。</p>
<ul>
<li>
<p>可以在请求拦截器中 添加token凭证、统一设置语言、统一设置内容类型、指定数据格式、添加默认参数、loading缓冲效果等</p>
<ul>
<li>
<p>如：请求拦截中添加请求默认参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//示例</span>
client<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(config)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"post"</span><span class="token punctuation">,</span> <span class="token string">"delete"</span><span class="token punctuation">,</span> <span class="token string">"put"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>data<span class="token punctuation">.</span>languageCode <span class="token operator">=</span> languageCode<span class="token punctuation">;</span>
        config<span class="token punctuation">.</span>data<span class="token punctuation">.</span>countryCode <span class="token operator">=</span> countryCode<span class="token punctuation">;</span>
        config<span class="token punctuation">.</span>data<span class="token punctuation">.</span>platform <span class="token operator">=</span> platform<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">"get"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>languageCode <span class="token operator">=</span> languageCode<span class="token punctuation">;</span>
        config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>countryCode <span class="token operator">=</span> countryCode<span class="token punctuation">;</span>
        config<span class="token punctuation">.</span>params<span class="token punctuation">.</span>platform <span class="token operator">=</span> platform<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span> <span class="token comment">//返回这个配置，否则整个请求不会进行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">errMsg</span><span class="token operator">:</span> error <span class="token operator">||</span> <span class="token string">"404(TimeOut)"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errCode</span><span class="token operator">:</span> <span class="token number">404</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>响应拦截器：过滤响应数据、根据状态码进行统一处理，如弹窗提示、清除 token、token过期处理、清除loading缓冲效果等。</p>
<ul>
<li>注意：弹窗提示、清除 token、token过期处理等需要在浏览器端环境下，Node 环境(服务端渲染)下不需要样式和 token。（ Token 是用户登录相关数据，服务端渲染时不需要用户登录）</li>
<li>token 过期处理：首先刷新 token、根据结果判断，刷新失败则清除 token 、退出登录、清除用户数据；刷新成功重新保存新的 token。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>请求方法封装</strong>：封装 <code v-pre>request</code>  方法，在 request 方法上进行其他请求方法 (get、post、delete、put ...) 二次封装。不同请求方法参数不同，封装方法参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
    config<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"put"</span><span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>注意：</strong></p>
<ul>
<li>默认实例配置、新建实例配置、拦截器、请求方法 request 中都可以处理 默认配置、默认参数、token处理等。</li>
<li>区别： 根据配置合并策略：请求的 <code v-pre>config</code> 参数 &gt;(覆盖) 实例的 <code v-pre>defaults</code> 属性 &gt; (覆盖) 库默认值。</li>
</ul>
<h3 id="api-管理" tabindex="-1"><a class="header-anchor" href="#api-管理" aria-hidden="true">#</a> API 管理</h3>
<p>目前前后端开发基本采用前端分离开发模式，前端 API 管理主要为前端在业务层 API 中的划分方式。</p>
<p>常见采用划分方式：</p>
<ul>
<li>按照 API 文档模块划分 API 模块：axios 统一封装后，按照页面/模块功能划分文件目录。
<ul>
<li><img src="@source/images/接口管理.png" alt=""></li>
</ul>
</li>
</ul>
<p>常见 API 文档管理工具：</p>
<ul>
<li>Swagger</li>
<li>YApi</li>
<li>Eolinker</li>
<li>ShowDoc</li>
<li>DOClever</li>
<li>RAP2</li>
</ul>
<h4 id="mock-数据" tabindex="-1"><a class="header-anchor" href="#mock-数据" aria-hidden="true">#</a> MOCK 数据</h4>
<p>在时机项目开发中，经常遇到：</p>
<ul>
<li>前端开发依赖于后端接口数据，但是后台人员不足或者无法立即到位，前端迟迟不能开工；</li>
<li>前端参照 ui 设计图，完成对应的静态页面（没有数据交互），待后台人员到位，再进行二次开发，协助完成接口对接。</li>
</ul>
<p>因此，为了解决此类困境，前端通常可以使用 mock api 方式 在前后端同时开发的时候，后端接口数据没有出来，前端可以mock假数据，模拟开发。</p>
<p>前端 mock 数据方法：</p>
<ul>
<li>使用文档管理工具 Mock，前端代理到文档管理工具地址；</li>
<li>mock 同步接口文档并使用 <a href="https://github.com/nuysoft/Mock/wiki/Getting-Started" target="_blank" rel="noopener noreferrer">Mock.js<ExternalLinkIcon/></a> 本地启动 mock 服务；
<ul>
<li>优点： 可以通过修改本地 mock 数据测试页面显示结果，提高开发效率；</li>
</ul>
</li>
</ul>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<p><a href="https://www.axios-http.cn/docs/intro" target="_blank" rel="noopener noreferrer">axios文档<ExternalLinkIcon/></a></p>
</div></template>



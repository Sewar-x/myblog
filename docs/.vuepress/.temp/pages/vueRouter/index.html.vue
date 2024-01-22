<template><div><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue-Router</h2>
<h3 id="路由基础" tabindex="-1"><a class="header-anchor" href="#路由基础" aria-hidden="true">#</a> 路由基础</h3>
<ul>
<li>
<p>路由作用：根据不同的路径映射到不同的视图。</p>
</li>
<li>
<p>监听<a href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96" target="_blank" rel="noopener noreferrer">复用组件<ExternalLinkIcon/></a> 路由参数变化：watch (监测变化) <code v-pre>$route</code> 对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'...'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">$route</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 对路由变化作出响应...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置 <code v-pre>routes</code> 常用参数：</p>
<ul>
<li>路由路径：<code v-pre>path</code> 参数。</li>
<li><a href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D" target="_blank" rel="noopener noreferrer">动态路由匹配<ExternalLinkIcon/></a>： 一个“路径参数”使用冒号 <code v-pre>:</code> 标记。 如：<code v-pre> { path: '/user/:id', component: User }</code></li>
<li><a href="https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E8%B7%AF%E7%94%B1%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%8F%82" target="_blank" rel="noopener noreferrer">路由组件传参<ExternalLinkIcon/></a>：使用 <code v-pre>props</code> 将组件和路由解耦。</li>
<li><a href="https://router.vuejs.org/zh/guide/essentials/named-routes.html#%E5%91%BD%E5%90%8D%E8%B7%AF%E7%94%B1" target="_blank" rel="noopener noreferrer">路由命名<ExternalLinkIcon/></a>： <code v-pre>name</code> 参数。</li>
<li>组件： <code v-pre>component</code> 参数。</li>
<li><a href="https://router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE" target="_blank" rel="noopener noreferrer">嵌套组件<ExternalLinkIcon/></a>：<code v-pre>children</code> 参数。</li>
<li><a href="https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#%E9%87%8D%E5%AE%9A%E5%90%91" target="_blank" rel="noopener noreferrer">重定向<ExternalLinkIcon/></a>：<code v-pre>redirect</code> 参数。</li>
<li><a href="https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#%E9%87%8D%E5%AE%9A%E5%90%91" target="_blank" rel="noopener noreferrer">别名<ExternalLinkIcon/></a>：<code v-pre>alias</code> 参数。</li>
<li><a href="https://router.vuejs.org/zh/guide/advanced/meta.html" target="_blank" rel="noopener noreferrer">元信息<ExternalLinkIcon/></a>：<code v-pre>meta</code> 参数。</li>
</ul>
</li>
<li>
<p>内置组件：</p>
<ul>
<li>视图切换：<a href="https://router.vuejs.org/zh/api/#router-link" target="_blank" rel="noopener noreferrer"><code v-pre>&lt;router-link&gt;</code> 组件<ExternalLinkIcon/></a></li>
<li>视图渲染：<a href="https://router.vuejs.org/zh/api/#aria-current-value" target="_blank" rel="noopener noreferrer"><code v-pre>&lt;router-view&gt;</code> 组件<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p><a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB" target="_blank" rel="noopener noreferrer">导航守卫<ExternalLinkIcon/></a>：</p>
<ul>
<li>全局守卫：
<ul>
<li>全局前置守卫：<code v-pre>router.beforeEach</code>，导航触发时，全局前置守卫按照创建顺序调用。</li>
<li>全局解析守卫：<code v-pre>router.beforeResolve</code>，导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。</li>
<li>全局后置守卫：<code v-pre>router.afterEach</code>。</li>
</ul>
</li>
<li>路由独享守卫：<code v-pre>beforeEnter</code>。单个路由独享的钩子函数，它是在路由配置上直接进行定义的。</li>
<li>组件内守卫：它们是直接在路由组 件内部直接进行定义的。
<ul>
<li><code v-pre>beforeRouteEnter</code></li>
<li><code v-pre>beforeRouteUpdate</code></li>
<li><code v-pre>beforeRouteLeave</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>导航解析流程</p>
<ul>
<li>导航被触发。</li>
<li>在失活的组件里调用 <code v-pre>beforeRouteLeave</code> 守卫。</li>
<li>调用全局的 <code v-pre>beforeEach</code> 守卫。</li>
<li>在重用的组件里调用 <code v-pre>beforeRouteUpdate</code> 守卫 (2.2+)。</li>
<li>在路由配置里调用 <code v-pre>beforeEnter</code>。</li>
<li>解析异步路由组件。</li>
<li>在被激活的组件里调用 <code v-pre>beforeRouteEnter</code>。</li>
<li>调用全局的 <code v-pre>beforeResolve</code> 守卫 (2.5+)。</li>
<li>导航被确认。</li>
<li>调用全局的 <code v-pre>afterEach</code> 钩子。</li>
<li>触发 DOM 更新。</li>
<li>调用 <code v-pre>beforeRouteEnter</code> 守卫中传给 <code v-pre>next</code> 的回调函数，创建好的组件实例会作为回调函数的参数传入。</li>
</ul>
</li>
<li>
<p>路由对象：</p>
<ul>
<li><a href="https://router.vuejs.org/zh/api/#router-%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer"><strong>this.$router</strong><ExternalLinkIcon/></a>：<code v-pre>router</code> 的 Vue 根实例。是一个全局路由对象，包含了路由跳转的方法、钩子函数等。</li>
<li><a href="https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1" target="_blank" rel="noopener noreferrer"><strong>this.$route</strong><ExternalLinkIcon/></a>：当前激活的<a href="https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1" target="_blank" rel="noopener noreferrer">路由信息对象<ExternalLinkIcon/></a>。  每一个路由都会有一个 route 对象，是一个局部对象，包含path,params,hash,query,fullPath,matched,name等路由信息参数。
<ul>
<li>里面的属性是 immutable (不可变) 的，通过 watch 监测变化</li>
<li>它包含了当前 URL 解析得到的信息，还有 URL 匹配到的<strong>路由记录 (route records)</strong>。</li>
<li>每次成功的导航后都会产生一个新的对象。</li>
<li>路由对象出现在多个地方:
<ul>
<li>在组件内，即 <code v-pre>this.$route</code></li>
<li>在 <code v-pre>$route</code> 观察者回调内</li>
<li><code v-pre>router.match(location)</code> 的返回值</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E8%B7%AF%E7%94%B1%E6%87%92%E5%8A%A0%E8%BD%BD" target="_blank" rel="noopener noreferrer">路由懒加载<ExternalLinkIcon/></a>：</p>
<ul>
<li>将异步组件定义为返回一个 Promise 的工厂函数</li>
<li>在 Webpack 2 中，我们可以使用<a href="https://github.com/tc39/proposal-dynamic-import" target="_blank" rel="noopener noreferrer">动态 import (opens new window)<ExternalLinkIcon/></a>语法来定义代码分块点</li>
<li>注释语法来提供 chunk name : <code v-pre>webpackChunkName</code></li>
</ul>
</li>
<li>
<p>路由传参：使用 <code v-pre>router.push()</code>切换路由。</p>
<ul>
<li>
<p><code v-pre>params</code> 传参：</p>
<ul>
<li>
<p>只能使用 <code v-pre>name</code>，不能使用 <code v-pre>path</code>；如果提供了 <code v-pre>path</code>，<code v-pre>params</code> 会被忽略</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 这里的 params 不生效</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> userId <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -> /user</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>参数不会显示在路径上</p>
</li>
<li>
<p>浏览器强制刷新参数会被清空</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 传递参数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">'hello'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span><span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -> /user/123</span>
<span class="token comment">// 接收参数</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><code v-pre>query</code> 传参：带查询参数。</p>
<ul>
<li>
<p>参数会显示在路径上，刷新不会被清空</p>
</li>
<li>
<p><code v-pre>name</code> 可以使用 <code v-pre>path</code> 路径</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 传递参数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  	<span class="token literal-property property">name</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
  	<span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">test</span><span class="token operator">:</span><span class="token string">"hello"</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 带查询参数，变成 /register?plan=private</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'register'</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">plan</span><span class="token operator">:</span> <span class="token string">'private'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 接收参数</span>
<span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="总体流程" tabindex="-1"><a class="header-anchor" href="#总体流程" aria-hidden="true">#</a> 总体流程</h3>
<p><img src="@source/flow-graph/路由原理.png" alt=""></p>
<h3 id="路由对象" tabindex="-1"><a class="header-anchor" href="#路由对象" aria-hidden="true">#</a> 路由对象</h3>
<p>VueRouter 的实现是一个类，它的定义在 <a href="https://github.com/vuejs/vue-router/blob/v3.0.1/src/index.js" target="_blank" rel="noopener noreferrer">src/index.js<ExternalLinkIcon/></a>中：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">VueRouter</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function-variable function">install</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token literal-property property">version</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

  <span class="token literal-property property">app</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token literal-property property">apps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">ready</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">readyCbs</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Function<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> RouterOptions<span class="token punctuation">;</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> HashHistory <span class="token operator">|</span> HTML5History <span class="token operator">|</span> AbstractHistory<span class="token punctuation">;</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> Matcher<span class="token punctuation">;</span>
  <span class="token literal-property property">fallback</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">beforeHooks</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token operator">?</span>NavigationGuard<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">resolveHooks</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token operator">?</span>NavigationGuard<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">afterHooks</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token operator">?</span>AfterNavigationHook<span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> RouterOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>apps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span>beforeHooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>resolveHooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>afterHooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>matcher <span class="token operator">=</span> <span class="token function">createMatcher</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>routes <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> mode <span class="token operator">=</span> options<span class="token punctuation">.</span>mode <span class="token operator">||</span> <span class="token string">'hash'</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fallback <span class="token operator">=</span> mode <span class="token operator">===</span> <span class="token string">'history'</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>supportsPushState <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>fallback <span class="token operator">!==</span> <span class="token boolean">false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      mode <span class="token operator">=</span> <span class="token string">'hash'</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>inBrowser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      mode <span class="token operator">=</span> <span class="token string">'abstract'</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> mode

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">'history'</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HTML5History</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'hash'</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashHistory</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fallback<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">'abstract'</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbstractHistory</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">assert</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">invalid mode: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">match</span> <span class="token punctuation">(</span>
    <span class="token literal-property property">raw</span><span class="token operator">:</span> RawLocation<span class="token punctuation">,</span>
    current<span class="token operator">?</span><span class="token operator">:</span> Route<span class="token punctuation">,</span>
    redirectedFrom<span class="token operator">?</span><span class="token operator">:</span> Location
  <span class="token punctuation">)</span><span class="token operator">:</span> Route <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>matcher<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> current<span class="token punctuation">,</span> redirectedFrom<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">currentRoute</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">?</span>Route <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>current
  <span class="token punctuation">}</span>

  <span class="token function">init</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">app</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span> <span class="token operator">&amp;&amp;</span> <span class="token function">assert</span><span class="token punctuation">(</span>
      install<span class="token punctuation">.</span>installed<span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">not installed. Make sure to call \`Vue.use(VueRouter)\` </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">before creating root instance.</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> app

    <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history

    <span class="token keyword">if</span> <span class="token punctuation">(</span>history <span class="token keyword">instanceof</span> <span class="token class-name">HTML5History</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      history<span class="token punctuation">.</span><span class="token function">transitionTo</span><span class="token punctuation">(</span>history<span class="token punctuation">.</span><span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>history <span class="token keyword">instanceof</span> <span class="token class-name">HashHistory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">setupHashListener</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        history<span class="token punctuation">.</span><span class="token function">setupListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      history<span class="token punctuation">.</span><span class="token function">transitionTo</span><span class="token punctuation">(</span>
        history<span class="token punctuation">.</span><span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        setupHashListener<span class="token punctuation">,</span>
        setupHashListener
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    history<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        app<span class="token punctuation">.</span>_route <span class="token operator">=</span> route
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">beforeEach</span> <span class="token punctuation">(</span>fn<span class="token operator">:</span> Function<span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">registerHook</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>beforeHooks<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">beforeResolve</span> <span class="token punctuation">(</span>fn<span class="token operator">:</span> Function<span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">registerHook</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resolveHooks<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">afterEach</span> <span class="token punctuation">(</span>fn<span class="token operator">:</span> Function<span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">registerHook</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>afterHooks<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">onReady</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cb</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> errorCb<span class="token operator">?</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">onReady</span><span class="token punctuation">(</span>cb<span class="token punctuation">,</span> errorCb<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">onError</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">errorCb</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span>errorCb<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">location</span><span class="token operator">:</span> RawLocation<span class="token punctuation">,</span> onComplete<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> onAbort<span class="token operator">?</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> onComplete<span class="token punctuation">,</span> onAbort<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">replace</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">location</span><span class="token operator">:</span> RawLocation<span class="token punctuation">,</span> onComplete<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> onAbort<span class="token operator">?</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> onComplete<span class="token punctuation">,</span> onAbort<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">go</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">n</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">back</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">forward</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">getMatchedComponents</span> <span class="token punctuation">(</span>to<span class="token operator">?</span><span class="token operator">:</span> RawLocation <span class="token operator">|</span> Route<span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">route</span><span class="token operator">:</span> any <span class="token operator">=</span> to
      <span class="token operator">?</span> to<span class="token punctuation">.</span>matched
        <span class="token operator">?</span> to
        <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">.</span>route
      <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentRoute
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> route<span class="token punctuation">.</span>matched<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">m</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>components<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> m<span class="token punctuation">.</span>components<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">resolve</span> <span class="token punctuation">(</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span> RawLocation<span class="token punctuation">,</span>
    current<span class="token operator">?</span><span class="token operator">:</span> Route<span class="token punctuation">,</span>
    append<span class="token operator">?</span><span class="token operator">:</span> boolean
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">location</span><span class="token operator">:</span> Location<span class="token punctuation">,</span>
    <span class="token literal-property property">route</span><span class="token operator">:</span> Route<span class="token punctuation">,</span>
    <span class="token literal-property property">href</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">normalizedTo</span><span class="token operator">:</span> Location<span class="token punctuation">,</span>
    <span class="token literal-property property">resolved</span><span class="token operator">:</span> Route
  <span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">normalizeLocation</span><span class="token punctuation">(</span>
      to<span class="token punctuation">,</span>
      current <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
      append<span class="token punctuation">,</span>
      <span class="token keyword">this</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> current<span class="token punctuation">)</span>
    <span class="token keyword">const</span> fullPath <span class="token operator">=</span> route<span class="token punctuation">.</span>redirectedFrom <span class="token operator">||</span> route<span class="token punctuation">.</span>fullPath
    <span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>base
    <span class="token keyword">const</span> href <span class="token operator">=</span> <span class="token function">createHref</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> fullPath<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mode<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      location<span class="token punctuation">,</span>
      route<span class="token punctuation">,</span>
      href<span class="token punctuation">,</span>
      <span class="token literal-property property">normalizedTo</span><span class="token operator">:</span> location<span class="token punctuation">,</span>
      <span class="token literal-property property">resolved</span><span class="token operator">:</span> route
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">addRoutes</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteConfig<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>matcher<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>current <span class="token operator">!==</span> <span class="token constant">START</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">transitionTo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由模式" tabindex="-1"><a class="header-anchor" href="#路由模式" aria-hidden="true">#</a> 路由模式</h3>
<ul>
<li>
<p>vue 中定义了三种路由模式：<code v-pre>hash</code>、<code v-pre>history</code>、<code v-pre>abstract</code> 。</p>
<ul>
<li>
<p><strong>hash 模式：</strong> 使用 url 的 hash 值来作为路由。支持所有浏览器。一般用于单页应用。</p>
<ul>
<li>表现：
<ul>
<li>url 中带有 “#” 符号，如 <code v-pre>http://localhost:8080/#/</code>；</li>
<li>页面跳转时 “#” 后面 hash 值改变；当 URL 改变时，页面不会重新加载（实际有重新获取数据）；</li>
<li>通过浏览器的前进、后退、刷新页面均可以变；</li>
</ul>
</li>
<li>原理：
<ul>
<li>监听路由变化： 如果支持 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event" target="_blank" rel="noopener noreferrer">popstate 事件<ExternalLinkIcon/></a>，则监听 popstate 事件，否则监听 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/hashchange_event" target="_blank" rel="noopener noreferrer">hashchange 事件<ExternalLinkIcon/></a>;</li>
<li>点击 <code v-pre>router-link</code> 路由切换：判断是否支持  <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history" target="_blank" rel="noopener noreferrer">HTML5 History API<ExternalLinkIcon/></a> （replaceState 和 pushState），支持则使用 History API，否则使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash" target="_blank" rel="noopener noreferrer">Location.hash API<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>History 模式：</strong> 使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history" target="_blank" rel="noopener noreferrer">HTML5 History API<ExternalLinkIcon/></a> 和并需要服务器配置。一般用于多页应用。</p>
<ul>
<li>表现：
<ul>
<li>url 中没有 “#” 符号</li>
<li>可以通过浏览器前进、后退，但刷新页面会导致 404 (如果服务器中没有相应的响应或者资源)；</li>
</ul>
</li>
<li>原理：
<ul>
<li>监听路由变化：监听 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event" target="_blank" rel="noopener noreferrer">popstate 事件<ExternalLinkIcon/></a>；</li>
<li>点击 <code v-pre>router-link</code> 路由切换：使用  <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history" target="_blank" rel="noopener noreferrer">HTML5 History API<ExternalLinkIcon/></a> （replaceState 和 pushState）切换路由；</li>
</ul>
</li>
<li>缺点：
<ul>
<li>要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 <code v-pre>index.html</code> 页面，这个页面就是你 app 依赖的页面。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Abstract 模式：</strong> 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。</p>
</li>
</ul>
</li>
<li>
<p>三种模式中类继承关系<img src="@source/flow-graph/路由模式类关系.png" alt=""></p>
</li>
<li>
<p>三种模式的路由初始化： 在 VueRouter 构造函数中根据配置项创建路由模式。</p>
<p><img src="@source/images/路由模式初始化.png" alt=""></p>
</li>
<li>
<p>三种模式路由切换的底层实现:</p>
<p><img src="@source/images/不同路由模式切换原理.png" alt=""></p>
</li>
</ul>
<h3 id="路由安装" tabindex="-1"><a class="header-anchor" href="#路由安装" aria-hidden="true">#</a> 路由安装</h3>
<p><img src="@source/flow-graph/路由安装.png" alt=""></p>
<ul>
<li>
<p>Vue-Router 的入口文件是 <code v-pre>src/index.js</code>，其中定义了 <code v-pre>VueRouter</code> 类，也实现了 <code v-pre>install</code> 的静态方法：<code v-pre>VueRouter.install = install</code>，它的定义在 <code v-pre>src/install.js</code> 中：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">let</span> _Vue
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">install</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>install<span class="token punctuation">.</span>installed <span class="token operator">&amp;&amp;</span> _Vue <span class="token operator">===</span> Vue<span class="token punctuation">)</span> <span class="token keyword">return</span>
  install<span class="token punctuation">.</span>installed <span class="token operator">=</span> <span class="token boolean">true</span>

  _Vue <span class="token operator">=</span> Vue

  <span class="token keyword">const</span> <span class="token function-variable function">isDef</span> <span class="token operator">=</span> <span class="token parameter">v</span> <span class="token operator">=></span> v <span class="token operator">!==</span> <span class="token keyword">undefined</span>

  <span class="token keyword">const</span> <span class="token function-variable function">registerInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> callVal</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_parentVnode
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>registerRouteInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> callVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router
        <span class="token keyword">this</span><span class="token punctuation">.</span>_router<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        Vue<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">'_route'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_router<span class="token punctuation">.</span>history<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$parent <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>_routerRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span>
      <span class="token function">registerInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">registerInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">'$router'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot<span class="token punctuation">.</span>_router <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">'$route'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot<span class="token punctuation">.</span>_route <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'RouterView'</span><span class="token punctuation">,</span> View<span class="token punctuation">)</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'RouterLink'</span><span class="token punctuation">,</span> Link<span class="token punctuation">)</span>

  <span class="token keyword">const</span> strats <span class="token operator">=</span> Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>optionMergeStrategies
  strats<span class="token punctuation">.</span>beforeRouteEnter <span class="token operator">=</span> strats<span class="token punctuation">.</span>beforeRouteLeave <span class="token operator">=</span> strats<span class="token punctuation">.</span>beforeRouteUpdate <span class="token operator">=</span> strats<span class="token punctuation">.</span>created
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="路由匹配" tabindex="-1"><a class="header-anchor" href="#路由匹配" aria-hidden="true">#</a> 路由匹配</h3>
<ul>
<li>使用 math 方法匹配
<ul>
<li>总流程 <img src="@source/images/路由匹配.png" alt=""></li>
</ul>
</li>
</ul>
<h3 id="路由切换" tabindex="-1"><a class="header-anchor" href="#路由切换" aria-hidden="true">#</a> 路由切换</h3>
<ul>
<li>流程图
<ul>
<li><img src="@source/images/路由切换.png" alt=""></li>
</ul>
</li>
</ul>
<h3 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h3>
<h4 id="router-link" tabindex="-1"><a class="header-anchor" href="#router-link" aria-hidden="true">#</a> <a href="https://router.vuejs.org/zh/api/#router-link" target="_blank" rel="noopener noreferrer"><code v-pre>&lt;router-link&gt;</code> <ExternalLinkIcon/></a></h4>
<ul>
<li>
<p>作用：支持用户在具有路由功能的应用中 (点击) 导航。</p>
</li>
<li>
<p>通过 <code v-pre>to</code> 属性指定目标地址，默认渲染成带有正确链接的 <code v-pre>&lt;a&gt;</code> 标签，可以通过配置 <code v-pre>tag</code> 属性生成别的标签.。</p>
</li>
<li>
<p>当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。</p>
</li>
<li>
<p><code v-pre>&lt;router-link&gt;</code> 比起写死的 <code v-pre>&lt;a href=&quot;...&quot;&gt;</code> 会好一些，理由如下：</p>
<ul>
<li>无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。</li>
<li>在 HTML5 history 模式下，<code v-pre>router-link</code> 会守卫点击事件，让浏览器不再重新加载页面。</li>
<li>当你在 HTML5 history 模式下使用 <code v-pre>base</code> 选项之后，所有的 <code v-pre>to</code> 属性都不需要写 (基路径) 了。</li>
</ul>
</li>
<li>
<p>源码分析：router-link 本质是内置的函数式组件，<a href="https://github.com/vuejs/vue-router/blob/v3.0.1/src/components/link.js" target="_blank" rel="noopener noreferrer"><code v-pre>src/components/link.js</code><ExternalLinkIcon/></a> 中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'RouterLink'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> toTypes<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'a'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exact</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">append</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">replace</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">activeClass</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">exactActiveClass</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> eventTypes<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'click'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">h</span><span class="token operator">:</span> Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//基于 render 函数渲染</span>
    <span class="token comment">//路由解析</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$router
    <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route
    <span class="token comment">//router.resolve 是 VueRouter 的实例方法，解析 router 获得目标 location、route、href。它的定义在  src/index.js 中</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> location<span class="token punctuation">,</span> route<span class="token punctuation">,</span> href <span class="token punctuation">}</span> <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>to<span class="token punctuation">,</span> current<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>append<span class="token punctuation">)</span>

    <span class="token comment">//解析类名</span>
    <span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> globalActiveClass <span class="token operator">=</span> router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>linkActiveClass
    <span class="token keyword">const</span> globalExactActiveClass <span class="token operator">=</span> router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>linkExactActiveClass
    <span class="token keyword">const</span> activeClassFallback <span class="token operator">=</span> globalActiveClass <span class="token operator">==</span> <span class="token keyword">null</span>
            <span class="token operator">?</span> <span class="token string">'router-link-active'</span>
            <span class="token operator">:</span> globalActiveClass
    <span class="token keyword">const</span> exactActiveClassFallback <span class="token operator">=</span> globalExactActiveClass <span class="token operator">==</span> <span class="token keyword">null</span>
            <span class="token operator">?</span> <span class="token string">'router-link-exact-active'</span>
            <span class="token operator">:</span> globalExactActiveClass
    <span class="token keyword">const</span> activeClass <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeClass <span class="token operator">==</span> <span class="token keyword">null</span>
            <span class="token operator">?</span> activeClassFallback
            <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeClass
    <span class="token keyword">const</span> exactActiveClass <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>exactActiveClass <span class="token operator">==</span> <span class="token keyword">null</span>
            <span class="token operator">?</span> exactActiveClassFallback
            <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>exactActiveClass
    <span class="token keyword">const</span> compareTarget <span class="token operator">=</span> location<span class="token punctuation">.</span>path
      <span class="token operator">?</span> <span class="token function">createRoute</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> location<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>
      <span class="token operator">:</span> route

    classes<span class="token punctuation">[</span>exactActiveClass<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">isSameRoute</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> compareTarget<span class="token punctuation">)</span>
    classes<span class="token punctuation">[</span>activeClass<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>exact
      <span class="token operator">?</span> classes<span class="token punctuation">[</span>exactActiveClass<span class="token punctuation">]</span>
      <span class="token operator">:</span> <span class="token function">isIncludedRoute</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> compareTarget<span class="token punctuation">)</span>
	<span class="token comment">//创建了一个守卫函数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">guardEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>replace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//监听点击事件或者其它可以通过 prop 传入的事件类型，执行 hanlder 函数</span>
    <span class="token keyword">const</span> on <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">click</span><span class="token operator">:</span> guardEvent <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span> on<span class="token punctuation">[</span>e<span class="token punctuation">]</span> <span class="token operator">=</span> handler <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      on<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> handler
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token literal-property property">data</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">class</span><span class="token operator">:</span> classes
    <span class="token punctuation">}</span>
	<span class="token comment">//判断当前 tag 是否是 &lt;a> 标签，&lt;router-link> 默认会渲染成 &lt;a> 标签</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>on <span class="token operator">=</span> on
      data<span class="token punctuation">.</span>attrs <span class="token operator">=</span> <span class="token punctuation">{</span> href <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       <span class="token comment">//当修改 tag 的 prop 渲染成其他节点，这种情况下会尝试找它子元素的 &lt;a> 标签</span>
      <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">findAnchor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果有则把事件绑定到 &lt;a> 标签上并添加 href 属性</span>
        a<span class="token punctuation">.</span>isStatic <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token keyword">const</span> extend <span class="token operator">=</span> _Vue<span class="token punctuation">.</span>util<span class="token punctuation">.</span>extend
        <span class="token keyword">const</span> aData <span class="token operator">=</span> a<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        aData<span class="token punctuation">.</span>on <span class="token operator">=</span> on
        <span class="token keyword">const</span> aAttrs <span class="token operator">=</span> a<span class="token punctuation">.</span>data<span class="token punctuation">.</span>attrs <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>data<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span>
        aAttrs<span class="token punctuation">.</span>href <span class="token operator">=</span> href
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//否则绑定到外层元素本身</span>
        data<span class="token punctuation">.</span>on <span class="token operator">=</span> on
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//使用 createElement() 创建 &lt;a> 标签</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="router-view" tabindex="-1"><a class="header-anchor" href="#router-view" aria-hidden="true">#</a> <a href="https://router.vuejs.org/zh/api/#aria-current-value" target="_blank" rel="noopener noreferrer"><code v-pre>&lt;router-view&gt;</code> <ExternalLinkIcon/></a></h4>
<ul>
<li>
<p><code v-pre>&lt;router-view&gt;</code> 组件是一个 functional 组件，渲染路径匹配到的视图组件。<code v-pre>&lt;router-view&gt;</code> 渲染的组件还可以内嵌自己的 <code v-pre>&lt;router-view&gt;</code>，根据嵌套路径，渲染嵌套组件。</p>
</li>
<li>
<p>其他属性 (非 router-view 使用的属性) 都直接传给渲染的组件， 很多时候，每个路由的数据都是包含在路由参数中。</p>
</li>
<li>
<p>源码分析：它的定义在<a href="https://github.com/vuejs/vue-router/blob/v3.0.1/src/components/view.js" target="_blank" rel="noopener noreferrer"> <code v-pre>src/components/view.js</code><ExternalLinkIcon/></a> 中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'RouterView'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'default'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> <span class="token punctuation">{</span> props<span class="token punctuation">,</span> children<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">.</span>routerView <span class="token operator">=</span> <span class="token boolean">true</span>
   
    <span class="token keyword">const</span> h <span class="token operator">=</span> parent<span class="token punctuation">.</span>$createElement
    <span class="token keyword">const</span> name <span class="token operator">=</span> props<span class="token punctuation">.</span>name
    <span class="token keyword">const</span> route <span class="token operator">=</span> parent<span class="token punctuation">.</span>$route <span class="token comment">//获取当前的路径</span>
    <span class="token keyword">const</span> cache <span class="token operator">=</span> parent<span class="token punctuation">.</span>_routerViewCache <span class="token operator">||</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>_routerViewCache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">//&lt;router-view> 是支持嵌套的,表示 &lt;router-view> 嵌套的深度</span>
    <span class="token keyword">let</span> inactive <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">//parent._routerRoot 表示的是根 Vue 实例,这个循环就是从当前的 &lt;router-view> 的父节点向上找，一直找到根 Vue 实例，在这个过程，如果碰到了父节点也是 &lt;router-view> 的时候，说明 &lt;router-view> 有嵌套的情况，depth++。</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>_routerRoot <span class="token operator">!==</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>routerView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        depth<span class="token operator">++</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>_inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        inactive <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
      parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>$parent
    <span class="token punctuation">}</span>
    data<span class="token punctuation">.</span>routerViewDepth <span class="token operator">=</span> depth

    <span class="token keyword">if</span> <span class="token punctuation">(</span>inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//根据当前线路匹配的路径和 depth 找到对应的 RouteRecord，进而找到该渲染的组件</span>
    <span class="token keyword">const</span> matched <span class="token operator">=</span> route<span class="token punctuation">.</span>matched<span class="token punctuation">[</span>depth<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matched<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> component <span class="token operator">=</span> cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> matched<span class="token punctuation">.</span>components<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
   	<span class="token comment">//注册路由实例的方法</span>
    data<span class="token punctuation">.</span><span class="token function-variable function">registerRouteInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  
      <span class="token comment">//matched.instances[name] 赋值当前组件的 vm 实例:在混入的 beforeCreate 钩子函数中，会执行 registerInstance 方法，进而执行 render 函数中定义的 registerRouteInstance 方法</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span>val <span class="token operator">&amp;&amp;</span> current <span class="token operator">!==</span> vm<span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span><span class="token operator">!</span>val <span class="token operator">&amp;&amp;</span> current <span class="token operator">===</span> vm<span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> val
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token punctuation">;</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>hook <span class="token operator">||</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>hook <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">prepatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> propsToPass <span class="token operator">=</span> data<span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> matched<span class="token punctuation">.</span>props <span class="token operator">&amp;&amp;</span> matched<span class="token punctuation">.</span>props<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>propsToPass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      propsToPass <span class="token operator">=</span> data<span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> propsToPass<span class="token punctuation">)</span>
      <span class="token keyword">const</span> attrs <span class="token operator">=</span> data<span class="token punctuation">.</span>attrs <span class="token operator">=</span> data<span class="token punctuation">.</span>attrs <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> propsToPass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>component<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> component<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          attrs<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> propsToPass<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
          <span class="token keyword">delete</span> propsToPass<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//根据 component 渲染出对应的组件 vond</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="相关问题" tabindex="-1"><a class="header-anchor" href="#相关问题" aria-hidden="true">#</a> 相关问题</h3>
<blockquote>
<p>路由匹配过程?</p>
</blockquote>
<ul>
<li>
<p>在 new Router(routes)时,根据传入用户路由配置生成三张路由映射表：pathList (存储所有路径) ，pathMap (路径 -&gt; RouterRecord映射表)，nameMap  (name -&gt; RouterRecord映射表)</p>
</li>
<li>
<p>路由切换触发 history.transitionTo() 进行路由过度, 回调执行 router.math() 进行路由匹配：</p>
<ul>
<li>
<p>当直接在浏览器输入路径时，math() 中先通过 normalizeLocation() 将 router 转换成 Location 对象：<img src="@source/images/image-20200803222454635.png" alt="image-20200803222454635"></p>
<p>当name 不存在时，遍历 pathList 表，获得 path，再通过 pathMap 获取 RoouterRecord 对象:<img src="@source/images/image-20200803222804270.png" alt="image-20200803222804270"></p>
<p>（RoouterRecord 对象的 regex 使用<a href="https://github.com/pillarjs/path-to-regexp/tree/v1.7.0" target="_blank" rel="noopener noreferrer">path-to-regexp<ExternalLinkIcon/></a> 作为路径匹配引擎，path-to-regexp 会将 路由配置中 path 转为如下结构的一个正则表达式，最终使用日 re 正则表达式匹配 &quot;输入浏览器的路径&quot; ）<img src="@source/images/image-20200803223300946.png" alt="image-20200803223300946"></p>
<p>然后获取RoouterRecord 对象 regex 与当前 Router 的 location 对象的 path 比较</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">matchRoute</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>regex<span class="token punctuation">,</span> location<span class="token punctuation">.</span>path<span class="token punctuation">,</span> location<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>匹配成功通过 _createRoute(record, location, redirectedFrom) 创建路径</p>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>路由匹配引擎?</p>
</blockquote>
<ul>
<li><code v-pre>vue-router</code> 使用 <a href="https://github.com/pillarjs/path-to-regexp/tree/v1.7.0" target="_blank" rel="noopener noreferrer">path-to-regexp<ExternalLinkIcon/></a> 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配</li>
</ul>
<blockquote>
<p>/test/:name 与 /test/:id 两个路由将如何匹配？  (假设 name 参数特点为非数字字符串，id 参数特点为数字)</p>
</blockquote>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>	
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/test/:name'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Name <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/test/:id'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token constant">ID</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>因为 /test/:name 与 /test/:id 通过 <a href="https://github.com/pillarjs/path-to-regexp/tree/v1.7.0" target="_blank" rel="noopener noreferrer">path-to-regexp<ExternalLinkIcon/></a> 匹配引擎解析后的 regexp 相同  ( 解析结果都为 /^/foo/([^/]+?)/?$/i )，因此使用 /test/:name 与 /test/:id 作为路由配置的 path 参数是无法区分两个路由；在路由匹配时通过遍历 pathList 匹配 &quot;浏览器路径&quot;，因此当输入 /test/joker 或则 /test/1234 时将总是匹配到 /test/:name 路径</p>
</li>
<li>
<p>解决方案: /test/:name 与 /test/:id 是相同路径不同参数名称的路由，可以根据 name 和 id 两个不同参数的特征，使用正则表达式匹配，因此路由配置中路径可以写为 /test/:name([A-Za-z]+) 与 /test/:id(\d+)</p>
</li>
</ul>
<blockquote>
<p>路由之间是怎么跳转的？有哪些方式？</p>
</blockquote>
<p>组件导航: router-link</p>
<p>编程导航: router.push、 router.replace、 router.go</p>
<blockquote>
<p>active-class 是哪个组件的属性？</p>
</blockquote>
<p><a href="https://router.vuejs.org/zh/api/#active-class" target="_blank" rel="noopener noreferrer">active-class<ExternalLinkIcon/></a> 是 router-link 属性，设置链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 <code v-pre>linkActiveClass</code> 来全局配置。</p>
<p><strong>导航守卫相关:</strong></p>
<blockquote>
<p>如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 <code v-pre>/users/1</code> -&gt; <code v-pre>/users/2</code>) 如何响应变化？</p>
</blockquote>
<ul>
<li>使用 <a href="https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96" target="_blank" rel="noopener noreferrer"><code v-pre>beforeRouteUpdate</code><ExternalLinkIcon/></a> 来响应这个变化 (比如抓取用户信息)</li>
</ul>
<blockquote>
<p>beforeRouteEnter 能否拿到组件实例 this? 为什么?</p>
</blockquote>
<ul>
<li>
<p>不能，因为当守卫执行前，组件实例还没被创建，但是我们可以通过传一个回调给 next 来访问组件实例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		<span class="token comment">// 通过 `vm` 访问组件实例</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>如何在路由守卫进行管道中的下一个钩子？</p>
</blockquote>
<ul>
<li>
<p>调用 next() 方法</p>
</li>
<li>
<p><code v-pre>router.beforeEach</code> 注册一个全局前置守卫：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 <strong>等待中</strong>。</p>
<p>每个守卫方法接收三个参数：</p>
<ul>
<li><strong><code v-pre>to: Route</code></strong>: 即将要进入的目标 <a href="https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1" target="_blank" rel="noopener noreferrer">路由对象<ExternalLinkIcon/></a></li>
<li><strong><code v-pre>from: Route</code></strong>: 当前导航正要离开的路由</li>
<li><strong><code v-pre>next: Function</code></strong>: 一定要调用该方法来 <strong>resolve</strong> 这个钩子。执行效果依赖 <code v-pre>next</code> 方法的调用参数。
<ul>
<li><strong><code v-pre>next()</code></strong>: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 <strong>confirmed</strong> (确认的)。</li>
<li><strong><code v-pre>next(false)</code></strong>: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 <code v-pre>from</code> 路由对应的地址。</li>
<li><strong><code v-pre>next('/')</code> 或者 <code v-pre>next({ path: '/' })</code></strong>: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 <code v-pre>next</code> 传递任意位置对象，且允许设置诸如 <code v-pre>replace: true</code>、<code v-pre>name: 'home'</code> 之类的选项以及任何用在 <a href="https://router.vuejs.org/zh/api/#to" target="_blank" rel="noopener noreferrer"><code v-pre>router-link</code> 的 <code v-pre>to</code> prop<ExternalLinkIcon/></a> 或 <a href="https://router.vuejs.org/zh/api/#router-push" target="_blank" rel="noopener noreferrer"><code v-pre>router.push</code><ExternalLinkIcon/></a> 中的选项。</li>
<li><strong><code v-pre>next(error)</code></strong>: (2.4.0+) 如果传入 <code v-pre>next</code> 的参数是一个 <code v-pre>Error</code> 实例，则导航会被终止且该错误会被传递给 <a href="https://router.vuejs.org/zh/api/#router-onerror" target="_blank" rel="noopener noreferrer"><code v-pre>router.onError()</code><ExternalLinkIcon/></a> 注册过的回调。</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>为什么路由路由守卫中必须调用 next()，才会前进到下一个导航守卫钩子函数中？</p>
</blockquote>
<p>Q：vue 路由中实现了一个 iterator 遍历器，在路由切换时，解析路由出守卫队列 queue ，然后使用遍历器遍历 路由守卫队列；</p>
<p><strong>路由应用：</strong></p>
<blockquote>
<p>切换路由时需要保存草稿的功能，怎么实现？</p>
</blockquote>
<p>使用 <code v-pre>&lt;keep-alive&gt;</code> 缓存组件：在组件切换过程中将状态保留在内存中，防止重复渲染DOM。</p>
<p>在router中设置router的元信息meta：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//...router.js </span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> Hello<span class="token punctuation">,</span> 
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">false</span>    <span class="token comment">// 不需要缓存 </span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">,</span> 
       <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/page1'</span><span class="token punctuation">,</span> 
         <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Page1'</span><span class="token punctuation">,</span> 
         <span class="token literal-property property">component</span><span class="token operator">:</span> Page1<span class="token punctuation">,</span> 
         <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span>    <span class="token comment">// 需要被缓存 </span>
       <span class="token punctuation">}</span> 
     <span class="token punctuation">}</span> 
   <span class="token punctuation">]</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中添加 meta 判断：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$route.meta.keepAlive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!$route.meta.keepAlive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<ul>
<li><a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">Vue Router<ExternalLinkIcon/></a></li>
</ul>
<hr>
</div></template>



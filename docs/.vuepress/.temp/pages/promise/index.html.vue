<template><div><h1 id="promise-基础和实现" tabindex="-1"><a class="header-anchor" href="#promise-基础和实现" aria-hidden="true">#</a> Promise 基础和实现</h1>
<h2 id="promise-基础" tabindex="-1"><a class="header-anchor" href="#promise-基础" aria-hidden="true">#</a> Promise 基础</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p><img src="@source/images/promise1.png" alt=""></p>
<p><img src="@source/images/promise2.png" alt="promise2"></p>
<p><img src="@source/images/promise3.png" alt="promise3"></p>
<p><img src="@source/images/promise4.png" alt="promise1"></p>
<h3 id="then" tabindex="-1"><a class="header-anchor" href="#then" aria-hidden="true">#</a> then()</h3>
<p><img src="@source/images/promise-then.png" alt=""></p>
<p><img src="@source/images/promise-then2.png" alt="promise-then"></p>
<h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3>
<p><img src="@source/images/promise-err.png" alt=""></p>
<h3 id="promise-值穿透" tabindex="-1"><a class="header-anchor" href="#promise-值穿透" aria-hidden="true">#</a> Promise 值穿透</h3>
<p><img src="@source/images/promise-chuantou.png" alt=""></p>
<h3 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> finally()</h3>
<p><img src="@source/images/promise-fianlly.png" alt=""></p>
<h3 id="包装pomise-对象" tabindex="-1"><a class="header-anchor" href="#包装pomise-对象" aria-hidden="true">#</a> 包装Pomise 对象</h3>
<p><img src="@source/images/promise-baozhuang.png" alt=""></p>
<h3 id="并发方法" tabindex="-1"><a class="header-anchor" href="#并发方法" aria-hidden="true">#</a> 并发方法</h3>
<p><img src="@source/images/promise-bingfa.png" alt=""></p>
<p>promise 基础直接参考 阮一峰<a href="https://es6.ruanyifeng.com/#docs/promise" target="_blank" rel="noopener noreferrer">《ECMAScript 6 入门》<ExternalLinkIcon/></a></p>
<h2 id="原理实现" tabindex="-1"><a class="header-anchor" href="#原理实现" aria-hidden="true">#</a> 原理实现</h2>
<p>强烈推荐先看 《<a href="https://mp.weixin.qq.com/s/UNzYgpnKzmW6bAapYxnXRQ" target="_blank" rel="noopener noreferrer">图解 Promise 实现原理<ExternalLinkIcon/></a> 》文章，文章内容将原理讲述透彻，该系列文章有如下几个章节组成：</p>
<ol>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzI4NjY4MTU5Nw==&amp;mid=2247486661&amp;idx=1&amp;sn=8e4b3056aa9c110ca08047d0917290f4&amp;chksm=ebd87c57dcaff54168d1a8f94b074fa814270b9753d8c1e7eebe3b4203254ecb0e6989ba1f19&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">图解 Promise 实现原理（一）—— 基础实现<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzI4NjY4MTU5Nw==&amp;mid=2247486706&amp;idx=2&amp;sn=9434eb4f5ea43e46de70a6486afbffbf&amp;chksm=ebd87c60dcaff57669d389cf114a993b15df789b1b14fe1f4c89e38d304d79489dc5394e9296&amp;scene=178&amp;cur_album_id=1500522652875194368#rd" target="_blank" rel="noopener noreferrer">图解 Promise 实现原理（二）—— Promise 链式调用<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzI4NjY4MTU5Nw==&amp;mid=2247486850&amp;idx=2&amp;sn=647638dbb430da2c23a1320033fc806f&amp;chksm=ebd87d10dcaff40681acb2ee93b5516ae190e1111938fc72da12178e3d7f9c9fe5ffa0569254&amp;scene=178&amp;cur_album_id=1500522652875194368#rd" target="_blank" rel="noopener noreferrer">图解 Promise 实现原理（三）—— Promise 原型方法实现<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzI4NjY4MTU5Nw==&amp;mid=2247486966&amp;idx=2&amp;sn=5c90d287040a811ed06517518fee8e34&amp;chksm=ebd87d64dcaff4726226d01cbb7b12aea5f16429a06b8f8cfbc23a35ecf955c899cd139283b7&amp;scene=178&amp;cur_album_id=1500522652875194368#rd" target="_blank" rel="noopener noreferrer">图解 Promise 实现原理（四）—— Promise 静态方法实现<ExternalLinkIcon/></a></p>
</li>
</ol>
<p>Promise 核心原理实现主要分为：基础方法+链式调用+延迟机制+状态管理+异常处理</p>
<ul>
<li>Promise() 对象最基础包含 constructor()、then()、resolve() 三个方法；</li>
<li>链式调用主要原理： then() 返回一个新的 Promise() 对象；</li>
<li>延迟机制：
<ul>
<li>目的:  保证在 resolve 执行之前，then 方法已经注册完所有的回调;</li>
<li>实现：
<ul>
<li>方法1： 使用 setTimeout() 模拟实现</li>
<li>方法2： 通过判断状态变化</li>
</ul>
</li>
</ul>
</li>
<li>状态管理：Promise 对象的状态改变，只有两种可能。
<ul>
<li>Pending 变为 Resolved ：promise变为FULFILLED状态后具有一个唯一的value；</li>
<li>Pending 变为 Rejected： promise变为REJECTED状态后具有一个唯一的reason；</li>
<li><img src="@source/images/promiseState.png" alt=""></li>
</ul>
</li>
<li>异常处理：在执行 onFulfilled 或者 onRejected 时，出现的异常处理方法，使用 try-catch 捕获错误，然后将相应的 Promise 状态设置为 rejected 状态
<ul>
<li>不管是错误也好，异常也罢，最终都是通过 reject 实现的，可见最终对于错误以及异常的处理，都可以通过 then 中的 onRejected 来处理。所以单独增加一个 catch 方法，它是 .then(null, onRejected) 的别名</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Promise</span> <span class="token punctuation">{</span>
  callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//异步回调函数队列</span>
  state <span class="token operator">=</span> <span class="token string">'pending'</span><span class="token punctuation">;</span><span class="token comment">//增加状态</span>
  value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token comment">//保存当前promise 异步操作执行结果	</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_resolve</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_reject</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 创建Promise对象时立即执行 fn 函数</span>
  <span class="token punctuation">}</span>
  <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">onFulfilled<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// then 函数仅仅是注册了后续需要执行的回调</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  <span class="token comment">// 链式调用关键：返回新的promise对象</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_handle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">onFulfilled</span><span class="token operator">:</span> onFulfilled <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// then方法成功回调函数</span>
        <span class="token literal-property property">onRejected</span><span class="token operator">:</span> onRejected <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// then方法失败回调函数</span>
        <span class="token literal-property property">resolve</span><span class="token operator">:</span> resolve<span class="token punctuation">,</span> <span class="token comment">// 新的Promise 对象 resolve 方法</span>
        <span class="token literal-property property">reject</span><span class="token operator">:</span> reject  <span class="token comment">// 新的Promise 对象 reject 方法</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">catch</span><span class="token punctuation">(</span>onError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> onError<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">finally</span><span class="token punctuation">(</span>onDone<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> onDone <span class="token operator">!==</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token keyword">let</span> Promise <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
      <span class="token parameter">value</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">onDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> value<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token parameter">reason</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">onDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> reason <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">_handle</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">'pending'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 	<span class="token comment">//获取回调方法</span>
    <span class="token keyword">let</span> cb <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">'fulfilled'</span> <span class="token operator">?</span> callback<span class="token punctuation">.</span>onFulfilled <span class="token operator">:</span> callback<span class="token punctuation">.</span>onRejected<span class="token punctuation">;</span>
 
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//如果then中没有传递任何东西</span>
      cb <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">'fulfilled'</span> <span class="token operator">?</span> callback<span class="token punctuation">.</span>resolve <span class="token operator">:</span> callback<span class="token punctuation">.</span>reject<span class="token punctuation">;</span>
      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">let</span> ret<span class="token punctuation">;</span>
 
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// 执行当前返回异步操作结果的promise的回调函数，并将异步操作结果this.value传入回调函数</span>
      ret <span class="token operator">=</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      cb <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">'fulfilled'</span> <span class="token operator">?</span> callback<span class="token punctuation">.</span>resolve <span class="token operator">:</span> callback<span class="token punctuation">.</span>reject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ret <span class="token operator">=</span> error<span class="token punctuation">;</span>
      cb <span class="token operator">=</span> callback<span class="token punctuation">.</span>reject <span class="token comment">// 回调函数执行报错，执行回调的 reject </span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token comment">//调用当前返回异步操作结果的promise的回调函数的resolve/reject方法，并传入回调执行结果</span>
      <span class="token function">cb</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
  <span class="token punctuation">}</span>
  <span class="token function">_resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//回调函数的执行是在 resolve 方法里面执行的</span>
    <span class="token comment">// Promise 异步操作结果为 Promise 对象,调用 异步操作结果的 then()</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> then <span class="token operator">=</span> value<span class="token punctuation">.</span>then<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> then <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">then</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_resolve</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_reject</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">'fulfilled'</span><span class="token punctuation">;</span><span class="token comment">//改变状态</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span><span class="token comment">//保存结果</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_handle</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//执行下一个回调函数</span>
  <span class="token punctuation">}</span>
  <span class="token function">_reject</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//回调函数的执行是在reject 方法里面执行的</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">'rejected'</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_handle</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<p><a href="https://mp.weixin.qq.com/s/UNzYgpnKzmW6bAapYxnXRQ" target="_blank" rel="noopener noreferrer">图解 Promise 实现原理<ExternalLinkIcon/></a></p>
<p><a href="http://www.conardli.top/docs/JavaScript/%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0promise.html#%E5%9F%BA%E7%A1%80%E7%89%88%E6%9C%AC" target="_blank" rel="noopener noreferrer">模拟实现Promise<ExternalLinkIcon/></a></p>
<h1 id="promise-相关题目" tabindex="-1"><a class="header-anchor" href="#promise-相关题目" aria-hidden="true">#</a> Promise 相关题目</h1>
<h2 id="基础题目" tabindex="-1"><a class="header-anchor" href="#基础题目" aria-hidden="true">#</a> 基础题目</h2>
<h3 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序" aria-hidden="true">#</a> 执行顺序</h3>
<p>执行顺序题目主要结合 JavaScript 的事件循环 和 Promise 的宏任务/微任务考察：</p>
<ul>
<li>Promise 新建后executor就会立即执行</li>
<li>调用 resolve() 或 reject() 并不会终结 Promise 的 executor 函数的执行</li>
<li>Promise 的状态一旦变更为成功或者失败，则不会再次改变</li>
<li>宏任务： script(主程序代码)，setTimeout(), setInterval(), setImmediate(), I/O, requestAnimationFrame()，UI rendering</li>
<li>微任务： Promise.resolve()，Promise.reject()，Promises.then()，Promises.finally()，process.nextTick()，Object.observe()， MutationObserver()</li>
<li>执行顺序：script(主程序代码)—&gt;process.nextTick—&gt;Promises.then()——&gt;setTimeout——&gt;setInterval——&gt;setImmediate——&gt; I/O——&gt;UI rendering</li>
</ul>
<p>任务执行流程：</p>
<p><img src="@source/images/task=performance.png" alt=""></p>
<ul>
<li></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出: 1 2 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出: 1 2 4 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>规则一: promise<code v-pre>构造函数的代码会立即执行，</code>then<code v-pre>或者</code>reject`里面的代码会放入异步微任务队列，在宏任务结束后会立即执行。</p>
<p>规则二：<code v-pre>promise</code>的状态一旦变更为成功或者失败，则不会再次改变，所以执行结果为：1,2,4,3。而<code v-pre>catch</code>里面的函数不会再执行</p>
</blockquote>
<ul>
<li></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'once'</span><span class="token punctuation">)</span>
             <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//执行结果: 过一秒打印 once,success,success</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>promise</code>的构造函数只会执行一次，而<code v-pre>then</code>方法可以多次调用，但是第二次是直接返回结果，不会有异步等待的时间</p>
</blockquote>
<ul>
<li></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">p1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> timeOut1 <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	p2<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> timeOut2 <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">reject</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		<span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>


<span class="token function">p1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出: 1 2 10 5 6 8 9 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>第一步：</p>
<p>​	执行主程序宏任务，执行 p1，p2，conole.log(10)，输出：1,2,10。
​	这时候事件循环里面有异步任务<code v-pre>timeOut1,timeOut2,p2.then,p1.then</code>
​	<code v-pre>p2.then,p1.then</code>为微任务，<code v-pre>timeOut1,timeOut2</code>为宏任务</p>
<p>第二步：</p>
<p>​	宏任务执行完后<code v-pre>Event Loop</code>会去任务队列取异步任务，微任务会优先执行。</p>
<p>​	根据微任务进入异步队列顺序，这时候会先后执行 <code v-pre>p2.then -&gt; p1.then</code>，打印 5,6。</p>
<p>第三步：</p>
<p>​	微任务执行完了，开始宏任务，由于2个<code v-pre>settimeout</code>等待时间一样，所以会执行先进入异步队列的顺序，<code v-pre>timeOut2 </code>先后打印：8。执行宏任务的过程中，<code v-pre>p3.then</code> 微任务进入了微任务队列，宏任务执行完毕会执行微任务，输出：9。</p>
<p>​	之后继续执行下一个宏任务<code v-pre>timeOut1</code>, 输出：3。</p>
<p>第四步：</p>
<p>​	结合规则6，由于p2这个<code v-pre>Promise</code>对象的执行结果已经确定，所以4不会被打印</p>
</blockquote>
<ul>
<li><strong>错误捕获</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'error!!!'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'then: '</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'catch: '</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//输出：then:  Error: error!!!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这里的陷阱在于只有抛出错误时才会执行 .catch()，题目中并不是抛出错误，所以执行 .then()。</p>
<p>改成如下方式会执行 .catch():</p>
<p>return Promise.reject(new Error('error!!!'))
throw new Error('error!!!')</p>
</blockquote>
<ul>
<li></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> promise
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>答案
程序报错：<code v-pre>TypeError: Chaining cycle detected for promise #&lt;Promise&gt;</code>
解读
<code v-pre>.then() 或 .catch() 返回的值不能是 promise 本身，否则会造成死循环</code></p>
</blockquote>
<ul>
<li></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">//输出：1 3 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>先执行整体代码，没有发现微任务；
再执行下一个宏任务—setTimeout回调函数，打印出1；
遇到微任务—Promise 回调函数；
立即执行微任务，打印出3；
微任务队列被清空，执行下一个宏任务—下一个setTimeout回调函数，打印出2。</p>
</blockquote>
<ul>
<li></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> pro <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span>rej</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">res</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//输出： 1 1 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>promise 对象赋值给了变量 pro，每个 <code v-pre>.then()</code> 都是独立的，遇到 .then() 都会加入微任务队列，然后进行事件循环</p>
</blockquote>
<ul>
<li></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 start'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 end'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script start'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'setTimeout'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

<span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script end'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//------输出--------</span>
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意以下几点:</p>
<ul>
<li>定义 async1()，async2()，不会立即执行</li>
<li>await async2(); 表示先执行 async2()，然后将 await 后面的代码当作 .then() 中的回调来处理，因此执行 async2() 以后，返回值和后面代码添加到微任务队列中</li>
<li>初始化 promise，promise 中的代码会立即执行</li>
</ul>
</blockquote>
<h3 id="promise-封装异步操作" tabindex="-1"><a class="header-anchor" href="#promise-封装异步操作" aria-hidden="true">#</a> Promise 封装异步操作</h3>
<ul>
<li>
<p>题目一：使用 promise 封装 setTimeout</p>
<ul>
<li>实现:
<ul>
<li>参数： ms 毫秒数</li>
<li>返回值： 新的promise</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">wait</span> <span class="token operator">=</span> <span class="token parameter">ms</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve，reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>ms<span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">wait</span> <span class="token operator">=</span> <span class="token parameter">ms</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>ms<span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>使用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">wait</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">saySomething</span><span class="token punctuation">(</span><span class="token string">"10 seconds"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>failureCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>分析：因为 <code v-pre>setTimeout</code> 并不会真的执行失败，那么我们可以在这种情况下忽略 reject</p>
</li>
</ul>
</li>
<li>
<p>题目二：使用 promise 封装 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/getCurrentPosition" target="_blank" rel="noopener noreferrer">navigator.geolocation.getCurrentPosition(success, error, options)<ExternalLinkIcon/></a> 接口</p>
<ul>
<li>
<p>实现：</p>
<ul>
<li>
<p>参数： options</p>
</li>
<li>
<p>返回值： promise</p>
</li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">getLocation</span> <span class="token operator">=</span> <span class="token parameter">options</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">,</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>题目三：封装 XMLHttpRequest</p>
<ul>
<li>
<p>实现</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myAsyncFunction</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="promise-特性相关" tabindex="-1"><a class="header-anchor" href="#promise-特性相关" aria-hidden="true">#</a> Promise 特性相关</h3>
<ul>
<li>
<p>题目一： <strong>如何取消一个Promise？</strong></p>
<ul>
<li>
<p>在要停止的<code v-pre>promise</code>链位置添加一个方法，返回一个永远不执行<code v-pre>resolve</code>或者<code v-pre>reject</code>的<code v-pre>Promise</code>，那么这个<code v-pre>promise</code>永远处于<code v-pre>pending</code>状态，所以永远也不会向下执行<code v-pre>then</code>或<code v-pre>catch</code>了。这样我们就停止了一个<code v-pre>promise</code>链</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ok1'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 返回“pending”状态的Promise对象</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 后续的函数不会被调用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ok2'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'err->'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Promise.race竞速方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'ok1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'ok2'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p2<span class="token punctuation">,</span> p1<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">//ok1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>题目二：<strong>如果向Promise.all()和Promise.race()传递空数组，运行结果会有什么不同？</strong></p>
<ul>
<li><img src="@source/images/promise-test.png" alt=""></li>
<li>all会立即决议，决议结果是fullfilled，值是undefined; race会永远都不决议，程序卡死</li>
</ul>
</li>
<li>
<p>题目三：<strong>Promise链上返回的最后一个Promise出错了怎么办？</strong></p>
<ul>
<li>
<p><code v-pre>catch</code>在<code v-pre>promise</code>链式调用的末尾调用，用于捕获链条中的错误信息，但是<code v-pre>catch</code>方法内部也可能出现错误，所以有些<code v-pre>promise</code>实现中增加了一个方法<code v-pre>done</code>，<code v-pre>done</code>相当于提供了一个不会出错的<code v-pre>catch</code>方法，并且不再返回一个<code v-pre>promise</code>，一般用来结束一个<code v-pre>promise</code>链</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">reason</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//调用 Promise 的 catch 方法</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'done'</span><span class="token punctuation">,</span> reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">throw</span> reason<span class="token punctuation">;</span> <span class="token comment">// 向外抛出错误</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="应用题" tabindex="-1"><a class="header-anchor" href="#应用题" aria-hidden="true">#</a> 应用题</h3>
<ul>
<li>题目一：<strong>顺序加载10张图片，图片地址已知，但是同时最多加载3张图片，要求用<code v-pre>promise</code>实现</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token string">'http://img.aizhifou.cn/'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1.png'</span><span class="token punctuation">,</span> <span class="token string">'2.png'</span><span class="token punctuation">,</span> <span class="token string">'3.png'</span><span class="token punctuation">,</span> <span class="token string">'4.png'</span><span class="token punctuation">,</span> <span class="token string">'5.png'</span><span class="token punctuation">,</span><span class="token string">'6.png'</span><span class="token punctuation">,</span> <span class="token string">'7.png'</span><span class="token punctuation">,</span> <span class="token string">'8.png'</span><span class="token punctuation">,</span> <span class="token string">'9.png'</span><span class="token punctuation">,</span> <span class="token string">'10.png'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">loadImg</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token comment">// 加载一张图片</span>
			<span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			image<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">resolve</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			image<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">reject</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">;</span>
			image<span class="token punctuation">.</span>src <span class="token operator">=</span> baseUrl <span class="token operator">+</span> url<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">reject</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">startLoadImage</span><span class="token punctuation">(</span><span class="token parameter">urls<span class="token punctuation">,</span> limits<span class="token punctuation">,</span> endHandle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 当前存在的promise队列</span>
	<span class="token keyword">let</span> promiseMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 当前索引对应的加载状态，无论成功，失败都会标记为true，格式： {0: true, 1: true, 2: true...}</span>
	<span class="token keyword">let</span> loadIndexMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 当前以及加载到的索引，方便找到下一个未加载的索引，为了节省性能，其实可以不要</span>
	<span class="token keyword">let</span> loadIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">loadAImage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 所有的资源都进入了异步队列</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>loadIndexMap<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> urls<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 所有的资源都加载完毕，或者进入加载状态，递归结束</span>
			<span class="token keyword">const</span> promiseList <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>promiseMap<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>promiseMap<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> arr<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promiseList<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
				<span class="token comment">// 这里如果没有加载失败，就会在所有加载完毕后执行，如果其中某个错误了，这里的结果就不准确，不过这个不是题目要求的。</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'all'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				endHandle <span class="token operator">&amp;&amp;</span> <span class="token function">endHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'end:'</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 遍历，知道里面有3个promise</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>promiseMap<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&lt;</span> limits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> loadIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> urls<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>loadIndexMap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						loadIndexMap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
						promiseMap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">loadImg</span><span class="token punctuation">(</span>urls<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
						loadIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
						<span class="token keyword">break</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 获取当前正在进行的promise列表，利用reduce从promiseMap里面获取</span>
			<span class="token keyword">const</span> promiseList <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>promiseMap<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>promiseMap<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> arr<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>promiseList<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
				<span class="token comment">// 其中一张加载成功，删除当前promise，让PromiseList小于limit，开始递归，加载下一张</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'end:'</span> <span class="token operator">+</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
				loadIndexMap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token keyword">delete</span> promiseMap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token function">loadAImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
				<span class="token comment">// 加载失败也继续</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'end：'</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
				loadIndexMap<span class="token punctuation">[</span>e<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token keyword">delete</span> promiseMap<span class="token punctuation">[</span>e<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token function">loadAImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">loadAImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">startLoadImage</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>将代码复制到chrome浏览器可以看到下面的运行结果：
<img src="@source/images/demo1.png" alt="1.png">
可以看到，所有图片加载完成，在没有失败的情况下，打印出来<code v-pre>all</code>
解析：<code v-pre>Promise.race</code>方法接受的参数中有一个<code v-pre>promise</code>对象返回结果了就会立即触发成功或者失败的函数。这里利用这个特性，先将<code v-pre>promise</code>队列循环加入，直到达到限制，等待<code v-pre>race</code>，<code v-pre>race</code>后又加入一个<code v-pre>promise</code>，利用递归一直循环这个过程，到最后用<code v-pre>promise.all</code>捕获剩下的图片加载</p>
</blockquote>
<h2 id="promisec串行" tabindex="-1"><a class="header-anchor" href="#promisec串行" aria-hidden="true">#</a> Promisec串行</h2>
<h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3>
<ul>
<li>有多个任务，多个任务必须顺序执行（下一个任务依赖上一个任务结果）</li>
<li>使用 Promise 进行异步操作的顺序处理</li>
<li>Promise 串行执行实现原理： 利用 Promise.then() 的链式调用</li>
</ul>
<h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3>
<p>模拟三个异步函数，每一个函数依赖上一个函数结果</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">/</span> 异步函数 p1
<span class="token keyword">let</span> <span class="token function-variable function">p1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'p1->'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 异步函数 p2</span>
<span class="token keyword">let</span> <span class="token function-variable function">p2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token string">'p2->'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 异步函数 p3</span>
<span class="token keyword">let</span> <span class="token function-variable function">p3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token string">'p3->'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>实现一：<strong>使用then链式操作</strong></p>
<ul>
<li>缺点：书写比较繁琐</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">p1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">p2</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">p3</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 输出: p1->p2->p3-></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实现二：<strong>forEach循环构建队列</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">queue</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sequence <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sequence <span class="token operator">=</span> sequence<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> sequence
<span class="token punctuation">}</span>

<span class="token comment">// 执行队列</span>
<span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 输出: p1->p2->p3-></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实现三：<strong>reduce循环构建队列</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">queue</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">promiseChain<span class="token punctuation">,</span> currentFunction</span><span class="token punctuation">)</span> <span class="token operator">=></span> promiseChain<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>currentFunction<span class="token punctuation">)</span><span class="token punctuation">,</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">//	将初始值使用 promise 包裹</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 执行队列</span>
<span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 输出: p1->p2->p3-></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">queue</span><span class="token punctuation">(</span><span class="token parameter">tasks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">recordValue</span><span class="token punctuation">(</span><span class="token parameter">results<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> results<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> pushValue <span class="token operator">=</span> <span class="token function">recordValue</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> tasks<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> task</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> task<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>pushValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 执行队列</span>
<span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实现四：<strong>使用async、await构建队列</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">queue</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> promise <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">promise</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> res
<span class="token punctuation">}</span>

<span class="token comment">// 执行队列</span>
<span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 输出: p1->p2->p3-></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3>
<h4 id="axios请求-响应拦截过程" tabindex="-1"><a class="header-anchor" href="#axios请求-响应拦截过程" aria-hidden="true">#</a> axios请求/响应拦截过程</h4>
<ul>
<li>axios中请求/响应是过程是顺序执行 [请求拦截器, dispatchRequest, 响应拦截器]  队列的过程</li>
<li>队列中请求拦截器， dispatchRequest，响应拦截器 为Promise 对象</li>
<li><a href="https://github.com/axios/axios/blob/master/lib/core/Axios.js" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a></li>
<li><img src="@source/images/axios流程.png" alt=""></li>
</ul>
<p>模拟实现：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：<img src="@source/images/moni-axios.png" alt=""></p>
<h2 id="promise-并行" tabindex="-1"><a class="header-anchor" href="#promise-并行" aria-hidden="true">#</a> Promise 并行</h2>
<ul>
<li>并行：多个异步请求同时进行</li>
</ul>
<h3 id="并行执行-api" tabindex="-1"><a class="header-anchor" href="#并行执行-api" aria-hidden="true">#</a> 并行执行 API</h3>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank" rel="noopener noreferrer">Promise.all(iterable)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any" target="_blank" rel="noopener noreferrer">Promise.any()<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race" target="_blank" rel="noopener noreferrer">Promise.race(iterable)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled" target="_blank" rel="noopener noreferrer">Promise.allSettled()<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="并发控制" tabindex="-1"><a class="header-anchor" href="#并发控制" aria-hidden="true">#</a> 并发控制</h3>
<h4 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h4>
<p>​	要求执行 n 个异步任务，但不能 n 个异步任务同时执行 (内存资源限制等原因)，需要控制每次 m ( m&lt;n ) 个异步任务同时进行，但最终结果是执行 n 个异步任务</p>
<h4 id="思想" tabindex="-1"><a class="header-anchor" href="#思想" aria-hidden="true">#</a> 思想</h4>
<ul>
<li>使用 Promise 并行执行 API : Promise.all()、Promise.allSettled()、Promise.race()、Promise.any() 并行执行异步，控制每次并行执行的 Promise 实例;</li>
<li>Promise 并发限制，其实根源上就是控制 Promise 的实例化个数；Promise 并不是因为调用 Promise.all 才执行，而是在实例化 Promise 对象的时候就执行了;</li>
<li>要实现并发限制，只能从 Promise 实例化上下手，把生成 Promises 数组的控制权，交给并发控制逻辑</li>
</ul>
<h4 id="通用实现" tabindex="-1"><a class="header-anchor" href="#通用实现" aria-hidden="true">#</a> 通用实现</h4>
<ul>
<li>
<p>实现一： <strong>使用 async await 和 Promise.all 封装并发任务 (推荐)</strong></p>
<ul>
<li>思路：循环截取列表中 limit 个数据并发执行</li>
<li>缺点：
<ul>
<li>每次并发执行 limit 个，需要等待全部结果返回后，才能执行下一次并发</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@params</span> list <span class="token punctuation">{</span>Array<span class="token punctuation">}</span> - 要迭代的数组
 * <span class="token keyword">@params</span> limit <span class="token punctuation">{</span>Number<span class="token punctuation">}</span> - 并发数量控制数
 * <span class="token keyword">@params</span> asyncHandle <span class="token punctuation">{</span>Function<span class="token punctuation">}</span> - 对 list 的每一个项的异步处理函数，参数为当前处理项，必须 return 一个 Promise 来确定是否继续进行迭代 ( 异步处理 Promise 实例化必须在 asyncHandle 中完成 )
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">}</span></span> - 返回一个 Promise 值来确认所有数据是否迭代完成
**/</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">concurrencyLimit</span><span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span>limit<span class="token punctuation">,</span>asyncHandler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">let</span> partiaList  <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>i <span class="token operator">+</span> limit<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//遍历列表，每次截取 limit 个数据</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">partiaList is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>partiaList<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//遍历截取的并发数据，使用 asyncHandler 包装异步操作，并返回 Promise 数组，并发执行</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span> partiaList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token function">asyncHandler</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//------------------------------------------测试demo---------------------------------------------</span>
<span class="token comment">//模拟获取 10 个数据结果</span>
<span class="token keyword">let</span> dataLists <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//生成 1-10的数组，待并发执行数据</span>
<span class="token keyword">let</span> successfulData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//成功获取的数据</span>
<span class="token keyword">let</span> errData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 获取失败的数据</span>
<span class="token function">concurrencyLimit</span><span class="token punctuation">(</span>dataLists<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">curItem</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> <span class="token comment">// 异步处理函数</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">return data is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>curItem<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span> 
            <span class="token keyword">if</span><span class="token punctuation">(</span>curItem <span class="token operator">%</span><span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果数据是 3 的倍数，获取失败</span>
                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                 	<span class="token literal-property property">data</span><span class="token operator">:</span> curItem<span class="token punctuation">,</span>
                	<span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">404</span> 
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> curItem<span class="token punctuation">,</span>
                <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5000</span><span class="token punctuation">)</span>  <span class="token comment">// 设置随机响应时间</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        successfulData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">//获取成功数据保存进入数组</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">get fail: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>err<span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span> 
        errData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">//获取失败数据保存</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实现二：<strong>Promise.all 并发执行并递归</strong></p>
<ul>
<li>思路：使用 Promise 并发执行 limit 个异步操作，然后通过递归和 then 的链式调用形成 limit 条并发执行的执行链</li>
<li>缺点：
<ul>
<li>最后只返回 limit 条链的最后执行的结果，不能记录每条执行链的执行顺序和所有结果</li>
<li>捕获的错误数据也会返回</li>
</ul>
</li>
<li>使用递归，如果并发请求量大，会占用较大内存
<ul>
<li>不能按顺序发起请求</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@params</span> list <span class="token punctuation">{</span>Array<span class="token punctuation">}</span> - 要迭代的数组
 * <span class="token keyword">@params</span> limit <span class="token punctuation">{</span>Number<span class="token punctuation">}</span> - 并发数量控制数
 * <span class="token keyword">@params</span> asyncHandle <span class="token punctuation">{</span>Function<span class="token punctuation">}</span> - 对 list 的每一个项的异步处理函数，参数为当前处理项，必须 return 一个 Promise 来确定是否继续进行迭代 ( 异步处理 Promise 实例化必须在 asyncHandle 中完成 )
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">}</span></span> - 返回一个 Promise 值来确认所有数据是否迭代完成
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">concurrencyLimit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> limit<span class="token punctuation">,</span> asyncHandle</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token function-variable function">recursion</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tasks</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//递归迭代数组，形成一条执行链</span>
        <span class="token keyword">return</span> <span class="token function">asyncHandle</span><span class="token punctuation">(</span>tasks<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//获取队列头数据，并用异步处理函数处理，返回一个 Promise 实例</span>
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> <span class="token comment">// 返回异步处理结果 </span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>tasks<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">recursion</span><span class="token punctuation">(</span>tasks<span class="token punctuation">)</span>   <span class="token comment">// 数组还未迭代完，递归继续进行迭代</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//迭代完成，返回最终数据</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'res is '</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span>
                    <span class="token keyword">return</span> res 
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//捕获错误</span>
            	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'err data is'</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            	<span class="token keyword">if</span> <span class="token punctuation">(</span>tasks<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//数组未迭代完成，继续迭代</span>
                    <span class="token keyword">return</span> <span class="token function">recursion</span><span class="token punctuation">(</span>tasks<span class="token punctuation">)</span>   <span class="token comment">// 数组还未迭代完，递归继续进行迭代</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//迭代完成，返回最终数据</span>
                    <span class="token keyword">return</span> err
                <span class="token punctuation">}</span>
        	<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">let</span> listCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拷贝需要处理的列表</span>
    <span class="token keyword">let</span> asyncList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 正在进行的数量为 limit 个并发异步操作</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>limit<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 控制并发数量，通过 Promise.all 形成 limit 条并发执行的执行链</span>
        asyncList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> <span class="token function">recursion</span><span class="token punctuation">(</span>listCopy<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//实例化 limit 个 Promise 异步操作实例</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>asyncList<span class="token punctuation">)</span>
    	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 返回 limit 条并发执行的执行链的最后一个执行结果</span>
        	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">all data is </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>response<span class="token punctuation">)</span>
    	<span class="token punctuation">}</span><span class="token punctuation">)</span>
    	<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">error: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>err<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 所有并发异步操作都完成后，本次并发控制迭代完成</span>
<span class="token punctuation">}</span>


<span class="token comment">//-------------测试demo--------------------</span>
<span class="token keyword">let</span> dataLists <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//生成 1-10的数组</span>
<span class="token function">concurrencyLimit</span><span class="token punctuation">(</span>dataLists<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">curItem</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">return data is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>curItem<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>curItem <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果数据是 4 的倍数，获取失败</span>
            	<span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                 	<span class="token literal-property property">data</span><span class="token operator">:</span> curItem<span class="token punctuation">,</span>
                	<span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">404</span> 
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> curItem<span class="token punctuation">,</span>
                <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5000</span><span class="token punctuation">)</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实现三：<strong>使用递归和队列 (推荐)</strong></p>
<ul>
<li>思路：将待请求数据存入数组，形成并发执行的异步操作队列，然后进行遍历，取出数组中每一项数据执行异步操作。进行调用控制并发数的同时，每结束一个请求并发起一个新的请求。使用递归的方式，添加一个请求队列，然后我们只要维护这个队列，每次发起一个请求就添加进去，结束一个就丢出来，继而实现了控制并发</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@params</span> list <span class="token punctuation">{</span>Array<span class="token punctuation">}</span> - 要迭代的任务数组
 * <span class="token keyword">@params</span> limit <span class="token punctuation">{</span>Number<span class="token punctuation">}</span> - 并发数量控制数
 * <span class="token keyword">@params</span> asyncHandle <span class="token punctuation">{</span>Function<span class="token punctuation">}</span> - 对 list 的每一个任务的异步处理函数，参数为当前处理项，必须 return 一个 Promise 来确定是否继续进行迭代 ( 异步处理 Promise 实例化必须在 asyncHandle 中完成 )
 * <span class="token keyword">@params</span> callback <span class="token punctuation">{</span>Function<span class="token punctuation">}</span> - 所有异步操作结束后执行的回调
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">}</span></span> - 返回一个 Promise 值来确认所有数据是否迭代完成
**/</span>
<span class="token keyword">const</span> <span class="token function-variable function">concurrencyLimit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> limit<span class="token punctuation">,</span> asyncHandle<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 异步任务数量</span>
    <span class="token keyword">const</span> tasksQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//并发任务队列，每次执行一个任务就添加进去，结束一个就丢出来，继而实现了控制并发</span>
    <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 任务执行结果</span>
    <span class="token keyword">let</span>   tasksList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拷贝需要处理的任务列表</span>
    
    <span class="token keyword">const</span> <span class="token function-variable function">resultHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//结果处理函数，维护请求队列</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'current tasks queue is:'</span><span class="token punctuation">,</span>tasksQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> resultNum <span class="token operator">=</span> results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保存结果，并返回执行完成的异步任务数量</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>resultNum <span class="token operator">&lt;</span> count <span class="token operator">&amp;&amp;</span> tasksList<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//返回结束任务数量和待处理任务列表不为空</span>
            tasksQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//任务队列中移除已经完成的异步任务</span>
            <span class="token function">handleTask</span><span class="token punctuation">(</span>tasksList<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//从任务列表中添加一个任务进行处理</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>resultNum <span class="token operator">===</span> count <span class="token operator">&amp;&amp;</span> tasksList<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token comment">//任务列表任务处理完成并所有执行结果返回</span>
            <span class="token string">'function'</span> <span class="token operator">===</span> <span class="token keyword">typeof</span> callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token function-variable function">handleTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//任务处理方法，控制任务并发数量</span>
        <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token function">asyncHandle</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span> <span class="token comment">//任务处理</span>
        	<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
           		<span class="token function">resultHandle</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> 
       		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
				<span class="token function">resultHandle</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>tasksQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span> <span class="token operator">&lt;</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//并发执行任务数量小于限制数量,[].push 操作后返回当前数组长度</span>
            <span class="token function">handleTask</span><span class="token punctuation">(</span>tasksList<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加并发任务处理</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//将任务列表任务添加到任务处理方法</span>
    <span class="token function">handleTask</span><span class="token punctuation">(</span>tasksList<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">//--------------------测试demo--------------------------------------</span>
<span class="token keyword">let</span> dataLists <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//生成 1-10的数组</span>
<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'all tasks finished! results is:'</span><span class="token punctuation">,</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">concurrencyLimit</span><span class="token punctuation">(</span>dataLists<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">curItem</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">return data is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>curItem<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
             <span class="token keyword">if</span><span class="token punctuation">(</span>curItem <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果数据是 3 的倍数，获取失败</span>
            	<span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                 	<span class="token literal-property property">data</span><span class="token operator">:</span> curItem<span class="token punctuation">,</span>
                	<span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">404</span> 
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> curItem<span class="token punctuation">,</span>
                <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5000</span><span class="token punctuation">)</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="应用-1" tabindex="-1"><a class="header-anchor" href="#应用-1" aria-hidden="true">#</a> 应用</h4>
<ul>
<li>
<p>题目一：<strong>网页中预加载20张图片资源，分步加载，一次加载10张，两次完成，怎么控制图片请求的并发，怎样感知当前异步请求是否已完成？</strong></p>
<p>答案参考 <a href="https://zhuanlan.zhihu.com/p/29792886" target="_blank" rel="noopener noreferrer">Promise 异步流程控制<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<ExternalLinkIcon/></a></p>
<p><a href="https://promisesaplus.com/" target="_blank" rel="noopener noreferrer">Promises/A+<ExternalLinkIcon/></a></p>
<p><a href="https://es6.ruanyifeng.com/#docs/promise#Promise-all" target="_blank" rel="noopener noreferrer">es6文档<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises" target="_blank" rel="noopener noreferrer">使用 Promise<ExternalLinkIcon/></a></p>
<p><a href="http://liubin.org/promises-book/#ch2-promise-all" target="_blank" rel="noopener noreferrer">promise并行<ExternalLinkIcon/></a></p>
</div></template>



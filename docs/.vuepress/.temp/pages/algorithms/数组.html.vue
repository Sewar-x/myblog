<template><div><h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h1>
<p><img src="@source/images/数据结构-数组.png" alt="image-20231022165758924"></p>
<h2 id="js-数组-api-实现" tabindex="-1"><a class="header-anchor" href="#js-数组-api-实现" aria-hidden="true">#</a> JS 数组 API 实现</h2>
<h5 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer">map()<ExternalLinkIcon/></a></h5>
<p>语法</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> new_array <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">[</span><span class="token punctuation">,</span> index<span class="token punctuation">[</span><span class="token punctuation">,</span> array<span class="token punctuation">]</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// Return element for new_array </span>
<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">,</span> thisArg<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>注意</p>
<ul>
<li><code v-pre>map</code>生成一个新数组</li>
<li>如果 <code v-pre>thisArg</code> 参数提供给<code v-pre>map</code>，则会被用作回调函数的<code v-pre>this</code>值。否则<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined" target="_blank" rel="noopener noreferrer"><code v-pre>undefined</code><ExternalLinkIcon/></a>会被用作回调函数的<code v-pre>this</code>值</li>
<li><code v-pre>map </code>不修改调用它的原数组本身</li>
</ul>
<p>实现</p>
<ul>
<li>遍历数组实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * array.map(function(currentValue,index,arr), thisValue)方法介绍：
 * 作用：按照原始数组元素顺序依次调用处理函数处理元素
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 元素处理函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>  <span class="token parameter">context</span> 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象
 * <span class="token keyword">@return</span> array 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
 */</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myMap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fn<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not a function</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> 						<span class="token comment">//返回的新数组</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">this</span> 						<span class="token comment">//this指向方法调用者，一般方法调用者为数组，所以这里this就是调用该遍历方法的数组</span>
  context <span class="token operator">=</span> context <span class="token operator">||</span> window 			<span class="token comment">//省略context或则context为null、undefined的时候默认使用全局对象</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//往结果数组中添加在context作用域上调用的fn函数的结果,参数为map处理函数的参数：currentValue,index,arr</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>reduce模拟实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myMap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fn<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not a function</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  context <span class="token operator">=</span> context <span class="token operator">||</span> window
  <span class="token comment">//this指向方法调用者,一般该方法调用者为被遍历是数组，所以this指向被遍历的数组</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> current<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> current<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" rel="noopener noreferrer">forEach()<ExternalLinkIcon/></a></h5>
<p>语法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>currentValue <span class="token punctuation">[</span><span class="token punctuation">,</span> index <span class="token punctuation">[</span><span class="token punctuation">,</span> array<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">,</span> thisArg<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意</p>
<ul>
<li>如果省略了 <code v-pre>thisArg</code> 参数，或者其值为 <code v-pre>null</code> 或 <code v-pre>undefined</code>，<code v-pre>this</code> 则指向全局对象</li>
<li><code v-pre>forEach()</code> 遍历的范围在第一次调用 <code v-pre>callback</code> 前就会确定
<ul>
<li>调用 <code v-pre>forEach</code> 后添加到数组中的项不会被 <code v-pre>callback</code> 访问到</li>
<li>如果已经存在的值被改变，则传递给 <code v-pre>callback</code> 的值是 <code v-pre>forEach()</code> 遍历到他们那一刻的值</li>
<li>已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank" rel="noopener noreferrer"><code v-pre>shift()</code><ExternalLinkIcon/></a>），之后的一个元素将被跳过</li>
</ul>
</li>
<li>除了抛出异常以外，没有办法中止或跳出 <code v-pre>forEach()</code> 循环</li>
</ul>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">forEach</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> thisArg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">'this is null or not defined'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callback <span class="token operator">+</span> <span class="token string">' is not a function'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token constant">O</span> <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token constant">O</span><span class="token punctuation">.</span>length <span class="token operator">>>></span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> <span class="token constant">O</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> <span class="token constant">O</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token constant">O</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    k<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank" rel="noopener noreferrer">reduce()<ExternalLinkIcon/></a></h5>
<p>语法</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>accumulator<span class="token punctuation">,</span> currentValue<span class="token punctuation">[</span><span class="token punctuation">,</span> index<span class="token punctuation">[</span><span class="token punctuation">,</span> array<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">,</span> initialValue<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>注意</p>
<ul>
<li>回调函数第一次执行时，<code v-pre>accumulator</code> 和<code v-pre>currentValue</code>的取值有两种情况：
<ul>
<li>如果调用<code v-pre>reduce()</code>时提供了<code v-pre>initialValue</code>，<code v-pre>accumulator</code>取值为<code v-pre>initialValue</code>，<code v-pre>currentValue</code>取数组中的第一个值；</li>
<li>如果没有提供 <code v-pre>initialValue</code>，那么<code v-pre>accumulator</code>取数组中的第一个值，<code v-pre>currentValue</code>取数组中的第二个值。</li>
</ul>
</li>
</ul>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
在这个示例中，我们通过 Array.prototype 对象扩展了一个名为 myReduce 的方法。该方法接受两个参数：回调函数 callback 和可选的初始值 initialValue。

在 myReduce 方法内部，我们首先根据 initialValue 的存在与否来确定初始的累加器值 accumulator。如果 initialValue 未提供，则将 accumulator 设置为 undefined，否则将其设置为 initialValue。

然后，我们使用 for 循环遍历原始数组 this（通过 this 可以访问调用 myReduce 方法的数组实例）。在每次循环中，我们将累加器 accumulator 和当前元素应用于回调函数 callback，同时传递当前元素的值、索引和原始数组作为参数。回调函数的返回值将成为下一次迭代的累加器值。

最后，我们返回最终的累加器值 accumulator。
**/</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myReduce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> initialValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> accumulator <span class="token operator">=</span> initialValue <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> initialValue<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>accumulator <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      accumulator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      accumulator <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span>accumulator<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> accumulator<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noopener noreferrer">filter()<ExternalLinkIcon/></a></h5>
<p>语法</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> newArray <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>element<span class="token punctuation">[</span><span class="token punctuation">,</span> index<span class="token punctuation">[</span><span class="token punctuation">,</span> array<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">,</span> thisArg<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>注意：</p>
<ul>
<li><code v-pre>filter</code> 不会改变原数组，它返回过滤后的新数组</li>
<li>如果为 <code v-pre>filter</code> 提供一个 <code v-pre>thisArg</code> 参数，则它会被作为 <code v-pre>callback</code> 被调用时的 <code v-pre>this</code> 值。否则，<code v-pre>callback</code> 的 <code v-pre>this</code> 值在非严格模式下将是全局对象，严格模式下为 <code v-pre>undefined</code></li>
</ul>
<p>实现</p>
<ul>
<li>遍历数组实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myFilter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fn<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not a function</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//返回的新数组</span>
      <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">//this指向方法调用者，一般方法调用者为数组，所以这里this就是调用该遍历方法的数组</span>
      context <span class="token operator">=</span> context <span class="token operator">||</span> window <span class="token comment">//省略context或则context为null、undefined的时候默认使用全局对象</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//调用fn执行，若结果返回为true，将数据放入结果数组</span>
          <span class="token comment">//往结果数组中添加在context作用域上调用的fn函数的结果,参数为map处理函数的参数：currentValue,index,arr</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
 	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用reduce实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myFilter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fn<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not a function</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  context <span class="token operator">=</span> context <span class="token operator">||</span> window
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> current<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> current<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank" rel="noopener noreferrer">some()<ExternalLinkIcon/></a></h5>
<p>语法</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>element<span class="token punctuation">[</span><span class="token punctuation">,</span> index<span class="token punctuation">[</span><span class="token punctuation">,</span> array<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">,</span> thisArg<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>注意</p>
<ul>
<li><code v-pre>some()</code> 被调用时不会改变数组</li>
<li>如果一个<code v-pre>thisArg</code>参数提供给some()，它将被用作调用的 <code v-pre>callback</code>的 <code v-pre>this</code> 值。否则， 它的 <code v-pre>this</code> value将是 <code v-pre>undefined</code></li>
</ul>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">some</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">this</span>
    context <span class="token operator">=</span> context <span class="token operator">||</span> window
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="every" tabindex="-1"><a class="header-anchor" href="#every" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every" target="_blank" rel="noopener noreferrer">every()<ExternalLinkIcon/></a></h5>
<p>语法</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>element<span class="token punctuation">[</span><span class="token punctuation">,</span> index<span class="token punctuation">[</span><span class="token punctuation">,</span> array<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">,</span> thisArg<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>注意</p>
<ul>
<li><code v-pre>every</code> 不会改变原数组</li>
<li>如果省略 thisArg 参数，则 <code v-pre>callback</code> 被调用时的 <code v-pre>this</code> 值，在非严格模式下为全局对象，在严格模式下传入 <code v-pre>undefined</code></li>
</ul>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">every</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">this</span>
    context  <span class="token operator">=</span> context <span class="token operator">||</span> window
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="flat" tabindex="-1"><a class="header-anchor" href="#flat" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat" target="_blank" rel="noopener noreferrer">flat()<ExternalLinkIcon/></a></h5>
<ul>
<li>数组扁平化：指将多维数组转化成一维数组</li>
</ul>
<p>语法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> newArray <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实现</p>
<ul>
<li>遍历扁平化</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 使用扩展运算符和some方法
 * some方法：用于检测数组中的元素是否满足指定条件（函数提供）；会依次执行数组的每个元素：
 * 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false
 * 思想：some检测数组元素中是否含有数组，如果是则扩展这一层数组，循环知道数组中没有数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 多维数组
 * <span class="token keyword">@return</span> faltArr 扁平化后的数组
 */</span>
<span class="token keyword">function</span> <span class="token function">flatten</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span>isArray<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//检测数组中元素是否包含数组</span>
    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span> <span class="token comment">//扩展这一层数组</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>递归扁平化</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用 reduce、concat 和递归展开无限多层嵌套的数组</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">flatten</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> d <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> d <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=></span> acc<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">flatten</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> d <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token operator">:</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">flatten</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 遍历数组元素，判断元素是否为数组，如果是，则递归扁平并合并到新数组，否则放入新数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 多维数组
 * <span class="token keyword">@return</span> 扁平后的一维数组
 */</span>
<span class="token keyword">function</span> <span class="token function">flatten</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> flatArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      flatArr <span class="token operator">=</span> flatArr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">flatten</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      flatArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> flatArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
递归的方式来处理嵌套数组
**/</span>
<span class="token keyword">function</span> <span class="token function">flatten</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flatArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token keyword">function</span> <span class="token function">flattenHelper</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">flattenHelper</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        flatArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">flattenHelper</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> flatArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组操作" tabindex="-1"><a class="header-anchor" href="#数组操作" aria-hidden="true">#</a> 数组操作</h2>
<h3 id="数组插入数据" tabindex="-1"><a class="header-anchor" href="#数组插入数据" aria-hidden="true">#</a> 数组插入数据</h3>
<ul>
<li>
<p>题目：在线性表的第i个元素中插入元素e</p>
</li>
<li>
<p>思路：</p>
<ul>
<li>方法一：将所有第i个元素数据后面元素后移一位，将元素e插入第i个位置</li>
<li>方法二：使用数组的splice(index,howmany,item1,.....,itemX)方法实现</li>
</ul>
</li>
<li>
<p>分析：时间复杂度O(n)</p>
</li>
<li>
<p>实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> number <span class="token punctuation">}</span></span> <span class="token parameter">i</span> 插入位置
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> ElementType <span class="token punctuation">}</span></span> <span class="token parameter">e</span> 插入元素
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> ElementList <span class="token punctuation">}</span></span> <span class="token parameter">list</span> 元素列表
 */</span>
<span class="token keyword">function</span> <span class="token function">ListInsert</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> e<span class="token punctuation">,</span> list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> list<span class="token punctuation">.</span>length <span class="token operator">||</span> i <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> list
  <span class="token punctuation">}</span>
  list<span class="token punctuation">.</span>length <span class="token operator">=</span> list<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">//数组增加一个位子</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">>=</span> list<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> list<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  list<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> e
  <span class="token keyword">return</span> list
<span class="token punctuation">}</span>
<span class="token comment">//----------------测试---------------------</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">ListInsert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h5 id="数组删除数据" tabindex="-1"><a class="header-anchor" href="#数组删除数据" aria-hidden="true">#</a> 数组删除数据</h5>
<ul>
<li>
<p>题目：在线性表的删除第i个元素</p>
</li>
<li>
<p>思路：</p>
<ul>
<li>方法一：将所有第i个元素数据后面元素前移一位</li>
<li>方法二：使用数组的splice(index,howmany,item1,.....,itemX)方法实现</li>
</ul>
</li>
<li>
<p>分析：时间复杂度O(n)</p>
</li>
<li>
<p>实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ListDelete</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">></span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> list
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> list<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  list<span class="token punctuation">.</span>length <span class="token operator">=</span> list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">return</span> list
<span class="token punctuation">}</span>
<span class="token comment">//------------------测试--------------------</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">ListDelete</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="数组去重" tabindex="-1"><a class="header-anchor" href="#数组去重" aria-hidden="true">#</a> 数组去重</h3>
<h5 id="使用双层循环" tabindex="-1"><a class="header-anchor" href="#使用双层循环" aria-hidden="true">#</a> 使用双层循环</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 思想：循环遍历数组，循环查找当前数组重复数字
 * 分析：时间复杂度 O(n^2)，空间复杂度 O(1)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 * <span class="token keyword">@return</span> array
 */</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        i<span class="token operator">--</span> <span class="token comment">//删除后后移下标</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用array-indexof" tabindex="-1"><a class="header-anchor" href="#使用array-indexof" aria-hidden="true">#</a> 使用Array.indexOf()</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//indexOf()方法：返回数组中某个元素首次出现的位置</span>
<span class="token doc-comment comment">/**
 * 思想：使用indeof()方法判断，遍历数组，当当前数据下标不等于它首次出现位置的下标时，认为重复数据，去除
 * 分析：
时间复杂度分析：

外层循环 for (let i = 0; i &lt; arr.length; i++) 遍历了数组中的每个元素，所以它的时间复杂度是 O(n)，其中 n 是数组的长度。
内层循环中的 arr.indexOf(arr[i]) 调用了 indexOf 方法，它需要在数组中进行线性搜索来查找元素的索引。在最坏的情况下，如果数组中没有重复元素，它需要遍历整个数组，时间复杂度为 O(n)。当删除重复元素后，剩余元素会向前移动，导致后续的 indexOf 调用的时间复杂度也是 O(n)。
splice 方法的时间复杂度是 O(n)，因为它需要移动数组中的元素来填补删除的空位。
综上所述，该算法的时间复杂度是 O(n^2)，其中 n 是数组的长度。

空间复杂度分析：
该算法没有使用额外的空间来存储元素，只是在原地修改数组。因此，它的空间复杂度是 O(1)，即常数级别的空间复杂度。

 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 * <span class="token keyword">@return</span> array
 */</span>
<span class="token keyword">function</span> <span class="token function">unique1</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      i<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 思想: 使用indexOf方法：遍历数组，判断当前数据下标是否为该数据首次出现下标，如果是，则加入另一个数组；该数组为去重后的数组
 * 分析：时间复杂度O(n^2)，空间复杂度O(n)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 * <span class="token keyword">@return</span> uArray
 */</span>
<span class="token keyword">function</span> <span class="token function">unique2</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> uArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//为数据首次出现下标</span>
      uArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> uArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 思想：使用indexOf方法：创建一个数组，该数组为去重数据后的数组；遍历数组，判断去重数据后的数组中是否存在该数据，不存在则添加，否则跳过
 * 分析：时间复杂度O(n^2)，空间复杂度O(n)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 * <span class="token keyword">@return</span> uArray
 */</span>
<span class="token keyword">function</span> <span class="token function">unique3</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> uArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>uArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//判断数据是否存在</span>
      uArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> uArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用array-filter" tabindex="-1"><a class="header-anchor" href="#使用array-filter" aria-hidden="true">#</a> 使用Array.filter()</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//filter():遍历并检测数组，返回一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素</span>
<span class="token doc-comment comment">/**
 * 思想：使用filter过滤出数组中元素首次出现的下标与当前遍历的下标值相同的元素
 时间复杂度分析：

filter 方法本身会遍历数组中的每个元素，并对每个元素执行给定的回调函数。因此，它的时间复杂度是 O(n)，其中 n 是数组的长度。
在回调函数中，arr.indexOf(current) 调用了 indexOf 方法来查找当前元素在数组中的索引位置。在最坏的情况下，如果数组中没有重复元素，则需要遍历整个数组，时间复杂度为 O(n)。当数组中有重复元素时，indexOf 方法的时间复杂度依然是 O(n)。
综上所述，该算法的时间复杂度是 O(n^2)，其中 n 是数组的长度。
空间复杂度分析：

该算法创建了一个新的数组作为结果，其大小取决于满足条件的元素数量。在最坏的情况下，当所有元素都满足条件时，新数组的大小与原始数组的大小相同。因此，空间复杂度是 O(n)，其中 n 是数组的长度。
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 * <span class="token keyword">@return</span> array
 */</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token operator">===</span> index <span class="token comment">//返回下标与数组首次出现下标位置相同数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token operator">===</span> arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token comment">//返回首次出现下标和最后一次出现下标相同数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//hasOwnProperty()方法返回一个布尔值，该布尔值指示对象是否具有指定的属性作为其自身的属性（而不是继承它）</span>
<span class="token doc-comment comment">/**
 * 思想：开辟一个外部存储空间用于标示元素是否出现过，过滤出外部存储空间中没有出现过的元素
 
 时间复杂度分析：

初始化对象 container 的操作是一个常数时间的操作，不会对时间复杂度产生显著影响。
filter 方法本身会遍历数组中的每个元素，并对每个元素执行给定的回调函数。因此，它的时间复杂度是 O(n)，其中 n 是数组的长度。
在回调函数中，container.hasOwnProperty(current) 检查当前元素是否已经存在于 container 对象中。由于对象的查找操作的时间复杂度是 O(1)，所以该检查是一个常数时间的操作。
如果当前元素已经存在于 container 对象中，回调函数返回 false，表示当前元素不满足条件，将被过滤掉。否则，将当前元素添加到 container 对象，并返回 true，表示当前元素满足条件，将被保留在新数组中。
综上所述，该算法的时间复杂度是 O(n)，其中 n 是数组的长度。
空间复杂度分析：

该算法使用了一个对象 container 来存储已经出现过的元素。在最坏的情况下，当数组中的所有元素都是唯一的时候，container 对象的大小将与数组的长度相同。因此，空间复杂度是 O(n)，其中 n 是数组的长度。
额外创建的新数组的大小取决于满足条件的元素数量，但在空间复杂度分析中，通常只考虑额外使用的空间，而不考虑输入和输出的空间占用。
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 */</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> container <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    container<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token punctuation">(</span>container<span class="token punctuation">[</span>currnet<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用array-includes" tabindex="-1"><a class="header-anchor" href="#使用array-includes" aria-hidden="true">#</a> 使用Array.includes()</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * includes方法判断一个数组是否包含一个指定元素，是返回true，否则返回false
 * 思想：新建去重数组，遍历原数组判断去重数组是否存在数据，不存在则添加进去重数组
 时间复杂度分析：

循环 for (let i = 0; i &lt; arr.length; i++) 遍历了原始数组中的每个元素，所以它的时间复杂度是 O(n)，其中 n 是数组的长度。
在循环中，使用 includes 方法来检查 uArr 数组是否已经包含当前元素。includes 方法需要遍历 uArr 数组来查找元素，所以在最坏的情况下，它的时间复杂度也是 O(n)。
uArr.push(arr[i]) 操作在每次循环中将元素添加到 uArr 数组中。在最坏的情况下，每个元素都需要被添加到 uArr 数组中，所以这个操作的时间复杂度也是 O(n)。
综上所述，该算法的时间复杂度是 O(n^2)，其中 n 是数组的长度。
空间复杂度分析：

该算法创建了一个新的数组 uArr 来存储去重后的元素。在最坏的情况下，当原始数组中的所有元素都是唯一的时候，uArr 数组的大小将与原始数组的大小相同。因此，空间复杂度是 O(n)，其中 n 是数组的长度。
需要注意的是，该算法没有使用额外的空间来存储其他中间结果，所以除了 uArr 数组外，没有额外的空间开销。
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 * <span class="token keyword">@return</span> array
 */</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> uArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>uArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//去重数据总不包含</span>
      uArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用set" tabindex="-1"><a class="header-anchor" href="#使用set" aria-hidden="true">#</a> 使用Set()</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 思想：创建数组的Set集合，将Set结合转化为数组
 
 时间复杂度分析：

创建 Set 对象的时间复杂度是 O(n)，其中 n 是数组的长度。在构建 Set 对象时，它会遍历数组中的每个元素并将其添加到 Set 中。由于 Set 数据结构的特性，它会自动去重，确保只有唯一的元素被保留。
Array.from 方法将 Set 对象转换为数组，时间复杂度也是 O(n)，其中 n 是 Set 中不重复元素的数量。
综上所述，该算法的时间复杂度是 O(n)，其中 n 是数组的长度。
空间复杂度分析：

该算法使用了一个额外的 Set 对象来存储不重复的元素。在最坏的情况下，如果原始数组中的所有元素都是唯一的，Set 对象的大小将与原始数组的大小相同。因此，空间复杂度是 O(n)，其中 n 是数组的长度。
Array.from 方法创建了一个新的数组，其大小与 Set 中不重复元素的数量相同。因此，额外的空间开销也是 O(n)。
需要注意的是，该算法没有使用额外的空间来存储其他中间结果。
总结：
该算法具有线性的时间复杂度和线性的空间复杂度，相对较高效。通过利用 Set 的自动去重特性，以及使用内置的 Array.from 方法，可以快速实现数组去重操作。在处理大型数据集时，该算法通常比较高效。

 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 * <span class="token keyword">@return</span> array
 */</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="排序后去重" tabindex="-1"><a class="header-anchor" href="#排序后去重" aria-hidden="true">#</a> 排序后去重</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 思想：数组排序后比较相邻数组是否相同，不相同时添加进入去重后的数组
 * 分析：时间复杂度O（n），空间复杂度O（n）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 包含重复元素数组
 * <span class="token keyword">@return</span> array
 */</span>
<span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> uArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//将数组排序，使相同值的数据相邻</span>
  uArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//保存排序后第一个数据</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//从数组第二个数据开始遍历，判断是否与前一个数据相同，不相同则保存</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      uArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> uArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类数组转化为数组" tabindex="-1"><a class="header-anchor" href="#类数组转化为数组" aria-hidden="true">#</a> 类数组转化为数组</h3>
<ul>
<li>概念：
<ul>
<li>类数组是具有<strong>length</strong>属性，但不具有数组原型上的方法</li>
<li>常见的类数组有<strong>arguments</strong>、DOM操作方法返回的结果，比如 <code v-pre>document.getElementsByTagName()</code></li>
</ul>
</li>
</ul>
<h5 id="使用array-from" tabindex="-1"><a class="header-anchor" href="#使用array-from" aria-hidden="true">#</a> 使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank" rel="noopener noreferrer">Array.from<ExternalLinkIcon/></a></h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="array-prototype-slice-call" tabindex="-1"><a class="header-anchor" href="#array-prototype-slice-call" aria-hidden="true">#</a> Array.prototype.slice.call()</h5>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank" rel="noopener noreferrer">slice()<ExternalLinkIcon/></a>方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="利用concat" tabindex="-1"><a class="header-anchor" href="#利用concat" aria-hidden="true">#</a> 利用<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank" rel="noopener noreferrer">concat()<ExternalLinkIcon/></a></h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="算法题" tabindex="-1"><a class="header-anchor" href="#算法题" aria-hidden="true">#</a> 算法题</h2>
<h3 id="双指法" tabindex="-1"><a class="header-anchor" href="#双指法" aria-hidden="true">#</a> 双指法</h3>
<p>双指针问题是数据结构和算法中常见的一类问题，其解题思路和方法可以总结如下：</p>
<ol>
<li><strong>快慢指针</strong>：快慢指针是双指针问题中常见的一种形式。一般情况下，快指针每次移动2步，慢指针每次移动1步，通过比较快慢指针所指的元素来解决问题。快慢指针常用于<strong>链表相关问题</strong>，如判断链表是否有环、找到链表的中间节点等。</li>
<li><strong>对撞指针</strong>：对撞指针也称为左右指针，分别从数组或字符串的两端开始向中间移动，通过比较指针所指的元素来解决问题。对撞指针常<strong>用于有序数组或字符串的查找问题</strong>，如两数之和、三数之和、反转字符串等。</li>
<li><strong>滑动窗口</strong>：滑动窗口是一种基于双指针的技巧，用于处理数组或字符串中的子串或子数组问题。滑动窗口由左右指针构成，左指针指向窗口的起始位置，右指针向后移动扩展窗口，通过调整左右指针的位置来滑动窗口。滑动窗口常用于求解<strong>最长子串、最小覆盖子串</strong>等问题。</li>
<li><strong>快慢指针遍历</strong>：在某些情况下，可以使用快慢指针同时遍历数组或链表。快指针每次移动多步，慢指针每次移动一步，通过比较快慢指针所指的元素来解决问题。这种方法常用于<strong>查找链表的倒数第k个节点、判断链表是否有环</strong>等问题。</li>
<li><strong>左右指针遍历</strong>：在某些情况下，可以使用左右指针同时从数组的两端向中间遍历。通过调整左右指针的位置来解决问题，如<strong>反转数组、移除元素</strong>等。</li>
</ol>
<p>注意：处理好边界条件和循环终止条件，以确保算法的正确性和效率。</p>
<h5 id="合并有序数组" tabindex="-1"><a class="header-anchor" href="#合并有序数组" aria-hidden="true">#</a> 合并有序数组</h5>
<ul>
<li>题目：</li>
</ul>
<blockquote>
<p>已知线性表LA和LB的数据元素按值非递减有序排列，现要求合并LA和LB成一个新的线性表LC，且LC也非递减有序</p>
<p>例如：LA=（3，5，8，11）; LB=（2，6，8，9，11，15，20）</p>
<p>则合并的Lc=(2，3，5，6，8，8，9，11，11，15，20)</p>
</blockquote>
<ul>
<li>思路：</li>
</ul>
<blockquote>
<p>假设LA中元素为ai,LB中元素为bi,LC中元素为ci,则当ai&lt;=bi时，ci=ai;当ai&gt;bi时，ci=bi</p>
</blockquote>
<p>实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 合并两个数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">La</span> 待合并数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">Lb</span> 待合并数组
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> Lc 待合后数组
 */</span>
<span class="token keyword">function</span> <span class="token function">mergeList</span><span class="token punctuation">(</span><span class="token parameter">La<span class="token punctuation">,</span> Lb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> Lc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> La<span class="token punctuation">.</span>length <span class="token operator">||</span> j <span class="token operator">&lt;</span> Lb<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>La<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> Lb<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Lc<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>La<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      i<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      Lc<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Lb<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
      j<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> La<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Lc<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>La<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    i<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> Lb<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Lc<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Lb<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
    j<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Lc
<span class="token punctuation">}</span>

<span class="token comment">//-------------------------------测试---------------------</span>
<span class="token keyword">let</span> La <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> Lb <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> Lc <span class="token operator">=</span> <span class="token function">mergeList</span><span class="token punctuation">(</span>La<span class="token punctuation">,</span> Lb<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Lc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对撞指针" tabindex="-1"><a class="header-anchor" href="#对撞指针" aria-hidden="true">#</a> 对撞指针</h4>
<h5 id="调整数组顺序" tabindex="-1"><a class="header-anchor" href="#调整数组顺序" aria-hidden="true">#</a> 调整数组顺序</h5>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分</li>
</ul>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>设定两个指针</li>
<li>第一个指针start从数组第一个元素出发，向尾部前进</li>
<li>第二个指针end从数组的最后一个元素出发，向头部前进</li>
<li>start遍历到偶数，end遍历到奇数时，交换两个数的位置</li>
<li>当start&gt;end时，完成交换</li>
</ul>
</blockquote>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reOrderArray</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr；
    <span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token number">0</span>；
    <span class="token keyword">let</span> endIndex <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>startIndex <span class="token operator">&lt;</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>startIndex <span class="token operator">&lt;</span> endIndex <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//头指针奇数前进</span>
            startIndex <span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>startIndex <span class="token operator">&lt;</span> endIndex <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>endIndex<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 尾指针偶数后退</span>
        	endIndex <span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>startIndex <span class="token operator">&lt;</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 交换奇数和偶数位置</span>
            <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span>  <span class="token operator">=</span> arr<span class="token punctuation">[</span>endIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>endIndex<span class="token punctuation">]</span>  <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="和为s的两个数字" tabindex="-1"><a class="header-anchor" href="#和为s的两个数字" aria-hidden="true">#</a> 和为S的两个数字</h5>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>输入一个递增排序的数组和一个数字<code v-pre>S</code>，在数组中查找两个数，使得他们的和正好是<code v-pre>S</code>，如果有多对数字的和等于<code v-pre>S</code>，输出两个数的乘积最小的。</li>
</ul>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>使用双指针方法在递增排序的数组中查找两个数，使它们的和等于给定的目标值 <code v-pre>sum</code>。</li>
<li>其中，<code v-pre>left</code> 指针指向数组的开头，<code v-pre>right</code> 指针指向数组的末尾。</li>
<li>在每次循环中，计算当前指针所指向元素的和 <code v-pre>currentSum</code>。</li>
<li>如果 <code v-pre>currentSum</code> 等于 <code v-pre>sum</code>，则表示找到了一对数字，进一步计算它们的乘积 <code v-pre>product</code>，并与当前最小乘积 <code v-pre>minProduct</code> 进行比较。</li>
<li>如果 <code v-pre>product</code> 小于 <code v-pre>minProduct</code>，则更新 <code v-pre>minProduct</code> 和结果数组 <code v-pre>result</code>。</li>
<li>根据递增排序的特性，如果 <code v-pre>currentSum</code> 小于 <code v-pre>sum</code>，则将 <code v-pre>left</code> 指针向右移动，以增加和的值。</li>
<li>如果 <code v-pre>currentSum</code> 大于 <code v-pre>sum</code>，则将 <code v-pre>right</code> 指针向左移动，以减小和的值。</li>
<li>最后，返回结果数组 <code v-pre>result</code>，其中包含乘积最小的一对数字。</li>
<li>请注意，如果无法找到满足和为 <code v-pre>sum</code> 的一对数字，则返回的结果数组将为空</li>
</ul>
</blockquote>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findNumbersWidthSum</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span>sum</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> minProduct <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> currentSum <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>currentSum <span class="token operator">===</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> product <span class="token operator">=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span>  arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>product <span class="token operator">&lt;</span> minProduct<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                minProduct <span class="token operator">=</span> product<span class="token punctuation">;</span>
                result <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 继续计算查找</span>
            right <span class="token operator">++</span><span class="token punctuation">;</span>
            left <span class="token operator">++</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>currentSum <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">++</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            right <span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>    
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口" aria-hidden="true">#</a> 滑动窗口</h4>
<h5 id="和为s的连续正数序列" tabindex="-1"><a class="header-anchor" href="#和为s的连续正数序列" aria-hidden="true">#</a> 和为S的连续正数序列</h5>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>输入一个正数<code v-pre>S</code>，打印出所有和为S的连续正数序列。</li>
<li>例如：输入<code v-pre>15</code>，有序<code v-pre>1+2+3+4+5</code> = <code v-pre>4+5+6</code> = <code v-pre>7+8</code> = <code v-pre>15</code> 所以打印出3个连续序列<code v-pre>1-5</code>，<code v-pre>5-6</code>和<code v-pre>7-8</code>。</li>
</ul>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>解法一：</p>
</li>
<li>
<p>创建一个子集合容器 child，用于搜索和计算集合和；</p>
</li>
<li>
<p>创建一个连续正数序列（使用子集合搜索过程边搜索边创建），假设初始集合 child 为<code v-pre>[1,2]</code>;</p>
<ul>
<li>
<p>使用双指针进行搜索：</p>
<ul>
<li>small 指针在有序集合最左侧，用于左移缩小集合搜索范围；初始指向 child 集合 1；</li>
<li>big 指针在有序集合最右侧，用于右移扩大搜索范围；初始指向 child 集合 2;</li>
</ul>
</li>
<li>
<p>计算子集合 child 的和 sum；</p>
<ul>
<li>当sum &lt; S，big 指针左移，扩大子集合；并重新计算子集合 child 的和 sum;</li>
<li>当 sum &gt; S，small 左移，缩小子集合；并重新计算子集合 child 的和 sum;</li>
</ul>
</li>
</ul>
</li>
<li>
<p>边界条件：</p>
<ul>
<li>当 big &gt; S 时，结束搜索；</li>
</ul>
</li>
</ul>
</blockquote>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
解法一
**/</span>
<span class="token keyword">function</span> <span class="token function">FindContinuousSequence</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> child  <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//定义子集合</span>
	<span class="token keyword">let</span> small <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> big <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum  <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//保存计算结果</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>big <span class="token operator">&lt;</span> <span class="token constant">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//边界条件：当集合最大值大于 S 时，跳出搜索</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>big <span class="token operator">&lt;</span> <span class="token constant">S</span> <span class="token operator">&amp;&amp;</span> sum <span class="token operator">&lt;</span> <span class="token constant">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//移动指针，边界条件：子集合之和大于 S，停止移动指针</span>
            big<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 指针右移动，扩大搜索范围</span>
            child<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>big<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 扩大子集合内容</span>
            sum <span class="token operator">+=</span> big<span class="token punctuation">;</span> <span class="token comment">//重新计算子集合之和    </span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>small <span class="token operator">&lt;</span> big <span class="token operator">&amp;</span> sum <span class="token operator">></span> <span class="token constant">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            child<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//子集合缩小，去除第一个数</span>
            sum <span class="token operator">-=</span> small <span class="token punctuation">;</span> <span class="token comment">//去除结果中第一个数</span>
            small<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//指针右移动，缩小集合范围</span>
            
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sum <span class="token operator">===</span> <span class="token constant">S</span> <span class="token operator">&amp;&amp;</span> child<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            big<span class="token operator">++</span><span class="token punctuation">;</span>
            child<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>big<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sum <span class="token operator">+=</span> big<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>解法二：</p>
<blockquote>
<ul>
<li>通过维护一个窗口（由<code v-pre>start</code>和<code v-pre>end</code>表示）和当前窗口内数字的和（由<code v-pre>sum</code>表示），逐步向右移动窗口以寻找连续序列。</li>
<li>当<code v-pre>sum</code>等于S时，将窗口内的序列添加到结果数组中，并更新<code v-pre>start</code>和<code v-pre>sum</code>；当<code v-pre>sum</code>小于S时，增加<code v-pre>end</code>并将新数字加入窗口；</li>
<li>当<code v-pre>sum</code>大于S时，减少<code v-pre>start</code>并将窗口左侧数字移出。</li>
<li>循环终止条件是<code v-pre>start &lt; end</code>和<code v-pre>end &lt;= Math.ceil(S/2) + 1</code>，这是为了确保窗口的右边界不会超过S的一半加一，以避免不必要的计算</li>
</ul>
</blockquote>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
解法二
**/</span>
<span class="token keyword">function</span> <span class="token function">findContinuousSequence</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> start <span class="token operator">+</span> end<span class="token punctuation">;</span>
  
  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end <span class="token operator">&amp;&amp;</span> end <span class="token operator">&lt;=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token constant">S</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> <span class="token constant">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> sequence <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sequence<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sequence<span class="token punctuation">)</span><span class="token punctuation">;</span>
      sum <span class="token operator">-=</span> start<span class="token punctuation">;</span>
      start<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token constant">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      end<span class="token operator">++</span><span class="token punctuation">;</span>
      sum <span class="token operator">+=</span> end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      sum <span class="token operator">-=</span> start<span class="token punctuation">;</span>
      start<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例测试</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findContinuousSequence</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 [[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="n-数之和-双指针法" tabindex="-1"><a class="header-anchor" href="#n-数之和-双指针法" aria-hidden="true">#</a> N 数之和（双指针法）</h3>
<blockquote>
<p>N 数之和的题型规律和解题思路规律如下：</p>
<ol>
<li><strong>题型规律</strong>：N 数之和问题是一类常见的问题，其中最经典的是两数之和和三数之和。N 数之和问题可以扩展到任意 N 个数之和。通常，题目要求找出满足特定条件的 N 元组。</li>
<li><strong>解题思路规律</strong>：N 数之和问题的解题思路可以归纳为以下步骤：
<ul>
<li><strong>排序数组</strong>：通常先对给定的数组进行排序，以便后续操作。</li>
<li><strong>定义递归函数</strong>：定义一个递归函数，该函数接受多个参数，包括当前递归层级、目标和、当前起始下标、当前层级已选的元素数组以及用于存储结果的数组。</li>
<li><strong>递归终止条件</strong>：在递归函数内部，判断当前递归层级的值。如果递归到了最底层，可以使用<strong>双指针法</strong>或其他方法找到满足条件的元组。如果递归层级大于最底层，需要在当前起始下标到数组末尾之间进行递归调用。</li>
<li><strong>双指针查找</strong>：在递归到最底层时，使用双指针法在当前起始下标到数组末尾之间查找满足条件的元组。根据当前和与目标和的大小关系来移动指针。</li>
<li><strong>递归调用</strong>：如果递归层级大于最底层，需要在当前起始下标到数组末尾之间进行递归调用，更新递归层级、目标和和起始下标等参数。</li>
<li><strong>去重处理</strong>：在遍历过程中，需要避免重复元素的影响，可以使用条件判断和指针移动来跳过重复元素。</li>
<li><strong>返回结果</strong>：递归函数结束后，返回满足条件且不重复的 N 元组的结果数组。</li>
</ul>
</li>
<li><strong>注意事项</strong>：
<ul>
<li>在解决 N 数之和问题时，排序数组是常用的前提条件，可以通过排序将问题转化为更简单的问题。</li>
<li>需要注意去重处理，避免产生重复的 N 元组。</li>
<li>在使用双指针法时，需要根据当前和与目标和的大小关系来移动指针，以逼近目标和。</li>
</ul>
</li>
</ol>
<p>以上是针对 N 数之和问题的一般性规律和解题思路规律。具体问题可能会有一些变化和特殊要求，但可以借鉴以上思路进行解题。</p>
</blockquote>
<h4 id="两数之和" tabindex="-1"><a class="header-anchor" href="#两数之和" aria-hidden="true">#</a> 两数之和</h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>给定一个整数数组 <code v-pre>nums</code> 和一个目标值 <code v-pre>target</code>，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。</p>
<p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p>
<p>示例:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>给定 nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target <span class="token operator">=</span> <span class="token number">9</span>

因为 nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">7</span> <span class="token operator">=</span> <span class="token number">9</span>
所以返回 <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>使用一个<code v-pre>map</code>将遍历过的数字存起来，值作为<code v-pre>key</code>，下标作为值。</p>
<p>对于每一次遍历：</p>
<ul>
<li>取<code v-pre>map</code>中查找是否有<code v-pre>key</code>为<code v-pre>target-nums[i]</code>的值</li>
<li>如果取到了，则条件成立，返回。</li>
<li>如果没有取到，将当前值作为<code v-pre>key</code>，下标作为值存入<code v-pre>map</code></li>
</ul>
<p>时间复杂度：<code v-pre>O(n)</code></p>
<p>空间复杂度<code v-pre>O(n)</code></p>
</blockquote>
</li>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">[</span>target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="三数之和" tabindex="-1"><a class="header-anchor" href="#三数之和" aria-hidden="true">#</a> 三数之和</h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>给定一个包含 <code v-pre>n</code> 个整数的数组<code v-pre>nums</code>，判断 <code v-pre>nums</code> 中是否存在三个元素<code v-pre>a，b，c</code> ，使得 <code v-pre>a + b + c = 0 ？</code>找出所有满足条件且不重复的三元组。</p>
<p>注意：答案中不可以包含重复的三元组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>例如<span class="token punctuation">,</span> 给定数组 nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span>，

满足要求的三元组集合为：
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>思路</p>
<blockquote>
<p>可以使用双指针和排序的思路来找到满足条件的三元组。以下是详细的解题思路和步骤：</p>
<ol>
<li><strong>排序数组</strong>：首先，对给定的数组 <code v-pre>nums</code> 进行排序，以便后续操作。</li>
<li><strong>遍历固定一个数</strong>：使用一层循环遍历数组 <code v-pre>nums</code>，选择当前固定的数 <code v-pre>nums[i]</code>。</li>
<li><strong>双指针查找另外两个数</strong>：在固定的数的基础上，使用双指针法查找另外两个数 <code v-pre>nums[left]</code> 和 <code v-pre>nums[right]</code>，其中 <code v-pre>left</code> 指针初始值为 <code v-pre>i + 1</code>，<code v-pre>right</code> 指针初始值为数组末尾。</li>
<li><strong>计算三数之和</strong>：计算固定的三个数的和 <code v-pre>sum = nums[i] + nums[left] + nums[right]</code>。</li>
<li><strong>根据三数之和进行判断</strong>：
<ul>
<li>如果 <code v-pre>sum == 0</code>，则将三个数 <code v-pre>[nums[i], nums[left], nums[right]]</code> 加入结果数组中，并将 <code v-pre>left</code> 指针右移，<code v-pre>right</code> 指针左移，继续寻找下一组满足条件的三元组。</li>
<li>如果 <code v-pre>sum &gt; 0</code>，则说明当前和过大，需要将 <code v-pre>right</code> 指针左移，减小和的值。</li>
<li>如果 <code v-pre>sum &lt; 0</code>，则说明当前和过小，需要将 <code v-pre>left</code> 指针右移，增大和的值。</li>
</ul>
</li>
<li><strong>去重处理</strong>：在遍历过程中，遇到重复的数需要跳过，避免产生重复的三元组。</li>
<li><strong>返回结果</strong>：遍历完成后，返回包含所有满足条件且不重复的三元组的结果数组。</li>
</ol>
</blockquote>
</li>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">threeSum</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span> <span class="token comment">// 如果数组长度小于3，无法找到三个元素的和为0</span>
  <span class="token punctuation">}</span>
  
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将数组排序</span>
  
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 避免重复元素</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
      
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          left<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 避免重复元素</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          right<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 避免重复元素</span>
        <span class="token punctuation">}</span>
        
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="四数之和" tabindex="-1"><a class="header-anchor" href="#四数之和" aria-hidden="true">#</a> 四数之和</h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>给定一个包含 <code v-pre>n</code> 个整数的数组<code v-pre>nums</code>，判断 <code v-pre>nums</code> 中是否存在四个元素<code v-pre>a，b，c，d</code> ，使得 <code v-pre>a + b + c + d = 0 ？</code>找出所有满足条件且不重复的四元组。</p>
<p>注意：答案中不可以包含重复的四元组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>给定数组 nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>，和 target <span class="token operator">=</span> <span class="token number">0</span>。

满足要求的四元组集合为：
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>可以使用双指针和排序的思路来找到满足条件的四元组。以下是详细的解题思路和步骤：</p>
<ol>
<li><strong>排序数组</strong>：首先，对给定的数组 <code v-pre>nums</code> 进行排序，以便后续操作。</li>
<li><strong>遍历固定两个数</strong>：使用两层循环遍历数组 <code v-pre>nums</code>，选择当前固定的两个数 <code v-pre>nums[i]</code> 和 <code v-pre>nums[j]</code>。</li>
<li><strong>双指针查找另外两个数</strong>：在固定的两个数的基础上，使用双指针法查找另外两个数 <code v-pre>nums[left]</code> 和 <code v-pre>nums[right]</code>，其中 <code v-pre>left</code> 指针初始值为 <code v-pre>i + 1</code>，<code v-pre>right</code> 指针初始值为数组末尾。</li>
<li><strong>计算四数之和</strong>：计算固定的四个数的和 <code v-pre>sum = nums[i] + nums[j] + nums[left] + nums[right]</code>。</li>
<li><strong>根据四数之和进行判断</strong>：
<ul>
<li>如果 <code v-pre>sum == 0</code>，则将四个数 <code v-pre>[nums[i], nums[j], nums[left], nums[right]]</code> 加入结果数组中，并将 <code v-pre>left</code> 指针右移，<code v-pre>right</code> 指针左移，继续寻找下一组满足条件的四元组。</li>
<li>如果 <code v-pre>sum &gt; 0</code>，则说明当前和过大，需要将 <code v-pre>right</code> 指针左移，减小和的值。</li>
<li>如果 <code v-pre>sum &lt; 0</code>，则说明当前和过小，需要将 <code v-pre>left</code> 指针右移，增大和的值。</li>
</ul>
</li>
<li><strong>去重处理</strong>：在遍历过程中，遇到重复的数需要跳过，避免产生重复的四元组。</li>
<li><strong>返回结果</strong>：遍历完成后，返回包含所有满足条件且不重复的四元组的结果数组。</li>
</ol>
</blockquote>
</li>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fourSum</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result<span class="token punctuation">;</span> <span class="token comment">// 如果数组长度小于4，则无法找到四元组</span>

  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 对数组进行排序</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 去重处理</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 去重处理</span>

      <span class="token keyword">let</span> left <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 去重处理</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 去重处理</span>
          left<span class="token operator">++</span><span class="token punctuation">;</span>
          right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fourSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="五数之和" tabindex="-1"><a class="header-anchor" href="#五数之和" aria-hidden="true">#</a> 五数之和</h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>给定一个包含 n 个整数的数组nums，判断 nums 中是否存在五个元素a，b，c ，d，e使得 a + b + c + d + e= 0 ？找出所有满足条件且不重复的五元组。</p>
</blockquote>
</li>
<li>
<p>思路:</p>
<blockquote>
<p>可以使用递归和双指针的思路来找到满足条件的五元组。以下是详细的解题思路和步骤：</p>
<ol>
<li><strong>排序数组</strong>：首先，对给定的数组 <code v-pre>nums</code> 进行排序，以便后续操作。</li>
<li><strong>定义递归函数</strong>：定义一个递归函数 <code v-pre>kSum</code>，该函数接受五个参数：当前递归层级 <code v-pre>k</code>、目标和 <code v-pre>target</code>、当前起始下标 <code v-pre>start</code>、当前层级已选的元素数组 <code v-pre>current</code>、以及用于存储结果的数组 <code v-pre>result</code>。</li>
<li><strong>递归终止条件</strong>：在递归函数 <code v-pre>kSum</code> 内部，需要判断当前递归层级 <code v-pre>k</code> 的值。如果 <code v-pre>k</code> 等于 2，则表示递归到了最底层，此时可以使用双指针法找到两个数的和等于目标和 <code v-pre>target</code>。如果 <code v-pre>k</code> 大于 2，则需要在当前起始下标 <code v-pre>start</code> 到数组末尾之间进行递归调用。</li>
<li><strong>双指针查找</strong>：在递归到了最底层时，使用双指针法在当前起始下标 <code v-pre>start</code> 到数组末尾之间查找两个数的和等于目标和 <code v-pre>target</code>。左指针 <code v-pre>left</code> 的初始值为 <code v-pre>start</code>，右指针 <code v-pre>right</code> 的初始值为数组末尾。</li>
<li><strong>计算两数之和</strong>：计算左右指针指向的两个数的和 <code v-pre>sum = nums[left] + nums[right]</code>。</li>
<li><strong>根据两数之和进行判断</strong>：
<ul>
<li>如果 <code v-pre>sum === target</code>，则将当前层级已选的元素数组 <code v-pre>current</code> 添加上 <code v-pre>nums[left]</code> 和 <code v-pre>nums[right]</code>，并将 <code v-pre>current</code> 添加到结果数组 <code v-pre>result</code> 中。</li>
<li>如果 <code v-pre>sum &lt; target</code>，则说明当前和过小，需要将 <code v-pre>left</code> 指针右移，增大和的值。</li>
<li>如果 <code v-pre>sum &gt; target</code>，则说明当前和过大，需要将 <code v-pre>right</code> 指针左移，减小和的值。</li>
</ul>
</li>
<li><strong>递归调用</strong>：如果 <code v-pre>k</code> 大于 2，则在当前起始下标 <code v-pre>start</code> 到数组末尾之间进行递归调用 <code v-pre>kSum</code> 函数，其中 <code v-pre>k</code> 的值减 1，目标和 <code v-pre>target</code> 减去当前选定的数 <code v-pre>nums[i]</code>，起始下标 <code v-pre>start</code> 更新为 <code v-pre>i + 1</code>，当前层级已选的元素数组 <code v-pre>current</code> 添加上 <code v-pre>nums[i]</code>。</li>
<li><strong>去重处理</strong>：在遍历过程中，遇到重复的数需要跳过，避免产生重复的五元组。</li>
<li><strong>返回结果</strong>：递归函数结束后，返回包含所有满足条件且不重复的五元组的结果数组。</li>
</ol>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fiveSum</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span> <span class="token comment">// 如果数组长度小于5，无法找到五个元素的和为0</span>
  <span class="token punctuation">}</span>

  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将数组排序</span>

  <span class="token keyword">function</span> <span class="token function">kSum</span><span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> target<span class="token punctuation">,</span> start<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> left <span class="token operator">=</span> start<span class="token punctuation">;</span>
      <span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>current<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 避免重复元素</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 避免重复元素</span>
          <span class="token punctuation">}</span>

          left<span class="token operator">++</span><span class="token punctuation">;</span>
          right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum<span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> start <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 避免重复元素</span>
        <span class="token punctuation">}</span>

        <span class="token function">kSum</span><span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>current<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">kSum</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fiveSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="矩阵基础" tabindex="-1"><a class="header-anchor" href="#矩阵基础" aria-hidden="true">#</a> 矩阵基础</h3>
<h3 id="二维数组-矩阵思维" tabindex="-1"><a class="header-anchor" href="#二维数组-矩阵思维" aria-hidden="true">#</a> 二维数组（矩阵思维）</h3>
<h4 id="矩阵基础-1" tabindex="-1"><a class="header-anchor" href="#矩阵基础-1" aria-hidden="true">#</a> 矩阵基础</h4>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/453305373" target="_blank" rel="noopener noreferrer">线性代数知识点总结<ExternalLinkIcon/></a></li>
</ul>
<h4 id="顺时针打印矩阵" tabindex="-1"><a class="header-anchor" href="#顺时针打印矩阵" aria-hidden="true">#</a> 顺时针打印矩阵</h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。</p>
<p>例如，如果输入如下4 X 4矩阵：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1 2 3 4 
5 6 7 8
9 10 11 12 
13 14 15 16 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则依次打印出数字<code v-pre>1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.</code></p>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>要按照从外向里以顺时针的顺序打印矩阵的元素，可以使用模拟螺旋遍历的方法。以下是详细的解题思路和步骤：</p>
<ol>
<li><strong>确定边界</strong>：定义四个变量 <code v-pre>top</code>、<code v-pre>bottom</code>、<code v-pre>left</code> 和 <code v-pre>right</code>，分别表示当前遍历的上边界、下边界、左边界和右边界。</li>
<li><strong>初始化结果数组</strong>：创建一个结果数组 <code v-pre>result</code> 用于存储按顺序打印的数字。</li>
<li><strong>按螺旋顺序遍历</strong>：使用一个循环，不断按照顺时针的顺序遍历矩阵。每次迭代，按照从左到右、从上到下、从右到左、从下到上的顺序遍历矩阵的边界。</li>
<li><strong>将遍历的数字添加到结果数组</strong>：在每个方向上的遍历过程中，将遍历到的数字依次添加到结果数组 <code v-pre>result</code> 中。</li>
</ol>
</blockquote>
</li>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> bottom <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> m <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从左到右</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> m <span class="token operator">*</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    top<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token comment">// 从上到下</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bottom <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> m <span class="token operator">*</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    right<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token comment">// 从右到左</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> right<span class="token punctuation">;</span> i <span class="token operator">>=</span> left <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> m <span class="token operator">*</span> n<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    bottom<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token comment">// 从下到上</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> bottom<span class="token punctuation">;</span> i <span class="token operator">>=</span> top <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> m <span class="token operator">*</span> n<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    left<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">spiralOrder</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="构建乘积数组" tabindex="-1"><a class="header-anchor" href="#构建乘积数组" aria-hidden="true">#</a> 构建乘积数组</h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>给定一个数组A<code v-pre>[0,1,...,n-1]</code>,请构建一个数组B<code v-pre>[0,1,...,n-1]</code>,其中B中的元素<code v-pre>B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]</code>。不能使用除法。</p>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>要构建数组 B，使得 B[i] 等于数组 A 中除了 A[i] 之外的所有元素的乘积，可以使用两次遍历来实现。</p>
<p>解题思路如下：</p>
<ol>
<li>初始化结果数组 B，长度与数组 A 相同。</li>
<li>第一次遍历：从左到右计算 B[i] 的部分乘积。对于每个 B[i]，将 A[i] 左侧的元素的乘积累积到 B[i] 上。即 B[i] = A[0] * A[1] * ... * A[i-1]。</li>
<li>第二次遍历：从右到左计算 B[i] 的剩余乘积。对于每个 B[i]，将 A[i] 右侧的元素的乘积累积到 B[i] 上。即 B[i] *= A[i+1] * A[i+2] * ... * A[n-1]。</li>
</ol>
</blockquote>
</li>
</ul>
<p><img src="@source/images/构建乘积数组.png" alt="foo"></p>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">constructArray</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 第一次遍历，计算左侧乘积</span>
  <span class="token keyword">let</span> leftProduct <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">B</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*=</span> leftProduct<span class="token punctuation">;</span>
    leftProduct <span class="token operator">*=</span> <span class="token constant">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 第二次遍历，计算右侧乘积</span>
  <span class="token keyword">let</span> rightProduct <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">B</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*=</span> rightProduct<span class="token punctuation">;</span>
    rightProduct <span class="token operator">*=</span> <span class="token constant">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token constant">B</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">constructArray</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="零矩阵" tabindex="-1"><a class="header-anchor" href="#零矩阵" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/zero-matrix-lcci/solution/ling-ju-zhen-by-leetcode-solution-7ogg/" target="_blank" rel="noopener noreferrer">零矩阵<ExternalLinkIcon/></a></h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。</p>
<ul>
<li>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
输出：
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
输出：
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<ul>
<li>
<p>解法一：<strong>记录出现行列</strong></p>
<ul>
<li>
<blockquote>
<ul>
<li>遍历矩阵，使用两个 set 集合记录数据出现零的行和列；</li>
<li>分别遍历零行和零列 set，给矩阵赋值为 0;</li>
<li>时间复杂度： O(m*n)，空间复杂度 O(n+m);</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify matrix in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">setZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> row <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> col <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> zeroRow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 零行集合</span>
    <span class="token keyword">let</span> zeroCol <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 零列集合</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 遍历数组，获取零的行列集合</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>col<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                zeroRow<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                zeroCol<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 遍历零行集合，矩阵行赋值为 0</span>
    Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>zeroRow<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">rows</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>col<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>rows<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 	<span class="token comment">// 遍历零列集合，矩阵列赋值为 0</span>
    Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>zeroCol<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cols</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>cols<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="旋转矩阵" tabindex="-1"><a class="header-anchor" href="#旋转矩阵" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/array-and-string/clpgd/" target="_blank" rel="noopener noreferrer">旋转矩阵<ExternalLinkIcon/></a></h4>
<h4 id="对角线遍历" tabindex="-1"><a class="header-anchor" href="#对角线遍历" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/array-and-string/cuxq3/" target="_blank" rel="noopener noreferrer">对角线遍历<ExternalLinkIcon/></a></h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>给你一个大小为 <code v-pre>m x n</code> 的矩阵 <code v-pre>mat</code> ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。</p>
<ul>
<li>
<p>示例：</p>
<p><img src="@source/images/矩阵-对角矩阵.png" alt="image-20231028120648873"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：mat <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：mat <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<ul>
<li>
<p>解法一：<strong>对角线坐标规律</strong></p>
<blockquote>
<ul>
<li>根据题目要求，矩阵按照对角线进行遍历。</li>
<li>设矩阵的行数为 m, 矩阵的列数为 n, 我们仔细观察对角线遍历的规律可以得到如下信息:
<ul>
<li>一共有 <code v-pre>m+n−1</code> 条对角线 （注意观察对象线必定经过第一个和最后一列每一个元素的对角线，第一行最后一个元素和最后一列第一个元素重合），相邻的对角线的遍历方向不同，当前遍历方向为从左下到右上，则紧挨着的下一条对角线遍历方向为从右上到左下；</li>
<li>设对角线从上到下的编号为 i,  <code v-pre>i∈[0,m+n−2]</code>：
<ul>
<li>当 i 为偶数时，则第 i 条对角线的走向是从下往上遍历；</li>
<li>当 i 为奇数时，则第 i 条对角线的走向是从上往下遍历；</li>
</ul>
</li>
<li>当第 i 条对角线从下往上遍历时，每次行索引减 1，列索引加  1，直到矩阵的边缘为止：
<ul>
<li>当  i&lt;m 时，则此时对角线遍历的起点位置为 <code v-pre>(i,0)</code>；</li>
<li>当 i≥m 时，则此时对角线遍历的起点位置为 <code v-pre>(m−1,i−m+1)</code>；</li>
</ul>
</li>
<li>当第 i 条对角线从上往下遍历时，每次行索引加 1，列索引减 1，直到矩阵的边缘为止：
<ul>
<li>当 i&lt;n 时，则此时对角线遍历的起点位置为 <code v-pre>(0,i)</code>；</li>
<li>当  i≥n 时，则此时对角线遍历的起点位置为 <code v-pre>(i−n+1,n−1)</code>；</li>
</ul>
</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findDiagonalOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">mat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> m <span class="token operator">=</span> mat<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> x <span class="token operator">=</span> i <span class="token operator">&lt;</span> n <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> i <span class="token operator">-</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> y <span class="token operator">=</span> i <span class="token operator">&lt;</span> n <span class="token operator">?</span> i <span class="token operator">:</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> y <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">=</span> mat<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
                pos<span class="token operator">++</span><span class="token punctuation">;</span>
                x<span class="token operator">++</span><span class="token punctuation">;</span>
                y<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> x <span class="token operator">=</span> i <span class="token operator">&lt;</span> m <span class="token operator">?</span> i <span class="token operator">:</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> y <span class="token operator">=</span> i <span class="token operator">&lt;</span> m <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> i <span class="token operator">-</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> y <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">=</span> mat<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
                pos<span class="token operator">++</span><span class="token punctuation">;</span>
                x<span class="token operator">--</span><span class="token punctuation">;</span>
                y<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="前缀和" tabindex="-1"><a class="header-anchor" href="#前缀和" aria-hidden="true">#</a> 前缀和</h3>
<h4 id="寻找数组的中心索引" tabindex="-1"><a class="header-anchor" href="#寻找数组的中心索引" aria-hidden="true">#</a> 寻找数组的中心索引</h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>给你一个整数数组 nums ，请计算数组的 中心下标 。</p>
</li>
<li>
<p>数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。</p>
</li>
<li>
<p>如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。</p>
</li>
<li>
<p>如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。</p>
<ul>
<li>
<p>示例 1：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
输出：<span class="token number">3</span>
解释：
中心下标是 <span class="token number">3</span> 。
左侧数之和 sum <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">7</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">11</span> ，
右侧数之和 sum <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">6</span> <span class="token operator">=</span> <span class="token number">11</span> ，二者相等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例 2：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
输出：<span class="token operator">-</span><span class="token number">1</span>
解释：
数组中不存在满足此条件的中心下标。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例 3：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token number">0</span>
解释：
中心下标是 <span class="token number">0</span> 。
左侧数之和 sum <span class="token operator">=</span> <span class="token number">0</span> ，（下标 <span class="token number">0</span> 左侧不存在元素），
右侧数之和 sum <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>提示：</p>
<blockquote>
<p>1 &lt;= nums.length &lt;= 104
-1000 &lt;= nums[i] &lt;= 1000</p>
</blockquote>
</li>
</ul>
</blockquote>
</li>
<li>
<p>解法一：<strong>前缀和</strong></p>
<blockquote>
<ul>
<li>记数组的全部元素之和为 total，当遍历到第 i 个元素时，设其左侧元素之和为 sum，则其右侧元素之和为 <code v-pre>total−nums[i]−sum</code>；</li>
<li>左右侧元素相等即为 <code v-pre> sum=total−nums[i]−sum</code> 即  <code v-pre>2* sum + sums[i] = total</code>。</li>
<li>当中心索引左侧或右侧没有元素时，即为零个项相加，这在数学上称作「空和」（empty sum）。在程序设计中我们约定「空和是零」。</li>
<li>时间复杂度：O(n)，其中 n 为数组的长度。</li>
<li>空间复杂度：O(1)。</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">pivotIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 累加求和</span>
    <span class="token keyword">const</span> total <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历查找前缀和</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> sum <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法二：<strong>暴力求解</strong></p>
<blockquote>
<ul>
<li>在数组前后各加上一个 0，用于求解空和；</li>
<li>循环遍历数组，求前 i 个数组和 leftTotal ；</li>
<li>循环遍历 i 后面的数组，求 [i, nums.length] 之和 rightTotal；</li>
<li>判断 leftTotal  === rightTotal:
<ul>
<li>相等，找到 中位数，返回 i-1;</li>
</ul>
</li>
<li>复杂度：时间复杂度 O( n^2)，空间复杂度 O(n);</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pivotIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> leftTotal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> rightTotal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    nums<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 数组前后添加 0，用于计算空和</span>
    nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        leftTotal <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rightTotal <span class="token operator">+=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>leftTotal <span class="token operator">===</span> rightTotal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            rightTotal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h4 id="合并区间" tabindex="-1"><a class="header-anchor" href="#合并区间" aria-hidden="true">#</a> 合并区间</h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。</p>
</li>
<li>
<p>示例1：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
解释：区间 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> 和 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span> 重叠<span class="token punctuation">,</span> 将它们合并为 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例2:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
解释：区间 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span> 和 <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span> 可被视为重叠区间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>提示：</p>
<blockquote>
<p>1 &lt;= intervals.length &lt;= 104
intervals[i].length == 2
0 &lt;= starti &lt;= endi &lt;= 104</p>
</blockquote>
</li>
</ul>
</blockquote>
</li>
<li>
<p>解法：<strong>排序后合并</strong></p>
<blockquote>
<ul>
<li>
<p>数组 merged 存储最终的答案。</p>
</li>
<li>
<p>首先，我们将列表中的区间按照左端点升序排序。</p>
</li>
<li>
<p>然后我们将第一个区间加入 merged 数组中，并按顺序依次考虑之后的每个区间：</p>
<ul>
<li>
<p>如果当前区间的左端点在数组 merged 中最后一个区间的右端点之后，那么它们不会重合，我们可以直接将这个区间加入数组 merged 的末尾；</p>
</li>
<li>
<p>否则，它们重合，我们需要用当前区间的右端点更新数组 merged 中最后一个区间的右端点，将其置为二者的较大值。</p>
<p><img src="@source/images/数组-合并区间.png" alt="image-20231027190533382"></p>
</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>intervals<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> intervals<span class="token punctuation">;</span>
    <span class="token keyword">let</span> merged <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">//按照左节点排序</span>
    intervals<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=></span> prev<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> next<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>intervals<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> mergedTop <span class="token operator">=</span> merged<span class="token punctuation">.</span>length <span class="token operator">==</span><span class="token number">0</span><span class="token operator">?</span> <span class="token keyword">null</span><span class="token operator">:</span>  merged<span class="token punctuation">[</span>merged<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>merged<span class="token punctuation">.</span>length <span class="token operator">==</span><span class="token number">0</span> <span class="token operator">||</span> mergedTop<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            merged<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            merged<span class="token punctuation">[</span>merged<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span>mergedTop<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> merged<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</div></template>



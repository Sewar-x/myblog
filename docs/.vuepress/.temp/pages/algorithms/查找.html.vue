<template><div><h1 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h1>
<p><img src="@source/images/算法-查找.png" alt="image-20231022173124646"></p>
<h2 id="折半查找" tabindex="-1"><a class="header-anchor" href="#折半查找" aria-hidden="true">#</a> 折半查找</h2>
<ul>
<li>
<p>适用范围： 有序表</p>
</li>
<li>
<p>思想：</p>
<ul>
<li>在有序表中，首先选取有序表的中间值 mid</li>
<li>比较中间值 mid 和 目标值 target 大小
<ul>
<li>mid &lt; target: 递归查找左子表</li>
<li>mid &gt; target:  递归查找右子表</li>
</ul>
</li>
</ul>
</li>
<li>
<p>示例</p>
<ul>
<li>对静态查找表<code v-pre>{5,13,19,21,37,56,64,75,80,88,92}</code>采用折半查找算法查找关键字为 21 的过程为：</li>
<li><img src="@source/images/2-1G016102104D7.png" alt="img">
<a href="http://data.biancheng.net/view/200.html" target="_blank" rel="noopener noreferrer">图<ExternalLinkIcon/></a> 1 折半查找的过程（a）</li>
<li>如上图 1 所示，指针 low 和 high 分别指向查找表的第一个关键字和最后一个关键字，指针 mid 指向处于 low 和 high 指针中间位置的关键字。在查找的过程中每次都同 mid 指向的关键字进行比较，由于整个表中的数据是有序的，因此在比较之后就可以知道要查找的关键字的大致位置。</li>
<li>例如在查找关键字 21 时，首先同 56 作比较，由于<code v-pre>21 &lt; 56</code>，而且这个查找表是按照升序进行排序的，所以可以判定如果静态查找表中有 21 这个关键字，就一定存在于 low 和 mid 指向的区域中间。</li>
<li>因此，再次遍历时需要更新 high 指针和 mid 指针的位置，令 high 指针移动到 mid 指针的左侧一个位置上，同时令 mid 重新指向 low 指针和 high 指针的中间位置。如图 2 所示：</li>
<li><img src="@source/images/2-1G016102250N2.png" alt="img">
图 2 折半查找的过程（b）</li>
<li>同样，用 21 同 mid 指针指向的 19 作比较，<code v-pre>19 &lt; 21</code>，所以可以判定 21 如果存在，肯定处于 mid 和 high 指向的区域中。所以令 low 指向 mid 右侧一个位置上，同时更新 mid 的位置。</li>
<li><img src="@source/images/2-1G01610231cS.png" alt="img">
<ul>
<li>图 3 折半查找的过程（3）</li>
</ul>
</li>
<li>当第三次做判断时，发现 mid 就是关键字 21 ，查找结束。</li>
</ul>
</li>
<li>
<p>注意：在做查找的过程中，如果 low 指针和 high 指针的中间位置在计算时位于两个关键字中间，即求得 mid 的位置不是整数，需要统一做取整操作。</p>
</li>
<li>
<p>实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span>target<span class="token punctuation">,</span>left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">let</span>  mid  
	<span class="token keyword">let</span>  left <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">let</span>  right <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>left  <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> array<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span> 
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        	left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span> 
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="二叉排序树-二叉查找树" tabindex="-1"><a class="header-anchor" href="#二叉排序树-二叉查找树" aria-hidden="true">#</a> 二叉排序树（二叉查找树）</h2>
<h2 id="平衡二叉树-avl树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树-avl树" aria-hidden="true">#</a> 平衡二叉树（AVL树）</h2>
<h2 id="哈希查找" tabindex="-1"><a class="header-anchor" href="#哈希查找" aria-hidden="true">#</a> 哈希查找</h2>
<h2 id="javascript-中查找方法" tabindex="-1"><a class="header-anchor" href="#javascript-中查找方法" aria-hidden="true">#</a> JavaScript 中查找方法</h2>
<h3 id="数组中查找方法" tabindex="-1"><a class="header-anchor" href="#数组中查找方法" aria-hidden="true">#</a> 数组中查找方法</h3>
<h6 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank" rel="noopener noreferrer">find()<ExternalLinkIcon/></a></h6>
<ul>
<li>
<p>实现</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">find</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
        	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h6 id="findindex" tabindex="-1"><a class="header-anchor" href="#findindex" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank" rel="noopener noreferrer">findIndex()<ExternalLinkIcon/></a></h6>
<ul>
<li>
<p>实现</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">find</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
        	<span class="token keyword">return</span> i
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h6 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" target="_blank" rel="noopener noreferrer">indexOf()<ExternalLinkIcon/></a></h6>
<ul>
<li>
<p>实现</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">indexOf</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span>start</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>value<span class="token punctuation">)</span>								<span class="token comment">// 不允许null调用或则查找值为空</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>length <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length
	<span class="token keyword">if</span><span class="token punctuation">(</span>start <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> start <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>				<span class="token comment">// 处理第二个参数</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>start <span class="token operator">></span> length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
		i <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>length<span class="token operator">+</span>start<span class="token punctuation">)</span><span class="token operator">:</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>										<span class="token comment">//	从第二个参数位置起从前往后查找</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">return</span> i<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   	<span class="token punctuation">}</span>
   	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意</p>
<ul>
<li><code v-pre>indexOf</code> 使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators" target="_blank" rel="noopener noreferrer">strict equality<ExternalLinkIcon/></a> (无论是 ===, 还是 triple-equals操作符都基于同样的方法)进行判断 <code v-pre>searchElement与</code>数组中包含的元素之间的关系</li>
<li>第二个参数 start (开始查找的位置) 规则:
<ul>
<li>如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。</li>
<li>如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。</li>
<li>注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。</li>
<li>如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h6 id="lastindexof" tabindex="-1"><a class="header-anchor" href="#lastindexof" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" target="_blank" rel="noopener noreferrer">lastIndexOf()<ExternalLinkIcon/></a></h6>
<ul>
<li>实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">lastIndexOf</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span>start</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>value<span class="token punctuation">)</span>	
    		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    	<span class="token keyword">let</span> i<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span>
    	<span class="token keyword">if</span><span class="token punctuation">(</span>start <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> start <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    		<span class="token keyword">if</span><span class="token punctuation">(</span>start <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    			<span class="token keyword">if</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">></span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    				<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    			<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    				i <span class="token operator">=</span> i<span class="token operator">+</span>start
    			<span class="token punctuation">}</span>
    		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    			i <span class="token operator">=</span> i<span class="token operator">-</span>start
    		<span class="token punctuation">}</span>
    	<span class="token punctuation">}</span>
    	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>										<span class="token comment">//	从第二个参数位置起从后往前查找</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">return</span> i<span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
       	<span class="token punctuation">}</span>
       	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank" rel="noopener noreferrer">includes()<ExternalLinkIcon/></a></h6>
</div></template>



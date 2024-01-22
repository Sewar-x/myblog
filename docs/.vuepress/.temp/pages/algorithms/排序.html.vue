<template><div><h1 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h1>
<h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2>
<p><img src="@source/images/算法-排序.png" alt="image-20231022173606579"></p>
<ul>
<li>
<p>按照存储类型分类：</p>
<ul>
<li>内排序</li>
<li>外排序</li>
</ul>
</li>
<li>
<p>按照是否比较分类</p>
<ul>
<li>比较类排序：通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此也称为非线性时间比较类排序。</li>
<li>非比较类排序：不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也称为线性时间非比较类排序。</li>
</ul>
</li>
<li>
<p>内排序分类</p>
<ul>
<li>
<p>插入排序</p>
</li>
<li>
<p>快速排序</p>
</li>
<li>
<p>选择排序</p>
</li>
<li>
<p>归并排序</p>
</li>
<li>
<p>基排序</p>
</li>
</ul>
</li>
</ul>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<ul>
<li><strong>稳定</strong>：如果a原本在b前面，而a=b，排序之后a仍然在b的前面。</li>
<li><strong>不稳定</strong>：如果a原本在b的前面，而a=b，排序之后 a 可能会出现在 b 的后面。</li>
<li><strong>时间复杂度</strong>：对排序数据的总的操作次数。反映当n变化时，操作次数呈现什么规律。</li>
<li>**空间复杂度：**是指算法在计算机</li>
</ul>
<p>内执行时所需存储空间的度量，它也是数据规模n的函数</p>
<h3 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h3>
<p><img src="@source/images/插入排序.png" alt=""></p>
<h4 id="直接插入排序" tabindex="-1"><a class="header-anchor" href="#直接插入排序" aria-hidden="true">#</a> 直接插入排序</h4>
<p>思想：将左侧序列看成一个有序序列，每次将一个数字插入该有序序列，插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位</p>
<p><img src="@source/images/插入排序.gif" alt=""></p>
<p>实现：从小到大排序插入排序</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">InsertSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>leng<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 			<span class="token comment">//从第二位开始排序  </span>
 		<span class="token keyword">let</span> target <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">//选择待排序目标值</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>leng<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 	<span class="token comment">//往前（有序列表）中查找目标值的位置</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 		<span class="token comment">//如果大于目标，和目标值交换位置，目标值往前移</span>
				<span class="token punctuation">[</span> array<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arrayp<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token punctuation">]</span>  
				target <span class="token operator">=</span> j  					<span class="token comment">//记录新的目标值的位置</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>  							<span class="token comment">//否则，找到目标值插入的位置</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> array
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>时间复杂度 O(n2)</li>
<li>空间复杂度 O(1)</li>
</ul>
<p>稳定性：稳定</p>
<h4 id="折半插入排序" tabindex="-1"><a class="header-anchor" href="#折半插入排序" aria-hidden="true">#</a> 折半插入排序</h4>
<p>思想：由于插入排序基本操作是在一张有序表中进行查找插入目标值的位置，则该“查找”过程可以使用折半查找实现</p>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">BianryInsertionSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>			<span class="token comment">//从小到大折半插入排序</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>			<span class="token comment">//从第二位往前开始往前查找插入位置</span>
		<span class="token keyword">let</span> target<span class="token operator">=</span>i<span class="token punctuation">,</span> low<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> hight<span class="token operator">=</span>i<span class="token operator">-</span><span class="token number">1</span>			<span class="token comment">//折半查找的头尾为有序表的头尾</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>low<span class="token operator">&lt;=</span>hight<span class="token punctuation">)</span> <span class="token punctuation">{</span>						<span class="token comment">//折半查找插入位置</span>
			<span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> hight<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				hight <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
				low  <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>										<span class="token comment">//查找到插入位置为 hight+1 或者 low</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span>  array<span class="token punctuation">[</span>target<span class="token punctuation">]</span>				<span class="token comment">//记录目标值</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">>=</span>hight<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> 		<span class="token comment">//将 hight+1 之后元素后移一位 </span>
			array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
		array<span class="token punctuation">[</span>hight<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp					<span class="token comment">// 将目标元素插入 hight+1 位置</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> array
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>时间复杂度O(n2) ： 折半查找仅仅减少关键字的比较次数，而记录移动次不变</li>
<li>空间复杂度 O(1)</li>
</ul>
<p>稳定性：稳定</p>
<h4 id="_2-路插入排序" tabindex="-1"><a class="header-anchor" href="#_2-路插入排序" aria-hidden="true">#</a> 2-路插入排序</h4>
<p>思想</p>
<ul>
<li>
<p>2-路插入排序算法是在折半插入排序的基础上对其进行改进，减少其在排序过程中移动记录的次数从而提高效率。</p>
</li>
<li>
<p>具体实现思路为：另外设置一个同存储记录的数组大小相同的数组 d，将数组d 看作头尾相接的环状结构；将无序表中第一个记录添加进 d[0] 的位置上，然后从无序表中第二个记录开始，同 d[0] 作比较：如果该值比 d[0] 大，则添加到其右侧；反之添加到其左侧。</p>
</li>
</ul>
<p>示例</p>
<ul>
<li>使用 2-路插入排序算法对无序表<code v-pre>{3,1,7,5,2,4,9,6}</code>排序的过程如下：
<ul>
<li>
<p>将记录 3 添加到数组 d 中：<img src="@source/images/2-1G031103H0442.png" alt="img"></p>
</li>
<li>
<p>然后将 1 插入到数组 d 中，如下所示：<img src="@source/images/2-1G031103J55K.png" alt="img"></p>
</li>
<li>
<p>将记录 7 插入到数组 d 中，如下图所示：<img src="@source/images/2-1G031103S5252.png" alt="img"></p>
</li>
<li>
<p>将记录 5 插入到数组 d 中，由于其比 7小，但是比 3 大，所以需要移动 7 的位置，然后将 5 插入，如下图所示：<img src="@source/images/2-1G031103Z0Q7.png" alt="img"></p>
</li>
<li>
<p>将记录 2 插入到数组 d 中，由于比 1大，比 3 小，所以需要移动 3、7、5 的位置，然后将 2 插入，如下图所示：<img src="@source/images/2-1G03110391VW.png" alt="img"></p>
</li>
<li>
<p>将记录 4 插入到数组 d 中，需要移动 5 和 7 的位置，如下图所示：<img src="@source/images/2-1G031103942559.png" alt="img"></p>
</li>
<li>
<p>将记录 9 插入到数组 d 中，如下图所示：<img src="@source/images/2-1G031104001P7.png" alt="img"></p>
</li>
<li>
<p>将记录 6 插入到数组 d 中，如下图所示：<img src="@source/images/2-1G031104022292.png" alt="img"></p>
</li>
<li>
<p>最终存储在原数组时，从 d[7] 开始依次存储。</p>
</li>
</ul>
</li>
</ul>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token number">2</span><span class="token operator">-</span><span class="token function">InserSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token keyword">let</span> temp<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span> 											<span class="token comment">//创建环形数组</span>
	<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">let</span> min<span class="token operator">=</span>max<span class="token operator">=</span><span class="token number">0</span>											<span class="token comment">//记录数组中最大和最小值</span>
	temp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>										<span class="token comment">//将最大和最小值放入环形数组</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>						<span class="token comment">//循环将元素插入合适位置</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> temp<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>							<span class="token comment">//待插入元素比最小元素小</span>
			min  <span class="token operator">=</span> <span class="token punctuation">(</span>min <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n						<span class="token comment">//记录最小元素位置为当前最小元素位置后一位</span>
			temp<span class="token punctuation">[</span>min<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>							
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> temp<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>					<span class="token comment">//待插入元素比最大元素大</span>
			max <span class="token operator">=</span> <span class="token punctuation">(</span>max <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n							<span class="token comment">//记录最大元素位置为当前最大元素前一位</span>
			temp<span class="token punctuation">[</span>max<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>											<span class="token comment">//待插入元素位于最大和最小元素之间</span>
			j <span class="token operator">=</span> <span class="token punctuation">(</span>max <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n							<span class="token comment">//记录最大元素前一个位置</span>
			<span class="token keyword">while</span><span class="token punctuation">(</span>temp<span class="token punctuation">[</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>		<span class="token comment">//从最大元素往前查找待插入元素位置</span>
				temp<span class="token punctuation">[</span> <span class="token punctuation">(</span>k <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span>
				j <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n
			<span class="token punctuation">}</span>												<span class="token comment">//找到待插入元素位置为 (k-1+n)%n</span>
			temp<span class="token punctuation">[</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>					<span class="token comment">//插入元素</span>
			max <span class="token operator">=</span> <span class="token punctuation">(</span>max <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n							<span class="token comment">//最大元素位置前移一位</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> temp
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>
<p>时间复杂度 O(n2)：2-路插入排序相比于折半插入排序，只是减少了移动记录的次数，没有根本上避免</p>
</li>
<li>
<p>空间复杂度 O(n)</p>
</li>
</ul>
<p>稳定性：</p>
<h4 id="表插入排序" tabindex="-1"><a class="header-anchor" href="#表插入排序" aria-hidden="true">#</a> <a href="http://data.biancheng.net/view/68.html" target="_blank" rel="noopener noreferrer">表插入排序<ExternalLinkIcon/></a></h4>
<h4 id="希尔排序" tabindex="-1"><a class="header-anchor" href="#希尔排序" aria-hidden="true">#</a> 希尔排序</h4>
<ul>
<li>希尔排序（缩小增量排序）属于插入排序</li>
</ul>
<p>思想</p>
<ul>
<li>先将整体待排序记录分割成若干个子序列分别进行直接插入排序</li>
<li>选择一个增量序列 t1,t2,t3....tk,其中t1&gt;t2&gt;...，tk=1；</li>
<li>按增量序列个数k，对序列进行k 趟排序；</li>
<li>每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序</li>
<li>仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度\</li>
</ul>
<p>示例</p>
<ul>
<li>示例1：</li>
</ul>
<p><img src="@source/images/希尔排序.jpg" alt=""></p>
<ul>
<li>
<p>示例2：</p>
<p><img src="@source/images/希尔排序.gif" alt=""></p>
</li>
</ul>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//一趟希尔排序</span>
<span class="token keyword">function</span> <span class="token function">ShellInsert</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span>gap</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>								<span class="token comment">//数组分为 gap+1 ... array.length 组</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>gap<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>						<span class="token comment">//从增量后一位开始作为插入值</span>
		<span class="token keyword">let</span> target <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>								
		<span class="token keyword">for</span><span class="token punctuation">(</span>j<span class="token operator">=</span>i<span class="token operator">-</span>gap<span class="token punctuation">;</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">></span>array<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> j<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">-=</span>gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">//按组插入排序</span>
			array<span class="token punctuation">[</span>j<span class="token operator">+</span>gap<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span>								<span class="token comment">//记录后移，查找插入位置</span>
		<span class="token punctuation">}</span>
		array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> target 										<span class="token comment">//目标插入相应位置</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//按照增量 gap 进行排序</span>
<span class="token keyword">function</span> <span class="token function">ShellSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> gap<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> gap<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">;</span> gap<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>gap<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//gap 趟希尔排序</span>
		<span class="token function">ShellInsert</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span>gap<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> array
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>时间复杂度 O(nlogn)</li>
<li>空间复杂度</li>
</ul>
<p>稳定性：</p>
<h3 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h3>
<p><img src="@source/images/快速排序.png" alt=""></p>
<h4 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h4>
<p>思想</p>
<ul>
<li>一趟冒泡排序：先将第一个记录和第二个记录比较,若为逆序,则交换;继续比较第二和第三个关键字,依次类推,直至到第n-1个记录;
结果是将最大/最小的记录冒泡到最后一位</li>
<li>n个记录一共执行 n-1 趟冒泡排序</li>
</ul>
<p>示例</p>
<p><img src="@source/images/冒泡排序.gif" alt=""></p>
<p>实现</p>
<ul>
<li>基本实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">BubbleSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>array<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>  i<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>							<span class="token comment">// 进行 n-1 趟冒泡排序</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>									<span class="token comment">//	一趟冒泡排序</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>								<span class="token comment">//	逆序，转换位置</span>
				<span class="token punctuation">[</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> array
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">BubbleSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> complete<span class="token operator">=</span><span class="token boolean">true</span>												<span class="token comment">//假设完成一趟排序</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>		<span class="token comment">//发生冒泡，表示该趟未排序</span>
				complete<span class="token operator">=</span><span class="token boolean">false</span>											
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>complete<span class="token punctuation">)</span> 												<span class="token comment">//未发生过冒泡，表示该趟有序</span>
				<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> array
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>时间复杂度 O(n2)</li>
<li>空间复杂度O(1)</li>
</ul>
<p>稳定性</p>
<ul>
<li>稳定</li>
</ul>
<h4 id="快速排序-1" tabindex="-1"><a class="header-anchor" href="#快速排序-1" aria-hidden="true">#</a> 快速排序</h4>
<p>思想</p>
<ul>
<li>通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列</li>
<li>步骤：
<ul>
<li>选择一个基准元素<code v-pre>target</code>（一般选择第一个数）</li>
<li>将比<code v-pre>target</code>小的元素移动到数组左边，比<code v-pre>target</code>大的元素移动到数组右边</li>
<li>分别对<code v-pre>target</code>左侧和右侧的元素进行快速排序</li>
</ul>
</li>
<li>快速排序也利用了分治的思想（将问题分解成一些小问题递归求解）</li>
</ul>
<p>示例</p>
<ul>
<li>
<p>下面是对序列<code v-pre>6、1、2、7、9、3、4、5、10、8</code>排序的过程：</p>
<p><img src="@source/images/快速排序.jpg" alt=""></p>
<p><img src="@source/images/快速排序2.gif" alt=""></p>
</li>
</ul>
<p>实现</p>
<ul>
<li>递归实现1：
<ul>
<li>单独开辟两个存储空间<code v-pre>left</code>和<code v-pre>right</code>来存储每次递归比<code v-pre>target</code>小和大的序列</li>
<li>每次递归直接返回<code v-pre>left、target、right</code>拼接后的数组</li>
<li>浪费大量存储空间，写法简单</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>							<span class="token comment">//	个数小于2时递归结束</span>
        <span class="token keyword">return</span> array<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> target <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>							<span class="token comment">//	以每次分割前第一个数组作为分割点</span>
      <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>			<span class="token comment">// 遍历数组分割数组</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>							<span class="token comment">// 小于分割点的数组</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>							<span class="token comment">// 大于分割点的数组</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// 递归分割左右两边数组</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>递归实现2：</p>
<ul>
<li>附设两个指针 <code v-pre>l</code> 和 <code v-pre>r</code>，它们的初值分别为 数组第一个 和 最后一个值，设枢轴记录的关键字为 target</li>
<li>首先从 <code v-pre>l</code> 所指位置起向前搜索找到第一个关键字小于 target 的记录和 target 记录互相交换</li>
<li>然后从 <code v-pre>l</code> 所指位置起向后搜索，找到第一个关键字大于 target 的记录和 target 记录互相交换</li>
<li>重复这两步直至 <code v-pre>l</code> = <code v-pre>r</code>为止, 此时左侧的值全部小于<code v-pre>target</code>，右侧的值全部小于<code v-pre>target</code>，将<code v-pre>target</code>放到该位置</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>   <span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 					<span class="token comment">// 递归结束条件</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> target <span class="token operator">=</span> array<span class="token punctuation">[</span>start<span class="token punctuation">]</span>				
      <span class="token keyword">let</span> l <span class="token operator">=</span> start								<span class="token comment">// 起始 start 为 0</span>
      <span class="token keyword">let</span> r <span class="token operator">=</span> end								<span class="token comment">// 起始 end 为 0</span>
      
      <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>							<span class="token comment">// l往前搜索，r往后搜索；当 l=r 表明数组遍历完成</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">>=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 从右侧往左侧查找小于 target 的值</span>
          r<span class="token operator">--</span>						
        <span class="token punctuation">}</span>
        array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span>					 	<span class="token comment">// 将右侧小于 target 的值和 target 值交换</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">//从左侧往右侧查找大于 target 的值</span>
          l<span class="token operator">++</span>
        <span class="token punctuation">}</span>
         array<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>l<span class="token punctuation">]</span>					  <span class="token comment">// 将左侧大于 target 的值和 target 值交换</span>
      <span class="token punctuation">}</span>
      array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">=</span> target								<span class="token comment">// 当 l=r 时的位置为 target 的位置,完成一趟快排</span>
      <span class="token function">quickSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> start<span class="token punctuation">,</span> l <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>				<span class="token comment">// 快速排序左侧数据</span>
      <span class="token function">quickSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span>					<span class="token comment">// 快速排序右侧数据</span>
      <span class="token keyword">return</span> array
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>复杂度</p>
<ul>
<li>
<p>时间复杂度：平均<code v-pre>O(nlogn)</code>，最坏<code v-pre>O(n2)</code>，实际上大多数情况下小于<code v-pre>O(nlogn)</code></p>
</li>
<li>
<p>空间复杂度:<code v-pre>O(logn)</code>（递归调用消耗）</p>
</li>
</ul>
<p>稳定性</p>
<ul>
<li>不稳定</li>
</ul>
<h3 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h3>
<p><img src="@source/images/选择排序.png" alt=""></p>
<h4 id="简单选择排序" tabindex="-1"><a class="header-anchor" href="#简单选择排序" aria-hidden="true">#</a> 简单选择排序</h4>
<p>思想</p>
<ul>
<li>一趟选择：从数组中 n-i+1 ( n 为数组长度 )个记录中选择一个最小/最大的数与第 i 个数据交换位置</li>
<li>长度为 n 数组循环选择 n-1 趟</li>
</ul>
<p>示例</p>
<p><img src="@source/images/选择排序.gif" alt=""></p>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">SelectSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>								<span class="token comment">// 从小到大选择排序</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>					<span class="token comment">// n-1 趟循环选择</span>
		<span class="token keyword">let</span> min<span class="token operator">=</span>i											<span class="token comment">// 选择最小值下标</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>				<span class="token comment">// 遍历查找最小值下标</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				min <span class="token operator">=</span> j										<span class="token comment">//	记录最小值下标</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token punctuation">[</span> array<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token punctuation">[</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>min<span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token comment">// 交换最小值</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> array
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>时间复杂度 O(n2)</li>
<li>空间复杂度 O(1)</li>
</ul>
<p>稳定性</p>
<ul>
<li>不稳定</li>
</ul>
<h4 id="树形选择排序" tabindex="-1"><a class="header-anchor" href="#树形选择排序" aria-hidden="true">#</a> 树形选择排序</h4>
<p>思想</p>
<ul>
<li>树形选择排序（又称“锦标赛排序”），是一种按照锦标赛的思想进行选择排序的方法</li>
<li>即所有记录采取两两分组，筛选出较小（较大）的值；</li>
<li>然后从筛选出的较小（较大）值中再两两分组选出更小（更大）值，依次类推，直到最后选出一个最小（最大）值。</li>
<li>同样可以采用此方式筛选出次小（次大）值等</li>
<li>整个排序的过程，可以用一棵具有 n 个叶子结点的完全二叉树表示</li>
</ul>
<p>示例</p>
<ul>
<li>
<p>对无序表<code v-pre>{49，38，65，97，76，13，27，49}</code>采用树形选择的方式排序，过程如下：</p>
</li>
<li>
<p>首先将无序表中的记录采用两两分组，筛选出各组中的较小值（如图1 中的（a）过程）；然后将筛选出的较小值两两分组，筛选出更小的值，以此类推（如图 1 中的（b）（c）过程），最终整棵树的根结点中的关键字即为最小关键字：</p>
<p><img src="@source/images/2-1G10G11310U9.png" alt="img">
图 1 树形选择排序（一）</p>
</li>
<li>
<p>筛选出关键字 13 之后，继续重复此方式找到剩余记录中的最小值，此时由于关键字 13 已经筛选完成，需要将关键字 13 改为“最大值”，继续重复此过程，如图 2 所示：</p>
<p><img src="@source/images/2-1G10G11341338.png" alt="img">
图 2 树形选择排序（二）</p>
</li>
<li>
<p>通过不断地重复此过程，可依次筛选出从小到大的所有关键字</p>
</li>
</ul>
<p>复杂度</p>
<ul>
<li>时间复杂度 O(nlogn)</li>
<li>空间复杂度、</li>
</ul>
<h3 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h3>
<p>相关概念</p>
<ul>
<li>
<p>堆的含义：在含有 n 个元素的序列中，如果序列中的元素满足下面其中一种关系时，此序列可以称之为堆。</p>
<ul>
<li>ki ≤ k2i 且 ki ≤ k2i+1（在 n 个记录的范围内，第 i 个关键字的值小于第 2<em>i 个关键字，同时也小于第 2</em>i+1 个关键字）</li>
<li>ki ≥ k2i 且 ki ≥ k2i+1（在 n 个记录的范围内，第 i 个关键字的值大于第 2<em>i 个关键字，同时也大于第 2</em>i+1 个关键字）</li>
</ul>
</li>
<li>
<p>对于堆的定义也可以使用完全二叉树来解释，因为在完全二叉树中第 i 个结点的左孩子恰好是第 2i 个结点，右孩子恰好是 2i+1 个结点。如果该序列可以被称为堆，则使用该序列构建的完全二叉树中，每个根结点的值都必须不小于（或者不大于）左右孩子结点的值。</p>
</li>
<li>
<p>以无序表<code v-pre>{49，38，65，97，76，13，27，49}</code>来讲，其对应的堆用完全二叉树来表示为：</p>
<p><img src="@source/images/2-1G10G11P3256.png" alt="img">
图 3 无序表对应的堆</p>
</li>
</ul>
<blockquote>
<p>提示：堆用完全二叉树表示时，其表示方法不唯一，但是可以确定的是树的根结点要么是无序表中的最小值，要么是最大值。</p>
</blockquote>
<ul>
<li>堆排序: 通过将无序表转化为堆，可以直接找到表中最大值或者最小值，然后将其提取出来，令剩余的记录再重建一个堆，取出次大值或者次小值，如此反复执行就可以得到一个有序序列，此过程为堆排序。</li>
</ul>
<p>示例</p>
<ol>
<li>
<p>将无序序列转化为一个堆</p>
<ul>
<li>
<p>假设无序表<code v-pre>{49，38，65，97，76，13，27，49}</code>初步建立的完全二叉树，如下图所示：</p>
</li>
<li>
<p><img src="@source/images/2-1G10G12041N3.png" alt="img"></p>
</li>
<li>
<p>在对上图做筛选工作时，规律是从底层结点开始，一直筛选到根结点。</p>
</li>
<li>
<p>对于具有 n 个结点的完全二叉树，筛选工作开始的结点为第 ⌊n/2⌋个结点（此结点后序都是叶子结点，无需筛选）</p>
</li>
<li>
<p>所以，对于有 9 个结点的完全二叉树，筛选工作从第 4 个结点 97 开始，由于 97 &gt; 49 ,所以需要相互交换，交换后如下图所示：</p>
</li>
<li>
<p><img src="@source/images/2-1G10G1212b35.png" alt="img"></p>
</li>
<li>
<p>然后再筛选第 3 个结点 65 ，由于 65 比左右孩子结点都大，则选择一个最小的同 65 进行交换，交换后的结果为：</p>
</li>
<li>
<p><img src="@source/images/2-1G10G1214J09.png" alt="img"></p>
</li>
<li>
<p>然后筛选第 2 个结点，由于其符合要求，所以不用筛选；最后筛选根结点 49 ，同 13 进行交换，交换后的结果为：</p>
</li>
<li>
<p><img src="@source/images/2-1G10G12204617.png" alt="img"></p>
</li>
<li>
<p>交换后，发现破坏了其右子树堆的结构，所以还需要调整，最终调整后的结果为：</p>
</li>
<li>
<p><img src="@source/images/2-1G10G12221A8.png" alt="img"></p>
</li>
</ul>
</li>
<li>
<p>在输出堆顶元素之后（完全二叉树的树根结点），调整剩余元素构建一个新的堆</p>
<ul>
<li>图 3 所示为一个完全二叉树，若去除堆顶元素，即删除二叉树的树根结点，此时用二叉树中最后一个结点 97 代替,如图所示：</li>
<li><img src="@source/images/2-1G10G1192WU.png" alt="img"></li>
<li>此时由于结点 97 比左右孩子结点的值都大，破坏了堆的结构，所以需要进行调整：首先以 堆顶元素 97 同左右子树比较，同值最小的结点交换位置，即 27 和 97 交换位置：</li>
<li><img src="@source/images/2-1G10G1194A41.png" alt="img"></li>
<li>由于替代之后破坏了根结点右子树的堆结构，所以需要进行和上述一样的调整，即令 97 同 49 进行交换位置：</li>
<li><img src="@source/images/2-1G10G12003264.png" alt="img"></li>
<li>通过上述的调整，之前被破坏的堆结构又重新建立。从根结点到叶子结点的整个调整的过程，被称为“筛选“</li>
</ul>
</li>
<li>
<p>动态图演示(创建大顶堆，从小到大排序)</p>
<ul>
<li><img src="@source/images/堆排序.gif" alt=""></li>
</ul>
</li>
</ol>
<p>实现</p>
<ul>
<li>递归实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//从小到大堆排序</span>
<span class="token keyword">function</span> <span class="token function">heapSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">createMaxHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>									<span class="token comment">//	创建一个大顶堆</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>array<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>					<span class="token comment">//  遍历调整堆</span>
		<span class="token punctuation">[</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>  <span class="token operator">=</span> <span class="token punctuation">[</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">]</span>	<span class="token comment">// 	输出最大元素</span>
		<span class="token function">adjustHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>								<span class="token comment">//	调整剩余堆，第一个元素调整到对应位置</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> array
<span class="token punctuation">}</span>

<span class="token comment">//创建大顶堆</span>
<span class="token keyword">function</span> <span class="token function">createHeap</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span>								<span class="token comment">// 数组中间值作为初始堆顶元素					</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>start<span class="token punctuation">;</span> i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>							<span class="token comment">// 调整堆的过程就是创建大顶堆的过程</span>
		<span class="token function">adjustHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span>								<span class="token comment">// 调整第i个元素为大顶堆</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//将 target 元素进行下沉，孩子节点有比 target 元素大的就下沉</span>
<span class="token keyword">function</span> <span class="token function">adjustHeap</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> target<span class="token punctuation">,</span>len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> targer <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>								<span class="token comment">// target 左子节点 </span>
		rigth <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> target <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span>								<span class="token comment">// targer 右子节点	</span>
		max <span class="token operator">=</span> target										<span class="token comment">// 假设当前堆顶 target 为最大元素</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>			<span class="token comment">// 左子节比堆顶值大，设定左子节点为最大值</span>
		max <span class="token operator">=</span> left
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>right <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>			<span class="token comment">// 右子节点比堆顶值大，设定右子节点为最大值</span>
		max <span class="token operator">=</span> right
	<span class="token punctuation">}</span> 
	<span class="token keyword">if</span><span class="token punctuation">(</span>max <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>											<span class="token comment">//	最大值不是堆顶</span>
		<span class="token punctuation">[</span> array<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>max<span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token comment">// 交换堆顶和最大值</span>
		<span class="token function">adjustHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> max<span class="token punctuation">,</span>len<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>非递归实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//从小到大堆排序</span>
<span class="token keyword">function</span> <span class="token function">heapSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">createMaxHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>									<span class="token comment">//	创建一个大顶堆</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>array<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>					<span class="token comment">//  遍历调整堆</span>
		<span class="token punctuation">[</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">]</span>  <span class="token operator">=</span> <span class="token punctuation">[</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">]</span>	<span class="token comment">// 	输出最大元素</span>
		<span class="token function">adjustHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>								<span class="token comment">//	调整剩余堆，第一个元素调整到对应位置</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> array
<span class="token punctuation">}</span>

<span class="token comment">//创建大顶堆</span>
<span class="token keyword">function</span> <span class="token function">createHeap</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span>								<span class="token comment">// 数组中间值作为初始堆顶元素					</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>start<span class="token punctuation">;</span> i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>							<span class="token comment">// 调整堆的过程就是创建大顶堆的过程</span>
		<span class="token function">adjustHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span>					<span class="token comment">// 调整第i个元素为大顶堆</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将第target个元素进行下沉，孩子节点有比他大的就下沉</span>
<span class="token comment">// 已知 array[target ... len] 中记录的关键字除了 array[target] 之外均满足堆的定义，本函数调整 array[target]</span>
<span class="token comment">// 的关键字，使 array[target ... len]成为一个大顶堆</span>
<span class="token keyword">function</span> <span class="token function">adjustHeap</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> target<span class="token punctuation">,</span> len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//沿着key较大的孩子节点向下筛选</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    	 <span class="token comment">// 找到孩子节点中最大的</span>
          i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>						 <span class="token comment">// 当子节点大于目标节点，交换位置并将子节点作为新目标</span>
          <span class="token punctuation">[</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>array<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
          target <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>											<span class="token comment">//	否则推出本次查找</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>时间复杂度  O(nlogn)</li>
<li>空间复杂度  O(1)</li>
</ul>
<p>稳定性</p>
<ul>
<li>不稳定</li>
</ul>
<h3 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h3>
<p>思想</p>
<ul>
<li>归并是采用分治法（<code v-pre>Divide and Conquer</code>）的一个非常典型的应用。
（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案&quot;修补&quot;在一起，即分而治之)
<ul>
<li>将已有序的子序列合并，得到完全有序的序列</li>
<li>即先使每个子序列有序，再使子序列段间有序</li>
<li>若将两个有序表合并成一个有序表，称为二路归并</li>
</ul>
</li>
<li>步骤：
<ul>
<li>分割：
<ul>
<li>将数组从中点进行分割，分为左、右两个数组</li>
<li>递归分割左、右数组，直到数组长度小于<code v-pre>2</code></li>
</ul>
</li>
<li>合并
<ul>
<li>如果需要合并，那么左右两数组已经有序了</li>
<li>创建一个临时存储数组<code v-pre>temp</code>，比较两数组第一个元素，将较小的元素加入临时数组</li>
<li>若左右数组有一个为空，那么此时另一个数组一定大于<code v-pre>temp</code>中的所有元素，直接将其所有元素加入<code v-pre>temp</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<p>示例</p>
<ul>
<li>假设数组[8,4,5,7,1,3,6,2]</li>
</ul>
<p><img src="@source/images/归并排序.png" alt=""></p>
<ul>
<li>合并过程：
<ul>
<li>如上图中的最后一次合并，要将[4,5,7,8]和[1,2,3,6]两个已经有序的子序列，合并为最终序列[1,2,3,4,5,6,7,8]，来看下实现步骤</li>
<li><img src="@source/images/归并排序-合并.png" alt=""></li>
</ul>
</li>
</ul>
<p>实现</p>
<ul>
<li>
<p>实现1：</p>
<p>分割数组时直接将数组分割为两个数组，合并时直接合并数组。</p>
<p>优点：思路简单，写法简单</p>
<p>缺点：空间复杂度略高，需要复制多个数组</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mrgeSort</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> 							<span class="token comment">//	数组个数小于2不能再分割，返回数组</span>
		<span class="token keyword">return</span>	array 
	<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>			<span class="token comment">//	以数组中间数据作为分割点</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span>					<span class="token comment">//	分割点左侧数组</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid<span class="token punctuation">,</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span>		<span class="token comment">//	分割点右侧数组</span>
	<span class="token keyword">return</span> <span class="token function">mrge</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">//	递归分割数组后递归合并数组</span>
<span class="token punctuation">}</span>
<span class="token comment">//从小到大合并数据</span>
<span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span>right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>						
	<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>									<span class="token comment">//	设定空数组保存合并数组</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">.</span>length <span class="token punctuation">)</span> <span class="token punctuation">{</span>			<span class="token comment">//	左右两侧有数组都不为空表示未合并完成</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>						<span class="token comment">//	比较数组第一个数据大小</span>
			temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>				<span class="token comment">//	移出较小数据放入新数组</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>							<span class="token comment">//	未合并完成，剩余数据放入新数组</span>
		temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>							<span class="token comment">//	未合并完成，剩余数据放入新数组</span>
		temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> temp
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>实现2：</p>
<p>记录数组的索引，使用<code v-pre>left、right</code>两个索引来限定当前分割的数组。</p>
<p>优点：空间复杂度低，只需一个<code v-pre>temp</code>存储空间，不需要拷贝数组</p>
<p>缺点：写法复杂</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">mergeSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
        <span class="token function">mergeSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
        <span class="token function">merge</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> array<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> leftIndex <span class="token operator">=</span> left<span class="token punctuation">;</span>
      <span class="token keyword">let</span> rightIndex <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> tempIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> mid <span class="token operator">&amp;&amp;</span> rightIndex <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>leftIndex<span class="token operator">++</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>rightIndex<span class="token operator">++</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>leftIndex<span class="token operator">++</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>rightIndex<span class="token operator">++</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      tempIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>tempIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>
<p>时间复杂度：<code v-pre>O(nlogn)</code></p>
</li>
<li>
<p>空间复杂度:<code v-pre>O(n)</code></p>
</li>
</ul>
<p>稳定性</p>
<ul>
<li>稳定</li>
</ul>
<h3 id="桶排序" tabindex="-1"><a class="header-anchor" href="#桶排序" aria-hidden="true">#</a> 桶排序</h3>
<ul>
<li>桶排序是一种排序的思想，其实现包括计数排序和基数排序两种，冒泡排序、选择排序、插入排序、归并排序、快速排序和堆排序都是基于比较的排序，而桶排序提出了一种新的思路，即基于数据状态的排序。</li>
<li>&quot;桶&quot;是一种容器，这个容器可以用多种数据结构实现，包括数组、队列或者栈</li>
</ul>
<h4 id="计数排序" tabindex="-1"><a class="header-anchor" href="#计数排序" aria-hidden="true">#</a> 计数排序</h4>
<p>概念</p>
<ul>
<li>计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。</li>
<li>作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数</li>
</ul>
<p>思想</p>
<ul>
<li>找出待排序的数组中最大和最小的元素；</li>
<li>统计数组中每个值为i的元素出现的次数，存入数组C的第i项；</li>
<li>对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；</li>
<li>反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1</li>
</ul>
<p>示例</p>
<p><img src="@source/images/计数排序.gif" alt=""></p>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//从小到大计数排序</span>
<span class="token doc-comment comment">/**
* array 待排序数组
* maxValue 数组最大值
**/</span>
<span class="token keyword">function</span> <span class="token function">countingSort</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> maxValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> bucket <span class="token operator">=</span> <span class="token function">newArray</span><span class="token punctuation">(</span>maxValue <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 			<span class="token comment">// 创建计数数组，保存数组计数，数据大小作为数组下标记录</span>
        sortedIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>							<span class="token comment">// 待排序下标</span>
        arrLen <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
        bucketLen <span class="token operator">=</span> maxValue <span class="token operator">+</span> <span class="token number">1</span>					<span class="token comment">// 空数组长度</span>
 
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arrLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>				<span class="token comment">// 遍历数组，统计数组每个数据出现次数</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>bucket<span class="token punctuation">[</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>						<span class="token comment">// 未出现的数据出现次数为0</span>
            bucket<span class="token punctuation">[</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
        bucket<span class="token punctuation">[</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>						   <span class="token comment">//  统计数组每个数据出现次数	</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> bucketLen<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>			<span class="token comment">// 遍历计数数组</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>bucket<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            array<span class="token punctuation">[</span>sortedIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> j				<span class="token comment">//	将数组填充回原数组</span>
            bucket<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">--</span>								<span class="token comment">//	计数值减1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">return</span> array
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>当输入的元素是 n 个 0到 k 之间的整数时，时间复杂度是O(n+k)，空间复杂度也是O(n+k)，其排序速度快于任何比较排序算法。</li>
<li>当k不是很大并且序列比较集中时，计数排序是一个很有效的排序算法</li>
</ul>
<p>稳定性</p>
<ul>
<li>稳定</li>
</ul>
<h4 id="桶排序-1" tabindex="-1"><a class="header-anchor" href="#桶排序-1" aria-hidden="true">#</a> 桶排序</h4>
<p>概念</p>
<ul>
<li>
<p>桶排序是计数排序的升级版。</p>
</li>
<li>
<p>它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。</p>
</li>
<li>
<p>为了使桶排序更加高效，我们需要做到这两点：</p>
<ul>
<li>在额外空间充足的情况下，尽量增大桶的数量</li>
<li>使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中</li>
</ul>
</li>
<li>
<p>同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要</p>
</li>
<li>
<p>当输入的数据可以均匀的分配到每一个桶中时，桶排序最快</p>
</li>
<li>
<p>当输入的数据被分配到了同一个桶中时，桶排序最慢</p>
</li>
</ul>
<p>思想</p>
<ul>
<li>设置一个定量的数组当作空桶；</li>
<li>遍历输入数据，并且把数据一个一个放到对应的桶里去；</li>
<li>对每个不是空的桶进行排序；</li>
<li>从不是空的桶里把排好序的数据拼接起来。</li>
</ul>
<p>示例</p>
<ul>
<li>元素分布在桶中</li>
<li><img src="@source/images/桶排序.png" alt=""></li>
<li>然后，元素在每个桶中排序：</li>
<li><img src="@source/images/桶排序2.png" alt=""></li>
</ul>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bucketSort</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> bucketSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> i<span class="token punctuation">;</span>
    <span class="token keyword">var</span> minValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> minValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          minValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>                <span class="token comment">// 输入数据的最小值</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> maxValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>                <span class="token comment">// 输入数据的最大值</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//桶的初始化</span>
    <span class="token keyword">var</span> <span class="token constant">DEFAULT_BUCKET_SIZE</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>            <span class="token comment">// 设置桶的默认数量为5</span>
    bucketSize <span class="token operator">=</span> bucketSize <span class="token operator">||</span> <span class="token constant">DEFAULT_BUCKET_SIZE</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> bucketCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>maxValue <span class="token operator">-</span> minValue<span class="token punctuation">)</span> <span class="token operator">/</span> bucketSize<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>  
    <span class="token keyword">var</span> buckets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>bucketCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> buckets<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//利用映射函数将数据分配到各个桶中</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buckets<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minValue<span class="token punctuation">)</span> <span class="token operator">/</span> bucketSize<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> buckets<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">insertionSort</span><span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">// 对每个桶进行排序，这里使用了插入排序</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                      
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>时间复杂度：遍历数组求最大值最小值为O(n)，遍历数组放入&quot;桶&quot;中复杂度为O(n)，遍历桶取出每个值的复杂度为O(n)，最终的时间复杂度为O(3n)，也就是O(n)</li>
<li>空间复杂度：额外的空间取决于元素的取值范围，总的来说为O(n)</li>
</ul>
<p>稳定性</p>
<ul>
<li>桶排序是否稳定取决于&quot;桶&quot;用什么数据结构实现</li>
<li>如果是队列，那么可以保证相同的元素&quot;取出去&quot;后的相对位置与&quot;放进来&quot;之前是相同的，即排序是稳定的</li>
<li>而如果用栈来实现&quot;桶&quot;，则排序一定是不稳定的，因为桶排序可以做到稳定，所以桶排序是稳定的排序算法</li>
</ul>
<h4 id="基数排序" tabindex="-1"><a class="header-anchor" href="#基数排序" aria-hidden="true">#</a> 基数排序</h4>
<p>概念</p>
<ul>
<li>
<p>基数排序是一种多关键字排序</p>
</li>
<li>
<p>多关键字排序：</p>
<ul>
<li>一般情况下，假设有n个记录的序列：
<ul>
<li>{R1,R2, ... , Rn}</li>
<li>且每个记录Ri含有d个关键字,且 d 个关键字也有序,最大关键字称为主关键字,最小关键字称为次关键字</li>
</ul>
</li>
</ul>
</li>
<li>
<p>基数排序有两种方法：</p>
<ul>
<li>
<p>MSD 从高位关键字开始进行排序</p>
</li>
<li>
<p>LSD 从低位关键字开始进行排序</p>
<ul>
<li>LSD 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>示例</p>
<ul>
<li>假设一组数组中每个数据要求按照个位和十位两个关键字排序</li>
<li>LSD基数排序动画演示</li>
<li><img src="@source/images/radixSort.gif" alt=""></li>
</ul>
<p>实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//LSD Radix Sort</span>
<span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">radixSort</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> maxDigit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> mod <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> dev <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> maxDigit<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> dev <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">,</span> mod <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> bucket <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">%</span> mod<span class="token punctuation">)</span> <span class="token operator">/</span> dev<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>counter<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span><span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                counter<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            counter<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> counter<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>counter<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>value <span class="token operator">=</span> counter<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                      arr<span class="token punctuation">[</span>pos<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂度</p>
<ul>
<li>时间复杂度 O(d<em>2n) ：</em>
<ul>
<li>每一次关键字的桶分配都需要O(n)的时间复杂度，而且分配之后得到新的关键字序列又需要O(n)的时间复杂度。假如待排数据可以分为d个关键字，则基数排序的时间复杂度将是O(d*2n)</li>
</ul>
</li>
<li>空间复杂度 O(n+k)：
<ul>
<li>其中k为桶的数量。一般来说n&gt;&gt;k，因此额外空间需要大概n个左右</li>
</ul>
</li>
</ul>
<p>稳定性</p>
<ul>
<li>基数排序基于分别排序，分别收集，所以是稳定的</li>
</ul>
<h3 id="基数排序-vs-计数排序-vs-桶排序" tabindex="-1"><a class="header-anchor" href="#基数排序-vs-计数排序-vs-桶排序" aria-hidden="true">#</a> 基数排序 vs 计数排序 vs 桶排序</h3>
<ul>
<li>基数排序：根据键值的每位数字来分配桶；</li>
<li>计数排序：每个桶只存储单一键值；</li>
<li>桶排序：每个桶存储一定范围的数值；</li>
</ul>
<h4 id="排序比较" tabindex="-1"><a class="header-anchor" href="#排序比较" aria-hidden="true">#</a> 排序比较</h4>
<ul>
<li>复杂度和稳定性比较
<img src="@source/images/算法比较.png" alt=""></li>
</ul>
<h3 id="js-排序-api" tabindex="-1"><a class="header-anchor" href="#js-排序-api" aria-hidden="true">#</a> JS 排序 API</h3>
<h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h4>
<ul>
<li>原理分析
<ul>
<li>在v8引擎中，对sort方法提供了2种排序算法：插入排序及快排序</li>
</ul>
</li>
</ul>
<p>参考</p>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank" rel="noopener noreferrer">MDN<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/33626637" target="_blank" rel="noopener noreferrer">sort原理<ExternalLinkIcon/></a></p>
</li>
<li></li>
</ul>
</div></template>



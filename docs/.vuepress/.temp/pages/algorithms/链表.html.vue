<template><div><h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1>
<p><img src="@source/images/数据结构-链表.png" alt="image-20231022170513388"></p>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<ul>
<li>
<p>链表：</p>
<ul>
<li>链表又称单链表、链式存储结构，用于存储逻辑关系为“一对一”的数据。</li>
<li>用一组任意存储的单元来存储线性表的数据元素。</li>
<li>一个对象存储着本身的值和下一个元素的地址。</li>
</ul>
<p><img src="@source/images/链表结构.png" alt="img"></p>
</li>
<li>
<p>节点：</p>
<ul>
<li>在链表中，每个数据元素都配有一个指针；</li>
<li>数据域用来存储元素的值，指针域用来存放指针；</li>
</ul>
</li>
<li>
<p>头结点、头指针和首元结点：</p>
<ul>
<li>一个完整的链表应该由以下几部分构成
<ul>
<li><strong>头指针</strong>：一个和结点类型相同的指针，它的特点是：永远指向链表中的第一个结点。上文提到过，我们需要记录链表中第一个元素的存储位置，就是用头指针实现。</li>
<li><strong>结点</strong>：链表中的节点又细分为头结点、首元结点和其它结点：
<ul>
<li>头结点：某些场景中，为了方便解决问题，会故意在链表的开头放置一个空结点，这样的结点就称为头结点。也就是说，头结点是位于链表开头、数据域为空（不利用）的结点。</li>
<li>首元结点：指的是链表开头第一个存有数据的结点。</li>
<li>其他节点：链表中其他的节点。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>​					<img src="@source/images/头节点链表.png" alt="image-20231019135448663"></p>
<ul>
<li>特点：
<ul>
<li>都无法在常量时间内随机访问数据。</li>
<li>能够在 O(1) 时间内在给定结点之后或列表开头添加一个新结点。</li>
<li>能够在 O(1) 时间内删除第一个结点。但是删除给定结点(包括最后一个结点)时略有不同。</li>
<li>在单链表中，它无法获取给定结点的前一个结点，因此在删除给定结点之前我们必须花费 O(N) 时间来找出前一结点。</li>
<li>在双链表中，删除更容易，因为我们可以使用“prev”引用字段获取前一个结点。因此我们可以在 O(1) 时间内删除给定结点。</li>
<li><img src="@source/images/链表-时间复杂度.png" alt="image-20231025082123019"></li>
</ul>
</li>
</ul>
<hr>
<h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2>
<ol>
<li><strong>单向链表</strong> (Singly Linked List):
<ul>
<li>单向链表是最简单和最常见的链表类型。</li>
<li>每个节点包含一个数据元素和一个指向下一个节点的指针。</li>
<li>从头节点开始，通过每个节点的指针可以按顺序遍历整个链表。</li>
<li>链表的尾节点的指针指向 null，表示链表的结束。</li>
<li>单向链表<strong>只能从头到尾进行遍历，不能逆向访问</strong>。</li>
</ul>
</li>
<li><strong>双向链表</strong> (Doubly Linked List):
<ul>
<li>双向链表在单向链表的基础上扩展，每个节点除了包含数据元素和指向下一个节点的指针外，还包含一个指向前一个节点的指针。</li>
<li>双向链表<strong>可以从头到尾或从尾到头进行遍历</strong>，可以灵活地在链表中进行前后移动。</li>
<li>由于每个节点包含两个指针，相比单向链表，双向链表占用更多的内存空间。</li>
</ul>
</li>
<li><strong>循环链表</strong> (Circular Linked List):
<ul>
<li>循环链表是一种特殊的链表，其尾节点的指针指向头节点，形成一个循环。</li>
<li>循环链表<strong>可以从任意节点开始遍历整个链表</strong>，直到回到起始节点。</li>
<li>循环链表常用于实现循环队列、循环缓冲区等数据结构。</li>
</ul>
</li>
<li><strong>带头节点的链表</strong> (Linked List with Head Node):
<ul>
<li>带头节点的链表在链表的头部添加一个<strong>额外的头节点</strong>。</li>
<li>头节点不存储具体的数据，主要<strong>用于方便链表的操作和处理边界情况</strong>。</li>
<li>头节点的存在简化了对链表的操作，使得空链表和非空链表的处理方式一致。</li>
</ul>
</li>
<li><strong>带环链表</strong> (Linked List with Cycle):
<ul>
<li>带环链表是一种具有环形结构的链表，其中<strong>至少存在一个节点的指针指向链表中的前面节点，形成一个环</strong>。</li>
<li>带环链表常用于解决相关问题，例如判断链表是否有环、找到环的起始点等。</li>
</ul>
</li>
</ol>
<hr>
<h2 id="单向链表" tabindex="-1"><a class="header-anchor" href="#单向链表" aria-hidden="true">#</a> 单向链表</h2>
<h3 id="创建单向链表" tabindex="-1"><a class="header-anchor" href="#创建单向链表" aria-hidden="true">#</a> 创建单向链表</h3>
<h4 id="创建不带头节点链表" tabindex="-1"><a class="header-anchor" href="#创建不带头节点链表" aria-hidden="true">#</a> 创建不带头节点链表</h4>
<ul>
<li>
<p>思路一：<strong>不带尾指针的链表</strong></p>
<blockquote>
<ul>
<li>定义一个头指针；</li>
<li>创建一个头结点或者首元结点，让头指针指向它；</li>
<li>每创建一个结点，都令其直接前驱结点的指针指向它。</li>
</ul>
</blockquote>
</li>
<li>
<p>代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 头指针</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建新的节点</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 判断链表是否为空，为空链接到 head 头指针后面</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//遍历移动到链表尾部</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">//新的节点插入链表尾部</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出链表的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>思路二：<strong>带尾指针的链表</strong></p>
<blockquote>
<ul>
<li>定义一个头指针和一个尾指针；</li>
<li>创建一个头结点或者首元结点，让头指针和尾指针都指向它；</li>
<li>每创建一个结点，都令其直接前驱结点的指针指向它。</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 头指针</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 尾指针</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建新的节点</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 判断链表是否为空，为空链接到 head 头指针后面</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>       
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出链表的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="创建带头节点链表" tabindex="-1"><a class="header-anchor" href="#创建带头节点链表" aria-hidden="true">#</a> 创建带头节点链表</h4>
<ul>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 头节点</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出链表的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="输入一组数据创建链表" tabindex="-1"><a class="header-anchor" href="#输入一组数据创建链表" aria-hidden="true">#</a> 输入一组数据创建链表</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>首先定义了一个 <code v-pre>ListNode</code> 类来表示链表的节点。节点对象有一个 <code v-pre>value</code> 属性用于存储节点的值，以及一个 <code v-pre>next</code> 属性用于指向下一个节点。</p>
</li>
<li>
<p>然后，定义了一个名为 <code v-pre>createLinkedList</code> 的函数，它接受一个数组 <code v-pre>arr</code> 作为参数，用于创建链表。如果传入的数组是空数组，则返回 <code v-pre>null</code> 表示空链表。</p>
</li>
<li>
<p>在 <code v-pre>createLinkedList</code> 函数中，首先根据数组的第一个元素创建链表的头节点 <code v-pre>head</code>，然后使用一个循环遍历数组的剩余元素。在循环中，每次创建一个新的节点 <code v-pre>newNode</code>，并将当前节点 <code v-pre>currentNode</code> 的 <code v-pre>next</code> 属性指向新节点，然后更新 <code v-pre>currentNode</code> 为新节点，以便下一次循环连接下一个节点。</p>
</li>
<li>
<p>最后，返回链表的头节点 <code v-pre>head</code>。</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用类构造链表结构</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span> <span class="token comment">//保存链表的值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 保存链表下一个值</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建链表函数</span>
<span class="token keyword">function</span> <span class="token function">createLinkedList</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断数据为空，返回 Null</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 创建链表头节点</span>
  <span class="token keyword">const</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// 链表创建指针</span>
  <span class="token comment">// 循环创建链表</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建链表节点</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 链表指针节点指向新节点</span>
    currentNode <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 指针指向新节点</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> head<span class="token punctuation">;</span> <span class="token comment">//返回头指针</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token function">createLinkedList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印链表的值</span>
<span class="token keyword">let</span> currentNode <span class="token operator">=</span> linkedList<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//最后一个节点 next 为空，因此打印边界判断为 next 是否空</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="链表插入" tabindex="-1"><a class="header-anchor" href="#链表插入" aria-hidden="true">#</a> 链表插入</h3>
<ul>
<li>
<p>链表插入可以分为两种：</p>
<ul>
<li>带头节点的链表的插入，插入任何一个位置操作都相同；</li>
<li>不带头节点的链表插入，要区分插入头节点位置和其他位置两种情况；</li>
</ul>
</li>
<li>
<p>向链表中增添元素，根据添加位置不同，可分为以下 3 种情况：</p>
<ul>
<li>
<p>插入到链表的头部，作为首元节点；</p>
</li>
<li>
<p>插入到链表中间的某个位置；</p>
</li>
<li>
<p>插入到链表的最末端，作为链表中最后一个结点；</p>
</li>
</ul>
</li>
</ul>
<h4 id="有头节点链表插入" tabindex="-1"><a class="header-anchor" href="#有头节点链表插入" aria-hidden="true">#</a> 有头节点链表插入</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<p>对于有头结点的链表，3 种插入元素的实现思想是相同的，具体步骤是：（注意：第二步和第三步不能交换）</p>
<ul>
<li>
<ol>
<li>遍历查找到要插入位置的前一个节点；</li>
<li>将新结点的 next 指针指向插入位置后的结点；</li>
<li>将插入位置前结点的 next 指针指向插入结点；</li>
</ol>
</li>
<li>
<p>例如，在链表 <code v-pre>{1,2,3,4}</code> 的基础上分别实现在头部、中间、尾部插入新元素 5，其实现过程如：<img src="@source/images/链表插入.png" alt="image-20231019093001465"></p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 链表结构</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 头节点</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 插入头部 </span>
  <span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 将新节点的 next 指向原来的第一个节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 更新头节点的 next 指向新节点</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 
   * 插入任意位置
   * params <span class="token punctuation">{</span> int <span class="token punctuation">}</span> position 插入位置
   * params <span class="token punctuation">{</span> int <span class="token punctuation">}</span> value 插入值
   **/</span>
  <span class="token function">insertAtPosition</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Invalid position."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 位置计数器</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
	<span class="token comment">// 遍历找到插入位置的前一个节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> count <span class="token operator">&lt;</span> position <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Invalid position."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//创建新的节点</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 将新节点的 next 指向插入位置后的节点</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 更新插入位置前节点的 next 指向新节点</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 插入末尾</span>
  <span class="token function">insertAtEnd</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
	<span class="token comment">// 遍历找到尾节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 插入尾节点</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 将新节点连接到链表末尾</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 跳过头节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出链表的值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insertAtPosition</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出插入到中间位置后的链表的值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insertAtEnd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出插入到末尾后的链表的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="无头节点链表插入" tabindex="-1"><a class="header-anchor" href="#无头节点链表插入" aria-hidden="true">#</a> 无头节点链表插入</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>对于没有头结点的链表，在头部插入结点比较特殊，需要单独实现：因此需要分两种情况：</p>
<ul>
<li>
<p>头部插入新结点：</p>
<ul>
<li>将新结点的指针指向首元结点；</li>
<li>将头指针指向新结点。</li>
</ul>
</li>
<li>
<p>非头部节点插入新节点：</p>
<ul>
<li>遍历查找到要插入位置的前一个节点；</li>
<li>将新结点的 next 指针指向插入位置后的结点；</li>
<li>将插入位置前结点的 next 指针指向插入结点；</li>
</ul>
<p><img src="@source/images/链表插入-没有头节点.png" alt="image-20231019102022933"></p>
</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 头指针</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 插入头节点</span>
  <span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">// 将新节点的 next 指向首元节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 更新头指针指向新节点</span>
  <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 
   * 插入任意位置
   * params <span class="token punctuation">{</span> int <span class="token punctuation">}</span> position 插入位置
   * params <span class="token punctuation">{</span> int <span class="token punctuation">}</span> value 插入值
   **/</span>
  <span class="token function">insertAtPosition</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Invalid position."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 插入位置节点前节点指针</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> count <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span> <span class="token comment">// 当前节点作为前一个节点</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 指针后移</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Invalid position."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">;</span> <span class="token comment">// 将新节点的 next 指向插入位置后的节点</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 如果是在头部插入，更新头指针指向新节点</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 更新插入位置前节点的 next 指向新节点</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出链表的值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insertAtPosition</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出插入到中间位置后的链表的值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insertAtHead</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出头部插入后的链表的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="链表删除" tabindex="-1"><a class="header-anchor" href="#链表删除" aria-hidden="true">#</a> 链表删除</h3>
<ul>
<li>链表删除可以分为两种：
<ul>
<li>带头节点的链表的删除，插入任何一个位置操作都相同；</li>
<li>不带头节点的链表删除，要区分插入头节点位置和其他位置两种情况；</li>
</ul>
</li>
</ul>
<h4 id="有头节点的链表删除" tabindex="-1"><a class="header-anchor" href="#有头节点的链表删除" aria-hidden="true">#</a> 有头节点的链表删除</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>对于有头结点的链表来说，无论删除头部（首元结点）、中部、尾部的结点，实现方式都一样，执行以下三步操作：</p>
<ol>
<li>找到目标元素所在结点的直接前驱结点；</li>
<li>将目标结点从链表中摘下来;</li>
<li>手动释放结点占用的内存空间；</li>
</ol>
<p>从链表上摘除目标节点，只需找到该节点的直接前驱节点 temp，执行如下操作：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>temp<span class="token operator">-</span><span class="token operator">></span>next<span class="token operator">=</span>temp<span class="token operator">-</span><span class="token operator">></span>next<span class="token operator">-</span><span class="token operator">></span>next<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p><img src="@source/images/链表删除-带头节点.png" alt="image-20231019113340623"></p>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 头节点</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 链表尾部插入节点，用于构建链表</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token comment">// 删除节点</span>
  <span class="token keyword">delete</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 删除元素的前一个元素指针</span>
	<span class="token comment">// 循环查找到待删除的节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> currentNode<span class="token punctuation">.</span>value <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Element not found."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 重点：删除节点，通过将待删除节点和后一个节点连接删除</span>
    previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出链表的值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出删除节点后的链表的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="无头节点的链表删除" tabindex="-1"><a class="header-anchor" href="#无头节点的链表删除" aria-hidden="true">#</a> 无头节点的链表删除</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>对于不带头结点的链表，需要单独考虑删除首元结点的情况，删除其它结点的方式带头节点方式完全相同；</p>
<ul>
<li>
<p>删除首元节点时，直接改变头指针位置；</p>
</li>
<li>
<p>删除非首元节点时，遍历查找节点位置，再链接删除节点的前一个节点和后一个节点；</p>
<p><img src="@source/images/链表删除-不带头节点.png" alt="image-20231019135009620"></p>
</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 头指针</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token comment">// 移动到链表尾部</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 节点加入链表的尾部 </span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">delete</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Empty list."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//删除头节点元素</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 当前节点元素指针</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 当前节点元素前一个节点指针</span>
	<span class="token comment">// 查找元素内容</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> currentNode<span class="token punctuation">.</span>value <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span> <span class="token comment">// 当前直接变为前一个节点</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 当前节点指针后移</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Element not found."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 重点：删除元素节点，链接删除元素的前一个节点和后一个节点</span>
    previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出链表的值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出删除节点后的链表的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="删除链表重复节点" tabindex="-1"><a class="header-anchor" href="#删除链表重复节点" aria-hidden="true">#</a> 删除链表重复节点</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>1.用一个map存储每个节点出现的次数</li>
<li>2.删除出现次数大于1的节点:
<ul>
<li>1.删除的节点不是尾部节点 - 将next节点覆盖当前节点；</li>
<li>2.删除的节点是尾部节点且等于头节点，只剩一个节点 - 将头节点置为 null；</li>
<li>3.删除的节点是尾节点且前面还有节点 - 遍历到末尾的前一个节点删除；</li>
</ul>
</li>
</ul>
<p>时间复杂度：O(n)；空间复杂度：O(n)；</p>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deleteDuplication</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果链表不为空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead <span class="token operator">&amp;&amp;</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
        <span class="token comment">// 计算每个节点出现次数</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> val <span class="token operator">=</span> map<span class="token punctuation">[</span>current<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span>
            map<span class="token punctuation">[</span>current<span class="token punctuation">.</span>val<span class="token punctuation">]</span> <span class="token operator">=</span> val <span class="token operator">?</span> val <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 重新指向头节点开始遍历</span>
        current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> val <span class="token operator">=</span> map<span class="token punctuation">[</span>current<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//获取当前遍历节点的出现次数</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//出现次数大于一，删除当前节点</span>
                <span class="token comment">// 删除的节点不是尾部节点,将next节点覆盖当前节点</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    current<span class="token punctuation">.</span>val <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                    current<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token comment">// 删除的节点是尾部节点且等于头节点，只剩一个节点,将头节点置为 null；</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> pHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                    pHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 删除的节点是尾节点且前面还有节点,遍历到末尾的前一个节点删除；</span>
                    current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    current<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                    current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="从尾到头打印链表" tabindex="-1"><a class="header-anchor" href="#从尾到头打印链表" aria-hidden="true">#</a> 从尾到头打印链表</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>输入一个链表，按链表值从尾到头的顺序返回一个<code v-pre>ArrayList</code>。</p>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>要了解链表的数据结构：</p>
<ul>
<li>
<p><code v-pre>val</code>属性存储当前的值，<code v-pre>next</code>属性存储下一个节点的引用。</p>
</li>
<li>
<p>要遍历链表就是不断找到当前节点的<code v-pre>next</code>节点，当<code v-pre>next</code>节点是<code v-pre>null</code>时，说明是最后一个节点，停止遍历。</p>
</li>
<li>
<p>因为是从尾到头的顺序，使用一个队列来存储打印结果，每次从队列头部插入。</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/</span>
<span class="token keyword">function</span> <span class="token function">printListFromTailToHead</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
        array<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将元素移入队列头部</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>输入一个链表，反转链表后，输出新链表的表头。</p>
</blockquote>
</li>
<li>
<p>方法一：<strong>重建链表</strong></p>
<blockquote>
<ul>
<li>
<p>以链表的头部节点为基准节点</p>
</li>
<li>
<p>将基准节点的下一个节点挪到头部作为头节点</p>
</li>
<li>
<p>当基准节点的<code v-pre>next</code>为<code v-pre>null</code>，则其已经成为最后一个节点，链表已经反转完成</p>
<p><img src="@source/images/链表-反转链表.png" alt="image-20231024111150559"></p>
<p><img src="@source/images/链表-反转链表2.png" alt="image-20231024111221203"></p>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> headNode <span class="token operator">=</span> head<span class="token punctuation">;</span><span class="token comment">//以链表的头部节点为基准节点</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//遍历链表</span>
        currentNode <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 头部下一个节点</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 链接头部节点和下下一个结点</span>
        currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> headNode<span class="token punctuation">;</span><span class="token comment">//头部下一个节点链接头部</span>
        headNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> headNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>方法二：<strong>栈</strong></p>
<blockquote>
<ul>
<li>
<p>利用栈 &quot;先进后出&quot; 特点：</p>
<ul>
<li>
<p>遍历链表，将节点入栈；</p>
</li>
<li>
<p>遍历结束后，将栈元素逐个出栈，并将元素链接起来；</p>
<p><img src="@source/images/链表-反转链表-栈.png" alt="image-20231024111723893"></p>
</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    head <span class="token operator">=</span> curNode <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将头节点出栈</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 注意：此处重新计算栈长度，在出栈时，栈长度会改变，需要使用新的变量保存</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        temp<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>方法三：<strong>递归</strong></p>
<blockquote>
<ol>
<li>首先，判断链表是否为空或只有一个节点，如果是，则直接返回当前节点作为反转后的链表的表头。</li>
<li>如果链表有两个或更多节点，我们可以将链表分为两部分：头节点和剩余部分。假设剩余部分已经被反转，我们需要将头节点放置在剩余部分反转后的最后一个节点的后面。</li>
<li>为了实现这一点，我们需要将剩余部分的最后一个节点的下一个节点设置为头节点，并将头节点的下一个节点设为 null，以断开原来的连接。</li>
<li>最后，我们将原链表的剩余部分反转得到的链表的表头连接到头节点后面，并返回新的表头。</li>
</ol>
</blockquote>
<ul>
<li>
<p>代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 链表为空或只有一个节点，直接返回当前节点</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 反转剩余部分</span>
  <span class="token keyword">const</span> newHead <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将头节点放置在剩余部分反转后的最后一个节点的后面</span>
  head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token comment">// 创建一个链表：1 -> 2 -> 3 -> 4 -> 5</span>
<span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> node5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">;</span>
node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3<span class="token punctuation">;</span>
node3<span class="token punctuation">.</span>next <span class="token operator">=</span> node4<span class="token punctuation">;</span>
node4<span class="token punctuation">.</span>next <span class="token operator">=</span> node5<span class="token punctuation">;</span>

<span class="token keyword">const</span> reversedHead <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reversedHead<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出反转后链表的表头</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="奇偶链表" tabindex="-1"><a class="header-anchor" href="#奇偶链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/linked-list/fe0kj/" target="_blank" rel="noopener noreferrer">奇偶链表<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。</p>
</li>
<li>
<p>第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。</p>
</li>
<li>
<p>请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。</p>
</li>
<li>
<p>你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。</p>
</li>
<li>
<p>示例:<img src="@source/images/链表-奇偶链表.png" alt="image-20231024143946440"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><img src="@source/images/链表-奇偶链表1.png" alt="image-20231024144027003"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>思路：<strong>分离节点后合并</strong></p>
<blockquote>
<ul>
<li>
<p>如果链表为空，则直接返回链表。</p>
</li>
<li>
<p>对于原始链表，每个节点都是奇数节点或偶数节点。头节点是奇数节点，头节点的后一个节点是偶数节点，相邻节点的奇偶性不同。因此可以将奇数节点和偶数节点分离成奇数链表和偶数链表，然后将偶数链表连接在奇数链表之后，合并后的链表即为结果链表。</p>
</li>
<li>
<p>原始链表的头节点 head 也是奇数链表的头节点以及结果链表的头节点，head 的后一个节点是偶数链表的头节点。令 evenHead = head.next，则 evenHead 是偶数链表的头节点。</p>
</li>
<li>
<p>维护两个指针 odd 和 even 分别指向奇数节点和偶数节点，初始时 odd = head，even = evenHead。通过迭代的方式将奇数节点和偶数节点分离成两个链表，每一步首先更新奇数节点，然后更新偶数节点。</p>
<ul>
<li>更新奇数节点时，奇数节点的后一个节点需要指向偶数节点的后一个节点，因此令 odd.next = even.next，然后令 odd = odd.next，此时 odd 变成 even 的后一个节点。</li>
<li>更新偶数节点时，偶数节点的后一个节点需要指向奇数节点的后一个节点，因此令 even.next = odd.next，然后令 even = even.next，此时 even 变成 odd 的后一个节点。</li>
</ul>
</li>
<li>
<p>在上述操作之后，即完成了对一个奇数节点和一个偶数节点的分离。</p>
</li>
<li>
<p>重复上述操作，直到全部节点分离完毕。全部节点分离完毕的条件是 even 为空节点或者 even.next 为空节点，此时 odd 指向最后一个奇数节点（即奇数链表的最后一个节点）。</p>
</li>
<li>
<p>最后令 odd.next = evenHead，将偶数链表连接在奇数链表之后，即完成了奇数链表和偶数链表的合并，结果链表的头节点仍然是 head。</p>
<p><img src="@source/images/链表-奇偶链表3.png" alt="image-20231024155754933"></p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">oddEvenList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">let</span> evenHead <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 奇数指针指向第一个节点，偶数指针指向奇数指针节点的下一个节点</span>
    <span class="token keyword">let</span> odd <span class="token operator">=</span> head<span class="token punctuation">,</span> even <span class="token operator">=</span> evenHead<span class="token punctuation">;</span>
    <span class="token comment">// 偶数指针指向最后一个节点时，推出循环</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>even <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> even<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        odd<span class="token punctuation">.</span>next <span class="token operator">=</span> even<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 将偶数指针节点链接到奇数指针节点的 next，则奇数节点相连接</span>
        odd <span class="token operator">=</span> odd<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 奇数指针后移到下一个奇数节点</span>
        even<span class="token punctuation">.</span>next <span class="token operator">=</span> odd<span class="token punctuation">.</span>next<span class="token punctuation">;</span>  <span class="token comment">// 将奇数指针节点链接到偶数指针节点的 next，则偶数节点相连接</span>
        even <span class="token operator">=</span> even<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">// 偶数指针后移到下一个偶数节点</span>
    <span class="token punctuation">}</span>
    odd<span class="token punctuation">.</span>next <span class="token operator">=</span> evenHead<span class="token punctuation">;</span> <span class="token comment">// 此时奇数指针指向最后一个奇数节点，将最后一个奇数节点与偶数链表头节点链接</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

作者：LeetCode<span class="token operator">-</span>Solution
<span class="token literal-property property">链接：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>leetcode<span class="token punctuation">.</span>cn<span class="token operator">/</span>problems<span class="token operator">/</span>odd<span class="token operator">-</span>even<span class="token operator">-</span>linked<span class="token operator">-</span>list<span class="token operator">/</span>solution<span class="token operator">/</span>qi<span class="token operator">-</span>ou<span class="token operator">-</span>lian<span class="token operator">-</span>biao<span class="token operator">-</span>by<span class="token operator">-</span>leetcode<span class="token operator">-</span>solution<span class="token operator">/</span>
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="回文链表" tabindex="-1"><a class="header-anchor" href="#回文链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/linked-list/fov6t/" target="_blank" rel="noopener noreferrer">回文链表<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>给你一个单链表的头节点 head ，请你判断该链表是否为回文链表（回文数字是指从左到右和从右到左读取都相同的数字，例如，121、12321和1221都是回文数字）。</p>
</li>
<li>
<p>如果是，返回 true ；否则，返回 false 。</p>
</li>
<li>
<p>​	示例 1：<img src="@source/images/回文链表.png" alt="image-20231024193014915"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
输出：<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例 2：<img src="@source/images/回文链表2.png" alt="image-20231024193108140"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
输出：<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>提示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>链表中节点数目在范围<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">105</span><span class="token punctuation">]</span> 内
<span class="token number">0</span> <span class="token operator">&lt;=</span> Node<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> <span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？</p>
</li>
</ul>
<p>作者：LeetCode
链接：https://leetcode.cn/leetbook/read/linked-list/fov6t/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
</blockquote>
</li>
<li>
<p>解法一：<strong>使用栈和遍历</strong></p>
<blockquote>
<ul>
<li>思想：将链表中间拆开两部分进行比较，并且利用栈的”先进后出“ 特性, 逆序前半部分链表节点；
<ul>
<li>首次遍历链表，获取链表长度 len；</li>
<li>根据链表长度，获取遍历链表 head 节点到  Math.floor(len/2) 长度的节点，将节点入栈；</li>
<li>判断 len 是奇数还是偶数：
<ul>
<li>len%2 != 0，表示链表长度为奇数，要跳过中间节点；</li>
</ul>
</li>
<li>继续遍历链表剩余节点，并将剩余节点的值与栈中的数据对比，将节点出栈，并判断当前出栈元素值是否等于链表当前遍历的节点值：
<ul>
<li>如果相等，链表指针后移；</li>
<li>如果不相等，返回 false;</li>
</ul>
</li>
<li>遍历结束，说明栈中元素等于后半部分元素。</li>
</ul>
</li>
<li>时间复杂度 O(n)，空间复杂度 O(n);</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 只有一个节点，为回文链表</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">// 统计链表长度</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        len <span class="token operator">++</span><span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    curNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 遍历链表前半部分，将所有节点入栈，形成逆序顺序(注意长度向下取整数)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   	<span class="token comment">// 链表长度为奇数，跳过中间节点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">%</span><span class="token number">2</span> <span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode<span class="token operator">=</span>curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 遍历链表后半部分，并与栈中节点值对比</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> top <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 栈中节点值不等于后半部分链表值，不是回文链表</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val <span class="token operator">!==</span> top<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法二：<strong>将值复制到数组中后用双指针法</strong></p>
<blockquote>
<ul>
<li>
<p>复制链表值到数组列表中:</p>
</li>
<li>
<p>使用双指针法判断是否为回文。</p>
<ul>
<li>在起点放置一个指针，在结尾放置一个指针，每一次迭代判断两个指针指向的元素是否相同:
<ul>
<li>若不同，返回 false；</li>
<li>相同则将两个指针向内移动，并继续判断，直到两个指针相遇。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>时间复杂度：O(n)，其中 n 指的是链表的元素个数。</p>
<ul>
<li>第一步： 遍历链表并将值复制到数组中，O(n)。</li>
<li>第二步：双指针判断是否为回文，执行了 O(n/2) 次的判断，即 O(n)。</li>
<li>总的时间复杂度：O(2n)=O(n)。</li>
</ul>
</li>
<li>
<p>空间复杂度：O(n)，其中 n 指的是链表的元素个数，我们使用了一个数组列表存放链表的元素值。</p>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> vals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vals<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> vals<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">,</span> <span class="token operator">--</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vals<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> vals<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法三：<strong>递归</strong></p>
<blockquote>
<ul>
<li>
<p>设立一个指针 currentNode，从链表头节点开始递归遍历尾节点，只要存在节点就往下递归 currentNode 指向下一个节点；</p>
</li>
<li>
<p>当 currentNode 递归到最后一个节点后，由于递归的特性，当递归函数返回时，currentNode  将会从后往前进行比较：</p>
</li>
<li>
<p>使用函数外的指针 frontPointer 一直指向链表头</p>
<ul>
<li>
<p>若 currentNode.val != frontPointer.val 则返回 false。</p>
</li>
<li>
<p>反之，frontPointer 向前移动并返回 true。</p>
<p><img src="@source/images/链表-回文链表判断.gif" alt=""></p>
</li>
</ul>
</li>
<li>
<p>时间复杂度：O(n)，其中 n 指的是链表的大小。</p>
</li>
<li>
<p>空间复杂度：O(n)，其中 n 指的是链表的大小。</p>
<ul>
<li>我们要理解计算机如何运行递归函数，在一个函数中调用一个函数时，计算机需要在进入被调用函数之前跟踪它在当前函数中的位置（以及任何局部变量的值），通过运行时存放在堆栈中来实现（堆栈帧）。</li>
<li>在堆栈中存放好了数据后就可以进入被调用的函数。在完成被调用函数之后，他会弹出堆栈顶部元素，以恢复在进行函数调用之前所在的函数。在进行回文检查之前，递归函数将在堆栈中创建 n 个堆栈帧，计算机会逐个弹出进行处理。所以在使用递归时空间复杂度要考虑堆栈的使用情况。</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> frontPointer<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">recursivelyCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">currentNode</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">recursivelyCheck</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>val <span class="token operator">!==</span> frontPointer<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        frontPointer <span class="token operator">=</span> frontPointer<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    frontPointer <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">recursivelyCheck</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法三： <strong>快慢指针</strong></p>
<blockquote>
<ul>
<li>
<p>思想：</p>
<ul>
<li>将链表的后半部分反转（修改链表结构）</li>
<li>然后将前半部分和后半部分进行比较。</li>
<li>比较完成后我们应该将链表恢复原样。</li>
</ul>
</li>
<li>
<p>步骤：</p>
<ul>
<li>1.找到前半部分链表的尾节点。
<ul>
<li>计算链表节点的数量，然后遍历链表找到前半部分的尾节点；</li>
<li>使用快慢指针在一次遍历中找到：
<ul>
<li>慢指针一次走一步，快指针一次走两步，快慢指针同时出发。</li>
<li>当快指针移动到链表的末尾时，慢指针恰好到链表的中间。</li>
<li>通过慢指针将链表分为两部分。</li>
</ul>
</li>
</ul>
</li>
<li>2.反转后半部分链表。</li>
<li>3.判断是否回文。
<ul>
<li>比较两个部分的值，当后半部分到达末尾则比较完成，可以忽略计数情况中的中间节点</li>
</ul>
</li>
<li>4.恢复链表。
<ul>
<li>步骤2使用的函数相同，再反转一次恢复链表本身</li>
</ul>
</li>
<li>5.返回结果。</li>
</ul>
</li>
<li>
<p>时间复杂度：O(n)，其中 n 指的是链表的大小。</p>
</li>
<li>
<p>空间复杂度：O(1)。我们只会修改原本链表中节点的指向，而在堆栈上的堆栈帧不超过 O(1)。</p>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 反转链表</span>
<span class="token keyword">const</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curr <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curr <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> nextTemp <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
        prev <span class="token operator">=</span> curr<span class="token punctuation">;</span>
        curr <span class="token operator">=</span> nextTemp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 快慢指针法查找中间节点</span>
<span class="token keyword">const</span> <span class="token function-variable function">endOfFirstHalf</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// 找到前半部分链表的尾节点并反转后半部分链表</span>
    <span class="token keyword">const</span> firstHalfEnd <span class="token operator">=</span> <span class="token function">endOfFirstHalf</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> secondHalfStart <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>firstHalfEnd<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断是否回文</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> secondHalfStart<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;&amp;</span> p2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>val <span class="token operator">!=</span> p2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>        

    <span class="token comment">// 还原链表并返回结果</span>
    firstHalfEnd<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>secondHalfStart<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#合并两个有序链表" aria-hidden="true">#</a> 合并两个有序链表</h3>
<ul>
<li>
<p>题目</p>
<blockquote>
<ul>
<li>
<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p>
</li>
<li>
<p>示例：<img src="@source/images/链表-合并有序链表.png" alt="image-20231025092528588"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例2</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例3:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>提示：</strong></p>
<ul>
<li>两个链表的节点数目范围是 <code v-pre>[0, 50]</code></li>
<li><code v-pre>-100 &lt;= Node.val &lt;= 100</code></li>
<li><code v-pre>l1</code> 和 <code v-pre>l2</code> 均按 <strong>非递减顺序</strong> 排列</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>解法一：<strong>添加前置指针</strong></p>
<blockquote>
<ul>
<li>
<p>设定一个哨兵节点 prehead ，这可以在最后让我们比较容易地返回合并后的链表。</p>
</li>
<li>
<p>维护一个 prev 指针，调整它的 next 指针。</p>
</li>
<li>
<p>然后，重复以下过程，直到 l1 或者 l2 指向了 null ：</p>
<ul>
<li>如果 l1 当前节点的值小于等于 l2 ，我们就把 l1 当前的节点接在 prev 节点的后面，同时将 l1 指针往后移一位。</li>
<li>否则，我们对 l2 做同样的操作。</li>
<li>然后 prev 向后移一位。</li>
</ul>
</li>
<li>
<p>在循环终止的时候， l1 和 l2 至多有一个是非空的。由于输入的两个链表都是有序的，所以不管哪个链表是非空的，它包含的所有元素都比前面已经合并链表中的所有元素都要大（两个链表为有序链表）。因此只需要简单地将非空链表接在合并链表的后面，并返回合并链表即可。</p>
</li>
</ul>
<p><img src="@source/images/合并有序链表..gif" alt=""></p>
<ul>
<li>
<p>时间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。因为每次循环迭代中，l1 和 l2 只有一个元素会被放进合并链表中， 因此 while 循环的次数不会超过两个链表的长度之和。所有其他操作的时间复杂度都是常数级别的，因此总的时间复杂度为 O(n+m)。</p>
</li>
<li>
<p>空间复杂度：O(1)。我们只需要常数的空间存放若干变量。</p>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建新的前置节点</span>
    <span class="token keyword">const</span> prehead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 前置指针</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> prehead<span class="token punctuation">;</span>
    <span class="token comment">// 循环遍历两个链表</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 前置节点链接值较小的节点</span>
            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
            l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
            l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 指针后移</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可</span>
    prev<span class="token punctuation">.</span>next <span class="token operator">=</span> l1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> l2 <span class="token operator">:</span> l1<span class="token punctuation">;</span>
    <span class="token keyword">return</span> prehead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法二：<strong>递归</strong></p>
<blockquote>
<ul>
<li>递归建模：
<ul>
<li><img src="@source/images/合并有序链表-递归.png" alt="image-20231025095455313"></li>
<li>如果 l1 或者 l2 一开始就是空链表 ，那么没有任何操作需要合并，所以我们只需要返回非空链表。</li>
<li>否则，我们要判断 l1 和 l2 哪一个链表的头节点的值更小，然后递归地决定下一个添加到结果里的节点。</li>
<li>如果两个链表有一个为空，递归结束。</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> l2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>l2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> l1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        l1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> l2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> l1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        l2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> l2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="两数相加" tabindex="-1"><a class="header-anchor" href="#两数相加" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/linked-list/fv6w7/" target="_blank" rel="noopener noreferrer">两数相加<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p>题目:</p>
<blockquote>
<ul>
<li>
<p>给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。</p>
</li>
<li>
<p>请你将两个数相加，并以相同形式返回一个表示和的链表。</p>
</li>
<li>
<p>你可以假设除了数字 0 之外，这两个数都不会以 0 开头。</p>
</li>
<li>
<p>示例：<img src="@source/images/链表-两数相加.png" alt="image-20231025143932982"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span>
解释：<span class="token number">342</span> <span class="token operator">+</span> <span class="token number">465</span> <span class="token operator">=</span> <span class="token number">807.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>提示：</strong></p>
<ul>
<li>每个链表中的节点数在范围 <code v-pre>[1, 100]</code> 内</li>
<li><code v-pre>0 &lt;= Node.val &lt;= 9</code></li>
<li>题目数据保证列表表示的数字不含前导零</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>解法一：</p>
<blockquote>
<ul>
<li>两数字相加算法：
<ul>
<li>从个位数到最最高位，每一个数字进行相加；</li>
<li>相加大于10，则结果为余数，数字往上进一位，进位为整数；</li>
</ul>
</li>
<li>遍历两个链表，节点一一对应相加，相加后求余数，并求进位数；</li>
<li>当两条链表都遍历结束后，如果余数不为零，则继续创建节点，将余数节点插入链表末尾；</li>
</ul>
</blockquote>
<ul>
<li>代码</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur1 <span class="token operator">=</span> l1<span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur2 <span class="token operator">=</span> l2<span class="token punctuation">;</span>
    <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token comment">//使用尾指针创建链表</span>
    <span class="token keyword">let</span> remain <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 保存上一位整数</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur1 <span class="token operator">||</span> cur2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> val1 <span class="token operator">=</span> cur1<span class="token operator">?</span> cur1<span class="token punctuation">.</span>val<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> val2 <span class="token operator">=</span> cur2<span class="token operator">?</span> cur2<span class="token punctuation">.</span>val<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> val1 <span class="token operator">+</span> val2 <span class="token operator">+</span> remain<span class="token punctuation">;</span> <span class="token comment">// 计算两数和： 两数相加并加上上一位进数</span>
        remain <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>result<span class="token operator">/</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 进数计算：结果除以 10 取整数</span>
        <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>result<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 结果计算：取两数之和的余数</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head <span class="token operator">=</span> tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
            tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>       
        <span class="token punctuation">}</span>
        cur1 <span class="token operator">=</span> cur1<span class="token operator">?</span>  cur1<span class="token punctuation">.</span>next <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        cur2 <span class="token operator">=</span> cur2<span class="token operator">?</span>  cur2<span class="token punctuation">.</span>next <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>remain <span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 注意： 如果余数不为零，说明最后有进位，将进位创建节点并假如链表末尾</span>
        <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>remain<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="复制带随机指针链表" tabindex="-1"><a class="header-anchor" href="#复制带随机指针链表" aria-hidden="true">#</a> 复制带随机指针链表</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。</p>
<ul>
<li>
<p>示例：</p>
<p><img src="@source/images/链表-复制带指针链表.png" alt="image-20231025150420653"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例2：<img src="@source/images/链表-复制带指针链表3.png" alt="image-20231025150509061"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例3：<img src="@source/images/链表-复制带指针链表4.png" alt="image-20231025150546100"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
</li>
<li>
<p>解法一：<strong>使用 MAP 映射和两次遍历链表</strong></p>
<ul>
<li>
<p>思路：</p>
<blockquote>
<p>了复制一个复杂链表，需要遍历原链表并创建新的节点。同时，还需要处理特殊指针，即原链表节点的 random 指针，使其指向新链表中对应的节点。</p>
<p>具体步骤如下：</p>
<ol>
<li>创建一个哈希表或映射表，用于存储原链表节点和复制链表节点的对应关系。</li>
<li>第一次遍历原链表，创建新的节点，并将原链表节点和新节点的对应关系保存到哈希表中。</li>
<li>第二次遍历原链表，处理新节点的 next 和 random 指针：
<ul>
<li>新节点的 next 指针指向哈希表中对应的原链表节点的 next 节点的复制节点。</li>
<li>新节点的 random 指针指向哈希表中对应的原链表节点的 random 节点的复制节点。</li>
</ul>
</li>
<li>返回复制链表的头节点。</li>
</ol>
</blockquote>
</li>
<li>
<p>代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>random <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">copyRandomList</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 第一次遍历，复制节点并建立映射关系</span>
  <span class="token keyword">let</span> currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">,</span> newNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 第二次遍历，处理复制节点的指针</span>
  currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>random <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>random<span class="token punctuation">)</span><span class="token punctuation">;</span>
    currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法二：</p>
<ul>
<li>
<p>思路：</p>
<blockquote>
<p>拆分成三步:</p>
<ol>
<li>
<p>复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N<code v-pre>,把N</code>直接放在N的next位置，让复制后的链表和原始链表组成新的链表。</p>
</li>
<li>
<p>给复制的链表random赋值，即<code v-pre>N.random=N.random.next</code>。</p>
</li>
<li>
<p>拆分链表，将N`和N进行拆分，保证原始链表不受影响。</p>
<p><img src="@source/images/复制复杂链表.png" alt="Untitled Diagram.drawio"></p>
</li>
</ol>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 复制复杂链表 </span>
<span class="token keyword">function</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 第一步：复制链表节点</span>
    <span class="token function">cloneNodes</span><span class="token punctuation">(</span>pHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 第二步：复制 random 链表</span>
    <span class="token function">cloneRandom</span><span class="token punctuation">(</span>pHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 第三步： 拆分链表</span>
    <span class="token keyword">return</span> <span class="token function">reconnetNodes</span><span class="token punctuation">(</span>pHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">cloneNodes</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建新节点</span>
        <span class="token keyword">let</span> cloneNode <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> current<span class="token punctuation">.</span>label<span class="token punctuation">,</span>
            <span class="token literal-property property">next</span><span class="token operator">:</span> current<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 新节点链接到当前节点前面</span>
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> cloneNode<span class="token punctuation">;</span>
        current <span class="token operator">=</span> cloneNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">cloneRandom</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> cloneNode <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>random<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cloneNode<span class="token punctuation">.</span>random <span class="token operator">=</span> current<span class="token punctuation">.</span>random<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cloneNode<span class="token punctuation">.</span>random <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        current <span class="token operator">=</span> cloneNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">reconnetNodes</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> cloneHead <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">var</span> cloneNode <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">var</span> current <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> cloneNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        current <span class="token operator">=</span> cloneNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cloneNode<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cloneNode <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cloneNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cloneHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<hr>
<h2 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表" aria-hidden="true">#</a> 双向链表</h2>
<h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3>
<ul>
<li>
<p>双向”指的是各节点之间的逻辑关系是双向的，头指针通常只设置一个。</p>
</li>
<li>
<p>结构：</p>
<ul>
<li>
<p>指针域 <code v-pre>prior</code>：用于指向当前节点的直接前驱节点；</p>
</li>
<li>
<p>数据域 <code v-pre>value</code>：用于存储数据元素。</p>
</li>
<li>
<p>指针域 <code v-pre>next</code>：用于指向当前节点的直接后继节点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//双向链表节点结构</span>
<span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prior <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p><img src="@source/images/双向链表图示.png" alt="image-20231020140555561"></p>
<p><img src="@source/images/双向链表结构.png" alt="image-20231020140611265"></p>
<ul>
<li>双向链表的特点：
<ol>
<li>双向遍历：由于每个节点包含了对前一个节点的引用，可以从头到尾或从尾到头进行遍历，提供了链表的双向遍历能力。</li>
<li>插入和删除操作效率高：相比单向链表，在双向链表中插入和删除节点的操作更高效。因为可以直接通过前一个节点的引用找到后一个节点，无需遍历整个链表。</li>
<li>占用更多的内存空间：由于每个节点需要存储对前一个节点的引用，相比单向链表，双向链表占用更多的内存空间。</li>
<li>实现复杂度略高：相比单向链表，双向链表的实现稍微复杂一些，需要同时维护前后两个方向的引用关系。</li>
</ol>
</li>
</ul>
<h3 id="创建双向链表" tabindex="-1"><a class="header-anchor" href="#创建双向链表" aria-hidden="true">#</a> 创建双向链表</h3>
<ul>
<li>
<p>题目：输入一个数组，根据输入数据创建双向链表</p>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>同单链表相比，双链表仅是各节点多了一个用于指向直接前驱的指针域。因此，我们可以在单链表的基础轻松实现对双链表的创建。</p>
<p>需要注意的是，与单链表不同，双链表创建过程中，每创建一个新节点都要与其前驱节点建立两次联系，分别是：</p>
<ul>
<li>将新节点的 prior 指针指向直接前驱节点；</li>
<li>将直接前驱节点的 next 指针指向新节点；</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createDoublyLinkedList</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">||</span> arr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 输入数组无效</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 头节点</span>
  <span class="token keyword">const</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// 移动指针</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建新节点</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 当前节点指向新节点</span>
    newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> currentNode<span class="token punctuation">;</span> <span class="token comment">// 新节点前驱指针指向当前节点</span>
    currentNode <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 指针后移</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> head <span class="token operator">=</span> <span class="token function">createDoublyLinkedList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印链表元素</span>
<span class="token keyword">let</span> currentNode <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">' '</span><span class="token punctuation">;</span>
  currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1 2 3 4 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="双向链表添加节点" tabindex="-1"><a class="header-anchor" href="#双向链表添加节点" aria-hidden="true">#</a> 双向链表添加节点</h3>
<p>根据数据添加到双向链表中的位置不同，可细分为以下 3 种情况：</p>
<ul>
<li><strong>添加至表头</strong></li>
</ul>
<blockquote>
<p>将新数据元素添加到表头，只需要将该元素与表头元素建立双层逻辑关系即可。</p>
<p>换句话说，假设新元素节点为 temp，表头节点为 head，则需要做以下 2 步操作即可：</p>
<ol>
<li>temp-&gt;next=head; head-&gt;prior=temp;</li>
<li>将 head 移至 temp，重新指向新的表头；</li>
</ol>
<p>例如，将新元素 7 添加至双链表的表头，则实现过程如图 2 所示：</p>
<p><img src="@source/images/双向链表-添加头节点.png" alt="image-20231020143612077"></p>
</blockquote>
<ul>
<li>
<p><strong>添加至表的中间位置</strong></p>
<blockquote>
<p>同单链表添加数据类似，双向链表中间位置添加数据需要经过以下 2 个步骤，如图 3 所示：</p>
<ol>
<li>新节点先与其直接后继节点建立双层逻辑关系；</li>
<li>新节点的直接前驱节点与之建立双层逻辑关系；</li>
</ol>
<p><img src="@source/images/双向链表-添加头任意点.png" alt="image-20231020143632937"></p>
</blockquote>
</li>
<li>
<p><strong>添加至表尾</strong></p>
<blockquote>
<p>与添加到表头是一个道理，实现过程如下（如图 4 所示）：</p>
<ol>
<li>找到双链表中最后一个节点；</li>
<li>让新节点与最后一个节点进行双层逻辑关系；</li>
</ol>
<p><img src="@source/images/双向链表-添加尾节点.png" alt="image-20231020143648830"></p>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    
  <span class="token comment">// 在链表头部添加节点</span>
  <span class="token function">prepend</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果链表为空，则新节点为头节点</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将新节点插入到头部</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
    
  <span class="token comment">// 在链表末尾添加节点</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果链表为空，则新节点为头节点</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 遍历链表找到最后一个节点</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 在最后一个节点后面添加新节点</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 在指定位置插入节点</span>
  <span class="token function">insertAt</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 位置无效</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在头部插入节点</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	  <span class="token comment">// 找到指定位置的前一个节点</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> position <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        index<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 在指定位置插入节点</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> currentNode<span class="token punctuation">;</span> <span class="token comment">// 新节点与前一个节点建立联系</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">// 新节点与后一个节点建立联系</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 后一个节点与新节点建立联系</span>
      <span class="token punctuation">}</span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span> <span class="token comment">// 移动 currentNode 指针</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取链表长度</span>
  <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      length<span class="token operator">++</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 打印链表元素</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">' '</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1 2 3</span>

linkedList<span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 0 1 2 3</span>

linkedList<span class="token punctuation">.</span><span class="token function">insertAt</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 0 1 2 4 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="双向链表删除节点" tabindex="-1"><a class="header-anchor" href="#双向链表删除节点" aria-hidden="true">#</a> 双向链表删除节点</h3>
<p>和添加结点的思想类似，在双向链表中删除目标结点也分为 3 种情况。</p>
<ul>
<li><strong>删除表头结点</strong></li>
</ul>
<blockquote>
<p>删除表头结点的过程如下图所示：</p>
<p><img src="@source/images/双向链表-删除头节点.png" alt="image-20231020150427467"></p>
<p>删除表头结点的实现过程是：</p>
<ol>
<li>新建一个指针指向表头结点；</li>
<li>断开表头结点和其直接后续结点之间的关联，更改 head 头指针的指向，同时将其直接后续结点的 prior 指针指向 NULL；</li>
<li>释放表头结点占用的内存空间。</li>
</ol>
</blockquote>
<ul>
<li><strong>删除表中结点</strong></li>
</ul>
<blockquote>
<p>删除表中结点的过程如下图所示：</p>
<p><img src="@source/images/双向链表-删除表节点.png" alt="image-20231020150458691"></p>
<p>删除表中结点的实现过程是：</p>
<ol>
<li>找到目标结点，新建一个指针指向改结点；</li>
<li>将目标结点从链表上摘除；</li>
<li>释放该结点占用的内存空间。</li>
</ol>
</blockquote>
<ul>
<li><strong>删除表尾结点</strong></li>
</ul>
<blockquote>
<p>删除表尾结点的过程如下图所示：</p>
<p><img src="@source/images/双向链表-删除尾节点.png" alt="image-20231020150522683"></p>
<p>删除表尾结点的实现过程是：</p>
<ol>
<li>找到表尾结点，新建一个指针指向该结点；</li>
<li>断点表尾结点和其直接前驱结点的关联，并将其直接前驱结点的 next 指针指向 NULL；</li>
<li>释放表尾结点占用的内存空间。</li>
</ol>
</blockquote>
<ul>
<li>
<p>代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 删除指定值的节点</span>
  <span class="token keyword">delete</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 链表为空，无法删除</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token comment">// 遍历链表找到要删除的节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 删除头节点</span>
          <span class="token comment">// 移动 head 指针</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span>  <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> 
          
         <span class="token comment">// 删除表中结点:节点前后指针都不为空，表示表中节点</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> currentNode<span class="token punctuation">.</span>prev<span class="token punctuation">)</span><span class="token punctuation">{</span>
          currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
          currentNode<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
          
        <span class="token comment">// 删除尾节点: currentNode.next 为空表示尾节点</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
            currentNode<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
      <span class="token punctuation">}</span>

      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取链表长度</span>
  <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      length<span class="token operator">++</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 打印链表元素</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">' '</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1 2 3</span>

linkedList<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1 3</span>

linkedList<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 3</span>

linkedList<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="扁平化多级双向链表" tabindex="-1"><a class="header-anchor" href="#扁平化多级双向链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/linked-list/fw8v5/" target="_blank" rel="noopener noreferrer">扁平化多级双向链表<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>多级双链表是一个双链表，其中包含的节点有一个下一个指针、一个前一个指针和一个额外的 子指针 。</p>
<ul>
<li>这个子指针可能指向一个单独的双向链表，也包含这些特殊的节点。</li>
<li>这些子列表可以有一个或多个自己的子列表，以此类推，以生成如下面的示例所示的 多层数据结构 。</li>
</ul>
</li>
<li>
<p>给定链表的头节点 head ，将链表 扁平化 ，以便所有节点都出现在单层双链表中。</p>
</li>
<li>
<p>让 curr 是一个带有子列表的节点。子列表中的节点应该出现在扁平化列表中的 curr 之后 和 curr.next 之前 。</p>
</li>
<li>
<p>返回 扁平列表的 head 。列表中的节点必须将其 所有 子指针设置为 null 。</p>
</li>
<li>
<p>示例 1：<img src="@source/images/链表-扁平化多级双向链表.png" alt="image-20231025195541494"></p>
<ul>
<li>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>输入：head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
输出：[1,2,3,7,8,11,12,9,10,4,5,6]
解释：输入的多级列表如上图所示。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>扁平化后的链表如下图：<img src="@source/images/链表-扁平化多级双向链表1.png" alt="image-20231025195624301"></p>
</li>
</ul>
</li>
<li>
<p>示例 2：<img src="@source/images/链表-扁平化多级双向链表3.png" alt="image-20231025195646133"></p>
<ul>
<li>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>输入：head = [1,2,null,3]
输出：[1,3,2]
解释：输入的多级列表如上图所示。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>扁平化后的链表如下图：<img src="@source/images/链表-扁平化多级双向链表9.png" alt="image-20231025195717809"></p>
</li>
</ul>
</li>
<li>
<p>示例 3：</p>
<ul>
<li>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>输入：head = []
输出：[]
说明：输入中可能存在空列表。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>提示：</p>
<blockquote>
<p>节点数目不超过 1000
1 &lt;= Node.val &lt;= 105</p>
</blockquote>
</li>
<li>
<p>如何表示测试用例中的多级链表？</p>
</li>
</ul>
<blockquote>
<ul>
<li>
<p>以 示例 1 为例：</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code> 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>序列化其中的每一级之后：</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了将每一级都序列化到一起，我们需要每一级中添加值为 null 的元素，以表示没有节点连接到上一级的上级节点。</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>合并所有序列化结果，并去除末尾的 null 。</p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
</blockquote>
</li>
<li>
<p>解法：<strong>深度优先搜索</strong></p>
<blockquote>
<ul>
<li>
<p>当我们遍历到某个节点 node 时，如果它的 child 成员不为空，那么我们需要将 child 指向的链表结构进行扁平化，并且插入 node 与 node 的下一个节点之间;</p>
</li>
<li>
<p>在遇到 child 成员不为空的节点时，就要先去处理 child 指向的链表结构:</p>
</li>
<li>
<p>对 child 指向的链表结构的扁平化之后，就可以「回溯」到 node 节点;</p>
</li>
<li>
<p>为了能够将扁平化的链表插入 node 与 node 的下一个节点之间，我们需要知道扁平化的链表的最后一个节点 last，随后进行如下的三步操作：</p>
<ul>
<li>
<p>将 node 与 node 的下一个节点 next 断开：</p>
</li>
<li>
<p>将 node 与 child 相连；</p>
</li>
<li>
<p>将 last 与 next 相连。</p>
</li>
</ul>
</li>
<li>
<p>在深度优先搜索完成后，我们返回给定的首节点即可。</p>
<p><img src="@source/images/扁平化多级双向链表.png" alt="image-20231025200619063"></p>
</li>
<li>
<p>复杂度分析</p>
<ul>
<li>时间复杂度：O(n)，其中n 是链表中的节点个数。</li>
<li>空间复杂度：O(n)。上述代码中使用的空间为深度优先搜索中的栈空间，如果给定的链表的「深度」为 d，那么空间复杂度为 O(d)。在最换情况下，链表中的每个节点的 next 都为空，且除了最后一个节点外，每个节点的 child 都不为空，整个链表的深度为 n，因此时间复杂度为 O(n)。</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码: <strong>深度优先搜索的递归写法</strong></p>
<div class="language-JS line-numbers-mode" data-ext="JS"><pre v-pre class="language-JS"><code>var flatten = function(head) {
    // 深度优先搜索
    const dfs = (node) =&gt; {
        let cur = node;
        // 记录链表的最后一个节点
        let last = null;

        while (cur) {
            let next = cur.next;
            //  如果有子节点，那么首先处理子节点
            if (cur.child) {
                // 深度搜索子节点，获取子节点的最后一个节点 childLast
                const childLast = dfs(cur.child);
				// 
                next = cur.next;
                //  将 node 与 child 相连
                cur.next = cur.child;
                cur.child.prev = cur;

                //  如果 next 不为空，就将 last 与 next 相连
                if (next != null) {
                    childLast.next = next;
                    next.prev = childLast;
                }

                // 将 child 置为空
                cur.child = null;
                last = childLast;
            } else {
                // 没有子节点，将 last 指针指向移动的 cur 指针
                last = cur;
            }
            // cur 指针后移
            cur = next;

        }
        // 移动到最后一个节点后，返回最后一个节点指针
        return last;
    }

    dfs(head);
    return head;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>代码： <strong>深度优先搜索的栈写法</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 栈用于保存含有 child 节点的 next 节点</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">||</span> stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指针移遍历到末尾，则直接出栈</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 遍历的节点存在子节点，则对子节点进行遍历</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//注意：当前节点存在 next 节点才需要入栈等待回溯，没有 next 不需要回溯，则无需入栈</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 直接将含有 child 的节点 与它的child 节点链接</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>child<span class="token punctuation">.</span>prev <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        prev <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 指针后移</span>
        <span class="token comment">// 遍历到最后一个节点时，获取栈顶元素，将左右一个节点与栈顶元素节点链接</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cur <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            prev<span class="token punctuation">.</span>next <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prev<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h2 id="循环链表" tabindex="-1"><a class="header-anchor" href="#循环链表" aria-hidden="true">#</a> 循环链表</h2>
<h3 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h3>
<ul>
<li>
<p>循环链表是一种特殊类型的链表，其中链表中的最后一个节点指向第一个节点，形成一个闭环的结构。</p>
</li>
<li>
<p>循环链表没有尾节点，而是通过尾节点的指针将链表的末尾连接到头节点。</p>
<p><img src="@source/images/循环链表.png" alt="image-20231020163024548"></p>
</li>
<li>
<p>分类：</p>
<ul>
<li><strong>单向循环链表</strong>：在单向循环链表中，每个节点只有一个指针，指向下一个节点，而最后一个节点指向头节点。这种循环链表可以实现环形队列等应用。</li>
<li><strong>双向循环链表</strong>：在双向循环链表中，每个节点有两个指针，一个指向前一个节点，另一个指向后一个节点。最后一个节点的后继节点是头节点，头节点的前驱节点是最后一个节点。这种循环链表可以<strong>支持双向遍历和操作</strong>，例如在双向循环链表中可以方便地进行插入和删除操作。</li>
</ul>
</li>
<li>
<p>优势：</p>
<ul>
<li>
<ol>
<li><strong>遍历方便</strong>：由于循环链表形成了闭环结构，<strong>可以从任意节点开始遍历整个链表</strong>，不需要额外的终止条件。这使得循环链表在某些情况下更加方便和高效。</li>
<li><strong>插入和删除操作高效</strong>：在循环链表中，插入和删除节点的操作相对于非循环链表更加高效。由于节点的前驱和后继节点都可以直接访问，插入和删除操作不需要遍历整个链表来定位位置，因此时间复杂度较低。</li>
<li><strong>实现循环结构</strong>：循环链表的最后一个节点指向头节点，形成了一个循环结构。这种结构在某些问题和算法中非常有用，例如模拟循环队列、循环缓冲区等应用场景。</li>
</ol>
</li>
</ul>
</li>
</ul>
<h3 id="单向循环链表" tabindex="-1"><a class="header-anchor" href="#单向循环链表" aria-hidden="true">#</a> 单向循环链表</h3>
<h4 id="创建单向循环链表" tabindex="-1"><a class="header-anchor" href="#创建单向循环链表" aria-hidden="true">#</a> 创建单向循环链表</h4>
<ul>
<li>
<p>题目：输入一组数据，根据输入数据创建单向循环链表</p>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>创建循环链表方法跟创建链表方法相同，但是循环链表判断一次遍历结束方式不同： currentNode.next !== this.head</p>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CircularLinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 添加节点到链表尾部</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果链表为空，则新节点为头节点</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">// 将头节点指向自己形成循环</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

      <span class="token comment">// 找到最后一个节点，注意判断条件</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 在最后一个节点后面添加新节点</span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">// 将新节点的 next 指向头节点，形成循环</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 打印循环链表</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"循环链表为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历循环链表，将节点值存入数组</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nodes<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" -> "</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> circularLinkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CircularLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> input<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  circularLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>input<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

circularLinkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1 -> 2 -> 3 -> 4 -> 5 -> 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="双向循环链表" tabindex="-1"><a class="header-anchor" href="#双向循环链表" aria-hidden="true">#</a> 双向循环链表</h3>
<ul>
<li>双向循环链表是一种特殊类型的链表，每个节点都有一个指向前一个节点和一个指向后一个节点的指针。</li>
<li>与单向循环链表不同，双向循环链表可以在两个方向上遍历和操作链表。</li>
<li>双向循环链表的特点和优势包括：
<ul>
<li><strong>双向遍历</strong>：双向循环链表可以从头节点或尾节点开始，沿着前向或后向指针遍历整个链表。这使得在某些情况下可以更方便和高效地进行双向遍历操作。</li>
<li><strong>插入和删除操作高效</strong>：由于每个节点都有指向前后节点的指针，插入和删除节点的操作比单向链表更高效。可以直接访问前后节点，无需遍历链表来定位位置，从而降低了时间复杂度。</li>
</ul>
</li>
</ul>
<h4 id="创建双向循环链表" tabindex="-1"><a class="header-anchor" href="#创建双向循环链表" aria-hidden="true">#</a> 创建双向循环链表</h4>
<ul>
<li>
<p>题目：输入一组数据，根据输入数据创建双向循环链表（该双向循环链表没有尾指针）</p>
</li>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>创建新的节点</li>
<li>根据头指针的 head.prev 找到尾部节点</li>
<li>将新的节点插入头节点和尾节点之间</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DoublyCircularLinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 添加节点到链表尾部</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果链表为空，则新节点为头节点</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tailNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev<span class="token punctuation">;</span> <span class="token comment">// 通过头指针找到当前尾节点</span>

      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> tailNode<span class="token punctuation">;</span> <span class="token comment">// 链接新节点和尾节点</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">// 链接新节点和头节点</span>
      tailNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span><span class="token comment">// 链接新节点和尾节点</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span><span class="token comment">// 链接新节点和头节点</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 打印双向循环链表</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"双向循环链表为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历双向循环链表，将节点值存入数组</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nodes<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" &lt;-> "</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> doublyCircularLinkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyCircularLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> input<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  doublyCircularLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>input<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

doublyCircularLinkedList<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1 &lt;-> 2 &lt;-> 3 &lt;-> 4 &lt;-> 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="约瑟夫环问题" tabindex="-1"><a class="header-anchor" href="#约瑟夫环问题" aria-hidden="true">#</a> 约瑟夫环问题</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>约瑟夫环问题，是一个经典的循环链表问题</li>
<li>题意是：已知 n 个人（分别用编号 1，2，3，…，n 表示）围坐在一张圆桌周围，从编号为 k 的人开始顺时针报数，数到 m 的那个人出列；他的下一个人又从 1 开始，还是顺时针开始报数，数到 m 的那个人又出列；依次重复下去，直到圆桌上剩余一个人。</li>
<li>如图 2 所示，假设此时圆周周围有 5 个人，要求从编号为 3 的人开始顺时针数数，数到 2 的那个人出列：<img src="@source/images/约瑟夫环.png" alt="循环链表实现约瑟夫环">
图 2 循环链表实现约瑟夫环
出列顺序依次为：
<ul>
<li>编号为 3 的人   开始数 1，4 数 2，所以 4 先出列；</li>
<li>4 出列后，从 5 开始数 1，1 数 2，所以 1 出列；</li>
<li>1 出列后，从 2 开始数 1，3 数 2，所以 3 出列；</li>
<li>3 出列后，从 5 开始数 1，2 数 2，所以 2 出列；</li>
<li>最后只剩下 5 自己，所以 5 胜出。</li>
</ul>
</li>
</ul>
</blockquote>
</li>
</ul>
<h4 id="循环链表法" tabindex="-1"><a class="header-anchor" href="#循环链表法" aria-hidden="true">#</a> 循环链表法</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>根据输入的人数 <code v-pre>n</code> 创建循环链表。我们从头节点开始，依次创建 <code v-pre>n</code> 个节点，将它们连接成循环链表，最后将最后一个节点的 <code v-pre>next</code> 指针指向头节点，形成循环。</p>
</li>
<li>
<p>在 <code v-pre>josephus</code> 方法中，我们解决约瑟夫问题:</p>
<ul>
<li>我们首先找到起始位置的节点，即从编号为 <code v-pre>k</code> 的人开始报数。</li>
<li>然后，我们使用一个循环来模拟报数的过程，每次数到 <code v-pre>m</code>，就移除当前节点，并输出出列人的编号。</li>
<li>当循环链表中只剩下一个节点时，即停止循环，并输出剩余人的编号。</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CircularLinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 创建循环链表</span>
  <span class="token function">createCircularList</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"输入的人数必须大于0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">// 将最后一个节点的 next 指针指向头节点，形成循环</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 解决约瑟夫问题</span>
  <span class="token function">josephus</span><span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"循环链表为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token comment">// 找到起始位置的节点</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> prevNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//前一个节点指针</span>
	<span class="token comment">// 跳出条件：当前节点 next 指向自己，表示只剩下一个节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 循环计数器</span>
       <span class="token comment">// 数到 m，移除当前节点</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 删除当前节点</span>
          prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"出列人编号："</span> <span class="token operator">+</span> currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//移动前一个指针</span>
        prevNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
	  <span class="token comment">// 移动指针</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"剩余人编号："</span> <span class="token operator">+</span> currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span> <span class="token comment">// 总人数</span>
<span class="token keyword">const</span> k <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 起始位置</span>
<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 报数到 m</span>

<span class="token keyword">const</span> circularLinkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CircularLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
circularLinkedList<span class="token punctuation">.</span><span class="token function">createCircularList</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
circularLinkedList<span class="token punctuation">.</span><span class="token function">josephus</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="旋转链表" tabindex="-1"><a class="header-anchor" href="#旋转链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/linked-list/f00a2/" target="_blank" rel="noopener noreferrer">旋转链表<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>给你一个链表的头节点 <code v-pre>head</code> ，旋转链表，将链表每个节点向右移动 <code v-pre>k</code> 个位置.</p>
</li>
<li>
<p>示例：<img src="@source/images/旋转链表.png" alt="image-20231025211113920"></p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">2</span>
输出：<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><img src="@source/images/旋转链表2.png" alt="image-20231025211141705"></p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">4</span>
输出：<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>解法：<strong>闭合为环</strong></p>
<blockquote>
<ul>
<li>将链表进行闭合形成环：计算出链表的长度 n，并找到该链表的末尾节点，将其与头节点相连；</li>
<li>当向右移动的次数 k 时，我们仅需要向右移动 <code v-pre>k  mod  n</code> 次即可，即头节点旋转到原来的 <code v-pre>(n−1)−(k  mod  n)</code>  的位置； （因为每 n 次移动都会让链表变为原状。新链表的最后一个节点为原链表的第 <code v-pre>(n−1)−(k  mod  n)</code> 个节点（从 0 开始计数）)</li>
<li>找到新链表的最后一个节点（即原链表的第 <code v-pre>(n−1)−(k  mod  n)</code>个节点），将当前闭合为环的链表断开，即可得到我们所需要的结果。</li>
<li>特别地，当链表长度不大于 1，或者 k 为 n的倍数时，新链表将与原链表相同，我们无需进行任何处理。</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">rotateRight</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 循环次数为0，或为空节点，或只有一个节点，直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//计算链表长度，并将 cur 移动到末尾节点</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        n<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> add <span class="token operator">=</span> n <span class="token operator">-</span> k <span class="token operator">%</span> n<span class="token punctuation">;</span> <span class="token comment">// 计算旋转次数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>add <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 当 add === n 时，旋转次数刚好为链表长度的整数倍，此时相当于没有移动，直接返回</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// 链接首尾节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>add<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 找到尾节点位置： 旋转次数等于尾节点移动到原来的 add 的位置</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        add<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> ret <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 记录头节点： 尾节点的下一个节点为头节点</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 断开头尾节点链接</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span> <span class="token comment">// 返回头节点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h2 id="带环链表" tabindex="-1"><a class="header-anchor" href="#带环链表" aria-hidden="true">#</a> 带环链表</h2>
<h3 id="概念-3" tabindex="-1"><a class="header-anchor" href="#概念-3" aria-hidden="true">#</a> 概念</h3>
<ul>
<li>
<p>带环链表（Cyclic Linked List）是一种链表数据结构，其中链表中的一个或多个节点形成一个环，即链表的尾节点指向链表中的<strong>某个前面的节点，而不是指向空值</strong>（null）。</p>
<p><img src="@source/images/链表-带环链表.png" alt="image-20231023091552771"></p>
</li>
<li>
<p>带环链表具有以下特点：</p>
<ul>
<li><strong>存在环</strong>：带环链表至少有一个环，即链表中的某个节点的指针指向链表中的前面节点，形成一个环。</li>
<li><strong>无尽循环</strong>：由于有环存在，所以从头节点开始遍历带环链表时，永远不会到达链表的末尾，而是无限循环在环中。</li>
</ul>
</li>
<li>
<p>带环链表和循环链表区别：</p>
<ul>
<li>
<p>循环链表是一种特殊的链表，其中链表的尾节点指向链表的头节点，形成一个闭环。它的特点是最后一个节点的指针指向链表的头部，而不是指向空值。<strong>循环链表可以是有序的或无序的，但不一定存在环</strong>。</p>
</li>
<li>
<p>带环链表是一种链表，其中链表中的一个或多个节点形成一个环，即<strong>链表的尾节点指向链表中的某个前面的节点，而不是指向空值</strong>。<strong>带环链表一定存在环，且环的长度可以是任意的</strong>。</p>
</li>
<li>
<p>区别总结如下：</p>
<ul>
<li>循环链表可能存在环，也可能没有环，而带环链表一定存在环。</li>
<li>循环链表的尾节点指向链表的头节点形成闭环，而带环链表的尾节点指向链表中的某个前面的节点，形成环。</li>
<li>循环链表的环长度是固定的，即链表中的节点个数；而带环链表的环长度可以是任意的，环的位置和长度不固定。</li>
</ul>
<p>需要注意的是，术语的使用可能在不同的上下文中有所不同。有时候，循环链表和带环链表这两个术语也可以互换使用，但根据上述定义和常见的语义，循环链表和带环链表是有区别的</p>
</li>
</ul>
</li>
</ul>
<h3 id="判断链表中是否有环" tabindex="-1"><a class="header-anchor" href="#判断链表中是否有环" aria-hidden="true">#</a> 判断链表中是否有环</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>给你一个链表的头节点 head ，判断链表中是否有环。</li>
<li>如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。</li>
<li>为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。</li>
<li>注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。</li>
<li>如果链表中存在环 ，则返回 true 。 否则，返回 false 。</li>
</ul>
</blockquote>
</li>
<li>
<p>示例 1：</p>
<blockquote>
<p><img src="@source/images/链表-判断环.png" alt="img"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pos <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token boolean">true</span>
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>示例 2：</p>
<blockquote>
<p><img src="@source/images/链表-判断环2.png" alt="img"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pos <span class="token operator">=</span> <span class="token number">0</span>
输出：<span class="token boolean">true</span>
解释：链表中有一个环，其尾部连接到第一个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>示例 3：</p>
<blockquote>
<p><img src="@source/images/链表-判断环3.png" alt="img"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pos <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
输出：<span class="token boolean">false</span>
解释：链表中没有环。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>提示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>链表中节点的数目范围是 <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token punctuation">]</span>
<span class="token operator">-</span><span class="token number">105</span> <span class="token operator">&lt;=</span> Node<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> <span class="token number">105</span>
pos 为 <span class="token operator">-</span><span class="token number">1</span> 或者链表中的一个 有效索引 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>进阶：你能用 O(1)（即，常量）内存解决此问题吗？</p>
</li>
</ul>
<p>作者：LeetCode
链接：https://leetcode.cn/leetbook/read/linked-list/jbex5/
来源：力扣（LeetCode）</p>
</blockquote>
</li>
</ul>
<h4 id="哈希表法" tabindex="-1"><a class="header-anchor" href="#哈希表法" aria-hidden="true">#</a> 哈希表法</h4>
<ul>
<li>
<p>思路</p>
<blockquote>
<ul>
<li>
<p>遍历所有节点，每次遍历到一个节点时，判断该节点此前是否被访问过。</p>
</li>
<li>
<p>使用哈希表来存储所有已经访问过的节点。</p>
</li>
<li>
<p>每次我们到达一个节点，如果该节点已经存在于哈希表中，则说明该链表是环形链表，否则就将该节点加入哈希表中。</p>
</li>
<li>
<p>重复这一过程，直到我们遍历完整个链表即可。</p>
</li>
<li>
<p>时间复杂度：O(N)，其中 N 是链表中的节点数。最坏情况下我们需要遍历每个节点一次。</p>
<p>空间复杂度：O(N)，其中 N 是链表中的节点数。主要为哈希表的开销，最坏情况下我们需要将每个节点插入到哈希表中一次。</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">let</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> map<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建 Map 表</span>
   
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 不存在环时 head 为 null，存在时通过 return 终结</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 终止循环方式直接通过找到环终结</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将整个节点作为 Map 的 key值存入 map</span>
        head<span class="token operator">=</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
       
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="快慢指针法" tabindex="-1"><a class="header-anchor" href="#快慢指针法" aria-hidden="true">#</a> 快慢指针法</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>本方法需要读者对「Floyd 判圈算法」（又称龟兔赛跑算法）有所了解。</p>
<ul>
<li>假想「乌龟」和「兔子」在链表上移动，「兔子」跑得快，「乌龟」跑得慢。</li>
<li>当「乌龟」和「兔子」从链表上的同一个节点开始移动时，如果该链表中没有环，那么「兔子」将一直处于「乌龟」的前方；</li>
<li>如果该链表中有环，那么「兔子」会先于「乌龟」进入环，并且一直在环内移动。</li>
<li>等到「乌龟」进入环时，由于「兔子」的速度快，它一定会在某个时刻与乌龟相遇，即套了「乌龟」若干圈。
<ul>
<li><img src="@source/images/链表-环形判断-快慢指针.png" alt="image-20231023105654257"></li>
<li><img src="@source/images/链表-环形判断-快慢指针2.png" alt="image-20231023105713495"></li>
</ul>
</li>
</ul>
</li>
<li>
<p>我们可以根据上述思路来解决本题:</p>
<ul>
<li>
<p>具体地，我们定义两个指针，一快一慢。</p>
</li>
<li>
<p>慢指针每次只移动一步，而快指针每次移动两步。</p>
</li>
<li>
<p>初始时，慢指针在位置 head，而快指针在位置 head.next。</p>
</li>
<li>
<p>这样一来，如果在移动的过程中，快指针反过来追上慢指针，就说明该链表为环形链表。</p>
</li>
<li>
<p>否则快指针将到达链表尾部，该链表不为环形链表。</p>
<blockquote>
<p>为什么我们要规定初始时慢指针在位置 head，快指针在位置 head.next，而不是两个指针都在位置 head（即与「乌龟」和「兔子」中的叙述相同）？</p>
<ul>
<li>观察下面的代码，我们使用的是 while 循环，循环条件先于循环体。</li>
<li>由于循环条件一定是判断快慢指针是否重合，如果我们将两个指针初始都置于 head，那么 while 循环就不会执行。</li>
<li>因此，我们可以假想一个在 head 之前的虚拟节点，慢指针从虚拟节点移动一步到达 head，快指针从虚拟节点移动两步到达 head.next，这样我们就可以使用 while 循环了。</li>
</ul>
<p>当然，我们也可以使用 do-while 循环。此时，我们就可以把快慢指针的初始值都置为 head</p>
</blockquote>
</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 * 本方案采用双指针的方式，定义两指针slow，fast。
 * slow 每次移动一个节点，fast每次移动两个节点，
 * 如果链表存在环，则在某时刻slow与fast指针将重合，
 * 如果不存在环，则能正常遍历完成链表
 */</span>
<span class="token keyword">let</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span>
        fast <span class="token operator">=</span> head<span class="token punctuation">.</span>next
    	
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// 终止条件：快慢指针所指节点 next 指针都为空，表示不存在环</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 快慢指针相遇，表示存在环</span>
        slow<span class="token operator">=</span>slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fast<span class="token operator">=</span>fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="链表环的入口节点" tabindex="-1"><a class="header-anchor" href="#链表环的入口节点" aria-hidden="true">#</a> 链表环的入口节点</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>定一个链表的头节点  head ，返回链表开始入环的第一个节点。</p>
</li>
<li>
<p>如果链表无环，则返回 null。</p>
<ul>
<li>如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。</li>
<li>为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。</li>
<li>如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。</li>
</ul>
</li>
<li>
<p>不允许修改 链表。</p>
</li>
<li>
<p>示例 1：</p>
<blockquote>
<p><img src="@source/images/链表-判断环.png" alt="img"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pos <span class="token operator">=</span> <span class="token number">1</span>
输出：返回索引为 <span class="token number">1</span> 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>示例2：</p>
<blockquote>
<p><img src="@source/images/链表-判断环2.png" alt="img"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pos <span class="token operator">=</span> <span class="token number">0</span>
输出：返回索引为 <span class="token number">0</span> 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>示例3：</p>
<blockquote>
<p><img src="@source/images/链表-判断环3.png" alt="img"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pos <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
输出：返回 <span class="token keyword">null</span>
解释：链表中没有环。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>提示：</p>
<ul>
<li>链表中节点的数目范围在范围 [0, 104] 内</li>
<li>-105 &lt;= Node.val &lt;= 105</li>
<li>pos 的值为 -1 或者链表中的一个有效索引</li>
</ul>
</li>
<li>
<p>进阶：你是否可以使用 O(1) 空间解决此题？</p>
<p>作者：LeetCode
链接：https://leetcode.cn/leetbook/read/linked-list/jjhf6/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
</li>
</ul>
</blockquote>
</li>
</ul>
<h4 id="哈希表法-1" tabindex="-1"><a class="header-anchor" href="#哈希表法-1" aria-hidden="true">#</a> 哈希表法</h4>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>使用 hash 表存储已访问过的节点；</li>
<li>循环遍历链表：如果节点存在，直接返回该节点；</li>
<li>否则跳出循环表示没有环；</li>
</ul>
</blockquote>
</li>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">detectCycle2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> head<span class="token punctuation">,</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token string">"null"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="快慢指针法-1" tabindex="-1"><a class="header-anchor" href="#快慢指针法-1" aria-hidden="true">#</a> 快慢指针法</h4>
<ul>
<li>
<p>思路：参考 <a href="https://leetcode.cn/problems/linked-list-cycle-ii/solutions/441131/huan-xing-lian-biao-ii-by-leetcode-solution/" target="_blank" rel="noopener noreferrer">leetcode<ExternalLinkIcon/></a></p>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 慢指针移动一个</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 快指针移动两个</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 链表无环</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> ptr <span class="token operator">=</span> head<span class="token punctuation">;</span>
             <span class="token comment">//当 slow  与 fast  相遇时，指针 ptr。指向链表头部；随后，它和 slow 每次向后移动一个位置。最终，它们会在入环点相遇。</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>ptr <span class="token operator">!==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ptr <span class="token operator">=</span> ptr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="相交链表" tabindex="-1"><a class="header-anchor" href="#相交链表" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/linked-list/jjbj2/" target="_blank" rel="noopener noreferrer">相交链表<ExternalLinkIcon/></a></h2>
<ul>
<li>
<p>题目：（<a href="https://leetcode.cn/leetbook/read/linked-list/jjbj2/" target="_blank" rel="noopener noreferrer">题目来源 leetcode<ExternalLinkIcon/></a>)</p>
<blockquote>
<ul>
<li>给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。</li>
<li>如果两个链表不存在相交节点，返回 null 。
<ul>
<li>图示两个链表在节点 c1 开始相交：</li>
</ul>
</li>
</ul>
<p><img src="@source/images/链表-相交链表.png" alt="image-20231023171537334"></p>
<ul>
<li>
<p>题目数据 保证 整个链式结构中不存在环。</p>
</li>
<li>
<p>注意，函数返回结果后，链表必须 保持其原始结构</p>
</li>
</ul>
</blockquote>
</li>
</ul>
<h3 id="哈希表法-2" tabindex="-1"><a class="header-anchor" href="#哈希表法-2" aria-hidden="true">#</a> 哈希表法</h3>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>判断两个链表是否相交，可以使用哈希集合存储链表节点。</p>
</li>
<li>
<p>首先遍历链表 headA，并将链表 headA 中的每个节点加入哈希集合中。</p>
</li>
<li>
<p>然后遍历链表 headB，对于遍历到的每个节点，判断该节点是否在哈希集合中：</p>
<ul>
<li>如果当前节点不在哈希集合中，则继续遍历下一个节点；</li>
</ul>
<p>*如果当前节点在哈希集合中，则后面的节点都在哈希集合中，即从当前节点开始的所有节点都在两个链表的相交部分，因此在链表 headB 中遍历到的第一个在哈希集合中的节点就是两个链表相交的节点，返回该节点。</p>
</li>
<li>
<p>如果链表 headB 中的所有节点都不在哈希集合中，则两个链表不相交，返回 null。</p>
</li>
<li>
<p>时间复杂度：O(m+n)，其中 m 和 n 是分别是链表 headA 和 headB 的长度。需要遍历两个链表各一次。</p>
<p>空间复杂度：O(m)，其中 m 是链表 headA 的长度。需要使用哈希集合存储链表 headA 中的全部节点。</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> headA<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    temp <span class="token operator">=</span> headB<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="双指针法" tabindex="-1"><a class="header-anchor" href="#双指针法" aria-hidden="true">#</a> 双指针法</h3>
<ul>
<li>
<p>思想：</p>
<blockquote>
<ul>
<li>使用<strong>双指针的方法，可以将空间复杂度降至 O(1)</strong>。</li>
<li>只有当链表 headA 和 headB 都不为空时，两个链表才可能相交。</li>
<li>首先判断链表 headA 和 headB 是否为空，如果其中至少有一个链表为空，则两个链表一定不相交，返回 null。</li>
<li>当链表 headA和 headB 都不为空时，创建两个指针 pA 和 pB，初始时分别指向两个链表的头节点 headA 和 headB，然后将两个指针依次遍历两个链表的每个节点。具体做法如下：
<ul>
<li>每步操作需要同时更新指针 pA 和 pB。</li>
<li>如果指针 pA 不为空，则将指针 pA 移到下一个节点；</li>
<li>如果指针 pB 不为空，则将指针 pB 移到下一个节点。</li>
<li>如果指针 pA 为空，则将指针 pA 移到链表 headB 的头节点；</li>
<li>如果指针 pB 为空，则将指针 pB 移到链表 headA 的头节点。</li>
<li>当指针 pA和 pB 指向同一个节点或者都为空时，返回它们指向的节点或者 null。</li>
</ul>
</li>
<li>时间复杂度：O(m+n)，其中 m 和 n是分别是链表 headA 和 headB 的长度。两个指针同时遍历两个链表，每个指针遍历两个链表各一次。</li>
<li>空间复杂度：O(1)。</li>
<li>(核心思想是<strong>将两个链表用两个指针都遍历一遍，那么当遍历到相同长度时，两个指针一定会相遇，第一次相遇时即为相交节点)</strong></li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>headA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> headB <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> pA <span class="token operator">=</span> headA<span class="token punctuation">,</span> pB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>pA <span class="token operator">!==</span> pB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pA <span class="token operator">=</span> pA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headB <span class="token operator">:</span> pA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        pB <span class="token operator">=</span> pB <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headA <span class="token operator">:</span> pB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pA<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="题型归纳" tabindex="-1"><a class="header-anchor" href="#题型归纳" aria-hidden="true">#</a> 题型归纳</h2>
<h3 id="链表双指针法" tabindex="-1"><a class="header-anchor" href="#链表双指针法" aria-hidden="true">#</a> <a href="https://leetcode.cn/leetbook/read/linked-list/j6ywt/" target="_blank" rel="noopener noreferrer">链表双指针法<ExternalLinkIcon/></a></h3>
<h4 id="删除链表的倒数第-n-个结点" tabindex="-1"><a class="header-anchor" href="#删除链表的倒数第-n-个结点" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener noreferrer">删除链表的倒数第 N 个结点<ExternalLinkIcon/></a></h4>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>给你一个链表，删除链表的倒数第 <code v-pre>n</code> 个结点，并且返回链表的头结点。</li>
</ul>
<p><img src="@source/images/链表-删除链表第N个节点.png" alt="image-20231024093238169"></p>
<ul>
<li>
<p>示例：</p>
</li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">2</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span>
输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>提示：</p>
<blockquote>
<p>链表中结点的数目为 sz
1 &lt;= sz &lt;= 30
0 &lt;= Node.val &lt;= 100
1 &lt;= n &lt;= sz</p>
</blockquote>
</li>
<li>
<p>进阶：你能尝试使用一趟扫描实现吗？</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>方法一：<strong>计算链表长度</strong></p>
<blockquote>
<ul>
<li>
<p>首先从头节点开始对链表进行一次遍历，得到链表的长度 L。</p>
</li>
<li>
<p>随后我们再从头节点开始对链表进行一次遍历，当遍历到第  <code v-pre>L−n+1</code> 个节点时，它就是我们需要删除的节点。</p>
<ul>
<li>为了与题目中的 n 保持一致，节点的编号从 1 开始，头节点为编号 1 的节点。</li>
</ul>
</li>
<li>
<p>为了方便删除操作，我们可以从哑节点开始遍历 <code v-pre>L−n+1</code> 个节点。当遍历到第 <code v-pre>L−n+1</code> 个节点时，它的下一个节点就是我们需要删除的节点，这样我们只需要修改一次指针，就能完成删除操作。</p>
</li>
<li>
<p><img src="@source/images/链表-删除第N个节点-计算长度法.png" alt="image-20231024093929896"></p>
</li>
<li>
<p>时间复杂度：<em>O</em>(<em>L</em>)，其中 L 是链表的长度。</p>
</li>
<li>
<p>空间复杂度：<em>O</em>(1)。</p>
</li>
<li>
<p>注意：</p>
<ul>
<li>如果我们要删除节点 y，我们需要知道节点 y 的前驱节点 x，并将x 的指针指向y 的后继节点。</li>
<li>但<strong>由于头节点不存在前驱节点，因此我们需要在删除头节点时进行特殊判断</strong>。</li>
<li>但如果我们添加了哑节点（哑节点（dummy node），它的 next 指针指向链表的头节点），那么头节点的前驱节点就是哑节点本身，此时我们就只需要考虑通用的情况即可。</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curNode  <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token operator">++</span> len <span class="token punctuation">;</span>
       curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 注意：创建哑节点，链接头节点，用于避免头节点的判断</span>
    <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    curNode <span class="token operator">=</span> dummy<span class="token punctuation">;</span> <span class="token comment">// 从哑节点处开始遍历</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token operator">-</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>方法二：<strong>栈</strong></p>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>遍历链表，并将每个节点入栈；</li>
<li>遍历完成后，依次弹出栈顶元素，弹出的第 n 个元素即为要删除的节点，第 <code v-pre>n+1</code> 个元素即为被删除节点的前驱节点；</li>
<li>注意：由于删除头节点需要特殊判断，因此同样可以在链表头部添加哑节点，避免头节点的特殊判断；</li>
<li>时间复杂度 O(n)，空间复杂度 O(n)，n 为链表长度；</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建 dummy,用于避免删除头节点的特殊判断</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> dummy<span class="token punctuation">;</span><span class="token comment">//从 dummy 节点开始入栈，考虑删除头节点情况</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 出栈，直到节点 n</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        n<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    curNode <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取被删除节点的前驱节点</span>
    curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 删除节点</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 返回 dummy 节点的后继节点！</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>方法三：<strong>双指针法</strong></p>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>由于我们需要找到倒数第 n 个节点，因此我们可以使用两个指针 fast 和 slow 同时对链表进行遍历，并且 fast 超前 n 个节点。</p>
</li>
<li>
<p>当 fast 遍历到链表的末尾时，slow 就恰好处于倒数第 n 个节点。</p>
</li>
<li>
<p>由于删除链表的节点需要找到链表的前驱节点，因此需要遍历到倒数 n+1 个节点；</p>
</li>
<li>
<p>为了避免单独判断头节点的特殊情况，同样可以在链表头添加哑节点，并将 slow 指针指向哑节点，fast 指向头节点，那么当 fast 移动到链表末尾时，slow 刚好指向被删除节点的前驱节点。</p>
</li>
<li>
<p><img src="@source/images/链表-删除倒数N个节点-双指针法.png" alt="image-20231024104841699"></p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建哑节点，哑节点指向头部节点</span>
    <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> dummy<span class="token punctuation">;</span> <span class="token comment">// slow 节点指向哑节点</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// fast 前进 n 个节点</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        n<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 同时移动 slow 和 fast,直到 fast 指向链表尾部，此时 slow 刚好指向被删除节点的前驱节点</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">// 删除节点</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//返回 head 节点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</div></template>



<template><div><h1 id="栈和队列" tabindex="-1"><a class="header-anchor" href="#栈和队列" aria-hidden="true">#</a> 栈和队列</h1>
<p><img src="@source/images/线性表.png" alt="image-20210707155311589"></p>
<h2 id="栈-stack" tabindex="-1"><a class="header-anchor" href="#栈-stack" aria-hidden="true">#</a> 栈（Stack）</h2>
<ul>
<li>定义和特点
<ul>
<li>栈是一种线性数据结构，具有后进先出（LIFO）的特性。</li>
<li>可以类比为一叠盘子，只能从顶部放入和取出元素。</li>
<li>可以使用数组的<code v-pre>push()</code>和<code v-pre>pop()</code>方法来实现。</li>
</ul>
</li>
<li>基本操作
<ul>
<li>入栈（Push）：将元素放入栈顶。</li>
<li>出栈（Pop）：从栈顶移除元素，并返回移除的元素。</li>
<li>获取栈顶元素（Top）：返回栈顶的元素，并不移除该元素。</li>
<li>判断栈是否为空（isEmpty）：检查栈是否为空。</li>
</ul>
</li>
<li>应用场景
<ul>
<li>逆序输出、括号匹配、函数调用和递归等。</li>
</ul>
</li>
</ul>
<h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h2>
<ul>
<li>定义和特点
<ul>
<li>队列是一种线性数据结构，具有先进先出（FIFO）的特性。</li>
<li>可以类比为排队买票，先来的人先被服务。</li>
<li>可以使用数组的<code v-pre>push()</code>和<code v-pre>shift()</code>方法来实现。</li>
</ul>
</li>
<li>基本操作
<ul>
<li>入队（Enqueue）：将元素放入队列的末尾。</li>
<li>出队（Dequeue）：从队列的头部移除元素，并返回移除的元素。</li>
<li>获取队头元素（Front）：返回队列头部的元素，并不移除该元素。</li>
<li>判断队列是否为空（isEmpty）：检查队列是否为空。</li>
</ul>
</li>
</ul>
<h2 id="算法题" tabindex="-1"><a class="header-anchor" href="#算法题" aria-hidden="true">#</a> 算法题</h2>
<h3 id="用两个队列实现一个栈-简单" tabindex="-1"><a class="header-anchor" href="#用两个队列实现一个栈-简单" aria-hidden="true">#</a> 用两个队列实现一个栈（简单）</h3>
<ul>
<li>
<p>题目：用两个队列实现一个栈</p>
</li>
<li>
<p>思路</p>
<blockquote>
<ol>
<li>创建两个队列，分别命名为 <code v-pre>queue1</code> 和 <code v-pre>queue2</code>。</li>
<li>入栈操作：
<ul>
<li>将元素添加到非空的队列中（初始时选择其中一个队列）。</li>
<li>如果两个队列都为空，可以选择任意一个队列添加元素。</li>
</ul>
</li>
<li>出栈操作：
<ul>
<li>将非空队列中的元素逐个出队并入队到另一个空队列，直到队列中只剩下一个元素。</li>
<li>移除最后剩下的元素并返回，即为出栈的元素。</li>
</ul>
</li>
<li>获取栈顶元素操作：
<ul>
<li>同出栈操作，将非空队列中的元素逐个出队并入队到另一个空队列，直到队列中只剩下一个元素。</li>
<li>返回最后剩下的元素，即为栈顶元素。</li>
</ul>
</li>
</ol>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>queue2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue2<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> nonEmptyQueue<span class="token punctuation">,</span> emptyQueue<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nonEmptyQueue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue2<span class="token punctuation">;</span>
      emptyQueue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      nonEmptyQueue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">;</span>
      emptyQueue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>nonEmptyQueue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      emptyQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nonEmptyQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> nonEmptyQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue2<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> nonEmptyQueue<span class="token punctuation">,</span> emptyQueue<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nonEmptyQueue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue2<span class="token punctuation">;</span>
      emptyQueue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      nonEmptyQueue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">;</span>
      emptyQueue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>nonEmptyQueue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      emptyQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nonEmptyQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> topElement <span class="token operator">=</span> nonEmptyQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    emptyQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>topElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> topElement<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue2<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="两个栈来实现一个队列-简单" tabindex="-1"><a class="header-anchor" href="#两个栈来实现一个队列-简单" aria-hidden="true">#</a> 两个栈来实现一个队列（简单）</h3>
<ul>
<li>
<p>题目：两个栈来实现一个队列</p>
</li>
<li>
<p>思路：</p>
<blockquote>
<ol>
<li>创建两个栈，分别命名为 <code v-pre>stack1</code> 和 <code v-pre>stack2</code>。</li>
<li>入队操作：
<ul>
<li>将元素压入 <code v-pre>stack1</code> 栈中。</li>
</ul>
</li>
<li>出队操作：
<ul>
<li>如果 <code v-pre>stack2</code> 不为空，直接从 <code v-pre>stack2</code> 栈顶弹出元素并返回。</li>
<li>如果 <code v-pre>stack2</code> 为空，将 <code v-pre>stack1</code> 中的元素逐个弹出并压入 <code v-pre>stack2</code>，然后从 <code v-pre>stack2</code> 栈顶弹出元素并返回。</li>
</ul>
</li>
<li>获取队头元素操作：
<ul>
<li>如果 <code v-pre>stack2</code> 不为空，返回 <code v-pre>stack2</code> 栈顶元素。</li>
<li>如果 <code v-pre>stack2</code> 为空，将 <code v-pre>stack1</code> 中的元素逐个弹出并压入 <code v-pre>stack2</code>，然后返回 <code v-pre>stack2</code> 栈顶元素。</li>
</ul>
</li>
</ol>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack2<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack2<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack2<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack2<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="包含min函数的栈-简单" tabindex="-1"><a class="header-anchor" href="#包含min函数的栈-简单" aria-hidden="true">#</a> 包含min函数的栈（简单）</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。</p>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>题意理解：min 函数能够获取栈中最小元素，在栈进行入栈和出栈操作后，都能获取当前栈最小元素；</p>
<ol>
<li>
<p>创建两个栈，一个称为 <code v-pre>dataStack</code> 存储数据元素，另一个称为 <code v-pre>minStack</code> 存储最小元素。</p>
</li>
<li>
<p>入栈操作：</p>
<ul>
<li>将元素压入 <code v-pre>dataStack</code> 栈中。</li>
<li>如果 <code v-pre>minStack</code> 为空，或者新入栈的元素小于等于 <code v-pre>minStack</code> 栈顶元素，则将新元素也压入 <code v-pre>minStack</code> 栈中。</li>
</ul>
</li>
<li>
<p>出栈操作：</p>
<ul>
<li>从 <code v-pre>dataStack</code> 栈顶弹出元素，并将其返回。</li>
<li>如果弹出的元素等于 <code v-pre>minStack</code> 栈顶元素，则也从 <code v-pre>minStack</code> 栈顶弹出元素。</li>
</ul>
</li>
<li>
<p>获取栈中最小元素操作：</p>
<ul>
<li>直接返回 <code v-pre>minStack</code> 栈顶元素，即为栈中的最小元素。</li>
</ul>
</li>
<li>
<p>以数据[3,4,2,7,9,0]为例，让这组数字依次如栈，则栈和其对应的最小值栈如下：</p>
<p><img src="@source/images/mainstack.png" alt="foo"></p>
</li>
</ol>
</blockquote>
</li>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MinStack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储数据元素的栈</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>minStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储最小元素的栈</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>minStack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span>  element <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> poppedElement <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>poppedElement <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> poppedElement<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>minStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2</span>
stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="栈的压入、弹出序列-简单" tabindex="-1"><a class="header-anchor" href="#栈的压入、弹出序列-简单" aria-hidden="true">#</a> 栈的压入、弹出序列（简单）</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列<code v-pre>1,2,3,4,5</code>是某栈的压入顺序，序列<code v-pre>4,5,3,2,1</code>是该压栈序列对应的一个弹出序列，但<code v-pre>4,3,5,1,2</code>就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）</p>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<p>题意理解：</p>
<ul>
<li>栈的弹出顺序并是指在栈的压入过程中，任意一次压入时再弹出，记录的弹出的顺序；</li>
<li>题中只要求判断第二个栈是否为第一个栈的可能弹出顺序，并未要求列出弹出顺序，第一个栈的弹出顺序有很多种；</li>
</ul>
<p>解题思路：</p>
<ul>
<li>使用辅助栈和模拟的方法来解决：
<ol>
<li>初始化一个辅助栈和一个指针 <code v-pre>pushIndex</code>，<code v-pre>pushIndex</code>指向辅助栈，初始时 <code v-pre>pushIndex</code> 的值为 0，既辅助栈为空。</li>
<li>遍历弹出序列，依次取出每一个元素：
<ul>
<li>如果辅助栈的栈顶元素（起始辅助栈为空）不等于当前弹出序列的元素，表示还需要继续压栈，将压栈序列中 <code v-pre>pushIndex</code> 之前的元素依次压入辅助栈，直到找到与当前弹出序列元素相等的元素为止。</li>
<li>如果辅助栈的栈顶元素等于当前弹出序列的元素，表示可以直接弹出，将栈顶元素弹出，然后继续遍历下一个弹出序列元素。</li>
</ul>
</li>
<li>如果弹出序列遍历完成后，辅助栈为空，表示该弹出序列是可能的，否则不可能。</li>
</ol>
</li>
</ul>
<p>举例：<img src="@source/images/栈的压入弹出序列.png" alt="foo"></p>
<ul>
<li>例如序列<code v-pre>1,2,3,4,5</code>是某栈的压入顺序，序列<code v-pre>4,5,3,2,1</code>是该压栈序列对应的一个弹出序列，判断过程如下：
<ul>
<li>起始辅助栈为空，弹出序列第一个元素为 4，序列 <code v-pre>1,2,3</code>,入栈，每次栈顶元素不等于 4，继续入栈直到 4 入辅助栈顶，此时辅助栈为：<code v-pre>1,2,3,4</code>；</li>
<li>栈顶 4 等于辅助栈栈顶 4，辅助栈 4 出栈，记录出栈数字 4，弹出序列下移动一个；</li>
<li>此时弹出栈栈顶为 3，弹出序列为 5，不相等，辅助栈继续将剩余元素 5 入栈；</li>
<li>此时辅助栈栈顶元素 5 等于 弹出序列当前指针指向元素 5， 辅助栈出栈 5，弹出序列下移动一个；</li>
<li>此时辅助栈剩余元素与弹出序列剩余元素顺序相同，辅助栈出栈，弹出序列下移动；直到辅助栈为空并且没有需要入栈的元素，则序列<code v-pre>4,5,3,2,1</code>是该压栈序列对应的一个弹出序列。</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isPopOrder</span><span class="token punctuation">(</span><span class="token parameter">pushSequence<span class="token punctuation">,</span> popSequence</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pushSequence<span class="token punctuation">.</span>length <span class="token operator">!==</span> popSequence<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> pushIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//指向栈序列</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> popSequence<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//遍历弹出序列</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> popSequence<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//获取弹出序列第一个元素</span>
	<span class="token comment">// 栈为空或栈顶元素不等于弹出序列</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pushIndex <span class="token operator">>=</span> pushSequence<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//栈指针超出序列，退出</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pushSequence<span class="token punctuation">[</span>pushIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 入栈序列元素入栈</span>
      pushIndex<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 栈顶元素等于弹出序列顶部元素，栈顶出栈</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPopOrder</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPopOrder</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="有效括号序列-简单" tabindex="-1"><a class="header-anchor" href="#有效括号序列-简单" aria-hidden="true">#</a> 有效括号序列（简单）</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
括号必须以正确的顺序关闭，&quot;()&quot;和&quot;()[]{}&quot;都是合法的括号序列，但&quot;(]&quot;和&quot;([)]&quot;不合法。</p>
<p>数据范围：字符串长度 0≤n≤10000</p>
<p>要求：空间复杂度O*(<em>n</em>)，时间复杂度 O*(<em>n</em>)</p>
</blockquote>
</li>
<li>
<p>思路一：</p>
<blockquote>
<p>解题思路：</p>
<ol>
<li>创建一个空栈。</li>
<li>遍历输入的字符串，对于每个字符：
<ul>
<li>如果是左括号（'(', '{', '['），将其推入栈中。</li>
<li>如果是右括号（')', '}', ']'），检查栈是否为空：
<ul>
<li>如果栈为空，说明右括号多于左括号，返回 false。</li>
<li>如果栈不为空，将栈顶元素出栈，并与当前右括号进行匹配：
<ul>
<li>如果匹配成功，继续遍历下一个字符。</li>
<li>如果匹配失败，返回 false。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>遍历完字符串后，检查栈是否为空：
<ul>
<li>如果栈为空，说明所有括号都匹配成功，返回 true。</li>
<li>如果栈不为空，说明左括号多于右括号，返回 false。</li>
<li><img src="@source/images/栈-括号匹配.png" alt="img"></li>
</ul>
</li>
</ol>
</blockquote>
<ul>
<li>
<p>代码一：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isValidParentheses</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token operator">||</span> s<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">10000</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 创建空栈</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> char <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">'('</span> <span class="token operator">||</span> char <span class="token operator">===</span> <span class="token string">'{'</span> <span class="token operator">||</span> char <span class="token operator">===</span> <span class="token string">'['</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左括号入栈</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 右括号多于左括号，返回 false</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> top <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 弹出栈顶元素</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">')'</span> <span class="token operator">&amp;&amp;</span> top <span class="token operator">!==</span> <span class="token string">'('</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">'}'</span> <span class="token operator">&amp;&amp;</span> top <span class="token operator">!==</span> <span class="token string">'{'</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">']'</span> <span class="token operator">&amp;&amp;</span> top <span class="token operator">!==</span> <span class="token string">'['</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 括号不匹配，返回 false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 栈为空则括号匹配成功，返回 true，否则返回 false</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isValid</span><span class="token operator">:</span> isValidParentheses<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>代码二：使用栈和 map 代替 if 判断</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">s</span> string字符串 
  * <span class="token keyword">@return</span> bool布尔型
  */</span>
<span class="token keyword">function</span> <span class="token function">isValid</span><span class="token punctuation">(</span> <span class="token parameter">s</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> pair <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'{'</span><span class="token operator">:</span> <span class="token string">'}'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'('</span><span class="token operator">:</span> <span class="token string">')'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'['</span><span class="token operator">:</span> <span class="token string">']'</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pair<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 左括号入栈</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pair<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 匹配到右括号，栈顶元素是否与当前括号不匹配，返回false</span>
    <span class="token keyword">else</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 匹配到右括号，栈顶元素是否与当前括号匹配，栈顶出栈</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isValid</span> <span class="token operator">:</span> isValid
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>思路二：</p>
<blockquote>
<ul>
<li>分析：题目中仅包含字符串，如果是合法字符串，那么括号内部一定有一个正确的左右括号，因此可以使用正则匹配，将最中心的左右括号去除，剩余的括号依然可以组成合法的左右括号的话，那么就可以继续正则去除；</li>
<li>注意：
<ul>
<li>该代码的思路是通过不断替换括号对来判断合法性，但并没有使用栈这种数据结构。</li>
<li>相比使用栈的方法，该方法的时间复杂度较高，因为每次替换都需要遍历整个字符串。</li>
<li>同时，该方法也无法处理括号嵌套的情况，例如 &quot;(())&quot; 是合法的括号序列，但该方法无法正确判断。</li>
<li>因此，建议使用栈的方法来解决该题目。</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// write code here</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"()"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"[]"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
     
    <span class="token keyword">return</span> s <span class="token operator">===</span> <span class="token string">''</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isValid</span><span class="token operator">:</span> isValid<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="数制转换-简单" tabindex="-1"><a class="header-anchor" href="#数制转换-简单" aria-hidden="true">#</a> 数制转换（简单）</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>编写一个函数，实现十进制数转换任意进制数</p>
</blockquote>
</li>
<li>
<p>解法一：使用队列：</p>
<blockquote>
<ol>
<li>
<p>定义一个队列，用于存储转换后的数字的每一位。</p>
</li>
<li>
<p>定义一个变量 <code v-pre>num</code>，用于保存待转换的十进制数。</p>
</li>
<li>
<p>定义一个变量 <code v-pre>base</code>，表示目标进制数。</p>
</li>
<li>
<p>进入循环，直到 num 等于 0：</p>
<ul>
<li>求余数：将 <code v-pre>num</code> 对 <code v-pre>base</code> 取余，得到当前位的数字。</li>
<li>将余数入队：将余数入队，表示当前位的数字。</li>
<li>更新 <code v-pre>num</code>：将 <code v-pre>num</code> 除以 <code v-pre>base</code>，向下取整，更新 <code v-pre>num</code> 的值。</li>
</ul>
</li>
<li>
<p>循环结束后，队列中的每个元素就是转换后的数字的每一位。</p>
</li>
<li>
<p>弹出队列元素：从队列中依次弹出元素，组成转换后的数值。</p>
</li>
<li>
<p>返回转换后的数值。</p>
<p><img src="@source/images/十进制转换.png" alt="image-20231022192440469"></p>
<p><img src="@source/images/十进制转二进制.png" alt="image-20231022192515305"></p>
</li>
</ol>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * params <span class="token punctuation">{</span><span class="token punctuation">}</span> decimal 十进制数
 * params <span class="token punctuation">{</span><span class="token punctuation">}</span> base 转换进制
**/</span>
<span class="token keyword">function</span> <span class="token function">decimalToBase</span><span class="token punctuation">(</span><span class="token parameter">decimal<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> decimal<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 商结果为0，出队列</span>
    queue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> remainder <span class="token operator">=</span> num <span class="token operator">%</span> base<span class="token punctuation">;</span> <span class="token comment">// 取模获得余数</span>
    queue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>remainder<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 余数入队列</span>
    num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> base<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 除法获得商</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> queue<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> decimalNumber <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// 十进制数</span>
<span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 目标进制数</span>

<span class="token keyword">const</span> convertedNumber <span class="token operator">=</span> <span class="token function">decimalToBase</span><span class="token punctuation">(</span>decimalNumber<span class="token punctuation">,</span> base<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>convertedNumber<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: "1111011"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法二：使用数组</p>
<blockquote>
<ul>
<li>定义一个空字符串或数组，用于存储转换后的结果。</li>
<li>使用循环，将输入的十进制数不断除以目标进制数，直到商为 0。</li>
<li>在每一次循环中，将当前的余数添加到结果中，并将商更新为上一步的商。</li>
<li>当商为 0 时，循环结束。</li>
<li>将结果反转，得到最终转换后的任意进制数。</li>
<li></li>
</ul>
</blockquote>
<ul>
<li>代码：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * params <span class="token punctuation">{</span><span class="token punctuation">}</span> decimal 十进制数
 * params <span class="token punctuation">{</span><span class="token punctuation">}</span> base 转换进制
**/</span>
<span class="token keyword">function</span> <span class="token function">decimalToArbitraryBase</span><span class="token punctuation">(</span><span class="token parameter">decimal<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>decimal <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"0"</span><span class="token punctuation">;</span> <span class="token comment">// 十进制数为 0，则结果为 "0"</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> digits <span class="token operator">=</span> <span class="token string">"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span><span class="token punctuation">;</span> <span class="token comment">// 可用的数字字符</span>

  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> quotient <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>decimal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取绝对值，以处理负数的情况</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>quotient <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> remainder <span class="token operator">=</span> quotient <span class="token operator">%</span> base<span class="token punctuation">;</span> <span class="token comment">// 取模获取当前的余数</span>
    result <span class="token operator">=</span> digits<span class="token punctuation">[</span>remainder<span class="token punctuation">]</span> <span class="token operator">+</span> result<span class="token punctuation">;</span> <span class="token comment">// 根据余数获取数字，并拼接结果</span>
    quotient <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>quotient <span class="token operator">/</span> base<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取商：更新商为上一步的商</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> decimal <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">"-"</span> <span class="token operator">+</span> result <span class="token operator">:</span> result<span class="token punctuation">;</span> <span class="token comment">// 处理负数的情况</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> decimal <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// 十进制数</span>
<span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span> <span class="token comment">// 目标进制数</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">decimalToArbitraryBase</span><span class="token punctuation">(</span>decimal<span class="token punctuation">,</span> base<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: "7B"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="表达式求值-中等" tabindex="-1"><a class="header-anchor" href="#表达式求值-中等" aria-hidden="true">#</a> 表达式求值（中等）</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>请写一个整数计算器，支持加减乘三种运算和括号。</p>
<p>数据范围：0≤∣s∣≤100，保证计算结果始终在整型范围内</p>
<p>要求：空间复杂度：O*(*n)，时间复杂度O(n)</p>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<ol>
<li>
<p>对于上述两个要求，我们要考虑的是两点，一是处理运算优先级的问题，二是处理括号的问题。</p>
<p>处理优先级问题，那必定是乘号有着优先运算的权利，加号减号先一边看，我们甚至可以把减号看成加一个数的相反数，则这里只有乘法和加法，那我们优先处理乘法，遇到乘法，把前一个数和后一个数乘起来，遇到加法就把这些数字都暂时存起来，最后乘法处理完了，就剩余加法，把之前存起来的数字都相加就好了。</p>
<p>处理括号的问题，我们可以将括号中的部分看成一个新的表达式，即一个子问题，因此可以将新的表达式递归地求解，得到一个数字，再运算：</p>
<ul>
<li><strong>终止条件：</strong> 每次遇到左括号意味着进入括号子问题进行计算，那么遇到右括号代表这个递归结束。</li>
<li><strong>返回值：</strong> 将括号内部的计算结果值返回。</li>
<li><strong>本级任务：</strong> 遍历括号里面的字符，进行计算。</li>
</ul>
<p><strong>具体做法：</strong></p>
<ul>
<li>step 1：使用栈辅助处理优先级，默认符号为加号。</li>
<li>step 2：遍历字符串，遇到数字，则将连续的数字字符部分转化为int型数字。</li>
<li>step 3：遇到左括号，则将括号后的部分送入递归，处理子问题；遇到右括号代表已经到了这个子问题的结尾，结束继续遍历字符串，将子问题的加法部分相加为一个数字，返回。</li>
<li>step 4：当遇到符号的时候如果是+，得到的数字正常入栈，如果是-，则将其相反数入栈，如果是*，则将栈中内容弹出与后一个元素相乘再入栈。</li>
<li>step 5：最后将栈中剩余的所有元素，进行一次全部相加。</li>
</ul>
</li>
</ol>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** 
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * <span class="token keyword">@param</span> <span class="token parameter">s</span> string字符串 待计算的表达式
 * <span class="token keyword">@return</span> int整型
 */</span>
<span class="token keyword">function</span> <span class="token function">solve</span><span class="token punctuation">(</span> <span class="token parameter">s</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//递归会出现深浅拷贝的问题，每次重新调用所有同名变量将改变</span>
    <span class="token comment">// write code here</span>
    <span class="token keyword">let</span> stack<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//辅助栈，记录数字和乘法计算结果</span>
    <span class="token keyword">let</span> sign<span class="token operator">=</span><span class="token string">'+'</span><span class="token punctuation">;</span> <span class="token comment">// 符号记录</span>
    <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 遍历下标</span>
    <span class="token keyword">let</span> num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录遍历到的数字</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 遍历字符串</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">'('</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 遇到左括号，遍历查找该左括号对应的右括号</span>
            <span class="token keyword">let</span> flag<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// flag 用于查找当前左括号对应的右括号</span>
            <span class="token keyword">let</span> star<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//记录左括号内部字符串的开始下标</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>flag<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 查找当前左括号对应的右括号, 当 flag == 0 表示找到</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">'('</span><span class="token punctuation">)</span><span class="token punctuation">{</span>flag<span class="token operator">++</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token string">')'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>flag<span class="token operator">--</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> end<span class="token operator">=</span>i<span class="token punctuation">;</span> <span class="token comment">// end 表示左括号对应的右括号下标，括号内为一个子表达式</span>
            <span class="token keyword">let</span> arr<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>star<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 截取子表达式子串</span>
            num<span class="token operator">=</span><span class="token function">solve</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归计算子表达式</span>
            i<span class="token operator">=</span>end<span class="token punctuation">;</span> <span class="token comment">// 子表达式后一个下表开始重新遍历</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">>=</span><span class="token string">'0'</span><span class="token operator">&amp;&amp;</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;=</span><span class="token string">'9'</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 遍历字符串，遇到数字，则将连续的数字字符部分转化为int型数字。</span>
            num<span class="token operator">=</span>num<span class="token operator">*</span><span class="token number">10</span><span class="token operator">+</span><span class="token function">Number</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token string">'0'</span><span class="token operator">||</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">></span><span class="token string">'9'</span><span class="token operator">||</span>i<span class="token operator">==</span>s<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 遇到非数字，则计算后入栈</span>
          
            <span class="token keyword">if</span><span class="token punctuation">(</span>sign<span class="token operator">==</span><span class="token string">'+'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">// 遇到加号直接入栈</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>sign<span class="token operator">==</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">// 减法，则将数字转化为负数入栈</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>sign<span class="token operator">==</span><span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">// 乘法，将栈顶元素和当前数字相乘后入栈</span>
            sign<span class="token operator">=</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 记录当前计算符号</span>
            num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 重置数字记录</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 指针后移</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 将栈内剩余元素全部累加</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">solve</span> <span class="token operator">:</span> solve
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="滑动窗口最大值-双端队列-较难" tabindex="-1"><a class="header-anchor" href="#滑动窗口最大值-双端队列-较难" aria-hidden="true">#</a> 滑动窗口最大值 (双端队列)（较难）</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口 k 内的数字。滑动窗口每次只向右移动一位。 返回滑动窗口最大值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 和 k <span class="token operator">=</span> <span class="token number">3</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span> 
<span class="token literal-property property">解释</span><span class="token operator">:</span> 
  滑动窗口的位置                最大值
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>               <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token punctuation">[</span><span class="token number">1</span>  <span class="token number">3</span>  <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span><span class="token number">3</span>  <span class="token number">5</span>  <span class="token number">3</span>  <span class="token number">6</span>  <span class="token number">7</span>       <span class="token number">3</span>
 <span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">3</span>  <span class="token operator">-</span><span class="token number">1</span>  <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">5</span>  <span class="token number">3</span>  <span class="token number">6</span>  <span class="token number">7</span>       <span class="token number">3</span>
 <span class="token number">1</span>  <span class="token number">3</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span>  <span class="token operator">-</span><span class="token number">3</span>  <span class="token number">5</span><span class="token punctuation">]</span> <span class="token number">3</span>  <span class="token number">6</span>  <span class="token number">7</span>       <span class="token number">5</span>
 <span class="token number">1</span>  <span class="token number">3</span>  <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span>  <span class="token number">5</span>  <span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">6</span>  <span class="token number">7</span>       <span class="token number">5</span>
 <span class="token number">1</span>  <span class="token number">3</span>  <span class="token operator">-</span><span class="token number">1</span>  <span class="token operator">-</span><span class="token number">3</span> <span class="token punctuation">[</span><span class="token number">5</span>  <span class="token number">3</span>  <span class="token number">6</span><span class="token punctuation">]</span> <span class="token number">7</span>       <span class="token number">6</span>
 <span class="token number">1</span>  <span class="token number">3</span>  <span class="token operator">-</span><span class="token number">1</span>  <span class="token operator">-</span><span class="token number">3</span>  <span class="token number">5</span> <span class="token punctuation">[</span><span class="token number">3</span>  <span class="token number">6</span>  <span class="token number">7</span><span class="token punctuation">]</span>      <span class="token number">7</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<ol>
<li>
<p>创建一个双向队列（deque）来保存滑动窗口中的元素索引。队列会按照元素大小的降序排列，即队首元素为当前滑动窗口的最大值。(注意：队列保存的是滑动窗口的元素索引，但是队列内索引对应元素是降序排序的)</p>
</li>
<li>
<p>遍历数组 nums，对于每个元素 nums[i]：</p>
<ul>
<li>在插入元素之前，首先检查队首元素是否已经超出滑动窗口的范围（索引范围超过 i-k）。</li>
<li>如果队首元素过期，则从队列中删除它，保证队列中的元素都在滑动窗口范围内。</li>
<li>然后，将当前元素 nums[i] 与队列中的元素进行比较：
<ul>
<li>从队列的尾部开始，如果尾部元素小于等于当前元素 nums[i]，则将尾部元素从队列中移除。重复此过程直到队列为空或者队列的尾部元素大于当前元素。</li>
<li>将当前元素的索引插入到队列的尾部。</li>
</ul>
</li>
<li>检查当前索引 i 是否已经达到滑动窗口的大小 k。如果是，则滑动窗口形成，此时队首元素即为当前窗口的最大值。</li>
</ul>
</li>
<li>
<p>将滑动窗口的最大值保存在结果数组中。</p>
</li>
<li>
<p>返回结果数组。</p>
<p><img src="@source/images/滑动窗口的最大值.png" alt="foo"></p>
<p>时间复杂度：<code v-pre>O(n)</code></p>
<p>空间复杂度：<code v-pre>O(n)</code></p>
<ul>
<li>使用优先队列也可以实现，时间复杂度为<code v-pre>O(nlogk)</code></li>
</ul>
</li>
</ol>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxSlidingWindow</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> deque <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 双向队列</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 检查队首元素是否超出滑动窗口的范围</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> i <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      deque<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 与队列中的元素进行比较，保持队列中的元素有序</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>deque<span class="token punctuation">[</span>deque<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将当前元素的索引插入到队列的尾部</span>

    <span class="token comment">// 检查当前索引是否已经达到滑动窗口的大小 k</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">>=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 队首元素即为当前窗口的最大值</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="迷宫求解-教难" tabindex="-1"><a class="header-anchor" href="#迷宫求解-教难" aria-hidden="true">#</a> 迷宫求解（教难）</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>给定一个<code v-pre>M * N </code>的迷宫图，求一条从指定入口到出口的迷宫路径。</p>
<ul>
<li>假设一个迷宫图如图所示(这里M=8,N=8),其中的每个方块用空白表示通道，用蓝色阴影表示障碍物。</li>
<li>一般情况下,所求迷宫路径是简单路径，即在求得的迷宫路径上不会重复出现同一方块。</li>
<li>一个迷官图的迷宫路径可能有多条，这些迷宫路径有长有短，</li>
<li>这里仅仅考虑用栈求一条从指定入口到出口的迷宫路径。</li>
</ul>
<p><img src="@source/images/栈-迷宫.png" alt="img"></p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<ol>
<li>
<p>定义一个栈，用于<strong>存储当前的路径</strong>。</p>
</li>
<li>
<p>定义一个二维数组或矩阵来表示迷宫图，其中空白方块表示通道，蓝色阴影方块表示障碍物。</p>
</li>
<li>
<p>定义一个二维数组或矩阵来标记已经访问过的方块，初始化为全部为 false。</p>
</li>
<li>
<p>定义一个对象或元组来表示入口坐标，将入口坐标压入栈中。</p>
</li>
<li>
<p>进入循环，直到栈为空或找到出口坐标：</p>
<ul>
<li>弹出栈顶元素，表示当前所在位置。</li>
<li>如果当前位置是出口坐标，表示找到了一条路径，循环结束。</li>
<li>否则，标记当前位置为已访问，并根据当前位置的四个相邻方块（上、下、左、右）进行判断：
<ul>
<li>如果<strong>相邻方块是通道且未访问过</strong>，将其坐标压入栈中。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>如果栈为空，表示没有找到从入口到出口的路径；否则，栈中的元素就是路径的顺序，可以按照栈中元素的顺序输出路径。</p>
<p><img src="@source/images/迷宫求解.gif" alt="img"></p>
</li>
</ol>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//`maze` 代表迷宫图的二维数组，`start` 代表入口坐标的数组 `[row, col]`，`end` 代表出口坐标的数组 `[row, col]`。</span>
<span class="token keyword">function</span> <span class="token function">findMazePath</span><span class="token punctuation">(</span><span class="token parameter">maze<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//用于存储当前的路径</span>
  <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//`visited`，用于标记已经访问过的方块</span>
  <span class="token keyword">const</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 上下左右四个方向,用于在迷宫中移动</span>

  <span class="token comment">// 初始化 visited 数组，全部置为 false</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> maze<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> maze<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 入口坐标入栈</span>
  <span class="token comment">// 循环查找栈内位置四个方便，直到栈内元素为空</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//弹出栈顶元素，表示当前所在位置</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> end<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> end<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 找到出口坐标，返回路径</span>
      <span class="token keyword">return</span> stack<span class="token punctuation">.</span>items<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 标记当前位置已经访问过</span>
    visited<span class="token punctuation">[</span>current<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>current<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token comment">// 按照上下左右依次访问四个方向位置</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> direction <span class="token keyword">of</span> directions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newRow <span class="token operator">=</span> current<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> direction<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> newCol <span class="token operator">=</span> current<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> direction<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	 <span class="token comment">//相邻方块是通道且未访问过，将其坐标压入栈中</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValidMove</span><span class="token punctuation">(</span>maze<span class="token punctuation">,</span> newRow<span class="token punctuation">,</span> newCol<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>visited<span class="token punctuation">[</span>newRow<span class="token punctuation">]</span><span class="token punctuation">[</span>newCol<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>newRow<span class="token punctuation">,</span> newCol<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 栈为空，表示没有找到路径</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isValidMove</span><span class="token punctuation">(</span><span class="token parameter">maze<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> numRows <span class="token operator">=</span> maze<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> numCols <span class="token operator">=</span> maze<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">return</span> row <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> row <span class="token operator">&lt;</span> numRows <span class="token operator">&amp;&amp;</span> col <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> col <span class="token operator">&lt;</span> numCols <span class="token operator">&amp;&amp;</span> maze<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">" "</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法</span>
<span class="token keyword">const</span> maze <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 入口坐标</span>
<span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 出口坐标</span>

<span class="token doc-comment comment">/**
路径的函数是 `findMazePath`，它接受三个参数：`maze` 代表迷宫图的二维数组，`start` 代表入口坐标的数组 `[row, col]`，`end` 代表出口坐标的数组 `[row, col]`。

首先，我们定义一个栈 `stack`，用于存储当前的路径。我们还定义了一个二维数组 `visited`，用于标记已经访问过的方块。`directions` 是一个表示四个方向的数组，用于在迷宫中移动。

接下来，我们初始化 `visited` 数组，将其全部置为 `false`。

然后，将入口坐标 `start` 压入栈中。

在循环中，我们不断弹出栈顶元素，表示当前所在位置。如果当前位置是出口坐标 `end`，则表示找到了一条路径，循环结束，我们返回栈中的元素，即路径的顺序。

否则，我们将当前位置标记为已访问，并根据四个方向进行判断。对于每个方向，我们计算出相邻方块的坐标，如果该方块是通道且未访问过，则将其坐标压入栈中。

如果循环结束，栈为空，表示没有找到路径，我们返回 `null`。

示例用法展示了如何使用以上代码来找到从入口 `[0, 0]` 到出口 `[7, 7]` 的迷宫路径。
请注意，这只是一种基于栈的解法，可能存在多条从入口到出口的路径，该解法只返回其中一条路径。如果需要找到所有路径，可以使用递归或其他搜索算法。
**/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>



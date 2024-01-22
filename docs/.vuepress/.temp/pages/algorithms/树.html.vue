<template><div><h1 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h1>
<p><img src="@source/images/数据结构-树.png" alt="image-20231022171502467"></p>
<h2 id="树结构" tabindex="-1"><a class="header-anchor" href="#树结构" aria-hidden="true">#</a> 树结构</h2>
<p>不同于我们上面介绍的线性结构，树是一种非线性结构。</p>
<p>图：</p>
<p><img src="@source/images/tree.png" alt="图片"></p>
<p>它遵循：</p>
<ul>
<li>仅有唯一一个根节点，没有节点则为空树</li>
<li>除根节点外，每个节点都有并仅有唯一一个父节点</li>
<li>节点间不能形成闭环</li>
</ul>
<p>这就是树！</p>
<p>树有几个概念：</p>
<ul>
<li>拥有相同父节点的节点，互称为兄弟节点</li>
<li><strong>节点的深度</strong> ：从根节点到该节点所经历的边的个数</li>
<li><strong>节点的高度</strong> ：节点到叶节点的最长路径</li>
<li>树的高度：根节点的高度</li>
</ul>
<p><img src="@source/images/tree2.png" alt="图片"></p>
<p>B、C、D就互称为兄弟节点，其中，节点B的高度为2，节点B的深度为 1，树的高度为3</p>
<h4 id="高度" tabindex="-1"><a class="header-anchor" href="#高度" aria-hidden="true">#</a> 高度</h4>
<p>树的高度计算公式：</p>
<p><img src="https://mmbiz.qpic.cn/mmbiz_png/bwG40XYiaOKkeAcq7DMpxvCDrsUJulZxFGsUgS1HpzIOw9oJQazjQFfShXicAXENfOmy9zCNQNMpe6ZqAfQtiaxxQ/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片"></p>
<p>下图每个节点值都代表来当前节点的高度：</p>
<p><img src="@source/images/tree3.png" alt="图片"></p>
<h2 id="_2-二叉树" tabindex="-1"><a class="header-anchor" href="#_2-二叉树" aria-hidden="true">#</a> 2 二叉树</h2>
<p>二叉树，故名思义，最多仅有两个子节点的树（最多能分两个叉的树🤦‍♀️）：</p>
<p>图：</p>
<p><img src="@source/images/tree4.png" alt="图片"></p>
<h2 id="_3-平衡二叉树" tabindex="-1"><a class="header-anchor" href="#_3-平衡二叉树" aria-hidden="true">#</a> 3 平衡二叉树</h2>
<p>二叉树中，每一个节点的左右子树的高度相差不能大于 1，称为平衡二叉树。</p>
<p><img src="@source/images/tree6.png" alt="图片"></p>
<p>另外还有满二叉树、完全二叉树等：</p>
<ul>
<li><strong>满二叉树</strong>：除了叶结点外每一个结点都有左右子叶且叶子结点都处在最底层的二叉树</li>
<li><strong>完全二叉树</strong>：深度为h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，第h 层所有的结点都连续集中在最左边</li>
</ul>
<h2 id="_4-在代码中如何去表示一棵二叉树" tabindex="-1"><a class="header-anchor" href="#_4-在代码中如何去表示一棵二叉树" aria-hidden="true">#</a> 4 在代码中如何去表示一棵二叉树</h2>
<h3 id="_4-1-链式存储法" tabindex="-1"><a class="header-anchor" href="#_4-1-链式存储法" aria-hidden="true">#</a> 4.1 链式存储法</h3>
<p>二叉树的存储很简单，在二叉树中，我们看到每个节点都包含三部分：</p>
<ul>
<li>当前节点的 val</li>
<li>左子节点 left</li>
<li>右子节点 right</li>
</ul>
<p>所以我们可以将每个节点定义为：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 保存当前节点 key 值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val
    <span class="token comment">// 指向左子节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// 指向右子节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一棵二叉树可以由根节点通过左右指针连接起来形成一个树。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">BinaryTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token function-variable function">Node</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-数组存储法-适用于完全二叉树" tabindex="-1"><a class="header-anchor" href="#_4-2-数组存储法-适用于完全二叉树" aria-hidden="true">#</a> 4.2 数组存储法（适用于完全二叉树）</h3>
<p>下图就是一棵完全二叉树，</p>
<p>如果我们把根节点存放在位置 <code v-pre>i=1</code> 的位置，则它的左子节点位置为 <code v-pre>2i = 2</code> ，右子节点位置为 <code v-pre>2i+1 = 3</code> 。</p>
<p>如果我们选取 B 节点 <code v-pre>i=2</code> ，则它父节点为 <code v-pre>i/2 = 1</code> ，左子节点 <code v-pre>2i=4</code> ，右子节点  <code v-pre>2i+1=5</code> 。</p>
<p>以此类推，我们发现所有的节点都满足这三种关系：</p>
<ul>
<li>位置为 i 的节点，它的父节点位置为 <code v-pre>i/2</code></li>
<li>它的左子节点 <code v-pre>2i</code></li>
<li>它的右子节点  <code v-pre>2i+1</code></li>
</ul>
<p>因此，如果我们把完全二叉树存储在数组里（从下标为 1 开始存储），我们完全可以通过下标找到任意节点的父子节点。从而完整的构建出这个完全二叉树。这就是数组存储法。</p>
<p>数组存储法相对于链式存储法不需要为每个节点创建它的左右指针，更为节省内存。</p>
<p><img src="@source/images/完全二叉树.png" alt="图片"></p>
<h2 id="_5-二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#_5-二叉树的遍历" aria-hidden="true">#</a> 5 二叉树的遍历</h2>
<p>二叉树的遍历可分为：</p>
<ul>
<li>前序遍历</li>
<li>中序遍历</li>
<li>后序遍历</li>
</ul>
<p>所谓前、中、后，不过是根的顺序，即也可以称为先根遍历、中根遍历、后根遍历</p>
<h4 id="_1-前序遍历" tabindex="-1"><a class="header-anchor" href="#_1-前序遍历" aria-hidden="true">#</a> 1. 前序遍历</h4>
<p>对于二叉树中的任意一个节点，先打印该节点，然后是它的左子树，最后右子树</p>
<p><img src="@source/images/前序遍历.png" alt="图片"></p>
<h4 id="_2-中序遍历" tabindex="-1"><a class="header-anchor" href="#_2-中序遍历" aria-hidden="true">#</a> 2. 中序遍历</h4>
<p>对于二叉树中的任意一个节点，先打印它的左子树，然后是该节点，最后右子树</p>
<p><img src="@source/images/中序遍历.png" alt="图片"></p>
<h4 id="_3-后序遍历" tabindex="-1"><a class="header-anchor" href="#_3-后序遍历" aria-hidden="true">#</a> 3. 后序遍历</h4>
<p>对于二叉树中的任意一个节点，先打印它的左子树，然后是右子树，最后该节点</p>
<p><img src="@source/images/后序遍历.png" alt="图片"></p>
<h4 id="_4-代码实现-前序遍历为例" tabindex="-1"><a class="header-anchor" href="#_4-代码实现-前序遍历为例" aria-hidden="true">#</a> 4. 代码实现（前序遍历为例）</h4>
<p>所以，遍历二叉树的过程也就是一个递归的过程，例如前序遍历，先遍历根节点，然后是根的左子树，最后右子树；遍历根节点的左子树的时候，又是先遍历左子树的根节点，然后左子树的左子树，左子树的右子树…….</p>
<p>所以，它的核心代码就是：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 前序遍历核心代码</span>
<span class="token keyword">const</span> <span class="token function-variable function">preOrderTraverseNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 先根节点</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token comment">// 然后遍历左子树</span>
        <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token comment">// 再遍历右子树</span>
        <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码如下：</p>
<h5 id="递归实现" tabindex="-1"><a class="header-anchor" href="#递归实现" aria-hidden="true">#</a> 递归实现</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 前序遍历</span>
<span class="token keyword">const</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> <span class="token function-variable function">preOrderTraverseNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 先根节点</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment">// 然后遍历左子树</span>
            <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token comment">// 再遍历右子树</span>
            <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们既然可以使用递归实现，那么是否也可以使用迭代实现喃？</p>
<h5 id="迭代实现" tabindex="-1"><a class="header-anchor" href="#迭代实现" aria-hidden="true">#</a> 迭代实现</h5>
<p>利用栈来记录遍历的过程，实际上，递归就使用了调用栈，所以这里我们可以使用栈来模拟递归的过程</p>
<ul>
<li>首先根入栈</li>
<li>将根节点出栈，将根节点值放入结果数组中</li>
<li>然后遍历左子树、右子树，因为栈是先入后出，所以，我们先右子树入栈，然后左子树入栈</li>
<li>继续出栈（左子树被出栈）…….</li>
</ul>
<p>依次循环出栈遍历入栈，直到栈为空，遍历完成</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 前序遍历</span>
<span class="token keyword">const</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 当根节点不为空的时候，将根节点入栈</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> curNode <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 第一步的时候，先访问的是根节点</span>
        list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        
        <span class="token comment">// 我们先打印左子树，然后右子树</span>
        <span class="token comment">// 所以先加入栈的是右子树，然后左子树</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> list
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析：</h5>
<p>空间复杂度：O(n)</p>
<p>时间复杂度：O(n)</p>
<p>至此，我们已经实现了二叉树的前序遍历，尝试思考一下二叉树的中序遍历如何实现喃？</p>
<h2 id="_6-二叉查找树-bst树" tabindex="-1"><a class="header-anchor" href="#_6-二叉查找树-bst树" aria-hidden="true">#</a> 6 二叉查找树（BST树）</h2>
<p>有的笔者也称它为二叉搜索树，都是一个意思。</p>
<p>二叉树本身没有多大的意义，直到有位大佬提出一个 trick。</p>
<p>如果我们规定一颗二叉树上的元素拥有顺序，所有比它小的元素在它的左子树，比它大的元素在它的右子树，那么我们不就可以很快地查找某个元素了吗？</p>
<p>不得不说这是一个非常天才的想法，于是，二叉查找树诞生了。</p>
<p>所以，二叉查找树与二叉树不同的是，它在二叉树的基础上，增加了对二叉树上节点存储位置的限制：二叉搜索树上的每个节点都需要满足：</p>
<ul>
<li>左子节点值小于该节点值</li>
<li>右子节点值大于等于该节点值</li>
</ul>
<p><img src="@source/images/二叉树查找.png" alt="图片"></p>
<p>在二叉树中，所有子节点值都是没有固定规律的，所以使用二叉树存储结构存储数据时，查找数据的时间复杂度为 O(n)，因为它要查找每一个节点。</p>
<p>而使用二叉查找树就不同了，例如上图，我们如果要查找 6 ，先从根节点 10 比较，6 比 10 小，则查找左子树，再与 8 比较，6 比 8 小，继续查找 8 的左子树，也就是 6，我们找到了元素，结束。</p>
<h3 id="_6-1-基本操作" tabindex="-1"><a class="header-anchor" href="#_6-1-基本操作" aria-hidden="true">#</a> 6.1 基本操作</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">BinarySearchTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token function-variable function">Node</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">null</span>
  
  <span class="token comment">// 插入</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// 查找</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// 删除</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// 最大值</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">max</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// 最小值</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">min</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// 中序遍历</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">inOrderTraverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// 先序遍历</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">preOrderTraverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token comment">// 后序遍历</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">postOrderTraverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>插入：</strong></p>
<ul>
<li>首先创建一个新节点</li>
<li>判断树是否为空，为空则设置插入的节点为根节点，插入成功，返回</li>
<li>如果不为空，则比较该节点与根结点，比根小，插入左子树，否则插入右子树</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建新节点</span>
  <span class="token keyword">let</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token comment">// 判断是否为空树</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    root <span class="token operator">=</span> newNode
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">insertNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> newNode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将 insertNode 插入到 node 子树上</span>
<span class="token keyword">function</span> <span class="token function">insertNode</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> newNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>newNode<span class="token punctuation">.</span>key <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 插入 node 左子树</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>left <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">insertNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> newNode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 插入 node 右子树</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>right <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">insertNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> newNode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>最值：</strong></p>
<p>最小值：树最左端的节点</p>
<p>最大值：树最右端的节点</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 最小值</span>
<span class="token keyword">function</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> node <span class="token operator">=</span> root
  <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>key
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// 最大值</span>
<span class="token keyword">function</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> node <span class="token operator">=</span> root
  <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>key
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">searchNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">searchNode</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> 
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">searchNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">></span> node<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">searchNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  root <span class="token operator">=</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">removeNode</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> 
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>key <span class="token operator">></span> node<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// key = node.key 删除</span>
    <span class="token comment">//叶子节点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">return</span> node
    <span class="token punctuation">}</span>
    <span class="token comment">// 只有一个子节点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>right
      <span class="token keyword">return</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>left
      <span class="token keyword">return</span> node
    <span class="token punctuation">}</span>
    <span class="token comment">// 有两个子节点</span>
    <span class="token comment">// 获取右子树的最小值替换当前节点</span>
    <span class="token keyword">let</span> minRight <span class="token operator">=</span> <span class="token function">findMinNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    node<span class="token punctuation">.</span>key <span class="token operator">=</span> minRight<span class="token punctuation">.</span>key
    node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> minRight<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
    <span class="token keyword">return</span> node
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取 node 树最小节点</span>
<span class="token keyword">function</span> <span class="token function">findMinNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> node
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-遍历" tabindex="-1"><a class="header-anchor" href="#_6-2-遍历" aria-hidden="true">#</a> 6.2 遍历</h3>
<p><strong>中序遍历：</strong></p>
<p>顾名思义，中序遍历就是把根放在中间的遍历，即按先左节点、然后根节点、最后右节点（左根右）的遍历方式。</p>
<p>由于BST树任意节点都大于左子节点值小于等于右子节点值的特性，所以 <strong>中序遍历其实是对🌲进行排序操作</strong> ，并且是按从小到大的顺序排序。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">inOrderTraverseNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">inOrderTraverseNode</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先遍历左子树</span>
    <span class="token function">inOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
    <span class="token comment">// 然后根节点</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
    <span class="token comment">// 再遍历右子树</span>
    <span class="token function">inOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// callback 每次将遍历到的结果打印到控制台</span>
<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>先序遍历：</strong></p>
<p>已经实现的中序遍历，先序遍历就很简单了，它是按根左右的顺序遍历</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">preOrderTraverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先根节点</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
    <span class="token comment">// 然后遍历左子树</span>
    <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
    <span class="token comment">// 再遍历右子树</span>
    <span class="token function">preOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// callback 每次将遍历到的结果打印到控制台</span>
<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>后序遍历：</strong></p>
<p>后序遍历按照左右根的顺序遍历，实现也很简单。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">postOrderTraverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">postOrderTraverseNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">postOrderTraverseNode</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先遍历左子树</span>
    <span class="token function">postOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
    <span class="token comment">// 然后遍历右子树</span>
    <span class="token function">postOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
    <span class="token comment">// 最后根节点</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// callback 每次将遍历到的结果打印到控制台</span>
<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-bst树的局限" tabindex="-1"><a class="header-anchor" href="#_6-3-bst树的局限" aria-hidden="true">#</a> 6.3 BST树的局限</h3>
<p>在理想情况下，二叉树每多一层，可以存储的元素都增加一倍。也就是说 n 个元素的二叉搜索树，对应的树高为 O(logn)。所以我们查找元素、插入元素的时间也为 O(logn)。</p>
<p>当然这是理想情况下，但在实际应用中，并不是那么理想，例如一直递增或递减的给一个二叉查找树插入数据，那么所有插入的元素就会一直出现在一个树的左节点上，数型结构就会退化为链表结构，时间复杂度就会趋于 O(n)，这是不好的。</p>
<p>而我们上面的平衡树就可以很好的解决这个问题，所以平衡二叉查找树（<strong>AVL树，下一章节探讨</strong>）由此诞生。</p>
<h2 id="_7-平衡二叉查找树-avl树" tabindex="-1"><a class="header-anchor" href="#_7-平衡二叉查找树-avl树" aria-hidden="true">#</a> 7 平衡二叉查找树（AVL树）</h2>
<p>故名思义，既满足左右子树高度不大于 1， 又满足任意节点值大于它的左子节点值，小于等于它的右子节点值。</p>
<p><img src="@source/images/avl树.png" alt="图片"></p>
<p>AVL 这个名字的由来，是它的两个发明者G. M. Adelson-Velsky 和 Evgenii Landis 的缩写，AVL最初是他们两人在1962 年的论文「An algorithm for the organization of information」中提出来一种数据结构</p>
<h2 id="_8-红黑树" tabindex="-1"><a class="header-anchor" href="#_8-红黑树" aria-hidden="true">#</a> 8 红黑树</h2>
<p>红黑树也是一种特殊的「二叉查找树」。</p>
<p>到目前为止我们学习的 AVL 树和即将学习的红黑树都是二叉查找树的变体，可见二叉查找树真的是非常重要基础二叉树，如果忘了它的定义可以先回头看看。</p>
<p>红黑树是一种比较难的数据结构，面试中很少有面试官让你手写一个红黑树，最多的话是考察你是否理解红黑树，以及为什么有了 AVL 树还需要红黑树，本部分就主要介绍这块。</p>
<h3 id="_1-什么是红黑树" tabindex="-1"><a class="header-anchor" href="#_1-什么是红黑树" aria-hidden="true">#</a> 1 什么是红黑树</h3>
<p>红黑树是一种自平衡（并不是绝对平衡）的二叉查找树，它除了满足二分查找树的特点外，还满足以下条件：</p>
<ul>
<li>节点是红色或黑色</li>
<li>根节点必须是黑色节点</li>
<li>所有的叶子节点都必须是值为 NULL 的黑节点</li>
<li>如果一个节点是红色的，则它两个子节点都是黑色的</li>
<li>从任一节点到达它的每个叶子节点的所有的路径，都有相同数目的黑色节点</li>
</ul>
<p><img src="@source/images/红黑树.png" alt="图片"></p>
<p>很多人不理解为神马要有那么多条条框框，这里引用王争老师的说法：</p>
<blockquote>
<p>我们都玩过魔方吧，其实魔方的复原是有固定算法的，遇到哪几面是什么样的，你就对应转几下，只要跟着这个复原步骤，最终肯定能把魔方复原。红黑树也是的，它也有固定的条条框框，在插入、删除时也有固定的调整方案。</p>
</blockquote>
<p>这些条条框框保证红黑树的自平衡，保证红黑树从根节点到达每一个叶子节点的最长路径不会超过最短路径的 2 倍。</p>
<p>而节点的路径长度决定着对节点的查询效率，这样我们确保了，最坏情况下的查找、插入、删除操作的时间复杂度不超过 O(logn) ，并且有较高的插入和删除效率。</p>
<h3 id="_2-红黑树-vs-平衡二叉树-avl树" tabindex="-1"><a class="header-anchor" href="#_2-红黑树-vs-平衡二叉树-avl树" aria-hidden="true">#</a> 2 红黑树 VS 平衡二叉树（AVL树）</h3>
<ul>
<li>插入和删除操作，一般认为红黑树的删除和插入会比 AVL 树更快。因为，红黑树不像 AVL 树那样严格的要求平衡因子小于等于1，这就减少了为了达到平衡而进行的旋转操作次数，可以说是牺牲严格平衡性来换取更快的插入和删除时间。</li>
<li>红黑树不要求有不严格的平衡性控制，但是红黑树的特点，使得任何不平衡都会在三次旋转之内解决。而 AVL 树如果不平衡，并不会控制旋转操作次数，旋转直到平衡为止。</li>
<li>查找操作，AVL树的效率更高。因为 AVL 树设计比红黑树更加平衡，不会出现平衡因子超过 1 的情况，减少了树的平均搜索长度。</li>
</ul>
<h2 id="_9-trie-树" tabindex="-1"><a class="header-anchor" href="#_9-trie-树" aria-hidden="true">#</a> 9 Trie 树</h2>
<h3 id="_9-1-什么是-trie-树" tabindex="-1"><a class="header-anchor" href="#_9-1-什么是-trie-树" aria-hidden="true">#</a> 9.1 什么是 Trie 树</h3>
<p>Trie 树，也称为字典树或前缀树，顾名思义，它是用来处理字符串匹配问题的数据结构，以及用来解决集合中查找固定前缀字符串的数据结构。</p>
<h3 id="_9-2-trie树的应用-字符串匹配" tabindex="-1"><a class="header-anchor" href="#_9-2-trie树的应用-字符串匹配" aria-hidden="true">#</a> 9.2 Trie树的应用：字符串匹配</h3>
<p>在搜索引擎中输入关键字，搜索引擎都会弹出下拉框，显示各种关键字提示，例如必应：</p>
<p><img src="@source/images/字符串匹配(树).png" alt="图片"></p>
<p>必应是如何处理这一过程的喃？</p>
<p>或者，假设我们有n个单词的数据集，任意输入一串字符，如何在数据集中快速匹配出具有输入字符前缀的单词？</p>
<p>这样类似的问题还有很多，在日常开发中，遇到类似的问题，我们应该如何去处理？选择怎样的数据结构与算法？尤其是遇到大规模数据时，如何更高效的处理？</p>
<p>最简单的方法就是暴力，将数据集中的每个字符串，逐个字符的匹配输入字符，所有字符都匹配上则前缀匹配成功。这种方式也是我们开发当中最常用，最简单的方式，时间复杂度为 <code v-pre>O(m*n)</code> ，其中 <code v-pre>m</code> 为输入字符串长度， <code v-pre>n</code> 为数据集规模。</p>
<p>这个时间复杂度是很高的，当 <code v-pre>n</code> 很大时，暴力法性能就会很差，此时必须重新寻找合适的算法。</p>
<p>我们知道在树上查找、插入都比较方便，一般时间复杂度只与树的高度相关，我们可以通过树结构来处理，也就是我们要说的 Trie 树。其实，引擎搜索关键字提示底层也是通过 Trie 树实现的。</p>
<p>举个例子：假设数据集有：<code v-pre>are</code> 、 <code v-pre>add</code> 、 <code v-pre>adopt</code> 、<code v-pre>set</code> 、<code v-pre>so</code> ，它构键过程：</p>
<p><img src="@source/images/字符串匹配树.png" alt="图片"></p>
<p>当所以的字符串插入完成，Trie树就构建完成了。</p>
<p><strong>Trie树的本质</strong>是利用字符串的公共前缀，将重复的前缀合并在一起，其中根节点不包含任何信息，每个节点表示一个字符串中的字符，从根节点到叶节点的路径，表示一个字符串。</p>
<p>在字符串匹配的时候，我们只要按照树的结构从上到下匹配即可。</p>
<h2 id="_10-b-树、b-树-感兴趣进" tabindex="-1"><a class="header-anchor" href="#_10-b-树、b-树-感兴趣进" aria-hidden="true">#</a> 10 B 树、B+ 树（感兴趣进）</h2>
<h3 id="_10-1-多叉查找树" tabindex="-1"><a class="header-anchor" href="#_10-1-多叉查找树" aria-hidden="true">#</a> 10.1 多叉查找树</h3>
<p>既然二叉查找树已经理解了，那多叉查找树就很好理解了，它与二叉查找树唯一不同的是，它是多叉的。也就是说，多叉查找树允许一个节点存储多个元素，并且可以拥有多个子树。</p>
<p><img src="@source/images/b加树.png" alt="图片"></p>
<p>为什么在有二叉查找树的情况下，还要有多叉查找树喃？</p>
<p>我们知道树的深度越高，时间复杂度越高，性能越差，多叉查找树相对于二叉查找树来说，每个节点不止能拥有两个子节点，每层存放的节点数可比二叉查找树多，自然多叉查找树的的深度就要更小，性能也就更好。例如主要用于各大存储文件系统与数据库系统中的 B 树。</p>
<h3 id="_10-2-b-树-b-tree" tabindex="-1"><a class="header-anchor" href="#_10-2-b-树-b-tree" aria-hidden="true">#</a> 10.2 B 树(B-tree)</h3>
<p>B 树，又称平衡多叉查找树。它是一种自平衡的多叉查找树。</p>
<p>如果一棵多路查找树满足以下规则，则称之为 B 树：</p>
<ul>
<li>排序方式：所有节点关键字是按递增次序排列，并遵循左小右大原则；</li>
<li>子节点数：非叶节点的子节点数&gt;1，且&lt;=M ，且M&gt;=2，空树除外（注：M阶代表一个树节点最多有多少个查找路径，M=M叉（或路），当M=2则是2叉树，M=3则是3叉）；</li>
<li>关键字数：枝节点（非根非叶）的关键字数量（K）应满足 (M+1)/2  &lt; K &lt; M</li>
<li>所有叶子节点均在同一层、叶子节点除了包含了关键字和关键字记录的指针外也有指向其子节点的指针只不过其指针地址都为null对应下图最后一层节点的空格子;</li>
</ul>
<p>最后，我们使用一张图加深一下理解：</p>
<p><img src="@source/images/b树.png" alt="图片"></p>
<h3 id="_10-3-b-树" tabindex="-1"><a class="header-anchor" href="#_10-3-b-树" aria-hidden="true">#</a> 10.3 B+树</h3>
<p>B+树与B树一样都是多叉平衡查找树（又名多路平衡查找树），B+树与B树不同的是：</p>
<ul>
<li>
<p>B+树改进了B树，让内结点（非叶节点）只作索引使用，去掉了其中指向data的指针，使得每个结点中能够存放更多的key， 因此能有更大的出度。</p>
<p>这有什么用？这样就意味着存放同样多的key，树的层高能进一步被压缩，使得检索的时间更短</p>
</li>
<li>
<p>中间节点的元素数量与子树一致，而B树子树数量与元素数量多1</p>
</li>
<li>
<p>叶子节点是一个链表，可以通过指针顺序查找</p>
</li>
</ul>
<p><img src="@source/images/b+树.png" alt="图片"></p>
<h2 id="_11-加深" tabindex="-1"><a class="header-anchor" href="#_11-加深" aria-hidden="true">#</a> 11 加深</h2>
<h3 id="_11-1-二叉树的中序遍历" tabindex="-1"><a class="header-anchor" href="#_11-1-二叉树的中序遍历" aria-hidden="true">#</a> 11.1 二叉树的中序遍历</h3>
<p><strong>递归实现：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 中序遍历</span>
<span class="token keyword">const</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 先遍历左子树</span>
            <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
           <span class="token comment">// 再根节点</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment">// 最后遍历右子树</span>
            <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>迭代实现：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> root
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>left
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> list
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进一步简化：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 中序遍历</span>
<span class="token keyword">const</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> root
    
    <span class="token keyword">while</span><span class="token punctuation">(</span>node <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历左子树</span>
      <span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>left
      <span class="token punctuation">}</span>
      
      node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> list
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>空间复杂度：O(n)</li>
<li>时间复杂度：O(n)</li>
</ul>
<p>更多解答</p>
<h3 id="_11-2-二叉树的后序遍历" tabindex="-1"><a class="header-anchor" href="#_11-2-二叉树的后序遍历" aria-hidden="true">#</a> 11.2 二叉树的后序遍历</h3>
<p><strong>递归实现</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 后序遍历</span>
<span class="token keyword">const</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> <span class="token function-variable function">postorderTraversalNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 先遍历左子树</span>
            <span class="token function">postorderTraversalNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token comment">// 再遍历右子树</span>
            <span class="token function">postorderTraversalNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token comment">// 最后根节点</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">postorderTraversalNode</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>迭代实现</strong></p>
<p><strong>解题思路：</strong> 后序遍历与前序遍历不同的是：</p>
<ul>
<li>后序遍历是左右根</li>
<li>而前序遍历是根左右</li>
</ul>
<p>如果我们把前序遍历的 <code v-pre>list.push(node.val)</code> 变更为 <code v-pre>list.unshift(node.val)</code> （遍历结果逆序），那么遍历顺序就由 <strong>根左右</strong> 变更为 <strong>右左根</strong></p>
<p>然后我们仅需将  <strong>右左根</strong> 变更为  <strong>左右根</strong> 即可完成后序遍</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 后序遍历</span>
<span class="token keyword">const</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 当根节点不为空的时候，将根节点入栈</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 根左右=>右左根</span>
        list<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        
        <span class="token comment">// 先进栈左子树后右子树</span>
        <span class="token comment">// 出栈的顺序就变更为先右后左</span>
        <span class="token comment">// 右先头插法入list</span>
        <span class="token comment">// 左再头插法入list</span>
        <span class="token comment">// 实现右左根=>左右根</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> list
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>空间复杂度：O(n)</li>
<li>时间复杂度：O(n)</li>
</ul>
<p>更多解答</p>
<h3 id="_11-3-二叉树的层次遍历" tabindex="-1"><a class="header-anchor" href="#_11-3-二叉树的层次遍历" aria-hidden="true">#</a> 11.3 二叉树的层次遍历</h3>
<p>给定一个二叉树，返回其节点值自底向上的层次遍历。（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）</p>
<p>例如：给定二叉树 <code v-pre>[3,9,20,null,null,15,7]</code> ,</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token number">3</span>
   <span class="token operator">/</span> \
  <span class="token number">9</span>  <span class="token number">20</span>
    <span class="token operator">/</span>  \
   <span class="token number">15</span>   <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回其自底向上的层次遍历为：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解法一-bfs-广度优先遍历" tabindex="-1"><a class="header-anchor" href="#解法一-bfs-广度优先遍历" aria-hidden="true">#</a> 解法一：BFS（广度优先遍历）</h4>
<p>BFS 是按层层推进的方式，遍历每一层的节点。题目要求的是返回每一层的节点值，所以这题用 BFS 来做非常合适。BFS 需要用队列作为辅助结构，我们先将根节点放到队列中，然后不断遍历队列。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">levelOrderBottom</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
        queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> curr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            curr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curr<span class="token punctuation">)</span>
        queue <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong></p>
<ul>
<li>时间复杂度：O(n)</li>
<li>空间复杂度：O(n)</li>
</ul>
<h4 id="解法二-dfs-深度优先遍历" tabindex="-1"><a class="header-anchor" href="#解法二-dfs-深度优先遍历" aria-hidden="true">#</a> 解法二：DFS（深度优先遍历）</h4>
<p>DFS 是沿着树的深度遍历树的节点，尽可能深地搜索树的分支</p>
<p>DFS 做本题的主要问题是：DFS 不是按照层次遍历的。为了让递归的过程中同一层的节点放到同一个列表中，在递归时要记录每个节点的深度 <code v-pre>depth</code> 。递归到新节点要把该节点放入 <code v-pre>depth</code> 对应列表的末尾。</p>
<p>当遍历到一个新的深度 <code v-pre>depth</code> ，而最终结果 <code v-pre>res</code> 中还没有创建 <code v-pre>depth</code> 对应的列表时，应该在 <code v-pre>res</code> 中新建一个列表用来保存该 <code v-pre>depth</code> 的所有节点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">levelOrderBottom</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> <span class="token function-variable function">dep</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> depth</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span>
        res<span class="token punctuation">[</span>depth<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token operator">||</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        res<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token function">dep</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">dep</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dep</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(n)</li>
<li>空间复杂度：O(h)，h为树的高度</li>
</ul>
<p>更多解答</p>
<h3 id="_11-4-二叉树的层序遍历" tabindex="-1"><a class="header-anchor" href="#_11-4-二叉树的层序遍历" aria-hidden="true">#</a> 11.4 二叉树的层序遍历</h3>
<p>给你一个二叉树，请你返回其按 <strong>层序遍历</strong> 得到的节点值。（即逐层地，从左到右访问所有节点）。</p>
<p>**示例：**二叉树：<code v-pre>[3,9,20,null,null,15,7]</code> ,</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token number">3</span>
   <span class="token operator">/</span> \
  <span class="token number">9</span>  <span class="token number">20</span>
    <span class="token operator">/</span>  \
   <span class="token number">15</span>   <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回其层次遍历结果：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>感谢 <strong>@plane-hjh</strong> 的解答：</p>
<p>这道题和二叉树的层次遍历相似，只需要把 <code v-pre>reverse()</code> 去除就可以了</p>
<p><strong>广度优先遍历</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
        queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> curr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            curr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curr<span class="token punctuation">)</span>
        queue <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>深度优先遍历</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> <span class="token function-variable function">dep</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> depth</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span>
        res<span class="token punctuation">[</span>depth<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token operator">||</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        res<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token function">dep</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">dep</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dep</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多解答</p>
<h3 id="_11-5-重构二叉树-从前序与中序遍历序列构造二叉树" tabindex="-1"><a class="header-anchor" href="#_11-5-重构二叉树-从前序与中序遍历序列构造二叉树" aria-hidden="true">#</a> 11.5 重构二叉树：从前序与中序遍历序列构造二叉树</h3>
<p>输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。</p>
<p>**注意:**你可以假设树中没有重复的元素。</p>
<p>例如，给出</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回如下的二叉树：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token number">3</span>
   <span class="token operator">/</span> \
  <span class="token number">9</span>  <span class="token number">20</span>
    <span class="token operator">/</span>  \
   <span class="token number">15</span>   <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>限制：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>0 &lt;= 节点个数 &lt;= 5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐 <strong>@luweiCN</strong> 的解答：</p>
<p>仔细分析前序遍历和中序遍历可以知道（以题目为例）：</p>
<ol>
<li>前序遍历的第一个元素一定是根节点，这里是<code v-pre>3</code></li>
<li>找到根节点之后，根节点在中序遍历中把数组一分为二，即两个数组<code v-pre>[9]</code>和<code v-pre>[15, 20, 7]</code>，这两个数组分别是根节点<code v-pre>3</code>的左子树和右子树的中序遍历。</li>
<li>前序遍历数组去掉根节点之后是<code v-pre>[9,20,15,7]</code>，而这个数组的第1项<code v-pre>[9]</code>（左子树的大小）和后3项<code v-pre>[20, 15, 7]</code>（右子树的大小）又分别是左子树和右子树的前序遍历 到这里已经很明显了，用递归</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>
            preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span>
            inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里要注意，preorder前面shift一次长度比inorder小1</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多解答</p>
<h3 id="_11-6-二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#_11-6-二叉树的最大深度" aria-hidden="true">#</a> 11.6 二叉树的最大深度</h3>
<p>给定一个二叉树，找出其最大深度。</p>
<p>二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。</p>
<p><strong>说明:</strong> 叶子节点是指没有子节点的节点。</p>
<p>**示例：**给定二叉树 <code v-pre>[3,9,20,null,null,15,7]</code> ，</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    3
   / \
  9  20
    /  \
   15   7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回它的最大深度 3</p>
<p><strong>解答：递归</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span> 
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(n)</li>
<li>空间复杂度：O(log⁡n)</li>
</ul>
<p>更多解答</p>
<h3 id="_11-7-二叉树的最近公共祖先" tabindex="-1"><a class="header-anchor" href="#_11-7-二叉树的最近公共祖先" aria-hidden="true">#</a> 11.7 二叉树的最近公共祖先</h3>
<p>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。</p>
<p>百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”</p>
<p>例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]</p>
<p><img src="@source/images/二叉树最先祖先.png" alt="图片"></p>
<p><strong>示例 1:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> root <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> p <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">1</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> 节点 <span class="token number">5</span> 和节点 <span class="token number">1</span> 的最近公共祖先是节点 <span class="token number">3</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">输入</span><span class="token operator">:</span> root <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> p <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">4</span>
<span class="token literal-property property">输出</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token literal-property property">解释</span><span class="token operator">:</span> 节点 <span class="token number">5</span> 和节点 <span class="token number">4</span> 的最近公共祖先是节点 <span class="token number">5</span>。因为根据定义最近公共祖先节点可以为节点本身。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong>:</p>
<ul>
<li>所有节点的值都是唯一的。</li>
<li>p、q 为不同节点且均存在于给定的二叉树中。</li>
</ul>
<p><strong>解答：递归实现</strong></p>
<p><strong>解题思路：</strong></p>
<p>如果树为空树或 <code v-pre>p</code> 、 <code v-pre>q</code> 中任一节点为根节点，那么 <code v-pre>p</code> 、 <code v-pre>q</code> 的最近公共节点为根节点</p>
<p>如果不是，即二叉树不为空树，且 <code v-pre>p</code> 、 <code v-pre>q</code> 为非根节点，则递归遍历左右子树，获取左右子树的最近公共祖先，</p>
<ul>
<li>如果  <code v-pre>p</code> 、 <code v-pre>q</code> 节点在左右子树的最近公共祖先都存在，说明 <code v-pre>p</code> 、 <code v-pre>q</code> 节点分布在左右子树的根节点上，此时二叉树的最近公共祖先为 <code v-pre>root</code></li>
<li>若 <code v-pre>p</code> 、 <code v-pre>q</code> 节点在左子树最近公共祖先为空，那 <code v-pre>p</code> 、<code v-pre>q</code> 节点位于左子树上，最终二叉树的最近公共祖先为右子树上 <code v-pre>p</code> 、<code v-pre>q</code> 节点的最近公共祖先</li>
<li>若 <code v-pre>p</code> 、 <code v-pre>q</code> 节点在右子树最近公共祖先为空，同左子树 <code v-pre>p</code> 、 <code v-pre>q</code> 节点的最近公共祖先为空一样的判定逻辑</li>
<li>如果  <code v-pre>p</code> 、 <code v-pre>q</code> 节点在左右子树的最近公共祖先都为空，则返回 <code v-pre>null</code></li>
</ul>
<p><strong>代码实现：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> root <span class="token operator">==</span> p <span class="token operator">||</span> root <span class="token operator">==</span> q<span class="token punctuation">)</span> <span class="token keyword">return</span> root
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> right
    <span class="token keyword">if</span><span class="token punctuation">(</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> left
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(n)</li>
<li>空间复杂度：O(n)</li>
</ul>
<p>更多解答</p>
<h3 id="_11-8-平衡二叉树" tabindex="-1"><a class="header-anchor" href="#_11-8-平衡二叉树" aria-hidden="true">#</a> 11.8 平衡二叉树</h3>
<p>给定一个二叉树，判断它是否是高度平衡的二叉树。</p>
<p>本题中，一棵高度平衡二叉树定义为：</p>
<blockquote>
<p>一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。</p>
</blockquote>
<p><strong>示例 1:</strong></p>
<p>给定二叉树 <code v-pre>[3,9,20,null,null,15,7]</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    3
   / \
  9  20
    /  \
   15   7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 <code v-pre>true</code> 。</p>
<p><strong>示例 2:</strong></p>
<p>给定二叉树 <code v-pre>[1,2,2,3,3,null,null,4,4]</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>      1
     / \
    2   2
   / \
  3   3
 / \
4   4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 <code v-pre>false</code> 。</p>
<h4 id="解答一-自顶向下-暴力法" tabindex="-1"><a class="header-anchor" href="#解答一-自顶向下-暴力法" aria-hidden="true">#</a> 解答一：自顶向下（暴力法）</h4>
<p><strong>解题思路：</strong> 自顶向下的比较每个节点的左右子树的最大高度差，如果二叉树中每个节点的左右子树最大高度差小于等于 <code v-pre>1</code> ，即每个子树都平衡时，此时二叉树才是平衡二叉树</p>
<p><strong>代码实现：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isBalanced</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token function">depth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">depth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span>
        <span class="token operator">&amp;&amp;</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token operator">&amp;&amp;</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">depth</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">depth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">depth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(nlogn)，计算 <code v-pre>depth</code> 存在大量冗余操作</li>
<li>空间复杂度：O(n)</li>
</ul>
<h4 id="解答二-自底向上-优化" tabindex="-1"><a class="header-anchor" href="#解答二-自底向上-优化" aria-hidden="true">#</a> 解答二：自底向上（优化）</h4>
<p><strong>解题思路：</strong> 利用后续遍历二叉树（左右根），从底至顶返回子树最大高度，判定每个子树是不是平衡树 ，如果平衡，则使用它们的高度判断父节点是否平衡，并计算父节点的高度，如果不平衡，返回 <code v-pre>-1</code> 。</p>
<p>遍历比较二叉树每个节点 的左右子树深度：</p>
<ul>
<li>比较左右子树的深度，若差值大于 <code v-pre>1</code> 则返回一个标记 <code v-pre>-1</code> ，表示当前子树不平衡</li>
<li>左右子树有一个不是平衡的，或左右子树差值大于 <code v-pre>1</code> ，则二叉树不平衡</li>
<li>若左右子树平衡，返回当前树的深度（左右子树的深度最大值 <code v-pre>+1</code> ）</li>
</ul>
<p><strong>代码实现：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isBalanced</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">balanced</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">balanced</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">balanced</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">balanced</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> right <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>left <span class="token operator">-</span> right<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(n)</li>
<li>空间复杂度：O(n)</li>
</ul>
<p>更多解答</p>
<h3 id="_11-9-路径总和" tabindex="-1"><a class="header-anchor" href="#_11-9-路径总和" aria-hidden="true">#</a> 11.9 路径总和</h3>
<p>给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。</p>
<p><strong>说明:</strong> 叶子节点是指没有子节点的节点。</p>
<p><strong>示例:</strong> 给定如下二叉树，以及目标和 <code v-pre>sum = 22</code> ，</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>          5
         / \
        4   8
       /   / \
      11  13  4
     /  \      \
    7    2      1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 <code v-pre>true</code> , 因为存在目标和为 <code v-pre>22</code> 的根节点到叶子节点的路径 <code v-pre>5-&gt;4-&gt;11-&gt;2</code>。</p>
<p><strong>解题思路：</strong></p>
<p>只需要遍历整棵树</p>
<ul>
<li>如果当前节点不是叶子节点，递归它的所有子节点，传递的参数就是 sum 减去当前的节点值；</li>
<li>如果当前节点是叶子节点，判断参数 sum 是否等于当前节点值，如果相等就返回 true，否则返回 false。</li>
</ul>
<p><strong>代码实现：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">hasPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> sum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 根节点为空</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 叶节点 同时 sum 参数等于叶节点值</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>val <span class="token operator">===</span> sum<span class="token punctuation">;</span>

  <span class="token comment">// 总和减去当前值，并递归</span>
  sum <span class="token operator">=</span> sum <span class="token operator">-</span> root<span class="token punctuation">.</span>val
  <span class="token keyword">return</span> <span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> sum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多解答</p>
<h3 id="_11-10-对称二叉树" tabindex="-1"><a class="header-anchor" href="#_11-10-对称二叉树" aria-hidden="true">#</a> 11.10 对称二叉树</h3>
<p>给定一个二叉树，检查它是否是镜像对称的。</p>
<p>例如，二叉树 <code v-pre>[1,2,2,3,4,4,3]</code> 是对称的。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    1
   / \
  2   2
 / \ / \
3  4 4  3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是下面这个 <code v-pre>[1,2,2,null,3,null,3]</code> 则不是镜像对称的:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    1
   / \
  2   2
   \   \
   3    3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进阶：</strong></p>
<p>你可以运用递归和迭代两种方法解决这个问题吗？</p>
<p><strong>解答：</strong></p>
<p>一棵二叉树对称，则需要满足：根的左右子树是镜像对称的</p>
<p>也就是说，每棵树的左子树都和另外一颗树的右子树镜像对称，左子树的根节点值与右子树的根节点值相等</p>
<p><img src="@source/images/对称二叉树.png" alt="图片"></p>
<p>所以，我们需要比较：</p>
<ul>
<li>左右子树的根节点值是否相等</li>
<li>左右子树是否镜像对称</li>
</ul>
<p>边界条件：</p>
<ul>
<li>左右子树都为 <code v-pre>null</code> 时，返回 <code v-pre>true</code></li>
<li>左右子树有一个 <code v-pre>null</code> 时，返回 <code v-pre>false</code></li>
</ul>
<h4 id="解法一-递归" tabindex="-1"><a class="header-anchor" href="#解法一-递归" aria-hidden="true">#</a> 解法一：递归</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isSymmetric</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">var</span> <span class="token function-variable function">isEqual</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>left <span class="token operator">||</span> <span class="token operator">!</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token keyword">return</span> left<span class="token punctuation">.</span>val <span class="token operator">===</span> right<span class="token punctuation">.</span>val
         <span class="token operator">&amp;&amp;</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>left<span class="token punctuation">,</span> right<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
         <span class="token operator">&amp;&amp;</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>right<span class="token punctuation">,</span> right<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">isEqual</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(n)</li>
<li>空间复杂度：O(n)</li>
</ul>
<h4 id="解法二-迭代" tabindex="-1"><a class="header-anchor" href="#解法二-迭代" aria-hidden="true">#</a> 解法二：迭代</h4>
<p>利用栈来记录比较的过程，实际上，递归就使用了调用栈，所以这里我们可以使用栈来模拟递归的过程</p>
<ul>
<li>首先根的左右子树入栈</li>
<li>将左右子树出栈，比较两个数是否互为镜像</li>
<li>如果左右子树的根节点值相等，则将左子树的 <code v-pre>left</code> 、右子树的 <code v-pre>right</code> 、左子树的 <code v-pre>right</code> 、右子树的 <code v-pre>left</code> 依次入栈</li>
<li>继续出栈（一次出栈两个进行比较）…….</li>
</ul>
<p>依次循环出栈入栈，直到栈为空</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isSymmetric</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> right <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>val <span class="token operator">!==</span> right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">||</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(n)</li>
<li>空间复杂度：O(n)</li>
</ul>
<p>剑指Offer&amp;leetcode101：对称二叉树</p>
<h3 id="_11-11给定一个二叉树-找到该树中两个指定节点间的最短距离" tabindex="-1"><a class="header-anchor" href="#_11-11给定一个二叉树-找到该树中两个指定节点间的最短距离" aria-hidden="true">#</a> 11.11给定一个二叉树, 找到该树中两个指定节点间的最短距离</h3>
<blockquote>
<p>function TreeNode(val) { this.val = val; this.left = this.right = null; }</p>
</blockquote>
<p><strong>解答：</strong></p>
<p>求最近公共祖先节点，然后再求最近公共祖先节点到两个指定节点的路径，再求两个节点的路径之和</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">shortestDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最近公共祖先</span>
    <span class="token keyword">let</span> lowestCA <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
    <span class="token comment">// 分别求出公共祖先到两个节点的路经</span>
    <span class="token keyword">let</span> pDis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> qDis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">getPath</span><span class="token punctuation">(</span>lowestCA<span class="token punctuation">,</span> p<span class="token punctuation">,</span> pDis<span class="token punctuation">)</span>
    <span class="token function">getPath</span><span class="token punctuation">(</span>lowestCA<span class="token punctuation">,</span> q<span class="token punctuation">,</span> qDis<span class="token punctuation">)</span>
    <span class="token comment">// 返回路径之和</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>pDis<span class="token punctuation">.</span>length <span class="token operator">+</span> qDis<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 最近公共祖先</span>
<span class="token keyword">const</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> root <span class="token operator">===</span> p <span class="token operator">||</span> root <span class="token operator">===</span> q<span class="token punctuation">)</span> <span class="token keyword">return</span> root
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> right
    <span class="token keyword">if</span><span class="token punctuation">(</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> left
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">getPath</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> paths</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 找到节点，返回 true</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> p<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token comment">// 当前节点加入路径中</span>
    paths<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">let</span> hasFound <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">// 先找左子树</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        hasFound <span class="token operator">=</span> <span class="token function">getPath</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> paths<span class="token punctuation">)</span>
    <span class="token comment">// 左子树没有找到，再找右子树</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasFound <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        hasFound <span class="token operator">=</span> <span class="token function">getPath</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> paths<span class="token punctuation">)</span>
    <span class="token comment">// 没有找到，说明不在这个节点下面，则弹出</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasFound<span class="token punctuation">)</span>
        paths<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> hasFound
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多解答</p>
<h3 id="_11-12-二叉搜索树中第k小的元素" tabindex="-1"><a class="header-anchor" href="#_11-12-二叉搜索树中第k小的元素" aria-hidden="true">#</a> 11.12 二叉搜索树中第K小的元素</h3>
<p>给定一个二叉搜索树，编写一个函数 <code v-pre>kthSmallest</code> 来查找其中第 <code v-pre>k</code> 个最小的元素。</p>
<p>**说明：**你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。</p>
<p><strong>示例 1:</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**进阶：**如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 kthSmallest 函数？</p>
<p><strong>解答：</strong></p>
<p>我们知道：中序遍历其实是对🌲进行排序操作 ，并且是按从小到大的顺序排序，所以本题就很简单了</p>
<p><strong>解题思路：</strong> 中序遍历二叉搜索树，输出第 k 个既可</p>
<p><strong>代码实现（递归）：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">kthSmallest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> <span class="token function-variable function">inOrderTraverseNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 先遍历左子树</span>
            <span class="token function">inOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token comment">// 然后根节点</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">--</span>k <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> node<span class="token punctuation">.</span>val
                <span class="token keyword">return</span> 
            <span class="token punctuation">}</span>
            <span class="token comment">// 再遍历右子树</span>
            <span class="token function">inOrderTraverseNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">inOrderTraverseNode</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(k)</li>
<li>空间复杂度：不考虑递归栈所占用的空间，空间复杂度为 O(1)</li>
</ul>
<p><strong>代码实现（迭代）：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">kthSmallest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> root
    
    <span class="token keyword">while</span><span class="token punctuation">(</span>node <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 遍历左子树</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span>
      
        node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">--</span>k <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> node<span class="token punctuation">.</span>val
        <span class="token punctuation">}</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li>时间复杂度：O(H+K)</li>
<li>空间复杂度：空间复杂度为 O(H+K)</li>
</ul>
<p>更多解答</p>
<h3 id="_11-13-实现-trie-前缀树" tabindex="-1"><a class="header-anchor" href="#_11-13-实现-trie-前缀树" aria-hidden="true">#</a> 11.13 实现 Trie（前缀树）</h3>
<p>实现一个 Trie (前缀树)，包含 <code v-pre>insert</code> , <code v-pre>search</code> , 和 <code v-pre>startsWith</code> 这三个操作。</p>
<p><strong>示例:</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明:</strong></p>
<ul>
<li>你可以假设所有的输入都是由小写字母 a-z 构成的。</li>
<li>保证所有输入均为非空字符串。</li>
</ul>
<p><strong>解答：</strong></p>
<p>我们可以搭建一个初始 Trie 树结构：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Trie 树</span>
<span class="token keyword">var</span> <span class="token function-variable function">Trie</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 插入</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 搜索</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 前缀匹配</span>
<span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">startsWith</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prefix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1. 如何存储一个 Trie 树</strong></p>
<p>首先，我们需要实现一个 Trie 树，我们知道，二叉树的存储（链式存储）是通过左右指针来实现的，即二叉树中的节点：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">BinaryTreeNode</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 保存当前节点 key 值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key
    <span class="token comment">// 指向左子节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// 指向右子节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，它不止有两个字节点，它最多有 a-z 总共有26个子节点。最简单的实现是把她们保存在一个字典里：</p>
<ul>
<li><code v-pre>isEnd</code> ：当前是否是结束节点</li>
<li><code v-pre>children</code> ：当前节点的子节点，这里我们使用 <code v-pre>key:value</code> 形式实现，<code v-pre>key</code> 为子节点字符，<code v-pre>value</code> 指向子节点的孩子节点</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>var TrieNode = function() <span class="token punctuation">{</span>
    <span class="token comment">// next 放入当前节点的子节点</span>
    this.next = <span class="token punctuation">{</span><span class="token punctuation">}</span>;
    <span class="token comment">// 当前是否是结束节点</span>
    this.isEnd = <span class="token boolean">false</span>;
<span class="token punctuation">}</span>;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Trie 树</span>
<span class="token keyword">var</span> <span class="token function-variable function">Trie</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrieNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 插入</strong></p>
<ul>
<li>首先判断插入节点是否为空，为空则返回</li>
<li>遍历待插入字符，从根节点逐字符查找 Trie 树，如果字符查找失败则插入，否则继续查找下一个字符</li>
<li>待插入字符遍历完成，设置最后字符的 <code v-pre>isEnd</code> 为 <code v-pre>true</code></li>
<li>返回插入成功</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>word<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>next<span class="token punctuation">[</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>next<span class="token punctuation">[</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrieNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">[</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    node<span class="token punctuation">.</span>isEnd <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 搜索</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>word<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">[</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">[</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>isEnd
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 前缀匹配</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Trie</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">startsWith</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prefix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prefix<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prefix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">[</span>prefix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">[</span>prefix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



<template><div><h1 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h1>
<p><img src="@source/images/数据结构-字符串.png" alt="image-20231022172226888"></p>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<ul>
<li>
<p>空串：空串指的是未存储任何字符的串，整个串的长度为 0。</p>
</li>
<li>
<p>空格串：空格串指的是由多个（＞0）空格字符组成的串结构，整个串的长度为包含空格字符的个数。</p>
</li>
<li>
<p>子串和主串：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>假设有以下两个串 <span class="token constant">A</span> 和 <span class="token constant">B</span>：

<span class="token constant">A</span>：shujujiegou
<span class="token constant">B</span>：shuju
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在串 A 中可以找到几个连续的字符，它们和串 B 相同。我们可以这样描述它们之间的关系：A 是 B 的主串，B 是 A 的子串。</p>
<ul>
<li>注意：<strong>子串在主串中的位置，指的是子串首个字符在主串中的位置</strong>。
<ul>
<li>例如，串 A 为 &quot;shujujiegou&quot;，串 B 为 &quot;jiegou&quot;，通过观察可以判断 A、B 是主串和子串的关系，即在主串 A 中可以找到 B，B 的第一个字符 'j' 是串 A 中的第 6 个字符，因此子串 B 在主串 A 中的位置就是 6。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="串模式匹配算法" tabindex="-1"><a class="header-anchor" href="#串模式匹配算法" aria-hidden="true">#</a> 串模式匹配算法</h2>
<ul>
<li>串的模式匹配算法，是一种专门定位子串在主串中位置的方法（方案、思想），整个定位的过程称为模式匹配。</li>
<li>此外，在模式匹配的过程中，子串通常又被称为“模式串”。</li>
</ul>
<h3 id="bf-算法-蛮力法" tabindex="-1"><a class="header-anchor" href="#bf-算法-蛮力法" aria-hidden="true">#</a> BF 算法（蛮力法）</h3>
<ul>
<li>
<p>思路：</p>
</li>
<li>
<blockquote>
<ul>
<li>
<p>采用 BF 算法定位模式串在主串中的位置，就是简单粗暴的从主串的起始位置开始，不断地将模式串中的字符和主串中的字符进行对比。</p>
<ul>
<li>
<p>设置两个指针，分别循环遍历主串和字串，将主串和字串一一对应匹配；</p>
<ul>
<li>如果匹配成功，同时后移一位；</li>
<li>如果匹配失败，主串从下个字符开始匹配，字串从头开始匹配；</li>
</ul>
</li>
<li>
<p>遍历结束，如果字串遍历到末尾，表示匹配成功，返回主串指针位置减去字串长度加1，即为字串的初始位置；否则匹配失败；</p>
</li>
</ul>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<p>假设对模式串 A（&quot;abcac&quot;）和主串 B（&quot;ababcabacabab&quot;）进行模式匹配，BF 算法的执行过程如下：</p>
<ol>
<li>
<p>将模式串 A 与主串 B 的首字符对齐，逐个判断相对的字符是否相等，如<img src="@source/images/字符串-字符串匹配-bf.png" alt="image-20231030085258511"></p>
</li>
<li>
<p>图 1 中，由于模式串 A 与主串 B 的第 3 个字符匹配失败，此时将模式串 A 后移一个字符的位置，采用同样的方法重新匹配，如图 2 所示：</p>
<p><img src="@source/images/字符串-字符串匹配-bf1.png" alt="image-20231030085323449"></p>
</li>
<li>
<p>图 2 中可以看到，两个串依旧匹配失败，模式串 A 继续后移一个字符的位置，如图 3 所示：<img src="@source/images/字符串-字符串匹配-bf12.png" alt="image-20231030085345168"></p>
</li>
<li>
<p>图 3 仍然匹配失败，模式串 A 继续向后移动，一直移动至图 4 的位置才匹配成功：</p>
</li>
</ol>
<p><img src="@source/images/字符串-字符串匹配-bf3.png" alt="image-20231030085406884"></p>
<p>从图 1 到图 4，模式串 A 与主串 B 共匹配了 6 次才成功，最终定位到模式串 A 位于主串 B 第 6 的位置处，整个模式匹配的过程就称为 BF 算法。</p>
</li>
<li>
<p>示例2：<img src="@source/images/串模式匹配-暴力.gif" alt="动图"></p>
</li>
</ul>
</li>
<li>
<p>时间复杂度：O(n*m)， n为主串长度，m为模式串长度；空间复杂度： O(1);</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">BFmate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span>sub</span><span class="token punctuation">)</span>  <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j<span class="token operator">&lt;</span>sub<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> sub<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>

            i <span class="token operator">=</span> i<span class="token operator">-</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 回到 i 的初始位置并前移一位</span>
            j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 回到初始位置</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//跳出循环有两种可能，i=strlen(str)说明已经遍历完主串，匹配失败；j=strlen(sub),说明模式串遍历完成，在主串中成功匹配</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>j<span class="token operator">===</span>sub<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 字串指针走到最后，匹配结束，完成匹配</span>
        <span class="token keyword">return</span> i<span class="token operator">-</span> sub<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 主串位置减去字串位置表示回到珠串匹配成功初始位置</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//运行到此，为 i==strlen(sub) 的情况，模式匹配失败</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="kmp-快速匹配算法" tabindex="-1"><a class="header-anchor" href="#kmp-快速匹配算法" aria-hidden="true">#</a> KMP（快速匹配算法）</h3>
<h4 id="kmp匹配过程" tabindex="-1"><a class="header-anchor" href="#kmp匹配过程" aria-hidden="true">#</a> KMP匹配过程</h4>
<blockquote>
<ul>
<li>
<p>在暴力匹配过程中，如果主串和模式串某个字符不匹配，将从模式串的第一个字符和主串的下一个字符开始重新匹配，这种算法时间复杂度则是<code v-pre>O(mn)</code>；</p>
</li>
<li>
<p>KMP算法的核心是利用匹配失败后的信息，尽量减模式串与主串的匹配次数以达到快速匹配的目的。</p>
</li>
<li>
<p>示例：字符串 Str1 = “BBC ABCDAB ABCDABCDABDE”，判断里面是否包含另一个字符串 Str2 = “ABCDABD”：</p>
<ul>
<li>
<p>1、首先，用Str1的第一个字符和Str2的第一个字符去比较，不符合，关键词向后移动一位。</p>
<p><img src="@source/images/kmp-demo.png" alt="img"></p>
<p>2、重复第一步，还是不符合，再后移。</p>
<p><img src="@source/images/kmp-demo1.png" alt="img"></p>
<p>3、一直重复，直到Str1有一个字符与Str2的第一个字符符合为止。</p>
<p><img src="@source/images/kmp-demo2.png" alt="img"></p>
<p>4、接着比较字符串和搜索词的下一个字符，还是符合。</p>
<p><img src="@source/images/kmp-demo3.png" alt="img"></p>
<p>5、遇到Str1有一个字符与Str2对应的字符不符合。</p>
<p><img src="@source/images/kmp-demo4.png" alt="img"></p>
<p>6、这时候想到的是继续遍历Str1的下一个字符，重复第1步。</p>
<p><img src="@source/images/kmp-demo5.png" alt="img"></p>
<p>7、其实这是很不明智的，因为此时”ABCDAB”已经比较过了，没有必要再做重复的工作，一个基本事实是，当空格与D不匹配时，你其实知道前面六个字符是”ABCDAB”。</p>
<p>KMP算法的想法是，设法利用这个已知信息，不要把”搜索位置“移回已经比较过的位置，继续把他向后移，这样就提高了效率。</p>
<p>怎么做到把刚刚重复的步骤省略掉？可以对Str2计算出一张《匹配表》，这张表的产生在后面介绍。</p>
<p><img src="@source/images/kmp-demo6.png" alt="img"></p>
<p>8、已知空格与D不匹配时，前面六个字符”ABCDAB”是匹配的。查表可知，最后一个匹配字符B对应的”部分匹配值”为2，因此我们只需要让模式串Str2的下标移动到对应下标为2的位置，也就是C，此时Str1的下标还是保持不变，在空格处，这样就避免了Str1下标回溯到第6步了，这样就大大减少了Str1的比较次数。</p>
<p><img src="@source/images/kmp-demo7.png" alt="img"></p>
<p>9、因为空格与Ｃ不匹配，搜索词还要继续往后移。这时已匹配的字符串为”AB”，最后一个匹配字符B对应的”部分匹配值”为0。因此我们只需要让模式串Str2的下标移动到对应下标为0的位置，也就是A，此时Str1的下标还是保持不变。</p>
<p><img src="@source/images/kmp-demo8.png" alt="img"></p>
<p>10、因为空格与A不匹配，并且此时并没有匹配的字符，因此只能继续后移一位。</p>
<p><img src="@source/images/kmp-demo10.png" alt="img"></p>
<p>11、然后逐位比较，直到发现C与D不匹配。</p>
<p><img src="@source/images/kmp-demo11.png" alt="img"></p>
<p>12、因为C与D不匹配，这时已匹配的字符串为”ABCDAB”，最后一个匹配字符B对应的”部分匹配值”为2。因此我们只需要让模式串Str2的下标移动到对应下标为2的位置，也就是C，此时Str1的下标还是保持不变。</p>
<p><img src="@source/images/kmp-demo12.png" alt="img"></p>
<p>13、然后逐位比较，直到搜索词的最后一位，发现完全匹配，于是搜索完成。</p>
<p><img src="@source/images/kmp-demo13.png" alt="img"></p>
</li>
</ul>
</li>
</ul>
</blockquote>
<h4 id="kmp的部分匹配表" tabindex="-1"><a class="header-anchor" href="#kmp的部分匹配表" aria-hidden="true">#</a> KMP的部分匹配表</h4>
<h5 id="字符串的前缀和后缀" tabindex="-1"><a class="header-anchor" href="#字符串的前缀和后缀" aria-hidden="true">#</a> 字符串的前缀和后缀</h5>
<ul>
<li>前缀：包含首字母但不包含尾字母的所有子串。
<ul>
<li>如果字符串A和B，存在A=BS，其中S是任意的非空字符串，那就称B为A的前缀。</li>
<li>例如，”Harry”的前缀包括{”H”, ”Ha”, ”Har”, ”Harr”}，我们把所有前缀组成的集合，称为字符串的前缀集合；</li>
</ul>
</li>
<li>后缀：包含尾字母但不包含首字母的所有子串。
<ul>
<li>后缀A=SB， 其中S是任意的非空字符串，那就称B为A的后缀</li>
<li>例如，”Potter”的后缀包括{”otter”, ”tter”, ”ter”, ”er”, ”r”}，然后把所有后缀组成的集合，称为字符串的后缀集合</li>
</ul>
</li>
</ul>
<h5 id="kmp的部分匹配表-1" tabindex="-1"><a class="header-anchor" href="#kmp的部分匹配表-1" aria-hidden="true">#</a> KMP的部分匹配表</h5>
<ul>
<li>
<p>KMP的部分匹配表：<strong>字符串的前缀集合与后缀集合的交集中最长元素的长度</strong>。</p>
<ul>
<li>
<blockquote>
<p>示例：对于字符串”ababa”，它的前缀集合为{”a”, ”ab”, ”aba”, ”abab”}，它的后缀集合为{”baba”, ”aba”, ”ba”, ”a”}， 两个集合的交集为{”a”, ”aba”}，其中最长的元素为”aba”，长度为3</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>以模式串“ABCAB”为例，逐步获取该模式串的匹配表：</p>
<blockquote>
<ul>
<li>
<p>A：</p>
<ul>
<li>前缀：空；</li>
<li>后缀：空；</li>
<li>两个集合的交集为空，匹配值为0；</li>
</ul>
</li>
<li>
<p>AB：匹配值为0；</p>
<ul>
<li>前缀：{A}；</li>
<li>后缀：{B}；</li>
<li>两个集合的交集为空，匹配值为0；</li>
</ul>
</li>
<li>
<p>ABC：匹配值为0；</p>
<ul>
<li>前缀：{A}、{AB}；</li>
<li>后缀：{B}、{BC}；</li>
<li>两个集合的交集为空，匹配值为0；</li>
</ul>
</li>
<li>
<p>ABCA：匹配值为1;</p>
<ul>
<li>前缀：{A}、{AB}、{ABC}；</li>
<li>后缀：{A}、{CA}、{BCA}；</li>
<li>两个集合的交集为{A}，最长元素长度为1，匹配值为1；</li>
</ul>
</li>
<li>
<p>ABCAB：匹配值为2：</p>
<ul>
<li>前缀：{A}、{AB}、{ABC}、{ABCA}；</li>
<li>后缀：{B}、{AB}、{CAB}、{BCAB}；</li>
<li>两个集合的交集为{AB}，最长元素长度为2，匹配值为2；</li>
</ul>
</li>
<li>
<p>因此，“ABCAB” 该模式串的匹配表为</p>
<p><img src="@source/images/kmp-demo15.png" alt="img"></p>
</li>
<li>
<p>注意：<strong>模式串中第一个字符对应的 为 0，这是固定不变的。</strong></p>
</li>
</ul>
</blockquote>
</li>
</ul>
<h5 id="部分匹配表算法实现" tabindex="-1"><a class="header-anchor" href="#部分匹配表算法实现" aria-hidden="true">#</a> 部分匹配表算法实现</h5>
<ul>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>构建 next 数组，next[j] 表示<strong>str[j] 字符前面的字符串中最大的公共前后缀的长度</strong>;</li>
<li><strong>KMP 算法永不回退 模式串 的指针 <code v-pre>j</code>，而是借助 <code v-pre>next</code> 数组中储存的信息把 指针 移到正确的位置继续匹配</strong>；</li>
<li></li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getNext</span><span class="token punctuation">(</span><span class="token parameter">pattern</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 创建一个用于存储next数组的数组</span>
  next<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 初始化next[0]为-1</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// i为当前字符的位置</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// j为当前字符的最长前缀的后缀的位置</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> pattern<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> pattern<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当j为-1（即最长前缀的后缀不存在）或当前字符与最长前缀的后缀相等时</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
      next<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>  <span class="token comment">// 设置next[i]为j</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> next<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 更新j为当前字符的最长前缀的后缀的位置</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h5 id="kmp-算法实现" tabindex="-1"><a class="header-anchor" href="#kmp-算法实现" aria-hidden="true">#</a> KMP 算法实现</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">kmpSearch</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> pattern</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> next <span class="token operator">=</span> <span class="token function">getNext</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取模式字符串的next数组</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// text的索引</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// pattern的索引</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> text<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> text<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> pattern<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当j为-1（即最长前缀的后缀不存在）或当前字符匹配时</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> next<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 更新j为当前字符的最长前缀的后缀的位置</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i <span class="token operator">-</span> j<span class="token punctuation">;</span> <span class="token comment">// 返回匹配的起始位置</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 未找到匹配</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">'ABABDABACDABABCABAB'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pattern <span class="token operator">=</span> <span class="token string">'ABABCABAB'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token function">kmpSearch</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出匹配的起始位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="算法题" tabindex="-1"><a class="header-anchor" href="#算法题" aria-hidden="true">#</a> 算法题</h2>
<h3 id="最长公共前缀" tabindex="-1"><a class="header-anchor" href="#最长公共前缀" aria-hidden="true">#</a> 最长公共前缀</h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>编写一个函数来查找字符串数组中的最长公共前缀。</p>
</li>
<li>
<p>如果不存在公共前缀，返回空字符串 <code v-pre>&quot;&quot;</code>。</p>
</li>
<li>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"flower"</span><span class="token punctuation">,</span><span class="token string">"flow"</span><span class="token punctuation">,</span><span class="token string">"flight"</span><span class="token punctuation">]</span>
输出：<span class="token string">"fl"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"dog"</span><span class="token punctuation">,</span><span class="token string">"racecar"</span><span class="token punctuation">,</span><span class="token string">"car"</span><span class="token punctuation">]</span>
输出：<span class="token string">""</span>
解释：输入不存在公共前缀。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>提示：</strong></p>
<ul>
<li>
<blockquote>
<p><code v-pre>1 &lt;= strs.length &lt;= 200</code></p>
<p><code v-pre>0 &lt;= strs[i].length &lt;= 200</code></p>
<p><code v-pre>strs[i]</code> 仅由小写英文字母组成</p>
</blockquote>
</li>
</ul>
</li>
</ul>
</blockquote>
</li>
<li>
<p>解法一：<strong>纵向扫描，逐个单词匹配</strong></p>
<blockquote>
<ul>
<li>设定指针 i 指向数组元素，指针 j 指向字符串；</li>
<li>取数组中第一个字符串的每个字符作为单词 word；</li>
<li>遍历数组，比较数组中每个字符串对应位置的单词是否等于 word:
<ul>
<li>相等，继续查找下一个字符串的对应位置单词</li>
<li>不相等，退出循环</li>
</ul>
</li>
<li>数组遍历完成后，执行以下操作：
<ul>
<li>重置数组下标，从数组第二个元素开始遍历；</li>
<li>字符串单词指针后移一位；</li>
<li>拼接单词和公共字符串</li>
<li>继续取第一个字符串的每个字符作为单词 word；</li>
</ul>
</li>
<li>注意：注意边界条件判断；</li>
<li><img src="@source/images/最长公共前缀2.png" alt="image-20231101105113151"></li>
<li>复杂度：
<ul>
<li>时间复杂度：O(mn)，其中 m是字符串数组中的字符串的平均长度，n 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。</li>
<li>空间复杂度：O(1)。使用的额外空间复杂度为常数。</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">strs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>strs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">// 边界条件：strs为空，返回空</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>strs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 边界条件：strs长度为1，返回唯一的字符串</span>
    <span class="token keyword">let</span> subStr <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> word <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">===</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
            subStr <span class="token operator">+=</span> word<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        word <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>word<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 边界条件：空字符串时，退出循环</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> subStr<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法二：<strong>横向扫描，求解相邻字符串的最长公共前缀</strong></p>
<blockquote>
<ul>
<li>
<p>假设第一个字符串为最长公共前缀串 prefix；</p>
</li>
<li>
<p>依次遍历字符串数组中的每个字符串，对于每个遍历到的字符串：</p>
<ul>
<li>获取当前字符串 strs[i] 和最长公共前缀串 prefix 的 最长公共前缀串;</li>
<li>更新最长公共前缀;</li>
</ul>
</li>
<li>
<p>当遍历完所有的字符串以后，即可得到字符串数组中的最长公共前缀</p>
<p><img src="@source/images/最长公共前缀.png" alt="image-20231101104705464"></p>
</li>
<li>
<p>复杂度：</p>
<ul>
<li>时间复杂度：O(mn)，其中 m是字符串数组中的字符串的平均长度，n 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。</li>
<li>空间复杂度：O(1)。使用的额外空间复杂度为常数。</li>
</ul>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>strs <span class="token operator">||</span> strs<span class="token punctuation">.</span>length <span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prefix <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		prefix <span class="token operator">=</span> <span class="token function">getLongestCommonPrefix</span><span class="token punctuation">(</span>prefix<span class="token punctuation">,</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>prefix<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token keyword">return</span> prefix<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">getLongestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prefix<span class="token punctuation">,</span> str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>prefix<span class="token punctuation">.</span>length<span class="token punctuation">,</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>prefix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
    <span class="token keyword">return</span> prefix<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法三：<strong>分治</strong></p>
<blockquote>
<ul>
<li>
<p>对于问题 LCP(Si⋯Sj)，可以分解成两个子问题 LCP(Si…Smid)与 LCP(Smid+1…Sj)，其中 mid=i+j2。</p>
</li>
<li>
<p>递归对两个子问题分别求解，然后对两个子问题的解计算最长公共前缀，即为原问题的解。</p>
<p><img src="@source/images/最长公共前缀3.png" alt="image-20231101111848218"></p>
</li>
</ul>
</blockquote>
<ul>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>strs <span class="token operator">||</span> strs<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">splitArray</span><span class="token punctuation">(</span>strs<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>strs<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 拆分数组</span>
<span class="token keyword">var</span> <span class="token function-variable function">splitArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs<span class="token punctuation">,</span>start<span class="token punctuation">,</span>end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>start <span class="token operator">===</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> strs<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 注意中间位置要取整</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token operator">+</span> start<span class="token punctuation">;</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">splitArray</span><span class="token punctuation">(</span>strs<span class="token punctuation">,</span>start<span class="token punctuation">,</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拆分左侧数组</span>
        <span class="token keyword">let</span> rifht <span class="token operator">=</span>  <span class="token function">splitArray</span><span class="token punctuation">(</span>strs<span class="token punctuation">,</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 拆分右侧数组</span>
        <span class="token keyword">return</span> <span class="token function">commonPrefix</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>rifht<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 求左右数组字符串最大公共前缀</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">commonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span>right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>length<span class="token punctuation">,</span>right<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> right<span class="token punctuation">[</span>i<span class="token punctuation">]</span>  <span class="token operator">&amp;&amp;</span> i<span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>解法四：<strong>二分查找</strong></p>
<blockquote>
<ul>
<li>最长公共前缀的长度不会超过字符串数组中的最短字符串的长度。</li>
<li>用 minLength表示字符串数组中的最短字符串的长度，则可以在[0,minLength] 的范围内在第一个字符串上通过二分查找，得到最长公共前缀的长度，最长公共前缀的长度就是查找到的位置 i.</li>
<li>每次取查找范围的中间值 mid，判断每个字符串的长度为 mid 的前缀是否相同:
<ul>
<li>如果相同则最长公共前缀的长度一定大于或等于 mid;</li>
<li>如果不相同则最长公共前缀的长度一定小于 mid;</li>
<li>通过上述方式将查找范围缩小一半，直到得到最长公共前缀的长度。</li>
</ul>
</li>
</ul>
<p><img src="@source/images/最长公共前缀4.png" alt="image-20231101150801198"></p>
</blockquote>
<ul>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>strs <span class="token operator">||</span> strs<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> minLength <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
    <span class="token comment">// 查找最小长度的字符串长度</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       	minLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minLength<span class="token punctuation">,</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 取第一个字符串，从 [0,minLength] 区间查找最长公共前缀的位置</span>
    <span class="token keyword">let</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> height <span class="token operator">=</span> minLength<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>low<span class="token operator">&lt;</span>height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 取字符串中间位置，二分查找最小长度的字符串长度位置</span>
        <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>height<span class="token operator">-</span>low<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> low<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isCommonPrefix</span><span class="token punctuation">(</span>strs<span class="token punctuation">,</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// [0,mid] 是公共前缀串，则说明最长公共前缀的位置在 [mid,minLength]</span>
            low <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            height <span class="token operator">=</span>  mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>low<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回第一个字符串截取的最长公共前缀的位置子串</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">isCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs<span class="token punctuation">,</span>pos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> prefixStr <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>pos<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//截取第一个字符串的 [0,pos]位置子串，判断子串是否为公共前缀（注意：不是最长公共前缀）</span>
    <span class="token comment">// 遍历其他字符串，判断是否 prefixStr 是否为前缀串</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> subStr <span class="token operator">=</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>pos<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>prefixStr <span class="token operator">!=</span> subStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span>
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="最长回文子串" tabindex="-1"><a class="header-anchor" href="#最长回文子串" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/longest-palindromic-substring/solutions/255195/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/" target="_blank" rel="noopener noreferrer">最长回文子串<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p>题目：</p>
<blockquote>
<ul>
<li>
<p>给你一个字符串 s，找到 s 中最长的回文子串。</p>
</li>
<li>
<p>如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。</p>
</li>
<li>
<p>示例 1：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：s <span class="token operator">=</span> <span class="token string">"babad"</span>
输出：<span class="token string">"bab"</span>
解释：<span class="token string">"aba"</span> 同样是符合题意的答案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>示例 2：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>输入：s <span class="token operator">=</span> <span class="token string">"cbbd"</span>
输出：<span class="token string">"bb"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>提示：</p>
</li>
</ul>
<blockquote>
<p>1 &lt;= s.length &lt;= 1000
s 仅由数字和英文字母组成</p>
</blockquote>
</blockquote>
</li>
<li>
<p>解法一：<strong>中心扩展法</strong></p>
<ul>
<li>
<p>思路</p>
<blockquote>
<ul>
<li>
<p>从每一个位置出发，向两边扩散即可。遇到不是回文的时候结束。</p>
<ul>
<li>举个例子，str=acdbbdaa 我们需要寻找从第一个 b（位置为 333）出发最长回文串为多少。</li>
<li>怎么寻找？ 首先往左寻找与当期位置相同的字符，直到遇到不相等为止。</li>
<li>然后往右寻找与当期位置相同的字符，直到遇到不相等为止。</li>
<li>最后左右双向扩散，直到左和右不相等</li>
</ul>
</li>
<li>
<p>位置中心有两种情况:</p>
<ul>
<li>一种是回文子串长度为奇数（如aba，中心是b）</li>
<li>另一种回文子串长度为偶数（如abba，中心是b，b）</li>
</ul>
</li>
<li>
<p>循环遍历字符串 对取到的每个值 都假设他可能成为最后的中心进行判断</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> sub <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 回文子串长度是奇数</span>
            <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 回文子串长度是偶数</span>
            <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                left<span class="token operator">--</span><span class="token punctuation">;</span>
                right<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻</span>
            <span class="token comment">// 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1</span>
            <span class="token comment">// 如果此时回文串比上一个回文串长度大，取较长的回文串</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">></span> sub<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// slice也要取[m+1,n-1]这个区间 </span>
                sub <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sub<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</div></template>



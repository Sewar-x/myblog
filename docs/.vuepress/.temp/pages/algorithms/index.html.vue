<template><div><h1 id="数据结构-算法" tabindex="-1"><a class="header-anchor" href="#数据结构-算法" aria-hidden="true">#</a> 数据结构/算法</h1>
<h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2>
<p><img src="@source/images/算法和数据结构大纲.png" alt="image-20231007112846746"></p>
<h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念" aria-hidden="true">#</a> 基础概念</h2>
<h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h3>
<p><img src="@source/images/数据结构概念.png" alt="image-20210707154220796"></p>
<ul>
<li>根据数据结构，可以分为线性表、字符串、树、图。</li>
</ul>
<h3 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表" aria-hidden="true">#</a> 线性表</h3>
<p><img src="@source/images/线性表.png" alt="image-20210707155311589"></p>
<h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3>
<p><img src="@source/images/字符串.png" alt="image-20210707155417730"></p>
<h3 id="树结构" tabindex="-1"><a class="header-anchor" href="#树结构" aria-hidden="true">#</a> 树结构</h3>
<p><img src="@source/images/树.png" alt="image-20210707155457783"></p>
<h3 id="图结构" tabindex="-1"><a class="header-anchor" href="#图结构" aria-hidden="true">#</a> 图结构</h3>
<p><img src="@source/images/图.png" alt="image-20210707155545815"></p>
<h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3>
<ul>
<li>
<p>一个算法的时间复杂度反映了程序运行从开始到结束所需要的时间。</p>
</li>
<li>
<p>把算法中基本操作重复执行的次数（频度）作为算法的时间复杂度。</p>
<ul>
<li>没有循环语句，记作<code v-pre>O(1)</code>，也称为常数阶。</li>
<li>只有一重循环，则算法的基本操作的执行频度与问题规模n呈线性增大关系，记作<code v-pre>O（n）</code>，也叫线性阶。</li>
</ul>
</li>
<li>
<p>常见的时间复杂度有：</p>
<ul>
<li><code v-pre>O(1)</code>: Constant Complexity: Constant 常数复杂度：表示算法的执行时间不随输入规模的增长而变化，即执行时间是固定的。例如，访问一个数组的任意一个元素，无论数组的大小是多少，都只需要一步操作。</li>
<li><code v-pre>O(log n)</code>: Logarithmic Complexity: 对数复杂度：表示算法的执行时间随输入规模呈对数增长。例如，二分查找算法，在每次比较后都能将搜索范围减半，所以执行时间随着输入规模的增大而缩小。</li>
<li><code v-pre>O(n)</code>: Linear Complexity: 线性时间复杂度：表示算法的执行时间与输入规模成线性关系。例如，遍历一个包含n个元素的数组，需要执行n次操作。</li>
<li><code v-pre>O(n^2)</code>: N square Complexity 平⽅方：表示算法的执行时间随输入规模的平方增长。例如，嵌套循环遍历一个包含n个元素的数组，总共需要执行n^2次操作。</li>
<li><code v-pre>O(n^3)</code>: N square Complexity ⽴立⽅方：三层嵌套循环遍历一个包含n个元素的数组，总共需要执行n^2次操作。
<ul>
<li>对于n层嵌套的循环，时间复杂度的计算方法与三层循环类似。我们需要分析每一层循环的执行次数，并将它们相乘。</li>
</ul>
</li>
<li><code v-pre>O(2^n)</code>: Exponential Growth 指数</li>
<li><code v-pre>O(n!)</code>: Factorial 阶乘</li>
</ul>
</li>
</ul>
<p><img src="@source/images/时间复杂度.png" alt="img"></p>
<h3 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h3>
<ul>
<li>
<p>一个程序的空间复杂度是指运行完一个程序所需内存的大小。</p>
</li>
<li>
<p>利用程序的空间复杂度，可以对程序的运行所需要的内存多少有个预先估计。</p>
</li>
<li>
<p>一个程序执行时除了需要存储空间和存储本身所使用的指令、常数、变量和输入数据外，还需要一些对数据进行操作的工作单元和存储一些为现实计算所需信息的辅助空间。</p>
</li>
</ul>
<hr>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<p><a href="http://data.biancheng.net/view/72.html" target="_blank" rel="noopener noreferrer">c语言实现数据结构和算法<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/6844903919722692621#heading-42" target="_blank" rel="noopener noreferrer">前端该如何准备数据结构和算法？<ExternalLinkIcon/></a></p>
<p><a href="https://bilibili.com/video/BV13g41157hK/?spm_id_from=333.999.0.0&amp;vd_source=0c5c6ac7ddc21ccc8901d97d01bad522" target="_blank" rel="noopener noreferrer">左程云-算法与数据结构基础教程<ExternalLinkIcon/></a></p>
</div></template>



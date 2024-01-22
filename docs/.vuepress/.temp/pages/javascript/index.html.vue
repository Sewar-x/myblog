<template><div><h2 id="javascript-基础" tabindex="-1"><a class="header-anchor" href="#javascript-基础" aria-hidden="true">#</a> JavaScript 基础</h2>
<h3 id="es6新特性" tabindex="-1"><a class="header-anchor" href="#es6新特性" aria-hidden="true">#</a> ES6新特性</h3>
<ol>
<li>let const</li>
<li>字符串、数组、对象的方法扩展</li>
<li>symbol、set、map新的数据类型和数据结构</li>
<li>proxy代理拦截</li>
<li>异步解决方案：promise、generate，async、await</li>
<li>class类</li>
<li>module模块</li>
</ol>
<p>详情可参考：<a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">ES6 入门教程 - 阮一峰<ExternalLinkIcon/></a></p>
<h3 id="严格模式的限制" tabindex="-1"><a class="header-anchor" href="#严格模式的限制" aria-hidden="true">#</a> 严格模式的限制</h3>
<ol>
<li>变量必须声明后再使用</li>
<li>函数的参数不能有同名属性，否则报错</li>
<li>不能使用with语句</li>
<li>不能对只读属性赋值，否则报错</li>
<li>不能使用前缀0表示八进制数，否则报错</li>
<li>不能删除不可删除的属性，否则报错</li>
<li>不能删除变量delete prop，会报错，只能删除属性delete global[prop]</li>
<li>eval不会在它的外层作用域引入变量</li>
<li>eval和arguments不能被重新赋值</li>
<li>arguments不会自动反映函数参数的变化</li>
<li>不能使用arguments.callee</li>
<li>不能使用arguments.caller</li>
<li>禁止this指向全局对象</li>
<li>不能使用fn.caller和fn.arguments获取函数调用的堆栈</li>
<li>增加了保留字（比如protected、static和interface）</li>
</ol>
<h3 id="script-标签加载脚本" tabindex="-1"><a class="header-anchor" href="#script-标签加载脚本" aria-hidden="true">#</a> Script 标签加载脚本</h3>
<p><img src="@source/images/script3.png" alt=""></p>
<p><img src="@source/images/script2.png" alt="script2"></p>
<p><img src="@source/images/script1.png" alt="script1"></p>
<h3 id="js-延迟加载方式" tabindex="-1"><a class="header-anchor" href="#js-延迟加载方式" aria-hidden="true">#</a> JS 延迟加载方式</h3>
<p>js延迟加载，也就是等页面加载完成之后再加载JavaScript文件。js延迟加载有助于提高页面加载速度</p>
<p>一般有以下几种方式：</p>
<ul>
<li>defer属性</li>
<li>async属性</li>
<li>动态创建DOM方式：对文档的加载事件进行监听，当文档加载完成后再动态的创建script标签来引入js脚本</li>
<li>使用setTimeout延迟方法</li>
<li>让JS最后加载</li>
</ul>
<h3 id="内存分类" tabindex="-1"><a class="header-anchor" href="#内存分类" aria-hidden="true">#</a> 内存分类</h3>
<p><img src="@source/images/neicunfenlei.png" alt=""></p>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<ul>
<li>基本类型：Number、Boolean、String、null、undefined、symbol（ES6 新增的）， BigInt（ES2020）</li>
<li>引用类型：Object</li>
<li>基本包装类型（Array，Function）</li>
</ul>
<p><img src="@source/images/data-type.png" alt=""></p>
<p><strong>基本数据类型：</strong></p>
<p><img src="@source/images/jibenshujuleixing1.png" alt=""></p>
<p><img src="@source/images/jibenshujuleixing2.png" alt="jibenshujuleixing2"></p>
<p><img src="@source/images/jibenshujuleixing3.png" alt="jibenshujuleixing1"></p>
<p><strong>引用类型：</strong></p>
<p><img src="@source/images/yingyongleixing1.png" alt=""></p>
<p><img src="@source/images/yingyongleixing2.png" alt="yingyongleixing1"></p>
<p><strong>包装类型:</strong></p>
<p><img src="@source/images/baozhuangleixing1.png" alt=""></p>
<p><img src="@source/images/baozhuangleixing2.png" alt="baozhuangleixing1"></p>
<h3 id="undefined-null" tabindex="-1"><a class="header-anchor" href="#undefined-null" aria-hidden="true">#</a> undefined &amp; null</h3>
<blockquote>
<p><strong>undefined与undeclared区别?</strong></p>
</blockquote>
<ul>
<li>已在作用域中声明但还没有赋值的变量，是undefined的。</li>
<li>还没有在作用域中声明过的变量，是undeclared的。</li>
<li>对于undeclared变量的引用，浏览器会报引用错误，如ReferenceError:bisnotdefined。但是我们可以使用typeof的安全防范机制来避免报错，因为对于undeclared（或者notdefined）变量，typeof会返回&quot;undefined&quot;。</li>
</ul>
<blockquote>
<p><strong>null和undefined区别?</strong></p>
</blockquote>
<ul>
<li>Undefined和Null都是基本数据类型，这两个基本数据类型分别都只有一个值，就是undefined和null。</li>
<li>undefined代表的含义是未定义，null代表的含义是空对象。</li>
<li>一般变量声明了但还没有定义的时候会返回undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。</li>
<li>undefined在js中不是一个保留字，这意味着我们可以使用undefined来作为一个变量名，这样的做法是非常危险的，它会影响我们对undefined值的判断。但是我们可以通过一些方法获得安全的undefined值，比如说void0。</li>
<li>当我们对两种类型使用typeof进行判断的时候，Null类型化会返回“object”，这是一个历史遗留的问题。</li>
<li>当我们使用双等号对两种类型的值进行比较时会返回true，使用三个等号时会返回false</li>
</ul>
<blockquote>
<p><strong>如何获取安全的undefined值?</strong></p>
</blockquote>
<ul>
<li>用 void 0 来获得 undefined</li>
<li>因为undefined是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响undefined的正常判断。表达式void___没有返回值，因此返回结果是undefined。void并不改变表达式的结果，只是让表达式不返回值。</li>
</ul>
<h3 id="nan" tabindex="-1"><a class="header-anchor" href="#nan" aria-hidden="true">#</a> NaN</h3>
<blockquote>
<p><strong>NaN 是什么，用 typeof 会输出什么？</strong></p>
</blockquote>
<ul>
<li>
<p>Not a Number，表示非数字，NaN意指“不是一个数字”（notanumber），NaN是一个“警戒值”（sentinelvalue，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。</p>
</li>
<li>
<p>typeof NaN === 'number'</p>
</li>
<li>
<p>NaN是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即x===x不成立）的值。而NaN!=NaN为true。</p>
</li>
</ul>
<blockquote>
<p><strong>isNaN() 和 Number.isNaN() 函数的区别?</strong></p>
</blockquote>
<ul>
<li>函数 isNaN() 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回true，因此非数字值传入也会返回true，会影响NaN的判断</li>
<li>函数 Number.isNaN() 会首先判断传入参数是否为数字，如果是数字再继续判断是否为NaN，这种方法对于NaN的判断更为准确</li>
<li>总结： isNaN() 判断不准确，非数字返回 true；Number.isNaN() 判断更为准确</li>
</ul>
<h3 id="精度丢失" tabindex="-1"><a class="header-anchor" href="#精度丢失" aria-hidden="true">#</a> 精度丢失</h3>
<ul>
<li>解释一：</li>
</ul>
<p><img src="@source/images/jingduduishi.png" alt=""></p>
<ul>
<li>
<p>解释二：</p>
<p>JavaScirpt 使用 Number 类型来表示数字（整数或浮点数），遵循 IEEE 754 标准，通过 64 位来表示一 个数字（1 + 11 + 52）</p>
<ul>
<li>1 符号位，0 表示正数，1 表示负数 s</li>
<li>11 指数位（e）</li>
<li>52 尾数，小数部分（即有效数字）</li>
</ul>
<p>最大安全数字：Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1，转换成整数就是 16 位，所以 0.1 === 0.1，是因为通过 toPrecision(16) 去有效位之后，两者是相等的。</p>
<p>在两数相加时，会先转换成二进制，0.1 和 0.2 转换成二进制的时候尾数会发生无限循环，然后进行对阶 运算，JS 引擎对二进制进行截断，所以造成精度丢失。</p>
<p>总结：<strong>精度丢失可能出现在进制转换和对阶运算中</strong></p>
</li>
</ul>
<h3 id="整数相关问题" tabindex="-1"><a class="header-anchor" href="#整数相关问题" aria-hidden="true">#</a> 整数相关问题</h3>
<blockquote>
<p><strong>JS整数是怎么表示的？</strong></p>
</blockquote>
<p>​	通过 Number 类型来表示，遵循 IEEE754 标准，通过 64 位来表示一个数字，（1 + 11 + 52），最大安 全数字是 Math.pow(2, 53) - 1，对于 16 位十进制。（符号位 + 指数位 + 小数部分有效位）</p>
<blockquote>
<p><strong>Number() 的存储空间是多大？如果后台发送了一个超过最大自己的数字怎么办</strong></p>
</blockquote>
<p>​	Math.pow(2, 53) ，53 为有效数字，会发生截断，等于 JS 能支持的最大数字</p>
<h3 id="显示转换-隐式转换" tabindex="-1"><a class="header-anchor" href="#显示转换-隐式转换" aria-hidden="true">#</a> 显示转换&amp;隐式转换</h3>
<p><strong>显示转换</strong></p>
<p>显示转换一般指使用Number、String和Boolean三个构造函数，手动将各种类型的值，转换成数字、字符串或者布尔值</p>
<p><strong>隐式转换</strong>：</p>
<p>运算符两边数据类型不一致，编译器自动转换数据类型</p>
<ul>
<li>转成string类型：+号两边如果有一边是字符串，则会把另一边转换成字符串，然后进行拼接</li>
<li>转成number类型：
<ul>
<li>以下几种运算符会将任何数据转换成number类型再运算，如果无法转换则为NaN
<ul>
<li>数学正号 ： +num</li>
<li>当 +/-号写在一个变量名的前面，此时表示数学的正/负数</li>
<li>自增自减（++ --）</li>
<li>算术运算符（+ - * / %）</li>
<li>比较运算符(&gt; &lt; &gt;= &lt;= == != === !==)
说明：全等与不全等会先比较值（此时会隐式转换再比较），然后再比较数据类型</li>
</ul>
</li>
</ul>
</li>
<li>转成boolean类型：逻辑非（！）会将任何数据转为boolean类型再运算</li>
</ul>
<h3 id="运算符规则" tabindex="-1"><a class="header-anchor" href="#运算符规则" aria-hidden="true">#</a> 运算符规则</h3>
<p><strong>加号规则</strong></p>
<p><img src="@source/images/cuozofu+.png" alt=""></p>
<p><strong>减号规则</strong></p>
<p><img src="@source/images/caozuofu-.png" alt=""></p>
<p><strong>等号规则</strong></p>
<p><img src="@source/images/cauozuofu=.png" alt=""></p>
<p><strong>布尔操作符</strong></p>
<p><img src="@source/images/booleancaozuo.png" alt=""></p>
<h3 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h3>
<ul>
<li>
<p>位运算符工作于32位的数字上。任何数字操作都将转换为32位。结果会转换为 JavaScript 数字。</p>
</li>
<li>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">例子</th>
<th style="text-align:left">类似于</th>
<th style="text-align:left">结果</th>
<th style="text-align:left">十进制</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">&amp;</td>
<td style="text-align:left">AND</td>
<td style="text-align:left">x = 5 &amp; 1</td>
<td style="text-align:left">0101 &amp; 0001</td>
<td style="text-align:left">0001</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left">|</td>
<td style="text-align:left">OR</td>
<td style="text-align:left">x = 5 | 1</td>
<td style="text-align:left">0101 | 0001</td>
<td style="text-align:left">0101</td>
<td style="text-align:left">5</td>
</tr>
<tr>
<td style="text-align:left">~</td>
<td style="text-align:left">取反</td>
<td style="text-align:left">x = ~ 5</td>
<td style="text-align:left">~0101</td>
<td style="text-align:left">1010</td>
<td style="text-align:left">-6</td>
</tr>
<tr>
<td style="text-align:left">^</td>
<td style="text-align:left">异或</td>
<td style="text-align:left">x = 5 ^ 1</td>
<td style="text-align:left">0101 ^ 0001</td>
<td style="text-align:left">0100</td>
<td style="text-align:left">4</td>
</tr>
<tr>
<td style="text-align:left">&lt;&lt;</td>
<td style="text-align:left">左移</td>
<td style="text-align:left">x = 5 &lt;&lt; 1</td>
<td style="text-align:left">0101 &lt;&lt; 1</td>
<td style="text-align:left">1010</td>
<td style="text-align:left">10</td>
</tr>
<tr>
<td style="text-align:left">&gt;&gt;</td>
<td style="text-align:left">右移</td>
<td style="text-align:left">x = 5 &gt;&gt; 1</td>
<td style="text-align:left">0101 &gt;&gt; 1</td>
<td style="text-align:left">0010</td>
<td style="text-align:left">2</td>
</tr>
</tbody>
</table>
<p>(引用<a href="https://www.runoob.com/jsref/jsref-operators.html" target="_blank" rel="noopener noreferrer">菜鸟教程-JavaScript 位运算符<ExternalLinkIcon/></a>)</p>
</li>
</ul>
<h4 id="异或运算" tabindex="-1"><a class="header-anchor" href="#异或运算" aria-hidden="true">#</a> 异或运算</h4>
<h5 id="运算规则" tabindex="-1"><a class="header-anchor" href="#运算规则" aria-hidden="true">#</a> 运算规则</h5>
<ul>
<li>异或（eor）是一个数学运算符。它应用于逻辑运算。异或的数学符号为“⊕”，计算机符号为“eor”。其运算法则为：
<ul>
<li><strong>相同为0，不同为1</strong>：
<ul>
<li>二进制中： <code v-pre>1 ^ 1 = 0</code>，<code v-pre>0 ^ 0 = 0</code>，<code v-pre>1 ^ 0 = 1</code>，<code v-pre>0 ^ 1 = 1</code>;</li>
</ul>
</li>
<li><strong>任何数与 0 异或，等于这个数</strong>： <code v-pre>a ^ 0 = a</code>；</li>
<li><strong>任何数跟自己异或，等于 0</strong>: <code v-pre>a ^ a = 0</code>;</li>
<li><strong>满足交换律</strong>： <code v-pre>a ^ b = b ^ a</code>；</li>
<li><strong>满足结合律</strong>： <code v-pre>(a ^ b) ^ c = a ^ (b ^ c)</code>；</li>
</ul>
</li>
</ul>
<h5 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h5>
<ul>
<li>
<p><strong>异或运算交换两个数</strong>：</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">// 使用异或运算交换值</span>
a <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>
b <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>
a <span class="token operator">=</span> a <span class="token operator">^</span> b<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a=>'</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span><span class="token string">'b=>'</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>原理：</p>
<blockquote>
<ul>
<li>第一步： <code v-pre>a = a ^ b = 5 ^ 10  </code> ;</li>
<li>第二步：  <code v-pre>b = a ^ b = 5 ^ 10 ^ 10 = 5</code> (相同为0，不同为1);</li>
<li>第三步：  <code v-pre>a = a ^ b = 5 ^ 10 ^ 5 = 10</code> (相同为0，不同为1);</li>
</ul>
</blockquote>
</li>
</ul>
</li>
<li>
<p><strong>简单加密</strong>：</p>
<ul>
<li>
<blockquote>
<p>假设明文<code v-pre>text</code>，秘钥<code v-pre>key</code>，进行异或运算得到密文 <code v-pre>cipher</code>；</p>
<ul>
<li>加密：<code v-pre>const cipher = text ^ key</code> ；</li>
<li>解密：<code v-pre>const text = cipher ^ key</code>；</li>
</ul>
</blockquote>
</li>
<li>
<p>原理：</p>
<blockquote>
<ul>
<li>加密：<code v-pre>const cipher = text ^ key</code></li>
<li>解密：<code v-pre>const text = (text ^ key) ^ key</code></li>
</ul>
</blockquote>
</li>
</ul>
</li>
</ul>
<h5 id="算法题" tabindex="-1"><a class="header-anchor" href="#算法题" aria-hidden="true">#</a> 算法题</h5>
<ul>
<li>
<p>题目：</p>
<blockquote>
<p>一个数组中有一种数出现了奇数次，其他数都出现了偶数次，怎么找到这一个数？</p>
<p>要求： 时间复杂度 O(n)，空间复杂度 O(1)</p>
</blockquote>
</li>
<li>
<p>思路：</p>
<blockquote>
<ul>
<li>
<p>要求空间复杂度为 O(1)，则不能开辟新的空间；</p>
</li>
<li>
<p>根据异或运算规则：</p>
<ul>
<li>任何数字和 自己异或等于 0;</li>
<li>任何数字和 0 异或等于这个数；</li>
</ul>
</li>
<li>
<p>将所有数字进行异或操作，则偶数个数字异或结果为0，奇数个数字异或结果为1；</p>
</li>
</ul>
</blockquote>
</li>
<li>
<p>代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> number <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    number <span class="token operator">=</span> number <span class="token operator">^</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'number=>'</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出为出现奇数次的数字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="尾后逗号" tabindex="-1"><a class="header-anchor" href="#尾后逗号" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas" target="_blank" rel="noopener noreferrer">尾后逗号<ExternalLinkIcon/></a></h3>
<p><strong>尾后逗号</strong> （有时叫做“终止逗号”）在向 JavaScript 代码添加元素、参数、属性时十分有用。如果你想要添加新的属性，并且上一行已经使用了尾后逗号，你可以仅仅添加新的一行，而不需要修改上一行。这使得版本控制的代码比较（diff）更加清晰，代码编辑过程中遇到的麻烦更少。</p>
<p>JavaScript 一开始就支持数组字面量中的尾后逗号，随后向对象字面量（ECMAScript 5）中添加了尾后逗号。最近（ECMAScript 2017），又将其添加到函数参数中</p>
<p>但是，<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/JSON" target="_blank" rel="noopener noreferrer">JSON<ExternalLinkIcon/></a> 不允许尾后逗号。</p>
<blockquote>
<p>[,,,] 的长度是多少？</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h3>
<p><strong>Symbol 是什么？</strong></p>
<ul>
<li>
<p><code v-pre>Symbol</code>是ES6 引入的一种新的原始数据类型，表示独一无二的值。</p>
</li>
<li>
<p>Symbol 值通过<code v-pre>Symbol</code>函数生成。</p>
</li>
</ul>
<p><strong>Symbol 作用？</strong></p>
<ul>
<li>保证对象每个属性的名字都是独一无二，防止命名冲突；</li>
<li>提供遍历接口，布置了 symbol.iterator 的对象才可以使用 for···of 循环，可以统一处理数据结构。调用之后回返回一个遍历器对象，包含有一个 next 方法，使用 next 方法后有两个返回值 value 和 done 分别表示函数当前执行位置的值和是否遍历完毕。</li>
<li><a href="https://es6.ruanyifeng.com/#docs/symbol#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%B6%88%E9%99%A4%E9%AD%94%E6%9C%AF%E5%AD%97%E7%AC%A6%E4%B8%B2" target="_blank" rel="noopener noreferrer">消除魔术字符串<ExternalLinkIcon/></a></li>
</ul>
<p><strong>Symbol注意点:</strong></p>
<ul>
<li>1.Symbol函数前不能使用new命令，否则会报错。</li>
<li>2.Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。</li>
<li>3.Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。</li>
<li>4.Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值。</li>
<li>5.Symbol.for接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。</li>
<li>6.Symbol.keyFor方法返回一个已登记的Symbol类型值的key</li>
</ul>
<p><strong>参考：</strong></p>
<p><a href="https://es6.ruanyifeng.com/#docs/symbol" target="_blank" rel="noopener noreferrer">ECMAScript 6 入门-Symbol<ExternalLinkIcon/></a></p>
<h3 id="typeof-操作符" tabindex="-1"><a class="header-anchor" href="#typeof-操作符" aria-hidden="true">#</a> typeof 操作符</h3>
<p><img src="@source/images/typeof.png" alt=""></p>
<p><strong>内部属性[[Class]]:</strong></p>
<p>​	所有typeof返回值为&quot;object&quot;的对象（如数组）都包含一个内部属性[[Class]]（我们可以把它看作一个内部的分类，而非传统的面向对象意义上的类）。这个属性无法直接访问，一般通过Object.prototype.toString(..)来查看</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//"[objectArray]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">regex-literal</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//"[objectRegExp]"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof-操作符" tabindex="-1"><a class="header-anchor" href="#instanceof-操作符" aria-hidden="true">#</a> instanceof 操作符</h3>
<p><img src="@source/images/instanceof-mind.png" alt=""></p>
<h3 id="数据类型判断方法" tabindex="-1"><a class="header-anchor" href="#数据类型判断方法" aria-hidden="true">#</a> 数据类型判断方法</h3>
<ul>
<li>
<p>判断数据类型方法</p>
<ul>
<li>
<p>typeof 操作符</p>
</li>
<li>
<p>Object.prototype.toString.call()</p>
<p><img src="@source/images/toString.png" alt=""></p>
</li>
</ul>
</li>
</ul>
<h3 id="数组创建和检测" tabindex="-1"><a class="header-anchor" href="#数组创建和检测" aria-hidden="true">#</a> 数组创建和检测</h3>
<p><img src="@source/images/array.png" alt=""></p>
<h3 id="数组方法" tabindex="-1"><a class="header-anchor" href="#数组方法" aria-hidden="true">#</a> 数组方法</h3>
<p><img src="@source/images/array5.png" alt=""></p>
<p><img src="@source/images/array3.png" alt="array3"></p>
<p><img src="@source/images/array2.png" alt="array2"></p>
<p><img src="@source/images/array1.png" alt="array1"></p>
<h3 id="数组迭代" tabindex="-1"><a class="header-anchor" href="#数组迭代" aria-hidden="true">#</a> 数组迭代</h3>
<p><img src="@source/images/array4.png" alt=""></p>
<blockquote>
<p><strong>indexOf 和 findIndex 的区别?</strong></p>
</blockquote>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank" rel="noopener noreferrer">indexOf<ExternalLinkIcon/></a> ：查找值作为第一个参数，采用 <code v-pre>===</code> 比较，更多的是用于查找基本类型，如果是对象类型，则是判断是否是同一个对象的引用</li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" target="_blank" rel="noopener noreferrer">findIndex<ExternalLinkIcon/></a> ：比较函数作为第一个参数，多用于非基本类型(例如对象)的数组索引查找，或查找条件很复杂</li>
</ul>
<h3 id="for-in-与-for-of-比较" tabindex="-1"><a class="header-anchor" href="#for-in-与-for-of-比较" aria-hidden="true">#</a> <a href="https://es6.ruanyifeng.com/#docs/iterator#%E4%B8%8E%E5%85%B6%E4%BB%96%E9%81%8D%E5%8E%86%E8%AF%AD%E6%B3%95%E7%9A%84%E6%AF%94%E8%BE%83" target="_blank" rel="noopener noreferrer">for...in 与 for...of 比较<ExternalLinkIcon/></a></h3>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in" target="_blank" rel="noopener noreferrer">for...in 循环<ExternalLinkIcon/></a></strong>：</p>
<ul>
<li><code v-pre>for...in</code>循环主要是为遍历对象而设计的，不适用于遍历数组；</li>
<li>缺点：
<ul>
<li>数组的键名是数字，但是<code v-pre>for...in</code>循环是以字符串作为键名“0”、“1”、“2”等等。</li>
<li><code v-pre>for...in</code>循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。</li>
<li>某些情况下，<code v-pre>for...in</code>循环会以任意顺序遍历键名</li>
</ul>
</li>
</ul>
<p><strong><a href="https://es6.ruanyifeng.com/#docs/iterator#for---of-%E5%BE%AA%E7%8E%AF" target="_blank" rel="noopener noreferrer">for...of 循环<ExternalLinkIcon/></a></strong>：</p>
<ul>
<li>一个数据结构只要部署了<code v-pre>Symbol.iterator</code>属性，就被视为具有 iterator 接口，就可以用<code v-pre>for...of</code>循环遍历它的成员；</li>
<li><code v-pre>for...of</code>循环内部调用的是数据结构的<code v-pre>Symbol.iterator</code>方法；</li>
<li><code v-pre>for...of</code>循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如<code v-pre>arguments</code>对象、DOM NodeList 对象）、 Generator 对象，字符串.</li>
<li>优点：
<ul>
<li>有着同<code v-pre>for...in</code>一样的简洁语法，但是没有<code v-pre>for...in</code>那些缺点。</li>
<li>不同于<code v-pre>forEach</code>方法，它可以与<code v-pre>break</code>、<code v-pre>continue</code>和<code v-pre>return</code>配合使用。</li>
<li>提供了遍历所有数据结构的统一操作接口</li>
</ul>
</li>
</ul>
<h3 id="类数组" tabindex="-1"><a class="header-anchor" href="#类数组" aria-hidden="true">#</a> 类数组</h3>
<p><strong>类数组概念:</strong></p>
<ul>
<li>JavaScript中，数组是一个特殊的对象，其 property 名为正整数，且其l ength 属性会随着数组成员的增减而发生变化，同时又从 Array 构造函数中继承了一些用于进行数组操作的方法。</li>
<li>而对于一个普通的对象来说，如果它的所有 property 名均为正整数，同时也有相应的 <em>length</em> 属性，那么虽然该对象并不是由Array构造函数所创建的，它依然呈现出数组的行为，在这种情况下，这些对象被称为　“类数组对象”　。</li>
<li>总结： 拥有<code v-pre>length</code>属性的对象</li>
</ul>
<p><strong>类数组包含:</strong></p>
<ul>
<li>DOM方法的返回结果： document.getElementsByTagName() 返回的就是一个类数组对象</li>
<li>函数 arguments 对象</li>
<li>函数也可以被看作是类数组对象，因为它含有length属性值，代表可接收的参数个数</li>
</ul>
<p><strong>类数组转数组的方法：</strong></p>
<ul>
<li>扩展运算符 ...</li>
<li>Array.from(arrayLike)</li>
<li>Array.prototype.slice.apply(arguments)</li>
<li>Array.prototype.splice.call(arrayLike,0)</li>
<li>Array.prototype.concat.apply([],arrayLike)</li>
</ul>
<p><strong>参考资料：</strong></p>
<p><a href="https://github.com/mqyqingfeng/Blog/issues/14" target="_blank" rel="noopener noreferrer">JavaScript深入之类数组对象与arguments<ExternalLinkIcon/></a></p>
<h3 id="对象访问" tabindex="-1"><a class="header-anchor" href="#对象访问" aria-hidden="true">#</a> 对象访问</h3>
<p><img src="@source/images/object.png" alt=""></p>
<h3 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h3>
<p><img src="@source/images/object2.png" alt=""></p>
<p><img src="@source/images/object6.png" alt=""></p>
<p><strong>相关问题</strong></p>
<blockquote>
<p><code v-pre>Object.keys()</code> 、<code v-pre>Object.values()</code>是按什么顺序返回值?</p>
</blockquote>
<ul>
<li>.Chrome Opera 的 JavaScript 解析引擎遵循的是新版 ECMA-262 第五版规范。因此，使用 for-in 语句遍历对象属性时遍历书序并非属性构建顺序。</li>
<li>而 IE6 IE7 IE8 Firefox Safari 的 JavaScript解析引擎遵循的是较老的 ECMA-262 第三版规范，属性遍历顺序由属性构建的顺序决定。</li>
<li>Chrome Opera 中使用 for-in 语句遍历对象属性时会遵循一个规律：
<ul>
<li>它们会先提取所有 key 的 parseFloat 值为非负整数的属性，然后根据数字顺序对属性排序首先遍历出来，然后按照对象定义的顺序遍历余下的所有属性。</li>
<li>其它浏览器则完全按照对象定义的顺序遍历属性。</li>
</ul>
</li>
<li>大多数浏览器将对象属性迭代为：
<ol>
<li>按升序排列的整数键（以及像“1”这样解析为整数的字符串）</li>
<li>字符串键，按插入顺序（ES2015 保证这一点，所有浏览器都遵守）</li>
<li>符号名称，按插入顺序（ES2015 保证这一点，所有浏览器都遵守）</li>
<li>一些较旧的浏览器结合了类别 #1 和 #2，按插入顺序迭代所有键。如果您的键可能会解析为整数，最好不要依赖任何特定的迭代顺序。</li>
</ol>
</li>
</ul>
<h3 id="对象属性" tabindex="-1"><a class="header-anchor" href="#对象属性" aria-hidden="true">#</a> 对象属性</h3>
<ul>
<li>对象属性包括
<ul>
<li>数据属性</li>
<li>访问器属性</li>
</ul>
</li>
</ul>
<p><img src="@source/images/object3.png" alt=""></p>
<p><img src="@source/images/object4.png" alt=""></p>
<h3 id="对象属性方法" tabindex="-1"><a class="header-anchor" href="#对象属性方法" aria-hidden="true">#</a> 对象属性方法</h3>
<p><img src="@source/images/object5.png" alt=""></p>
<h3 id="防篡改对象" tabindex="-1"><a class="header-anchor" href="#防篡改对象" aria-hidden="true">#</a> 防篡改对象</h3>
<p><img src="@source/images/object7.png" alt=""></p>
<h3 id="假值对象" tabindex="-1"><a class="header-anchor" href="#假值对象" aria-hidden="true">#</a> 假值对象</h3>
<ul>
<li>浏览器在某些特定情况下，在常规JavaScript语法基础上自己创建了一些外来值，这些就是“假值对象”。</li>
<li>假值对象看起来和普通对象并无二致（都有属性，等等），但将它们强制类型转换为布尔值时结果为false最常见的例子是document.all，它是一个类数组对象，包含了页面上的所有元素，由DOM（而不是JavaScript引擎）提供给JavaScript程序使用</li>
</ul>
<h3 id="内置对象" tabindex="-1"><a class="header-anchor" href="#内置对象" aria-hidden="true">#</a> 内置对象</h3>
<p>全局的对象（globalobjects）或称标准内置对象，不要和&quot;全局对象（globalobject）&quot;混淆。</p>
<p>这里说的全局的对象是说在全局作用域里的对象。</p>
<p>全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。</p>
<p>标准内置对象的分类：</p>
<ul>
<li>（1）值属性。这些全局属性返回一个简单值，这些值没有自己的属性和方法。例如Infinity、NaN、undefined、null字面量</li>
<li>（2）函数属性。全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。例如eval()、parseFloat()、parseInt()等</li>
<li>（3）基本对象。基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。例如Object、Function、Boolean、Symbol、Error等</li>
<li>（4）数字和日期对象。用来表示数字、日期和执行数学计算的对象。例如Number、Math、Date</li>
<li>（5）字符串。用来表示和操作字符串的对象。例如String、RegExp</li>
<li>（6）可索引的集合对象。这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如Array</li>
<li>（7）使用键的集合对象。这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。例如Map、Set、WeakMap、WeakSet</li>
<li>（8）矢量集合。SIMD矢量集合中的数据会被组织为一个数据序列。例如SIMD等</li>
<li>（9）结构化数据。这些对象用来表示和操作结构化的缓冲区数据，或使用JSON编码的数据。例如JSON等</li>
<li>（10）控制抽象对象。例如Promise、Generator等</li>
<li>（11）反射。例如Reflect、Proxy</li>
<li>（12）国际化，为了支持多语言处理而加入ECMAScript的对象。例如Intl、Intl.Collator等</li>
<li>（13）WebAssembly（</li>
<li>14）其他例如arguments</li>
</ul>
<p><strong>总结</strong>：</p>
<ul>
<li>内置对象主要指的是在程序执行前存在全局作用域里的由js定义的一些全局值属性、函数和用来实例化其他对象的构造函数对象。</li>
<li>一般我们经常用到的如全局变量值NaN、undefined，全局函数如parseInt()、parseFloat()用来实例化对象的构造函数如Date、Object等，还有提供数学计算的单体内置对象如Math对象。</li>
</ul>
<p>详细资料可以参考：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects" target="_blank" rel="noopener noreferrer">《标准内置对象的分类》<ExternalLinkIcon/></a><a href="https://segmentfault.com/a/1190000011467723" target="_blank" rel="noopener noreferrer">《JS所有内置对象属性和方法汇总》<ExternalLinkIcon/></a></p>
<h3 id="new操作符" tabindex="-1"><a class="header-anchor" href="#new操作符" aria-hidden="true">#</a> new操作符</h3>
<blockquote>
<p>new操作符具体干了什么?</p>
</blockquote>
<ul>
<li>创建一个空对象</li>
<li>继承了该函数的原型</li>
<li>属性和方法被加入到 this 引用的对象中</li>
<li>新创建的对象由 this 所引用，并且最后隐式的返回 this</li>
</ul>
<p><img src="@source/images/new-demo.png" alt=""></p>
<h3 id="深浅拷贝" tabindex="-1"><a class="header-anchor" href="#深浅拷贝" aria-hidden="true">#</a> 深浅拷贝</h3>
<p><img src="@source/images/copy.png" alt=""></p>
<p><strong>浅拷贝</strong>：仅拷贝第一层</p>
<ul>
<li><code v-pre>Object.assign</code>，</li>
<li>展开运算符 <code v-pre>...</code></li>
</ul>
<p><strong>深拷贝</strong>：</p>
<p><code v-pre>JSON.parse(JSON.stringify(object))</code> <strong>缺陷</strong>：</p>
<ul>
<li>
<p>使用<code v-pre>JSON.parse(JSON.stringify(object))</code>拷贝对象存在以下缺陷：</p>
<ul>
<li>
<p>函数、undefined 丢失；</p>
</li>
<li>
<p>正则表达式、Error对象 只得到空对象；</p>
</li>
<li>
<p>NaN、Infinity、-Infinity 会变成null;</p>
</li>
<li>
<p>会忽略 symbol;</p>
</li>
<li>
<p>时间对象 <code v-pre>Date()</code>，拷贝后时间将是字符串的形式，而不是对象的形式;</p>
<p><img src="@source/images/test-json.parse.png" alt=""></p>
</li>
<li>
<p>JSON.stringify()只能拷贝对象的可枚举的自有属性。</p>
<ul>
<li>
<p>如果对象中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；</p>
<p><img src="@source/images/test-json.parse2.png" alt=""></p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="set-集合" tabindex="-1"><a class="header-anchor" href="#set-集合" aria-hidden="true">#</a> Set 集合</h3>
<p><img src="@source/images/set.png" alt="set"></p>
<h3 id="weakset" tabindex="-1"><a class="header-anchor" href="#weakset" aria-hidden="true">#</a> WeakSet</h3>
<p><img src="@source/images/weakset.png" alt="weakset"></p>
<h3 id="map-集合" tabindex="-1"><a class="header-anchor" href="#map-集合" aria-hidden="true">#</a> Map 集合</h3>
<p><img src="@source/images/map.png" alt="map"></p>
<h3 id="set、map、object-比较" tabindex="-1"><a class="header-anchor" href="#set、map、object-比较" aria-hidden="true">#</a> Set、Map、Object 比较</h3>
<p><img src="@source/images/weakmap.png" alt=""></p>
<blockquote>
<p><strong>为什么要引入：<a href="http://es6.ruanyifeng.com/#docs/set-map#WeakSet" target="_blank" rel="noopener noreferrer">WeakSet<ExternalLinkIcon/></a> 和 <a href="http://es6.ruanyifeng.com/#docs/set-map#WeakMap" target="_blank" rel="noopener noreferrer">WeakMap<ExternalLinkIcon/></a>？</strong></p>
</blockquote>
<ul>
<li>js 引擎会对未使用的引用需要进行垃圾回收，需要及时清除未使用的引用。但有时候不容易记住所有未使用的引用，所以容易导致内存泄漏。</li>
<li>因此，引入一种方法，在新建引用的时候就声明，哪些引用必须手动清除，哪些引用可以忽略不计，当其他引用消失以后，垃圾回收机制就可以释放内存。这样就能大大减轻程序员的负担，你只要清除主要引用就可以了。</li>
<li>ES6 考虑到了这一点，推出了两种新的数据结构：<a href="http://es6.ruanyifeng.com/#docs/set-map#WeakSet" target="_blank" rel="noopener noreferrer">WeakSet<ExternalLinkIcon/></a> 和 <a href="http://es6.ruanyifeng.com/#docs/set-map#WeakMap" target="_blank" rel="noopener noreferrer">WeakMap<ExternalLinkIcon/></a>。它们对于值的引用都是不计入垃圾回收机制的，所以名字里面才会有一个&quot;Weak&quot;，表示这是弱引用。</li>
<li>基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。</li>
</ul>
<h3 id="变量声明方式" tabindex="-1"><a class="header-anchor" href="#变量声明方式" aria-hidden="true">#</a> 变量声明方式</h3>
<p><img src="@source/images/bianliangshengmin.png" alt=""></p>
<p><img src="@source/images/const.png" alt=""></p>
<h3 id="变量提升和函数提升" tabindex="-1"><a class="header-anchor" href="#变量提升和函数提升" aria-hidden="true">#</a> 变量提升和函数提升</h3>
<ul>
<li>
<p>提升：js代码执行前引擎会先进行预编译，预编译期间会将函数声明提升至其对应作用域的最顶端；</p>
</li>
<li>
<p>变量提升：变量的声明会被自动移到函数或者全局代码的最顶上；移动的仅仅是声明，变量的定义并不会随之提升；</p>
</li>
<li>
<p>函数提升：直接在函数声明之前调用该函数，并能成功执行它，而不会提升函数表达式；</p>
</li>
</ul>
<p><img src="@source/images/bianliangtisheng.png" alt=""></p>
<p><strong>变量提升相关题目</strong></p>
<ul>
<li>
<p>题目1：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
     <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> name <span class="token operator">==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     		<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'yang'</span><span class="token punctuation">;</span>
     		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello '</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
     	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello '</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
     	<span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>输出结果：Hello yang</p>
</li>
<li>
<p>代码相当于</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> name <span class="token operator">==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'yang'</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello '</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello '</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="this-和-this-绑定" tabindex="-1"><a class="header-anchor" href="#this-和-this-绑定" aria-hidden="true">#</a> this 和 this 绑定</h3>
<ul>
<li>this 绑定主要有：
<ul>
<li>默认绑定</li>
<li>隐式绑定</li>
<li>显示绑定： call()、apply()、bind()</li>
<li>new 绑定</li>
<li>函数绑定</li>
</ul>
</li>
</ul>
<p><img src="@source/images/this.png" alt=""></p>
<p><img src="@source/images/new-bingding.png" alt=""></p>
<p><img src="@source/images/hanshu-this.png" alt=""></p>
<ul>
<li>this 绑定判断</li>
</ul>
<p><img src="@source/images/this-panduan.png" alt=""></p>
<ul>
<li>
<p>this 使用</p>
<p><img src="@source/images/this-use.png" alt=""></p>
</li>
</ul>
<p><strong>相关问题：</strong></p>
<blockquote>
<p><strong>如果一个构造函数，bind了一个对象，用这个构造函数创建出的实例会继承这个对象的属性吗？为什么?</strong></p>
</blockquote>
<p>​		不会继承，因为根据 this 绑定四大规则，new 绑定的优先级高于 bind 显示绑定，通过 new 进行构造函数调用时，会创建一个新对象，这个新对象会代替 bind 的对象绑定，作为此函数的 this，并且在此函数没有返回对象的情况下，返回这个新建的对象。</p>
<h3 id="执行环境-环境栈" tabindex="-1"><a class="header-anchor" href="#执行环境-环境栈" aria-hidden="true">#</a> 执行环境&amp;环境栈</h3>
<p><strong>执行环境</strong></p>
<p><img src="@source/images/zhixinghuanjing.png" alt=""></p>
<p><strong>环境栈</strong></p>
<p><img src="@source/images/huanjingzhan.png" alt=""></p>
<h3 id="作用域-作用域链" tabindex="-1"><a class="header-anchor" href="#作用域-作用域链" aria-hidden="true">#</a> 作用域&amp;作用域链</h3>
<p><img src="@source/images/zuoyonyu-zuoyongyulian.png" alt=""></p>
<p><strong>作用域:</strong></p>
<ul>
<li>作用域是变量与函数的可访问范围，即作用域控制着变量与函数的可见性和生命周期。</li>
<li>作用域是一套规则，在当前作用域以及嵌套的子作用域中根据标识符名称进行变量查找。</li>
</ul>
<p><img src="@source/images/zuoyongyu.png" alt=""></p>
<p><strong>作用域链:</strong></p>
<ul>
<li>作用域链的作用是保证执行环境里有权访问的变量和函数是有序的</li>
<li>作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的。</li>
</ul>
<p><img src="@source/images/zuoyongyulian.png" alt=""></p>
<p><img src="@source/images/yanchangzuoyongyu.png" alt=""></p>
<p><strong>闭包相关题目</strong></p>
<ul>
<li>
<p>题目一：输出结果</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>输出： 6,6,6,6,6,6</li>
<li>分析：该题目涉及 JS 时间循环机制 和 作用域 考察
<ul>
<li>JS 循环机制：
<ul>
<li>JS是单线程环境，也就是说代码的执行是从上到下，依次执行，这样的执行称为同步执行；遇到异步任务，会将异步任务添加到异步事件队列；等待异步任务执行完成，会将异步任务结果放入回调队列；等主线程所有任务执行完成，将执行回调队列中的事件。</li>
<li>在此代码中：
<ul>
<li>for循环是同步代码，而setTimeout中的是异步代码，JS碰到这个有同步和异步的情况下会先从上到下执行同步代码，碰到异步的代码会将其插入到任务队列当中等待</li>
<li>setTimeout是延时，也就是说碰到setTimeout这个异步的代码块会根据它里面的第二个参数：延时时间来将代码插入到任务队列当中，上面代码在1000ms之后将它插入到任务队列当中。</li>
<li>同步代码都执行完成之后，那么JS引擎就空闲了，这个时候就轮到任务队列中的异步代码依次加载了</li>
</ul>
</li>
</ul>
</li>
<li>作用域链：
<ul>
<li>作用域是变量等资源的作用范围</li>
<li>当同步代码执行完毕开始执行异步的setTimeout代码时，setTimeout中需要变量 i,而执行的时候在当前的作用域中开始找，找不到变量i的定义，这个时候就把创建这个函数的作用域作为当前作用域</li>
<li>再次寻找，创建这个函数的作用域就是全局作用域，也就是找到了for循环中i，找到了之后就结束寻找变量i的过程</li>
<li>由于这个时候的i是全局的，并且保存变量 6，因此所有定时任务都输出全局作用域的变量 i 的结果。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3>
<p><img src="@source/images/bibao.png" alt=""></p>
<p><strong>相关问题</strong></p>
<blockquote>
<p><strong>什么是闭包？</strong></p>
</blockquote>
<ul>
<li>
<p>闭包是有权限访问其他函数作用域的局部变量的一个<strong>函数</strong></p>
</li>
<li>
<p>判断闭包：函数内部使用了该函数外部的变量，则该函数是闭包。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">closureOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> outerVar <span class="token operator">=</span> <span class="token string">'outer func var'</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 闭包函数，引用了外部函数变量</span>
    <span class="token keyword">return</span> outerVar 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token function">closureOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 使用test接受匿名函数</span>
name <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 释放引用内存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>为什么其他非闭包的函数，没有权限访问另一个函数的内部作用域?</p>
</blockquote>
<ul>
<li>在JS中，变量的作用域属于函数作用域，在函数执行后作用域就会被清理、内存也随之被收回;</li>
<li>闭包是建立在一个函数内部的子函数，由于其可访问上级作用域的原因，因此存在对上级作用域的引用计数（无法垃圾回收），即使上级函数执行完，作用域也不会随之销毁；</li>
<li>这时的子函数—也就是闭包，便拥有了访问上级作用域中的变量的权限，即使上级函数执行完后，作用域内的值也不会被销毁。</li>
</ul>
<blockquote>
<p><strong>闭包产生本质？</strong></p>
</blockquote>
<ul>
<li>当前函数定义了其他函数，当前环境中存在指向父级作用域的引用</li>
<li>本质上闭包就是将函数内部和函数外部连接起来的方式</li>
</ul>
<blockquote>
<p><strong>闭包解决了什么？</strong></p>
</blockquote>
<ul>
<li>
<p>作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的。闭包就是用于解决这个问题所产生的</p>
<p><img src="@source/images/闭包作用域.png" alt=""></p>
</li>
<li>
<p>由于闭包可以缓存下级作用域，那么就使得函数外部打破了“函数作用域”的束缚，可以访问函数内部的变量。</p>
</li>
</ul>
<blockquote>
<p><strong>闭包作用？</strong></p>
</blockquote>
<ul>
<li>可以读取函数内部的变量；</li>
<li>保存上级作用域，实现方法或属性的私有化；</li>
</ul>
<blockquote>
<p><strong>闭包特性？</strong></p>
</blockquote>
<ul>
<li>函数内部嵌套函数</li>
<li>函数内部可以引用外部的变量</li>
<li>参数和变量不会被垃圾回收机制回收</li>
</ul>
<blockquote>
<p><strong>如何产生闭包？</strong></p>
</blockquote>
<ul>
<li>函数中返回一个函数</li>
<li>函数当作参数传递</li>
<li>IIFE 执行函数</li>
<li>定时器 setTimeout 和自执行函数</li>
<li>所有的回调函数</li>
</ul>
<blockquote>
<p><strong>闭包的this指向</strong></p>
</blockquote>
<ul>
<li>闭包的 this 指向的是 window</li>
</ul>
<blockquote>
<p><strong>闭包应用场景</strong>？</p>
</blockquote>
<ul>
<li>
<p>回调函数</p>
</li>
<li>
<p>柯里化 bind</p>
</li>
<li>
<p>模块</p>
</li>
<li>
<p>创建私有变量</p>
</li>
<li>
<p>模仿块级作用域</p>
<ul>
<li>
<p>概念：JavaScript 没有块级作用域的概念。这意味着在块语句中定义的变量，实际上是在包含函数中而非语句中创建的</p>
</li>
<li>
<p>要点：</p>
<ul>
<li>创建并立即调用一个函数，这样既可以执行其中的代码，又不会在内存中留下对该函数的引用</li>
<li>函数内部的所有变量都会被立即销毁——除非将某些变量赋值给了包含作用域（即外部作用域）中的变量</li>
</ul>
</li>
<li>
<p>语法：</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//这里是块级作用域</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>解释：以上代码定义并立即调用了一个匿名函数。将函数声明包含在一对圆括号中，表示它实际上是一个函数表达式。而紧随其后的另一对圆括号会立即调用这个函数</p>
</li>
</ul>
</li>
<li>
<p>实例：<img src="@source/images/闭包实例4.png" alt="image-20210715181307848"></p>
<ul>
<li>在匿名函数中定义的任何变量，都会在执行结束时被销毁；</li>
<li>变量 i 只能在循环中使用，使用后即被销毁；</li>
<li>在私有作用域中能够访问变量 count ，是因为这个匿名函数是一个闭包，它能够访问包含作用域中的所有变量</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>滥用闭包存在什么问题？</strong></p>
</blockquote>
<ul>
<li>会造成网页的性能问题，在IE中可能导致内存泄漏。
<ul>
<li>原因：
<ul>
<li>JS使用垃圾回收机制的原理是标记清除，当一个变量所属的函数作用域被销毁了，变量所存在的作用域没有了，这时JS会给这个变量打上一个标记，待下次垃圾回收时会将其清除。</li>
<li>闭包函数中引用了外部函数的变量，并且外部函数返回的函数赋给了全局作用域中的变量，导致了原本应该被回收的闭包外部函数的变量一直被引用无法回收，这样会导致内存泄漏。</li>
</ul>
</li>
<li>解决方法：全局作用域中的变量复制为 null。</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>栈内存释放</strong></p>
</blockquote>
<ul>
<li>即使外部函数栈内存释放闭包依旧存在
<ul>
<li>堆内存：存储引用类型，对象类型就是键值对，函数就是代码字符串。将引用类型的空间地址赋值为 <code v-pre>null</code>。</li>
<li>栈内存：提供代码的执行环境和存储基本类型。函数执行完后函数的私有作用域会被释放掉。</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>匿名函数与闭包区别?</strong></p>
</blockquote>
<ul>
<li>闭包中引用了其他作用域链上的变量</li>
</ul>
<p><strong>实例解析</strong></p>
<ul>
<li>
<p>闭包使用实例：</p>
<ul>
<li><img src="@source/images/闭包使用.png" alt="image-20210715165629637"></li>
<li>图示：<img src="@source/images/闭包图形.png" alt="image-20210715165706895"></li>
<li><img src="@source/images/闭包解析过程.png" alt="image-20210715165752815"></li>
</ul>
</li>
<li>
<p><strong>闭包只能取得包含函数中任何变量的最后一个值</strong></p>
<ul>
<li>原因：闭包所保存的是整个变量对象，而不是某个特殊的变量</li>
<li>实例：<img src="@source/images/闭包实例.png" alt="image-20210715170248139">
<ul>
<li>创建另一个匿名函数强制让闭包将变量i传递给该匿名函数</li>
<li>匿名函数(闭包)活动对象中保存变量副本,数组每一个变量则保存匿名函数引用</li>
<li>图示：<img src="@source/images/闭包实例2.png" alt="image-20210715170437808"></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>闭包形参优先级高于变量提升的变量</strong></p>
<ul>
<li>实例：<img src="@source/images/闭包实例3.png" alt="image-20210715170659490">
<ul>
<li>在函数内部，调用 foo.n 优先访问的是形参，而不是内部定义的变量；console.log 访问的按作用域链优先访问内部变量</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>使用闭包创建私有变量</strong></p>
<ul>
<li>概念：
<ul>
<li>JavaScript 中没有私有成员的概念；所有对象属性都是公有的</li>
<li>但是任何在函数中定义的变量，都可以认为是私有变量</li>
<li>可以使用闭包来实现公有方法，而通过公有方法可以访问在包含作用域中定义的变量</li>
</ul>
</li>
<li>特权方法：
<ul>
<li>概念：有权访问私有变量的公有方法叫做特权方法</li>
<li>为自定义类型创建私有变量和特权方法：
<ul>
<li>基本模式：<img src="@source/images/特权方法.png" alt="image-20210715185337006"></li>
<li>原理：能够在构造函数中定义特权方法，是因为特权方法作为闭包有权访问在构造函数中定义的所有变量和函数，使用函数声明创建局部特权方法</li>
<li>作用：利用私有和特权成员，可以隐藏那些不应该被直接修改的数据</li>
</ul>
</li>
</ul>
</li>
<li>静态私有变量：
<ul>
<li>概念：在私有作用域中定义私有变量或函数，同样也可以创建特权方法</li>
<li>基本模式：<img src="@source/images/静态变量.png" alt="image-20210715185513942"></li>
<li>原理：公有方法是在原型上定义，使用了函数表达式</li>
<li>与在构造函数中定义特权方法的主要区别：
<ul>
<li>私有变量和函数是由实例共享的</li>
<li>特权方法是在原型上定义的，因此所有实例都使用同一个函数</li>
<li>特权方法作为一个闭包，总是保存着对包含作用域的引用</li>
</ul>
</li>
<li>实例<img src="@source/images/闭包创建私有变量.png" alt="image-20210715185637370"></li>
</ul>
</li>
<li>为单例创建私有变量和特权方法：
<ul>
<li>模块模式：通过为单例添加私有变量和特权方法能够使其得到增强
<ul>
<li><img src="@source/images/模块模式.png" alt="image-20210715185725868"></li>
<li>解释：
<ul>
<li>使用了一个返回对象的匿名函数</li>
<li>在这个匿名函数内部，首先定义了私有变量和函数。然后，将一个对象字面量作为函数的值返回</li>
<li>返回的对象字面量中只包含可以公开的属性和方法</li>
<li>由于这个对象是在匿名函数内部定义的，因此它的公有方法有权访问私有变量和函数</li>
<li>从本质上来讲，这个对象字面量定义的是单例的公共接口</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>增强的模块模式：在返回对象之前加入对其增强的代码
<ul>
<li><img src="@source/images/增强的模块模式.png" alt="image-20210715185825041"></li>
<li>适用情况：单例必须是某种类型的实例，同时还必须添加某些属性和（或）方法对其加以增强的情况</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>闭包题目</strong></p>
<ul>
<li>
<p>题目1：预测输出结果。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
     	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>输出：1，2，3，4，5</p>
</li>
<li>
<p>分析：首先同步执行 for 循环，循环内部 包含一个闭包函数，通过参数形式传入 i，闭包中保存变量 i 副本；当遇到 setTimeout 时，打印闭包中的 i 副本，因此每次输出 i 都是递增值</p>
</li>
<li>
<p>使用 ES5 方式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="prototype-对象" tabindex="-1"><a class="header-anchor" href="#prototype-对象" aria-hidden="true">#</a> Prototype 对象</h3>
<p><img src="@source/images/yuanxingduixiang.png" alt=""></p>
<p><img src="@source/images/yuanxingduixiang2.png" alt=""></p>
<ul>
<li>
<p>示例：</p>
<blockquote>
<p>使用 Person 构造函数和 Person.prototype 创建实例</p>
</blockquote>
<ul>
<li>语法一：<img src="@source/images/yuanxingduixiang-demo.png" alt="">
<ul>
<li>图示：<img src="@source/images/yuanxingduixiang-demo5.png" alt=""></li>
</ul>
</li>
<li>语法二：<img src="@source/images/yuanxingduixiang-demo2.png" alt="">
<ul>
<li>问题
constructor 属性不指向 Person
无法通过 constructor 确定对象的类型</li>
<li>改进：<img src="@source/images/yuanxingduixiang-demo3.png" alt="">
<ul>
<li>问题问题：
<ul>
<li>这种方式重设 constructor 属性会导致它的 [[Enumerable]] 特性被设置为 true</li>
<li>默认情况下，原生的 constructor 属性是不可枚举的</li>
<li>切断了构造函数与最初原型之间的联系<img src="@source/images/yuanxingduixiang-demo4.png" alt="">
<ul>
<li>Person.prototype 原来指向 Person Prototype，重写后指向了 New Person Prototype 新的原型对象</li>
</ul>
</li>
<li>重写原型对象切断了现有原型与任何之前已经存在的对象实例之间的联系；它们引用的仍然是最初的原型</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="prototype属性和proto-属性" tabindex="-1"><a class="header-anchor" href="#prototype属性和proto-属性" aria-hidden="true">#</a> Prototype属性和proto 属性</h3>
<p><img src="@source/images/prototype.png" alt=""></p>
<p><img src="@source/images/proto.png" alt=""></p>
<p><img src="@source/images/prototype-proto.png" alt=""></p>
<p><strong>获取原型方法:</strong></p>
<ul>
<li>
<p>p.<strong>proto</strong></p>
</li>
<li>
<p>p.constructor.prototype</p>
</li>
<li>
<p>Object.getPrototypeOf(p)</p>
</li>
</ul>
<h3 id="construct-属性" tabindex="-1"><a class="header-anchor" href="#construct-属性" aria-hidden="true">#</a> construct 属性</h3>
<p><img src="@source/images/construct.png" alt=""></p>
<p><img src="@source/images/construct2.png" alt=""></p>
<h3 id="原型-原型链" tabindex="-1"><a class="header-anchor" href="#原型-原型链" aria-hidden="true">#</a> 原型&amp;原型链</h3>
<p><img src="@source/images/yuanxing.png" alt=""></p>
<p><img src="@source/images/yuanxinglian2.png" alt=""></p>
<p><img src="@source/images/yuanxinglianshixian.png" alt=""></p>
<p><img src="@source/images/morenyuanxing.png" alt=""></p>
<ul>
<li>注意：
<ul>
<li>通过 <code v-pre>Object.prototype.__proto__ </code> 查找原型，原型链的终点是 null。
<ul>
<li><img src="@source/images/原型链查找.png" alt="image-20210713011124954"></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="object-defineproperty-和-proxy-比较" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-和-proxy-比较" aria-hidden="true">#</a> Object.defineProperty 和 Proxy 比较</h3>
<p><img src="@source/images/Object.defineProperty.png" alt=""></p>
<blockquote>
<p><strong>如何监听一个变量的变化?</strong></p>
</blockquote>
<ul>
<li>ES5 的 Object.defineProperty()</li>
<li>ES6 的 Proxy</li>
</ul>
<p>Proxy 相比于 defineProperty 的优势：</p>
<ul>
<li>基于 <code v-pre>Proxy</code> 和 <code v-pre>Reflect</code> ，可以原生监听数组，可以监听对象属性的添加和删除</li>
<li>不需要深度遍历监听：判断当前 <code v-pre>Reflect.get</code> 的返回值是否为 <code v-pre>Object</code> ，如果是则再通过 <code v-pre>reactive</code> 方法做代理， 这样就实现了深度观测</li>
<li>只在 <code v-pre>getter</code> 时才对对象的下一层进行劫持(优化了性能)</li>
</ul>
<h3 id="es5-函数" tabindex="-1"><a class="header-anchor" href="#es5-函数" aria-hidden="true">#</a> ES5 函数</h3>
<p><strong>函数定义</strong></p>
<p><img src="@source/images/ES5function1.png" alt=""></p>
<p><img src="@source/images/ES5function4.png" alt=""></p>
<p><img src="@source/images/ES5function5.png" alt=""></p>
<p><img src="@source/images/ES5function6.png" alt=""></p>
<p><strong>函数参数</strong></p>
<p><img src="@source/images/ES5function2.png" alt=""></p>
<p><img src="@source/images/ES5function3.png" alt=""></p>
<h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h3>
<p><img src="@source/images/jiantouhanshu.png" alt=""></p>
<h3 id="箭头函数与普通函数的区别" tabindex="-1"><a class="header-anchor" href="#箭头函数与普通函数的区别" aria-hidden="true">#</a> 箭头函数与普通函数的区别</h3>
<p><strong>普通函数</strong>：</p>
<p>​	普通函数通过 function 关键字定义， this 无法结合词法作用域使用，在运行时绑定，只取决于函数的调用方式，在哪里被调用，调用位置。（取决于调用者，和是否独立运行）</p>
<p><strong>箭头函数：</strong></p>
<ol>
<li>函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象;</li>
<li>箭头函数常用于回调函数中，包括事件处理器或定时器;</li>
<li>没有原型、没有 this、没有 super，没有 arguments，没有 new.target;</li>
<li>不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替;</li>
<li>不可以使用yield命令，因此箭头函数不能用作Generator函数;</li>
<li>不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误:
<ul>
<li>一个函数内部有两个方法：[[Call]] 和 [[Construct]]</li>
<li>在通过 new 进行函数调用时，会执行[[construct]] 方法，创建一个实例对象，然后再执行这个函数体，将函数的 this 绑定在这个实例对象上当直接调用时，执行 [[Call]] 方法</li>
<li>直接执行函数体箭头函数没有 [[Construct]] 方法，不能被用作构造函数调用，当使用 new 进行函数调用时会报错</li>
</ul>
</li>
</ol>
<h3 id="其他函数" tabindex="-1"><a class="header-anchor" href="#其他函数" aria-hidden="true">#</a> 其他函数</h3>
<p><img src="@source/images/functionType1.png" alt=""></p>
<p><img src="@source/images/functionType2.png" alt=""></p>
<p><img src="@source/images/functionType13.png" alt=""></p>
<h3 id="函数柯里化" tabindex="-1"><a class="header-anchor" href="#函数柯里化" aria-hidden="true">#</a> 函数柯里化</h3>
<p><img src="@source/images/hanshukelihua.png" alt=""></p>
<h3 id="创建对象方式有哪些" tabindex="-1"><a class="header-anchor" href="#创建对象方式有哪些" aria-hidden="true">#</a> 创建对象方式有哪些</h3>
<p><img src="@source/images/createObject.png" alt=""></p>
<h3 id="创建对象方式比较" tabindex="-1"><a class="header-anchor" href="#创建对象方式比较" aria-hidden="true">#</a> 创建对象方式比较</h3>
<p><img src="@source/images/createObject1.png" alt=""></p>
<p><img src="@source/images/createObject2.png" alt="createObject6"></p>
<p><img src="@source/images/createObject3.png" alt="createObject5"></p>
<p><img src="@source/images/createObject4.png" alt="createObject4"></p>
<p><img src="@source/images/createObject5.png" alt="createObject3"></p>
<p><img src="@source/images/createObject6.png" alt="createObject2"></p>
<p><img src="@source/images/createObject7.png" alt="createObject1"></p>
<h3 id="对象继承方式" tabindex="-1"><a class="header-anchor" href="#对象继承方式" aria-hidden="true">#</a> 对象继承方式</h3>
<p><img src="@source/images/objectInherit.png" alt=""></p>
<h3 id="对象继承方式比较" tabindex="-1"><a class="header-anchor" href="#对象继承方式比较" aria-hidden="true">#</a> 对象继承方式比较</h3>
<p><img src="@source/images/inherit1.png" alt=""></p>
<p><img src="@source/images/inherit2.png" alt="inherit5"></p>
<p><img src="@source/images/inherit3.png" alt="inherit4"></p>
<p><img src="@source/images/inherit4.png" alt="inherit3"></p>
<p><img src="@source/images/inherit5.png" alt="inherit2"></p>
<p><img src="@source/images/inherit6.png" alt="inherit1"></p>
<p><img src="@source/images/inherit7.png" alt=""></p>
<h3 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> Class 类</h3>
<p><img src="@source/images/class.png" alt="class"></p>
<p><img src="@source/images/class2.png" alt="class2"><img src="@source/images/class3.png" alt=""></p>
<h3 id="class-继承" tabindex="-1"><a class="header-anchor" href="#class-继承" aria-hidden="true">#</a> Class 继承</h3>
<p><img src="@source/images/class-extend.png" alt=""></p>
<p><img src="@source/images/class-extend3.png" alt=""></p>
<p><img src="@source/images/class-extend2.png" alt="class-extend2"></p>
<h3 id="宏任务-微任务" tabindex="-1"><a class="header-anchor" href="#宏任务-微任务" aria-hidden="true">#</a> 宏任务&amp;微任务</h3>
<p><strong>事件循环</strong>：event loop 宏任务：macrotask 也称为 task 微任务：microtask 也称为 jobs</p>
<p><strong>微任务</strong></p>
<ul>
<li>process.nextTick (Node)</li>
<li>promise.then()，Promise.resolve()</li>
<li>Object.observe</li>
<li>MutationObserver (浏览器)</li>
</ul>
<p><strong>宏任务</strong></p>
<ul>
<li>script(主程序代码)</li>
<li>setTimeout, setInterval, setImmediate,</li>
<li>I/O, UI rendering</li>
<li>回调函数（事件、ajax等）</li>
</ul>
<p><img src="@source/images/task=performance.png" alt=""></p>
<p><strong>过程</strong>： 在一次事件循环中，会先执行js线程的主任务，然后会去查找是否有微任务microtask（promise），如果有那就优先执行所有微任务，如果没有，在去查找宏任务macrotask（setTimeout、setInterval）进行执行。</p>
<p>一个事件循环的执行步骤：</p>
<ul>
<li>执行同步代码，这属于宏任务
<ul>
<li>在执行宏任务时，如遇到微任务，将微任务添加到本次循环的微任务队列中；</li>
</ul>
</li>
<li>执行所有微任务</li>
<li>渲染 UI</li>
<li>然后开始下一轮 Event loop，执行宏任务中的异步代码</li>
</ul>
<p><img src="@source/images/event-loop.gif" alt=""></p>
<h3 id="浏览器事件循环" tabindex="-1"><a class="header-anchor" href="#浏览器事件循环" aria-hidden="true">#</a> 浏览器事件循环</h3>
<ul>
<li>
<p>js是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行。</p>
</li>
<li>
<p>在执行同步代码的时候，如果遇到了异步事件，将异步事件添加到事件队列，继续执行执行栈中的其他任务。</p>
</li>
<li>
<p>当异步事件执行完毕后，再将异步事件对应的回调加入到任务队列中等待执行。</p>
</li>
<li>
<p>任务队列可以分为宏任务对列和微任务对列，当当前执行栈中的事件执行完毕后，js引擎首先会判断微任务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行。当微任务对列中的任务都执行完成后再去判断宏任务对列中的任务。</p>
</li>
</ul>
<p><img src="@source/images/eventCycle.png" alt=""></p>
<p><strong>参考资料</strong></p>
<p><a href="https://juejin.cn/post/6844903764202094606#heading-26" target="_blank" rel="noopener noreferrer">一次弄懂Event Loop<ExternalLinkIcon/></a></p>
<h3 id="node-事件循环" tabindex="-1"><a class="header-anchor" href="#node-事件循环" aria-hidden="true">#</a> Node 事件循环</h3>
<ul>
<li>
<p>Node 事件循环模型：</p>
<ul>
<li>
<p>Node 的 event loop 分为6个阶段，它们会按照顺序反复运行，分别如下:</p>
<ul>
<li><code v-pre>timers</code>：执行 <code v-pre>setTimeout()</code> 和 <code v-pre>setInterval()</code> 中到期的callback;</li>
<li><code v-pre>I/O callbacks</code>：上一轮循环中有少数的 <code v-pre>I/O callback</code> 会被延迟到这一轮的这一阶段执行;</li>
<li><code v-pre>idle, prepare</code>：队列的移动，仅内部使用;</li>
<li><code v-pre>poll</code>：最为重要的阶段，执行 <code v-pre>I/O callback</code>，在适当的条件下会阻塞在这个阶段</li>
<li><code v-pre>check</code>：执行 <code v-pre>setImmediate</code> 的 callback</li>
<li><code v-pre>close callbacks</code>：执行 close 事件的 callback，例如 <code v-pre>socket.on(&quot;close&quot;,func)</code></li>
</ul>
<p><img src="@source/images/event-loop-node2.png" alt=""></p>
</li>
<li>
<p>不同于浏览器的是，在每个阶段完成后，而不是 macroTask 任务完成后，microTask队列就会被执行。这就导致了<strong>同样的代码在不同的上下文环境下会出现不同的结果</strong>.</p>
</li>
<li>
<p>如果在 timers 阶段执行时创建了 setImmediate 则会在此轮循环的 check 阶段执行，如果在 timers 阶段创建了 setTimeout，由于 timers 已取出完毕，则会进入下轮循环，check 阶段创建 timers 任务同理。</p>
</li>
</ul>
</li>
<li>
<p>Node 事件循环底层实现：</p>
<ul>
<li>
<p><code v-pre>Node</code>中的<code v-pre>Event Loop</code>是基于<code v-pre>libuv</code>实现的，而<code v-pre>libuv</code>是 <code v-pre>Node</code> 的新跨平台抽象层，libuv使用异步，事件驱动的编程方式，核心是提供<code v-pre>i/o</code>的事件循环和异步回调。</p>
</li>
<li>
<p>libuv的<code v-pre>API</code>包含有时间，非阻塞的网络，异步文件操作，子进程等等。 <code v-pre>Event Loop</code>就是在<code v-pre>libuv</code>中实现的。</p>
<p><img src="@source/images/event-loop-node.png" alt=""></p>
</li>
</ul>
</li>
</ul>
<h3 id="浏览器-node-事件循环区别" tabindex="-1"><a class="header-anchor" href="#浏览器-node-事件循环区别" aria-hidden="true">#</a> 浏览器&amp;Node 事件循环区别</h3>
<ul>
<li>
<p>执行顺序区别：</p>
<ul>
<li>
<p>浏览器先执行所有宏任务，然后再执行所有微任务</p>
</li>
<li>
<p>Node 按 6 阶段顺序执行，先执行 timer 任务，后执行microtask队列的所有任务</p>
</li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'timer1'</span><span class="token punctuation">)</span>

    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise1'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'timer2'</span><span class="token punctuation">)</span>

    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise2'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

浏览器输出：
time1
promise1
time2
promise2

Node输出：
time1
time2
promise1
promise2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>浏览器：两个setTimeout作为两个MacroTask, 所以先输出timer1, promise1，再输出timer2，promise2；</li>
<li>Node：最初timer1和timer2就在timers阶段中。开始时首先进入timers阶段，执行timer1的回调函数，打印timer1，并将promise1.then回调放入microtask队列，同样的步骤执行timer2，打印timer2；
至此，timer阶段执行结束，event loop进入下一个阶段之前，执行microtask队列的所有任务，依次打印promise1、promise2。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="异步编程方式" tabindex="-1"><a class="header-anchor" href="#异步编程方式" aria-hidden="true">#</a> 异步编程方式</h3>
<ul>
<li>
<p>回调函数</p>
<ul>
<li>优点：简单、容易理解；</li>
<li>缺点：不利于维护，代码耦合高</li>
</ul>
</li>
<li>
<p>事件监听: 采用时间驱动模式，取决于某个事件是否发生</p>
<ul>
<li>优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函；</li>
<li>缺点：事件驱动型，流程不够清晰</li>
</ul>
</li>
<li>
<p>发布/订阅(观察者模式): 类似于事件监听，但是可以通过 消息中心，了解现在有多少发布者，多少订阅者 Promise对象</p>
<ul>
<li>优点：可以利用then方法，进行链式写法；可以书写错误时的回调函数；</li>
<li>缺点：编写和理解，相对比较难</li>
</ul>
</li>
<li>
<p>Promise 函数</p>
</li>
<li>
<p>Generator 函数</p>
<ul>
<li>优点：函数体内外的数据交换、错误处理机制；</li>
<li>缺点：流程管理不方便</li>
</ul>
</li>
<li>
<p>async 函数</p>
<ul>
<li>优点：内置执行器、更好的语义、更广的适用性、返回的是Promise、结构清晰；</li>
<li>缺点：错误处理机制</li>
</ul>
</li>
</ul>
<p>异步处理方法的比较: 参考 <a href="https://es6.ruanyifeng.com/#docs/async#%E4%B8%8E%E5%85%B6%E4%BB%96%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86%E6%96%B9%E6%B3%95%E7%9A%84%E6%AF%94%E8%BE%83" target="_blank" rel="noopener noreferrer">《ES6》<ExternalLinkIcon/></a></p>
<p><img src="@source/images/async1.png" alt=""></p>
<h3 id="模拟异步操作方式" tabindex="-1"><a class="header-anchor" href="#模拟异步操作方式" aria-hidden="true">#</a> 模拟异步操作方式</h3>
<p><img src="@source/images/async2.png" alt=""></p>
<h3 id="pomise-对象" tabindex="-1"><a class="header-anchor" href="#pomise-对象" aria-hidden="true">#</a> Pomise 对象</h3>
<p>promise 相关知识点和题目参考: <a href="https://gitee.com/jokerxw/myNotes/tree/master/javascript/%E5%8E%9F%E7%90%86%E5%AE%9E%E7%8E%B0/promise" target="_blank" rel="noopener noreferrer">promise 总结<ExternalLinkIcon/></a></p>
<h3 id="async-await-操作" tabindex="-1"><a class="header-anchor" href="#async-await-操作" aria-hidden="true">#</a> async await 操作</h3>
<p><img src="@source/images/async-awiat1.png" alt=""></p>
<p><img src="@source/images/async-awiat2.png" alt=""></p>
<p><img src="@source/images/async-awiat3.png" alt=""></p>
<p><img src="@source/images/async-awiat4.png" alt=""></p>
<p><img src="@source/images/async-awiat5.png" alt=""></p>
<p>async 函数，使得异步操作变得更加方便，它就是 Generator 函数的语法糖</p>
<ul>
<li>内置执行器：Generator 函数的执行必须靠执行器，<code v-pre>async</code>函数自带执行器</li>
<li>更好的语义</li>
<li>更广的适用性：<code v-pre>async</code>函数的<code v-pre>await</code>命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）</li>
<li>返回值是 Promise</li>
</ul>
<p><strong>注意：</strong></p>
<ul>
<li>
<p>await 后面代码会立即执行，执行后结果和 await 下面代码会被当做回调函数内容添加到微任务队列中</p>
<ul>
<li>
<p>示例：</p>
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
</li>
</ul>
</li>
</ul>
<p>参考：<a href="https://es6.ruanyifeng.com/#docs/async" target="_blank" rel="noopener noreferrer">《ES6 教程》<ExternalLinkIcon/></a></p>
<h3 id="reflect-对象" tabindex="-1"><a class="header-anchor" href="#reflect-对象" aria-hidden="true">#</a> Reflect 对象</h3>
<p><img src="@source/images/reflect.png" alt=""></p>
<h3 id="proxy-对象" tabindex="-1"><a class="header-anchor" href="#proxy-对象" aria-hidden="true">#</a> <a href="https://es6.ruanyifeng.com/#docs/proxy" target="_blank" rel="noopener noreferrer">Proxy 对象<ExternalLinkIcon/></a></h3>
<p><img src="@source/images/proxy1.png" alt=""></p>
<p><img src="@source/images/proxy2.png" alt="proxy2"></p>
<p><img src="@source/images/proxy3.png" alt="proxy3"></p>
<p><img src="@source/images/proxy4.png" alt="proxy4"></p>
<p><img src="@source/images/proxy5.png" alt="proxy5"></p>
<h3 id="模块加载方案和区别" tabindex="-1"><a class="header-anchor" href="#模块加载方案和区别" aria-hidden="true">#</a> 模块加载方案和区别</h3>
<p><img src="@source/images/module1.png" alt=""></p>
<h3 id="commonjs-模块" tabindex="-1"><a class="header-anchor" href="#commonjs-模块" aria-hidden="true">#</a> CommonJS 模块</h3>
<p>commonjs 核心就是 require 语句</p>
<p><strong>require() 的基本用法</strong></p>
<p>当 Node 遇到 require(X) 时，按下面的顺序处理。</p>
<p>（1）如果 X 是内置模块（比如 require('http'）)
　　a. 返回该模块。
　　b. 不再继续执行。</p>
<p>（2）如果 X 以 &quot;./&quot; 或者 &quot;/&quot; 或者 &quot;../&quot; 开头
　　a. 根据 X 所在的父模块，确定 X 的绝对路径。
　　b. 将 X 当成文件，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。</p>
<blockquote>
<ul>
<li>X</li>
<li>X.js</li>
<li>X.json</li>
<li>X.node</li>
</ul>
</blockquote>
<p>c. 将 X 当成目录，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。</p>
<blockquote>
<ul>
<li>X/package.json（main字段）</li>
<li>X/index.js</li>
<li>X/index.json</li>
<li>X/index.node</li>
</ul>
</blockquote>
<p>（3）如果 X 不带路径
　　a. 根据 X 所在的父模块，确定 X 可能的安装目录。
　　b. 依次在每个目录中，将 X 当成文件名或目录名加载。</p>
<p>（4） 抛出 &quot;not found&quot;</p>
<p><strong>参考资料：</strong></p>
<p><a href="http://www.ruanyifeng.com/blog/2015/05/require.html" target="_blank" rel="noopener noreferrer">require() 源码解读<ExternalLinkIcon/></a></p>
<h3 id="es6模块" tabindex="-1"><a class="header-anchor" href="#es6模块" aria-hidden="true">#</a> ES6模块</h3>
<p><img src="@source/images/module-es6.png" alt="module-es6"></p>
<ul>
<li>ES6 模块命令：</li>
</ul>
<p><img src="@source/images/module-es6-1.png" alt="module-es6-1"></p>
<p><img src="@source/images/module-es6-2.png" alt="module-es6-2"></p>
<p><img src="@source/images/module-es6-4.png" alt="module-es6-4"></p>
<p><img src="@source/images/module-es6-3.png" alt="module-es6-3"></p>
<p><img src="@source/images/module-es6-5.png" alt=""></p>
<h3 id="模块加载混合引用" tabindex="-1"><a class="header-anchor" href="#模块加载混合引用" aria-hidden="true">#</a> 模块加载混合引用</h3>
<p><img src="@source/images/module-hunhe.png" alt=""></p>
<h3 id="模块加载循环引用" tabindex="-1"><a class="header-anchor" href="#模块加载循环引用" aria-hidden="true">#</a> 模块加载循环引用</h3>
<p><img src="@source/images/module-xunhuan.png" alt=""></p>
<h3 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h3>
<p><img src="@source/images/dingshi1.png" alt=""></p>
<p><img src="@source/images/dingshi2.png" alt=""></p>
<p><img src="@source/images/dingshi3.png" alt=""></p>
<blockquote>
<p><strong>为什么使用setTimeout实现setInterval？怎么模拟？</strong></p>
</blockquote>
<ul>
<li>
<p>setInterval的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。</p>
</li>
<li>
<p>所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。</p>
</li>
<li>
<p>针对setInterval的这个缺点，我们可以使用setTimeout递归调用来模拟setInterval，这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了setInterval的问题</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果</span>
<span class="token keyword">function</span> <span class="token function">mySetInterval</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>timeout</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token comment">//控制器，控制定时器是否继续执行</span>
    <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">flag</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> 
    <span class="token comment">//设置递归函数，模拟定时器执行。</span>
    <span class="token keyword">function</span> <span class="token function">interval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>timer<span class="token punctuation">.</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//启动定时器</span>
	<span class="token function">setTimeout</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//返回控制器</span>
    <span class="token keyword">return</span> timer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h3>
<p><img src="@source/images/lajihuishou.png" alt=""><strong>V8引擎的垃圾回收机制</strong></p>
<p>v8的垃圾回收机制基于分代回收机制，这个机制又基于世代假说，这个假说有两个特点:</p>
<ul>
<li>一是新生的对象容易早死；</li>
<li>二是不死的对象会活得更久；</li>
</ul>
<p>基于这个假说，v8引擎将内存分为了新生代和老生代。</p>
<ul>
<li>
<p>新创建的对象或者只经历过一次的垃圾回收的对象被称为新生代。</p>
</li>
<li>
<p>经历过多次垃圾回收的对象被称为老生代。</p>
</li>
</ul>
<p>新生代被分为From和To两个空间，To一般是闲置的。当From空间满了的时候会执行Scavenge算法进行垃圾回收。</p>
<p>当我们执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行。</p>
<p>这个算法分为三步：</p>
<ul>
<li>（1）首先检查From空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满足条件则晋升到老生代。如果不满足条件则移动To空间。</li>
<li>（2）如果对象不存活，则释放对象的空间。</li>
<li>（3）最后将From空间和To空间角色进行交换。</li>
</ul>
<p>新生代对象晋升到老生代有两个条件：</p>
<ul>
<li>（1）第一个是判断是对象否已经经过一次Scavenge回收。若经历过，则将对象从From空间复制到老生代中；若没有经历，则复制到To空间。</li>
<li>（2）第二个是To空间的内存使用占比是否超过限制。当对象从From空间复制到To空间时，若To空间使用超过25%，则对象直接晋升到老生代中。设置25%的原因主要是因为算法结束后，两个空间结束后会交换位置，如果To空间的内存太小，会影响后续的内存分配。</li>
</ul>
<p>老生代采用了标记清除法和标记压缩法：</p>
<ul>
<li>标记清除法首先会对内存中存活的对象进行标记，标记结束后清除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。</li>
<li>所以了解决内存碎片的问题引入了标记压缩法。</li>
</ul>
<p><strong>参考资料：</strong></p>
<p><a href="https://www.jianshu.com/p/b8ed21e8a4fb" target="_blank" rel="noopener noreferrer">深入理解V8的垃圾回收原理<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/23992332" target="_blank" rel="noopener noreferrer">JavaScript 中的垃圾回收<ExternalLinkIcon/></a></p>
<h3 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏" aria-hidden="true">#</a> 内存泄漏</h3>
<p><strong>定义</strong></p>
<p>​	指由于疏忽或错误造成程序未能释放已经不再使用的内存的情况。内存泄漏并非指内存在物理上的消失，而是应用程序分配某段内存后，由于设计错误，失去了对该段内存的控制，因而造成了内存的浪费。</p>
<p><strong>哪些操作会造成内存泄漏?</strong></p>
<p>造成内存泄漏情况：</p>
<ul>
<li>意外的全局变量
<ul>
<li>由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收</li>
</ul>
</li>
<li>被遗忘的计时器或回调函数
<ul>
<li>设置了setInterval定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收</li>
</ul>
</li>
<li>脱离DOM的引用
<ul>
<li>获取一个DOM元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收</li>
</ul>
</li>
<li>闭包
<ul>
<li>不合理的使用闭包，从而导致某些变量一直被留在内存当中
<ul>
<li>闭包会导致原始作用域链不释放，造成内存泄漏（占用）；</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>内存泄漏的识别方法:</strong></p>
<ul>
<li>
<p><strong>浏览器</strong>:</p>
<ul>
<li>
<p>Chrome 浏览器查看内存占用，按照以下步骤操作:</p>
<ul>
<li>
<p>打开开发者工具，选择 Timeline 面板</p>
</li>
<li>
<p>在顶部的<code v-pre>Capture</code>字段里面勾选 Memory</p>
</li>
<li>
<p>点击左上角的录制按钮。</p>
</li>
<li>
<p>在页面上进行各种操作，模拟用户的使用情况。</p>
</li>
<li>
<p>一段时间后，点击对话框的 stop 按钮，面板上就会显示这段时间的内存占用情况</p>
<p><img src="@source/images/neicunxielou.png" alt=""></p>
</li>
<li>
<p>如果内存占用基本平稳，接近水平，就说明不存在内存泄漏</p>
</li>
<li>
<p>正常情况： <img src="@source/images/内存泄漏.png" alt=""></p>
</li>
<li>
<p>内存泄漏：<img src="@source/images/neicunxielou2.png" alt=""></p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>命令行</strong></p>
<ul>
<li>
<p>命令行可以使用 Node 提供的<a href="https://nodejs.org/api/process.html#process_process_memoryusage" target="_blank" rel="noopener noreferrer"><code v-pre>process.memoryUsage</code><ExternalLinkIcon/></a>方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">memoryUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { rss: 27709440,</span>
<span class="token comment">//  heapTotal: 5685248,</span>
<span class="token comment">//  heapUsed: 3449392,</span>
<span class="token comment">//  external: 8772 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>process.memoryUsage</code>返回一个对象，包含了 Node 进程的内存占用信息。该对象包含四个字段，单位是字节，<a href="http://stackoverflow.com/questions/12023359/what-do-the-return-values-of-node-js-process-memoryusage-stand-for" target="_blank" rel="noopener noreferrer">含义<ExternalLinkIcon/></a>如下:</p>
<ul>
<li>rss（resident set size）：所有内存占用，包括指令区和堆栈。</li>
<li>heapTotal：&quot;堆&quot;占用的内存，包括用到的和没用到的。</li>
<li>heapUsed：用到的堆的部分。</li>
<li>external： V8 引擎内部的 C++ 对象占用的内存。</li>
</ul>
<p><img src="@source/images/neicunxielou3.png" alt=""></p>
</li>
</ul>
</li>
</ul>
<p><strong>参考资料：</strong></p>
<p><a href="http://www.ruanyifeng.com/blog/2017/04/memory-leak.html" target="_blank" rel="noopener noreferrer">JavaScript 内存泄漏程<ExternalLinkIcon/></a></p>
<p><a href="https://segmentfault.com/a/1190000008901861" target="_blank" rel="noopener noreferrer">javascript典型内存泄漏及chrome的排查方法<ExternalLinkIcon/></a></p>
<h3 id="ajax-是什么" tabindex="-1"><a class="header-anchor" href="#ajax-是什么" aria-hidden="true">#</a> AJax 是什么？</h3>
<p><img src="@source/images/ajax1.png" alt=""></p>
<h3 id="创建-ajax-过程" tabindex="-1"><a class="header-anchor" href="#创建-ajax-过程" aria-hidden="true">#</a> 创建 Ajax 过程</h3>
<p><img src="@source/images/ajax2.png" alt=""></p>
<ul>
<li>示例：</li>
</ul>
<p><img src="@source/images/ajax3.png" alt=""></p>
<h3 id="消息推送技术" tabindex="-1"><a class="header-anchor" href="#消息推送技术" aria-hidden="true">#</a> 消息推送技术</h3>
<p><img src="@source/images/tuisongjishu.png" alt=""></p>
<p><strong>websocket 与 Ajax 区别</strong></p>
<p><img src="@source/images/wesock-ajax.png" alt=""></p>
<h3 id="sse实现" tabindex="-1"><a class="header-anchor" href="#sse实现" aria-hidden="true">#</a> SSE实现</h3>
<p><img src="@source/images/sse.png" alt=""></p>
<h3 id="websocket-实现" tabindex="-1"><a class="header-anchor" href="#websocket-实现" aria-hidden="true">#</a> websocket 实现</h3>
<p><img src="@source/images/websocket2.png" alt=""></p>
<p><img src="@source/images/websocket.png" alt=""></p>
<h3 id="跨页面通信方法" tabindex="-1"><a class="header-anchor" href="#跨页面通信方法" aria-hidden="true">#</a> 跨页面通信方法</h3>
<p>在浏览器中，我们可以同时打开多个Tab页，每个Tab页可以粗略理解为一个“独立”的运行环境，即使是全局对象也不会在多个Tab间共享。然而有些时候，我们希望能在这些“独立”的Tab页面之间同步页面的数据、信息或状态，因此需要跨页面通信。</p>
<p>跨页面通信分为两类</p>
<ul>
<li>同源跨页面通信
<ul>
<li>广播模式：Broadcast Channe / Service Worker / LocalStorage + StorageEvent</li>
<li>共享存储模式：Shared Worker / IndexedDB / cookie</li>
<li>口口相传模式：window.open + window.opener</li>
<li>基于服务端：Websocket / Comet / SSE 等</li>
</ul>
</li>
<li>非同源跨页面通信
<ul>
<li>嵌入同源 iframe 作为“桥”，将非同源页面通信转换为同源页面通信</li>
</ul>
</li>
</ul>
<p><strong>同源跨页面通信方案</strong></p>
<ul>
<li>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel" target="_blank" rel="noopener noreferrer">BroadcastChannel<ExternalLinkIcon/></a></strong></p>
<ul>
<li>
<p>接口代理了一个命名频道，可以让指定 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Origin" target="_blank" rel="noopener noreferrer">origin<ExternalLinkIcon/></a> 下的任意 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Browsing_context" target="_blank" rel="noopener noreferrer">browsing context<ExternalLinkIcon/></a> 来订阅它。它允许同源的不同浏览器窗口，Tab页，frame或者 iframe 下的不同文档之间相互通信。通过触发一个 <code v-pre>message</code> 事件，消息可以广播到所有监听了该频道的 <code v-pre>BroadcastChannel</code> 对象。</p>
</li>
<li>
<p>实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 发送消息页面</span>
<span class="token keyword">const</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BroadcastChannel</span><span class="token punctuation">(</span><span class="token string">'tabs'</span><span class="token punctuation">)</span>
channel<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>

<span class="token comment">// 监听消息页面</span>
<span class="token keyword">const</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BroadcastChannel</span><span class="token punctuation">(</span><span class="token string">'tabs'</span><span class="token punctuation">)</span>
channel<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token parameter">evt</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">// evt.data</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>缺点：</p>
</li>
<li>
<p><code v-pre>BroadcastChannel</code>方案兼容性差些（chrome &gt; 58），但比<code v-pre>localStorage</code>方案生命周期短（不会持久化）。</p>
</li>
</ul>
<hr>
</li>
<li>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer">LocalStorage<ExternalLinkIcon/></a></strong></p>
<ul>
<li>
<p>当 LocalStorage 变化时，会触发<code v-pre>storage</code>事件。利用这个特性，我们可以在发送消息时，把消息写入到某个 LocalStorage 中；然后在各个页面内，通过监听<code v-pre>storage</code>事件即可收到通知。</p>
<p><code v-pre>storage</code>事件只有在值真正改变时才会触发。</p>
<p>触发写入操作的页面下的 <code v-pre>storage listener</code>不会被触发。</p>
<p>safari隐身模式下无法设置<code v-pre>localStorage</code>值</p>
</li>
<li>
<p>实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//监听消息页面</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'storage'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'broadcast'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">'[receive] '</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>msg <span class="token operator">+</span> <span class="token string">' —— tab '</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>from<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[Storage I] receive message:'</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//发送消息页面</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'broadcast'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第一次设置值触发 storage 事件</span>
window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'broadcast'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第二次设置相同值不会触发 storage 事件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</li>
</ul>
</li>
<li>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker" target="_blank" rel="noopener noreferrer">Shared Worker<ExternalLinkIcon/></a></strong></p>
<ul>
<li><code v-pre>**SharedWorker**</code> 接口代表一种特定类型的 worker，可以从几个浏览上下文中<em>访问</em>，例如几个窗口、iframe 或其他 worker。它们实现一个不同于普通 worker 的接口，具有不同的全局作用域</li>
</ul>
</li>
</ul>
<p><strong>非同源跨页面通信方案</strong></p>
<ul>
<li>
<p><strong>获取句柄</strong>：</p>
<ul>
<li>
<p>父页面通过<code v-pre>window.open(url, name)</code>方式打开的子页面可以获取句柄，然后通过<code v-pre>postMessage</code>完成通讯需求。</p>
</li>
<li>
<p>实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// parent.html</span>
<span class="token keyword">const</span> childPage <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'child.html'</span><span class="token punctuation">,</span> <span class="token string">'child'</span><span class="token punctuation">)</span>

childPage<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   childPage<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span>origin<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// child.html</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token comment">// event.data</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>缺点：</p>
<ul>
<li>
<p>当指定<code v-pre>window.open</code>的第二个name参数时，再次调用<code v-pre>window.open('****', 'child')</code>会使之前已经打开的同name子页面刷新</p>
</li>
<li>
<p>只能与自己打开的页面完成通讯，应用面相对较窄；但优点是在跨域场景中依然可以使用该方案。</p>
</li>
<li>
<p>由于安全策略，异步请求之后再调用<code v-pre>window.open</code>会被浏览器阻止，不过可以通过句柄设置子页面的url即可实现类似效果。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 首先先开一个空白页</span>
<span class="token keyword">const</span> tab <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'about:blank'</span><span class="token punctuation">)</span>

<span class="token comment">// 请求完成之后设置空白页的url</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token comment">/* ajax */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   tab<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'****'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>iframe:</strong></p>
<p>嵌入同源 iframe 作为“桥”，将非同源页面通信转换为同源页面通信。由于 iframe 与父页面间可以通过指定<code v-pre>origin</code>来忽略同源限制，因此可以在每个页面中嵌入一个 iframe ，而这些 iframe 由于使用的是一个 url，因此属于同源页面，其通信方式可以复用上面第一部分提到的各种方式。</p>
<ul>
<li>
<p>实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 页面中监听 iframe 发来的消息</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// …… do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//当页面要与其他的同源或非同源页面通信时，会先给 iframe 发送消息</span>
window<span class="token punctuation">.</span>frames<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>mydata<span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//frame 收到消息后，会使用某种跨页面消息通信技术在所有 iframe 间同步消息，例如下面使用的 Broadcast Channel：</span>
<span class="token keyword">const</span> bc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BroadcastChannel</span><span class="token punctuation">(</span><span class="token string">'broadcast'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 收到来自页面的消息后，在 iframe 间进行广播</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bc<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">//其他 iframe 收到通知后，则会将该消息同步给所属的页面</span>
<span class="token comment">// 对于收到的（iframe）广播消息，通知给所属的业务页面</span>
bc<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/images/iframe-tongxin.png" alt=""></p>
</li>
</ul>
</li>
</ul>
<hr>
<p><strong>参考：</strong></p>
<p><a href="https://blog.csdn.net/p3118601/article/details/88966864" target="_blank" rel="noopener noreferrer">前端跨页面通信，你知道哪些方法？<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/29368435" target="_blank" rel="noopener noreferrer">跨页面通信的各种姿势*<ExternalLinkIcon/></a></p>
<hr>
<h3 id="iframe框架" tabindex="-1"><a class="header-anchor" href="#iframe框架" aria-hidden="true">#</a> Iframe框架</h3>
<ul>
<li>
<p>概念：</p>
<ul>
<li><strong>HTML内联框架元素 (<code v-pre>&lt;iframe&gt;</code>)</strong> 表示嵌套的<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Browsing_context" target="_blank" rel="noopener noreferrer">browsing context<ExternalLinkIcon/></a>。它能够将另一个HTML页面嵌入到当前页面中。</li>
<li>每个嵌入的浏览上下文（embedded browsing context）都有自己的<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History" target="_blank" rel="noopener noreferrer">会话历史记录(session history)<ExternalLinkIcon/></a>和<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document" target="_blank" rel="noopener noreferrer">DOM树<ExternalLinkIcon/></a>。</li>
<li>包含嵌入内容的浏览上下文称为<em>父级浏览上下文</em>。顶级浏览上下文（没有父级）通常是由 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window" target="_blank" rel="noopener noreferrer"><code v-pre>Window</code><ExternalLinkIcon/></a> 对象表示的浏览器窗口。</li>
</ul>
</li>
<li>
<p>属性： iframe的特性都是依赖参数配置实现：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>解释</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>allow</td>
<td>可以为iframe指定<a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FFeature_Policy" target="_blank" rel="noopener noreferrer">特性策略<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>allowfullscreen</td>
<td>是否允许iframe调用requestFullscreen()方法激活全屏模式，这个属性等同于allow属性的这个配置：<code v-pre>allow=&quot;fullscreen&quot;</code></td>
<td></td>
</tr>
<tr>
<td>allowpaymentrequest</td>
<td>是否允许一个跨域的iframe调用<a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FPayment_Request_API" target="_blank" rel="noopener noreferrer">支付请求API<ExternalLinkIcon/></a></td>
<td></td>
</tr>
<tr>
<td>csp</td>
<td>内嵌的资源强制实行同源策略</td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>iframe的高度，默认150px</td>
<td></td>
</tr>
<tr>
<td>importance</td>
<td>标识在iframe属性src指示的资源的下载优先级，有<code v-pre>auto</code>/<code v-pre>high</code>/<code v-pre>low</code>三个等级</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>内嵌的浏览内容的目标名称</td>
<td></td>
</tr>
<tr>
<td>referrerpolicy</td>
<td>指示当获取frame的资源的时候携带的referrer，默认是<code v-pre>no-referrer-when-downgrade</code>，也就是仅当发生协议降级（如 HTTPS 页面引入 HTTP 资源，从 HTTPS 页面跳到 HTTP 等）时不发送 Referrer 信息。这个规则是现在大部分浏览器默认所采用的；</td>
<td></td>
</tr>
<tr>
<td>sandbox</td>
<td>在frame上的内容上运用额外的一下限制: 1. script脚本不能执行；2. 不能发送ajax请求；3. 不能使用本地存储，即localStorage,cookie等； 4. 不能创建新的弹窗和window； 5. 不能发送表单 6. 不能加载额外插件比如flash等</td>
<td></td>
</tr>
</tbody>
</table>
</li>
<li>
<p>优点：</p>
<ul>
<li>iframe能够原封不动的把嵌入的网页展现出来。</li>
<li>如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。</li>
<li>网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。</li>
<li>如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。</li>
</ul>
</li>
<li>
<p>缺点：</p>
<ul>
<li>iframe会阻塞主页面的onload事件；动态设置<code v-pre>src</code>可解决这个问题。</li>
<li>iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。会产生很多页面，不容易管理。</li>
<li>iframe框架页面会增加服务器的http请求。加载了新页面，增加了<code v-pre>css</code>与<code v-pre>js</code>文件的请求，即额外增加了<code v-pre>HTTP</code>请求。</li>
<li>不利于搜索引擎优化（SEO）。现在的搜索引擎爬虫还不能很好的处理iframe中的内容。</li>
<li>iframe 如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。</li>
<li>设备兼容性差。很多的移动设备无法完全显示框架</li>
</ul>
</li>
<li>
<p>应用：</p>
<ul>
<li>实现Ajax：可以使用<code v-pre>iframe</code>进行实现异步请求发送，来模拟<code v-pre>Ajax</code>的请求操作，<code v-pre>Ajax</code>的异步请求完成操作为<code v-pre>XHR.readyState === 4</code>执行<code v-pre>callback</code>，<code v-pre>iframe</code>使用<code v-pre>iframe.onload</code>执行<code v-pre>callback</code>，还可以实现一个轮询长连接
<ul>
<li>现在基本上都是用Ajax来代替iframe，所以iframe已经渐渐的退出了前端开发。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值</li>
</ul>
</li>
<li>加载广告：广告是与原文无关的，假如硬编码进去，会造成网页布局的紊乱,而且这样势必需要引入额外的<code v-pre>css</code>和<code v-pre>js</code>文件，极大的降低了网页的安全性，使用<code v-pre>iframe</code>便可以解决这些问题。</li>
<li>提交表单：可以使用<code v-pre>iframe</code>提交表单来避免整个页面的刷新，还可以实现无刷新文件上传的操作。</li>
</ul>
</li>
<li>
<p>常见问题：</p>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe" target="_blank" rel="noopener noreferrer"><code v-pre>&lt;iframe&gt;</code> MDN<ExternalLinkIcon/></a></p>
<h3 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h3>
<p><img src="@source/images/bom.png" alt=""></p>
<h3 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h3>
<p><img src="@source/images/dom.png" alt=""></p>
<h3 id="dom事件分类" tabindex="-1"><a class="header-anchor" href="#dom事件分类" aria-hidden="true">#</a> DOM事件分类</h3>
<p><img src="@source/images/event.png" alt=""></p>
<h3 id="事件流" tabindex="-1"><a class="header-anchor" href="#事件流" aria-hidden="true">#</a> 事件流</h3>
<p>事件流是网页元素接收事件的顺序，&quot;DOM2级事件&quot;规定的事件流包括三个阶段：</p>
<ul>
<li>事件捕获阶段</li>
<li>处于目标阶段</li>
<li>事件冒泡阶段</li>
</ul>
<p><img src="@source/images/event-io.png" alt="event-io"></p>
<ul>
<li>例题：</li>
</ul>
<p><img src="@source/images/event-demo.png" alt=""></p>
<h3 id="事件是如果实现的" tabindex="-1"><a class="header-anchor" href="#事件是如果实现的" aria-hidden="true">#</a> 事件是如果实现的？</h3>
<p>基于<strong>发布订阅模式</strong>，就是在浏览器加载的时候会读取事件相关的代码，但是只有实际等到具体的事件触发的时候才会执行。</p>
<p>比如点击按钮，这是个事件（Event），而负责处理事件的代码段通常被称为事件处理程序（EventHandler），也就是「启动对话框的显示」这个动作。</p>
<p>在 Web 端，我们常见的就是 DOM 事件：</p>
<ul>
<li>DOM0 级事件，直接在 html 元素上绑定 on-event，比如 onclick，取消的话，dom.onclick =null，同一个事件只能有一个处理程序，后面的会覆盖前面的。</li>
<li>DOM2 级事件，通过 addEventListener 注册事件，通过 removeEventListener 来删除事件，一个事件可以有多个事件处理程序，按顺序执行，捕获事件和冒泡事件。</li>
<li>DOM3级事件，增加了事件类型，比如 UI 事件，焦点事件，鼠标事件。</li>
</ul>
<h3 id="事件委托-代理" tabindex="-1"><a class="header-anchor" href="#事件委托-代理" aria-hidden="true">#</a> 事件委托(代理)</h3>
<ul>
<li>
<p>概念：事件委托本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。</p>
</li>
<li>
<p>为什么要用事件委托？</p>
<ul>
<li>使用事件代理可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗和减少DOM操作。
<ul>
<li>每个函数都是一个对象，是对象就会占用内存，对象越多，内存占用率越大。</li>
<li>在JavaScript中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的与dom节点进行交互，访问dom的次数越多，引起浏览器<strong>重绘与重排</strong>的次数也就越多，就会延长整个页面的交互就绪时间；</li>
</ul>
</li>
<li>使用事件代理可以实现事件的动态绑定。
<ul>
<li>比如：新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理</li>
</ul>
</li>
</ul>
</li>
<li>
<p>优点：</p>
<ul>
<li>动态添加和修改元素，减少dom事件绑定的次数。将事件绑定到父节点上，通过事件冒泡获取到实际点击的叶子节点。</li>
<li>减少管理的函数。不用为每个元素都添加监听函数。同一个父节点下面类似的子元素，可以通过委托给父元素的监听函数来处理事件。</li>
<li>减少 JavaScript 和 DOM 节点之间的关联，这样也就减少了因循环引用而带来的内存泄漏发生的概率。</li>
</ul>
</li>
</ul>
<ul>
<li>
<p>应用：</p>
<blockquote>
<p>实现事件代理的效果跟直接给节点的事件效果相同。如：列表中点击 <code v-pre>&lt;li&gt;</code> 触发事件使用事件代理实现</p>
</blockquote>
<p>解决方案:</p>
<ul>
<li>
<p>Event 对象提供了一个属性叫 target，可以返回事件的目标节点；标准浏览器用ev.target，IE浏览器用event.srcElement；通过 target.nodeName 获取签名。</p>
</li>
<li>
<p>根据标签名称在 <code v-pre>&lt;li&gt;</code> 父节点获取 <code v-pre>target.nodeName</code> 判断子节点类型，分类处理。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> myul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myul<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 标准浏览器ev ie是event</span>
            <span class="token keyword">let</span> ev <span class="token operator">=</span> ev <span class="token operator">||</span> window<span class="token punctuation">.</span>event <span class="token comment">// 兼容ie</span>
            <span class="token keyword">let</span> target <span class="token operator">=</span> ev<span class="token punctuation">.</span>target <span class="token operator">||</span> ev<span class="token punctuation">.</span>srcElement
            <span class="token keyword">switch</span><span class="token punctuation">(</span> target<span class="token punctuation">.</span>nodeName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">'li'</span><span class="token operator">:</span> <span class="token comment">//do somthing...</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<hr>
<h2 id="js-兼容性" tabindex="-1"><a class="header-anchor" href="#js-兼容性" aria-hidden="true">#</a> JS 兼容性</h2>
<ul>
<li>兼容性产生原因：浏览器内核不同，不同 js 引擎对 js 的实现存在差异
<ul>
<li>Trident ['traɪd(ə)nt] 内核（IE 内核）：IE、浏览器兼容模式</li>
<li>Blink 内核（Chromium 内核）：Chrome、Opera</li>
<li>Gecko ['gekəʊ] 内核（FireFox 内核）：FireFox</li>
<li>Webkit 内核：Safari</li>
</ul>
</li>
<li>目前主要是 IE 浏览器与其他浏览 firefox 浏览器的差异。</li>
</ul>
<h3 id="兼容性问题" tabindex="-1"><a class="header-anchor" href="#兼容性问题" aria-hidden="true">#</a> 兼容性问题</h3>
<ul>
<li>const
<ul>
<li>现有问题：在IE中不能使用<code v-pre>const</code>关键字。如<code v-pre>const constVar = 32;</code>在IE中这是语法错误。</li>
<li>解决方法：不使用 <code v-pre>const</code>，以 <code v-pre>var</code> 代替。</li>
</ul>
</li>
<li>多余的逗号</li>
<li>现有问题：firefox 中对象文字常量容许多余的逗号，在IE中不允许。下面语句在IE中非法: <code v-pre>var obj = { ‘key’ : ‘aaa’, }</code></li>
<li>解决方法：去掉多余逗号。</li>
</ul>
<p><strong>元素查找问题</strong></p>
<ul>
<li>
<p>document.all[name]</p>
<ul>
<li>现有问题：Firefox不支持document.all[name]</li>
<li>解决方法：使用getElementsByName(name)，getElementById(id)等来替代。</li>
</ul>
</li>
<li>
<p>集合类对象问题</p>
</li>
<li>
<p>现有问题：IE中对许多集合类对象取用时可以用 ()，但在Firefox只能用[]。</p>
<ul>
<li>如：IE中可以使用<code v-pre>document.forms(“formName”)</code>来返回名字为”formName”的Form，但在Firefox却行不通。</li>
</ul>
</li>
<li>
<p>解决方法：使用[]，上例中可以改为<code v-pre>document.forms[“formName”]</code></p>
</li>
<li>
<p>HTML元素的ID在<a href="http://lib.csdn.net/base/javascript" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a>可见</p>
<ul>
<li>现有问题：IE中HTML元素中的ID可以作为document的下属对象变量名直接使用。在Firefox中不能。</li>
<li>解决方法：使用 <code v-pre>getElementById(“idName”)</code>代替 idName 作为对象变量使用。</li>
</ul>
</li>
<li>
<p><code v-pre>eval(idName)</code>取得对象</p>
<ul>
<li>现有问题：在IE中，利用eval(idName)可以取得ID为idName的HTML对象，在Firefox中不能。</li>
<li>解决方法：用 <code v-pre>getElementById(idName)</code> 代替 <code v-pre>eval(idName)</code>。</li>
</ul>
</li>
<li>
<p>变量名与某HTML对象ID相同</p>
<ul>
<li>现有问题：在Firefox中，因为对象ID不作为HTML对象的名称，所以可以使用与HTML对象id相同的变量名，IE中不能。</li>
<li>解决方法：在声明变量时，一律加上var，以避免歧义，这样在IE中亦可正常运行。此外，最好不要取与HTML对象id相同的变量名，以减少错误。</li>
<li>注：3、4和5都属于同一类的问题。</li>
</ul>
</li>
<li>
<p>Frame</p>
<ul>
<li>现有问题：在IE中可以用 <code v-pre>window.top.frameId</code> 和 <code v-pre>window.top.frameName</code> 来得到该 Frame 所代表的 Window，Firefox中只能用 <code v-pre>window.top.frameName</code>。</li>
<li>解决方法：将 Frame 的Id和Name设置成相同，使用 <code v-pre>window.top.frameName</code> 来访问Frame。</li>
</ul>
</li>
</ul>
<p><strong>DOM 操作</strong></p>
<ul>
<li>
<p>创建DOM</p>
<ul>
<li>
<p>现有问题：IE 使用 ActiveXObject() 创建 DOM， firefox 使用 <code v-pre>document.implementation.createDocument</code></p>
</li>
<li>
<p>解决方法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createXmlDom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> oXmlDom<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Window<span class="token punctuation">.</span>ActiveXObject<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// IE</span>
     oXmlDom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">"Microsoft.XmlDom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// Firefox</span>
     oXmlDom <span class="token operator">=</span> document<span class="token punctuation">.</span>implementation<span class="token punctuation">.</span><span class="token function">createDocument</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>设置元素的文本内容。</p>
<ul>
<li>
<p>现有问题：IE使用innerText，而Firefox使用 textContent 来设置元素文本内容。</p>
</li>
<li>
<p>解决方法：如果文本内容不包含 <code v-pre>&lt;</code> 和 <code v-pre>&gt;</code> 等特殊字符，可以使用 innerHTML。否则，可以使用：</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> child <span class="token operator">=</span> elem<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> elem<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
elem<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>parentElement，parent.children</p>
<ul>
<li>现有问题：IE可以使用 parentElement 获得父结点，parent.children 得到结点的所有孩子结点。Firefox不支持。</li>
<li>解决方法：使用 parentNode 和 parent.childNodes。</li>
</ul>
</li>
<li>
<p>对childNodes的解释。</p>
</li>
<li>
<p>现有问题：IE和Firefox中对childNodes的解释不同，IE不会包含空白文本结点，而Firefox会包含。</p>
</li>
<li>
<p>解决方法：使用childNodes过滤文本结点，如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> children <span class="token operator">=</span> elem<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>nodeType <span class="token operator">!=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 过滤文本结点</span>
    <span class="token comment">// ...</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>对 <code v-pre>document.getElementsByName</code> 的解释。</p>
<ul>
<li>现有问题：IE中 <code v-pre>getElementsByName</code> 只会检查和元素，而在Firefox下会检查所有元素。</li>
<li>解决方法：不要使用 <code v-pre>getElementsByName</code> 检查除和之外的元素，如果要获得单个元素，尽量使用 <code v-pre>getElementById</code>。</li>
</ul>
</li>
<li>
<p>对 <code v-pre>document.getElementById</code> 的解释。</p>
<ul>
<li>现有问题：IE中 <code v-pre>getElementById</code> 不仅检查Id属性，也会检查Name属性，当Name属性匹配参数时也会返回该元素。而在Firefox中只会检查Id属性。</li>
<li>解决方法：尽量保持Id和Name相同，不要让一个元素name属性和另一个元素的id属性相同。</li>
</ul>
</li>
</ul>
<p><strong>事件</strong></p>
<ul>
<li>
<p>event.x与event.y问题</p>
<ul>
<li>
<p>现有问题：在IE中，event对象有x,y 属性，Firefox中没有。</p>
</li>
<li>
<p>解决方法：在Firefox中，与event.x 等效的是 event.pageX。可以使用：</p>
</li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>mX <span class="token operator">=</span> event<span class="token punctuation">.</span>x <span class="token operator">?</span> event<span class="token punctuation">.</span>x <span class="token operator">:</span> event<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>获取事件及事件对象目标</p>
<ul>
<li>
<p>存在问题：</p>
<ul>
<li>在IE中，event对象为window的属性，作用于全局作用域，而在Firefox中，event对象是最为事件的参数存在的</li>
<li>在IE中通过event对象的srcElement属性访问，而在火狐中通过event对象的target属性访问。</li>
</ul>
</li>
<li>
<p>解决方案：</p>
</li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//获取事件对象的兼容性写法</span>
 <span class="token function-variable function">getEvent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> event <span class="token operator">?</span> event <span class="token operator">:</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token comment">//获取事件对象目标的兼容性写法</span>
 <span class="token function-variable function">getTarget</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>target <span class="token operator">||</span> event<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>添加事件方法</p>
<ul>
<li>
<p>现有问题：IE中使用attachEvent来添加事件，Firefox中使用addEventListener。</p>
</li>
<li>
<p>解决方法：如下，注意事件参数的区别，一个是click，一个是onclick。</p>
</li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>addHandler：<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>type<span class="token punctuation">,</span>handler</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">if</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//检测是否为DOM2级方法</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//检测是否为IE级方法</span>
  element<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">"on"</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//检测是否为DOM0级方法</span>
  element<span class="token punctuation">[</span><span class="token string">"on"</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> handler<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>移除事件方法</p>
<ul>
<li>
<p>问题：IE中使用detachEvent来移除事件，Firefox中使用 removeEventListener。</p>
</li>
<li>
<p>解决方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>removeHandler：<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>removeEventListener<span class="token punctuation">)</span><span class="token punctuation">{</span>
   element<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>detachEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>
   element<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">"on"</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   element<span class="token punctuation">[</span><span class="token string">"on"</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>阻止浏览器默认事件的兼容性写法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">preventDefault</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span><span class="token punctuation">{</span>
   event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>阻止事件冒泡的兼容性写法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">stopPropagation</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span><span class="token punctuation">{</span>
   event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>mouseover和mouseout 事件才包含的获取相关元素的方法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//mouseover和mouseout 事件才包含的获取相关元素的方法</span>
<span class="token function-variable function">getRelatedTarget</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>relatedTarget<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>relatedTarget<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>toElement<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>toElement<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>fromElement<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>fromElement<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>鼠标滚轮判断 :</p>
<ul>
<li>
<p>对于mousedown 和mouseup 事件来说，则在其 event 对象存在一个button 属性， 表示按下或释放的按钮。</p>
</li>
<li>
<p>DOM的button 属性可能有如下3 个值：0 表示主鼠标按钮，1 表示中间的鼠 标按钮（鼠标滚轮按钮），2 表示次鼠标按钮。</p>
<ul>
<li>在常规的设置中，主鼠标按钮就是鼠标左键，而次鼠标 按钮就是鼠标右键。</li>
</ul>
</li>
<li>
<p>IE8 及之前版本也提供了button 属性，但这个属性的值与DOM 的button 属性有很大差异。</p>
<ul>
<li>0：表示没有按下按钮。</li>
<li>1：表示按下了主鼠标按钮。</li>
<li>2：表示按下了次鼠标按钮。</li>
<li>3：表示同时按下了主、次鼠标按钮。</li>
<li>4：表示按下了中间的鼠标按钮。</li>
<li>5：表示同时按下了主鼠标按钮和中间的鼠标按钮。</li>
<li>6：表示同时按下了次鼠标按钮和中间的鼠标按钮。</li>
<li>7：表示同时按下了三个鼠标按钮。</li>
</ul>
</li>
<li>
<p>解决方案：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token function-variable function">getButton</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>implementation<span class="token punctuation">.</span><span class="token function">hasFeature</span><span class="token punctuation">(</span><span class="token string">"MouseEvents"</span><span class="token punctuation">,</span> <span class="token string">"2.0"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>button<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>button<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
   <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
   <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
   <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>取得鼠标滚轮增量值（delta）的方法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">getWheelDelta</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>wheelDelta<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>client<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>opera <span class="token operator">&amp;&amp;</span> client<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>opera <span class="token operator">&lt;</span> <span class="token number">9.5</span> <span class="token operator">?</span>
   <span class="token operator">-</span>event<span class="token punctuation">.</span>wheelDelta <span class="token operator">:</span> event<span class="token punctuation">.</span>wheelDelta<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">-</span>event<span class="token punctuation">.</span>detail <span class="token operator">*</span> <span class="token number">40</span><span class="token punctuation">;</span><span class="token comment">//firefox中的值为+3表示向上滚，-3表示向下滚</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>跨浏览器的方式取得字符编码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">getCharCode</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> event<span class="token punctuation">.</span>charCode <span class="token operator">==</span> <span class="token string">"number"</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>charCode<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>keyCode<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>访问剪贴板中的数据:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">getClipboardText</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> clipboardData <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>clipboardData <span class="token operator">||</span> window<span class="token punctuation">.</span>clipboardData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> clipboardData<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token string">"text"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置剪贴板中的数据:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">setClipboardText</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>clipboardData<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> event<span class="token punctuation">.</span>clipboardData<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">"text/plain"</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>clipboardData<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> window<span class="token punctuation">.</span>clipboardData<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">"text"</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>XML 兼容性</strong></p>
<ul>
<li>
<p>创建XMLHttpRequest</p>
<ul>
<li>
<p>现有问题：Firefox使用XMLHttpRequest，IE使用ActiveXObject。</p>
</li>
<li>
<p>解决方法：</p>
</li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>ActiveXObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">"Microsoft.XMLHTTP"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>加载XML</p>
<ul>
<li>
<p>现有问题：如果要加载外部文件IE和Firefox都可以用:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>oXmlDom<span class="token punctuation">.</span>async<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>      <span class="token comment">// 这在Firefox中是必须的</span>
oXmlDom<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">"test.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是它们加载xml字符串的方式不一样，IE中直接可以使用 <code v-pre>oXmlDom.loadXML(&quot;&lt;root&gt;&lt;child/&gt;&lt;/root&gt;&quot;)</code>，而Firefox要使用DOMParser:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> oParser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> oXmlDom <span class="token operator">=</span> oParser<span class="token punctuation">.</span><span class="token function">parseFromString</span><span class="token punctuation">(</span><span class="token string">"&lt;root/>"</span><span class="token punctuation">,</span> <span class="token string">"text/xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>解决方法：比较好的方法是给Firefox产生的XMLDom加上loadXML方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>isFirefox<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 需要浏览器检测</span>
 <span class="token class-name">Document</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">loadXML</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sXml</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> oParser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> oXmlDom <span class="token operator">=</span> oParser<span class="token punctuation">.</span><span class="token function">parseFromString</span><span class="token punctuation">(</span>sXml<span class="token punctuation">,</span> <span class="token string">"text/xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> oXmlDom<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> oNewNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">importNode</span><span class="token punctuation">(</span>oXmlDom<span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oNewNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在IE和Firefox就可以调用loadXML方法了。</p>
</li>
</ul>
</li>
</ul>
<h3 id="兼容性统一处理方案" tabindex="-1"><a class="header-anchor" href="#兼容性统一处理方案" aria-hidden="true">#</a> 兼容性统一处理方案</h3>
<hr>
<h2 id="原理实现" tabindex="-1"><a class="header-anchor" href="#原理实现" aria-hidden="true">#</a> 原理实现</h2>
<h3 id="实现-new-操作符" tabindex="-1"><a class="header-anchor" href="#实现-new-操作符" aria-hidden="true">#</a> 实现 new 操作符</h3>
<p>new操作符作用: 创建一个给定构造函数的实例</p>
<ul>
<li>原理
<ul>
<li>（1）创建一个空对象；</li>
<li>（2）将空对象的[prototype]原型指向构造函数的原型对象；</li>
<li>（3）将构造函数的执行上下文this绑定到空对象；</li>
<li>（4）返回空对象</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**

 \* @param <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">construct</span> 构造函数

 \* @param <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">args</span>  其余参数

 \* @return obj 绑定了构造函数上下文的空对象

 */</span>

<span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">construct<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//创建空对象</span>

  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> construct<span class="token punctuation">.</span>prototype <span class="token comment">//将空对象的[prototype]原型指向构造函数的原型对象</span>

  <span class="token function">construct</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">//将构造函数的执行上下文this绑定到空对象</span>

  <span class="token keyword">return</span> obj

<span class="token punctuation">}</span>

<span class="token comment">//-----------------------------------------使用-------------------------------------------------------</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name

  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age

<span class="token punctuation">}</span>

<span class="token keyword">let</span> person1 <span class="token operator">=</span> <span class="token function">myNew</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">'joker'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>person1<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>person1<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现-instanceof-操作符" tabindex="-1"><a class="header-anchor" href="#实现-instanceof-操作符" aria-hidden="true">#</a> 实现 instanceof 操作符</h3>
<ul>
<li>
<p>instanceof操作符号作用:  a instanceof B 用于判断a实例是否为B对象的原型</p>
</li>
<li>
<p>原理</p>
<ul>
<li>(1)获取对象的原型prototype；</li>
<li>(2)获取实例的__proto__属性；</li>
<li>(3) 判断实例__proto__是否等于对象的prototype，相等返回true，否则获取实例原型的原型属性(<strong>proto</strong>.<strong>proto</strong>)；继续判断... 如果循环，直到实例的__proto__属性返回null，则表示退出循环</li>
</ul>
</li>
</ul>
<p><strong>实现一</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**

 \* 递归实现instanceof

 \* @param <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">inst</span> 实例

 \* @param <span class="token class-name"><span class="token punctuation">{</span>obj<span class="token punctuation">}</span></span> <span class="token parameter">对象</span>  其余参数

 \* @return true || false

 */</span>

<span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">let</span> proto <span class="token operator">=</span> inst<span class="token punctuation">.</span>__proto__ <span class="token comment">//获取实例的__proto__属性</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//如果实例__proto__属性存在，则沿着__proto__原型链查找</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> obj<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//在实例原型链中找到d对象的prototype对象</span>

      <span class="token keyword">return</span> <span class="token boolean">true</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//沿着__proto__原型链递归查找</span>

      <span class="token keyword">return</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span>proto<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//已经查找达到原型链顶部，不存在对象的prototype对象</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>

  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>



<span class="token doc-comment comment">/**

 \* 非递归实现instanceof

 \* 分析：非递归版实现可以通过递归版本转换，递归转换非递归实现核心为需要寻找函数的出口条件，没有找到一直循环查找

 \* @param <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">inst</span> 实例

 \* @param <span class="token class-name"><span class="token punctuation">{</span>obj<span class="token punctuation">}</span></span> <span class="token parameter">对象</span>  其余参数

 \* @return true || false

 */</span>

<span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">inst<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">let</span> proto <span class="token operator">=</span> inst<span class="token punctuation">.</span>__proto__ <span class="token comment">//获取实例的__proto__属性</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>proto <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//出口条件: 实例的__proto__为null，当实例__proto__为null时表示查找到实例原型链的最顶端</span>

​    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> obj<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//在实例的原型链中查找对象的prototype对象</span>

​      <span class="token keyword">return</span> <span class="token boolean">true</span>

​    <span class="token punctuation">}</span>

​    proto <span class="token operator">=</span> proto<span class="token punctuation">.</span>__proto__ <span class="token comment">//沿着实例的原型链查找</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现二</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">/*
 * --- 手动实现 instanceof ---
 */</span>

<span class="token keyword">function</span> <span class="token function">newInstanceOf</span> <span class="token punctuation">(</span><span class="token parameter">leftValue<span class="token punctuation">,</span> rightValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> leftValue <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> rightValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">let</span> rightProto <span class="token operator">=</span> rightValue<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
    leftValue <span class="token operator">=</span> leftValue<span class="token punctuation">.</span>__proto__<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftValue <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftValue <span class="token operator">===</span> rightProto<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        leftValue <span class="token operator">=</span> leftValue<span class="token punctuation">.</span>__proto__<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * ------ 验证 ------
 */</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//------测试用例-----</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newInstanceOf</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> Array<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newInstanceOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> Object<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newInstanceOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> Array<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newInstanceOf</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> Object<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newInstanceOf</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> Foo<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newInstanceOf</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> Child<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newInstanceOf</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> Father<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newInstanceOf</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> Object<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这个问题既考察了 instanceof 的原理，又考察了原型链，还考察了代码能力。</p>
<p>在实现代码中，我们判断 leftValue 是否为 rightValue 的实例，思想是在 leftValue 的原型链上，即 leftValue.<strong>proto</strong> 上寻找是否存在 rightValue.prototype。原理图如下:</p>
<p><img src="@source/images/instanceof-demo.png" alt=""></p>
</blockquote>
<h3 id="实现-object-create" tabindex="-1"><a class="header-anchor" href="#实现-object-create" aria-hidden="true">#</a> 实现 Object.create()</h3>
<ul>
<li>原理： 将传入的对象作为原型</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现-call" tabindex="-1"><a class="header-anchor" href="#实现-call" aria-hidden="true">#</a> 实现 <a href="https://developer.mozilla.org/zh-CN/search?q=call" target="_blank" rel="noopener noreferrer">call()<ExternalLinkIcon/></a></h3>
<ul>
<li>
<p>作用
在特定的作域中调用函数，实际上等于设置函数体内 this 对象的值，扩充函数的作用域</p>
</li>
<li>
<p>接收多个参数
第一个参数:在其中运行函数的作用域，一般为this
其余参数:传递给函数的参数必须逐个列举出来</p>
</li>
<li>
<p>返回值
使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined</p>
</li>
<li>
<p>原理</p>
<ul>
<li>
<p>将&quot;调用call方法的函数&quot;的原型添加到call()方法第一个参数对象的作用域链上</p>
<blockquote>
<p>​	添加原型过程：</p>
<p>​	1.当函数调用call()方法时候传入第一个参数为调用者this绑定的对象，参数为空默认为全局对象，既window
​	2.因为call()方法是挂在到Function.prototype指向的对象(既Funtion的原型对象)内的,所以当一个函数调用call()方法时候，call()方法内部的this是指向调用者对象的
​	3.call()内部将this保存到传入的第一个参数对象中(既需要绑定this的对象)，作为参数对象的一个属性
​	4.保存this后，则call()方法的this对象(既调用call方法的函数)与传入参数对象形成一条作用域链，在该作用域链中this对象(既调用call方法的函数）在作用域链的最前端
​	5.然后通过传入参数对象调用“调用call方法的函数”,此时“调用call方法的函数”的this指向与参数对象形成的作用域链
​	6.当查找某个属性时，如果&quot;调用call()方法的函数&quot;没有该属性，就会沿着这条作用域链去参数对象中查找该属性</p>
</blockquote>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 模拟实现call()方法
 * call()方法原理：通过将调用call方法的函数作用域扩展到第一个参数对象的作用域链中,因此调用call的函数通过this可以访问到参数对象的属性和方法
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> context, 扩展的作用域对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">args</span>  其余参数
 * return result 函数调用结果
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//判断当前this是否为函数,防止Function.prototype.myCall() 直接调用;直接调用this指向funcion原型对象</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//输出 ƒ () { [native code] }</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
  context <span class="token operator">=</span> context <span class="token operator">||</span> window <span class="token comment">//context 为可选参数,如果不传的话默认上下文为 window</span>
  <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//为context 创建一个 Symbol（保证不会重名）属性,将当前函数赋值给这个属性</span>
  <span class="token comment">//因为调用myCall方法的函数是调用了自己原型链对象上的myCall方法,所以当前myCall方法内的this指向调用myCall方法的函数</span>
  context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>  <span class="token comment">//将调用myCall方法的函数挂在到传入的contex原型对象上,成为context对象的属性;调用函数作用域添加到参数对象的作用域链上</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token comment">//在context对象上调用调用myCall方法的函数,此时myCall可以访问到参数对象的作用域链上的属性和方法</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>   <span class="token comment">//调用完成后在context对象上删除调用myCall方法的函数,既从参数对象的作用域链中删除调用myCall的函数的作用域</span>
  <span class="token keyword">return</span> result   <span class="token comment">//返回结果</span>
<span class="token punctuation">}</span>
<span class="token comment">//myCall使用示例</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a is '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token string">' greet is '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//输出a is 2 greet is [object Window]</span>
greet<span class="token punctuation">.</span><span class="token function">myCall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//a is 2 greet is [object Window]</span>
greet<span class="token punctuation">.</span><span class="token function">myCall</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token comment">//输出a is 1 greet is [object Object]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现-apply" tabindex="-1"><a class="header-anchor" href="#实现-apply" aria-hidden="true">#</a> 实现 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" target="_blank" rel="noopener noreferrer">apply()<ExternalLinkIcon/></a></h3>
<ul>
<li>作用
在特定的作域中调用函数，实际上等于设置函数体内 this 对象的值，扩充函数的作用域</li>
<li>接收2个参数
第一个参数:在其中运行函数的作用域，一般为this
第二个参数:参数数组，可以是 Array 的实例，也可以是arguments 对象</li>
<li>返回值
调用有指定this值和参数的函数的结果</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * apply()方法原理和callf()方法原理一样,但是第二个参数不同:apply的第二个参数为数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> context, 扩展的作用域对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">args</span>  其余参数
 * return result 函数调用结果
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  context <span class="token operator">=</span> context <span class="token operator">||</span> window
  <span class="token keyword">let</span> result
  <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//当前参数为数组</span>
    result <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//参数为空</span>
    result <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>call() 和 apply()方法比较
<ul>
<li>区别： call()方法接受的是参数列表，而apply()方法接受的是一个参数数组</li>
</ul>
</li>
</ul>
<h3 id="实现-bind" tabindex="-1"><a class="header-anchor" href="#实现-bind" aria-hidden="true">#</a> 实现 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" target="_blank" rel="noopener noreferrer">bind()<ExternalLinkIcon/></a></h3>
<ul>
<li>创建一个函数的实例，其 this 值会被绑定到传给 bind() 函数的值</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])函数参数
 * 函数参数：
 *  thisArg,  调用绑定函数时作为 this 参数传递给目标函数的值
 *  arg1, arg2, ...  当目标函数被调用时,被预置入绑定函数的参数列表中的参数。
 *  返回值 function 返回一个原函数的拷贝,并拥有指定的 this 值和初始参数
 */</span>

<span class="token doc-comment comment">/**
 * 实现方式一
 * bind()最简单的实现
 * 思想：给目标函数指定作用域
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">context</span> 绑定的作用域对象
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">//保存调用函数的作用域</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 实现方式二
 * 考虑bind()函数柯里化情况？？
 * 思想：获取函数参数,返回一个闭包函数,用于收集函数其余参数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">context</span> 绑定的作用域对象
 */</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">//保存调用函数的作用域</span>
  <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//获取第二个参数之后的所有参数(第一个参数为context)</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//返回闭包</span>
    <span class="token keyword">let</span> innerArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span> <span class="token comment">//收集第二个以后参数</span>
    <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>innerArgs<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//合并参数并用调用bind()的函数调用apply</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 实现方式三(推荐)
 * Javascript的函数还可以作为构造函数,那么绑定后的函数用这种方式调用时,情况有所不同
 * 思想：通过设置一个中转构造函数F,使绑定后的函数与调用bind()的函数处于同一原型链上,
 * 用new操作符调用绑定后的函数,返回的对象也能正常使用instanceof,因此这是最严谨的bind()实现
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">context</span> 绑定的作用域对象
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//防止直接调用</span>
    <span class="token keyword">throw</span> <span class="token function">TypeError</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">//保存调用者函数的作用域</span>
  <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//获取第二个参数之后的所有参数(第一个参数为context)</span>
  <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token comment">//创建一个中转构造函数</span>
  <span class="token keyword">let</span> <span class="token function-variable function">bound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//闭包,用于收集bind()的其余参数</span>
    <span class="token keyword">let</span> innerArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span> <span class="token comment">//获取回调函数参数</span>
    <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">F</span> <span class="token operator">&amp;&amp;</span> context <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> context <span class="token operator">||</span> window<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>innerArgs<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> self<span class="token punctuation">.</span>prototype <span class="token comment">//F继承当前函数,与调用bind的函数作用域链链接</span>
  bound<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//闭包函数继承F函数,使作用域链接与调用bind()函数的作用域链链接,最总形成 bound -> F -> 调用bind的函数的作用链  </span>
  <span class="token keyword">return</span> bound
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 简化价写法(推荐)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">context</span> 绑定的作用域对象
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token function">TypeError</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">//保存调用bind方法的函数作用域</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//返回闭包</span>
    <span class="token comment">//判断是否为构造函数调用,如果是则使用new调用当前构造函数？？</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">F</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">self</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//否则使用apply，将context和处理好的参数传入</span>
    <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args2<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>注意问题
<ul>
<li>显示绑定对箭头函数无效，箭头函数在定义时绑定了外层对象</li>
<li>如果你传入了一个原始值（字符串类型、布尔类型或者数字类型）来当作 this 的绑定对象，这个原始值会被转换成它的对象形式（也就是 new String(..) 、 new Boolean(..) 或者new Number(..) ）。这通常被称为“装箱”</li>
<li>把 null 或者 undefined 作为 this 的绑定对象传入 call 、 apply 或者 bind ，这些值在调用时会被忽略，实际应用的是默认绑定规则</li>
<li>使用null作为绑定方法的绑定对象产生的问题
<ul>
<li>如果函数并不关心 this 的话，你仍然需要传入一个占位值，这时 null 可能是一个不错的选择</li>
<li>总是使用 null 来忽略 this 绑定可能产生一些副作用。</li>
<li>如果某个函数确实使用了this （比如第三方库中的一个函数），</li>
<li>那默认绑定规则会把 this 绑定到全局对象（在浏览器中这个对象是 window ）</li>
<li>解决方法：
<ul>
<li>使用空对象作为绑定方法的绑定对象，在 JavaScript 中创建一个空对象最简单的方法都是 Object.create(null)，Object.create(null) 和 {} 很像，但是并不会创建 Object.prototype 这个委托，所以它比 {} “更空”</li>
<li>如果想“更安全”地忽略 this 绑定，你可以使用一个 Object.create(null) 对象，以保护全局对象</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="实现-sort" tabindex="-1"><a class="header-anchor" href="#实现-sort" aria-hidden="true">#</a> 实现 sort()</h3>
<blockquote>
<p><strong>讲下 V8 sort 的大概思路，并手写一个 sort 的实现</strong></p>
</blockquote>
<ul>
<li>
<p>关于 <code v-pre>Array.prototype.sort()</code> ，ES 规范并没有指定具体的算法，在 V8 引擎中，  <strong>7.0 版本之前</strong> ，数组长度小于10时， <code v-pre>Array.prototype.sort()</code> 使用的是插入排序，否则用快速排序。</p>
</li>
<li>
<p>在 V8 引擎 <strong>7.0 版本之后</strong> 就舍弃了快速排序，因为它不是稳定的排序算法，在最坏情况下，时间复杂度会降级到 O(n2)。于是采用了一种混合排序的算法：<strong>TimSort</strong> 。</p>
</li>
</ul>
<p><img src="@source/images/paixu.png" alt=""></p>
<h3 id="实现准时的-settimeout" tabindex="-1"><a class="header-anchor" href="#实现准时的-settimeout" aria-hidden="true">#</a> 实现准时的 setTimeout</h3>
<ul>
<li>
<p>setTimeout 存在问题：因为 setTimtout 为宏任务，在 setTimeout 任务推入任务队列时，有可能在 JS 时间循环中主线程存在其他任务，因此 setTimeout 任务存在时间误差。参考本节 <a href="###%E5%AE%9A%E6%97%B6%E5%99%A8">定时器</a> 中解释。</p>
</li>
<li>
<p>实现准时 setTomeout 有四种方式：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:left">while</th>
<th style="text-align:left">Web Worker</th>
<th style="text-align:left">requestAnimationFrame</th>
<th style="text-align:left">setTimeout 系统时间补偿</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">准确度</td>
<td style="text-align:left">高</td>
<td style="text-align:left">高</td>
<td style="text-align:left">低</td>
<td style="text-align:left">高</td>
</tr>
<tr>
<td style="text-align:left">主线程阻塞</td>
<td style="text-align:left">阻塞</td>
<td style="text-align:left">一般</td>
<td style="text-align:left">不阻塞</td>
<td style="text-align:left">不阻塞</td>
</tr>
<tr>
<td style="text-align:left">评分</td>
<td style="text-align:left">⭐️⭐️</td>
<td style="text-align:left">⭐️⭐️⭐️</td>
<td style="text-align:left">⭐️</td>
<td style="text-align:left">⭐️⭐️⭐️⭐️⭐️</td>
</tr>
</tbody>
</table>
<p><strong>while 循环实现</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>now <span class="token operator">-</span> startTime <span class="token operator">>=</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'误差'</span><span class="token punctuation">,</span> now <span class="token operator">-</span> startTime <span class="token operator">-</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">timer</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>打印：误差 0</p>
</blockquote>
<ul>
<li>优点：方式很精确</li>
<li>缺点： js 是单线程运行，使用这样的方式强行霸占线程会使得页面进入卡死状态。</li>
</ul>
<p><strong>Web Worker</strong></p>
<ul>
<li>
<p>通过 Web Worker 在另一个线程来执行定时任务.</p>
</li>
<li>
<p>一个 worker 的简单的示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">var</span> myWorker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">'worker.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听 worker</span>
myWorker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result<span class="token punctuation">.</span>textContent <span class="token operator">=</span> e<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Message received from worker'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
first<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 向 worker 发送数据</span>
  myWorker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">[</span>first<span class="token punctuation">.</span>value<span class="token punctuation">,</span>second<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Message posted to worker'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// worker.js</span>
<span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 接受主线程的数据</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Message received from main script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> workerResult <span class="token operator">=</span> <span class="token string">'Result: '</span> <span class="token operator">+</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> e<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Posting message back to main script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 向主线程发送数据</span>
  <span class="token function">postMessage</span><span class="token punctuation">(</span>workerResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么接下来我们就要加 worker 和 while 相结合，以下为创建 worker 部分</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// worker生成器</span>
<span class="token keyword">const</span> <span class="token function-variable function">createWorker</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'('</span> <span class="token operator">+</span> fn<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">')()'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token comment">// worker 部分</span>
<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token function">createWorker</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> date <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>now <span class="token operator">-</span> date <span class="token operator">>=</span> e<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们通过在 worker 中写入一个 while 循环，当达到我们的预取时间的时候，再向主线程发送一个完成事件，就不会因为主线程的其他代码的干扰而造成数据不准的情况。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> isStart <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    worker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isStart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
    worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>requestAnimationFrame()</strong></p>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame" target="_blank" rel="noopener noreferrer"><strong><code v-pre>window.requestAnimationFrame()</code></strong> <ExternalLinkIcon/></a>:告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行，回调函数执行次数通常是每秒60次，也就是每16.7ms 执行一次，但是并不一定保证为 16.7 ms。</p>
</li>
<li>
<p>实现:</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模拟代码</span>
<span class="token keyword">function</span> <span class="token function">setTimeout2</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
    <span class="token keyword">function</span> <span class="token function">loop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> startTime <span class="token operator">>=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>loop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>缺点: 由于 16.7 ms 间隔执行，在使用间隔很小的定时器，很容易导致时间的不准确</p>
</li>
</ul>
</li>
</ul>
<p><strong>setTimeout 系统时间补偿</strong></p>
<ul>
<li>
<p>原理:当每一次定时器执行时后，都去获取系统的时间来进行修正，虽然每次运行可能会有误差，但是通过系统时间对每次运行的修复，能够让后面每一次时间都得到一个补偿</p>
<ul>
<li>
<p>setTimetout 时序:</p>
<p><img src="@source/images/settimeout时序.png" alt=""></p>
</li>
<li>
<p>setTimeout 时间补偿:</p>
<p><img src="@source/images/settimeout时间补偿.png" alt=""></p>
</li>
</ul>
</li>
<li>
<p>实现:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> speed <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">,</span>
   counter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> 
   start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
   <span class="token keyword">function</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ideal <span class="token operator">=</span> <span class="token punctuation">(</span>counter <span class="token operator">*</span> speed<span class="token punctuation">)</span><span class="token punctuation">,</span>
    real <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    counter<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> diff <span class="token operator">=</span> <span class="token punctuation">(</span>real <span class="token operator">-</span> ideal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    form<span class="token punctuation">.</span>diff<span class="token punctuation">.</span>value <span class="token operator">=</span> diff<span class="token punctuation">;</span>

    window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>speed <span class="token operator">-</span> diff<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过系统时间进行修复</span>

   <span class="token punctuation">}</span><span class="token punctuation">;</span>
   
   window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> speed<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://mp.weixin.qq.com/s/1ComSa7Rw-p_NIfg0dup7Q" target="_blank" rel="noopener noreferrer">如何实现准时的setTimeout<ExternalLinkIcon/></a></p>
<h3 id="实现深拷贝" tabindex="-1"><a class="header-anchor" href="#实现深拷贝" aria-hidden="true">#</a> 实现深拷贝</h3>
<p>深拷贝考虑问题：</p>
<ul>
<li>基础类型</li>
<li>引用类型
<ul>
<li>RegExp、Date、函数 不是 JSON 安全的</li>
<li>会丢失 constructor，所有的构造函数都指向 Object</li>
<li>破解循环引用</li>
</ul>
</li>
</ul>
<p>实现一：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> obj<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">?</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>    
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       	result <span class="token operator">=</span> obj<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现二：</p>
<p><img src="@source/images/deepCopy.png" alt=""></p>
<h3 id="实现防抖" tabindex="-1"><a class="header-anchor" href="#实现防抖" aria-hidden="true">#</a> 实现防抖</h3>
<ul>
<li>
<p>防抖作用：防止触发频率过高</p>
</li>
<li>
<p>思想：不管事件触发频率多高，事件总是在n秒后执行；如果一个事件在触发后n秒内再次触发，就清除前一次事件的计时，以后一次事件触发事件为准冲重新计时n秒，n秒后执行</p>
</li>
</ul>
<p><img src="@source/images/防抖节流.gif" alt=""></p>
<ul>
<li>
<p>原理：当调用debounce以后立即执行，返回闭包函数给调用者，往后执行都是执行闭包函数，闭包中可以访问debounce中定义的定时器变量</p>
</li>
<li>
<p>实现流程：</p>
<ul>
<li>
<p>1.通过计时延迟事件执行；</p>
</li>
<li>
<p>2.当事件在计时事件内触发，则重新计时；</p>
</li>
<li>
<p>3.通过闭包来保存计时变量；</p>
</li>
<li>
<p>4.为了使this指向明确，返回闭包用普通函数，重新计时用箭头函数（this并非指向debounce的调用者，而是执行返回闭包的调用）</p>
</li>
<li>
<p>5.对参数透传</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">callback</span>  事件回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">time</span>  延迟执行时间
 * <span class="token keyword">@return</span> funcion 闭包
 */</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">//设置定时器变量</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//返回闭包来保存定时器变量(闭包中的this指向闭包的调用者)</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token comment">//清除定时器</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//重新定时(箭头函数的this绑定定义时外层对象的this，既闭包的this，闭包的this指向闭包的调用者)</span>
      <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">//注意通过apply绑定回调的this</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>扩展题：实现防抖中调用立即执行一次，往后触发事件等待n秒后执行</p>
<ul>
<li>思想：给debounce函数添加标记，用于标记是否为第一次执行</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">callback</span>  事件回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">time</span>  延迟执行时间
 * <span class="token keyword">@return</span> funcion 闭包
 */</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> time<span class="token punctuation">,</span> flag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer <span class="token operator">&amp;&amp;</span> flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'立即执行一次'</span><span class="token punctuation">)</span>
      <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>debounce的应用场景:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'print param is'</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//窗口大小变化，调整样式</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span>print<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//调整窗口,输出为 event事件</span>
<span class="token comment">//搜索框，输入后1000毫秒搜索</span>
<span class="token function">debounce</span><span class="token punctuation">(</span>fetchSelectData<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
<span class="token comment">//表单验证，输入1000毫秒后验证</span>
<span class="token function">debounce</span><span class="token punctuation">(</span>validator<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="实现节流" tabindex="-1"><a class="header-anchor" href="#实现节流" aria-hidden="true">#</a> 实现节流</h3>
<ul>
<li>
<p>思想：当持续触发事件时，保证一定时间段内只调用一次事件处理函数；在一次事件触发后在触发后的指定时间内触发事件都忽略，只有在指定时间间隔后触发事件生效</p>
</li>
<li>
<p>实现方式：使用时间戳、使用定时器、结合时间戳和定时器三种实现方式</p>
</li>
<li>
<p>实现一：<strong>使用时间戳实现节流</strong></p>
<ul>
<li>
<p>思想：调用函数时保存当前时间戳，立即返回闭包，闭包中计算下次调用时间戳和上次调用时间戳差值，如果差值大于节流时间，则调用回调</p>
</li>
<li>
<p>缺点：第一次事件一定触发，最后一次事件不触发 ？？（测试现象：返回闭包时候会立即执行一次回调，原因：？？）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">callback</span>  事件回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">time</span>  延迟执行时间
 * <span class="token keyword">@return</span> function 闭包
 */</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pretime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//记录前一次调用时时间戳</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//返回闭包比较时间差</span>
    <span class="token keyword">let</span> nexttime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//记录当前调用时时间戳</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nexttime <span class="token operator">-</span> pretime <span class="token operator">>=</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//时间戳差值大于节流时间，执行回调</span>
      pretime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//重新记录执行时间戳</span>
      <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>实现二：<strong>使用定时间实现节流</strong></p>
<ul>
<li>
<p>思想：调用函数时候定义定时器变量，立即返回闭包，闭包中判断定时器变量是否为空，如果为空执行回调</p>
</li>
<li>
<p>缺点：第一次事件不触发，最后一次事件一定触发？？（测试现象：返回闭包时候不执行回调，原因：？？）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">callback</span>  事件回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">time</span>  延迟执行时间
 * <span class="token keyword">@return</span> function 闭包
 */</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">//定义定时器变量</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//返回闭包</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//定时器变量为空，设置time时间后执行回调</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">//清空计时变量(该操作要在调用回调之前清空)</span>
        <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>实现三：<strong>结合使用时间戳和定时器</strong></p>
<ul>
<li>
<p>思想：时间戳方式第一次事件触发时候执行，在限流时间内再次触发用定时器延迟执行执行事件，如果在限流时间过后再次调用，清除定时时间事件</p>
</li>
<li>
<p>优点： 第一次触发事件和最后一次触发事件都会执行</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">/*
 * @param {Function} callback  事件回调函数
 * @param {Number} time  延迟执行时间
 * @return function 闭包
 */</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pretime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> pretime <span class="token operator">></span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//在限流时间后触发事件</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token comment">//当限流时间过后并在定时时间到达之前再次触发事件，就清除定时事件</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">//清空定时器</span>
      pretime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">//执行事件</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//如果在限流时间内触发事件并且定时为空(既定时事件不存在)，添加定时事件</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="实现函数柯里化" tabindex="-1"><a class="header-anchor" href="#实现函数柯里化" aria-hidden="true">#</a> 实现函数柯里化</h3>
<ul>
<li>
<p>概念: 用于创建已经设置好了一个或多个参数的函数,将多参数函数转变成单参数函数</p>
</li>
<li>
<p>思想: 通过收集传入被柯里化函数fn的参数(n1,n2,n3...),返回一个函数curry，该curry函数中将传入的被柯里化函数fn的参数(n1,n2,n3...)设置为默认参数,并接收fn函数的其余参数</p>
</li>
<li>
<p>实现方式一：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** 
 * 实现方法一
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 被柯里化函数
 * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">args</span> 柯里化默认参数
 */</span>
<span class="token keyword">function</span> <span class="token function">currying</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//参数个数大于需要被柯里化的函数参数个数或则参数收集完毕,直接调用被柯里化的函数fn并传入参数</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">>=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//如果参数个数小于被柯里化的函数参数个数,则递归调用fn,继续收集fn的参数</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">currying</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实现方式二：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 实现方法二
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 被柯里化函数
 * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">args</span> 柯里化默认参数
 */</span>
<span class="token keyword">function</span> <span class="token function">curring</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">//保存当前作用域</span>
  <span class="token keyword">let</span> args <span class="token operator">=</span> args <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> fn<span class="token punctuation">.</span>length <span class="token comment">//获取函数参数长度</span>
  <span class="token comment">//返回柯里化函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//获取柯里化函数参数</span>
    <span class="token keyword">let</span> _args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
    <span class="token comment">//收集柯里化函数参数(将新传入的参数push进入之前传入的默认参数中)</span>
    <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> _args<span class="token punctuation">)</span>
    <span class="token comment">//如果参数个数小于fn函数需要的参数个数,则柯里化函数递归继续收集参数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_args<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">curring</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>_this<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> _args<span class="token punctuation">)</span> <span class="token comment">//注意使用call修改作用域,将新的参数传入</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//否则参数收集完毕,调用函数fn</span>
      <span class="token keyword">return</span> <span class="token function">curring</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> _args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>柯里化函数使用:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//定义打印函数</span>
<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> param3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">param1 is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>param1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, param2 is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>param2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, param3 is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>param3<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//进行打印柯里化,传入一个默认参数:1,返回curryingFun函数,该函数设置1为print函数的默认参数,并接收其余参数</span>
<span class="token keyword">const</span> curryingFun <span class="token operator">=</span> <span class="token function">currying</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">//调用柯里化后的打印函数,传入打印函数其余参数</span>
<span class="token function">curryingFun</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//输出param1 is 1, param2 is 2, param3 is 3</span>
<span class="token comment">//注意: 如果curryingFun函数参数个数小于print函数的参数,将返回curring函数,继续收集其余参数</span>
<span class="token function">curryingFun</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 输出函数(...args2) => currying(fn, ...args, ...args2)</span>
<span class="token comment">//进行打印柯里化,传入一个默认参数:4,5</span>
<span class="token keyword">const</span> curryingFun2 <span class="token operator">=</span> <span class="token function">currying</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">//注意:该写法等价于curryingFun2 = currying(print)(4,5) </span>
<span class="token function">curryingFun2</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">//输出param1 is 4, param2 is 5, param3 is 6</span>
<span class="token comment">//传入打印函数柯里化后的函数的参数大于打印函数的函数的参数个数时,多余参数将被忽略</span>
<span class="token function">curryingFun2</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token comment">//输出param1 is 4, param2 is 5, param3 is 6</span>

<span class="token doc-comment comment">/**
 * currying(print)(4)(5) 与 currying(print)(4,5) 区别：
 * currying(print)(4)(5) 会递归两次,收集两次函数的默认参数
 * currying(print)(4,5)  会递归一次,收集一次函数的默认参数
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="柯里化函数题目" tabindex="-1"><a class="header-anchor" href="#柯里化函数题目" aria-hidden="true">#</a> 柯里化函数题目</h3>
<ul>
<li>
<p>题目一：</p>
<blockquote>
<p>实现一个add方法，使计算结果能够满足如下预期：</p>
<p>add(1)(2)(3) = 6;</p>
<p>add(1, 2, 3)(4) = 10;</p>
<p>add(1)(2)(3)(4)(5) = 15;</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//保存第一次传入的参数</span>
  <span class="token keyword">let</span> _args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>

  <span class="token comment">//返回闭包来收集将第二次以后执行的参数</span>
  <span class="token keyword">let</span> <span class="token function-variable function">_adder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
    <span class="token keyword">return</span> _adder
  <span class="token punctuation">}</span>
  <span class="token comment">//重写toString方法,返回参数相加结果</span>
  _adder<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> a <span class="token operator">+</span> b
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> _adder
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>                <span class="token comment">// 6</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>             <span class="token comment">// 10</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>          <span class="token comment">// 15</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>                <span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="实现图片懒加载" tabindex="-1"><a class="header-anchor" href="#实现图片懒加载" aria-hidden="true">#</a> 实现图片懒加载</h3>
<ul>
<li>
<p>html: 加载loading图片是在html部分就实现的.</p>
<p><img src="@source/images/lanjiazai2.png" alt=""></p>
</li>
<li>
<p>javascript:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// onload是等所有的资源文件加载完毕以后再绑定事件</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 获取图片列表，即img标签列表</span>
	<span class="token keyword">var</span> imgs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 获取到浏览器顶部的距离</span>
	<span class="token keyword">function</span> <span class="token function">getTop</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> e<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 懒加载实现</span>
	<span class="token keyword">function</span> <span class="token function">lazyload</span><span class="token punctuation">(</span><span class="token parameter">imgs</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 可视区域高度</span>
		<span class="token keyword">var</span> h <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span>
		<span class="token comment">//滚动区域高度</span>
		<span class="token keyword">var</span> s <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>imgs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//图片距离顶部的距离大于可视区域和滚动区域之和时懒加载</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>h<span class="token operator">+</span>s<span class="token punctuation">)</span><span class="token operator">></span><span class="token function">getTop</span><span class="token punctuation">(</span>imgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 真实情况是页面开始有2秒空白，所以使用setTimeout定时2s</span>
				<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
						<span class="token comment">// 不加立即执行函数i会等于9</span>
						<span class="token comment">// 隐形加载图片或其他资源，</span>
						<span class="token comment">//创建一个临时图片，这个图片在内存中不会到页面上去。实现隐形加载</span>
						<span class="token keyword">var</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						temp<span class="token punctuation">.</span>src <span class="token operator">=</span> imgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-src'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//只会请求一次</span>
						<span class="token comment">// onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点</span>
						temp<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
							<span class="token comment">// 获取自定义属性data-src，用真图片替换假图片</span>
							imgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>src <span class="token operator">=</span> imgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-src'</span><span class="token punctuation">)</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">lazyload</span><span class="token punctuation">(</span>imgs<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 滚屏函数</span>
	window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">lazyload</span><span class="token punctuation">(</span>imgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="实现-jsonp" tabindex="-1"><a class="header-anchor" href="#实现-jsonp" aria-hidden="true">#</a> 实现 JSONP</h3>
<ul>
<li>
<p>实现步骤：</p>
<ul>
<li>
<p>1.将传入的data数据转化为url字符串形式</p>
</li>
<li>
<p>2.处理url中的回调函数</p>
</li>
<li>
<p>3.创建一个script标签并插入到页面中</p>
</li>
<li>
<p>4.挂载回调函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span> document</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">"use strict"</span>
  <span class="token keyword">var</span> <span class="token function-variable function">jsonp</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.将传入的data数据转化为url字符串形式</span>
    <span class="token comment">// {id:1,name:'jack'} => id=1&amp;name=jack</span>
    <span class="token keyword">var</span> dataString <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">indexof</span><span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token string">'?'</span> <span class="token operator">:</span> <span class="token string">'&amp;'</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dataString <span class="token operator">+=</span> key <span class="token operator">+</span> <span class="token string">'='</span> <span class="token operator">+</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&amp;'</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2 处理url中的回调函数</span>
    <span class="token comment">// cbFuncName回调函数的名字 ：my_json_cb_名字的前缀 + 随机数（把小数点去掉）</span>
    <span class="token keyword">var</span> cbFuncName <span class="token operator">=</span> <span class="token string">'my_json_cb_'</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
    dataString <span class="token operator">+=</span> <span class="token string">'callback='</span> <span class="token operator">+</span> cbFuncName
    <span class="token comment">// 3.创建一个script标签并插入到页面中</span>
    <span class="token keyword">var</span> scriptEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span>
    scriptEle<span class="token punctuation">.</span>src <span class="token operator">=</span> url <span class="token operator">+</span> dataString
    <span class="token comment">// 4.挂载回调函数</span>
    window<span class="token punctuation">[</span>cbFuncName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token comment">// 处理完回调函数的数据之后，删除jsonp的script标签</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>scriptEle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>scriptEle<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  window<span class="token punctuation">.</span>$jsonp <span class="token operator">=</span> jsonp
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> document<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="实现单例模式" tabindex="-1"><a class="header-anchor" href="#实现单例模式" aria-hidden="true">#</a> 实现单例模式</h3>
<ul>
<li>
<p>概念：单例模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建，这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象</p>
</li>
<li>
<p>要点：</p>
<ul>
<li>1、单例类只能有一个实例；</li>
<li>2、单例类必须自己创建自己的唯一实例；</li>
<li>3、单例类必须给所有其他对象提供这一实例</li>
</ul>
</li>
<li>
<p>实现：通过闭包保存对象实例的变量，每次新建/获取实例时候，判断该变量是否为空，为空则新建实例对象并返回，否则直接返回该实例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">Singleton</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>params <span class="token operator">=</span> params
<span class="token punctuation">}</span>

<span class="token class-name">Singleton</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getParams</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>params
<span class="token punctuation">}</span>

<span class="token class-name">Singleton</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>getInstance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> instance
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
      instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//---------------使用--------------</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">'ConardLi'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">'ConardLi2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">===</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h3>
<ul>
<li>
<p>定义：指多个对象间存在一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。</p>
</li>
<li>
<p>优点：</p>
<ul>
<li>降低了目标与观察者之间的耦合关系，两者之间是抽象耦合关系。符合依赖倒置原则。</li>
<li>目标与观察者之间建立了一套触发机。</li>
</ul>
</li>
<li>
<p>缺点：</p>
<ul>
<li>目标与观察者之间的依赖关系并没有完全解除，而且有可能出现循环引用。</li>
<li>当观察者对象很多时，通知的发布会花费很多时间，影响程序的效率。</li>
</ul>
</li>
<li>
<p>结构：</p>
</li>
</ul>
<p>​	实现观察者模式时要注意具体目标对象和具体观察者对象之间不能直接调用，否则将使两者之间紧密耦合起来，这违反了面向对象的设计原则。</p>
<p>观察者模式的主要角色:</p>
<ol>
<li>抽象主题（Subject）角色：也叫抽象目标类，它提供了一个用于保存观察者对象的聚集类和增加、删除观察者对象的方法，以及通知所有观察者的抽象方法。</li>
<li>具体主题（Concrete Subject）角色：也叫具体目标类，它实现抽象目标中的通知方法，当具体主题的内部状态发生改变时，通知所有注册过的观察者对象。</li>
<li>抽象观察者（Observer）角色：它是一个抽象类或接口，它包含了一个更新自己的抽象方法，当接到具体主题的更改通知时被调用。</li>
<li>具体观察者（Concrete Observer）角色：实现抽象观察者中定义的抽象方法，以便在得到目标的更改通知时更新自身的状态。</li>
</ol>
<p>观察者模式结构图：</p>
<p><img src="@source/images/观察者模式结构图.png" alt=""></p>
<p>观察者模式：</p>
<p><img src="@source/images/观察者模式.png" alt=""></p>
<h4 id="通用实现" tabindex="-1"><a class="header-anchor" href="#通用实现" aria-hidden="true">#</a> 通用实现</h4>
<p>ObserverList 实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ObserverList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//观察者队列，保存观察者对象</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>observerList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token class-name">ObserverList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">obj</span> <span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//添加观察者</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> obj <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token class-name">ObserverList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">count</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//观察者数量</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token class-name">ObserverList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">index</span> <span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//获取观察者</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span>length <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">[</span> index <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
  
<span class="token class-name">ObserverList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">indexOf</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">obj<span class="token punctuation">,</span> startIndex</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//获取观察者位置</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span>length <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> obj <span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token class-name">ObserverList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">removeAt</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">index</span> <span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//移除观察者</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span> index<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Subject对象 实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObserverList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token class-name">Subject</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addObserver</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">observer</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span> observer <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token class-name">Subject</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">removeObserver</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">observer</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span> observer<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token class-name">Subject</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">notify</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">context</span> <span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//通知观察者变更</span>
  <span class="token keyword">let</span> observerCount <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> observerCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span> context <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Observer对象实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Observer</span> <span class="token punctuation">(</span> data <span class="token operator">=</span> <span class="token string">''</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token class-name">Observer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">更新数据: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> observer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">'im observer1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> observer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">'im observer2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> observer3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">'im observer3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer1<span class="token punctuation">)</span><span class="token punctuation">;</span>
subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer2<span class="token punctuation">)</span><span class="token punctuation">;</span>
subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer3<span class="token punctuation">)</span><span class="token punctuation">;</span>
subject<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出结果：</span>
<span class="token comment">// 更新数据: im observer1</span>
<span class="token comment">// 更新数据: im observer2</span>
<span class="token comment">// 更新数据: im observer3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="defineproperty-实现" tabindex="-1"><a class="header-anchor" href="#defineproperty-实现" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noopener noreferrer">defineProperty<ExternalLinkIcon/></a> 实现</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Sewend'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">26</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//循环遍历观察对象属性</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get data:'</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当属性值发生变化时我们可以进行额外操作</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">set new value </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'my blog'</span><span class="token punctuation">;</span>
<span class="token comment">//输出：set new value my blog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="proxy实现" tabindex="-1"><a class="header-anchor" href="#proxy实现" aria-hidden="true">#</a> <a href="https://es6.ruanyifeng.com/#docs/proxy" target="_blank" rel="noopener noreferrer">Proxy<ExternalLinkIcon/></a>实现</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> observerList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//观察者队列</span>
<span class="token keyword">const</span> <span class="token function-variable function">subject</span> <span class="token operator">=</span> <span class="token parameter">fn</span> <span class="token operator">=></span> observerList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//订阅观察者对象</span>
<span class="token keyword">const</span> <span class="token function-variable function">observable</span> <span class="token operator">=</span> <span class="token parameter">obj</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>  <span class="token comment">//可观察对象</span>
  	<span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
      observerList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">observer</span> <span class="token operator">=></span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//通知观察者队列所有观察者更新数据</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Sewend'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">26</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">update: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>person<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>person<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">subject</span><span class="token punctuation">(</span>update<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//测试</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">25</span>
<span class="token comment">//输出 update: Sewend, 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布订阅者模式" tabindex="-1"><a class="header-anchor" href="#发布订阅者模式" aria-hidden="true">#</a> 发布订阅者模式</h3>
<ul>
<li>定义:</li>
</ul>
<p>发布订阅者模式（Publish/Subscribe），事件的发布者只发布事件，不关心这个事件被谁获取了，通常将事件发给一个中间件，由中间件再去分发事件</p>
<p>事件的订阅者只关心事件本身，不关心这个事件是谁发布的，通常在中间件中去注册观察某个事件。</p>
<p>中间件中去维护事件类别对应的订阅者列表，当收到事件后，去对应列表中通知订阅者</p>
<ul>
<li>结构</li>
</ul>
<p><img src="@source/images/发布订阅者模式.png" alt=""></p>
<ul>
<li>实现</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Observer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> topics <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 回调函数存放的数组</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 订阅方法,将订阅者注册的消息推入到消息队列中，因此我们需要接受两个参数：消息类型以及相应的处理动作</span>
        <span class="token function-variable function">subscribe</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>topics<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果此消息不存在则创建</span>
                topics<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            topics<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 将动作推入到该消息对应的动作执行序列中</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 发布方法,当观察者发布一个消息时将所有订阅者订阅的消息一次执行。因此应接受两个参数：消息类型以及动作执行时需要传递的参数</span>
        <span class="token function-variable function">publish</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>topics<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 如果该消息没有被注册，则返回</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> subscribers <span class="token operator">=</span> topics<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">,</span> len <span class="token operator">=</span> subscribers <span class="token operator">?</span> subscribers<span class="token punctuation">.</span>length<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    subscribers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 依次执行注册的消息对应的动作序列</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 取消订阅方法,将订阅者注销的消息从消息队列中清除，因此应接受两个参数：消息类型以及执行的某一动作。</span>
        <span class="token function-variable function">unsubscribe</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> subscribers <span class="token operator">=</span> topics<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>subscribers <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断是否存在</span>
                <span class="token keyword">let</span> i <span class="token operator">=</span> subscribers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span>i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果存在该动作则在消息动作序列中移除响应动作</span>
                    subscribers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> fn <span class="token operator">&amp;&amp;</span> subscribers<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//-----------测试--------------------</span>

<span class="token keyword">var</span> <span class="token function-variable function">listener1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'listener1:'</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">listener2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'listener2:'</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Observer<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'example1'</span><span class="token punctuation">,</span> listener1<span class="token punctuation">)</span><span class="token punctuation">;</span>
Observer<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'example1'</span><span class="token punctuation">,</span> listener2<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//发布通知</span>
Observer<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'example1'</span><span class="token punctuation">,</span> <span class="token string">'hello world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Observer<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'example1'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//----结果-----</span>
<span class="token literal-property property">listener1</span><span class="token operator">:</span>hello world<span class="token operator">!</span>
<span class="token literal-property property">listener2</span><span class="token operator">:</span>hello world<span class="token operator">!</span>
<span class="token literal-property property">listener1</span><span class="token operator">:</span>test<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c
<span class="token literal-property property">listener2</span><span class="token operator">:</span>test<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现generator" tabindex="-1"><a class="header-anchor" href="#实现generator" aria-hidden="true">#</a> 实现Generator</h3>
<ul>
<li>
<p><a href="https://es6.ruanyifeng.com/#docs/generator" target="_blank" rel="noopener noreferrer">Generator<ExternalLinkIcon/></a>使用示例:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">yield</span> <span class="token string">'result1'</span>
 <span class="token keyword">yield</span> <span class="token string">'result2'</span>
 <span class="token keyword">yield</span> <span class="token string">'result3'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>根据示例模式实现:</p>
<ul>
<li>
<p>原理：Generator实现的核心在于上下文的保存，函数并没有真的被挂起，每一次yield，其实都执行了一遍传入的生成器函数，只是在这个过程中间用了一个context对象储存上下文，使得每次执行生成器函数的时候，都可以从上一个执行结果开始执行，看起来就像函数被挂起了一样</p>
</li>
<li>
<p><a href="https://juejin.im/post/5bd85cfbf265da0a9e535c10" target="_blank" rel="noopener noreferrer">源码参考<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 生成器函数根据yield语句将代码分割为switch-case块，后续通过切换_context.prev和_context.next来分别执行各个case
 */</span> 
<span class="token keyword">function</span> <span class="token function">gen$</span><span class="token punctuation">(</span><span class="token parameter">_context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>_context<span class="token punctuation">.</span>prev <span class="token operator">=</span> _context<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
        _context<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">'result1'</span><span class="token punctuation">;</span>

      <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        _context<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">'result2'</span><span class="token punctuation">;</span>

      <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
        _context<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">'result3'</span><span class="token punctuation">;</span>

      <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
      <span class="token keyword">case</span> <span class="token string">"end"</span><span class="token operator">:</span>
        <span class="token keyword">return</span> _context<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// context 用于储存函数执行上下文</span>
<span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prev</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * invoke 定义next()，用于执行gen$(_context)来跳到下一步
 * 当我们调用g.next()，就相当于调用invoke()方法
 */</span>
<span class="token keyword">let</span> <span class="token function-variable function">gen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value <span class="token operator">=</span> context<span class="token punctuation">.</span>done <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> <span class="token function">gen$</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
      done <span class="token operator">=</span> context<span class="token punctuation">.</span>done
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        value<span class="token punctuation">,</span>
        done
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试使用</span>
<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// {value: "result1", done: false}</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// {value: "result2", done: false}</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// {value: "result3", done: false}</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// {value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="实现-async-await" tabindex="-1"><a class="header-anchor" href="#实现-async-await" aria-hidden="true">#</a> 实现 async await</h3>
<ul>
<li>
<p>async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里</p>
</li>
<li>
<p>实现一：<a href="https://es6.ruanyifeng.com/#docs/async#async-%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86" target="_blank" rel="noopener noreferrer">《ES6 教程》中实现<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// spawn 方法实现</span>
<span class="token keyword">function</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token parameter">genF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">genF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token parameter">nextF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> next<span class="token punctuation">;</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> <span class="token function">nextF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">step</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>所有的<code v-pre>async</code>函数都可以写成上面的第二种形式，其中的<code v-pre>spawn</code>函数就是自动执行器</li>
</ul>
</li>
<li>
<p>实现二：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">asyncToGenerator</span><span class="token punctuation">(</span><span class="token parameter">generatorFunc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 返回的是一个新的函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 先调用generator函数 生成迭代器</span>
    <span class="token comment">// 对应 var gen = testG()</span>
    <span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">generatorFunc</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>

    <span class="token comment">// 返回一个promise 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值的</span>
    <span class="token comment">// var test = asyncToGenerator(testG)</span>
    <span class="token comment">// test().then(res => console.log(res))</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

      <span class="token comment">// 内部定义一个step函数 用来一步一步的跨过yield的阻碍</span>
      <span class="token comment">// key有next和throw两种取值，分别对应了gen的next和throw方法</span>
      <span class="token comment">// arg参数则是用来把promise resolve出来的值交给下一个yield</span>
      <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> generatorResult

        <span class="token comment">// 这个方法需要包裹在try catch中</span>
        <span class="token comment">// 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          generatorResult <span class="token operator">=</span> gen<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// gen.next() 得到的结果是一个 { value, done } 的结构</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> done <span class="token punctuation">}</span> <span class="token operator">=</span> generatorResult

        <span class="token keyword">if</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果已经完成了 就直接resolve这个promise</span>
          <span class="token comment">// 这个done是在最后一次调用next后才会为true</span>
          <span class="token comment">// 以本文的例子来说 此时的结果是 { done: true, value: 'success' }</span>
          <span class="token comment">// 这个value也就是generator函数最后的返回值</span>
          <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 除了最后结束的时候外，每次调用gen.next()</span>
          <span class="token comment">// 其实是返回 { value: Promise, done: false } 的结构，</span>
          <span class="token comment">// 这里要注意的是Promise.resolve可以接受一个promise为参数</span>
          <span class="token comment">// 并且这个promise参数被resolve的时候，这个then才会被调用</span>
          <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>
            <span class="token comment">// 这个value对应的是yield后面的promise</span>
            value
          <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
            <span class="token comment">// value这个promise被resove的时候，就会执行next</span>
            <span class="token comment">// 并且只要done不是true的时候 就会递归的往下解开promise</span>
            <span class="token comment">// 对应gen.next().value.then(value => {</span>
            <span class="token comment">//    gen.next(value).value.then(value2 => {</span>
            <span class="token comment">//       gen.next() </span>
            <span class="token comment">//</span>
            <span class="token comment">//      // 此时done为true了 整个promise被resolve了 </span>
            <span class="token comment">//      // 最外部的test().then(res => console.log(res))的then就开始执行了</span>
            <span class="token comment">//    })</span>
            <span class="token comment">// })</span>
            <span class="token keyword">function</span> <span class="token function">onResolve</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">step</span><span class="token punctuation">(</span><span class="token string">"next"</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 如果promise被reject了 就再次进入step函数</span>
            <span class="token comment">// 不同的是，这次的try catch中调用的是gen.throw(err)</span>
            <span class="token comment">// 那么自然就被catch到 然后把promise给reject掉啦</span>
            <span class="token keyword">function</span> <span class="token function">onReject</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">step</span><span class="token punctuation">(</span><span class="token string">"throw"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token function">step</span><span class="token punctuation">(</span><span class="token string">"next"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参考来源：<a href="https://juejin.cn/post/6844904102053281806" target="_blank" rel="noopener noreferrer">《手写async await的最简实现（20行）》<ExternalLinkIcon/></a></li>
</ul>
<hr>
<h2 id="应用题" tabindex="-1"><a class="header-anchor" href="#应用题" aria-hidden="true">#</a> 应用题</h2>
<h3 id="图片预加载和懒加载" tabindex="-1"><a class="header-anchor" href="#图片预加载和懒加载" aria-hidden="true">#</a> 图片预加载和懒加载</h3>
<p><strong>图片预加载：</strong></p>
<ul>
<li>概念：将所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源。</li>
<li>作用：减少用户的等待时间，提高用户的体验</li>
<li>方法：使用js中的image对象，通过为image对象来设置scr属性，来实现图片的预加载</li>
</ul>
<p><strong>图片懒加载：</strong></p>
<ul>
<li>
<p>概念：懒加载也叫延迟加载，指的是在长网页中延迟加载图片的时机，当用户需要访问时，再去加载。</p>
</li>
<li>
<p>作用：</p>
<ul>
<li>提高网站的首屏加载速度，提升用户的体验</li>
<li>减少请求数或延迟请求数，减少服务器的压力</li>
</ul>
</li>
<li>
<p>适用场景：图片很多，页面很长的场景</p>
</li>
<li>
<p>懒加载图示：<img src="@source/images/lanjiazai.gif" alt=""></p>
<ul>
<li>图片滚动到可视区域时，浏览器才真正请求图片资源</li>
</ul>
</li>
<li>
<p>实现原理：</p>
<ul>
<li>一张图片就是一个<code v-pre>&lt;img&gt;</code>标签，浏览器是否发起请求图片是根据<code v-pre>&lt;img&gt;</code>的 src 属性，所以实现懒加载的关键就是，在图片没有进入可视区域时，先不给<code v-pre>&lt;img&gt;</code>的 src 赋值，这样浏览器就不会发送请求了;</li>
<li>将页面上的图片的 src 属性设置为空字符串，将图片的真实路径保存在一个自定义属性中</li>
<li>当页面滚动的时候，进行判断，如果图片进入页面可视区域内，则从自定义属性中取出真实路径赋值给图片的 src 属性，此时浏览器才会真正请求加载图片资源。</li>
</ul>
</li>
<li>
<p>实现步骤：</p>
<ul>
<li>初始图片效果
<ul>
<li>方式1：加载loading图片</li>
<li>方式2：<a href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Loading#%E7%94%A8_css_%E5%88%B6%E9%80%A0%E6%A8%A1%E7%B3%8A%E6%95%88%E6%9E%9C" target="_blank" rel="noopener noreferrer">用 CSS 制造模糊效果<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>按需加载：判断哪些图片要加载【重点】。
<ul>
<li>方式1：<a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener noreferrer">Intersection_Observer<ExternalLinkIcon/></a>：应用会新建一个它的实例。当一个或多个监听对象跟 Observer 发生交互时（即图片出现在视口中时），作为参数传递的函数可以用来处理一些回调事务（例如图片加载）。我们可以迭代每一个对象，并对它们进行相应的处理：当图片可见时，我们开始加载真正的图片并且停止监听这张图片，因为在图片加载完成之后，我们已经没必要再知道它的状态了。</li>
<li>方式2：使用 JS 监听并计算</li>
</ul>
</li>
<li>隐形加载图片</li>
<li>替换真图片</li>
</ul>
</li>
<li>
<p>判断图片是否进入可视区域：</p>
<ul>
<li>
<p>方式2：使用 JS 监听并计算。</p>
<ul>
<li>
<p>让在浏览器可视区域的图片显示，可视区域外的不显示，所以当图片距离顶部的距离top-height等于可视区域h和滚动区域高度s之和时说明图片马上就要进入可视区了，就是说当 <code v-pre>top-height&lt;=s+h</code> 时，图片在可视区</p>
<p><img src="@source/images/lanjiazai.png" alt=""></p>
</li>
<li>
<p>使用 API：</p>
<ul>
<li>页可见区域宽： document.body.clientWidth;</li>
<li>网页可见区域高： document.body.clientHeight;</li>
<li>网页可见区域宽： document.body.offsetWidth (包括边线的宽);</li>
<li>网页可见区域高： document.body.offsetHeight (包括边线的宽);</li>
<li>网页正文全文宽： document.body.scrollWidth;</li>
<li>网页正文全文高： document.body.scrollHeight;</li>
<li>网页被卷去的高： document.body.scrollTop;</li>
<li>网页被卷去的左： document.body.scrollLeft;</li>
<li>网页正文部分上： window.screenTop;</li>
<li>网页正文部分左： window.screenLeft;</li>
<li>屏幕分辨率的高： window.screen.height;</li>
<li>屏幕分辨率的宽： window.screen.width;</li>
<li>屏幕可用工作区高度： window.screen.availHeight;</li>
<li>HTMLElement.offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部的距离。</li>
<li>window.innerHeight：浏览器窗口的视口（viewport）高度（以像素为单位）；如果有水平滚动条，也包括滚动条高度。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>图片预加载和懒加载比较：</strong></p>
<ul>
<li>两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。</li>
<li>懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力</li>
</ul>
<p><strong>常用插件</strong></p>
<p><strong>参考资料：</strong></p>
<p><a href="https://blog.csdn.net/w1418899532/article/details/90515969" target="_blank" rel="noopener noreferrer">js实现图片懒加载原理<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/6844903614138286094" target="_blank" rel="noopener noreferrer">懒加载和预加载<ExternalLinkIcon/></a></p>
<h3 id="异步循环" tabindex="-1"><a class="header-anchor" href="#异步循环" aria-hidden="true">#</a> 异步循环</h3>
<blockquote>
<p>异步循环：在循环中包含异步操作</p>
</blockquote>
<ul>
<li>
<p>解决思路： promise + async wait: 使用promise封装异步操作，使用async await执行循环</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">getSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reslove<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">reslove</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">get </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>param<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">getAll</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="url-拆解问题" tabindex="-1"><a class="header-anchor" href="#url-拆解问题" aria-hidden="true">#</a> URL 拆解问题</h3>
<blockquote>
<ul>
<li>--- 题目描述 --</li>
<li>实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key: value 形式的 object</li>
<li>--- 实例 ---</li>
<li>输入：'http://sample.com/?a=1&amp;e&amp;b=2&amp;c=xx&amp;d#hash'</li>
<li>输出：{a: 1, b: 2, c: 'xx', d: ''}</li>
</ul>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getQueryObj</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'#'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>--- 题目描述 ---</li>
<li>实现一个 parseParam 函数，将 url 转化为指定结果</li>
<li>--- 测试用例 ---</li>
<li>输入：url = 'http://www.domain.com/?user=anonymous&amp;id=123&amp;id=456&amp;city=%E5%8C%97%E4%BA%AC&amp;enabled'</li>
<li>输出：
{
user:'anonymous',
id:[123,456],// 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
city:'北京',// 中文需解码
enabled: true // 未指定值的 key 与约定为 true
}</li>
</ul>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">parseParam</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">decodeURI</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将-http-header-转换成对象" tabindex="-1"><a class="header-anchor" href="#将-http-header-转换成对象" aria-hidden="true">#</a> 将 HTTP header 转换成对象</h3>
<blockquote>
<ul>
<li>
<p>--- 题目描述 ---</p>
</li>
<li>
<p>实现一个方法，把 HTTP 文本形式(字符串)的 header 转换成 JS 对象。</p>
</li>
<li>
<p>--- 测试用例 ---</p>
</li>
<li>
<p>输入：</p>
<p>`Accept-Ranges: bytes</p>
<p>Cache-Control: max-age=6000, public</p>
<p>Connection: keep-alive</p>
<p>Content-Type: application/javascript`</p>
</li>
<li>
<p>输出：</p>
<p>{</p>
<p>&quot;Accept-Ranges&quot;: &quot;bytes&quot;,</p>
<p>&quot;Cache-Control&quot;: &quot;max-age=6000, public&quot;,</p>
<p>Connection: &quot;keep-alive&quot;,</p>
<p>&quot;Content-Type&quot;: &quot;application/javascript&quot;</p>
<p>}</p>
</li>
</ul>
</blockquote>
<p>解题思路：</p>
<ul>
<li>首先将每行数据作为数组的一个元素</li>
<li>将每个元素使用冒号分割，前面为 <code v-pre>key</code>，后面为 <code v-pre>value</code>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">parseHeader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取单行字符串</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> tmp <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">": "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">[</span>tmp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://github.com/mqyqingfeng/Blog" target="_blank" rel="noopener noreferrer">冴羽的博客<ExternalLinkIcon/></a></p>
</div></template>



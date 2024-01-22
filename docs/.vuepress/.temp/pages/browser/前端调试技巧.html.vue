<template><div><h1 id="调试技巧" tabindex="-1"><a class="header-anchor" href="#调试技巧" aria-hidden="true">#</a> 调试技巧</h1>
<ul>
<li>调试本身可以分为两个过程，<strong>定位问题</strong> 和 <strong>解决问题</strong>，而更重要的显然是如何快速的定位问题；本文将集中讨论如何 <strong>快速发现</strong> 并 <strong>调试问题</strong></li>
</ul>
<h2 id="前端调试" tabindex="-1"><a class="header-anchor" href="#前端调试" aria-hidden="true">#</a> 前端调试</h2>
<ul>
<li>根据bug实际情况分析，可以将 bug 分为 前端bug 和 后端bug；根据常见前端 bug 特性可以快速定位 Bug</li>
</ul>
<h3 id="bug-排查定位" tabindex="-1"><a class="header-anchor" href="#bug-排查定位" aria-hidden="true">#</a> BUG 排查定位</h3>
<ol>
<li>
<p><strong>当前页面是否需要请求获取数据</strong></p>
<ol>
<li>不涉及服务端 Bug:
<ol>
<li>UI 样式显示错误</li>
<li>交互逻辑错误</li>
</ol>
</li>
<li>不能确定是否服务端数据错误：
<ol>
<li>白屏</li>
<li>一直 loading</li>
</ol>
</li>
</ol>
</li>
<li>
<p><strong>检查控制台是否报错</strong></p>
</li>
<li>
<p><strong>控制台报错：根据报错判断错误类型</strong></p>
<ol>
<li>
<p><strong>[Vue warn]</strong> ：JS 警告。通常为语法使用错误警告、版本错误等； 一般不会影响代码执行，部分会影响代码执行（如语法错误）；因此要注意警告内容，避免因为忽略 Vue 警告导致 bug 定位失败</p>
</li>
<li>
<p>JS 错误类型：</p>
</li>
</ol>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SyntaxError：语法错误</strong></td>
<td>Uncaught SyntaxError: Unexpected number变量名不符合规范；<br />Uncaught SyntaxError: Unexpected 给关键字赋值；等</td>
</tr>
<tr>
<td><strong>Uncaught ReferenceError：引用错误</strong></td>
<td>引用一个不存在的变量时发生的错误。将一个值分配给无法分配的对象，比如对函数的运行结果或者函数赋值。</td>
</tr>
<tr>
<td><strong>RangeError：范围错误</strong></td>
<td>RangeError是当一个只超出有效范围时发生的错误。主要的有几种情况，第一是数组长度为负数，第二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。</td>
</tr>
<tr>
<td><strong>TypeError类型错误</strong></td>
<td>变量或参数不是预期类型时发生的错误。比如使用new字符串、布尔值等原始类型和调用对象不存在的方法就会抛出这种错误，因为new命令的参数应该是一个构造函数</td>
</tr>
<tr>
<td><strong>URIError，URL错误</strong></td>
<td>相关函数的参数不正确。URI相关参数不正确时抛出的错误，主要涉及encodeURI、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape(）六个函数。</td>
</tr>
<tr>
<td><strong>EvalError eval()函数执行错误</strong></td>
<td>在ES5以下的JavaScript中，当eval()函数没有被正确执行时，会抛出evalError错误。</td>
</tr>
</tbody>
</table>
<ol start="3">
<li>根据报错定位异常代码：</li>
<li>调试方法：
<ol>
<li><strong>代码注释法</strong> ：利用二分法思想逐行去注释代码，直到定位问题</li>
<li><strong>console 打印调试</strong></li>
<li><strong>断点调试</strong></li>
<li><strong>辅组工具调试：</strong>
<ol>
<li>Ajax Interceptor: 用于拦截请求并修改请求数据,可以修改返回数据</li>
<li>Vue.js devtools</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
<li>
<p><strong>检查网络请求</strong></p>
<ol>
<li>当前页面是否需要请求获取数据，有则检查网络请求</li>
<li>通常 数据不符合预期引起的错误（TypeError 等）：访问不存在的属性得到了<code v-pre>undefined/null/NaN</code>等值之后，会引发后续的异常。要先从检查数据入手。</li>
<li>检查Network/网络面板，查看需要获取数据的接口是否成功获取到数据：
<ol>
<li>检查关键点：
<ol>
<li>检查返回数据是否正确
<ol>
<li>查看请求状态（是否返回 500 等错误码）</li>
<li>请求状态码正确，检查数据格式是否错误（根据接口文档检查）</li>
<li>数据状态和格式正确，检查请求是否正确</li>
</ol>
</li>
<li>检查请求是否正确
<ol>
<li>请求方法是否使用正确</li>
<li>URL 是否正确（正式服/测试服地址是否正确）</li>
<li>跨域（是否跨域导致请求失败）</li>
<li>请求参数（根据接口文档确认请求参数是否正确）</li>
<li>请求的 Content-Type 是符合要求</li>
<li>请求体格式是否符合要求（JSON/Form）</li>
<li>是否携带了身份信息</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
</ol>
<h3 id="前端调试工具" tabindex="-1"><a class="header-anchor" href="#前端调试工具" aria-hidden="true">#</a> 前端调试工具</h3>
<h4 id="chrome-devtools" tabindex="-1"><a class="header-anchor" href="#chrome-devtools" aria-hidden="true">#</a> Chrome DevTools</h4>
<h4 id="断点调试" tabindex="-1"><a class="header-anchor" href="#断点调试" aria-hidden="true">#</a> 断点调试</h4>
<ul>
<li>参考资料
<ul>
<li><a href="https://segmentfault.com/a/1190000008396389" target="_blank" rel="noopener noreferrer">Chrome DevTools — JS调试<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h4 id="生产环境调试" tabindex="-1"><a class="header-anchor" href="#生产环境调试" aria-hidden="true">#</a> 生产环境调试</h4>
<h3 id="pc-端调试" tabindex="-1"><a class="header-anchor" href="#pc-端调试" aria-hidden="true">#</a> PC 端调试</h3>
<h3 id="移动端调试" tabindex="-1"><a class="header-anchor" href="#移动端调试" aria-hidden="true">#</a> 移动端调试</h3>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<ul>
<li><a href="https://www.imooc.com/learn/1164/" target="_blank" rel="noopener noreferrer">Chrome DevTools开发者工具调试指南<ExternalLinkIcon/></a></li>
</ul>
</div></template>



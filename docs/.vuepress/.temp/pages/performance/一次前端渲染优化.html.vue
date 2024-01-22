<template><div><h1 id="一次后台管理系统的性能优化" tabindex="-1"><a class="header-anchor" href="#一次后台管理系统的性能优化" aria-hidden="true">#</a> 一次后台管理系统的性能优化</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<blockquote>
<ul>
<li>某天，xxx 实习生反馈，在他负责开发的某个前端集合页面渲染速度很慢，领导要求优化一下加载速度，跑来问我有什么优化方案？</li>
</ul>
</blockquote>
<h2 id="分析过程" tabindex="-1"><a class="header-anchor" href="#分析过程" aria-hidden="true">#</a> 分析过程</h2>
<ul>
<li>
<p>第一步：定位问题点</p>
<ul>
<li>选择问题定位工具</li>
<li>分析问题可能出现原因</li>
</ul>
</li>
<li>
<p>第二步：提出解决方案</p>
</li>
<li>
<p>第三步：选择最优解</p>
</li>
</ul>
<h2 id="问题定位" tabindex="-1"><a class="header-anchor" href="#问题定位" aria-hidden="true">#</a> 问题定位</h2>
<p>导致前端页面渲染慢，不一定是浏览器渲染速度慢，也有可能为以下常见的原因：</p>
<blockquote>
<ol>
<li><strong>网络请求问题</strong>：
<ul>
<li><strong>大量的HTTP请求</strong>：如果页面中有大量的资源文件（如CSS、JavaScript、图片等），每个资源文件都需要进行一次HTTP请求。过多的HTTP请求会增加页面加载时间，降低渲染速度。</li>
<li><strong>慢速网络连接</strong>：如果用户的网络连接较慢，资源加载的时间会延长，导致页面渲染速度变慢。在设计和开发过程中应考虑到网络环境的不确定性。</li>
</ul>
</li>
<li><strong>DOM渲染问题</strong>：
<ul>
<li><strong>复杂的DOM结构</strong>：如果页面中存在复杂的、嵌套层级较深的DOM结构，浏览器需要花费更多时间来解析和渲染页面，导致渲染速度变慢。</li>
</ul>
</li>
<li><strong>JavaScript执行时间问题</strong>：
<ul>
<li><strong>未优化的CSS和JavaScript</strong>：复杂或低效的CSS选择器、大量的JavaScript操作，低性能的 Javascript 算法、频繁的DOM操作等都会导致页面渲染速度下降。优化CSS和JavaScript代码可以改善页面渲染性能。</li>
<li><strong>第三方脚本和插件</strong>：过多的第三方脚本和插件会增加页面的加载时间和执行时间，对页面渲染速度产生负面影响。评估和精简第三方脚本和插件的使用可以改善渲染性能。</li>
</ul>
</li>
<li><strong>图片加载问题</strong>：
<ul>
<li><strong>图片过大</strong>：如果页面中包含大尺寸、高分辨率的图片，这些图片的加载和渲染会消耗较多的时间。优化图片大小、格式和加载方式可以提升页面渲染速度。</li>
</ul>
</li>
<li><strong>缓存问题</strong>：
<ul>
<li><strong>缺乏浏览器缓存</strong>：如果没有正确使用缓存机制，每次加载页面时都需要重新下载所有资源文件，增加了页面加载时间。合理使用浏览器缓存可以减少重复加载的资源，提升渲染速度。</li>
</ul>
</li>
</ol>
</blockquote>
<p>根据以上常见的导致渲染问题，可以逐步对页面分类进行分析，通常首先考虑常见的网络问题，对网络问题进行分析</p>
<h3 id="网络请求分析" tabindex="-1"><a class="header-anchor" href="#网络请求分析" aria-hidden="true">#</a> 网络请求分析</h3>
<blockquote>
<p>网络请求分析，一般通过浏览器的开发者工具来进行性能分析：</p>
<ol>
<li>使用<strong>浏览器的性能分析工具</strong>：现代浏览器（如Chrome、Firefox）提供了内置的性能分析工具，可以记录和分析页面加载过程中的网络请求以及其它性能指标。你可以通过打开开发者工具（通常是按下 F12 键），切换到 &quot;Performance&quot;（Chrome 中）或 &quot;Network&quot;（Firefox 中）选项卡进行性能分析。</li>
<li><strong>检查网络请求的时间线</strong>：在性能分析工具中，你可以查看请求的时间线，包括每个请求的开始时间、结束时间以及加载时间。观察加载时间较长的请求，尤其是文件大小较大的请求，可以帮助确定网络请求是否是导致页面渲染缓慢的原因。</li>
<li><strong>查看网络请求的详细信息</strong>：性能分析工具通常提供了详细的网络请求信息，包括请求的 URL、响应状态码、文件大小、加载时间等。通过查看这些信息，你可以<strong>确定是否存在大量的HTTP请求或者某些请求的加载时间较长</strong>。</li>
<li><strong>检查缓存情况</strong>：在性能分析工具中，你可以查看请求的缓存状态。如果某些资源没有被正确缓存，每次加载页面时都需要重新下载这些资源，导致页面渲染速度变慢。确保正确使用缓存机制可以减少重复加载的资源。</li>
<li><strong>使用网络分析工具</strong>：除了浏览器的开发者工具，还有一些独立的网络分析工具（如WebPageTest、GTmetrix等）可以帮助你分析前端页面的性能问题。这些工具可以提供更详细的网络请求信息和性能分析报告。</li>
</ol>
</blockquote>
<ul>
<li>查看接口请求情况：打开 chrome，按下 F12 打开分析工具，点击 ”网络“，查看接口请求情况：
<ul>
<li><img src="@source/images/网络请求.gif" alt="网络请求"></li>
<li>请求接口  <code v-pre>getModels?type=fds</code>，状态正常；</li>
<li>通过网络请求瀑布图可知：
<ul>
<li>1800ms 左右开始请求接口 <code v-pre>selectOptions</code></li>
<li>2000ms 左右开始并发请求 <code v-pre>getModels</code> 和 <code v-pre>info</code>，其中 <code v-pre>getModels</code> 耗时 74ms；</li>
<li>因此接口网络请求时间不是消耗最长时间的主要原因</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="dom-渲染分析" tabindex="-1"><a class="header-anchor" href="#dom-渲染分析" aria-hidden="true">#</a> DOM 渲染分析</h3>
<ul>
<li>
<p>打开待分析页面，点击 F12 ，使用 Chrome 性能分析工具，对页面进行录制：</p>
<ul>
<li><img src="@source/images/分析过程.gif" alt="分析过程"></li>
</ul>
</li>
<li>
<p>结果分析：</p>
<ul>
<li>
<p>页面初始加载到完成全流程分析：</p>
<p><img src="@source/images/pmp-页面初始加载到完成全流程分析.png" alt="image-20231031161423297"></p>
</li>
<li>
<p>白屏时间分析：<img src="@source/images/pmp-页面初始加载到完成全流程分析1.png" alt="image-20231031161456624"></p>
<ul>
<li>根据分析结果可知，首屏白屏时间总耗时 2199ms ，其中 js 耗时占比最高：1493ms；</li>
</ul>
</li>
<li>
<p>首屏显示到渲染完成分析：</p>
<p><img src="@source/images/pmp-页面初始加载到完成全流程分析2.png" alt="image-20231031161705009"></p>
<ul>
<li>根据分析结果可知，首屏白屏时间总耗时 2199ms ，其中 js 耗时占比最高：1493ms；</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="javascript-执行时间分析" tabindex="-1"><a class="header-anchor" href="#javascript-执行时间分析" aria-hidden="true">#</a> JavaScript 执行时间分析</h3>
<h3 id="图片加载分析" tabindex="-1"><a class="header-anchor" href="#图片加载分析" aria-hidden="true">#</a> 图片加载分析</h3>
<h3 id="缓存分析" tabindex="-1"><a class="header-anchor" href="#缓存分析" aria-hidden="true">#</a> 缓存分析</h3>
</div></template>



<template><div><h1 id="前端性能优化" tabindex="-1"><a class="header-anchor" href="#前端性能优化" aria-hidden="true">#</a> 前端性能优化</h1>
<h2 id="性能优化指标" tabindex="-1"><a class="header-anchor" href="#性能优化指标" aria-hidden="true">#</a> 性能优化指标</h2>
<h3 id="rail-性能模型" tabindex="-1"><a class="header-anchor" href="#rail-性能模型" aria-hidden="true">#</a> RAIL 性能模型</h3>
<ul>
<li>
<p><strong>RAIL</strong>是一种以<strong>用户为中心的</strong>性能模型，它提供了一种考虑性能的结构。该模型将用户体验分解为关键操作（例如，点击、滚动、加载），并帮助您为每个操作定义性能目标。</p>
</li>
<li>
<p>关键操作：<img src="@source/images/rail.png" alt=""></p>
</li>
<li>
<p>聚焦用户：</p>
<ul>
<li>以下是用户对性能延迟的感知：</li>
</ul>
<table>
<thead>
<tr>
<th>延迟时间</th>
<th>用户感知</th>
</tr>
</thead>
<tbody>
<tr>
<td>0-16ms</td>
<td>很流畅</td>
</tr>
<tr>
<td>0-100ms</td>
<td>基本流畅</td>
</tr>
<tr>
<td>100-1000ms</td>
<td>感觉到网站上有一些加载任务</td>
</tr>
<tr>
<td>1000ms or more</td>
<td>失去耐心了</td>
</tr>
<tr>
<td>10000ms or more</td>
<td>直接离开，不会再访问了</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Response：</strong> 事件处理最好在50ms内完成。</p>
<ul>
<li>目标：用户的输入到响应的时间不超过100ms，给用户的感受是瞬间就完成了。</li>
<li>优化方案：
<ul>
<li>事件处理函数在50ms内完成，考虑到idle task的情况，事件会排队，等待时间大概在50ms。适用于click，toggle，starting animations等，不适用于drag和scroll。</li>
<li>复杂的js计算尽可能放在后台，如web worker，避免对用户输入造成阻塞</li>
<li>超过50ms的响应，一定要提供反馈，比如倒计时，进度百分比等。</li>
</ul>
</li>
<li>idle task：除了要处理输入事件，浏览器还有其它任务要做，这些任务会占用部分时间，一般情况会花费50ms的时间，输入事件的响应则排在其后。
<ul>
<li>idle task 对 input response 的影响：<img src="@source/images/idle-task.png" alt=""></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Animation：</strong>  在10ms内产生一帧。</p>
<ul>
<li>
<p>目标：产生每一帧的时间不要超过10ms，为了保证浏览器60帧，每一帧的时间在16ms左右，但浏览器需要用6ms来渲染每一帧。旨在视觉上的平滑。用户对帧率变化感知很敏感。一般情况下，每一帧都必须完成下面的所有：</p>
<p><img src="@source/images/渲染流程.png" alt=""></p>
<ul>
<li>16秒的时间中包含浏览器将新帧绘制到屏幕上的时间，所以留给上述5步的时间几乎之后10ms。</li>
</ul>
</li>
<li>
<p>优化方案：</p>
<ul>
<li>在一些高压点上，比如动画，不要使用 cpu，如：取offset，设置style等操作。尽可能地保证60帧的体验。</li>
<li>在渲染性能上，针对不同的动画做一些特定优化</li>
</ul>
</li>
<li>
<p>动画不只是UI的视觉效果，以下行为都属于</p>
<ul>
<li>视觉动画，如渐隐渐显，tweens，loading等</li>
<li>滚动，包含弹性滚动，松开手指后，滚动会持续一段距离</li>
<li>拖拽，缩放，经常伴随着用户行为</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Idle：</strong>  最大化空闲时间</p>
<ul>
<li>
<p>目标：最大化空闲时间，以增大50ms内响应用户输入的几率</p>
</li>
<li>
<p>优化方案：</p>
<ul>
<li>用空闲时间来完成一些延后的工作，如先加载页面可见的部分，然后利用空闲时间加载剩余部分，此处可以使用 ；<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback" target="_blank" rel="noopener noreferrer">requestIdleCallback API<ExternalLinkIcon/></a></li>
<li>在空闲时间内执行的任务尽量控制在50ms以内，如果更长的话，会影响input handle的pending时间；</li>
<li>如果用户在空闲时间任务进行时进行交互，必须以此为最高优先级，并暂停空闲时间的任务；</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Load:</strong>  传输内容到页面可交互的时间不超过5秒</p>
<ul>
<li>
<p>如果页面加载比较慢，用户的交点可能会离开。加载很快的页面，用户平均停留时间会变长，跳出率会更低，也就有更高的广告查看率</p>
</li>
<li>
<p>目标:</p>
<ul>
<li>优化加载速度，可以根据设备、网络等条件。目前，比较好的一个方式是，让你的页面在一个中配的3G网络手机上打开时间不超过5秒</li>
<li>对于第二次打开，尽量不超过2秒</li>
</ul>
</li>
<li>
<p>优化方案</p>
<ul>
<li>在手机设备上测试加载性能，选用中配的3G网络（400kb/s，400ms RTT），可以使用 <a href="https://www.webpagetest.org/easy" target="_blank" rel="noopener noreferrer">WebPageTest<ExternalLinkIcon/></a> 来测试</li>
<li>要注意的是，即使用户的网络是4G，但因为丢包或者网络波动，可能会比预期的更慢</li>
<li><a href="https://web.dev/render-blocking-resources/" target="_blank" rel="noopener noreferrer">禁用渲染阻塞的资源，延后加载<ExternalLinkIcon/></a></li>
<li>可以采用 <a href="https://web.dev/native-lazy-loading/" target="_blank" rel="noopener noreferrer">lazy load<ExternalLinkIcon/></a>，<a href="https://web.dev/reduce-javascript-payloads-with-code-splitting/" target="_blank" rel="noopener noreferrer">code-splitting<ExternalLinkIcon/></a> 等 <a href="https://web.dev/fast/" target="_blank" rel="noopener noreferrer">其他优化<ExternalLinkIcon/></a> 手段，让第一次加载的资源更少</li>
</ul>
</li>
</ul>
</li>
<li>
<p>分析RAIL用的工具</p>
<ul>
<li><a href="https://developers.google.com/web/tools/chrome-devtools" target="_blank" rel="noopener noreferrer">Chrome DevTools<ExternalLinkIcon/></a></li>
<li><a href="https://web.dev/measure/" target="_blank" rel="noopener noreferrer">Lighthouse<ExternalLinkIcon/></a></li>
<li><a href="https://webpagetest.org/easy" target="_blank" rel="noopener noreferrer">WebPageTest<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail?hl=en" target="_blank" rel="noopener noreferrer">The RAIL Performance Model<ExternalLinkIcon/></a></p>
<h3 id="优化指标" tabindex="-1"><a class="header-anchor" href="#优化指标" aria-hidden="true">#</a> 优化指标</h3>
<h4 id="总览" tabindex="-1"><a class="header-anchor" href="#总览" aria-hidden="true">#</a> 总览</h4>
<p><img src="@source/images/性能优化指标.png" alt=""></p>
<h4 id="lighthouse-性能指标" tabindex="-1"><a class="header-anchor" href="#lighthouse-性能指标" aria-hidden="true">#</a> <strong>LightHouse 性能指标</strong></h4>
<p>Lighthouse 中指标 (Metric) 包括以下内容：</p>
<ul>
<li>
<p><a href="https://web.dev/first-contentful-paint/" target="_blank" rel="noopener noreferrer">First Contentful Paint<ExternalLinkIcon/></a>：FCP 测量在用户导航到您的页面后浏览器呈现第一段 DOM 内容所需的时间。页面上的图像、非白色<code v-pre>&lt;canvas&gt;</code>元素和 SVG 被视为 DOM 内容；不包括iframe 内的任何内容。</p>
</li>
<li>
<p><a href="https://web.dev/first-meaningful-paint/" target="_blank" rel="noopener noreferrer">First Meaningful Paint<ExternalLinkIcon/></a>：(FMP)</p>
<ul>
<li>概念：FMP度量用户何时可以看到页面的主要内容。FMP的原始分数是用户初始化页面加载到页面呈现主要折叠内容之间的时间(以秒为单位)。FMP本质上显示了在最大的折叠上的布局变化发生之后的显示时间。</li>
<li>在 Lighthouse 6.0 中已不推荐使用 FMP，建议使用 <a href="https://web.dev/largest-contentful-paint/" target="_blank" rel="noopener noreferrer">Largest Contentful Paint<ExternalLinkIcon/></a> 代替。</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/speed-index/" target="_blank" rel="noopener noreferrer">Speed Index<ExternalLinkIcon/></a>：（SI）Speed Index度量页面加载过程中内容可视化显示的速度。Lighthouse首先在浏览器中捕捉页面加载的视频，并计算帧间的视觉进程。然后Lighthouse使用Speedline Node.js模块生成速度指数分数。</p>
</li>
<li>
<p><a href="https://web.dev/first-cpu-idle/" target="_blank" rel="noopener noreferrer">First CPU Idle<ExternalLinkIcon/></a>：页面第一次可以响应用户输入的时间。</p>
<ul>
<li>在 Lighthouse 6.0 中，已不推荐使用 FCI，原因是虽然 FCI 提供了比 TTI 更有意义的度量，但这种差异还不足以证明维护两个类似度量的合理性。建议考虑使用 <a href="https://web.dev/lighthouse-total-blocking-time/" target="_blank" rel="noopener noreferrer">Total Blocking Time<ExternalLinkIcon/></a> 和 TTI。</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/interactive/" target="_blank" rel="noopener noreferrer">Time to Interactive<ExternalLinkIcon/></a>：（TTI）表示网页第一次 <strong>完全达到可交互状态</strong> 的时间点，浏览器已经可以持续性的响应用户的输入。完全达到可交互状态的时间点是在最后一个长任务（Long Task）完成的时间, 并且在随后的 5 秒内网络和主线程是空闲的。</p>
<ul>
<li>
<p><img src="@source/images/tti.png" alt=""></p>
</li>
<li>
<p>长任务是需要 50 毫秒以上才能完成的任务</p>
</li>
<li>
<p>测量方式：TTI 的计算依赖于对 Long Task 和主线程是否空闲的观察，目前并不在 Web 性能标准规范中，但在一些性能监视工具中实现了。Google 提供了采集 TTI 的 API：<a href="https://github.com/GoogleChromeLabs/tti-polyfill" target="_blank" rel="noopener noreferrer">tti-polyfill<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ttiPolyfill <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'tti-polyfill'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ttiPolyfill<span class="token punctuation">.</span><span class="token function">getFirstConsistentlyInteractive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tti</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>perfData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">'tti'</span><span class="token operator">:</span> tti
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><a href="https://web.dev/lighthouse-max-potential-fid/" target="_blank" rel="noopener noreferrer">Max Potential First Input Delay<ExternalLinkIcon/></a>：（FID）</p>
<ul>
<li>从用户第一次与页面交互（例如单击链接、点击按钮等）到浏览器实际能够响应该交互的时间。</li>
<li>输入延迟是因为浏览器的主线程正忙于做其他事情，所以不能响应用户。发生这种情况的一个常见原因是浏览器正忙于解析和执行应用程序加载的大型 JavaScript 文件。</li>
<li>第一次输入延迟通常发生在第一次内容绘制（FCP）和可持续交互时间（TTI）之间，因为页面已经呈现了一些内容，但还不能可靠地交互。</li>
<li>如果用户刚好在主线程最忙时与页面交互，延迟响应的时间就会较长，如果与页面交互是在主线程空闲期间，浏览器可能会立即响应。所以对于 FID 这个指标，我们需要关注的是整体的 FID 值分布，而不是单一值。</li>
<li><img src="@source/images/FID.png" alt=""></li>
<li>测量方式：Google 提供了一个 JS 库 <a href="https://github.com/GoogleChromeLabs/first-input-delay" target="_blank" rel="noopener noreferrer">github.com/GoogleChrom…<ExternalLinkIcon/></a> 用于测量 FID</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/lighthouse-total-blocking-time/" target="_blank" rel="noopener noreferrer">Total Blocking Time<ExternalLinkIcon/></a>：TBT测量页面被阻止响应用户输入(如鼠标点击、屏幕点击或键盘按下)的总时间。该总和是通过添加所有长任务的阻塞部分之间的第一次有内容的绘制和时间到交互式。任何执行时间超过50毫秒的任务都是长任务。50ms后的时间量为阻塞部分。例如，如果Lighthouse检测到一个70毫秒长的任务，那么阻塞部分将是20毫秒</p>
</li>
<li>
<p><a href="https://web.dev/lighthouse-largest-contentful-paint/" target="_blank" rel="noopener noreferrer">Largest Contentful Paint<ExternalLinkIcon/></a>：（LCP）</p>
<ul>
<li>
<p>可视区域中最大的内容元素呈现到屏幕上的时间，用以估算页面的主要内容对用户可见时间。</p>
</li>
<li>
<p>测量方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> po <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerformanceObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entryList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entries <span class="token operator">=</span> entryList<span class="token punctuation">.</span><span class="token function">getEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> lastEntry <span class="token operator">=</span> entries<span class="token punctuation">[</span>entries<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 优先取 renderTime，如果没有则取 loadTime</span>
    <span class="token keyword">let</span> lcp <span class="token operator">=</span> lastEntry<span class="token punctuation">.</span>renderTime <span class="token operator">||</span> lastEntry<span class="token punctuation">.</span>loadTime<span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>perfData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string">'LCP'</span><span class="token punctuation">,</span> lcp
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  po<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'largest-contentful-paint'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do nothing </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h4 id="关键指标" tabindex="-1"><a class="header-anchor" href="#关键指标" aria-hidden="true">#</a> <strong>关键指标</strong></h4>
<ul>
<li>
<p>当从浏览器打开一个页面，经历：白屏 → 背景图 → 出现部分内容 → 首屏内容全部出现，但图片还在加载中 → 首屏内容全部出现，图片也已经加载完成。</p>
<p><img src="@source/images/首屏过程.png" alt=""></p>
</li>
<li>
<p>在此过程中的关键指标：</p>
<table>
<thead>
<tr>
<th>用户体验核心指标</th>
<th>定义</th>
<th>衡量指标</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>白屏时间</strong></td>
<td>页面开始有内容的时间，在没有内容之前是白屏</td>
<td>FP</td>
</tr>
<tr>
<td><strong>首次渲染内容</strong></td>
<td>浏览器首次绘制来自 DOM 的内容的时间</td>
<td>FCP</td>
</tr>
<tr>
<td><strong>重要内容渲染时间</strong></td>
<td>主要内容绘制到屏幕上的时间</td>
<td>FMP</td>
</tr>
<tr>
<td><strong>首屏时间</strong></td>
<td>可视区域内容已完全呈现的时间</td>
<td>FSP</td>
</tr>
<tr>
<td><strong>可交互时间</strong></td>
<td>用户第一次可以与页面交互的时间</td>
<td>FCI</td>
</tr>
<tr>
<td><strong>可流畅交互时间</strong></td>
<td>用户第一次可以持续与页面交互的时间</td>
<td>TTI</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p><strong>白屏时间（FP或FCP）：</strong></p>
<ul>
<li>
<p>概念：</p>
<ul>
<li>从开始加载到浏览器<strong>首次绘制像素</strong>到屏幕上的时间，也就是页面在屏幕上首次发生视觉变化的时间。</li>
<li>变化可能是简单的背景色更新或不引人注意的内容</li>
<li>First Paint 不包括默认的背景绘制，但包括非默认的背景绘制。</li>
<li>通常认为浏览器开始渲染 <code v-pre>&lt;body&gt;</code> 标签或者解析完 <code v-pre>&lt;head&gt; </code>标签的时刻就是页面白屏结束的时间点</li>
</ul>
</li>
<li>
<p><img src="@source/images/白屏.png" alt=""></p>
</li>
<li>
<p>计算白屏时间:</p>
<ul>
<li>
<p>可使用 Performance API 时：白屏时间 = firstPaint - performance.timing.navigationStart</p>
</li>
<li>
<p>不可使用 Performance API 时：白屏时间 = firstPaint - performance.timing.navigationStart</p>
<p><img src="@source/images/白屏测量.png" alt=""></p>
</li>
</ul>
</li>
</ul>
<p><strong>首屏时间（FSP）：</strong></p>
<ul>
<li>
<p>概念：页面从开始加载到首屏内容全部绘制完成的时间，用户可以看到首屏的全部内容。</p>
<p><img src="@source/images/首屏时间过程.png" alt=""></p>
</li>
<li>
<p>计算首屏时间方法：</p>
<ul>
<li>首屏模块标签标记法：	一种传统的采集方式，通常适用于首屏内容不需要通过拉取数据才能生存以及页面不考虑图片等资源加载的情况。
<ul>
<li>首屏时间= firstScreen - performance.timing.navigationStart;</li>
<li><img src="@source/images/首屏模块标签标记法.png" alt=""></li>
</ul>
</li>
<li>统计首屏内加载最慢的图片的时间：通常首屏内容加载最慢的就是图片资源,因此会把首屏内加载最慢的图片的时间当做首屏的时间。
<ul>
<li>方法：首屏时间=加载最慢的图片的时间点 - performance.timing.navigationStart</li>
<li>由于浏览器对每个页面的 TCP 连接数有限制，使得并不是所有图片都能立刻开始下载和显示，因此在 DOM树 构建完成后将会去遍历首屏内的所有图片标签，并且监听所有图片标签 onload 事件，最终遍历图片标签的加载时间的最大值，并用这个最大值减去 navigationStart 即可获得近似的首屏时间</li>
</ul>
</li>
<li>自定义首屏内容计算法：由于统计首屏内图片完成加载的时间比较复杂。因此我们在业务中通常会通过自定义模块内容，来简化计算首屏时间。
<ul>
<li>方法：忽略图片等资源加载情况，只考虑页面主要 DOM，只考虑首屏的主要模块，而不是严格意义首屏线以上的所有内容。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>现代浏览器问题：不会等待CSS树（所有CSS文件下载和解析完成）和DOM树（整个body标签解析完成）构建完成而是马上开始显示中间结果，所以经常在低网速的环境中，观察到页面由上至下缓慢显示完，或者先显示文本内容后再重绘成带有格式的页面内容</p>
</li>
<li>
<p>影响首屏内容完整绘制：避免横向屏幕外和纵向屏幕外元素的绘制阻塞首屏内容的渲染。</p>
<ul>
<li>如在开发过程中，把内容列表代码放在导航代码前面，浏览器会先渲染完列表内容再渲染导航，如果超过屏幕外的列表内容很长，会严重影响首屏内导航显示到屏幕的时间。</li>
</ul>
</li>
</ul>
<h2 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控" aria-hidden="true">#</a> 性能监控</h2>
<p><img src="@source/images/性能监控.png" alt=""></p>
<ul>
<li>前端性能监控：代码监控、工具监控、插件分析工具。
<ul>
<li>**代码监控：**依托于js代码并部署到需监控的页面，手动计算时间差或者使用浏览器的的API进行数据统计。
<ul>
<li>影响代码监控数据的因素：
<ul>
<li>浏览器渲染机制；</li>
<li>浏览器对API的实现程度，如：<code v-pre>performance API</code>；</li>
</ul>
</li>
</ul>
</li>
<li>**工具监控：**不用将统计代码部署到页面中，输入需统计的url并且选择运行次url的浏览器版本，通过工具对 url 进行请求分析后便可以给出各种性能指标，比如瀑布流、静态文件数量、首屏渲染时间等。</li>
<li><strong>插件分析工具：</strong> 通过插件分析开发时各依赖包的大小，通过减少主要包体积优化。</li>
</ul>
</li>
</ul>
<h3 id="代码监控" tabindex="-1"><a class="header-anchor" href="#代码监控" aria-hidden="true">#</a> 代码监控</h3>
<ul>
<li>代码监控主要使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Navigation_timing_API" target="_blank" rel="noopener noreferrer"><strong>Navigation Timing API</strong><ExternalLinkIcon/></a> 提供的可用于衡量一个网站性能的数据。主要提供以下两个接口：
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Performance" target="_blank" rel="noopener noreferrer"><code v-pre>Performance</code><ExternalLinkIcon/></a>：获取到当前页面中与性能相关的信息。它是 High Resolution Time API 的一部分，同时也融合了 Performance Timeline API、<a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API" target="_blank" rel="noopener noreferrer">Navigation Timing API<ExternalLinkIcon/></a>、 <a href="https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API" target="_blank" rel="noopener noreferrer">User Timing API<ExternalLinkIcon/></a> 和 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API" target="_blank" rel="noopener noreferrer">Resource Timing API<ExternalLinkIcon/></a>。</li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceNavigationTiming" target="_blank" rel="noopener noreferrer"><code v-pre>PerformanceNavigationTiming</code><ExternalLinkIcon/></a>：提供了方法和属性来存取关于游览器文档navigation事件的相关数据。如文档实际加载/卸载的时间。</li>
</ul>
</li>
</ul>
<h4 id="performance-api" tabindex="-1"><a class="header-anchor" href="#performance-api" aria-hidden="true">#</a> Performance API</h4>
<ul>
<li>
<p><a href="https://www.w3.org/TR/2014/WD-navigation-timing-2-20140325/" target="_blank" rel="noopener noreferrer"><code v-pre>window.performance</code><ExternalLinkIcon/></a> 是W3C性能小组引入的新的API，目前IE9以上的浏览器都支持。</p>
</li>
<li>
<p>Performance API 用于精确度量、控制、增强浏览器的性能表现。这个 API 为测量网站性能， 提供以前没有办法做到的精度。</p>
</li>
<li>
<p>结构：<img src="@source/images/perfomance.png" alt=""></p>
<ul>
<li>
<p>​	<code v-pre>memory</code>：JavaScript 占用的内存。</p>
</li>
<li>
<p><code v-pre>navigation</code>：统计网页导航相关的数据：</p>
<ol>
<li><code v-pre>redirectCount</code>:重定向的数量（只读），但是这个接口有同源策略限制，即仅能检测同源的重定向；</li>
<li>type 返回值：
<ul>
<li>0 : TYPE_NAVIGATE (用户通过常规导航方式访问页面，比如点一个链接，或者一般的get方式)</li>
<li>1 : TYPE_RELOAD (用户通过刷新，包括JS调用刷新接口等方式访问页面)</li>
<li>2 : TYPE_BACK_FORWARD (用户通过后退按钮访问本页面)</li>
</ul>
</li>
</ol>
</li>
<li>
<p><code v-pre>timing</code>：统计数据 网络、解析等时间数据。</p>
<p><img src="@source/images/timing-api.png" alt=""></p>
<ul>
<li>
<blockquote>
<ul>
<li>
<p><code v-pre>startTime</code>：有些浏览器实现为<a href="https://msdn.microsoft.com/en-us/library/ff974724(v=vs.85).aspx" target="_blank" rel="noopener noreferrer"><code v-pre>navigationStart</code><ExternalLinkIcon/></a>，代表浏览器开始unload前一个页面文档的开始时间节点。比如我们当前正在浏览 baidu.com，在地址栏输入google.com并回车，浏览器的执行动作依次为：<strong>unload当前文档（即baidu.com）-&gt;请求下一文档（即google.com）</strong>。navigationStart的值便是触发unload当前文档的时间节点。</p>
<blockquote>
<p>如果当前文档为空，则navigationStart的值等于fetchStart。</p>
</blockquote>
</li>
<li>
<p><code v-pre>redirectStart</code>和<code v-pre>redirectEnd</code>：如果页面是由redirect而来，则redirectStart和redirectEnd分别代表redirect开始和结束的时间节点；</p>
</li>
<li>
<p><code v-pre>unloadEventStart</code>和<code v-pre>unloadEventEnd</code>：如果前一个文档和请求的文档是同一个域的，则<code v-pre>unloadEventStart</code>和<code v-pre>unloadEventEnd</code>分别代表浏览器unload前一个文档的开始和结束时间节点。否则两者都等于0；</p>
</li>
<li>
<p><code v-pre>fetchStart</code>是指在浏览器发起任何请求之前的时间值。在fetchStart和<code v-pre>domainLookupStart</code>之间，浏览器会检查当前文档的缓存；</p>
</li>
<li>
<p><code v-pre>domainLookupStart</code>和<code v-pre>domainLookupEnd</code>分别代表DNS查询的开始和结束时间节点。如果浏览器没有进行DNS查询（比如使用了cache），则两者的值都等于<code v-pre>fetchStart</code>；</p>
</li>
<li>
<p><code v-pre>connectStart</code>和<code v-pre>connectEnd</code>分别代表TCP建立连接和连接成功的时间节点。如果浏览器没有进行TCP连接（比如使用持久化连接webscoket），则两者都等于<code v-pre>domainLookupEnd</code>；</p>
</li>
<li>
<p><code v-pre>secureConnectionStart</code>：可选。如果页面使用HTTPS，它的值是安全连接握手之前的时刻。如果该属性不可用，则返回undefined。如果该属性可用，但没有使用HTTPS，则返回0；</p>
</li>
<li>
<p><code v-pre>requestStart</code>代表浏览器发起请求的时间节点，请求的方式可以是请求服务器、缓存、本地资源等；</p>
</li>
<li>
<p><code v-pre>responseStart</code>和<code v-pre>responseEnd</code>分别代表浏览器收到从服务器端（或缓存、本地资源）响应回的第一个字节和最后一个字节数据的时刻；</p>
</li>
<li>
<p><code v-pre>domLoading</code>代表浏览器开始解析html文档的时间节点。我们知道IE浏览器下的document有<code v-pre>readyState</code>属性，<code v-pre>domLoading</code>的值就等于<code v-pre>readyState</code>改变为<code v-pre>loading</code>的时间节点；</p>
</li>
<li>
<p><code v-pre>domInteractive</code>代表浏览器解析html文档的状态为<code v-pre>interactive</code>时的时间节点。<code v-pre>domInteractive</code>并非DOMReady，它早于DOMReady触发，代表html文档解析完毕（即dom tree创建完成）但是内嵌资源（比如外链css、js等）还未加载的时间点；</p>
</li>
<li>
<p><code v-pre>domContentLoadedEventStart</code>：代表<code v-pre>DOMContentLoaded</code>事件触发的时间节点：</p>
<blockquote>
<p>页面文档完全加载并解析完毕之后,会触发DOMContentLoaded事件，HTML文档不会等待样式文件,图片文件,子框架页面的加载(load事件可以用来检测HTML页面是否完全加载完毕(fully-loaded))。</p>
</blockquote>
</li>
<li>
<p><code v-pre>domContentLoadedEventEnd</code>：代表<code v-pre>DOMContentLoaded</code>事件完成的时间节点，此刻用户可以对页面进行操作，也就是jQuery中的domready时间；</p>
</li>
<li>
<p><code v-pre>domComplete</code>：html文档完全解析完毕的时间节点；</p>
</li>
<li>
<p><code v-pre>loadEventStart</code>和<code v-pre>loadEventEnd</code>分别代表onload事件触发和结束的时间节点</p>
</li>
</ul>
</blockquote>
</li>
</ul>
</li>
<li>
<p><strong>计算性能指标：</strong></p>
<ul>
<li>DNS查询耗时 = domainLookupEnd - domainLookupStart</li>
<li>TCP链接耗时 = connectEnd - connectStart</li>
<li>request 请求耗时 = responseEnd - responseStart</li>
<li>解析 dom 树耗时 = domComplete - domInteractive</li>
<li>白屏时间 = domloadng - fetchStart</li>
<li>domready 时间 = domContentLoadedEventEnd - fetchStart</li>
<li>onload 时间 = loadEventEnd - fetchStart</li>
</ul>
</li>
</ul>
</li>
<li>
<p>使用 getTime 来计算脚本耗时:</p>
<ul>
<li>缺点:</li>
<li>getTime 方法（以及 Date 对象的其他方法） 都只能精确到毫秒级别（一秒的千分之一），无法计算更小的时间差。
<ul>
<li>这种写法只能获取代码运行过程中的时间进度，无法知道一些后台事件的时间进度，比如浏览器用 了多少时间从服务器加载网页。</li>
</ul>
</li>
<li>实现:</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 计算加载时间</span>
<span class="token keyword">function</span> <span class="token function">getPerformanceTiming</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">var</span> performance <span class="token operator">=</span> window<span class="token punctuation">.</span>performance<span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>performance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当前浏览器不支持</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你的浏览器不支持 performance 接口'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">var</span> t <span class="token operator">=</span> performance<span class="token punctuation">.</span>timing<span class="token punctuation">;</span>
    <span class="token keyword">var</span> times <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  
    <span class="token comment">//【重要】页面加载完成的时间</span>
    <span class="token comment">//【原因】这几乎代表了用户等待页面可用的时间</span>
    times<span class="token punctuation">.</span>loadPage <span class="token operator">=</span> t<span class="token punctuation">.</span>loadEventEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>navigationStart<span class="token punctuation">;</span>
  
    <span class="token comment">//【重要】解析 DOM 树结构的时间</span>
    <span class="token comment">//【原因】反省下你的 DOM 树嵌套是不是太多了！</span>
    times<span class="token punctuation">.</span>domReady <span class="token operator">=</span> t<span class="token punctuation">.</span>domComplete <span class="token operator">-</span> t<span class="token punctuation">.</span>responseEnd<span class="token punctuation">;</span>
  
    <span class="token comment">//【重要】重定向的时间</span>
    <span class="token comment">//【原因】拒绝重定向！比如，http://example.com/ 就不该写成 http://example.com</span>
    times<span class="token punctuation">.</span>redirect <span class="token operator">=</span> t<span class="token punctuation">.</span>redirectEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>redirectStart<span class="token punctuation">;</span>
  
    <span class="token comment">//【重要】DNS 查询时间</span>
    <span class="token comment">//【原因】DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？</span>
    <span class="token comment">// 可使用 HTML5 Prefetch 预查询 DNS ，见：[HTML5 prefetch](http://segmentfault.com/a/1190000000633364)           </span>
    times<span class="token punctuation">.</span>lookupDomain <span class="token operator">=</span> t<span class="token punctuation">.</span>domainLookupEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>domainLookupStart<span class="token punctuation">;</span>
  
    <span class="token comment">//【重要】读取页面第一个字节的时间</span>
    <span class="token comment">//【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？</span>
    <span class="token comment">// TTFB 即 Time To First Byte 的意思</span>
    <span class="token comment">// 维基百科：https://en.wikipedia.org/wiki/Time_To_First_Byte</span>
    times<span class="token punctuation">.</span>ttfb <span class="token operator">=</span> t<span class="token punctuation">.</span>responseStart <span class="token operator">-</span> t<span class="token punctuation">.</span>navigationStart<span class="token punctuation">;</span>
  
    <span class="token comment">//【重要】内容加载完成的时间</span>
    <span class="token comment">//【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？</span>
    times<span class="token punctuation">.</span>request <span class="token operator">=</span> t<span class="token punctuation">.</span>responseEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>requestStart<span class="token punctuation">;</span>
  
    <span class="token comment">//【重要】执行 onload 回调函数的时间</span>
    <span class="token comment">//【原因】是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？</span>
    times<span class="token punctuation">.</span>loadEvent <span class="token operator">=</span> t<span class="token punctuation">.</span>loadEventEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>loadEventStart<span class="token punctuation">;</span>
  
    <span class="token comment">// DNS 缓存时间</span>
    times<span class="token punctuation">.</span>appcache <span class="token operator">=</span> t<span class="token punctuation">.</span>domainLookupStart <span class="token operator">-</span> t<span class="token punctuation">.</span>fetchStart<span class="token punctuation">;</span>
  
    <span class="token comment">// 卸载页面的时间</span>
    times<span class="token punctuation">.</span>unloadEvent <span class="token operator">=</span> t<span class="token punctuation">.</span>unloadEventEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>unloadEventStart<span class="token punctuation">;</span>
  
    <span class="token comment">// TCP 建立连接完成握手的时间</span>
    times<span class="token punctuation">.</span>connect <span class="token operator">=</span> t<span class="token punctuation">.</span>connectEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>connectStart<span class="token punctuation">;</span>
  
    <span class="token keyword">return</span> times<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取首次渲染、首次有内容的渲染
<img src="@source/images/首屏时间.png" alt=""></p>
</li>
</ul>
<h4 id="resource-timing-api" tabindex="-1"><a class="header-anchor" href="#resource-timing-api" aria-hidden="true">#</a> Resource Timing API</h4>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Resource_Timing_API" target="_blank" rel="noopener noreferrer"><code v-pre>Resource Timing API </code><ExternalLinkIcon/></a> 为网络事件(如重定向的开始和结束事件, DNS查找的开始和结束事件, 请求开始, 响应开始和结束时间等)生成有高分辨率时间戳( <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp" target="_blank" rel="noopener noreferrer">high-resolution timestamps<ExternalLinkIcon/></a> )的资源加载时间线, 并提供了资源大小和资源类型.</p>
</li>
<li>
<p>PerformanceResourceTiming 接口在 Performance Timeline 面板上有展现，并且其扩展 PerformanceEntry 接口。</p>
</li>
<li>
<p>使用 <strong>performance.getEntries()方法</strong>  数组形式，返回一个 PerformanceEntry 列表，这些请求的时间统计信息，有多少个请求，返回数组就会有多少个成员。有以下属性：</p>
<ul>
<li>
<p>name：这个属性必须返回请求资源的解析URL。如果重定向到其他URL，此属性也不更改。</p>
</li>
<li>
<p>entryType：entryType属性返回 DOMString “resource”。entryType 类型不同数组中的对象结构也不同。initiatorType 表：</p>
</li>
<li>
<table>
<thead>
<tr>
<th>**值 **</th>
<th>**描述 **</th>
</tr>
</thead>
<tbody>
<tr>
<td>mark</td>
<td>通过 mark() 方法添加到数组中的对象</td>
</tr>
<tr>
<td>paint</td>
<td>通过 measure() 方法添加到数组中的对象</td>
</tr>
<tr>
<td>measure</td>
<td>first-contentful-paint 首次内容绘制</td>
</tr>
<tr>
<td>resource</td>
<td>所有资源加载时间，用处最多</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>startTime：startTime属性返回一个 DOMHighResTimeStamp [ HR-TIME-2 ]，表示用户代理获取资源开始排队等待之前的时间。如果在获取资源时存在 HTTP 重定向或类同情况，并且所有重定向或类同情况都来自与当前文档同源，或者通过了timing  allow check 算法，则此属性返回 redirectStart 的值。否则，此属性返回 fetchStart 的值。</p>
</li>
<li>
<p>duration：该duration属性返回一个 DOMHighResTimeStamp，等于 responseEnd 和 startTime 之间的差。</p>
</li>
</ul>
</li>
</ul>
<h3 id="工具监控" tabindex="-1"><a class="header-anchor" href="#工具监控" aria-hidden="true">#</a> 工具监控</h3>
<h4 id="lighthouse" tabindex="-1"><a class="header-anchor" href="#lighthouse" aria-hidden="true">#</a> LightHouse</h4>
<h5 id="安装-使用" tabindex="-1"><a class="header-anchor" href="#安装-使用" aria-hidden="true">#</a> 安装/使用</h5>
<p>针对不同的适用场景，我们可以通过多种方式来安装并使用 Lighthouse：</p>
<ul>
<li>浏览器插件。Chrome 插件的形式提供了更加友好的用户界面，方便读取报告。</li>
<li>Chrome DevTools。该工具集成在最新版本的 Chrome 浏览器中，无需安装即可使用。</li>
<li>Lighthouse CLI 命令行工具。方便将 Lighthouse 集成到持续集成系统中。</li>
<li>编程的方式。我们也能通过 Node.js 模块引入 Lighthouse 工具包，以编程的形式来使用它。</li>
</ul>
<p>具体安装方式查看 <a href="https://lavas-project.github.io/pwa-book/appendix01/1-lighthouse.html#%E4%BD%BF%E7%94%A8-lighthouse-%E6%B5%8B%E8%AF%84-pwa" target="_blank" rel="noopener noreferrer">使用 Lighthouse<ExternalLinkIcon/></a></p>
<h5 id="测评报告" tabindex="-1"><a class="header-anchor" href="#测评报告" aria-hidden="true">#</a> 测评报告</h5>
<ul>
<li>
<p>使用 Lighthouse 对网站进行测评后，我们会得到一份评分报告，它包含了：</p>
<ul>
<li>性能（Performance）</li>
<li>访问无障碍（Accessibility）</li>
<li>最佳实践（Best Practice）</li>
<li>搜索引擎优化（SEO）</li>
<li>PWA（Progressive Web App）</li>
</ul>
<p><img src="@source/images/lighthouse1.png" alt=""></p>
</li>
<li>
<p>报告中带有相关优化建议：</p>
<ul>
<li>性能（Performance）结果:<img src="@source/images/lighthouse2.png" alt="">
<ul>
<li>性能评分分为了三部分：
<ul>
<li><a href="https://web.dev/lighthouse-performance/#metrics" target="_blank" rel="noopener noreferrer">Metrics<ExternalLinkIcon/></a> 部分的指标项会直接影响分数，可以作为我们的主要参考点。</li>
<li><a href="https://web.dev/lighthouse-performance/#opportunities" target="_blank" rel="noopener noreferrer">Opportunities<ExternalLinkIcon/></a> 提供了详细的建议和文档，来解释低分的原因，帮助我们具体进行实现和改进。</li>
<li><a href="https://web.dev/lighthouse-performance/#diagnostics" target="_blank" rel="noopener noreferrer">Diagnostics<ExternalLinkIcon/></a> 部分的列表项则为进一步改善性能的实验和调整，给出了指导。</li>
</ul>
</li>
</ul>
</li>
<li>访问无障碍（Accessibility）测试结果：<img src="@source/images/lighthouse3.png" alt=""></li>
<li>最佳实践（Best Practice）测试结果：<img src="@source/images/lighthouse4.png" alt=""></li>
<li>SEO 测试结果：<img src="@source/images/lighthouse5.png" alt=""></li>
<li>PWA 测试结果：<img src="@source/images/lighthouse6.png" alt=""></li>
</ul>
</li>
</ul>
<h5 id="performance-评分" tabindex="-1"><a class="header-anchor" href="#performance-评分" aria-hidden="true">#</a> Performance 评分</h5>
<ul>
<li>
<p>性能评分的分值区间是：0到100。</p>
<ul>
<li>如果出现0分，通常是在运行 Lighthouse 时发生了错误，满分100分代表了站点已经达到了98分位值的数据，而50分则是75分位值的数据。</li>
<li>分值区间和颜色的对应关系如下：
<ul>
<li>0 - 49（慢）：红色</li>
<li>50 - 89（平均值）： 橙色</li>
<li>90 - 100（快）： 绿色</li>
</ul>
</li>
</ul>
</li>
<li>
<p>性能指标评分的计算方式：每一项性能指标对评分的贡献都有其计算逻辑，Lighthouse 会将原始的性能值映射成为 0-100 之间的数字。评分使用 HTTPArchive 上的真实站点性能数据作为样本，统计出对数正态分布。</p>
<ul>
<li>例如，您的 FCP 分数是基于<a href="https://httparchive.org/reports/loading-speed#fcp" target="_blank" rel="noopener noreferrer">HTTP 存档中的数据<ExternalLinkIcon/></a>，您的页面的 FCP 时间与真实网站的 FCP 时间的比较。例如，在 99% 中执行的站点在大约 1.2 秒内呈现 FCP。如果您网站的 FCP 为 1.2 秒，则您的 FCP 分数为 99。请参阅<a href="https://web.dev/performance-scoring/#metric-scores" target="_blank" rel="noopener noreferrer">如何确定指标分数<ExternalLinkIcon/></a>以了解如何设置 Lighthouse 分数阈值。参考<a href="https://web.dev/first-contentful-paint/#how-lighthouse-determines-your-fcp-score" target="_blank" rel="noopener noreferrer">Lighthouse 如何确定分数<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>性能评分的分配权重：各个指标对性能评分的贡献并不相同，Lighthouse 提供了<a href="https://docs.google.com/spreadsheets/d/1Cxzhy5ecqJCucdf1M0iOzM8mIxNc7mmx107o5nj38Eo/edit#gid=0" target="_blank" rel="noopener noreferrer">评分详情表<ExternalLinkIcon/></a>，形式如下图，来查阅具体权重分配情况。权重较大的指标，对性能评分的影响更大一些，最终的总体性能评分是这些性能指标分数的加权平均值。我们可以用这个分数计算的<a href="https://docs.google.com/spreadsheets/d/1dXH-bXX3gxqqpD1f7rp6ImSOhobsT1gn_GQ2fGZp8UU/edit?ts=59fb61d2#gid=283330180" target="_blank" rel="noopener noreferrer">表格<ExternalLinkIcon/></a>作为参考，以了解不同的指标是如何影响最终评分的。<img src="@source/images/性能评分权重表.png" alt=""></p>
<p>从表中可以看出，性能的指标项权重分配如下：</p>
<ul>
<li>3X - 首次内容绘制</li>
<li>1X - 首次有效绘制</li>
<li>2X - 首次 CPU 空闲</li>
<li>5X - 可交互时间</li>
<li>4X - 速度指标</li>
<li>0X - 输入延迟估值</li>
</ul>
</li>
<li>
<p>不同 Lighthouse 版本对权重不同：</p>
<ul>
<li><a href="https://web.dev/performance-scoring/#lighthouse-8" target="_blank" rel="noopener noreferrer">Lighthouse 8 <ExternalLinkIcon/></a></li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">Audit</th>
<th style="text-align:left">Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://web.dev/first-contentful-paint/" target="_blank" rel="noopener noreferrer">First Contentful Paint<ExternalLinkIcon/></a></td>
<td style="text-align:left">10%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/speed-index/" target="_blank" rel="noopener noreferrer">Speed Index<ExternalLinkIcon/></a></td>
<td style="text-align:left">10%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/lcp/" target="_blank" rel="noopener noreferrer">Largest Contentful Paint<ExternalLinkIcon/></a></td>
<td style="text-align:left">25%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/interactive/" target="_blank" rel="noopener noreferrer">Time to Interactive<ExternalLinkIcon/></a></td>
<td style="text-align:left">10%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/lighthouse-total-blocking-time/" target="_blank" rel="noopener noreferrer">Total Blocking Time<ExternalLinkIcon/></a></td>
<td style="text-align:left">30%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/cls/" target="_blank" rel="noopener noreferrer">Cumulative Layout Shift<ExternalLinkIcon/></a></td>
<td style="text-align:left">15%</td>
</tr>
</tbody>
</table>
<ul>
<li><a href="https://web.dev/performance-scoring/#lighthouse-6" target="_blank" rel="noopener noreferrer">Lighthouse 6 <ExternalLinkIcon/></a></li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">Audit</th>
<th style="text-align:left">Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://web.dev/first-contentful-paint/" target="_blank" rel="noopener noreferrer">First Contentful Paint<ExternalLinkIcon/></a></td>
<td style="text-align:left">15%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/speed-index/" target="_blank" rel="noopener noreferrer">Speed Index<ExternalLinkIcon/></a></td>
<td style="text-align:left">15%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/lcp/" target="_blank" rel="noopener noreferrer">Largest Contentful Paint<ExternalLinkIcon/></a></td>
<td style="text-align:left">25%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/interactive/" target="_blank" rel="noopener noreferrer">Time to Interactive<ExternalLinkIcon/></a></td>
<td style="text-align:left">15%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/lighthouse-total-blocking-time/" target="_blank" rel="noopener noreferrer">Total Blocking Time<ExternalLinkIcon/></a></td>
<td style="text-align:left">25%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/cls/" target="_blank" rel="noopener noreferrer">Cumulative Layout Shift<ExternalLinkIcon/></a></td>
<td style="text-align:left">5%</td>
</tr>
</tbody>
</table>
<ul>
<li>Lighthouse 5</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">Audit</th>
<th style="text-align:left">Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://web.dev/first-contentful-paint/" target="_blank" rel="noopener noreferrer">First Contentful Paint<ExternalLinkIcon/></a></td>
<td style="text-align:left">20%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/speed-index/" target="_blank" rel="noopener noreferrer">Speed Index<ExternalLinkIcon/></a></td>
<td style="text-align:left">27%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/first-meaningful-paint/" target="_blank" rel="noopener noreferrer">First Meaningful Paint<ExternalLinkIcon/></a></td>
<td style="text-align:left">7%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/interactive/" target="_blank" rel="noopener noreferrer">Time to Interactive<ExternalLinkIcon/></a></td>
<td style="text-align:left">33%</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://web.dev/first-cpu-idle/" target="_blank" rel="noopener noreferrer">First CPU Idle<ExternalLinkIcon/></a></td>
<td style="text-align:left">13%</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>使用<a href="https://googlechrome.github.io/lighthouse/scorecalc/" target="_blank" rel="noopener noreferrer">Lighthouse 评分计算器<ExternalLinkIcon/></a>来帮助了解您应该为达到某个 Lighthouse 性能分数而设定的阈值。</p>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://web.dev/lighthouse-performance/" target="_blank" rel="noopener noreferrer">Lighthoust Performance audits<ExternalLinkIcon/></a></p>
<h2 id="性能优化方案" tabindex="-1"><a class="header-anchor" href="#性能优化方案" aria-hidden="true">#</a> 性能优化方案</h2>
<h3 id="总览-1" tabindex="-1"><a class="header-anchor" href="#总览-1" aria-hidden="true">#</a> 总览</h3>
<p><img src="@source/images/优化方案.png" alt=""></p>
<h3 id="网络加载优化" tabindex="-1"><a class="header-anchor" href="#网络加载优化" aria-hidden="true">#</a> 网络加载优化</h3>
<h4 id="资源提示" tabindex="-1"><a class="header-anchor" href="#资源提示" aria-hidden="true">#</a> 资源提示</h4>
<p>此规范定义了 HTML 的 <code v-pre>&lt;Link&gt;</code> 元素的 rel 属性值，包括 dns-prefetch、preconnect、prefetch 和 prerender。我们可以使用这些资源提示让用用户代理帮助我们预解析 DNS、预链接、预加载资源以及预处理资源以提高页面性能。</p>
<h5 id="dns-预解析-dns-prefetch" tabindex="-1"><a class="header-anchor" href="#dns-预解析-dns-prefetch" aria-hidden="true">#</a> <strong>DNS 预解析 (DNS-Prefetch)：</strong></h5>
<ul>
<li>通过 DNS 预解析来告诉浏览器未来我们可能从某个特定的 URL 获取资源，当浏览器真正使用到该域中的某个资源时就可以尽快地完成 DNS 解析。</li>
<li>方法： <code v-pre>&lt;link rel=&quot;dns-prefetch&quot; href=&quot;//example.com&quot;&gt;</code></li>
</ul>
<h5 id="预连接-preconnect" tabindex="-1"><a class="header-anchor" href="#预连接-preconnect" aria-hidden="true">#</a> <strong>预连接 (Preconnect)：</strong></h5>
<ul>
<li>
<p>与 DNS 预解析类似，preconnect 不仅完成 DNS 预解析，同时还将进行 TCP 握手和建立传输层协议</p>
</li>
<li>
<p>方法： <code v-pre>&lt;link rel=&quot;preconnect&quot; href=&quot;http://example.com&quot;&gt;</code></p>
<p><img src="@source/images/preconnect.png" alt="image-20210707235115997"></p>
</li>
<li>
<p>应用：</p>
<ul>
<li>只对一些立即用到的第三方站点添加 preconnect 处理，要节省用 preconnect。</li>
<li>用 preconnect 给所有的第三方站点都做提前链接很低效，可以为重要的第三方站点做 preconnect ,其余的都做 dns-prefetch. 可节约20-120ms。</li>
</ul>
</li>
</ul>
<h5 id="预获取-prefetching" tabindex="-1"><a class="header-anchor" href="#预获取-prefetching" aria-hidden="true">#</a> <strong>预获取 (Prefetching)：</strong></h5>
<ul>
<li>告诉浏览器获取下一次导航可能需要的资源。大多数情况下，这意味着将以极低的优先级来获取资源（因为浏览器知道当前页面中需要的所有内容比我们认为在下一页中需要的资源更重要）。这意味着 prefetch 的主要用处是加快下一个导航的速度，而不是当前的导航。</li>
<li>方法：<code v-pre>&lt;link rel=&quot;prefetch&quot; href=&quot;image.png&quot;&gt;</code></li>
<li>与预解析DNS区别：与 DNS 预解析不同，预获取真正请求并下载了资源，并储存在缓存中。但预获取还依赖于一些条件，某些预获取可能会被浏览器忽略，例如从一个非常缓慢的网络中获取一个庞大的字体文件。并且，Firefox 只会在浏览器闲置时进行资源预获取。</li>
</ul>
<h5 id="子资源-subresources" tabindex="-1"><a class="header-anchor" href="#子资源-subresources" aria-hidden="true">#</a> <strong>子资源 (Subresources)：</strong></h5>
<ul>
<li>另一个预获取方式，这种方式指定的预获取资源具有最高的优先级，在所有 prefetch 项之前进行</li>
<li>方法：<code v-pre>&lt;link rel=&quot;subresource&quot; href=&quot;styles.css&quot;&gt;</code></li>
<li>rel=prefetch 为将来的页面提供了一种低优先级的资源预加载方式，而 rel=subresource 为当前页面提供了一种高优先级的资源预加载。所以，如果资源是当前页面必须的，或者资源需要尽快可用，那么最好使用 subresource 而不是 prefetch</li>
</ul>
<h5 id="预渲染-prerender" tabindex="-1"><a class="header-anchor" href="#预渲染-prerender" aria-hidden="true">#</a> <strong>预渲染 (Prerender)：</strong></h5>
<ul>
<li>prerender 可以预先加载文档的所有资源。这类似于在一个隐藏的 tab 页中打开了某个链接 – 将下载所有资源、创建 DOM 结构、完成页面布局、应用 CSS 样式和执行 JavaScript 脚本等。当用户真正访问该链接时，隐藏的页面就切换为可见，使页面看起来就是瞬间加载完成一样</li>
<li>方法：<code v-pre>&lt;link rel=&quot;prerender&quot; href=&quot;http://example.com&quot;&gt;</code></li>
<li>注意：不要滥用该特性，当你知道用户一定会点击某个链接时才可以进行预渲染，否则浏览器将无条件地下载所有预渲染需要的资源，所有预加载技术都存在一个潜在的风险：对资源预测错误，而预加载的开销（抢占 CPU 资源，消耗电池，浪费带宽等）是高昂的，所以必须谨慎行事。虽然很难确定用户下一步将访问哪些资源，但高可信的场景确实存在：
<ul>
<li>如果用户完成一个带有明显结果的搜索，那么结果页面很可能会被加载</li>
<li>如果用户进入到登陆页面，那么登陆成功的页面很可能会被加载</li>
<li>如果用户阅读一个多页的文章或访问一个分页的结果集，那么下一页很可能会被加载</li>
</ul>
</li>
</ul>
<h5 id="预加载-preload" tabindex="-1"><a class="header-anchor" href="#预加载-preload" aria-hidden="true">#</a> <strong>预加载(Preload)：</strong></h5>
<ul>
<li>
<p>告诉用户代理预读取资源而不必执行它们，允许将资源加载与执行分离，细粒度控制资源何时和如何加载。</p>
</li>
<li>
<p>方法：<code v-pre>&lt;link rel=&quot;preload&quot; href=&quot;image.png&quot;&gt;</code></p>
</li>
<li>
<p>示例：应用程序可以使用 preload 关键字启动 CSS 资源的早期、高优先级和非呈现阻塞获取，然后应用程序可以在适当的时间应用这些获取：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Using markup
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> preload stylesheet resource via declarative markup <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preload"</span> href<span class="token operator">=</span><span class="token string">"/styles/other.css"</span> <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">"style"</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> or<span class="token punctuation">,</span> preload stylesheet resource via JavaScript <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">var</span> res <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"link"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
res<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">"preload"</span><span class="token punctuation">;</span>
res<span class="token punctuation">.</span>as <span class="token operator">=</span> <span class="token string">"style"</span><span class="token punctuation">;</span>
res<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">"styles/other.css"</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

Using <span class="token constant">HTTP</span> Header
<span class="token literal-property property">Link</span><span class="token operator">:</span> <span class="token operator">&lt;</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>example<span class="token punctuation">.</span>com<span class="token operator">/</span>other<span class="token operator">/</span>styles<span class="token punctuation">.</span>css<span class="token operator">></span><span class="token punctuation">;</span> rel<span class="token operator">=</span>preload<span class="token punctuation">;</span> <span class="token keyword">as</span><span class="token operator">=</span>style
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>假设您页面的<a href="https://web.dev/critical-request-chains" target="_blank" rel="noopener noreferrer">关键请求链<ExternalLinkIcon/></a>如下所示：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>index.html
|--app.js   
	|--styles.css   
	|--ui.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>index.html</code>文件声明<code v-pre>&lt;script src=&quot;app.js&quot;&gt;</code>. 当<code v-pre>app.js</code>运行时，它调用<code v-pre>fetch()</code>以下载<code v-pre>styles.css</code>和<code v-pre>ui.js</code>。在下载、解析和执行最后 2 个资源之前，页面不会显示完整。使用上面的示例，Lighthouse 将标记<code v-pre>styles.css</code>和<code v-pre>ui.js</code>作为候选。</p>
</li>
<li>
<p>潜在的节省取决于如果您声明了预加载链接，浏览器可以提前多长时间启动请求。例如，如果<code v-pre>app.js</code>下载、解析和执行需要 200 毫秒，则每个资源的潜在节省为 200 毫秒，因为<code v-pre>app.js</code>不再是每个请求的瓶颈。</p>
</li>
<li>
<p>无预加载过程： app.js 加载后再加载 ui.js 和 style.css<img src="@source/images/chrome-preload.png" alt=""></p>
</li>
<li>
<p>使用预加载过程：app.js 、 ui.js 和 style.css 同时加载</p>
<p><img src="@source/images/chrome-preload2.png" alt=""></p>
</li>
</ul>
</li>
</ul>
<h5 id="preload-与-prefetch比较" tabindex="-1"><a class="header-anchor" href="#preload-与-prefetch比较" aria-hidden="true">#</a> preload 与 prefetch比较</h5>
<ul>
<li>prefetch 和 preload 都可以声明一个资源及其获取属性，但在用户代理获取资源的方式和时间上有所不同：</li>
<li>prefetch 是可选的，通常是用于后续导航可能使用的资源的低优先级获取；
<ul>
<li>preload 是当前导航所必需的资源的强制获取。开发人员应该合理使用它们来最小化资源争用和优化加载性能。</li>
<li>在 preload 中 as 属性对于保证正确的优先级、请求匹配、请求对应正确的内容安全策略（<a href="http://www.html5rocks.com/en/tutorials/security/content-security-policy/" target="_blank" rel="noopener noreferrer">Content-Security-Policy<ExternalLinkIcon/></a> ）指令以及基于资源类型发送正确的 Accept 首部是必需的。</li>
</ul>
</li>
</ul>
<h4 id="避免链关键请求" tabindex="-1"><a class="header-anchor" href="#避免链关键请求" aria-hidden="true">#</a> 避免链关键请求</h4>
<ul>
<li>
<p><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path" target="_blank" rel="noopener noreferrer">关键请求链<ExternalLinkIcon/></a>是一系列对页面渲染很重要的依赖网络请求。链的长度越大，下载量越大，对页面加载性能的影响就越大。</p>
</li>
<li>
<p><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse<ExternalLinkIcon/></a>报告加载了高优先级的关键请求：</p>
</li>
</ul>
<p><img src="@source/images/chrome-关键链接请求.png" alt="Lighthouse 最小化关键请求深度审计的屏幕截图"></p>
<ul>
<li>
<p><a href="https://web.dev/critical-request-chains/#how-lighthouse-identifies-critical-request-chains" target="_blank" rel="noopener noreferrer">Lighthouse 如何识别关键请求链<ExternalLinkIcon/></a>：</p>
<ul>
<li>Lighthouse 使用网络优先级作为识别阻塞渲染的关键资源的代理。有关<a href="https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit" target="_blank" rel="noopener noreferrer">Chrome<ExternalLinkIcon/></a>如何定义这些优先级的更多信息，请参阅 Google 的<a href="https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit" target="_blank" rel="noopener noreferrer">Chrome 资源优先级和调度<ExternalLinkIcon/></a>。</li>
<li>有关关键请求链、资源大小和下载资源所用时间的数据是从<a href="https://github.com/ChromeDevTools/devtools-protocol" target="_blank" rel="noopener noreferrer">Chrome 远程调试协议中<ExternalLinkIcon/></a>提取的。</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/critical-request-chains/#how-to-reduce-the-effect-of-critical-request-chains-on-performance" target="_blank" rel="noopener noreferrer">如何减少关键请求链对性能的影响<ExternalLinkIcon/></a>：</p>
<ul>
<li>使用关键请求链审计结果首先定位对页面加载影响最大的资源：
<ul>
<li>尽量减少关键资源的数量：消除它们、推迟下载、将它们标记为<code v-pre>async</code>，等等。</li>
<li>优化关键字节数以减少下载时间（往返次数）。</li>
<li>优化剩余关键资源的加载顺序：尽早下载所有关键资产，缩短关键路径长度。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="减少http请求" tabindex="-1"><a class="header-anchor" href="#减少http请求" aria-hidden="true">#</a> 减少http请求</h4>
<ul>
<li>
<p>HTTP连接产生的开销：域名解析—TCP连接—发送请求—等待—下载资源—解析时间。中间有个等待和下载资源，这些都比较消耗时间，所以我们为了解决http产生的开销，尽量让他减少http连接。</p>
<ul>
<li><img src="@source/images/chrome-http.png" alt="">
<ul>
<li>Queueing: 在请求队列中的时间。</li>
<li>Stalled: 从TCP 连接建立完成，到真正可以传输数据之间的时间差，此时间包括代理协商时间。</li>
<li>Proxy negotiation: 与代理服务器连接进行协商所花费的时间。</li>
<li>DNS Lookup: 执行DNS查找所花费的时间，页面上的每个不同的域都需要进行DNS查找。</li>
<li>Initial Connection / Connecting: 建立连接所花费的时间，包括TCP握手/重试和协商SSL。</li>
<li>SSL: 完成SSL握手所花费的时间。</li>
<li>Request sent: 发出网络请求所花费的时间，通常为一毫秒的时间。</li>
<li>Waiting(TFFB): TFFB 是发出页面请求到接收到应答数据第一个字节的时间。</li>
<li>Content Download: 接收响应数据所花费的时间。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/total-byte-weight/#how-the-lighthouse-network-payload-audit-fails" target="_blank" rel="noopener noreferrer">Lighthouse 审计网络负载<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse<ExternalLinkIcon/></a>显示页面请求的所有资源的总大小（以<a href="https://en.wikipedia.org/wiki/Kibibyte" target="_blank" rel="noopener noreferrer">千字节 (KiB)<ExternalLinkIcon/></a>为单位<a href="https://en.wikipedia.org/wiki/Kibibyte" target="_blank" rel="noopener noreferrer">）<ExternalLinkIcon/></a>。最大的请求首先呈现：</li>
</ul>
<p><img src="@source/images/chrome-资源请求.png" alt="Lighthouse 的屏幕截图避免巨大的网络负载审计"></p>
<ul>
<li>根据<a href="https://httparchive.org/reports/state-of-the-web?start=latest#bytesTotal" target="_blank" rel="noopener noreferrer">HTTP 存档数据<ExternalLinkIcon/></a>，网络有效负载的中位数在 1,700 到 1,900 KiB 之间。为了帮助显示最高的有效负载，Lighthouse 会标记总网络请求超过 5,000 KiB 的页面。</li>
</ul>
</li>
<li>
<p>减少HTTP请求的方式：</p>
<ul>
<li>推迟请求，直到需要它们。</li>
<li>资源压缩。</li>
<li>使用缓存。</li>
<li>减少页面中的元素：网页中的的图片、form、flash等等元素都会发出HTTP请求，尽可能的减少页面中非必要的元素，可以减少HTTP请求的次数</li>
<li>图片地图（Image Maps）：也就是图像热点，图像地图就是把一张图片分成若干区域,每个区域指向不同的URL地址，这些区域也称为热点。Image Maps只适用于连续的图标</li>
<li>CSS Sprites(CSS精灵)：图片是增加HTTP请求的最大可能者，把全站的图标都放在一个图像文件中，然后用CSS的background-image和background-position属性定位来显示其中的一小部分</li>
<li>合并css：合并脚本和CSS文件，可以减少了HTTP请求</li>
<li>合并js：少用location.reload()，使用location.reload() 会刷新页面，刷新页面时页面所有资源（css，js，img等）会重新请求服务器；建议使用 <code v-pre>location.href=&quot;当前页url&quot;</code> 代替 location.reload() ，使用 location.href 浏览器会读取本地缓存资源。</li>
<li>动态页面静态化：动态网页实际上并不是独立存在于服务器上的网页文件，只有当用户请求时服务器才返回一个完整的网页
用户访问动态页面需要与数据库服务器进行数据交换</li>
</ul>
</li>
</ul>
<h4 id="避免重定向" tabindex="-1"><a class="header-anchor" href="#避免重定向" aria-hidden="true">#</a> 避免重定向</h4>
<ul>
<li>
<p>重定向会降低页面加载速度。当浏览器请求已重定向的资源时，服务器通常会返回这样的 HTTP 响应：</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">301</span> <span class="token reason-phrase string">Moved Permanently</span></span>
<span class="token header"><span class="token header-name keyword">Location</span><span class="token punctuation">:</span> <span class="token header-value">/path/to/new/location</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>然后浏览器必须在新位置发出另一个 HTTP 请求以检索资源。跨网络的这种额外行程可能会延迟数百毫秒的资源加载。</li>
</ul>
</li>
<li>
<p><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse<ExternalLinkIcon/></a>标记具有多个重定向的页面：</p>
<p><img src="@source/images/chrome-chongdingxiang.png" alt="img"></p>
<ul>
<li>当页面有两个或多个重定向时，该页面无法通过此审核。</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/redirects/#how-to-eliminate-redirects" target="_blank" rel="noopener noreferrer">如何消除重定向<ExternalLinkIcon/></a>:</p>
<ul>
<li>
<p>将指向标记资源的链接指向资源的当前位置。避免重定向<a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/" target="_blank" rel="noopener noreferrer">关键渲染路径<ExternalLinkIcon/></a>所需的资源尤为重要。</p>
</li>
<li>
<p>如果您使用重定向将移动用户转移到您页面的移动版本，请考虑重新设计您的网站以使用<a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive/" target="_blank" rel="noopener noreferrer">响应式设计<ExternalLinkIcon/></a></p>
</li>
</ul>
</li>
</ul>
<h4 id="使用-http2" tabindex="-1"><a class="header-anchor" href="#使用-http2" aria-hidden="true">#</a> 使用 HTTP2</h4>
<ul>
<li>
<p>HTTP2 相比 HTTP1.1 有如下几个优点：</p>
<ul>
<li>
<p>解析速度快：服务器解析 HTTP1.1 的请求时，必须不断地读入字节，直到遇到分隔符 CRLF 为止。而解析 HTTP2 的请求就不用这么麻烦，因为 HTTP2 是基于帧的协议，每个帧都有表示帧长度的字段。</p>
</li>
<li>
<p>多路复用：HTTP1.1 如果要同时发起多个请求，就得建立多个 TCP 连接，因为一个 TCP 连接同时只能处理一个 HTTP1.1 的请求。在 HTTP2 上，多个请求可以共用一个 TCP 连接，这称为多路复用。同一个请求和响应用一个流来表示，并有唯一的流 ID 来标识。 多个请求和响应在 TCP 连接中可以乱序发送，到达目的地后再通过流 ID 重新组建。</p>
</li>
<li>
<p>首部压缩：HTTP2 提供了首部压缩功能。</p>
</li>
<li>
<p>优先级：HTTP2 可以对比较紧急的请求设置一个较高的优先级，服务器在收到这样的请求后，可以优先处理。</p>
</li>
<li>
<p>流量控制：由于一个 TCP 连接流量带宽（根据客户端到服务器的网络带宽而定）是固定的，当有多个请求并发时，一个请求占的流量多，另一个请求占的流量就会少。流量控制可以对不同的流的流量进行精确控制。</p>
</li>
<li>
<p>服务器推送：HTTP2 新增的一个强大的新功能，就是服务器可以对一个客户端请求发送多个响应。除了对最初请求的响应外，服务器还可以额外向客户端推送资源，而无需客户端明确地请求。</p>
</li>
</ul>
</li>
</ul>
<h4 id="静态资源使用-cdn" tabindex="-1"><a class="header-anchor" href="#静态资源使用-cdn" aria-hidden="true">#</a> 静态资源使用 CDN</h4>
<ul>
<li>通过将静态资源(例如javascript，css，图片等等）缓存到离用户很近的相同网络运营商的CDN节点上</li>
<li>使用 CDN 优势：不但能提升用户的访问速度，还能节省服务器的带宽消耗，降低负载</li>
<li>过程：其实这是CDN服务商在全国各个省份部署计算节点，CDN加速将网站的内容缓存在网络边缘,不同地区的用户就会访问到离自己最近的相同网络线路上的CDN节点，当请求达到CDN节点后，节点会判断自己的内容缓存是否有效，如果有效，则立即响应缓存内容给用户，从而加快响应速度。如果CDN节点的缓存失效，它会根据服务配置去我们的内容源服务器获取最新的资源响应给用户，并将内容缓存下来以便响应给后续访问的用户。因此，一个地区内只要有一个用户先加载资源，在CDN中建立了缓存，该地区的其他后续用户都能因此而受益</li>
</ul>
<h4 id="http-缓存" tabindex="-1"><a class="header-anchor" href="#http-缓存" aria-hidden="true">#</a> HTTP 缓存</h4>
<ul>
<li>HTTP 缓存可以加快重复访问时的页面加载时间。</li>
<li>当浏览器请求资源时，提供资源的服务器可以告诉浏览器它应该临时存储或<em>缓存</em>资源多长时间。对于该资源的任何后续请求，浏览器使用其本地副本而不是从网络获取它。</li>
</ul>
<p><strong><a href="https://web.dev/uses-long-cache-ttl/#how-the-lighthouse-cache-policy-audit-fails" target="_blank" rel="noopener noreferrer">Lighthouse 如何审计缓存<ExternalLinkIcon/></a></strong></p>
<ul>
<li><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse<ExternalLinkIcon/></a>标记所有未缓存的静态资源：</li>
</ul>
<p><img src="@source/images/chrome-缓存.png" alt="具有高效缓存策略审计的 Lighthouse Serve 静态资产的屏幕截图"></p>
<ul>
<li>
<p>如果满足以下所有条件，Lighthouse 会认为资源可缓存：</p>
<ul>
<li>资源是字体、图像、媒体文件、脚本或样式表。</li>
<li>资源拥有<code v-pre>200</code>，<code v-pre>203</code>或<code v-pre>206</code> <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" rel="noopener noreferrer">HTTP状态代码<ExternalLinkIcon/></a>。</li>
<li>该资源没有明确的无缓存策略。</li>
</ul>
</li>
<li>
<p>当页面未通过审核时，Lighthouse 会将结果列在一个包含三列的表格中：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th><strong>网址</strong></th>
<th>可缓存资源的位置</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>缓存TTL</strong></td>
<td>资源的当前缓存持续时间</td>
</tr>
<tr>
<td><strong>尺寸</strong></td>
<td>如果标记的资源已被缓存，您的用户将保存的数据的估计</td>
</tr>
</tbody>
</table>
<p><strong>缓存实现</strong></p>
<ul>
<li>现代浏览器都实现了 HTTP 缓存机制。浏览器在初次获取资源后，会根据 HTTP 响应头部的 <code v-pre>Cache-Control</code> 和 <code v-pre>ETag</code> 字段，来决定该资源的缓存策略。</li>
<li><code v-pre>Cache-Control</code> 有多个可能的字段值：
<ul>
<li><code v-pre>no-store</code>：表明任何缓存不得存储该资源，每次请求都会从服务端返回完整的内容。</li>
<li><code v-pre>no-cache</code>：表明必须向服务端发一次请求，该请求头部带有 <code v-pre>If-None-Match</code> 等资源校验信息。服务端将会验证该资源是否被修改过，详细见下文 <code v-pre>ETag</code> 的描述。</li>
<li><code v-pre>public</code>：表明该资源可以被 CDN 或代理等中间人缓存。</li>
<li><code v-pre>private</code>：与 <code v-pre>public</code> 相反，表明任何中间人不得缓存该资源，资源可能与隐私信息相关。</li>
<li><code v-pre>max-age</code>：指定了资源缓存的过期时间（秒），仅当缓存过期后才会向服务端发送请求。</li>
</ul>
</li>
<li><code v-pre>ETag</code> 是由服务端决定的一个资源校验字段。如果浏览器缓存已经过期，那么会向服务端询问该资源是否被修改过。服务端会将 HTTP 请求头部的 <code v-pre>If-None-Match</code> 与 <code v-pre>ETag</code> 进行比对。如果相等，则表明资源并没有被修改过，服务端返回 <code v-pre>304 Not Modified</code>，浏览器可以直接从缓存获取资源，并刷新缓存过期时间。否则就需要返回该资源的完整内容。</li>
<li>为了达到最佳缓存效果，常用的做法是：
<ul>
<li>对于 HTML 文件，设置 <code v-pre>Cache-Control: no-cache</code>。</li>
<li>对于 CSS 和 JavaScript 等静态资源，上线构建的时候在文件名中插入一段仅与文件内容相关的哈希值，并使用 <code v-pre>Cache-Control: max-age=31536000</code> 进行长缓存。</li>
<li>这样的效果是，对于绝大多数静态资源的请求都可以使用缓存来响应，并且仅在文件内容变更时刷新缓存。</li>
</ul>
</li>
</ul>
<p><strong><a href="https://web.dev/uses-long-cache-ttl/#how-to-verify-cached-responses-in-chrome-devtools" target="_blank" rel="noopener noreferrer">如何在 Chrome DevTools 中验证缓存的响应<ExternalLinkIcon/></a></strong></p>
<ul>
<li>
<p>要查看浏览器从其缓存中获取哪些资源，请在 Chrome DevTools 中打开<strong>网络</strong>选项卡：</p>
<ul>
<li>按<code v-pre>Control+Shift+J</code>（或<code v-pre>Command+Option+J</code>在 Mac 上）打开 DevTools。</li>
<li>单击<strong>网络</strong>选项卡。</li>
</ul>
</li>
<li>
<p>Chrome DevTools 中的<strong>Size</strong>列可以帮助您验证资源是否已被缓存：</p>
<ul>
<li><img src="@source/images/chrome-缓存检查.png" alt=""></li>
<li>Chrome 从内存缓存中提供请求最多的资源，速度非常快，但在浏览器关闭时会被清除。</li>
</ul>
</li>
<li>
<p>要验证资源的<code v-pre>Cache-Control</code>标头是否按预期设置，请检查其 HTTP 标头数据：</p>
<ul>
<li>单击请求表的<strong>名称</strong>列下的请求URL 。</li>
<li>单击<strong>标题</strong>选项卡。
<ul>
<li><img src="@source/images/chrome-缓存头.png" alt=""></li>
<li><code v-pre>Cache-Control</code>通过“**标题”**选项卡检查标题。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="渲染优化" tabindex="-1"><a class="header-anchor" href="#渲染优化" aria-hidden="true">#</a> 渲染优化</h3>
<h4 id="渲染机制优化" tabindex="-1"><a class="header-anchor" href="#渲染机制优化" aria-hidden="true">#</a> 渲染机制优化</h4>
<h5 id="创建-pwa-应用" tabindex="-1"><a class="header-anchor" href="#创建-pwa-应用" aria-hidden="true">#</a> 创建 PWA 应用</h5>
<h6 id="使用-app-shell" tabindex="-1"><a class="header-anchor" href="#使用-app-shell" aria-hidden="true">#</a> 使用 App Shell</h6>
<h6 id="添加-骨架屏" tabindex="-1"><a class="header-anchor" href="#添加-骨架屏" aria-hidden="true">#</a> 添加 骨架屏</h6>
<h6 id="使用-service-worker-缓存" tabindex="-1"><a class="header-anchor" href="#使用-service-worker-缓存" aria-hidden="true">#</a> 使用 service worker 缓存</h6>
<h5 id="服务端渲染-ssr" tabindex="-1"><a class="header-anchor" href="#服务端渲染-ssr" aria-hidden="true">#</a> 服务端渲染 SSR</h5>
<h4 id="浏览器渲染优化" tabindex="-1"><a class="header-anchor" href="#浏览器渲染优化" aria-hidden="true">#</a> 浏览器渲染优化</h4>
<p>浏览器渲染时 <a href="####%E5%85%B3%E9%94%AE%E6%B8%B2%E6%9F%93%E8%B7%AF%E5%BE%84">关键渲染路径</a> 构成首屏渲染所必须的关键资源，因此通过缩短关键渲染路径来优化首屏性能。</p>
<h5 id="消除渲染阻塞资源" tabindex="-1"><a class="header-anchor" href="#消除渲染阻塞资源" aria-hidden="true">#</a> 消除渲染阻塞资源</h5>
<p>Lighthouse 报告的“机会”部分列出了阻止页面首次绘制的所有 URL。目标是通过内联关键资源、推迟非关键资源和删除任何未使用的资源来减少这些阻止渲染的 URL 的影响</p>
<p><img src="@source/images/render-block.png" alt=""></p>
<p><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse<ExternalLinkIcon/></a>标记了两种阻止渲染的 URL：脚本和样式表。</p>
<p>一个<code v-pre>&lt;script&gt;</code>标签：</p>
<ul>
<li>是在<code v-pre>&lt;head&gt;</code>文档中。</li>
<li>没有<code v-pre>defer</code>属性。</li>
<li>没有<code v-pre>async</code>属性。</li>
</ul>
<p>一个<code v-pre>&lt;link rel=&quot;stylesheet&quot;&gt;</code>标签：</p>
<ul>
<li>没有<code v-pre>disabled</code>属性。当此属性存在时，浏览器不会下载样式表。</li>
<li>没有<code v-pre>media</code>专门匹配用户设备的属性。<code v-pre>media=&quot;all&quot;</code>被认为是渲染阻塞。</li>
</ul>
<h6 id="如何识别关键资源" tabindex="-1"><a class="header-anchor" href="#如何识别关键资源" aria-hidden="true">#</a> <a href="https://web.dev/render-blocking-resources/#how-to-identify-critical-resources" target="_blank" rel="noopener noreferrer">如何识别关键资源<ExternalLinkIcon/></a></h6>
<p>减少渲染阻塞资源影响的第一步是确定什么是关键的，什么不是。使用Chrome DevTools 中的<a href="https://developer.chrome.com/docs/devtools/coverage/" target="_blank" rel="noopener noreferrer">Coverage 选项卡<ExternalLinkIcon/></a>来识别非关键 CSS 和 JS。当您加载或运行页面时，该选项卡会告诉您使用了多少代码，以及加载了多少代码：</p>
<p><img src="@source/images/chrome-关键资源.png" alt=""></p>
<p>通过仅加载所需的代码和样式来减小页面大小。单击 URL 以在“源”面板中检查该文件。CSS 文件中的样式和 JavaScript 文件中的代码用两种颜色标记：</p>
<ul>
<li>**绿色（关键）：**首次绘制所需的样式；对页面核心功能至关重要的代码。</li>
<li>**红色（非关键）：**适用于不立即可见的内容的样式；代码未在页面的核心功能中使用。</li>
</ul>
<h6 id="非核心代码异步加载" tabindex="-1"><a class="header-anchor" href="#非核心代码异步加载" aria-hidden="true">#</a> 非核心代码异步加载</h6>
<ul>
<li><code v-pre>&lt;script/&gt; </code> 标签 <strong>async 属性：</strong> 异步加载脚本，加载后立即执行。</li>
<li>当浏览器解析到 <code v-pre>&lt;script async&gt;</code> 时，会对该 JavaScript 文件发起异步请求。请求成功后才会暂停 HTML 解析，并立即执行 JavaScript。</li>
<li>在实际项目中容易发现，多个 <code v-pre>&lt;script async&gt;</code> 的执行顺序是不确定的。而且在 JavaScript 执行时，页面的 DOM 可能还未全部构建完成。</li>
<li><code v-pre>&lt;script/&gt; </code> 标签  <strong>defer 属性：</strong> 立即加载脚本，加载完成后不执行，延迟至渲染完成执行脚本。
<ul>
<li>浏览器同样会发起异步请求，但 JavaScript 会延迟到 HTML 解析完毕后依次执行。此时 JavaScript 已经能和完整的 DOM 进行交互了。</li>
</ul>
</li>
<li>动态创建 script 标签替代 <code v-pre>&lt;script/&gt; </code></li>
</ul>
<h6 id="延迟非关键-css-加载" tabindex="-1"><a class="header-anchor" href="#延迟非关键-css-加载" aria-hidden="true">#</a> 延迟非关键 CSS 加载</h6>
<ul>
<li>
<p>通过 <code v-pre>&lt;link rel=&quot;stylesheet&quot;&gt;</code> 引用的 CSS 都会在加载时阻塞页面渲染。但 Web 应用中往往会有一些首屏渲染时用不到的 CSS，如弹框的样式等。为了使这些非关键 CSS 不阻塞页面渲染，我们可以通过别的途径声明 CSS 的加载。</p>
</li>
<li>
<p>通过 <code v-pre>&lt;link rel=&quot;preload&quot;&gt;</code> 预加载我们所需的资源。这里仅需稍作改动，就能满足我们的要求。</p>
<ul>
<li>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- ... --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/index.css<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token keyword">this</span><span class="token punctuation">.</span>onload<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span><span class="token keyword">this</span><span class="token punctuation">.</span>rel<span class="token operator">=</span><span class="token string">'stylesheet'</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- ... --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在 <code v-pre>&lt;link rel=&quot;preload&quot;&gt;</code> 中监听了 <code v-pre>onload</code> 事件，并在 CSS 加载完成后，通过修改 <code v-pre>rel</code> 为 <code v-pre>stylesheet</code> 来将 CSS 应用到页面上，这就绕过了 CSS 会阻塞页面渲染的限制了。在需要考虑浏览器兼容性的情况下，推荐使用 <a href="https://github.com/filamentgroup/loadCSS" target="_blank" rel="noopener noreferrer">loadCSS<ExternalLinkIcon/></a> 来实现非关键 CSS 的加载。</p>
</li>
<li>
<p>对于首屏渲染所必须的关键 CSS，可以考虑通过 <code v-pre>&lt;style&gt;</code> 内联，或使用 HTTP/2 服务端推送的方式来加载，可以节省一次网络请求。</p>
</li>
</ul>
</li>
</ul>
<h5 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame" target="_blank" rel="noopener noreferrer">requestAnimationFrame()<ExternalLinkIcon/></a></h5>
<ul>
<li>
<p>用户对于不流畅的滚动或动画十分敏感，一般要求页面帧率应达到每秒 60 帧。在这个帧率下，每帧的渲染需要在 16ms 内完成。但浏览器还需要花费大约 6ms 的时间将一帧绘制到屏幕上，从而只给我们留下了 10ms 时间生成一帧。</p>
</li>
<li>
<p>JavaScript 可以进行样式更新，而动画则是以 16ms 为间隔的一连串的样式更新组成。最直接的想法是，可以通过 <code v-pre>setInterval()</code> 或递归调用 <code v-pre>setTimeout()</code> 来编写动画，如下代码所示。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> element<span class="token punctuation">.</span>offsetTop <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">'px'</span>
  element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> element<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">'px'</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>render<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span>render<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>上述代码实现了一个性能非常差劲的动画，其效果是使一个绝对定位的元素，从页面左上至右下漂浮。但我们用肉眼就能发现，动画产生了卡顿和掉帧的现象。这是由于 <code v-pre>setTimeout</code> 和 <code v-pre>setInterval</code> 的回调函数会在浏览器渲染两帧之间的任何时间点执行，而定时器的 16ms 又不是特别精确，从而有可能使一次样式变更错过浏览器渲染。</p>
</li>
<li>
<p>为了实现平滑流畅的动画效果，我们应该使用 <code v-pre>requestAnimationFrame()</code> 方法来代替定时器</p>
</li>
</ul>
</li>
<li>
<p><code v-pre>requestAnimationFrame()</code> 方法接收一个回调函数为参数，其回调函数不在浏览器事件循环中调度，而是在浏览器渲染下一帧之前执行，这可以确保动画不会掉帧。<code v-pre>requestAnimationFrame</code> 的回调函数接收一个高精度时间戳 <code v-pre>timestamp</code>，类似于 <code v-pre>performance.now()</code> 的返回值，代表回调被执行的精确时间，其用法通常如下代码所示。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行渲染的具体逻辑</span>
  <span class="token comment">// ...</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>对于需要长时间执行的任务，我们可以尝试把它拆分成多个小任务，然后通过 <code v-pre>requestAnimationFrame()</code> 进行调度，以确保页面的流畅性。上文提到生成一帧的时间应该在 10ms 内，所以保守估计，帧间任务的执行时间最好不要超过 3 ~ 4ms，通常做法如下代码所示。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scheduleWork</span> <span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> currentTimestamp
  <span class="token keyword">while</span> <span class="token punctuation">(</span>currentTimestamp <span class="token operator">-</span> timestamp <span class="token operator">&lt;</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> tasks<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performWork</span><span class="token punctuation">(</span>tasks<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    currentTimestamp <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  tasks<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>scheduleWork<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame" target="_blank" rel="noopener noreferrer">window.requestAnimationFrame MDN<ExternalLinkIcon/></a></p>
<h5 id="requestidlecallback" tabindex="-1"><a class="header-anchor" href="#requestidlecallback" aria-hidden="true">#</a> requestIdleCallback()</h5>
<ul>
<li>
<p>**<code v-pre>window.requestIdleCallback()</code>**方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间<code v-pre>timeout</code>，则有可能为了在超时前执行函数而打乱执行顺序。</p>
</li>
<li>
<p><code v-pre>requestIdleCallback</code> 的回调函数接收一个参数 <code v-pre>deadline</code>，包含 <code v-pre>timeRemaining()</code> 方法和 <code v-pre>didTimeout</code> 属性。<code v-pre>timeRemaining()</code> 返回一个高精度时间戳，表示还剩多少时间执行任务。事件应该在 50ms 内处理，所以 <code v-pre>timeRemaining()</code> 的初始值为 50ms。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scheduleWork</span> <span class="token punctuation">(</span><span class="token parameter">deadline</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>deadline<span class="token punctuation">.</span><span class="token function">timeRemaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> tasks<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performWork</span><span class="token punctuation">(</span>tasks<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  tasks<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">requestIdleCallback</span><span class="token punctuation">(</span>scheduleWork<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">requestIdleCallback</span><span class="token punctuation">(</span>scheduleWork<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>假设每个任务都能在 5ms 内完成，那么我们可以设定，当剩余空闲时间大于 5ms 时，继续处理剩余任务，否则就优先确保页面能及时响应用户操作，并将剩余的任务重新调度。</p>
</li>
<li>
<p>由于我们并不知道浏览器何时才会空闲，因此 <code v-pre>requestIdleCallback</code> 回调函数的执行时机是不确定的。但它提供了一个超时机制，能确保在等待超时后执行回调函数，此时 <code v-pre>timeRemaining()</code> 为 <code v-pre>0</code>，而 <code v-pre>didTimeout</code> 为 <code v-pre>true</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">requestIdleCallback</span><span class="token punctuation">(</span>scheduleWork<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过我们最好不要指定超时时间，因为这还是有可能导致页面无法及时响应用户操作。另外，由于不确定的执行时机，我们绝不应该在回调函数里操作 DOM，或进行任何样式变更，而应该放在 <code v-pre>requestAnimationFrame</code> 的回调函数中执行。</p>
</li>
</ul>
</li>
</ul>
<h5 id="使用-web-workers" tabindex="-1"><a class="header-anchor" href="#使用-web-workers" aria-hidden="true">#</a> 使用 Web Workers</h5>
<ul>
<li>对于需要长时间执行的任务，另一个解决方案是使用 Web Workers</li>
</ul>
<h5 id="优化绘制与合成" tabindex="-1"><a class="header-anchor" href="#优化绘制与合成" aria-hidden="true">#</a> 优化绘制与合成</h5>
<ul>
<li>优化绘制与合成减少重绘。修改元素几何形态相关的样式属性，会触发页面重新布局。</li>
<li>对于绘制来说，修改绝大多数样式属性都会导致页面重绘，这很难避免。仅有的例外是 <code v-pre>transform</code> 和 <code v-pre>opacity</code>，这是由于它们可以仅由合成器操作图层来实现。另外，合成器运行在单独的线程里，即使浏览器主线程被阻塞，其效果也不会受到影响。所以，<code v-pre>transform</code> 和 <code v-pre>opacity</code> 非常适合用于实现动画效果，但我们仍需要通过 <code v-pre>will-change</code> 为它们创建独立的图层，避免影响其他图层的绘制。</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.moving-element</span> <span class="token punctuation">{</span>
  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">,</span> opacity<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请参阅<a href="https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count" target="_blank" rel="noopener noreferrer">坚持只使用合成器的属性并管理层数<ExternalLinkIcon/></a>和<a href="https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/" target="_blank" rel="noopener noreferrer">高性能动画<ExternalLinkIcon/></a>。</p>
<h5 id="延迟加载插件" tabindex="-1"><a class="header-anchor" href="#延迟加载插件" aria-hidden="true">#</a> 延迟加载插件</h5>
<ul>
<li>
<p><a href="https://web.dev/third-party-javascript/" target="_blank" rel="noopener noreferrer">插件/第三方资源<ExternalLinkIcon/></a>通常用于展示广告或视频以及与社交媒体集成。默认方法是在页面加载后立即加载第三方资源，但这可能会不必要地减慢页面加载速度。如果第三方内容不重要，可以通过<a href="https://web.dev/fast/#lazy-load-images-and-video" target="_blank" rel="noopener noreferrer">延迟加载<ExternalLinkIcon/></a>来降低这种性能成本。</p>
</li>
<li>
<p>Lighthouse 如何检测可延迟的插件嵌入:</p>
<ul>
<li>
<p>Lighthouse 寻找可以延迟的第三方插件，例如社交按钮小部件或视频嵌入（例如，YouTube 嵌入式播放器）。有关可延期产品和可用外观的数据<a href="https://github.com/patrickhulce/third-party-web/" target="_blank" rel="noopener noreferrer">在第三方网络中维护<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>如果页面加载属于这些第三方嵌入之一的资源，审核将失败。</p>
<p><img src="@source/images/chrome-第三方资源.png" alt="Lighthouse 第三方外观审核突出了 Vimeo 嵌入式播放器和 Drift 实时聊天。"></p>
</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/third-party-facades/#how-to-defer-third-parties-with-a-facade" target="_blank" rel="noopener noreferrer">如何延迟加载插件<ExternalLinkIcon/></a></p>
<ul>
<li>不要将第三方嵌入直接添加到您的 HTML，而是使用看起来类似于实际嵌入的插件的静态元素替换插件样式。当发生交互时加载实际插件，过程：
<ul>
<li>加载时：向页面添加插件样式的静态元素。</li>
<li>鼠标悬停时：预连接到第三方资源。</li>
<li>单击时：用第三方插件替换静态元素。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>示例：使用 youtube 图片替代实际视频，当鼠标悬停时加载视频资源，单击时才使用视频替换图片</p>
<p><img src="@source/images/chrome-第三方资源示例.png" alt=""></p>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://lavas-project.github.io/pwa-book/chapter08/2-rendering-performance.html" target="_blank" rel="noopener noreferrer">渲染性能<ExternalLinkIcon/></a></p>
<h3 id="服务端优化" tabindex="-1"><a class="header-anchor" href="#服务端优化" aria-hidden="true">#</a> 服务端优化</h3>
<p>Lighthouse 报告的 Opportunities 部分报告 Time to First Byte，即用户浏览器接收页面内容的第一个字节所需的时间：</p>
<p><img src="@source/images/chorme-ttfb.png" alt=""></p>
<ul>
<li><a href="https://web.dev/time-to-first-byte/#slow-server-response-times-affect-performance" target="_blank" rel="noopener noreferrer">缓慢的服务器响应时间会影响性能<ExternalLinkIcon/></a>
<ul>
<li>当浏览器等待服务器响应主文档请求的时间超过 600 毫秒时，此审核将失败。用户不喜欢页面加载时间过长。服务器响应时间慢是页面加载时间过长的可能原因之一。</li>
<li>当用户在 Web 浏览器中导航到某个 URL 时，浏览器会发出网络请求以获取该内容。您的服务器接收请求并返回页面内容。</li>
<li>服务器可能需要做很多工作才能返回包含用户想要的所有内容的页面。例如，如果用户正在查看他们的订单历史记录，服务器需要从数据库中获取每个用户的历史记录，然后将该内容插入到页面中。</li>
<li>优化服务器以尽快完成这样的工作是减少用户等待页面加载时间的一种方法。</li>
</ul>
</li>
</ul>
<h4 id="nginx-开启gzip-压缩" tabindex="-1"><a class="header-anchor" href="#nginx-开启gzip-压缩" aria-hidden="true">#</a> Nginx 开启Gzip 压缩</h4>
<ul>
<li>
<p>Nginx实现资源压缩的原理是通过ngx_http_gzip_module模块拦截请求，并对需要做gzip的类型做gzip，ngx_http_gzip_module是Nginx默认集成的，不需要重新编译，直接开启即可。</p>
</li>
<li>
<p>Nginx 配置：在nginx.conf中加入以下内容。保存并重启 nginx。</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span><span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">32</span> <span class="token number">4K</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">6</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">100</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_types</span> application/javascript text/css text/xml</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_disable</span> <span class="token string">"MSIE [1-6]\."</span></span><span class="token punctuation">;</span> <span class="token comment">#配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）</span>
    <span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>gzip配置的常用参数:</p>
<p>gzip on|off; #是否开启gzip</p>
<p>gzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)</p>
<p>gzip_comp_level [1-9] #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)</p>
<p>gzip_disable #正则匹配UA 什么样的Uri不进行gzip</p>
<p>gzip_min_length 200 # 开始压缩的最小长度</p>
<p>gzip_http_version 1.0|1.1 # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)</p>
<p>gzip_proxied # 设置请求者代理服务器,该如何缓存内容</p>
<p>gzip_types text/plain application/xml # 对哪些类型的文件用压缩 如txt,xml,html ,css</p>
<p>gzip_vary on|off # 是否传输gzip压缩标志</p>
</blockquote>
</li>
<li>
<p>检查：通过F12看请求的响应头部，强制刷新页面（为了避免缓存，需要强制刷新）</p>
<ul>
<li><img src="@source/images/gzip.png" alt="image-20210719101848079">
<ul>
<li>Content-Encoding:gzip 说明开启了gzip压缩</li>
<li>Transfet-Encoding:chunked 说明压缩后分块传输</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://www.cnblogs.com/Renyi-Fan/p/11047490.html" target="_blank" rel="noopener noreferrer">nginx中如何设置gzip<ExternalLinkIcon/></a></p>
<h3 id="构建优化" tabindex="-1"><a class="header-anchor" href="#构建优化" aria-hidden="true">#</a> 构建优化</h3>
<p><strong>参考资料</strong></p>
<p><a href="http://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/" target="_blank" rel="noopener noreferrer">深入浅出 webpack-优化<ExternalLinkIcon/></a></p>
<h3 id="图片资源优化" tabindex="-1"><a class="header-anchor" href="#图片资源优化" aria-hidden="true">#</a> 图片资源优化</h3>
<p>Lighthouse 报告的“机会”部分列出了所有未优化的图像，并可能以<a href="https://en.wikipedia.org/wiki/Kibibyte" target="_blank" rel="noopener noreferrer">千字节 (KiB) 为单位<ExternalLinkIcon/></a>节省。优化这些图像，使页面加载速度更快并消耗更少的数据：</p>
<p><img src="@source/images/chrome-images.png" alt=""></p>
<ul>
<li><a href="https://web.dev/uses-optimized-images/#how-lighthouse-flags-images-as-optimizable" target="_blank" rel="noopener noreferrer">Lighthouse 如何将图像标记为可优化<ExternalLinkIcon/></a>
<ul>
<li>Lighthouse 收集页面上所有的 JPEG 或 BMP 图片，将每张图片的压缩级别设置为 85，然后将原始版本与压缩版本进行比较。如果潜在节省为 4KiB 或更大，Lighthouse 会将图像标记为可优化。</li>
</ul>
</li>
</ul>
<p><strong>常见的图片格式及使用场景</strong></p>
<ul>
<li>
<p><strong>BMP</strong>，是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常是较大的文件。</p>
</li>
<li>
<p><strong>GIF</strong>是无损的、采用索引色的点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具有支持动画以及透明的优点。但是GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积较小的场景。</p>
</li>
<li>
<p><strong>JPEG</strong>是有损的、采用直接色的点阵图。JPEG的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较GIF更大。</p>
</li>
<li>
<p><strong>PNG-8</strong>是无损的、使用索引色的点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8还支持透明度的调节，而GIF并不支持。除非需要动画的支持，否则没有理由使用GIF而不是PNG-8。</p>
</li>
<li>
<p><strong>PNG-24</strong>是无损的、使用直接色的点阵图。PNG-24的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24格式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。</p>
</li>
<li>
<p><strong>SVG</strong>是无损的矢量图。SVG是矢量图意味着SVG图片由直线和曲线以及绘制它们的方法组成。当放大SVG图片时，看到的还是线和曲线，而不会出现像素点。这意味着SVG图片在放大时，不会失真，所以它非常适合用来绘制Logo、Icon等。</p>
</li>
<li>
<p><strong>WebP</strong>是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。</p>
</li>
</ul>
<p><strong>图片格式比较</strong></p>
<ul>
<li>在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；</li>
<li>在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；</li>
<li>WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。</li>
</ul>
<h4 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h4>
<h4 id="字体图标代替图片图标" tabindex="-1"><a class="header-anchor" href="#字体图标代替图片图标" aria-hidden="true">#</a> 字体图标代替图片图标</h4>
<h4 id="用视频替换动画-gif" tabindex="-1"><a class="header-anchor" href="#用视频替换动画-gif" aria-hidden="true">#</a> 用视频替换动画 GIF</h4>
<p>Lighthouse 报告的“机会”部分列出了所有动画 GIF，以及通过将这些 GIF 转换为视频所实现的估计节省的秒数：</p>
<p><img src="@source/images/chrome-gif.png" alt="Lighthouse 使用视频格式进行动画内容审核的截图"></p>
<ul>
<li>
<p>请参阅<a href="https://web.dev/performance-scoring" target="_blank" rel="noopener noreferrer">Lighthouse 性能评分<ExternalLinkIcon/></a>帖子，了解如何计算页面的整体性能评分。</p>
</li>
<li>
<p><a href="https://web.dev/efficient-animated-content/#why-you-should-replace-animated-gifs-with-video" target="_blank" rel="noopener noreferrer">为什么你应该用视频替换动画 GIF<ExternalLinkIcon/></a></p>
<ul>
<li>大型 GIF 无法提供动画内容。通过将大型 GIF 转换为视频，您可以节省大量用户的带宽。考虑将 MPEG4/WebM 视频用于动画，将 PNG/WebP 用于静态图像而不是 GIF，以节省网络字节。</li>
</ul>
</li>
<li>
<p>参考：<a href="https://web.dev/efficient-animated-content/" target="_blank" rel="noopener noreferrer">为动画内容使用视频格式<ExternalLinkIcon/></a></p>
</li>
</ul>
<h4 id="调整图片大小" tabindex="-1"><a class="header-anchor" href="#调整图片大小" aria-hidden="true">#</a> 调整图片大小</h4>
<p>Lighthouse 报告的“机会”部分列出了页面中尺寸不合适的所有图像，以及以<a href="https://en.wikipedia.org/wiki/Kibibyte" target="_blank" rel="noopener noreferrer">千字节 (KiB)<ExternalLinkIcon/></a>为单位的潜在节省。调整这些图像的大小以保存数据并缩短页面加载时间：</p>
<p><img src="@source/images/chrome-图片大小.png" alt=""></p>
<ul>
<li><a href="https://web.dev/uses-responsive-images/#how-lighthouse-calculates-oversized-images" target="_blank" rel="noopener noreferrer">Lighthouse 如何计算超大图像<ExternalLinkIcon/></a>
<ul>
<li>对于页面上的每个图像，Lighthouse 会将渲染图像的大小与实际图像的大小进行比较。渲染大小还考虑了设备像素比。如果渲染的大小至少比实际大小小 4KiB，则图像未通过审核。</li>
</ul>
</li>
</ul>
<h5 id="图像-cdn" tabindex="-1"><a class="header-anchor" href="#图像-cdn" aria-hidden="true">#</a> <a href="https://web.dev/image-cdns/" target="_blank" rel="noopener noreferrer">图像 CDN<ExternalLinkIcon/></a></h5>
<ul>
<li>将图像 CDN 视为用于转换图像的 Web 服务 API</li>
</ul>
<h5 id="响应式图片" tabindex="-1"><a class="header-anchor" href="#响应式图片" aria-hidden="true">#</a> 响应式图片</h5>
<ul>
<li>响应式图片的优点是浏览器能够根据屏幕大小自动加载合适的图片。
<ul>
<li>
<p>通过 <code v-pre>picture</code> 实现</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner_w1000.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 801px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner_w800.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 800px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>banner_w800.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过 <code v-pre>@media</code> 实现</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 769px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.bg</span> <span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg1080.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.bg</span> <span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg768.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>参阅提供<a href="https://web.dev/serve-responsive-images" target="_blank" rel="noopener noreferrer">响应式图像<ExternalLinkIcon/></a>以了解更多信息。</p>
</li>
</ul>
</li>
</ul>
<h5 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩" aria-hidden="true">#</a> 图片压缩</h5>
<ul>
<li>
<p>例如 JPG 格式的图片，100% 的质量和 90% 质量的通常看不出来区别，尤其是用来当背景图的时候。我经常用 PS 切背景图时， 将图片切成 JPG 格式，并且将它压缩到 60% 的质量，基本上看不出来区别。</p>
</li>
<li>
<p>压缩方法有两种：</p>
<ul>
<li>一是通过 webpack 插件 <code v-pre>image-webpack-loader</code></li>
<li>二是通过在线网站进行压缩。
<ul>
<li>tinypng</li>
</ul>
</li>
</ul>
</li>
</ul>
<h5 id="使用基于矢量的图像格式" tabindex="-1"><a class="header-anchor" href="#使用基于矢量的图像格式" aria-hidden="true">#</a> 使用基于矢量的图像格式</h5>
<ul>
<li>使用基于矢量的图像格式，如 SVG。使用有限数量的代码，SVG 图像可以缩放到任何大小。请参阅<a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive/images#replace_complex_icons_with_svg" target="_blank" rel="noopener noreferrer">用 SVG 替换复杂图标<ExternalLinkIcon/></a>以了解更多信息。</li>
</ul>
<h4 id="使用-webp-图像" tabindex="-1"><a class="header-anchor" href="#使用-webp-图像" aria-hidden="true">#</a> <a href="https://web.dev/serve-images-webp" target="_blank" rel="noopener noreferrer">使用 WebP 图像<ExternalLinkIcon/></a></h4>
<ul>
<li>WebP 的优势体现在它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都相当优秀、稳定和统一。</li>
<li>AVIF 和 WebP 是图像格式，与较旧的 JPEG 和 PNG 对应物相比，它们具有出色的压缩和质量特性。以这些格式而不是 JPEG 或 PNG 对您的图像进行编码意味着它们将加载得更快并消耗更少的蜂窝数据。</li>
</ul>
<p><strong>参考资料：</strong></p>
<p><a href="https://www.zhihu.com/question/27201061" target="_blank" rel="noopener noreferrer">WebP 相对于 PNG、JPG 有什么优势？<ExternalLinkIcon/></a></p>
<h3 id="js-编码优化" tabindex="-1"><a class="header-anchor" href="#js-编码优化" aria-hidden="true">#</a> JS 编码优化</h3>
<h4 id="减少-javascript-执行时间" tabindex="-1"><a class="header-anchor" href="#减少-javascript-执行时间" aria-hidden="true">#</a> 减少 JavaScript 执行时间</h4>
<ul>
<li>
<p>当您的 JavaScript 需要很长时间来执行时，它会以多种方式降低您的页面性能：</p>
<ul>
<li>
<p><strong>网络成本</strong></p>
<p>更多的字节等于更长的下载时间。</p>
</li>
<li>
<p><strong>解析和编译成本</strong></p>
<p>JavaScript 在主线程上被解析和编译。当主线程繁忙时，页面无法响应用户输入。</p>
</li>
<li>
<p><strong>执行成本</strong></p>
<p>JavaScript 也在主线程上执行。如果您的页面在真正需要之前运行了大量代码，这也会延迟您的<a href="https://web.dev/interactive" target="_blank" rel="noopener noreferrer">Time To Interactive<ExternalLinkIcon/></a>，这是与用户如何看待您的页面速度相关的关键指标之一。</p>
</li>
<li>
<p><strong>内存成本</strong></p>
<p>如果您的 JavaScript 持有大量引用，则可能会消耗大量内存。页面在消耗大量内存时会出现卡顿或缓慢。内存泄漏会导致您的页面完全冻结。</p>
</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/bootup-time/#how-to-speed-up-javascript-execution" target="_blank" rel="noopener noreferrer">如何加快 JavaScript 执行速度<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://web.dev/reduce-javascript-payloads-with-code-splitting" target="_blank" rel="noopener noreferrer">通过实现代码拆分，只发送用户需要的代码<ExternalLinkIcon/></a>。</li>
<li><a href="https://web.dev/reduce-network-payloads-using-text-compression" target="_blank" rel="noopener noreferrer">缩小和压缩您的代码<ExternalLinkIcon/></a>。</li>
<li><a href="https://web.dev/remove-unused-code" target="_blank" rel="noopener noreferrer">删除未使用的代码<ExternalLinkIcon/></a>。</li>
<li><a href="https://web.dev/apply-instant-loading-with-prpl" target="_blank" rel="noopener noreferrer">通过使用 PRPL 模式缓存您的代码来减少网络旅行<ExternalLinkIcon/></a>。</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/bootup-time/#how-the-lighthouse-javascript-execution-time-audit-fails" target="_blank" rel="noopener noreferrer">Lighthouse 如何审计 JavaScript 执行时间<ExternalLinkIcon/></a></p>
<ul>
<li>当 JavaScript 执行时间超过 2 秒时，<a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse 会<ExternalLinkIcon/></a>显示警告。当执行时间超过 3.5 秒时审计失败：</li>
</ul>
<p><img src="@source/images/chrome-js.png" alt="Lighthouse Reduce JavaScript 执行时间审计截图"></p>
</li>
</ul>
<h4 id="避免过大的-dom" tabindex="-1"><a class="header-anchor" href="#避免过大的-dom" aria-hidden="true">#</a> 避免过大的 DOM</h4>
<p>大型 DOM 树可以通过多种方式降低页面性能：</p>
<ul>
<li>
<p><strong>网络效率和负载性能</strong></p>
<p>大型 DOM 树通常包含许多在用户首次加载页面时不可见的节点，这会不必要地增加用户的数据成本并减慢加载时间。</p>
</li>
<li>
<p><strong>运行时性能</strong></p>
<p>当用户和脚本与您的页面交互时，浏览器必须不断<a href="https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations?utm_source=lighthouse&amp;utm_medium=cli" target="_blank" rel="noopener noreferrer">重新计算节点的位置和样式<ExternalLinkIcon/></a>。大型 DOM 树与复杂的样式规则相结合会严重减慢渲染速度。</p>
</li>
<li>
<p><strong>内存性能</strong></p>
<p>如果您的 JavaScript 使用通用查询选择器，例如<code v-pre>document.querySelectorAll('li')</code>，您可能会在不知不觉中存储对大量节点的引用，这可能会压倒用户设备的内存容量。</p>
</li>
</ul>
<p><a href="https://web.dev/dom-size/#how-the-lighthouse-dom-size-audit-fails" target="_blank" rel="noopener noreferrer">Lighthouse 如何审查 DOM 大小<ExternalLinkIcon/></a></p>
<ul>
<li>
<p><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse<ExternalLinkIcon/></a>报告页面的总 DOM 元素、页面的最大 DOM 深度及其最大子元素：<img src="@source/images/chrome-dom.png" alt="Lighthouse 的截图避免了过多的 DOM 大小审计"></p>
<ul>
<li>Lighthouse 使用 DOM 树标记页面：
<ul>
<li>总共有 1,500 多个节点。</li>
<li>具有大于 32 个节点的深度。</li>
<li>有一个超过 60 个子节点的父节点。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="https://web.dev/dom-size/#how-to-optimize-the-dom-size" target="_blank" rel="noopener noreferrer">如何优化 DOM 大小<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>一般来说，寻找方法只在需要时创建 DOM 节点，并在不再需要时销毁节点。</p>
</li>
<li>
<p>如果您当前正在传送大型 DOM 树，请尝试加载您的页面并手动注意显示哪些节点。也许您可以从最初加载的文档中删除未显示的节点，并仅在相关的用户交互（例如滚动或单击按钮）之后创建它们。</p>
</li>
<li>
<p>如果您在运行时创建 DOM 节点，<a href="https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#dom" target="_blank" rel="noopener noreferrer">Subtree Modification DOM Change Breakpoints<ExternalLinkIcon/></a>可以帮助您确定节点何时被创建。</p>
</li>
<li>
<p>如果您无法避免使用大型 DOM 树，另一种提高渲染性能的方法是简化您的 CSS 选择器。有关更多信息，请参阅 Google 的<a href="https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations" target="_blank" rel="noopener noreferrer">减少样式计算的范围和复杂性<ExternalLinkIcon/></a></p>
</li>
</ul>
</li>
</ul>
<h3 id="css-编码优化" tabindex="-1"><a class="header-anchor" href="#css-编码优化" aria-hidden="true">#</a> CSS 编码优化</h3>
<h4 id="压缩css" tabindex="-1"><a class="header-anchor" href="#压缩css" aria-hidden="true">#</a> 压缩CSS</h4>
<p>缩小 CSS 文件可以提高页面加载性能。CSS 文件通常比它们需要的要大。例如：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/* Header background should match brand colors. */</span>
<span class="token selector">h1</span> <span class="token punctuation">{</span>  <span class="token property">background-color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">h2</span> <span class="token punctuation">{</span>  <span class="token property">background-color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以简化为：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h1, h2</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从浏览器的角度来看，这两个代码示例在功能上是等效的，但第二个示例使用的字节更少。Minifiers 可以通过删除空格进一步提高字节效率：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h1,h2</span><span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span>#000000<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一些压缩器使用巧妙的技巧来最小化字节。例如，颜色值<code v-pre>#000000</code>可以进一步减少到<code v-pre>#000</code>，这是它的速记等价物。</p>
<p>Lighthouse 根据它在您的 CSS 中找到的注释和空白字符来估计潜在的节省。这是一个保守的估计。如前所述，缩小器可以执行巧妙的优化（例如减少<code v-pre>#000000</code>到<code v-pre>#000</code>）以进一步减小文件大小。因此，如果您使用压缩器，您可能会看到比 Lighthouse 报告的更多的节省。</p>
<h3 id="其他编码优化" tabindex="-1"><a class="header-anchor" href="#其他编码优化" aria-hidden="true">#</a> 其他编码优化</h3>
<h4 id="优化-js-第三方库引入" tabindex="-1"><a class="header-anchor" href="#优化-js-第三方库引入" aria-hidden="true">#</a> 优化 JS 第三方库引入</h4>
<ul>
<li>
<p>要将广告网络、社交媒体按钮、A/B 测试或分析服务添加到您的页面，您通常需要将第三方脚本添加到您的 HTML 中。这些<a href="https://web.dev/third-party-javascript/" target="_blank" rel="noopener noreferrer">第三方脚本会显着影响您的页面加载性能<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p><a href="https://web.dev/third-party-summary/#how-the-lighthouse-audit-for-third-party-code-fails" target="_blank" rel="noopener noreferrer">第三方代码的 Lighthouse 审计如何失败<ExternalLinkIcon/></a></p>
<ul>
<li>Lighthouse 标记具有阻止<a href="https://developer.mozilla.org/en-US/docs/Glossary/Main_thread" target="_blank" rel="noopener noreferrer">主线程<ExternalLinkIcon/></a>250 毫秒或更长时间的第三方代码的页面：<img src="@source/images/chrome-第三方库.png" alt="Lighthouse 截图 减少第三方代码审计的影响"></li>
<li>第三方脚本是托管在与您使用 Lighthouse 审核的 URL 域不同的域上的任何脚本。随着页面加载，Lighthouse 计算每个第三方脚本阻塞主线程的时间。如果总阻塞时间大于 250 毫秒，则审计失败。</li>
</ul>
</li>
<li>
<p>优化第三方引入脚本方式：</p>
<ul>
<li>在标签上使用<code v-pre>async</code> 或<code v-pre>defer</code>属性<code v-pre>&lt;script&gt;</code></li>
<li>使用预链接和预加载</li>
<li>懒加载</li>
<li>第三方 CDN 托管
<ul>
<li>第三方供应商通常会提供他们托管的 JavaScript 文件的 URL，通常位于<a href="https://en.wikipedia.org/wiki/Content_delivery_network" target="_blank" rel="noopener noreferrer">内容交付网络 (CDN) 上<ExternalLinkIcon/></a>。这种方法的好处是您可以快速开始——只需复制和粘贴 URL——并且没有维护开销。第三方供应商处理服务器配置和脚本更新。</li>
<li>但是因为它们与您的其他资源不在同一来源，所以从公共 CDN 加载文件会产生网络成本。浏览器需要执行 DNS 查找，建立新的 HTTP 连接，并在安全来源上与供应商的服务器执行 SSL 握手。</li>
<li>当使用来自第三方服务器的文件时，您几乎无法控制缓存。依赖其他人的缓存策略可能会导致不必要地频繁从网络重新获取脚本</li>
</ul>
</li>
<li>自托管第三方脚本：自托管第三方脚本是一个选项，可让您更好地控制脚本的加载过程。
<ul>
<li>优点：
<ul>
<li>减少 DNS 查找和往返时间。</li>
<li>改进<a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching" target="_blank" rel="noopener noreferrer">HTTP 缓存<ExternalLinkIcon/></a>标头。</li>
<li>利用<a href="https://developers.google.com/web/fundamentals/performance/http2/" target="_blank" rel="noopener noreferrer">HTTP/2 服务器推送<ExternalLinkIcon/></a>。</li>
</ul>
</li>
<li>缺点：脚本可能会过时，并且在 API 更改或安全修复时不会自动更新。</li>
</ul>
</li>
<li>使用 service worker 缓存来自第三方服务器的脚本</li>
</ul>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://web.dev/third-party-summary/" target="_blank" rel="noopener noreferrer">Reduce the impact of third-party code<ExternalLinkIcon/></a></p>
<h4 id="beacon-数据上报" tabindex="-1"><a class="header-anchor" href="#beacon-数据上报" aria-hidden="true">#</a> Beacon  数据上报</h4>
<ul>
<li>
<p>我们经常需要尝试在卸载（unload）文档之前向 Web 服务上报性能数据。过早的发送数据可能导致错过收集数据的机会。但对于开发者来说保证在文档卸载期间发送数据一直是一个困难，因为用户代理通常会忽略在 unload 事件处理器中产生的异步 XMLHttpRequest。</p>
</li>
<li>
<p>为了解决这个问题，通常要在 unload 或者 beforeunload 事件处理器中发起一个同步 XMLHttpRequest 来发送数据。同步的 XMLHttpRequest 迫使用户代理延迟卸载文档，使得下一个导航出现的更晚，而下一个页面对于这种较差的载入表现无能为力。</p>
</li>
<li>
<p>使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Beacon_API" target="_blank" rel="noopener noreferrer">navigator.sendBeacon()<ExternalLinkIcon/></a> 方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'unload'</span><span class="token punctuation">,</span> logData<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">logData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span><span class="token string">"/log"</span><span class="token punctuation">,</span> analyticsData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>考虑到此方法的兼容性，应该在浏览器不支持 navigator.sendBeacon 时使用其他方法发送数，例如同步的 XMLHttpRequest。</p>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://web.dev/fast/" target="_blank" rel="noopener noreferrer">Fast load times<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/6844904153869713416#heading-15" target="_blank" rel="noopener noreferrer">前端性能优化指南<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/121056616" target="_blank" rel="noopener noreferrer">前端性能优化 24 条建议<ExternalLinkIcon/></a></p>
<h2 id="性能优化实践" tabindex="-1"><a class="header-anchor" href="#性能优化实践" aria-hidden="true">#</a> 性能优化实践</h2>
<p><strong>参考资料</strong></p>
<p><a href="https://mp.weixin.qq.com/s/_7Mk39yWEkxOrnyYU_wvpQ" target="_blank" rel="noopener noreferrer">从页面加载到数据请求，前端页面性能优化实践分享<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/YqHHbsxg8SbbtrY8gwhS9w" target="_blank" rel="noopener noreferrer">从实际项目入手，如何监测性能问题、如何解决<ExternalLinkIcon/></a></p>
</div></template>



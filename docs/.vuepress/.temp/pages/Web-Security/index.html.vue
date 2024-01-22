<template><div><h1 id="web-安全" tabindex="-1"><a class="header-anchor" href="#web-安全" aria-hidden="true">#</a> WEB 安全</h1>
<h2 id="总览" tabindex="-1"><a class="header-anchor" href="#总览" aria-hidden="true">#</a> 总览</h2>
<p><img src="@source/images/web-anqun.png" alt=""></p>
<p><img src="@source/images/web-anquan2.png" alt=""></p>
<h2 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h2>
<p><img src="@source/images/tongyuncelve.png" alt=""></p>
<h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2>
<p><img src="@source/images/kuayu.png" alt=""></p>
<h3 id="跨域解决方案" tabindex="-1"><a class="header-anchor" href="#跨域解决方案" aria-hidden="true">#</a> 跨域解决方案</h3>
<p><img src="@source/images/kuayu-fangan.png" alt=""></p>
<p><img src="@source/images/kuayu-fangan1.png" alt=""></p>
<p><img src="@source/images/kuayu-fangan2.png" alt=""></p>
<p><img src="@source/images/kuayu-fangan3.png" alt=""></p>
<p><img src="@source/images/kuayu-fangan4.png" alt=""></p>
<p><img src="@source/images/kuayu-fangan5.png" alt=""></p>
<p><img src="@source/images/kuayu-fangan6.png" alt=""></p>
<ul>
<li>参考资料：<a href="https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html" target="_blank" rel="noopener noreferrer">浏览器同源政策及其规避方法<ExternalLinkIcon/></a></li>
</ul>
<h2 id="xss-跨站脚本攻击" tabindex="-1"><a class="header-anchor" href="#xss-跨站脚本攻击" aria-hidden="true">#</a> XSS(跨站脚本攻击)</h2>
<p><img src="@source/images/xss1.png" alt=""></p>
<p><img src="@source/images/xss2.png" alt=""></p>
<p><img src="@source/images/xss3.png" alt=""></p>
<h2 id="csp-内容安全策略" tabindex="-1"><a class="header-anchor" href="#csp-内容安全策略" aria-hidden="true">#</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP" target="_blank" rel="noopener noreferrer">CSP<ExternalLinkIcon/></a>(内容安全策略)</h2>
<ul>
<li>CSP指的是内容安全策略，它的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截由浏览器自己来实现。</li>
<li>通常有两种方式来开启CSP:
<ul>
<li>一种是设置HTTP首部中的 <code v-pre>Content-Security-Policy</code></li>
<li>一种是设置meta标签的方式 <code v-pre>&lt;metahttp-equiv=&quot;Content-Security-Policy&quot;&gt;</code></li>
</ul>
</li>
</ul>
<h2 id="csrf-跨站请求伪造" tabindex="-1"><a class="header-anchor" href="#csrf-跨站请求伪造" aria-hidden="true">#</a> CSRF(跨站请求伪造)</h2>
<p><img src="@source/images/scrf.png" alt=""></p>
<h2 id="点击劫持" tabindex="-1"><a class="header-anchor" href="#点击劫持" aria-hidden="true">#</a> 点击劫持</h2>
<p><strong>概念：</strong></p>
<ul>
<li>点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击的网站通过  <code v-pre>iframe</code> 嵌套的方式嵌入自己的网页中，并将 <code v-pre>iframe</code> 设置为透明，在页面中透出一个按钮诱导用户点击。</li>
</ul>
<p><strong>如何预防？</strong></p>
<ul>
<li>在http相应头中设置<code v-pre>X-FRAME-OPTIONS</code>来防御用<code v-pre>iframe</code>嵌套的点击劫持攻击。通过不同的值，可以规定页面在特定的一些情况才能作为iframe来使用。</li>
</ul>
<p><strong>参考资料：</strong></p>
<p><a href="https://www.jianshu.com/p/251704d8ff18" target="_blank" rel="noopener noreferrer">《web安全之--点击劫持攻击与防御技术简介》<ExternalLinkIcon/></a></p>
</div></template>



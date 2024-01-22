<template><div><h1 id="前端存储" tabindex="-1"><a class="header-anchor" href="#前端存储" aria-hidden="true">#</a> 前端存储</h1>
<h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> <strong>分类</strong></h2>
<p><img src="@source/images/cunchu1.png" alt=""></p>
<ul>
<li><strong>存储技术发展史</strong></li>
</ul>
<p><img src="@source/images/cunchu2.png" alt=""></p>
<ul>
<li><strong>存储技术介绍</strong></li>
</ul>
<p><img src="@source/images/cunchu3.png" alt=""></p>
<h2 id="localstorage-sessionstorage" tabindex="-1"><a class="header-anchor" href="#localstorage-sessionstorage" aria-hidden="true">#</a> LocalStorage &amp;&amp; sessionStorage</h2>
<ul>
<li>localStorage 有同源限制，因此不能跨域存取。
<ul>
<li>解决方案：通过<code v-pre>window.postMessage</code>，读写其他窗口的 LocalStorage 。使用参考<a href="https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html" target="_blank" rel="noopener noreferrer">浏览器同源政策及其规避方法<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2>
<p><img src="@source/images/cookiets.png" alt=""></p>
<ul>
<li>
<p>cookie 同源限制：Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。</p>
</li>
<li>
<p>两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置<code v-pre>document.domain</code>共享 Cookie。</p>
<ul>
<li>A网页是<code v-pre>http://w1.example.com/a.html</code>，B网页是<code v-pre>http://w2.example.com/b.html</code>，那么只要设置相同的<code v-pre>document.domain</code>，两个网页就可以共享Cookie。</li>
</ul>
<blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>domain <span class="token operator">=</span> <span class="token string">'example.com'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p>现在，A网页通过脚本设置一个 Cookie。</p>
<blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">"test1=hello"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p>B网页就可以读到这个 Cookie。</p>
<blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> allCookie <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
</li>
<li>
<p>服务器也可以在设置Cookie的时候，指定Cookie的所属域名为一级域名，比如<code v-pre>.example.com</code>。</p>
<blockquote>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Set-Cookie</span><span class="token punctuation">:</span> <span class="token header-value">key=value; domain=.example.com; path=/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<p>这样的话，二级域名和三级域名不用做任何设置，都可以读取这个Cookie。</p>
</li>
</ul>
<p><strong>常见问题</strong></p>
<blockquote>
<p>服务器代理转发时，该如何处理 cookie？</p>
</blockquote>
<ul>
<li>
<p>服务器端可以使用 Set-Cookie 的响应头部来配置 cookie 信息。</p>
</li>
<li>
<p>一条 cookie 包括了 5 个属性值 expires、domain、path、secure、HttpOnly。其中 expires 指定了 cookie 失 效的时间，domain 是域名、path 是路径，domain 和 path 一起限制了 cookie 能够被哪些 url 访问。secure 规定了 cookie 只能在确保安全的情况下传输，HttpOnly 规定了这个 cookie 只能被服务器访问，不能使用 js 脚本访问。</p>
</li>
<li>
<p>在发生 xhr 的跨域请求的时候，即使是同源下的 cookie，也不会被自动添加到请求头部，除非显示地规定。</p>
</li>
</ul>
<h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h2>
<p><img src="@source/images/session.png" alt=""></p>
<h2 id="浏览器缓存机制" tabindex="-1"><a class="header-anchor" href="#浏览器缓存机制" aria-hidden="true">#</a> 浏览器缓存机制</h2>
<p><img src="@source/images/浏览器缓存.png" alt=""></p>
<h4 id="缓存位置" tabindex="-1"><a class="header-anchor" href="#缓存位置" aria-hidden="true">#</a> 缓存位置</h4>
<p>从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。</p>
<ul>
<li>Service Worker</li>
<li>Memory Cache</li>
<li>Disk Cache</li>
<li>Push Cache</li>
</ul>
<p><strong>Service Worker</strong></p>
<p>Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。<strong>Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的</strong>。</p>
<p>Service Worker 实现缓存功能一般分为三个步骤：首先需要先注册 Service Worker，然后监听到 install 事件以后就可以缓存需要的文件，那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据。</p>
<p>当 Service Worker 没有命中缓存的时候，我们需要去调用 fetch 函数获取数据。也就是说，如果我们没有在 Service Worker 命中缓存的话，会根据缓存查找优先级去查找数据。但是不管我们是从 Memory Cache 中还是从网络请求中获取的数据，浏览器都会显示我们是从 Service Worker 中获取的内容。</p>
<p><strong>Memory Cache</strong></p>
<p>Memory Cache 也就是内存中的缓存，主要包含的是当前中页面中已经抓取到的资源,例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快,内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。<strong>一旦我们关闭 Tab 页面，内存中的缓存也就被释放了</strong>。</p>
<p>**那么既然内存缓存这么高效，我们是不是能让数据都存放在内存中呢？**这是不可能的。计算机中的内存一定比硬盘容量小得多，操作系统需要精打细算内存的使用，所以能让我们使用的内存必然不多。</p>
<p>当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于内存缓存<img src="@source/images/缓存.png" alt=""></p>
<p>内存缓存中有一块重要的缓存资源是preloader相关指令（例如 <code v-pre>&lt;linkrel=&quot;prefetch&quot;&gt;</code>）下载的资源。总所周知preloader的相关指令已经是页面优化的常见手段之一，它可以一边解析js/css文件，一边网络请求下一个资源。</p>
<p>需要注意的事情是，<strong>内存缓存在缓存资源时并不关心返回资源的HTTP缓存头Cache-Control是什么值，同时资源的匹配也并非仅仅是对URL做匹配，还可能会对Content-Type，CORS等其他特征做校验</strong>。</p>
<p><strong>Disk Cache</strong></p>
<p>Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，<strong>比之 Memory Cache 胜在容量和存储时效性上</strong>。</p>
<p>在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。绝大部分的缓存都来自 Disk Cache，关于 HTTP 的协议头中的缓存字段，我们会在下文进行详细介绍。</p>
<p>**浏览器会把哪些文件丢进内存中？哪些丢进硬盘中？**关于这点，网上说法不一，不过以下观点比较靠得住：</p>
<ul>
<li>对于大文件来说，大概率是不存储在内存中的，反之优先</li>
<li>当前系统内存使用率高的话，文件优先存储进硬盘</li>
</ul>
<p><strong>Push Cache</strong></p>
<p>Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。<strong>它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂</strong>，在Chrome浏览器中只有5分钟左右，同时它也并非严格执行HTTP头中的缓存指令。</p>
<p>Push Cache 在国内能够查到的资料很少，也是因为 HTTP/2 在国内不够普及。这里推荐阅读 <code v-pre>JakeArchibald</code>的 HTTP/2 push is tougher than I thought 这篇文章，文章中的几个结论：</p>
<ul>
<li>所有的资源都能被推送，并且能够被缓存,但是 Edge 和 Safari 浏览器支持相对比较差</li>
<li>可以推送 no-cache 和 no-store 的资源</li>
<li>一旦连接被关闭，Push Cache 就被释放</li>
<li>多个页面可以使用同一个HTTP/2的连接，也就可以使用同一个Push Cache。这主要还是依赖浏览器的实现而定，出于对性能的考虑，有的浏览器会对相同域名但不同的tab标签使用同一个HTTP连接。</li>
<li>Push Cache 中的缓存只能被使用一次</li>
<li>浏览器可以拒绝接受已经存在的资源推送</li>
<li>你可以给其他域名推送资源</li>
</ul>
<p>如果以上四种缓存都没有命中的话，那么只能发起请求来获取资源了。</p>
<p>那么为了性能上的考虑，大部分的接口都应该选择好缓存策略，<strong>通常浏览器缓存策略分为两种：强缓存和协商缓存，并且缓存策略都是通过设置 HTTP Header 来实现的</strong>。</p>
<h4 id="缓存机制" tabindex="-1"><a class="header-anchor" href="#缓存机制" aria-hidden="true">#</a> 缓存机制</h4>
<ul>
<li>浏览器的缓存机制指的是通过在一段时间内保留已接收到的web资源的一个副本，如果在资源的有效时间内，发起了对这个资源的再一次请求，那么浏览器会直接使用缓存的副本，而不是向服务器发起请求。</li>
<li>使用浏览器缓存可以有效地提高页面的打开速度，减少不必要的网络带宽的消耗；</li>
</ul>
<p><img src="@source/images/http-huancun.png" alt=""></p>
<p><img src="@source/images/http-huancun1.png" alt=""></p>
<h4 id="强制缓存" tabindex="-1"><a class="header-anchor" href="#强制缓存" aria-hidden="true">#</a> <strong>强制缓存</strong></h4>
<p><img src="@source/images/qinagzhihuancun1.png" alt=""></p>
<p><img src="@source/images/qinagzhihuancun2.png" alt=""></p>
<p><img src="@source/images/qinagzhihuancun3.png" alt=""></p>
<h4 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> <strong>协商缓存</strong></h4>
<p><img src="@source/images/xieshanghuncun.png" alt=""></p>
<p><img src="@source/images/xieshanghuncun2.png" alt=""></p>
<p><strong>浏览器缓存存在问题：</strong></p>
<ul>
<li>问题：ajax能提高页面载入的速度主要的原因是通过ajax减少了重复数据的载入，也就是说在载入数据的同时将数据缓存到内存中，一旦数据被加载其中，只要我们没有刷新页面，这些数据就会一直被缓存在内存中，当我们提交 的URL与历史的URL一致时，就不需要提交给服务器，也就是不需要从服务器上面去获取数据，虽然这样降低了服务器的负载提高了用户的体验，但是我们不能获取最新的数据。为了保证我们读取的信息都是最新的，我们就需要禁止他的缓存功能。</li>
<li>解决方案：
<ul>
<li>1、在ajax发送请求前加上 anyAjaxObj.setRequestHeader(&quot;If-Modified-Since&quot;,&quot;0&quot;)。</li>
<li>2、在ajax发送请求前加上 anyAjaxObj.setRequestHeader(&quot;Cache-Control&quot;,&quot;no-cache&quot;)。</li>
<li>3、在URL后面加上一个随机数： &quot;fresh=&quot; + Math.random();。</li>
<li>4、在URL后面加上时间搓：&quot;nowtime=&quot; + new Date().getTime();。</li>
<li>5、如果是使用jQuery，直接这样就可以了$.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。</li>
</ul>
</li>
</ul>
<h4 id="常见缓存问题" tabindex="-1"><a class="header-anchor" href="#常见缓存问题" aria-hidden="true">#</a> 常见缓存问题</h4>
<h4 id="白屏问题" tabindex="-1"><a class="header-anchor" href="#白屏问题" aria-hidden="true">#</a> 白屏问题</h4>
<ul>
<li>
<p>问题描述：</p>
<blockquote>
<p>在浏览器设置”默认打开上次关闭选项“时，使用浏览器打开项目，关闭项目后再重新打开浏览器</p>
<p>在不刷新页面时项目将一直显示白屏</p>
</blockquote>
</li>
<li>
<p>原因分析：</p>
<blockquote>
<p>在使用vue-cli脚手架构建完项目，项目完成后，需打包上线。
默认打包方式则是 npm build，然后项目根目录会生成 dist 文件夹。服务端将该文件夹替换线上即可。</p>
<p>但是当第n（n&gt;1）次上线后，由于在用户端会默认缓存index.html入口文件，而由于vue打包生成的css/js都是哈希值，跟上次的文件名都不同，因此会出现找不到css/js的情况，导致白屏的产生。</p>
</blockquote>
</li>
<li>
<p>解决方案：</p>
<ul>
<li>
<p>方案1： <strong>meta标签清除缓存</strong></p>
<ul>
<li>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cache-control<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-cache,max-age=0, must-revalidate,no-store<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pragma<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-cache<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Expires<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cache<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-cache<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>解释：</p>
<ul>
<li>
<p>http 1.0 控制字段：</p>
<ul>
<li>
<p>Pragma:</p>
<ul>
<li>
<p>用于设定禁止浏览器从本地机的缓存中调阅页面内容</p>
</li>
<li>
<p>它用来向后兼容只支持 HTTP/1.0 协议的缓存服务器，那时候 HTTP/1.1 协议中的 Cache-Control 还没有出来</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>http 1.1控制字段：</p>
<ul>
<li>Expires: 相应头过期时间，用于设定网页的到期时间；Cache-control中设置max-age;则该属性会被忽略</li>
<li>Cache-control：指定请求和响应遵循的缓存机制，在请求消息或响应消息中设置Cache-Control并不会修改另一个消息处理过程中的缓存处理过程；该字段的优先级要比Expires优先级高
<ul>
<li>常见的取值：</li>
<li>no-chche:表示无论服务端有没有设置Cache-control,都必须重新追根到源服务器进行校验，源服务器未变化返回304</li>
<li>must-revalidate:告诉浏览器/缓存服务器；在本地文件过期之前可以使用本地文件；本地文件一旦过期需要去源服务器进行有效性校验；如果有缓存服务器且该资源未过有效期则命中缓存服务器并返回200；如果过期切源服务器未发生更改；则教研后返回304；</li>
<li>max-age:缓存的内容将在多少秒后失效,相对于请求时间来说的；max-age=0便是无论服务端如何设置；在重新获取资源之前；先检验ETag/Last-Modified;在设置max-age=0或no-cache后；在资源无更新的情况下访问都会返回304</li>
<li>private:客户端可以缓存</li>
<li>public:客户端和代理服务器都可缓存</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>参考资料</strong>：</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching" target="_blank" rel="noopener noreferrer">HTTP 缓存 MDN<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/UOSvXZcB0LF6p6HTk1pqlQ" target="_blank" rel="noopener noreferrer">彻底理解浏览器的缓存机制<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/KNFXOwM1bcwcLVP98L7Qpg" target="_blank" rel="noopener noreferrer">深入理解浏览器的缓存机制<ExternalLinkIcon/></a></p>
<p><a href="http://web.h3399.cn/meta.htm#attr-name" target="_blank" rel="noopener noreferrer">meta元素<ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/hanshuai/p/12002202.html" target="_blank" rel="noopener noreferrer">Nginx针对前端静态资源的缓存处理<ExternalLinkIcon/></a></p>
<h2 id="service-workers-缓存" tabindex="-1"><a class="header-anchor" href="#service-workers-缓存" aria-hidden="true">#</a> Service Workers 缓存</h2>
<ul>
<li>Service Workers  缓存：Service Workers  能够拦截 HTTP 请求，进入任何传入的 HTTP 请求，并决定想要如何响应。在你的 Service Worker 中，可以编写逻辑来决定想要缓存的资源，以及需要满足什么条件和资源需要缓存多久。</li>
</ul>
<ul>
<li>与 HTTP 缓存比较：Web 服务器可以使用 Expires 首部来通知 Web 客户端，它可以使用资源的当前副本，直到指定的“过期时间”。反过来，浏览器可以缓存此资源，并且只有在有效期满后才会再次检查新版本。使用 HTTP 缓存意味着你要依赖服务器来告诉你何时缓存资源和何时过期。</li>
</ul>
<ul>
<li>
<p>**注册：**使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorkerContainer/register" target="_blank" rel="noopener noreferrer"><code v-pre>ServiceWorkerContainer.register()</code><ExternalLinkIcon/></a> 方法在该站点注册。其内容在 sw.js 文件中，可以在注册成功后执行。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">'serviceWorker'</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'/sw.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>**安装：**sw.js 监听 install 事件、<code v-pre>e.waitUntil()</code>等待 service worker 安装完成、Cache API 开启了一个缓存，并且将我们的应用所需要缓存的文件全部添加进去，当我们再次加载这些资源时，由请求 URL 确定的对应缓存就是可用的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'install'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[Service Worker] Install'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  e<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>cacheName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">cache</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'[Service Worker] Caching all: app shell and content'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>contentToCache<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>API 介绍：
<ul>
<li><code v-pre>e.waitUntil()</code>：等待 service worker 安装完成。<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ExtendableEvent/waitUntil" target="_blank" rel="noopener noreferrer"><code v-pre>ExtendableEvent.waitUntil</code><ExternalLinkIcon/></a>方法告诉事件分发器该事件仍在进行。这个方法也可以用于检测进行的任务是否成功。在服务工作线程中，这个方法告诉浏览器事件一直进行，直至 promise 解决，浏览器不应该在事件中的异步操作完成之前终止服务工作线程。
<ul>
<li><code v-pre>caches</code> 是一个特殊的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CacheStorage" target="_blank" rel="noopener noreferrer"><code v-pre>CacheStorage</code><ExternalLinkIcon/></a> 对象，它能在 Service Worker 指定的范围内提供数据存储的能力。因为 Web Storage 的执行是同步的，在 Service Worker 中使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API" target="_blank" rel="noopener noreferrer">Web Storage<ExternalLinkIcon/></a> 将不会有效果，所以我们使用 Cache API 作为替代。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>激活：</strong> 监听<code v-pre>activate</code> 事件。删除那些我们已经不需要的文件或者做一些清理工作。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'activate'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentCaches <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">PRECACHE</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">//遍历缓存,查找不存在于自定义缓存列表中的浏览器缓存，并清除</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    caches<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">cacheNames</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">//查找缓存</span>
      <span class="token keyword">return</span> cacheNames<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">cacheName</span> <span class="token operator">=></span> <span class="token operator">!</span>currentCaches<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>cacheName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">cachesToDelete</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>cachesToDelete<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">cacheToDelete</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>cacheToDelete<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//清除缓存</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>**响应请求：**通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FetchEvent" target="_blank" rel="noopener noreferrer"><code v-pre>FetchEvent</code><ExternalLinkIcon/></a> 事件去响应请求。通过使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/FetchEvent/respondWith" target="_blank" rel="noopener noreferrer"><code v-pre>FetchEvent.respondWith</code><ExternalLinkIcon/></a> 方法，你可以任意修改对于这些请求的响应。拦截页面请求，现在缓存中查找，未找到才去请求。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'fetch'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Handling fetch event for'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">//事件处理程序侦听 fetch 事件。当触发时返回一个promise给受控页面。</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>
    <span class="token comment">// promise在 Cache 对象中查询第一个匹配URL请求。如果没有发现匹配项，该代码将转而从网络获取响应。</span>
    caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Found response in cache:'</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No response found in cache. About to fetch from network...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Response from network is:'</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Fetching failed:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">throw</span> error<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>参考资料：</p>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API" target="_blank" rel="noopener noreferrer">Service Worker API MDN<ExternalLinkIcon/></a></li>
</ul>
</div></template>



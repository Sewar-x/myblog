<template><div><h1 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h1>
<h2 id="浏览器组成" tabindex="-1"><a class="header-anchor" href="#浏览器组成" aria-hidden="true">#</a> 浏览器组成</h2>
<p><img src="@source/images/liulanqi-zucheng.png" alt=""></p>
<h2 id="浏览器内核" tabindex="-1"><a class="header-anchor" href="#浏览器内核" aria-hidden="true">#</a> 浏览器内核</h2>
<p><img src="@source/images/liulanqi-neihe.png" alt=""></p>
<h2 id="浏览器进程" tabindex="-1"><a class="header-anchor" href="#浏览器进程" aria-hidden="true">#</a> 浏览器进程</h2>
<p><img src="@source/images/liulanqi-jincheng.png" alt=""></p>
<h2 id="渲染进程" tabindex="-1"><a class="header-anchor" href="#渲染进程" aria-hidden="true">#</a> 渲染进程</h2>
<p><img src="@source/images/liulanqi-xiancheng.png" alt=""></p>
<p><strong>线程之间关系</strong></p>
<p><img src="@source/images/liulanqi-xiancheng2.png" alt=""></p>
<p><img src="@source/images/liulanqi-xiancheng3.png" alt=""></p>
<p><strong>常见问题</strong></p>
<p><img src="@source/images/liulanqi-wenti.png" alt=""></p>
<h2 id="js-引擎" tabindex="-1"><a class="header-anchor" href="#js-引擎" aria-hidden="true">#</a> JS 引擎</h2>
<p><img src="@source/images/jsyingqing2.png" alt=""></p>
<p><img src="@source/images/jsyingqing.png" alt=""></p>
<h2 id="输入url到页面展示过程" tabindex="-1"><a class="header-anchor" href="#输入url到页面展示过程" aria-hidden="true">#</a> 输入url到页面展示过程</h2>
<h3 id="总流程" tabindex="-1"><a class="header-anchor" href="#总流程" aria-hidden="true">#</a> 总流程</h3>
<p><img src="@source/images/url-pase1.png" alt=""></p>
<p><img src="@source/images/url-pase2.png" alt=""></p>
<p><img src="@source/images/url-pase3.png" alt=""></p>
<h3 id="url-解析" tabindex="-1"><a class="header-anchor" href="#url-解析" aria-hidden="true">#</a> url 解析</h3>
<p>url 解析发生在浏览器中, 解析输入浏览器地址栏中的 url 过程.</p>
<p><strong>总体流程</strong></p>
<p><img src="@source/images/http-0.png" alt=""></p>
<h4 id="解析url" tabindex="-1"><a class="header-anchor" href="#解析url" aria-hidden="true">#</a> 解析url</h4>
<p><img src="@source/images/http-1.png" alt=""></p>
<h4 id="查找-http-缓存" tabindex="-1"><a class="header-anchor" href="#查找-http-缓存" aria-hidden="true">#</a> 查找 HTTP 缓存</h4>
<p><img src="@source/images/http缓存.png" alt=""></p>
<ul>
<li>详细过程查看[浏览器缓存机制](./### 浏览器缓存机制)</li>
</ul>
<h3 id="网络分层传输" tabindex="-1"><a class="header-anchor" href="#网络分层传输" aria-hidden="true">#</a> 网络分层传输</h3>
<p>在进行页面的网络加载过程，就是网络是通信过程，其中包括通信对象和通信协议。</p>
<ul>
<li>
<p>分层管理模型：<img src="@source/images/osi2.png" alt=""></p>
</li>
<li>
<p>OSI 七层通信模型: <img src="@source/images/osi.png" alt=""></p>
</li>
<li>
<p>发送端与接受端之间传输过程，每一层加上该层所属首部字段，解析时去掉首部字段：</p>
<p><img src="@source/images/tcp-ip.png" alt=""></p>
</li>
</ul>
<h4 id="准备-http-报文" tabindex="-1"><a class="header-anchor" href="#准备-http-报文" aria-hidden="true">#</a> 准备 HTTP 报文</h4>
<ul>
<li>当需要发起网络请求时，浏览器需要准备 HTTP 消息。</li>
</ul>
<h5 id="http-协议" tabindex="-1"><a class="header-anchor" href="#http-协议" aria-hidden="true">#</a> HTTP 协议</h5>
<ul>
<li>
<p>概念：</p>
<ul>
<li>HTTP 是超文本传输协议，它定义了客户端和服务器之间交换报文的格式和方式。</li>
<li>它使用 TCP 作为传 输层协议，保证了数据传输的可靠性。</li>
<li>默认使用 80 端口。</li>
</ul>
</li>
<li>
<p>特点：</p>
<ul>
<li>
<p>无状态的协议。HTTP 是一个无状态的协议，HTTP 服务器不会保存关于客户的任何信息。</p>
<ul>
<li>使用 cookie 状态管理，弥补 HTTP  无状态缺点。</li>
</ul>
</li>
<li>
<p>非持续连接：服务器必须为每一个请求的对象建立和维护 一个全新的连接。在 HTTP1.0 以前使用的非持续的连接。</p>
<p><img src="@source/images/http-非持续链接.png" alt="image-20210706115424882"></p>
</li>
</ul>
</li>
<li>
<p>HTTP 的两种连接模式：持续连接 和 非持续连接。</p>
<ul>
<li>持续连接：TCP 连接默认不关闭，可以被多个请求复用。HTTP1.1 以后默认采用的是持续的连接。
<ul>
<li><img src="@source/images/http-tcp.png" alt="image-20210706115738082"></li>
<li>使用：在请求时，加上 Connection: keep-a live 来要求服务器不要关闭 TCP 连接。</li>
<li>特点：只要客户端和服务端没有任意一端没有提出断开链接，则保持 TCP 链接状态。</li>
<li>优点：避免每次建 立 TCP 连接三次握手时所花费的时间。</li>
<li>目前对于同一个域，大多数浏 览器支持 同时建立 6 个持久连接。</li>
</ul>
</li>
<li>非持续连接：服务器必须为每一个请求的对象建立和维护 一个全新的连接。</li>
</ul>
</li>
<li>
<p>HTTP 缺点：</p>
<ul>
<li>HTTP 报文使用<strong>明文方式发送</strong>，可能被第三方窃听。</li>
<li>HTTP 报文可能被第三方截取后修改通信内容，接收方没有办法发现报文 内容的修改。</li>
<li>HTTP 还存在认证的问题，第三方可以冒充他人参与通信。</li>
</ul>
</li>
</ul>
<h5 id="请求报文内容" tabindex="-1"><a class="header-anchor" href="#请求报文内容" aria-hidden="true">#</a> 请求报文内容</h5>
<ul>
<li>
<p>HTTP 报文有两种，一种是请求报文，一种是响应报文。</p>
<p><img src="@source/images/http-报文.png" alt="image-20210706143538394"></p>
</li>
<li>
<p>请求报文：<img src="@source/images/http请求报文.png" alt=""></p>
</li>
<li>
<p>查看 HTTP 报头信息: 打开Chrome浏览器，在浏览器中任意位置右击；点击“检查”，打开浏览器内置的开发者调试平台；点击“<strong>Network</strong>”选项卡</p>
<ul>
<li><img src="@source/images/http-header.png" alt="image-20210706144440626"></li>
<li>HTTP Request Header 请求头对照表</li>
</ul>
<table>
<thead>
<tr>
<th>Header</th>
<th>解释</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>Accept</td>
<td>指定客户端能够接收的内容类型</td>
<td>Accept: text/plain, text/html</td>
</tr>
<tr>
<td>Accept-Charset</td>
<td>浏览器可以接受的字符编码集。</td>
<td>Accept-Charset: iso-8859-5</td>
</tr>
<tr>
<td>Accept-Encoding</td>
<td>指定浏览器可以支持的web服务器返回内容压缩编码类型。</td>
<td>Accept-Encoding: compress, gzip</td>
</tr>
<tr>
<td>Accept-Language</td>
<td>浏览器可接受的语言</td>
<td>Accept-Language: en,zh</td>
</tr>
<tr>
<td>Accept-Ranges</td>
<td>可以请求网页实体的一个或者多个子范围字段</td>
<td>Accept-Ranges: bytes</td>
</tr>
<tr>
<td>Authorization</td>
<td>HTTP授权的授权证书</td>
<td>Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</td>
</tr>
<tr>
<td>Cache-Control</td>
<td>指定请求和响应遵循的缓存机制</td>
<td>Cache-Control: no-cache</td>
</tr>
<tr>
<td>Connection</td>
<td>表示是否需要持久连接。（HTTP 1.1默认进行持久连接）</td>
<td>Connection: close</td>
</tr>
<tr>
<td>Cookie</td>
<td>HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。</td>
<td>Cookie: $Version=1; Skin=new;</td>
</tr>
<tr>
<td>Content-Length</td>
<td>请求的内容长度</td>
<td>Content-Length: 348</td>
</tr>
<tr>
<td>Content-Type</td>
<td>请求的与实体对应的MIME信息</td>
<td>Content-Type: application/x-www-form-urlencoded</td>
</tr>
<tr>
<td>Date</td>
<td>请求发送的日期和时间</td>
<td>Date: Tue, 15 Nov 2010 08:12:31 GMT</td>
</tr>
<tr>
<td>Expect</td>
<td>请求的特定的服务器行为</td>
<td>Expect: 100-continue</td>
</tr>
<tr>
<td>From</td>
<td>发出请求的用户的Email</td>
<td>From: user@email.com</td>
</tr>
<tr>
<td>Host</td>
<td>指定请求的服务器的域名和端口号</td>
<td>Host: www.zcmhi.com</td>
</tr>
<tr>
<td>If-Match</td>
<td>只有请求内容与实体相匹配才有效</td>
<td>If-Match: “737060cd8c284d8af7ad3082f209582d”</td>
</tr>
<tr>
<td>If-Modified-Since</td>
<td>如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码</td>
<td>If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT</td>
</tr>
<tr>
<td>If-None-Match</td>
<td>如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变</td>
<td>If-None-Match: “737060cd8c284d8af7ad3082f209582d”</td>
</tr>
<tr>
<td>If-Range</td>
<td>如果实体未改变，服务器发送客户端丢失的部分，否则发送整个实体。参数也为Etag</td>
<td>If-Range: “737060cd8c284d8af7ad3082f209582d”</td>
</tr>
<tr>
<td>If-Unmodified-Since</td>
<td>只在实体在指定时间之后未被修改才请求成功</td>
<td>If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT</td>
</tr>
<tr>
<td>Max-Forwards</td>
<td>限制信息通过代理和网关传送的时间</td>
<td>Max-Forwards: 10</td>
</tr>
<tr>
<td>Pragma</td>
<td>用来包含实现特定的指令</td>
<td>Pragma: no-cache</td>
</tr>
<tr>
<td>Proxy-Authorization</td>
<td>连接到代理的授权证书</td>
<td>Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</td>
</tr>
<tr>
<td>Range</td>
<td>只请求实体的一部分，指定范围</td>
<td>Range: bytes=500-999</td>
</tr>
<tr>
<td>Referer</td>
<td>先前网页的地址，当前请求网页紧随其后,即来路</td>
<td>Referer: http://www.zcmhi.com/archives/71.html</td>
</tr>
<tr>
<td>TE</td>
<td>客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息</td>
<td>TE: trailers,deflate;q=0.5</td>
</tr>
<tr>
<td>Upgrade</td>
<td>向服务器指定某种传输协议以便服务器进行转换（如果支持）</td>
<td>Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11</td>
</tr>
<tr>
<td>User-Agent</td>
<td>User-Agent的内容包含发出请求的用户信息</td>
<td>User-Agent: Mozilla/5.0 (Linux; X11)</td>
</tr>
<tr>
<td>Via</td>
<td>通知中间网关或代理服务器地址，通信协议</td>
<td>Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)</td>
</tr>
<tr>
<td>Warning</td>
<td>关于消息实体的警告信息</td>
<td>Warn: 199 Miscellaneous warning</td>
</tr>
</tbody>
</table>
</li>
</ul>
<h5 id="uri-和-url" tabindex="-1"><a class="header-anchor" href="#uri-和-url" aria-hidden="true">#</a> URI 和 URL</h5>
<ul>
<li>URI: Uniform Resource Identifier 指的是统一资源标识符
<ul>
<li>URI 指的是统一资源标识符，用唯一的标识来确定一个资源，它是一种抽象的定义，也就是说， 不管使用什么方法来定义，只要能唯一的标识一个资源，就可以称为 URI。</li>
<li>格式:<img src="@source/images/uri.png" alt="image-20210706141548949"></li>
</ul>
</li>
<li>URL: Uniform Resource Location 指的是统一资源定位符</li>
<li>URN: Universal Resource Name 指的是统一资源名称
<ul>
<li>URL 和 URN 是 URI 的子集，URL 可 以理解为使用地址来标识资源，URN 可以理解为使用名称来标识资源</li>
</ul>
</li>
</ul>
<h5 id="mime-类型" tabindex="-1"><a class="header-anchor" href="#mime-类型" aria-hidden="true">#</a> MIME 类型</h5>
<ul>
<li><strong>媒体类型</strong>（通常称为 <strong>Multipurpose Internet Mail Extensions</strong> 或 <strong>MIME</strong> 类型 ）是一种标准，用来表示文档、文件或字节性质和格式。它在<a href="https://tools.ietf.org/html/rfc6838" target="_blank" rel="noopener noreferrer">IETF RFC 6838<ExternalLinkIcon/></a>中进行了定义和标准化。</li>
<li>详细类型参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank" rel="noopener noreferrer">MIME 类型 MDN<ExternalLinkIcon/></a></li>
</ul>
<h5 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h5>
<ul>
<li>
<p>请求方法表示请求访问服务器的类型。 HTTP/1.0 和 HTTP/1.1 支持的方法有以下这些，浏览器默认发起 GET 请求，如果是使用脚本发起的请求，以脚本中指定的请求方法为准。</p>
<p><img src="@source/images/http-协议版本.png" alt="image.png"></p>
</li>
<li>
<p>options 方法：</p>
<ul>
<li>OPTIONS 请求与 HEAD 类似，一般也是用于客户端查看服务器的性能。</li>
<li>这个方法会请求服务 器返回该资源所支持的所有 HTTP 请 求方法，该方法会用'*'来代替资源名称，向服务器发送 OPTIONS 请求，可以测试服务器功能 是否正常。</li>
<li>JS 的 XMLHttpRequest 对象进行 CORS 跨域资源共享时，对于复杂请求，就是使用 OPTIONS 方法发送嗅探请求，以 判断是否有对指定资源的访问权限。</li>
</ul>
</li>
</ul>
<p><strong>常见问题：</strong></p>
<blockquote>
<p>get 请求传参长度的误区?</p>
</blockquote>
<ul>
<li>误区：我们经常说 get 请求参数的大小存在限制，而 post 请求的参数大小是无限制的。
<ul>
<li>实际上 HTTP 协议从未规定 GET/POST 的请求长度限制是多少。</li>
<li>对 get 请求参数的限制是来源于浏览器或 web 服务器，浏览器或 web 服务器限制了 url 的长度。</li>
<li>为了明确这个概念，我们必须再次强调下面几点:
<ul>
<li>HTTP 协议未规定 GET 和 POST 的长度限制</li>
<li>GET 的最大长度显示是因为浏览器和 web 服务器限制了 URI 的</li>
<li>不同的浏览器和 WEB 服务器，限制的最大长度不一</li>
<li>要支持 IE，则最大长度为 2083byte; 若只支持 Chrome，则最大长度 8182 byte</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>get 和 post 区别？</p>
</blockquote>
<ul>
<li>应用场景不同:
<ul>
<li>GET 请求是一个幂等的请求，一般 Get 请求用于对服务器资源不会 产生影响的场景，比如说请求一个网 页。</li>
<li>Post 不是一个幂等的请求，一般用于对服务器资源会产生影响的情景。比如注册用户 这一类的操作。</li>
<li>因为不同的应用场景，所以浏览器一般会对 Get 请求缓存，但很少对 Post 请求缓存.</li>
</ul>
</li>
<li>发送的报文格式不同:
<ul>
<li>Get 请求的报文中实体部分为空
<ul>
<li>Get 请求也可以将请求的参数放入 url 中向服务器发送，这样的做法相对于 Post 请求来说，一个方面是不太安全， 因为请求的 url 会被保留在历史记录中。并且浏览器由于对 url 有一个长度上的限制，所以 会影响 get 请求发送数据时 的长度。这个限制是浏览器规定的，并不是 RFC 规定的。</li>
</ul>
</li>
<li>Post 请求的报文中实体部分 一般为向服务器发送的数据, Post 的参数传递支持更多的数据类型</li>
</ul>
</li>
</ul>
<blockquote>
<p>get 和 post 请求在缓存方面的区别?</p>
</blockquote>
<ul>
<li>缓存一般只适用于那些不会更新服务端数据的请求。</li>
<li>get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。</li>
<li>post 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。</li>
<li>因此 get 请求适合于请求缓</li>
</ul>
<h5 id="协议版本" tabindex="-1"><a class="header-anchor" href="#协议版本" aria-hidden="true">#</a> 协议版本</h5>
<ul>
<li>HTTP 的版本号，表示客户端使用的 HTTP 协议版本。目前为止，HTTP 的版本已经到了 HTTP/3 了。</li>
<li>HTTP 协议的发展：<img src="@source/images/http-版本.png" alt="HTTP 协议的发展.png"></li>
</ul>
<p><strong>常见问题</strong></p>
<blockquote>
<p>http1.1 和 http1.0 之间有哪些区别?</p>
</blockquote>
<p>http1.1 相对于 http1.0 有这样几个区别：</p>
<ul>
<li>连接方面的区别：
<ul>
<li>http1.1 默认使用持久连接，而 http1.0 默认使用非持久连接。</li>
<li>http1.1 通过使用持久连接来使多个 http 请求复用同一个 TCP 连接，以此来避免使用非持 久连接时每次需要建立连接的时延。</li>
</ul>
</li>
<li>资源请求方面的区别：
<ul>
<li>在 http1.0 中，存在一些浪费带宽的现象，例如客户端只是需要 某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，http1.1 则 在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。</li>
</ul>
</li>
<li>缓存方面的区别：
<ul>
<li>在 http1.0 中主要使用 header 里的 If-Modified-Since,Expires 来做为缓存判断的标准，http1.1 则引入了更多的缓存控制策略例如 Etag、 If-Unmodified-Since、If-Match、If-None-Match 等更多可供选择的缓存头来控制缓存策略。</li>
</ul>
</li>
<li>http1.1 中还新增了 host 字段，用来指定服务器的域名。http1.0 中认为每台服务器 都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但 随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个 IP 地址。因此有了 host 字段，就可以将请求发往同一台服务器上的不同网站。</li>
<li>http1.1 相对于 http1.0 还新增了很多方法，如 PUT、HEAD、OPTIONS 等。</li>
</ul>
<h4 id="二进制分帧-使用-http2" tabindex="-1"><a class="header-anchor" href="#二进制分帧-使用-http2" aria-hidden="true">#</a> 二进制分帧(使用 HTTP2 )</h4>
<ul>
<li>
<p>如果使用的是 HTTP/2 协议，HTTP/2 协议在传输层之上，应用层之下定义了一个二进制分帧层，我们可以把它对应到 OSI 七层模型中的表示层，表示层负责<strong>数据格式的转换。</strong></p>
<ul>
<li>分帧层把 HTTP 1.1 中的消息转换成了 HTTP/2 中的帧格式。<img src="@source/images/http2.png" alt="image.png"></li>
</ul>
</li>
<li>
<p>HTTP/2 新的特性：</p>
<ul>
<li>二进制协议。 HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是 二进制。HTTP/2 则是一个彻底的二进 制协议，头信息和数据体都是二进制，并且统称为&quot;帧&quot;，可以分为头信息帧和数 据帧。 帧的概念是它实现多路复用的基础。</li>
<li>多路复用。 HTTP/2 实现了多路复用，HTTP/2 仍然复用 TCP 连接，但是在一个连接里， 客户端和服务器都可以同时发送多个请求或回 应，而且不用按照顺序一一发送， 这样就避免了&quot;队头堵塞&quot;的问题。 <img src="@source/images/http2-多路复用.png" alt="image.png"></li>
<li>数据流。数据流 HTTP/2 使用了数据流的概念，因为 HTTP/2 的数据包是不按顺序发送的，同一 个连接里面连续的数据包，可能属于不同的 请求。因此，必须要对数据包做标 记 指出它属于哪个请求。HTTP/2 将每个请求或回应的所有数据包，称为一个 数据流。每 个数据流都有一个独一无二的编号。数据包发送的时候，都必须标 记数据流 ID ，用来区分它属于哪个数据流。</li>
<li>头信息压缩 。头信息压缩 HTTP/2 实现了头信息压缩，由于 HTTP 1.1 协议不带有状态，每次请求都必须 附上所有信息。所以，请求的很多字段都是 重复的，比如 Cookie 和 User Agent ，一模一样的内容，每次请求都必须附带，这会浪费很多带宽，也影响 速度。HTTP/2 对这一点做了优化，引入了头信息压缩机制。
<ul>
<li>一方面，头信息使用 gzip 或 compress 压缩后再发送；</li>
<li>另一方面， 客户端和服务器同时维护一张头信息 表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只 发送索引 号，这样就能提高速度了。</li>
</ul>
</li>
<li>服务器推送。 HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送。使 用服务器推送，提前给客户端推送必要的资源 ，这样就可以相对减少一些延迟 时间。这里需要注意的是 http2 下服务器主动推送的是静态资源，和 WebSocket 以及使用 SSE 等方式向客户端发送即时数据的推送是不同的。</li>
</ul>
</li>
<li>
<p>HTTP/2 协议缺点： 因为 HTTP/2 使用了多路复用，一般来说同一域名下只需要使用一个 TCP 连接。 由于多个数据流使用同一个 TCP 连接，遵 守同一个流量状态控制和拥塞控制。 只要一个数据流遭遇到拥塞，剩下的数据流就没法发出去，这样就导致了后面的 所有数据都 会被阻塞。HTTP/2 出现的这个问题是由于其使用 TCP 协议的问题， 与它本身的实现其实并没有多大关系</p>
</li>
</ul>
<h4 id="dns-域名解析" tabindex="-1"><a class="header-anchor" href="#dns-域名解析" aria-hidden="true">#</a> DNS 域名解析</h4>
<ul>
<li><strong>DNS 查询目的：</strong>  获取 ip 地址。比如，一个域名为：abc.com 解析为 固定IP：211.214.1.XXX。</li>
<li><strong>DNS 概念：</strong> DNS 协议提供的是一种主机名到 IP 地址的转换服务，就是我们常说的域名系 统。它是一个由分层的 DNS 服务器组成的分 布式数据库，是定义了主机如何 查询这个分布式数据库的方式的应用层协议。</li>
<li><strong>DNS 查询过程：</strong> <img src="@source/images/http-2.png" alt=""></li>
<li><strong>DNS 缓存：</strong>
<ul>
<li>在一个请求链中，当某个 DNS 服务器接收到一个 DNS 回答后，它能够将回答中的信息缓存在本 地存储器中。</li>
<li>返回的资源记录中 的 TTL 代表了该条记录的缓存的时间。(TTL 是资源记录的生存时间，它定义了资源记录能够被其他的 DNS 服务 器缓存多长时间)</li>
</ul>
</li>
<li><strong>DNS 协议运行在 UDP 协议之上， 使用 53 号 端。</strong>
<ul>
<li>DNS 为什么使用 UDP 协议作为传输层？
<ul>
<li>DNS 使用 UDP 协议作为传输层协议的主要原因是为了避免使用 TCP 协议时造成的连接时延。</li>
<li>因为为了得到一个域名的 IP 地 址，往往会向多个域名服务器查询，如果使用 TCP 协议，那么每次请求都会存在连接时延，这样使 DNS 服务变得很慢，因为大 多数的地址查询请求，都是浏览器请求页面时发出的，这样会造成网页的等待时间过长。</li>
</ul>
</li>
<li>使用 UDP 协议作为 DNS 协议的问题：
<ul>
<li>问题一：
<ul>
<li>由于历史原因，物理链路的最小 MTU = 576，所 以为了限制报文长度不超过 576， UDP 的报文段的长度被限制在 512 个字节以内，这样一旦 DNS 的查询或者应答报文，超过了 512 字节，那么基于 UDP 的 DNS 协议就会被截断为 512 字节，那么有可能用户得到的 DNS 应答就是不完整的。</li>
<li>这里 DNS 报文的长度一旦超过限制，并不 会像 TCP 协议那样被拆分成多个报文段传输，因为 UDP 协议不会维护连接状态，所以我们没 有办法确定那几个报文段属于同一 个数据，UDP 只会将多余的数据给截取掉。</li>
<li>解决方案：使用 TCP 协议去请求报文。</li>
</ul>
</li>
<li>问题二：
<ul>
<li>安全问题，就是我们没有办法确定我们得到的应答，一定是一个安全 的应答，因为应答可以被他人伪造，</li>
<li>解决方案： DNS over HTTPS 来解决这个问题</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><strong>DNS 实现负载均衡：</strong> DNS 可以用于在冗余的服务器上实现负载平衡。
<ul>
<li>因为现在一般的大型网站使用 多台服务器提供服务，因此一个域名可能会对应 多个服务器地址。</li>
<li>当用户发起 网站域名的 DNS 请求的时候，DNS 服务器返回这个域名所对应的服务器 IP 地址的集合，但在 每个回答中，会循环这些 IP 地址的顺序，用户一般会选择 排在前面的地址发送请求。以此将用户的请求均衡的分配到各个不 同的服务器 上，这样来实现负载均衡</li>
</ul>
</li>
</ul>
<p><strong>常见问题</strong></p>
<blockquote>
<p>域名带 www 与不带 www 的区别?</p>
</blockquote>
<ul>
<li>不带www的域名为顶级域名或一级域名 ，带 www 的为二级域名（）。</li>
<li>带 www 和 不带 www 是域名完全不同的两个网站，做域名解析的时候点完全不同的两个IP或网站。
<ul>
<li>在购买域名时，域名本身是不带有www的，但由于域名要通过DNS服务器解析后才可以使用，在这个过程中每一个域名是会指向一个web服务器ip地址，由于在很早之前网站方都会增加一个&quot;www&quot;的子域名来帮助客户以更多的路径访问网站，客户通常都会按照：&quot;www.++.com&quot;的形式来访问站点；</li>
<li>如果你没有做这个www的解析那么&quot;www.++.com&quot;就不能访问，只能访问不带www的顶级域名。对于普通用户来说，这个问题可能会造成他不能访问你的站，因为他只是知道用带有&quot;www&quot;的形式访问你的站点，可能不知道&quot;++.com&quot;也是同样可以访问的！</li>
</ul>
</li>
</ul>
<blockquote>
<p>带www与不带www对网站优化 和 收录 有什么影响？</p>
</blockquote>
<ul>
<li>不带 www 的比带 www 的 搜索引擎收录量更多。尤其在权重累计与收录方面。
<ul>
<li>新域名在买来后没有经过任何处理的情况下，搜索引擎会认为你的带www与不带的为两个域名，这其中就会有个首选域名的概念</li>
<li>百度判断不带www的域名为主域名，会给予比带www更高的权重，所以导致收录会相对较多。</li>
</ul>
</li>
<li>由于没有对域名做任何处理，不管哪个被认为是首选域名，百度仍会认为你是两个域名。这样就会分散网站权重，不利于我们优化网站。尤其不利于优化带www的域名。</li>
<li>优化：
<ul>
<li>使用 301跳转。比如你想把你的带www域名作为首选域名来优化，那么只需把顶级域名做301跳转到带www的域名上即可</li>
<li>在买好域名后直接对不带www的域名不进行解析，这样就只剩带www的为首选域名。</li>
</ul>
</li>
</ul>
<h4 id="arp-地址解析" tabindex="-1"><a class="header-anchor" href="#arp-地址解析" aria-hidden="true">#</a> ARP 地址解析</h4>
<p>ARP 目的：获得ip地址后进行ip地址解析(ARP)， 获得硬件地址。</p>
<p><img src="@source/images/http-3.1.png" alt=""></p>
<p><img src="@source/images/http-3.2.png" alt=""></p>
<h4 id="三次握手建立tcp连接" tabindex="-1"><a class="header-anchor" href="#三次握手建立tcp连接" aria-hidden="true">#</a> 三次握手建立TCP连接</h4>
<h5 id="三次握手过程" tabindex="-1"><a class="header-anchor" href="#三次握手过程" aria-hidden="true">#</a> 三次握手过程</h5>
<p><img src="@source/images/http-5.png" alt=""></p>
<ul>
<li>TCP 三次握手过程：TCP 三次握手的建立连接的过程就是相互确认初始序号的过程，告诉对方，什么样序号的报文段能够被正确接收。
<ul>
<li>第一次握手，客户端向服务器发送一个 SYN 连接请求报文段，报文段的首部中 SYN 标志位置为 1，序号字段是一个任选的 随机数。它代表的是客户端数据的 初始序号。</li>
<li>第二次握手，服务器端接收到客户端发送的 SYN 连接请求报文段后，服务器首 先会为该连接分配 TCP 缓存和变量，然后向 客端发送 SYN ACK 报文段， 报文段的首部中 SYN 和 ACK 标志位都被置为 1，代表这是一个对 SYN 连接 请求的确认， 同时序号字段是服务器端产生的一个任选的随机数，它代表的是 服务器端数据的初始序号。确认号字段为客户端发送的序号加 一。</li>
<li>第三次握手，客户端接收到服务器的肯定应答后，它也会为这次 TCP 连接分配 缓存和变量，同时向服务器端发送一个对服务 器端的报文段的确认。第三次握 手可以在报文段中携带数据。</li>
</ul>
</li>
</ul>
<p><strong>常见 问题</strong></p>
<blockquote>
<p>SYN 是需要消耗一个序列号的，下次发送对应的 ACK 序列号要加1，为什么？</p>
</blockquote>
<ul>
<li>凡是需要对端确认的，一定消耗TCP报文的序列号。</li>
<li>SYN 需要对端的确认， 而 ACK 并不需要，因此 SYN 消耗一个序列号而 ACK 不需要</li>
</ul>
<blockquote>
<p>为什么是三次握手不是两次？</p>
</blockquote>
<ul>
<li>第三次握手的作用是客户端对 服务器端的初始序号的确认。</li>
<li>如果只使用两次握手，那么服务器就没有办法知道 自己的序号是否 已被确认。同时这样也是为了防止失效的请求报文段被服务器 接收，而出现错误的情况</li>
</ul>
<h5 id="arq协议" tabindex="-1"><a class="header-anchor" href="#arq协议" aria-hidden="true">#</a> ARQ协议</h5>
<ul>
<li>ARQ协议：即自动重传请求（Automatic Repeat-reQuest），是OSI模型中数据链路层和传输层的错误纠正协议之一。</li>
<li>它通过使用确认和超时这两个机制，在不可靠服务的基础上实现可靠的信息传输。如果发送方在发送后一段时间之内没有收到确认帧，它通常会重新发送。</li>
<li>ARQ包括 停止等待ARQ协议 和 连续ARQ 协议。</li>
</ul>
<h6 id="等待arq协议" tabindex="-1"><a class="header-anchor" href="#等待arq协议" aria-hidden="true">#</a> 等待ARQ协议</h6>
<ul>
<li>概念：就是每发送完一个分组就停止发送，等待对方的确认。在收到确认后再发送下一个分组。</li>
</ul>
<p><img src="@source/images/arq.png" alt="image-20210706194826007"></p>
<ul>
<li>
<p><strong>等待 ARQ 过程：</strong></p>
<ul>
<li>A 发送分组 M1，发完就暂停发送，等待 B 的确认 (ACK)。B 收到了 M1 向 A 发送  ACK。A 在收到了对 M1 的确认后，就再发送下一个分组  M2。
<ul>
<li>在发送完一个分组后，必须暂时保留已发送的分组的副本，以备重发。</li>
<li>分组和确认分组都必须进行编号。</li>
</ul>
</li>
<li>如果 B 在规定的时间内没有收到已发送分组的肯定回答，则 A 重新发送上一个分组。</li>
<li>对于接受方 B 来说，每次接受到一个分组，就返回对这个分组的肯定应答，当收到 冗余的分组时，就直接丢弃，并返回一个对冗余 分组的确认。</li>
<li>当收到分组损坏 的情况的时候，直接丢弃。</li>
</ul>
</li>
<li>
<p><strong>超时重传：</strong></p>
<ul>
<li>在接收方 B 会出现两种情况：
<ul>
<li>B 接收 M1 时检测出了差错，就丢弃 M1，其他什么也不做（不通知 A 收到有差错的分组）。</li>
<li>M1 在传输过程中丢失了，这时 B 当然什么都不知道，也什么都不做。</li>
</ul>
</li>
<li>在这两种情况下，B 都不会发送任何信息。</li>
<li>如何保证 B 正确收到了 M1 呢？
<ul>
<li>解决方法：超时重传
<ul>
<li>A 为每一个已发送的分组都设置了一个超时计时器。</li>
<li>A 只要在超时计时器到期之前收到了相应的确认，就撤销该超时计时器，继续发送下一个分组 M2 。
<ul>
<li>超时计时器的重传时间应当比数据在分组传输的平均往返时间更长一些。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>确认丢失：</strong></p>
<ul>
<li>若 B 所发送的对 M1 的确认丢失了，那么 A 在设定的超时重传时间内不能收到确认，但 A 并无法知道：是自己发送的分组出错、丢失了，或者 是 B 发送的确认丢失了。因此 A 在超时计时器到期后就要重传 M1。</li>
<li>假定 B 又收到了重传的分组 M1。这时 B 应采取两个行动：
<ul>
<li>第一，丢弃这个重复的分组 M1，不向上层交付。</li>
<li>第二，向 A 发送确认。不能认为已经发送过确认就不再发送，因为 A 之所以重传 M1 就表示 A 没有收到对 M1 的确认。</li>
</ul>
</li>
</ul>
<p><img src="@source/images/ARQ-确认丢失.png" alt="image-20210706201433613"></p>
</li>
<li>
<p><strong>确认迟到:</strong></p>
<ul>
<li>传输过程中没有出现差错，但 B 对分组 M1 的确认迟到了。</li>
<li>A 会收到重复的确认。对重复的确认的处理很简单：收下后就丢弃。</li>
<li>B 仍然会收到重复的 M1，并且同样要丢弃重复的 M1，并重传确认分组。</li>
<li><img src="@source/images/ARQ-确认迟到.png" alt="image-20210706201525251"></li>
</ul>
</li>
<li>
<p>优点： 简单。</p>
</li>
<li>
<p><strong>缺点：</strong> 每次发送分组必须等到分组确认后才能发送 下一个分组，这样会造成信道的利用率过低。</p>
<ul>
<li><img src="@source/images/ARQ-信道利用率.png" alt="image-20210706202307763">
<ul>
<li>当往返时间 RTT 远大于分组发送时间 TD 时，信道的利用率就会非常低。若出现重传，则对传送有用的数据信息来说，信道的利用率就还要降低。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h6 id="连续arq-协议" tabindex="-1"><a class="header-anchor" href="#连续arq-协议" aria-hidden="true">#</a> 连续ARQ 协议</h6>
<ul>
<li>
<p>作用：连续 ARQ 协议是为了解决停止等待 ARQ 协议对于信道的利用率过低的问题。</p>
</li>
<li>
<p>连续 ARQ 协议原理：</p>
<ul>
<li>
<p>连续ARQ协议发送方采用流水线传输。发送方可以连续发送多个分组，不必每发完一个分组就停下来等待对方确认<img src="@source/images/ARQ-连续发送.png" alt="img"></p>
</li>
<li>
<p>通常是结合滑动窗口协议来使用的，发送方需要维持一个发送窗口，它通过连续发送一组分组，然后再等待对分组的 确认回答。</p>
<ul>
<li>
<p><img src="@source/images/ARQ-滑动窗口.png" alt="img"></p>
</li>
<li>
<p>位于发送窗口内的5个分组都可以连续发送出去，而不需要等待对方的确认，这样就提高了信道利用率。</p>
</li>
<li>
<p>连续ARQ协议规定，发送方每收到一个确认，就把发送窗口向前滑动一个分组的位置。例如上面的图（b），当发送方收到第一个分组的确认，就把发送窗口向前移动一个分组的位置。如果原来已经发送了前5个分组，则现在可以发送窗口内的第6个分组。</p>
</li>
</ul>
</li>
<li>
<p>接收方一般都是采用累积确认的方式。</p>
<ul>
<li>累积确认：
<ul>
<li>收方不必对收到的分组逐个发送确认。而是在收到几个分组后，对按序到达的最后一个分组发送确认。如果收到了这个分组确认信息，则表示到这个分组为止的所有分组都已经正确接收到了。</li>
<li>优点：容易实现，即使确认丢失也不必重传</li>
<li>缺点：不能正确的向发送方反映出接收方已经正确收到的所以分组的信息。</li>
</ul>
</li>
<li>Go-back-N（回退N）：
<ul>
<li>比如发送方发送了前5个分组，而中间的第3个分组丢失了，这时候接收方只能对前2个发出确认。而不知道后面3个分组的下落。因此只能把后面的3个分组都重传一次，这种机制叫Go-back-N（回退N），表示需要再退回来重传已发送过的N个分组。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>对于如何处理分组 中可能出现的差错恢复情况，一般可以使用滑动窗口协议和选择重传协议来实现。</p>
</li>
</ul>
<h6 id="滑动窗口协议" tabindex="-1"><a class="header-anchor" href="#滑动窗口协议" aria-hidden="true">#</a> 滑动窗口协议</h6>
<ul>
<li>
<p>概念：滑动窗口协议在在发送方和接收方之间各自维持一个滑动窗口，发送发是发送窗口，接收方是接收窗口，而且这个窗口是随着时间变化可以向前滑动的。它允许发送方发送多个分组而不需等待确认。TCP的滑动窗口是以字节为单位的。</p>
<p><img src="@source/images/ARQ-发送窗口.png" alt="img"></p>
</li>
<li>
<p>发送窗口四个状态：</p>
<ul>
<li>已发送并收到确认的数据（不在发送窗口和发送缓冲区之内）</li>
<li>已发送但未收到确认的数据（位于发送窗口之内）</li>
<li>允许发送但尚未发送的数据（位于发送窗口之内）</li>
<li>发送窗口之外的缓冲区内暂时不允许发送的数据。</li>
</ul>
</li>
<li>
<p>接收窗口四个状态：</p>
<ul>
<li>已发送确认并交付主机的数据（不在接收窗口和接收缓冲区之内）</li>
<li>未按序收到的数据（位于接收窗口之内）</li>
<li>允许的数据（位于接收窗口之内）</li>
<li>不允许接收的数据（位于发送窗口之内）</li>
</ul>
</li>
<li>
<p>规则：</p>
<ul>
<li>凡是已经发送过的数据，在未收到确认之前，都必须暂时保留，以便在超时重传时使用。</li>
<li>只有当发送方A收到了接收方的确认报文段时，发送方窗口才可以向前滑动几个序号。</li>
<li>当发送方A发送的数据经过一段时间没有收到确认（由超时计时器控制），就要使用回退N步协议，回到最后接收到确认号的地方，重新发送这部分数据。</li>
</ul>
</li>
<li>
<p>应用：</p>
<ul>
<li>连续 ARQ 协议</li>
<li>TCP利用滑动窗口协议来进行流量控制</li>
</ul>
</li>
</ul>
<h5 id="tcp-协议" tabindex="-1"><a class="header-anchor" href="#tcp-协议" aria-hidden="true">#</a> <strong>TCP 协议</strong></h5>
<ul>
<li>
<p>TCP 是面向连接的运输层协议。在通信双方进行通信前，需要通过三次握手建 立连接。它需要在端系统中维护双方连接的状态信息。</p>
</li>
<li>
<p>TCP 协议提供的是点对点的服务。每一条 TCP 连接只能有两个端点，每一条TCP连接只能是点对点的（一对一）。</p>
</li>
<li>
<p>TCP 提供可靠交付的服务。TCP协议通过使用<strong>连续ARQ协议</strong>和<strong>滑动窗口协议</strong>，来保证数据传输的正确性，从而提供可靠的传输。</p>
</li>
<li>
<p>TCP 提供全双工通信。也就是说连接的双方的能够向对方发送和接收数据。</p>
</li>
<li>
<p>TCP 提供了<strong>拥塞控制机制</strong>，在网络拥塞的时候会控制发送数据的速率， 有助于减少数据包的丢失和减轻网络中的拥塞程度。</p>
</li>
<li>
<p>TCP 提供了<strong>流量控制机制</strong>，保证了通信双方的发送和接收速率相同。如果接收方可接收的缓存很小时，发送方会降低发送速率，避免因为缓存 填满而造成的数据包的丢失。</p>
</li>
<li>
<p>面向字节流：TCP 中的“流”(stream)指的是流入或流出进程的字节序列。</p>
<ul>
<li>“面向字节流”的含义是：虽然应用程序和 TCP 的交互是一次一个数据块，但 TCP 把应用程序交下来的数据看成仅仅是一连串无结构的字节流。</li>
<li>TCP 不保证接收方应用程序所收到的数据块和发送方应用程序所发出的数据块具有对应大小的关系。但接收方应用程序收到的字节流必须和发送方应用程序发出的字节流完全一样。</li>
</ul>
</li>
</ul>
<h5 id="tcp-可靠传输机制" tabindex="-1"><a class="header-anchor" href="#tcp-可靠传输机制" aria-hidden="true">#</a> TCP 可靠传输机制</h5>
<ul>
<li>TCP 的可靠运输机制是基于 连续 ARQ 协议 和 滑动窗口协议 的。</li>
<li>TCP  滑动窗口协议：并不完全和滑动窗口协议相同，因为许多的 TCP 实现会将失序的报文段给缓存起来，并且发生重传时，只会重 传一个报文段，因此 TCP 协议的可靠传输机制更像是窗口滑动协议和选择重传协议的一个混合体。</li>
</ul>
<h5 id="tcp-拥塞控制机制" tabindex="-1"><a class="header-anchor" href="#tcp-拥塞控制机制" aria-hidden="true">#</a> TCP 拥塞控制机制</h5>
<ul>
<li>
<p>拥塞：</p>
<ul>
<li>概念：在某段时间，若对网络中某资源的需求超过了该资源所能提供的可用部分，网络的性能就要变坏。</li>
<li>影响：若网络中有许多资源同时产生拥塞，网络的性能就要明显变坏，整个网络的吞吐量将随输入负荷的增大而下降。</li>
<li>原因：所有资源需求 &gt; 可用资源</li>
</ul>
</li>
<li>
<p>拥塞控制：</p>
<ul>
<li>
<p>前提：网络能够承受现有的网络负荷。</p>
</li>
<li>
<p>作用：</p>
<ul>
<li>
<p>在网络拥塞的时候会控制发送数据的速率， 有助于减少数据包的丢失和减轻网络中的拥塞程度。</p>
</li>
<li>
<p>防止过多的数据注入到网络中，使网络中的路由器或链路不致过载。</p>
<p><img src="@source/images/TCP-拥塞控制.png" alt="image-20210706234455818"></p>
</li>
</ul>
</li>
<li>
<p>原理：TCP 的拥塞控制主要使用了四个机制，分别是慢开始、拥塞避免、快速重传和 快速恢复。</p>
</li>
</ul>
</li>
</ul>
<h6 id="慢开始" tabindex="-1"><a class="header-anchor" href="#慢开始" aria-hidden="true">#</a> 慢开始</h6>
<ul>
<li>
<p>作用：用来确定网络的负载能力。</p>
</li>
<li>
<p>思想：由小到大逐渐增大拥塞窗口数值。使用指数增长拥塞窗口方式。</p>
<ul>
<li>为在发送方刚开始发送数据的时候，并不知道网络中的 拥塞程度，所以先以较低的速率发送，进行试探</li>
<li>每次收到一个确认报文，就将发动窗口的长度加一，这样每个 RTT 时间后，发送窗口的长度就会加倍。</li>
<li>当发送窗口的大小达到一个阈值的时候就进入拥塞避免算法。</li>
<li><img src="@source/images/TCP-慢开始2.png" alt="image-20210707001300166"></li>
</ul>
</li>
<li>
<p>初始拥塞窗口 cwnd 设置：</p>
<ul>
<li>旧的规定：在刚刚开始发送报文段时，先把初始拥塞窗口cwnd 设置为 1 至 2 个发送方的最大报文段 SMSS (Sender Maximum Segment Size) 的数值。</li>
<li>新的 RFC 5681 把初始拥塞窗口 cwnd 设置为不超过2至4个SMSS 的数值。</li>
</ul>
</li>
<li>
<p>慢开始门限 ssthresh（状态变量）：防止拥塞窗口cwnd 增长过大引起网络拥塞。</p>
</li>
<li>
<p>拥塞窗口 cwnd  控制方法：在每收到一个对新的报文段的确认后，可以把拥塞窗口增加最多一个 SMSS 的数值。</p>
<ul>
<li>拥塞窗口cwnd每次的增加量 = min (N, SMSS)
<ul>
<li>其中 N 是原先未被确认的、但现在被刚收到的确认报文段所确认的字节数。</li>
<li>不难看出，当 N &lt; SMSS 时，拥塞窗口每次的增加量要小于 SMSS。</li>
</ul>
</li>
<li>用这样的方法逐步增大发送方的拥塞窗口 cwnd，可以使分组注入到网络的速率更加合理。</li>
</ul>
</li>
<li>
<p>初始请求的响应：</p>
<ul>
<li>初始请求的响应包含所接收数据的第一个字节。</li>
<li>”Time to First Byte“ (TTFB)是用户通过点击链接进行请求与收到第一个HTML包之间的时间。</li>
<li>第一块内容通常是14kb的数据。首先进行TCP慢开始<img src="@source/images/慢开始.png" alt=""></li>
</ul>
</li>
</ul>
<h6 id="拥塞避免" tabindex="-1"><a class="header-anchor" href="#拥塞避免" aria-hidden="true">#</a> 拥塞避免</h6>
<ul>
<li>思想： 为了避免可能发生的拥塞，让拥塞窗口 cwnd 缓慢地增大，即每经过一个往返时间 RTT 就把发送方的拥塞窗口 cwnd 加 1，而不是加倍，使拥塞窗口 cwnd 按线性规律缓慢增长。 这样将窗口的增长速率由指数增长，变为加法线性增长。</li>
<li>特点：在拥塞避免阶段，拥塞窗口 cwnd 按线性规律缓慢增长，比慢开始算法的拥塞窗口增长速率缓慢得多。</li>
<li>AIMD 算法：
<ul>
<li>在拥塞避免阶段，拥塞窗口是按照线性规律增大的。这常称为“加法增大” AI (Additive Increase)。</li>
<li>当出现超时或3个重复的确认时，就要把门限值设置为当前拥塞窗口值的一半，并大大减小拥塞窗口的数值。这常称为“乘法减小”MD (Multiplicative Decrease)。</li>
</ul>
</li>
<li>注意：
<ul>
<li>“拥塞避免”并非指完全能够避免了拥塞。利用以上的措施要完全避免网络拥塞还是不可能的。</li>
<li>“拥塞避免”是说在拥塞避免阶段把拥塞窗口控制为按线性规律增长，使网络比较不容易出现拥塞。</li>
</ul>
</li>
</ul>
<h6 id="快速重传" tabindex="-1"><a class="header-anchor" href="#快速重传" aria-hidden="true">#</a> 快速重传</h6>
<ul>
<li>
<p>作用：</p>
<ul>
<li>采用快重传FR (Fast Retransmission) 算法可以让发送方尽早知道发生了个别报文段的丢失。</li>
<li>使用快重传可以使整个网络的吞吐量提高约 20%</li>
</ul>
</li>
<li>
<p>思想：</p>
<ul>
<li>首先要求接收方不要等待自己发送数据时才进行捎带确认，而是要立即发送确认，即使收到了失序的报文段也要立即发出对已收到的报文段的重复确认。</li>
<li>发送方只要一连收到三个重复确认，就知道接收方确实没有收到报文段，因而应当立即进行重传（即“快重传”），这样就不会出现超时，发送方也不就会误认为出现了网络拥塞。</li>
</ul>
<p><img src="@source/images/TCP-快重传.png" alt="image-20210707000229167"></p>
</li>
</ul>
<h6 id="快速恢复" tabindex="-1"><a class="header-anchor" href="#快速恢复" aria-hidden="true">#</a> 快速恢复</h6>
<ul>
<li>
<p>当发送端收到连续三个重复的确认时，由于发送方现在认为网络很可能没有发生拥塞，因此现在不执行慢开始算法，而是执行快恢复算法。</p>
</li>
<li>
<p>快恢复算法 FR (Fast Recovery) ：</p>
<ul>
<li>慢开始门限 ssthresh = 当前拥塞窗口 cwnd / 2 ；</li>
<li>新拥塞窗口 cwnd = 慢开始门限 ssthresh ；</li>
<li>开始执行拥塞避免算法，使拥塞窗口缓慢地线性增大。</li>
</ul>
</li>
</ul>
<p><strong>TCP 拥塞控制示例</strong></p>
<p><img src="@source/images/TCP-慢开始.png" alt="image-20210707000416303"></p>
<ul>
<li>当 TCP 连接进行初始化时，将拥塞窗口置为 1。图中的窗口单位不使用字节而使用报文段。</li>
<li>发送端的发送窗口不能超过拥塞窗口 cwnd 和接收端窗口 rwnd 中的最小值。我们假定接收端窗口足够大，因此现在发送窗口的数值等于拥塞窗口的数值。</li>
<li>慢开始1：
<ul>
<li>在执行慢开始算法时，拥塞窗口 cwnd=1，发送第一个报文段。</li>
<li>发送方每收到一个对新报文段的确认 ACK，就把拥塞窗口值加 1，然后开始下一轮的传输（请注意，横坐标是传输轮次，不是时间）。因此拥塞窗口 cwnd 随着传输轮次按指数规律增长。</li>
<li>当拥塞窗口 cwnd 增长到慢开始门限值ssthresh 时（图中的点 1，此时拥塞窗口cwnd = 16），就改为执行拥塞避免算法，拥塞窗口按线性规律增长。</li>
</ul>
</li>
<li>拥塞避免1：
<ul>
<li>当拥塞窗口 cwnd = 24 时，网络出现了超时（图中的点2），发送方判断为网络拥塞。</li>
<li>于是调整门限值 ssthresh = cwnd / 2 = 12，同时设置拥塞窗口 cwnd = 1，进入慢开始2阶段。</li>
</ul>
</li>
<li>慢开始2：
<ul>
<li>按照慢开始算法，发送方每收到一个对新报文段的确认ACK，就把拥塞窗口值加1。</li>
<li>当拥塞窗口cwnd = ssthresh = 12时（图中的点3，这是新的ssthresh值），改为执行拥塞避免算法，拥塞窗口按线性规律增大。</li>
</ul>
</li>
<li>拥塞避免3：
<ul>
<li>当拥塞窗口cwnd = 16时（图中的点4），出现了一个新的情况，就是发送方一连收到 3 个对同一个报文段的重复确认（图中记为3-ACK）。发送方改为执行快重传和快恢复算法。</li>
</ul>
</li>
<li>快速恢复：
<ul>
<li>在图的点4，发送方知道现在只是丢失了个别的报文段。于是不启动慢开始，而是执行快恢复算法。</li>
<li>这时，发送方调整门限值ssthresh = cwnd / 2 = 8，同时设置拥塞窗口cwnd = ssthresh = 8（见图中的点5），并开始执行拥塞避免算法。</li>
</ul>
</li>
</ul>
<p><strong>TCP 拥塞控制流程图</strong></p>
<p><img src="@source/images/TCP拥塞控制流程图.png" alt=""></p>
<p><strong>常见问题</strong></p>
<blockquote>
<p>增加资源能解决拥塞吗？</p>
</blockquote>
<ul>
<li>不能。</li>
<li>因为网络拥塞是一个非常复杂的问题。简单地增加资源，在许多情况下，不但不能解决拥塞问题，而且还可能使网络的性能更坏。</li>
<li>网络拥塞往往是由许多因素引起的。例如：
<ul>
<li>增大缓存，但未提高输出链路的容量和处理机的速度，排队等待时间将会大大增加，引起大量超时重传，解决不了网络拥塞；</li>
<li>提高处理机处理的速率会会将瓶颈转移到其他地方；</li>
</ul>
</li>
</ul>
<blockquote>
<p>拥塞控制与流量控制的区别 ?</p>
</blockquote>
<ul>
<li>流量控制：
<ul>
<li>往往指点对点通信量的控制，是个端到端的问题（接收端控制发送端）。</li>
<li>流量控制所要做的就是抑制发送端发送数据的速率，以便使接收端来得及接收。</li>
</ul>
</li>
<li>拥塞控制和流量控制之所以常常被弄混，是因为某些拥塞控制算法是向发送端发送控制报文，并告诉发送端，网络已出现麻烦，必须放慢发送速率。这点又和流量控制是很相似的。</li>
</ul>
<h5 id="tcp-流量控制机制" tabindex="-1"><a class="header-anchor" href="#tcp-流量控制机制" aria-hidden="true">#</a> TCP 流量控制机制</h5>
<ul>
<li>一般说来，我们总是希望数据传输得更快一些。但如果发送方把数据发送得过快，接收方就可能来不及接收，这就会造成数据的丢失。</li>
<li>作用：保证了通信双方的发送和接收速率相同。流量控制 (flow control) 就是让发送方的发送速率不要太快，既要让接收方来得及接收，也不要使网络发生拥塞。如果接收方可接收的缓存很小时，发送方会降低发送速率，避免因为缓存 填满而造成的数据包的丢失。</li>
<li>原理：利用滑动窗口机制可以很方便地在 TCP 连接上实现流量控制。</li>
<li><img src="@source/images/ARQ-流量控制.png" alt="img"></li>
</ul>
<h4 id="tls-协商-使用https" tabindex="-1"><a class="header-anchor" href="#tls-协商-使用https" aria-hidden="true">#</a> TLS 协商 (使用HTTPS)</h4>
<h5 id="tls-协商过程" tabindex="-1"><a class="header-anchor" href="#tls-协商过程" aria-hidden="true">#</a> TLS 协商过程</h5>
<p><img src="@source/images/http-4.png" alt=""></p>
<ul>
<li>SSL 链接断开后恢复：一共有两种方法来恢复断开的 SSL 连接，一种是使用 session ID，一种是 session ticket。
<ul>
<li>session ID 方式：
<ul>
<li>每一次的会话都有一个编号，当对话中断后，下一次重新连接时， 只要客户端给出这个编号，服务器 如果有这个编号的记录，那么双方就可以继续使用以前的秘钥，而不用重新生成一把。</li>
<li>目前所有 的浏览器都支持这一种方法。</li>
<li>缺点：session ID 只能够存在一台服务器上，如果我们的请求通过负载平衡 被转移到了其他的服务器上，那 么就无法恢复对话。</li>
</ul>
</li>
<li>session ticket 方式：
<ul>
<li>session ticket 是服务器在上一次对话中发送给客 户的，这个 ticket 是加密的 ，只有服务器能够解密，里面包含了本次会话的信息，比如对话秘钥和加密方法等。</li>
<li>这样不管我们的请求是否转移到其他的服务器 上，当服务器将 ticket 解密以后，就能够获取上次对话的信息，就不用重新生成对话秘钥了。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h5 id="https-协议" tabindex="-1"><a class="header-anchor" href="#https-协议" aria-hidden="true">#</a> HTTPS 协议</h5>
<ul>
<li>概念：
<ul>
<li>HTTPS = HTTP + 加密 (SSL加密) + 认证 + 完整性保护</li>
<li>HTTPS 指的是超文本传输安全协议，HTTPS 是基于 HTTP 协议的，使用 TLS/SSL 来对数据加密。使用 TLS/ SSL 协议，所有的信息都是加密的，第三方没有办法窃听。</li>
<li>HTTPS 的端口号是 443。</li>
<li><img src="@source/images/https.png" alt="image-20210707113037403"></li>
</ul>
</li>
<li>特点：
<ul>
<li><strong>混合加密的方式实现信息的机密性</strong>，使其免受窃听者对数据的监听。</li>
<li>提供校验机制，<strong>摘要算法的方式来实现完整性</strong>，信息一旦被篡改，通信的双方会立刻发现。</li>
<li>配备身份证书，<strong>将服务器公钥放入到数字证书中</strong>，防止身份被冒充的情况出现。防止中间人攻击并建立用户信任。</li>
</ul>
</li>
</ul>
<h6 id="ssl-和-tls" tabindex="-1"><a class="header-anchor" href="#ssl-和-tls" aria-hidden="true">#</a> SSL 和 TLS</h6>
<ul>
<li>
<p>SSL / TLS：</p>
<ul>
<li>
<p>基本目标：实现两个应用实体之间的安全可靠通信。</p>
</li>
<li>
<p>位置：在发送方，SSL 接收应用层的数据，对数据进行加密，然后把加了密的数据送往 TCP 套接字。在接收方，SSL 从 TCP 套接字读取数据，解密后把数据交给应用层。</p>
<p><img src="@source/images/SSL-TSL.png" alt="image-20210707114420012"></p>
</li>
</ul>
</li>
<li>
<p>安全套接字层 SSL (Secure Socket Layer)  ：</p>
<ul>
<li>SSL 作用在端系统应用层的 HTTP 和运输层之间，在 TCP 之上建立起一个安全通道，为通过 TCP 传输的应用层数据提供安全保障。</li>
<li>1996年发布 SSL 3.0，成为 Web 安全的事实标准。</li>
<li>1999年，IETF 在 SSL 3.0 基础上推出了传输层安全标准 TLS，为所有基于 TCP 的网络应用提供安全数据传输服务。</li>
</ul>
</li>
<li>
<p>运输层安全 TLS (Transport Layer Security) ：</p>
<ul>
<li>作用：用于两个通信应用程序之间提供保密性和数据完整性。使用<code v-pre>对称加密</code>和 <code v-pre>非对称加密</code> 两种形式。</li>
<li>基本格式： <strong>密钥交换算法 - 签名算法 - 对称加密算法 - 摘要算法</strong> 组成的一个密码串。
<ul>
<li>密钥交换：ECDHE</li>
<li>签名和认证：ECDSA</li>
<li>对称加密算法：AES ，密钥的长度是 256 位</li>
<li>分组模式：GCM</li>
<li>摘要算法：SHA384</li>
</ul>
</li>
</ul>
</li>
</ul>
<h6 id="混合加密" tabindex="-1"><a class="header-anchor" href="#混合加密" aria-hidden="true">#</a> 混合加密</h6>
<ul>
<li>作用：通过混合加密的方式可以保证信息的机</li>
<li>密性，解决了窃听的风险。</li>
<li>HTTPS 采用的是对称加密和非对称加密结合的「混合加密」方式：
<ul>
<li>在通信建立前采用非对称加密的方式交换「会话秘钥」，后续就不再使用非对称加密。</li>
<li>在通信过程中全部使用对称加密的「会话秘钥」的方式加密明文数据。</li>
<li>详细过程：
<ul>
<li>在通信刚开始的时候使用非对称算法，比如 RSA、ECDHE ，首先解决<code v-pre>密钥交换</code>的问题。</li>
<li>然后用随机数产生对称算法使用的<code v-pre>会话密钥（session key）</code>，再用<code v-pre>公钥加密</code>。</li>
<li>对方拿到密文后用<code v-pre>私钥解密</code>，取出会话密钥。这样，双方就实现了对称密钥的安全交换。</li>
</ul>
</li>
</ul>
</li>
<li>采用「混合加密」的方式的原因：
<ul>
<li>对称加密只使用一个密钥，运算速度快，密钥必须保密，无法做到安全的密钥交换。</li>
<li>非对称加密使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但速度慢。</li>
</ul>
</li>
</ul>
<p><img src="@source/images/混合加密.png" alt="image-20210707130707141"></p>
<p><strong>对称加密</strong>：</p>
<ul>
<li>加密和解密时使用的密钥都是同样的密钥</li>
<li>只要保证了密钥的安全性，那么整个通信过程也就是具有了机密性</li>
<li><img src="@source/images/对称加密.png" alt="image-20210707124429013"></li>
<li>加密算法：
<ul>
<li>DES：
<ul>
<li>属于对称密钥密码体制，是一种分组密码。</li>
<li>DES 的保密性仅取决于对密钥的保密，其算法是公开的。目前较为严重的问题是 DES 的密钥的长度。现在已经设计出搜索 DES 密钥的专用芯片。56位 DES 已不再认为是安全的了。</li>
<li>加密算法：
<ul>
<li>在加密前，先对整个明文进行分组。每一个组长为 64 位。</li>
<li>然后对每一个 64 位 二进制数据进行加密处理，产生一组 64 位密文数据。</li>
<li>最后将各组密文串接起来，即得出整个的密文。</li>
<li>使用的密钥为 64 位（实际密钥长度为 56 位，有 8 位用于奇偶校验)。</li>
<li><img src="@source/images/DES.png" alt="image-20210707125040119"></li>
</ul>
</li>
</ul>
</li>
<li>3DES：
<ul>
<li>算法：使用两个 56 位的密钥。把一个 64 位明文用一个密钥加密，再用另一个密钥解密，然后再使用第一个密钥加密<img src="@source/images/3DES.png" alt="image-20210707125206774"></li>
</ul>
</li>
<li>AES：全称是<code v-pre>Advanced Encryption Standard(高级加密标准)</code>，它是 DES 算法的替代者，安全强度很高，性能也很好，是应用最广泛的对称加密算法。</li>
</ul>
</li>
</ul>
<p><strong>非对称加密</strong></p>
<ul>
<li>
<p>概念：<code v-pre>非对称加密(Asymmetrical Encryption)</code> 也被称为<code v-pre>公钥加密</code>，相对于对称加密来说，非对称加密是一种新的改良加密方式。</p>
</li>
<li>
<p>密钥：非对称加密中有两个密钥，一个是公钥，一个是私钥。</p>
<ul>
<li>加密：公钥进行加密，私钥进行解密。
<ul>
<li>使用公钥加密的文本只能使用私钥解密（公钥加密 -&gt; 私钥解密）</li>
<li>使用私钥加密的文本也可以使用公钥解密 （私钥加密 -&gt; 公钥解密）</li>
</ul>
</li>
<li>公开密钥可供任何人使用，私钥只有你自己能够知道。</li>
</ul>
</li>
<li>
<p>密钥传输：</p>
<ul>
<li>通过网络传输交换，它能够确保及时密钥被拦截，也不会暴露数据信息。</li>
<li>公钥不需要具有安全性，因为公钥需要在网络间进行传输，非对称加密可以解决<code v-pre>密钥交换</code>的问题。</li>
<li>网站保管私钥，在网上任意分发公钥，你想要登录网站只要用公钥加密就行了，密文只能由私钥持有者才能解密。而黑客因为没有私钥，所以就无法破解密文。</li>
</ul>
<p><img src="@source/images/非对称加密.png" alt="image-20210707130001983"></p>
</li>
<li>
<p>非对称加密算法：</p>
<ul>
<li><code v-pre>RSA</code> ：例如 <code v-pre>DHE_RSA_CAMELLIA128_GCM_SHA256</code>。它的安全性基于 <code v-pre>整数分解</code>，使用两个超大素数的乘积作为生成密钥的材料，想要从公钥推算出私钥是非常困难的。</li>
<li><code v-pre>ECC（Elliptic Curve Cryptography）</code>：基于<code v-pre>椭圆曲线离散对数</code>的数学难题，使用特定的曲线方程和基点生成公钥和私钥， ECDHE 用于密钥交换，ECDSA 用于数字签名。</li>
</ul>
</li>
</ul>
<h6 id="摘要算法" tabindex="-1"><a class="header-anchor" href="#摘要算法" aria-hidden="true">#</a> 摘要算法</h6>
<ul>
<li>作用：摘要算法用来实现完整性，能够为数据生成独一无二的「指纹」，用于校验数据的完整性，解决了篡改的风险。</li>
</ul>
<p><img src="@source/images/摘要算法.png" alt="img"></p>
<ul>
<li>摘要算法：
<ul>
<li>客户端在发送明文之前会通过摘要算法算出明文的「指纹」</li>
<li>发送的时候把「指纹 + 明文」一同加密成密文后，发送给服务器</li>
<li>服务器解密后，用相同的摘要算法算出发送过来的明文，通过比较客户端携带的「指纹」和当前算出的「指纹」做比较，若「指纹」相同，说明数据是完整的。</li>
</ul>
</li>
<li>问题：摘要算法实现的报文鉴别可以防篡改，但不能防伪造，因而不能真正实现报文鉴别。</li>
<li>常见摘要算法：
<ul>
<li>MD5 ：
<ul>
<li>概念：全称是 <code v-pre>Message Digest Algorithm 5</code>，它是属于<code v-pre>密码哈希算法(cryptographic hash algorithm)</code>的一种，MD5 可用于从任意长度的字符串创建 128 位字符串值。</li>
<li>基本思想：用足够复杂的方法将报文的数据位充分“弄乱”，报文摘要代码中的每一位都与原来报文中的每一位有关。</li>
<li>计算步骤：
<ol>
<li>附加：把任意长的报文按模 2^64 计算其余数（64位），追加在报文的后面（长度项）。</li>
<li>填充：在报文和长度项之间填充 1~512 位，使得填充后的总长度是 512 的整数倍。填充的首位是 1，后面都是 0。</li>
<li>分组：把追加和填充后的报文分割为一个个 512 位的数据块，每个 512 位的报文数据再分成 4 个 128 位的数据块</li>
<li>计算：将 4 个 128 位的数据块依次送到不同的散列函数进行4轮计算。每一轮又都按 32 位的小数据块进行复杂的运算。一直到最后计算出 MD5 报文摘要代码（128位）。</li>
</ol>
</li>
</ul>
</li>
<li>安全散列算法（SHA-1）:
<ul>
<li>SHA 比 MD5 更安全，但计算起来却比 MD5 要慢些。</li>
<li>基本思想：
<ul>
<li>要求输入码长小于 264 位，输出码长为 160 位。</li>
<li>将明文分成若干 512 位的定长块，每一块与当前的报文摘要值结合，产生报文摘要的下一个中间结果，直到处理完毕</li>
<li>共扫描 5 遍，效率略低于 MD5，抗穷举性更高。</li>
</ul>
</li>
</ul>
</li>
<li>报文鉴别码 MAC：
<ul>
<li>全称是<code v-pre>message authentication code</code>，它通过 MAC 算法从消息和密钥生成，MAC 值允许验证者（也拥有秘密密钥）检测到消息内容的任何更改，从而保护了消息的数据完整性</li>
<li>基本思想：防范上述攻击，可以对散列进行一次加密。散列加密后的结果叫做报文鉴别码 MAC (Message Authentication Code)。</li>
<li>由于入侵者不掌握密钥 ，所以入侵者无法伪造发送者的报文鉴别码 MAC，因而无法伪造发送者发送的报文。这样就完成了对报文的鉴别。<img src="@source/images/MAC.png" alt="image-20210707134651178">
<ul>
<li>现在整个的报文是不需要加密的。</li>
<li>虽然从散列H导出报文鉴别码 MAC 需要加密算法，但由于散列 H 的长度通常都远远小于报文 X 的长度，因此这种加密不会消耗很多的计算资源。因此，使用鉴别码 MAC 就能够很方便地保护报文的完整性。</li>
</ul>
</li>
</ul>
</li>
<li>HMAC ：
<ul>
<li>MAC 更进一步的拓展，它是使用 MAC 值 + Hash 值的组合方式，HMAC 的计算中可以使用任何加密哈希函数，例如 SHA-256 等。<img src="@source/images/HMAC.png" alt="image-20210707134841844"></li>
</ul>
</li>
</ul>
</li>
</ul>
<h6 id="数字证书" tabindex="-1"><a class="header-anchor" href="#数字证书" aria-hidden="true">#</a> 数字证书</h6>
<ul>
<li>客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。</li>
<li>这就存在些问题，如何保证公钥不被篡改和信任度？
<ul>
<li>借助第三方权威机构 CA （数字证书认证机构），将服务器公钥放在数字证书（由数字证书认证机构颁发）中，只要证书是可信的，公钥就是可信的。通过数字证书的方式保证服务器公钥的身份，解决冒充的风险。<img src="@source/images/CA.png" alt="img"></li>
</ul>
</li>
</ul>
<h4 id="传输层-封装成报文段" tabindex="-1"><a class="header-anchor" href="#传输层-封装成报文段" aria-hidden="true">#</a> 传输层：封装成报文段</h4>
<ul>
<li>当连接建立之后，浏览器终于可以发出数据请求了。</li>
<li>应用程序将调用 Socket 库中的 write 方法将应用层准备好的 HTTP 消息交给协议栈，应用程序的数据一般都比较大，因此在传输层会按照网络包的大小对数据进行拆分。将数据拆分成报文段，并添加 TCP 协议头。</li>
</ul>
<p><img src="@source/images/应用程序数据的拆分发送.png" alt="image.png"></p>
<h4 id="网络层-封装成数据报" tabindex="-1"><a class="header-anchor" href="#网络层-封装成数据报" aria-hidden="true">#</a> 网络层：封装成数据报</h4>
<ul>
<li>IP 模块会接收 TCP 报文段，在前面添加 IP 头部和以太网的 MAC 头部后发送网络包。 ![image.png](../images/IP 数据报封装过程.png)</li>
</ul>
<h4 id="数据链路层-封装成帧" tabindex="-1"><a class="header-anchor" href="#数据链路层-封装成帧" aria-hidden="true">#</a> 数据链路层：封装成帧</h4>
<ul>
<li>IP 传给网络接口层的数据单元称做 IP 数据报，网卡驱动程序从 IP 模块获取数据报之后，在开头加上报头和起始帧分界符，在末尾加上用于检测错误的帧校验序列。</li>
<li>加上报头、起始帧分界符和 FCS 之后，我们就可以将包通过网线发送出去了。这种通过以太网传输的比特流称做帧。 <img src="@source/images/网卡发送出去的包.png" alt="image.png"></li>
</ul>
<h4 id="物理层-数字转换为电信号" tabindex="-1"><a class="header-anchor" href="#物理层-数字转换为电信号" aria-hidden="true">#</a> 物理层: 数字转换为电信号</h4>
<ul>
<li>
<p>网卡的内部结构如下，网卡中的 MAC 模块从报头开始将数字信息按每个比特转换成电信号，然后由 PHY，或者叫 MAU 的信号收发模块发送出去。 在这里，将数字信息转换为电信号的速率就是网络的传输速率。<img src="@source/images/网卡.png" alt="image.png"></p>
</li>
<li>
<p>接下来，PHY（MAU）模块会将信号转换为可在网线上传输的格式，并通过网线发送出去。网卡将数字信息转换成电信号或光信号</p>
</li>
</ul>
<p><img src="@source/images/网卡将数字信息转换成电信号或光信号.png" alt="image.png"></p>
<h3 id="服务器处理" tabindex="-1"><a class="header-anchor" href="#服务器处理" aria-hidden="true">#</a> 服务器处理</h3>
<ul>
<li>数据通过网络层传输后最终到达服务器，在服务器中处理分为两类：
<ul>
<li>使用了代理服务器的服务，数据先到达代理服务器，然后到达源服务器</li>
<li>源服务器：保存你的处理程序的服务器</li>
</ul>
</li>
</ul>
<h4 id="代理服务器处理" tabindex="-1"><a class="header-anchor" href="#代理服务器处理" aria-hidden="true">#</a> 代理服务器处理</h4>
<h5 id="代理服务器" tabindex="-1"><a class="header-anchor" href="#代理服务器" aria-hidden="true">#</a> 代理服务器</h5>
<ul>
<li>代理是一种介于客户端与 Web 服务器之间，对访问操作进行中转的机制</li>
<li>分类：<strong>正向代理</strong>和<strong>反向代理</strong>。</li>
<li>正向代理：正向代理服务器与客户端在同一个局域网中，正向代理服务器用来让客户端接入外网以访问外网资源
<ul>
<li>正向代理主要用于几种场景：防火墙、翻墙、对局域网对外网的访问进行监控和管理、缓存代理、隐藏访问者信息。</li>
</ul>
</li>
</ul>
<p><img src="@source/images/正向代理.png" alt="image.png"></p>
<ul>
<li>
<p>反向代理：反向代理服务器与服务端在同一个局域网中，反向代理服务器用来让外网的客户端接入局域网中的站点以访问站点中的资源。</p>
<ul>
<li>反向代理主要用于几种场景：
<ul>
<li>防火墙，保护和隐藏原始资源服务器</li>
<li>负载均衡，当有多台服务器时，使用代理服务器转发请求</li>
<li>反向代理缓存，用于缓存服务端的资源</li>
</ul>
</li>
</ul>
<p><img src="@source/images/反向代理.png" alt=""></p>
</li>
<li>
<p>通过在客户端与服务器之间添加代理服务器来分担 Web 服务器的负载， 一般有 3 种方法：</p>
<ul>
<li><strong>负载均衡</strong>
<ul>
<li>当用户访问量很高时，可以通过添加多台服务器来处理。通过负载均衡代理可以将请求均衡的转发到源服务器，以减轻源服务器的负载，提升服务端处理速度。</li>
</ul>
</li>
<li><strong>缓存代理服务器</strong>
<ul>
<li>代理服务器部署在服务端局域网中，代理服务器每次都要将请求转发至源服务器，当源服务器中资源位改变时返回 304，直接取缓存服务器中的资源，降低了源服务器的处理时间和响应数据的网络传输时间。</li>
</ul>
</li>
<li><strong>CDN 内容分发服务</strong>
<ul>
<li>一种将代理服务器部署在互联网边缘，且提供缓存刷新机制的服务，在代理服务器中有缓存且缓存有效时，直接返回缓存资源，而不需要再去源服务器请求，直接节约了网络传输时间和服务端处理时间。一般静态资源会发布到 CDN 缓存服务器上。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h5 id="cdn-内容分发" tabindex="-1"><a class="header-anchor" href="#cdn-内容分发" aria-hidden="true">#</a> CDN 内容分发</h5>
<ul>
<li>
<p>作用：返回缓存资源或回源 。</p>
</li>
<li>
<p>原理：内容分发服务的运营商会在互联网中部署很多缓存服务器，这些服务器既不在客户端的局域网中也不在服务端的局域网中，当客户端访问 Web 服务器时，会让客户端访问离用户最近的缓存服务器。<img src="@source/images/CDN服务.png" alt="image.png"></p>
</li>
<li>
<p>优点：提高网站的访问速度、减轻源服务器的 问压力。</p>
</li>
</ul>
<p><strong>使用 CDN 与未使用 CDN 过程：</strong></p>
<p>当用户访问一个网站时，如果没有 CDN，过程：</p>
<ol>
<li>
<p>浏览器要将域名解析为 IP 地址，所以需要向本地 DNS 发出请求。</p>
</li>
<li>
<p>本地 DNS 依次向根服务器、顶级域名服务器、权限服务器发出请求，得到网站服务器的 IP 地址。</p>
</li>
<li>
<p>本地 DNS 将 IP 地址发回给浏览器，浏览器向网站服务器 IP 地址发出请求并得到资源。</p>
<p><img src="@source/images/cdn-not.jpg" alt="img"></p>
</li>
</ol>
<p>如果用户访问的网站部署了 CDN，过程：</p>
<pre><code>1. 浏览器要将域名解析为 IP 地址，所以需要向本地 DNS 发出请求。
</code></pre>
<ol start="2">
<li>本地 DNS 依次向根服务器、顶级域名服务器、权限服务器发出请求，得到全局负载均衡系统（GSLB）的 IP 地址。
3. 本地 DNS 再向 GSLB 发出请求，GSLB 的主要功能是根据本地 DNS 的 IP 地址判断用户的位置，筛选出距离用户较近的本地负载均衡系统（SLB），并将该 SLB 的 IP 地址作为结果返回给本地 DNS。
4. 本地 DNS 将 SLB 的 IP 地址发回给浏览器，浏览器向 SLB 发出请求。
5. SLB 根据浏览器请求的资源和地址，选出最优的缓存服务器发回给浏览器。
6. 浏览器再根据 SLB 发回的地址重定向到缓存服务器。
7. 如果缓存服务器有浏览器需要的资源，就将资源发回给浏览器。如果没有，就向源服务器请求资源，再发给浏览器并缓存在本地。</li>
</ol>
<p><img src="@source/images/cdn.png" alt="img"></p>
<p><strong>参考资料：</strong></p>
<ul>
<li>
<p><a href="https://www.zhihu.com/question/36514327/answer/193768864" target="_blank" rel="noopener noreferrer">CDN是什么？使用CDN有什么优势？<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://link.zhihu.com/?target=https%3A//juejin.im/post/5d105e1af265da1b71530095" target="_blank" rel="noopener noreferrer">CDN原理简析<ExternalLinkIcon/></a></p>
</li>
</ul>
<h5 id="负载均衡器" tabindex="-1"><a class="header-anchor" href="#负载均衡器" aria-hidden="true">#</a> 负载均衡器</h5>
<ul>
<li>
<p>作用：转发请求。根据 Web 服务器的负载状况决定将请求转发到哪台  Web 服务器上。</p>
<ul>
<li>当服务器的访问量上升时，所有访问都打到同一台服务器上，服务器性能问题随之而来。我们可以将应用部署在多台 Web 服务器上，然后使用一种叫作负载均衡器的设备，客户端将请求发到负载均衡器上，然后由负载均衡器来判断将请求转发给哪台 Web 服务器。</li>
<li>对于客户端来说，负载均衡器就是一台 Web 服务器，我们需要要用负载均衡器的 IP 地址代替 Web 服务器的实际地址注册到 DNS 服务器上，客户端会认为负载均衡器就是一台 Web 服务器，并向其发送请求。<img src="@source/images/负载均衡.png" alt="image.png"></li>
</ul>
</li>
<li>
<p>负载均衡实现方式：</p>
<ul>
<li>反向代理：
<ul>
<li>用户的请求都发送到反向代理服务上，然后由反向代理服务器来转 发请求到真实的服务器上，以此来实 现集群的负载平衡。</li>
</ul>
</li>
<li>DNS ：
<ul>
<li>因一般的大型网站使用多台服务器提供服务，因此一个域名可能会对应多个服务器地址。</li>
<li>当用户向网站域名请求的时候，DNS 服务器返回这个域名 所对应的服务器 IP 地址的集合，但在 每个回答中，会循环这些 IP 地址的顺序，用户一般会选择排在前面的地址发送请求。以此将 用户的请求均衡的分配到各个不同的服 务器上，这样来实现负载均衡。</li>
<li>缺点：由于 DNS 服务器中存在缓存，所以有可能一个服务器出现故障后，域名解 析仍然返回的是那个 IP 地址，就会造成访问的问题。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="源服务器处理" tabindex="-1"><a class="header-anchor" href="#源服务器处理" aria-hidden="true">#</a> 源服务器处理</h4>
<ul>
<li>当 CDN 回源或者请求到达负载均衡器时，都需要将请求转发到源服务器，这时候源服务器就需要接收请求、处理和返回响应。</li>
</ul>
<h5 id="拆包和组装" tabindex="-1"><a class="header-anchor" href="#拆包和组装" aria-hidden="true">#</a> 拆包和组装</h5>
<ul>
<li>
<p>当网络包到达 Web 服务器之后，服务器就会接收这个包并进行处理。</p>
</li>
<li>
<p>根据用途，服务器可以分为很多种类，其硬件和操作系统与客户端是有所不同的。但是，网络相关的部分，如网卡、协议栈、Socket 库等功能和客户端却并无二致。无论硬件和操作系统如何变化，TCP 和 IP 的功能都是一样的，或者说这些功能规格都是统一的。</p>
</li>
<li>
<p>现在，服务端接收到的网络包格式如下： <img src="@source/images/网卡接受出去的包.png" alt="image.png"></p>
</li>
<li>
<p>服务端需要进行拆包，取出客户端的数据（应用程序负责生成的部分），然后找到服务端的应用程序并交给它处理。具体过程如下：</p>
<ul>
<li>
<p><strong>链路层</strong></p>
<ul>
<li>网卡驱动会根据 MAC 头部判断协议类型，并将包交给相应的协议栈。</li>
</ul>
</li>
<li>
<p><strong>网络层</strong></p>
<ul>
<li>协议栈的 IP 模块会检查 IP 头部：
<ul>
<li>检查接收方 IP 地址，判断是不是发给自己的；</li>
<li>检查 IP。</li>
</ul>
</li>
<li>头部的内容确定包是否被分片，如果是分片的包，则将包暂时存放在内存中，等所有分片全部到达之后将分片组装起来还原成原始包；</li>
<li>检查 IP 头部的协议号字段，并将包转交给相应的模块。例如，如果协议号为 06（十六进制），则将包转交给 TCP 模块；如果是 11（十六进制），则转交给 UDP 模块。</li>
</ul>
</li>
<li>
<p><strong>传输层</strong></p>
<ul>
<li>这里我们假设这个包被交给 TCP 模块处理。前面的步骤对于任何包都是一样的，但后面的 TCP 模块的操作则根据包的内容有所区别。
<ul>
<li>如果收到的是发起连接的包，TCP 模块会：
<ul>
<li>确认 TCP 头部的控制位 SYN；</li>
<li>检查接收方端口号；</li>
<li>为相应的等待连接套接字复制一个新的副本；</li>
<li>记录发送方 IP 地址和端口号等信息。</li>
</ul>
</li>
<li>收到数据包时，TCP 模块会：
<ul>
<li>根据收到的包的发送方 IP 地址、发送方端口号、接收方 IP 地址、接收方端口号找到相对应的套接字；</li>
<li>将数据块拼合起来并保存在接收缓冲区中；</li>
<li>向客户端返回 ACK</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>分配接收到的包过程：<img src="@source/images/分配接收到的包.png" alt="image.png"></p>
</li>
</ul>
<h5 id="处理请求" tabindex="-1"><a class="header-anchor" href="#处理请求" aria-hidden="true">#</a> 处理请求</h5>
<ul>
<li>
<p>网络包经过从链路层到网络层再到传输层的拆包和组装过程，最终将用户数据传送给了服务端的 Web 服务器。</p>
</li>
<li></li>
</ul>
<p><img src="@source/images/http-7.1.png" alt=""></p>
<p><img src="@source/images/http-7.2.png" alt=""></p>
<p><img src="@source/images/http-7.3.png" alt=""></p>
<h3 id="浏览器接受响应" tabindex="-1"><a class="header-anchor" href="#浏览器接受响应" aria-hidden="true">#</a> 浏览器接受响应</h3>
<ul>
<li>现在浏览器接收到了服务端的响应，先需要对响应进行解析。浏览器会根据响应的状态码和 HTTP 头部消息决定下一步操作。</li>
</ul>
<table>
<thead>
<tr>
<th><strong>状态码</strong></th>
<th><strong>含义</strong></th>
<th><strong>常见状态码</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>1xx</td>
<td>信息提示：接收的请求正在处理</td>
<td>101：Switching Protocals 服务器正在根据客户端的制定，将协议切换成 Update 首部所列的协议。可查阅 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism" target="_blank" rel="noopener noreferrer">协议升级机制<ExternalLinkIcon/></a>。</td>
</tr>
<tr>
<td>2xx</td>
<td>成功：请求正常处理完毕</td>
<td>200：OK 请求成功，消息主体包含了所请求的资源</td>
</tr>
<tr>
<td>3xx</td>
<td>重定向：需要进一步操作以完成请求</td>
<td>301：Moved Permanently 永久重定向 302：Found 临时重定向（HTTP 1.0） 304：Not Modified 请求资源未修改，服务端不用返回资源，客户端可以使用本地资源 307：Temporary Redirect 临时重定向（HTTP 1.1） Chrome 用于内部重定向</td>
</tr>
<tr>
<td>4xx</td>
<td>客户端错误</td>
<td>401：Unanthorized 未授权 404：Not Found 服务器无法找到所请求 URL 对应的资源</td>
</tr>
<tr>
<td>5xx</td>
<td>服务器错误</td>
<td>500: Internal Server Error 服务端内部错误 502: Bad Gateway 代理网关错误</td>
</tr>
</tbody>
</table>
<h4 id="http重定向" tabindex="-1"><a class="header-anchor" href="#http重定向" aria-hidden="true">#</a> HTTP重定向</h4>
<ul>
<li>
<p>当单个页面、表单或者整个 Web 应用被迁移到新的 URL 下的时候，服务端告诉客户端需要重定向到其他位置查找资源。</p>
</li>
<li>
<p>过程：</p>
<ul>
<li>服务器通过发送特殊的响应（即 redirects）而触发。</li>
<li>浏览器判断响应的状态码为 3xx 。</li>
<li>浏览器在接收到重定向响应的时候，会采用该响应提供的新的 URL ，并立即进行加载；大多数情况下，除了会有一小部分性能损失之外，重定向操作对于用户来说是不可见的。</li>
</ul>
<p><img src="@source/images/http重定向.png" alt="img"></p>
</li>
<li>
<p>不同类型的重定向映射可以划分为三个类别：</p>
<ul>
<li><a href="https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections$edit#Permanent_redirections" target="_blank" rel="noopener noreferrer">永久重定向<ExternalLinkIcon/></a></li>
<li><a href="https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections$edit#Temporary_redirections" target="_blank" rel="noopener noreferrer">临时重定向<ExternalLinkIcon/></a></li>
<li><a href="https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections$edit#Special_redirections" target="_blank" rel="noopener noreferrer">特殊重定向<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<p>参考资料：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections" target="_blank" rel="noopener noreferrer">HTTP 重定向<ExternalLinkIcon/></a></p>
<h4 id="检测响应体" tabindex="-1"><a class="header-anchor" href="#检测响应体" aria-hidden="true">#</a> 检测响应体</h4>
<ul>
<li>常见的 HTTP 请求是请求 HTML 文档、静态资源（JS/CSS/图片）以及 Ajax 数据请求等</li>
<li>当浏览器拿到 HTTP 响应消息后，首先检查响应消息是否完整、有没有被压缩、它是什么类型等等，浏览器才能进行下一步的操作，例如如果是 HTML 文档，就需要渲染它。</li>
<li>根据 HTTP 响应报文，依次 检测截尾（Content-Length）、检测内容编码（Content-Encoding）、检测媒体类型和字符集（Content-Type）、综合判断响应实体的数据类型 和 处理响应体。</li>
</ul>
<p><strong>HTTP 响应报文</strong></p>
<ul>
<li>HTTP Responses Header 响应头对照表</li>
</ul>
<table>
<thead>
<tr>
<th>Header</th>
<th>解释</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>Accept-Ranges</td>
<td>表明服务器是否支持指定范围请求及哪种类型的分段请求</td>
<td>Accept-Ranges: bytes</td>
</tr>
<tr>
<td>Age</td>
<td>从原始服务器到代理缓存形成的估算时间（以秒计，非负）</td>
<td>Age: 12</td>
</tr>
<tr>
<td>Allow</td>
<td>对某网络资源的有效的请求行为，不允许则返回405</td>
<td>Allow: GET, HEAD</td>
</tr>
<tr>
<td>Cache-Control</td>
<td>告诉所有的缓存机制是否可以缓存及哪种类型</td>
<td>Cache-Control: no-cache</td>
</tr>
<tr>
<td>Content-Encoding</td>
<td>web服务器支持的返回内容压缩编码类型。</td>
<td>Content-Encoding: gzip</td>
</tr>
<tr>
<td>Content-Language</td>
<td>响应体的语言</td>
<td>Content-Language: en,zh</td>
</tr>
<tr>
<td>Content-Length</td>
<td>响应体的长度</td>
<td>Content-Length: 348</td>
</tr>
<tr>
<td>Content-Location</td>
<td>请求资源可替代的备用的另一地址</td>
<td>Content-Location: /index.htm</td>
</tr>
<tr>
<td>Content-MD5</td>
<td>返回资源的MD5校验值</td>
<td>Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==</td>
</tr>
<tr>
<td>Content-Range</td>
<td>在整个返回体中本部分的字节位置</td>
<td>Content-Range: bytes 21010-47021/47022</td>
</tr>
<tr>
<td>Content-Type</td>
<td>返回内容的MIME类型</td>
<td>Content-Type: text/html; charset=utf-8</td>
</tr>
<tr>
<td>Date</td>
<td>原始服务器消息发出的时间</td>
<td>Date: Tue, 15 Nov 2010 08:12:31 GMT</td>
</tr>
<tr>
<td>ETag</td>
<td>请求变量的实体标签的当前值</td>
<td>ETag: “737060cd8c284d8af7ad3082f209582d”</td>
</tr>
<tr>
<td>Expires</td>
<td>响应过期的日期和时间</td>
<td>Expires: Thu, 01 Dec 2010 16:00:00 GMT</td>
</tr>
<tr>
<td>Last-Modified</td>
<td>请求资源的最后修改时间</td>
<td>Last-Modified: Tue, 15 Nov 2010 12:45:26 GMT</td>
</tr>
<tr>
<td>Location</td>
<td>用来重定向接收方到非请求URL的位置来完成请求或标识新的资源</td>
<td>Location: http://www.zcmhi.com/archives/94.html</td>
</tr>
<tr>
<td>Pragma</td>
<td>包括实现特定的指令，它可应用到响应链上的任何接收方</td>
<td>Pragma: no-cache</td>
</tr>
<tr>
<td>Proxy-Authenticate</td>
<td>它指出认证方案和可应用到代理的该URL上的参数</td>
<td>Proxy-Authenticate: Basic</td>
</tr>
<tr>
<td>refresh</td>
<td>应用于重定向或一个新的资源被创造，在5秒之后重定向（由网景提出，被大部分浏览器支持）</td>
<td>Refresh: 5; url=http://www.zcmhi.com/archives/94.html</td>
</tr>
<tr>
<td>Retry-After</td>
<td>如果实体暂时不可取，通知客户端在指定时间之后再次尝试</td>
<td>Retry-After: 120</td>
</tr>
<tr>
<td>Server</td>
<td>web服务器软件名称</td>
<td>Server: Apache/1.3.27 (Unix) (Red-Hat/Linux)</td>
</tr>
<tr>
<td>Set-Cookie</td>
<td>设置Http Cookie</td>
<td>Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1</td>
</tr>
<tr>
<td>Trailer</td>
<td>指出头域在分块传输编码的尾部存在</td>
<td>Trailer: Max-Forwards</td>
</tr>
<tr>
<td>Transfer-Encoding</td>
<td>文件传输编码</td>
<td>Transfer-Encoding:chunked</td>
</tr>
<tr>
<td>Vary</td>
<td>告诉下游代理是使用缓存响应还是从原始服务器请求</td>
<td>Vary: *</td>
</tr>
<tr>
<td>Via</td>
<td>告知代理客户端响应是通过哪里发送的</td>
<td>Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1)</td>
</tr>
<tr>
<td>Warning</td>
<td>警告实体可能存在的问题</td>
<td>Warning: 199 Miscellaneous warning</td>
</tr>
<tr>
<td>WWW-Authenticate</td>
<td>表明客户端请求实体应该使用的授权方案</td>
<td>WWW-Authenticate: Basic</td>
</tr>
</tbody>
</table>
<h4 id="断开tcp连接" tabindex="-1"><a class="header-anchor" href="#断开tcp连接" aria-hidden="true">#</a> 断开TCP连接</h4>
<p><img src="@source/images/http-8.png" alt=""></p>
<p><strong>四次挥手过程：</strong></p>
<p>因为 TCP 连接是全双工的，也就是说通信的双方都可以向对方发送和接收消息， 所以断开连接需要双方的确认。</p>
<ul>
<li>
<p>第一次挥手，客户端认为没有数据要再发送给服务器端，它就向服务器发送一个 FIN 报文段，申请断开客户端到服务器端的 连接。发送后客户端进入 FIN_WAIT_1 状态。</p>
</li>
<li>
<p>第二次挥手，服务器端接收到客户端释放连接的请求后，向客户端发送一个确认 报文段，表示已经接收到了客户端释放连接的 请求，以后不再接收客户端发送 过来的数据。但是因为连接是全双工的，所以此时，服务器端还可以向客户端发 送数据。服务 器端进入 CLOSE_WAIT 状态。客户端收到确认后，进入 FIN_WAIT_2 状态。</p>
</li>
<li>
<p>第三次挥手，服务器端发送完所有数据后，向客户端发送 FIN 报文段，申请断 开服务器端到客户端的连接。发送后进入 LAS T_ACK 状态。</p>
</li>
<li>
<p>第四次挥手，客户端接收到 FIN 请求后，向服务器端发送一个确认应答，并进 入 TIME_WAIT 阶段。该阶段会持续一段时间， 这个时间为报文段在网络中的 最大生存时间，如果该时间内服务端没有重发请求的话，客户端进入 CLOSED 的 状态。如果收到 服务器的重发请求就重新发送确认报文段。服务器端收到客户 端的确认报文段后就进入 CLOSED 状态，这样全双工的连接就被 释放了。</p>
</li>
</ul>
<p>TCP 使用四次挥手的原因：</p>
<ul>
<li>因为 TCP 的连接是全双工的，所以需要双方分别释 放到对方的连接，单独一方的连接释放，只代 表不能再向对方发送数据，连接 处于的是半释放的状态。</li>
<li>最后一次挥手中，客户端会等待一段时间再关闭的原因，是为了防止发送给服务 器的确认报文段丢失或者出错，从而导致服务器 端不能正常关闭</li>
</ul>
<h3 id="浏览器解析" tabindex="-1"><a class="header-anchor" href="#浏览器解析" aria-hidden="true">#</a> 浏览器解析</h3>
<ul>
<li>“解析”是浏览器将通过网络接收的数据转换为DOM和CSSOM的步骤，通过渲染器把DOM和CSSOM在屏幕上绘制成页面</li>
</ul>
<h4 id="建立dom树" tabindex="-1"><a class="header-anchor" href="#建立dom树" aria-hidden="true">#</a> 建立DOM树</h4>
<p><img src="@source/images/html-dmo.png" alt=""></p>
<ul>
<li>影响构建 DOM 时间：
<ul>
<li>DOM节点的数量越多/节点深度越深，构建DOM树所需的时间就越长。</li>
<li><code v-pre>&lt;script&gt;</code>标签阻塞渲染并停止HTML的解析。</li>
</ul>
</li>
</ul>
<h4 id="建立-cssdom" tabindex="-1"><a class="header-anchor" href="#建立-cssdom" aria-hidden="true">#</a> 建立 CSSDOM</h4>
<p><img src="@source/images/css-dom.png" alt=""></p>
<h4 id="javascript-代码执行" tabindex="-1"><a class="header-anchor" href="#javascript-代码执行" aria-hidden="true">#</a> JavaScript 代码执行</h4>
<ul>
<li>当 CSS 被解析并创建 CSSOM 时，其他资源，包括 JavaScript 文件正在下载（preload scanner）。</li>
<li>JavaScript被解释、编译、解析和执行。脚本被解析为抽象语法树。一些浏览器引擎使用”Abstract Syntax Tree“并将其传递到解释器中，输出在主线程上执行的字节码。</li>
</ul>
<p>JavaScript代码的整个执行过程，分为两个阶段：</p>
<ul>
<li>代码编译阶段：编译阶段由编译器完成，将代码翻译成可执行代码，这个阶段作用域规则会确定。</li>
<li>代码执行阶段：由引擎完成，主要任务是执行可执行代码，执行上下文在这个阶段创建。</li>
</ul>
<p><img src="@source/images/jszhixing.png" alt=""></p>
<h4 id="构建辅助功能树" tabindex="-1"><a class="header-anchor" href="#构建辅助功能树" aria-hidden="true">#</a> 构建辅助功能树</h4>
<ul>
<li>
<p>浏览器还构建辅助设备用于分析和解释内容的辅助功能（<a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility" target="_blank" rel="noopener noreferrer">accessibility<ExternalLinkIcon/></a> ）树。可访问性对象模型（AOM）类似于DOM的语义版本。当DOM更新时，浏览器会更新辅助功能树。辅助技术本身无法修改可访问性树。*</p>
</li>
<li>
<p>在构建AOM之前，屏幕阅读器（<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide" target="_blank" rel="noopener noreferrer">screen readers<ExternalLinkIcon/></a>）无法访问内容。</p>
</li>
</ul>
<h3 id="浏览器渲染" tabindex="-1"><a class="header-anchor" href="#浏览器渲染" aria-hidden="true">#</a> 浏览器渲染</h3>
<ul>
<li>渲染步骤包括样式、布局、绘制，在某些情况下还包括合成。</li>
<li>过程：在解析步骤中创建的CSSOM树和DOM树组合成一个Render树，然后用于计算每个可见元素的布局，然后将其绘制到屏幕上。在某些情况下，可以将内容提升到它们自己的层并进行合成，通过在GPU而不是CPU上绘制屏幕的一部分来提高性能，从而释放主线程。</li>
</ul>
<h4 id="合成-render-树" tabindex="-1"><a class="header-anchor" href="#合成-render-树" aria-hidden="true">#</a> 合成 render 树</h4>
<ul>
<li>过程：将DOM和CSSOM组合成一个Render树，计算样式树或渲染树从DOM树的根开始构建，遍历每个可见节点。</li>
<li>每个可见节点都应用了其CSSOM规则。Render树保存所有具有内容和计算样式的可见节点——将所有相关样式匹配到DOM树中的每个可见节点，并根据CSS级联确定每个节点的计算样式。
<ul>
<li>可见节点计算规则：
<ul>
<li><code v-pre>&lt;head&gt;</code>和它的子节点以及任何具有<code v-pre>display: none</code>样式的结点，例如<code v-pre>script { display: none; }</code>（在user agent stylesheets可以看到这个样式）这些标签将不会显示，也就是它们不会出现在Render树上。</li>
<li>具有<code v-pre>visibility: hidden</code>的节点会出现在Render树上，因为它们会占用空间。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="布局-layout" tabindex="-1"><a class="header-anchor" href="#布局-layout" aria-hidden="true">#</a> 布局 Layout</h4>
<ul>
<li>概念：
<ul>
<li>第一次确定节点的大小和位置称为布局。随后对节点大小和位置的重新计算称为回流。</li>
<li>布局是确定呈现树中所有节点的宽度、高度和位置，以及确定页面上每个对象的大小和位置的过程。</li>
</ul>
</li>
<li>过程：
<ul>
<li>构建渲染树后，开始布局，在渲染树上运行布局以计算每个节点的几何体。</li>
<li>渲染树标识显示哪些节点（即使不可见）及其计算样式，但不标识每个节点的尺寸或位置。为了确定每个对象的确切大小和位置，浏览器从渲染树的根开始遍历它：以视区的大小为基础，布局通常从body开始，用每个元素的框模型属性排列所有body的子孙元素的尺寸，为不知道其尺寸的替换元素（例如图像）提供占位符空间。</li>
</ul>
</li>
</ul>
<h4 id="绘制-paint" tabindex="-1"><a class="header-anchor" href="#绘制-paint" aria-hidden="true">#</a> 绘制 Paint</h4>
<ul>
<li>概念：
<ul>
<li>将各个节点绘制到屏幕上，第一次出现的节点称为<a href="https://developer.mozilla.org/en-US/docs/Glossary/first_meaningful_paint" target="_blank" rel="noopener noreferrer">first meaningful paint（FCP）<ExternalLinkIcon/></a></li>
<li>在绘制或光栅化阶段，浏览器将在布局阶段计算的每个框转换为屏幕上的实际像素；</li>
<li>绘画包括将元素的每个可视部分绘制到屏幕上，包括文本、颜色、边框、阴影和替换的元素（如按钮和图像）。</li>
</ul>
</li>
<li>绘制可以将布局树中的元素分解为多个层。将内容提升到GPU上的层（而不是CPU上的主线程）可以提高绘制和重新绘制性能。</li>
</ul>
<h3 id="合成-compositing" tabindex="-1"><a class="header-anchor" href="#合成-compositing" aria-hidden="true">#</a> 合成 Compositing</h3>
<ul>
<li>合成发生情况：为了确保平滑滚动和动画，占据主线程的所有内容，包括计算样式，以及回流和绘制，必须让浏览器在16.67毫秒内完成。在2048x 1536，iPad有超过314.5万像素将被绘制到屏幕上。那是很多像素需要快速绘制。为了确保重绘的速度比初始绘制的速度更快，屏幕上的绘图通常被分解成数层。如果发生这种情况，则需要进行合成。</li>
<li>概念：当文档的各个部分以不同的层绘制，相互重叠时，必须进行合成，以确保它们以正确的顺序绘制到屏幕上，并正确显示内容。</li>
<li>回流情况：当页面继续加载资产时，可能会发生回流，回流会触发重新绘制和重新组合。</li>
</ul>
<h4 id="重排-回流" tabindex="-1"><a class="header-anchor" href="#重排-回流" aria-hidden="true">#</a> 重排/回流</h4>
<ul>
<li>对节点大小和位置的重新计算称为回流。</li>
</ul>
<p><img src="@source/images/chongpai.png" alt=""></p>
<ul>
<li>图片避免回流：定义图像的大小，就不需要重新绘制，只需要重新绘制需要重新绘制的层，并在必要时进行合成。</li>
</ul>
<h4 id="重绘" tabindex="-1"><a class="header-anchor" href="#重绘" aria-hidden="true">#</a> 重绘</h4>
<p><img src="@source/images/chonghui.png" alt=""></p>
<p><strong>参考资料</strong></p>
<p><a href="https://juejin.cn/post/6930890886616350734/#heading-1" target="_blank" rel="noopener noreferrer">前端性能优化指南<ExternalLinkIcon/></a></p>
<h3 id="用户交互" tabindex="-1"><a class="header-anchor" href="#用户交互" aria-hidden="true">#</a> 用户交互</h3>
<ul>
<li>在用户交互过程中，用户触发的滚动等操作，会使页面进入回流和重绘阶段</li>
</ul>
<h3 id="关键渲染路径" tabindex="-1"><a class="header-anchor" href="#关键渲染路径" aria-hidden="true">#</a> 关键渲染路径</h3>
<ul>
<li>通过上文的介绍，我们知道渲染树是由 DOM 和 CSSOM 组合而成的。因此，在 HTML 和 CSS 没有加载完成前，页面不会渲染任何内容。</li>
<li>换句话说，HTML 和 CSS 都是会阻塞页面渲染的资源。除此之外，JavaScript 也会阻塞页面渲染。浏览器在解析 HTML 时，如果遇到 <code v-pre>&lt;script&gt;</code> 标签时，一般会暂停解析，直到 JavaScript 执行完毕后才会继续解析剩余的 HTML。对于外部 JavaScript，在执行前还需额外等待请求的时间。这些首屏渲染所必须的关键资源，共同组成了关键渲染路径。</li>
</ul>
</div></template>



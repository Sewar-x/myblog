<template><div><h2 id="vue-vs-react" tabindex="-1"><a class="header-anchor" href="#vue-vs-react" aria-hidden="true">#</a> Vue Vs React</h2>
<h3 id="总览" tabindex="-1"><a class="header-anchor" href="#总览" aria-hidden="true">#</a> 总览</h3>
<p><img src="@source/images/Vue-vs-React.png" alt=""></p>
<p><strong>参考资料</strong></p>
<p><a href="https://blog.csdn.net/xgangzai/article/details/115301290" target="_blank" rel="noopener noreferrer">谈谈Vue和React的区别？<ExternalLinkIcon/></a></p>
<h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h4>
<h5 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h5>
<p>React:</p>
<ul>
<li>组件的生命周期可分成三个状态：
<ul>
<li>Mounting：已插入真实 DOM</li>
<li>Updating：正在被重新渲染</li>
<li>Unmounting：已移出真实 DOM</li>
</ul>
</li>
<li>生命周期的方法有：
<ul>
<li><strong>componentWillMount</strong> 在渲染前调用,在客户端也在服务端。</li>
<li><strong>componentDidMount</strong> : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。</li>
<li><strong>componentWillReceiveProps</strong> 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。</li>
<li><strong>shouldComponentUpdate</strong> 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
可以在你确认不需要更新组件时使用。</li>
<li><strong>componentWillUpdate</strong>在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。</li>
<li><strong>componentDidUpdate</strong> 在组件完成更新后立即调用。在初始化时不会被调用。</li>
<li><strong>componentWillUnmount</strong>在组件从 DOM 中移除之前立刻被调用。</li>
</ul>
</li>
</ul>
<p>这些方法的详细说明，可以参考<a href="http://facebook.github.io/react/docs/component-specs.html#lifecycle-methods" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>。</p>
<p><img src="@source/images/react生命周期.png" alt="image-20210712094013630"></p>
</div></template>



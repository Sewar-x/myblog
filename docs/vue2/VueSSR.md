# VUE-SSR

## 基础

基础知识参考官方文档[Vue SSR](https://cn.vuejs.org/guide/scaling-up/ssr.html)

## VUE SSR 流程

 基于官文demo项目：[HackerNews Demo](https://github.com/vuejs/vue-hackernews-2.0/) 进行分析，项目结构等基础参考 [vue-ssr 文档](https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)。 

* 开发环境下执行流程

![](../flow-graph/ssr过程.png)

* SSR 流程主要分为：
  * 服务端渲染
  * 客户端渲染
* 服务端渲染
  * 渲染时机： 
    * 通过 express 服务渲染：浏览器输入 url 直接定向到某个页面，express 执行 `entry-server.js` 动态渲染 Html
    * 静态化页面时，通过执行 `entry-client.js` 渲染出 html 页面
  * 总体流程：
    * 浏览器输入 url ->  express 服务接受请求 -> 服务端获取数据 -> 数据注入 store -> SSR Renderer 渲染HTML页面 -> 返回浏览器
* 客户端渲染
  * 渲染时机： 通过页面中链接切换路由
  * 总体流程：首次渲染时由服务端渲染，客户端激活后通过路由导航的所有页面又客户端渲染。
    * 页面内点击链接 -> 客户端获取数据 -> 渲染页面

## SSR 注意事项

* 服务端渲染时，将数据进行响应式的过程在服务器上是多余的，所以默认情况下禁用响应式数据。避免将「数据」转换为「响应式对象」的性能开销。
* 所有的生命周期钩子函数中，只有 `beforeCreate` 和 `created` 会在服务器端渲染 (SSR) 过程中被调用。任何其他生命周期钩子函数中的代码（例如 `beforeMount` 或 `mounted`），只会在客户端执行。
  * 为什么只有`beforeCreate` 和 `created` 会在服务器端渲染 (SSR) 过程中被调用？
    *  服务端渲染过程中不需要响应式数据，没有动态更新过程；
    *  服务端渲染在VUE初始化时仅仅 new VUE 实例，不需要挂载（$mount）实例，因此不会执行 $mount 之后流程；
    *  客户端动态请求的数据/内容 需要在 mounted 函数中执行（如：动态获取用户数据） 
* 对于仅浏览器可用的 API，通常方式是，在「纯客户端 (client-only)」的生命周期钩子函数 `beforeMounte`、`mounted` 中惰性访问 (lazily access) 它们。
* 应该避免在 `beforeCreate` 和 `created` 生命周期时产生全局副作用的代码。
  * 例如在其中使用 `setInterval` 设置 time，由于在 SSR 期间并不会调用销毁钩子函数，所以 timer 将永远保留下来
* 服务端和浏览器通用代码不可接受特定平台的 API：
  * 如果通用代码中，直接使用了仅浏览器可用的全局变量 `window` 或 `document`，则会在 Node.js 中执行时抛出错误；
  * 通用代码使用 Node.js 平台特定 API，如`global`，则会在浏览器中执行报错；
* 大多数自定义指令直接操作 DOM，因此会在服务器端渲染 (SSR) 过程中导致错误；
* 静态函数 `asyncData`无法访问 `this`，因为此函数会在组件实例化之前调用；
* 服务端渲染时不需要响应式数据，默认禁用响应式数据，可以避免将「数据」转换为「响应式对象」的性能开销；
* 模板中的`<!--vue-ssr-outlet-->` 注释 部分是 renderer 渲染 HTML 字符串插入的位置；

## 参考资料

[vue-ssr 文档](https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)
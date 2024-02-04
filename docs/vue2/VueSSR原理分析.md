# VueSSR原理分析



## **SSR是什么？**

Vue.js 是一个用于构建客户端应用的框架。

默认情况下，Vue 组件的职责是在浏览器中生成和操作 DOM。

然而，Vue 也支持将组件在服务端直接渲染成 HTML 字符串，作为服务端响应返回给浏览器，最后在浏览器端将静态的 HTML“激活”(hydrate) 为能够交互的客户端应用。

一个由服务端渲染的 Vue.js 应用也可以被认为是“同构的”(Isomorphic) 或“通用的”(Universal)，因为应用的大部分代码同时运行在服务端和客户端。

> 基础知识参考官方文档[Vue SSR](https://cn.vuejs.org/guide/scaling-up/ssr.html)

## 为什么要用 SSR？

* **更好的 SEO**：搜索引擎爬虫可以直接看到完全渲染的页面。
  * 搜索引擎爬虫是不会等待异步请求数据结束后再抓取信息，SSR 技术在服务器端直接生成 HTML，这意味着爬虫可以直接获取完整的 HTML 页面，而无需等待 JavaScript 代码的执行。

* **更快的首屏加载**：
  * 服务端渲染的 HTML 无需等到所有的 JavaScript 都下载并执行完成之后才显示，所以你的用户将会更快地看到完整渲染的页面。
  * 数据获取过程在首次访问时在服务端完成，相比于从客户端获取，可能有更快的数据库连接。
  * 这通常可以带来更高的[核心 Web 指标](https://web.dev/vitals/)评分、更好的用户体验，而对于那些“首屏加载速度与转化率直接相关”的应用来说，这点可能至关重要。

## **前端渲染架构类型**

前端架构演进方向： **CSR 一> SSR 一> NSR 一> ESR**

具体参考博客：[前端渲染架构 | Sewen 博客 (sewar-x.github.io)](https://sewar-x.github.io/Front-end-Engineering/前端渲染架构/#多页面应用)

## **SSR架构**

> 项目基于 Vue2 SSR 官文 demo 项目 [HackerNews](https://github.com/vuejs/vue-hackernews-2.0/)  进行分析，在阅读之前建议先阅读 [Vue.js 服务器端渲染指南 | Vue SSR 指南 (vuejs.org)](https://v2.ssr.vuejs.org/zh/#什么是服务器端渲染-ssr)

![SSR架构](../images/SSR架构.png)

Vue SSR 框架为同构框架，应用代码编译过程 Vue SSR 提供了两个编译入口，服务端应用和客户端应用，作为抹平由于环境不同的代码差异；

由于用例和平台 API 的差异，当运行在不同环境中时，代码将不会完全相同。

对于客户端应用程序和服务器应用程序，我们都要使用 webpack 打包 - 服务器需要「服务器 bundle」然后用于服务器端渲染(SSR)，而「客户端 bundle」会发送给浏览器，用于混合静态标记。

## **项目源码**

SSR 应用包含主要源码：

* 通用代码 `app.js`: 用于服务端渲染和客户端渲染的公共代码。包含应用通用代码、组件、Vuex、路由和页面等。
* 服务端渲染 `Server entry`: 创建返回应用实例，同时还会进行路由匹配和数据的预处理，仅运行于服务器。
* 客户端渲染 `Client entry`:  负责创建应用程序，挂载实例 DOM ，仅运行于浏览器。
* HTTP 服务 `Server.js`:  Node Server，用于接受请求编译服务端渲染的 HTTP 服务。

**通用代码特性**

* 通用代码不可接受特定平台的 API（因此如果你的代码中，直接使用了像 `window` 或 `document`，这种仅浏览器可用的全局变量，则会在 Node.js 中执行时抛出错误，反之也是如此）

**服务端渲染特性**

* 服务器端渲染中**为每个请求创建一个新的根 Vue 实例**，每个请求都是全新的、独立的应用程序实例，以便不会有交叉请求造成的状态污染；
* 将数据进行响应式的过程在服务器上是多余的，所以默认情况下禁用；
* 所有的生命周期钩子函数中，只有 `beforeCreate` 和 `created` 会在服务器端渲染 (SSR) 过程中被调用；
  * 应该避免在 `beforeCreate` 和 `created` 生命周期时产生全局副作用的代码，例如在其中使用 `setInterval` 设置 timer。由于服务端渲染代码在 SSR 期间并不会调用销毁钩子函数，所以 timer 将永远保留下来。
  * 为了避免这种情况，请将副作用代码移动到 `beforeMount` 或 `mounted` 生命周期中。

**客户端渲染特性**

* 任何生命周期钩子函数中的代码（例如 `beforeMount` 或 `mounted`），都会在客户端执行。
* 对于仅浏览器可用的 API，通常方式是，在「纯客户端 (client-only)」的生命周期钩子函数中惰性访问 (lazily access) 它们。



## **编译流程**

服务端编译：

* 通过 Wepack 构建 通用代码 `app.js` + 服务端渲染代码 `server-entry.js` + 渲染模板 = `Server Bundle`;

* `Server Bundle` 运行在 `Node Server`。
* 渲染时机： 
  * 通过 express 服务渲染：浏览器输入 url 直接定向到某个页面，express 执行 `entry-server.js` 动态渲染 HTML；
  * 静态化页面时，通过执行 `entry-client.js` 渲染出 HTML 页面。
* 总体流程：
  * 浏览器输入 `url -> express 服务接受请求 -> 服务端获取数据 -> 数据注入 store -> SSR Renderer 渲染HTML页面 -> 返回浏览器`

客户端编译：

* 通过 Wepack 构建 通用代码 `app.js` + 客户端端渲染代码 `client-entry.js` + 渲染模板 = `Client Bundle`;
* 在浏览器中 `Client Bundle` + `Server Bundle`   =  HTML 静态页面。
* 渲染时机： 通过页面中链接切换路由；
* 总体流程：
  * 首次渲染：由服务端渲染输出 HTML 页面发送到浏览器，客户端激活后通过路由导航的页面再次通过客户端渲染。
  * 页面内点击链接 -> 客户端获取数据 -> 浏览器渲染页面。



![](../flow-graph/ssr过程.png)

> 渲染流程：服务端渲染的主要流程是在服务器端生成完整的HTML页面，并将其发送给浏览器展示。
>
> 1. 客户端请求：用户在浏览器中输入网址或点击链接，发送请求到服务器。
> 2. 服务器接收请求：服务器接收到客户端的请求，并进行处理。
> 3. 数据获取：服务器根据请求的内容，可能需要从数据库、API接口或其他数据源获取所需的数据。
> 4. 模板渲染：服务器使用事先定义好的模板引擎或渲染框架，将数据注入到模板中，生成完整的HTML页面。
>    - 在不同页面之间导航需要下载新的HTML，首页会从缓存中获取已渲染页面，为查找到则服务端重新渲染。
> 5. 生成响应：服务器将渲染好的HTML页面作为响应的一部分，包括设置相应的HTTP状态码和头部信息。
> 6. 响应发送：服务器将生成的响应发送回客户端，通过网络传输到浏览器。
> 7. 客户端展示：浏览器接收到服务器发送的响应后，解析HTML并呈现页面内容。
>    - 客户端所需要做的仅仅是html页面的展现和之后的DOM事件处理。
> 8. 客户端交互：浏览器加载完初始页面后，可以执行JavaScript代码，处理用户交互、数据请求和动态更新等操作



## **源码分析**

> 项目基于 Vue2 SSR 官文 demo 项目 [HackerNews](https://github.com/vuejs/vue-hackernews-2.0/)  进行分析

### **项目目录**

![image-20240204153420534](../images/vuessr项目目录.png)

### `app.js`

`app.js` 是我们应用程序的「通用 entry」。

在纯客户端应用程序中，我们将在此文件中创建根 Vue 实例，并直接挂载到 DOM。

在服务器端渲染(SSR)，为每个请求创建一个新的根 Vue 实例，避免请求状态交叉污染。

`app.js` 简单地使用 export 导出一个 `createApp` 函数,该函数在每次调用时创建一个新的 store, router, app实例：

```js
import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import * as filters from './util/filters'

// 标题 mixin
Vue.mixin(titleMixin)

// 注册全局 utility 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// Node.js 服务器是一个长期运行的进程。当我们的代码进入该进程时，它将进行一次取值并留存在内存中。这意味着如果创建一个单例对象，它将在每个传入的请求之间共享
// 为每个请求创建一个新的根 Vue 实例,避免请求状态交叉污染。暴露一个工厂函数，该函数在每次调用时创建一个新的 store, router, app实例
export function createApp() {
  const store = createStore()
  const router = createRouter()

  // 同步路由和 Vuex 状态，注册 store.state.route
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  // 创建 app 实例,此处注入 router 和 store 和 ssr 上下文到所有子组件,在 vue 实例任何地方可以通过 this.$router 和 this.$store 获取路由和状态对象
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  
  //对外暴露 app,  router 和  store
  // 请注意，我们不在这里挂载应用程序，在浏览器还是在服务器上初始化流程不同
  return { app, router, store }
}

```

### `entry-client.js`

客户端 entry 只需创建应用程序，并且将其挂载到 DOM 中 ，仅运行于浏览器

使用 WebPack 构建后的「客户端 bundle」会发送给浏览器，用于混合静态标记。

客户端 entry 核心代码：

```js
import { createApp } from './app'

// 客户端特定引导逻辑……

const { app } = createApp()

// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount('#app')
```

完整代码：

```js
import Vue from 'vue'
import 'es6-promise/auto'
import { createApp } from './app'
import ProgressBar from './components/ProgressBar.vue'

// 全局进度条
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

// 全局 mixin：当组件参数发生变化时，调用 asyncData；用于获取路由页面客户端渲染数据 
Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})

// 获取 app、router 和 store 实例
const { app, router, store } = createApp()

// 运行于浏览器渲染与服务器初始化的数据，数据是在服务端渲染并内联在页面 window.__INITIAL_STATE__ 变量
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// 等到路由器在钩子和异步组件之前解析了所有的异步
router.onReady(() => {

  // 添加用于处理异步数据的路由器钩子。
  // 在解析初始路由之后执行此操作，以便不会重复获取已有的数据。
  // 使用 router.before Resolve ()解析所有异步组件。
  router.beforeResolve((to, from, next) => {
    // 获取路由匹配的进入和离开的异步组件
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false
    // 比较进入和离开组件是否相同
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })
    // 过滤获取激活组件异步获取数据钩子
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
    // 不存在获取数据钩子，直接进入导航页面
    if (!asyncDataHooks.length) {
      return next()
    }

    bar.start()
    //根据 asyncData 获取数据
    Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
      .then(() => {
        bar.finish()
        next()
      })
      .catch(next)
  })

  //挂载 dom 
  app.$mount('#app')
})

// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}

```

### `entry-server.js`

创建返回应用实例，同时还会进行路由匹配和数据的预处理，仅运行于服务器。

服务端 entry 核心代码：

```js
import { createApp } from './app'

export default context => {
  const { app } = createApp()
  return app
}
```

完整代码：

```js
import { createApp } from './app'
const isDev = process.env.NODE_ENV !== 'production'
// 暴露一个方法用于 bundleRenderer 调用。在服务端渲染时主要执行数据预取，定义应用状态。
// 一旦数据完成同步，该方法将返回一个 Promise app 实例。
export default context => {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now() // 记录请求时间
    const { app, router, store } = createApp() // 每次请求获取新的 app 、 router、 store  对象
    const { url } = context // 请求 url
    const { fullPath } = router.resolve(url).route // 解析 url 获取路由路径
    if (fullPath !== url) {
      return reject({ url: fullPath })
    }
    // 开始路由导航
    router.push(url)
    // 等待路由异步钩子解析完成
    router.onReady(() => {
      // 获取路由匹配的组件
      const matchedComponents = router.getMatchedComponents()
      // 没有匹配的组件，返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      // 调用路由匹配到的组件的 fetchData 钩子，fetchData 钩子分发 store action，当异步动作完成并 store 同步状态完成则返回 Promise。
      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        // 开发环境下控制台输出获取数据时间
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        // 当异步数据获取完成，将数据渲染到 app 实例，暴露状态给 context，并使请求处理数据内联状态到响应的 HTML。
        // 内联数据可以使客户端渲染时无需在客户端重复请求内联数据
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}

```



## **WebPack 构建配置**

## **编译产物**





## 注意事项

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

[Vue-SSR 文档](https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)

[Vue.js 服务器端渲染指南 | Vue SSR 指南 (vuejs.org)](https://v2.ssr.vuejs.org/zh/#为什么使用服务器端渲染-ssr)
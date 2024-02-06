# 从零到一搭建移动端SSG项目

## **预渲染 (SSG )**

### **概念**

* SSG是指在**构建时（build time）生成静态HTML文件**，这些文件可以直接提供给浏览器，而不需要在服务器上进行动态渲染。
* 在构建过程中，组件会被渲染成静态HTML，并保存在文件中。这意味着每个页面都是预渲染的，并且可以以纯静态文件的形式提供给浏览器，无需运行 JavaScript 代码，会有一些辅助的JS来增强页面交互；

### **特点**

* **静态HTML文件**：预渲染生成的页面是纯静态的HTML文件，不需要在浏览器端执行JavaScript代码。
* **快速加载速度**：由于页面已经在构建时生成，没有额外的网络请求和JavaScript执行，预渲染的页面加载速度非常快。
* **支持SEO**：预渲染的HTML文件包含了完整的页面内容，对搜索引擎更友好，有助于提高网站的搜索引擎排名。

### **适应场景**

* **静态内容**：适用于**内容相对稳定的页面，页面内容不频繁变化的情况**下，可以使用预渲染来生成静态HTML文件。
* **高性能要求**：对于**追求快速加载速度和响应性能的网站**，预渲染可以大幅减少页面的加载时间，提供更好的用户体验。
* **SEO优化**：对于需要更好的搜索引擎优化（SEO）的网站，预渲染可以确保搜索引擎能够看到完整的渲染结果，提高网站的可索引性和排名。

### **不适应场景**

* **动态内容**：如果页面内容需要实时获取并根据用户交互进行更新，预渲染的静态HTML文件无法满足这种需求。

* **大规模网站**：对于大规模网站或包含大量动态内容的网站，预渲染可能不太实用，因为构建和维护大量静态HTML文件可能变得复杂和耗时。

* **频繁变化的内容**：如果页面内容需要频繁更新，每次更新都需要重新构建和生成静态HTML文件，预渲染的成本可能会很高。

* **大量路由场景**。 如果您的站点有成百上千个路由，则预渲染将非常缓慢。当然，每个更新只需要执行一次，但是可能要花一些时间。大多数人并没有最终获得数千个静态网页，而是以防万一。



## **项目特性**



## **技术栈**

项目基于 Vue SSR 官方demo：[ vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0) 进行二次开发，项目结构等基础参考 [vue-ssr 文档](https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)。

**`dependencies` 项目生产环境中运行所必需依赖的模块：**

|        类别         |      框架/插件      |   版本   |                             作用                             |
| :-----------------: | :-----------------: | :------: | :----------------------------------------------------------: |
|     **UI框架**      |                     |          |                                                              |
|       Vue.js        |         vue         | ^2.5.22  | 用于构建用户界面的渐进式框架，提供了响应式数据绑定和组件化的系统 |
|        Vant         |        vant         | ^2.10.10 |                基于 Vue.js 的移动端 UI 组件库                |
|       Swiper        |       swiper        |  ^6.3.5  |       移动端触摸滑动库，用于实现轮播图、滑动页面等效果       |
|    **状态管理**     |                     |          |                                                              |
|        Vuex         |        vuex         |  ^3.0.1  | Vue.js 的状态管理模式和库，用于集中存储和管理应用的所有组件的状态 |
|  Vuex-Router-Sync   |  vuex-router-sync   |  ^5.0.0  | 同步 Vue Router 和 Vuex 的状态，使得路由变化能够触发状态变化 |
|    **路由管理**     |                     |          |                                                              |
|     Vue Router      |     vue-router      |  ^3.0.1  |           Vue.js 的官方路由库，用于构建单页面应用            |
|     **国际化**      |                     |          |                                                              |
|      Vue I18n       |      vue-i18n       | ^8.15.3  |           Vue.js 的国际化插件，用于实现多语言支持            |
|    **HTTP请求**     |                     |          |                                                              |
|        Axios        |        axios        | ^0.19.0  | 基于 Promise 的 HTTP 客户端，用于浏览器和 node.js 中发送 HTTP 请求 |
|    **数据存储**     |                     |          |                                                              |
|      Firebase       |      firebase       |  7.6.2   |             移动和网页应用的实时数据库和后端服务             |
|      LRU Cache      |      lru-cache      |  ^4.1.1  | 基于 LRU (Least Recently Used) 算法的缓存库，用于在内存中存储数据 |
|     **工具库**      |                     |          |                                                              |
|      Cross-Env      |      cross-env      |  ^5.1.1  |                   跨平台设置和使用环境变量                   |
|       Day.js        |        dayjs        |  ^1.9.3  |      轻量级的日期处理库，用于解析、验证、操作和显示日期      |
|     ES6 Promise     |     es6-promise     |  ^4.1.1  |           提供统一的 Promise API，用于处理异步操作           |
|      JS Cookie      |      js-cookie      |  ^2.2.1  |      用于在浏览器中创建、读取、写入和删除 cookies 的库       |
|     Route Cache     |     route-cache     |  0.4.3   |            用于缓存路由信息的库，提高路由查找效率            |
|    Serve Favicon    |    serve-favicon    |  ^2.4.5  |         用于为 Express 应用提供 favicon 服务的中间件         |
|         XSS         |         xss         |  ^1.0.8  |          用于过滤和转义 HTML 中的 XSS 攻击代码的库           |
|    **视频插件**     |                     |          |                                                              |
|     Vue Youtube     |     vue-youtube     |  ^1.4.0  |               Vue.js 的 YouTube 视频播放器插件               |
|    **性能优化**     |                     |          |                                                              |
|     Compression     |     compression     |  ^1.7.1  | 用于 Express 应用的压缩中间件，提高响应速度和减少网络带宽使用 |
|    **分析工具**     |                     |          |                                                              |
|    Vue Analytics    |    vue-analytics    | ^5.22.1  |           用于 Vue.js 应用的 Google Analytics 插件           |
|  **服务器端渲染**   |                     |          |                                                              |
| Vue Server Renderer | vue-server-renderer | ^2.5.22  |      Vue.js 的服务器端渲染工具，用于在服务器端生成 HTML      |



**`devDependencies` 开发依赖的模块：**

|               类别                | 框架/插件 |                        版本                        | 作用 |
| :-------------------------------: | :-------: | :------------------------------------------------: | :--: |
|         **前端构建工具**          |           |                                                    |      |
|              webpack              | `^4.44.1` |           用于模块打包的前端资源构建工具           |      |
|            webpack-cli            | `^3.3.12` |                webpack的命令行接口                 |      |
|      webpack-dev-middleware       | `^3.7.2`  |           提供实时重载的开发服务器中间件           |      |
|      webpack-hot-middleware       | `^2.25.0` |             提供模块热替换功能的中间件             |      |
|           webpack-merge           | `^4.2.1`  |             用于合并webpack配置的工具              |      |
|      mini-css-extract-plugin      | `^0.11.2` |        从JS中提取CSS到单独文件的webpack插件        |      |
| extract-css-chunks-webpack-plugin | `^4.7.5`  |           提取CSS到单独文件的webpack插件           |      |
|        copy-webpack-plugin        | `^6.2.1`  |      将文件或目录复制到构建目录的webpack插件       |      |
|  fork-ts-checker-webpack-plugin   | `^5.2.0`  |        用于在webpack中检查TypeScript的插件         |      |
|  friendly-errors-webpack-plugin   | `^1.6.1`  |         提供更友好的错误信息的webpack插件          |      |
|    progress-bar-webpack-plugin    | `^2.1.0`  |        在webpack构建过程中显示进度条的插件         |      |
|       terser-webpack-plugin       | `^4.2.0`  |        用于压缩JavaScript代码的webpack插件         |      |
|            css-loader             | `^0.28.7` |         将CSS转换为CommonJS的webpack加载器         |      |
|           style-loader            | `^1.0.0`  |     将JS中的CSS样式注入到DOM中的webpack加载器      |      |
|          postcss-loader           | `^4.0.1`  |         使用PostCSS转换CSS的webpack加载器          |      |
|            sass-loader            | `^7.3.1`  |        将Sass/SCSS转换为CSS的webpack加载器         |      |
|            vue-loader             | `^15.3.0` |        用于加载Vue单文件组件的webpack加载器        |      |
|             ts-loader             | `^8.0.3`  |       用于加载TypeScript文件的webpack加载器        |      |
|            file-loader            | `^1.1.5`  |           将文件输出为url的webpack加载器           |      |
|            url-loader             | `^0.6.2`  |       将文件转换为Base64 URL的webpack加载器        |      |
|           **前端UI库**            |           |                                                    |      |
|        vue-social-sharing         | `^2.4.7`  |               Vue.js的社交分享组件库               |      |
|          **前端工具库**           |           |                                                    |      |
|       vue-template-compiler       | `^2.5.22` |                 Vue.js的模板编译器                 |      |
|              moment               | `^2.26.0` | 用于解析、验证、操作和显示日期和时间的JavaScript库 |      |
|         **Node.js工具库**         |           |                                                    |      |
|               execa               | `^4.0.3`  |               创建子进程的Node.js库                |      |
|            iconv-lite             | `^0.6.2`  |            用于字符编码转换的Node.js库             |      |
|             node-sass             | `^4.13.0` |                Node.js的Sass编译器                 |      |
|               ssh2                | `^0.8.9`  |           Node.js的SSH2客户端和服务端库            |      |
|            xxtea-node             | `^1.1.4`  |             XXTEA加密算法的Node.js实现             |      |
|                s3                 | `^4.4.0`  |              AWS S3的Node.js客户端库               |      |
|             fs-extra              | `^9.0.1`  |            扩展Node.js内置`fs`模块的库             |      |
|              rimraf               | `^2.6.2`  |           用于删除文件和目录的Node.js库            |      |
|               yargs               | `^15.4.1` |      解析命令行参数和生成用户友好帮助输出的库      |      |
|     **前端验证和格式化工具**      |           |                                                    |      |
|              eslint               | `^7.0.0`  |          用于JavaScript代码静态检查的工具          |      |
|           eslint-loader           | `^4.0.2`  |          将ESLint集成到webpack中的加载器           |      |
|      eslint-config-standard       | `^14.1.1` |             ESLint的配置，遵循标准风格             |      |
|        eslint-plugin-html         | `^6.0.2`  |                    ESLint的插件                    |      |

## **Webpack 构建**

### **构建流程**



![img](../images/总体流程图.png)

### **构建详细流程**



![img](../images/详细流程图.png)



**总体流程:**

1. 构建 client 流程： 获取 `client webpack` 配置  -> webpack 构建 -> 输出 `app.js/app.css/chunk` 文件/客户端清单文件(vue-ssr-client-manifest.json)；
2. 构建 server 流程： 获取 `server webpack` 配置  -> webpack 构建 -> 输出服务端清单文件(`vue-ssr-server-bundle.json`)；

### **构建命令**

| 命令                  | 说明              | api                                                    | S3                                                     |
| --------------------- | ----------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| npm run dev           | 开发              | 测服                                                   | 静态资源不上传 S3，放本地                              |
| npm run start         | 预览打包后的文件  | 根据打包命令为区分(npm run build:test / npm run build) | 根据打包命令为区分(npm run build:test / npm run build) |
| npm run build:test    | 打包生成 dist-ssr | 测服                                                   | 测服(test-cdn-car-static)                              |
| npm run build         | 打包生成 dist-ssr | 正服                                                   | 正服(cdn-car-static)                                   |
| npm run generate:test | 静态化生成 html   | 测服                                                   | 测服(test-cdn-car-static)，自动上传                    |
| npm run generate      | 静态化生成 html   | 正服                                                   | 正服(cdn-car-static)，手动上传                         |

#### **参数格式**

```javascript
node -r esm generate.js --target=routeName --lang=my-en --env=test --webpack=true  --seconedLang=my-my --params=**
```

```javascript
s3 测试服链接：
npm run generate -- --target=routeName --lang=***  *--env=** --webpack=true --seconedLang=** --params=**
```

```javascript
s3 正式服链接：
npm run generate:s3 -- --target=routeName --lang=** --env=** --webpack=true  --seconedLang=** --params=**
```

【注意格式：*npm run generate –- 参数*】

- target：静态化目标路由名称，对应 *`src/router/routes.js`* 中的 name 字段（webpackChunkName 不可省略）
- params：静态化静态路由可不传。用于静态化动态路由生成路由表的时候使用。
- lang：语言，默认 my-en。格式：国家-语言。
- seconedLang： 一国多语言参数，同一国家第二种语言参数。
- env：环境，test 或者 production，默认 production，用于区别接口请求域名。
- webpack：是否执行 webpack 生成 dist-ssr 目录。默认 true，不执行 webpack 值为 false 或者 0。
- groupCount: 静态化页面打包每次分组数量
- ~~amp：是否是 amp 页面。默认为 false。~~

### **参数处理**

* 参数处理库：[yargs](https://github.com/yargs/yargs)

#### **参数处理流程**

* 格式化命令行参数
* 获取 target 路由对象
* 合并路由对象和参数对象

#### **参数类型**

##### **路由参数**

* 字段： --target=静态化目标路由名称
* 作用： 查找路由对象

* 问题： 不同国家路由模式相同，路由不同
  * 建立国家和路由的map，根据当前打包的国家参数获取路由
* 判断路由对象方法：
  * 参数 tartget 对应路由 name 字段
  * 注意：webpackChunkName 不可省略，并且路由 name 与 webpackChunkName 相同

##### **动态路由参数**

* 字段： --params
* options: 
  * all： 静态化所有页面，如 生成所有车系页面 
  * 页面自定义参数： 静态化指定页面，如: 静态化 proton X50 特定车系，传入 brandCode, modelCode
* 静态化静态路由可不传。用于静态化动态路由生成路由表的时候使用。

##### **语言参数**

* 字段： --lang
* 作用： 指定静态化国家页面和默认语言文案（静态化默认使用指定国家的默认语言）

##### **一国多语言参数**

* 字段： --secondLang

* 作用： 指定国家的第二语言，第二语言参数指定使用文案

* 问题： 第一语言 lang 指定语言和主题，第二语言 secondLang 仅仅使用在部分路由页面中，如资讯文案 bm路由使用马来语，zh路由使用中文；seconedLand 不能覆盖 lang 参数 

* 解决方案：

  * 方案一：通过 nodejs 对全局文件变量进行更改，通过读取文件变量设置多语言。

  * 方案二：package.json 变量配置。

    * ```javascript
      // package.json 配置
      "config": {
          "lang": "my-en"
      }
      // 脚本控制
      ;(async function() {
        try {
          const lang = argvs.lang || 'my-en'
          await execCmd(`npm config set wapcar-ssr=th:lang ${lang}`)
        } catch (error) {
          consola.error(`>>>> 多语言 package.json - config - lang 设置失败~ ${error}`)
        }
      })()
      ```

  * 方案三: 配置多个 npm script 命令。

  * ```javascript
    {
      "scripts": {
        "dev": "node server",
        "dev:my-en": "node server --PAGE_LANG=my-en",
        "dev:th-th": "node server --PAGE_LANG=th-th",
        "start": "cross-env NODE_ENV=production && npm run dev",
        "start:my-en": "cross-env NODE_ENV=production && npm run dev:my-en",
        "start:th-th": "cross-env NODE_ENV=production && npm run dev:th-th",
        "build": "rimraf dist-ssr && npm run build:client && npm run build:server",
        "build:client": "cross-env NODE_ENV=production webpack --config build/webpack.client.config.js --progress --hide-modules",
        "build:server": "cross-env NODE_ENV=production webpack --config build/webpack.server.config.js --progress --hide-modules",
        "build:my-en": "rimraf dist-ssr && npm run build:client:my-en && npm run build:server:my-en",
        "build:client:my-en": "cross-env NODE_ENV=production PAGE_LANG=my-en webpack --config build/webpack.client.config.js --progress --hide-modules",
        "build:server:my-en": "cross-env NODE_ENV=production PAGE_LANG=my-en webpack --config build/webpack.server.config.js --progress --hide-modules",
        "build:th-th": "rimraf dist-ssr && npm run build:client:th-th && npm run build:server:th-th",
        "build:client:th-th": "cross-env NODE_ENV=production PAGE_LANG=th-th webpack --config build/webpack.client.config.js --progress --hide-modules",
        "build:server:th-th": "cross-env NODE_ENV=production PAGE_LANG=th-th webpack --config build/webpack.server.config.js --progress --hide-modules"
      }
    ```

    

  * 方案四：webpack 使用 nodejs 方式重构，这样各种参数可以使用 nodejs 命令行参数进行传递，而不用通过 cross-env 进行设置。

  * 方案五：

    * 不通过命令行静态化时传参，第二语言参数一般跟路由相互绑定，因此可以在路由中携带第二语言参数
    * 开发模式，需要有第二语言的路由才能访问，通过路由中 meta 来设置第二语言参数
    * 静态化通过 cli-generate context 注入 secondLang，再传到业务代码 entry-server 传参
    * 业务逻辑中通过 this.$route.meta 获取第二语言参数



### **生成路由表**

- 静态路由表：根据路由文件 routes.js 中的 path 生成文件目录结构。
- 动态路由表：根据 `/static-addition-config/routeHooks/routeName.js` 中的 `createDynamicRoutes` 函数生成路由表，该函数返回路由表数组。（动态路由必须有该文件，文件名称对应 routes.js 中的 name）
- 动态路由表：根据 *`/static-addition-config/routeHooks/routeName.js`* *中的钩子 `createDynamicRoutes* 进行更改。输入：{ params: ... }，输出：路由表数组。

### **生成 vue-server-render 对象**

* `vue-server-render`  对象` serverRender ` (`static-cli/generator/cli-server`)
* 作用： 用于生成 html
* 获取打包生成的 `vue-ssr-server-bundle.json `   和  `vue-ssr-client-manifest.json` 和模板文件
* 通过 *`dist-ssr/vue-ssr-server-bundle.json`和*`dist-ssr/vue-ssr-client-manifest.json `生成 `serverRender` 对象，同时设置 preload、prefetch 等配置。
* 注意： 服务端代码静态化时执行，客户端代码浏览器中执行。静态化生成 HTML 文件时，执行的是服务端入口代码 `entry-server.js` 打包结果；客户端入口代码 `entry-client.js` 被打包后的文件 `app.js` 不会执行，而是在浏览器请求到 html  doc 文件后加载后浏览器执行。

### **生成 HTML**

* 遍历路由表，通过 serverRender 对象生成 html 数据。

### **html 处理**

* 处理任务如：amp，资讯页面内容等。通过 *`/static-addition-config/routeHooks/routeName.js`* 中的*钩子 createHtml* 进行处理，该函数输入 { html: ... } ，输出 html 数据。（文件名称对应 routes.js 中的 name）

### **页面发布路径处理**

* 处理页面发布路径，默认根据路由生成页面发布目录结构。
* 如果需要更改，在 *`/static-addition-config/routeHooks/routeName.js`*` 中的钩子 createPublishPath 进行处理`，该函数输入{ route: ... } ，输出新路由 url。（文件名称对应 routes.js 中的 name）
* 如： 资讯页面路由`"/news/how-is-this-possible-proton-x50-is-cheaper-than-taxfree-honda-hrv-7508"`，需要将发布路径替换为` "/news/7508"`
* 将文件写入到发布路径

### **~~AMP 数据处理~~**

~~命令行参数`--amp=true`时执行，通过 `/static-addition-config/amp/routeName.js` 中的函数进行处理，该函数输入 html 数据，输出 html 数据。（文件名称对应 routes.js 中的 name）~~

### **上传静态资源到 s3**

* 根据 S3 标志，将打包的静态资源上传到对应的 S3 Bucket。

### **写进文件**

* 写进根目录下的 `/html` 文件中。

### **打包后的 html 目录结构**

```
html        
|───page1
|     └───index.html
|───page2
|      └───index.html
|───...
```

## **TypeScript 支持**

* 项目支持 typescript，基于[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator#readme)。

## **AMP**

### **本地开发**

本地服务器访问链接携带 *?ampRouteName=*** 参数，#development=1 忽略以下 AMP 报错：

- *CSS syntax error in tag 'style amp-custom'*
- *Custom JavaScript is not allowed.*

`在`*` /static-addition-config/routeHooks/routeName.js`* 中的*钩子 createHtml* 进行处理，将 HTML 数据转化为 AMP。

## **其他**

- 接口请求：跟登录态相关的接口请求，放 mounted 处理。
- vscode 配置：安装 ESLint 插件，保存自动格式化。

## **开发**

### **命令**

| 命令                  | 说明              | api                                                    | S3                                                     |
| --------------------- | ----------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| npm run dev           | 开发              | 测服                                                   | 静态资源不上传 S3，放本地                              |
| npm run start         | 预览打包后的文件  | 根据打包命令为区分(npm run build:test / npm run build) | 根据打包命令为区分(npm run build:test / npm run build) |
| npm run build:test    | 打包生成 dist-ssr | 测服                                                   | 测服(test-cdn-car-static)                              |
| npm run build         | 打包生成 dist-ssr | 正服                                                   | 正服(cdn-car-static)                                   |
| npm run generate:test | 静态化生成 html   | 测服                                                   | 测服(test-cdn-car-static)，自动上传                    |
| npm run generate      | 静态化生成 html   | 正服                                                   | 正服(cdn-car-static)，手动上传                         |

### **接口**

- 跟登录态相关的接口请求，放 mounted 处理；

- 在 src/api下新建文件，管理接口。

### **多语言**

默认 my-en。

当需要新增多语言时，在 package.json 下添加脚本命令，如添加 th-th:

```json
{ 
    "build:th-th:test": "rimraf dist-ssr && npm run build:th-th:client:test && npm run build:th-th:server:test",
    "build:th-th:client:test": "cross-env NODE_ENV=development PAGE_LANG=th-th webpack --config build/webpack.client.config.js --progress --hide-modules",
    "build:th-th:server:test": "cross-env NODE_ENV=development PAGE_LANG=th-th webpack --config build/webpack.server.config.js --progress --hide-modules",
    "build:th-th": "rimraf dist-ssr && npm run build:th-th:client && npm run build:th-th:server",
    "build:th-th:client": "cross-env NODE_ENV=production PAGE_LANG=th-th webpack --config build/webpack.client.config.js --progress --hide-modules",
    "build:th-th:server": "cross-env NODE_ENV=production PAGE_LANG=th-th webpack --config build/webpack.server.config.js --progress --hide-modules",
    "dev:th-th": "cross-env WEBPACK_TYPE=LOCAL_DEV node server --PAGE_LANG=th-th",
    "start:th-th": "cross-env NODE_ENV=production node server --PAGE_LANG=th-th",
}
```

### **AMP**

1. 在 `/static-addition-config/routeHooks/routeName.js`  中的钩子 createHtml 进行处理，调用 `/static-addition-config/common/convertHtmlToAMP.js` 将 HTML 数据转化为 AMP。该函数输入 `{ html: ... }` ，输出 html 数据。（文件名称对应 routes.js 中的 name）

2. 本地服务器访问链接携带 `?ampRouteName=**` 参数，`#development=1` 忽略以下 AMP 报错：

- `CSS syntax error in tag 'style amp-custom'`

- `Custom JavaScript is not allowed.`

3. AMP 的自定义脚本在 `/script-amp/`  目录中。目录结构为：

```
routeName
|───script01.js
|───script03js
|───...
```

### **规范**

- 组件命名：大驼峰

- 使用 typescript。如果是 vue 组件或者页面`<script lang="ts"></script>`，添加 lang="ts" 标签属性；

- 减少使用魔术数字，用常量或者枚举类型替代。

### **其他**

- vscode 配置：安装 ESLint 插件，保存自动格式化。

### **静态化**

### **命令**

S3 测试服链接：`npm run generate -- --target=routeName --params=** --lang=** --env=** --webpack=true`

S3 正式服链接：`npm run generate:s3 -- --target=routeName --params=** --lang=** --env=** --webpack=true`

【注意格式：`npm run generate -- 参数`】

- target：静态化目标路由名称，对应 `src/router/routes.js` 中的 name 字段（webpackChunkName 不可省略）

- params：静态化静态路由可不传。用于静态化动态路由生成路由表的时候使用。

- lang：语言，默认 my-en。格式：国家-语言。

- env：环境，test 或者 production，默认 production，用于区别接口请求域名。

- webpack：是否执行 webpack 生成 dist-ssr 目录。默认 true，不执行 webpack 值为 false 或者 0。

### **生成路由表**

- 静态路由表：根据路由文件 routes.js 中的 path 生成文件目录结构。

- 动态路由表：根据 `/static-addition-config/routeHooks/routeName.js` 中的钩子  createDynamicRoutes 进行更改。输入：{  params: ... }，输出：路由表数组。【动态路由的接口请求统一使用全局唯一的接口管理 src/api 目录下的接口】

### **AMP**

在 `/static-addition-config/routeHooks/routeName.js`  中的钩子 createHtml 进行处理，调用 `/static-addition-config/common/convertHtmlToAMP.js` 将 HTML 数据转化为 AMP。该函数输入 `{ html: ... }` ，输出 html 数据。（文件名称对应 routes.js 中的 name）

### **页面发布路径处理**

处理页面发布路径，默认根据路由生成页面发布目录结构。如果需要更改，在 `/static-addition-config/routeHooks/routeName.js` 中的钩子 createPublishPath 进行处理，该函数输入`{ route: ... }` ，输出新路由 url。（文件名称对应 routes.js 中的 name）

### **上传静态资源到 S3**

`npm run deploy-s3` 或者 `node deployS3.js`

参数说明：

- `--lang`：语言
- `--env`：S3 正测服对应的 Bucket



## **说明**

* 项目思想参照 nuxt 思想和 ssr 项目思想

### **附件** 

* [nuxt源码](https://github.com/nuxt/nuxt.js/blob/dev/packages/generator/src/generator.js)
* [ssr源码](https://github.com/vuejs/vue-hackernews-2.0)

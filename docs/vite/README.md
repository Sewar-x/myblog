# **Vite**

## **基础**

![Vite](../images/Vite.png)

官方文档 [为什么选 Vite | Vite 官方中文文档 (vitejs.dev)](https://cn.vitejs.dev/guide/why.html) 章节中，详细讲述了 Vite 产生的背景和 Vite 原理。

## **功能**

![image-20240221170745135](../images/vite功能.png)

 Vite 的主要功能：

|            功能             |                             描述                             |
| :-------------------------: | :----------------------------------------------------------: |
|  **NPM 依赖解析和预构建**   | 当 Vite 检测到你的代码中有从 npm 包中导入的模块时，它会使用工具（如 esbuild）将这些模块从 CommonJS 或 UMD 格式转换为 ESM 格式 |
|       **开发服务器**        |  Vite 在开发期间作为一个服务器，提供快速的冷启动和热更新。   |
|      **原生 ESM 支持**      | Vite 支持原生 ECMAScript 模块（ESM），允许使用 `import` 和 `export` 语法。 |
|    **模块热替换（HMR）**    | Vite 提供了一套原生 ESM 的 HMR API，支持即时、准确的更新，无需重新加载页面或清除应用程序状态。 |
|      **模块导入重写**       |  Vite 会重写导入为合法的 URL，以便浏览器能够正确导入它们。   |
| **index.html 作为入口文件** | Vite 将 `index.html` 视为源码和模块图的一部分，解析其中的 `<script>` 和 `<link>` 标签。 |
|     **支持 TypeScript**     | Vite 天然支持引入 `.ts` 文件，并使用 `esbuild` 进行快速转译。 |
|      **内置 CSS 支持**      | Vite 支持在 JavaScript 中直接导入 CSS 模块，并利用其特有功能进行解析和处理。 |
|      **环境变量处理**       | Vite 会自动处理环境变量，并提供在生产构建时替换变量的功能。  |
|        **构建优化**         | Vite 提供了代码拆分、Tree Shaking 等构建优化功能，以减小打包后的文件体积。 |
|        **插件系统**         | Vite 支持插件系统，允许开发者通过插件扩展其功能，如支持新的框架或库。 |

### NPM 依赖解析和预构建

**官方原文：**

> 原生 ES 导入不支持下面这样的裸模块导入：
>
> ```js
> import { someMethod } from 'my-dep'
> ```
>
> 上面的代码会在浏览器中抛出一个错误。Vite 将会检测到所有被加载的源文件中的此类裸模块导入，并执行以下操作:
>
> 1. [预构建](https://cn.vitejs.dev/guide/dep-pre-bundling.html) 它们可以提高页面加载速度，并将 CommonJS / UMD 转换为 ESM 格式。预构建这一步由 [esbuild](http://esbuild.github.io/) 执行，这使得 Vite 的冷启动时间比任何基于 JavaScript 的打包器都要快得多。
> 2. 重写导入为合法的 URL，例如 `/node_modules/.vite/deps/my-dep.js?v=f3sf2ebd` 以便浏览器能够正确导入它们。
>
> **依赖是强缓存的**
>
> Vite 通过 HTTP 头来缓存请求得到的依赖，所以如果你想要编辑或调试一个依赖，请按照 [这里](https://cn.vitejs.dev/guide/dep-pre-bundling.html#浏览器缓存) 的步骤操作。

**补充解释说明：**

**JavaScript 生态模块系统介绍：**

> 在 JavaScript 生态系统中，存在多种模块系统。其中，CommonJS 和 UMD 是两种较为早期的模块系统，而 ESM (ECMAScript Modules) 是较新的模块系统，主要在 ECMAScript 2015 (ES6) 中引入。
>
> 让我们简要地了解这三种模块系统：
>
> 1. **CommonJS (CJS)**: 这是 Node.js 使用的模块系统。当你使用 `require` 导入模块时，你正在使用 CommonJS。CJS 模块是同步加载的，这意味着它们会在导入时立即执行。
> 2. **UMD (Universal Module Definition)**: UMD 是一种策略，允许你的模块在多种环境中工作，如浏览器全局变量、AMD 和 CommonJS。UMD 本质上是一个包装器，它根据环境决定如何定义模块。
> 3. **ESM (ECMAScript Modules)**: 这是 ECMAScript 2015 (ES6) 引入的模块系统。它使用 `import` 和 `export` 关键字，并且模块是异步加载的。ESM 在浏览器和 Node.js 中都得到了原生支持（尽管 Node.js 的原生支持是在较新的版本中引入的）。
>
> 在 Vite 的上下文中，“将 CommonJS / UMD 转换为 ESM 格式”意味着，**当 Vite 检测到你的代码中有从 npm 包中导入的模块时，它会使用工具（如 esbuild）将这些模块从 CommonJS 或 UMD 格式转换为 ESM 格式。这是因为浏览器原生支持 ESM，但可能不支持或不完全支持 CommonJS 或 UMD。**
>
> 这种转换允许你在浏览器环境中直接使用这些 npm 包，而无需担心它们使用的模块系统与你的目标环境不兼容的问题。
>
> 转换的好处还包括：
>
> - **更快的加载速度**：ESM 是异步加载的，这通常比 CJS 的同步加载更快。
> - **更好的代码优化**：工具如 esbuild 可以在转换过程中进行各种优化，从而提高代码的运行效率。
> - **更现代的编程体验**：使用 ESM，你可以享受诸如静态导入、导出分析、代码拆分等现代功能。

**ESM 模块介绍：**

> ESM (ECMAScript Modules) 是一种在 ECMAScript 标准中定义的模块系统，主要用于 JavaScript 代码的模块化组织和管理。它是 ES6（ECMAScript 2015）及以后版本的一部分，提供了 `import` 和 `export` 关键字来导入和导出模块的功能。
>
> ESM 模块系统的主要特点包括：
>
> 1. **静态解析**：ESM 支持静态解析，这意味着在代码运行之前，导入和导出的依赖关系就已经确定。这有助于实现代码拆分、树摇（tree-shaking）等优化。
> 2. **异步加载**：ESM 模块是异步加载的，这意味着它们不会阻塞代码的执行。这有助于改善应用的启动性能和响应速度。
> 3. **支持多种文件类型**：除了 JavaScript 文件（`.js`），ESM 还支持其他类型的文件作为模块，如 JSON、CSS 等。

**为什么 Vite 将原生 ES 导入转换为 ESM 格式？**

> 与原生 ES 导入（即直接使用 `import` 关键字导入模块）相比，ESM 模块系统提供了更加标准和统一的模块导入和导出机制。
>
> 原生 ES 导入通常指的是在没有使用任何打包工具或模块加载器的情况下，直接在浏览器或 Node.js 环境中使用 `import` 和 `export` 关键字。
>
> 然而，在浏览器环境中，原生的 ES 导入可能受到一些限制，例如不支持裸模块导入（即不指定文件扩展名或路径的导入），也不支持动态导入（即使用 `import()` 函数的导入）。而 ESM 模块系统则解决了这些问题，提供了更加灵活和强大的模块管理功能。
>
> 此外，ESM 模块系统还与其他现代前端工具（如打包器、构建工具等）紧密集成，使得开发者能够更加方便地管理和构建大型的 JavaScript 应用。



## **Vite 优化**

### **构建优化**
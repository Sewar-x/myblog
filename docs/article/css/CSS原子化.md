# CSS 原子化

## 概念

CSS原子化是一种CSS的架构方式，它倾向于创建小巧且单一用途的class，并且这些class的名称通常基于视觉功能。

在原子化CSS中，CSS组件被拆分为更小的部分，这些部分可以独立地编辑、测试和重用。

这些原子通常是单个像素或极其微小的变化，例如颜色、大小、位置等。这些原子可以组合成更复杂的组件，例如按钮、表单、图标等。

**示例**

```html
<!-- 原子化类定义 -->
<style>

  .text-white { color: white; }

  .bg-black { background-color: black; }

  .text-center { text-align: center; }

</style>
<!-- 原子化类使用 -->
<div class="text-white bg-black text-center">hello Atomic CSS</div>
```





## 优点

1. 减少代码量：通过将CSS拆分为更小的部分，可以减少总体代码量。
2. 提高可维护性和可重用性：由于每个class都专注于单一的视觉功能，因此可以更容易地维护和重用这些代码。
3. 提高开发效率：通过组合现有的原子来构建复杂的样式，可以加快开发速度。



## 框架

- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [windicss](https://github.com/windicss/windicss)
- [unocss](https://github.com/unocss/unocss)
- [Tachyons](https://tachyons.io/)
- [Atomic CSS](https://acss.io/)



### Tailwind CSS

[Tailwind CSS](https://link.juejin.cn?target=https%3A%2F%2Ftailwindcss.com%2F) 是一个功能优先的CSS框架，它继承了诸如flex、pt-4、text-center和rotate-90这样的类，它们能直接在脚本标记语言中组合起来，构建任何的设计。

截止到目前该框架在[Github](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftailwindlabs%2Ftailwindcss)上拥有79 k的Star，在[2021年最受欢迎的项目](https://link.juejin.cn?target=https%3A%2F%2Frisingstars.js.org%2F2021%2Fzh)中位列第六。  [swipperjs](https://link.juejin.cn?target=https%3A%2F%2Fswiperjs.com%2F) 网站就是使用了该框架。

 

### Windi CSS

[Windi](https://link.juejin.cn?target=https%3A%2F%2Fwindicss.org%2F) 号称下一代功能优先的CSS框架。可以把`Windi CSS`看作是按需供应的`Tailwind`替代方案，它的出现是为了解决`Tailwind v2.0`随着项目变大初始化编译和热更新慢的问题。

`Windi CSS`完美兼容`Tailwind v2.0`并且拥有很多额外的炫酷功能。

该框架在[Github](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwindicss%2Fwindicss)上拥有 6.5k的Star。

但需要注意的是，`Tailwind v3` 版本默认开启了即时引擎（JIT），实现了和Windi类似的按需加载的功能，构建速度得到了极大的提升。可能也是因为这个原因，截止目前Windi的Github仓库已经半年没有提交过代码。



### UnoCSS

[UnoCSS](https://link.juejin.cn?target=https%3A%2F%2Funo.antfu.me%2F) 是具有高性能且极具灵活性的即时原子化CSS引擎。它是一个引擎而非框架，因为它并没有提供核心工具类，所有功能可以通过预设和内联配置提供。

`UnoCSS`的主要目标是直观性和可定制性，它可以开发者在极短时间内定义自己的CSS工具类。

尽管`UnoCSS`目前还处于beta阶段，但其在 [Github](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Funocss%2Funocss) 上的 `Star`数已经达到15.6K。

 

### 框架对比

|    特性/框架     |                         Tailwind CSS                         |                        Windi CSS                         |                           UnoCSS                           |
| :--------------: | :----------------------------------------------------------: | :------------------------------------------------------: | :--------------------------------------------------------: |
|     **概述**     | 提供一组实用程序类来控制布局、颜色、间距等，无需编写自定义CSS | 基于Tailwind CSS的实用程序类，但具有按需编译和更快的性能 | 即时、按需的原子级CSS引擎，提供轻量化、高性能的CSS解决方案 |
|  **响应式设计**  |                      内置响应式设计功能                      |                      支持响应式设计                      |                       支持响应式设计                       |
|    **模块化**    |                    提供原子类，可自由组合                    |                   提供原子类，按需编译                   |                       使用原子类概念                       |
|    **灵活性**    |         提供了大量的原子类，允许快速构建和自定义样式         |           与Tailwind CSS类似，但具有更好的性能           |             支持自定义工具类、变体、指令和图标             |
|   **学习曲线**   |           对于不熟悉原子类的开发者可能需要一些时间           |           与Tailwind CSS类似，但可能更易于集成           |                       易于学习和使用                       |
|   **文件大小**   |         可能导致较大的CSS文件，因为包含了大量原子类          |                 通过按需编译减少文件大小                 |               只生成实际使用的样式，文件较小               |
|   **样式重复**   |             原子类数量庞大，可能导致样式重复定义             |                 通过按需编译减少样式重复                 |                避免了不必要的样式加载和重复                |
|     **性能**     |                    加载速度取决于文件大小                    |                   通过按需编译提高性能                   |                   即时加载和渲染，高性能                   |
|   **集成选项**   |                  广泛支持各种前端框架和工具                  |     提供VSCode扩展、Vite、Rollup、Webpack等集成选项      |                   支持多种前端框架和工具                   |
|   **智能提示**   |                    可能需要额外工具或插件                    |                  提供强大的智能提示功能                  |                   可能需要额外工具或插件                   |
| **快速原型开发** |                       支持快速构建原型                       |                   支持快速创建页面布局                   |                   支持快速开发和原型设计                   |
|    **自定义**    |                    支持自定义颜色和字体等                    |                   在配置中定义自定义值                   |             支持自定义工具类、变体、指令和图标             |
|   **使用场景**   |  适用于各种规模的项目，特别是需要快速开发和自定义样式的项目  |       适用于快速原型开发、动态内容丰富的应用程序等       |          适用于需要高性能、轻量化和即时加载的项目          |


# **Vue3**

## **Vue2 Vs Vue3**

|       对比项        |                            Vue 2                             |                            Vue 3                             |
| :-----------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|    **性能优化**     | Vue 2 使用的是基于 Object.defineProperty 的数据劫持实现响应式。 | Vue 3 使用的是 Proxy 对象来实现响应式，性能更优，支持更好的类型检查。 |
| **Composition API** | Vue 2 使用的是 Options API，将逻辑分散在 data、methods、computed 等选项中。 | Vue 3 引入了 Composition API，允许更加灵活的组织和重用逻辑。 |
|      **指令**       | Vue 2 中的指令（Directives）使用 v- 前缀，例如 v-if、v-for。 | Vue 3 继续使用 v- 前缀的指令，但添加了对自定义指令的更多控制和灵活性。 |
|      **组件**       | Vue 2 中的组件是基于 Vue 实例构建的，组件间通信可以通过 props、events、slots、refs 等方式进行。 | Vue 3 组件与 Vue 2 基本相同，但提供了更多的优化和灵活性，如更好的 TypeScript 支持和自定义渲染函数。 |
|  **生命周期钩子**   | Vue 2 提供了 beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed 等生命周期钩子。 | Vue 3 对生命周期钩子进行了重新设计，提供了 setup、onMounted、onUpdated、onUnmounted 等新的生命周期钩子，并移除了 beforeDestroy 和 destroyed。 |
|   **响应式系统**    | Vue 2 使用的是基于 `Object.defineProperty` 的响应式系统，对于数组和对象的修改需要特定的方法来触发更新。 | Vue 3 使用了 Proxy 对象来实现响应式系统，支持更深层次的响应式，无需特定方法来触发更新。 |
|    **模板语法**     |   Vue 2 的模板语法相对固定，使用双大括号插值表达式和指令。   | Vue 3 继承了 Vue 2 的模板语法，但提供了更多的语法糖和特性，如条件渲染的 ` v-if/v-else-if/v-else`、列表渲染的 v-for、计算属性的 `v-memo `等。 |
|    **插件系统**     |  Vue 2 提供了插件系统，可以通过 Vue.use() 方法来安装插件。   |    Vue 3 继续支持插件系统，但提供了更多的灵活性和扩展性。    |
| **TypeScript 支持** |  Vue 2 对 TypeScript 的支持有限，需要额外的配置和类型定义。  | Vue 3 内置了对 TypeScript 的支持，提供了更好的类型推断和类型检查。 |
| **自定义渲染函数**  |   Vue 2 提供了自定义渲染函数，但需要额外的配置和学习成本。   | Vue 3 对自定义渲染函数进行了改进，提供了更简洁和灵活的 API，支持 JSX 语法。 |

## **Vue2 到 Vue3 做了哪些更改？**

从 Vue 2 到 Vue 3，开发团队进行了一系列的改进和升级：

### **响应式系统的改进**

- Vue 2 使用的是基于 `Object.defineProperty` 的响应式系统，而 Vue 3 则使用了 ES6 的 `Proxy` 对象。`Proxy` 相较于 `Object.defineProperty` 提供了更高的性能和更好的兼容性，因为它能够监听对象属性的新增和删除，以及数组的直接修改。

为什么要做这个改变？

* `Object.defineProperty` 在某些情况下无法监听到数据的变化，比如当对象属性被新增或删除时。使用 `Proxy` 可以解决这些问题，并提供更稳定、更全面的响应式系统。

### **引入 Composition API**

- Vue 3 引入了 Composition API，这是一种更加灵活的组件代码复用方式。相较于 Vue 2 中的 Options API，Composition API 允许开发者将逻辑代码进行拆分和组合，提高代码的可读性和可维护性。

为什么要做这个改变？

* Options API 在 Vue 2 中将逻辑分散在 data、methods、computed 等选项中，这使得代码的组织和维护变得困难。Composition API 的引入使得代码更加集中和模块化，便于维护和复用。

### **更快的初始化和更新**

- Vue 3 的初始化过程比 Vue 2 更快，这得益于其组件 API 的优化和编译模板的改进。此外，Vue 3 的更新性能也有所提高，特别是针对组件的更新和渲染。

### **体积更小**

- Vue 3 通过使用 webpack 的 tree-shaking 功能，减少了无用模块的打包，从而减小了整体的体积。

### **更好的 TypeScript 支持**

- Vue 3 是基于 TypeScript 编写的，提供了更好的类型定义和类型检查。这使得开发者在编写 Vue 代码时能够享受到自动的类型提示和错误检查。

为什么要做这个改变？

* TypeScript 在大型项目中具有更好的可维护性和可扩展性。通过提供更好的 TypeScript 支持，Vue 3 吸引了更多的开发者和团队使用 Vue 构建大型项目。

这些改变都是为了提高 Vue 的性能和可维护性，使其更加适应现代前端开发的需求。通过引入新的技术和改进现有功能，Vue 3 为开发者提供了更强大、更灵活的工具来构建高质量的 Web 应用程序。
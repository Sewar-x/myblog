---
star: true
category:
  - Vue
tag:
  - Vue3
---
# Vue3基础



## **ref 原理**

## **reactive 原理**

与将内部值包装在特殊对象中的 ref 不同，`reactive()` 将使对象本身具有响应性：

```js
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```



## 生命周期

Vue2 生命周期示例图：

![vue生命周期](../images/vue生命周期.png)

Vue3 生命周期示例图：

![组件生命周期图示](../images/lifecycle_zh-CN.W0MNXI0C.png)

Vue 2和Vue 3生命周期钩子的对比：

| Vue 2 生命周期钩子  | Vue 3 生命周期钩子  | 描述                                                         |
| :------------------ | :------------------ | :----------------------------------------------------------- |
| `beforeCreate`      | `beforeCreate`      | 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。 |
| `created`           | `created`           | 实例已经创建完成，此时已经完成了数据观测和初始化，但尚未挂载到 DOM 上。 |
| `beforeMount`       | `beforeMount`       | 在挂载开始之前被调用，相关的 render 函数首次被调用。         |
| `mounted`           | `onMounted`         | 在挂载完成后调用。Vue 3 使用了 `onMounted` 而不是 `mounted`。 |
| `beforeUpdate`      | `beforeUpdate`      | 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。        |
| `updated`           | `onUpdated`         | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁后调用。Vue 3 使用了 `onUpdated` 而不是 `updated`。 |
| **`beforeDestroy`** | **`beforeUnmount`** | 在实例销毁之前调用。Vue 3 使用了 `beforeUnmount` 而不是 `beforeDestroy`。 |
| **`destroyed`**     | **`onUnmounted`**   | 实例销毁后调用。Vue 3 使用了 `onUnmounted` 而不是 `destroyed`。 |

Vue 3 的生命周期钩子名称前都加上了 `on` 前缀，这是为了与组合式 API（Composition API）中的其他函数保持一致。



## 侦听器

### watch 原理

在 Vue 3 中，`watch` 侦听器的实现原理与 Vue 3 的响应式系统紧密相连。Vue 3 使用了 Proxy 来替代 Vue 2 中的 Object.defineProperty 来实现更高效的响应式系统：

1. **初始化响应式数据**：当Vue组件被创建时，Vue会使用Proxy或Reflect（在某些情况下）来包裹组件的`data`、`computed`属性、`props`等，使其变成响应式的。这个过程会创建一个getter/setter对，用于追踪和拦截属性的访问和修改。
2. **设置侦听器**：在组件的`setup()`函数或选项式API的`watch`选项中，你可以定义侦听器来监听某个响应式属性的变化。这些侦听器可以是函数、数组或对象，具体取决于你的需求。
3. **依赖收集**：当组件被渲染或计算属性被计算时，Vue会遍历所有的响应式属性，并调用它们的getter。在这个过程中，Vue会收集与这些属性相关的依赖，这些依赖通常是一个或多个Watcher对象（观察者）。**对于`watch`侦听器，Vue会创建一个Watcher对象，并将其与需要监听的响应式属性关联起来。**
4. **属性变化通知**：当响应式属性被修改时（即setter被调用），Vue会触发一个更新流程。在这个流程中，Vue会通知所有依赖于这个属性的Watcher对象进行更新。**对于与`watch`侦听器关联的Watcher对象，Vue会执行侦听器的回调函数。**
5. **执行回调函数**：在Watcher对象被通知更新后，它会执行与之关联的回调函数（即`watch`侦听器的回调函数）。这个回调函数可以接受新旧值作为参数，并可以根据需要执行任何逻辑。



### `watchEffect()`

> 官方文档：[侦听器 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/essentials/watchers.html#watcheffect)



## **参考资料**

[「Vue2+Vue3」 的 62 个知识点，看看你掌握了几个？](https://mp.weixin.qq.com/s/CAYPxaDrKChSgO1PMUGcAg)
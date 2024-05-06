---
star: true
order: 4
category:
  - React
tag:
  - Vue Vs React
---
# Vue Vs React



![](../images/Vue-vs-React.png)



|                                    |                             Vue                              |                            React                             |
| :--------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|              **组件**              | **单文件组件**：使用template、script和style来分别定义组件的结构、逻辑和样式。 |    在React中，组件可以通过**函数式组件或类组件**来定义。     |
|              **思想**              |  **数据的响应式**：当数据发生变化时，Vue会自动更新相关的DOM  | React 的核心思想是每次对于变更 `props` 或 `state`，触发新旧 Virtual DOM 进行 diff（协调算法），对比出变化的地方，然后通过 `render` 重新渲染界面。 |
|      **状态或变量响应式渲染**      | Vue使用**响应式系统来实现状态或变量**的响应式渲染。<br />当数据发生变化时，Vue会自动更新DOM。<br />这是通过Vue的响应式原理实现的，即Vue在初始化时将数据转换为getter/setter形式的对象，当数据变化时，setter会触发组件的重新渲染。 | React通过**setState方法来更新组件的状态**，并触发组件的重新渲染。<br />React使用一种名为“调和”（Reconciliation）的过程来比较新旧虚拟DOM树，并计算出最小的DOM更新。<br />当组件的状态或属性发生变化时，React会重新渲染该组件及其子组件。 |
|             **数据流**             |                          单向数据流                          |                          单向数据流                          |
|    **组件通信**（父子组件通信）    | **通过*props*和*emit*进行**：父组件通过*props*向子组件传递数据或回调，子组件则通过emit触发事件来向父组件发送消息。 | **通过props和回调函数实现**：父组件通过props将数据或函数传递给子组件，子组件则可以通过这些props来接收数据和触发回调函数 |
| **Prop逐级透传问题**（跨组件通信） | Vue**通过`provide`和`inject`机制**解决Prop逐级透传问题。<br />父组件使用`provide`提供数据或方法，子组件通过`inject`接收。 | React没有内置的Prop逐级透传机制，通常通过高阶组件或**Context API来实现**。<br />高阶组件是一种函数，它接收一个组件并返回一个新组件，新组件可以访问传递的props。<br />Context API提供了一种在组件树中共享值的方式，无需显式地通过每一层组件。 |
|           **子组件渲染**           | **Vue插槽**是一种组件间内容分发机制，允许父组件将内容传递给子组件的指定位置。<br />通过`<slot>`标签定义插槽的位置，父组件使用`<template>`标签包裹内容，并通过具名插槽或作用域插槽将内容传递给子组件。 | **React通过 JSX children 属性**直接将组件标签内的内容作为prop传递给子组件。<br />组件标签内的内容会自动成为`children` prop，父组件可以将内容直接传递给子组件，并在子组件内部通过`props.children`或函数组件的props参数访问。 |
|            **模板引用**            | Vue2中：模板中的元素或组件上使用`ref`属性，在Vue实例的方法或生命周期钩子中通过`this.$refs`来访问。<br />Vue3中：模板中使用`ref`函数来创建引用，在 `setup` 函数中通过 `import { ref } from 'vue'; ` 创建 ref 模板同名 ref 变量引用模板。 | `useRef`钩子来创建引用，通用 JSX 使用 `ref = ref变量名 ` 进行引用 |
|             **传送门**             | [Teleport](https://cn.vuejs.org/guide/built-ins/teleport.html)：引入了 `<Teleport>` 组件，将子组件渲染到 DOM 树中不同于其父组件位置的能力 | [Portals](https://react.docschina.org/reference/react-dom/createPortal#createportal)：通过`createPortal` 允许你将 JSX 作为 children 渲染至 DOM 的不同部分 |
|            **生命周期**            | Vue 2.x有`beforeCreate`、`created`、`beforeMount`、`mounted`、`beforeUpdate`、`updated`、`beforeDestroy`和`destroyed`等生命周期钩子。<br />Vue 3.x引入了Composition API，提供了`onMounted`、`onUpdated`、`onUnmounted`等函数式API来替代部分生命周期钩子。 | React有`constructor`、`componentDidMount`、`componentDidUpdate`、`componentWillUnmount`等生命周期方法。<br />在React 16.8及以后的版本中，引入了Hooks API（如`useEffect`、`useState`等），使得在没有类的情况下使用状态以及其他React特性成为可能。 |
|            **逻辑复用**            |              Vue3中采用组合式 API 逻辑组织能力               |                   React 中采用 React Hooks                   |
|                                    |                                                              |                                                              |



## 组合式 API 与 React Hooks

> 以下对比来自Vue3官方文档：[组合式 API 常见问答 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/extras/composition-api-faq.html#comparison-with-react-hooks)

组合式 API 提供了和 React Hooks 相同级别的逻辑组织能力，但它们之间有着一些重要的区别。

React Hooks 在组件每次更新时都会重新调用。这就产生了一些即使是经验丰富的 React 开发者也会感到困惑的问题。这也带来了一些性能问题，并且相当影响开发体验。例如：

- Hooks 有严格的调用顺序，并不可以写在条件分支中。

- React 组件中定义的变量会被一个钩子函数闭包捕获，若开发者传递了错误的依赖数组，它会变得“过期”。这导致了 React 开发者非常依赖 ESLint 规则以确保传递了正确的依赖，然而，这些规则往往不够智能，保持正确的代价过高，在一些边缘情况时会遇到令人头疼的、不必要的报错信息。

  > 在Vue 3的组合式API和React Hooks中，闭包变量处理的差异主要体现在以下方面：
  >
  > **Vue 3 组合式API**
  >
  > 在Vue 3中，由于`setup()`或`<script setup>`只被调用一次，并且Vue的响应式系统运行时会自动收集依赖，因此开发者不需要担心闭包变量的问题。这意味着你可以在`setup()`函数中定义响应式状态和方法，然后在组件的其他部分（如模板或计算属性）中直接使用它们，而无需担心闭包或作用域的问题。
  >
  > **React Hooks**
  >
  > 在React中，由于Hooks在每次组件更新时都会重新调用，因此React组件中定义的变量会被钩子函数闭包捕获。这可能导致所谓的“过期闭包”问题，即闭包在创建时捕获的外部变量的值可能在后续组件更新时已经不再准确。为了解决这个问题，React开发者需要依赖ESLint规则来确保传递了正确的依赖数组。然而，这些规则往往不够智能，而且在一些边缘情况下可能会引发不必要的报错信息。
  >
  > **具体例子**
  >
  > 假设我们有一个计数器组件，它使用了一个状态变量`count`和一个更新该变量的函数`setCount`。
  >
  > **Vue 3 组合式API**
  >
  > ```javascript
  > <script setup>  
  > import { ref } from 'vue'  
  >   
  > const count = ref(0)  
  > const setCount = (newValue) => {  
  >   count.value = newValue  
  > }  
  > </script>  
  >   
  > <template>  
  >   <button @click="setCount(count + 1)">Count: {{ count }}</button>  
  > </template>
  > ```
  >
  > 在上面的Vue代码中，我们直接在`setup()`或`<script setup>`中定义了`count`和`setCount`，并在模板中直接使用了它们。由于`setup()`只被调用一次，并且Vue的响应式系统会自动处理依赖，因此这里不存在闭包变量的问题。
  >
  > **React Hooks**
  >
  > ```javascript
  > import React, { useState } from 'react';  
  >   
  > function Counter() {  
  >   const [count, setCount] = useState(0);  
  >   
  >   const handleClick = () => {  
  >     setCount(count + 1);  
  >   };  
  >   
  >   return (  
  >     <button onClick={handleClick}>Count: {count}</button>  
  >   );  
  > }
  > ```
  >
  > 在上面的React代码中，我们使用了`useState`Hook来定义`count`和`setCount`。然而，由于`handleClick`是一个闭包函数，它捕获了外部作用域中的`count`变量。如果我们在后续组件更新中修改了`count`的值，但`handleClick`中的闭包仍然保存着旧值，这就可能导致“过期闭包”问题，(React Hooks 在组件每次更新时都会重新调用)。为了避免这个问题，我们需要确保传递给`useState`的依赖数组是正确的。然而，这往往需要依赖ESLint规则，并且可能引发不必要的报错信息。

- 昂贵的计算需要使用 `useMemo`，这也需要传入正确的依赖数组。

- 在默认情况下，传递给子组件的事件处理函数会导致子组件进行不必要的更新。子组件默认更新，并需要显式的调用 `useCallback` 作优化。这个优化同样需要正确的依赖数组，并且几乎在任何时候都需要。忽视这一点会导致默认情况下对应用进行过度渲染，并可能在不知不觉中导致性能问题。

- 要解决变量闭包导致的问题，再结合并发功能，使得很难推理出一段钩子代码是什么时候运行的，并且很不好处理需要在多次渲染间保持引用 (通过 `useRef`) 的可变状态。

相比起来，Vue 的组合式 API：

- 仅调用 `setup()` 或 `<script setup>` 的代码一次。这使得代码更符合日常 JavaScript 的直觉，不需要担心闭包变量的问题。组合式 API 也并不限制调用顺序，还可以有条件地进行调用。
- Vue 的响应性系统运行时会自动收集计算属性和侦听器的依赖，因此无需手动声明依赖。
- 无需手动缓存回调函数来避免不必要的组件更新。Vue 细粒度的响应性系统能够确保在绝大部分情况下组件仅执行必要的更新。对 Vue 开发者来说几乎不怎么需要对子组件更新进行手动优化。

**总结：**

| 特性/差异点  | Vue 3 组合式 API                               | React Hooks                                                  |
| :----------- | :--------------------------------------------- | ------------------------------------------------------------ |
| 调用频率     | `setup()` 或 `<script setup>` 只调用一次       | 每个组件更新时都会重新调用                                   |
| 调用顺序     | 不限制调用顺序，可以条件调用                   | 严格的调用顺序，不可在条件分支中调用                         |
| 依赖管理     | 运行时自动收集计算属性和侦听器的依赖           | 需要手动声明依赖数组                                         |
| 闭包变量     | 不需要担心闭包变量的问题                       | 变量会被钩子函数闭包捕获，可能“过期”                         |
| 回调函数缓存 | 无需手动缓存回调函数                           | 需要手动使用 `useCallback` 缓存回调以避免不必要的更新        |
| 昂贵的计算   | Vue 的响应性系统会自动处理                     | 需要手动使用 `useMemo` 缓存昂贵的计算                        |
| 依赖数组问题 | 不存在依赖数组问题                             | 依赖数组不正确可能导致性能问题和错误                         |
| ESLint 依赖  | 不需要依赖ESLint确保正确的依赖                 | 需要ESLint规则以确保传递了正确的依赖数组                     |
| 引用保持     | 可通过 `ref()` 保持引用                        | 也可通过 `useRef()` 保持引用，但React中引用主要用于DOM引用或可变状态 |
| 并发与推理   | 易于推理代码何时运行，`ref()` 用于保持可变状态 | 并发功能结合闭包变量使得代码运行时机难以推理                 |
| 更新优化     | Vue细粒度的响应性系统确保仅执行必要更新        | 开发者需要显式优化子组件更新                                 |
| 开发体验     | 符合日常JavaScript直觉，代码更易读和维护       | 可能因严格的调用顺序和依赖管理而影响开发体验                 |



## **模板引用**

Vue 2、Vue 3和React在模板引用方面都有各自的特点和用法。下面我将对这三个框架的模板引用进行比较，并给出相应的例子。

### Vue 2的模板引用

在Vue 2中，模板引用是通过在模板中的元素或组件上使用`ref`属性来实现的。然后，在Vue实例的方法或生命周期钩子中，你可以通过`this.$refs`来访问这些引用。

**例子**：

```vue
<template>  
  <div>  
    <input ref="myInput" />  
    <button @click="focusInput">Focus Input</button>  
  </div>  
</template>  
  
<script>  
export default {  
  methods: {  
    focusInput() {  
      this.$refs.myInput.focus();  
    }  
  }  
}  
</script>
```

在上面的例子中，我们给`<input>`元素添加了一个`ref="myInput"`。然后，在`focusInput`方法中，我们通过`this.$refs.myInput`访问到了这个元素，并调用了它的`focus`方法。

### Vue 3的模板引用

Vue 3引入了Composition API，它提供了一种更灵活的方式来组织和管理组件的逻辑。在Vue 3中，你可以使用`ref`函数来创建引用，并通过`setup`函数返回它们。

**例子**：

```vue
<template>  
  <div>  
    <input ref="myInput" />  
    <button @click="focusInput">Focus Input</button>  
  </div>  
</template>  
  
<script>  
import { ref } from 'vue';  
  
export default {  
  setup() {  
    const myInput = ref(null);  
  
    const focusInput = () => {  
      myInput.value.focus();  
    }  
  
    return {  
      myInput,  
      focusInput  
    }  
  }  
}  
</script>
```

在Vue 3中，我们使用`ref`函数创建了一个引用`myInput`，并在`setup`函数中返回了它。然后，在模板中，我们可以像Vue 2一样使用`ref="myInput"`来引用这个元素。在`focusInput`函数中，我们通过`myInput.value`访问到了这个元素。

### React的模板引用

React使用JSX来编写模板，并且没有直接的“ref”属性来引用模板中的元素。相反，React提供了一个`useRef`钩子来创建引用。

**例子**：

```jsx
import React, { useRef } from 'react';  
  
function MyComponent() {  
  const myInput = useRef(null);  
  
  const focusInput = () => {  
    myInput.current.focus();  
  }  
  
  return (  
    <div>  
      <input ref={myInput} />  
      <button onClick={focusInput}>Focus Input</button>  
    </div>  
  );  
}
```

在React中，我们使用`useRef`钩子创建了一个引用`myInput`，并将其作为`ref`属性传递给`<input>`元素。然后，在`focusInput`函数中，我们通过`myInput.current`访问到了这个元素。

**总结**

Vue 2和Vue 3的模板引用都使用`ref`属性，但Vue 3通过Composition API提供了更灵活的方式来管理引用。而React则使用`useRef`钩子来创建和管理引用。这三个框架的模板引用方式都允许你访问和操作模板中的元素，但具体语法和用法有所不同。选择哪个框架取决于项目的需求、团队的偏好以及个人的经验。



## **插槽/children 属性**

### **Vue 插槽**

### **React children 属性**

在 React 中，并没有与 Vue 插槽完全对应的概念。Vue 的插槽允许你定义组件的可替换部分，这样父组件可以在使用子组件时插入自己的内容。而在 React 中，组件的复用通常通过 props 和组合的方式来实现。

然而，React 社区中确实有一些模式和方法来模拟类似 Vue 插槽的功能。其中最常见的是使用 `children` prop 和渲染 props（render props）。

**使用 `children` prop**

在 React 中，每个组件都可以接收一个特殊的 prop 叫做 `children`。这个 prop 包含了组件标签之间的所有内容。你可以像操作其他 props 一样操作 `children`。

```jsx
const WrapperComponent = ({ children }) => (  
  <div style={{ display: 'inline-block', background: 'skyblue' }}>  
    {children}  
  </div>  
);  
  
const App = () => (  
  <WrapperComponent>  
    <ChildComponent name="Hello world!" />  
  </WrapperComponent>  
);
```

在这个例子中，`WrapperComponent` 接收 `children` prop 并将其渲染出来。`App` 组件在 `WrapperComponent` 标签内放置了 `ChildComponent`，这就像是 Vue 中的默认插槽。

**使用 Render Props**

Render props 是一种在 React 中实现更高级组件组合的技术。Render props 是一个函数 prop，该函数返回要渲染的 React 元素。

```jsx
const WrapperComponent = ({ render }) => (  
  <div style={{ display: 'inline-block', background: 'skyblue' }}>  
    {render()}  
  </div>  
);  
  
const App = () => (  
  <WrapperComponent render={() => <ChildComponent name="Hello world!" />} />  
);
```

在这个例子中，`WrapperComponent` 接受一个名为 `render` 的函数 prop，并在其内部调用它。`App` 组件在调用 `WrapperComponent` 时传递了一个函数，该函数返回 `ChildComponent` 元素。这允许 `WrapperComponent` 定义布局和样式，而 `App` 组件定义要渲染的具体内容。

**类似于 Vue 命名插槽的 React 实现**

虽然 React 没有内置的命名插槽概念，但你可以使用对象或特定的 props 来模拟类似的功能。例如，你可以定义一个接收多个渲染函数的 prop，每个函数对应一个“插槽”。

```jsx
const WrapperComponent = ({ header, content }) => (  
  <div style={{ display: 'inline-block', background: 'skyblue' }}>  
    {header()}  
    {content()}  
  </div>  
);  
  
const App = () => (  
  <WrapperComponent  
    header={() => <h1>Header</h1>}  
    content={() => <ChildComponent name="Hello world!" />}  
  />  
);
```

在这个例子中，`WrapperComponent` 接受 `header` 和 `content` 两个函数 props，分别用于渲染头部和内容。`App` 组件为这两个 props 提供了具体的实现。



## **虚拟DOM**

Vue和React的虚拟DOM（VDOM）在核心原理上是相似的，都是通过JavaScript对象模拟DOM结构，并在需要时与真实DOM进行同步，以提高性能。然而，Vue和React在VDOM的实现和使用上确实存在一些差异。

1. **模板渲染方式和过程**：
   * Vue通常使用基于HTML的模板语法来定义组件，这些模板随后被编译成渲染函数，生成VDOM。
   * React则使用JSX（JavaScript XML）或纯JavaScript函数来定义组件和生成VDOM。
   * 这种差异使得Vue的模板更加接近传统的HTML，易于理解和使用，而React则提供了更大的灵活性和编程能力。
2. **数据流和状态管理**：
   * Vue采用响应式数据系统，当数据变化时，视图会自动更新。这种双向数据绑定使得Vue的状态管理相对直观。
   * 而React则推崇单向数据流，通过props和state来管理组件的状态，这有助于保持组件的独立性和可预测性。
3. **diff算法**：虽然Vue和React都使用diff算法来比较新旧VDOM并最小化DOM操作，但它们的实现细节有所不同。
   * Vue的diff算法针对同一节点进行优化，可以复用已有的DOM元素，从而提高性能。
   * 而React的diff算法则基于组件的类型进行更细致的比较和优化。

### **Vue DOM Diff 算法**

> 详细过程可以参考我的博客：[Vue2.x 原理源码分析 | Sewen 博客 (sewar-x.github.io)](https://sewar-x.github.io/myblog/vue/Vue2原理和源码分析/#diff-算法)

### **React DOM Diff 算法**

> 详细过程可以参考：[DOM DIFF 算法 - React Guidebook (tsejx.github.io)](https://tsejx.github.io/react-guidebook/infrastructure/old/diffing-algorithm)

**参考资料**

[Virtual DOM - React Guidebook (tsejx.github.io)](https://tsejx.github.io/react-guidebook/infrastructure/old/virtual-dom)

## **参考资料**

[React Guidebook - 📚 React 知识图谱 关于概念、技巧、生态、前沿、源码核心 - React Guidebook (tsejx.github.io)](https://tsejx.github.io/react-guidebook/)

[React技术揭秘 (iamkasong.com)](https://react.iamkasong.com/#导学视频)

[React 官方中文文档 (docschina.org)](

**参考资料**

[谈谈Vue和React的区别？](https://blog.csdn.net/xgangzai/article/details/115301290)


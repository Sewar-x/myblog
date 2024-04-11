---
order: 1

star: true

category:

  - React

tag:

  - React组件渲染

---



# **组件渲染流程**

![image-20240410143142963](../../images/image-20240410143142963.png)

1. **开发者**：这是整个流程的起点，开发者使用 React 编写应用程序的 JSX 代码。

2. **编写 JSX 代码**：开发者在开发过程中使用 JSX 语法来描述 UI 组件的结构和外观。

3. **Babel 编译**：开发者编写的 JSX 代码通过 Babel 进行编译。Babel 是一个 JavaScript 编译器，它可以将现代 JavaScript 代码以及 JSX 转换为浏览器能够理解的 JavaScript 代码。

4. **React.createElement 调用**：Babel 将 JSX 代码转换为 `React.createElement` 方法调用。这个方法是 React 用来创建虚拟 DOM 节点的核心方法。

5. **ReactElement 调用**：`React.createElement` 方法生成的是 ReactElement 对象，这些对象代表了虚拟 DOM 中的节点。

6. **作为参数处理**：ReactElement 对象被作为参数传递给 React 的渲染处理流程。

7. **虚拟 DOM 渲染**：React 使用虚拟 DOM 来提高应用性能。虚拟 DOM 是真实 DOM 的一个轻量级描述，React 通过比较虚拟 DOM 来计算出最小的更新操作，从而高效地更新真实 DOM。

8. **ReactDOM.render()**：这是 React 将虚拟 DOM 转换为真实 DOM 的方法。`ReactDOM.render(元素, 容器)` 接受一个 ReactElement 和一个 DOM 节点作为参数，它会将 ReactElement 渲染到指定的容器中。

9. **真实 DOM**：最终，React 通过 `render` 方法将虚拟 DOM 更新到真实 DOM 上，从而在浏览器中展示出开发者编写的 UI 界面。





## **组件初始化**



1. **编写 JSX 组件实例**：

   * 定义React组件：可以通过函数组件或类组件来实现。函数组件是一个简单的JavaScript函数，而类组件则继承自`React.Component`。

   * 创建组件实例：当React需要渲染一个组件时，它会首先创建一个组件的实例。对于类组件，这意味着会调用其构造函数（如果有定义的话）。在构造函数中，你可以初始化组件的状态（`this.state`）或绑定事件处理器。

2. **渲染虚拟DOM**：

   * React 通过 `React.createElement` 方法**将 JSX 转换成虚拟DOM**。
   * 虚拟DOM是一个轻量级的JavaScript对象树，它表示了组件的UI结构。

3. **将虚拟DOM转换为真实DOM**：

   * React使用`ReactDOM.render`或`ReactDOM.hydrate`函数将虚拟DOM渲染到真实的DOM中。

4. **挂载完成**：

   * 一旦DOM更新完成，组件就被认为是“挂载”完成的。
   * 对于类组件，这意味着`componentDidMount`生命周期方法会被调用（如果有定义的话）。对于函数组件，你可以使用`useEffect` Hook 来执行类似的操作。



## **组件更新**

1. **状态或属性变化**：当组件的状态（state）或属性（props）发生变化时，组件的更新过程开始。
2. **虚拟DOM比较**：React会创建一个新的虚拟DOM树，并与旧的虚拟DOM树进行比较，找出差异。这个过程叫做“协调”或“diff”。React通过高效的diff算法来确定哪些部分需要更新。
3. **计算最小DOM操作**：基于虚拟DOM的差异，React会计算出最小化的DOM操作，以更新实际的DOM。这些操作可能包括添加、更新或删除DOM节点。
4. **应用DOM操作**：React将这些计算出的DOM操作应用到实际的DOM上，以更新页面的UI。
5. **组件更新完成**：一旦DOM更新完成，组件就被认为是更新完成的。对于类组件，相关的生命周期方法（如`componentDidUpdate`）会被调用。对于函数组件，你可以使用`useEffect` Hook 来处理更新后的逻辑。

![image-20240410143234400](../../images/image-20240410143234400.png)

## **总结**

在组件渲染时，主要完成以下几个步骤：

1. 初始渲染时候：

   * **将 JSX 转换成虚拟 DOM**：`JSX`通过`babel`最终转化成`React.createElement`形式；

   * **将虚拟 DOM 渲染成 真实 DOM**；

2. 组件更新时候：

   * 生成新的虚拟 DOM；
   * 使用 diff 算法比较新旧虚拟 DOM差异，生成差异树；
   * 应用差异，将虚拟 DOM 渲染成 真实 DOM；
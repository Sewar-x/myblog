---
star: false
category:
  - React
tag:
  - React
---
# React

> 官方文档：[React 官方中文文档 (docschina.org)](https://react.docschina.org/)

## **大纲**

![React](../images/React.png)

| 内容                                     | 库/框架                                                      |                                                              |
| :--------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [**基础**](https://react.docschina.org/) |                                                              |                                                              |
| **核心API： 22种 Hooks**                 |                                                              |                                                              |
| **数据状态管理**                         | **Redux**                                                    |                                                              |
| **路由**                                 | React-Router                                                 |                                                              |
| **UI框架**                               | Ant Design                                                   |                                                              |
| **企业级前端应用框架**                   | [**Umijs**](https://umijs.org/)                              | 采用约定式路由，并配备了一套完善的插件体系                   |
|                                          | [Hooks-Admin](https://baimingxuan.github.io/react-router6-doc/start/overview) | 基于 React18、React-Router v6、React-Hooks、Redux && Redux-Toolkit、TypeScript、Vite2、Ant-Design 开源的一套后台管理框架 |

---



## **基础概念**



|         概念          | 说明                                                         |
| :-------------------: | :----------------------------------------------------------- |
| **组件（Component）** | React的基本构建块，用于表示UI的某一部分。可以是**函数或类**，接受输入（props）并返回React元素树。 |
|        **JSX**        | JavaScript的语法扩展，用于描述UI的外观。看起来像HTML，但在编译时转换为React元素。 |
|       **Props**       | Properties的缩写，用于**父组件向子组件传递数据**。子组件通过`this.props`（类组件）或函数参数（函数组件）接收props。 |
|       **State**       | **组件的私有数据，只能由该组件自己修改**。通过`this.state`（类组件）或`useState` Hook（函数组件）管理。 |
|     **事件处理**      | React组件可以像DOM元素一样处理事件，如点击、输入等。事件处理函数通常作为props传递给组件。 |
|   **生命周期方法**    | 类组件中的特殊方法，用于**在组件的不同阶段执行代码**。如`componentDidMount`、`componentDidUpdate`和`componentWillUnmount`。函数组件使用Hooks处理类似逻辑。 |
|       **Hooks**       | React 16.8引入的新特性，**允许在不编写class的情况下使用state以及其他的React特性**。如`useState`、`useEffect`和`useContext`等。 |
|      **Context**      | **允许无需显式地通过每一层组件传递props，就能将值深入组件树**。通过`React.createContext`创建，并通过`<Context.Provider>`和`useContext` Hook使用。 |
|       **Refs**        | 提供了一种方式，**用于访问DOM节点或在render方法中创建的React元素**。常用于管理焦点、文本选择或媒体播放。 |
|      **虚拟DOM**      | React的一个核心概念，**React使用虚拟DOM来比较和更新实际的DOM**。这提高了性能，因为React只更新需要变化的部分。 |
| **渲染（Rendering）** | React将组件转换为DOM标记的过程，这个过程包括创建虚拟DOM树并比较它与之前的版本，然后更新实际的DOM。 |
|  **Reconciliation**   | React的“reconciliation”算法是React用于确定哪些组件需要更新，哪些可以保持不变的过程。这是React性能优化的关键部分。 |

---

## 

## 特点

**1.声明式设计** −React采用声明范式：采用一种描述性的方式来定义组件的状态和外观，而不是直接操作DOM来更新界面。

> 在声明式设计中，开发者主要关注组件的当前状态，以及状态变化时应该呈现的界面。React会自动处理这些状态变化，并高效地更新DOM，以反映新的界面状态。这种方式使得代码更加直观、易于理解和维护。
>
> 与命令式编程（如使用jQuery或DOM事件直接操作DOM）相比，声明式设计更加关注结果而不是过程。在命令式编程中，开发者需要明确地告诉浏览器每一步应该做什么，而在声明式设计中，开发者只需要描述出最终的状态，React会自动完成中间的转换过程。

**2.高效** −React通过对VDOM，最大限度地减少与DOM的交互。

**4.JSX** − JSX 是 JavaScript 语法的扩展。

**5.组件** − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

**6.单向响应的数据流** − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

> 在 React 中，数据主要沿一个方向流动，从父组件流向子组件。
>
> 当父组件的状态（state）发生变化时，它会将新的状态传递给子组件。
>
> 子组件接收到新的属性（props）后，会根据这些属性来渲染界面。在这个过程中，子组件不能直接修改父组件的状态，而是需要通过某种方式（如回调函数）通知父组件进行状态更新。

---



## **组件**

### **组件定义**

React 组件定义有两种类型：类组件和函数组件。

React定义组件主要有三种方式：

1. **无状态函数式组件**：这种组件是为了创建纯展示组件，只负责根据传入的props来展示，不涉及到state状态的操作。它没有实例，整体渲染性能得到提升，因此不能访问this对象，也不能使用生命周期的方法。语法上，它就是一个简单的JavaScript函数，接受props作为参数，并返回React元素。
2. **React.createClass定义的组件**：这是ES5的方式定义组件。它会自动绑定成员函数中的this，但可能会导致不必要的性能开销，并增加代码过时的可能性。现在这种方式已经较少使用。
3. **React.Component定义的组件**：这是ES6形式的组件定义方式，通过继承React.Component类来创建组件。它允许你使用更多的React特性，如state和生命周期方法。需要注意的是，与React.createClass不同，React.Component创建的组件需要手动绑定成员函数中的this，否则this不能获取当前组件实例对象。

#### 类组件（Class Components）

类组件是使用ES6的类语法定义的React组件。

它们**具有更完整的生命周期方法**，包括组件挂载、更新和卸载等各个阶段的方法。类组件也支持状态（state）和事件处理。

**特征：**

1. **状态管理**：类组件有自己的状态（state），可以**通过`this.state`访问和修改**。状态的变化会触发组件的重新渲染。
2. **生命周期方法**：类组件包含一系列生命周期方法，如`componentDidMount`、`componentDidUpdate`和`componentWillUnmount`等，用于在组件的不同阶段执行特定的操作。
3. **事件处理**：类组件可以定义事件处理函数，通过绑定到DOM元素的事件来响应用户交互。
4. **引用（Refs）**：类组件可以使用`createRef`或`React.forwardRef`来创建和使用refs，从而直接访问DOM元素或子组件。

```jsx
class MyClassComponent extends React.Component {   
  constructor(props) {  //初始化组件的状态和绑定事件处理函数
    super(props);  //通过`super`关键字获取来自父组件的`props`
    this.state = {  
      // 使用props来初始化状态（如果需要的话）  
      value: props.initialValue,  
    };  
    this.handleClick = this.handleClick.bind(this); //在`this`上挂载方法
  }  
  
  render() {  
    return <div>{this.state.value}</div>;  
  }  
}
```

>  在这个例子中，`MyClassComponent`是一个类组件。它有一个构造函数，用于初始化组件的状态。状态是一个对象，可以包含组件需要的数据。`render`方法返回组件的JSX，即要渲染的UI。此外，类组件还有生命周期方法，如`componentDidMount`、`componentDidUpdate`等，这些方法在组件的不同生命周期阶段被自动调用。



#### 函数组件（Function Components）

函数组件是使用普通JavaScript函数定义的React组件。

函数组件更加轻量，没有内置的状态和生命周期方法，但可以通过Hooks来添加这些功能。

**特征：**

1. **无状态**：函数组件本身没有状态，但可以通过Hooks（如`useState`）来添加状态。
2. **Hooks**：函数组件可以使用Hooks来访问React的特性，如状态、生命周期、上下文等，而无需编写类。
3. **简单性**：函数组件的语法更加简洁，易于理解和维护。
4. **性能**：由于函数组件没有类的开销，它们在性能上可能略优于类组件。

```jsx
import React, { useState, useEffect } from 'react';  
  
function MyFunctionComponent() {  
  const [message, setMessage] = useState('Hello from Function Component');  
  
  useEffect(() => {  
    console.log('Component mounted');  
  }, []);  
  
  return <div>{message}</div>;  
}
```

>  在这个例子中，`MyFunctionComponent`是一个函数组件。它使用`useState` Hook来添加一个状态变量`message`，并通过`setMessage`函数来更新这个状态。当状态发生变化时，组件会重新渲染。此外，它还使用`useEffect` Hook来模拟类组件的生命周期方法，这里用于在组件挂载时打印一条消息。



#### 类组件与函数组件的对比

|                  | 类组件                                            | 函数组件                                 |
| :--------------: | :------------------------------------------------ | :--------------------------------------- |
|   **定义方式**   | 使用ES6的类语法                                   | 使用普通JavaScript函数                   |
|   **状态管理**   | 内置状态管理，通过`this.state`访问和修改          | 通过`useState` Hook添加状态              |
| **生命周期方法** | 完整的生命周期方法，如`componentDidMount`等       | 通过Hooks（如`useEffect`）模拟生命周期   |
|   **事件处理**   | 定义事件处理函数，通过`this`绑定到组件实例        | 定义事件处理函数，作为组件函数的参数传递 |
| **引用（Refs）** | 使用`createRef`或`React.forwardRef`创建和使用refs | 通过`useRef` Hook创建和使用refs          |
|    **复杂性**    | 相对复杂，需要处理类的继承、this绑定等问题        | 简单直观，易于理解和维护                 |
|     **性能**     | 可能略逊于函数组件，因为有类的开销                | 性能较好，没有类的开销                   |

总的来说，类组件和函数组件在React中都有各自的应用场景：

* 类组件提供了更完整的生命周期方法和状态管理，适用于复杂的组件逻辑；

* 而函数组件则更加轻量、简单，并且随着Hooks的引入，其功能得到了极大的增强。



### **注意事项**

> **不能把组件函数的定义嵌套起来**

React 组件为函数，每次渲染组件时，就是重新调用一次函数，如果将组件函数的定义嵌套起来，将导致定义被嵌套组件的状态无法控制（每次外层组件渲染时，被嵌套组件函数重新被执行渲染，状态重置）

示例参考官网：[对 state 进行保留和重置 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state)

> **组件名字总是以大写字母开头**

> **组件返回 JSX 标签**

> **一个组件必须是纯粹的**

- **只负责自己的任务。** 它不会更改在该函数调用前就已存在的对象或变量。
- **输入相同，则输出相同。** 给定相同的输入，组件应该总是返回相同的 JSX。

>  组件不应依赖于彼此的渲染顺序,渲染随时可能发生。

> **不应该改变任何用于组件渲染的输入**。这包括 props、state 和 context。通过 [“设置” state](https://react.docschina.org/learn/state-a-components-memory) 来更新界面，而不要改变预先存在的对象。

> **列表渲染时为每个组件设置一个 `key` 值**：它使 React 能追踪这些组件，即便后者的位置或数据发生了变化

---

## **受控组件和非受控组件**

在React中，表单元素的行为主要分为两种类型：受控组件（Controlled Components）和非受控组件（Uncontrolled Components）。

### **受控组件**

受控组件是指其值（如输入框的值）由React的状态（state）来控制并更新的组件：

* 在受控组件中，组件的值与状态之间保持同步：当用户输入或选择某个值时，会触发相应的事件处理函数来更新组件的状态，从而重新渲染组件。
* 受控组件必须提供一个事件处理函数来管理值的变化。
* 受控组件的优点是可以精确控制表单元素的值和行为，并且能够对值进行验证和处理。

**示例**

在受控组件中，我们将使用React的state来管理表单元素的值。在函数组件中，我们可以使用React的`useState` Hook来创建和管理状态。

```jsx
import React, { useState } from 'react';  
  
function ControlledComponent() {  
  const [inputValue, setInputValue] = useState('');  
  
  const handleChange = (event) => {  
    setInputValue(event.target.value);  
  };  
  
  return (  
    <div>  
      <input type="text" value={inputValue} onChange={handleChange} />  
      <p>你输入的内容是: {inputValue}</p>  
    </div>  
  );  
}  
  
export default ControlledComponent;
```

>  在这个例子中，`input`元素的值通过`useState` Hook创建的状态`inputValue`来控制。
>
> 当用户在输入框中输入文本时，`handleChange`函数会被调用，并通过`setInputValue`更新状态。这会导致组件重新渲染，输入框的值也会更新为新的状态值。

### **非受控组件**

非受控组件则是指其值不受React状态控制的组件：

* 在非受控组件中，表单元素的值通常由DOM自身维护，并通过对DOM进行引用来获取表单元素的值。通常是通过ref属性获取DOM元素的引用。
* 非受控组件的优点是简单易用，在处理简单的表单场景时可以减少代码量。它适用于一些简单的场景，不需要对表单数据进行额外处理的情况。

**示例**

非受控组件在函数组件中通常使用`useRef` Hook来获取对DOM元素的引用，而不是使用状态来管理值。

```jsx
import React, { useRef } from 'react';  
  
function UncontrolledComponent() {  
  const inputRef = useRef(null);  
  
  const handleSubmit = (event) => {  
    event.preventDefault();  
    alert('你输入的内容是: ' + inputRef.current.value);  
  };  
  
  return (  
    <form onSubmit={handleSubmit}>  
      <input type="text" ref={inputRef} />  
      <button type="submit">提交</button>  
    </form>  
  );  
}  
  
export default UncontrolledComponent;
```

> 在这个例子中，我们使用`useRef`创建了一个`ref`对象，并将其附加到`input`元素上。通过`inputRef.current`，我们可以访问到实际的DOM节点，并读取其值。当用户点击提交按钮时，我们直接通过`inputRef.current.value`获取输入框的值，而不需要通过状态来管理它。

非受控组件在React函数组件中相对较少使用，因为它们的值不由React状态控制，这可能导致数据流不清晰。然而，在某些情况下，如与第三方库集成或需要直接操作DOM时，非受控组件可能是必要的。

### **区别**

受控组件和非受控组件的主要区别在于表单元素的值是由React状态控制还是由DOM自身维护。

|     对比项     | 受控组件 (Controlled Components)                             | 非受控组件 (Uncontrolled Components)                  |
| :------------: | :----------------------------------------------------------- | :---------------------------------------------------- |
|   **值管理**   | 值由React状态控制                                            | 值由DOM自身维护                                       |
|  **状态管理**  | 使用React状态（如`useState`）来管理值                        | 不使用React状态来管理值                               |
|   **数据流**   | 清晰、明确的数据流                                           | 数据流可能不清晰，直接操作DOM                         |
|  **事件处理**  | 需要编写事件处理函数来更新状态                               | 无需编写事件处理函数来更新状态                        |
| **验证和处理** | 可以方便地对值进行验证和处理                                 | 值验证和处理可能较复杂，通常需要在表单提交时处理      |
|    **性能**    | 可能需要更多的计算和渲染，因为每次值改变都会触发状态更新和组件重渲染 | 性能可能稍好，因为不涉及到React状态的更新和组件重渲染 |
|  **适用场景**  | 复杂表单、需要验证和处理表单数据                             | 简单表单、无需额外处理表单数据、与第三方库集成        |
|  **推荐程度**  | 推荐用于复杂表单和需要精确控制表单元素值的情况               | 在简单表单或特定场景下使用，通常不是首选              |



## **JSX**

```react
ReactDOM.render(
    <div>
	<h1>JSX教程</h1>
	<h2>欢迎学习 React</h2>
        <p data-myattribute = "somevalue">react jsx</p>
    </div>,
    document.getElementById('example')
);
```

**JSX 规则：**

* 只能返回一个根元素 

* 标签必须闭合

* 驼峰式命名属性
* 组件的名称大写，以区分它们与普通的 HTML 标签
* 在 JSX 中，用单括号`{}` 解析表达式值，属性（attributes）使用双引号，而不是单引号
* 浏览器不能直接理解 JSX，需要使用 Babel 将 JSX 转换为纯 JavaScript。通过配置构建工具（如 Webpack）实现。

详细解释参考文档：[使用 JSX 书写标签语言 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/writing-markup-with-jsx)

### **渲染子组件 (类似 Slot)**

**将 JSX 作为子组件传递**：

当您将内容嵌套在 JSX 标签中时，父组件将在名为 `children` 的 prop 中接收到子组件内容。

```react
import React from 'react';  
  
function ParentComponent({ children }) {  
  return (  
    <div>  
      <h1>我是父组件</h1>  
      {children} {/* 直接渲染props中的子组件 */}  
    </div>  
  );  
}  
  
// 使用时  
function App() {  
  return (  
    <ParentComponent>  
      <p>我是子组件1</p>  
      <p>我是子组件2</p>  
    </ParentComponent>  
  );  
}
```

**参考资料**

[React JSX_w3cschool](https://www.w3cschool.cn/react/react-jsx.html)

[使用 JSX 书写标签语言 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/writing-markup-with-jsx)

---



## **Prop**

**摘要：**

- 要传递 props，请将它们添加到 JSX，就像使用 HTML 属性一样。
- 要读取 props，请使用 `function Avatar({ person, size })` 解构语法。
- 你可以指定一个默认值，如 `size = 100`，用于缺少值或值为 `undefined` 的 props 。
- 你可以使用 `<Avatar {...props} />` JSX 展开语法转发所有 props，但不要过度使用它！
- 像 `<Card><Avatar /></Card>` 这样的嵌套 JSX，将被视为 `Card` 组件的 `children` prop。
- Props 是只读的时间快照：每次渲染都会收到新版本的 props。
- 你不能改变 props。当你需要交互性时，你可以设置 state。

> 详细解释参考官网： [将 Props 传递给组件 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/passing-props-to-a-component#)

### **组件通信**

在React中，组件间的通信主要通过props和回调函数实现：父组件通过props将数据或函数传递给子组件，子组件则可以通过这些props来接收数据和触发回调函数，从而实现与父组件的通信。

对于跨层级的组件通信，React提供了Context API。Context提供了一种在组件树中共享值的方式，无需显式地通过每一层组件传递props。

---



## **state**

在 React 中，`state` 是**组件内部用于存储可变数据的一种对象**。

这个对象可以在组件的生命周期内被修改，并且**每次修改都会触发组件的重新渲染**。

`state` 是 React 组件响应式特性的基础，它使得组件能够根据内部状态的变化来更新其 UI。

### **特点**

1. **局部性**：`state` 是组件私有的，只能在该组件内部访问和修改。如果你在两个地方渲染它，则每个副本都有独属于自己的 state。
2. **不可变性**：`state` 的更新应该总是创建一个新的状态对象，而不是直接修改当前状态，通过`setState` 方法重新创建。
3. **触发渲染**：**当 `state` 发生变化时，React 会自动重新渲染该组件及其子组件**。
4. **异步更新**：在React中，**`setState`的调用是异步的，它不会立即更新组件的状态**。React 把一系列 state 更新加入队列 ，并在在事件循环的下一个迭代应用。
5. **状态独立**：React 将 state 存储在组件之外，状态是独立于组件的，但可以通过组件来访问和修改。
   * 实际上每次组件在渲染时候，都会调用组件函数，并返回 JSX 模板。**组件内 state 每次渲染时不会重置**，因为 state 保存在 React 的队列中，每次渲染时会从队列中获取下次渲染的 state 值。注意**组件内定义的变量每次渲染时会重新定义**。

### **类组件中使用 `state`**

在类组件中，`state` 是通过类的构造函数来初始化的，并使用 `this.setState` 方法来更新：

* 在构造函数中定义 `state`;
* 通过 `this.setState` 更新状态；

```jsx
class MyComponent extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = {  //在构造函数中定义 `state`
      count: 0  
    };  
  }  
  
  handleClick = () => {  
    // 通过 `this.setState` 更新状态；
    this.setState(prevState => ({  
      count: prevState.count + 1  
    }));  
  }  
  
  render() {  
    return (  
      <div>  
        <p>You clicked {this.state.count} times</p>  
        <button onClick={this.handleClick}>Click me</button>  
      </div>  
    );  
  }  
}
```

在上面的例子中，我们定义了一个名为 `MyComponent` 的类组件，并在构造函数中初始化了 `state` 对象。然后，在 `handleClick` 方法中，我们使用 `this.setState` 来更新 `count` 的值。

### **函数组件中使用 `state`**

使用 React 的 `useState` Hook 来在函数组件中添加状态,`useState` Hook 返回一对值，当前 state 和更新它的函数:

```js
 const [count, setCount] = useState(0);
```

使用示例：

```jsx
import React, { useState } from 'react';  
  
function MyFunctionComponent() {  
  const [count, setCount] = useState(0);  
  
  const handleClick = () => {  
    setCount(count + 1);  
  };  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={handleClick}>Click me</button>  
    </div>  
  );  
}
```

在这个函数组件的例子中，我们使用 `useState` Hook 来初始化一个名为 `count` 的状态变量和一个用于更新该状态的函数 `setCount`。然后，在 `handleClick` 函数中，我们使用 `setCount` 来更新 `count` 的值。

需要注意的是，`useState` 是 React Hooks 的一部分，只能在函数组件的顶层调用，并且不能在类组件中使用。Hooks 的引入使得函数组件能够拥有类似类组件的状态管理功能，同时保持了函数组件的简洁和可重用性。

### **更新 state 中对象**

在 React 中，如果你想要更新 state 中的对象，你需要**创建一个新的对象，并将需要更新的属性添加到这个新对象中，然后使用 `setState` 方法来更新整个对象**。

**直接修改 state 中的对象不会触发 React 的重新渲染机制**。



**摘要**

- 将 React 中所有的 state 都视为不可直接修改的。
- 当你在 state 中存放对象时，直接修改对象并不会触发重渲染，并会改变前一次渲染“快照”中 state 的值。
- 不要直接修改一个对象，而要为它创建一个 **新** 版本，并通过把 state 设置成这个新版本来触发重新渲染。
- 你可以使用这样的 `{...obj, something: 'newValue'}` 对象展开语法来创建对象的拷贝。
- 对象的展开语法是浅层的：它的复制深度只有一层。
- 想要更新嵌套对象，你需要从你更新的位置开始自底向上为每一层都创建新的拷贝。
- 想要减少重复的拷贝代码，可以使用 Immer。

> 参考 官方文档：[更新 state 中的对象 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/updating-objects-in-state)



类组件更新state中对象：

```react
import React, { Component } from 'react';  
  
class MyComponent extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      person: {  
        name: 'Alice',  
        age: 30,  
        address: {  
          street: '123 Main St',  
          city: 'Anytown',  
          state: 'CA'  
        }  
      }  
    };  
  
    this.updateName = this.updateName.bind(this);  
    this.updateAge = this.updateAge.bind(this);  
  }  
  
  updateName(newName) {  
    // 创建一个新的 person 对象，并更新 name 属性  
    this.setState(prevState => ({  
      person: {  
        ...prevState.person, // 复制旧的对象  
        name: newName // 更新 name 属性  
      }  
    }));  
  }  
  
  updateAge(newAge) {  
    this.setState(prevState => ({  
      person: {  
        ...prevState.person,  
        age: newAge  
      }  
    }));  
  }  
  
  render() {  
    const { name, age } = this.state.person;  
    return (  
      <div>  
        <p>Name: {name}</p>  
        <p>Age: {age}</p>  
        <button onClick={() => this.updateName('Bob')}>Update Name to Bob</button>  
        <button onClick={() => this.updateAge(31)}>Update Age to 31</button>  
      </div>  
    );  
  }  
}  
  
export default MyComponent;
```



**函数组件更新state中对象：**

```react
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}
```



#### 使用 Immer 编写简洁的更新逻辑

如果你的 state 有多层的嵌套，你或许应该考虑 [将其扁平化](https://react.docschina.org/learn/choosing-the-state-structure#avoid-deeply-nested-state)。但是，如果你不想改变 state 的数据结构，你可能更喜欢用一种更便捷的方式来实现嵌套展开的效果。[Immer](https://github.com/immerjs/use-immer) 是一个非常流行的库，它可以让你使用简便但可以直接修改的语法编写代码，并会帮你处理好复制的过程。通过使用 Immer，你写出的代码看起来就像是你“打破了规则”而直接修改了对象：

```js
updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});
```

但是不同于一般的 mutation，它并不会覆盖之前的 state！



### **更新 state 中数组**

在 React 中，更新 state 中的数组通常涉及几个步骤。

你需要确定要执行的具体操作（比如添加、删除或修改数组中的元素），然后创建一个新的数组来替换当前的 state 数组。

由于 React 的 state 是不可变的，你**不能直接修改 state 中的数组，而必须用一个新的数组来更新 state**。

**摘要**

- 你可以把数组放入 state 中，但你不应该直接修改它。
- 不要直接修改数组，而是创建它的一份 **新的** 拷贝，然后使用新的数组来更新它的状态。
- 你可以使用 `[...arr, newItem]` 这样的数组展开语法来向数组中添加元素。
- 你可以使用 `filter()` 和 `map()` 来创建一个经过过滤或者变换的数组。
- 你可以使用 Immer 来保持代码简洁。

> 详细参考官方文档：[更新 state 中的数组 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/updating-arrays-in-state)



### **组件间共享 state**

**摘要**

- 当你想要整合两个组件时，将它们的 state 移动到共同的父组件中。
- 然后在父组件中通过 `props` 把信息传递下去。
- 最后，向下传递事件处理程序，以便子组件可以改变父组件的 state 。
- 考虑该将组件视为“受控”（由 prop 驱动）或是“不受控”（由 state 驱动）是十分有益的。

> 详细参考官方文档：[在组件间共享状态 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/sharing-state-between-components)



### **对 state 进行保留和重置**

- 只要在相同位置渲染的是相同组件， React 就会保留状态。
- state 不会被保存在 JSX 标签里。它与你在树中放置该 JSX 的位置相关联。
- 你可以通过为一个子树**指定一个不同的 key 来重置它的 state**。
- 不要嵌套组件的定义，否则你会意外地导致 state 被重置。

> 详细参考官方文档：[对 state 进行保留和重置 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/preserving-and-resetting-state#)

### **state 更新批处理**

**在React中，`setState`的调用是异步的，它不会立即更新组件的状态。React 把一系列 state 更新加入队列 ，并在在事件循环的下一个迭代应用**。这样做的一个主要好处是React可以**批量处理多个状态更新，以提高性能**。

**函数组件状态更新批处理：**

```react
import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}

```

> 这段代码中的`Counter`组件确实存在一个问题：当点击“+3”按钮时，分数只会增加一次，而不是三次。这个问题是由于React的状态更新是异步的导致的。
>
> 当点击“+3”按钮时，`increment`函数会被连续调用三次。每次调用`increment`都会创建一个新的状态更新（即`score + 1`），但由于状态更新是异步的，这三个更新实际上都会被合并成一个。因此，当React应用这些更新时，只会看到最后一个`score + 1`，这导致`score`只增加了一次。

**类组件状态更新批处理：**

在类组件中，你使用 `this.setState` 方法来更新 state。同样地，`this.setState` 也是异步的，并且不会立即更新 `this.state`。

```jsx
class ExampleComponent extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { count: 0 };  
  }  
  
  handleIncrement = () => {  
    this.setState({ count: this.state.count + 1 });  
    // 注意：this.setState 是异步的，所以下面的 console.log 可能会输出旧的值  
    console.log(this.state.count); // 可能输出旧的值  
  };  
  
  render() {  
    return (  
      <div>  
        <p>Count: {this.state.count}</p>  
        <button onClick={this.handleIncrement}>Increment</button>  
      </div>  
    );  
  }  
}
```

为了解决这个问题，你可以使用**函数式的状态更新**，它允许你基于先前的状态来计算新的状态

### **多次更新同一个 state**

通过在设置状态时传递一个 更新器函数 使 react 在下次渲染前多次更新同一个 state

#### **更新器函数**

在 `useState` 或 `this.setState` 中，你可以给状态更新函数传入一个函数而不是一个值来更新 state：

```js
setState(prevState => prevState + 1)
```

这个函数会接收当前的 state 值作为参数，并返回一个新的 state 值。这确保了你的更新是基于最新的 state 值。

**使用 `useState` 的函数式更新**

```jsx
import React, { useState, useEffect } from 'react';  
  
function ExampleComponent() {  
  const [count, setCount] = useState(0);  
  
  useEffect(() => {  
    // 模拟在渲染前多次更新同一个 state  
    setCount(prevCount => prevCount + 1); // 第一次更新  
    setCount(prevCount => prevCount + 1); // 第二次更新  
    // ... 可以继续更多次更新  
  }, []); // 空数组作为依赖项，确保只在组件挂载时运行  
  
  return (  
    <div>  
      <p>Count: {count}</p>  
    </div>  
  );  
}
```

**使用 `this.setState` 的函数式更新**

```jsx
class ExampleComponent extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { count: 0 };  
  }  
  
  componentDidMount() {  
    // 模拟在渲染前多次更新同一个 state  
    this.setState(prevState => ({ count: prevState.count + 1 })); // 第一次更新  
    this.setState(prevState => ({ count: prevState.count + 1 })); // 第二次更新  
    // ... 可以继续更多次更新  
  }  
  
  render() {  
    return (  
      <div>  
        <p>Count: {this.state.count}</p>  
      </div>  
    );  
  }  
}
```



### **useState 如何工作**

`useState` 是React原生的Hook，其本质是为函数组件提供状态管理的能力。

具体来说，useState接受一个初始状态值作为参数，并返回一个数组，该数组包含两个元素：当前的状态值和一个用于更新该状态值的函数。

```js
const [index, setIndex] = useState(“初始值”);
```

#### **原理**

> 参考：[React 如何知道返回哪个 state](https://react.docschina.org/learn/state-a-components-memory#how-does-react-know-which-state-to-return) 

`useState` 的原理是基于 React 的内部状态管理和函数组件的渲染机制。它允许你在没有类实例的情况下为函数组件添加局部状态，并通过闭包和顺序依赖确保状态的一致性和可预测性:

1. **队列存储状态**：
   * React 在内部维护了一个**状态列表**（或类似的数据结构），用于存储所有通过 `useState` 创建的状态。
   * 当函数组件首次渲染时，React 会记住该组件使用了多少个 `useState` 调用，并在后续渲染中保持这个数量的一致性。
2. **闭包和顺序依赖**：
   * 每次调用 `useState` 时，React 都会返回一个状态变量和一个更新该状态的函数。这是通过闭包实现的，确保每次渲染时都能访问到正确的状态值和更新函数。
   * 同时，由于 `useState` 的调用顺序在每次渲染中必须保持一致，React 依赖于这种顺序依赖来正确地从内部状态列表中检索状态值。
3. **状态更新**：
   * 当你调用更新状态的函数时，React 并不立即重新渲染组件。
   * React会标记组件的状态为“已更改”，并在当前事件循环的末尾安排一次重新渲染。这是为了优化性能，避免不必要的重复渲染。
4. **重新渲染**：
   * 在事件循环的末尾，React 会检查所有标记为“已更改”的组件，并重新渲染它们。
   * 在重新渲染过程中，`useState` 会根据之前的调用顺序返回更新后的状态值和新的更新函数。
5. **确保一致性**：
   * 由于 React 严格管理 `useState` 的调用顺序，并且每次渲染都返回相同的状态和更新函数，因此即使在异步回调中，你也能安全地引用和更新状态，而不会遇到诸如状态丢失或更新错误之类的问题。





这个例子**没有使用 React**，但它让你了解 `useState` 在内部是如何工作的：([来自官网](https://react.docschina.org/learn/state-a-components-memory))

```js
let componentHooks = [];
let currentHookIndex = 0;

// useState 在 React 中是如何工作的（简化版）
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // 这不是第一次渲染
    // 所以 state pair 已经存在
    // 将其返回并为下一次 hook 的调用做准备
    currentHookIndex++;
    return pair;
  }

  // 这是我们第一次进行渲染
  // 所以新建一个 state pair 然后存储它
  pair = [initialState, setState];

  function setState(nextState) {
    // 当用户发起 state 的变更，
    // 把新的值放入 pair 中
    pair[0] = nextState;
    updateDOM();
  }

  // 存储这个 pair 用于将来的渲染
  // 并且为下一次 hook 的调用做准备
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}

function Gallery() {
  // 每次调用 useState() 都会得到新的 pair
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  // 这个例子没有使用 React，所以
  // 返回一个对象而不是 JSX
  return {
    onNextClick: handleNextClick,
    onMoreClick: handleMoreClick,
    header: `${sculpture.name} by ${sculpture.artist}`,
    counter: `${index + 1} of ${sculptureList.length}`,
    more: `${showMore ? 'Hide' : 'Show'} details`,
    description: showMore ? sculpture.description : null,
    imageSrc: sculpture.url,
    imageAlt: sculpture.alt
  };
}

function updateDOM() {
  // 在渲染组件之前
  // 重置当前 Hook 的下标
  currentHookIndex = 0;
  let output = Gallery();

  // 更新 DOM 以匹配输出结果
  // 这部分工作由 React 为你完成
  nextButton.onclick = output.onNextClick;
  header.textContent = output.header;
  moreButton.onclick = output.onMoreClick;
  moreButton.textContent = output.more;
  image.src = output.imageSrc;
  image.alt = output.imageAlt;
  if (output.description !== null) {
    description.textContent = output.description;
    description.style.display = '';
  } else {
    description.style.display = 'none';
  }
}

let nextButton = document.getElementById('nextButton');
let header = document.getElementById('header');
let moreButton = document.getElementById('moreButton');
let description = document.getElementById('description');
let image = document.getElementById('image');
let sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}];

// 使 UI 匹配当前 state
updateDOM();

```

从以上示例可以看到，**在React组件中多次调用同一个 state 的 setState 方法更新状态时，实际上状态只会更新最后一次**。

因为在 setState 内部实现逻辑为：

```js
  function setState(nextState) {
    // 当用户发起 state 的变更，
    // 把新的值放入 pair 中
    pair[0] = nextState;
    updateDOM();
  }
```

每次调用 setState 时候，会将传入的新的 state 更新到同一个变量 `pair[0]` 中，`pair[0]` 为 useState 返回数组第一个下标值。因此也可以解释为什么 state 是异步更新的。

#### 实现 `useState`  

实现一个简化版本的 `useState` 需要考虑几个关键点：

1. **状态存储**：我们需要一个全局的地方来存储状态。
2. **状态更新**：更新状态时需要能够触发组件的重新渲染。
3. **顺序依赖**：确保 `useState` 的调用顺序在每次渲染中保持一致。

下面是一个简化版本的 `useState` 实现：

```javascript
// 假设有一个全局的 state 列表  
let stateList = [];  
let index = 0;  
  
// 简化版的 useState  
function useState(initialState) {  
  // 初始化状态  
  if (index >= stateList.length) {  
    stateList[index] = initialState;  
  }  
  
  // 获取当前状态  
  const currentState = stateList[index];  
  
  // 更新状态的函数  
  function setState(newState) {  
    // 更新状态值  
    stateList[index] = newState;  
    // 触发重新渲染（这里简化处理，实际 React 中会复杂得多）  
    renderComponent();  
  }  
  
  // 递增索引，为下一次 useState 调用做准备  
  index++;  
  
  // 返回当前状态和更新函数  
  return [currentState, setState];  
}  
  
// 假设的组件渲染函数  
function renderComponent() {  
  // 清空索引，为下一次渲染做准备  
  index = 0;  
  // 假设的组件函数  
  function MyComponent() {  
    const [count, setCount] = useState(0);  
    return (  
      <div>  
        <p>Count: {count}</p>  
        <button onClick={() => setCount(count + 1)}>Increment</button>  
      </div>  
    );  
  }  
  
  // 这里只是简单地打印组件的“渲染结果”，实际 React 中会进行 DOM 操作  
  console.log(MyComponent());  
}  
  
// 初始渲染  
renderComponent();
```

**解释**：

- `stateList` 是一个全局数组，用于存储每个状态的值。在每次组件渲染时，这个数组会被清空并重新填充。
- `index` 是一个全局变量，用于跟踪当前 `useState` 调用的位置。每次调用 `useState` 时，`index` 都会递增，确保我们可以从 `stateList` 中获取正确的状态值。
- `useState` 函数接受一个初始状态值，并在第一次调用时将其存储在 `stateList` 的相应位置。然后，它返回当前状态值和一个更新状态的函数 `setState`。
- `setState` 函数接受一个新状态值，更新 `stateList` 中的对应项，并假设性地调用一个 `renderComponent` 函数来触发组件的重新渲染。在实际 React 中，重新渲染的过程会涉及更多的复杂性和优化。
- `renderComponent` 函数模拟了组件的渲染过程。它首先重置 `index` 为 0，然后定义并“渲染”一个使用 `useState` 的组件。这里简单地打印了组件的“渲染结果”，但在真实的 React 中，这会涉及实际的 DOM 操作。

请注意，这个简化版本的 `useState` 和实际的 React `useState` 有很大的不同。实际的 React 实现涉及更多的内部机制，比如 Fiber 架构、调度和协调、优先级处理、以及复杂的状态更新逻辑等。此外，实际的 React 还处理了并发模式、错误边界、Suspense 等高级特性。这个简化版本只是为了帮助你理解 `useState` 的基本原理。



### **state 与 变量区别**

1. 组件的`state`变化时会触发组件的重新渲染，变量不会触发组件的重新渲染。
2. 每次组件渲染时，`state` 会根据下次值状态进行渲染，而变量每次将重新定义。
   * `state `**持久性**：`state`的值在组件的多个渲染之间保持持久。即使组件重新渲染，`state`的值也会被保留，除非通过特定的setter函数进行更新。
   * **变量重新定义**：每次组件函数被调用（即每次组件渲染）时，组件变量的定义都会执行。这意味着每次渲染时，变量都会被“重新定义”。但这并不意味着变量的值会重置；如果变量是一个引用类型（如对象或数组），则每次渲染时都会创建新的引用，但引用指向的内容保持不变，除非被重新赋值。

| 对比项         | 组件的`state`                                                | 组件变量                                                     |
| :------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **定义与存储** | 使用React的特定方法（如`this.state`或`useState`）定义，用于存储组件内部状态 | 在组件内部直接定义，可以是普通变量或常量                     |
| **生命周期**   | 与组件实例相关联，会随着组件的挂载、更新和卸载而经历相应的生命周期 | 与组件实例相关联，但变化不会触发组件重新渲染                 |
| **更新机制**   | 需要使用React提供的特定方法（如`this.setState`或`setState`函数）来更新 | **直接赋值更新**，无需特殊方法                               |
| **触发渲染**   | **当`state`发生变化时，会触发组件的重新渲染**                | **组件变量的变化不会触发组件的重新渲染**                     |
| **持久性**     | 组件重新渲染，`state`的值也会被保留，除非通过特定的setter函数进行更新。 | 每次组件函数被调用（即每次组件渲染）时，组件变量的定义都会执行。 |
| **用途**       | 存储那些需要随着用户交互或组件生命周期变化而变化的数据，以触发组件重新渲染 | 存储不需要触发组件重新渲染的数据，或用于组件内部的临时计算   |
| **示例**       | `const [count, setCount] = useState(0); setCount(1);`        | `const myVariable = 'Hello';`                                |



---



## **事件**

**摘要**

- 事件通常在你的组件 **内部** 定义。事件处理函数在组件内部定义，所以它们可以访问 props。
- 名称以 `handle` 开头，后跟事件名称。
- 可以将事件处理函数作为 props 传递给组件。
- 事件处理函数 props 应该以 `on` 开头，后跟一个大写字母。
- 事件处理函数不需要是 [纯函数](https://react.docschina.org/learn/keeping-components-pure)，因此它是用来 *更改* 某些值的绝佳位置 。
- 事件冒泡与捕获：React 中的事件处理遵循与原生 DOM 事件相同的冒泡和捕获机制。你可以通过事件对象的 `stopPropagation` 和 `preventDefault` 方法来控制事件的行为。

> 详细内容参考：[响应事件 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/responding-to-events)

### **函数组件事件**

````react
export default function Button() {
  function handleClick() {
    alert('你点击了我！');
  }

  return (
    <button onClick={handleClick}>
      点我
    </button>
  );
}

````

### **类组件事件**

在 React 的类组件中定义事件与函数组件略有不同，因为类组件有自己的实例方法和生命周期方法。

**在类组件中，你通常需要手动绑定事件处理器到组件实例**（使用 `.bind(this)`）:

**手动绑定 `this`**

```jsx
import React, { Component } from 'react';  
  
class MyButton extends Component {  
  constructor(props) {  
    super(props);  
  
    // 在构造函数中绑定 this 到 handleClick 方法  
    this.handleClick = this.handleClick.bind(this);  
  }  
  
  // 定义事件处理器方法  
  handleClick() {  
    alert('Button clicked!');  
  }  
  
  // 渲染组件并绑定事件  
  render() {  
    return (  
      <button onClick={this.handleClick}>  
        Click me  
      </button>  
    );  
  }  
}  
  
export default MyButton;
```

> 在这个例子中，`MyButton` 是一个类组件。我们在构造函数中调用了 `this.handleClick.bind(this)` 来确保 `handleClick` 方法中的 `this` 指向组件实例。然后，在 `render` 方法中，我们将 `handleClick` 方法作为 `onClick` prop 绑定到 `<button>` 元素上。

**箭头函数自动绑定 `this`**

另一种绑定事件处理器的方式是在方法定义时就使用箭头函数，这样可以自动绑定 `this`：

```jsx
import React, { Component } from 'react';  
  
class MyButton extends Component {  
  // 使用箭头函数定义事件处理器，自动绑定 this  
  handleClick = () => {  
    alert('Button clicked!');  
  }  
  
  render() {  
    return (  
      <button onClick={this.handleClick}>  
        Click me  
      </button>  
    );  
  }  
}  
  
export default MyButton;
```

> 使用箭头函数的好处是你可以在类的方法定义中直接使用它们，而无需在构造函数中进行额外的绑定。这有助于减少样板代码，并使代码更加简洁。
>
> 但是，请注意，这种方式可能会导致每个实例都创建一个新的函数，这可能会影响性能，特别是在渲染大量组件时。在大多数情况下，这种性能影响可以忽略不计，但如果你确实遇到了性能问题，那么你可能需要考虑使用其他方法，比如在构造函数中进行绑定。



### **合成事件**

**什么是合成事件？**

* React的合成事件（SyntheticEvent）是React提供的一种统一的事件系统，它可以在不同浏览器中使用同一套API以及一致的行为。React根据W3C规范来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口。

*  **React把所有事件都封装为合成事件，不是原生DOM事件**，但可以通过e.nativeEvent属性获取DOM事件。比如，**在React中，当我们在JSX中直接绑定事件时，我们实际上绑定的是合成事件**。这些合成事件是对原生事件的封装，React会根据原生事件类型来使用不同的合成事件对象。

**为什么要用合成事件？**

* React合成事件解决了浏览器兼容性问题，使得开发者可以更方便、更统一地处理各种事件。

* 同时，由于React合成事件对原生事件的封装，开发者可以更容易地操作文本输入框以及其他使用文本输入的组件，如复制、剪切和粘贴等事件。

---



## **Hooks**

在 React 中，**以 `use` 开头的函数——只能在组件或[自定义 Hook](https://react.docschina.org/learn/reusing-logic-with-custom-hooks) 的最顶层调用**，`useState` 以及任何其他以“`use`”开头的函数都被称为 **Hook**。

> 如何编写 Hooks 参考文档：[使用自定义 Hook 复用逻辑 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/reusing-logic-with-custom-hooks)

### **特性**

* 只能在组件的最顶层调用。

* **Hook 内部使用了 state，Effect 以及其他的 React 特性**。
* Hook 是特殊的函数，只在 React [渲染](https://react.docschina.org/learn/render-and-commit#step-1-trigger-a-render)时有效。**每次组件重新渲染时，所有的 Hook 会重新运行**。
* 自定义 Hook 共享的只是状态逻辑而不是状态本身。对 Hook 的每个调用完全独立于对同一个 Hook 的其他调用。

### **命名公约**

1. **React 组件名称必须以大写字母开头**，比如 `StatusBar` 和 `SaveButton`。React 组件还需要返回一些 React 能够显示的内容，比如一段 JSX。
2. **Hook 的名称必须以 `use` 开头，然后紧跟一个大写字母**，就像内置的 [`useState`](https://react.docschina.org/reference/react/useState) 或者本文早前的自定义 `useOnlineStatus` 一样。Hook 可以返回任意值。

如果你在组件内部看见 `getColor()` 函数调用，就可以确定它里面不可能包含 React state，因为它的名称没有以 `use` 开头。但是像 `useOnlineStatus()` 这样的函数调用就很可能包含对内部其他 Hook 的调用！

### **Hook使用注意的问题和原因**

在使用React的Hook时，需要注意以下几个问题和原因：

**只在函数组件的顶层调用Hook**

- 原因：React依靠Hook的调用顺序来正确管理组件的状态。如果Hook在循环、条件或嵌套函数中调用，React无法确定组件的状态，这可能会导致意外的行为、状态丢失或内存泄漏。

**不要在循环、条件或嵌套函数中调用Hook**

- 原因：同上，React需要确定Hook的调用顺序。在循环或条件语句中调用Hook，每次组件渲染时Hook的调用顺序可能会改变，这违反了React的规则。

**避免在自定义Hook中执行副作用操作**

- 原因：自定义Hook应该只包含逻辑代码，而不应该直接执行副作用操作（如设置订阅或修改DOM）。副作用操作应该放在组件中，并使用`useEffect` Hook来管理。

**确保Hook的依赖项正确**

- 对于`useEffect` Hook，需要明确指定依赖项数组。如果遗漏了某个依赖项，当该依赖项变化时，`useEffect`不会重新运行，可能导致状态不同步或逻辑错误。
- 原因：React使用依赖项数组来确定何时重新运行`useEffect`。如果依赖项未正确指定，React无法准确判断何时需要更新副作用。

**避免在渲染过程中直接修改状态**

- 原因：React的状态更新是异步的，并且在渲染过程中直接修改状态可能导致不可预测的行为。应该使用`setState`函数来更新状态。

**注意闭包问题**

- 在`useEffect`或事件处理函数中，如果引用了组件的state或props，可能会遇到闭包问题。这意味着，在函数执行时，它捕获的是当前的state或props值，而不是最新的值。
- 原因：JavaScript的闭包特性导致函数记住并访问其词法作用域，包括外部函数的变量和`this`值。在React中，这可能导致状态或属性值的延迟或错误使用。

**Hook命名约定**

- 自定义Hook应以“use”开头，这是一个约定，有助于其他开发者更容易地识别和理解你的代码。
- 原因：这是一个编码习惯和约定，有助于提高代码的可读性和可维护性。

正确使用Hook并遵循这些注意事项，可以帮助你编写更可靠、可预测和可维护的React组件。

---



## **Reducer**

**React中的reducer是一种特殊的函数，用于处理应用的状态变化**。

Reducer 接收一个旧的状态和一个动作对象，并返回一个新的状态。

**摘要：**

把 `useState` 转化为 `useReducer`：

1. 通过事件处理函数 dispatch actions；
2. 编写一个 reducer 函数，它接受传入的 state 和一个 action，并返回一个新的 state；
3. 使用 `useReducer` 替换 `useState`；

> 如何转化详细内容参考官网：[迁移状态逻辑至 Reducer 中 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/extracting-state-logic-into-a-reducer#)

**特点：**

1. 集中管理状态更新：reducer可以将组件的所有状态更新整合到一个外部函数中，使得状态管理更加集中和有序。
2. 响应动作：reducer通过接收动作对象来指明“用户刚刚做了什么”，根据动作类型来更新状态，使得状态的变化与用户的操作紧密关联。
3. 易于测试：reducer的逻辑相对独立，可以单独对它进行测试。可以针对特定的初始状态和动作，断言reducer返回的特定状态。

在编写reducer时，你需要遵循一定的规则和结构。以下是一个简单的reducer编写示例：

```javascript
// 状态的初始值
const initialState = {  
  count: 0  
};  
// reducer 函数：封装 action, action 对状态进行操作
function reducer(state = initialState, action) {  
  switch (action.type) {  
    case 'increment':  
      return { count: state.count + 1 };  
    case 'decrement':  
      return { count: state.count - 1 };  
    default:  
      return state;  
  }  
}
```

> 在这个示例中，我们首先定义了一个初始状态`initialState`，它包含了一个`count`属性，初始值为0。
>
> 然后，我们定义了一个名为`reducer`的函数，它接收两个参数：`state`和`action`。`state`是当前的状态，`action`是一个包含`type`属性的对象，用于描述要执行的操作。
>
> 在`reducer`函数中，我们使用一个`switch`语句来根据`action.type`的值执行不同的操作。
>
> 在这个示例中，我们定义了两个操作类型：`increment`和`decrement`，分别用于增加和减少`count`的值。如果`action.type`的值不是这两个之一，我们就返回当前的状态，不做任何改变。



最后，你可以在React组件中使用`useReducer`钩子来管理状态。例如：

```javascript
import React, { useReducer } from 'react';  
  
function Counter() {  
  const [state, dispatch] = useReducer(reducer, initialState);  
  
  return (  
    <div>  
      <p>Count: {state.count}</p>  
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>  
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>  
    </div>  
  );  
}
```

> 在这个组件中，我们使用`useReducer`钩子来创建一个状态和一个调度函数`dispatch`。
>
> 然后，我们在按钮的点击事件处理程序中调用`dispatch`函数，并传入一个包含`type`属性的对象来触发状态更新。这样，每当用户点击按钮时，就会通过reducer函数更新状态，并重新渲染组件。

---



## **Context**

**React中的Context提供了一种在组件之间共享数据的方法，无需通过组件树逐层显式地传递props，解决Prop逐级透传问题**。

它可以让你避免在多个层级间手动传递props，从而使你的代码更简洁且易于管理。

通过Context，你可以在整个组件树中访问共享的数据，如当前认证的用户、主题或首选语言等。

**摘要：**

- Context 使组件向其下方的整个树提供信息。
- 传递 Context 的方法:
  1. 通过 `export const MyContext = createContext(defaultValue)` 创建并导出 context。
  2. 在无论层级多深的任何子组件中，把 context 传递给 `useContext(MyContext)` Hook 来读取它。
  3. 在父组件中把 children 包在 `<MyContext.Provider value={...}>` 中来提供 context。
- Context 会穿过中间的任何组件。
- Context 可以让你写出 “较为通用” 的组件。
- 在使用 context 之前，先试试传递 props 或者将 JSX 作为 `children` 传递。

> 如何使用context参考官网：[使用 Context 深层传递参数 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/passing-data-deeply-with-context#)

> 在 Vue 中使用 provide` 和 `inject 来解决 Prop 逐级透传问题：[依赖注入 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/components/provide-inject.html#prop-drilling)



对于**全局、不常修改的数据共享**，就比较适合用 Context API 来实现。

- 当前认证的用户
- 主题方案
- 首选语言

除了业务场景外，很多 React 相关的功能库也是使用 Context API 实现：

- [React Redux](https://github.com/reduxjs/react-redux)：`<Provider>` 组件，通过 Context 提供一个全局态的 `store`
- [React Router](https://github.com/ReactTraining/react-router)：路由组件，通过 Context 管理路由状态

**参考资料**

[Context - React Guidebook (tsejx.github.io)](https://tsejx.github.io/react-guidebook/foundation/advanced-guides/context/)





---



## **Ref**

**摘要**

- ref 是一种脱围机制，用于**保留不用于渲染的值**。 你不会经常需要它们。
- ref 是一个普通的 JavaScript 对象，具有一个名为 `current` 的属性，你可以对其进行读取或设置。
- 你可以通过调用 `useRef` Hook 来让 React 给你一个 ref。
- 与 state 一样，**ref 允许你在组件的重新渲染之间保留信息**。
- 与 state 不同，**设置 ref 的 `current` 值不会触发重新渲染**。
- 不要在渲染过程中读取或写入 `ref.current`。这使你的组件难以预测。

> ref详细解释参考官网：[使用 ref 引用值 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/referencing-values-with-refs#)

### **使用**

通过从 React 导入 `useRef` Hook 来为你的组件添加一个 ref：

```js
import { useRef } from 'react';
```

在你的组件内，调用 `useRef` Hook 并传入你想要引用的初始值作为唯一参数。例如，这里的 ref 引用的值是“0”：

```js
const ref = useRef(0);
```

`useRef` 返回一个这样的对象:

```js
{ 
  current: 0 // 你向 useRef 传入的值
}
```

你可以用 `ref.current` 属性访问该 ref 的当前值。

### **ref 和 state 的不同之处** 

| ref                                                         | state                                                        |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| `useRef(initialValue)`返回 `{ current: initialValue }`      | `useState(initialValue)` 返回 state 变量的当前值和一个 state 设置函数 ( `[value, setValue]`) |
| **更改时不会触发重新渲染**                                  | 更改时触发重新渲染。                                         |
| **可变** —— 你可以在渲染过程之外修改和更新 `current` 的值。 | “不可变” —— 你必须使用 state 设置函数来修改 state 变量，从而排队重新渲染。 |
| 你不应在渲染期间读取（或写入） `current` 值。               | 你可以随时读取 state。但是，每次渲染都有自己不变的 state [快照](https://react.docschina.org/learn/state-as-a-snapshot)。 |

### **ref 和 DOM**



你可以将 ref 指向任何值。但是，ref 最常见的用法是访问 DOM 元素。

当你将 ref 传递给 JSX 中的 `ref` 属性时，比如 `<div ref={myRef}>`，React 会将相应的 DOM 元素放入 `myRef.current` 中。当元素从 DOM 中删除时，React 会将 `myRef.current` 更新为 `null`。

要访问由 React 管理的 DOM 节点，首先，引入 `useRef` Hook：

```jsx
import { useRef } from 'react';
```

然后，在你的组件中使用它声明一个 ref：

```jsx
const myRef = useRef(null);
```

最后，将 ref 作为 `ref` 属性值传递给想要获取的 DOM 节点的 JSX 标签：

```jsx
<div ref={myRef}>
```

### **React 何时添加 refs** 

在 React 中，每次更新都分为 [两个阶段](https://react.docschina.org/learn/render-and-commit#step-3-react-commits-changes-to-the-dom)：

- 在 **渲染** 阶段， React 调用你的组件来确定屏幕上应该显示什么。
- 在 **提交** 阶段， React 把变更应用于 DOM。

在第一次渲染期间，DOM 节点尚未创建，因此 `ref.current` 将为 `null`。在渲染更新的过程中，DOM 节点还没有更新。所以读取它们还为时过早。

React 在提交阶段设置 `ref.current`。在更新 DOM 之前，React 将受影响的 `ref.current` 值设置为 `null`。更新 DOM 后，React 立即将它们设置到相应的 DOM 节点。



**摘要**

- Refs 是一个通用概念，但大多数情况下你会使用它们来保存 DOM 元素。
- 你通过传递 `<div ref={myRef}>` 指示 React 将 DOM 节点放入 `myRef.current`。
- 通常，你会将 refs 用于非破坏性操作，例如聚焦、滚动或测量 DOM 元素。
- 默认情况下，组件不暴露其 DOM 节点。 您可以通过使用 `forwardRef` 并将第二个 `ref` 参数传递给特定节点来暴露 DOM 节点。
- 避免更改由 React 管理的 DOM 节点。



**参考资料**

[Refs - React Guidebook (tsejx.github.io)](https://tsejx.github.io/react-guidebook/foundation/advanced-guides/refs/)

[使用 ref 引用值 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/referencing-values-with-refs)

----



## **Effect**

Effect是一种用于处理副作用操作的机制（副作用操作是指与组件渲染无关的任务，比如数据获取、订阅事件、手动修改DOM等）。

**Effect能够在组件被挂载、更新或卸载时执行**。

使用Effect的目的是为了将副作用操作与组件逻辑分离，并确保这些操作在正确的时间点被执行。这样可以避免产生bug、提高代码可读性和维护性。

**摘要**

- 与事件不同，Effect 是由渲染本身，而非特定交互引起的。
- Effect 允许你将组件与某些外部系统（第三方 API、网络等）同步。
- 默认情况下，Effect 在每次渲染（包括初始渲染）后运行。
- 如果 React 的所有依赖项都与上次渲染时的值相同，则将跳过本次 Effect。
- 不能随意选择依赖项，它们是由 Effect 内部的代码决定的。
- 空的依赖数组（`[]`）对应于组件“挂载”，即添加到屏幕上。
- 仅在严格模式下的开发环境中，React 会挂载两次组件，以对 Effect 进行压力测试。
- 如果 Effect 因为重新挂载而中断，那么需要实现一个清理函数。
- React 将在下次 Effect 运行之前以及卸载期间这两个时候调用清理函数。

### 编写 Effect 

> 官方文档详细解释了编写 Effect 流程：[使用 Effect 同步 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/synchronizing-with-effects#)

编写 Effect 需要遵循以下三个规则：

1. **声明 Effect**:
   * 默认情况下，**Effect 会在每次渲染后都会执行**。
2. **指定 Effect 依赖**:
   * 大多数 Effect 应该按需执行，而不是在每次渲染后都执行。
   * 依赖状态变化时，执行Effect回调
   * 空数组表示这个Effect只在组件挂载和卸载时执行。
3. **添加清理（cleanup）函数**:
   * 每次重新执行 Effect 之前，React 都会调用清理函数；组件被卸载时，也会调用清理函数

```js
useEffect(() => { // 第一个参数为回调函数，在DOM挂载和依赖状态变化时执行
	return () => {} // 清理函数：每次重新执行 Effect 之前，React 都会调用清理函数；组件被卸载时，也会调用清理函数
}, []); //依赖状态变化时，执行回调；空数组表示这个Effect只在组件挂载和卸载时执行
```

> `useEffect` ：
>
> 第一个参数：为回调函数，在每次渲染后都会执行：
>
> 第二个参数：为依赖状态
>
> * 依赖状态变化时，执行回调
> * 空数组表示这个Effect只在组件挂载和卸载时执行回调



```jsx
import React, { useEffect } from 'react';
function ExampleComponent() {  
  useEffect(() => {  
    // 这是一个Effect，它会在组件挂载后执行  
    // 如果需要在组件卸载时执行清理操作，可以返回一个函数  
    return () => {  
      console.log('Component will unmount');  
      // 清理操作，如取消订阅事件、清除计时器等  
    };  
  }, []); // 空数组表示这个Effect只在组件挂载和卸载时执行  
  
  return (  
    <div>  
      <p>测试</p>  
    </div>  
  );  
}
```



下面是一个基本的`useEffect`的使用示例：

```jsx
import React, { useEffect, useState } from 'react';  
  
function ExampleComponent() {  
  const [count, setCount] = useState(0);  
  
  useEffect(() => {  
    // 这是一个Effect，它会在组件挂载后执行  
    console.log('Component mounted');  
  
    // 模拟异步数据获取  
    const fetchData = async () => {  
      const response = await fetch('https://api.example.com/data');  
      const data = await response.json();  
      // 更新状态或执行其他操作  
      setCount(data.count);  
    };  
  
    fetchData();  
  
    // 如果需要在组件卸载时执行清理操作，可以返回一个函数  
    return () => {  
      console.log('Component will unmount');  
      // 清理操作，如取消订阅事件、清除计时器等  
    };  
  }, []); // 空数组表示这个Effect只在组件挂载和卸载时执行  
  
  return (  
    <div>  
      <p>Count: {count}</p>  
    </div>  
  );  
}
```

在这个例子中，`useEffect`的回调函数会在组件挂载后立即执行。它模拟了一个异步数据获取的操作，并在数据到达后更新了组件的状态。

`useEffect`的第二个参数是一个依赖数组。在这个例子中，依赖数组是空的（`[]`），这意味着Effect只在组件首次渲染（挂载）和卸载时执行。如果依赖数组中包含某些值，那么当这些值发生变化时，Effect也会重新执行。

例如，如果你想要Effect在`count`状态改变时重新执行，你可以这样写：

```jsx
useEffect(() => {  
  console.log(`Count changed to ${count}`);  
}, [count]); // 当count变化时，这个Effect会重新执行
```

在编写Effect时，要注意避免在Effect中直接修改状态或执行可能导致无限循环的操作，除非你有明确的逻辑来控制这些操作。同时，如果你订阅了外部数据源（如事件或定时器），记得在Effect的清理函数中取消订阅，以避免内存泄漏。

### **响应式 Effect 的生命周期**

> 详细示例解释：[响应式 Effect 的生命周期 – React 中文文档 (docschina.org)](https://react.docschina.org/learn/lifecycle-of-reactive-effects)

每个 React 组件都经历相同的生命周期：

- 当组件被添加到屏幕上时，它会进行组件的 **挂载**。
- 当组件接收到新的 props 或 state 时，通常是作为对交互的响应，它会进行组件的 **更新**。
- 当组件从屏幕上移除时，它会进行组件的 **卸载**。

每个 Effect 与周围组件有着独立的生命周期，每个 Effect 描述了一个独立的同步过程，可以 **开始** 和 **停止**：

1. **挂载阶段 (Mounting)：**
   - **当组件首次渲染到 DOM 时，`useEffect` 中的回调函数会被执行**。这是 Effect 的“挂载”阶段。
     - 如果 `useEffect` 的依赖数组为空（`[]`），则 Effect 只会在组件首次渲染时执行一次。
     - 如果 `useEffect` 有依赖项，则当这些依赖项的值发生变化时，Effect 会重新执行。
2. **更新阶段 (Updating):**
   - **当组件的 props 或 state 发生变化导致组件重新渲染时，`useEffect` 会再次检查其依赖项**。
     - 如果依赖项的值没有变化，则 Effect 不会重新执行。
     - 如果依赖项的值发生了变化，则 Effect 会重新执行。
   - 每一次**组件更新后，`useEffect` 中的回调函数都会被重新安排到微任务队列中**，等待当前同步代码执行完毕后执行。
3. **卸载阶段 (Unmounting)**
   - 当组件从 DOM 中卸载时（例如，由于父组件的条件渲染或路由切换），`useEffect` 中的回调函数会再次执行，但此时会带有一个清理函数（cleanup function）。
   - 清理函数是 `useEffect` 回调函数中返回的那个函数，它会在组件卸载前执行，用于执行必要的清理操作，如取消事件监听、清除定时器或清除之前创建的资源等。



----

## **Portals**

### createPortal

> 详细用法参考文档：[createPortal – React 中文文档 (docschina.org)](https://react.docschina.org/reference/react-dom/createPortal)

`createPortal` 允许你将 JSX 作为 children 渲染至 DOM 的不同部分。

```jsx
<div>
  <SomeComponent />
  {createPortal(children, domNode, key?)}
</div>
```

`createPortal(children, domNode, key?)` 

调用 `createPortal` 创建 portal，并传入 JSX 与实际渲染的目标 DOM 节点：

```jsx
import { createPortal } from 'react-dom';
// ...
<div>
  <p>这个子节点被放置在父节点 div 中。</p>
  {createPortal(
    <p>这个子节点被放置在 document body 中。</p>,
    document.body
  )}
</div>
```

**参考资料**

[Portals - React Guidebook (tsejx.github.io)](https://tsejx.github.io/react-guidebook/foundation/advanced-guides/portals)

---

## **核心API**

React的核心API主要包括用于创建组件、管理状态、处理生命周期以及处理用户输入等的函数和方法。

以下是一些主要的React核心API，以及它们的作用和用法：

|           API            |                             作用                             |                             用法                             |
| :----------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| `React.createElement()`  |                 创建并返回一个新的React元素                  |     `React.createElement(type, [props], [...children])`      |
|    `React.Component`     |               React组件的基类，用于创建类组件                |     `class MyComponent extends React.Component { ... }`      |
|        `render()`        |        类组件中必须的方法，用于返回要渲染的React元素         |       `render() { return <div>Hello, World!</div>; }`        |
|       `setState()`       |                    用于更新组件的局部状态                    |      `this.setState({ count: this.state.count + 1 });`       |
|  `componentDidMount()`   |   组件被挂载后立即调用，常用于发起网络请求、添加事件监听等   |            `componentDidMount() { fetchData(); }`            |
|  `componentDidUpdate()`  |         组件的props或state更新后调用，常用于DOM操作          |      `componentDidUpdate(prevProps, prevState) { ... }`      |
| `componentWillUnmount()` | 组件卸载及销毁之前直接调用，常用于清理操作，如取消网络请求、移除事件监听等 |   `componentWillUnmount() { clearTimeout(this.timerID); }`   |
|       `useState()`       |                 用于在函数组件中添加局部状态                 |           `const [count, setCount] = useState(0);`           |
|      `useEffect()`       | 用于在函数组件中执行副作用操作，如数据获取、订阅、手动更改DOM等 | `useEffect(() => { document.title = `You clicked ${count} times`; });` |
|      `useContext()`      | 接收一个context对象（由`React.createContext`返回）并返回该context的当前值 |          `const theme = useContext(ThemeContext);`           |
|      `useReducer()`      |      用于在函数组件中使用Redux风格的“reducer”来管理状态      | `const [state, dispatch] = useReducer(reducer, initialCount);` |
|     `useCallback()`      |                    返回一个记忆的回调函数                    | `const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);` |
|       `useMemo()`        |                       返回一个记忆的值                       | `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);` |
|        `useRef()`        | 返回一个可变的ref对象，其`.current`属性被初始化为传入的参数（`initialValue`） |               `const inputRef = useRef(null);`               |
|   `useLayoutEffect()`    | 其API与`useEffect`相同，但它会在所有的DOM变更之后同步调用effect |              `useLayoutEffect(() => { ... });`               |
|    `useDebugValue()`     |      用于在React Developer Tools中显示自定义hook的标签       |                   `useDebugValue(value);`                    |

这些API提供了构建React应用所需的基本功能，从创建和渲染组件，到管理状态和处理副作用，再到处理用户输入和生命周期事件。你可以根据具体的应用需求选择使用哪些API。



## **生命周期**

React的生命周期是指React组件从创建到销毁的整个过程，这个过程可以分为三个阶段：

- 挂载阶段（Mounting）
  - `constructor`
  - `static getDerivedStateFromProps`
  - `render`
  - `componentDidMount`
- 更新阶段（Updating）
  - `static getDerivedStateFromProps`
  - `shouldComponentUpdate`
  - `render`
  - `getSnapshotBeforeUpdate`
  - `componentDidUpdate`
- 卸载阶段（Unmounting）
  - `componentWillUnmount`

从纵向划分，可以划分为 Render 阶段和 Commit 阶段。

- Render 阶段：纯净且不包含副作用，可能会被 React 暂停、中止或重新启动
- Commit 阶段：可以使用 DOM，运行副作用，安排更新

更清晰了解生命周期的阶段图表 [React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

![React Lifecycle Methods Diagram](../images/react组件生命周期.png)

### **挂载阶段（Mounting）**

**在挂载阶段，React组件被创建并插入到DOM中**

这个阶段包含以下几个方法：

- **constructor(props)**：构造函数，用于**初始化组件的状态和绑定事件处理函数**。在这个阶段，你可以通过`this.state`来定义组件的初始状态。
- **[static getDerivedStateFromProps(props, state)](https://react.docschina.org/reference/react/Component#static-getderivedstatefromprops)**：这是一个静态方法，用于**在组件实例化后和接收新的props之前，根据props来更新state**。注意，这个方法在React 16.3版本后引入，用于替代`componentWillReceiveProps`。
- **render()**：用于**根据组件的props和state来渲染组件的UI**。这个方法必须是一个纯函数，也就是说，对于相同的props和state，它应该总是返回相同的结果。
- **componentDidMount()**：**在组件挂载后立即调用，此时组件已经被插入到DOM中**。你可以在这个方法中进行网络请求、订阅事件等初始化操作。

#### constructor

📜 **语法**：`constructor(props, context, updater)`

- `props`：继承 React.Component 的属性方法，它是不可变的 read-only
- `context`：全局上下文。
- `updater`:包含一些更新方法的对象
  - `this.setState` 最终调用的是 `this.updater.enqueueSetState`
  - `this.forceUpdate` 最终调用的是 `this.updater.enqueueForceUpdate` 方法，所以这些 API 更多是 React 调用使用，暴露出来以备开发者不时之需。

⏱ **触发时机**：在组件初始化的时候触发一次。

实例过程中自动调用的方法，在方法内部通过`super`关键字获取来自父组件的`props`；

在该方法中，通常的操作为初始化`state`状态或者在`this`上挂载方法：

```react
class MyComponent extends React.Component {  
  constructor(props) {  //初始化组件的状态和绑定事件处理函数
    super(props);  //通过`super`关键字获取来自父组件的`props`
    this.state = {  
      // 使用props来初始化状态（如果需要的话）  
      value: props.initialValue,  
    };  
    this.handleClick = this.handleClick.bind(this); //在`this`上挂载方法
  }  
  
  render() {  
    // ...  
  }  
}
```

在上面的示例中，构造函数首先调用`super(props)`来确保`this.props`的可用性，然后使用`this.props`来初始化组件的状态。如果不调用`super(props)`，那么`this.props`将会是`undefined`，导致状态初始化失败。

> **在构造函数调用 super 并将 props 作为参数传入的作用?**

在React的类组件中，构造函数（constructor）是一个特殊的方法，用于初始化组件的状态（state）和绑定事件处理函数。在构造函数中调用`super(props)`是一个必要的步骤，它有几个重要的作用：

1. **继承父类属性**：在JavaScript中，类是通过继承机制来工作的。`super`关键字用于调用父类（在这里是`React.Component`）的构造函数。通过将`props`作为参数传递给`super()`，我们确保父类的构造函数能够正确执行，并且组件实例能够访问到`this.props`。
2. **确保props的可用性**：在类组件中，`props`是通过组件的实例来访问的（即`this.props`）。**如果在构造函数中不调用`super(props)`，那么`this.props`将会是`undefined`，因为构造函数中的`this`指向的是当前组件的实例，而实例的`props`属性是由父类（`React.Component`）的构造函数来初始化的**。
3. **遵循React的生命周期**：React组件的生命周期是严格定义的，并且依赖于特定的方法和步骤来正确执行。调用`super(props)`是组件生命周期中的一个关键步骤，它确保了组件实例能够按照React的预期来工作。
4. **状态初始化**：虽然`super(props)`主要用于确保`props`的可用性，但构造函数通常也用于初始化组件的状态。在调用`super(props)`之后，你可以安全地访问`this.props`，并且可以使用它来初始化状态（如果需要的话）。

#### `static getDerivedStateFromProps(props, state)` 

> 官方文档：[Component – React 中文文档 (docschina.org)](https://react.docschina.org/reference/react/Component#static-getderivedstatefromprops)

如果你定义了 `static getDerivedStateFromProps`，React 会**在初始挂载和后续更新时调用 [`render`](https://react.docschina.org/reference/react/Component#render) 之前调用它**。它应该返回一个对象来更新 state，或者返回 `null` 就不更新任何内容。





### **更新阶段（Updating）**

当组件的props或state发生变化时，组件会进入更新阶段。这个阶段包含以下几个方法：

- **static getDerivedStateFromProps(props, state)**：在更新阶段也会调用这个方法，用于根据新的props来更新state。
- **shouldComponentUpdate(nextProps, nextState)**：返回一个布尔值，决定是否根据新的props和state重新渲染组件。默认返回true，但你可以在这里实现自己的逻辑来避免不必要的渲染。
- **render()**：根据新的props和state来重新渲染组件。
- **getSnapshotBeforeUpdate(prevProps, prevState)**：在DOM更新之前被调用，它使你的组件能在可能更改的DOM上捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为第三个参数传递给`componentDidUpdate()`。
- **componentDidUpdate(prevProps, prevState, snapshot)**：在更新后立即调用，当组件的props或state更新后，可以在此进行DOM操作或网络请求等。

### **卸载阶段（Unmounting）**

当组件不再需要，并且从DOM中移除时，会进入卸载阶段。这个阶段只有一个方法：

- **componentWillUnmount()**：在组件卸载及销毁之前直接调用。你可以在这个方法中进行清理操作，如取消网络请求、移除事件监听器等。

需要注意的是，React 16.3版本之后，一些旧的生命周期方法（如`componentWillMount`、`componentWillReceiveProps`和`componentWillUpdate`）被认为是不安全的，并且可能在未来的版本中被移除。因此，建议开发者使用新的生命周期方法（如`getDerivedStateFromProps`和`getSnapshotBeforeUpdate`）来替代这些旧方法。同时，React团队还引入了Hooks API，使得组件逻辑可以更加独立和可重用，进一步简化了组件的生命周期管理。

**参考资料**

[生命周期 - React Guidebook (tsejx.github.io)](https://tsejx.github.io/react-guidebook/foundation/main-concepts/lifecycle)

---

## **VDOM**

虚拟 DOM 顾名思义不是真实的 DOM，它不需要浏览器的 DOM API 支持。

虚拟 DOM 是在 DOM 的基础上建立一个抽象层，其实质是一个 JavaScript 对象，当数据和状态发生了变化，都会被自动高效的同步到虚拟 DOM 中，**最后再将仅变化的部分同步到真实 DOM 中**。

将 DOM 抽象成一个 JavaScript 对象：

```js
const element = {
  element: 'ul',
  props: { id: 'ulist' },
  children: [
    { element: 'li', props: { id: 'first' }, children: ['这是第一个List元素'] },
    { element: 'li', props: { id: 'second' }, children: ['这是第二个List元素'] },
  ],
};
```



---



## **React VS Vue**

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

### **模板引用**

Vue 2、Vue 3和React在模板引用方面都有各自的特点和用法。下面我将对这三个框架的模板引用进行比较，并给出相应的例子。

#### Vue 2的模板引用

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

#### Vue 3的模板引用

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

#### React的模板引用

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



### **插槽/children 属性**

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



## **参考资料**

[React Guidebook - 📚 React 知识图谱 关于概念、技巧、生态、前沿、源码核心 - React Guidebook (tsejx.github.io)](https://tsejx.github.io/react-guidebook/)

[React技术揭秘 (iamkasong.com)](https://react.iamkasong.com/#导学视频)

[React 官方中文文档 (docschina.org)](https://react.docschina.org/)

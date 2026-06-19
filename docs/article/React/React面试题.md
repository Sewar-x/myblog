---
star: true
order: 6
sticky: true
category:
  - React
tag:
  - React 面试题
  - React18
  - React19
---

# React 面试题

> 本文结合 React 18 / 19 最新特性，整理了 React 面试中的 **基础题、高频题、重点难点题**，每道题均附带详细答案与代码示例。
>
> 相关笔记：[React 基础](./React基础.md) | [React 生命周期](./React生命周期.md) | [React Fiber](./React-Fiber.md) | [React 性能优化](./React性能优化.md) | [React 组件通信](./React组件通信.md)

---

## 一、基础题

### 1. 什么是 React？它的核心特性是什么？

**React** 是一个由 Facebook（现 Meta）开发的用于构建用户界面的 JavaScript 库，特别适用于单页应用（SPA）。

**核心特性：**

| 特性 | 说明 |
| :--- | :--- |
| **声明式设计** | 开发者只需描述 UI 应该是什么样子，React 自动处理状态变化并高效更新 DOM |
| **组件化** | 将 UI 拆分为独立、可复用的组件，组件间通过 props 传递数据 |
| **单向数据流** | 数据从父组件流向子组件，状态变更路径清晰、可预测 |
| **虚拟 DOM** | 通过轻量级 JS 对象树抽象真实 DOM，配合 diff 算法最小化 DOM 操作 |
| **JSX** | JavaScript 语法扩展，在 JS 中编写类 HTML 结构 |
| **跨平台** | 通过不同的 Renderer 可渲染到 Web（ReactDOM）、移动端（React Native）等 |

---

### 2. JSX 是什么？它是如何工作的？

**JSX**（JavaScript XML）是 JavaScript 的语法扩展，允许在 JavaScript 代码中编写类似 HTML 的结构。

**工作原理：**

JSX 并不能被浏览器直接识别，需要通过 Babel 编译器转换为标准的 JavaScript 代码。Babel 会将 JSX 标签转换为 `React.createElement` 调用。

```jsx
// JSX 代码
const element = <h1 className="title">Hello, React!</h1>;

// Babel 编译后
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, React!'
);
```

`React.createElement` 最终返回一个描述 UI 结构的普通 JavaScript 对象（React Element），该对象包含了标签名、属性、子元素等信息。

---

### 3. 类组件和函数组件有什么区别？

| 对比项 | 类组件 | 函数组件 |
| :--- | :--- | :--- |
| **定义方式** | 使用 ES6 class 语法继承 `React.Component` | 使用普通 JavaScript 函数 |
| **状态管理** | 通过 `this.state` 和 `this.setState` | 通过 `useState` Hook |
| **生命周期** | 完整的生命周期方法 | 通过 `useEffect` 等 Hooks 模拟 |
| **this 绑定** | 需要手动绑定事件处理函数的 this | 不存在 this 问题 |
| **Refs** | 使用 `createRef` 或 `React.forwardRef` | 使用 `useRef` Hook |
| **性能** | 有类的开销 | 更轻量，性能略优 |

```jsx
// 类组件
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>
      {this.state.count}
    </button>;
  }
}

// 函数组件（推荐）
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

> React 16.8 引入 Hooks 后，函数组件的能力得到极大增强，官方推荐优先使用函数组件。

---

### 4. 什么是受控组件和非受控组件？

**受控组件**：表单元素的值由 React 的 state 控制，用户输入会触发 state 更新，state 变化又反过来更新表单值，形成单向数据流。

**非受控组件**：表单元素的值由 DOM 自身维护，通过 `ref` 直接获取 DOM 节点的值。

```jsx
// 受控组件（推荐）
function ControlledInput() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

// 非受控组件
function UncontrolledInput() {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  return <input ref={inputRef} defaultValue="默认值" />;
}
```

| 对比项 | 受控组件 | 非受控组件 |
| :--- | :--- | :--- |
| **值管理** | 由 React state 控制 | 由 DOM 自身维护 |
| **数据流** | 清晰、单向 | 直接操作 DOM |
| **验证处理** | 可实时验证 | 通常在提交时处理 |
| **适用场景** | 复杂表单、需要验证 | 简单表单、与第三方库集成 |

---

### 5. React 中 key 的作用是什么？为什么不能用 index 作为 key？

**key 的作用：** key 是 React 识别列表项的唯一标识，帮助 Diff 算法准确判断哪些元素发生了变化、添加或删除，从而实现元素的高效复用。

**为什么不能用 index 作为 key？**

当列表顺序发生变化（如排序、插入、删除）时，使用 index 作为 key 会导致：

1. **性能问题**：React 无法正确复用 DOM，导致不必要的重新渲染。
2. **状态错乱**：组件的 state 可能与错误的数据关联，例如输入框内容错位。

```jsx
// ❌ 不推荐：使用 index 作为 key
{items.map((item, index) => <li key={index}>{item.name}</li>)}

// ✅ 推荐：使用唯一 id 作为 key
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

> 只有在列表是静态的（不会重新排序、过滤、增删）且项内容简单时，才可使用 index 作为 key。

---

### 6. React 事件机制和原生事件有什么区别？

React 使用的是**合成事件（SyntheticEvent）**机制，而非直接使用原生 DOM 事件。

| 对比项 | 原生事件 | React 合成事件 |
| :--- | :--- | :--- |
| **事件绑定** | `addEventListener` | JSX 的 `onClick` 等属性 |
| **事件池** | 无 | 有（React 17 前会复用事件对象） |
| **this 指向** | 触发事件的元素 | 类组件需手动绑定 this |
| **事件委托** | 需手动实现 | React 自动委托（React 17 前委托到 document，之后委托到根容器） |
| **跨浏览器** | 需处理兼容性 | React 抹平了浏览器差异 |

```jsx
// React 事件采用驼峰命名
<button onClick={handleClick}>点击</button>

// 阻止默认行为必须显式调用 e.preventDefault()
function handleClick(e) {
  e.preventDefault();
  console.log('Clicked');
}
```

**React 17+ 的变化：** 事件委托从 `document` 移到了 React 应用的根容器上，避免了多个 React 应用共存时的事件冲突问题。

---

### 7. setState 是同步还是异步的？

**结论：setState 本身是"同步执行"的，但状态的更新可能是"批量延迟"的。**

在 React 18 之前：
- 在 React 管理的事件回调和生命周期中，setState 表现为"异步"（批量更新）。
- 在原生事件、`setTimeout`、Promise 回调中，setState 表现为"同步"（立即更新）。

在 React 18 之后：
- **所有场景下的 setState 都会自动批处理**（Automatic Batching），无论是 React 事件、原生事件、`setTimeout` 还是 Promise 回调。

```jsx
function Demo() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    // React 18：只会渲染一次，count 变为 1（不是 2）
    // 因为两次 setCount 都基于同一个 count 值
    console.log(count); // 0（此时还未重新渲染）
  };

  // 正确的连续更新方式
  const handleClickCorrect = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // count 变为 2
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

> 如果需要在更新后立即获取最新状态，可以使用函数式更新 `setState(prev => ...)` 或 `useEffect` 监听状态变化。

---

### 8. React 中 refs 的作用是什么？如何使用？

**refs** 提供了一种方式，用于访问 DOM 节点或在 render 中创建的 React 元素实例。

**常见使用场景：**
- 管理焦点、文本选择或媒体播放
- 触发强制动画
- 集成第三方 DOM 库

```jsx
import { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // 挂载后自动聚焦
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

**注意事项：**
- 避免过度使用 refs，应优先通过数据流（state/props）解决问题。
- 函数组件默认无法接收 ref，需使用 `forwardRef`（React 19 中 ref 可直接作为 prop 传递，详见后文）。

---

### 9. 什么是高阶组件（HOC）？

**高阶组件（Higher-Order Component）** 是一个接收组件作为参数并返回一个新组件的函数，本质上是装饰者设计模式的应用。

```jsx
// 高阶组件：为组件添加 loading 能力
function withLoading(WrappedComponent) {
  return function({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>;
    return <WrappedComponent {...props} />;
  };
}

// 使用
const UserList = withLoading(function UserList({ users }) {
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
});
```

**注意事项：**
- 不要在 render 方法中调用 HOC（会导致组件卸载重建，丢失状态）
- 必须将 props 透传给被包装组件
- 为方便调试，应设置 `displayName`

> 现代 React 推荐使用自定义 Hooks 替代 HOC 实现逻辑复用。

---

### 10. React 中组件通信有哪些方式？

| 通信场景 | 方式 | 说明 |
| :--- | :--- | :--- |
| **父 → 子** | Props | 父组件通过 props 向子组件传递数据 |
| **子 → 父** | 回调函数 | 父组件传递函数给子组件，子组件调用并传参 |
| **兄弟组件** | 状态提升 | 将共享状态提升到公共父组件 |
| **跨层级** | Context API | 通过 Provider/Consumer 跨层级传递 |
| **任意组件** | 发布订阅 / Redux / Zustand | 全局状态管理方案 |

```jsx
// Context 跨层级通信
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // 中间层无需透传 props
  return <Button />;
}

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>按钮</button>;
}
```

---

## 二、高频题

### 1. 虚拟 DOM 是什么？它的工作原理和优缺点？

**虚拟 DOM（Virtual DOM）** 是一个轻量级的 JavaScript 对象树，是对真实 DOM 的抽象映射。

**工作原理：**

1. 状态变化时，React 生成新的虚拟 DOM 树
2. 将新树与旧树进行对比（Diff 算法）
3. 计算出最小变更集
4. 将变更批量应用到真实 DOM

```js
// 虚拟 DOM 对象示例
const vdom = {
  tagName: 'div',
  props: { id: 'app' },
  children: [
    { tagName: 'h1', props: {}, children: ['Hello'] }
  ]
};
```

**优点：**
- 减少直接 DOM 操作，规避重排重绘开销
- 声明式编程，UI 更新可预测
- 跨平台能力（可渲染到不同宿主环境）

**缺点：**
- 存在 diff 计算和额外内存开销
- 在极致动态场景下，不一定优于手动优化

---

### 2. Diff 算法的原理是什么？

React 的 Diff 算法基于三个假设（启发式算法，时间复杂度 O(n)）：

1. **不同类型的元素产生不同的树**：遇到不同类型的元素（如 `<a>` 变 `<div>`），直接销毁旧树重建新树。
2. **同类型元素保留 DOM 节点，只更新属性**：如 `<div className="a">` 变 `<div className="b">`，只更新 className。
3. **通过 key 标识子元素**：列表渲染时通过 key 判断元素是否可复用。

**Diff 的层级：**

- **Tree Diff**：按层级对比，同层节点比较
- **Component Diff**：同类型组件继续 diff 子树，不同类型直接替换
- **Element Diff**：同层节点增删移，通过 key 复用节点

```jsx
// key 帮助 Diff 算法识别元素移动
// 旧：A B C
// 新：C A B
// 有 key：React 识别出是移动，复用 DOM
// 无 key：React 可能认为是 C 替换 A、A 替换 B、B 替换 C，导致重新渲染
```

---

### 3. React Fiber 架构是什么？解决了什么问题？

**React Fiber** 是 React 16 引入的新协调引擎，将渲染工作拆分为多个可中断、可恢复的小任务单元（Fiber 节点）。

**解决的问题：**

React 16 之前采用 Stack Reconciler，递归对比虚拟 DOM 时**一旦开始就无法中断**，长时间占用主线程导致页面卡顿。

**Fiber 的核心改进：**

| 特性 | 说明 |
| :--- | :--- |
| **可中断渲染** | 渲染过程可暂停，让出主线程处理高优先级任务 |
| **优先级调度** | 不同更新赋予不同优先级，紧急任务可插队 |
| **增量渲染** | 将渲染任务拆分到多帧执行 |
| **链表结构** | Fiber 节点采用双向链表（child/sibling/return 指针），便于遍历中断与恢复 |

**Fiber 节点结构（简化）：**

```js
{
  tag: 'FunctionComponent',  // 组件类型
  key: null,
  type: MyComponent,
  stateNode: null,           // 对应的 DOM 或实例
  return: parentFiber,       // 父节点
  child: firstChildFiber,    // 第一个子节点
  sibling: nextSiblingFiber, // 兄弟节点
  pendingProps: {},
  memoizedState: {},         // 上次渲染的 state
  alternate: workInProgress, // 双缓冲机制，指向另一份 fiber
}
```

> 详细原理参考：[React Fiber](./React-Fiber.md)

---

### 4. React 生命周期有哪些？React 16 后有哪些变化？

**React 16+ 生命周期：**

**挂载阶段：**
- `constructor`
- `static getDerivedStateFromProps`
- `render`
- `componentDidMount`

**更新阶段：**
- `static getDerivedStateFromProps`
- `shouldComponentUpdate`
- `render`
- `getSnapshotBeforeUpdate`
- `componentDidUpdate`

**卸载阶段：**
- `componentWillUnmount`

**React 16 废弃的生命周期（标记为 UNSAFE）：**
- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`

**废弃原因：** Fiber 架构下 render 阶段（协调阶段）可被暂停、终止、重启，导致这些生命周期可能被重复执行，在其中执行 `setState`、异步请求、操作 DOM 会引发 bug。

**新增的生命周期：**
- `getDerivedStateFromProps`：替代 `componentWillReceiveProps`，强制使用 props 派生 state 的纯粹用法
- `getSnapshotBeforeUpdate`：在 DOM 更新前捕获信息（如滚动位置），返回值传给 `componentDidUpdate`

> 详细内容参考：[React 生命周期](./React生命周期.md)

---

### 5. Hooks 的使用规则是什么？为什么 Hooks 不能在条件语句中调用？

**Hooks 使用规则：**

1. **只在最顶层调用 Hooks**：不要在循环、条件或嵌套函数中调用。
2. **只在 React 函数中调用 Hooks**：在函数组件或自定义 Hook 中调用，不要在普通 JS 函数中调用。

**为什么不能在条件语句中调用？**

React 依赖**调用顺序**来对应每个 Hook 的内部状态。React 内部用一个链表（或数组）按顺序存储每个 Hook 的状态，每次渲染都按相同顺序读取。

```jsx
function Bad() {
  const [count, setCount] = useState(0);
  if (count > 0) {
    // ❌ 条件调用会导致 Hook 顺序错乱
    const [name, setName] = useState('');
  }
  // 第三次渲染时，如果 count <= 0，useState('') 没有被调用
  // React 会把后续的 Hook 与错误的状态对应，导致 bug
}

function Good() {
  const [count, setCount] = useState(0);
  // ✅ 始终在顶层调用
  const [name, setName] = useState('');
  // 可以在 Hook 调用后使用条件判断
  if (count > 0) { /* ... */ }
}
```

---

### 6. useEffect 和 useLayoutEffect 的区别？

| 对比项 | useEffect | useLayoutEffect |
| :--- | :--- | :--- |
| **执行时机** | 在浏览器绘制**之后**异步执行 | 在 DOM 更新后、浏览器绘制**之前**同步执行 |
| **是否阻塞绘制** | 不阻塞 | 阻塞绘制 |
| **适用场景** | 大多数副作用（数据请求、订阅、日志） | 需要在绘制前读取 DOM 布局并同步修改（如测量元素尺寸、滚动位置） |
| **性能影响** | 较小 | 较大，可能影响渲染流畅度 |

```jsx
function MeasureExample() {
  const ref = useRef(null);

  // ✅ 需要测量 DOM 后同步更新样式，避免闪烁
  useLayoutEffect(() => {
    const height = ref.current.getBoundingClientRect().height;
    // 根据测量结果同步调整样式
    if (height > 100) {
      ref.current.style.backgroundColor = 'red';
    }
  }, []);

  return <div ref={ref}>内容</div>;
}
```

> 优先使用 `useEffect`，只有在出现视觉闪烁问题时才考虑 `useLayoutEffect`。在 SSR 场景下 `useLayoutEffect` 会报警告，可用 `useEffect` 替代。

---

### 7. useMemo 和 useCallback 的区别和使用场景？

| Hook | 缓存内容 | 使用场景 |
| :--- | :--- | :--- |
| **useMemo** | 缓存**计算结果**（值） | 避免每次渲染重复执行昂贵的计算 |
| **useCallback** | 缓存**函数引用** | 避免函数重新创建，常配合 `React.memo` 使用 |

```jsx
function Parent({ data }) {
  const [count, setCount] = useState(0);

  // ✅ useMemo：缓存昂贵计算结果
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => a.value - b.value);
  }, [data]);

  // ✅ useCallback：缓存函数引用，避免子组件不必要的渲染
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <ExpensiveList data={sortedData} onClick={handleClick} />
      <span>{count}</span>
    </>
  );
}

// 配合 React.memo 使用
const ExpensiveList = React.memo(function({ data, onClick }) {
  return <div>{/* ... */}</div>;
});
```

**注意事项：**
- 不要滥用，缓存本身也有开销，只有当计算/渲染成本大于缓存成本时才值得使用。
- React 19 引入 React Compiler 后，手动 memoization 将逐渐被自动优化取代。

---

### 8. React 性能优化有哪些手段？

**渲染层面优化：**

| 手段 | 说明 |
| :--- | :--- |
| `React.memo` | 缓存函数组件，props 不变时跳过渲染 |
| `PureComponent` | 类组件版本，浅比较 props 和 state |
| `shouldComponentUpdate` | 手动控制类组件是否需要更新 |
| `useMemo` | 缓存昂贵计算结果 |
| `useCallback` | 缓存函数引用，配合 memo 使用 |
| 合理使用 `key` | 列表渲染使用稳定唯一的 key |
| 拆分组件 | 将大组件拆分，缩小重渲染范围 |
| 状态下放 | 将频繁变化的 state 隔离到独立小组件 |

**加载层面优化：**

| 手段 | 说明 |
| :--- | :--- |
| `React.lazy` + `Suspense` | 组件懒加载、代码分割 |
| 虚拟列表 | 大数据列表使用 `react-window` 等虚拟滚动 |
| `useTransition` / `useDeferredValue` | 将耗时更新标记为低优先级（React 18） |

**编码习惯优化：**
- 避免使用内联函数（每次 render 创建新实例）
- 使用 `Fragment` 避免额外 DOM 节点
- 使用不可变数据，便于浅比较

> 详细内容参考：[React 性能优化](./React性能优化.md)

---

### 9. React 18 的自动批处理（Automatic Batching）是什么？

**自动批处理**是指 React 将多次状态更新合并为一次重新渲染的机制。

**React 17 之前：**
- 只在 React 事件处理函数中自动批处理
- 在 `setTimeout`、Promise、原生事件中的更新不会批处理

**React 18 之后：**
- **所有场景都自动批处理**，无论更新来自 React 事件、`setTimeout`、Promise 还是原生事件

```jsx
function Demo() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = async () => {
    // React 18：只触发一次渲染
    // React 17：会触发两次渲染
    await fetchData();
    setCount(1);
    setFlag(true);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

**如果需要立即更新（退出批处理）：** 可使用 `flushSync`。

```jsx
import { flushSync } from 'react-dom';

const handleClick = () => {
  flushSync(() => {
    setCount(1); // 立即渲染
  });
  setFlag(true); // 批处理
};
```

---

### 10. Context API 的使用场景和注意事项？

**使用场景：**
- 全局主题（theme）、用户信息、国际化（i18n）、路由等需要在多层级组件共享的数据

**注意事项：**

1. **性能问题**：Context 值变化时，所有消费该 Context 的组件都会重新渲染，即使它们只用了部分值。

```jsx
// ❌ 性能问题：任意值变化都导致所有消费者重渲染
const AppContext = createContext({ user: null, theme: 'light' });

// ✅ 拆分 Context
const UserContext = createContext(null);
const ThemeContext = createContext('light');
```

2. **避免在 Provider value 中使用内联对象**：每次 render 都会创建新对象，导致所有消费者重渲染。

```jsx
// ❌ 每次渲染 value 都是新对象
<Context.Provider value={{ user, theme }}>

// ✅ 使用 useMemo
const value = useMemo(() => ({ user, theme }), [user, theme]);
<Context.Provider value={value}>
```

3. **适合低频变化的全局数据**，高频变化的状态建议使用状态管理库（Zustand、Redux 等）配合选择器优化。

---

## 三、重点难点题

### 1. React 18 并发渲染（Concurrent Rendering）原理是什么？

**并发渲染**是 React 18 的核心特性，允许渲染过程**可中断、可暂停、可恢复**，并能根据优先级动态调度任务。

**核心原理：**

1. **基于 Fiber 架构**：Fiber 节点的链表结构使渲染可以随时暂停和恢复。
2. **时间分片（Time Slicing）**：将长任务拆分为多个小片段（约 5ms），分布在多帧执行，避免长时间占用主线程。
3. **优先级调度**：为不同更新赋予优先级，高优先级任务（如用户输入）可中断低优先级任务（如数据渲染）。
4. **双缓冲机制**：维护 current 树和 workInProgress 树，中断时保存进度，恢复时继续。

**启用方式：**

```jsx
// React 18 使用 createRoot 启用并发渲染
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// React 17（旧方式，不启用并发）
// ReactDOM.render(<App />, document.getElementById('root'));
```

**并发渲染带来的能力：**
- `useTransition` / `useDeferredValue`：标记低优先级更新
- `Suspense` 数据获取：异步加载时显示 fallback
- 自动批处理：所有场景的状态更新自动合并
- `useSyncExternalStore`：安全订阅外部 store，避免 tearing（撕裂）问题

---

### 2. useTransition 和 useDeferredValue 的区别和使用场景？

两者都是 React 18 并发渲染提供的 API，用于将耗时更新标记为低优先级，但使用方式不同。

| 对比项 | useTransition | useDeferredValue |
| :--- | :--- | :--- |
| **作用对象** | 标记**状态更新**为低优先级 | 延迟某个**值**的更新 |
| **控制权** | 主动控制（包裹 setState） | 被动延迟（传入一个值） |
| **返回值** | `[isPending, startTransition]` | 延迟后的值 |
| **适用场景** | 能控制状态更新逻辑时 | 无法控制状态来源（如来自 props）时 |

**useTransition 示例（搜索场景）：**

```jsx
import { useState, useTransition } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // 高优先级：输入框立即更新
    setQuery(e.target.value);

    // 低优先级：搜索结果延迟更新，可被输入打断
    startTransition(() => {
      setResults(expensiveSearch(e.target.value));
    });
  };

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <span>加载中...</span>}
      <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>
    </>
  );
}
```

**useDeferredValue 示例（无法控制状态来源时）：**

```jsx
import { useDeferredValue } from 'react';

function SearchResults({ query }) {
  // query 来自 props，无法用 startTransition 包裹
  // 使用 useDeferredValue 延迟其更新
  const deferredQuery = useDeferredValue(query);

  const results = expensiveSearch(deferredQuery);

  return (
    <ul style={{ opacity: query !== deferredQuery ? 0.5 : 1 }}>
      {results.map(r => <li key={r.id}>{r.name}</li>)}
    </ul>
  );
}
```

**选择建议：**
- 如果你能控制 `setState`，用 `useTransition`
- 如果值来自外部（props、第三方库），用 `useDeferredValue`

---

### 3. React 19 有哪些新特性？

React 19 于 2024 年底正式发布，核心目标是**简化开发、减少样板代码、增强原生能力**。

| 特性 | 说明 |
| :--- | :--- |
| **Actions** | 统一的异步操作处理范式，自动管理 pending/error 状态 |
| **useActionState** | 管理表单提交状态，替代手写 useState + try/catch |
| **useFormStatus** | 子组件直接获取父表单状态，无需 props 透传 |
| **useOptimistic** | 实现乐观更新，失败自动回滚 |
| **use** | 读取 Promise 或 Context，**支持条件调用** |
| **ref 作为 prop** | 函数组件可直接接收 ref，无需 forwardRef |
| **useEffectEvent** | 解决 useEffect 中的闭包陷阱（stale closure） |
| **Context 简写** | `<Context value={...}>` 替代 `<Context.Provider value={...}>` |
| **Document Metadata** | 组件内可直接写 `<title>`、`<meta>`，自动提升到 document |
| **Asset Preloading** | 提供 `preload`、`preinit` 等 API 优化资源加载 |
| **React Compiler** | 编译时自动 memoization，替代手动 useMemo/useCallback |

```jsx
// React 19：ref 直接作为 prop
function MyInput({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}
// 使用：<MyInput ref={inputRef} />

// React 19：Context 简写
const ThemeContext = createContext('light');
<ThemeContext value="dark">
  <App />
</ThemeContext>
```

---

### 4. useActionState 和 useFormStatus 如何简化表单处理？

**useActionState** 用于管理异步 Action 的状态（返回值、pending 状态），替代手写 `useState` + `try/catch` 的样板代码。

```jsx
import { useActionState } from 'react';

async function submitOrder(prevState, formData) {
  try {
    const result = await api.createOrder(formData);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function OrderForm() {
  // [state, action, isPending]
  const [state, formAction, isPending] = useActionState(submitOrder, null);

  return (
    <form action={formAction}>
      <input name="product" />
      <button type="submit" disabled={isPending}>
        {isPending ? '提交中...' : '提交订单'}
      </button>
      {state?.error && <p className="error">{state.error}</p>}
      {state?.success && <p className="success">下单成功！</p>}
    </form>
  );
}
```

**useFormStatus** 用于在表单**子组件**中获取父表单的提交状态，无需通过 props 传递。

```jsx
import { useFormStatus } from 'react-dom';

// 子组件：无需接收任何 props 即可知道表单状态
function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? '提交中...' : '提交'}
    </button>
  );
}

// 父组件：无需传递状态
function Form() {
  return (
    <form action={submitAction}>
      <input name="email" />
      <SubmitButton />
    </form>
  );
}
```

**对比 React 18 的旧写法：**

```jsx
// React 18 旧写法：需要手动管理多个状态
function OrderForm() {
  const [state, setState] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const result = await api.createOrder(new FormData(e.target));
      setState({ success: true, data: result });
    } catch (error) {
      setState({ success: false, error: error.message });
    } finally {
      setIsPending(false);
    }
  };

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

---

### 5. useOptimistic 如何实现乐观更新？

**乐观更新（Optimistic Update）**：在异步操作（如网络请求）完成前，先更新 UI 给用户即时反馈，如果操作失败再回滚。

`useOptimistic` 让这一模式变得简单：

```jsx
import { useOptimistic, useState } from 'react';

function ThumbsUp({ likes, addLike }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, newLike) => [...currentLikes, newLike]
  );

  const handleClick = async () => {
    const newLike = { id: Date.now(), user: 'me', pending: true };
    // 1. 立即更新 UI（乐观）
    addOptimisticLike(newLike);
    try {
      // 2. 发起异步请求
      await addLike(newLike);
      // 成功：真实 state 更新后，乐观值自动被替换
    } catch {
      // 失败：乐观值自动回滚到真实 state
      alert('点赞失败');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>👍 {optimisticLikes.length}</button>
      {optimisticLikes.some(l => l.pending) && <span>同步中...</span>}
    </div>
  );
}
```

**工作原理：**
- `useOptimistic` 返回的 `optimisticState` 在没有 pending 的 Action 时等于真实 `value`
- 当调用 `addOptimistic` 时，UI 立即显示乐观值
- 当 Action 完成后（成功或失败），乐观值自动恢复为真实 `value`

**注意事项：** `setOptimistic` 必须在 Action（`startTransition` 或 form action）内部调用。

---

### 6. use hook 有什么特别之处？

`use` 是 React 19 引入的特殊 API，用于读取 Promise 或 Context。

**与普通 Hooks 的关键区别：`use` 可以在条件语句和循环中调用。**

```jsx
import { use } from 'react';

// 1. 读取 Promise（配合 Suspense）
function DataComponent({ promise, showDetails }) {
  if (!showDetails) {
    return <p>预览模式</p>;
  }
  // ✅ 可以在条件语句中调用！
  const data = use(promise);
  return <div>{data.name}</div>;
}

// 父组件提供 Suspense 边界
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <DataComponent promise={fetchData()} showDetails={true} />
    </Suspense>
  );
}
```

**读取 Context（替代 useContext）：**

```jsx
function Button({ show }) {
  if (show) {
    // ✅ 条件读取 Context
    const theme = use(ThemeContext);
    return <button className={theme}>按钮</button>;
  }
  return null;
}
```

**为什么普通 Hooks 不能条件调用而 use 可以？**

普通 Hooks（如 `useState`、`useEffect`）依赖调用顺序来对应内部状态链表，条件调用会打乱顺序。而 `use` 读取的是传入的 Promise/Context 引用，不依赖调用顺序，因此可以在条件分支中使用。

**与 Suspense 的配合：** 当 Promise 未 resolve 时，`use` 会抛出该 Promise，最近的 `<Suspense>` 边界捕获并显示 fallback，Promise resolve 后自动恢复渲染。

---

### 7. React 19 中 ref 作为 prop 有什么变化？

**React 19 之前：** 函数组件不能直接接收 `ref` 作为 props，必须使用 `forwardRef` 包裹。

```jsx
// React 18：必须使用 forwardRef
const MyInput = React.forwardRef(function MyInput({ value }, ref) {
  return <input ref={ref} value={value} />;
});
```

**React 19：** `ref` 可以直接作为普通 prop 传递，无需 `forwardRef`。

```jsx
// React 19：ref 直接作为 prop
function MyInput({ value, ref }) {
  return <input ref={ref} value={value} />;
}

// 使用方式不变
function App() {
  const inputRef = useRef(null);
  return <MyInput ref={inputRef} value="hello" />;
}
```

**好处：**
- 更简洁的组件 API
- 更好的 TypeScript 类型推断
- 更清晰的调试体验

> `forwardRef` 在 React 19 中仍可用（向后兼容），但新代码推荐直接使用 ref prop。未来版本将废弃 `forwardRef`。

---

### 8. useEffectEvent 解决了什么问题？

**问题：useEffect 中的闭包陷阱（Stale Closure）**

当 `useEffect` 的依赖数组不包含某个变量时，effect 中捕获的是该变量的旧值，导致逻辑错误。但如果把变量加入依赖，又会导致 effect 频繁重新执行。

```jsx
// 闭包陷阱示例
function Chat({ roomId }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    connection.on('message', (msg) => {
      // ❌ 闭包捕获的是初始的 theme，永远是 'dark'
      showMessage(msg, theme);
    });
    return () => connection.disconnect();
    // 如果把 theme 加入依赖，每次切换主题都会断开重连，不合理
  }, [roomId]);

  return <div>...</div>;
}
```

**useEffectEvent 解决方案：**

`useEffectEvent` 返回一个函数，该函数总是能读取到最新的 props 和 state，但不需要加入 effect 的依赖数组。

```jsx
function Chat({ roomId }) {
  const [theme, setTheme] = useState('dark');

  // ✅ useEffectEvent：总是读取最新的 theme
  const onMessage = useEffectEvent((msg) => {
    showMessage(msg, theme);
  });

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    connection.on('message', onMessage); // onMessage 不需要加入依赖
    return () => connection.disconnect();
  }, [roomId]); // ✅ 只依赖 roomId，theme 变化不会重连

  return <div>...</div>;
}
```

**useEffectEvent 的特点：**
- 返回的函数总是能读取最新的 props/state
- 不需要（也不应该）加入 useEffect 的依赖数组
- 不能在渲染期间调用，只能在 effect 内部或事件处理中调用

---

### 9. React Compiler 是什么？它如何改变优化方式？

**React Compiler**（曾用名 React Forget）是 React 19 引入的编译时优化工具，**自动完成 memoization**，替代手动的 `useMemo`、`useCallback`、`React.memo`。

**工作原理：**

编译器在构建时对组件代码进行静态分析，自动识别哪些值需要缓存，并在编译产物中插入等效的 memoization 逻辑。

```jsx
// 开发者写的代码（无需手动优化）
function ProductList({ products, filterText }) {
  const filtered = products.filter(p => p.name.includes(filterText));
  const sorted = [...filtered].sort((a, b) => a.price - b.price);

  const handleClick = (id) => {
    console.log('clicked', id);
  };

  return sorted.map(p => <Product key={p.id} product={p} onClick={handleClick} />);
}

// React Compiler 编译后（等效于自动添加了 useMemo/useCallback）
function ProductList({ products, filterText }) {
  const filtered = useMemo(() => products.filter(p => p.name.includes(filterText)), [products, filterText]);
  const sorted = useMemo(() => [...filtered].sort((a, b) => a.price - b.price), [filtered]);
  const handleClick = useCallback((id) => console.log('clicked', id), []);
  return sorted.map(p => <Product key={p.id} product={p} onClick={handleClick} />);
}
```

**编译器的要求——纯函数规则：**

为了安全地自动 memoize，编译器要求组件和 Hooks 必须是**纯函数**：
1. 不修改外部作用域的变量
2. 相同的输入（props/state）产生相同的输出
3. 副作用只在事件处理函数或 `useEffect` 中执行

如果编译器检测到违反规则，会跳过该组件的优化（不会报错），退回到开发者手动优化。

**意义：**
- 减少样板代码，开发者专注业务逻辑
- 避免遗漏 memoization 导致的性能问题
- 避免错误使用 memoization 导致的 bug

---

### 10. 什么是 Server Components（服务端组件）？

**Server Components（RSC）** 是在服务端渲染并传输到客户端的组件，它们不会被打包到客户端 JS 中。

**Server Component vs Client Component：**

| 对比项 | Server Component | Client Component |
| :--- | :--- | :--- |
| **执行环境** | 服务端 | 客户端（浏览器） |
| **能否使用 state** | ❌ 不能（无 useState 等） | ✅ 可以 |
| **能否使用事件** | ❌ 不能（无 onClick 等） | ✅ 可以 |
| **能否访问后端资源** | ✅ 直接访问数据库、文件系统 | ❌ 需通过 API |
| **打包体积** | 不打包到客户端 | 打包到客户端 |
| **文件后缀** | `.server.js`（或默认） | `.client.js` |

```jsx
// Server Component：直接访问数据库
// db.server.js
import { db } from './database';

export default async function ProductList() {
  const products = await db.query('SELECT * FROM products');
  return (
    <div>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

// Client Component：交互逻辑
// AddToCart.client.js
'use client';
import { useState } from 'react';

export default function AddToCart({ productId }) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>加入购物车 {count}</button>;
}
```

**优势：**
- 减少客户端 JS 体积，首屏加载更快
- 直接访问后端资源，无需额外 API 层
- SEO 友好

**限制：**
- 需要框架支持（如 Next.js App Router）
- 不能使用 Hooks、事件处理等客户端特性
- Server Component 不能导入 Client Component 的内部，但 Client Component 可以接收 Server Component 作为 children

---

### 11. 闭包陷阱（Stale Closure）是什么？如何解决？

**闭包陷阱**：在 React 函数组件中，每次渲染都会创建新的闭包，如果异步回调（如 `setTimeout`、事件监听、`useEffect`）捕获了旧的 state/props 值，就会读到过期的数据。

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // ❌ 闭包陷阱：count 永远是 0
      console.log(count);
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []); // 空依赖，effect 只执行一次

  return <div>{count}</div>;
}
```

**解决方案：**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // ✅ 方案1：函数式更新，不依赖外部 count
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ✅ 方案2：使用 useRef 保存最新值
  const countRef = useRef(count);
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(countRef.current); // 总是最新值
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ✅ 方案3：React 19 使用 useEffectEvent
  const logCount = useEffectEvent(() => {
    console.log(count); // 总是读取最新 count
  });

  // ✅ 方案4：正确设置依赖（适用于某些场景）
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]); // 但这样会频繁重建定时器，需权衡

  return <div>{count}</div>;
}
```

---

### 12. useSyncExternalStore 的作用和使用场景？

**useSyncExternalStore** 是 React 18 引入的 Hook，用于**安全地订阅外部数据源**（非 React 管理的状态，如 Redux、Zustand、localStorage、浏览器 API 等）。

**解决的问题——Tearing（撕裂）：**

在并发渲染下，不同组件可能在不同时间渲染，如果直接用 `useEffect` + `useState` 订阅外部 store，可能出现同一页面不同组件显示不同版本数据的问题（tearing）。`useSyncExternalStore` 保证了渲染期间读取的数据一致性。

**API：**

```jsx
const snapshot = useSyncExternalStore(
  subscribe,    // 订阅函数：注册回调，返回取消订阅函数
  getSnapshot,  // 获取当前快照（客户端）
  getServerSnapshot // 可选：获取服务端快照（SSR）
);
```

**使用示例：**

```jsx
import { useSyncExternalStore } from 'react';

// 订阅 localStorage 变化
function useLocalStorage(key) {
  return useSyncExternalStore(
    // subscribe：监听 storage 事件
    (callback) => {
      window.addEventListener('storage', callback);
      return () => window.removeEventListener('storage', callback);
    },
    // getSnapshot：返回当前值
    () => localStorage.getItem(key),
    // getServerSnapshot：SSR 时返回默认值
    () => null
  );
}

function App() {
  const theme = useLocalStorage('theme');
  return <div>当前主题：{theme}</div>;
}
```

**与第三方状态库集成：**

```jsx
// Zustand 内部已使用 useSyncExternalStore
import { createStore } from 'zustand';

const store = createStore((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  // Zustand 的 useStore 底层就是 useSyncExternalStore
  const count = useStore(store, (state) => state.count);
  return <div>{count}</div>;
}
```

**注意事项：**
- `getSnapshot` 必须返回缓存的对象引用（相同数据返回相同引用），否则会导致无限重渲染
- 适合低频更新的外部数据，高频更新建议使用并发特性优化

---

## 参考资料

- [React 官方中文文档](https://react.docschina.org/)
- [React 19 官方博客](https://react.dev/blog/2024/12/05/react-19)
- [React 18 升级指南](https://react.docschina.org/blog/2022/03/08/react-18-upgrade-guide.html)
- [100+ React Interview Questions (2026)](https://www.greatfrontend.com/blog/100-react-interview-questions-straight-from-ex-interviewers)

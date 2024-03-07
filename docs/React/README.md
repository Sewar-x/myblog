# React
## **大纲**

| 目录        | 内容                     | 项目内容  |
| ----------- | ------------------------ | --------- |
| **React18** |                          |           |
|             | **基础**                 |           |
|             | **原理**                 |           |
|             | **核心API： 22种 Hooks** |           |
|             | **数据状态管理**         | **Redux** |
|             |                          | Zustand   |
|             |                          | Recoil    |
| **源码**    |                          |           |



## **状态更新**

### **state 异步更新**

**在React中，`setState`的调用是异步的，它不会立即更新组件的状态。相反，React 把一系列 state 更新加入队列 ，并在在事件循环的下一个迭代应用**。这样做的一个主要好处是React可以批量处理多个状态更新，以提高性能。

示例：

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

为了解决这个问题，你可以使用**函数式的状态更新**，它允许你基于先前的状态来计算新的状态

### **函数式的状态更新**

> 函数式的状态更新允许你基于先前的状态来计算新的状态，是因为它提供了一种机制，让你在更新状态时可以引用状态更新之前的值。

通过在设置状态时传递一个 *更新器函数* 来解决这个问题。注意用 `setScore(s => s + 1)` 替换 `setScore(score + 1)` 是如何修复“+3”按钮的。

# React Three Fiber

## 一、到底什么是 React Three Fiber？

**一句话解释：**  
React Three Fiber（简称 R3F）是一个 **React 渲染器**。它允许你用写 React 组件的方式，在浏览器里构建和操控 3D 场景。

你可以理解为：
- 平时我们用 React 写 `<div>`、`<button>` 这些 HTML 元素，最终由 ReactDOM 把它们变成真实的 DOM 节点。
- React Three Fiber 做的是类似的事，但目标不是 HTML 页面，而是 Three.js 的 3D 对象。你写 `<mesh>`、`<boxGeometry>`、`<ambientLight>`，R3F 负责把它们变成真实的 Three.js 三维场景。

所以：
- **Three.js** 是底层 3D 库，负责和 WebGL 打交道，它用命令式的方式操控场景：“创建一个场景 → 创建一个立方体 → 添加灯光 → 每帧旋转一点”。
- **React Three Fiber** 是在 Three.js 上套了一层 React，让你用声明式的 JSX 来描述三维世界：“我想要一个场景，里面有一个红色立方体，它会自动旋转”。

你的代码长这样：
```jsx
<Canvas>
  <ambientLight />
  <mesh rotation={[0, Math.PI / 4, 0]}>
    <boxGeometry />
    <meshStandardMaterial color="red" />
  </mesh>
</Canvas>
```

看起来是不是就像在写普通 React 界面？这就是 R3F 的核心魅力。

---

## 二、为什么需要它？（解决什么问题）

直接用 Three.js 写 3D 会有这些痛点：
- 需要手动管理场景图（scene.add / remove）。
- 状态分散，很难复用逻辑。
- 动画、交互与 UI 状态割裂。
- 大型项目结构复杂，代码容易变成“意大利面条”。

React Three Fiber 解决了这些问题：
1. **声明式** – 你只需描述场景“长什么样”，不用一步步写“怎么构建”。
2. **组件化** – 3D 对象可以封装成 React 组件，到处复用。
3. **状态驱动** – 用 `useState`、`useEffect`、上下文等 React 生态工具，自然地驱动 3D 变化。
4. **生态系统** – 可以结合 Zustand、React Spring 等库，轻松实现复杂交互和动画。

---

## 三、起步准备与第一个场景

### 1. 安装
你需要三个包：
```bash
npm install three @react-three/fiber @react-three/drei
```
- `three`：底层的 Three.js 库。
- `@react-three/fiber`：R3F 核心。
- `@react-three/drei`：官方辅助工具集，提供了大量常用组件（如轨道控制、文字、环境贴图等）。

### 2. 最小可运行示例（旋转的立方体）
```jsx
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Box() {
  const meshRef = useRef() // 用于获取 Three.js 的 mesh 对象

  useFrame((state, delta) => {
    // 每帧自动执行，delta 是上一帧经过的时间（秒）
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />   {/* 长宽高为1的立方体 */}
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  )
}
```
运行这段代码，浏览器中就会出现一个缓缓旋转的橙色立方体。

### 3. 从这个例子学到的关键点
- `<Canvas>` 组件内部创建了 Three.js 的 **场景**、**相机**、**渲染器**，并启动了渲染循环。
- 所有 R3F 的 3D 组件都必须放在 `<Canvas>` 内部。
- 像 `<mesh>`、`<boxGeometry>` 这些 JSX 标签会自动转换成对应的 Three.js 对象（`THREE.Mesh`、`THREE.BoxGeometry` 等），并正确地挂到场景图上。
- `useFrame` 让你能在每一帧执行逻辑，这是实现动画的主要方式。

---

## 四、基础用法详解

### 1. JSX 标签与 Three.js 对象的对应关系
R3F 里大部分 Three.js 的类都直接对应一个标签（首字母小写）：
- `THREE.Mesh` → `<mesh>`
- `THREE.BoxGeometry` → `<boxGeometry>`
- `THREE.MeshStandardMaterial` → `<meshStandardMaterial>`
- `THREE.AmbientLight` → `<ambientLight>`
- `THREE.PerspectiveCamera` → `<perspectiveCamera>` （但通常 `Canvas` 已内置）

属性的传递与 Three.js 构造器/属性完全一致：
```jsx
<mesh position={[0, 2, 0]} rotation={[0, Math.PI, 0]} scale={1.5}>
```
这相当于 `mesh.position.set(0,2,0)` 等。

**嵌套规则**也遵循 Three.js 的层级：`<mesh>` 里面可以放几何体和材质，放在里面的会自动做 `mesh.add(geometry)` / `mesh.material = material`。

### 2. 灯光、相机与控制
- **灯光**：直接写在 `<Canvas>` 内，和普通三维软件一样，有环境光、点光源、方向光等。
- **相机**：`Canvas` 默认会创建一个透视相机，你可以通过属性配置：
  ```jsx
  <Canvas camera={{ fov: 45, position: [0, 0, 5] }}>
  ```
- **轨道控制**：借助 `drei` 的 `OrbitControls`，鼠标就能旋转/缩放场景：
  ```jsx
  import { OrbitControls } from '@react-three/drei'
  <Canvas>
    <OrbitControls />
    ...
  </Canvas>
  ```

### 3. 交互事件
直接在 3D 物体上绑定 React 风格的事件：
```jsx
<mesh
  onClick={() => console.log('被点击了！')}
  onPointerOver={() => ...}
  onPointerOut={() => ...}>
```
R3F 内部会自动处理光线投射（raycasting），你不需要手动写。这使得给 3D 场景加交互几乎和写 Web 应用一样简单。

---

## 五、常用 API 精讲

当你从基础走向进阶，以下这些 API 是必须掌握的。

### 1. `useFrame` – 帧循环钩子
```jsx
useFrame((state, delta) => {
  // state包含 camera, scene, gl, clock, mouse 等
  // delta 是时间增量，用于保持动画速度与帧率无关
  state.camera.position.x = Math.sin(state.clock.elapsedTime) * 3
})
```
- 所有 `useFrame` 回调会在每一帧按注册顺序执行。
- 可以返回一个清理函数，或者通过第二个参数设置优先级。

### 2. `useThree` – 获取场景核心对象
```jsx
const { camera, scene, gl, size, viewport } = useThree()
```
- `gl` 就是 WebGLRenderer，`size` 是画布尺寸，`viewport` 提供了适应响应式布局的计算方法。
- 当你需要直接操作底层对象时（比如动态更换渲染器的色调映射），这个钩子很关键。

### 3. `useLoader` – 加载纹理、模型等资源
```jsx
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const texture = useLoader(TextureLoader, '/texture.jpg')
// 然后在材质中使用
<meshStandardMaterial map={texture} />
```
- 支持任何 Three.js 加载器（GLTFLoader, AudioLoader 等），并且会自动处理 Suspense，方便异步加载。

### 4. `extend` – 让任意 Three.js 对象变成 JSX 标签
有些 Three.js 的对象（比如后期处理的 Pass）没有内建标签，你可以自己扩展：
```jsx
import { extend } from '@react-three/fiber'
import { EffectComposer, RenderPass } from 'three/examples/...'

extend({ EffectComposer, RenderPass })
// 现在你就可以在场景中使用：
<effectComposer>
  <renderPass />
</effectComposer>
```

### 5. `useGraph` 与模型操作
从 GLTF 模型加载后，如果你想获取模型内部的某个子物体并操控它，可以使用 `useGraph`：
```jsx
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/...'
import { useGraph } from '@react-three/fiber'

const gltf = useLoader(GLTFLoader, '/model.glb')
const { nodes } = useGraph(gltf) // nodes 是一个包含所有子物体的对象
// 然后直接使用 <primitive object={nodes.Hand} />
```

---

## 六、深入原理：它是怎么做到的？

理解原理能让你真正精通 R3F，写出更高效、更可靠的代码。

### 1. React 自定义渲染器（Reconciler）
React 架构分为两部分：
- **Reconciler**（协调器）：负责对比组件树的变化，生成需要更新的操作。
- **Renderer**（渲染器）：负责将操作应用到具体的平台，比如 ReactDOM 操作 DOM，React Native 操作原生视图。

R3F 就是 **一个面向 Three.js 的自定义渲染器**。它没有使用 DOM，而是实现了一系列宿主环境需要的方法，例如：
- `createInstance(type)` – 创建 Three.js 对象，比如传入 `'mesh'` 就 `new THREE.Mesh()`。
- `appendChild(parent, child)` – 实现 `parent.add(child)`。
- `insertBefore`、`removeChild` – 管理场景图。
- `commitUpdate(instance, updatePayload, type, oldProps, newProps)` – 属性更新时，把新属性赋值给 Three.js 对象，比如 `mesh.position.copy(newProps.position)`。

这意味着，**当你写 JSX 时，R3F 在内部为每个元素创建对应的 Three.js 对象，并根据 React 的 diff 结果高效更新场景图**。

### 2. 渲染循环与 React 状态同步
一个 3D 程序必须有一个渲染循环（requestAnimationFrame），不停地重新绘制画面。R3F 在 `<Canvas>` 内部自动启动了这个循环。

但 React 的状态更新是异步批处理的，R3F 巧妙地把两者连接了起来：
- 默认模式下（`frameloop="demand"`，按需渲染），只有当 React 状态变化、`useFrame` 存在或者调用了 `invalidate()` 时，才会渲染新的一帧。**静止时完全不消耗 GPU/CPU**。
- 如果你需要持续动画，可以设置 `frameloop="always"`，让循环一直运行。
- 当你通过 `useState` 更新了一些状态，React 会安排一次重渲染。R3F 会捕获到属性变化，在下一帧提交更新，并在渲染前调用所有 `useFrame` 钩子。

**帧过程（简化）**：
1. 浏览器回调 requestAnimationFrame。
2. R3F 运行所有 `useFrame` 回调（你可以在这里修改 ref，或触发状态更新）。
3. 如果 React 安排了渲染，则执行 React 协调，将最新的 props 同步到 Three.js 对象。
4. 调用 `gl.render(scene, camera)` 把结果画到 canvas 上。

### 3. 事件系统
R3F 没有走 Three.js 的传统事件模型，而是实现了一套自己的、与 React 一致的事件代理。当你在 `<mesh onClick={...}>` 上绑定事件时，R3F 实际上在 canvas 上监听鼠标/触摸事件，然后通过投射射线（raycast）找到被点击的三维物体，再触发对应的事件回调。

这样做的好处是：
- 事件与组件紧密结合，可以配合 React 的合成事件、冒泡等行为。
- 支持 `pointermove`、`click`、`wheel` 等多种事件，和浏览器体验一致。

### 4. 并发模式与 Suspense
R3F 完全兼容 React 的并发模式（Concurrent Mode）和 `<Suspense>`。这意味着你可以：
- 用 `React.lazy` 异步加载包含 3D 内容的组件。
- 用 `<Suspense fallback={加载中...}>` 包裹模型加载过程，让用户体验更流畅。
- R3F 内部在 `useLoader` 中抛出了 Promise，Suspense 能捕获并等待。

这种深度整合使得 3D 场景不再是独立孤岛，而是整个 React 应用的一部分。

---

## 七、从会用到熟练的进阶路线图

1. **掌握 drei 库** – `OrbitControls`、`Environment`、`Text`、`Html`、`TransformControls` 等，这些是搭建场景的积木。
2. **学会控制模型** – 使用 `useLoader` 加 `GLTFLoader` 加载外部 3D 模型，用 `useGraph` 拆分部件，制作可交互的产品展示。
3. **动画与状态管理** – 用 `react-spring/three` 做高级动画，或用 Zustand 做全局状态管理。
4. **后处理效果** – 使用 `@react-three/postprocessing`，通过 JSX 添加辉光、色调映射等效果。
5. **物理引擎** – 结合 `@react-three/cannon` 或 `@react-three/rapier`，让物体具有真实的物理行为。
6. **性能优化** – 了解 `InstancedMesh`、几何体复用、纹理压缩、LOD 等概念在 R3F 中的实现方式。
7. **自定义着色器** – 通过 `shaderMaterial` 组件，在 R3F 中也能轻松使用 GLSL 自定义材质。

---

## 八、总结：什么是 React Three Fiber？

现在再回来看这个问题，你应该非常清晰了：

- **它是一个让你用 React 思维方式构建 Three.js 3D 场景的渲染器。**
- 它用 JSX 表达了三维世界，将 Three.js 的命令式 API 转化为了声明式的组件树。
- 它完美融入了 React 生态，所有 React 的特性（Hooks、Context、Suspense、并发模式）都可以直接用于 3D 开发。
- 在内部，它实现了一个自定义的 React Reconciler，用来创建、更新和销毁 Three.js 对象，并管理渲染循环和事件。

**简单说，React Three Fiber 是 React 通往三维世界的桥梁。** 它让你在写网页应用的同时，能毫不费力地创造出沉浸式的 3D 体验，而无需学习一套全新的开发范式。如果你是 React 开发者，那么你已经会了一半的 R3F。


下面为你总结 React Three Fiber 的高频面试题及重点难点题目，每道都附有详细的解释。这些题目兼顾基础理解、实际应用和底层原理，适合准备进阶或面试。

---

## 一、基础理解与应用

### 1. React Three Fiber 是什么？它和 Three.js 是什么关系？
**回答要点：**
- R3F 是一个 **React 自定义渲染器**，它将 React 的声明式组件模型映射为 Three.js 的三维对象。
- 如果说 Three.js 是操作 3D 场景的命令式 API（`new THREE.Mesh()`、`scene.add()`），R3F 就是让开发者用 JSX 来声明三维世界的库（`<mesh><boxGeometry /></mesh>`）。
- 关系：**R3F 不是替代 Three.js，而是 Three.js 的 React 绑定**。底层依然是 Three.js 在做 WebGL 渲染，R3F 负责将其与 React 组件树同步。你仍然需要理解 Three.js 的基本概念（几何体、材质、灯光等）。

**详解：**  
React 的架构分为 Reconciler 和 Renderer。R3F 实现了 React Reconciler 所需的宿主环境方法（`createInstance`、`appendChild`、`commitUpdate` 等），将 JSX 的更新转换为 Three.js 对象的新建、添加和属性设置。这样带来的最大好处是：你可以用 React 的一切生态（Hooks、状态管理、Suspense）来驱动三维场景，实现 3D 与 UI 的深度结合。

---

### 2. `<Canvas>` 组件的作用是什么？它背后做了什么？
**回答要点：**
- `<Canvas>` 是 R3F 的入口，它会创建 **Scene、Camera 和 WebGLRenderer**，并启动渲染循环。
- 它内部构建了一个独立的 React 树（通过 `createRoot` 或旧的 `render` 方式），并使用 R3F 的 Reconciler。
- 可以配置 `camera` 属性（`fov`, `position` 等）、`gl` 渲染器选项（抗锯齿、像素比）、渲染模式（`frameloop`）等。

**详解：**  
当你写：
```jsx
<Canvas camera={{ position: [0,0,5] }}>
  <mesh>...</mesh>
</Canvas>
```
`<Canvas>` 会：
1. 创建一个 `<canvas>` DOM 元素并挂载。
2. 实例化 `THREE.Scene`、`THREE.PerspectiveCamera`（或正交相机）、`THREE.WebGLRenderer`。
3. 用 R3F Reconciler 创建一个独立的 React 容器，把内部子组件渲染成 Three.js 对象并加到场景中。
4. 开始 `requestAnimationFrame` 循环，每帧运行 `useFrame` 回调，同步 React 状态变化，然后执行 `renderer.render(scene, camera)`。
5. 自动处理 canvas 的尺寸和像素比，使其响应式。

---

### 3. `useFrame` 和 `useThree` 分别有什么用？使用时的注意事项是什么？
**回答要点：**
- **`useFrame(callback, priority?)`**：在每帧渲染前执行回调，参数是 `(state, delta)`。`state` 包含 `camera`、`scene`、`gl`、`clock`、`mouse` 等；`delta` 是时间增量。用于动画、每帧更新的逻辑。
- **`useThree()`**：返回 `{ camera, scene, gl, size, viewport, ... }` 等核心对象，让组件能直接操作 Three.js 底层。它是一个快照，仅在当前组件订阅的状态变化时重渲染。
- 注意：
  - `useFrame` 不能放在条件语句或嵌套函数中（Hook 规则）。
  - 避免在 `useFrame` 内触发大量状态更新，以防性能问题；对于连续动画，直接用 `ref` 操作对象是更好的选择。
  - `useThree` 返回的对象引用稳定，但值会随状态更新而变；不要解构后存入本地变量期望它自动更新，应在 `useFrame` 或 Effect 中访问。

---

### 4. 如何在 R3F 中处理事件？它的原理是什么？
**回答要点：**
- 直接在 3D 元素上绑定 React 风格的事件：`onClick`, `onPointerOver`, `onPointerOut`, `onPointerMove`, `onWheel` 等。
- 原理：R3F 在 `<canvas>` 上监听原生鼠标/触摸事件，然后用 **Raycasting（光线投射）** 从相机通过鼠标位置发射射线，检测与所有场景中对象的交点，再根据穿过的对象层次触发相应组件的事件回调。
- 这完全遵循 React 的合成事件模型，支持事件的**冒泡**（沿 3D 对象层级向上冒泡）。

**详解：**  
内部使用了一个“事件总管”，它维护射线检测器。当鼠标移动或点击时，会计算 intersect 数组（按距离排序），然后基于这个列表和 3D 对象的父子关系模拟捕获和冒泡阶段。开发者可以像处理 DOM 事件一样，在 3D 按钮上直接 `onClick`，并利用 `stopPropagation()` 阻止穿透。

---

### 5. R3F 中的 `ref` 如何工作？怎样获得 Three.js 原生对象？
**回答要点：**
- 和 React 一样使用 `useRef`，将 `ref` 附加到 JSX 元素（如 `<mesh ref={myRef} />`）。
- R3F 会把对应的 Three.js 实例（如 `THREE.Mesh`）赋值给 `ref.current`，让你可以命令式地操作它。
- 这种“逃生舱”对于调用 Three.js 的原生方法（如 `.lookAt()`, `.updateMatrix()`）或需要直接操作几何体、材质时很关键。

**示例：**
```jsx
const meshRef = useRef()
useEffect(() => {
  if(meshRef.current) {
    meshRef.current.geometry.computeBoundingBox()
  }
}, [])
return <mesh ref={meshRef}>...</mesh>
```

---

## 二、重点难点（原理、性能与高阶使用）

### 6. 解释 React Three Fiber 的自定义渲染器（Reconciler）是如何工作的。
**回答要点：**
- React Reconciler 定义了一套“宿主配置”，包括 `createInstance`、`appendChild`、`commitUpdate`、`removeChild` 等方法。R3F 实现了这套配置，使其宿主为 Three.js。
- 当 React 协调器发现虚拟树变化时，它会调用这些方法，在 Three.js 中创建、移动、更新或删除对应的 3D 对象。
- 具体映射：JSX 标签名（`'mesh'`、`'boxGeometry'`）被转换为 `new THREE.Mesh()` 等。属性更新通过 `instance.position.copy(newProps.position)` 等方式应用。父子关系通过 `parent.add(child)` 实现。

**深入说明：**  
这使得 React 的 Diff 算法能够直接作用于三维场景图。比如当状态变化导致组件卸载时，对应的 Three.js 对象会被自动从场景中移除并释放内存。它完全保留了 React 的局部更新优势，避免全局重建场景。

---

### 7. R3F 的渲染循环（Frameloop）有哪几种模式？如何优化不必要的渲染？
**回答要点：**
- **`always`**：持续以 60fps 运行，适合连续动画。
- **`demand`**（默认）：按需渲染。当 React 状态变化或调用 `invalidate()` 时，才渲染下一帧。当没有动画或交互时，渲染完全停止，节省资源。
- **`never`**：完全手动控制，需自己调用 `advance()` 来推进一帧。
- 优化思路：
  - 对于非连续动画（如只在滚动时才动），使用 `demand` 并手动 `invalidate()`。
  - 将静态内容用 `useMemo` 或 `React.memo` 缓存，避免不必要的重新计算。
  - 使用 `InstancedMesh` 减少绘制调用，R3F 有 `<instancedMesh>` 组件。

**解释：**  
默认的 `demand` 模式是 R3F 的一大性能亮点。它会监视：有哪些 `useFrame` 订阅、React 状态有无变化、是否有“脏”标记。一帧结束后如果没有新的更新需求，循环就休眠，直接省去 GPU/CPU 占用。

---

### 8. 如何在 R3F 中实现高级动画？`useFrame` 和 `react-spring` 如何配合？
**回答要点：**
- **简单动画**：直接在 `useFrame` 里修改 `ref.current` 的属性，如旋转、位置。使用 `delta` 保持帧率无关。
- **复杂过渡/弹簧动画**：使用 `@react-spring/three`，它导出了 `useSpring`、`animated` 组件，能够基于弹簧物理值驱动 3D 元素的属性，并自动与 R3F 的渲染循环集成。
- 用法示例：`<animated.mesh position={spring.position} .../>`，背后的值由 `react-spring` 计算，每帧自动更新且高效，不触发 React 重渲染。
- 对于时间轴编排，可以使用 `react-spring` 的 `useTrail` 或结合状态机。高级场景中可用 GSAP 配合 `useFrame` 或 `useLayoutEffect`，但需要手动同步。

**原理：**  
`@react-spring/three` 同样实现了针对 Three.js 的渲染器，它直接更新 ref 指向的对象属性，避免了 React 的协调开销，非常适合高频动画。

---

### 9. 在 R3F 中如何加载和操控复杂的 3D 模型？`useGraph` 的作用是什么？
**回答要点：**
- **加载**：用 `useLoader` + `GLTFLoader` 加载 glTF/glb 模型，它会结合 React 的 `<Suspense>` 实现异步加载。
- **操控子部件**：加载后得到 GLTF 对象，可以通过 `useGraph` 辅助 Hook 将其扁平化为一个 `nodes` 对象，其中包含所有带名称的子物体（Mesh、Group 等），然后可以直接使用 `<primitive object={nodes.某部件} />` 渲染，并添加事件和动画。
- **`useGraph`** 本质上是将 GLTF 的场景图转化为一组可被 R3F 直接使用的 React 元素节点，方便对模型各部分进行细粒度控制。

**示例逻辑：**
```jsx
const gltf = useLoader(GLTFLoader, '/model.glb')
const { nodes } = useGraph(gltf)

return (
  <group>
    <primitive object={nodes.底盘} />
    <primitive object={nodes.轮子} onClick={rotateWheel} />
  </group>
)
```

---

### 10. R3F 如何处理 React 18 的并发模式（Concurrent Mode）和 Suspense？
**回答要点：**
- R3F 完全兼容并发特性。`<Canvas>` 内部使用的渲染器支持 React 18 的并发渲染，可以在更新时中断和恢复。
- **Suspense** 是加载 3D 资源的首选方式：通过 `useLoader` 抛出的 Promise，Suspanse 捕获并显示 fallback。
- 你可以轻松实现“模型加载时显示进度条或占位符”：
  ```jsx
  <Suspense fallback={<Loading />}>
    <Model url="/car.glb" />
  </Suspense>
  ```
- 并发模式使得复杂的 3D 场景交互更加流畅，高优先级的更新可以中断正在进行的低优先级渲染。

**进阶点：**  
由于 3D 场景的渲染本身发生在 RAF 循环，React 的并发更新能与渲染循环无缝配合，不会造成卡顿。例如鼠标交互可触发高优先级更新，而模型几何体的批量更新可作为低优先级过渡。

---

### 11. 如何进行性能优化？列举在 R3F 项目中的最佳实践。
**回答要点：**
1. **减少绘制调用**：使用 `<InstancedMesh>` 批量渲染大量相同几何体。
2. **按需渲染**：保持默认 `frameloop="demand"`，静止时零开销；仅需要持续动画的局部组件设 `frameloop="always"`。
3. **几何体与纹理复用**：使用 `useMemo` 缓存几何体和材质，避免重复创建；纹理尽可能使用压缩格式和合理分辨率。
4. **避免内联函数和对象**：尤其是往 `<mesh>` 传递 `onClick={()=>{...}}` 会每次都创建新回调，导致 props 对比失效。使用 `useCallback` 稳定引用。
5. **LOD（细节层次）**：根据相机距离切换不同精细度的模型，`drei` 有 `<Detailed>` 组件帮助实现。
6. **对象视锥裁剪**：Three.js 默认开启，但要注意大型场景中把远处物体设为不可见或卸载。
7. **使用 `React.memo`**：对不常变化的 3D 组件包裹，避免因父组件更新而重新协调。
8. **合理使用 `useFrame` 优先级**：将高优先级的连续动画放在较早的优先级回调中。

---

### 12. 解释 R3F 的 “状态穿透” 和 “场景上下文”。`useThree` 和 `React.Context` 如何在 3D 中工作？
**回答要点：**
- R3F 的 `<Canvas>` 创建了一个独立的 React 根，所以**外部的 React Context 无法直接穿透到 Canvas 内部**。需要通过 `createPortal` 或使用 R3F 提供的 `useContextBridge` 将外部上下文桥接进去。
- R3F 内部维护了一系列自身的上下文（场景、相机、渲染器、frameloop 等），`useThree` 就是访问这些内部上下文的快捷方式。
- 你可以在 Canvas 内部自由创建新的 Context，因为它是完整的 React 组件树。

**常见陷阱：**  
如果你在 App 中使用了 Redux 或 ThemeContext，并想在 3D 场景内访问，必须明确桥接：
```jsx
import { useContextBridge } from '@react-three/drei'
const ContextBridge = useContextBridge(ThemeContext, StoreContext)
<Canvas>
  <ContextBridge>
    <YourScene />
  </ContextBridge>
</Canvas>
```

---
 
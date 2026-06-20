# Three.js 基础

> 目标：30 秒快速回忆 Three.js 的核心知识体系

---


## Three.js 的本质

```text
Scene
  ↓
Camera
  ↓
Renderer
  ↓
Canvas
```

可以理解成：

```text
世界
 ↓
眼睛
 ↓
画家
 ↓
屏幕
```

---

## 最核心对象关系

```text
Mesh
 ├─ Geometry
 └─ Material
```

即：

```javascript
const mesh = new THREE.Mesh(
  geometry,
  material
)
```

例如：

```javascript
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial()
)
```

---

## 场景结构

```text
Scene
├── Camera
├── Light
├── Mesh
├── Mesh
└── Mesh
```

所有对象最终都：

```javascript
scene.add(...)
```

---

# ② 核心框架图

## 最小运行模板

```javascript
const scene = new THREE.Scene()

const camera =
new THREE.PerspectiveCamera(
  75,
  width / height,
  0.1,
  1000
)

const renderer =
new THREE.WebGLRenderer()

renderer.setSize(width,height)

document.body.appendChild(
  renderer.domElement
)

renderer.render(scene,camera)
```

---

## 动画模板

```javascript
function animate(){

 requestAnimationFrame(animate)

 renderer.render(
   scene,
   camera
 )

}

animate()
```

记忆：

```text
requestAnimationFrame
=
游戏循环
```

---

# ③ 最重要对象

## Geometry（形状）

常用 90%

```javascript
BoxGeometry
SphereGeometry
PlaneGeometry
CylinderGeometry
ConeGeometry
```

---

## Material（材质）

### 调试

```javascript
MeshBasicMaterial
```

不受光照影响

---

### 项目开发

```javascript
MeshStandardMaterial
```

受光照影响

最常用

---

## Light（灯光）

### 环境光

```javascript
AmbientLight
```

整体变亮

---

### 平行光

```javascript
DirectionalLight
```

模拟太阳

最常用

---

### 点光源

```javascript
PointLight
```

模拟灯泡

---

# ④ 必须记住的位置系统

Three.js 使用：

```text
右手坐标系
```

```text
       Y
       ↑

       |
       |

       |
       O ------→ X

     /
   /
 Z
```

---

## 常用方向

```javascript
x += 1
```

向右

---

```javascript
x -= 1
```

向左

---

```javascript
y += 1
```

向上

---

```javascript
y -= 1
```

向下

---

```javascript
z += 1
```

靠近你

---

```javascript
z -= 1
```

远离你

---

# ⑤ 必记属性

## 位置

```javascript
mesh.position.x
mesh.position.y
mesh.position.z
```

---

## 旋转

```javascript
mesh.rotation.x
mesh.rotation.y
mesh.rotation.z
```

单位：

```text
弧度(rad)
```

---

## 缩放

```javascript
mesh.scale.x
mesh.scale.y
mesh.scale.z
```

---

## 快捷写法

```javascript
mesh.position.set(1,2,3)

mesh.rotation.set(0,1,0)

mesh.scale.set(2,2,2)
```

---

# ⑥ 常用工具库

## 相机控制

```javascript
OrbitControls
```

功能：

```text
旋转
缩放
平移
```

导入：

```javascript
import { OrbitControls }
```

---

## 模型加载

```javascript
GLTFLoader
```

现代项目标准

支持：

```text
glb
gltf
```

---

## 射线检测

```javascript
Raycaster
```

功能：

```text
点击
选中
悬停
```

---

# ⑦ 常见错误（高频）

## 错误1

模型看不见

检查：

```javascript
camera.position.z
```

---

## 错误2

没渲染

检查：

```javascript
renderer.render(
 scene,
 camera
)
```

---

## 错误3

模型加载成功但黑色

检查：

```javascript
Light
```

是否添加灯光

---

## 错误4

OrbitControls 不生效

检查：

```javascript
controls.update()
```

---

## 错误5

窗口缩放后画面变形

记得：

```javascript
camera.aspect =
 width / height

camera.updateProjectionMatrix()

renderer.setSize(
 width,
 height
)
```

---

# ⑧ 必须记住的方法

## 添加对象

```javascript
scene.add(mesh)
```

---

## 删除对象

```javascript
scene.remove(mesh)
```

---

## 查找对象

```javascript
scene.getObjectByName()
```

---

## 设置位置

```javascript
mesh.position.set()
```

---

## 设置旋转

```javascript
mesh.rotation.set()
```

---

## 设置缩放

```javascript
mesh.scale.set()
```

---

## 加载模型

```javascript
loader.load()
```

---

# ⑨ 学习顺序（正确路线）

```text
Scene
 ↓
Camera
 ↓
Renderer
 ↓
Mesh
 ↓
Geometry
 ↓
Material
 ↓
Light
 ↓
Animation
 ↓
OrbitControls
 ↓
GLTFLoader
 ↓
Raycaster
 ↓
项目实战
```

不要反过来学。

---

# ⑩ 30秒速查区（面试前必看）

## Three.js核心公式

```text
Mesh
=
Geometry
+
Material
```

---

## Three.js核心链路

```text
Scene
 ↓
Camera
 ↓
Renderer
```

---

## 动画

```javascript
requestAnimationFrame()
```

---

## 三大灯光

```javascript
AmbientLight
DirectionalLight
PointLight
```

---

## 三大变换

```javascript
position
rotation
scale
```

---

## 三大工具

```javascript
OrbitControls
GLTFLoader
Raycaster
```

---

## 三大高频问题

```text
看不见模型
→ Camera

模型发黑
→ Light

画面变形
→ Aspect
```

---

## 商业项目最常见技术栈

```text
Three.js
+
GLTFLoader
+
OrbitControls
+
Raycaster
+
GSAP（动画）
+
React Three Fiber（进阶）
```

如果你把这张速查表中的每个模块都能脱离文档独立写出一个最小示例，那么已经达到 Three.js 初级开发者的水平，可以开始阅读中大型 3D 展示、数字孪生和产品可视化项目代码。

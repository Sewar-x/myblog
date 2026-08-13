# Three.js 从入门到精通

> 一篇文章掌握 Three.js 核心知识体系，从基础概念到进阶实战

---

## 目录

1. **核心本质：30秒理解 Three.js**
2. **基础概念详解**
3. **快速上手：第一个 3D 场景**
4. **核心 API 详解**
5. **基础原理：画面是如何生成的**
6. **进阶主题**
7. **常见问题与调试**
8. **速查表**

---

## 1. 核心本质：30秒理解 Three.js

### 核心链路

```
Scene（世界）
    ↓
Camera（眼睛）
    ↓
Renderer（画家）
    ↓
Canvas（屏幕）
```

### 核心公式

```
Mesh（网格）= Geometry（几何体）+ Material（材质）
```

### 最小运行模板

```javascript
import * as THREE from 'three';

// 1. 创建场景
const scene = new THREE.Scene();

// 2. 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. 创建物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. 添加灯光
const light = new THREE.AmbientLight(0x404040);
scene.add(light);

// 6. 渲染
renderer.render(scene, camera);
```

---

## 2. 基础概念详解

学 Three.js，就像学拍电影。你需要一个**片场**、一台**摄影机**、一位能**把画面录下来的导演**，以及**演员和灯光**。

### 2.1 场景 (Scene) — 世界舞台

场景是一切物体的容器。你创建的所有立方体、光、模型，都必须添加到这个场景中。

```javascript
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // 设置背景色
```

**场景结构**：

```
Scene
├── Camera
├── Light
├── Mesh
├── Mesh
└── Mesh
```

所有对象最终都通过 `scene.add()` 添加。

---

### 2.2 相机 (Camera) — 你的眼睛

相机决定了你能看到场景的哪一部分。最常用的是**透视相机**（`PerspectiveCamera`），模拟人眼"近大远小"的效果。

```javascript
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
```

**四个关键参数**：

| 参数 | 说明 | 常用值 |
|------|------|--------|
| `fov` | 视野角度 | 45-75 度 |
| `aspect` | 宽高比 | `width / height` |
| `near` | 近裁面 | 0.1 |
| `far` | 远裁面 | 1000 |

**重要**：只有离相机在 `near` 和 `far` 距离区间内的物体才可见，太近或太远都会被"裁剪"掉。

**透视相机 vs 正交相机**：

| 类型 | 特点 | 适用场景 |
|------|------|----------|
| `PerspectiveCamera` | 近大远小 | 3D 场景、游戏 |
| `OrthographicCamera` | 无透视 | 2D UI、工程制图 |

---

### 2.3 渲染器 (Renderer) — 神奇的画笔

渲染器负责计算相机视角下，场景中的物体应该如何在屏幕上绘制出来。`WebGLRenderer` 使用浏览器的 WebGL 能力，调动显卡进行超高速渲染。

```javascript
const renderer = new THREE.WebGLRenderer({ antialias: true }); // 开启抗锯齿
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 限制像素比
document.body.appendChild(renderer.domElement);
```

---

### 2.4 网格 (Mesh) — 最终的表演者

在 Three.js 里，你看到的每个物体几乎都是 **Mesh**。

```javascript
const mesh = new THREE.Mesh(geometry, material);
```

**组成**：
- **几何体 (Geometry)**：物体的骨架、形状
- **材质 (Material)**：物体的皮肤、外观

---

### 2.5 光照 (Light) — 没有光，你将一无所见

没有光，使用高级材质的物体将一片漆黑。

**四大光源**：

| 光源 | 特点 | 适用场景 |
|------|------|----------|
| `AmbientLight` | 整体提亮，无阴影 | 铺底光 |
| `DirectionalLight` | 平行光，像太阳 | 模拟太阳光 |
| `PointLight` | 向四周发散 | 模拟灯泡 |
| `SpotLight` | 锥形光束 | 舞台追光灯 |

```javascript
// 环境光
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 点光源
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(2, 2, 2);
scene.add(pointLight);
```

---

## 3. 快速上手：第一个 3D 场景

### 3.1 项目初始化

最简单的方式是通过 `importmap`，无需构建工具：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个 Three.js 场景</title>
  <style>
    body { margin: 0; overflow: hidden; }
  </style>
</head>
<body>
  <script type="importmap">
    {
      "imports": {
        "three": "https://unpkg.com/three@0.160.0/build/three.module.js"
      }
    }
  </script>
  <script type="module">
    import * as THREE from 'three';
    // 代码写在这里
  </script>
</body>
</html>
```

---

### 3.2 创建旋转立方体

```javascript
import * as THREE from 'three';

// 1. 场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

// 2. 相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. 创建立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. 添加灯光
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(2, 2, 2);
scene.add(pointLight);

// 6. 动画循环
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
```

---

### 3.3 动画循环

```javascript
function animate() {
  requestAnimationFrame(animate); // 浏览器自带的循环，每秒约60次

  // 更新物体状态
  mesh.rotation.x += 0.01;

  // 渲染一帧
  renderer.render(scene, camera);
}

animate();
```

**记忆**：`requestAnimationFrame` = 游戏循环

---

## 4. 核心 API 详解

### 4.1 几何体 (Geometry)

Three.js 内置了几十种几何体：

**常用几何体（覆盖 90% 场景）**：

| 几何体 | 说明 | 示例 |
|--------|------|------|
| `BoxGeometry` | 立方体 | `new THREE.BoxGeometry(1, 1, 1)` |
| `SphereGeometry` | 球体 | `new THREE.SphereGeometry(1, 32, 32)` |
| `PlaneGeometry` | 平面 | `new THREE.PlaneGeometry(10, 10)` |
| `CylinderGeometry` | 圆柱/圆锥 | `new THREE.CylinderGeometry(1, 1, 2)` |
| `ConeGeometry` | 圆锥 | `new THREE.ConeGeometry(1, 2)` |
| `TorusGeometry` | 甜甜圈 | `new THREE.TorusGeometry(1, 0.3)` |

**核心：BufferGeometry**

`BufferGeometry` 是最核心的自定义几何体，你可以手动定义顶点位置、法线、UV 等：

```javascript
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array([
  0, 0, 0,  // 顶点1
  1, 0, 0,  // 顶点2
  0, 1, 0   // 顶点3
]);
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
```

---

### 4.2 材质 (Material)

材质决定了物体如何与光互动。

**常用材质**：

| 材质 | 特点 | 适用场景 |
|------|------|----------|
| `MeshBasicMaterial` | 不受光照影响 | UI、天空球、调试 |
| `MeshStandardMaterial` | PBR 渲染，最真实 | 项目开发首选 |
| `MeshPhongMaterial` | 有高光，性能好 | 经典渲染 |
| `MeshToonMaterial` | 卡通风格 | 动漫风格 |
| `MeshNormalMaterial` | 法线映射到颜色 | 调试 |

```javascript
// 基础材质（不受光照影响）
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// PBR 材质（项目开发最常用）
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  roughness: 0.3,   // 粗糙度 0-1
  metalness: 0.8    // 金属度 0-1
});
```

---

### 4.3 变换属性

每个 `Object3D`（包括 Mesh、Camera 等）都有三个核心变换属性：

```javascript
// 位置
mesh.position.x = 1;
mesh.position.y = 2;
mesh.position.z = 3;
mesh.position.set(1, 2, 3); // 快捷写法

// 旋转（弧度制）
mesh.rotation.x = Math.PI / 4;
mesh.rotation.set(0, Math.PI / 2, 0);

// 缩放
mesh.scale.x = 2;
mesh.scale.set(2, 2, 2);
```

**注意**：旋转单位是**弧度**，不是角度。

---

### 4.4 坐标系

Three.js 使用**右手坐标系**：

```
       Y (绿)
       ↑
       |
       |
       |
       O ------→ X (红)
     /
   /
 Z (蓝)
```

**右手定则**：伸出右手，食指指向上方 (+Y)，中指弯向手心 (+Z)，大拇指指向右方 (+X)。

**常用方向**：

| 操作 | 方向 |
|------|------|
| `x += 1` | 向右 |
| `x -= 1` | 向左 |
| `y += 1` | 向上 |
| `y -= 1` | 向下 |
| `z += 1` | 靠近你 |
| `z -= 1` | 远离你 |

---

## 5. 基础原理：画面是如何生成的

### 5.1 变换矩阵

当你修改 `mesh.position`、`rotation`、`scale` 时，Three.js 内部会实时计算出一个 **4x4 的模型矩阵**。这个矩阵可以把物体从它自己的"本地坐标系"变换到"世界坐标系"。

**层级变换**：把小球放在旋转的大球里，小球会跟着转。

---

### 5.2 投影

相机内部有一个**投影矩阵**，将相机视锥体内的 3D 坐标转换为标准化的 2D 坐标（NDC），最终映射到屏幕上。

- **透视相机**：近大远小
- **正交相机**：无透视，平行投影

---

### 5.3 渲染流水线

GPU 执行渲染的大致流程：

```
顶点处理 → 图元装配 → 光栅化 → 片元处理
```

1. **顶点处理**：计算顶点在屏幕上的位置
2. **图元装配与光栅化**：将顶点拼成三角形，计算覆盖的像素
3. **片元处理**：根据材质、纹理、光照计算每个像素的最终颜色

---

## 6. 进阶主题

### 6.1 纹理贴图

纹理是赋予物体细节的最强工具：

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path/to/image.jpg');

const material = new THREE.MeshStandardMaterial({
  map: texture,           // 颜色贴图
  normalMap: normalMap,   // 法线贴图（模拟凹凸）
  roughnessMap: roughMap, // 粗糙度贴图
  metalnessMap: metalMap, // 金属度贴图
  aoMap: aoMap            // 环境遮挡贴图
});
```

---

### 6.2 光照与阴影

阴影是现代 3D 场景的必需品：

```javascript
// 1. 渲染器启用阴影
renderer.shadowMap.enabled = true;

// 2. 光源投射阴影
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;

// 3. 物体投射和接收阴影
cube.castShadow = true;      // 产生影子
floor.receiveShadow = true;  // 接收影子
```

---

### 6.3 粒子系统

粒子是成千上万个微小的面，共享同一个几何体和材质，性能极高：

```javascript
const geometry = new THREE.BufferGeometry();
const count = 5000;
const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i += 3) {
  positions[i] = (Math.random() - 0.5) * 200;
  positions[i + 1] = (Math.random() - 0.5) * 200;
  positions[i + 2] = (Math.random() - 0.5) * 200;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  size: 0.5,
  color: 0xffffff,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);
```

---

### 6.4 加载外部 3D 模型

使用 **glTF 格式**（.glb 或 .gltf），这是 3D 界的 JPEG：

```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('path/to/model.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
});
```

---

### 6.5 性能优化

3D 网页，帧率就是生命线：

| 优化方法 | 说明 |
|----------|------|
| 几何体复用 | 使用 `InstancedMesh` |
| 纹理尺寸合理 | 使用 2 的幂次方（512, 1024, 2048） |
| 减少 Draw Calls | 合并几何体、使用 `InstancedMesh` |
| 共享材质 | 多个物体使用同一个材质引用 |
| 合理使用 LOD | 近处高模，远处低模 |
| 阴影要克制 | 只让必要的灯产生阴影 |

---

### 6.6 响应式设计

窗口大小改变时，相机和渲染器必须同步更新：

```javascript
window.addEventListener('resize', () => {
  // 更新相机宽高比
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // 更新渲染器大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
```

---

### 6.7 后期处理

使用 EffectComposer 实现泛光、景深等效果：

```javascript
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, 0.4, 0.85
);
composer.addPass(bloomPass);

// 在动画循环中使用 composer.render() 替代 renderer.render()
```

---

## 7. 常见问题与调试

### 问题 1：模型看不见

**检查**：
```javascript
camera.position.z = 5; // 相机位置是否正确
```

---

### 问题 2：没渲染

**检查**：
```javascript
renderer.render(scene, camera); // 是否调用渲染
```

---

### 问题 3：模型加载成功但黑色

**检查**：是否添加了灯光

```javascript
scene.add(new THREE.AmbientLight(0x404040));
```

---

### 问题 4：OrbitControls 不生效

**检查**：
```javascript
controls.update(); // 是否在动画循环中调用
```

---

### 问题 5：窗口缩放后画面变形

**解决**：
```javascript
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

---

## 8. 速查表

### 核心公式

```
Mesh = Geometry + Material
```

### 核心链路

```
Scene → Camera → Renderer
```

### 动画

```javascript
requestAnimationFrame()
```

### 三大灯光

```javascript
AmbientLight      // 环境光
DirectionalLight  // 平行光
PointLight        // 点光源
```

### 三大变换

```javascript
position   // 位置
rotation   // 旋转
scale      // 缩放
```

### 三大工具

```javascript
OrbitControls  // 相机控制
GLTFLoader     // 模型加载
Raycaster      // 射线检测
```

### 三大高频问题

| 问题 | 解决 |
|------|------|
| 看不见模型 | 检查 Camera 位置 |
| 模型发黑 | 添加 Light |
| 画面变形 | 更新 Aspect |

### 商业项目技术栈

```
Three.js + GLTFLoader + OrbitControls + Raycaster + GSAP + React Three Fiber
```

---

## 学习路线

```
Scene → Camera → Renderer → Mesh → Geometry → Material → Light
    ↓
Animation → OrbitControls → GLTFLoader → Raycaster
    ↓
项目实战
```

---

如果你能把这篇文章中的每个模块都脱离文档独立写出一个最小示例，那么已经达到 Three.js 初级开发者的水平，可以开始阅读中大型 3D 展示、数字孪生和产品可视化项目代码。

# threejs 入门

## 📖 目录

1.  **基础概念：打破次元壁，三要素与万物**
    - 场景 (Scene)：你的世界舞台
    - 相机 (Camera)：你的眼睛
    - 渲染器 (Renderer)：神奇的画笔
    - 万物皆对象：几何体 + 材质 = 网格
    - 光的艺术：没有光，你将一无所见
2.  **基础使用方式：搭好你的第一个 3D 乐高**
    - 项目初始化：像搭积木一样引入 Three.js
    - 创建三要素：舞台、眼睛、画笔
    - 添加物体：做一个旋转的立方体
    - 动画循环：让世界动起来
3.  **基础 API 巡礼：你的魔法咒语书**
    - 几何体 (Geometry)：搭建万物的积木块
    - 材质 (Material)：给灵魂穿上外衣
    - 网格 (Mesh)：最终的表演者
    - 灯光 (Light)：点石成金的技巧
4.  **基础原理：画面是如何生成的？**
    - 坐标系：三维空间的秩序
    - 变换矩阵：物体的隐身、缩放与腾挪
    - 投影：把 3D 世界“压扁”到屏幕上
    - 渲染流水线一瞥：GPU 的魔法工厂
5.  **深入重点难点：从小白到准高手**
    - 纹理贴图：让物体“活”起来
    - 光照与阴影：氛围感的终极来源
    - 粒子系统：创造万千星辰与飞雪
    - 加载外部 3D 模型：导入你的 Blender 大作
    - 性能优化：丝滑体验的不二法门
    - 响应式设计：在全屏与手机上完美呈现
    - 后期处理：一键开启电影级滤镜

---

## 1. 基础概念：打破次元壁，三要素与万物

学 Three.js，就像学拍电影。你需要一个**片场**、一台**摄影机**、一位能**把画面录下来的导演**，以及**演员和灯光**。

### 场景 (Scene) — 你的世界舞台
它是一切物体的容器。你创建的所有立方体、光、模型，都必须添加到这个场景中，否则它们将存在于虚无里。
```javascript
const scene = new THREE.Scene();
```

### 相机 (Camera) — 你的眼睛
它决定了你能看到场景的哪一部分。最常用的是**透视相机**（`PerspectiveCamera`），模拟人眼“近大远小”的效果。
- **视野角度 (FOV)**：你眼睛的开阔度，通常 45-75 度。
- **宽高比 (Aspect Ratio)**：画面宽除以高。
- **近裁面 (Near) 与远裁面 (Far)**：只有离相机在这个距离区间内的物体才可见，太近或太远都会被“裁剪”掉，这是为了性能。

### 渲染器 (Renderer) — 神奇的画笔
它负责计算相机视角下，场景中的物体应该如何在屏幕上绘制出来。`WebGLRenderer` 使用浏览器的 WebGL 能力，调动你的显卡进行超高速渲染。
```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 铺满全屏
document.body.appendChild(renderer.domElement); // 把画布塞到网页里
```

### 万物皆对象：几何体 + 材质 = 网格 (Mesh)
在 Three.js 里，你看到的每个物体几乎都是 **Mesh**。
- **几何体 (Geometry)**：物体的骨架、形状。比如 `BoxGeometry`（方块）、`SphereGeometry`（球）。
- **材质 (Material)**：物体的皮肤、外观。比如 `MeshBasicMaterial`（不受光影响的基本颜色）、`MeshStandardMaterial`（基于物理的渲染，最真实）。
- **网格 (Mesh)**：骨架+皮肤组合成的最终演员。

### 光的艺术
没有光，使用高级材质的物体将一片漆黑。
- **环境光 (AmbientLight)**：给场景整体提亮，模拟漫反射，无法产生阴影。
- **平行光 (DirectionalLight)**：像太阳，无限远，一个方向，能产生清晰的阴影。
- **点光源 (PointLight)**：像灯泡，向四周发散。
- **聚光灯 (SpotLight)**：像舞台追光灯，一个锥形区域。

理解了这些，你已经掌握了搭建 3D 世界的乐高基础。

---

## 2. 基础使用方式：搭好你的第一个 3D 乐高

不磨蹭，我们来写一个“Hello World”立方体。

### 步骤 1：项目初始化
最简单的方式是通过 `importmap`，无需构建工具，一个 HTML 文件搞定。
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
    // 我们的代码将写在这里
  </script>
</body>
</html>
```

### 步骤 2：创建三要素并添加物体
在 `<script type="module">` 内部写入：

```javascript
import * as THREE from 'three';

// 1. 场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // 天蓝色背景

// 2. 透视相机：视野75度，宽高比根据窗口，近裁面0.1，远裁面1000
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // 把相机往后挪，才能看到原点处的物体

// 3. 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true }); // 开启抗锯齿
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. 创建几何体 + 材质 = 网格
const geometry = new THREE.BoxGeometry(1, 1, 1); // 长宽高为1的立方体
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 }); // 珊瑚橙色，需要光照
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. 添加一个环境光和一个点光源，不然立方体是黑的
const ambientLight = new THREE.AmbientLight(0x404040); // 柔和的灰色环境光
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1, 100); // 白光，强度1，距离100
pointLight.position.set(2, 2, 2);
scene.add(pointLight);
```

### 步骤 3：动画循环
为了让立方体动起来，我们需要一个无限循环，不断重新绘制画面。
```javascript
function animate() {
  requestAnimationFrame(animate); // 浏览器自带的循环，每秒约60次

  // 让立方体旋转起来
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // 用相机和场景渲染一帧
  renderer.render(scene, camera);
}

animate();
```
保存文件，用浏览器打开。一个缓慢旋转的珊瑚色立方体出现了！恭喜你，你已是一个 Three.js 开发者。

---

## 3. 基础 API 巡礼：你的魔法咒语书

上面这段代码里，你已经不经意间使用了最核心的 API。我们来系统性地认识它们。

### 几何体 (Geometries)
Three.js 内置了几十种几何体，你几乎可以组合出任何形状。
- `BoxGeometry(w, h, d)` - 立方体
- `SphereGeometry(radius, segments, rings)` - 球体。段数越多越圆滑，但性能消耗越大。
- `PlaneGeometry(w, h)` - 平面
- `CylinderGeometry(radiusTop, radiusBottom, height)` - 圆柱/圆锥
- `TorusGeometry(radius, tubeRadius)` - 甜甜圈
- `BufferGeometry` - **最核心的自定义几何体**，你可以手动定义顶点位置、法线、UV等，这是你未来捏造任意形状的基础。

### 材质 (Materials)
材质决定了物体如何与光互动。
- `MeshBasicMaterial` - 无视光照，始终显示颜色/贴图，适合做 UI、天空球。
- `MeshStandardMaterial` - **基于物理的渲染 (PBR)**，支持粗糙度、金属度，效果最真实。
- `MeshPhongMaterial` - 经典的 Blinn-Phong 模型，有高光，比 Standard 更便宜。
- `MeshToonMaterial` - 卡通/动漫风格，带二级色阶。
- `MeshNormalMaterial` - 把法线映射到 RGB 颜色，用于调试。

### 灯光 (Lights)
- `AmbientLight(color, intensity)` - 铺底光。
- `DirectionalLight(color, intensity)` - 模拟太阳。
- `PointLight(color, intensity, distance)` - 模拟灯泡。
- `SpotLight(color, intensity, distance, angle, penumbra)` - 聚光灯，`angle`是光锥角，`penumbra`是边缘软化度。
- `HemisphereLight(skyColor, groundColor, intensity)` - 模拟天空和地面的自然光散射。

### 变换属性
每个 `Object3D`（包括 Mesh, Camera 等）都有三个核心变换属性：
- `position` (x, y, z)：平移
- `rotation` (x, y, z)：旋转，弧度制。注意顺序是 ‘YXZ’，默认可能不符合直觉。
- `scale` (x, y, z)：缩放，1 为原始大小。
- 还有一个 `quaternion`，是旋转的另一种高级表示，能避免万向节锁死。

### 还有几个你马上会用到的 API：
- `scene.add(child)` / `scene.remove(child)`：管理对象。
- `renderer.render(scene, camera)`：执行一次渲染。
- `window.addEventListener('resize', onResize)`：处理窗口尺寸变化。

---

## 4. 基础原理：画面是如何生成的？

知其然，也要知其所以然。Three.js 帮你隐藏了底层 WebGL 的狰狞面目，但理解原理会让你在遇到 Bug 时不至于抓瞎。

### 坐标系：右手定则
Three.js 默认使用**右手坐标系**。
伸出你的右手，食指指向前方 (+Y)，中指弯向手心 (+Z)，大拇指指向右方 (+X)。这就是标准朝向。
- X 轴：红色，向右
- Y 轴：绿色，向上
- Z 轴：蓝色，朝向屏幕前的你

记住这个，物体移动、相机摆放才不会迷路。

### 变换矩阵：物体的隐身术
当你修改 `cube.position`、`rotation`、`scale` 时，Three.js 内部会实时计算出一个 **4x4 的模型矩阵**。这个矩阵可以把物体从它自己的“本地坐标系”变换到“世界坐标系”。你通常不需要直接操作矩阵，但知道它的存在，有助于理解层级的变换累积（比如把小球放在旋转的大球里，小球跟着转）。

### 投影：把 3D 压成 2D
相机内部有一个**投影矩阵**。它将相机视锥体内的 3D 坐标，通过数学运算，转换为一个标准化的 2D 方盒坐标（NDC）。最终，这些坐标被映射到你的屏幕上。透视相机产生近大远小，正交相机（OrthographicCamera）则无透视，多用于工程制图或 UI。

### 渲染流水线一瞥
GPU 执行渲染的大致流程：
1.  **顶点处理**：把物体的每个顶点坐标，乘上模型矩阵、视图矩阵、投影矩阵，算出它在屏幕上的位置。
2.  **图元装配与光栅化**：把三个顶点拼成三角形，并计算出这个三角形覆盖了屏幕上哪些像素。
3.  **片元处理（像素着色）**：对于三角形内的每一个像素，根据材质、纹理、光照等，计算它最终的颜色。**这就是材质的 Shader 代码发挥作用的地方。**

Three.js 内置了基于物理的渲染 Shader，但如果你想实现水流、熔岩等特效，就可以通过 `ShaderMaterial` 自己编写顶点和片元着色器，那是通往大神的路。

---

## 5. 深入重点难点：从小白到准高手

好了，基础已经牢靠。让我们挑战那些真正让你的作品出彩的高级主题。

### 🎨 纹理贴图：让物体“活”起来
一个单色立方体太无聊了。纹理是赋予物体细节的最强工具。
```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('path/to/your/image.jpg');

const material = new THREE.MeshStandardMaterial({
  map: texture, // 颜色贴图
  roughness: 0.3,
  metalness: 0.8
});
```
**进阶：**
- **法线贴图 (normalMap)**：在不增加几何体面的情况下模拟凹凸细节。
- **粗糙度贴图 (roughnessMap)**：用黑白图控制哪里光滑哪里粗糙。
- **金属度贴图 (metalnessMap)**：控制哪里是金属。
- **环境遮挡贴图 (aoMap)**：增加角落的暗部细节。
- 使用这些贴图，一块简单的平面就能变成一面充满划痕的逼真金属墙。

### ☀️ 光照与阴影：氛围感的终极来源
阴影是现代 3D 场景的必需品。要实现它，需要三步：
1.  **渲染器启用阴影**：
    ```javascript
    renderer.shadowMap.enabled = true;
    ```
2.  **光源投射阴影**（只有 `DirectionalLight`, `SpotLight`, `PointLight` 可以）：
    ```javascript
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 1024; // 阴影贴图分辨率
    pointLight.shadow.mapSize.height = 1024;
    pointLight.shadow.camera.near = 0.5; // 调整阴影相机的参数
    ```
3.  **物体投射和接收阴影**：
    ```javascript
    cube.castShadow = true;   // 它要产生影子
    floor.receiveShadow = true; // 地面要接收影子
    ```

**痛点**：阴影调试很痛苦。经常出现模型破碎、漏光。这时要调整光源的阴影相机的 `near`、`far`、`left`、`right`，尽量包紧模型，避免大范围无谓渲染。

### ✨ 粒子系统：创造万千星辰与飞雪
粒子是成千上万个微小的面，共享同一个几何体和材质，性能极高。
```javascript
const particlesGeometry = new THREE.BufferGeometry();
const count = 5000;
const positions = new Float32Array(count * 3); // 每个粒子 x,y,z

for (let i = 0; i < count * 3; i += 3) {
  positions[i] = (Math.random() - 0.5) * 200;     // x
  positions[i+1] = (Math.random() - 0.5) * 200;   // y
  positions[i+2] = (Math.random() - 0.5) * 200;   // z
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.5,
  color: 0xffffff,
  blending: THREE.AdditiveBlending, // 叠加混合，打造光点效果
  depthWrite: false // 防止遮挡
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);
```
在动画循环里旋转整个粒子系统，或者让粒子下落，就能创造出星空、雨雪或魔法尘埃。

### 📦 加载外部 3D 模型：导入你的 Blender 大作
Three.js 本身只定义了几何体，要展示复杂的 Blender 作品，需要用 **glTF 格式**（.glb 或 .gltf），这是 3D 界的 JPEG。
```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('path/to/model.glb', (gltf) => {
  const model = gltf.scene;
  model.position.set(0, 0, 0);
  scene.add(model);
}, undefined, (error) => {
  console.error('模型加载失败:', error);
});
```
**关键技巧**：
- 在 Blender 中导出时，选择“glTF 2.0”格式，勾选“压缩”和应用“修改器”。
- 加载后，用 `model.traverse((child) => { ... })` 遍历模型的所有子节点，单独调整材质或处理阴影设置。

### ⚡ 性能优化：丝滑体验的不二法门
3D 网页，帧率就是生命线。记住这几点：
1.  **几何体复用**：10 个相同的树？不要加载 10 次，用 `InstancedMesh`。
2.  **纹理尺寸合理**：Web 上用 2K 贴图就够，别上来就 8K。纹理分辨率应一直是 2 的幂次方（512, 1024, 2048）。
3.  **减少 Draw Calls**：这是衡量性能的重要指标。使用 `InstancedMesh`、合并几何体（`BufferGeometryUtils.mergeGeometries`）来降低它。
4.  **共享材质**：多个物体使用同一个材质引用，不要反复创建。
5.  **合理使用 LOD**：近处高模，远处低模。
6.  **阴影要克制**：只让必要的灯产生阴影，并缩小阴影贴图的覆盖范围。

### 📱 响应式设计：在全屏与手机上完美呈现
窗口大小改变时，相机和渲染器必须同步更新。
```javascript
window.addEventListener('resize', () => {
  // 更新相机宽高比
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // 更新渲染器大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 可选：限制设备像素比以节省性能
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
```
注意，`setPixelRatio` 配合移动端高分辨率屏幕很关键，限制为 2 能避免在 3x 屏幕上渲染无意义的巨量像素。

### 🎥 后期处理：一键开启电影级滤镜
想让你的场景瞬间拥有泛光、景深或复古色调？别自己写 Shader，用 EffectComposer。
```javascript
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
composer.addPass(bloomPass);
```
然后在动画循环中，用 `composer.render()` 取代 `renderer.render(scene, camera)`。各种酷炫的屏幕空间效果，信手拈来。

---
 
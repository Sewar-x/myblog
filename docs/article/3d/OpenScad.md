# 从 Three.js 到 OpenSCAD：零基础入门指南  
*——写给前端开发者的程序化实体建模教程*

你好，我是 Three.js 过来的朋友。也许你已经能轻松地在网页里旋转、展示 3D 模型，但想要自己**精确地、参数化地创造模型**时，传统雕刻软件总让你感觉“使不上劲”。这时候，就该 OpenSCAD 出场了。

在这篇博客里，我会把你已经具备的 3D 思维和前端经验，完整迁移到 OpenSCAD 的世界。读完你会知道：

- OpenSCAD 到底是不是“另一种建模软件”
- 如何用代码造出能 3D 打印的实体模型
- 变量、模块、循环这些语法怎么写
- OpenSCAD 和 Three.js 怎样组成“设计 + 展示”的完美工作流

---

## 一、OpenSCAD 是什么？一句话：用代码写 3D 实体的编译器

OpenSCAD 不是那种让你用鼠标拖拽建模的软件。它更像一个**编程语言 + 编译器**：  
你写脚本，描述一堆基本体（方块、球体、圆柱体……）如何移动、旋转、合并、相减；然后点“渲染”，它就会计算出一个精确的水密网格。

它专门为喜欢逻辑控制、参数化设计的人而生。核心思想叫**构造实体几何（CSG）**——所有模型本质上都是“体积的布尔运算结果”。

**典型用途**：3D 打印零件、机械结构设计、参数模型生成、艺术几何探索。

对比一下你熟悉的 Three.js：
- Three.js 关注**网格和表面**：三角形怎么排列、材质怎么贴、灯光怎么打。
- OpenSCAD 关注**体积本身**：这个东西是实心的，我怎么从一个大块上挖出一个小孔。

两者不是替代关系，而是上下级：**OpenSCAD 负责“造物”，Three.js 负责“展示”**。后面我会细说它们怎么配合。

---

## 二、开局必知的四个基础概念

### 2.1 实体，不是空壳
OpenSCAD 的模型永远是**实心闭合的**，就像真实世界的物体一样有体积、有质量。它导出的 STL 文件也都是“水密”的——如果你把模型切开，看到的一定是实心截面，而不是毫无厚度的表面。

### 2.2 坐标系方向不同，要小心
- OpenSCAD：**Z 轴朝上**（右手系，X 右、Y 深、Z 上）
- Three.js：**Y 轴朝上**

当你把 OpenSCAD 的模型导入 Three.js 时，记得绕 X 轴旋转 -90°，否则模型会“躺倒”。  
代码上就是 `model.rotation.x = -Math.PI / 2`。

### 2.3 单位？你自己说了算
OpenSCAD 没有内置单位，数值就是数值。社区约定俗成用**毫米**——比如 `cube(10)` 就当 10mm 的立方体。你心里知道就行，它不影响数学。

### 2.4 预览（F5） vs 渲染（F6）——新手最容易踩的坑
OpenSCAD 有两个关键按钮：
- **预览（F5）**：快速显示一个“近似”的模型，用来看大概样子，**但无法导出**。它是靠显卡 Z-buffer 拼出来的视觉效果。
- **渲染（F6）**：执行真正的布尔运算，生成三角形网格。**只有 F6 完成后，你才能导出 STL / OBJ**。

调试时用 F5 和可视化辅助符号（`#` `%` 等），最后出成品一定要 F6。

### 2.5 曲面精度控制：`$fn`, `$fa`, `$fs`
所有圆柱、球体都是多边形近似。控制分段数有三个系统变量：
- `$fn`：强制分段数（例如 `$fn=100` 生成 100 边形）
- `$fa`：最小角度（默认 12°），保证曲线的视觉平滑度
- `$fs`：最小边长（默认 2mm），防止微小圆弧分段过密

实际分段数由 OpenSCAD 根据这三个值动态计算。跟你 Three.js 里设置 `SphereGeometry(radius, widthSegments, heightSegments)` 一样的意思。

---

## 三、基础语法完全手册

OpenSCAD 的语法风格像 C/JavaScript，但核心是**声明式、函数式**的。我们先来彻底吃透规则。

### 3.1 基本元素：注释、语句、大小写
```openscad
// 这是单行注释

/*
   多行注释
   可以跨行
*/

cube(10);   // 每条语句以分号结尾，大小写敏感（Cube 就不对）
```

### 3.2 变量：更像常量
变量一旦定义就**不可重新赋值**（无副作用，函数式风格）。
```openscad
length = 30;
width  = length * 0.8;   // OK，基于之前的值计算
// length = 40;          // 错误！不能改变 length
```
作用域：在同一个块（`{}`）内有效，内层可访问外层，但不能修改外层。

**特殊系统变量**（全程生效）：
- `$fn` / `$fa` / `$fs`：控制平滑度
- `$t`：动画时间变量（用在 `animate` 模式，0~1 之间）

使用方式：
```openscad
cylinder(h=20, r=5, $fn=6);   // 只影响这个圆柱
```

### 3.3 模块（module）：可复用的几何组件
模块类似函数，但作用是**生成几何体**，可以有参数。
```openscad
module box_with_hole(w=20, h=10, d=5) {
  difference() {
    cube([w, w, h], center=true);
    cylinder(h=h+1, r=d, center=true);
  }
}

box_with_hole(30, 15, 6);   // 位置参数调用
box_with_hole(w=25, d=4);   // 命名参数调用（未传的用默认值）
```

**模块内使用子物体：`children()`**
```openscad
module offset(dy=5) {
  translate([0, dy, 0]) children();   // children() 代表模块调用时传入的所有子物体
}

offset(10) {
  cube(5);
  sphere(3);
}   // 会把立方体和球体都向上平移 10
```
你可以用 `children(index)` 按索引引用第几个子物体（从 0 开始）。

### 3.4 函数（function）：返回数值
函数用 `function` 关键字定义，**只能进行数学计算，不能创建几何体**。
```openscad
function arm_length(base, ratio) = base * ratio + 5;
myLen = arm_length(100, 0.6);   // 65
```
支持递归和条件表达式，但不支持循环（需要递归代替）。

### 3.5 流程控制

**条件分支**
```openscad
if (width > 20) {
  cube(width);
} else {
  sphere(width/2);
}
```
三元运算：`color = (mode == "A") ? "red" : "blue";`

**for 循环** – 编译时展开，不是运行时迭代
```openscad
for (i = [0 : 45 : 360-45]) {   // i 从 0 到 315，步长 45
  rotate([0, 0, i])
    translate([20, 0, 0])
      cylinder(h=10, r=2, $fn=6);
}
// 结果相当于把 rotate+translate+cylinder 这段代码复制了 8 份，i 依次替换
```
也可以遍历数组：
```openscad
positions = [[10,0],[20,10],[0,15]];
for (p = positions) {
  translate([p[0], p[1], 0]) sphere(2);
}
```

### 3.6 外部文件与库
```openscad
include <other_file.scad>    // 直接插入文件内容（像把代码复制过来）
use <library.scad>           // 只导入模块和函数，不执行顶层几何体
```
你可以把自己常用的零件封装成模块文件，用 `use` 导入复用。

### 3.7 调试输出
```openscad
echo("当前宽度", width);
```
可以在控制台打印变量值，调试很方便。

---

## 四、核心建模 API：一切形体皆组合

### 4.1 原始 3D 形状
```openscad
cube([20, 30, 10], center = true);          // 中心定位
sphere(r = 10, $fn = 64);                   // 球体
cylinder(h = 20, r1 = 5, r2 = 10, center = true);  // 圆台（上下半径不同）
polyhedron(                                  // 自定义多面体
  points = [ [0,0,0],[10,0,0],... ],
  faces  = [ [0,1,2,3], ... ]
);
```

### 4.2 原始 2D 形状（配合挤出使用）
```openscad
circle(r = 10, $fn = 6);      // 正六边形
square([30, 20], center = true);
polygon(points = [[0,0],[20,0],[10,20]]);
text("Hi", size = 15, font = "Arial");   // 需要系统中存在的字体
```

### 4.3 变换：移动、旋转、缩放、镜像
```openscad
translate([x, y, z]) { ... }     // 平移
rotate([ax, ay, az]) { ... }    // 分别绕 X、Y、Z 轴旋转（度数）
scale([sx, sy, sz]) { ... }     // 缩放
mirror([1, 0, 0]) { ... }       // 沿 X 轴镜像
multmatrix([[1,0,0,10],[0,1,0,0],[0,0,1,0],[0,0,0,1]]) { ... }   // 直接使用 4x4 变换矩阵（和 Three.js 的 Matrix4 一样）
```
*提醒*：变换作用于整个子节点块，可以嵌套。

**仅预览着色**：`color("red", 0.5) { ... }`，不影响最终模型。

### 4.4 布尔运算：CSG 的灵魂
```openscad
union() {         // 合并（最外层可省略 union）
  cube(10);
  sphere(8);
}

difference() {    // 第一个子物体减去后面所有子物体
  cube(20, center = true);
  cylinder(h = 30, r = 5, center = true);
}

intersection() {  // 取交集
  cube(15);
  sphere(10);
}
```
布尔运算可以嵌套，构建极其复杂的结构。

### 4.5 从 2D 到 3D 的三种方式
```openscad
// 直线挤出（可加扭转和缩放）
linear_extrude(height = 20, twist = 180, scale = 0.5) {
  square(10, center = true);
}

// 旋转挤出（做杯子、甜甜圈等）
rotate_extrude(angle = 270, $fn = 64) {
  translate([15, 0, 0]) circle(5);
}

// 投影：获取 3D 模型在 XY 平面的 2D 截面（用于 CNC 或激光切割）
projection(cut = true) {
  sphere(10);
}
```

### 4.6 高级运算：hull 和 minkowski
```openscad
hull() {
  translate([-15,0,0]) cylinder(h=10, r=5);
  translate([15,0,0]) cylinder(h=10, r=3);
}   // 生成包裹两个圆柱的凸包（像把两个形状用收缩膜包起来）

minkowski() {
  cube(10);
  sphere(1);
}   // 让立方体“膨胀”，产生圆角效果（计算量大，慎用）
```

### 4.7 调试修饰符：看一眼就知道问题在哪
在预览时（F5），这些符号能帮你快速定位物体：
- `#` 高亮并半透明显示（看清被遮挡的剪切部分）
- `%` 透明显示（幽灵模式）
- `!` 只显示当前子物体，隔离视图
- `*` 禁用整个子树（等于注释掉这段几何体）

示例：
```openscad
difference() {
  cube(20, center = true);
  #cylinder(h=30, r=4, center = true);  // 高亮显示“被减去的圆柱”，方便调整位置
}
```

---

## 五、原理揭秘：你的代码如何变成网格

理解内部机制，你能少走很多弯路。

1. **脚本解析** → 生成一棵 CSG 树（节点是立方体、球体、平移、差集等）。
2. **几何评估**：
   - 预览时（F5）：用 OpenCSG 库在图像空间快速模拟布尔结果，基于显卡 Z-buffer，**不产生真实网格**。
   - 渲染时（F6）：调用工业计算几何库 **CGAL**，把基本体转换成精确的 Nef 多面体，执行真正的布尔运算，再三角剖分成普通网格。
3. **三角剖分**：根据 `$fn` 等参数把曲面切成三角面片。
4. **输出 STL**：得到的就是一堆三角形组成的实体外壳。

**常见报错**：“ERROR: The given mesh is not closed!”——说明布尔运算后出现了破损。通常原因是物体刚好边贴边、极小重叠、或分段数不合理。调整位置、加一点重叠余量往往能解决。

**关于循环和变量**：  
OpenSCAD 的 `for` 是在编译时直接把循环体复制多次，变量替换后展开。因此你不能在循环里“累计”修改一个变量——所有的值都是不变的。这种函数式风格保证了 CSG 树无副作用，方便缓存和并行。

渲染一次后，几何结果会缓存。只要脚本没改，再次预览/渲染秒出结果。这对设计迭代十分友好。

---

## 六、OpenSCAD 与 Three.js：从“造物”到“展示”的完美闭环

既然你已经是 Three.js 玩家，这里就是你能发挥最大价值的地方。

### 6.1 经典工作流：OpenSCAD 设计 → Three.js 展示
```
[OpenSCAD 参数化建模] → 导出 STL → [Three.js 加载渲染]
```
你可以在 Three.js 里用 `STLLoader` 加载 `.stl` 文件，并加上材质、灯光、动画、交互。

```javascript
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

const loader = new STLLoader();
loader.load('my_model.stl', (geometry) => {
  // 把 Z 上转换成 Y 上
  geometry.rotateX(-Math.PI / 2);
  
  const mesh = new THREE.Mesh(geometry, 
    new THREE.MeshStandardMaterial({ color: 0x3366cc }));
  scene.add(mesh);
});
```

### 6.2 动态在线定制：命令行 + 网页
许多 3D 打印定制平台就是这么干的：用户在网页调参数，后端调用 OpenSCAD 命令生成模型。
```bash
openscad -D "length=50" -D "width=30" -D "height=20" -o output.stl model.scad
```
Node.js 服务器接收参数，执行这个命令，把生成的 STL 返回前端。Three.js 拿到数据流就能实时预览。

### 6.3 OpenJSCAD：把 OpenSCAD 思维搬进浏览器
如果你想让用户直接在网页里写类 OpenSCAD 代码并看到 Three.js 渲染，用 **OpenJSCAD**。它用 JavaScript 写成，CSG 引擎基于 `csg.js`，渲染层可用 Three.js。  
这样你就能完全抛弃后端，在浏览器里实现“输入代码 → 立即出模型”的体验。

### 6.4 不要在 Three.js 里直接做布尔运算（除非你知道代价）
社区有一些库（three-csg、three-mesh-bvh）支持网格级布尔运算，但它们是基于边界表示的，处理复杂模型容易产生破面、非流形网格，性能也不稳定。  
**工程零件建议 OpenSCAD/OpenJSCAD 产出**，Three.js 专心做漂亮渲染。

---

## 七、学习路线图 
1. **Day 1：环境 + 第一个程序**  
   安装 OpenSCAD → 写一个带孔的方块 → 熟悉 F5 / F6 → 导出 STL → 用 Three.js 加载出来并旋转查看。

2. **Day 2：参数化铅笔筒**  
   做一个可调整高度、壁厚、底部开孔的笔筒。体验 `module` 和变量结合的感觉。

3. **Day 3：理解精度**  
   修改 `$fn`，观察球体从“圆”到“多边形”的变化，理解 F6 三角剖分的差别。

4. **Day 4：动态生成小项目**  
   用 Node.js 写一个简单的服务，接收参数，调 OpenSCAD 生成 STL，返回给前端 Three.js 展示。

5. **Day 5：接触 OpenJSCAD**  
   试着把简单的 OpenSCAD 逻辑翻译成 OpenJSCAD，放到网页里直接跑。

---

 
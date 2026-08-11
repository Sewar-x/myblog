# XC-HMI 源码导读

> 本文面向第一次接手项目的开发者。内容仅根据当前源码、构建配置、依赖清单和测试得出，没有引用仓库中已有的说明文档。
>
> 分析基线：`package.json` 版本 `1.8.7`，源码状态截至 2026-07-31。

## 1. 项目是什么

这个仓库构建的是一套桌面端激光加工软件，产品名为 **MXC**。它并不只是一个“设备控制面板”，而是把以下能力放进了同一个 Electron 应用：

- 本地工程的新建、打开、保存、导入和导出；
- 基于 Fabric.js 的二维排版与图形编辑；
- 文本、位图、矢量、条码、二维码等对象编辑；
- 图层、颜色分层、阵列、编组、布尔合并、偏移路径、智能排版；
- 位图滤镜、抠图、扩图、擦除、描摹等图像处理；
- 平面、旋转轴、曲面、浮雕等加工模式及参数配置；
- USB、Wi-Fi STA、Wi-Fi AP 和模拟设备连接；
- 加工数据预处理、G-code 生成、路径预览和设备下发；
- 自动对焦/厚度测量、刷新背景、曲面测量、走边框；
- 材料库、设备库、账号、AI 绘图/AI 助手、OTA 和应用升级。

从代码体量看，项目核心是编辑和加工域：`src/renderer/src/view/edit` 约有 413 个源码文件、7.4 万行代码。主进程约 5 千行，其他页面和公共业务层相对较小。

## 2. 技术栈

| 领域      | 当前实现                                                |
| --------- | ------------------------------------------------------- |
| 桌面容器  | Electron 41、electron-vite 5、electron-builder          |
| 前端      | Vue 3.5、Vue Router 4、Pinia 2                          |
| UI        | Arco Design Vue、Element Plus，少量自研组件             |
| 画布      | Fabric.js 5.5，配合 Paper.js、Clipper、SVG Path 工具    |
| 图像/字体 | OpenCV、ImageTracer、OpenType.js、PNGJS                 |
| 3D        | Three.js，主要用于曲面测量预览                          |
| 设备通信  | serialport、Node `net.Socket`、node-wifi、Web Bluetooth |
| 网络      | Axios、Fetch/SSE、阿里云 OSS、FTP                       |
| G-code    | 私有包 `@xc/gcode-builder`                              |
| 测试      | Vitest、happy-dom、Vue Test Utils                       |
| 工程化    | TypeScript 5.7、ESLint 9、Prettier、Husky、Commitlint   |

运行时要求由 `package.json` 固定为 Node.js `>=20.19.0` 和 pnpm `9.15.9`。

## 3. 总体架构

项目是典型的 Electron 三层结构，但窗口组织方式比常规 Electron 应用复杂：

```text
┌──────────────────────── Electron Main ────────────────────────┐
│ 应用生命周期 / 窗口 / WebContentsView / IPC / 文件系统        │
│ USB 串口 / Wi-Fi Socket / G-code / FTP / OTA / 自动更新        │
└───────────────┬───────────────────────────────┬───────────────┘
                │ preload bridge                │ IPC event/invoke
┌───────────────▼───────────────────────────────▼───────────────┐
│ Preload                                                        │
│ window.electronCustom：view、usb、wifi、socket、FileSystem...   │
└───────────────┬───────────────────────────────────────────────┘
                │
┌───────────────▼──────────── Renderer（多实例）────────────────┐
│ chrome View：全局顶栏和工作区标签                              │
│ home View：工程首页                                            │
│ edit View × N：每个标签一个独立 Vue 应用和 OwlEditor 实例       │
│ modal View：跨 View 的全屏模态层                                │
│ AI BrowserWindow：独立、透明、可拖动的 AI 助手窗口              │
└───────────────────────────────────────────────────────────────┘
```

### 3.1 进程职责

**主进程 `src/main`**

负责只能或适合在 Node/Electron 环境完成的工作：

- 创建主窗口、子 View 和 AI 助手窗口；
- 注册 IPC；
- 管理串口、Socket 和 Wi-Fi；
- 访问本地文件、项目目录和静态材料配置；
- 调用 G-code builder 并维护任务目录；
- FTP、OTA、应用升级、系统休眠控制和全局快捷键。

**预加载层 `src/preload`**

把底层 IPC 包装成 `window.electronCustom`。渲染层不应该直接散落使用 `ipcRenderer`，新代码应优先从 `src/renderer/src/services/electronBridge.ts` 取语义化别名，例如 `fileSystemApi`、`usbApi`、`gCodeApi`。

**渲染层 `src/renderer`**

负责全部 UI、编辑器状态、业务编排、协议数据解释、加工参数预处理和网络接口调用。虽然目录名叫 renderer，但多个 `WebContentsView` 会各自启动一份 Vue 应用，因此不能把它理解为单一浏览器页面。

**共享层 `src/shared`**

当前很薄，主要放 IPC 通道常量、设备流信封结构和位图浮雕任务契约。这是主进程和渲染进程之间真正适合共享类型的边界。

## 4. 应用启动与窗口模型

### 4.1 启动顺序

入口是 `src/main/index.ts`：

1. 开发环境读取 `.env.development` / `.env`，配置远程调试端口；
2. `app.whenReady()` 后注册全部 IPC；
3. 获取单实例锁；
4. 创建一个主 `BrowserWindow`；
5. `ViewHostManager.init()` 创建 chrome、home、modal 三个常驻 View；
6. 初始化 AI 助手独立窗口；
7. 广播应用版本，显示并最大化主窗口。

主 `BrowserWindow.webContents` 最终保持 `about:blank`。真正的页面都在子 `WebContentsView` 中，这一点会直接影响 DevTools、页面跳转和 IPC 目标定位。



```
Windows
    │
    ▼
Electron
    │
    ▼
main.ts
    │
    ├── 创建窗口
    ├── 初始化IPC
    ├── 初始化快捷键
    ├── 初始化View
    ├── 初始化AI窗口
    ├── 初始化下载
    ├── 初始化蓝牙
    └── 启动整个应用
```



### 4.2 ViewHostManager

`src/main/views/ViewHostManager.ts` 是窗口架构的中心：

- 顶部 48px 左右由 `chromeView` 承载；
- 主内容区在 `homeView` 与某个 `editView` 之间切换；
- 每个工程标签对应一个独立的 `editView`，最多同时打开 6 个；
- 非活动 View 不销毁，只把 bounds 设置为 0，因此编辑器和连接状态可以保留；
- `modalView` 需要时覆盖整窗，解决跨 WebContentsView 模态框无法遮住其他 View 的问题；
- 顶栏有下拉或 tooltip 时会临时扩展到整窗，并依靠透明背景显示浮层；
- 新创建的编辑 View 在加载完成后由主进程主动补发标签快照和应用版本。

```
ViewHostManager
│
├── ① 生命周期管理
│      init()
│      createEditView()
│      closeEditView()
│
├── ② View 管理
│      ChromeView
│      HomeView
│      ModalView
│      EditViews
│
├── ③ 布局管理
│      layout()
│      setBounds()
│      showHome()
│      showEdit()
│
├── ④ 状态同步
│      TabsSnapshot
│      AppVersion
│      PendingImport
│
├── ⑤ View 通信
│      publishTabsSnapshot()
│      publishUiCommand()
│      notifyChromeSurface()
│
└── ⑥ 输入路由
       getInputTargetAt()
```



`src/renderer/src/router/index.ts` 中的路由与这些 View 一一对应：

| 路由            | 承载内容             |
| --------------- | -------------------- |
| `#/chrome`      | 全局顶栏和 Tab 条    |
| `#/`            | 首页                 |
| `#/edit/:tabId` | 指定工程标签的编辑器 |
| `#/modal`       | 跨 View 模态框       |
| `#/aiAssist`    | AI 助手独立窗口      |

```
Electron Main Process
│
├── BrowserWindow (只有一个)
│
└── BrowserWindow.contentView
      │
      ├── ChromeView
      │      Renderer #1
      │      Vue App
      │      URL:
      │      index.html#/chrome
      │
      ├── HomeView
      │      Renderer #2
      │      Vue App
      │      URL:
      │      index.html#/
      │
      ├── ModalView
      │      Renderer #3
      │      Vue App
      │      URL:
      │      index.html#/modal
      │
      ├── EditView(tab1)
      │      Renderer #4
      │      Vue App
      │      URL:
      │      index.html#/edit/tab1
      │
      ├── EditView(tab2)
      │      Renderer #5
      │      Vue App
      │      URL:
      │      index.html#/edit/tab2
      │
      └── EditView(tab3)
             Renderer #6
             Vue App
             URL:
             index.html#/edit/tab3
```





### 4.3 AI 助手窗口

`AiWindowManager` 创建的是透明、无边框、挂靠主窗口的独立 `BrowserWindow`。它不会因为隐藏而销毁，所以聊天状态得以保留。窗口限制在主窗口区域内；非交互背景上的鼠标事件经 IPC 转换坐标后，再注入下面对应的 chrome/home/edit View，从视觉上实现点击穿透。

## 5. 渲染层装配

`src/renderer/src/main.ts` 在每一个 View 中都会执行：

- 安装兼容性 polyfill；
- 创建 Vue、Pinia 和持久化插件；
- 注册 Vue Router、i18n、Arco、Element Plus 图标和裁剪组件；
- 初始化账号认证；
- 订阅工作区标签跨 View 同步；
- 挂载全局 `EventEmitter` 作为应用事件总线。

`App.vue` 根据当前路由选择 chrome、modal 或普通嵌入页面外壳，并且在所有 View 上注册设备数据监听。后者很重要：设备数据可能发给发起连接的编辑 View，而不是固定发给顶栏 View。

## 6. 状态管理与跨 View 同步

### 6.1 Pinia 的角色

`src/renderer/src/store` 共有 20 多个 Store，主要可分为：

- 工作区：`useWorkspaceTabsStore`、`useHomeProjectList`；
- 设备：`useDevInfoStore`、`useLastDeviceStore`、`useOtaStore`；
- 加工配置：`useExtStore`、`useMaterialStore`、`useThicknessStore`、`useCurveSurfaceStore`；
- 软件配置：`useSoftwareConfig`、`useDelaySettings`、`useCanvasSizeOverride`；
- 用户与请求：`useUserStore`、`useRequestCommonParamsStore`；
- 资源：`useAiPaintStore`、`useLocalFontStore`。

部分 Store 使用 `pinia-plugin-persistedstate` 写入 `localStorage`，例如单位、语言、吸附开关、最后一次设备和设备历史。

### 6.2 为什么不能只依赖 Pinia

每个 WebContentsView 都有自己的 JS 上下文，所以它们各自拥有独立的 Pinia 实例。即使 View 共用 Electron session 和 localStorage，运行时响应式状态也不会自动同步。

当前代码用了三种同步方式：

1. `BroadcastChannel`：工作区标签、单位、用户、首页工程列表等分别有 broadcast 模块；
2. 主进程快照中继：`workspaceTabs` 变更时发布给 `ViewHostManager`，由它缓存最近快照并广播；
3. 定向设备信封：设备帧带 `connectionId`，各 View 只消费属于自身 Tab 的数据。

主进程快照中继用于解决一个时序问题：新 edit View 创建时，BroadcastChannel 订阅尚未建立，可能错过当前标签状态。主进程缓存可在 `did-finish-load` 后补发。

### 6.3 工作区标签

`useWorkspaceTabsStore` 保存：

```ts
interface IWorkspaceTab {
  id: string
  title: string
  connectionId?: string
  project?: IProjectInfo
}
```

因此 Tab 不只是 UI 标签，它同时绑定：

- 一个 `WebContentsView`；
- 一个 `OwlEditor`；
- 一份项目快照；
- 可选的一条设备连接。

这也是本项目多工程、多设备隔离的基础。

## 7. 编辑器架构

### 7.1 EditApp 是组合根

`src/renderer/src/view/edit/app/EditApp.vue` 是单个编辑标签的业务组合根。它负责：

- 根据 `tabId` 创建唯一的 canvas host；
- 实例化 `OwlEditor`；
- 把编辑器、选择状态和编辑器事件通过 `provide` 注入子组件；
- 组装左侧工具栏、抽屉、画布浮动栏、颜色图层栏和右侧属性栏；
- 载入项目快照或创建空项目；
- 恢复工程保存的设备上下文；
- 注册应用事件总线；
- 打开加工前确认页并生成画布预览。

`EditShell.vue` 定义了稳定布局：左侧 50px 工具轨、中央画布、浮动工具条、可展开抽屉、右侧 268px 检查器。旧的 `components/layout/index.vue` 已标记为兼容包装，新增页面应直接使用 `EditShell`。

### 7.2 OwlEditor 内核

内核位于 `engine/canvas/core.ts`，是一个继承 `EventEmitter` 的类。构造时即创建 Fabric Canvas，`initialize()` 后才挂载 DOM、安装插件并注册事件。

它承担三类工作：

- Fabric Canvas 生命周期和基础事件；
- 画布对象的公共加工参数 `markConf` 初始化；
- 插件发现、API 代理、快捷键和右键菜单装配。

插件类通过静态 `pluginName`、`apis`、`events` 声明能力。编辑器启动时遍历 `engine/plugins/index.ts`，实例化每个插件，再把插件 API 动态代理到 `owlEditor` 上。因此代码里大量 `owlEditor.setSize()`、`owlEditor.importFileData()`、`owlEditor.getProcessingData()` 并不是都在 `OwlEditor` 类中定义，而是由插件提供。

这是排查“某个 editor 方法在哪里实现”的第一原则：先查 `engine/plugins/index.ts`，再查目标插件的 `static apis`。

### 7.3 主要插件

| 插件/流水线                 | 职责                                                         |
| --------------------------- | ------------------------------------------------------------ |
| history                     | 撤销/重做和历史快照                                          |
| toolManager                 | 选择、移动、自由绘制、直线、矩形、圆、星形、多边形、钢笔、文本、节点编辑 |
| workspace                   | 工作区边界、尺寸、背景、模式                                 |
| ruler / alignGuidLine       | 标尺、辅助线和吸附                                           |
| copy / group / groupAlign   | 复制粘贴、编组、组内对齐                                     |
| importFile                  | AI/SVG/PLT/DXF/位图导入                                      |
| CanvasData                  | 多页面项目模型、导入导出                                     |
| matrix / materialTestMatrix | 普通阵列和材料测试阵列                                       |
| mergeGraphics               | 基于 Clipper 的矢量布尔合并                                  |
| nesting                     | 智能排版                                                     |
| measure                     | 画布测量工具和吸附                                           |
| colorLayer                  | 16 色加工图层、排序与显示                                    |
| offsetPath                  | 矢量轮廓偏移                                                 |
| textSetCurve / opentype     | 曲线文字和字体轮廓                                           |
| output                      | 对象筛选、坐标变换、加工参数组装与 G-code 请求               |

### 7.4 画布对象模型

`core/objects` 扩展了 Fabric 对象，包含 image、path、rect、circle、polygon、star、line、free、sketch、IText、barcode、qrcode 等。对象通常包含：

- 稳定 `id`；
- Fabric 几何与样式字段；
- `markConf` 加工配置；
- 颜色图层信息；
- 序列化所需扩展字段。

`core/fabric/base.ts` 是全局 Fabric 扩展入口。修改对象序列化、控制点或公共行为前，应先确认这里和 `canvas.extraProps`，否则保存后可能丢字段。

### 7.5 UI 功能区

`view/edit/components` 虽然文件很多，但可以按区域理解：

- `shell`：编辑器页面骨架；
- `rail`、`side/toolBar`：左侧工具入口；
- `drawer`：形状、画布、资源、AI 绘图、代码工具抽屉；
- `floating`：画布上方对象工具条和底部缩放/拖拽控制；
- `side/attributesBar`：设备、材料、图层、加工参数和加工按钮；
- `layer`：颜色图层；
- `menu`：编辑器文件菜单和导出；
- `imageEditorDialog`：非破坏式图像编辑工具注册、参数面板和预览；
- `preProcessConfirm`：G-code 路径预览与加工控制；
- `curveMeasure`、`thicknessMeasure`：设备测量能力；
- `nesting`、`measure`、`processMode`：智能排版、测量和模式选择；
- `exts`：设备/产品加工能力配置扩展。

## 8. 项目文件与首页

### 8.1 首页

首页位于 `view/home`，左侧菜单切换工程、素材库和公告。工程卡片数据来自主进程扫描本地项目目录，首页 Store 再负责隐藏列表、排序、删除和当前打开工程桥接。

新建工程的核心流程是：

```text
首页点击新建
  → workspaceTabs.addEmptyTab()
  → preload view API
  → 主进程 ViewHostManager.createEditView(tabId)
  → 加载 #/edit/:tabId
  → EditApp 创建 OwlEditor
  → CanvasData 创建第一页和工作区
```

### 8.2 项目文件结构

默认扩展名是 `.mps`。保存时外层结构由 `useSaveInfoManager` 生成：

```ts
{
  version: string,
  equipmentType: string,
  platform: 'Win' | 'Mac' | 'IOS' | 'Android',
  projectInfo: {
    version: string,
    createTime: number,
    lastModifyTime: number,
    cover: string,
    activePageId: string,
    deviceContext?: {...},
    pages: Page[]
  }
}
```

每个 `Page` 保存：

- 页面 id、名称、封面和背景；
- 材料配置；
- Fabric viewport transform；
- 加工模式和工作区尺寸；
- Fabric 对象 JSON；
- 可选的颜色图层配置；
- 可选的曲面测量成品、草稿和重测临时数据。

页面切换由 `CanvasData` 插件完成：先把当前 Canvas 序列化回当前 Page，再用 `loadFromJSON` 载入目标 Page，恢复工作区、缩放和历史状态。

## 9. 设备模型与通信链路

### 9.1 连接方式

渲染层 `useConnect.ts` 统一编排 USB、Wi-Fi、Wi-Fi AP 和模拟设备。BLE 有 preload 和主窗口配对支持，但统一连接分支目前没有实际完成 BLE 建链逻辑。

连接成功后，`useDevInfoStore` 保存：

- `communicationStatus`：连接状态；
- `devWorkStatus`：空闲、预览、加工等设备工作状态；
- `connectType` 和 `connectManage.send`；
- `devBaseInfo`、告警、Wi-Fi 信息；
- 当前 `activeConnectionId`。

同时 `workspaceTabs` 把 `connectionId` 绑定到当前 Tab。关闭一个 Tab 时只断开该 Tab 的连接，不应影响其他 Tab。

### 9.2 主进程连接管理

`ConnectionManager` 维护 `connectionId → transport` 的连接记录。USB 实现在 `ipcMain/usb.ts`，Wi-Fi Socket 实现在 `ipcMain/wifi.ts`。两者把收到的字节帧包装成包含 `connectionId`、连接类型和 payload 的设备流信封，再发送回对应渲染端。

`utils/deviceStreamRouter.ts` 和 `utils/listener.ts` 在渲染层完成：

1. 解析新信封或兼容旧 payload；
2. 根据当前路由 Tab 及其 connectionId 判断是否消费；
3. 拆帧并解析设备协议命令；
4. 更新设备信息、发送状态、加工状态、告警和测量响应；
5. 必要时发送 ACK 或下一包数据。

### 9.3 命令发送

`useCommandSystem` 是渲染层统一下发入口：

- `send(command, data)`：普通命令；
- `multipleSend(command, content)`：G-code 等复杂内容；
- `sendPackage(...)`：固件包传输。

它最终调用当前 Tab 的 `connectManage.send`，再通过 preload 到主进程串口或 Socket。设备初始化会同步时间，并轮询设备基本信息、配置和外接附件。

### 9.4 设备预设与加工扩展

`config/deviceCatalog.ts` 描述用户可选择的设备目录；`devicePresets.ts` 描述型号对应的工作区、加工模式和连接能力；`applyDevicePreset.ts` 将预设应用到 OwlEditor。

另一套扩展位于 `components/exts`。`ExtBase` 抽象了：

- 支持的加工模式；
- 每种模式的工作区；
- 支持的加工类型；
- 模式参数与加工参数 UI；
- 默认值；
- 输出前对元素和全局 G-code 配置的加工。

当前 `extMap` 只注册 `MXC-F1`。新增产品能力时，通常需要同时考虑设备目录/预设和 `ExtBase` 加工扩展，两者职责相关但不是同一套配置。

## 10. G-code 与加工流程

### 10.1 普通加工

普通加工的主链路如下：

```text
属性栏点击加工
  → 打开 PreProcessConfirmPage
  → owlEditor.getProcessingData()
  → Output 插件筛选有效对象、排序、坐标变换
  → 位图编码 / 矢量 SVG 化 / 参数映射
  → gcodePreparer 生成 process_config.json + PNG/SVG 文件
  → preload gCode API
  → main/ipcMain/gCode.ts 写入 userData/task
  → @xc/gcode-builder.generateGCode()
  → gcodeReader 拆分输出
  → 返回 MarkRaw { Data, CyclesIndex }
  → 路径/元素预览
  → multipleSend(0x23, markRaw) 下发设备
```

`Output` 插件还负责：

- 去除静态对象和忽略加工的对象；
- 展开组对象；
- 检查对象是否越过工作区；
- 根据颜色图层顺序排序；
- 区分位图、文本和矢量；
- 处理旋转轴、曲面区域、边框预览等模式；
- 调用当前 `ExtBase` 修改元素参数和全局配置。

加工确认页维护 loading、ready、sending、marking、paused、complete、failed、stopped 等阶段。开始加工使用 `0x23`，暂停/继续使用 `0x39`，停止使用 `0x26`。路径预览会解析 G-code，区分移动轨迹、连续加工线和点阵功率，并支持播放、缩放、平移和速度切换。

### 10.2 位图浮雕任务

位图浮雕走独立的整任务流程，因为生成时间更长、数据更大且需要取消：

- 渲染层先冻结画布快照，校验稳定 id、密度、深度、材料厚度和缩放限制；
- 准备 schemaVersion 2 的配置与位图；
- 用 `clientRequestId` 发起 `ipcRenderer.invoke`；
- 主进程在 `userData/gcode-jobs/<jobId>` 隔离输入和输出；
- `AbortController` 支持取消；
- 正式输出先写临时文件，生成成功后原子改名；
- 真正点击开始加工时才读取完整 G-code 文件。

主进程还会限制配置大小、单文件/总文件大小、文件数，并拒绝路径穿越、重复文件、未引用文件和非浮雕元素。这部分是当前测试最完整的业务链路。

## 11. 其他主要业务模块

### 11.1 图像编辑

`components/imageEditorDialog` 采用工具注册表结构。工具包括调整、裁剪、增强、扩图、滤镜、蒙版、抠图、移除、替换、风格化和矢量描摹。每个工具通常包含定义、参数面板、可选覆盖层和生成函数；公共状态由 `useImageEditorState` 管理。

其中滤镜、裁剪、蒙版和描摹有较多本地实现，AI 扩图、抠图、替换、风格化等会调用后端 API。

### 11.2 AI 能力

- `components/aiAssistPanel.vue` 和 `view/aiAssist`：独立 AI 助手窗口；
- `api/aiAssistant.ts`：聊天、会话、反馈等接口；
- `api/request.ts`：基于 Fetch 的 SSE 内容/思考过程流式解析；
- `DrawerAIPaintPanel.vue`、`api/aiPaint.ts`、`useAiPaintStore`：AI 绘图和历史；
- `hmiWidget`：把 AI 返回的 Markdown/结构化交互控件渲染为滑块、选择、上传、裁剪等 UI。

### 11.3 材料和加工参数

材料数据来自内置静态配置、本地持久化和远端接口。右侧属性栏根据当前加工模式、对象类别和 `ExtBase.processType` 动态显示加工类型与参数；对象最终把当前加工类型及各类型参数保存在 `markConf.MP` 中。

### 11.4 测量与设备辅助功能

- 厚度测量：发送自动对焦命令，等待协议响应并写入厚度 Store；
- 刷新背景：让设备拍摄预览图，把 JPEG 设为工作区背景；
- 曲面测量：在指定矩形内生成蛇形采样点，逐点发送扫描命令，支持取消、恢复和重测；
- 曲面预览：Three.js 展示采样网格/曲面；
- 走边框：把测量区域生成矩形 SVG，再走普通 G-code 预览链路下发。

### 11.5 更新与系统能力

主进程还提供：

- `electron-updater` 应用更新状态机；
- 设备固件下载与传输进度；
- FTP 日志/文件传输；
- 防止系统休眠；
- 平台信息和 macOS 滚动方向；
- 下载拦截和全局快捷键。

## 12. HTTP 接口层

`src/renderer/src/api` 目前存在两套请求基础设施：

1. `request.ts`：旧式表单请求，自动向参数或 body 写入旧 token 和公共参数；开发环境依赖 Vite 代理，file 协议下回退到固定服务器；
2. `axiosBase.ts`：较新的 JSON/Bearer Token 方式，支持 `requireAuth`、统一响应解包和 SSE 配套。

账号、AI 等新模块偏向第二套；首页、材料和部分设备接口仍使用第一套。排查接口认证问题时，必须先确认目标 API 引用了哪一个实例。

## 13. 目录地图

```text
xc-hmi/
├─ src/
│  ├─ main/                         Electron 主进程
│  │  ├─ index.ts                   应用入口和窗口生命周期
│  │  ├─ views/                     多 WebContentsView 与 AI 窗口
│  │  ├─ ipcMain/                   各业务 IPC 注册
│  │  ├─ connection/                connectionId 和连接清理
│  │  ├─ fileSystem/                项目/导出文件读写
│  │  ├─ appUpdater/                应用升级
│  │  ├─ ftpUtils/                  FTP
│  │  ├─ worker/                    Wi-Fi/G-code 辅助逻辑和资源
│  │  ├─ command.ts                 设备二进制协议组包/拆帧
│  │  └─ runtimeConfig.ts           开发环境与 Electron partition
│  ├─ preload/
│  │  ├─ index.ts                   window.electronCustom 总桥接
│  │  ├─ index.d.ts                 渲染层窗口类型
│  │  ├─ wifi/                      Socket/Wi-Fi 命令包装
│  │  └─ bluetooth/                 Web Bluetooth 辅助
│  ├─ shared/                       跨进程类型与 IPC 常量
│  └─ renderer/
│     ├─ index.html                 Vite HTML 入口
│     ├─ tests/setup.ts             Vitest 渲染环境
│     └─ src/
│        ├─ main.ts / App.vue       Vue 装配和根外壳
│        ├─ router/                 chrome/home/edit/modal/AI 路由
│        ├─ view/home/              首页和工程列表
│        ├─ view/edit/              核心编辑与加工域
│        │  ├─ app/                 单 Tab 编辑器组合根
│        │  ├─ core/                Fabric 扩展对象和基础类型
│        │  ├─ engine/              OwlEditor、插件、流水线、Worker
│        │  ├─ components/          编辑器全部功能区
│        │  ├─ hooks/               选择、快捷键、标尺等编辑器组合逻辑
│        │  ├─ libs/                内置 DXF/PLT 解析代码
│        │  ├─ typings/             Fabric/Owl/工程数据类型扩展
│        │  └─ utils/               曲面区域守卫等编辑域工具
│        ├─ view/chrome/             顶栏 View 外壳
│        ├─ view/modal/              全屏模态 View
│        ├─ view/aiAssist/           AI 独立窗口页面
│        ├─ components/              跨页面组件、顶栏、登录、连接框
│        ├─ store/                   Pinia 与跨 View 广播
│        ├─ hooks/                   设备连接、命令、项目等业务组合逻辑
│        ├─ services/                设备协议、测量、Electron bridge
│        ├─ api/                     HTTP/SSE 接口
│        ├─ config/                  设备目录和预设
│        ├─ hmiWidget/               AI 动态交互控件
│        ├─ utils/                   日志、命令、View、事件等公共工具
│        ├─ i18n/                    中英西韩繁体语言包
│        └─ assets/                  图片、样式、内置字体
├─ resources/                       打包图标、材料配置、协议/隐私资源
├─ scripts/                         构建、CI、依赖重建和烟测脚本
├─ electron.vite.config.ts          三端构建配置
├─ electron-builder.yml             安装包配置
├─ vitest.config.ts                 测试配置
└─ package.json                     依赖与命令
```

## 14. 构建、运行与测试

常用命令来自 `package.json`：

```bash
pnpm install
pnpm dev
pnpm build
pnpm build:strict
pnpm test
pnpm typecheck
pnpm lint:eslint
pnpm lint
```

构建模式包括 `dev`、`test`、`production`，会影响登录环境、接口环境和打包输出。Windows 分别输出到 `dist/dev`、`dist/test`、`dist/prod`。

当前构建有几个特殊点：

- renderer 为 `buffer` 和 `fs` 配置了浏览器 shim；
- OpenCV 在入口全局载入；
- 主进程构建结束后复制 `image2gcode` 资源；
- renderer 对 `@renderer`、`@edit` 配置路径别名；
- Element Plus 走按需插件，Arco 仍作为全局插件安装；
- `serialport` 等原生依赖由 postinstall 脚本按 Electron ABI 重建。

本次源码分析时的实际验证结果：

- `pnpm test`：9 个测试文件、39 个用例全部通过；
- `pnpm typecheck:node`：通过；
- `pnpm typecheck:web`：通过。

现有测试主要覆盖位图浮雕任务、G-code 路径解析、加工参数、扩展头尾参数和事件总线契约；首页、普通编辑操作、USB/Wi-Fi、文件系统和普通加工链路仍以集成验证为主。

## 15. 接手时需要特别注意的现实约束

### 15.1 同名“状态”可能属于不同 View

不要默认从一个页面修改 Pinia，另一个 View 会立即看到。涉及顶栏、首页和编辑器共同使用的数据时，先找对应 broadcast 模块或主进程中继。新增跨 View 状态时也需要显式设计同步协议。

### 15.2 OwlEditor API 是动态挂载的

类型声明和实现位置不总是直观。查 API 时建议按以下顺序：

1. 全局搜索方法名；
2. 查看 `engine/plugins/index.ts`；
3. 查看插件的 `static apis`；
4. 查看 `typings/owl-editor.d.ts` 是否同步声明。

### 15.3 单个编辑 Tab 是独立运行环境

模块顶层单例在“同一 View 内”是单例，但在多个 edit View 之间各有一份。设备连接、计时器、事件监听和 Store 订阅都要考虑 Tab 创建、隐藏、关闭三个阶段，而不能只考虑普通 Vue 路由切换。

### 15.4 新旧机制并存

源码中能看到多轮重构留下的兼容层：

- `components/layout` 已废弃但仍保留；
- G-code preload 仍暴露旧 fabricate 接口，主进程已明确返回 deprecated；
- HTTP 有新旧两套请求实例；
- 设备流兼容旧的无信封 payload；
- 一些页面仍直接使用 `window.electronCustom`，另一些已改用 `electronBridge`；
- Arco 和 Element Plus 同时存在。

新增代码应优先沿当前活跃链路扩展，不要只根据名称选择旧接口。

### 15.5 Electron 安全边界较宽松

当前主窗口和 WebContentsView 使用了 `webSecurity: false`、`nodeIntegration: true`；子 View 还设置 `contextIsolation: false`、`sandbox: false`。这降低了旧代码迁移成本，但意味着渲染层 XSS、外部内容和下载处理的风险更高。

因此：

- 不应把不可信 HTML 直接写入 DOM；
- 外部链接继续通过主进程 `shell.openExternal`；
- 新 IPC 应校验参数、限制路径和文件大小；
- 不要继续扩大渲染层直接访问 Node 的范围。

位图浮雕 JobManager 中的路径、大小和 schema 校验可以作为新增文件型 IPC 的参考。

### 15.6 大文件和弱类型区域较多

属性栏、设备管理、材料管理、监听器等文件体量很大，且 `any`、动态 API 和全局类型扩展较多。修改这些区域时应优先提取纯函数并补单元测试，而不是继续把分支堆进 Vue 单文件组件。

### 15.7 编码显示需要留意

部分历史源码注释在当前终端中呈现乱码，但字符串本身可能参与 UI。编辑旧文件时要确认原文件编码，避免格式化工具把整文件转换后造成大量无关 diff。

### 15.8 pnpm 配置有当前版本警告

运行测试和类型检查时，pnpm 提示 `package.json` 内的 `pnpm.onlyBuiltDependencies` 和 `pnpm.overrides` 不再从该位置读取。当前命令仍然通过，但依赖锁定和原生依赖白名单是否实际生效需要在升级依赖前核实。

## 16. 推荐的阅读顺序

第一次接手不建议从最大的属性栏组件开始。按一条完整业务链阅读更高效：

1. `package.json`、`electron.vite.config.ts`：建立运行环境概念；
2. `main/index.ts`、`ViewHostManager.ts`：理解多 View 窗口模型；
3. `renderer/src/main.ts`、`router/index.ts`、`App.vue`：理解每个 View 如何启动；
4. `useWorkspaceTabsStore.ts` 和各 broadcast 文件：理解跨 View 状态；
5. `view/edit/index.vue`、`app/EditApp.vue`、`components/shell/EditShell.vue`：理解单 Tab 编辑器；
6. `engine/canvas/core.ts`、`engine/plugins/index.ts`：理解 OwlEditor 插件机制；
7. `engine/document/canvasData.ts`：理解项目文件和页面；
8. `useConnect.ts`、`useCommandSystem.ts`、`utils/listener.ts`：理解设备协议；
9. `engine/pipelines/output.ts`、`engine/gcodePreparer`、`main/ipcMain/gCode.ts`：理解加工链；
10. 最后再按任务进入 `components` 中的具体功能区。

## 17. 常见需求应该从哪里改

| 需求                | 优先入口                                                     |
| ------------------- | ------------------------------------------------------------ |
| 新增顶栏或 Tab 行为 | `components/top`、`useWorkspaceTabsStore`、`ViewHostManager` |
| 新增画布工具        | `engine/plugins/tool`、`components/rail`、`useEditToolRail`  |
| 新增 Fabric 对象    | `core/objects`、`core/fabric/base.ts`、对象序列化字段        |
| 新增编辑器能力      | 新插件并注册到 `engine/plugins/index.ts`                     |
| 修改工程格式        | `engine/document/canvasData.ts`、`useSaveInfoManager.ts`，同时考虑兼容旧文件 |
| 新增设备型号        | `config/deviceCatalog.ts`、`devicePresets.ts`，必要时新增 `ExtBase` |
| 新增加工模式/参数   | `components/exts`、`useExtStore`、属性栏参数组件、gcodePreparer |
| 修改 G-code 输入    | `engine/pipelines/output.ts`、`engine/gcodePreparer`         |
| 修改设备命令协议    | `useCommandSystem.ts`、`utils/command.ts`、`utils/listener.ts`、`main/command.ts` |
| 新增 IPC            | `shared/ipcChannels.ts` → `main/ipcMain` → `preload/index.ts` → `electronBridge.ts` |
| 新增跨 View 状态    | Pinia Store + BroadcastChannel 或主进程快照中继              |
| 新增图像工具        | `components/imageEditorDialog/tools` 和工具 registry         |
| 新增后端接口        | 先确认使用 `request.ts` 还是 `axiosBase.ts`，新模块优先后者  |

## 18. 一句话心智模型

把这个项目理解成：**Electron 主进程托管多个隔离的 Vue 工作区；每个工程 Tab 内有一套 Fabric 插件式编辑器；渲染层把画布对象转换成加工任务，主进程负责文件、硬件传输和 G-code 执行边界。**

只要抓住“多 View 隔离”“OwlEditor 动态插件”“Tab 与 connectionId 绑定”“渲染预处理、主进程生成”这四个核心点，后续阅读大多数模块都会有稳定的定位坐标。
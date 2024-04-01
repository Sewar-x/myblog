# NPM

## **npm script**

### **定义**

npm 允许在`package.json`文件里面，使用`scripts`字段定义脚本命令。

```json
{
	// ...
	"scripts": {
		"build": "node build.js"
	}
}
```



### 原理

1. 每当执行`npm run`，就会自动新建一个 **Shell**，根据系统平台而不同，如 macos 或 Linux 中指代的是 `/bin/sh`，在Windows 中使用的是 `cmd.exe`

2. `npm run `新建的这个 Shell，会将当前目录的 `node_modules/.bin` 子目录加入`PATH`变量
3. 执行结束后，再将`PATH`变量恢复原样。

在全局模式下，可执行文件链接到 Unix 上的 `{prefix}/bin`，或直接链接到 Windows 上的 `{prefix}`。确保路径在终端的 `PATH` 环境中以运行它们。

在本地模式下，可执行文件被链接到 `./node_modules/.bin`，以便它们可用于通过 npm 运行的脚本。（例如，当你运行 `npm test` 时，测试运行程序将在路径中。）

### **npm run 创建出来的 Shell 有什么特别之处?**

当前目录的`node_modules/.bin`子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上完整路径。

比如，当前项目的依赖里面有 webpack，只要直接写`npm run build `就可以了。

```shell
"build": "webpack --config webpack.config.js"
```

而不用写成下面这样:

```js
"build": "./node_modules/.bin/webpack  --config webpack.config.js"
```

由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。

npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是`0`，npm 就认为这个脚本执行失败

npm scripts 脚本可以使用 Shell通配符等常规能力

> 示例：
>
> 1. 在使用 webpack 构建的项目中，使用 webpack 命令即可对项目进行打包，如下图，使用 `npm run start` 命令执行时，会执在shell 脚本中执行 `webpack --config webpack.config.js`：
>    ![image-20240114100542264](../images/webpack命令.png)
>
> 2. 当执行 `webpack --config` 命令时，实际上执行 `./node_modules/.bin/webpack` shell 脚本:![image-20240114100925643](../images/webpack命令脚本.png)
> 3. 执行该脚本时候，会将当前目录的`node_modules/.bin`子目录加入`PATH`变量，因此 shell 直接执行 webpack 命令，会直接执行 `./node_modules/.bin/webpack` shell 脚本。



### **npm 钩子**

在 npm（Node Package Manager）中，钩子（hooks）是一种在特定生命周期事件发生时自动运行的脚本。这些生命周期事件包括安装、更新、测试等阶段，它们允许开发者在这些关键点执行自定义命令或脚本。通过钩子，开发者可以扩展 npm 的功能，满足特定项目或工作流程的需求。

npm 的生命周期脚本主要定义在 `package.json` 文件的 `scripts` 字段中。

以下是一些常用的 npm 钩子及其描述：

1. **preinstall 和 install 和 postinstall**
   - `preinstall`：在包安装之前运行。
   - `install`：实际安装包时运行。
   - `postinstall`：在包安装之后运行。这通常用于编译代码、安装依赖项或其他需要在包安装完成后执行的任务。
2. **prepublish 和 prepare 和 postpublish**
   - `prepublish`：在包发布之前运行。注意，这个钩子在 npm 5.0.0 之后的行为有所变化，现在它仅在 `npm publish` 命令中运行，而不是在 `npm install` 时。
   - `prepare`：在 `npm publish` 和 `npm install`（如果安装了本地包）之前运行。这通常用于构建或准备要发布的包。
   - `postpublish`：在包发布之后运行。
3. **preuninstall 和 uninstall**
   - `preuninstall`：在包卸载之前运行。
   - `uninstall`：实际卸载包时运行。
4. **prestart 和 start**
   - `prestart`：在 `npm start` 命令之前运行。
   - `start`：定义运行项目的命令。
5. **pretest 和 test**
   - `pretest`：在 `npm test` 命令之前运行。
   - `test`：定义运行测试的命令。
6. **prestop 和 stop**
   - `prestop`：在 `npm stop` 命令之前运行。
   - `stop`：定义停止项目的命令。

此外，还有一些其他钩子，如 `preversion`、`version` 和 `postversion`，它们在版本更改时运行。

使用这些钩子，你可以轻松地在 npm 生命周期的特定阶段执行自定义任务。例如，你可以使用 `postinstall` 钩子来自动编译项目的前端资源，或者在 `prepublish` 钩子中运行 lint 检查和测试。

要在 `package.json` 中使用这些钩子，只需在 `scripts` 字段中添加相应的命令即可。例如：

```json
{  
  "name": "my-project",  
  "version": "1.0.0",  
  "scripts": {  
    "preinstall": "echo 'Running pre-install script...'",  
    "install": "echo 'Installing dependencies...'",  
    "postinstall": "echo 'Dependencies installed successfully.'",  
    "start": "node index.js"  
  }  
}
```

这样，当你运行 `npm install` 时，`preinstall`、`install` 和 `postinstall` 脚本将按顺序执行。



###  **npm script 执行方式**

<img src="../images/npmscirpt.png" style="zoom:50%;" />

###  npm 版本处理

#### package-lock.json 文件

`package-lock.json` 文件是npm的一部分，主要用于确保在安装依赖时的一致性。

它存储了一个**精确的、版本化的依赖树**，而不是像`package.json`那样使用星号版本（例如 1.0.*）。

当开发者在开发环境中安装依赖时，`package-lock.json`会锁定所有依赖包的版本，确保在其他开发者或部署环境中，依赖包的版本与开发环境一致。



此外，npm的`package-lock.json`文件还具有以下特点：

1. **锁定安装时的包的版本号**：在开发过程中，当需要更新某个包时，开发者通常会先删除`node_modules`文件夹和`package-lock.json`文件，然后重新运行`npm install`。这样可以确保所有的包都是最新的版本。但是，这种做法在团队协作中可能会带来问题，因为不同的开发者可能安装了不同版本的依赖包，从而导致一些未预期的问题。通过使用`package-lock.json`文件，可以确保每个开发者都在相同的环境下工作，减少了潜在的问题。
2. **锁定完整依赖树的版本**：与`package.json`只包含直接依赖项不同，`package-lock.json`可以锁定整个依赖树的版本。这意味着不仅直接依赖项的版本被锁定，间接依赖项的版本也可以被锁定。这种机制使得开发者可以更加准确地控制他们的项目依赖，避免了在不同环境下出现版本不一致的问题。
3. **描述依赖关系树的单一表示**：`package-lock.json`文件描述了生成的确切树，以便后续安装能够生成相同的树，而不管中间依赖项更新如何。这有助于确保团队成员、部署和持续集成安装完全相同的依赖关系。
4. 提供“时间旅行”到`node_modules`先前状态的工具：通过使用`package-lock.json`文件，可以很容易地查看node_modules先前的状态。这使得在遇到问题时，开发者可以轻松地回滚到先前的版本，或者在不同的版本之间进行比较，找出问题的根源。

总的来说，`package-lock.json`文件为npm提供了一种机制，以确保开发环境和部署环境中的依赖包版本一致性，并帮助开发者更好地管理他们的项目依赖。

![image-20240104084953324](../images/npm版本处理.png)

#### npm 多源镜像和企业级部署私服

* npm多源镜像的原理是利用镜像源来加快包的下载速度和提高开发效率。由于国内网络环境的特殊性，直接从官方npm源下载包的速度较慢，甚至可能会出现下载失败的情况。而使用国内的npm镜像源可以解决这个问题，提供更快的下载速度和更稳定的网络连接。
* 常用的npm镜像源包括淘宝NPM镜像、CNPMjs等。

* 在企业级部署中，使用私服（私有仓库）也是一种常见的做法。私服可以提供更好的网络连接速度、版本控制和安全性。
* 通过将npm包存储在本地或云上的私有仓库中，团队成员可以更快地下载和更新依赖项，并且可以更好地控制包的版本和访问权限。
* 私服通常会与CI/CD（持续集成/持续部署）工具集成，以自动化地构建、测试和发布包。



### 应用

在项目，可以添加多个命令脚本，执行 `npm run 命令` 的方式执行不同的脚本

![](../images/npmscript2.png)

## 使用本地 npm 包

### 打包项目

* 项目开发完成后，本地打包

  ```
  npm run build
  npm pack
  ```

  * 打包后生成: 项目名称-版本号.tgz 包

### 使用项目

* 将打包的包放入使用包的项目中；
* 使用命令安装  `npm i ./包名`
* 项目使用： `import 包名 from "包名"`



## **`package.json` 文件**

> 关于 `package.json` 文件的详细配置信息可以参考官网：[package.json | npm 中文网 (nodejs.cn)](https://npm.nodejs.cn/cli/v10/configuring-npm/package-json)
>
> 以下介绍几个重要和易混淆的知识

### **文件入口配置**

在`package.json`文件中，与入口相关的字段主要如下：

|  字段名   | 作用                                                         |
| :-------: | :----------------------------------------------------------- |
|  `main`   | 指定Node.js环境中模块的入口文件。当其他模块通过`require`引入这个包时，会加载此字段指定的文件。 |
| `browser` | 指定浏览器环境中模块的入口文件。当使用Webpack等打包工具时，它们会识别此字段，并据此处理模块。 |
| `module`  | 指定ES6模块的入口文件。当使用支持ES6模块的打包工具或环境时，会加载此字段指定的文件。这常用于支持tree shaking等高级特性。 |
| `esnext`  | 与`module`类似，但通常用于指定更现代的ES模块入口，可能包含实验性或尚未标准化的ES特性。 |
| `exports` | 提供一个更细粒度的入口点映射，允许定义不同条件下的导出文件。这可以用于替代`main`、`module`等字段，并提供更好的封装和兼容性。 |
|   `bin`   | 指定可执行文件的入口。如果包中包含可执行的命令行工具，可以通过此字段指定。 |

这些字段为开发者提供了灵活性，以支持不同的运行环境和使用场景。注意，不是所有的字段都需要在`package.json`中指定，具体取决于你的模块如何被使用以及目标环境是什么。而且，一些字段可能需要配合特定的工具或构建系统来使用。

以下是一个简单的`package.json`示例，其中包含了一些与入口相关的字段，以及它们的作用说明：

```json
{  
  "name": "my-package",  
  "version": "1.0.0",  
  "description": "A simple package with multiple entry points",  
  "main": "dist/main.js", // Node.js环境中的默认入口文件  
  "browser": "dist/browser.js", // 浏览器环境中的默认入口文件  
  "module": "src/index.mjs", // ES6模块的入口文件，支持tree shaking等特性  
  "exports": {  
    ".": "./dist/main.js", // 包的默认导出，相当于main字段  
    "./browser": "./dist/browser.js", // 指定browser字段的导出  
    "./module": "./src/index.mjs" // 指定module字段的导出  
  },  
  "bin": {  
    "my-cli": "./bin/my-cli.js" // 命令行工具的入口文件  
  },  
  "scripts": {  
    "build": "build-script" // 构建脚本，用于生成dist目录下的文件  
  },  
  "dependencies": {  
    // 依赖项...  
  },  
  "devDependencies": {  
    // 开发依赖项...  
  }  
}
```

在这个示例中：

- `main`字段指定了Node.js环境中模块的入口文件为`dist/main.js`。当其他Node.js模块通过`require('my-package')`引入这个包时，会加载`dist/main.js`文件。
- `browser`字段指定了浏览器环境中模块的入口文件为`dist/browser.js`。当使用支持此字段的打包工具（如Webpack）时，它们会加载这个文件而不是`main`字段指定的文件。
- `module`字段指定了ES6模块的入口文件为`src/index.mjs`。这意味着支持ES6模块的构建工具或环境会加载这个文件，并可以利用ES6模块的特性，如静态导入和tree shaking。
- `exports`字段提供了一个更细粒度的入口点映射。在这个例子中，它定义了包的默认导出（`.`对应`main`字段），以及特定的子路径导出（如`./browser`和`./module`）。这允许消费者精确地指定他们想要加载的模块版本。
- `bin`字段指定了`my-cli`这个命令行工具的入口文件为`bin/my-cli.js`。这意味着当用户全局安装这个包后，可以直接在命令行中运行`my-cli`命令。

请注意，这些字段的作用和如何使用它们取决于你的构建流程、目标环境以及使用的工具。在实际项目中，你可能需要根据你的具体需求来配置这些字段，并且可能需要配合构建脚本（如`scripts`字段中的`build`命令）来生成这些入口文件。



### **注意**

- `name` 会作为参数传递给`require()`



**参考资料**

[package.json | npm 中文网 (nodejs.cn)](https://npm.nodejs.cn/cli/v10/configuring-npm/package-json)

## **参考资料**

[npm 中文网 (nodejs.cn)](https://npm.nodejs.cn/)

[NPM 文档丨阿西河 (axihe.com)](https://www.axihe.com/api/npm/api/api.html)

[使用vue在npm上发布自己的ui组件包](https://blog.csdn.net/weixin_44003190/article/details/90713012)

# **pnpm**

## **是什么**

pnpm是一个流行的JavaScript包管理器，类似于npm和yarn。它是“performant npm”的缩写，旨在成为一个更高效的npm替代品。

pnpm通过使用内容寻址存储来避免相同包在不同项目中的重复下载和存储，从而节省磁盘空间并加速安装过程。

> pnpm 官方文档：[Fast, disk space efficient package manager | pnpm](https://pnpm.io/zh/)

## **为什么？**

PNPM相对于NPM有以下几个优势：

### **高效的存储空间使用**

* PNPM使用称为“**内容寻址存储**”的机制来存储npm包，这意味着即使多个项目使用相同的包，该包在磁盘上也只存储一次。

  <img src="../images/pnpm内容寻址.png" alt="image-20240304151628272" style="zoom: 50%;" />

  > 使用 NPM和Yarn 时，依赖每次被不同的项目使用，都会重复安装一次，会在每个项目的node_modules目录中分别存储一份副本。
  >
  > 而在使用 pnpm 时，依赖会被存储在内容可寻址的存储中，所以：
  >
  > 1. 如果你用到了某依赖项的不同版本，只会将不同版本间有差异的文件添加到仓库。 例如，如果某个包有100个文件，而它的新版本只改变了其中1个文件。那么 `pnpm update` 时只会向存储中心额外添加1个新文件，而不会因为仅仅一个文件的改变复制整新版本包的内容。
  > 2. 所有文件都会存储在硬盘上的某一位置。 当软件包被被安装时，包里的文件会硬链接到这一位置，而不会占用额外的磁盘空间。 这允许你跨项目地共享同一版本的依赖。
  >
  > 因此，您在磁盘上节省了大量空间，这与项目和依赖项的数量成正比，并且安装速度要快得多！

  

### **更快的安装速度**

pnpm 分三个阶段执行安装：

1. 依赖解析。 仓库中没有的依赖都被识别并获取到仓库。
2. 目录结构计算。 `node_modules` 目录结构是根据依赖计算出来的。
3. 链接依赖项。 所有以前安装过的依赖项都会直接从仓库中获取并链接到 `node_modules`。PNPM只是从全局存储中链接它们。

<img src="../images/pnpm依赖安装.png" alt="image-20240304155301629" style="zoom:50%;" />

npm / yarn 等通常通过三阶段安装过程，三个阶段串行执行（解析、获取和将所有依赖项写入`node_modules`）快得多。

<img src="../images/npm依赖安装模式.png" alt="image-20240304155454806" style="zoom:50%;" />



### **非扁平的 node_modules 目录**

> **什么是扁平的 node_modules 目录**

当使用npm或Yarn安装一个包时，它们会下载该包及其依赖项，并将它们放在`node_modules`目录中。

这个目录的结构通常是平铺的，所有的包都被提升到模块目录的根目录，意味着所有的包都被直接放在该目录下，而不是按照它们之间的依赖关系进行嵌套。这种平铺的结构使得项目中的代码可以直接访问到这些包，而无需担心依赖关系的嵌套结构。

这种平铺结构有助于简化依赖管理，但也可能会导致一些问题。例如，不同的包可能依赖于相同的其他包，但版本不同。在这种情况下，npm和Yarn会尝试解决这些依赖冲突，以确保每个包都使用其所需的正确版本。然而，这有时可能会导致一些难以预料的问题，特别是在大型项目中，依赖关系可能变得非常复杂。



> **为什么 npm3 需要开始在 v3 中使用平铺的 node_modules ？**

npm3选择使用平铺的`node_modules`结构是为了解决npm2中存在的一些问题，提高性能、简化依赖管理，并更好地控制依赖包的版本。这种改变使得npm在依赖管理方面更加成熟和健壮。

npm3选择使用平铺的`node_modules`结构主要有以下几个原因：

1. **性能优化**：在npm2及之前的版本中，依赖项是以树状层级关系安装的。这意味着如果两个模块依赖于相同的第三方包，但是版本不同，那么该包会被重复安装多次，造成磁盘空间的浪费。npm3通过平铺结构解决了这个问题，使得相同的包只会被安装一次，从而节省了磁盘空间并提高了性能。
2. **依赖扁平化**：平铺的`node_modules`结构使得依赖关系更加扁平化，减少了嵌套的层级。这有助于简化依赖管理，减少了依赖冲突的可能性，并使得项目更加健壮和可维护。
3. **更好的版本控制**：npm3通过使用平铺结构，可以更好地控制和管理依赖包的版本。它使用了一种称为“确定性安装”的技术，确保每次安装依赖项时都会获得相同的结果。这有助于减少因依赖版本不一致而导致的问题。

> **pnpm 采用哪种模式管理 node_modules 目录？**

pnpm 采用非扁平的 node_modules 目录。

默认情况下，pnpm 使用符号链接将项目的直接依赖项添加到模块目录的根目录中。

<img src="../images/pnpm目录.png" alt="image-20240304160109201" style="zoom:50%;" />

### **严格的依赖处理**

* PNPM创建一个严格的node_modules目录，确保项目不会意外地访问未声明的包。这与传统的NPM和Yarn处理依赖的方式不同，有助于避免隐藏的依赖问题，使项目更加清晰易管理。

### **支持多包仓库**

* PNPM原生支持多包仓库(monorepos)，这是在单个仓库中管理多个包的一种方法，类似于Yarn workspaces。这使得PNPM方便管理多个项目之间的依赖关系。

### **安全性**

* 与Yarn一样，PNPM有一个包含所有已安装包校验和的特殊文件，用于在执行代码之前验证每个已安装包的完整性。这有助于确保依赖项没有被篡改或损坏，从而提高项目的安全性。

综上所述，PNPM相对于NPM具有更高的存储效率、更快的安装速度、更严格的依赖处理、支持多包仓库以及更高的安全性等优势。这些优势使得PNPM成为一个更高效的npm替代品，尤其适用于大型项目或需要管理多个项目的场景。



## 功能比较

| 功能                     | pnpm                          | Yarn                 | npm                     |
| ------------------------ | ----------------------------- | -------------------- | ----------------------- |
| 工作空间支持（monorepo） | ✔️                             | ✔️                    | ✔️                       |
| 隔离的 `node_modules`    | ✔️ - 默认                      | ✔️                    | ✔️                       |
| 提升的 `node_modules`    | ✔️                             | ✔️                    | ✔️ - 默认                |
| 自动安装 peers           | ✔️                             | ❌                    | ✔️                       |
| Plug'n'Play              | ✔️                             | ✔️ - 默认             | ❌                       |
| 零安装                   | ❌                             | ✔️                    | ❌                       |
| 修补依赖项               | ✔️                             | ✔️                    | ❌                       |
| 管理 Node.js 版本        | ✔️                             | ❌                    | ❌                       |
| 有锁文件                 | ✔️ - `pnpm-lock.yaml`          | ✔️ - `yarn.lock`      | ✔️ - `package-lock.json` |
| 支持覆盖                 | ✔️                             | ✔️ - 通过 resolutions | ✔️                       |
| 内容可寻址存储           | ✔️                             | ❌                    | ❌                       |
| 动态包执行               | ✔️ - 通过 `pnpm dlx`           | ✔️ - 通过 `yarn dlx`  | ✔️ - 通过 `npx`          |
| 辅助缓存                 | ✔️                             | ❌                    | ❌                       |
| 列出许可证               | ✔️ - 通过 `pnpm licenses list` | ✔️ - 通过插件         | ❌                       |



## **常见操作**

### 将已安装的软件包替换为本地版本

假设您有一个使用 `foo` 包的项目。 您想要对 `foo` 进行更改并在你的项目中测试它们。 在这种情况下，您可以使用 `pnpm link` 将本地版本的 `foo` 链接到您的项目，而 `package.json` 不会被修改。

> 使用 `pnpm link` 命令，手册：[pnpm link | pnpm](https://pnpm.io/zh/cli/link#pnpm-link-dir)

#### **方案一**

1. 进入`foo` 包的项目，使用 `pnpm link --global` ，此操作将 foo 包项目链接到全局的`node_modules`。

   > `pnpm link --global`:将此命令在执行的位置或通过`–dir`选项指定的位置链接到全局的`node_modules`，这样它就可以通过`pnpm link --global <pkg>`从另一个软件包中引用。 此外，如果软件包具有`bin`字段，则软件包的二进制文件将在系统范围内可用。

2. 进入你的项目目录，使用 `pnpm link --global foo` 将指定的包（`<pkg>`）从全局 `node_modules` 链接到你项目中的 `package` 的 `node_modules`。

   > `pnpm link --global <pkg>`: 将指定的包（`<pkg>`）从全局 `node_modules` 链接到 `package` 的 `node_modules`，从该 `package` 中执行或通过 `--dir` 选项指定。

示例代码：

```shell
cd ~/projects/foo # 进入 foo 项目目录
pnpm install # 安装 foo 项目依赖
pnpm link --global # 将 foo 连接到全局的 node_modules
cd ~/projects/my-project # 进入你的项目目录
pnpm link --global foo # 连接全局的项目依赖 foo 到你的项目的 node_modules
```

#### **方案二**

直接将 foo 连接到你项目中的 `node_modules`，而不是使用全局 `node_modules` 文件夹：

```shell
cd ~/projects/foo # 进入 foo 你的项目
pnpm install # 安装 foo 项目依赖
cd ~/projects/my-project # 进入你的项目
pnpm link ~/projects/foo # 连接 foo 项目到你的项目中的 node_modules
```


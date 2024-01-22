<template><div><h2 id="git-基础" tabindex="-1"><a class="header-anchor" href="#git-基础" aria-hidden="true">#</a> Git 基础</h2>
<h3 id="git-原理" tabindex="-1"><a class="header-anchor" href="#git-原理" aria-hidden="true">#</a> GIt 原理</h3>
<p><img src="@source/images/git原理.png" alt=""></p>
<ul>
<li>
<p>git 仓库分为两部分：</p>
<ul>
<li>本地仓库</li>
<li>远程仓库</li>
</ul>
</li>
<li>
<p>git 本地仓库会分成三个区：</p>
</li>
<li>
<ul>
<li><strong>工作区</strong>：我们书写代码的地方，工作的目录就叫工作区。</li>
<li><strong>暂存区</strong>：暂时存储的区域，在git中，代码无法直接从工作区提交到仓库区，而是需要先从工作区添加到暂存区，然后才能从暂存区提交到仓库区。
<ul>
<li>暂存区的目的是避免误操作。</li>
</ul>
</li>
<li><strong>本地仓库区</strong>：将保存在暂存区域的内容永久转储到 Git 仓库中，生成版本号。生成版本号之后，就可以任何的回退到某一个具体的版本。
<ul>
<li>当我们进行commit操作的时候，事实上只是提交到本地的git分支上；而只有进行了push后，才是提交到远程的git分支上</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a> Git 常用命令</h2>
<p><img src="@source/images/git.jpg" alt=""></p>
<h2 id="git-常见操作" tabindex="-1"><a class="header-anchor" href="#git-常见操作" aria-hidden="true">#</a> Git 常见操作</h2>
<h3 id="快速创建新分支" tabindex="-1"><a class="header-anchor" href="#快速创建新分支" aria-hidden="true">#</a> 快速创建新分支</h3>
<ul>
<li>切换到 master 分支(或则作为基分支的节点)： git chekcout master</li>
<li>更新本地仓库代码:  git pull （git pull = git fetch + git merge refs/remotes/origin/master）</li>
<li>创建新分支并切换到新分支： git checkout -b  分支名称</li>
</ul>
<h3 id="解决冲突" tabindex="-1"><a class="header-anchor" href="#解决冲突" aria-hidden="true">#</a> 解决冲突</h3>
<p><strong>场景示例</strong></p>
<p>以 <code v-pre>index.html</code> 文件为例，如果你跟同事都修改了这个文件，就有如下两种场景</p>
<ul>
<li>
<p>场景1：</p>
<ul>
<li>
<p>你在本地修改了 index.html，但还没执行 git commit（未提交到本地仓库），此时如果你执行 git pull，代码无法更新，会有如下提示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>error: Your <span class="token builtin class-name">local</span> changes to <span class="token string">'index.html'</span> would be overwritten by merge.  Aborting.
Please, commit your changes or stash them before you can merge.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>解决方案：</p>
<ul>
<li>
<p>方案1：(不推荐)</p>
<ul>
<li>先备份本地 index.html，然后执行 git revert 撤销文件提交，然后执行 git pull 下载远程代码并合并本地代码，此时代码就可以正常拉取。（此时远程仓库代码和本地代码没有冲突）</li>
<li>然后再通过 diff 比较更新后的代码和本地备份代码 两份代码不一致的地方，修改后再次 git commit 提交代码即可</li>
</ul>
</li>
<li>
<p>方案2：(推荐)</p>
<ul>
<li>
<p>第一步：提交修改到本地仓库</p>
<ul>
<li>git add . （添加到暂存区）</li>
<li>git commit -m&quot;提交备注&quot;  提交修改到本地仓库</li>
</ul>
</li>
<li>
<p>第二步： git pull （获取并合并远程分支代码)</p>
<ul>
<li>
<p>获取并合并远程分支代码后，会出现代码冲突提示：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Auto-merging 冲突文件名
CONFLICT (content): Merge conflict 冲突文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>第三步： 打开代码冲突解决工具，查看冲突部分代码，与同事协商保留的代码。</p>
</li>
<li>
<p>第四步： 解决冲突后的代码后，重新执行 git add .  -&gt;  git commit -m&quot;提交备注&quot;</p>
</li>
</ul>
</li>
<li>
<p>方案3：（推荐）</p>
<ul>
<li>第一步：<a href="https://git-scm.com/docs/git-stash" target="_blank" rel="noopener noreferrer">git stash<ExternalLinkIcon/></a> 暂存本地修改 （暂存后本地工作区回到干净的工作目录）
<ul>
<li>查看暂存信息 git stash list</li>
</ul>
</li>
<li>第二步：git pull （获取并合并远程分支代码)
<ul>
<li>获取并合并远程分支代码后，会出现代码冲突提示</li>
</ul>
</li>
<li>第三步：git  stash pop 还原暂存的内容</li>
<li>第四步：解决文件中冲突的的部分，保存代码后提交</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>场景2：</p>
<ul>
<li>你本地修改了 index.html，而且执行了git commit（提交到本地仓库），此时如果执行 git push 的话就会提示冲突，因为你的同事的版本已经先于你提交了，你们对同一个文件进行了操作，此时 git 就不知道究竟采用你的还是你的同事的代码。
<ul>
<li>解决方案：
*</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://docs.microsoft.com/zh-cn/learn/modules/resolve-merge-conflicts-github/?WT.mc_id=DT-MVP-5003916" target="_blank" rel="noopener noreferrer">在 GitHub 上使用合并冲突解决来解决竞争提交<ExternalLinkIcon/></a></p>
<h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3>
<ul>
<li>
<p>假设删除本地和远程 test 分支</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>删除本地 test 分支：git branch -d test
删除本地的仓库 test 分支：git branch -r -d origin/test
删除 origin 主机的 test 分支：git push origin :test 命令等同于 git push origin --delete test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="git-项目配置" tabindex="-1"><a class="header-anchor" href="#git-项目配置" aria-hidden="true">#</a> Git 项目配置</h2>
<h3 id="git-hook" tabindex="-1"><a class="header-anchor" href="#git-hook" aria-hidden="true">#</a> Git Hook</h3>
<p><strong>参考资料</strong></p>
<p><a href="https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/git-hook.html#lint-staged" target="_blank" rel="noopener noreferrer">vue-element-admin Git Hooks<ExternalLinkIcon/></a></p>
<p><a href="https://www.npmjs.com/package/husky" target="_blank" rel="noopener noreferrer">husky<ExternalLinkIcon/></a></p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<p><a href="https://git-scm.com/about" target="_blank" rel="noopener noreferrer">git 手册<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/131332462" target="_blank" rel="noopener noreferrer">Git 分支设计规范<ExternalLinkIcon/></a></p>
</div></template>



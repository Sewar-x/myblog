<template><div><h1 id="前端标准和规范" tabindex="-1"><a class="header-anchor" href="#前端标准和规范" aria-hidden="true">#</a> 前端标准和规范</h1>
<h2 id="前端规范" tabindex="-1"><a class="header-anchor" href="#前端规范" aria-hidden="true">#</a> 前端规范</h2>
<h2 id="开发协作问题" tabindex="-1"><a class="header-anchor" href="#开发协作问题" aria-hidden="true">#</a> 开发协作问题</h2>
<h4 id="避免重复造轮子" tabindex="-1"><a class="header-anchor" href="#避免重复造轮子" aria-hidden="true">#</a> 避免重复造轮子</h4>
<ul>
<li>
<p>产生原因</p>
<ul>
<li>
<p>开发人员重复造轮子： 团队不同成员负责不同模块，当新模块中存在与已开发模块，由于不同人负责开发，容易导致重复开发工作；</p>
</li>
<li>
<p>例如：附件列表组件、邮件推送组件在多个模块中都有使用，但由于之前负责开发人员不同，每次开发新模块时候都重新开发了相同功能；</p>
</li>
</ul>
</li>
<li>
<p>产生问题：</p>
<ul>
<li>
<p>开发人员重复造轮子：如，相同功能模块重复写了多个接口，多个组件</p>
</li>
<li>
<p>长期积累容易导致项目臃肿、难以维护：如，相同功能使用多个接口和组件，当需要统一改动时，需要查找所有模块项目功能处替换</p>
</li>
</ul>
</li>
<li>
<p>解决措施：重视前期设计，尽量抽取公共功能，把业务逻辑抽象化，多运用设计模式指引我们实现功能</p>
<ul>
<li>
<p>团队达成一致共识</p>
</li>
<li>
<p>制度措施：</p>
<ul>
<li>方法：团队内部定期 CodeReview、定期回顾抽离项目相同功能模块进行重构</li>
<li>优点：团队成员相互了解工作内容和进度，了解代码逻辑，减少维护成本和开发成本，提高开发效率</li>
</ul>
</li>
<li>
<p>开发模式措施：</p>
<ul>
<li>使用 微服务模式 抽离公共组件</li>
</ul>
</li>
<li>
<p>学习回顾项目：</p>
<ul>
<li>学习设计模式，应用于项目，不断优化项目架构</li>
</ul>
</li>
</ul>
</li>
<li>
<p>目标：</p>
<ul>
<li>提高项目可维护性，减少重复开发工作，提高开发效率，减少沟通成本（前后端接口定制，对接成本）；</li>
<li>提供项目通用性和可维护性，减少人员离职成本</li>
</ul>
</li>
</ul>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<p><a href="https://juejin.cn/post/6844903897610321934#11-%E5%9F%B9%E8%AE%AD%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E6%8A%80%E6%9C%AF%E6%B2%89%E6%B7%80" target="_blank" rel="noopener noreferrer">if 我是前端团队 Leader，怎么制定前端协作规范?<ExternalLinkIcon/></a></p>
</div></template>



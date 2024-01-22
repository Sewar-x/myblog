<template><div><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> VUEX</h2>
<h3 id="vuex-基础" tabindex="-1"><a class="header-anchor" href="#vuex-基础" aria-hidden="true">#</a> VUEX 基础</h3>
<ul>
<li>
<p>Vuex  应用开发的状态管理模式。采用集中式存储管理应用的所有组件的状态。</p>
</li>
<li>
<p>Vuex 和单纯的全局对象有以下两点不同：</p>
<ul>
<li><strong>Vuex 的状态存储是响应式的</strong>。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</li>
<li><strong>不能直接改变 store 中的状态。<strong>改变 store 中的状态的唯一途径就是显式地</strong>提交 (commit) mutation</strong>。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。</li>
</ul>
</li>
<li>
<p>Vuex解决了什么问题？</p>
<ul>
<li>多个组件依赖于同一状态时，多层嵌套组件和兄弟组件状态传参问题。</li>
<li>来自不同组件的行为需要变更同一状态问题。以往采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。</li>
</ul>
</li>
<li>
<p>什么时候使用 Vuex?</p>
<ul>
<li>多个组件依赖于同一状态时。</li>
<li>来自不同组件的行为需要变更同一状态。</li>
</ul>
</li>
<li>
<p>核心属性：</p>
<ul>
<li>
<p><strong>State 状态：</strong> 存储状态数据，状态存储是响应式的。</p>
<ul>
<li>获取 state 数据: <code v-pre>this.$store.state</code> 获取， store 实例中读取状态最简单的方法就是在<a href="https://cn.vuejs.org/guide/computed.html" target="_blank" rel="noopener noreferrer">计算属性 (opens new window)<ExternalLinkIcon/></a>中返回某个状态 。</li>
<li>获取多个状态：<code v-pre>mapState</code> 辅助函数。<code v-pre>mapState</code> 返回的是一个对象，使用对象展开运算符<code v-pre>...</code> 将对象混入到外部对象中。</li>
</ul>
</li>
<li>
<p>**Getter：**用于获取 <code v-pre>state</code>。</p>
<ul>
<li>参数：Getter 接受 state 作为其第一个参数，其他 getter 作为第二个参数。</li>
<li>返回值：返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</li>
<li>获取单个 getters：  <code v-pre>this.$store.getters</code> 对象。</li>
<li>获取多个 getters：<code v-pre>mapGetters</code> 辅助函数，返回多个 getters 对象。</li>
</ul>
</li>
<li>
<p>**Mutation：**提交 mutation 是更改状态的唯一方法。</p>
<ul>
<li>
<p>规则：</p>
<ul>
<li><strong>mutation 必须是同步函数</strong>（在回调函数中进行的状态的改变都是不可追踪）</li>
<li>使用常量替代 mutation 事件类型</li>
<li>在组件中使用 <code v-pre>this.$store.commit('xxx')</code> 提交 mutation，或者使用 <code v-pre>mapMutations</code> 辅助函。</li>
</ul>
</li>
<li>
<p>定义和提交：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//定义：第一个参数 state，第二个参数提交数据</span>
<span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>count <span class="token operator">+=</span> payload<span class="token punctuation">.</span>amount
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//提交：第一个参数 mutation 事件类型，第二个参数为提交数据</span>
store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'increment'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//对象风格提交</span>
store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'increment'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实现: 从 _mutations 中取出对应的 mutation，循环执行其中的每一个 mutation。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">commit</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> _options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//_mutations 为用户定义的 mutation 的数组，type 为 namespace + path 拼接字符串</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span> 
    entry<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">commitIterator</span> <span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>Action：<strong>一般用于</strong>调用异步 API</strong> 和<strong>分发多重 mutation</strong></p>
<ul>
<li>
<p>Action 提交的是 mutation，而不是直接变更状态。</p>
</li>
<li>
<p>Action 可以包含任意异步操作。</p>
</li>
<li>
<p>使用：使用 <code v-pre>this.$store.dispatch('xxx')</code> 分发 action，或者使用 <code v-pre>mapActions</code> 辅助函数将组件的 methods 映射为 <code v-pre>store.dispatch</code> 调用（需要先在根节点注入 <code v-pre>store</code>）</p>
</li>
<li>
<p><code v-pre>store.dispatch</code> 可以处理被触发的 action 的处理函数返回的 Promise，并且 <code v-pre>store.dispatch</code> 仍旧返回 Promise，然后 then 提交 commit 修改 state。</p>
</li>
<li>
<p>多次提交同一个action： mapActions辅助函数。</p>
</li>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//定义</span>
<span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">checkout</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token punctuation">,</span> products</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把当前购物车的物品备份起来</span>
    <span class="token keyword">const</span> savedCartItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>cart<span class="token punctuation">.</span>added<span class="token punctuation">]</span>
    <span class="token comment">// 发出结账请求，然后乐观地清空购物车</span>
    <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_REQUEST</span><span class="token punctuation">)</span>
    <span class="token comment">// 购物 API 接受一个成功回调和一个失败回调</span>
    shop<span class="token punctuation">.</span><span class="token function">buyProducts</span><span class="token punctuation">(</span>
      products<span class="token punctuation">,</span>
      <span class="token comment">// 成功操作</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_SUCCESS</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 失败操作</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">commit</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token constant">CHECKOUT_FAILURE</span><span class="token punctuation">,</span> savedCartItems<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//使用 promise</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'checkout'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'checkout'</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 使用 async await </span>
 <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">actionA</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'checkout'</span><span class="token punctuation">,</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实现：取出 _actions 中的所有对应 action，将其执行，如果有多个则用 Promise.all 进行包装。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//_actions 为用户定义的 action 的数组，type 为 namespace + path 拼接字符串</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_actions<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> entry<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span>
    <span class="token operator">?</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">handler</span> <span class="token operator">=></span> <span class="token function">handler</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> entry<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>Module：</strong></p>
<ul>
<li>产生：由于使用单一状态树，应用的所有状态会集中到一个比较大的对象，当应用变得非常复杂时，<code v-pre>store</code> 对象就有可能变得相当臃肿。</li>
<li>作用：将 store 分割成<strong>模块（module）</strong>。每个模块拥有自己的 state、mutation、action、getter、嵌套子模块。</li>
<li>数据结构：模块的设计就是一个树型结构，<code v-pre>store</code> 本身可以理解为一个 <code v-pre>root module</code>，它下面的 <code v-pre>modules</code> 就是子模块</li>
<li>命名空间：
<ul>
<li>全局命名空间：默认情况为全局命名空间，多个模块能够对同一 <code v-pre>mutation</code> 或 <code v-pre>action</code> 作出响应。</li>
<li>局部命名空间：<code v-pre>namespaced: true</code> 的方式使其成为带命名空间的模块，所有 <code v-pre>getter</code>、<code v-pre>action</code> 及 <code v-pre>mutation</code> 都会自动根据模块注册的路径调整命名。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>规则：</p>
<ul>
<li>应用层级的状态应该集中到单个 store 对象中。</li>
<li>提交 <strong>mutation</strong> 是更改状态的唯一方法，并且这个过程是同步的。</li>
<li>异步逻辑都应该封装到 <strong>action</strong> 里面。</li>
</ul>
</li>
<li>
<p>流程：</p>
<ul>
<li>
<p>页面组件 dispatch 分发 action 获取数据；</p>
</li>
<li>
<p>Action 中异步获取数据，获取后 commit 同步提交 mutation;</p>
</li>
<li>
<p>mutation 同步修改 state 状态，state 通过 getters 通知变化；</p>
</li>
<li>
<p>在组件的计算属性中，通过 getters 来动态获取 state 中的值。</p>
<p><img src="@source/flow-graph/vuex流程.png" alt=""></p>
</li>
<li>
<p>Vuex 缺点：</p>
<ul>
<li>vuex中存储的数据不能持久化。vuex 的 store 中的数据是保存在运行内存中的，当页面刷新后，页面会重新加载 vue 实例，vuex 里面的数据就会被重新赋值，这样就会出现页面刷新vuex中的数据丢失的问题。需要监听处理来维持vuex存储的数据状态持久化。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<ul>
<li>
<p>初始化过程：</p>
<ul>
<li>使用 Vue 插件机制状态 Vuex；</li>
<li>vuex 的 <code v-pre>install</code> 中 使用 <code v-pre>Vue.mixin</code>  全局混入 <code v-pre>beforeCreate</code> 钩子；</li>
<li><code v-pre>new Vue()</code> 创建 Vue 实例时在 init() 方法中调用  <code v-pre>beforeCreate</code> 钩子；</li>
<li><code v-pre>beforeCreate</code> 钩子中执行 <code v-pre>vuexInit()</code> ：把 <code v-pre>options.store</code> （<code v-pre>Store</code> 实例）保存在所有组件的 <code v-pre>this.$store</code> 中。</li>
</ul>
</li>
<li>
<p><img src="@source/flow-graph/vuex初始化过程.jpg" alt=""></p>
</li>
</ul>
<h3 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h3>
<ul>
<li>
<p>实例化过程分为三个阶段</p>
<ul>
<li>
<p><code v-pre>new ModuleCollection(options)</code> 建立模块树：</p>
<ul>
<li>创建一个子模块；</li>
<li>模块 <code v-pre>path </code>中包含模块父子关系，遍历模块 <code v-pre>path</code> ，通过每个子模块通过路径找到它的父模块，然后通过父模块的 <code v-pre>addChild</code> 方法建立父子关系</li>
<li>递归执行这样的过程，最终就建立一颗完整的模块树</li>
</ul>
</li>
<li>
<p><code v-pre>installModule</code> 安装模块：</p>
<ul>
<li>完成模块下的 state、getters、actions、mutations 的初始化工作</li>
<li>并且通过递归遍历的方式，就完成所有子模块的安装工作</li>
</ul>
</li>
<li>
<p><code v-pre>resetStoreVM</code> 建立 <code v-pre>getters</code> 和 <code v-pre>state</code> 的联系: 使 getter 缓存 state。</p>
<ul>
<li>
<p>**vuex 存储响应式原理：**创建 vue 实例，将 state 作为 vue 实例的 data 数据， getters 作为 computed 数据，在 vue 实例化时,会进行 state 和 getter 依赖收集，在数据修改时候触发更新。</p>
</li>
<li>
<p>从设计上 <code v-pre>getters</code> 的获取就依赖了 <code v-pre>state</code> ，并且希望它的依赖能被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p>
</li>
<li>
<p>因此这里利用了 Vue 中 <code v-pre>computed</code> 计算属性来实现 getters 缓存 state：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">forEachValue</span><span class="token punctuation">(</span>wrappedGetters<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// use computed to leverage its lazy-caching mechanism</span>
    computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// for local getters</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// use a Vue instance to store the state tree</span>
  <span class="token comment">// suppress warnings just in case the user has added</span>
  <span class="token comment">// some funky global mixins</span>
  <span class="token keyword">const</span> silent <span class="token operator">=</span> Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>silent
  Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>silent <span class="token operator">=</span> <span class="token boolean">true</span>
  store<span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$$state</span><span class="token operator">:</span> state
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    computed
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<p><img src="@source/flow-graph/vuex实例化过程.png" alt=""></p>
<h3 id="相关问题" tabindex="-1"><a class="header-anchor" href="#相关问题" aria-hidden="true">#</a> 相关问题</h3>
<p><strong>基础题：</strong></p>
<blockquote>
<p>Vuex中状态是对象时，使用时要注意什么？</p>
</blockquote>
<ul>
<li>因为对象是引用类型，复制后改变属性还是会影响原始数据，这样会改变state里面的状态，是不允许，所以先用深度克隆复制对象，再修改。</li>
</ul>
<blockquote>
<p>Vuex中要从state派生一些状态出来，且多个组件使用它，该怎么做？</p>
</blockquote>
<ul>
<li>
<p>使用getter属性，相当Vue中的计算属性computed，只有原状态改变派生状态才会改变。</p>
</li>
<li>
<p>getter接收两个参数，第一个是state，第二个是getters(可以用来访问其他getter)。</p>
</li>
<li>
<p>然后在组件中可以用计算属性computed通过<code v-pre>this.$store.getters.total</code>这样来访问这些派生转态。</p>
</li>
</ul>
<blockquote>
<p>vuex中直接修改 state 与 commit 来修改 state 的区别?</p>
</blockquote>
<ul>
<li>可以通过 <code v-pre>this.$store.state.aaa = xxx</code> 进行 state 值的修改;</li>
<li>当<code v-pre>vuex</code>的模式改成严格模式下，在通过直接修改<code v-pre>state</code>的方式修改状态的时候，控制台会报错；</li>
<li>使用commit提交状态修改是为了配合开发者工具使用，使得状态更好的被最终，保存状态快照，实现时间漫游／回滚之类的操作;</li>
</ul>
<blockquote>
<p>在模块中，getter和mutation接收的第一个参数state，是全局的还是模块的?</p>
</blockquote>
<ul>
<li>
<p>对于模块内部的 mutation 和 getter，接收的第一个参数是<strong>模块的局部状态对象</strong>。</p>
<p>参考： <a href="https://vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B1%80%E9%83%A8%E7%8A%B6%E6%80%81" target="_blank" rel="noopener noreferrer">模块的局部状态对象<ExternalLinkIcon/></a></p>
</li>
</ul>
<blockquote>
<p>在模块中，getter和mutation和action中怎么访问全局的state和getter？</p>
</blockquote>
<ul>
<li>
<p>在getter中可以通过第三个参数rootState访问到全局的state,可以通过第四个参数rootGetters访问到全局的getter。</p>
</li>
<li>
<p>在mutation中不可以访问全局的satat和getter，只能访问到局部的state。</p>
</li>
<li>
<p>在action中第一个参数context中的<code v-pre>context.rootState</code>访问到全局的state，<code v-pre>context.rootGetters</code>访问到全局的getter。</p>
</li>
</ul>
<p><strong>应用题：</strong></p>
<blockquote>
<p>vuex 数据表单可以使用 v-model 吗？</p>
</blockquote>
<ul>
<li>
<p>不能。</p>
</li>
<li>
<p>当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 <code v-pre>v-model</code> 会比较棘手：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"obj.message"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​		假设这里的 <code v-pre>obj</code> 是在计算属性中返回的一个属于 Vuex store 的对象，在用户输入时，<code v-pre>v-model</code> 会试图直接修改 <code v-pre>obj.message</code>。在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误。</p>
</li>
<li>
<p>解决方案一：通过computed计算属性来转换，computed 数据 get 方法返回 state，set 方法提交 mutation</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"message"</span><span class="token operator">></span>
<span class="token comment">// ...</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>message
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateMessage'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>解决方案二：用“Vuex 的思维”去解决这个问题的方法是：给 <code v-pre>&lt;input&gt;</code> 中绑定 value，然后侦听 <code v-pre>input</code> 或者 <code v-pre>change</code> 事件，在事件回调中调用一个方法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">"message"</span> @input<span class="token operator">=</span><span class="token string">"updateMessage"</span><span class="token operator">></span>
<span class="token comment">// ...</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">message</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>message
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">updateMessage</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateMessage'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>vue 中 ajax 请求代码应该写在组件的 methods 中还是 vuex 的 actions 中？</p>
</blockquote>
<ul>
<li>
<p>如果请求来的数据不需要其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。</p>
</li>
<li>
<p>如果请求的数据被其他地方复用，则将请求放入action里。方便复用，并包装成promise返回，在调用处用async await处理返回的数据。</p>
</li>
</ul>
<blockquote>
<p>Vuex中有两个action，分别是actionA和actionB，其内都是异步操作，在actionB要提交actionA，需在actionA处理结束再处理其它操作，怎么实现？</p>
</blockquote>
<p>利用 async / await:</p>
<ul>
<li>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token keyword">async</span> <span class="token function">actionA</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'gotData'</span><span class="token punctuation">,</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token keyword">async</span> <span class="token function">actionB</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">await</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'actionA'</span><span class="token punctuation">)</span> <span class="token comment">// 等待 actionA 完成</span>
   <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'gotOtherData'</span><span class="token punctuation">,</span> <span class="token keyword">await</span> <span class="token function">getOtherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3>
<h4 id="vuex和localstorage-比较" tabindex="-1"><a class="header-anchor" href="#vuex和localstorage-比较" aria-hidden="true">#</a> Vuex和localStorage 比较</h4>
<p>共同点：</p>
<ul>
<li>用于存储数据</li>
<li>用于组件间 数据通信</li>
</ul>
<p>区别：</p>
<ul>
<li>
<p>存储位置不同：</p>
<ul>
<li>Vuex 存储在内存，</li>
<li>localstorage（本地存储）则以文件的方式存储在本地(浏览器),永久保存；</li>
</ul>
</li>
<li>
<p>存储空间来：</p>
<ul>
<li>Vuex取决于可用内存和浏览器的限制</li>
<li>localstorage 都有个默认的大小（至少5MB，由浏览器决定），超出大小则需要用户同意增加空间；</li>
</ul>
</li>
<li>
<p>共享：</p>
<ul>
<li>Vuex无法跨标签页、跨物理页面共享</li>
<li>localstorage 则可以在同一域名底下共享</li>
</ul>
</li>
<li>
<p>独有能力：</p>
<ul>
<li>vuex的状态存储是响应式的：当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会得到更新</li>
</ul>
</li>
<li>
<p>应用：</p>
<ul>
<li>当需要响应式共享数据时， 需要使用使用Vuex来实现
<ul>
<li>vuex与localStorage结合，实现组件间通信，同时刷新页面数据不丢失</li>
</ul>
</li>
<li>当需求是刷新页面仍然可以获取到数据，或者是同一域名下不同项目共享数据，需要使用 localStorage</li>
</ul>
</li>
</ul>
<h4 id="vuex数据持久化" tabindex="-1"><a class="header-anchor" href="#vuex数据持久化" aria-hidden="true">#</a> Vuex数据持久化</h4>
<blockquote>
<p>Vuex 实现数据持久化？ vuex 如何解决页面刷新后数据丢失的问题？</p>
</blockquote>
<ul>
<li>
<p>方案1：<code v-pre>Vuex + sessionStorage/localStorage</code></p>
<ul>
<li>
<p>实现：</p>
<ul>
<li>封装 Storage 对象（封装目的：sessionStorage/localStorage 保存的是字符串，避免每次获取 JSON.parse 和存入都使用 JSON.stringify 转换）</li>
<li>Vuex 中 state 读取 Storage 中数据， mutation 提交数据更改时候存入 Storage。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> Storage <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ==================sessionStorage设置缓存================</span>
  <span class="token comment">// 设置缓存</span>
  <span class="token function-variable function">sessionSet</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> data<span class="token punctuation">,</span> expires</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>expires <span class="token operator">&amp;&amp;</span> expires <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>expires<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 获取缓存</span>
  <span class="token function-variable function">sessionGet</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> expires <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">>=</span> expires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 清除缓存</span>
  <span class="token function-variable function">sessionRemove</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ==================localStorage设置缓存==================</span>
  <span class="token comment">// 设置缓存</span>
  <span class="token function-variable function">localSet</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> data<span class="token punctuation">,</span> expires</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>expires <span class="token operator">&amp;&amp;</span> expires <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>expires<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 获取缓存</span>
  <span class="token function-variable function">localGet</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> expires <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">>=</span> expires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__expires</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 清除缓存</span>
  <span class="token function-variable function">localRemove</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Storage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>方案二： 插件实现。</p>
<ul>
<li><a href="https://www.npmjs.com/package/vuex-persistedstate" target="_blank" rel="noopener noreferrer">vuex-persistedstate 插件<ExternalLinkIcon/></a>：<code v-pre>persistedState</code>内部默认使用<code v-pre>localStorage</code>存储。</li>
<li><a href="https://github.com/championswimmer/vuex-persist" target="_blank" rel="noopener noreferrer">vuex-persist 插件<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<p><a href="https://vuex.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">vuex3.x文档<ExternalLinkIcon/></a></p>
</div></template>



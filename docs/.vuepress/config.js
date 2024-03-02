const { config } = require("vuepress-theme-hope");
module.exports = config({
  title: 'Sewen 博客',
  description: 'sewen 的前端学习笔记、博客、前端基础总结、技术深度剖析、面试题总结、算法总结、项目过程总结',
  head: [
    ['link', { rel: 'icon', href: './mylogo.png' }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  themeConfig: {
    logo: './mylogo.png',  // 左上角logo
    hostname: 'https://sewar-x.github.io/',
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      {
        text: '前端基础',
        ariaLabel: 'Front-end Basics',
        items: [
          { text: 'HTML', link: '../html/' },
          { text: 'Css', link: '../css/' },
          { text: 'JavaScript', link: '../javascript/' },
          { text: 'TypeScript', link: '../typescript/' },
        ]
      },
      {
        text: '计算机基础',
        ariaLabel: '计算机基础',
        items: [
          { text: '数据结构和算法', link: '../algorithms/' },
          { text: '计算机网络/HTTP', link: '../network/' },
          { text: '输入url到页面展示全过程', link: '../network/输入url到页面展示全过程/' },
          { text: '操作系统', link: '../operating-system/' },
          { text: '设计模式', link: '../design-model/' },
          { text: 'Web安全', link: '../Web-Security/' }
        ]
      },
      {
        text: '框架和源码分析',
        ariaLabel: '框架和源码分析',
        items: [
          { text: 'Vue2.x 分析专题', link: '../vue2/' },
          { text: 'Vue3.x 分析专题', link: '../vue3/' },
          { text: 'React  分析专题', link: '../React/' },
          { text: 'Vue2 与 Vue3 对比分析', link: '../FrameworkPK/Vue2VsVue3' },
          { text: 'Vue 与 React 对比分析', link: '../FrameworkPK/VueVsReact' },
          { text: 'Axios源码分析专题', link: '../axios/' },
        ]
      },
      {
        text: '浏览器',
        ariaLabel: '浏览器',
        items: [
          { text: '浏览器原理', link: '../browser/浏览器原理/' },
          { text: '前端缓存和存储', link: '../browser/前端缓存和存储/' },
          { text: '前端调试技巧', link: '../performance/前端调试技巧/' },
        ]
      },

      {
        text: '服务器',
        ariaLabel: 'node.js',
        items: [
          { text: 'Node.js', link: '../node/' },
          { text: 'Linux', link: '../linux/' },
          { text: 'MySQL', link: '../mysql/' },
          { text: 'Nginx', link: '../nginx/' },
          { text: 'Docker', link: '../docker/' },
        ]
      },
      {
        text: '性能优化',
        ariaLabel: '浏览器和性能优化',
        items: [
          { text: '性能优化指标和监控', link: '../performance/性能优化指标和监控/' },
          { text: '前端性能优化方案', link: '../performance/前端性能优化方案/' },
          { text: '一次管理后台的渲染优化', link: '../performance/一次管理后台的渲染优化/' },
        ]
      },
      {
        text: '前端工程',
        ariaLabel: '前端工程',
        items: [
          { text: '前端工程化', link: '../Front-end-Engineering/前端工程化/' },
          { text: '前端渲染架构', link: '../Front-end-Engineering/前端渲染架构/' },
          { text: '前端架构实践', link: '../Front-end-Engineering/前端架构实践/' },
          { text: 'webpack专题', link: '../webpack/' },
          { text: 'vite专题', link: '../vite/' },
          { text: 'npm', link: '../Front-end-Engineering/npm/' },
          { text: 'Git', link: '../git/' },
          { text: '自动构建和部署', link: '../projectDeploy/自动构建和部署/' },
        ]
      },
      {
        text: '项目实践',
        ariaLabel: '项目实践',
        items: [
          { text: '前端部署', link: '../projectDeploy/' },
          { text: '组件和组件封装实践', link: '../componentsEncapsulation/组件和组件封装实践/' },
          { text: '登录与单点登录', link: '../projectsSummary/登录与单点登录/' },
          { text: '权限管理方案实践', link: '../projectsSummary/权限管理方案实践/' },
          { text: 'Echarts二次封装实践', link: '../projectsSummary/Echarts二次封装实践/' },
          { text: '文档在线预览和编辑方案', link: '../projectsSummary/文档在线预览和编辑方案/' },
          { text: '移动端开发实践', link: '../projectsSummary/移动端开发实践/' },
        ]
      },
      {
        text: '项目搭建',
        ariaLabel: '项目搭建到原理分析',
        items: [
          { text: '从零到一搭建SSR项目', link: '../projectsSummary/从零到一搭建SSR项目/' },
          { text: '从零到一搭建移动端SSG项目', link: '../projectsSummary/从零到一搭建移动端SSG项目/' },
          { text: '移动端SSG项目实践', link: '../projectsSummary/移动端SSG项目实践/' },
          { text: '从零到一搭建Vue2工程化项目', link: '../projectsSummary/从零到一搭建Vue2工程化项目/' },
          { text: '从零到一搭建Vue3工程化项目', link: '../projectsSummary/从零到一搭建Vue3工程化项目/' },
          { text: '搭建低代码平台', link: '../projectsSummary/搭建低代码平台/' },
          { text: '混合桌面应用开发实践', link: '../projectsSummary/混合桌面应用开发实践/' },
        ]
      },
    ],
    sidebar: {
      '/javascript/': [
        '',
        '异步',
        'Promise',
        '原理实现',
        '应用题'
      ],
      '/algorithms/': [ //算法和数据结构
        '',
        '数组',
        '栈和队列',
        '链表',
        '字符串',
        '树',
        '堆',
        '图',
        '哈希表',
        '查找',
        '排序',
        '递归',
        '分治',
        '回溯',
        '动态规划',
        '贪心算法',
        '数学运算'
      ],
      '/vue2/': [
        '',
        'Vue2原理和源码分析',
        'Vuex原理分析',
        'VueRouter原理分析',
        'VueSSR原理分析',
        'VueCli源码分析',
      ],
      '/vue3/': [
        '',
        'Vue3源码分析'
      ],
      '/node/': [
        '',
        '使用docker服务node部署',
        'Node性能',
        '常见问题汇总'
      ],
      '/git/': [
        '',
        'Git流程规范'
      ],
      '/componentsEncapsulation/': [
        '',
        '从零到一搭建公共组件库',
        'Element二次封装',
        'JSON组件',
      ],
      '/webpack/': [
        '',
        'webpack构建原理',
        'Loader和Plugin原理',
        'DevServer原理',
        'webpack优化',
        'webpackAPI分析',
        'webpack项目实践',
        'Vue2.5项目webpack分析'
      ],
      '/vite/': [
        '',
        'Vite原理解析'
      ],
      '/projectDeploy/':[
        '',
        '前端部署原理',
        '自动构建和部署',
        '前端发版静态资源404问题'
      ]
    },

    sidebarDepth: 6,
    displayAllHeaders: true,
    blog: {
      avatar: './mylogo.png',
      intro: "../outline.md",
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com/Sewar-x/Sewar-x.github.io",
        Wechat: "1567910907"
      },
    },
    pageInfo: {
      author: true,
      time: true,
      category: true,
      tag: true,
      'reading-time': true,
      word: true,
      visitor: true
    }
  },
  markdown: {
    // ......
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  }
})
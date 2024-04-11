export default [ // 导航栏配置
    { text: '首页', link: '/' },
    {
        text: '前端基础',
        children: [
            { text: 'HTML', link: '/article/html/' },
            { text: 'Css', link: '/article/css/' },
            { text: 'JavaScript', link: '/article/javascript/' },
            { text: 'TypeScript', link: '/article/typescript/' },
        ]
    },
    {
        text: '计算机基础',
        ariaLabel: '计算机基础',
        children: [
            { text: '数据结构和算法', link: '/article/算法和数据结构/' },
            { text: '计算机网络/HTTP', link: '/article/network/' },
            { text: '输入url到页面展示全过程', link: '/article/network/输入url到页面展示全过程.md', activeMatch: "/article/network/输入url到页面展示全过程/", },
            { text: '操作系统', link: '/article/操作系统/' },
            { text: '设计模式', link: '/article/设计模式/' },
            { text: 'Web安全', link: '/article/Web安全/' }
        ]
    },
    {
        text: '框架和源码分析',
        ariaLabel: '框架和源码分析',
        children: [
            { text: 'Vue2 专题', link: '/article/vue2/Vue2原理和源码分析.md' },
            { text: 'Vue3 专题', link: '/article/vue3/Vue3基础.md' },
            { text: 'React 专题', link: '/article/React/React基础.md' },
            { text: 'Vue Vs React', link: '/article/React/VueVsReact.md' },
            { text: 'webpack 专题', link: '/article/webpack/webpack构建原理.md' },
            { text: 'vite 专题', link: '/article/vite/' },
            { text: 'Axios 专题', link: '/article/axios/' },
        ]
    },
    {
        text: '浏览器',
        ariaLabel: '浏览器',
        children: [
            { text: '浏览器原理', link: '/article/browser/浏览器原理.md' },
            { text: '前端缓存和存储', link: '/article/browser/前端缓存和存储.md' },
            { text: '前端调试技巧', link: '/article/性能优化和调试/前端调试技巧.md' },
        ]
    },

    {
        text: '服务器',
        ariaLabel: 'node.js',
        children: [
            { text: 'Node.js', link: '/article/node/' },
            { text: 'Linux', link: '/article/linux/' },
            { text: 'MySQL', link: '/article/mysql/' },
            { text: 'Nginx', link: '/article/nginx/' },
            { text: 'Docker', link: '/article/docker/' },
        ]
    },
    {
        text: '性能优化',
        ariaLabel: '浏览器和性能优化',
        children: [
            { text: '性能优化指标和监控', link: '/article/性能优化和调试/性能优化指标和监控.md' },
            { text: '前端性能优化方案', link: '/article/性能优化和调试/前端性能优化方案.md' },
            { text: '一次管理后台的渲染优化', link: '/article/性能优化和调试/一次管理后台的渲染优化.md' },
        ]
    },
    {
        text: '前端工程',
        ariaLabel: '前端工程',
        children: [
            { text: '前端工程化', link: '/article/前端工程化/前端工程化.md' },
            { text: '前端渲染架构', link: '/article/前端工程化/前端渲染架构.md' },
            { text: '前端架构实践', link: '/article/前端工程化/前端架构实践.md' },
            { text: '自动构建和部署', link: '/article/项目部署/自动构建和部署.md' },
            { text: '前端组件化', link: '/article/前端组件化/Vue组件基础.md' },
            { text: '前端模块化', link: '/article/前端工程化/前端模块化.md' },
            { text: '包管理器', link: '/article/npm/npm与pnpm.md' },
            { text: 'Git', link: '/article/git/' }
        ]
    },
    {
        text: '项目实践',
        ariaLabel: '项目实践',
        children: [
            { text: '前端部署', link: '/article/项目部署/前端部署原理.md' },
            { text: '登录与单点登录', link: '/article/项目总结/登录与单点登录.md' },
            { text: '权限管理方案实践', link: '/article/项目总结/权限管理方案实践.md' },
            { text: 'Echarts二次封装实践', link: '/article/项目总结/Echarts二次封装实践.md' },
            { text: '文档在线预览和编辑方案', link: '/article/项目总结/文档在线预览和编辑方案.md' },
            { text: '移动端开发实践', link: '/article/项目总结/移动端开发实践.md' },
        ]
    },
    {
        text: '项目搭建',
        ariaLabel: '项目搭建到原理分析',
        children: [
            { text: '从零到一搭建SSR项目', link: '/article/项目总结/从零到一搭建SSR项目.md' },
            { text: '从零到一搭建移动端SSG项目', link: '/article/项目总结/从零到一搭建移动端SSG项目.md' },
            { text: '移动端SSG项目实践', link: '/article/项目总结/移动端SSG项目实践.md' },
            { text: '从零到一搭建Vue2工程化项目', link: '/article/项目总结/从零到一搭建Vue2工程化项目.md' },
            { text: '从零到一搭建Vue3工程化项目', link: '/article/项目总结/从零到一搭建Vue3工程化项目.md' },
            { text: '搭建低代码平台', link: '/article/项目总结/搭建低代码平台.md' },
            { text: '混合桌面应用开发实践', link: '/article/项目总结/混合桌面应用开发实践.md' },
        ]
    },
]
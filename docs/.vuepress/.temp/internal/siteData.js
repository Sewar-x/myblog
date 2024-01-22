export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Sewen 博客\",\"description\":\"sewen 的前端学习笔记、博客、前端基础总结、技术深度剖析、面试题总结、算法总结、项目过程总结\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"./mylogo.png\"}],[\"script\",{\"src\":\"https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js\"}],[\"script\",{\"src\":\"https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
// 我们默认导出了主题对象
export default hopeTheme({
    navbar,
    sidebar: "structure",
    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Language", "Repo", "Outlook", "Search"],
    },
    plugins: {
        blog: true,
        prismjs: true
    },
    blog: {
        avatar: './mylogo.png',
        name: 'Sewen',
        description: '前端开发者, 热爱前端,喜欢折腾',
        intro: 'https://github.com/Sewar-x',
        medias: {
            GitHub: "https://github.com/Sewar-x",
            Wechat: "15679109097"
        },
        sidebarDisplay: "mobile"
    },
    markdown: {
        headers: {
            level: [2, 6]
        }
    },
    repo: 'https://github.com/Sewar-x',
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    // iconAssets: "//at.alicdn.com/t/c/font_4498493_4q0qio6tw97.css"
    iconAssets: "fontawesome",
    print: true,
    fullscreen: true,
});

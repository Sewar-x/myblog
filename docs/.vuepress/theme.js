/**
 * 使用 vuepress-theme-hope 主题插件
 * docs: https://theme-hope.vuejs.press/zh/
 */
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
// 我们默认导出了主题对象
export default hopeTheme({
    darkmode: "switch",
    hostname: "https://github.com/Sewar-x/myblog/",
    author: {
        name: "Sewen",
        url: "https://github.com/Sewar-x",
        email: "596777598@qq.com",
    },
    navbar,
    sidebar: "structure",
    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Language", "Repo", "Outlook", "Search"],
    },
    plugins: {
        copyCode: true,  // 使用主题内置的 copyCode 功能
        shiki: false,
        blog: true,
        prismjs: {
            theme: {
                light: 'ghcolors',
                dark: 'coldark-dark'
            },
            notationDiff: true,
            notationErrorLevel: true,
            notationWordHighlight: true
        },
        search: true,
        watermark: true,
        mdEnhance: {
            // 启用图片懒加载
            imgLazyload: true,
            // 启用图片标记
            imgMark: true,
            //脚注
            footnote: true,
        },
        copyright: {
            global: true,
            author: "Sewen",
            license: "MIT"
        },
        comment: {
            provider: "Giscus",
            repo: "Sewar-x/myblog",
            repoId: "MDEwOlJlcG9zaXRvcnkzODAyOTIzOTU=",
            category: "Announcements",
            categoryId: "DIC_kwDOFqrNK84Ceik1",
        },
    },
    blog: {
        avatar: './mylogo.png',
        name: 'Sewen',
        description: '前端开发者, 热爱前端,喜欢探索',
        roundAvatar: true,
        intro: 'https://github.com/Sewar-x',
        medias: {
            GitHub: "https://github.com/Sewar-x",
            Wechat: "15679109097"
        },
    },
    markdown: {
        headers: {
            level: [4, 5]
        },
        toc: {
            level: [4, 5]
        },
        anchor: {
            level: [4, 5]
        },
    },
    repo: 'https://github.com/Sewar-x',
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    iconAssets: "fontawesome-with-brands",
    print: true,
    fullscreen: true,
});

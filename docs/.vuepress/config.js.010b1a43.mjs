// docs/.vuepress/config.js
import { defineUserConfig } from "vuepress";
import { webpackBundler } from "@vuepress/bundler-webpack";

// docs/.vuepress/theme.js
import { hopeTheme } from "vuepress-theme-hope";

// docs/.vuepress/navbar.js
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  // 导航栏配置
  { text: "\u9996\u9875", icon: "house", link: "/" },
  {
    text: "\u524D\u7AEF\u4E0E\u8BA1\u7B97\u673A\u57FA\u7840",
    icon: "thumbtack",
    children: [
      {
        text: "\u524D\u7AEF\u57FA\u7840",
        children: [
          { text: "JavaScript", link: "/article/javascript/" },
          { text: "TypeScript", link: "/article/typescript/" },
          { text: "Css", link: "/article/css/CSS\u57FA\u7840" }
        ]
      },
      {
        text: "\u8BA1\u7B97\u673A\u57FA\u7840",
        ariaLabel: "\u8BA1\u7B97\u673A\u57FA\u7840",
        children: [
          { text: "\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5", link: "/article/\u7B97\u6CD5\u548C\u6570\u636E\u7ED3\u6784/" },
          { text: "\u8F93\u5165url\u5230\u9875\u9762\u5C55\u793A\u5168\u8FC7\u7A0B", link: "/article/network/\u8F93\u5165url\u5230\u9875\u9762\u5C55\u793A\u5168\u8FC7\u7A0B.md" },
          { text: "\u64CD\u4F5C\u7CFB\u7EDF", link: "/article/\u64CD\u4F5C\u7CFB\u7EDF/" },
          { text: "\u8BBE\u8BA1\u6A21\u5F0F", link: "/article/\u8BBE\u8BA1\u6A21\u5F0F/" },
          { text: "Web\u5B89\u5168", link: "/article/Web\u5B89\u5168/" }
        ]
      }
    ]
  },
  {
    text: "\u6846\u67B6\u4E0E\u6E90\u7801\u5206\u6790",
    icon: "code",
    ariaLabel: "\u6846\u67B6\u548C\u6E90\u7801\u5206\u6790",
    children: [
      {
        text: "Vue \u4E13\u9898",
        ariaLabel: "Vue \u4E13\u9898",
        children: [
          { text: "Vue2 \u539F\u7406\u548C\u6E90\u7801\u5206\u6790", link: "/article/vue2/Vue2\u539F\u7406\u548C\u6E90\u7801\u5206\u6790.md" },
          { text: "VueRouter \u539F\u7406\u5206\u6790", link: "/article/vue2/VueRouter\u539F\u7406\u5206\u6790.md" },
          { text: "VueSSR \u539F\u7406\u5206\u6790", link: "/article/vue2/VueSSR\u539F\u7406\u5206\u6790.md" },
          { text: "Vuex \u539F\u7406\u5206\u6790", link: "/article/vue2/Vuex\u539F\u7406\u5206\u6790.md" },
          { text: "VueCli \u6E90\u7801\u5206\u6790", link: "/article/vue2/VueCli\u6E90\u7801\u5206\u6790.md" },
          { text: "Vue2 API \u539F\u7406\u5206\u6790", link: "/article/vue2/Vue2 API\u539F\u7406\u5206\u6790.md" },
          { text: "Vue2 Vs Vue3", link: "/article/vue3/Vue2VsVue3.md" },
          { text: "Vue3 \u57FA\u7840", link: "/article/vue3/Vue3\u57FA\u7840.md" },
          { text: "Vue3 \u6E90\u7801\u5206\u6790", link: "/article/vue3/Vue3\u6E90\u7801\u5206\u6790/\u54CD\u5E94\u5F0F\u539F\u7406.md" }
        ]
      },
      {
        text: "React \u4E13\u9898",
        icon: "react",
        ariaLabel: "React \u4E13\u9898",
        children: [
          { text: "React \u57FA\u7840", link: "/article/React/React\u57FA\u7840.md" },
          { text: "React \u751F\u547D\u5468\u671F", link: "/article/React/React\u751F\u547D\u5468\u671F.md" },
          { text: "React \u7EC4\u4EF6\u901A\u4FE1", link: "/article/React/React\u7EC4\u4EF6\u901A\u4FE1.md" },
          { text: "React \u7EC4\u4EF6\u6E32\u67D3", link: "/article/React/React\u7EC4\u4EF6\u6E32\u67D3\u539F\u7406/React\u7EC4\u4EF6\u6E32\u67D3\u6D41\u7A0B.md" },
          { text: "React Fiber", link: "/article/React/React-Fiber.md" },
          { text: "React \u6027\u80FD\u4F18\u5316", link: "/article/React/React\u6027\u80FD\u4F18\u5316.md" },
          { text: "React 19", link: "/article/React/React19.md" },
          { text: "React \u9762\u8BD5\u9898", link: "/article/React/React\u9762\u8BD5\u9898.md" },
          { text: "Vue Vs React", link: "/article/React/VueVsReact.md" }
        ]
      },
      {
        text: "WebPack \u4E13\u9898",
        icon: "cube",
        ariaLabel: "WebPack \u4E13\u9898",
        children: [
          { text: "webpack \u57FA\u7840", link: "/article/webpack/webpack\u57FA\u7840.md" },
          { text: "webpack \u6784\u5EFA\u539F\u7406", link: "/article/webpack/webpack\u6784\u5EFA\u539F\u7406.md" },
          { text: "Loader\u548CPlugin \u539F\u7406", link: "/article/webpack/Loader\u548CPlugin\u539F\u7406.md" },
          { text: "DevServer \u539F\u7406", link: "/article/webpack/DevServer\u539F\u7406.md" },
          { text: "webpack \u4F18\u5316", link: "/article/webpack/webpack\u4F18\u5316.md" },
          { text: "webpack API \u5206\u6790", link: "/article/webpack/webpackAPI\u5206\u6790.md" }
        ]
      },
      {
        text: "Vite \u4E13\u9898",
        ariaLabel: "Vite \u4E13\u9898",
        children: [
          { text: "Vite \u57FA\u7840", link: "/article/vite/" },
          { text: "Vite \u6027\u80FD\u4F18\u5316", link: "/article/vite/Vite\u6027\u80FD\u4F18\u5316.md" },
          { text: "Vite \u539F\u7406\u89E3\u6790", link: "/article/vite/Vite\u539F\u7406\u89E3\u6790.md" }
        ]
      },
      { text: "Axios \u4E13\u9898", link: "/article/axios/axios\u6E90\u7801\u5206\u6790" }
    ]
  },
  {
    text: "\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668",
    icon: "computer",
    ariaLabel: "\u6D4F\u89C8\u5668",
    children: [
      {
        text: "\u6D4F\u89C8\u5668",
        ariaLabel: "\u6D4F\u89C8\u5668",
        children: [
          { text: "\u6D4F\u89C8\u5668\u539F\u7406", link: "/article/browser/\u6D4F\u89C8\u5668\u539F\u7406.md" },
          { text: "\u524D\u7AEF\u7F13\u5B58\u548C\u5B58\u50A8", link: "/article/browser/\u524D\u7AEF\u7F13\u5B58\u548C\u5B58\u50A8.md" },
          { text: "\u524D\u7AEF\u8C03\u8BD5\u6280\u5DE7", link: "/article/\u6027\u80FD\u4F18\u5316\u548C\u8C03\u8BD5/\u524D\u7AEF\u8C03\u8BD5\u6280\u5DE7.md" }
        ]
      },
      {
        text: "\u670D\u52A1\u5668",
        ariaLabel: "node.js",
        children: [
          { text: "Node.js", link: "/article/node/" },
          { text: "Node \u90E8\u7F72", link: "/article/node/\u4F7F\u7528docker\u670D\u52A1node\u90E8\u7F72" },
          { text: "Node \u8FDB\u7A0B\u7BA1\u7406", link: "/article/node/Node\u8FDB\u7A0B\u7BA1\u7406" },
          { text: "Linux", link: "/article/linux/" },
          { text: "MySQL", link: "/article/mysql/" },
          { text: "Nginx", link: "/article/nginx/" },
          { text: "Docker", link: "/article/docker/" }
        ]
      }
    ]
  },
  {
    text: "\u524D\u7AEF\u5DE5\u7A0B\u4E0E\u9879\u76EE\u5B9E\u8DF5",
    icon: "hammer",
    ariaLabel: "\u9879\u76EE\u5B9E\u8DF5",
    children: [
      {
        text: "\u524D\u7AEF\u5DE5\u7A0B",
        ariaLabel: "\u524D\u7AEF\u5DE5\u7A0B",
        children: [
          { text: "\u524D\u7AEF\u5DE5\u7A0B\u5316", link: "/article/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u524D\u7AEF\u5DE5\u7A0B\u5316.md" },
          { text: "\u524D\u7AEF\u67B6\u6784\u5B9E\u8DF5", link: "/article/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u524D\u7AEF\u67B6\u6784\u5B9E\u8DF5.md" },
          { text: "\u5305\u7BA1\u7406\u5668", link: "/article/npm/npm\u4E0Epnpm.md" },
          { text: "Git", link: "/article/git/" }
        ]
      },
      {
        text: "\u524D\u7AEF CICD",
        ariaLabel: "\u524D\u7AEFCICD",
        children: [
          { text: "\u524D\u7AEF\u90E8\u7F72\u539F\u7406", link: "/article/\u524D\u7AEFCICD/\u524D\u7AEF\u90E8\u7F72\u539F\u7406.md" },
          { text: "\u524D\u7AEF CICD", link: "/article/\u524D\u7AEFCICD/\u81EA\u52A8\u6784\u5EFA\u548C\u90E8\u7F72.md" },
          { text: "GitLab CICD", link: "/article/\u524D\u7AEFCICD/GitLabCICD.md" },
          { text: "\u524D\u7AEF\u53D1\u7248\u9759\u6001\u8D44\u6E90404\u95EE\u9898", link: "/article/\u524D\u7AEFCICD/\u524D\u7AEF\u53D1\u7248\u9759\u6001\u8D44\u6E90404\u95EE\u9898.md" }
        ]
      },
      {
        text: "\u524D\u7AEF\u7EC4\u4EF6\u5316\u4E0E\u6A21\u5757\u5316",
        ariaLabel: "\u524D\u7AEF\u5DE5\u7A0B",
        children: [
          { text: "\u524D\u7AEF\u7EC4\u4EF6\u5316", link: "/article/\u524D\u7AEF\u7EC4\u4EF6\u5316/Vue\u7EC4\u4EF6\u57FA\u7840.md" },
          { text: "\u7EC4\u4EF6\u8BBE\u8BA1", link: "/article/\u524D\u7AEF\u7EC4\u4EF6\u5316/\u7EC4\u4EF6\u8BBE\u8BA1.md" },
          { text: "\u4ECE\u96F6\u5230\u4E00\u642D\u5EFA\u516C\u5171\u7EC4\u4EF6\u5E93", link: "/article/\u524D\u7AEF\u7EC4\u4EF6\u5316/\u4ECE\u96F6\u5230\u4E00\u642D\u5EFA\u516C\u5171\u7EC4\u4EF6\u5E93.md" },
          { text: "JSON Scheme \u7EC4\u4EF6", link: "/article/\u524D\u7AEF\u7EC4\u4EF6\u5316/JSON\u7EC4\u4EF6.md" },
          { text: "\u524D\u7AEF\u6A21\u5757\u5316", link: "/article/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u524D\u7AEF\u6A21\u5757\u5316.md" }
        ]
      },
      {
        text: "\u9879\u76EE\u5B9E\u8DF5",
        ariaLabel: "\u9879\u76EE\u5B9E\u8DF5",
        children: [
          { text: "\u767B\u5F55\u4E0E\u5355\u70B9\u767B\u5F55", link: "/article/\u9879\u76EE\u603B\u7ED3/\u767B\u5F55\u4E0E\u5355\u70B9\u767B\u5F55.md" },
          { text: "\u6743\u9650\u7BA1\u7406\u65B9\u6848\u5B9E\u8DF5", link: "/article/\u9879\u76EE\u603B\u7ED3/\u6743\u9650\u7BA1\u7406\u65B9\u6848\u5B9E\u8DF5.md" },
          { text: "Echarts \u4E8C\u6B21\u5C01\u88C5\u5B9E\u8DF5", link: "/article/\u9879\u76EE\u603B\u7ED3/Echarts\u4E8C\u6B21\u5C01\u88C5\u5B9E\u8DF5.md" },
          { text: "\u6587\u6863\u5728\u7EBF\u9884\u89C8\u548C\u7F16\u8F91\u65B9\u6848", link: "/article/\u9879\u76EE\u603B\u7ED3/\u6587\u6863\u5728\u7EBF\u9884\u89C8\u548C\u7F16\u8F91\u65B9\u6848.md" },
          { text: "\u79FB\u52A8\u7AEF\u5F00\u53D1\u5B9E\u8DF5", link: "/article/\u9879\u76EE\u603B\u7ED3/\u79FB\u52A8\u7AEF\u5F00\u53D1\u5B9E\u8DF5.md" }
        ]
      },
      {
        text: "\u9879\u76EE\u642D\u5EFA",
        ariaLabel: "\u9879\u76EE\u642D\u5EFA\u5230\u539F\u7406\u5206\u6790",
        children: [
          { text: "\u4ECE\u96F6\u5230\u4E00\u642D\u5EFAVue2\u5DE5\u7A0B\u5316\u9879\u76EE", link: "/article/\u9879\u76EE\u603B\u7ED3/\u4ECE\u96F6\u5230\u4E00\u642D\u5EFAVue2\u5DE5\u7A0B\u5316\u9879\u76EE.md" },
          { text: "\u4ECE\u96F6\u5230\u4E00\u642D\u5EFAVue3\u5DE5\u7A0B\u5316\u9879\u76EE", link: "/article/\u9879\u76EE\u603B\u7ED3/\u4ECE\u96F6\u5230\u4E00\u642D\u5EFAVue3\u5DE5\u7A0B\u5316\u9879\u76EE.md" },
          { text: "\u642D\u5EFA\u4F4E\u4EE3\u7801\u5E73\u53F0", link: "/article/\u9879\u76EE\u603B\u7ED3/\u642D\u5EFA\u4F4E\u4EE3\u7801\u5E73\u53F0.md" },
          { text: "\u6DF7\u5408\u684C\u9762\u5E94\u7528\u5F00\u53D1\u5B9E\u8DF5", link: "/article/\u9879\u76EE\u603B\u7ED3/\u6DF7\u5408\u684C\u9762\u5E94\u7528\u5F00\u53D1\u5B9E\u8DF5.md" }
        ]
      },
      {
        text: "\u4F4E\u4EE3\u7801\u5E73\u53F0",
        ariaLabel: "\u4F4E\u4EE3\u7801\u5E73\u53F0",
        children: [
          { text: "\u4F4E\u4EE3\u7801\u539F\u7406\u89E3\u6790", link: "/article/\u4F4E\u4EE3\u7801/\u53EF\u89C6\u5316\u4F4E\u4EE3\u7801\u539F\u7406\u89E3\u6790.md" },
          { text: "\u4F4E\u4EE3\u7801\u5E73\u53F0\u670D\u52A1\u7AEF\u8BBE\u8BA1", link: "/article/\u4F4E\u4EE3\u7801/\u53EF\u89C6\u5316\u4F4E\u4EE3\u7801\u670D\u52A1\u7AEF.md" },
          { text: "\u642D\u5EFA\u4F4E\u4EE3\u7801\u5E73\u53F0", link: "/article/\u4F4E\u4EE3\u7801/\u642D\u5EFA\u4F4E\u4EE3\u7801\u5E73\u53F0.md" }
        ]
      }
    ]
  },
  {
    text: "\u79FB\u52A8\u7AEF\u4E0E\u6027\u80FD\u4F18\u5316",
    icon: "mobile-screen",
    ariaLabel: "\u6D4F\u89C8\u5668\u548C\u6027\u80FD\u4F18\u5316",
    children: [
      {
        text: "\u79FB\u52A8\u7AEF",
        ariaLabel: "\u79FB\u52A8\u7AEF",
        children: [
          { text: "\u79FB\u52A8\u7AEF\u8DE8\u7AEF\u6846\u67B6", link: "/article/\u79FB\u52A8\u7AEF/\u79FB\u52A8\u7AEF\u8DE8\u7AEF\u6846\u67B6.md" }
        ]
      },
      {
        text: "\u6027\u80FD\u4F18\u5316",
        ariaLabel: "\u6D4F\u89C8\u5668\u548C\u6027\u80FD\u4F18\u5316",
        children: [
          { text: "\u6027\u80FD\u4F18\u5316\u6307\u6807\u548C\u76D1\u63A7", link: "/article/\u6027\u80FD\u4F18\u5316\u548C\u8C03\u8BD5/\u6027\u80FD\u4F18\u5316\u6307\u6807\u548C\u76D1\u63A7.md" },
          { text: "\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u65B9\u6848", link: "/article/\u6027\u80FD\u4F18\u5316\u548C\u8C03\u8BD5/\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u65B9\u6848.md" },
          { text: "\u4E00\u6B21\u7BA1\u7406\u540E\u53F0\u7684\u6E32\u67D3\u4F18\u5316", link: "/article/\u6027\u80FD\u4F18\u5316\u548C\u8C03\u8BD5/\u4E00\u6B21\u7BA1\u7406\u540E\u53F0\u7684\u6E32\u67D3\u4F18\u5316.md" }
        ]
      }
    ]
  },
  {
    text: "\u5FAE\u524D\u7AEF",
    icon: "layer-group",
    ariaLabel: "\u5FAE\u524D\u7AEF",
    children: [
      { text: "\u5FAE\u524D\u7AEF\u57FA\u7840", link: "/article/\u5FAE\u524D\u7AEF/\u5FAE\u524D\u7AEF\u57FA\u7840.md" },
      { text: "\u5FAE\u524D\u7AEF\u6280\u672F\u65B9\u6848", link: "/article/\u5FAE\u524D\u7AEF/\u5FAE\u524D\u7AEF\u6280\u672F\u65B9\u6848.md" },
      { text: "\u5FAE\u524D\u7AEF\u6846\u67B6", link: "/article/\u5FAE\u524D\u7AEF/\u5FAE\u524D\u7AEF\u6846\u67B6.md" },
      { text: "\u4F7F\u7528\u5FAE\u524D\u7AEF\u91CD\u6784\u9879\u76EE", link: "/article/\u5FAE\u524D\u7AEF/\u4F7F\u7528\u5FAE\u524D\u7AEF\u91CD\u6784\u9879\u76EE.md" },
      { text: "\u4ECE\u96F6\u5230\u4E00\u642D\u5EFA\u5FAE\u524D\u7AEF\u9879\u76EE\u6A21\u677F", link: "/article/\u5FAE\u524D\u7AEF/\u4ECE\u96F6\u5230\u4E00\u642D\u5EFA\u5FAE\u524D\u7AEF\u9879\u76EE\u6A21\u677F.md" }
    ]
  },
  {
    text: "SSR/SSG",
    icon: "bolt",
    ariaLabel: "SSR/SSG/SEO",
    children: [
      { text: "\u524D\u7AEF\u6E32\u67D3\u67B6\u6784", link: "/article/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u524D\u7AEF\u6E32\u67D3\u67B6\u6784.md" },
      { text: "VueSSR\u539F\u7406\u5206\u6790", link: "/article/vue2/VueSSR\u539F\u7406\u5206\u6790.md" },
      { text: "\u4ECE\u96F6\u5230\u4E00\u642D\u5EFASSR\u9879\u76EE", link: "/article/\u9879\u76EE\u603B\u7ED3/\u4ECE\u96F6\u5230\u4E00\u642D\u5EFASSR\u9879\u76EE.md" },
      { text: "\u4ECE\u96F6\u5230\u4E00\u642D\u5EFA\u79FB\u52A8\u7AEFSSG\u9879\u76EE", link: "/article/\u79FB\u52A8\u7AEF/\u4ECE\u96F6\u5230\u4E00\u642D\u5EFA\u79FB\u52A8\u7AEFSSG\u9879\u76EE.md" },
      { text: "\u79FB\u52A8\u7AEFSSG\u9879\u76EE\u5B9E\u8DF5", link: "/article/\u79FB\u52A8\u7AEF/\u79FB\u52A8\u7AEFSSG\u9879\u76EE\u5B9E\u8DF5.md" }
    ]
  },
  {
    text: "3D",
    icon: "bolt",
    ariaLabel: "threejs/webgl",
    children: [
      { text: "Three.js \u5165\u95E8\u5230\u7CBE\u901A", link: "/article/3d/threejs\u5165\u95E8\u5230\u7CBE\u901A.md" },
      { text: "Three.js \u91CD\u70B9\u56DE\u987E", link: "/article/3d/threejs\u91CD\u70B9.md" },
      { text: "React Three Fiber", link: "/article/3d/ReactThreeFiber.md" },
      { text: "Shader", link: "/article/3d/Shader.md" },
      { text: "OpenScad", link: "/article/3d/openscad.md" }
    ]
  }
]);

// docs/.vuepress/theme.js
var theme_default = hopeTheme({
  darkmode: "switch",
  hostname: "https://github.com/Sewar-x/myblog/",
  author: {
    name: "Sewen",
    url: "https://github.com/Sewar-x",
    email: "596777598@qq.com"
  },
  navbar: navbar_default,
  sidebar: "structure",
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"]
  },
  plugins: {
    copyCode: true,
    // 使用主题内置的 copyCode 功能
    shiki: false,
    blog: true,
    prismjs: {
      theme: {
        light: "ghcolors",
        dark: "coldark-dark"
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
      footnote: true
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
      categoryId: "DIC_kwDOFqrNK84Ceik1"
    }
  },
  blog: {
    avatar: "./mylogo.png",
    name: "Sewen",
    description: "\u524D\u7AEF\u5F00\u53D1\u8005, \u70ED\u7231\u524D\u7AEF,\u559C\u6B22\u63A2\u7D22",
    roundAvatar: true,
    intro: "https://github.com/Sewar-x",
    medias: {
      GitHub: "https://github.com/Sewar-x",
      Wechat: "15679109097"
    }
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
    }
  },
  repo: "https://github.com/Sewar-x",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  iconAssets: "fontawesome-with-brands",
  print: true,
  fullscreen: true
});

// docs/.vuepress/config.js
var config_default = defineUserConfig({
  title: "Sewen \u535A\u5BA2",
  base: `/myblog/`,
  description: "\u8BB0\u5F55\u5206\u4EAB\u5B66\u4E60\u7B14\u8BB0\u3001\u524D\u7AEF\u57FA\u7840\u603B\u7ED3\u3001\u6280\u672F\u6DF1\u5EA6\u5256\u6790\u3001\u9879\u76EE\u8FC7\u7A0B\u603B\u7ED3.",
  head: [
    ["link", { rel: "icon", href: "./mylogo.png" }],
    // 默认黑暗模式：首次访问默认使用暗色主题，用户切换后记住偏好
    ["script", {}, `
      (function() {
        try {
          var scheme = localStorage.getItem('vuepress-theme-hope-scheme');
          if (scheme === null) {
            scheme = 'dark';
            localStorage.setItem('vuepress-theme-hope-scheme', 'dark');
          }
          var isDark = scheme === 'dark' || (scheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
          document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        } catch(e) {}
      })();
    `]
  ],
  themeConfig: {
    logo: "./mylogo.png",
    // 左上角logo
    hostname: "https://sewar-x.github.io/",
    pageInfo: {
      author: true,
      time: false,
      category: true,
      tag: true,
      "reading-time": true,
      word: true,
      visitor: true
    },
    serviceWorker: {
      // 如果设置为 true, 默认的文本配置将是: 
      updatePopup: {
        message: "\u535A\u5BA2\u6709\u65B0\u7684\u5185\u5BB9\u5566\uFF01.",
        buttonText: "\u5237\u65B0\u770B\u770B"
      }
    }
  },
  // 这和 `theme: hopeTheme({/* 你的配置 */})` 是等价的
  theme: theme_default,
  bundler: webpackBundler({
    postcss: {},
    vue: {}
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLmpzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9wcm9qZWN0L215YmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcbXlibG9nXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL3Byb2plY3QvbXlibG9nL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcclxuaW1wb3J0IHsgd2VicGFja0J1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci13ZWJwYWNrJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gIHRpdGxlOiAnU2V3ZW4gXHU1MzVBXHU1QkEyJyxcclxuICBiYXNlOiBgL215YmxvZy9gLFxyXG4gIGRlc2NyaXB0aW9uOiAnXHU4QkIwXHU1RjU1XHU1MjA2XHU0RUFCXHU1QjY2XHU0RTYwXHU3QjE0XHU4QkIwXHUzMDAxXHU1MjREXHU3QUVGXHU1N0ZBXHU3ODQwXHU2MDNCXHU3RUQzXHUzMDAxXHU2MjgwXHU2NzJGXHU2REYxXHU1RUE2XHU1MjU2XHU2NzkwXHUzMDAxXHU5ODc5XHU3NkVFXHU4RkM3XHU3QTBCXHU2MDNCXHU3RUQzLicsXHJcbiAgaGVhZDogW1xyXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy4vbXlsb2dvLnBuZycgfV0sXHJcbiAgICAvLyBcdTlFRDhcdThCQTRcdTlFRDFcdTY2OTdcdTZBMjFcdTVGMEZcdUZGMUFcdTk5OTZcdTZCMjFcdThCQkZcdTk1RUVcdTlFRDhcdThCQTRcdTRGN0ZcdTc1MjhcdTY2OTdcdTgyNzJcdTRFM0JcdTk4OThcdUZGMENcdTc1MjhcdTYyMzdcdTUyMDdcdTYzNjJcdTU0MEVcdThCQjBcdTRGNEZcdTUwNEZcdTU5N0RcclxuICAgIFsnc2NyaXB0Jywge30sIGBcclxuICAgICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB2YXIgc2NoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Z1ZXByZXNzLXRoZW1lLWhvcGUtc2NoZW1lJyk7XHJcbiAgICAgICAgICBpZiAoc2NoZW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNjaGVtZSA9ICdkYXJrJztcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Z1ZXByZXNzLXRoZW1lLWhvcGUtc2NoZW1lJywgJ2RhcmsnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhciBpc0RhcmsgPSBzY2hlbWUgPT09ICdkYXJrJyB8fCAoc2NoZW1lID09PSAnYXV0bycgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKTtcclxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBpc0RhcmsgPyAnZGFyaycgOiAnbGlnaHQnKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHt9XHJcbiAgICAgIH0pKCk7XHJcbiAgICBgXSxcclxuICBdLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBsb2dvOiAnLi9teWxvZ28ucG5nJywgIC8vIFx1NURFNlx1NEUwQVx1ODlEMmxvZ29cclxuICAgIGhvc3RuYW1lOiAnaHR0cHM6Ly9zZXdhci14LmdpdGh1Yi5pby8nLFxyXG4gICAgcGFnZUluZm86IHtcclxuICAgICAgYXV0aG9yOiB0cnVlLFxyXG4gICAgICB0aW1lOiBmYWxzZSxcclxuICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgIHRhZzogdHJ1ZSxcclxuICAgICAgJ3JlYWRpbmctdGltZSc6IHRydWUsXHJcbiAgICAgIHdvcmQ6IHRydWUsXHJcbiAgICAgIHZpc2l0b3I6IHRydWVcclxuICAgIH0sXHJcbiAgICBzZXJ2aWNlV29ya2VyOiB7XHJcbiAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1OEJCRVx1N0Y2RVx1NEUzQSB0cnVlLCBcdTlFRDhcdThCQTRcdTc2ODRcdTY1ODdcdTY3MkNcdTkxNERcdTdGNkVcdTVDMDZcdTY2MkY6IFxyXG4gICAgICB1cGRhdGVQb3B1cDoge1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiXHU1MzVBXHU1QkEyXHU2NzA5XHU2NUIwXHU3Njg0XHU1MTg1XHU1QkI5XHU1NTY2XHVGRjAxLlwiLFxyXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXHU1MjM3XHU2NUIwXHU3NzBCXHU3NzBCXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIFx1OEZEOVx1NTQ4QyBgdGhlbWU6IGhvcGVUaGVtZSh7LyogXHU0RjYwXHU3Njg0XHU5MTREXHU3RjZFICovfSlgIFx1NjYyRlx1N0I0OVx1NEVGN1x1NzY4NFxyXG4gIHRoZW1lLFxyXG4gIGJ1bmRsZXI6IHdlYnBhY2tCdW5kbGVyKHtcclxuICAgIHBvc3Rjc3M6IHt9LFxyXG4gICAgdnVlOiB7fSxcclxuICB9KSxcclxufSkiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9wcm9qZWN0L215YmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcbXlibG9nXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvcHJvamVjdC9teWJsb2cvZG9jcy8udnVlcHJlc3MvdGhlbWUuanNcIjsvKipcclxuICogXHU0RjdGXHU3NTI4IHZ1ZXByZXNzLXRoZW1lLWhvcGUgXHU0RTNCXHU5ODk4XHU2M0QyXHU0RUY2XHJcbiAqIGRvY3M6IGh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy96aC9cclxuICovXHJcbmltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCI7XHJcbi8vIFx1NjIxMVx1NEVFQ1x1OUVEOFx1OEJBNFx1NUJGQ1x1NTFGQVx1NEU4Nlx1NEUzQlx1OTg5OFx1NUJGOVx1OEM2MVxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gICAgZGFya21vZGU6IFwic3dpdGNoXCIsXHJcbiAgICBob3N0bmFtZTogXCJodHRwczovL2dpdGh1Yi5jb20vU2V3YXIteC9teWJsb2cvXCIsXHJcbiAgICBhdXRob3I6IHtcclxuICAgICAgICBuYW1lOiBcIlNld2VuXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TZXdhci14XCIsXHJcbiAgICAgICAgZW1haWw6IFwiNTk2Nzc3NTk4QHFxLmNvbVwiLFxyXG4gICAgfSxcclxuICAgIG5hdmJhcixcclxuICAgIHNpZGViYXI6IFwic3RydWN0dXJlXCIsXHJcbiAgICBuYXZiYXJMYXlvdXQ6IHtcclxuICAgICAgICBzdGFydDogW1wiQnJhbmRcIl0sXHJcbiAgICAgICAgY2VudGVyOiBbXCJMaW5rc1wiXSxcclxuICAgICAgICBlbmQ6IFtcIkxhbmd1YWdlXCIsIFwiUmVwb1wiLCBcIk91dGxvb2tcIiwgXCJTZWFyY2hcIl0sXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICAgIGNvcHlDb2RlOiB0cnVlLCAgLy8gXHU0RjdGXHU3NTI4XHU0RTNCXHU5ODk4XHU1MTg1XHU3RjZFXHU3Njg0IGNvcHlDb2RlIFx1NTI5Rlx1ODBGRFxyXG4gICAgICAgIHNoaWtpOiBmYWxzZSxcclxuICAgICAgICBibG9nOiB0cnVlLFxyXG4gICAgICAgIHByaXNtanM6IHtcclxuICAgICAgICAgICAgdGhlbWU6IHtcclxuICAgICAgICAgICAgICAgIGxpZ2h0OiAnZ2hjb2xvcnMnLFxyXG4gICAgICAgICAgICAgICAgZGFyazogJ2NvbGRhcmstZGFyaydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90YXRpb25EaWZmOiB0cnVlLFxyXG4gICAgICAgICAgICBub3RhdGlvbkVycm9yTGV2ZWw6IHRydWUsXHJcbiAgICAgICAgICAgIG5vdGF0aW9uV29yZEhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoOiB0cnVlLFxyXG4gICAgICAgIHdhdGVybWFyazogdHJ1ZSxcclxuICAgICAgICBtZEVuaGFuY2U6IHtcclxuICAgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1NkZFXHU3MjQ3XHU2MUQyXHU1MkEwXHU4RjdEXHJcbiAgICAgICAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTY4MDdcdThCQjBcclxuICAgICAgICAgICAgaW1nTWFyazogdHJ1ZSxcclxuICAgICAgICAgICAgLy9cdTgxMUFcdTZDRThcclxuICAgICAgICAgICAgZm9vdG5vdGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3B5cmlnaHQ6IHtcclxuICAgICAgICAgICAgZ2xvYmFsOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRob3I6IFwiU2V3ZW5cIixcclxuICAgICAgICAgICAgbGljZW5zZTogXCJNSVRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tbWVudDoge1xyXG4gICAgICAgICAgICBwcm92aWRlcjogXCJHaXNjdXNcIixcclxuICAgICAgICAgICAgcmVwbzogXCJTZXdhci14L215YmxvZ1wiLFxyXG4gICAgICAgICAgICByZXBvSWQ6IFwiTURFd09sSmxjRzl6YVhSdmNua3pPREF5T1RJek9UVT1cIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPRnFyTks4NENlaWsxXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgICAgYXZhdGFyOiAnLi9teWxvZ28ucG5nJyxcclxuICAgICAgICBuYW1lOiAnU2V3ZW4nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXHU4MDA1LCBcdTcwRURcdTcyMzFcdTUyNERcdTdBRUYsXHU1NTlDXHU2QjIyXHU2M0EyXHU3RDIyJyxcclxuICAgICAgICByb3VuZEF2YXRhcjogdHJ1ZSxcclxuICAgICAgICBpbnRybzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TZXdhci14JyxcclxuICAgICAgICBtZWRpYXM6IHtcclxuICAgICAgICAgICAgR2l0SHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9TZXdhci14XCIsXHJcbiAgICAgICAgICAgIFdlY2hhdDogXCIxNTY3OTEwOTA5N1wiXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtYXJrZG93bjoge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgbGV2ZWw6IFs0LCA1XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9jOiB7XHJcbiAgICAgICAgICAgIGxldmVsOiBbNCwgNV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBsZXZlbDogWzQsIDVdXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1Nld2FyLXgnLFxyXG4gICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RUQzXHU1RTkzXHU5NEZFXHU2M0E1XHU2NTg3XHU1QjU3XHUzMDAyXHU5RUQ4XHU4QkE0XHU0RUNFIGByZXBvYCBcdTRFMkRcdTgxRUFcdTUyQThcdTYzQThcdTY1QURcdTRFM0FcclxuICAgIC8vIFwiR2l0SHViXCIgLyBcIkdpdExhYlwiIC8gXCJHaXRlZVwiIC8gXCJCaXRidWNrZXRcIiBcdTUxNzZcdTRFMkRcdTRFNEJcdTRFMDBcdUZGMENcdTYyMTZcdTY2MkYgXCJTb3VyY2VcIlx1MzAwMlxyXG4gICAgcmVwb0xhYmVsOiBcIkdpdEh1YlwiLFxyXG4gICAgLy8gXHU2NjJGXHU1NDI2XHU1NzI4XHU1QkZDXHU4MjJBXHU2ODBGXHU1MTg1XHU2NjNFXHU3OTNBXHU0RUQzXHU1RTkzXHU5NEZFXHU2M0E1XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBIGB0cnVlYFxyXG4gICAgcmVwb0Rpc3BsYXk6IHRydWUsXHJcbiAgICBpY29uQXNzZXRzOiBcImZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzXCIsXHJcbiAgICBwcmludDogdHJ1ZSxcclxuICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9wcm9qZWN0L215YmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcbXlibG9nXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL3Byb2plY3QvbXlibG9nL2RvY3MvLnZ1ZXByZXNzL25hdmJhci5qc1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXIoWyAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTkxNERcdTdGNkVcclxuICAgIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsaWNvbjonaG91c2UnLCBsaW5rOiAnLycgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NEUwRVx1OEJBMVx1N0I5N1x1NjczQVx1NTdGQVx1Nzg0MCcsXHJcbiAgICAgICAgaWNvbjogJ3RodW1idGFjaycsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NTdGQVx1Nzg0MCcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0phdmFTY3JpcHQnLCBsaW5rOiAnL2FydGljbGUvamF2YXNjcmlwdC8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVHlwZVNjcmlwdCcsIGxpbms6ICcvYXJ0aWNsZS90eXBlc2NyaXB0LycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDc3MnLCBsaW5rOiAnL2FydGljbGUvY3NzL0NTU1x1NTdGQVx1Nzg0MCcgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1OEJBMVx1N0I5N1x1NjczQVx1NTdGQVx1Nzg0MCcsXHJcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWw6ICdcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDAnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTU0OENcdTdCOTdcdTZDRDUnLCBsaW5rOiAnL2FydGljbGUvXHU3Qjk3XHU2Q0Q1XHU1NDhDXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0LycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdThGOTNcdTUxNjV1cmxcdTUyMzBcdTk4NzVcdTk3NjJcdTVDNTVcdTc5M0FcdTUxNjhcdThGQzdcdTdBMEInLCBsaW5rOiAnL2FydGljbGUvbmV0d29yay9cdThGOTNcdTUxNjV1cmxcdTUyMzBcdTk4NzVcdTk3NjJcdTVDNTVcdTc5M0FcdTUxNjhcdThGQzdcdTdBMEIubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NENEXHU0RjVDXHU3Q0ZCXHU3RURGJywgbGluazogJy9hcnRpY2xlL1x1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERi8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU4QkJFXHU4QkExXHU2QTIxXHU1RjBGJywgbGluazogJy9hcnRpY2xlL1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRi8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2ViXHU1Qjg5XHU1MTY4JywgbGluazogJy9hcnRpY2xlL1dlYlx1NUI4OVx1NTE2OC8nIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTY4NDZcdTY3QjZcdTRFMEVcdTZFOTBcdTc4MDFcdTUyMDZcdTY3OTAnLFxyXG4gICAgICAgIGljb246J2NvZGUnLFxyXG4gICAgICAgIGFyaWFMYWJlbDogJ1x1Njg0Nlx1NjdCNlx1NTQ4Q1x1NkU5MFx1NzgwMVx1NTIwNlx1Njc5MCcsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1Z1ZSBcdTRFMTNcdTk4OTgnLFxyXG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsOiAnVnVlIFx1NEUxM1x1OTg5OCcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1Z1ZTIgXHU1MzlGXHU3NDA2XHU1NDhDXHU2RTkwXHU3ODAxXHU1MjA2XHU2NzkwJywgbGluazogJy9hcnRpY2xlL3Z1ZTIvVnVlMlx1NTM5Rlx1NzQwNlx1NTQ4Q1x1NkU5MFx1NzgwMVx1NTIwNlx1Njc5MC5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdWdWVSb3V0ZXIgXHU1MzlGXHU3NDA2XHU1MjA2XHU2NzkwJywgbGluazogJy9hcnRpY2xlL3Z1ZTIvVnVlUm91dGVyXHU1MzlGXHU3NDA2XHU1MjA2XHU2NzkwLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1Z1ZVNTUiBcdTUzOUZcdTc0MDZcdTUyMDZcdTY3OTAnLCBsaW5rOiAnL2FydGljbGUvdnVlMi9WdWVTU1JcdTUzOUZcdTc0MDZcdTUyMDZcdTY3OTAubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVnVleCBcdTUzOUZcdTc0MDZcdTUyMDZcdTY3OTAnLCBsaW5rOiAnL2FydGljbGUvdnVlMi9WdWV4XHU1MzlGXHU3NDA2XHU1MjA2XHU2NzkwLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1Z1ZUNsaSBcdTZFOTBcdTc4MDFcdTUyMDZcdTY3OTAnLCBsaW5rOiAnL2FydGljbGUvdnVlMi9WdWVDbGlcdTZFOTBcdTc4MDFcdTUyMDZcdTY3OTAubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVnVlMiBBUEkgXHU1MzlGXHU3NDA2XHU1MjA2XHU2NzkwJywgbGluazogJy9hcnRpY2xlL3Z1ZTIvVnVlMiBBUElcdTUzOUZcdTc0MDZcdTUyMDZcdTY3OTAubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVnVlMiBWcyBWdWUzJywgbGluazogJy9hcnRpY2xlL3Z1ZTMvVnVlMlZzVnVlMy5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdWdWUzIFx1NTdGQVx1Nzg0MCcsIGxpbms6ICcvYXJ0aWNsZS92dWUzL1Z1ZTNcdTU3RkFcdTc4NDAubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVnVlMyBcdTZFOTBcdTc4MDFcdTUyMDZcdTY3OTAnLCBsaW5rOiAnL2FydGljbGUvdnVlMy9WdWUzXHU2RTkwXHU3ODAxXHU1MjA2XHU2NzkwL1x1NTRDRFx1NUU5NFx1NUYwRlx1NTM5Rlx1NzQwNi5tZCcgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1JlYWN0IFx1NEUxM1x1OTg5OCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAncmVhY3QnLFxyXG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsOiAnUmVhY3QgXHU0RTEzXHU5ODk4JyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmVhY3QgXHU1N0ZBXHU3ODQwJywgbGluazogJy9hcnRpY2xlL1JlYWN0L1JlYWN0XHU1N0ZBXHU3ODQwLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JlYWN0IFx1NzUxRlx1NTQ3RFx1NTQ2OFx1NjcxRicsIGxpbms6ICcvYXJ0aWNsZS9SZWFjdC9SZWFjdFx1NzUxRlx1NTQ3RFx1NTQ2OFx1NjcxRi5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdSZWFjdCBcdTdFQzRcdTRFRjZcdTkwMUFcdTRGRTEnLCBsaW5rOiAnL2FydGljbGUvUmVhY3QvUmVhY3RcdTdFQzRcdTRFRjZcdTkwMUFcdTRGRTEubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmVhY3QgXHU3RUM0XHU0RUY2XHU2RTMyXHU2N0QzJywgbGluazogJy9hcnRpY2xlL1JlYWN0L1JlYWN0XHU3RUM0XHU0RUY2XHU2RTMyXHU2N0QzXHU1MzlGXHU3NDA2L1JlYWN0XHU3RUM0XHU0RUY2XHU2RTMyXHU2N0QzXHU2RDQxXHU3QTBCLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JlYWN0IEZpYmVyJywgbGluazogJy9hcnRpY2xlL1JlYWN0L1JlYWN0LUZpYmVyLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JlYWN0IFx1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNicsIGxpbms6ICcvYXJ0aWNsZS9SZWFjdC9SZWFjdFx1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNi5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdSZWFjdCAxOScsIGxpbms6ICcvYXJ0aWNsZS9SZWFjdC9SZWFjdDE5Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JlYWN0IFx1OTc2Mlx1OEJENVx1OTg5OCcsIGxpbms6ICcvYXJ0aWNsZS9SZWFjdC9SZWFjdFx1OTc2Mlx1OEJENVx1OTg5OC5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdWdWUgVnMgUmVhY3QnLCBsaW5rOiAnL2FydGljbGUvUmVhY3QvVnVlVnNSZWFjdC5tZCcgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlYlBhY2sgXHU0RTEzXHU5ODk4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdjdWJlJyxcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogJ1dlYlBhY2sgXHU0RTEzXHU5ODk4JyxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnd2VicGFjayBcdTU3RkFcdTc4NDAnLCBsaW5rOiAnL2FydGljbGUvd2VicGFjay93ZWJwYWNrXHU1N0ZBXHU3ODQwLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ3dlYnBhY2sgXHU2Nzg0XHU1RUZBXHU1MzlGXHU3NDA2JywgbGluazogJy9hcnRpY2xlL3dlYnBhY2svd2VicGFja1x1Njc4NFx1NUVGQVx1NTM5Rlx1NzQwNi5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdMb2FkZXJcdTU0OENQbHVnaW4gXHU1MzlGXHU3NDA2JywgbGluazogJy9hcnRpY2xlL3dlYnBhY2svTG9hZGVyXHU1NDhDUGx1Z2luXHU1MzlGXHU3NDA2Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RldlNlcnZlciBcdTUzOUZcdTc0MDYnLCBsaW5rOiAnL2FydGljbGUvd2VicGFjay9EZXZTZXJ2ZXJcdTUzOUZcdTc0MDYubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnd2VicGFjayBcdTRGMThcdTUzMTYnLCBsaW5rOiAnL2FydGljbGUvd2VicGFjay93ZWJwYWNrXHU0RjE4XHU1MzE2Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ3dlYnBhY2sgQVBJIFx1NTIwNlx1Njc5MCcsIGxpbms6ICcvYXJ0aWNsZS93ZWJwYWNrL3dlYnBhY2tBUElcdTUyMDZcdTY3OTAubWQnIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdWaXRlIFx1NEUxM1x1OTg5OCcsXHJcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWw6ICdWaXRlIFx1NEUxM1x1OTg5OCcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1ZpdGUgXHU1N0ZBXHU3ODQwJywgbGluazogJy9hcnRpY2xlL3ZpdGUvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1ZpdGUgXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2JywgbGluazogJy9hcnRpY2xlL3ZpdGUvVml0ZVx1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNi5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdWaXRlIFx1NTM5Rlx1NzQwNlx1ODlFM1x1Njc5MCcsIGxpbms6ICcvYXJ0aWNsZS92aXRlL1ZpdGVcdTUzOUZcdTc0MDZcdTg5RTNcdTY3OTAubWQnIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0F4aW9zIFx1NEUxM1x1OTg5OCcsIGxpbms6ICcvYXJ0aWNsZS9heGlvcy9heGlvc1x1NkU5MFx1NzgwMVx1NTIwNlx1Njc5MCcgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU2RDRGXHU4OUM4XHU1NjY4XHU0RTBFXHU2NzBEXHU1MkExXHU1NjY4JyxcclxuICAgICAgICBpY29uOiAnY29tcHV0ZXInLFxyXG4gICAgICAgIGFyaWFMYWJlbDogJ1x1NkQ0Rlx1ODlDOFx1NTY2OCcsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1NkQ0Rlx1ODlDOFx1NTY2OCcsXHJcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWw6ICdcdTZENEZcdTg5QzhcdTU2NjgnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTZENEZcdTg5QzhcdTU2NjhcdTUzOUZcdTc0MDYnLCBsaW5rOiAnL2FydGljbGUvYnJvd3Nlci9cdTZENEZcdTg5QzhcdTU2NjhcdTUzOUZcdTc0MDYubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1MjREXHU3QUVGXHU3RjEzXHU1QjU4XHU1NDhDXHU1QjU4XHU1MEE4JywgbGluazogJy9hcnRpY2xlL2Jyb3dzZXIvXHU1MjREXHU3QUVGXHU3RjEzXHU1QjU4XHU1NDhDXHU1QjU4XHU1MEE4Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1OEMwM1x1OEJENVx1NjI4MFx1NURFNycsIGxpbms6ICcvYXJ0aWNsZS9cdTYwMjdcdTgwRkRcdTRGMThcdTUzMTZcdTU0OENcdThDMDNcdThCRDUvXHU1MjREXHU3QUVGXHU4QzAzXHU4QkQ1XHU2MjgwXHU1REU3Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU2NzBEXHU1MkExXHU1NjY4JyxcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogJ25vZGUuanMnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdOb2RlLmpzJywgbGluazogJy9hcnRpY2xlL25vZGUvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ05vZGUgXHU5MEU4XHU3RjcyJywgbGluazogJy9hcnRpY2xlL25vZGUvXHU0RjdGXHU3NTI4ZG9ja2VyXHU2NzBEXHU1MkExbm9kZVx1OTBFOFx1N0Y3MicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdOb2RlIFx1OEZEQlx1N0EwQlx1N0JBMVx1NzQwNicsIGxpbms6ICcvYXJ0aWNsZS9ub2RlL05vZGVcdThGREJcdTdBMEJcdTdCQTFcdTc0MDYnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnTGludXgnLCBsaW5rOiAnL2FydGljbGUvbGludXgvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ015U1FMJywgbGluazogJy9hcnRpY2xlL215c3FsLycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdOZ2lueCcsIGxpbms6ICcvYXJ0aWNsZS9uZ2lueC8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRG9ja2VyJywgbGluazogJy9hcnRpY2xlL2RvY2tlci8nIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NURFNVx1N0EwQlx1NEUwRVx1OTg3OVx1NzZFRVx1NUI5RVx1OERGNScsXHJcbiAgICAgICAgaWNvbjogJ2hhbW1lcicsXHJcbiAgICAgICAgYXJpYUxhYmVsOiAnXHU5ODc5XHU3NkVFXHU1QjlFXHU4REY1JyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1REU1XHU3QTBCJyxcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogJ1x1NTI0RFx1N0FFRlx1NURFNVx1N0EwQicsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NURFNVx1N0EwQlx1NTMxNicsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZcdTVERTVcdTdBMEJcdTUzMTYvXHU1MjREXHU3QUVGXHU1REU1XHU3QTBCXHU1MzE2Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NjdCNlx1Njc4NFx1NUI5RVx1OERGNScsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZcdTVERTVcdTdBMEJcdTUzMTYvXHU1MjREXHU3QUVGXHU2N0I2XHU2Nzg0XHU1QjlFXHU4REY1Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTMwNVx1N0JBMVx1NzQwNlx1NTY2OCcsIGxpbms6ICcvYXJ0aWNsZS9ucG0vbnBtXHU0RTBFcG5wbS5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHaXQnLCBsaW5rOiAnL2FydGljbGUvZ2l0LycgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGIENJQ0QnLFxyXG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsOiAnXHU1MjREXHU3QUVGQ0lDRCcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1OTBFOFx1N0Y3Mlx1NTM5Rlx1NzQwNicsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZDSUNEL1x1NTI0RFx1N0FFRlx1OTBFOFx1N0Y3Mlx1NTM5Rlx1NzQwNi5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTUyNERcdTdBRUYgQ0lDRCcsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZDSUNEL1x1ODFFQVx1NTJBOFx1Njc4NFx1NUVGQVx1NTQ4Q1x1OTBFOFx1N0Y3Mi5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHaXRMYWIgQ0lDRCcsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZDSUNEL0dpdExhYkNJQ0QubWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1M0QxXHU3MjQ4XHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwNDA0XHU5NUVFXHU5ODk4JywgbGluazogJy9hcnRpY2xlL1x1NTI0RFx1N0FFRkNJQ0QvXHU1MjREXHU3QUVGXHU1M0QxXHU3MjQ4XHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwNDA0XHU5NUVFXHU5ODk4Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1MzE2XHU0RTBFXHU2QTIxXHU1NzU3XHU1MzE2JyxcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogJ1x1NTI0RFx1N0FFRlx1NURFNVx1N0EwQicsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1N0VDNFx1NEVGNlx1NTMxNicsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZcdTdFQzRcdTRFRjZcdTUzMTYvVnVlXHU3RUM0XHU0RUY2XHU1N0ZBXHU3ODQwLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1N0VDNFx1NEVGNlx1OEJCRVx1OEJBMScsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZcdTdFQzRcdTRFRjZcdTUzMTYvXHU3RUM0XHU0RUY2XHU4QkJFXHU4QkExLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NEVDRVx1OTZGNlx1NTIzMFx1NEUwMFx1NjQyRFx1NUVGQVx1NTE2Q1x1NTE3MVx1N0VDNFx1NEVGNlx1NUU5MycsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZcdTdFQzRcdTRFRjZcdTUzMTYvXHU0RUNFXHU5NkY2XHU1MjMwXHU0RTAwXHU2NDJEXHU1RUZBXHU1MTZDXHU1MTcxXHU3RUM0XHU0RUY2XHU1RTkzLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0pTT04gU2NoZW1lIFx1N0VDNFx1NEVGNicsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZcdTdFQzRcdTRFRjZcdTUzMTYvSlNPTlx1N0VDNFx1NEVGNi5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTUyNERcdTdBRUZcdTZBMjFcdTU3NTdcdTUzMTYnLCBsaW5rOiAnL2FydGljbGUvXHU1MjREXHU3QUVGXHU1REU1XHU3QTBCXHU1MzE2L1x1NTI0RFx1N0FFRlx1NkEyMVx1NTc1N1x1NTMxNi5tZCcgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1OTg3OVx1NzZFRVx1NUI5RVx1OERGNScsXHJcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWw6ICdcdTk4NzlcdTc2RUVcdTVCOUVcdThERjUnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTc2N0JcdTVGNTVcdTRFMEVcdTUzNTVcdTcwQjlcdTc2N0JcdTVGNTUnLCBsaW5rOiAnL2FydGljbGUvXHU5ODc5XHU3NkVFXHU2MDNCXHU3RUQzL1x1NzY3Qlx1NUY1NVx1NEUwRVx1NTM1NVx1NzBCOVx1NzY3Qlx1NUY1NS5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTY3NDNcdTk2NTBcdTdCQTFcdTc0MDZcdTY1QjlcdTY4NDhcdTVCOUVcdThERjUnLCBsaW5rOiAnL2FydGljbGUvXHU5ODc5XHU3NkVFXHU2MDNCXHU3RUQzL1x1Njc0M1x1OTY1MFx1N0JBMVx1NzQwNlx1NjVCOVx1Njg0OFx1NUI5RVx1OERGNS5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdFY2hhcnRzIFx1NEU4Q1x1NkIyMVx1NUMwMVx1ODhDNVx1NUI5RVx1OERGNScsIGxpbms6ICcvYXJ0aWNsZS9cdTk4NzlcdTc2RUVcdTYwM0JcdTdFRDMvRWNoYXJ0c1x1NEU4Q1x1NkIyMVx1NUMwMVx1ODhDNVx1NUI5RVx1OERGNS5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTY1ODdcdTY4NjNcdTU3MjhcdTdFQkZcdTk4ODRcdTg5QzhcdTU0OENcdTdGMTZcdThGOTFcdTY1QjlcdTY4NDgnLCBsaW5rOiAnL2FydGljbGUvXHU5ODc5XHU3NkVFXHU2MDNCXHU3RUQzL1x1NjU4N1x1Njg2M1x1NTcyOFx1N0VCRlx1OTg4NFx1ODlDOFx1NTQ4Q1x1N0YxNlx1OEY5MVx1NjVCOVx1Njg0OC5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTc5RkJcdTUyQThcdTdBRUZcdTVGMDBcdTUzRDFcdTVCOUVcdThERjUnLCBsaW5rOiAnL2FydGljbGUvXHU5ODc5XHU3NkVFXHU2MDNCXHU3RUQzL1x1NzlGQlx1NTJBOFx1N0FFRlx1NUYwMFx1NTNEMVx1NUI5RVx1OERGNS5tZCcgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1OTg3OVx1NzZFRVx1NjQyRFx1NUVGQScsXHJcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWw6ICdcdTk4NzlcdTc2RUVcdTY0MkRcdTVFRkFcdTUyMzBcdTUzOUZcdTc0MDZcdTUyMDZcdTY3OTAnLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFsgXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU0RUNFXHU5NkY2XHU1MjMwXHU0RTAwXHU2NDJEXHU1RUZBVnVlMlx1NURFNVx1N0EwQlx1NTMxNlx1OTg3OVx1NzZFRScsIGxpbms6ICcvYXJ0aWNsZS9cdTk4NzlcdTc2RUVcdTYwM0JcdTdFRDMvXHU0RUNFXHU5NkY2XHU1MjMwXHU0RTAwXHU2NDJEXHU1RUZBVnVlMlx1NURFNVx1N0EwQlx1NTMxNlx1OTg3OVx1NzZFRS5tZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTRFQ0VcdTk2RjZcdTUyMzBcdTRFMDBcdTY0MkRcdTVFRkFWdWUzXHU1REU1XHU3QTBCXHU1MzE2XHU5ODc5XHU3NkVFJywgbGluazogJy9hcnRpY2xlL1x1OTg3OVx1NzZFRVx1NjAzQlx1N0VEMy9cdTRFQ0VcdTk2RjZcdTUyMzBcdTRFMDBcdTY0MkRcdTVFRkFWdWUzXHU1REU1XHU3QTBCXHU1MzE2XHU5ODc5XHU3NkVFLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NjQyRFx1NUVGQVx1NEY0RVx1NEVFM1x1NzgwMVx1NUU3M1x1NTNGMCcsIGxpbms6ICcvYXJ0aWNsZS9cdTk4NzlcdTc2RUVcdTYwM0JcdTdFRDMvXHU2NDJEXHU1RUZBXHU0RjRFXHU0RUUzXHU3ODAxXHU1RTczXHU1M0YwLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NkRGN1x1NTQwOFx1Njg0Q1x1OTc2Mlx1NUU5NFx1NzUyOFx1NUYwMFx1NTNEMVx1NUI5RVx1OERGNScsIGxpbms6ICcvYXJ0aWNsZS9cdTk4NzlcdTc2RUVcdTYwM0JcdTdFRDMvXHU2REY3XHU1NDA4XHU2ODRDXHU5NzYyXHU1RTk0XHU3NTI4XHU1RjAwXHU1M0QxXHU1QjlFXHU4REY1Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU0RjRFXHU0RUUzXHU3ODAxXHU1RTczXHU1M0YwJyxcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogJ1x1NEY0RVx1NEVFM1x1NzgwMVx1NUU3M1x1NTNGMCcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NEY0RVx1NEVFM1x1NzgwMVx1NTM5Rlx1NzQwNlx1ODlFM1x1Njc5MCcsIGxpbms6ICcvYXJ0aWNsZS9cdTRGNEVcdTRFRTNcdTc4MDEvXHU1M0VGXHU4OUM2XHU1MzE2XHU0RjRFXHU0RUUzXHU3ODAxXHU1MzlGXHU3NDA2XHU4OUUzXHU2NzkwLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NEY0RVx1NEVFM1x1NzgwMVx1NUU3M1x1NTNGMFx1NjcwRFx1NTJBMVx1N0FFRlx1OEJCRVx1OEJBMScsIGxpbms6ICcvYXJ0aWNsZS9cdTRGNEVcdTRFRTNcdTc4MDEvXHU1M0VGXHU4OUM2XHU1MzE2XHU0RjRFXHU0RUUzXHU3ODAxXHU2NzBEXHU1MkExXHU3QUVGLm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NjQyRFx1NUVGQVx1NEY0RVx1NEVFM1x1NzgwMVx1NUU3M1x1NTNGMCcsIGxpbms6ICcvYXJ0aWNsZS9cdTRGNEVcdTRFRTNcdTc4MDEvXHU2NDJEXHU1RUZBXHU0RjRFXHU0RUUzXHU3ODAxXHU1RTczXHU1M0YwLm1kJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU3OUZCXHU1MkE4XHU3QUVGXHU0RTBFXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2JyxcclxuICAgICAgICBpY29uOiAnbW9iaWxlLXNjcmVlbicsXHJcbiAgICAgICAgYXJpYUxhYmVsOiAnXHU2RDRGXHU4OUM4XHU1NjY4XHU1NDhDXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2JyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU3OUZCXHU1MkE4XHU3QUVGJyxcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogJ1x1NzlGQlx1NTJBOFx1N0FFRicsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NzlGQlx1NTJBOFx1N0FFRlx1OERFOFx1N0FFRlx1Njg0Nlx1NjdCNicsIGxpbms6ICcvYXJ0aWNsZS9cdTc5RkJcdTUyQThcdTdBRUYvXHU3OUZCXHU1MkE4XHU3QUVGXHU4REU4XHU3QUVGXHU2ODQ2XHU2N0I2Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2JyxcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogJ1x1NkQ0Rlx1ODlDOFx1NTY2OFx1NTQ4Q1x1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNicsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNlx1NjMwN1x1NjgwN1x1NTQ4Q1x1NzZEMVx1NjNBNycsIGxpbms6ICcvYXJ0aWNsZS9cdTYwMjdcdTgwRkRcdTRGMThcdTUzMTZcdTU0OENcdThDMDNcdThCRDUvXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2XHU2MzA3XHU2ODA3XHU1NDhDXHU3NkQxXHU2M0E3Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNlx1NjVCOVx1Njg0OCcsIGxpbms6ICcvYXJ0aWNsZS9cdTYwMjdcdTgwRkRcdTRGMThcdTUzMTZcdTU0OENcdThDMDNcdThCRDUvXHU1MjREXHU3QUVGXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2XHU2NUI5XHU2ODQ4Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NEUwMFx1NkIyMVx1N0JBMVx1NzQwNlx1NTQwRVx1NTNGMFx1NzY4NFx1NkUzMlx1NjdEM1x1NEYxOFx1NTMxNicsIGxpbms6ICcvYXJ0aWNsZS9cdTYwMjdcdTgwRkRcdTRGMThcdTUzMTZcdTU0OENcdThDMDNcdThCRDUvXHU0RTAwXHU2QjIxXHU3QkExXHU3NDA2XHU1NDBFXHU1M0YwXHU3Njg0XHU2RTMyXHU2N0QzXHU0RjE4XHU1MzE2Lm1kJyB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NUZBRVx1NTI0RFx1N0FFRicsXHJcbiAgICAgICAgaWNvbjogJ2xheWVyLWdyb3VwJyxcclxuICAgICAgICBhcmlhTGFiZWw6ICdcdTVGQUVcdTUyNERcdTdBRUYnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NUZBRVx1NTI0RFx1N0FFRlx1NTdGQVx1Nzg0MCcsIGxpbms6ICcvYXJ0aWNsZS9cdTVGQUVcdTUyNERcdTdBRUYvXHU1RkFFXHU1MjREXHU3QUVGXHU1N0ZBXHU3ODQwLm1kJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTVGQUVcdTUyNERcdTdBRUZcdTYyODBcdTY3MkZcdTY1QjlcdTY4NDgnLCBsaW5rOiAnL2FydGljbGUvXHU1RkFFXHU1MjREXHU3QUVGL1x1NUZBRVx1NTI0RFx1N0FFRlx1NjI4MFx1NjcyRlx1NjVCOVx1Njg0OC5tZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU1RkFFXHU1MjREXHU3QUVGXHU2ODQ2XHU2N0I2JywgbGluazogJy9hcnRpY2xlL1x1NUZBRVx1NTI0RFx1N0FFRi9cdTVGQUVcdTUyNERcdTdBRUZcdTY4NDZcdTY3QjYubWQnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NEY3Rlx1NzUyOFx1NUZBRVx1NTI0RFx1N0FFRlx1OTFDRFx1Njc4NFx1OTg3OVx1NzZFRScsIGxpbms6ICcvYXJ0aWNsZS9cdTVGQUVcdTUyNERcdTdBRUYvXHU0RjdGXHU3NTI4XHU1RkFFXHU1MjREXHU3QUVGXHU5MUNEXHU2Nzg0XHU5ODc5XHU3NkVFLm1kJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTRFQ0VcdTk2RjZcdTUyMzBcdTRFMDBcdTY0MkRcdTVFRkFcdTVGQUVcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcdTZBMjFcdTY3N0YnLCBsaW5rOiAnL2FydGljbGUvXHU1RkFFXHU1MjREXHU3QUVGL1x1NEVDRVx1OTZGNlx1NTIzMFx1NEUwMFx1NjQyRFx1NUVGQVx1NUZBRVx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVx1NkEyMVx1Njc3Ri5tZCcgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRleHQ6ICdTU1IvU1NHJyxcclxuICAgICAgICBpY29uOiAnYm9sdCcsXHJcbiAgICAgICAgYXJpYUxhYmVsOiAnU1NSL1NTRy9TRU8nLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NkUzMlx1NjdEM1x1NjdCNlx1Njc4NCcsIGxpbms6ICcvYXJ0aWNsZS9cdTUyNERcdTdBRUZcdTVERTVcdTdBMEJcdTUzMTYvXHU1MjREXHU3QUVGXHU2RTMyXHU2N0QzXHU2N0I2XHU2Nzg0Lm1kJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdWdWVTU1JcdTUzOUZcdTc0MDZcdTUyMDZcdTY3OTAnLCBsaW5rOiAnL2FydGljbGUvdnVlMi9WdWVTU1JcdTUzOUZcdTc0MDZcdTUyMDZcdTY3OTAubWQnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NEVDRVx1OTZGNlx1NTIzMFx1NEUwMFx1NjQyRFx1NUVGQVNTUlx1OTg3OVx1NzZFRScsIGxpbms6ICcvYXJ0aWNsZS9cdTk4NzlcdTc2RUVcdTYwM0JcdTdFRDMvXHU0RUNFXHU5NkY2XHU1MjMwXHU0RTAwXHU2NDJEXHU1RUZBU1NSXHU5ODc5XHU3NkVFLm1kJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTRFQ0VcdTk2RjZcdTUyMzBcdTRFMDBcdTY0MkRcdTVFRkFcdTc5RkJcdTUyQThcdTdBRUZTU0dcdTk4NzlcdTc2RUUnLCBsaW5rOiAnL2FydGljbGUvXHU3OUZCXHU1MkE4XHU3QUVGL1x1NEVDRVx1OTZGNlx1NTIzMFx1NEUwMFx1NjQyRFx1NUVGQVx1NzlGQlx1NTJBOFx1N0FFRlNTR1x1OTg3OVx1NzZFRS5tZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3OUZCXHU1MkE4XHU3QUVGU1NHXHU5ODc5XHU3NkVFXHU1QjlFXHU4REY1JywgbGluazogJy9hcnRpY2xlL1x1NzlGQlx1NTJBOFx1N0FFRi9cdTc5RkJcdTUyQThcdTdBRUZTU0dcdTk4NzlcdTc2RUVcdTVCOUVcdThERjUubWQnIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OiAnM0QnLFxyXG4gICAgICAgIGljb246ICdib2x0JyxcclxuICAgICAgICBhcmlhTGFiZWw6ICd0aHJlZWpzL3dlYmdsJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdUaHJlZS5qcyBcdTUxNjVcdTk1RThcdTUyMzBcdTdDQkVcdTkwMUEnLCBsaW5rOiAnL2FydGljbGUvM2QvdGhyZWVqc1x1NTE2NVx1OTVFOFx1NTIzMFx1N0NCRVx1OTAxQS5tZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnVGhyZWUuanMgXHU5MUNEXHU3MEI5XHU1NkRFXHU5ODdFJywgbGluazogJy9hcnRpY2xlLzNkL3RocmVlanNcdTkxQ0RcdTcwQjkubWQnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1JlYWN0IFRocmVlIEZpYmVyJywgbGluazogJy9hcnRpY2xlLzNkL1JlYWN0VGhyZWVGaWJlci5tZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnU2hhZGVyJywgbGluazogJy9hcnRpY2xlLzNkL1NoYWRlci5tZCcgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnT3BlblNjYWQnLCBsaW5rOiAnL2FydGljbGUvM2Qvb3BlbnNjYWQubWQnIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dKSJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVcsU0FBUyx3QkFBd0I7QUFDdFksU0FBUyxzQkFBc0I7OztBQ0cvQixTQUFTLGlCQUFpQjs7O0FDSjJVLFNBQVMsY0FBYztBQUU1WCxJQUFPLGlCQUFRLE9BQU87QUFBQTtBQUFBLEVBQ2xCLEVBQUUsTUFBTSxnQkFBSyxNQUFLLFNBQVMsTUFBTSxJQUFJO0FBQUEsRUFFckM7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNOO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDTixFQUFFLE1BQU0sY0FBYyxNQUFNLHVCQUF1QjtBQUFBLFVBQ25ELEVBQUUsTUFBTSxjQUFjLE1BQU0sdUJBQXVCO0FBQUEsVUFDbkQsRUFBRSxNQUFNLE9BQU8sTUFBTSwrQkFBcUI7QUFBQSxRQUM5QztBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsVUFDTixFQUFFLE1BQU0sOENBQVcsTUFBTSx1REFBb0I7QUFBQSxVQUM3QyxFQUFFLE1BQU0sbUVBQWlCLE1BQU0sc0ZBQW9DO0FBQUEsVUFDbkUsRUFBRSxNQUFNLDRCQUFRLE1BQU0scUNBQWlCO0FBQUEsVUFDdkMsRUFBRSxNQUFNLDRCQUFRLE1BQU0scUNBQWlCO0FBQUEsVUFDdkMsRUFBRSxNQUFNLG1CQUFTLE1BQU0sNEJBQWtCO0FBQUEsUUFDN0M7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUVBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsTUFDTjtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFB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

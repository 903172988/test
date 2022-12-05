import { defineConfig4CustomTheme, UserPlugins } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import dayjs from "dayjs";

export default defineConfig4CustomTheme<VdoingThemeConfig>({
    theme: "vdoing", // 使用npm主题包

    locales: {
        "/": {
            lang: "zh-CN",
            title: "xiaoA's blog",
            description: "web前端学习与总结",
        },
    },

    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            { text: "首页", link: "/" },
            {
                text: "前端笔记",
                link: "/web/",
                items: [
                    {
                        text: "布局",
                        items: [
                            { text: "HTML", link: "/pages/8309a5b876fc95e3/" },
                            { text: "CSS", link: "/pages/0a83b083bdf257cb/" },
                        ],
                    },
                    {
                        text: "基础",
                        items: [
                            { text: "布局", link: "" },
                            { text: "JavaScript", link: "/note/javascript/" },
                            { text: "ES6", link: "/note/es6/" },
                            { text: "JS设计模式", link: "/pages/4643cd/" },
                            { text: "数据结构与算法", link: "" },
                            { text: "网络", link: "" },
                        ],
                    },
                    {
                        text: "框架",
                        items: [
                            { text: "Vue", link: "/note/vue/" },
                            { text: "React", link: "/note/react/" },
                        ],
                    },
                    {
                        text: "进阶",
                        items: [
                            { text: "TypeScript", link: "/note/typescript/" },
                            { text: "Node", link: "/note/node/" },
                        ],
                    },
                    {
                        text: "工具",
                        items: [{ text: "Git", link: "/note/git/" }],
                    },
                    {
                        text: "其他",
                        items: [{ text: "微前端", link: "/pages/5abf96/" }],
                    },
                ],
            },
            { text: "日常踩坑记录" },
           
            // {
            //   text: '收藏',
            //   link: '/pages/beb6c0bd8a66cea6/'
            // },
            // {
            //   text: '索引',
            //   link: '/archives/',
            //   items: [
            //     { text: '分类', link: '/categories/' },
            //     { text: '标签', link: '/tags/' },
            //     { text: '归档', link: '/archives/' },
            //   ],
            // },
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: "/img/logo.png", // 导航栏logo
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        docsDir: "docs", // 编辑的文件夹
        editLinks: true, // 启用编辑
        editLinkText: "编辑",

        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: "structuring",

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: "zhangai", // 必需
            link: "https://github.com/zaadmin", // 可选的
        },

        // 页脚信息
        footer: {
            createYear: 2019, // 博客创建年份
            copyrightInfo: "xiaoA", // 博客版权信息、备案信息等，支持a标签或换行标签</br>
        },

        // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
        extendFrontmatter: {
            author: {
                name: "zhangai",
                link: "https://github.com/zaadmin",
            },
        },
    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ["link", { rel: "icon", href: "/img/favicon.ico" }], //favicons，资源放在public文件夹
        [
            "meta",
            {
                name: "keywords",
                content:
                    "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown",
            },
        ],
        ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
    ],

    // 插件配置
    plugins: <UserPlugins>[
        [
            "one-click-copy", // 代码块复制按钮
            {
                copySelector: [
                    'div[class*="language-"] pre',
                    'div[class*="aside-code"] aside',
                ], // String or Array
                copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],

        [
            "demo-block", // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            {
                settings: {
                    // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                    // cssLib: ['http://xxx'], // 在线示例中的css依赖
                    // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                    jsfiddle: false, // 是否显示 jsfiddle 链接
                    codepen: true, // 是否显示 codepen 链接
                    horizontal: false, // 是否展示为横向样式
                },
            },
        ],
        [
            "vuepress-plugin-zooming", // 放大图片
            {
                selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
                options: {
                    bgColor: "rgba(0,0,0,0.6)",
                },
            },
        ],
        [
            "@vuepress/last-updated", // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
                },
            },
        ],
    ],

    markdown: {
        lineNumbers: true,
        extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [".vuepress/config.ts"],
});

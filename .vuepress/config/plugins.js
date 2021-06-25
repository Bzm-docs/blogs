module.exports = [
    // 自动生成侧边栏
    ["vuepress-plugin-auto-sidebar", {
        sort: {
            mode: "asc",
            readmeFirst: true,
            readmeFirstForce: true
        },
        title: {
            // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
            mode: "titlecase",
            map: {}
        },
        sidebarDepth: 2,
        collapse: {
            open: true,
            collapseList: [],
            uncollapseList: []
        },
        ignore: []
    }],

    // 支持中文文件名
    [
        "permalink-pinyin",
        {
            lowercase: true, // Converted into lowercase, default: true
            separator: "-", // Separator of the slug, default: '-'
        },
    ],
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "copy",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
        tip: {
            content: "Copy success !!!"
        }
    }],
    // #PWA插件
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    // 看板娘
    ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
        theme: ["koharu"],
        clean: false,
        modelStyle: {
            right: "50px",
            bottom: "-20px",
            opacity: "0.9",
        },
    },
    ],
    [
        '@vuepress/google-analytics',
        {
            'ga': 'G-QFXMNEE5RF' // UA-00000000-0
        }
    ],
    [
        'sitemap',{
        hostname: 'https://blogs.bzm.ink/'
    }
    ]
]

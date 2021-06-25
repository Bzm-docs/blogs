module.exports = {
    title: "Bzm 文档✍",
    description: '记录一路走来学习的计算机知识，构建自己的知识体系！',
    base: "/",
    dest: 'dist',
    head: [
        ['link', {rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/qianzai/mydocs@master/custom/_media/favicon.ico'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ],
    theme: 'reco',
    themeConfig: {
        // repo: 'qianzai/myblog',
        // repoLabel: '查看源码',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        displayAllHeaders: true,

        noFoundPageByTencent: false,    //404 腾讯公益

        // 密钥
        // keyPage: {
        //     keys: ['32位的 md5 加密密文'], // 1.3.0 版本后需要设置为密文
        //     color: '#42b983', // 登录页动画球的颜色
        //     lineColor: '#42b983' // 登录页动画线的颜色
        // },

        nav: require("./config/nav.js"),
        // sidebar: require("./config/sidebar"),
        type: 'blog',
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },
        friendLink: require("./config/friendLink"),
        logo: '/logo.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        anchorDisplay: true,
        // 最后更新时间
        lastUpdated: 'Last Updated',

        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // sidebar: "auto",//所有页面自动生成侧边栏

        // 作者
        author: 'Bzm',
        // 作者头像
        authorAvatar: 'https://cdn.jsdelivr.net/gh/qianzai/mydocs@master/custom/_media/%E5%A4%B4%E5%83%8F.jpg',
        // 备案号
        // record: 'xxxx',
        // 项目开始时间
        // startYear: '2017'
        /**
         * 密钥 (if your blog is private)
         */

        // keyPage: {
        //   keys: ['your password'],
        //   color: '#42b983',
        //   lineColor: '#42b983'
        // },

        //github
        vssueConfig: {
            platform: 'github',
            owner: 'qianzai',
            repo: 'myblog',
            clientId: 'aa103089e804f79c133d',
            clientSecret: '4163b24c515bb146141e49bbdafb9991e89672a3',
        }
        //gitee

    },
    markdown: {
        lineNumbers: true,
        //解决图片相对路径问题
        extendMarkdown: md => {
            md.use(require("markdown-it-disable-url-encode")); //npm install markdown-it-disable-url-encode --save
        }
    },

    plugins: require('./config/plugins')}

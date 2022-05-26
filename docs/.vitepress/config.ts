import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'hs-ui',
    description: '成都质数斯达克科技有限公司内部ui组件库',
    lastUpdated: true,
    themeConfig: {
        docsDir: 'docs',
        nav: [
            { text: '组件',  link: '/component/button' }
        ]
    },
});
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Full-Stack-Skills',
  description: '全栈 Agent Skills 市场（46 repos / 460+ SKILL.md）',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组织仓库', link: '/repositories' },
      { text: 'GitHub', link: 'https://github.com/full-stack-skills' }
    ],
    sidebar: {
      '/': [
        {
          text: '入门',
          items: [
            { text: '简介', link: '/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        },
        {
          text: '项目',
          items: [
            { text: '仓库列表', link: '/repositories' }
          ]
        },
        {
          text: '关于',
          items: [
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '许可证', link: '/guide/license' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/full-stack-skills' }
    ],
    footer: {
      message: '由 Full-Stack-Skills 用 ❤️ 制作',
      copyright: `Apache 2.0 Licensed | Copyright © ${new Date().getFullYear()} Full-Stack-Skills`
    },
    search: {
      provider: 'local'
    }
  }
})
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Full-Stack-Skills',
  description: '全栈 Agent Skills 市场（46 repos / 460+ SKILL.md）',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',
  locales: {
    'root': {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Full-Stack-Skills',
      description: '全栈 Agent Skills 市场（46 repos / 460+ SKILL.md）',
    },
    'en': {
      label: 'English',
      lang: 'en-US',
      title: 'Full-Stack-Skills',
      description: 'Full-stack Agent Skills marketplace (46 repos / 460+ SKILL.md)',
    },
  },
  themeConfig: {
    nav: [
      { text: '首页 / Home', link: '/', items: [
        { text: '快速开始 / Getting Started', link: '/guide/getting-started' },
        { text: '贡献指南 / Contributing', link: '/guide/contributing' },
        { text: '许可证 / License', link: '/guide/license' },
      ] },
      { text: '仓库 / Repositories', link: '/repositories' },
      { text: 'GitHub', link: 'https://github.com/full-stack-skills' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门 / Getting Started',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '许可证', link: '/guide/license' },
          ],
        },
      ],
      '/en/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/en/guide/getting-started' },
            { text: 'Contributing', link: '/en/guide/contributing' },
            { text: 'License', link: '/en/guide/license' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/full-stack-skills' },
    ],
    footer: {
      message: '由 Full-Stack-Skills 用 ❤️ 制作 / Made with ❤️ by Full-Stack-Skills',
      copyright: `Apache 2.0 Licensed | Copyright © ${new Date().getFullYear()} Full-Stack-Skills`,
    },
    search: {
      provider: 'local',
    },
  },
})
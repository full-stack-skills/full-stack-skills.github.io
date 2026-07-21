import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Full-Stack-Skills',
  description: '从前端、后端、Rust、Java、移动端到 DevOps、测试、DDD、SDD 和设计工具，按专业包独立安装。',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Full-Stack-Skills',
      description: '从前端、后端、Rust、Java、移动端到 DevOps、测试、DDD、SDD 和设计工具，按专业包独立安装。',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Full-Stack-Skills',
      description: 'Frontend, backend, Rust, Java, mobile, DevOps, testing, DDD, SDD, and design tooling as independently installable packages.',
    },
  },
  mermaid: {
    theme: 'neutral',
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/full-stack-skills' }],
    search: { provider: 'local' },
    locales: {
      root: {
        label: '简体中文',
        nav: [
          { text: '首页', link: '/' },
          { text: '项目目录', link: '/repositories' },
          { text: '指南', items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '生态架构', link: '/guide/ecosystem' },
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '许可证', link: '/guide/license' },
          ] },
          { text: 'GitHub', link: 'https://github.com/full-stack-skills' },
        ],
        sidebar: {
          '/guide/': [{ text: '指南', items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '生态架构', link: '/guide/ecosystem' },
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '许可证', link: '/guide/license' },
          ] }],
        },
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        docFooter: { prev: '上一页', next: '下一页' },
        footer: {
          message: '内容来自当前仓库与本地源码核验',
          copyright: 'Copyright © 2026 Full-Stack-Skills',
        },
      },
      en: {
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Repositories', link: '/en/repositories' },
          { text: 'Guide', items: [
            { text: 'Getting started', link: '/en/guide/getting-started' },
            { text: 'Ecosystem', link: '/en/guide/ecosystem' },
            { text: 'Contributing', link: '/en/guide/contributing' },
            { text: 'License', link: '/en/guide/license' },
          ] },
          { text: 'GitHub', link: 'https://github.com/full-stack-skills' },
        ],
        sidebar: {
          '/en/guide/': [{ text: 'Guide', items: [
            { text: 'Getting started', link: '/en/guide/getting-started' },
            { text: 'Ecosystem', link: '/en/guide/ecosystem' },
            { text: 'Contributing', link: '/en/guide/contributing' },
            { text: 'License', link: '/en/guide/license' },
          ] }],
        },
        outlineTitle: 'On this page',
        lastUpdatedText: 'Last updated',
        docFooter: { prev: 'Previous', next: 'Next' },
        footer: {
          message: 'Content verified against current repositories and local source',
          copyright: 'Copyright © 2026 Full-Stack-Skills',
        },
      },
    },
  },
})

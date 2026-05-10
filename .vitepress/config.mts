import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/SCUTIE/',
  title: "🛠️华工工工-生存手册",
  description: "华南理工工业工程生存指北,专为华南理工大学工业工程专业学生打造的生存手册,提供课程推荐、生活指南、实习经验等实用信息,帮助IEers顺利度过大学生活",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '正文', link: '/intro.md' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '正文', link: '/intro.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

  }
})

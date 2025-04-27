import { defineConfig } from 'vitepress'
import { sharedConfig } from './config/share'
import { zhConfig } from './config/zh'
import { enConfig } from './config/en'
import { link } from 'fs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  base: '/Roxybrowser-documentation/',
  lastUpdated: false,
  title: "Roxybrowser",
  markdown: {
    math: false, // 禁用数学公式支持
  },
  locales: { // 多语言
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      ...enConfig
    }
  },
})
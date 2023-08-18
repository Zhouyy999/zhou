import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import jsx from '@vitejs/plugin-vue-jsx'
import codeBlock from '@yanyu-fe/vuepress-plugin-code-block'
import ElementPlus from 'unplugin-element-plus/vite'
import * as navbar from './configs/navbar'
import * as sidebar from './configs/sidebar'
import { resolve } from 'path'

export default defineUserConfig({
  title: '二次封装组件库',
  plugins: [codeBlock()],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'eleplus-coat'
    }
  },
  lang: 'zh-CN',
  theme: defaultTheme({
    navbar: navbar.zh,
    sidebar: sidebar.zh
  }),
  bundler: viteBundler({
    viteOptions: {
      // 在eleplus-coat那边，使用es模块导入，样式需要单独导入
      // 所以引入unplugin-element-plus插件，这边在渲染时实时转换样式
      plugins: [jsx(), ElementPlus({})],
      resolve: {
        alias: {
          iconfont: resolve(__dirname, './public/iconfont'),
          'eleplus-coat/style': resolve(__dirname, '../../packages/eleplus-coat/src/style.ts'),
          'eleplus-coat': resolve(__dirname, '../../packages/eleplus-coat/src/index.ts')
        }
      }
    }
  })
})

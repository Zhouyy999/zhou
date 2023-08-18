import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import eleplusCoating from 'eleplus-coat'
import 'eleplus-coat/style'
import './custom.less'
import 'iconfont/iconfont.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(eleplusCoating)
  }
})

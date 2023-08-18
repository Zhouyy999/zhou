import { SidebarConfig } from 'vuepress'

export const zh: SidebarConfig = {
  '/components/': [
    {
      text: '基础组件',
      children: ['/components/basic/button/', '/components/basic/icon/']
    }
  ],
  '/': ['/']
}

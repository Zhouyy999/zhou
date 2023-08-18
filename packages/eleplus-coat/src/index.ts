import * as components from './components'
import type { App } from 'vue'

// 按需加载
export * from './components'
// 通过.use加载
export default {
  install: (app: App): App => {
    for (const compName in components) {
      const comp = components[compName as keyof typeof components]
      'install' in comp && app.use(comp)
    }
    return app
  }
}

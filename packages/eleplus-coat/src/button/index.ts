import Button from './button'
import type { App, Plugin } from 'vue'

Button.install = (app: App) => {
  app.component(Button.name || '', Button)
  return app
}

export default Button as typeof Button & Plugin

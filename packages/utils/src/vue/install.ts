import type { App, Plugin } from 'vue'

type ComponentType<T> = T & Plugin & { name: string }

export const withInstall = <T>(c: T): ComponentType<T> => {
  const component = c as ComponentType<T>

  component.install = (app: App) => {
    app.component(component.name || '', component)
    return app
  }

  return component
}

import SvgIcon from './svgicons/index.vue'
import { App, Component } from 'vue'

const Components: { [name: string]: Component } = { SvgIcon }
export default {
  install(app: App) {
    Object.keys(Components).forEach((key) => {
      app.component(key, Components[key])
    })
  },
}

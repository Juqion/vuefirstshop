import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import components from '@/components/index'
import '@/styles/index.scss'
import router from '@/router'
import pinia from '@/store'
const app = createApp(App)
app.use(components)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')

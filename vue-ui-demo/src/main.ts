import { createApp } from 'vue'
import App from './App.vue'
// import '@zhou/eleplus-coat/dist/style.css'
import 'element-plus/dist/index.css'
import zhou from '@zhou/eleplus-coat'
import elementPlus from 'element-plus'

const app = createApp(App)

app.use(zhou)
// app.use(elementPlus)
app.mount('#app')

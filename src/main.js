import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'




import { createApp } from 'vue'
import App from './App.vue'


// createApp(App).mount('#app')

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')



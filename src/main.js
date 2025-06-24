import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// 初始化AOS动画库
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
})

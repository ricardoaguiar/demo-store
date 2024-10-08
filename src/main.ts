import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from '@/router'
import 'bulma/css/bulma.css'
import '@/assets/styles/styles.scss'

const pinia = createPinia()
const app = createApp(App)
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head)
app.mount('#app')

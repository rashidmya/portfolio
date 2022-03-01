import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@/plugins/font-awesome'

const app = createApp(App)

app.use(router)
app.component('fa', FontAwesomeIcon)

app.mount('#app')

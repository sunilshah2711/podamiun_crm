import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import App from './App.vue'
import router from './router'

import './assets/css/bootstrap-main.css'
import './assets/css/bootstrap-vue-3.css'
import './assets/css/global.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.mount('#app')

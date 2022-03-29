import { createApp } from 'vue'

import App from './App.vue'
import router from './router'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFileLines, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

import './assets/css/global.css'

const app = createApp(App)
library.add(faGoogle, faFileLines, faXmark)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')

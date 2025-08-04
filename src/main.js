import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/main.css'
// Import Roboto font weights
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import '@fontsource/roboto-mono/400.css'
import '@fontsource/roboto-mono/500.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'
import TypedJs from 'vue3-typed-js'


const app = createApp(App).use(TypedJs)

app.use(Particles, {
  init: async engine => {
    await loadFull(engine)
  }
})

app.use(router)

app.mount('#app')

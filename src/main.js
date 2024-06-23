import './assets/main.css'
import './assets/reset.scss'
import './assets/custom.scss'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'
import Currency from './js/Currency.js'
import App from './App.vue'
import router from './router'
import Ripple from 'primevue/ripple'
import { vMaska } from 'maska'

window.Pusher = Pusher

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
  wsHost: import.meta.env.VITE_PUSHER_HOST,
  wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
  wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
  forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
  enabledTransports: ['ws', 'wss']
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.mixin(Currency)
app.use(PrimeVue, { ripple: true })
app.use(pinia)
app.use(router)
app.directive('ripple', Ripple)
app.directive('maska', vMaska )

app.mount('#app')

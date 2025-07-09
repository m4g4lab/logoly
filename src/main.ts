import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag'


import App from '@/App.vue'
import router from '@/router'

import i18n from '@/i18n'

import '@/style.css'
import 'virtual:uno.css'

const app = createApp(App);

app
  .use(createPinia())
  .use(i18n)
  .use(
    VueGtag,
    {
      appName: 'logoly',
      pageTrackerScreenviewEnabled: true,
      config: {
        id: 'G-MHY8P0GHZ1'
      }
    },
    router
  )
  .use(router)
  .mount('#app');

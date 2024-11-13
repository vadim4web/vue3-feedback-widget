import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Vuetify
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create Vuetify instance to be used in Vue app
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

// Create Vue app, including Vuetify and mount
createApp(App).use(vuetify).mount('#app')

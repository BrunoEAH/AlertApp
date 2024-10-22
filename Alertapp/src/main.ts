// main.js or main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { IonicVue } from '@ionic/vue';
import router from './router';

// Import the core CSS
import '@ionic/vue/css/core.css';

// Optional CSS utils that you might need
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Create the app
const app = createApp(App)
  .use(IonicVue)  // Register IonicVue globally
  .use(router);

// Mount the app
app.mount('#app');

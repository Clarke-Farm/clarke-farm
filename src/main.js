import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import router from './router';
import store from './store';

import App from './App.vue';

library.add(fas, fab);

createApp(App).use(store).use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');

import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone, faBars, faTrash, faCog, faHome, faBook, faStar, faSignOutAlt, faRunning,
  faComments, faBell, faUser, faPlus, faEdit, faAngleLeft, faAngleRight, faHamburger,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faPhone, faBars, faFacebookF, faTwitter,
  faInstagram, faTrash, faCog, faHome, faBook, faStar, faSignOutAlt,
  faComments, faBell, faUser, faPlus, faEdit, faAngleLeft, faAngleRight, faRunning,
  faHamburger, faStarHalfAlt);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');

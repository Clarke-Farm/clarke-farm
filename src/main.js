import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone, faEye, faBars, faTrash, faCog, faHome, faBook, faStar, faSignOutAlt, faRunning,
  faComments, faBell, faUser, faPlus, faEdit, faAngleLeft, faAngleRight, faHamburger,
  faStarHalfAlt, faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faPhone, faBars, faEye, faFacebookF, faTwitter,
  faInstagram, faTrash, faCog, faHome, faBook, faStar, faSignOutAlt,
  faComments, faBell, faUser, faPlus, faEdit, faAngleLeft, faAngleRight, faRunning,
  faHamburger, faStarHalfAlt, faCheckCircle);

// sweetalert buttons
const options = {
  confirmButtonColor: '#068d68',
  cancelButtonColor: '#ff7674',
};
createApp(App)
  .component('fa', FontAwesomeIcon).use(VueSweetalert2, options)
  .use(store)
  .use(router)
  .mount('#app');

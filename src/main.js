import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faPhone, faEye, faBars, faTrash, faCog, faHome, faBook, faUserCog,
  faTrashAlt, faBookOpen, faStar, faSignOutAlt, faRunning, faComments,
  faHouseUser, faUserFriends, faBell, faUser, faArrowRight,
  faPlus, faEdit, faAngleLeft, faCogs, faAngleDown,
  faStarAndCrescent, faAngleRight, faHamburger, faGraduationCap, faCampground,
  faStarHalfAlt, faCheckCircle, faShoppingBag, faTruck, faBoxOpen, faBalanceScale,
  faMinusCircle, faBullseye,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import VueSweetalert2 from 'vue-sweetalert2';

// IMPORTING OKTA DEPENDENCIES
import OktaVue from '@okta/okta-vue';
import { oktaAuth } from './okta';

import App from './App.vue';
import router from './router';
import store from './store';

// IMPORTING STYLES
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(faPhone, faBars, faEye, faFacebookF, faTwitter, faCogs, faTrashAlt, faCampground,
  faGraduationCap, faHouseUser, faUserFriends,
  faUserCog, faStarAndCrescent, faHome, faBookOpen, faAngleDown, faArrowRight,
  faInstagram, faTrash, faCog, faHome, faBook, faStar, faSignOutAlt,
  faComments, faBell, faUser, faPlus, faEdit, faAngleLeft, faAngleRight, faRunning,
  faHamburger, faStarHalfAlt, faCheckCircle, faShoppingBag, faTruck, faBoxOpen,
  faBalanceScale, faMinusCircle, faBullseye);

// Sweetalert buttons
const options = {
  confirmButtonColor: '#068d68',
  cancelButtonColor: '#ff7674',
};

createApp(App)
  .component('fa', FontAwesomeIcon).use(VueSweetalert2, options)
  .use(store)
  .use(router)
  .use(OktaVue, {
    oktaAuth,
    onAuthRequired: () => {
      router.push('/login');
    },
    onAuthResume: () => {
      router.push('/login');
    },
  })
  .mount('#app');

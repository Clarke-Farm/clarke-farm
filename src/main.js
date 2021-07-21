import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone, faBars, faHome, faTrashAlt, faStar, faSignOutAlt, faRunning, faComments, faBell, faUser, faArrowRight,
  faPlus, faEdit, faAngleLeft, faCogs, faAngleRight, faHamburger, faTrash,
  faStarHalfAlt, faCheckCircle, faShoppingBag, faTruck, faBoxOpen, faBalanceScale,
  faMinusCircle, faBullseye, faSmile, faHeart, faThumbsUp, faHandshake, faMugHot, faSearch,
  faSort, faMinus, faCheck, faCartArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Toaster from '@meforma/vue-toaster';

// import VeeValidate from 'vee-validate';
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

library.add(faPhone, faBars, faFacebookF, faTwitter, faCogs, faTrashAlt,
  faSearch, faHome, faArrowRight, faInstagram, faHome, faStar, faSignOutAlt, faSort,
  faComments, faBell, faUser, faPlus, faEdit, faAngleLeft, faAngleRight, faRunning,
  faHamburger, faStarHalfAlt, faCheckCircle, faShoppingBag, faTruck, faBoxOpen, faTrash, faCartArrowDown,
  faBalanceScale, faMinusCircle, faBullseye, faSmile, faHeart, faThumbsUp, faHandshake, faMugHot, faMinus, faCheck);

// sweetalert buttons
const options = {
  confirmButtonColor: '#068d68',
  cancelButtonColor: '#ff7674',
};
createApp(App)
  .component('fa', FontAwesomeIcon).use(VueSweetalert2, options)
  .use(Toaster)
  .use(store)
  .use(router)
  .use(OktaVue, {
    oktaAuth,
    onAuthRequired: () => {
      router.push('/admin');
    },
    onAuthResume: () => {
      router.push('/admin');
    },
  })
  .mount('#app');

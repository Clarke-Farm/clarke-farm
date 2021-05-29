/* eslint-disable import/no-unresolved */
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import VisitPage from '@/views/VisitPage.vue';
import CoffeePage from '@/views/CoffeePage.vue';
import TrainingPrograms from '@/views/TrainingPrograms.vue';
import CoffeeForm from '@/views/CoffeeForm.vue';
// eslint-disable-next-line import/no-unresolved
import AdminBooking from '@/views/AdminBooking.vue';
import LoginPage from '@/views/LoginPage.vue';
import Dashboard from '@/views/Dashboard.vue';
import Reviews from '@/views/AdminReviews.vue';
import Settings from '@/views/AdminSettings.vue';
import Activities from '@/views/Activities.vue';
import Accommodation from '@/views/Accommodation.vue';
import CoffeeProcess from '@/views/CoffeeProcess.vue';
import TrainingProgram from '@/views/TrainingProgram.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/visit',
    name: 'VisitPage',
    component: VisitPage,
  },
  {
    path: '/coffee',
    name: 'CoffeePage',
    component: CoffeePage,
  },
  {
    path: '/buy-coffee',
    name: 'CoffeeForm',
    component: CoffeeForm,
  },
  {
    path: '/training-programs',
    name: 'TrainingPrograms',
    component: TrainingPrograms,
  },
  {
    path: '/admin',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/admin/booking',
    name: 'AdminBooking',
    component: AdminBooking,
  },
  {
    path: '/admin/reviews',
    name: 'Reviews',
    component: Reviews,
  },
  {
    path: '/admin/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/admin/settings/activities',
    name: 'Activities',
    component: Activities,
  },
  {
    path: '/admin/settings/accommodation',
    name: 'Accommodation',
    component: Accommodation,
  },
  {
    path: '/admin/settings/coffee',
    name: 'CoffeeProcess',
    component: CoffeeProcess,
  },

  {
    path: '/admin/settings/training-program',
    name: 'TrainingProgram',
    component: TrainingProgram,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

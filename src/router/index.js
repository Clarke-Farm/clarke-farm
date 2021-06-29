/* eslint-disable import/no-unresolved */
import { createRouter, createWebHistory } from 'vue-router';
import { LoginCallback, navigationGuard } from '@okta/okta-vue';

import HomePage from '@/views/HomePage.vue';
import VisitPage from '@/views/VisitPage.vue';
import CoffeePage from '@/views/CoffeePage.vue';
import CoffeeForm from '@/views/CoffeeForm.vue';
import TrainingPrograms from '@/views/TrainingPrograms.vue';

// eslint-disable-next-line import/no-unresolved
import LoginComponent from '@/views/LoginPage.vue';
import Dashboard from '@/views/Dashboard.vue';
import AdminBookings from '@/views/AdminBookings.vue';
import AdminReviews from '@/views/AdminReviews.vue';
import AdminSettings from '@/views/AdminSettings.vue';
import ActivitySettings from '@/views/SettingsTableActivities.vue';
import AccommodationSettings from '@/views/SettingsTableAccommodation.vue';
import CoffeeProcessSettings from '@/views/SettingsTableCoffee.vue';
import TrainingProgramSettings from '@/views/SettingsTableTraining.vue';
import EditActivities from '@/views/EditActivities.vue';
import EditAccommodation from '@/views/EditAccommodation.vue';
import EditCoffee from '@/views/EditCoffee.vue';
import EditTraining from '@/views/EditTraining.vue';
import NoneExistingPage from '@/views/NoneExistingPage.vue';

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
  // OKTA AUTHORIZATION
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/callback',
    component: LoginCallback,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/bookings',
    name: 'AdminBookings',
    component: AdminBookings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/reviews',
    name: 'AdminReviews',
    component: AdminReviews,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings',
    name: 'AdminSettings',
    component: AdminSettings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings/activities',
    name: 'ActivitySettings',
    component: ActivitySettings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings/accommodations',
    name: 'AccommodationSettings',
    component: AccommodationSettings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings/coffee',
    name: 'CoffeeProcessSettings',
    component: CoffeeProcessSettings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/settings/trainings',
    name: 'TrainingProgramSettings',
    component: TrainingProgramSettings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/edit-activity/:id',
    name: 'EditActivities',
    component: EditActivities,
  },
  {
    path: '/edit-accommodation/:id',
    name: 'EditAccommodation',
    component: EditAccommodation,
  },
  {
    path: '/edit-coffee/:id',
    name: 'EditCoffee',
    component: EditCoffee,
  },
  {
    path: '/edit-training/:id',
    name: 'EditTraining',
    component: EditTraining,
  },
  // NON EXISTING ROUTE
  {
    path: '/:pathMatch(.*)*',
    name: 'NoneExistingPage',
    component: NoneExistingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(navigationGuard);

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import { LoginCallback, navigationGuard } from '@okta/okta-vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/visit',
    name: 'VisitPage',
    component: () => import('@/views/VisitPage.vue'),
  },
  {
    path: '/coffee',
    name: 'CoffeePage',
    component: () => import('@/views/CoffeePage.vue'),
  },
  {
    path: '/training-programs',
    name: 'TrainingPrograms',
    component: () => import('@/views/TrainingPrograms.vue'),
  },
  // OKTA AUTHORIZATION
  {
    path: '/admin',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/callback',
    component: LoginCallback,
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/booking',
    name: 'AdminBooking',
    component: () => import('@/views/AdminBooking.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/orders',
    name: 'CoffeeOrders',
    component: () => import('@/views/CoffeeOrders.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/reviews',
    name: 'Reviews',
    component: () => import('@/views/AdminReviews.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/settings',
    name: 'Settings',
    component: () => import('@/views/AdminSettings.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(navigationGuard);

export default router;

<template>
  <div>
    <NavBar/>
    <HeroVisit/>
    <PopularActivities />
    <OurOffers/>
    <Reviews />
    <OurPackages />
    <BookingForm />
    <Footer/>

  </div>
</template>

<script>
import HeroVisit from '@/components/visit/HeroVisit.vue';
import PopularActivities from '@/components/visit/PopularActivities.vue';

import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent({
  loader: () => import('@/components/shared/MainNav.vue'),
  delay: 100,
  timeout: 2000,
});

const OurOffers = defineAsyncComponent({
  loader: () => import('@/components/visit/OurOffers.vue'),
  delay: 300,
  timeout: 2000,
});

const OurPackages = defineAsyncComponent({
  loader: () => import('@/components/visit/OurPackages.vue'),
  delay: 300,
  timeout: 2000,
});

const Reviews = defineAsyncComponent({
  loader: () => import('@/components/visit/VisitorReviews.vue'),
  delay: 300,
  timeout: 2000,
});

const BookingForm = defineAsyncComponent({
  loader: () => import('@/components/visit/BookingForm.vue'),
  delay: 300,
  timeout: 2000,
});

const Footer = defineAsyncComponent({
  loader: () => import('@/components/shared/MainFooter.vue'),
  delay: 300,
  timeout: 2000,
});

export default {
  name: 'Visit',
  components: {
    NavBar,
    HeroVisit,
    PopularActivities,
    OurOffers,
    OurPackages,
    Reviews,
    BookingForm,
    Footer,
  },
};
</script>

<style scoped>

</style>

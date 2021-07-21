<template>
  <div>
    <NavBar/>
    <HeroCoffee />
    <OurPartners />
    <Packaging />
    <ProcessBenefits />
    <CoffeeReviews />
    <CoffeeProcess />
    <BookingForm />
    <Footer/>
  </div>
</template>

<script>
import HeroCoffee from '@/components/coffee/HeroCoffee.vue';
import OurPartners from '@/components/coffee/OurPartners.vue';
import Packaging from '@/components/coffee/Packages.vue';

import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent({
  loader: () => import('@/components/shared/MainNav.vue'),
  delay: 100,
  timeout: 2000,
});

const CoffeeProcess = defineAsyncComponent({
  loader: () => import('@/components/coffee/CoffeeProcess.vue'),
  delay: 300,
  timeout: 2000,
});

const ProcessBenefits = defineAsyncComponent({
  loader: () => import('@/components/coffee/ProcessBenefits.vue'),
  delay: 300,
  timeout: 2000,
});

const CoffeeReviews = defineAsyncComponent({
  loader: () => import('@/components/coffee/CoffeeReviews.vue'),
  delay: 300,
  timeout: 2000,
});

const BookingForm = defineAsyncComponent({
  loader: () => import('@/components/coffee/BookingForm.vue'),
  delay: 300,
  timeout: 2000,
});

const Footer = defineAsyncComponent({
  loader: () => import('@/components/shared/MainFooter.vue'),
  delay: 300,
  timeout: 2000,
});

export default {
  name: 'CoffeePage',
  components: {
    NavBar,
    HeroCoffee,
    ProcessBenefits,
    CoffeeReviews,
    OurPartners,
    Packaging,
    BookingForm,
    CoffeeProcess,
    Footer,
  },
};
</script>

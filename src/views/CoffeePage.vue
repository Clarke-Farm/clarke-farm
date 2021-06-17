<template>
  <div>
    <NavBar/>
    <HeroCoffee />
    <OurPartners />
    <CoffeeProcess />
    <OurCertificates />
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/MainNav.vue';
import HeroCoffee from '@/components/coffee/HeroCoffee.vue';
import CoffeeProcess from '@/components/coffee/CoffeeProcess.vue';
import OurCertificates from '@/components/coffee/OurCertificates.vue';
import OurPartners from '@/components/coffee/OurPartners.vue';
import Footer from '@/components/MainFooter.vue';

export default {
  name: 'CoffeePage',
  components: {
    NavBar,
    HeroCoffee,
    OurPartners,
    CoffeeProcess,
    OurCertificates,
    Footer,
  },
};
</script>

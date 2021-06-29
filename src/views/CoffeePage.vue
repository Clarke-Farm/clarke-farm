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
import NavBar from '@/components/MainNav.vue';
import HeroCoffee from '@/components/coffee/HeroCoffee.vue';
import CoffeeProcess from '@/components/coffee/CoffeeProcess.vue';
import ProcessBenefits from '@/components/coffee/ProcessBenefits.vue';
import CoffeeReviews from '@/components/coffee/CoffeeReviews.vue';
import OurPartners from '@/components/coffee/OurPartners.vue';
import Packaging from '@/components/coffee/Packages.vue';
import BookingForm from '@/components/coffee/BookingForm.vue';
import Footer from '@/components/MainFooter.vue';

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

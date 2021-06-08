<template>
  <div>
    <NavBar/>
    <HeroVisit/>
    <PopularActivities />
    <OurOffers/>
    <OurPackages />
    <BookingForm />
    <Footer/>

  </div>
</template>

<script>
import NavBar from '@/components/MainNav.vue';
import HeroVisit from '@/components/visit/HeroVisit.vue';
import PopularActivities from '@/components/visit/PopularActivities.vue';
import OurOffers from '@/components/visit/OurOffers.vue';
import OurPackages from '@/components/visit/OurPackages.vue';
import BookingForm from '@/components/visit/BookingForm.vue';
import Footer from '@/components/MainFooter.vue';

export default {
  name: 'Visit',
  components: {
    NavBar,
    HeroVisit,
    PopularActivities,
    OurOffers,
    OurPackages,
    BookingForm,
    Footer,
  },
};
</script>

<style scoped>

</style>

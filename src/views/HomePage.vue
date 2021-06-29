<template>
  <div>
    <NavBar/>
    <HeroLandingPage/>
    <AboutSection/>
    <CoreValues/>
    <OurFounder/>
    <OurTeam/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/MainNav.vue';
import HeroLandingPage from '@/components/home/HeroLanding.vue';
import AboutSection from '@/components/home/AboutSection.vue';
import OurFounder from '@/components/home/OurFounder.vue';
import CoreValues from '@/components/home/CoreValues.vue';
import OurTeam from '@/components/home/OurTeam.vue';
import Footer from '@/components/MainFooter.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
    HeroLandingPage,
    AboutSection,
    CoreValues,
    OurFounder,
    OurTeam,
    Footer,
  },
};
</script>

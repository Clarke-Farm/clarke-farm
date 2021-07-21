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
import HeroLandingPage from '@/components/home/HeroLanding.vue';
import AboutSection from '@/components/home/AboutSection.vue';

import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent({
  loader: () => import('@/components/shared/MainNav.vue'),
  delay: 100,
  timeout: 2000,
});

const OurFounder = defineAsyncComponent({
  loader: () => import('@/components/home/OurFounder.vue'),
  delay: 300,
  timeout: 2000,
});

const OurTeam = defineAsyncComponent({
  loader: () => import('@/components/home/OurTeam.vue'),
  delay: 300,
  timeout: 2000,
});

const CoreValues = defineAsyncComponent({
  loader: () => import('@/components/home/CoreValues.vue'),
  delay: 300,
  timeout: 2000,
});

const Footer = defineAsyncComponent({
  loader: () => import('@/components/shared/MainFooter.vue'),
  delay: 300,
  timeout: 2000,
});

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

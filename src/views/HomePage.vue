<template>
<div>
   <HeroLandingPage />
  <AboutSection />
</div>
 
</template>

<script>
import HeroLandingPage from "@/components/HeroLanding.vue";
import AboutSection from "@/components/AboutSection.vue";

export default {
  name: "HomePage",
  components: {
    HeroLandingPage,
    AboutSection,
  },
};
</script>

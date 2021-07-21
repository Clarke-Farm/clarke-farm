<template>
    <div>
      <NavBar/>
      <HeroTraining />
      <TrainingTopics />
      <OutgrowerScheme />
      <TrainingRegistration />
      <Footer/>
    </div>
</template>

<script>
import HeroTraining from '@/components/trainings/HeroTraining.vue';
import TrainingTopics from '@/components/trainings/TrainingAreas.vue';

import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent({
  loader: () => import('@/components/shared/MainNav.vue'),
  delay: 100,
  timeout: 2000,
});

const OutgrowerScheme = defineAsyncComponent({
  loader: () => import('@/components/trainings/Outgrowers.vue'),
  delay: 300,
  timeout: 2000,
});

const TrainingRegistration = defineAsyncComponent({
  loader: () => import('@/components/trainings/TrainingRegistration.vue'),
  delay: 300,
  timeout: 2000,
});

const Footer = defineAsyncComponent({
  loader: () => import('@/components/shared/MainFooter.vue'),
  delay: 300,
  timeout: 2000,
});

export default {
  name: 'TrainingPrograms',
  components: {
    NavBar,
    HeroTraining,
    TrainingTopics,
    OutgrowerScheme,
    TrainingRegistration,
    Footer,
  },
};
</script>

<template>
  <div class="container">
    <home/>
  </div>
</template>

<script>

import home from '@/components/dashboard/AdminHome.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },
  components: {
    home,
  },
};
</script>

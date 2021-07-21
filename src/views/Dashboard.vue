<template>
  <div>
    <home/>
  </div>
</template>

<script>

import home from '@/components/dashboard/home/AdminHome.vue';

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

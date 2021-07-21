<template>
  <div class="dashboard-container">
    <SideNav/>
    <Content id="maincontent"/>
  </div>
</template>

<script>
import SideNav from '@/components/shared/SideNavigation.vue';
import Content from './OrdersContent.vue';

export default {
  name: 'Orders',

  components: {
    SideNav,
    Content,
  },
};
</script>

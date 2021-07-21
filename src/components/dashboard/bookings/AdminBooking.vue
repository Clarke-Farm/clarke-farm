<template>
  <div class="dashboard-container">
    <SideNav/>
    <Content id="maincontent"/>
  </div>
</template>

<script>
import SideNav from '@/components/shared/SideNavigation.vue';
import Content from './Bookings.vue';

export default {
  name: 'AdminBooking',

  components: {
    SideNav,
    Content,
  },
};
</script>

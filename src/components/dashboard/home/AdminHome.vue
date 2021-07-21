<template>
  <div class="dashboard-container">
    <SideNav />
    <Content/>
  </div>
</template>

<script>
import Content from '@/components/dashboard/home/DashboardContent.vue';
import SideNav from '@/components/shared/SideNavigation.vue';

export default {
  name: 'Admin',
  components: {
    SideNav,
    Content,
  },
  created() {
    this.$store.dispatch('fetchAllGuests');
    this.$store.dispatch('fetchAllCoffeeOrders');
  },
};
</script>

<style>
.dashboard-container{
  display: flex;
}
</style>

<style scoped>

</style>

<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <SideNav />
    </div>
    <DashboardContent />
  </div>
</template>

<script>
import SideNav from '@/components/dashboard/SideNav.vue';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';

export default {
  name: 'Admin',
  components: {
    SideNav,
    DashboardContent,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

h5 {
  color: #068d68;
  text-align: left;
  margin-left: 20px;
}

.flex-container {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.flex-item-left {
  background-color: #068d68;
  padding: 10px;
  flex: 14%;
  color: white;
}

.flex-item-right {
  padding: 10px;
  flex: 86%;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>

<template>
  <div class="dashboard-container">
    <SideNav />
    <SubNav />
  </div>
</template>

<script>
import SubNav from '@/components/dashboard/settings/SettingsContent.vue';
import SideNav from '@/components/shared/SideNavigation.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },
  components: {
    SideNav,
    SubNav,
  },
};
</script>

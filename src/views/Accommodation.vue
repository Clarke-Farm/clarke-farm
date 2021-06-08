<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
    </div>
    <div class="container-right">
      <div class="top-row">
        <AdminHeadingSettings heading="Settings"/>
      </div>
      <div class="after-toprow">
       <SettingsContent/>
      </div>
      <div class="content-table">
        <SettingsTable/>
      </div>

    </div>
  </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingSettings from '@/components/dashboard/AdminHeadingSettings.vue';
import SettingsContent from '@/components/dashboard/SettingsContent.vue';
import SettingsTable from '@/components/dashboard/SettingsTableAccommodation.vue';

export default {
  name: 'Accommodation',
  data() {
    return {
    };
  },

  components: {
    AdminSideNavigation,
    AdminHeadingSettings,
    SettingsContent,
    SettingsTable,

  },
};
</script>

<style scoped>
.container {
  width: 98vw;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  position: relative;
}
.top-row {
  position: relative;
  padding-top: 5px;
}
.container-left {
  width: 13vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
background-color: #068d68;
  color: white;
  margin-left:  8.9%;
}
.container-right {
  margin-left: 6vw;
  width: 80vw;
}
.pagination {
  width:500px;
   margin-top:3%;
   margin-left:7%;
}

</style>

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
import SettingsTable from '@/components/dashboard/SettingsTableActivities.vue';

export default {
  name: 'Activities',
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
 width:15%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #068d68;
  color: white;
  margin-left: 20px;
}

  .container-right {
  margin-left:80px;
  width: 85%;
  margin-top:0px;
  overflow-x: hidden;
}

body{
  background: #f5f5f5;
}

</style>

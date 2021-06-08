<template>
  <div class="row">
    <div class="col-md-3">
      <!-- <AdminSideNavigation /> -->
    </div>
    <div class="col-md-9">
      <!-- <AdminHome/> -->
       <AdminSettings/>
    </div>
  </div>
</template>

<script>
// import AdminSideNavigation from '@/components/dashboard/SideNav.vue';
import AdminSettings from '@/components/dashboard/AdminSettings.vue';
// import AdminHome from '@/components/dashboard/AdminHome.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    // AdminSideNavigation,
    AdminSettings,
    // AdminHome,
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
/* .top-row {
  position: relative;
  padding-top: 10px;
} */
.container-page-options {
  position: relative;
}
.container-delete-search {
  margin-top: 40px;
  margin-bottom: 10px;
  padding-left: 20px;
  text-align: left;
}

input[type="text"] {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 15px;
  margin-left: 35px;
  padding-left: 20px;
  background-color: rgb(220, 220, 220);
}

input[type="text"]:focus {
  background-color: white;
  z-index: 1;
  box-shadow: 4px 4px 5px rgb(80, 80, 80);
  outline: none;
}
.no-records {
  position: absolute;
  width: 100%;
  margin-top: 20px;
  text-align: center;
}
.container-left {
  width: 13vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #068d68;
  color: white;
  margin-left: 3px;
}
.container-right {
  margin-left: 0vw;
  width: 80vw;
}
</style>

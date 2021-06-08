<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
    </div>
    <div class="container-right">
      <div class="top-row">
        <AdminHeadingHome heading="Home"/>
      </div>
      <div class="after-toprow">
       <HomeContent/>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingHome from '@/components/dashboard/AdminHeadingHome.vue';
import HomeContent from '@/components/dashboard/HomeContent.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    AdminSideNavigation,
    AdminHeadingHome,
    HomeContent,

  },
};
</script>

<style scoped>
.container {
  width: 98vw;
  margin-top: 0;
  margin-bottom:10vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  position: relative;
}
.top-row {
  position: relative;
  padding-top: 5px;
  margin-top: 0px;
  margin-left: -5%;
  margin-right: 0%;
}
.container-left {
  width: 13vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #068d68;
  color: white;
  margin-left: 8.9%;
}

  .after-toprow{
    margin-right:0px;
    margin-left:-5px;
  }

  .container-right {
  margin-left: 10vw;
  width: 80vw;
}
.pagination {
  width:auto;
   margin-top:3%;
   margin-left:5%;
}

</style>

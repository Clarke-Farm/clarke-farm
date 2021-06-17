<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
    </div>
    <div class="container-right">
      <AdminHeadingHome heading="Home"/>
       <HomeContent/>
        <IncomingGuests/>
      </div>
    </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingHome from '@/components/dashboard/AdminHeadingHome.vue';
import HomeContent from '@/components/dashboard/HomeTopNav.vue';
import IncomingGuests from '@/components/dashboard/HomeTableIncoming.vue';

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
    IncomingGuests,

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
.container-left {
 width:15%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  color: white;
  margin-left: 20px;
}

  .after-toprow{
    margin-right:0px;
    margin-left:-5px;
  }

  .container-right {
  margin-left:80px;
  width: 85%;
  margin-top:0px;
}
</style>

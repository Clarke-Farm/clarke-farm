<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
    </div>
    <div class="container-right">
      <div class="top-row">
        <AdminHeadingReviews heading="Reviews"/>
      </div>
      <div class="after-toprow">
       <ReviewContent/>
      </div>

    </div>
  </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingReviews from '@/components/dashboard/AdminHeadingReviews.vue';
// eslint-disable-next-line import/no-unresolved
import ReviewContent from '@/components/dashboard/ReviewContent.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    AdminSideNavigation,
    AdminHeadingReviews,
    ReviewContent,
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
  overflow-x: hidden;
}
.pagination {
  width:auto;
   margin-top:3%;
   margin-left:5%;
}

</style>

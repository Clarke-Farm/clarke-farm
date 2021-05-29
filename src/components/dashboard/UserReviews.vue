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
      <div class="pagination">
        <Pagination />
      </div>

    </div>
  </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingReviews from '@/components/dashboard/AdminHeadingReviews.vue';
import ReviewContent from '@/components/dashboard/ReviewContent.vue';
import Pagination from '@/components/pagination.vue';

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
    Pagination,
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
  width: 13vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  color: white;
  margin-left: 9.2%;
}
.top-row {
  position: relative;
  padding-top: 5px;
  margin-top: 0px;
  margin-left: -3%;
  margin-right: 0%;
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

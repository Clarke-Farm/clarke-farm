<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
    </div>
    <div class="container-right">
      <div class="top-row">
        <AdminHeadingBooking heading='Bookings'/>
      </div>
      <div class="after-toprow">
        <BookingContent/>
      </div>
      <pignation/>

    </div>
  </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingBooking from '@/components/dashboard/AdminHeadingBooking.vue';
import BookingContent from '@/components/dashboard/BookingContent.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    AdminSideNavigation,
    AdminHeadingBooking,
    BookingContent,

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
.container-page-options {
  position: relative;
}
.container-delete-search {
  margin-top: 40px;
  margin-bottom: 10px;
  padding-left: 20px;
  text-align: left;
}

.container-left {
  width: 13vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color:#068d68;
  color: white;
   margin-left: 8.9%;
}
.container-right {
  margin-left: 5vw;
  width: 80vw;
}

</style>

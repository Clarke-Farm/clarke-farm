<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <SideNav />
    </div>
    <div class="flex-item-right">
      <br />
      <h5>Reviews</h5>
      <hr />
      <div class="review" v-for="reviewee in revieweeList" :key="reviewee.id">
        <a href="" @click.prevent="deleteVisitor(visitor._id)"
          ><!-- DELETE ICON -->
          <fa icon="trash" style="color: red" />
        </a>
        <p>
          <b>{{ reviewee.name }}</b><br />
          {{ reviewee.reviewDate }}
        </p>
        <p>
          <b>{{ reviewee.rating }}</b><br />
          {{ reviewee.comment }}
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/dashboard/SideNav.vue';
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'AdminReviews',
  components: {
    SideNav,
  },
  data() {
    return {
      revieweeList: [],
    };
  },
  created() {
    const endpoint = '/reviews';
    axios
      .get(api + endpoint)
      .then((res) => {
        this.revieweeList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.review {
  padding: 5px;
  font-size: 10pt;
  text-align: left;
}
</style>

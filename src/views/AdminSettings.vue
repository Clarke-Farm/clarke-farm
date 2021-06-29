<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <SideNav />
    </div>
    <div class="flex-item-right">
      <br />
      <h5>Settings</h5>
      <hr />
      <div class="navigation">
        <ul>
          <li>
            <router-link to="/settings/activities"
              >Activities</router-link
            >
          </li>
          <li>
            <router-link to="/settings/accommodations"
              >Accommodation</router-link
            >
          </li>
          <li>
            <router-link to="/settings/coffee"
              >Coffee Process</router-link
            >
          </li>
          <li>
            <router-link to="/settings/trainings"
              >Training Program</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/dashboard/SideNav.vue';
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'AdminSettings',
  components: {
    SideNav,
  },
  props: {
    message: String,
  },
  data() {
    return {
      activityList: [],
    };
  },
  created() {
    const endpoint = '/activities';
    axios
      .get(api + endpoint)
      .then((res) => {
        this.activityList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async deleteActivity(id) {
      const endpoint = `/delete-activity/${id}`;
      try {
        await axios.get(api + endpoint).then(() => {
          // eslint-disable-next-line no-underscore-dangle
          this.activityList.splice(
            // eslint-disable-next-line no-underscore-dangle
            this.activityList.findIndex((i) => i._id === id),
            1,
          );
        });
        // eslint-disable-next-line vue/no-mutating-props
        this.message = 'Activity deleted successfully.';
      } catch {
        // eslint-disable-next-line vue/no-mutating-props
        this.message = 'Failed to Delete! Please try again.';
      }
    },
  },
};
</script>

<style scoped>
ul {
  text-align: justify;
}

li {
  list-style-type: circle;
  padding: 10px;
}
</style>

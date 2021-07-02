<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <SideNav />
    </div>
    <div class="flex-item-right">
      <br />
      <h5>Bookings</h5>
      <hr />
      <!-- VERTICAL TABLE -->
      <table
        class="table table-striped table-hover table-bordered"
        v-for="visitor in visitorList"
        :key="visitor._id"
      >
        <tr>
          <th>Name</th>
          <td>{{ visitor.name }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ visitor.email }}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{{ visitor.phone }}</td>
        </tr>
        <tr>
          <th>Booking Type</th>
          <td>{{ visitor.bookingType }}</td>
        </tr>
        <tr>
          <th>Number of Visitors</th>
          <td>{{ visitor.visitorNum }}</td>
        </tr>
        <tr>
          <th>Accommodation Type</th>
          <td>{{ visitor.accommodationType }}</td>
        </tr>
        <tr>
          <th>Requests</th>
          <td>{{ visitor.requests }}</td>
        </tr>
        <tr>
          <th>Topics</th>
          <td>{{ visitor.topics }}</td>
        </tr>
        <tr>
          <th>Checkin</th>
          <td>{{ visitor.checkin }}</td>
        </tr>
        <tr>
          <th>Checkout</th>
          <td>{{ visitor.checkout }}</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <router-link
              :to="{ name: '', params: { id: visitor._id } }"
              class="edit"
              ><!-- EDIT ICON -->
              <fa icon="edit" />
            </router-link>
            <a href="" @click.prevent="deleteVisitor(visitor._id)"
              ><!-- DELETE ICON -->
              <fa icon="trash" style="color: red" />
            </a>
          </td>
        </tr>
      </table>
      <!-- RESPONSE ON DELETE -->
      <em>{{ message }}</em>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/dashboard/SideNav.vue';
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'AdminBookings',
  components: {
    SideNav,
  },
  data() {
    return {
      visitorList: [],
    };
  },

  // READ OPERATION
  created() {
    const endpoint = '/visitors';
    axios
      .get(api + endpoint)
      .then((res) => {
        this.visitorList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    // DELETE OPERATION
    async deleteVisitor(id) {
      const endpoint = `/delete-visitor/${id}`;
      try {
        await axios.get(api + endpoint).then(() => {
          // eslint-disable-next-line no-underscore-dangle
          this.visitorList.splice(
            // eslint-disable-next-line no-underscore-dangle
            this.visitorList.findIndex((i) => i._id === id),
            1,
          );
        });
        this.message = 'Booking deleted successfully.';
      } catch {
        this.message = 'Failed to Delete! Please try again.';
      }
    },
  },
};
</script>

<style scoped>
form {
  text-align: left;
  padding-left: 2%;
}

table {
  margin: 0 auto;
  font-size: 10pt;
}

th {
  background-color: #068d68;
  font-weight: lighter;
  color: white;
  width: 150px;
}

th,
td {
  text-align: left;
  padding-left: 10px;
}
</style>

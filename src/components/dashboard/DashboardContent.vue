<template>
  <div class="flex-item-right">
    <br />
    <h5>Dashboard</h5>
    <hr />
    <div class="content-container">
      <h3>Welcome {{ claims.name }},</h3>
      <hr />
      <div class="flex-card">
        <div class="flex-card-left">
          <div class="card big-card">
            <div class="card-body">
              <div>
                <span class="mt-0 heading-span">Bookings Made Today</span>
                <!-- <img src="../assets/icons/trend.svg" width="60" height="60"/> -->
                <h1>500 <span>guests</span></h1>
                <div class="progress mb-3 mt-3">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>
                  Above is the total number of bookings made to the farm from
                  all the three departments i.e trainings, tours and coffee.
                </p>
                <a href="#" class="mt-3">
                  View details <fa icon="arrow-right" class="arrow-left"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-card-right">
          <div class="cards">
            <div class="small-card card">
              <!-- TRAINING -->
              <span class="mt-3 heading-span">Trainings</span>
              <h1>40</h1>
              <div>
                <fa icon="graduation-cap" class="card-icons" />
              </div>
            </div>

            <div class="small-card card">
              <!-- TOURS -->
              <span class="mt-3 heading-span">Tours</span>
              <h1>40</h1>
              <div>
                <fa icon="user-friends" class="card-icons" />
              </div>
            </div>
          </div>
          <br />
          <p></p>
          <div class="cards">
            <div class="small-card card">
              <!-- COTTAGES -->
              <span class="mt-3 heading-span">Cottages</span>
              <h1>40</h1>
              <div>
                <fa icon="house-user" class="card-icons" />
              </div>
            </div>

            <div class="small-card card">
              <!-- CAMPING -->
              <span class="mt-3 heading-span">Camping</span>
              <h1>40</h1>
              <div>
                <fa icon="campground" class="card-icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h4>Incoming Guests</h4>
      <!-- FILTER BOOKINGS (search by accommodation) -->
      <div class="search-wrapper">
        <input
          type="text"
          v-model="search"
          placeholder="Search checkin"
        />
        <div v-for="book in filteredList" :key="book._id">
          <small>
            <br />
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Number of Visitors</th>
                <th>Accommodation Type</th>
                <th>Checkin</th>
              </tr>
              <tr>
                <td>{{ book.name }}</td>
                <td>{{ book.email }}</td>
                <td>{{ book.phone }}</td>
                <td>{{ book.visitorNum }}</td>
                <td>{{ book.accommodationType }}</td>
                <td>{{ book.checkin }}</td>
              </tr>
            </table>
          </small>
        </div>
      </div>
      <br />
      <p>Showing 1 entry of 20</p>
      <!-- DATA TABLE -->
      <table v-for="visitor in visitorList" :key="visitor._id"></table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  data() {
    return {
      claims: '',
      search: '',
      visitorList: [],
    };
  },
  // FILTER BOOKINGS (search by accommodation)
  computed: {
    filteredList() {
      // eslint-disable-next-line max-len
      return this.visitorList.filter((book) => book.checkin.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  //
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
    // OKTA CLAIMS
    this.setup();
  },
  methods: {
    async setup() {
      this.claims = await this.$auth.getUser();
    },
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.flex-card {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.flex-card-left {
  padding: 10px;
  flex: 40%;
}

.flex-card-right {
  padding: 10px;
  flex: 60%;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-card {
    flex-direction: column;
  }
}

table {
  margin: 0 auto;
}

th {
  font-size: 10pt;
  font-weight: lighter;
  color: white;
  background-color: #068d68;
}

th,
td {
  width: 14%;
  border: 1px solid #068d68;
}

.eye {
  margin-right: 10px;
  color: #068d68;
}

.big-card {
  color: #068d68;
  height: 280px;
  box-shadow: 5px, solid, white;
}

.cards {
  display: flex;
}

.small-card {
  flex: 30%;
  color: #068d68;
  height: 120px;
  text-align: start;
}

.right-card {
  margin-left: 10px;
}

span {
  font-size: 20px;
  padding-left: 10%;
}

h1 {
  margin-left: 10%;
}

.card-icons {
  /* color: rgb(53, 53, 85); */
  font-size: 25px;
  float: right;
  margin-top: -60px;
  margin-right: 10%;
}

.progress-bar {
  background-color: #068d68;
}
</style>

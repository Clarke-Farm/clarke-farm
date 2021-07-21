<template>
  <div class="content-container container-fluid">
    <h5 class="mt-3">Bookings</h5>
    <nav
      aria-label="breadcrumb"
      class="mt-3"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a
            href="#"
            class="crumb-link"
          >Dashboard</a>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >Bookings</li>
      </ol>
      </nav>
      <hr>
      <div class="table-div">
        <div class="row">
          <div class="col-md-6 mt-3">
            <label class=" mt-1">Sort By:</label>
            <select
              @change="filteredVisitors"
              v-model="selected"
              class="form-select form-select-sm "
              aria-label="Default select example"
            >
              <option value="all">All Categories</option>
              <option value="tours">Tours</option>
              <option value="trainings">Trainings</option>
              </select>
          </div>
          <div class="form-group my-lg-0 d-flex justify-content-end col-md-6 float-right">
            <div>
              <input
                type="text"
                class="form-control form-control-sm mr-sm-2 mt-3 search"
                placeholder="Search Bookings..."
                v-model="searchterm"
              >
            </div>
          </div>
        </div>
        <a
          data-toggle="tooltip"
          data-placement="bottom"
          title="Delete"
          class="d-none "
          id="delete-btn"
          href=""
          @click.prevent="deleteVisitor(visitor._id)"
        >
          <fa
            icon="trash-alt"
            class="text-danger delete-btn"
          />
          </a>
          <table class="table  table-responsive table-hover table-striped table-nowrap mt-5 font-size-12">
            <thead class="table-secondary font-size-10 ">
              <tr>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    @click="check"
                  ></td>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Booking Type </th>
                <th>Group Size</th>
                <th>Checkin</th>
                <!-- <th>Action</th> -->

              </tr>
            </thead>
            <tbody>
              <tr
                v-for="visitor in filteredVisitors"
                :key="visitor.id"
              >
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    name="visitor"
                    id="defaultCheck1"
                  >
                </td>
                <td class="text-start">{{visitor.name}}</td>
                <td class="text-start">{{visitor.email}}</td>
                <td class="text-start">{{visitor.phone}}</td>
                <td
                  class="text-center"
                  v-if="visitor.bookingtype=='Tour'"
                >
                  <span class="badge badge-pill tour-badge font-size-11">Tour</span>
                  </td>
                  <td
                    class="text-center"
                    v-else-if="visitor.bookingtype=='Coffee-Farm'"
                  >
                    <span class="badge badge-pill bg-danger font-size-11">Coffee</span>
                    </td>
                    <td
                      class="text-center"
                      v-else
                    >
                      <span class="badge badge-pill bg-warning font-size-11">Trainings</span>
                      </td>
                      <td
                        v-if="visitor.bookingtype==='Training'"
                        class="text-center"
                      >{{visitor.groupsize}}</td>
                        <td
                          v-else
                          class="text-center"
                        >{{visitor.guestNumber}}</td>
                          <td class="text-center">{{ visitor.checkin }}
                            <span v-if="visitor.bookingtype==='Coffee-Farm'">N/A</span>
                          </td>
                          <!-- <td class="text-start">
                        <button
                          type="button"
                          class="btn  view-btn btn-sm btn-rounded"
                          data-toggle="modal"
                          data-target=".booking-detailModal"
                        >View Details</button>
                      </td> -->
                          </tr>
            </tbody>
          </table>
          <p>
            Showing {{filteredVisitors.length}} entries of {{filteredVisitors.length}}</p>
          <p
            v-if="filteredVisitors<=0"
            class="text-center"
          >No Bookings are Available yet!!!</p>
      </div>
      <!-- details modal -->
      <details-modal/>
      <!-- modal-end -->
  </div>
</template>
<style scoped>
th,
td {
  font-family: ‘Lato’, sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
}
option,
select {
  font-family: ‘Lato’, sans-serif;
  font-size: 14px;
}
.eye {
  margin-right: 10px;
  color: #068d68;
}
.btn-rounded {
  border-radius: 10px;
  height: 30px;
}
.form-select {
  width: 250px;
  margin-left: 70px;
  margin-top: -30px;
}
.form-inline {
  width: 310px;
  margin-left: 100px;
}

h5,
h3 {
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #045c44;
}
a:hover {
  color: rgb(53, 53, 85);
}
.delete-btn {
  float: left;
  margin-right: 20px;
  margin-top: 10px;
}
.view-btn {
  color: #2c3e50;
  background-color: #f5f5f5;
}
.search {
  background: #f5f5f5;
}
td {
  text-align: center;
  color: #2c3e50;
}
table {
  border-collapse: separate;
  border: solid #f5f5f5 1px;
  border-radius: 6px;
  -moz-border-radius: 6px;
}
.eye {
  margin-right: 10px;
  color: #068d68;
}
.table-div p {
  color: #2c3e50;
  margin-top: 20px;
}
.sort-icon,
th {
  color: #2c3e50;
}
.badge {
  width: 60px;
}
.tour-badge {
  background-color: #045c44;
}
.has-search .form-control-feedback {
  position: fixed;
  float: right;
  right: 10px;
  /* padding-top: 20px; */
  z-index: 2;
  display: block;
  background: #045c44;
  margin-top: 16px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 2.375rem;
  height: 30px;
  /* line-height: 2.375rem; */
  text-align: center;
  pointer-events: none;
  color: #f5f5f5;
}
@media screen and (min-width: 2000px) {
  .has-search .form-control-feedback {
    right: 18.5%;
  }
}
</style>
<script>
import axios from 'axios';
import { mapState } from 'vuex';
import detailsModal from './DetailsModal.vue';

const api = 'http://localhost:3000';
export default {
  name: 'Trainings',
  components: {
    detailsModal,
  },
  data() {
    return {
      searchterm: '',
      selected: 'all',
      visitorList: [],
    };
  },
  created() {
    this.$store.dispatch('fetchAllTrainees');
    this.$store.dispatch('fetchAllGuests');
  },
  methods: {
    check() {
      const checkboxes = document.getElementsByName('visitor');
      for (const checkbox of checkboxes) {
        checkbox.checked = true;
        document.getElementById('delete-btn').classList.remove('d-none');
      }
    },
    deleteVisitor(id) {
      const indexOfArrayItem = this.visitorList.findIndex((i) => i.id === id);
      this.$swal({
        title: 'Are you sure?',
        text: "You can't revert this action",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          const endpoint = `/delete-visitor/${id}`;
          axios
            .get(api + endpoint)
            .then(() => {
              this.visitorList.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
          this.$swal(
            'Deleted',
            'visitor has been Permanently deleted',
            'success',
          );
        } else {
          this.$swal('Cancelled', 'Your data is still intact', 'info');
        }
      });
    },
  },
  computed: {
    ...mapState({
      trainees: (state) => state.trainees.trainees,
      tourists: (state) => state.bookings.bookings,
    }),
    filteredVisitors() {
      let visitors;
      if (this.selected === 'tours') {
        visitors = this.tourists;
        if (this.searchterm !== '' && this.searchterm) {
          visitors = visitors.filter(
            (item) => item.name.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.email.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.bookingtype
              .toUpperCase()
              .includes(this.searchterm.toUpperCase()),
          );
        }
      } else if (this.selected === 'trainings') {
        visitors = this.trainees;
        if (this.searchterm !== '' && this.searchterm) {
          visitors = visitors.filter(
            (item) => item.name.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.email.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.bookingtype
              .toUpperCase()
              .includes(this.searchterm.toUpperCase()),
          );
        }
      } else {
        visitors = this.trainees.concat(this.tourists);
        if (this.searchterm !== '' && this.searchterm) {
          visitors = visitors.filter(
            (item) => item.name.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.email.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.bookingtype
              .toUpperCase()
              .includes(this.searchterm.toUpperCase()),
          );
        }
      }
      return visitors;
    },
  },
};
</script>

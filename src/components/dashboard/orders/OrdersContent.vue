<template>
  <div class="content-container container-fluid">
    <h5 class="mt-3">Coffee Orders</h5>
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
        >Orders</li>
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
              <option value="sacks">Sacks</option>
              <option value="paperbags">Paper Bags</option>
              </select>
          </div>
          <div class="form-group my-lg-0 d-flex justify-content-end col-md-6 float-right">
            <div>
              <input
                type="text"
                class="form-control form-control-sm mr-sm-2 mt-3 search"
                placeholder="Search Orders..."
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
          <table class="table  table-hover table-striped table-nowrap mt-5 font-size-12">
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
                <th>Order Amount</th>
                <th>Status </th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              <tr
                v-for="order in filteredOrders"
                :key="order.id"
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
                <td class="text-start">{{order.name}}</td>
                <td class="text-start">{{order.email}}</td>
                <td class="text-start">{{order.phone}}</td>
                <td class="text-start">{{order.order}} {{order.package}}s</td>
                <td
                  class="text-center"
                  v-if="order.delivered=='true'"
                >
                  <span class="badge badge-pill tour-badge font-size-11">Fulfilled</span>
                  </td>
                  <td
                    class="text-center"
                    v-else
                  >
                    <span class="badge badge-pill bg-danger font-size-11">Unfulfilled</span>
                    </td>
                    <td>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          :checked="order.delivered"
                          :value="order._id"
                          @click="fulfillOrder(order._id)"
                        >
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckChecked"
                          ></label>
                      <fa icon="trash-alt" class="delete-icon"/>
                      </div>
                    </td>
                    </tr>
            </tbody>
          </table>
          <p>
            Showing {{filteredOrders.length}} entries of {{filteredOrders.length}}</p>
          <p
            v-if="filteredOrders<=0"
            class="text-center"
          >No Orders are Available yet!!!</p>
      </div>
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
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'OrdersContent',
  data() {
    return {
      searchterm: '',
      selected: 'all',
    };
  },
  created() {
    this.$store.dispatch('fetchAllCoffeeOrders');
    // this.$store.dispatch('FulFillOrder');
  },
  methods: {
    fulfillOrder(order) {
      this.$store.dispatch('FulFillOrder', order);
    },
    check() {
      const checkboxes = document.getElementsByName('visitor');
      for (const checkbox of checkboxes) {
        checkbox.checked = true;
        document.getElementById('delete-btn').classList.remove('d-none');
      }
    },

  },
  computed: {
    ...mapState({
      orders: (state) => state.orders.orders,
    }),
    ...mapGetters({
      paperBagOrders: 'paperBags',
      sackOrders: 'sacks',
    }),
    filteredOrders() {
      let orders;
      if (this.selected === 'paperbags') {
        orders = this.paperBagOrders;
        if (this.searchterm !== '' && this.searchterm) {
          orders = orders.filter(
            (item) => item.name.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.email.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.bookingtype
              .toUpperCase()
              .includes(this.searchterm.toUpperCase()),
          );
        }
      } else if (this.selected === 'sacks') {
        orders = this.sackOrders;
        if (this.searchterm !== '' && this.searchterm) {
          orders = orders.filter(
            (item) => item.name.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.email.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.bookingtype
              .toUpperCase()
              .includes(this.searchterm.toUpperCase()),
          );
        }
      } else {
        orders = this.orders;
        if (this.searchterm !== '' && this.searchterm) {
          orders = orders.filter(
            (item) => item.name.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.email.toUpperCase().includes(this.searchterm.toUpperCase())
            || item.bookingtype
              .toUpperCase()
              .includes(this.searchterm.toUpperCase()),
          );
        }
      }

      return orders;
    },
  },
};
</script>
<style scoped>
.delete-icon:hover{
  color:red;
  cursor: pointer;
}
</style>

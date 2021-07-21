<template>
  <div class="dashboard-content">
    <DashboardHeader />
    <div class="content-area">
      <div id="content-left">
        <SummaryBarChart :weeklyGuests="weeklyGuests" :weeklyOrders="weeklyOrders"/>
        <div id="split-doughnut-reminders">
          <div id="reminder-container">
            <TodoList />
          </div>
          <div id="doughnut-container">
            <SummaryDoughnut :dataArr="monthlyOrders"/>
          </div>
        </div>
      </div>
      <div id="content-right">
        <div class="filter-container">
          <label for="filter">Filter By: </label>
          <select id="filter" @change="setSummaryFilter">
            <option value="tourism">Tourism</option>
            <option value="coffee">Coffee</option>
          </select>
        </div>
        <template v-if="summaryFilter === 'tourism'">
          <SummaryByDate cardTitle="Incoming guests" product="tourism" :list ="incomingGuests" category="in" />
          <SummaryByDate cardTitle="Check out" product="tourism" :list ="checkOutGuests" category="out" />
        </template>
        <template v-else>
          <SummaryByDate cardTitle="Today's orders" product="coffee" :list="incomingOrders" category="in" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { defineAsyncComponent } from 'vue';

import DashboardHeader from '@/components/shared/DashboardHeader.vue';
import SummaryBarChart from './SummaryBarChart.vue';
import SummaryByDate from './SummaryByDate.vue';

const SummaryDoughnut = defineAsyncComponent({
  loader: () => import('./SummaryDoughnutChart.vue'),
  delay: 200,
  timeout: 2000,
});

const TodoList = defineAsyncComponent({
  loader: () => import('./TodoList.vue'),
  delay: 200,
  timeout: 2000,
});

export default {
  name: 'DashboardHome',
  data() {
    return {
      summaryFilter: 'tourism',
    };
  },
  components: {
    DashboardHeader,
    SummaryByDate,
    SummaryBarChart,
    SummaryDoughnut,
    TodoList,
  },
  methods: {
    setSummaryFilter(event) {
      this.summaryFilter = event.target.value;
    },
  },
  computed: {
    ...mapGetters({
      incomingGuests: 'sortIncomingGuests',
      checkOutGuests: 'sortCheckOutGuests',
      incomingOrders: 'sortIncomingOrders',
      deliveredOrders: 'sortDeliveredOrders',
      pendingOrders: 'sortPendingOrders',
      weeklyGuests: 'sortCurrentWeekGuests',
      weeklyOrders: 'sortCurrentWeekOrders',
      monthlyOrders: 'sortCurrentMonthOrders',
    }),
  },
};
</script>
<style scoped>
.dashboard-content{
  width:90%;
}
.content-area{
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
}
#content-left{
  width:74%;
}
#content-right{
  width:25%;
  height:85vh;
  border-radius: 10px;
  background-color: rgb(250,250,250)
}
.filter-container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.filter-container label {
  margin-right: 10px;
  color:#a9a9a9;
  font-weight: bold;
}
.filter-container select{
  border:none;
  height:30px;
  padding-left: 10px;
  padding-right: 10px;
}
.filter-container select:hover{
  cursor: pointer;
}
#split-doughnut-reminders{
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
#doughnut-container{
  width:63%;
  background-color:white;
  padding-bottom: 10px;
}
#reminder-container{
  width:35%;
  background-color:  rgb(250,250,250);;
}
</style>

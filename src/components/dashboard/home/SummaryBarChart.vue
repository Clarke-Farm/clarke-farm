<template>
  <div id="daily-orders">
    <div class="filter-container">
      <label for="filter">Filter By: </label>
      <select id="filter" @change="setFilter">
        <option value="tourism">Tourism</option>
        <option value="coffee">Coffee</option>
      </select>
    </div>
    <div id="graph-container">
      <BarGraph :height="180" :chartData="configData.chartData" :chartOptions="configData.options" :key="componentKey"/>
    </div>
  </div>
</template>

<script>
import BarGraph from '@/plugins/bar-chart';

export default {
  name: 'DailyOrders',
  data() {
    return {
      filter: 'tourism',
      guests: [],
      orders: [],
      chartTitle: 'Guest Bookings',
      componentKey: 0,
    };
  },
  components: {
    BarGraph,
  },
  props: {
    weeklyGuests: {
      type: Object,
      required: true,
    },
    weeklyOrders: {
      type: Object,
      required: true,
    },
  },
  watch: {
    weeklyGuests(newData) {
      this.guests = this.weeklyData(newData);
    },
    weeklyOrders(newData) {
      this.orders = this.weeklyData(newData);
    },
  },
  methods: {
    setFilter(event) {
      this.filter = event.target.value;
      if (event.target.value === 'tourism') {
        this.chartTitle = 'Guest Bookings';
      } else {
        this.chartTitle = 'Coffee Orders';
      }
      this.forceRender();
    },
    weeklyData(srcObject) {
      const arrData = [];
      for (const prop in srcObject) {
        if (Object.prototype.hasOwnProperty.call(srcObject, prop)) arrData.push(srcObject[prop]);
      }
      return arrData;
    },
    forceRender() {
      this.componentKey += 1;
    },
  },
  computed: {
    configData() {
      return {
        chartData: {
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [
            {
              data: this.filter === 'tourism' ? this.guests : this.orders,
              backgroundColor: [
                '#041C34',
                '#143454',
                '#04346C',
                '#34547C',
                '#04548C',
                '#34547C',
                '#143454',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `This week - ${this.chartTitle}`,
            fontSize: 14,
            padding: 12,
            fontColor: '#a9a9a9',
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
            xAxes: [{
              gridLines: {
                color: '#fff',
              },
            }],
          },
        },
      };
    },
  },
};
</script>

<style scoped>
#daily-orders{
  margin-top: 5px;
}
#graph-container{
  margin-top: 10px;
  background-color: white;
  height: 340px;
  padding-left: 2px;
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
</style>

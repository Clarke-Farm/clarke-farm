import { defineComponent } from 'vue';
import { Doughnut } from 'vue3-chart-v2';

export default defineComponent({
  name: 'DailyOrders',
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
  },
  watch: {
    chartData(newData) {
      this.renderChart(newData, this.chartOptions);
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
});

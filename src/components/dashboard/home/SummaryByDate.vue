<template>
  <div class="summary-container">
    <p class="title">{{ cardTitle }}</p>
    <p class="current-date">
      {{ currentDate }}
    </p>
    <div class="summary-list">
      <template v-if="list.length !=0">
        <div class="list-item" v-for="(booking, index) in list" :key="index">
          <span class="checkout-date">
            <template v-if="product === 'tourism'">
              <span class="date">
                {{ category === 'in'? getDate(booking.checkin) : getDate(booking.checkout) }}
              </span>
              <span class="muted-detail">
                {{ category === 'in'? getDay(booking.checkin) : getDay(booking.checkout) }}
              </span>
            </template>
            <template v-else>
              <span class="date">
                {{ getDate(booking.createdAt) }}
              </span>
              <span class="muted-detail">
                {{ getDay(booking.createdAt) }}
              </span>
            </template>
          </span>
          <span class="client-details">
            <span class="client-name">
              {{ capitalizeEachWord(booking.name) }}
            </span>
            <template v-if="product === 'tourism'">
              <span class="muted-detail">
                Booked for: {{ Number(booking.guestNumber) > 1? `${booking.guestNumber} guests`: '1 guest'}}
              </span>
            </template>
            <template v-else>
              <span class="muted-detail">
                Order: {{  `${booking.order} ${booking.package}s` }}
              </span>
            </template>
          </span>
        </div>
      </template>
      <template v-else>
        <div class="list-item">
          No data to display.
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import * as date from '@/plugins/date';
import FormatText from '@/mixins/format-text';

export default {
  name: 'SummaryByDate',
  props: {
    cardTitle: {
      required: true,
      type: String,
    },
    list: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
      validator: (value) => value === 'in' || value === 'out',
    },
    product: {
      type: String,
      required: true,
      validator: (value) => value === 'tourism' || value === 'coffee',
    },
  },
  mixins: [FormatText],
  methods: {
    getDay(value) {
      return date.extractDay(value);
    },
    getDate(value) {
      return date.extractDate(value);
    },
  },
  computed: {
    currentDate() {
      const today = date.today();
      const month = date.monthInText(today.month);
      return `${today.date} ${month} ${today.year}`;
    },
  },
};
</script>

<style scoped>
.summary-container{
  width:95%;
  max-height: 45%;
  min-height: 45%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  margin-top: 15px;
  overflow-y:auto;
}
.summary-container::-webkit-scrollbar{
  width:10px;
}
.summary-container::-webkit-scrollbar-track{
  background-color: #989898;
}
.summary-container::-webkit-scrollbar-thumb{
  background-color: #767676;
}
.title{
  margin:0;
  font-weight: bold;
  font-size: 18px ;
}
.list-item{
  display: flex;
  align-items: center;
  margin-bottom:10px;
}
.current-date{
  color: #a9a9a9;
  font-size: 12px;
  font-weight: bold;
  margin-top: 2px;
}
.checkout-date{
  display: flex;
  flex-direction: column;
  width:50px;
  height: 50px;
  background-color: var(--smoky-white);
  text-align: center;
  border-radius: 10px;
  padding-top: 2px;
  margin-right: 15px;
}
.date{
  font-weight: bolder;
  font-size: 18px;
  font-weight: bold;
}
.client-details{
  display: flex;
  flex-direction: column;
}
.client-name{
  font-size: 14px;
  color:rgba(44, 62, 80, 0.9);
  font-weight: bolder;
}
.muted-detail{
  font-size: 13px;
  color:#a9a9a9;
  font-weight: bold;
}
</style>

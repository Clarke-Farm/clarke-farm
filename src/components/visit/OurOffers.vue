<template>
  <div id="our-offers">
    <p class="section-title">What We Offer</p>
    <p class="sub-text">
      See all the activities you can enjoy, the accommodations to
      choose from and what our guests have to say about us.
    </p>
    <TabMenu :tabsList="tabs" @selected = "setSelectedTab"/>
    <div class="card-container">
      <Card v-for="(activity, index) in filterDisplayData" :key="index" :item="activity"/>
    </div>
    <div class="arr-nav-container">
      <ArrowNavigation @newPage ="setNewPage" :pageNumber="page" :isLastPage="checkIfLastPage" />
    </div>
  </div>
</template>

<script>
import TabMenu from '@/components/shared/TabMenu.vue';
import Card from '@/components/shared/Card.vue';
import ArrowNavigation from '@/components/shared/ArrowNavigation.vue';
import SlideNavigation from '@/mixins/slide-navigation';
import { mapState } from 'vuex';

export default {
  name: 'OurOffers',
  created() {
    this.$store.dispatch('fetchAllActivities');
    this.$store.dispatch('fetchAllAccomodations');
    this.$store.dispatch('fetchAllFoods');
  },
  data() {
    return {
      tabs: ['Activities', 'Accomodation', 'Food'],
      page: 1,
      filterBy: 'activities',
    };
  },
  mixins: [SlideNavigation],
  components: {
    TabMenu,
    Card,
    ArrowNavigation,
  },
  methods: {
    setNewPage(page) {
      this.page = page;
    },
  },
  computed: {
    ...mapState({
      activities: (state) => state.activities.activities,
      accomodation: (state) => state.accomodations.accomodations,
      food: (state) => state.foods.foods,
    }),
    filterDisplayData() {
      const data = [...this[this.filterBy]];
      return this.filter(data);
    },
    checkIfLastPage() {
      const data = [...this[this.filterBy]];
      if (this.page * this.limit > data.length) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
#our-offers{
  position:relative;
  margin-top:60px;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
  text-align: center;
}

.sub-text{
  width:70%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

@media screen and (max-width:990px){
  .sub-text{
    width:80%;
  }
}
@media screen and (max-width:900px){
  .sub-text{
    width:90%;
  }
}
@media screen and (max-width:730px){
  .sub-text{
    width:95%;
  }
}
@media screen and (max-width:480px){
  .sub-text{
    text-align: left;
  }
}
.card-container{
  margin-top: 40px;
  display:flex;
  justify-content:center;
  overflow-x: auto;
  overflow-y:hidden;
  width:95%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width:1240px){
  .card-container{
    width:70%;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }
}
.card-container::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:900px){
  .card-container{
    justify-content: start;
  }
}
.arr-nav-container{
  margin-top:40px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width: 1280px) {
  .arr-nav-container{
    width:70%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

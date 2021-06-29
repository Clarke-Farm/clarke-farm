<template>
  <div class="our-offers">
    <p class="section-title">What We Offer</p>
    <p class="sub-text">
      See all the activities you can enjoy, the accommodations to
      choose from and what our guests have to say about us.
    </p>
    <TabMenu :tabsList="tabs" />
    <div class="card-container">
      <Card v-for="activity in activities" :key="activity" :item="activity"/>
    </div>
    <div class="more-button-container">
      <button>Show All</button>
    </div>
  </div>
</template>

<script>
import TabMenu from '@/components/shared/TabMenu.vue';
import Card from '@/components/shared/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'OurOffers',
  created() {
    this.$store.dispatch('getActivities');
  },
  data() {
    return {
      tabs: ['Activities', 'Accomodation', 'Food', 'Reviews'],
    };
  },
  components: {
    TabMenu,
    Card,
  },
  computed: {
    ...mapState(['activities']),
  },
};
</script>

<style scoped>
.our-offers{
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
.navigation{
  margin-left: auto;
  margin-right: auto;
  max-height:30px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding:0;
}
@media screen and (max-width:730px){
  .navigation {
    padding-left: 10px;
    justify-content: start;
  }
  .navigation ::-webkit-scrollbar{
    width:0px;
  }
}
.tab{
  min-width:150px;
  height:30px;
  margin-right: 20px;
  display:flex;
  justify-content: center;
  align-items: center;
  color:white;
}
.tab:hover{
  background-color: var(--dark-green);
}
.active-nav{
  background-color: var(--dark-green);
}
.inactive-nav{
  background-color: rgba(0, 0, 0, 0.3);
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
.more-button-container{
  margin-top:50px;
  display: flex;
  justify-content: center;
}
.more-button-container button{
  border:1px solid rgba(0, 0, 0, 0.3);
  width:180px;
  height:30px;
  border-radius: 3px;
  background-color: var(--smoky-white);
  color:var(--dark-green);
}
.more-button-container button:hover{
  transform: scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
  background-color: var(--dark-green);
  color:white;
}
</style>

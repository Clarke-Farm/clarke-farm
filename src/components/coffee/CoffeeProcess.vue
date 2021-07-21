<template>
  <div class="coffee-process">
    <div id="process-steps">
      <p class="section-sub-heading">Processing guide</p>
      <p class="sub-text">
        This is a step by step guide showing our coffee process.
      </p>
      <div class="card-container">
        <Card
        v-for="(process, index) in filterDisplayData"
        :key="index"
        :item="process"
        :staticImg="true"
        imgDir="processing"/>
      </div>
      <div class="arr-nav-container">
        <ArrowNavigation
          @newPage ="setNewPage"
          :pageNumber="page"
          :isLastPage="checkIfLastPage" />
      </div>
    </div>
    <div id="capacity">
      <p class="section-sub-heading">Our Capacity</p>
      <p class="sub-text">
        These numbers show our current levels of production and growth potential.
      </p>
      <div class="stat-container">
        <div class="stat">
          <div class="stat-num">1500</div>
          <div>Acres - Farm size</div>
        </div>
        <div class="stat">
          <div class="stat-num">700+</div>
          <div>Acres of coffee</div>
        </div>
        <div class="stat">
          <div class="stat-num">1M+</div>
          <div>Kilograms annually</div>
        </div>
        <div class="stat">
          <div class="stat-num">50</div>
          <div>Employees</div>
        </div>
        <div class="stat">
          <div class="stat-num">500</div>
          <div>Seasonal workers</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/shared/Card.vue';
import ArrowNavigation from '@/components/shared/ArrowNavigation.vue';
import SlideNavigation from '@/mixins/slide-navigation';
import { mapState } from 'vuex';

export default {
  name: 'CoffeeProcess',
  data() {
    return {
      page: 1,
    };
  },
  components: {
    ArrowNavigation,
    Card,
  },
  mixins: [SlideNavigation],
  methods: {
    setNewPage(page) {
      this.page = page;
    },
  },
  computed: {
    ...mapState({
      process: (state) => state.processing.processing,
    }),
    filterDisplayData() {
      const data = [...this.process];
      return this.filter(data);
    },
    checkIfLastPage() {
      const data = [...this.process];
      if (this.page * this.limit >= data.length) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.coffee-process{
  position:relative;
  margin-top:70px;
}
@media screen and (max-width:764px) {
  .coffee-process{
    margin-top:50px;
  }
}
#process-steps{
  margin-top:50px;
}
.section-sub-heading{
  text-align: center;
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
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
/* Capacity styles */
#capacity{
  margin-top: 50px;
}
.stat-container{
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
}
.stat-container::-webkit-scrollbar{
  width:0px;
}
@media screen and (min-width:768px){
  .stat-container{
    width:85%;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width:900px){
  .stat-container{
    width:70%;
  }
}
.stat{
  margin-top: 20px;
  min-width: 130px;
  text-align: center;
}
@media screen and (max-width:900px){
  .stat{
    margin-right: 25px;
  }
}
.stat-num{
  font-size: 45px;
  margin-top:-10px;
  color:rgb(100, 100, 100);
  font-family: 'Times New Roman', Times, serif;
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

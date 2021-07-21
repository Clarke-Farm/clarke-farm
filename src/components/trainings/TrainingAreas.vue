<template>
  <div id="train-with-us">
    <p class="section-title">Why train with us</p>
    <p class="sub-text">
      Our production reflects our experience and knowledge.
    </p>
    <div id="capacity">
      <div class="stat-container">
        <div class="stat">
          <div class="stat-num">1M +</div>
          <div class="stat-text">KGs of coffee </div>
        </div>
        <div class="stat">
          <div class="stat-num">10K</div>
          <div class="stat-text">Chickens</div>
        </div>
        <div class="stat">
          <div class="stat-num">20K</div>
          <div class="stat-text">KGs of Irish / ha</div>
        </div>
        <div class="stat">
          <div class="stat-num">60 ha</div>
          <div class="stat-text">Maize</div>
        </div>
        <div class="stat">
          <div class="stat-num">9 ha</div>
          <div class="stat-text">Matooke &amp; Vanilla</div>
        </div>
      </div>
    </div>
    <div id="training-programs">
      <p class="section-sub-heading">Training Categories</p>
      <div class="card-container">
        <Card
        v-for="(project, index) in filterDisplayData"
        :key="index"
        :item="project"
        :staticImg="true"
        imgDir="categories"/>
      </div>
      <div class="arr-nav-container">
          <ArrowNavigation
            @newPage ="setNewPage"
            :pageNumber="page"
            :isLastPage="checkIfLastPage" />
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
  name: 'TrainingAreas',
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
      projects: (state) => state.trainings.categories,
    }),
    filterDisplayData() {
      const data = [...this.projects];
      return this.filter(data);
    },
    checkIfLastPage() {
      const data = [...this.projects];
      if (this.page * this.limit >= data.length) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
#train-with-us{
  position:relative;
  margin-top:70px;
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
#capacity{
  margin-top: 20px;
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
@media screen and (min-width:900px){
  #training-programs{
    margin-top:50px;
  }
}
.section-sub-heading{
  text-align: center;
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
}
/* Start */
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

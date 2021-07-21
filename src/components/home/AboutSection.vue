<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div>
    <div class="about">
      <p class="section-title">Who we are</p>
      <p class="sub-text">
        Clarke Farm is a 1,500 acre farm located in Katambale, Kyarusozi Kyenjojo
        district in Uganda. Approximately half the farm is planted in Robusta coffee.
        Other crops include Eucalyptus, Macadamia, Irish potatoes, Maize, Mangoes and Oranges.
      </p>
      <div id="capacity">
        <div class="stat-container">
          <div class="stat">
            <div class="stat-num">1500</div>
            <div class="stat-text">Acres - Farm size</div>
          </div>
          <div class="stat">
            <div class="stat-num">08</div>
            <div class="stat-text">Agricultural projects</div>
          </div>
          <div class="stat">
            <div class="stat-num">02</div>
            <div class="stat-text">Conservation projects</div>
          </div>
          <div class="stat">
            <div class="stat-num">50</div>
            <div class="stat-text">Employees</div>
          </div>
          <div class="stat">
            <div class="stat-num">500</div>
            <div class="stat-text">Seasonal workers</div>
          </div>
        </div>
      </div>
      <div id="our-projects">
        <p class="section-sub-heading center-text">Projects</p>
        <div class="card-container">
          <Card
            v-for="(project, index) in filterDisplayData"
            :key="index"
            :item="project"
            :staticImg="true"
            imgDir="projects"/>
        </div>
        <div class="arr-nav-container">
          <ArrowNavigation
            @newPage ="setNewPage"
            :pageNumber="page"
            :isLastPage="checkIfLastPage" />
        </div>
      </div>
    </div>
    <div class="about-farm-container">
      <div id="scheme-details">
        <div id="scheme-left">
          <p class="section-sub-heading">
            Clarke farm and coffee estate
          </p>
          <p id="scheme-text">
            We have recently invested in <span class="about-span">TOURISM </span>
            encouraged by the location and hilly topography of the farm which
            provides amazing views. The farm has several natural waterways and
            lies adjacent to a natural forest with rivers, monkeys and birds.
            There are also projects for conservation and educational
            purposes such as planting bamboo, and reforestation. An outgrower program
            is underway with the goal of training in production of Robusta coffee for
            2,000 smallholders, with Clarke farm providing an end market.
          </p>
          <div class="contact-btn-container">
            <a href="/visit">Contact Us</a>
          </div>
        </div>
        <div id="scheme-right">
          <img src="@/assets/images/clarke-farm.jpg" alt="farm">
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
  name: 'AboutSection.vue',
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
      projects: (state) => state.projects.projects,
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
.about {
  position: relative;
  margin-top: 55px;
}
@media screen and (max-width:480px){
  .about{
    width:95%;
    margin-top:40px;
  }
}
.sub-text{
  width:70%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
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
  margin-top: 30px;
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
  min-width: 100px;
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
#our-projects{
  margin-top:50px;
}
.section-sub-heading{
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
}
.center-text{
  text-align:center;
}
.card-container{
  margin-top: 20px;
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
.about-span {
  color: #068d68;
}
/* Start */
.about-farm-container{
  position:relative;
}
@media screen and (min-width:700px){
  .about-farm-container{
    margin-top:110px;
  }
}
#scheme-details{
  display: flex;
  justify-content: space-between;
  width:70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
@media screen and (max-width:1024px){
  #scheme-details{
    width:85%;
  }
}
@media screen and (max-width:700px){
  #scheme-details{
    display: block;
    width:95%;
  }
}
#scheme-left{
  width:55%;
  position:relative;
}
#scheme-right{
  width:42%;
  position:relative;
  height: 350px;
  min-height: 100%;
  background-color:var(--dark-green);
  display:flex;
  justify-content: center;
}
@media screen and (max-width:700px){
  #scheme-left{
    width:100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:50px;
  }
  #scheme-right{
    width:100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
}
#img-container{
  z-index: 1;
  height:500px;
  min-height:100%;
  width:95%;
  margin-right: auto;
  margin-left: auto;
  position:absolute;
  bottom:0px;
}
@media screen and (max-width:700px){
  #img-container{
    height:400px;
  }
}
img{
  width:100%;
  height:100%;
  object-fit: cover;
}
#scheme-text{
  line-height: 2;
  margin-top:15px;
}
.contact-btn-container{
  height:35px;
  width:40%;
  max-width: 160px;
  margin-top:10px;
  border-radius: 3px;
  background-color: var(--dark-green);
}
@media screen and (max-width:700px){
  .contact-btn-container{
    width:160px;
  }
}
.contact-btn-container:hover{
  transform: scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
  background-color: var(--mono-dark-green);
}
.contact-btn-container a{
  text-decoration: none;
  color:white;
  height:100%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

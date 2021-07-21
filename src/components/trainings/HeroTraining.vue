<template>
  <div id="hero-training">
    <div id="hero-content-top">
      <div id="left-container">
      <p class="hero-text-lg">
        Improve your skills, learn better
      </p>
      <p class="hero-text-lg">
        agronomic practises and increase production
      </p>
      <p class="hero-sub-text">
        We seek to improve farmers' skills in the area of coffee farming through improved
        agronomic practises leading to increased production. Clarke Farm has an open policy
        of sharing knowledge in order to create better farming practises &amp; make agriculture
        an attractive business to go into.
      </p>
      <div class="contact-btn-container">
        <a href="#training-registration-form">Contact Us</a>
      </div>
    </div>
    <div id="right-container">
      <img src="@/assets/images/training.jpg" alt="training" aria-hidden="true">
    </div>
    </div>
    <div class="benefits">
      <div class="card" >
        <div class="card-content">
          <p class="card-title" style="font-weight:bold">
            Increase your revenue
          </p>
          <p class="card-sub-text">
            Improved quality translates into higher prices. Train your team &amp; improve
            the quality of your produce.
          </p>
        </div>
      </div>
      <div class="card" id="card-2">
        <div class="card-content">
          <p class="card-title">Increase your production</p>
          <p class="card-sub-text">
            Learn agronomic practises which improve production: from selection of root stock to
            application of fertilizer, control of pests.
          </p>
        </div>
      </div>
      <div class="card" id="card-3">
        <div class="card-content">
          <p class="card-title" style="font-weight:bold">
            Better human capital management
          </p>
          <p class="card-sub-text">
            With over 300+ workers, we have learned how to manage teams,
            and are happy to share our experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroTraining',
};
</script>

<style scoped>
#hero-training{
  width:90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
}
@media screen and (max-width:480px){
  #hero-training{
    width:95%;
  }
}
#hero-content-top{
  display: flex;
}
@media screen and (min-width:900px){
  #hero-content-top{
    max-height:550px;
  }
}
#left-container{
  width:55%;
  position:relative;
}
@media screen and (min-width:900px){
  #left-container{
    padding-top:30px;
  }
}
#right-container{
  width:45%;
}
@media screen and (max-width:700px){
  #left-container{
    width:100%;
  }
  #right-container{
    display:none;
  }
}
#right-container img{
  width:100%;
  height:95%;
  object-fit: cover;
  object-position: 100% 100%;
}
.hero-text-lg{
  font-size: 28px;
  font-weight: bold;
  margin-bottom:12px;
}
.hero-sub-text{
  width:80%;
  margin-top:5%;
  line-height: 2;
}
@media screen and (max-width:990px){
  .hero-sub-text{
    width:95%;
  }
}
.contact-btn-container{
  height:35px;
  width:40%;
  margin-top:40px;
  max-width: 160px;
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
.benefits{
  z-index: 1;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.benefits::-webkit-scrollbar{
  width:0px;
}
@media screen and (min-width:900px){
  .benefits{
    margin-top:-10%;
  }
}
@media screen and (max-width:800px){
  .benefits{
    z-index: 0;
    margin-top: 30px;
  }
}
.card{
  min-width:240px;
  max-width: 240px;
  min-height: 210px;
  max-height: 210px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
#card-2{
  background-color: var(--dark-green);
  color:var(--smoky-white);
  margin-left: 20px;
}
#card-3{
  margin-left:20px;
}
.card-content{
  padding: 15px;
}
.card-title{
  font-size: 17px;
}
.card-sub-text{
  line-height: 2;
  font-size: 15px;
  margin-top: 10px;
}
</style>

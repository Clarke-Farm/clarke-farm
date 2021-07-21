<template>
  <div class="our-packages unselectable">
    <p class="section-title">Our Packages</p>
    <p class="sub-text">
      We offer team building exercise venues for corporate events,
      tourists looking for adventure and training programs in
      best agricultural practises.
    </p>
    <div class="packages-container">
      <div class="card corporate-package">
        <div class="card-content">
          <p class="card-title">Corporate Events</p>
          <p class="card-text">
            We offer a venue for team building exercises, and social gatherings.
          </p>
          <ul>
            <li>Venue</li>
            <li>Games and sports</li>
            <li>Special requests</li>
          </ul>
          <div class="button-container">
            <!-- <a href="#visit-registration-form">Contact Us</a> -->
          </div>
        </div>
      </div>
      <div class="card tourist-package">
        <div class="card-content">
          <p class="card-title">Tourist</p>
          <p class="card-text">Regular tourists, looking for a place to have fun</p>
          <ul>
            <li>Accommodation</li>
            <li>Meals</li>
            <li>Internet / Wi-fi</li>
            <li>All Non-priced activities</li>
          </ul>
          <div class="button-container">
            <!-- <a href="#visit-registration-form">Book A Trip</a> -->
          </div>
        </div>
      </div>
      <div class="card training-package">
        <div class="card-content">
          <p class="card-title">Training</p>
          <p class="card-text">
            We conduct training exercises in the following.
          </p>
          <ul>
            <li>Coffee</li>
            <li>Irish Potatoes</li>
            <li>Chickens</li>
          </ul>
          <div class="button-container">
            <!-- <a href="/training-programs">For More Information</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurPackages',
};
</script>

<style scoped>
.our-packages{
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
.packages-container{
  display:flex;
  justify-content: center;
  margin-top:50px;
  overflow-x: auto;
  overflow-y: hidden;
}
.packages-container::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:600px){
  .packages-container{
    justify-content: start;
    padding-left: 10px;
  }
}
.card{
  max-width:255px;
  min-width: 255px;
  margin-right: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  position:relative;
}
.tourist-package{
  max-height:320px;
  min-height: 320px;
  color:white;
  background-color: var(--dark-green);
}
.corporate-package{
  max-height:280px;
  min-height: 280px;
  margin-top: 20px;
  background-color: rgba(245, 245, 245, 0.8);
}
.training-package{
  max-height:280px;
  min-height: 280px;
  margin-top:20px;
  background-color: rgba(245, 245, 245, 0.8);
}
.card-content{
  margin-top: 5px;
}
.card-title{
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}
.card-text{
  font-size: 14px;
  padding-left:10px;
  padding-right: 10px;
}
.button-container{
  height:33px;
  width:80%;
  margin-left:auto;
  margin-right: auto;
  margin-top: 30px;
}
.button-container a{
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  text-decoration: none;
  color:var(--blue-ink);
  background-color:var(--smoky-white);
  border-radius: 20px;
}
.button-container a:hover{
  background-color:rgba(0, 0, 0, 0.5);
  color:white;
  transform:scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
}
</style>

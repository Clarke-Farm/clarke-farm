<template>
  <div>
    <div class="popular-activities-container">
      <div class="card-container">
        <div class="card-item">
          <div class="rating">
            <div class="icon">
              <fa icon="running" />
            </div>
            <div class="category-title">Activities</div>
          </div>
          <div class="item-content">
            <div class="item-rating">
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star-half-alt"/>
            </div>
            <ul>
              <li>Bouldering</li>
              <li>Jeep rides</li>
              <li>River walks</li>
              <li>Bird watching</li>
              <li>Coffee tasting</li>
            </ul>
            <div class="link-container">
              <a href="#our-offers" class="learn-more">Learn more &rarr;</a>
            </div>
          </div>
        </div>
        <div class="card-item">
          <div class="rating">
            <div class="icon">
              <fa icon="home" />
            </div>
            <div class="category-title">Accomodation</div>
          </div>
          <div class="item-content">
            <div class="item-rating">
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star"/>
            </div>
            <ul>
              <li>Hilltop cottages</li>
              <li>Camping tents</li>
              <li>Cliff container house</li>
            </ul>
            <div class="link-container">
              <a href="#our-offers" class="learn-more">Learn more &rarr;</a>
            </div>
          </div>
        </div>
        <div class="card-item">
          <div class="rating">
            <div class="icon">
              <fa icon="hamburger" />
            </div>
            <div class="category-title">Food</div>
          </div>
          <div class="item-content">
            <div class="item-rating">
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star"/>
              <fa icon="star"/>
            </div>
            <ul>
              <li>Luwombo</li>
              <li>Steammed matooke</li>
              <li>Katogo</li>
              <li>Boo</li>
            </ul>
            <div class="link-container">
              <a href="#our-offers" class="learn-more">Learn more &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <p class="section-title">Popular Activities</p>
        <p class="sub-text">
          Clarke Farm is a 1500 acre farm with rivers and forest trails,
          both in natural and man made forests.
          There is a lot to see and do at the farm and these are the most popular activities
        </p>
      </div>
      <div class="popular-stat">
        <div id="number">
          <span id="percentage">90</span>
          <span id="percent-sign">%</span>
        </div>
        <div id="support-text">
          <p>Of Our Guests</p>
          <p>Enjoyed These Activities The Most</p>
        </div>
      </div>
      <div class="card-container">
        <div class="activity-details">
          <div class="circle-container-image">
            <img src="@/assets/images/jeep.jpg" alt="jeep ride">
          </div>
          <p>Jeep tour of the farm</p>
        </div>
        <div class="activity-details">
          <div class="circle-container-image">
            <img src="@/assets/images/bouldering.jpg" alt="bouldering">
          </div>
          <p>Bouldering</p>
        </div>
        <div class="activity-details">
          <div class="circle-container-image">
            <img src="@/assets/images/river-walks.jpg" alt="river walks">
          </div>
          <p>The river &amp; waterfall trails</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularActivities',
};
</script>

<style scoped>
.popular-activities-container {
  width: 100%;
  position: relative;
  margin-top: 60px;
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
.card-item{
  min-width:280px;
  max-width: 280px;
  min-height: 280px;
  max-height: 280px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  position:relative;
}
@media screen and (max-width:1240px){
  .card-item{
    margin-right:20px;
  }
}
.rating{
  display: flex;
  align-items: center;
  padding-left: 15px;
  height:50px;
  margin-top: 10px;
}
.icon{
  background-color:var(--dark-green);
  height:40px;
  width:40px;
  border-radius: 10px;
  color:white;
  font-size:20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.category-title{
  color:rgba(0,0,0,0.7);
  font-weight: bold;
  margin-left: 20px;
}
.item-content{
  padding-left: 15px;
  padding-right: 15px;
  padding-top:10px;
  height:220px;
}
.item-rating{
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
  color:orange;
}
.link-container{
  position:absolute;
  bottom:15px;
}
.learn-more{
  text-decoration: none;
}
.learn-more:hover{
  color:var(--dark-green);
  font-weight: bold;
}
.description{
  margin-top:40px;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:30px;
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
.popular-stat{
  width:50%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  height:145px;
  background-color: var(--mono-dark-green);
  display: flex;
  flex-direction: row;
  color:white;
  padding-left: 3%;
}
@media screen and (max-width:1200px){
  .popular-stat{
    width:60%;
  }
}
@media screen and (max-width:990px){
  .popular-stat{
    width:70%;
  }
}
@media screen and (max-width:500px){
  .popular-stat{
    width:95%;
  }
}
#number{
  margin-top:-40px
}
@media screen and (max-width:600px){
  #number{
    margin-top:-20px;
  }
}
#number span{
  font-family: Playfair;
}
#percentage{
  font-size: 90px;
}
@media screen and (max-width:600px){
  #percentage{
    font-size:70px;
  }
}
@media screen and (max-width:500px){
  #percentage{
    font-size:65px;
  }
}
#percent-sign{
  font-size: 50px;
}
@media screen and (max-width: 600px){
  #percent-sign{
    font-size:40px;
  }
}
#support-text{
  margin-left: 30px;
  padding-top: 25px;
}
#support-text p{
  font-size: 25px;
  font-family: Playfair;
}
@media screen and (max-width:830px){
  #support-text p{
    font-size: 20px;
  }
}
.activity-details{
  margin-top:20px;
}
/* Below 700px make horizontal scroll */
@media screen and (max-width:701px){
  .activity-details{
    margin-right: 30px;
  }
}
.circle-container-image{
  height:200px;
  width:200px;
  border-radius: 50%;
  border-bottom:3px solid var(--dark-green);
  margin-bottom: 10px;
}
img{
  width:98%;
  height:98%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.activity-details p{
  text-align: center;
}
</style>

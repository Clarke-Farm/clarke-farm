<template>
  <div class="coffee-process">
    <div class="description">
      <p class="section-title">Coffee Process</p>
      <p class="sub-text">
        Our coffee is processed using a method known as wet processing. This
        removes the coffee's fruity material &amp; leaves the coffee cherry moist.
        It is passed through a pulping machine, fermented and dried using
        forced air drying to achieve a moisture content of about 10.5%.
      </p>
      <!-- <div class="linedesign"></div> -->
    </div>
    <div class="benefits">
      <p class="section-sub-heading">Benefits of our process</p>
      <div class="card-container" id="benefits-list">
        <div class="card-item">
          <p class="benefit-num">01</p>
          <div class="item-content">
            <p class="item-title">A clean taste</p>
            <p>
              Our process guarantees a cleaner and more
              consistent flavor than other methods.
            </p>
          </div>
        </div>
        <div class="card-item">
          <p class="benefit-num">02</p>
          <div class="item-content">
            <p class="item-title">Selective picking</p>
            <p>
              Only the ripest green cherries are picked for processing.
              This guarantees a higher acidity and gives a better taste.
            </p>
          </div>
        </div>
        <div class="card-item">
          <p class="benefit-num">03</p>
          <div class="item-content">
            <p class="item-title">Quality control</p>
            <p>
              It guarantees a great deal of quality control through
              selective picking and allows for a much more consistent
              flavor.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="process-steps">
      <p class="section-sub-heading">Processing guide</p>
      <p style="text-align:center">
        This is a step by step guide showing our coffee process.
      </p>
      <div id="process-row-1">
        <div class="card-container process-list">
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/mother-garden.jpg" alt="mother garden" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Mother Garden</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/cherry-picking.jpg" alt="cherry picking" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Cherry Picking</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/wet-processing.jpg" alt="wet processing" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Wet Washing</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="process-row-2" style="display:none">
        <div class="card-container process-list">
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/mother-garden.jpg" alt="mother garden" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Mother Garden</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/cherry-picking.jpg" alt="cherry picking" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Cherry Picking</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/wet-processing.jpg" alt="wet processing" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Wet Washing</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="more-button-container">
        <button>Show All</button>
      </div>
    </div>
    <div id="capacity">
      <p class="section-sub-heading">Our Capacity</p>
      <p style="text-align:center">
        These numbers show our current production and growth potential.
      </p>
      <div id="stat-container">
        <div class="stat">
          <div class="stat-num">1500</div>
          <div class="stat-text">Acres available</div>
        </div>
        <div class="stat">
          <div class="stat-num">300+</div>
          <div class="stat-text">Acres of coffee</div>
        </div>
        <div class="stat">
          <div class="stat-num">700K</div>
          <div class="stat-text">Kilograms annually</div>
        </div>
        <div class="stat">
          <div class="stat-num">50</div>
          <div class="stat-text">Employees</div>
        </div>
        <div class="stat">
          <div class="stat-num">300</div>
          <div class="stat-text">Seasonal workers</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoffeeProcess',
};
</script>

<style scoped>
.coffee-process{
  position:relative;
  margin-top:70px;
}
@media screen and (min-width:700px) and (max-width:910px) {
  .coffee-process{
    margin-top:0px;
  }
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.description p{
  text-align: center;
  margin-top:15px;
}
.linedesign {
  width: 30%;
  height: 25px;
  position:absolute;
  top:0;
  right: 0;
  background-color: #068d68;
}

.sub-text{
  width:70%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:990px){
  .sub-text{
    width:100%;
  }
}
@media screen and (max-width:480px){
  .sub-text{
    text-align: left;
    padding-right: 5px;
  }
}
.benefits{
  margin-top: 50px;
}
.section-sub-heading{
  text-align: center;
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
}
.card-container{
  margin-top: 40px;
  display:flex;
  justify-content:center;
}
#benefits-list{
  overflow-x: auto;
  overflow-y:hidden;
}
#benefits-list::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:700px){
  #benefits-list{
    justify-content: start;
  }
}
.card-item{
  min-width:280px;
  max-width: 280px;
  min-height: 280px;
  max-height: 280px;
  margin-left: 15px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.benefit-num{
  font-size: 70px;
  margin-top:-10px;
  padding-left: 15px;
  color:rgb(196, 196, 196);
  font-family: 'Times New Roman', Times, serif;
}
.item-content{
  padding-left: 15px;
  padding-right: 15px;
  margin-top:-20px;
}
.item-title{
  font-weight: bold;
  font-size: 18px;
}
#process-steps{
  margin-top:50px;
}
/* Process card styles */
.process-list{
  overflow-x: auto;
  overflow-y:hidden;
}
.process-list::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:700px){
  .process-list{
    justify-content: start;
  }
}
@media screen and (max-width:480px){
  .process-list{
    flex-direction: column;
    overflow-x: hidden;
    width:100%;
  }
  .process-item{
    min-width:95%;
    margin-left: auto;
    margin-right: auto;
    min-height: 320px;
    margin-bottom:30px;
  }
}
.card-image-container{
  height:45%;
}
.card-image-container img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.card-content{
  margin-top: 5px;
  padding-left: 10px;
}
.card-title{
  font-weight: bold;
}
.card-text{
  font-size: 14px;
}
.more-button-container{
  margin-top:30px;
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
/* Capacity styles */
#capacity{
  margin-top: 50px;
}
#stat-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width:70%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:480px){
  #stat-container{
    width:80%;
  }
}
.stat{
  margin-top: 20px;
  min-width: 100px;
  text-align: center;
}
@media screen and (max-width:480px){
  .stat{
    text-align:left;
  }
}
.stat-num{
  font-size: 45px;
  margin-top:-10px;
  color:rgb(100, 100, 100);
  font-family: 'Times New Roman', Times, serif;
}
</style>

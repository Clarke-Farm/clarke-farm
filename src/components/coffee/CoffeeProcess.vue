<template>
  <div class="coffee-process">
    <div id="process-steps">
      <p class="section-sub-heading">Processing guide</p>
      <p class="sub-text">
        This is a step by step guide showing our coffee process.
      </p>
      <div id="process-row-1">
        <div class="card-container">
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
        <div class="card-container">
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
export default {
  name: 'CoffeeProcess',
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
.card-item{
  min-width:280px;
  max-width: 280px;
  min-height: 280px;
  max-height: 280px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width:1240px){
  .card-item{
    margin-right:20px;
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
</style>

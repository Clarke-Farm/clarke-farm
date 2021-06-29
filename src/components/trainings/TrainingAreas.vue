<template>
  <div id="train-with-us">
    <p class="section-title">Why train with us</p>
    <p class="sub-text">
      Wisdom is a product of knowledge and experience. Over the years, we have
      acquired both through testing and trials. We will teach you how to manage a large
      workforce, increase production and revenue. Below are our seasonal harvests.
    </p>
    <div id="capacity">
      <div class="stat-container">
        <div class="stat">
          <div class="stat-num">700K</div>
          <div class="stat-text">KGs of coffee </div>
        </div>
        <div class="stat">
          <div class="stat-num">10K</div>
          <div class="stat-text">Chickens</div>
        </div>
        <div class="stat">
          <div class="stat-num">20K</div>
          <div class="stat-text">KGs of Irish</div>
        </div>
        <div class="stat">
          <div class="stat-num">120 ha</div>
          <div class="stat-text">Maize</div>
        </div>
        <div class="stat">
          <div class="stat-num">9 ha</div>
          <div class="stat-text">Matooke</div>
        </div>
      </div>
    </div>
    <div id="training-programs">
      <p class="section-sub-heading">Categories</p>
      <div class="card-container">
        <div class="card-item">
          <div class="card-image-container">
            <img src="@/assets/images/mother-garden.jpg" alt="coffee" aria-hidden="true">
          </div>
          <div class="card-content">
            <p class="card-title">Coffee</p>
            <p class="card-text">
              Learn from our experts that manage 300+ acres of coffee.
            </p>
          </div>
        </div>
        <div class="card-item">
          <div class="card-image-container">
            <img src="@/assets/images/chickens.jpg" alt="chickens" aria-hidden="true">
          </div>
          <div class="card-content">
            <p class="card-title">Chickens</p>
            <p class="card-text">
              With 10,000 chickens, we harvest 200 trays a day. Join us and learn
              how we do it.
            </p>
          </div>
        </div>
        <div class="card-item">
          <div class="card-image-container">
            <img src="@/assets/images/irish.jpg" alt="irish" aria-hidden="true">
          </div>
          <div class="card-content">
            <p class="card-title">Irish Potatoes</p>
            <p class="card-text">
              Learn how to select the best irish seedlings and how to take care of them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingAreas',
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
.card-item{
  min-width:290px;
  max-width: 290px;
  max-height: 320px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  position:relative;
}
@media screen and (max-width:1240px){
  .card-item{
    margin-right:20px;
  }
}
.card-image-container{
  height:190px;
}
.card-image-container img{
  width:100%;
  height:180px;
  object-fit: cover;
}
.card-content{
  margin-top: 5px;
  padding-left: 10px;
  height:130px;
}
.card-title{
  font-weight: bold;
}
.card-text{
  font-size: 14px;
}

/* End */
</style>

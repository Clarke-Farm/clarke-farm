<template>
  <div id="train-with-us">
    <div class="description">
      <p class="section-title">Why train with us</p>
      <p class="sub-text">
        Wisdom is a product of knowledge and experience. Over the years, we have
        acquired both through testing and trials. We will teach you how to manage a large
        workforce, increase production and revenue. Below are our seasonal harvests.
      </p>
      <div class="linedesign"></div>
    </div>
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
      <div class="info-display">
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
@media screen and (max-width:700px){
  #train-with-us{
    width:100%;
    padding-left:20px;
  }
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
  text-align: center;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.description p{
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
@media screen and (max-width:700px){
  .linedesign{
    width:25%;
  }
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
#capacity{
  margin-top: 20px;
}
.stat-container{
  display: flex;
  flex-wrap: wrap;
  width:70%;
  justify-content:space-between;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:480px){
  .stat-container{
    width:100%;
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
#training-programs{
  margin-top:50px;
}
.section-sub-heading{
  text-align: center;
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
}

.info-display{
  display:flex;
  justify-content: center;
  margin-top:30px;
  overflow-x: auto;
  overflow-y: hidden;
}
.info-display::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:900px){
  .info-display{
    justify-content: start;
  }
}
.card{
  max-width:250px;
  min-width: 250px;
  max-height:320px;
  margin-right: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.card-image-container{
  height:60%;
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
</style>

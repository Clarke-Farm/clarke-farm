<template>
  <div id="hero-visit">
    <div id="left-container">
      <p class="hero-text-lg">
        Enjoy the <span class="green-highlight">unique experience</span>
      </p>
      <p class="hero-text-lg">
        of being part of Clarke Farm &amp; Coffee Estate
      </p>
      <p class="hero-sub-text">
        Explore the largest rock garden in Uganda, marked river trails,
        guided farm rides in our jeeps (ATV), delicious local cuisines and embrace
        the culture while enjoying freshly roasted coffee from the farm.
      </p>
      <div class="contact-btn-container">
        <a href="#visit-registration-form">Book A Trip</a>
      </div>
      <div id="rating">
        <div id="icon">
          <fa icon="running" />
        </div>
        <div id="category-container">
          <div class="title">Category</div>
          <div class="category-content">Activities</div>
        </div>
        <div id="review-ratings">
          <div class="title">Ratings</div>
          <div class="category-content">4.5/5</div>
        </div>
      </div>
    </div>
    <div id="right-container">
      <img src="@/assets/images/forestwalk.jpg" alt="forest walk" aria-hidden="true">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroVisit',
};
</script>

<style scoped>
#hero-visit{
  width:90%;
  margin-left: auto;
  margin-right: auto;
  margin-top:25px;
}
@media screen and (max-width:480px){
  #hero-visit{
    width:95%;
  }
}
#right-container{
  max-height:500px;
}
img{
  width:100%;
  max-height:500px;
  object-fit: cover;
}
@media screen and (min-width:900px){
  #hero-visit{
    display:flex;
    max-height: 500px;
  }
  #left-container{
    padding-top:30px;
    width:55%;
  }
  #right-container{
    width:45%;
  }
}
@media screen and (max-width:900px){
  #right-container{
    margin-top:30px;
  }
}
.hero-text-lg{
  font-size: 28px;
  font-weight: bold;
  margin-bottom:12px;
}
.green-highlight{
  color:var(--dark-green);
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

#rating{
  background-color:white;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.5);
  border-radius: 10px;
  width:300px;
  height:70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right:20px;
  margin-top:50px;
}
@media screen and (max-width:480px){
  #rating{
    width:100%;
  }
}
#icon{
  background-color:var(--dark-green);
  height:40px;
  width:40px;
  border-radius: 10px;
  color:white;
  font-size:22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#category-container{
  font-size:14px;
  margin-top:0px;
}
.title{
  color:rgba(0,0,0,0.7);
  font-weight: bold;
}
.category-content{
  color:var(--dark-green);
  text-align: center;
  font-weight: bold;
}
#review-ratings{
  font-size:14px;
}
</style>

<template>
  <div id="hero-coffee">
    <div id="left-container">
      <p class="hero-text-lg">
        Money can buy you happiness
      </p>
      <p class="hero-text-lg">
        It buys you coffee &amp; <span class="green-highlight">Coffee makes you happy</span>
      </p>
      <p class="hero-sub-text">
        Washed robusta coffee processed from ripe red cherries gives the highest
        quality and an improved taste.
      </p>
      <div id="assurance-container">
        <div class="assurance-item">
          <span class="icon-container">
            <fa icon="check-circle" />
          </span>
          <span class="assurance-text">Eco-friendly Processes</span>
        </div>
        <div class="assurance-item">
          <span class="icon-container">
            <fa icon="check-circle" />
          </span>
          <span class="assurance-text">Quality Inspection</span>
        </div>
        <div class="assurance-item">
          <span class="icon-container">
            <fa icon="check-circle" />
          </span>
          <span class="assurance-text">Sufficient Stocks</span>
        </div>
      </div>
      <div class="contact-btn-container">
        <a href="#coffee-registration-form">Contact Us</a>
      </div>
    </div>
    <div id="right-container">
      <img src="@/assets/images/clarke-coffee.jpg" alt="clarke coffee" aria-hidden="true">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCoffee',
};
</script>

<style scoped>
#hero-coffee{
  width:90%;
  margin-left: auto;
  margin-right: auto;
  margin-top:25px;
  min-height:500px;
}
@media screen and (max-width:480px){
  #hero-coffee{
    width:95%;
  }
}
#right-container{
  max-height:500px;
}
@media screen and (min-width:900px){
  #right-container{
    min-height:500px;
  }
}
img{
  width:100%;
  max-height:500px;
  object-fit: cover;
}
@media screen and (min-width:900px){
  img{
    min-height:500px;
  }
}
@media screen and (min-width:900px){
  #hero-coffee{
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
#assurance-container{
  margin-top:20px;
}
.icon-container{
  font-size:25px;
  color:var(--mono-dark-green);
  margin-right:15px;
}
.assurance-item{
  display:flex;
  align-items: center;
}
.assurance-text{
  font-weight: bold;
  color:rgba(0,0,0,0.7);
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
</style>

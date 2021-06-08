<template>
  <div id="coffee-container">
    <div class="left-container">
      <div class="left-image">
        <img src="@/assets/images/coffee-cup.jpg" alt="coffee cup">
      </div>
    </div>
    <div class="right-container">
      <div class="text-container">
        <p class="catchy-phrase">Money Can Buy You Happiness</p>
        <p class="catchy-phrase">It Buys You Coffee</p>
        <p class="catchy-phrase catchy-emphasize">Coffee Makes You Happy</p>
        <div id="packaging-text-container">
          <p class="packaging-text">
            Coffee is available as roasted in branded packages or
            as beans in sacks of 60 kilos. We can supply large orders.
          </p>
        </div>
        <div class="contact-btn-container">
          <a href="">Contact Us</a>
        </div>
      </div>
      <div class="images-right">
        <div class="image-left-section">
          <img id="img-packed-coffee"
          src="@/assets/images/packaged_coffee.png" alt="packed coffee" aria-hidden="true">
        </div>
        <div class="image-right-section">
          <img src="@/assets/images/coffee-sack.jpg" alt="coffee sack" aria-hidden="true">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCoffee',
};
</script>

<style scoped>
#coffee-container{
  position:relative;
}
.left-container{
  min-height: 600px;
  max-height: 600px;
  width:15%;
  background-color: var(--mono-dark-green);
  position:absolute;
  top:-75px;left: 0;
}
@media screen and (max-width:910px){
  .left-container{
    display: none;
  }
}
.left-image{
  width:230px;
  height:230px;
  border-radius: 50%;
  background-color: white;
  position:absolute;
  top:120px;
  left:50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width:1041px){
  .left-image{
    left:30px;
  }
}
.left-image img{
  width:225px;
  height:225px;
  border-radius: 50%;
  object-position: 0px -90px;
}
img{
  width:100%;
  height:100%;
  object-fit: cover;
}

.right-container{
  width:80%;
  margin-left:15%;
  min-height: 500px;
  max-height:550px;
  margin-top: 25px;
  position:relative;
}
@media screen and (max-width:910px){
  .right-container{
    width:95%;
    margin-left: auto;
    margin-right: auto;
    margin-top:40px;
  }
}
.text-container{
  width:50%;
  position:absolute;
  top:30px;
  left:18%;
}
@media screen and (max-width:700px){
  .right-container{
    max-height:100%;
  }
}
@media screen and (max-width:910px){
  .text-container{
    position:static;
    width:70%;
  }
}
@media screen and (max-width:700px){
  .text-container{
    width:100%;
  }
}

.catchy-phrase{
  font-size: 28px;
  font-weight: bold;
  margin-bottom:12px;
}
.catchy-emphasize{
  font-size: 30px;
  color:var(--dark-green);
}
#packaging-text-container{
  margin-top: 30px;
}
.packaging-text{
  width:90%;
  line-height: 2;
}
@media screen and (max-width:990px){
  .packaging-text{
    width:100%;
  }
}
@media screen and (max-width:480px){
  .packaging-text{
    text-align: left;
    padding-right: 5px;
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
/* Right side content styles. */
.images-right{
  width:30%;
  height:400px;
  position:absolute;
  right:30px;
  top:60px;
}
@media screen and (max-width:990px){
  .images-right{
    right:0px;
  }
}
@media screen and (max-width:910px){
  .images-right{
    top:20px;
    width:35%;
  }
}
@media screen and (max-width:700px){
  .images-right{
    position:static;
    width:100%;
    height:260px;
    display: flex;
    margin-top: 30px;
  }
  .images-right div{
    width:50%;
  }
  .image-left-section{
    width:100%;
    height:100%;
  }
  #img-packed-coffee{
    object-fit: cover;
    object-position: 100% 100%;
    height: 100%;
    width:100%;
  }
}
@media screen and (min-width:700px){
  .image-right-section{
    display:none;
  }
}
</style>

<template>
  <div class="hero-section">
    <div class="left-container">
      <p class="hero-text-lg">An eco-friendly coffee estate and farm</p>
      <p class="hero-text-lg">specializing in high quality washed</p>
      <p class="hero-text-lg">Robusta coffee</p>
      <div class="image-biker">
        <img src="@/assets/images/bike-bg-grey.png" alt="biker" aria-hidden="true">
      </div>
      <p class="hero-sub-text">
        Visit Clarke Farm and experience the amazing hilltop views, explore
        the river and forest walks, try the activities such as bouldering and
        mountain biking, walk or jog on the farm trails or have an exciting guided tour
        of the farm by Jeep. Round off your stay by roasting some Clarke Farm coffee and
        enjoying the fresh locally prepared dishes.
      </p>
      <div class="call-to-action">
        <div id="book-trip">
          <a href="">Book A Trip</a>
        </div>
        <div id="buy-coffee">
          <a href="">Buy Coffee</a>
        </div>
        </div>
    </div>
    <div class="right-container">
      <div class="images-right">
        <div class="image-left-section">
          <img src="@/assets/images/farm.jpg" alt="farm" aria-hidden="true">
        </div>
        <div class="image-top-section">
          <img src="@/assets/images/friends.jpg" alt="having fun" aria-hidden="true">
        </div>
        <div class="image-bottom-section">
          <img src="@/assets/images/jeep.jpg" alt="jeep ride" aria-hidden="true">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section{
  width:90%;
  margin-left: auto;
  margin-right: auto;
  margin-top:25px;
  min-height:500px;
}
@media screen and (max-width:480px){
  .hero-section{
    width:95%;
  }
}
.right-container{
  max-height:500px;
}
@media screen and (min-width:900px){
  .right-container{
    min-height:500px;
  }
}
img{
  width:100%;
  max-height:500px;
  object-fit: cover;
}
@media screen and (min-width:900px){
  .hero-section{
    display:flex;
    max-height: 550px;
  }
  .left-container{
    width:55%;
    position:relative;
    padding-top:30px;
  }
  .right-container{
    width:45%;
    position:relative;
  }
}
@media screen and (max-width:900px){
  .right-container{
    margin-top:30px;
  }
}
.hero-text-lg{
  font-size: 28px;
  font-weight: bold;
  margin-bottom:12px;
}
@media screen and (max-width:700px){
  .hero-section{
    display:block;
    width:95%;
  }
  .left-container{
    width:100%;
  }
  .right-container{
    width:100%;
  }
}
@media screen and (max-width:480px){
  .inline-480{
    display:inline-block;
  }
}
/* Left side content styles. */
.hero-text-lg{
  font-size: 28px;
  font-weight: bold;
  margin-bottom:12px;
}
.hero-sub-text{
  width:90%;
  margin-top:4%;
  line-height: 2;
}
@media screen and (max-width:990px){
  .hero-sub-text{
    width:95%;
  }
}
.image-biker{
  position:absolute;
  width:140px;
  height: 90px;
  display:none;
}
.image-biker img{
  width:100%;
  height:100%;
  object-fit:cover;
}
@media screen and (min-width: 1280px){
  .image-biker{
    display:block;
    left:460px;
    top:70px;
  }
}
.call-to-action{
  display:flex;
  flex-direction: row;
  margin-top: 8%;
}
.call-to-action div{
  height:35px;
  width:40%;
  max-width: 180px;
  border-radius: 3px;
}
.call-to-action div:hover{
  transform: scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
}
.call-to-action a{
  text-decoration: none;
  color:white;
  height:100%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#book-trip{
  background-color: var(--dark-green);
}
#book-trip:hover{
  background-color: var(--mono-dark-green);
}
#buy-coffee{
  background-color:#828282;
  margin-left: 10%;
}
#buy-coffee:hover{
  background-color: rgb(82, 82, 82);
}

/* Right side content styles. */

.images-right{
  width:100%;
  height:100%;
  display:grid;
  grid-gap: 5px;
}
@media screen and (max-width:700px){
  .images-right{
    display: flex;
    margin-top:30px;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .images-right::-webkit-scrollbar{
    width:0px;
  }
  .images-right div{
    min-width:250px;
    max-width:250px;
  }
}
.images-right img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.image-left-section{
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start:1;
  grid-column-end: 2;
}
.image-top-section{
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
}
.image-bottom-section{
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start:2;
  grid-column-end: 3;
}
@media screen and (max-width:990px){
  .image-top-section{
    display: none;
  }
  .image-bottom-section{
    display: none;
  }
}
@media screen and (max-width:700px){
  .image-top-section{
    display: block;
  }
  .image-bottom-section{
    display: block;
  }
}
</style>

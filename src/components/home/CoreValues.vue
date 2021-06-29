<template>
  <div id="core-values">
    <div class="card-container">
      <div class="width-m bg-white">
        <div class="core-title mt-20">Our</div>
        <div class="core-title">Core Values</div>
      </div>
      <div class="card-item">
        <div class="value-title-container">
          <span class="value-title">Quality</span>
          <span class="icon" id="thumbs">
            <fa icon="thumbs-up" />
          </span>
        </div>
        <div class="item-content">
          To delivery quality products &amp; services worthy of our customers trust.
        </div>
      </div>
      <div class="card-item">
        <div class="value-title-container">
          <span class="value-title">Integrity</span>
          <span class="icon" id="handshake">
            <fa icon="handshake" />
          </span>
        </div>
        <div class="item-content">
          To honor our promises &amp; commitments at all times.
        </div>
      </div>
      <div class="card-item">
        <div class="value-title-container">
          <span class="value-title">Respect</span>
          <span class="icon" id="heart">
            <fa icon="heart" />
          </span>
        </div>
        <div class="item-content">
          To value, respect &amp; deligently serve our customers.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoreValues',
};
</script>

<style scoped>
#core-values {
  position: relative;
  min-height: 300px;
}
@media screen and (max-width:480px){
  #core-values{
    width:95%;
  }
}
@media screen and (min-width:900px){
  #core-values{
    margin-top:100px;
  }
}
.core-title{
  font-weight: bold;
  font-size:22px;
  font-family: Playfair;
  padding-left:15px;
}
.mt-20{
  margin-top:20px;
}
.value-title-container{
  margin-top:25px;
  margin-bottom:20px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding-right:30px;
}
.value-title{
  font-weight: bold;
  font-size:18px;
}
.icon{
  font-size:20px;
}
#thumbs{
  color:var(--mono-dark-green);
}
#handshake{
  color:#FCA705;
}
#heart{
  color:#1CACF4;
}
.sub-text{
  width:70%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
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
  margin-top: 20px;
  display:flex;
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
  }
}
.card-container::-webkit-scrollbar{
  width:0px;
}
.card-item{
  min-width:240px;
  min-height: 220px;
  background-color:white;
}
.width-m{
  min-width:180px;
}
.bg-white{
  background-color: white;
}
.card-image-container{
  height:190px;
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
.item-content{
  padding-right:30px;
}
</style>

<template>
  <div id="our-partners">
    <p class="section-title">Our partners</p>
    <div id="partners-container">
      <div class="partner">
        <img src="@/assets/images/partners/ucda.jpg"
          alt="Uganda Coffee Development Authority" aria-hidden="true">
      </div>
      <div class="partner">
        <img src="@/assets/images/partners/ugacof.jpg"
          alt="UGACOF" aria-hidden="true">
      </div>
      <div class="partner">
        <img src="@/assets/images/partners/great.jpg"
          alt="Great lakes coffee" aria-hidden="true">
      </div>
      <div class="partner">
        <img src="@/assets/images/partners/lifad.jpg"
          alt="LIFAD" aria-hidden="true">
      </div>
      <div class="partner">
        <img src="@/assets/images/partners/nucafe.png"
          alt="NUCAFE" aria-hidden="true">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurPartners',
};
</script>

<style scoped>
#our-partners{
  margin-top:60px;
}
@media screen and (max-width:764px){
  #our-partners{
    margin-top:30px;
  }
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
  text-align: center;
}

#partners-container{
  display:flex;
  align-items: center;
  justify-content: space-between;
  width:95%;
  margin-left: auto;
  margin-right: auto;
  overflow-y:hidden;
  overflow-x:auto;
}
#partners-container::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:630px){
  #partners-container{
    margin-top:40px;
  }
}
@media screen and (max-width:1280px){
  #our-partner{
    min-width:100%;
  }
}
.partner{
  min-width:200px;
  height:100px;
  display:flex;
  align-items: center;
}
img{
  max-width:100%;
  min-width:100%;
  max-height: 100%;
  object-fit: contain;
}
</style>

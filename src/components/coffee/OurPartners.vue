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
#partners-container{
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right:10px;
}
.partner{
  width:200px;
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

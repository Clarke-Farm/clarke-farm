<template>
  <div class="our-certificates">
    <div class="description">
      <p class="section-title">Our Certificates</p>
      <p>
        In recognition of Clarke Farm's efforts to produce the best coffee
      </p>
      <div class="linedesign"></div>
    </div>
    <div class="certificate-display"></div>
  </div>
</template>

<script>
export default {
  name: 'OurCertificates',
};
</script>

<style scoped>
.our-certificates{
  position:relative;
  margin-top:100px;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.description p{
  text-align: center;
  margin-top:15px;
}
.linedesign {
  width: 15%;
  height: 25px;
  position:absolute;
  top:0;
  left: 0;
  background-color: #068d68;
}
.certificate-display{
  min-height:300px;
  display: flex;
  flex-wrap: wrap;
}
</style>

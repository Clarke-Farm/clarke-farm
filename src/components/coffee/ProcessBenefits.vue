<template>
  <div id="process-benefits">
    <div class="description">
      <p class="section-title">Coffee Process</p>
      <p class="sub-text">
        Our coffee is processed using a method known as wet processing which removes
        the pulp (the coffee's fruity material) from the red cherries, leaving behind the coffee
        bean covered with a parchment coat. The parchment is left behind overnight in water causing
        light fermentation which improves the taste of coffee. The parchment is then sun dried &amp;
        the drying process finished in an echo-dryer. Coffee can be stored at 12% moisture content
        in its parchment form for several months until a buyer is found, when it is then hulled
        (parchment coat removed) cleaned, graded &amp; sorted for export to the roasters.
      </p>
    </div>
    <div class="benefits">
      <p class="section-sub-heading">Benefits of our process</p>
      <div class="card-container">
        <div class="card-item">
          <p class="benefit-num">01</p>
          <div class="item-content">
            <p class="item-title">A clean taste</p>
            <p>
              Fermentation brings out the flavors in the coffee and the entire process
              guarantees a cleaner and more consistent flavor.
            </p>
          </div>
        </div>
        <div class="card-item">
          <p class="benefit-num">02</p>
          <div class="item-content">
            <p class="item-title">Selective picking</p>
            <p>
              Washed Robusta coffee selects out only the ripe red cherries, rejecting unripe green
              cherries, thus giving the highest quality.
            </p>
          </div>
        </div>
        <div class="card-item">
          <p class="benefit-num">03</p>
          <div class="item-content">
            <p class="item-title">Quality control</p>
            <p>
              Clarke Farm Coffee is single origin &amp; Rainforest certified the quality of coffee
              is consistent from year to year.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProcessBenefits',
};
</script>

<style scoped>
#process-benefits{
  position:relative;
  margin-top:70px;
}
@media screen and (max-width:764px) {
  #process-benefits{
    margin-top:50px;
  }
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
.benefits{
  margin-top: 50px;
}
.section-sub-heading{
  text-align: center;
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
}
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
  min-width:280px;
  max-width: 280px;
  min-height: 280px;
  max-height: 280px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width:1240px){
  .card-item{
    margin-right:20px;
  }
}
.benefit-num{
  font-size: 70px;
  margin-top:-10px;
  padding-left: 15px;
  color:rgb(196, 196, 196);
  font-family: 'Times New Roman', Times, serif;
}
.item-content{
  padding-left: 15px;
  padding-right: 15px;
  margin-top:-20px;
}
.item-title{
  font-weight: bold;
  font-size: 18px;
}
</style>

<template>
  <div id="our-coffee-packages">
    <p class="section-title">Coffee packages</p>
    <div class="card-container">
      <div class="card-item">
        <div class="rating">
          <div class="icon" id="shopping-icon">
            <fa icon="shopping-bag" />
          </div>
          <div class="category-title">Consumers/Wholesalers</div>
        </div>
        <div class="item-content">
          <div class="line-item">
            <span class="line-item-icon box-icon">
              <fa icon="box-open"/>
            </span>
            <span class="line-item-bold line-item-title">Package:</span>
            <span>Paper Bag</span>
          </div>
          <div class="line-item">
            <span class="line-item-icon scale-icon">
              <fa icon="balance-scale"/>
            </span>
            <span class="line-item-bold line-item-title">Weight:</span>
            <span>1 Kg</span>
          </div>
          <div class="line-item">
            <span class="line-item-icon product-icon">
              <fa icon="bullseye"/>
            </span>
            <span class="line-item-bold line-item-title">Product:</span>
            <span>Roasted Beans</span>
          </div>
          <div class="line-item">
            <span class="line-item-icon min-order-icon">
              <fa icon="minus-circle"/>
            </span>
            <span class="line-item-bold line-item-title">Min.order:</span>
            <span>50 Bags</span>
          </div>
          <div class="link-container">
            <a href="#coffee-registration-form" class="learn-more">Contact us &rarr;</a>
          </div>
        </div>
      </div>
      <div class="card-item">
        <div class="rating">
          <div class="icon">
            <fa icon="truck" />
          </div>
          <div class="category-title">Exporters/Processors</div>
        </div>
        <div class="item-content">
          <div class="line-item">
            <span class="line-item-icon box-icon">
              <fa icon="box-open"/>
            </span>
            <span class="line-item-bold line-item-title">Package:</span>
            <span>Sack</span>
          </div>
          <div class="line-item">
            <span class="line-item-icon scale-icon">
              <fa icon="balance-scale"/>
            </span>
            <span class="line-item-bold line-item-title">Weight:</span>
            <span>60 Kg</span>
          </div>
          <div class="line-item">
            <span class="line-item-icon product-icon">
              <fa icon="bullseye"/>
            </span>
            <span class="line-item-bold line-item-title">Product:</span>
            <span>Dried Beans</span>
          </div>
          <div class="line-item">
            <span class="line-item-icon min-order-icon">
              <fa icon="minus-circle"/>
            </span>
            <span class="line-item-bold line-item-title">Min.order:</span>
            <span>50 Sacks</span>
          </div>
          <div class="link-container">
            <a href="#coffee-registration-form" class="learn-more">Contact us &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Packaging',
};
</script>

<style scoped>
#our-coffee-packages{
  margin-top:80px;
}
@media screen and (max-width:764px){
  #our-coffee-packages{
    margin-top:60px;
  }
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
  text-align: center;
}
.card-container{
  margin-top: 40px;
  display:flex;
  justify-content:space-around;
  width:70%;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
  overflow-y:hidden;
}
.card-container::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:990px) {
  .card-container{
    width:80%;
  }
}
@media screen and (max-width:900px){
  .card-container{
    width:90%;
  }
}
@media screen and (max-width:730px){
  .card-container{
    width:95%;
  }
}
@media screen and (max-width:640px){
  .card-container{
    justify-content: start;
  }
}
.card-item{
  min-width:300px;
  max-width: 300px;
  min-height: 280px;
  position:relative;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width:640px){
  .card-item{
    margin-right: 30px;
  }
}
.rating{
  display: flex;
  align-items: center;
  padding-left: 15px;
  height:50px;
  margin-top: 10px;
}
.icon{
  background-color:var(--dark-green);
  height:40px;
  width:40px;
  border-radius: 10px;
  color:white;
  font-size:20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#shopping-icon{
  background-color:var(--blue-ink);
}
.category-title{
  font-weight: bold;
  margin-left: 15px;
}
.item-content{
  padding-left: 25px;
  padding-right: 15px;
  padding-top:20px;
  height:220px;
}
.line-item{
  margin-bottom: 8px;
}
.line-item-icon{
  margin-right:15px;
  display:inline-block;
  min-width:30px;
}
.line-item-bold{
  font-weight: bold;
}
.line-item-title{
  display:inline-block;
  min-width:80px;
}
.box-icon{
  color:#FCA705;
}
.scale-icon{
  color:#5C2C94;
}
.product-icon{
  color:#1CACF4;
}
.min-order-icon{
  color:#FC646C;
}
.link-container{
  position:absolute;
  bottom:15px;
}
.learn-more{
  text-decoration: none;
}
.learn-more:hover{
  color:var(--dark-green);
  font-weight: bold;
}
</style>

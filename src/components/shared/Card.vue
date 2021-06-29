<template>
  <div class="card-item">
    <div class="card-image-container">
      <img :src="item.img.src" :alt="item.img.alt? item.img.alt: ''" aria-hidden="true">
    </div>
    <div class="card-content">
      <p class="card-title">{{ item.title }}</p>
      <p class="card-text">
       {{ item.text }}
      </p>
      <p v-if="item.price" class="activity-price">
        {{ item.currency }} {{ item.price }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

.card-item{
  min-width:290px;
  max-width: 290px;
  max-height: 320px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  position:relative;
}
@media screen and (max-width:1240px){
  .card-item{
    margin-right:20px;
  }
}
.card-image-container{
  height:190px;
}
.card-image-container img{
  width:100%;
  height:180px;
  object-fit: cover;
}
.card-content{
  margin-top: 5px;
  padding-left: 10px;
  height:130px;
}
.card-title{
  font-weight: bold;
}
.card-text{
  font-size: 14px;
}
.activity-price{
  width:80px;
  background-color: var(--dark-green);
  color:white;
  text-align: center;
  position:absolute;
  bottom:-5px;
}
</style>

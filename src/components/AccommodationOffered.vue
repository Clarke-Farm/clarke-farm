/* eslint-disable vue/valid-template-root */
<template>
  <!-- eslint-disable max-len -->
    <div class="row">
      <div class="col-4">
        <div class="card-box">
          <div class="card-img justify-content-center">
            <img
              src="../assets/home-images/container-house.jpg"
              class="justify-content-center"
              alt=""
            />
          </div>
          <div class="card-content">
            <h5 class="card-title">Container House</h5>
             <h2>$300</h2>
             <p>per person</p>
          </div>
        </div>
      </div>
           <div class="col-4">
        <div class="card-box" id="box-2">
          <div class="card-img justify-content-center">
            <img
              src="../assets/home-images/camping-tent.jpg"
              class="justify-content-center"
              alt=""
            />
          </div>
          <div class="card-content">
            <h5 class="card-title">Camping Tents</h5>
             <h2>$100</h2>
             <p>per tent</p>
          </div>
        </div>
      </div>
           <div class="col-4">
        <div class="card-box">
          <div class="card-img justify-content-center">
            <img
              src="../assets/home-images/cottages.jpg"
              class="justify-content-center"
              alt=""
            />
          </div>
          <div class="card-content">
            <h5 class="card-title">Cottages</h5>
            <h2>$200</h2>
             <p>per person</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'ActivitiesOffered',
  data() {
    return {
      collapse: false,
    };
  },
};
</script>
<style scoped>
.container {
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}
.row{
  width: 900px;
  margin-top: 100px;
}
.container .col-4 {
  max-width: 350px;
  height: 350px;
  margin: 0px 0px;
  padding: 15px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container .col-4 .card-box {
  max-width: 280px;
  height: 215px;
  margin: 20px 10px;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
}
#box-2 .card-img{
margin-left: 10px;
}
.container .card-box:hover {
  height: 380px;
}
.container .card-box .card-img {
  position: relative;
  width: 250px;
  height: 250px;
  top: -60px;
  left: 20px;
  z-index: 1;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}

.container .card-box .card-img img {
  border-radius: 4px;
  max-width: 100%;
  height: 230px;
}

.container .card-box .card-content {
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.container .card-box:hover .card-content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
}
.card-title{
  font-family:"Playfair";
  font-size:18px;
}
.card-text{
  font-family:"Roboto";
  font-size:14px;
}
 h2{
  color:#068d68;
  font-weight: bolder;
}
/* div{
  border:1px solid green;
} */
</style>

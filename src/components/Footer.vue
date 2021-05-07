<template>
<footer>
    <div class="footer-content">
      <div>
        <h3>CONTACT</h3>
        <div class="margin">+256(0)392 201 400</div>
        <div class="margin">Plot 8244, Bukasa-Muyenga</div>
        <div class="margin">Kampala,Uganda</div>
      </div>
      <div class="footer-section-SiteMap">
        <h3>SITE MAP</h3>
        <router-link to="/">Home</router-link>
        <router-link to="/visit-us">Visit Us</router-link>
        <router-link to="/buy-coffee">BuyCoffee</router-link>
        <router-link to="/training-programs">Training Programs</router-link>
      </div>
      <div>
        <h3>LOCATION</h3>
        <div class="margin">Kantambale, Kyejonjo</div>
        <div class="margin">Uganda</div>
        <h4>Book A Trip</h4>
      </div>
    </div>
    <div class="footer-bottom-line">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#" ><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<script>
export default ({
  name: 'Footer',
});
</script>

<style scoped>
footer {
  background-color: #045C44;
  color: white;
  width: 100%;
  font-size: 12px;
}
.margin{
  margin-bottom: 8px;
}
.footer-content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
 .footer-bottom-line{
  padding: 10px 0;
  border-top: 1px solid white;
  text-align: center;
  color: white;
}
.footer-section-SiteMap a{
  display: block;
  margin-bottom: 5px;
  text-decoration:none ;
  font-size: 14px;
}
.footer-section-SiteMap a:hover{
background-color: #F5f5f5;
color: #2c3e50;
text-align: center;
}
.footer-bottom-line a{
  margin-right: 19px;
  color: white;
}
a{
  color: #FFF;
}
</style>

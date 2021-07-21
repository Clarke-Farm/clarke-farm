<template>
  <footer>
    <div class="top-row">
      <div class="sub-container">
        <h5>CONTACT</h5>
        <div class="content">
          <p>+256 (0) 392 201 400</p>
          <p>Plot 8244, Bukasa - Muyenga</p>
          <p>Kampala, Uganda</p>
        </div>
      </div>
      <div class="sub-container">
        <h5>SITEMAP</h5>
        <div class="content">
          <p><a href="/">Home</a></p>
          <p><a href="/visit">Visit Us</a></p>
          <p><a href="/coffee">Buy Coffee</a></p>
          <p><a href="/training-programs">Training Programs</a></p>
        </div>
      </div>
      <div class="sub-container">
        <h5>LOCATION</h5>
        <div class="content">
          <p>Katambale, Kyenjojo</p>
          <p>Uganda</p>
        </div>
        <div class="icons">
          <p><small>Connect with us</small></p>
          <span id="facebook">
            <fa :icon="['fab','facebook-f']" title="visit our facebook page"/>
          </span>
          <span id="twitter">
            <fa :icon="['fab','twitter']" title="visit our twitter page"/>
          </span>
          <span id="instagram">
            <fa :icon="['fab','instagram']" title="visit our instagram page"/>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
};
</script>

<style scoped>
/* Active link styles. */
footer{
  margin-top: 70px;
  min-height:250px;
  background-color: var(--dark-green);
  color:white;
}
.top-row{
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-around;
  padding-top: 10px;
}
.content{
  margin-top: 20px;
}
.sub-container{
  width:350px;
  margin-top: 20px;
  padding-left: 80px;
}
.container-icons{
  border-top:2px solid white;
}

footer a{
  color:white;
}

.icons span{
  margin-right: 15px;
}
.icons span:hover{
  cursor:pointer;
}
</style>

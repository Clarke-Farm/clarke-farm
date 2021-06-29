<template>
  <div class="our-team">
    <div class="our-team-heading">
      <h1>Our Team</h1>
    </div>
    <div class="our-team-images">
      <div class="team-member-details">
        <div class="container-image">
          <img src="@/assets/images/sylvester.jpg" alt="sylvester kyendy">
        </div>
        <p>Sylvester Kyendy</p>
        <p>Farm Manager</p>
      </div>
      <div class="team-member-details">
        <div class="container-image">
          <img src="@/assets/images/robert.jpg" alt="robert kimuli">
        </div>
        <p>Robert Kimuli</p>
        <p>Audit &amp; Administration</p>
      </div>
      <div class="team-member-details">
        <div class="container-image">
          <img src="@/assets/images/charles.jpg" alt="charles mabeeri">
        </div>
        <p>Charles Mabeeri</p>
        <p>Supervisor General Duties</p>
      </div>
      <div class="team-member-details">
        <div class="container-image">
          <img src="@/assets/images/sulaiman.jpg" alt="sulaiman mulekwa">
        </div>
        <p>Sulaiman Mulekwa</p>
        <p>Head Transportation</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurTeam',
};
</script>

<style scoped>
.our-team {
  position: relative;
  margin-top: 45px;
}
@media screen and (max-width:700px){
  .our-team{
    padding-left:15px;
  }
}
.our-team-heading h1{
  text-align: center;
  margin-top: 0;
  font-size:1.7em;
  margin-bottom: 20px;
  font-family: Playfair;
  font-weight: lighter;
}
.our-team-heading p{
  text-align: center;
  margin-top:15px;
}
@media screen and (max-width:700px){
  .linedesign{
    width:25%;
  }
}
.our-team-images{
  display:flex;
  flex-direction:row;
  justify-content: center;
  margin-top: 70px;
  max-height:300px;
  overflow-x: auto;
  overflow-y: hidden;
}
@media screen and (max-width:900px){
  .our-team-images{
    justify-content: start;
  }
}
.our-team-images::-webkit-scrollbar{
  width:0px;
}
.container-image{
  height:200px;
  width:200px;
  margin-bottom: 10px;
}
img{
  width:100%;
  height:100%;
  object-fit: cover;
  object-position: 0px -20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.team-member-details{
  margin-right: 20px;
  margin-left: 5px;
}
.team-member-details p{
  text-align: center;
}

</style>

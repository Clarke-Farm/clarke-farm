<template>
  <div class="header">
    <div class="nav-container">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/visit">Visit</router-link></li>
        <li><router-link to="/coffee">Buy Coffee</router-link></li>
        <li><router-link to="/training-programs">Trainings</router-link></li>
      </ul>
      <div class="contact">
        <span class="phone-icon"><fa icon="phone"/></span>
        <span id="telephone">&nbsp;&nbsp;&nbsp;+256 (0) 392 201 400</span>
      </div>
    </div>
    <span class="hamburger-menu">
      <fa icon="bars"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
};
</script>
<style>
@font-face {
  font-family: "Roboto";
  src: url("../assets/Roboto-Regular.ttf");
}
@font-face {
  font-family: "Playfair";
  src: url("../assets/PlayfairDisplay-Regular.ttf");
}
</style>

<style scoped>
.header{
  display:flex;
  flex-direction: row;
  position:relative;
}
.nav-container{
  width:480px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  height:30px;
  z-index:1;
}

.hamburger-menu{
  display: none;
  align-items: center;
  z-index:1;
  font-size: 110%;
}
.hamburger-menu:hover{
  cursor: pointer;
  transform: scale(1.2);
}
@media screen and (max-width: 768px){
  .hamburger-menu{
    display: flex;
    position:absolute;
    right:10%;
  }
  .nav-container{
    display: none;
  }
}
.nav-container ul{
  display:flex;
  flex-direction: row;
  width:100%;
  margin:0;
  padding:0;
}
.nav-container li{
  text-decoration: none;
  list-style-type: none;
  height: 30px;
  width:120px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left:1%;
}
/* The router link vue tag evaluates to an anchor so the styles apply */
.nav-container a{
  display:flex;
  width:100%;
  height:100%;
  text-decoration: none;
  color:inherit;
  align-items: center;
  justify-content: center;
}
.nav-container a:hover{
  background-color: var(--dark-green);
  color:white;
}

/* Active link styles. */
.router-link-active{
  border-bottom: 2px solid var(--dark-green);
}

.contact{
  display: flex;
  height:100%;
  flex-direction: row;
  position:absolute;
  right:65px;
}
@media screen and (max-width:880px){
  .contact{
    display:none;
  }
}
.phone-icon{
  transform: rotate(90deg);
  color:var(--dark-green)
}
#telephone{
  color:var(--dark-green);
  display:flex;
  align-items:center;
}
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

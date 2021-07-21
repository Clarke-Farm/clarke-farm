<template>
  <div class="page-container">
  <router-view />
  </div>
</template>

<style>
:root{
  --dark-green: #045C44;
  --mono-dark-green: #068D68;
  --smoky-white: #f5f5f5;
  --black90: rgba(20,20,20,0.9);
  --black60: rgba(0,0,0,0.6);
  --blue-ink:#2c3e50;
}
* {
  box-sizing: border-box;
  font-family: "Roboto";
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/Roboto-Regular.ttf");
}
@font-face {
  font-family: "Playfair";
  src: url("./assets/PlayfairDisplay-Regular.ttf");
}
body {
  margin: 0;
}
.unselectable{
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--blue-ink);
  position:relative;
}
.page-container{
  min-height:100vh;
  max-width: 1280px;
  margin:0 auto;
  background-color:var(--smoky-white);
}
@media screen and (max-width:1280px){
  .page-container{
    width:100vw;
  }
}
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

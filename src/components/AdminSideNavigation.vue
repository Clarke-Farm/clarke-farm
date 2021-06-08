<template>
<!-- eslint-disable max-len -->
  <div class="nav-container">
    <div class="logo">
      <h4>Clarke Farm</h4>
    </div>
    <ul>
      <li>
        <router-link to="/admin/dashboard"><span> <fa icon="home"/></span> &ensp;Home</router-link>
      </li>
       <li>
        <router-link to="/admin/booking"> <span><fa icon="book"/></span>  &ensp;Booking</router-link>
      </li>
       <li>
        <router-link to="/admin/reviews"><fa icon="comments"/>&ensp;User Review</router-link>
      </li>
       <li>
        <router-link to="/admin/settings/activities"><fa icon="cog"/> &ensp;Settings</router-link>
      </li>
      <li>
        <router-link to="/admin" class="logout"><fa icon="sign-out"/> &ensp;Logout</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminSideNavigation',
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 100%;
  background-color: #068d68;
  margin:auto;
}
.nav-container ul {
  padding-left: 0;
  margin-top: 0vh;
  height: 50vh;

}
.nav-container li {
  list-style-type: none;
  margin-top: 5px;
  text-align: left;

}
a {
  color: #ffffff;
  padding-left: 30px;
  text-decoration: none;
  height: 14px;
  display: flex;
  align-items: center;
  padding:20px;
}
/* a:active{
  background-color: #f5f5f5;
  color: #068d68;
}
a:hover {
  transform: scale(0.95);
} */
.router-link-active {
 color: #068d68;
 background-color:#f5f5f5;

}
.router-link-active:hover{
   color: #068d68;
    background-color:#f5f5f5;
     transform: scale(1);
}

.logo{
  width: 100%;
  height: 6%;
  color: #ffffff;
  font-size: 25px;
  font-family: 'Playfair Display';
  margin:10%;
  padding:2%;
}
router-link{
    color: #ffffff;

}
.logout{
   margin-top: 50vh;
}

</style>

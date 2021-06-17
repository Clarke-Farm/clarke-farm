<template>
<!-- eslint-disable max-len -->
      <div class="row">
        <div class="navigation">
       <ul>
         <!-- /admin/dashboard/incoming-guests -->
        <li class=""><router-link to="/admin/dashboard">Incoming Guests</router-link></li>
        <li><router-link to="/admin/dashboard/reviews">Reviews</router-link></li>
        <li><router-link to="/admin/dashboard/coffee-requests">Coffee Requests</router-link></li>
      </ul>
    </div>
      </div>
</template>
<script>

export default {
  name: 'HomeTopNav',
  components: {
  },

};
</script>
<style scoped>
.navigation ul{
    display: flex;
  }
  .navigation{
       justify-content: center;
       margin-left:30%;
  }
.navigation li{
  list-style-type: none;
  min-width:150px;
  height:30px;
  margin-right: 0px;
  /* background-color: rgba(0, 0, 0, 0.3); */
  border: 1px solid #f4f4f4f4;
}
.navigation a:hover{
  background-color: #068d68;
  color:#ffffff;
}
.navigation a{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width:100%;
  height:100%;
  color: rgb(0, 0, 0) ;
}
a.active-nav{
  background-color: #068d68;;
  color:white;
}
 a.router-link-active{
  background-color: #068d68;;
  color:white;
}

.router-link-active{
   background-color: #068d68;
  color:white;
  cursor: pointer;
}
 table{
  padding:5px;
  margin-left:10px;
}
th{
    padding:10px;
    vertical-align: middle;
     text-align: center;
}
td{
    text-align: center;
    font-family: 'Roboto';
    font-size:14px;
}
table,td,th{
     font-family: 'Roboto';
}

</style>

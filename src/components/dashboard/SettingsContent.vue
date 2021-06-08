<template>
<!-- eslint-disable max-len -->
    <div class="container">
      <div class="row">
        <div class="navigation">
       <ul>
        <li> <router-link to="/admin/settings/activities">Activities</router-link></li>
        <li><router-link to="/admin/settings/accommodation">Accomodation</router-link></li>
        <li><router-link to="/admin/settings/coffee">Coffee Process</router-link></li>
        <li><router-link to="/admin/settings/training-program">Training Program</router-link></li>
      </ul>
    </div>
      </div>
    </div>
</template>
<script>

export default {

};
</script>
<style scoped>
 ul{
    display: flex;
  }
  .navigation{
       justify-content: center;
       margin-left:25%;
  }
 .navigation li{
  list-style-type: none;
  min-width:150px;
  height:30px;
  margin-right: 0px;
  border: 1px solid #f4f4f4;
}
.action li{
   min-width:40px;
  height:30px;
}
.action ul{
  list-style-type: none;
  /* position: absolute; */
 color: rgba(0, 0, 0, 0.5);
  border: none;
  margin-left:8%;

}

.navigation a:hover{
  background-color: #068d68;
   color:white;
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
 table{
  width:1000px;
  padding:5px;
  margin-top:3%;
  margin-left:10%;
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
    padding:10px;
    word-wrap: break-word;
}
table,td,th{
     font-family: 'Roboto';
}
img{
  width:150px;
   height:100px;
}
span{
 color: rgba(0, 0, 0, 0.5);
   font-size:17px;
}
span:hover{
  color: #068d68;
}
.del span:hover{
  color:red;
}
hr{
   margin-left: 9%;
  width:1050px;
}

</style>

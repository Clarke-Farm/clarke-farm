<template>
  <div class="top-row">
    <div class="col-8">
      <h3>{{ heading }}</h3>
      <h6>Welcome {{user}},</h6>
    </div>
   <div class="col-4">
     <ul>
      <li>
        <span> <fa icon="bell"/></span> &ensp;&ensp;
      </li>
       <li>
        <span><fa icon="user"/></span>
      </li>
    </ul>
   </div>
   <hr>
   <!-- <h5>Notifications</h5> -->
  </div>
</template>
<script>
export default {
  name: 'AdminHeading',
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: 'Admin',
    };
  },
};
</script>

<style scoped>
.top-row{
  width: 100%;
  margin-left: 40px;
  padding: 10px;
}
h3{
  color:#045C44;
  margin-left:0px;

}

ul{
  list-style-type: none;
 float: right;
  color: #068d68;
  font-size: 20px;
  display:flex;
  text-align: end;
}
li{
align-items: flex-end;
margin-left: 20px;
}

h5{
  color:#045C44;
}
span{
   color:#045C44;
}
hr{
  width: 100%;
}
</style>

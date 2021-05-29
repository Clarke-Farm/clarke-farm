<template>
<!-- eslint-disable max-len -->
    <div class="table-settings">
         <table class="table table-striped align-middle">
        <thead class="align-middle ">
          <th></th>
          <th>Activity Name</th>
          <th>Image</th>
          <th>Activity Description</th>
        </thead>
        <tbody>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{activity1.name}}</td>
                <td> <img src="@/assets/images/motocross1.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{activity1.description}}</td>
            </tr>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{activity2.name}}</td>
                <td> <img src="@/assets/images/bouldering3.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{activity2.description}}</td>
            </tr>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{activity3.name}}</td>
                <td> <img src="@/assets/images/coffeetasting1.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{activity3.description}}</td>
            </tr>
        </tbody>
     </table>
    </div>
</template>
<script>
export default {
  data() {
    return {

      activity1: {
        name: 'Biking',
        image: '@/assets/images/motocross1.jpg',
        description: 'Rent a bicycle and challenge yourself on smooth and rough terrain.',
      },
      activity2: {
        name: 'Bouldering',
        image: '@/assets/images/bouldering3.jpg',
        description: 'Walk to the top of our boulders and enjoy beautiful sunsets..',
      },
      activity3: {
        name: 'Coffee Tasting',
        image: '@/assets/images/coffeetasting1.jpg',
        description: 'Fresh roasted robusta coffee. It\'s our pride and joy..',
      },
    };
  },
};
</script>
<style scoped>
table{
  width:1000px;
  padding:5px;
  margin-top:0%;
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
</style>

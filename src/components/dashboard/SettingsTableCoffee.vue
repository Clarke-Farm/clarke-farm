<template>
<!-- eslint-disable max-len -->
    <div class="table-settings">
         <table class="table table-striped align-middle">
        <thead class="align-middle ">
          <th></th>
          <th> Coffee Process</th>
          <th>Image</th>
          <th> Description</th>
        </thead>
        <tbody>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{coffeeprocess1.name}}</td>
                <td> <img src="@/assets/images/mother-garden.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{coffeeprocess1.description}}</td>
            </tr>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{coffeeprocess2.name}}</td>
                <td> <img src="@/assets/images/cherry-picking.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{coffeeprocess2.description}}</td>
            </tr>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{coffeeprocess3.name}}</td>
                <td> <img src="@/assets/images/wet-processing.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{coffeeprocess3.description}}</td>
            </tr>
            <!-- <tr class="table-hover">
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
            </tr> -->
        </tbody>
     </table>
    </div>
</template>
<script>
export default {
  data() {
    return {

      coffeeprocess1: {
        name: 'Mother Garden',
        image: '@/assets/images/mother-garden.jpg',
        description: 'Our mother garden consists of a variety of coffee seedlings. We have all 7 lines of coffee wilt disease resistant varieties and the traditional clones A-F.',
      },
      coffeeprocess2: {
        name: 'Cherry Picking',
        image: '@/assets/images/cherry-picking.jpg',
        description: 'Our mother garden consists of a variety of coffee seedlings. We have all 7 lines of coffee wilt disease resistant varieties and the traditional clones A-F.',
      },
      coffeeprocess3: {
        name: 'Wet Washing',
        image: '@/assets/images/wet-processing.jpg',
        description: 'Our mother garden consists of a variety of coffee seedlings. We have all 7 lines of coffee wilt disease resistant varieties and the traditional clones A-F.',
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

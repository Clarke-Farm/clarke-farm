<template>
<!-- eslint-disable max-len -->
    <div class="table-settings">
         <table class="table table-striped align-middle">
        <thead class="align-middle ">
          <th></th>
          <th>Accommodation Type</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
        </thead>
        <tbody>
            <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{ accommodation1.name}}</td>
                <td> <img src="@/assets/images/container-house.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{ accommodation1.description}}</td>
                <td>{{ accommodation1.price}}</td>
            </tr>
             <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{ accommodation2.name}}</td>
                <td> <img src="@/assets/images/camping-tent.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{ accommodation2.description}}</td>
                <td>{{ accommodation2.price}}</td>
            </tr>
              <tr class="table-hover">
                <td><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"></div></td>
                <td>{{ accommodation2.name}}</td>
                <td> <img src="@/assets/images/cottages.jpg" alt="biking" aria-hidden="true"></td>
                <td>{{ accommodation2.description}}</td>
                <td>{{ accommodation2.price}}</td>
            </tr>
        </tbody>
     </table>
    </div>
</template>
<script>
export default {
  data() {
    return {

      accommodation1: {
        name: 'Container House',
        description: 'Rent a bicycle and challenge yourself on smooth and rough terrain.',
        price: '$300 per person',
      },
      accommodation2: {
        name: 'Camping Tents',
        description: 'Rent a bicycle and challenge yourself on smooth and rough terrain.',
        price: '$100 per tent',
      },
      accommodation3: {
        name: 'Camping Tents',
        description: 'Rent a bicycle and challenge yourself on smooth and rough terrain.',
        price: '$200 per tent',
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

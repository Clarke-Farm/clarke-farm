<template>
<!-- eslint-disable max-len -->
   <div class="row ">
     <div class="review ">
       <table class="table">
          <tr>
           <td><input type="checkbox" class="custom-checkbox custom-control-input"></td>
           <td>
             <span>MERCY WAMANGA</span><br>
                  <span class="text-muted">January 2021</span><br>
                  <span class="icon"><fa icon="star"/> <fa icon="star"/> <fa icon="star"/>  <fa icon="star"/> <fa icon="star"/></span><br>
                  <strong>Bouldering and hilltop views were awesome</strong>
                  <p>The highlight of my stay at the farm was the jeep rides
            The highlight of my stay at <br> the farm was the jeep rides
            The highlight of my stay at the farm was the jeep rides</p>
           </td>
             <a class="btn btn-danger bg-danger btn-sm light mt-5" @click="confirmDialog">DELETE</a>
         </tr>
       </table>
     </div>

   </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    confirmDialog() {
      this.$swal({
        title: 'Are you sure?',
        text: 'You can\'t revert this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$swal('Deleted', 'Review has been Permanently deleted', 'success');
        } else {
          this.$swal('Cancelled', 'Your file is still intact', 'info');
        }
      });
    },
  },
};
</script>
<style scoped>

td{
   /* border:1px solid green; */
    vertical-align: top;
    padding-left: 5%;
    margin:0px;
}
p{
  font-size:14px;
   color: rgba(0, 0, 0, 0.7);

}
.icon{
  color:#068d68;
}
tr{
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10%;
}

</style>

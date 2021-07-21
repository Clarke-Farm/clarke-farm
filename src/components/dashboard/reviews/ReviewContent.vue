<template>
    <div class="content-container container-fluid" >
        <h5 class="mt-3">Reviews</h5>
        <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">User Reviews</li>
            </ol>
        </nav>
        <hr>
          <div class="review ">
       <table class="table">
          <tr>
           <input type="checkbox" class="custom-checkbox custom-control-input">
           <td>
             <span>MERCY WAMANGA</span><br>
                  <span class="text-muted">January 2021</span><br>
                  <span class="icon"><fa icon="star"/>
                   <fa icon="star"/> <fa icon="star"/>
                     <fa icon="star"/> <fa icon="star"/></span><br>
                  <strong>Bouldering and hilltop views were awesome</strong>
                  <p>The highlight of my stay at the farm was the jeep rides
            The highlight of my stay at <br> the farm was the jeep rides
            The highlight of my stay at the farm was the jeep rides</p>
           </td>
             <a class="btn btn-danger  btn-sm text-white mt-5" @click="confirmDialog">DELETE</a>
         </tr>
       </table>
     </div>
    </div>
</template>
<style scoped>
h5,h3{
    color:rgb(53, 53, 85)
}

a{
    text-decoration: none;
    color: #068d68;
}
a:hover{
    color:rgb(53, 53, 85)
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
  margin: 10px;
}
td{
    color:rgb(53, 53, 85)
}
</style>
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
          this.$swal('Cancelled', 'Review is still available', 'info');
        }
      });
    },
  },
};
</script>

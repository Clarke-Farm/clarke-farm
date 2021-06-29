<template>
<div class="pagination">

  <div class="pagination-text">
      <span>
    Page {{currentPage}} of {{totalPages}}
  </span>
  </div>
   <div class="nav-button position-absolute bottom-0 end-0">
    <button class="">&lt;</button>
    <button class="">&gt;</button>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 2,
    };
  },
};
</script>
<style scoped>
.pagination-text{
  left:0px;
   padding:5px;
     color:rgba(0,0,0,0.3);
     font-size:13px;
}
.nav-button{
  margin-right:0px;
  padding:5px;
}

.pagination{
  width:700px;
}
.nav-button button{
  width:50px;
  font-size:13px;
  color:rgba(0,0,0,0.3);
  border:1px solid #f4f4f4;
}

</style>

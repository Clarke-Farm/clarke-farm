<template>
  <div class="mt-4">
    <div id="add-button">
   <a  class="btn btn-success btn-sm float-end" href="#" data-bs-toggle="modal" data-bs-target="#Food_ID">
      Add Food
    </a>
 </div>
    <!-- Modal -->
    <div class="modal fade" tabindex="-1" id="Food_ID">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Food</h5>
            <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div class="modal-body">
              <form class="form-group" @submit.prevent="submitFoodObject">
              <div class="mb-3 form-group">
                <label for="title">Dish title</label>
                <input type="text" class="form-control" name="title" id="title" v-model="title">
              </div>
              <div class="mb-3 form-group">
                <label for="description">Describe the dish in brief</label>
                <input type="text" class="form-control" name="description"
                id="description" v-model="description">
              </div>
              <div class="mb-3 form-group">
                  <label for="currency">Currency</label>
                  <select name="currency" class="form-select" id="currency" v-model="currency">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                   </div>
                 <div class="mb-3 form-group">
                  <label for="cost">Cost of food</label>
                  <input type="text" class="form-control" name="cost" id="cost" v-model="cost">
              </div>
              <div class="mb-4 form-group">
                 <label class="form-label"  for="image">Upload image</label>
                <input type="file"  class="form-control form-control-md" name="image" id="image"
                ref="file" @change="onFileChange">
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-success">Submit Data</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>
       <div class="div-table mt-4">
      <table class="table bg-white mt-3">
  <thead  id="bg-color">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col" >Description</th>
      <th scope="col">Cost</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="foods in allFoods" :key="foods.id" class="mt-3">
      <td>
         <img :src="foods.filename" aria-hidden="true">
      </td>
      <td class="title">{{foods.title}}</td>
       <td class="description">{{foods.description}}</td>
       <td class="price">{{foods.currency}}{{foods.cost}}</td>
        <td class="actions">
          <a href="#"  class="btn text-secondary  btn-sm"
          role="button" aria-pressed="true">
            <fa icon="edit" /></a>
          <a href="#" class="btn text-danger btn-sm edit" role="button" aria-pressed="true"><fa icon="trash" /></a>
         </td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FoodModal',
  created() {
    this.fetchAllFoods();
  },
  data() {
    return {
      title: '',
      description: '',
      currency: '$',
      cost: '0.00',
      file: '',
    };
  },
  computed: mapGetters(['allFoods']),
  methods: {
    ...mapActions(['fetchAllFoods']),
    onFileChange() {
      this.file = this.$refs.file.files[0];
    },
    createFoodObject() {
      const inputData = {
        title: this.title,
        description: this.description,
        currency: this.currency,
        cost: this.cost,
        file: this.file,
      };
      const formData = new FormData();
      for (const [key, value] of Object.entries(inputData)) {
        formData.append(key, value);
      }
      return formData;
    },
    submitFoodObject() {
      const food = this.createFoodObject();
      this.$store.dispatch('saveFood', food);
      this.title = '';
      this.description = '';
      this.currency = '$';
      this.cost = '0.00';
      this.file = '';
    },
  },

};
</script>

<style scoped>
.mb-5{
  margin-bottom: 5px;
}
.description{
  max-width:150px;
}
#bg-color{
  background-color: #f4f4f4;
  color:rgba(0,0,0,0.6);

}

td{
  font-size:15px;
  color: #6c757d;
}
.title{
  max-width:50px;
}

.price{
  max-width:10px;
}

.actions{
   max-width:20px;
}

.edit{
  color:rgba(20,20,20,0.7);
}
</style>

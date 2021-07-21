<template>
  <div class="mt-3">
    <div id="add-button">
   <a  class="btn btn-success btn-sm float-end" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Activity
    </a>
 </div>
    <!-- Modal -->
    <div class="modal fade" tabindex="-1" id="exampleModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Activity</h5>
            <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitActivityObject" class="form-group">
              <div class="mb-3 form-group">
                <label for="title">Activity title</label>
                <input type="text" class="form-control" name="title" id="title" v-model="title">
              </div>
              <div class="mb-3 form-group">
                <label for="description">Describe the activity in brief</label>
                <input type="text" class="form-control" name="description"
                id="description" v-model="description">
              </div>
              <div class="mb-2 form-group ">
                <label for="Priced" class="form-check-label" >Is the activity priced?</label><br>
                <input type="radio" class="form-check-input"
                name="priced" value="Yes" v-model="priced"> Yes
                <input type="radio" class="form-check-input" name="priced" value="No"
                 checked v-model="priced"> No
              </div>
              <div class="mb-2 form-group">
                <span class="mb-2" v-if="priced=='Yes'">
                  <label for="currency">Currency</label>
                  <select name="currency" class="form-select" id="currency" v-model="currency">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                </span><br>
                <span class="mb-3"  v-if="priced=='Yes'">
                  <label for="cost">Cost of activity</label>
                  <input type="text" class="form-control" name="cost" id="cost" v-model="cost">
                </span>
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
    <tr  v-for="activities in allActivities" :key="activities.id" class="mt-3">
      <td>
         <img :src="activities.filename" aria-hidden="true">
      </td>
      <td class="title">{{activities.title}}</td>
       <td class="description">{{activities.description}}</td>
       <td class="price">{{activities.currency}}{{activities.cost}}</td>
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
  name: 'ActivityModal',
  created() {
    this.fetchAllActivities();
  },
  data() {
    return {
      title: '',
      description: '',
      priced: 'No',
      currency: '$',
      cost: '0.00',
      file: '',
    };
  },
  computed: mapGetters(['allActivities']),
  methods: {
    ...mapActions(['fetchAllActivities']),
    onFileChange() {
      this.file = this.$refs.file.files[0];
    },
    createActivityObject() {
      const inputData = {
        title: this.title,
        description: this.description,
        priced: this.priced,
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
    submitActivityObject() {
      const activity = this.createActivityObject();
      this.$store.dispatch('saveActivity', activity);
      this.title = '';
      this.description = '';
      this.priced = 'No';
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

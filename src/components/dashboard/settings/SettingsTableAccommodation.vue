<template>
  <div class="mt-4">
    <div id="add-button">
   <a  class="btn btn-success btn-sm float-end" href="#" data-bs-toggle="modal" data-bs-target="#Accommodation_ID">
      Add Accommodation
    </a>
 </div>
    <!-- Modal -->
    <div class="modal fade" tabindex="-1" id="Accommodation_ID">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Accommodation</h5>
            <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="submitAccomodationObject">
              <div class="mb-3 form-group">
                <label for="title">Accommodation title</label>
                <input type="text" class="form-control" name="title" id="title" v-model="title">
              </div>
              <div class="mb-3 form-group">
                <label for="description">Describe the accommodation in brief</label>
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
                  <label for="cost">Cost of accommodation</label>
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
    <tr  v-for="accomodations in allAccomodations" :key="accomodations.id" class="mt-3">
      <td>
         <img :src="accomodations.filename" aria-hidden="true">
      </td>
      <td class="title">{{accomodations.title}}</td>
       <td class="description">{{accomodations.description}}</td>
       <td class="price">{{accomodations.currency}}{{accomodations.cost}}</td>
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
  name: 'AccomodationModal',
  created() {
    this.fetchAllAccomodations();
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
  computed: mapGetters(['allAccomodations']),
  methods: {
    ...mapActions(['fetchAllAccomodations']),
    onFileChange() {
      this.file = this.$refs.file.files[0];
    },
    createAccomodationObject() {
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
    submitAccomodationObject() {
      const accomodation = this.createAccomodationObject();
      this.$store.dispatch('saveAccomodation', accomodation);
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

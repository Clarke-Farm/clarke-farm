<template>
  <div class="mt-4">
    <div id="add-button">
   <a  class="btn btn-success btn-sm float-end" href="#" data-bs-toggle="modal" data-bs-target="#training_ID">
      Add Training Program
    </a>
 </div>
    <!-- Modal -->
    <div class="modal fade" tabindex="-1" id="training_ID">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Training Program</h5>
            <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div class="modal-body">
            <form class="form-group">
              <div class="mb-3 form-group">
                <label for="title">Training Program title</label>
                <input type="text" class="form-control" name="title" id="title" v-model="title">
              </div>
              <div class="mb-3 form-group">
                <label for="description">Describe the training program in brief</label>
                <input type="text" class="form-control" name="description"
                id="description" v-model="description">
              </div>
              <div class="mb-2 form-group ">
                <label for="Priced" class="form-check-label" >Is the training program priced?</label><br>
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
                  <label for="cost">Cost of training</label>
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
  </div>
</template>

<script>
export default {
  name: 'ActivityModal',
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
};
</script>

<style scoped>
.mb-5{
  margin-bottom: 5px;
}
</style>

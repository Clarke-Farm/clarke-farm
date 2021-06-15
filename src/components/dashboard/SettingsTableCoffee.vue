<template>
<!-- eslint-disable max-len -->
<div>
   <div class="action">

            <a href="#" class="btn btn-sm text-white " type="button" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Add Coffee Process</a>
               <!-- Modal -->
    <div class="modal fade" tabindex="-1"  id="exampleModal">
   <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Coffee Process Step</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <input type="file" ref="file" @change="onSelect" />
        <h6>{{ message }}</h6>

         <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="filename"
            v-model="processcoffee.filename"
          /></div> <br>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="coffee process step"
            v-model="processcoffee.step"
          />
        </div>
          <br>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="description"
            v-model="processcoffee.description"
            required
          />
        </div>
         <br>

         <div class="modal-footer">
        <button  class="btn btn-success">Save changes</button>
      </div>
        </form>
      </div>
    </div>
     </div>
  </div>
      </div>
    <div class="table-settings">
         <table class="table table-striped table-bordered">
        <thead class="align-middle ">
          <th>Step</th>
          <th>Image</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr v-for="processcoffee in  coffeeprocessList" :key="processcoffee._id">
            <td>{{processcoffee.step }}</td>
             <td>
              <img
              :src="require('../../../backend/uploads/' + processcoffee.filename + '.jpg')" alt="activity"/>
              </td>
            <td id="td-description">{{processcoffee.description}}</td>
            <td>
              <a style="color: #068d68"><fa icon="edit" /></a>
              <a href=""
                ><fa
                  icon="trash"
                  style="
                    float: right;
                    margin-left: 35px;
                    margin-top: -20px;
                    color: red;
                  "
              /></a>
            </td>
          </tr>
        </tbody>
     </table>
    </div>
</div>
</template>
<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'SettingsTableActivities',
  data() {
    return {
      coffeeprocessList: [],
      processcoffee: {
        filename: '',
        step: '',
        description: '',
      },
    };
  },
  created() {
    // const endpoint = '/activities';
    axios
      .get('http://localhost:3000/coffee-processes')
      .then((res) => {
        this.coffeeprocessList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append('file', this.file);
      // Form1
      const endpoint1 = '/uploads';
      try {
        await axios.post(api + endpoint1, formData);
        this.message = 'uploaded file successfully';
      } catch {
        this.message = 'file not uploaded';
      }
      // Form2
      const endpoint2 = '/coffee-processes/add';
      axios
        .post(api + endpoint2, this.processcoffee)
        .then(() => {
          // this.$router.push('/list-activities');
          this.processcoffee = {
            filename: '',
            step: '',
            description: '',
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
table{
  padding:0px;
  margin-top:30px;
  margin-left:70px;
}
th{
    padding:5px;
    vertical-align:left;
     text-align: left;
}
td{
    text-align: center;
    font-family: 'Roboto';
    font-size:14px;
    padding:0px;
}
table,td,th{
     font-family: 'Roboto';
}
img{
  width:150px;
   height:100px;
}
 ul{
    display: flex;
  }
.action{
   min-width:40px;
  height:30px;
  float:right;
  background-color: #068d68;
  margin-bottom: 10px;
  margin-right: 0px;
}
</style>

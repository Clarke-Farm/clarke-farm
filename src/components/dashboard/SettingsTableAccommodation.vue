<template>
<!-- eslint-disable max-len -->
<div>
  <div class="action">
           <a href="#" class="btn btn-sm text-white " type="button" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Add Accommodation</a>
               <!-- Modal -->
    <div class="modal fade" tabindex="-1"  id="exampleModal">
   <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Accommodation</h5>
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
            v-model="accommodation.filename"
          /></div> <br>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Accommodation Type"
            v-model="accommodation.accommodationtype"
          />
        </div>
          <br>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="description"
            v-model="accommodation.description"
            required
          />
        </div>
         <br>
         <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="fee"
            v-model="accommodation.fee"
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
          <th>Accommodation Type</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
           <tr v-for="accommodation in accommodationList" :key="accommodation._id">
            <td>{{accommodation.accommodationtype }}</td>
             <td>
              <img
              :src="require('../../../backend/uploads/' + accommodation.filename + '.jpg')" alt="activity"/>
              </td>
            <td id="td-description">{{ accommodation.description}}</td>
            <td>{{accommodation.fee}}</td>
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
  name: 'SettingsTableAccommodation',
  data() {
    return {
      accommodationList: [],
      accommodation: {
        filename: '',
        accommodationtype: '',
        description: '',
        fee: '',
      },

    };
  },
  created() {
    // const endpoint = '/activities';
    axios
      .get('http://localhost:3000/accommodations')
      .then((res) => {
        this.accommodationList = res.data;
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
      const endpoint2 = '/accomodations/add';
      axios
        .post(api + endpoint2, this.accommodation)
        .then(() => {
          // this.$router.push('/list-activities');
          this.accommodation = {
            filename: '',
            accommodationtype: '',
            description: '',
            fee: '',
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
  margin-top : 30px;
  margin-left:70px;
}

th{
    padding:5px;
    vertical-align:left;
     text-align: left;
      /* border:1px solid blue; */
}
td{
    text-align: center;
    font-family: 'Roboto';
    font-size:14px;
    padding:0px;
     /* border:1px solid blue; */
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

  hr{
  margin-left: 7%;
  width:1060px;
}
</style>

<template>
<!-- eslint-disable max-len -->
<div>
   <div class="action">
          <ul>
            <li><a href="#" class="btn-sm" role="button" data-bs-toggle="modal"
          data-bs-target="#exampleModal"><span> <fa icon="plus"/></span></a></li>
            <li><a href="#" class="btn-sm" role="button"><span> <fa icon="edit"/></span></a></li>
            <li><a href="#" class="btn-sm del" role="button"><span> <fa icon="trash"/></span></a></li>
          </ul>
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
            placeholder="training program title"
            v-model="training.programtitle"
          />
        </div>
          <br>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="description"
            v-model="training.description"
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
       <hr>
    <div class="table-settings">
         <table class="table table-striped align-middle">
        <thead class="align-middle ">
          <th></th>
          <th>Activity Name</th>
          <th>Image</th>
          <th>Activity Description</th>
          <th>Price</th>
        </thead>
        <tbody>
        </tbody>
     </table>
    </div>
</div>
</template>
<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'SettingsTableTraining',
  data() {
    return {
      training: {
        programtitle: '',
        description: '',
      },
    };
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
      const endpoint2 = '/activities/add';
      axios
        .post(api + endpoint2, this.processcoffee)
        .then(() => {
          // this.$router.push('/list-activities');
          this.training = {
            programtitle: '',
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
 ul{
    display: flex;
  }
.action li{
   min-width:40px;
  height:30px;
}
.action ul{
  list-style-type: none;
 color: rgba(0, 0, 0, 0.5);
  border: none;
  margin-left:8%;

}
.action{
  margin-bottom: 0%;
}
span{
 color: rgba(0, 0, 0, 0.5);
   font-size:17px;
}
span:hover{
  color: #068d68;
}
.del span:hover{
  color:red;
}
 hr{
     margin-left: 9%;
  width:1050px;
  margin-top: 0px;
   bottom:0px;
}
</style>

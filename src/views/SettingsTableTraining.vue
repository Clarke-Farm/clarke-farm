<template>
  <div>
    <!-- BACK TO SETTINGS -->
    <router-link to="/settings"
      ><a href="#">
        <li><fa icon="cog" /><span>Settings</span></li></a
      >
    </router-link>
    <!-- MODAL -->
    <a
      href="#"
      class="btn btn-sm text-white add mb-3"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      >Add Training Program</a
    >
    <!-- MODAL CONTENTS -->
    <div class="modal fade" tabindex="-1" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Training Program</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <input type="file" ref="file" @change="onSelect" />
              <br /><br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="filename"
                  v-model="training.fileName"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="description"
                  v-model="training.description"
                  required
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="fee"
                  v-model="training.fee"
                  required
                />
              </div>
              <br />

              <div class="modal-footer">
                <button class="btn btn-success">Save changes</button>
              </div>
              <!-- RESPONSE ON SAVE -->
              <em>{{ message }}</em>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- DATA TABLE -->
    <!-- VERTICAL TABLE -->
    <table
      class="table table-striped table-hover table-bordered"
      v-for="training in trainingList"
      :key="training._id"
    >
      <tr>
        <th>
          <img
            :src="
              require('../../backend/uploads/' + training.fileName + '.jpg')
            "
            alt="training"
          />
        </th>
        <td>
          {{ training.fileName }}<br />
          {{ training.description }}<br />
          {{ training.fee }}<br /><br />
          <router-link
            :to="{ name: 'EditTraining', params: { id: training._id } }"
            class="edit"
            ><!-- EDIT ICON -->
            <fa icon="edit" />
          </router-link>
          <a href="" @click.prevent="deleteTraining(training._id)"
            ><!-- DELETE ICON -->
            <fa icon="trash" style="color: red" />
          </a>
        </td>
      </tr>
      <!-- RESPONSE ON DELETE -->
      <em>{{ message }}</em>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'TrainingSettings',
  data() {
    return {
      trainingList: [],
      training: {
        fileName: '',
        programTitle: '',
        description: '',
        fee: '',
      },
    };
  },

  // READ OPERATION
  created() {
    const endpoint = '/trainings';
    axios
      .get(api + endpoint)
      .then((res) => {
        this.trainingList = res.data;
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

    // CREAT OPERATION
    async onSubmit() {
      const formData = new FormData();
      formData.append('file', this.file);
      // Endpoints
      const endpoint1 = '/uploads';
      const endpoint2 = '/trainings/add';
      try {
        // UPLOAD FILE TO STORAGE DIRECTORY
        await axios.post(api + endpoint1, formData);

        // UPLOAD DATA TO DATABASE
        await axios.post(api + endpoint2, this.training);
        this.training = {
          fileName: '',
          programTitle: '',
          description: '',
          fee: '',
        };
        this.message = 'File and data uploaded successfully.';
      } catch {
        this.message = 'Failed to upload! Please, try again.';
      }
    },

    // DELETE OPERATION
    async deleteTraining(id) {
      const endpoint = `/delete-training/${id}`;
      try {
        await axios.get(api + endpoint).then(() => {
          // eslint-disable-next-line no-underscore-dangle
          this.trainingList.splice(
            // eslint-disable-next-line no-underscore-dangle
            this.trainingList.findIndex((i) => i._id === id),
            1,
          );
        });
        this.message = 'Training deleted successfully.';
      } catch {
        this.message = 'Failed to Delete! Please try again.';
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  padding: 10px;
}

span {
  padding: 10px;
}

.add {
  float: right;
  background-color: #068d68;
  margin-right: 10px;
}

img {
  width: 150px;
  height: auto;
}

table {
  margin: 0 auto;
  font-size: 10pt;
}

th {
  font-weight: lighter;
  color: white;
  width: 150px;
}

td {
  width: auto;
}

.edit {
  padding-left: 0px;
}
</style>

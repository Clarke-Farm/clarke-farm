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
      >Add Accommodation</a
    >
    <!-- MODAL CONTENTS -->
    <div class="modal fade" tabindex="-1" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Accommodation</h5>
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
                  v-model="accommodation.fileName"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="description"
                  v-model="accommodation.description"
                  required
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="fee"
                  v-model="accommodation.fee"
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
      v-for="accommodation in accommodationList"
      :key="accommodation._id"
    >
      <tr>
        <th>
          <img
            :src="
              require('../../backend/uploads/' +
                accommodation.fileName +
                '.jpg')
            "
            alt="accommodation"
          />
        </th>
        <td>
          {{ accommodation.fileName }}<br />
          {{ accommodation.description }}<br />
          {{ accommodation.fee }}<br /><br />
          <router-link
            :to="{ name: 'EditAccommodation', params: { id: accommodation._id } }"
            class="edit"
            ><!-- EDIT ICON -->
            <fa icon="edit" />
          </router-link>
          <a href="" @click.prevent="deleteAccommodation(accommodation._id)"
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
  name: 'AccommodationSettings',
  data() {
    return {
      accommodationList: [],
      accommodation: {
        fileName: '',
        description: '',
        fee: '',
      },
    };
  },
  created() {
    const endpoint = '/accommodations';
    axios
      .get(api + endpoint)
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
    // CREAT OPERATION
    async onSubmit() {
      const formData = new FormData();
      formData.append('file', this.file);
      // Endpoints
      const endpoint1 = '/uploads';
      const endpoint2 = '/accommodations/add';
      try {
        // UPLOAD FILE TO STORAGE DIRECTORY
        await axios.post(api + endpoint1, formData);

        // UPLOAD DATA TO DATABASE
        await axios.post(api + endpoint2, this.accommodation);
        this.accommodation = {
          fileName: '',
          description: '',
          fee: '',
        };
        this.message = 'File and data uploaded successfully.';
      } catch {
        this.message = 'Failed to upload! Please, try again.';
      }
    },

    // DELETE OPERATION
    async deleteAccommodation(id) {
      const endpoint = `/delete-accommodation/${id}`;
      try {
        await axios.get(api + endpoint).then(() => {
          // eslint-disable-next-line no-underscore-dangle
          this.accommodationList.splice(
            // eslint-disable-next-line no-underscore-dangle
            this.accommodationList.findIndex((i) => i._id === id),
            1,
          );
        });
        this.message = 'Accommodation deleted successfully.';
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

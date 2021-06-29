<template>
  <div>
    <!-- BACK TO SETTINGS -->
    <a href="/settings"
      ><li><fa icon="cog" /><span>Settings</span></li></a
    >
    <!-- FORM -->
    <form @submit.prevent="onUpdate" enctype="multipart/form-data">
      <img
        :src="
          require('../../backend/uploads/' + accommodation.fileName + '.jpg')
        "
        alt="accommodation"
      />
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
        <textarea
          rows="3"
          placeholder="description"
          v-model="accommodation.description"
          required
        >
        </textarea>
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
      <div class="btn-update">
        <button class="btn btn-success">Save changes</button>
      </div>
    </form>

    <!-- RESPONSE onUpdate -->
    <em>{{ message }}</em>
  </div>
</template>

<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'EditAccommodation',
  data() {
    return {
      accommodation: {},
    };
  },

  // Edit-icon onClick GETs this accommodation.
  created() {
    const endpoint = `/accommodation/${this.$route.params.id}`;

    axios.get(api + endpoint).then((res) => {
      this.accommodation = res.data;
    });
  },
  //
  methods: {
    async onUpdate() {
      // Update-button onClick, POSTs this accommodation.
      const endpoint = `/update-accommodation/${this.$route.params.id}`;
      try {
        await axios.post(api + endpoint, this.accommodation);
        this.message = 'Accommodation updated successfully.';
      } catch {
        this.message = 'Failed to Update! Please try again.';
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  text-align: center;
}

span {
  padding: 10px;
}

form {
  width: 300px;
  margin: 0 auto;
}

img {
  width: 300px;
  height: auto;
}

textarea {
  width: 100%;
  padding-left: 12.5px;
}

.btn-update {
  text-align: center;
}
</style>

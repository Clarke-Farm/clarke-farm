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
          require('../../backend/uploads/' + coffeeProcess.fileName + '.jpg')
        "
        alt="coffee process"
      />
      <br /><br />
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="filename"
          v-model="coffeeProcess.fileName"
        />
      </div>
      <br />
      <div class="form-group">
        <textarea
          rows="3"
          placeholder="description"
          v-model="coffeeProcess.description"
          required
        >
        </textarea>
      </div>
      <br />
      <div class="btn-update">
        <button class="btn btn-success">Save changes</button>
      </div>
    </form>

    <!-- RESPONSE onSave, onDelete -->
    <em>{{ message }}</em>
  </div>
</template>

<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'EditCoffee',
  data() {
    return {
      coffeeProcess: {},
    };
  },

  // Edit-icon onClick GETs this coffeeProcess.
  created() {
    const endpoint = `/coffee-process/${this.$route.params.id}`;

    axios.get(api + endpoint).then((res) => {
      this.coffeeProcess = res.data;
    });
  },
  //
  methods: {
    async onUpdate() {
      // Update-button onClick, POSTs this coffee-process.
      const endpoint = `/update-coffee-process/${this.$route.params.id}`;
      try {
        await axios.post(api + endpoint, this.coffeeProcess);
        this.message = 'Coffee Process updated successfully.';
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

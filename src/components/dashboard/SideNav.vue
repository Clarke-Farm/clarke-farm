<template>
  <!-- side navigation -->
  <div class="side-nav">
    <h4>CLARKE FARM</h4>
    <router-link to="/dashboard"
      ><a href="#">
        <li><fa icon="home" /><span>Home</span></li></a
      >
    </router-link>
    <router-link to="/bookings"
      ><a href="#">
        <li><fa icon="book-open" /><span>Bookings</span></li></a
      >
    </router-link>
    <router-link to="/reviews"
      ><a href="#">
        <li><fa icon="star" /><span>Reviews</span></li></a
      >
    </router-link>
    <router-link to="/settings"
      ><a href="#">
        <li><fa icon="cog" /><span>Settings</span></li></a
      >
    </router-link>
    <br /><br />
    <div class="logout">
      <button
        class="btn btn-outline-light"
        v-if="authenticated"
        v-on:click="logout()"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return { authenticated: false };
  },
  async created() {
    await this.isAuthenticated();
    this.$auth.authStateManager.subscribe(this.isAuthenticated);
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: 'isAuthenticated',
  },
  methods: {
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
    async logout() {
      await this.$auth.signOut();
    },
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
}

.side-nav {
  text-align: justify;
}

li {
  list-style-type: none;
  padding: 10px;
  color: white;
}

li:hover {
  background-color: white;
  color: #068d68;
  padding-left: 5px;
}

span {
  padding: 10px;
}

@media only screen and (min-width: 320px) and (max-width: 568px) {
  li {
    display: inline;
    padding: 5px;
    color: white;
    font-size: 11pt;
  }
}

.logout {
  text-align: center;
}

.logout
button {
  background-color: red;
}
</style>

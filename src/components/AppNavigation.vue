<template>
  <span>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click>
          <v-list-item-action>
            <v-icon>contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#41B883" dark>
      <v-app-bar-nav-icon black--text @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title to="/" class="font-weight-bold">{{appTitle}}</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="this.$store.getters.getUser">
        <h2>
          User
    
        </h2>
      </div>
      <div v-else>
        <h2>no user</h2>
      </div>
      <v-spacer></v-spacer>
      <div v-if="!isAuthenticated">
        <v-btn small flat to="/sign-in">SIGN IN</v-btn>
        <v-btn small color="green lighten-3" to="/sign-up">Signup</v-btn>
      </div>
      <div v-else>
        <v-btn small dark flat to="/profile">PROFILE</v-btn>
        <v-btn small dark flat to="/add-post">Add</v-btn>
        <v-btn flat small dark @click="logout">Logout</v-btn>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Cottage Foods",
      drawer: false,
      items: [{ title: "Home" }, { title: "Sign In" }, { title: "Sign Up" }]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    },
    logUser() {
      console.log(this.$store.getters.getUser);
    }
  }
};
</script>
<style scoped>
</style>
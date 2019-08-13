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
        <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="this.$store.getters.getUser">
        <h2>User</h2>
      </div>
      <div v-else>
        <h2>no user</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn flat to="/sign-in">SIGN IN</v-btn>
      <v-btn color="green lighten-3" to="/sign-up">Signup</v-btn>
      <v-btn flat to="/profile">PROFILE</v-btn>
      <v-btn flat to="/add-post">Add</v-btn>
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
  }
};
</script>
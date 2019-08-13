<template>
  <v-app id="app">
    <app-navigation></app-navigation>
    <v-content>
      <router-view />
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #050505;
}
</style>

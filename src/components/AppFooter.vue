<template>
  <v-footer id="footer" height="auto" color="#41B883">
    <v-layout row wrap justify-center>
      <v-btn v-for="link in links" :key="link" color="white" flat>{{ link }}</v-btn>
      <v-flex xs12 py-3 text-xs-center black--text>
        &copy;2018 —
        <strong class="text-center">Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>
<style scoped>
.text-center {
  color: black;
}
</style>
<template>
  <v-footer height="auto" color="indigo">
    <v-layout row wrap justify-center>
      <v-btn v-for="link in links" :key="link" color="white" flat>{{ link }}</v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
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
<template>
  <div class="home">
    <v-container v-if="this.$store.getters.getPosts && this.$store.getters.getPosts.length > 0">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>This is an Home page</h1>

      <v-form class="title">
        <v-select v-model="city" :items="cityItems" label="city" required></v-select>
        <v-btn @click="filter">Filter</v-btn>
      </v-form>

      <v-row class="d-flex justify-center">
        <div v-for="post in this.$store.getters.getPosts" :key="post.id">
          <v-col v-if="post.city == 'Austin'">
            <v-card dark elevation="13" max-width="320" class="mx-auto mg-3">
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-text>City: {{ post.city }}</v-card-text>
              <v-card-text>Phone: {{ post.phone }}</v-card-text>

              <v-btn
                x-small
                color="green"
                class="mb-2 white--text"
                :to="`/post-details/${post.id}`"
              >Details</v-btn>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  beforeCreate: function() {
    this.$store.dispatch("setPosts");
  },
  data() {
    return {
      city: null,
      cityItems: ["Austin", "San Marcos", "Roundrock"],
      selCity: "Austin"
    };
  },
  methods: {
    filter() {}
  }
};
</script>


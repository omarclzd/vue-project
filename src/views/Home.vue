<template>
  <div class="home">
    <v-container>
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>This is an Home page</h1>

      <div class="title">This are the posts...</div>
      <v-row
        class="d-flex justify-center"
        v-if="this.$store.getters.getPosts && this.$store.getters.getPosts.length > 0"
      >
        <div v-for="post in this.$store.getters.getPosts" :key="post.id">
          <v-col>
            <v-card dark elevation="13" max-width="320" class="mx-auto mg-3">
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-text>{{ post.phone }}</v-card-text>

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
    return {};
  }
};
</script>


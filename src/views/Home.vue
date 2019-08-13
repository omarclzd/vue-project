<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is an Home page</h1>

    <div class="title">This are the posts...</div>
    <div v-if="this.$store.getters.getPosts && this.$store.getters.getPosts.length > 0">
      <div v-for="post in this.$store.getters.getPosts" :key="post.id">
        <v-card max-width="344" class="mx-auto mg-3" outlined="true">
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.phone }}</v-card-text>
          <v-card-text>{{ post.desc }}</v-card-text>
          <v-btn small to="/post-details">Details</v-btn>
        </v-card>
      </div>
    </div>
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


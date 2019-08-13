<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is an Home page</h1>

    <div v-if="this.$store.getters.getPosts && this.$store.getters.getPosts.length > 0">
      <div class="title">This are the posts...</div>

      <div v-for="post in this.$store.getters.getPosts" :key="post.id">{{ post.title }}</div>
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


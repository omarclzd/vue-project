<template>
  <div class="postdetails">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>this is the post details page.</h1>
    <div v-if="this.$store.getters.getPosts">
      <div v-if="post.id">{{ post.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
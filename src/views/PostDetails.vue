<template>
  <div class="postdetails">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>this is the post details page.</h1>
    <div v-if="this.$store.getters.getPosts">
      <div v-for="post in this.$store.getters.getPosts" :key="post.id">
        <div v-if="post.id == postId">
          <v-card max-width="344" class="mx-auto" outlined="true">
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text>{{ post.phone }}</v-card-text>
            <v-card-text>{{ post.desc }}</v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postId: this.$route.params.id
    };
  }
};
</script>
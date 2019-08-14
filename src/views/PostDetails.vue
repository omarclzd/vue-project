<template>
  <div class="postdetails">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>this is the post details page.</h1>
    <v-row class="d-flex justify-center" v-if="this.$store.getters.getPosts">
      <div v-for="post in this.$store.getters.getPosts" :key="post.id">
        <v-col v-if="post.id == postId">
          <v-card dark elevation="13" max-width="344" class="mx-auto mb-3">
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text>{{ post.phone }}</v-card-text>
            <v-card-text>{{ post.desc }}</v-card-text>
          </v-card>
          <v-btn color="#41B883" class="white--text font-weight-bold" to="/">back</v-btn>
        </v-col>
      </div>
    </v-row>
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
<template>
  <div class="profile">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>This is an Home page</h1>

      <div class="title">This are the User's posts...</div>
      <div v-if="this.$store.getters.getUserPosts && this.$store.getters.getUserPosts.length > 0">
        <div v-for="post in this.$store.getters.getUserPosts" :key="post.id">
          <v-card max-width="344" class="mx-auto" outlined="true">
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text>{{ post.posted }}</v-card-text>
            <v-btn
              color="red"
              style="text-decoration:underline;"
              @click="deletePost(post.id)"
            >Delete</v-btn>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "profile",
  beforeCreate: function() {
    this.$store.dispatch("setUserPosts");
  },
  data() {
    return {};
  },
  methods: {
    deletePost: function(id) {
      if (id) {
        firebase
          .firestore()
          .collection("posts")
          .doc(id)
          .delete()
          .catch(function(error) {
            this.error = error;
          });
      } else {
        this.error = "Invalid Id";
      }
    }
  }
};
</script>
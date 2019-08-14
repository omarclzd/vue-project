<template>
  <div class="profile">
    <v-container>
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>This is the Profile page</h1>

      <div class="title">This are the User's posts...</div>
      <v-row
        class="d-flex justify-center"
        v-if="this.$store.getters.getUserPosts && this.$store.getters.getUserPosts.length > 0"
      >
        <div v-for="post in this.$store.getters.getUserPosts" :key="post.id">
          <v-col>
            <v-card dark elevation="10" max-width="344" class="mx-auto" outlined="true">
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-text>{{ post.phone }}</v-card-text>
              <v-card-text>{{ post.desc }}</v-card-text>
              <v-btn
                color="#D50000"
                x-small
                class="mb-2 white--text font-weight-bold"
                @click="deletePost(post.id)"
              >X</v-btn>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-container>
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
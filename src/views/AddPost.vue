<template>
  <div class="add">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is an Add page</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="title" :rules="nameRules" :counter="10" label="title" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-btn @click="addPost" color="primary">Add</v-btn>
            <div v-if="errors !== ''" id="errors">{{ errors }}</div>
            <!-- <v-text-field
              v-model="desc"
              :rules="nameRules"
              :counter="10"
              label="description"
              required
            ></v-text-field>-->
          </v-col>

          <!-- <v-col cols="12" md="4">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>-->
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

 <script>
import firebase from "firebase";

export default {
  name: "addpost",
  data() {
    return {
      title: "",
      errors: ""
    };
  },
  methods: {
    addPost: function() {
      this.erros = "";
      if (this.title !== "") {
        firebase
          .firestore()
          .collection("posts")
          .add({
            title: this.title,
            created_at: new Date(),
            user: firebase.auth().currentUser.uid
          })
          .then(response => {
            if (response) {
              this.title = "";
            }
          })
          .catch(error => {
            this.errors = error;
          });
      } else {
        this.errors = "Please enter some text";
      }
    }
  }
};
//
</script>
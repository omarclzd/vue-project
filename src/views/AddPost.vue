<template>
  <div class="add">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is an Add page</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-card elevation="10" dark>
              <v-card-text>
                <v-text-field
                  v-model="title"
                  :rules="nameRules"
                  :counter="10"
                  label="title"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  label="phone (xxx-xxx-xxxx)"
                  required
                ></v-text-field>

                <v-textarea v-model="desc" solo label="description" required></v-textarea>

                <v-btn @click="addPost" color="primary">Add</v-btn>
                <div v-if="errors !== ''" id="errors">{{ errors }}</div>
              </v-card-text>
            </v-card>
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
import router from "@/router";

export default {
  name: "addpost",

  data() {
    return {
      title: "",
      phone: "",
      desc: "",

      errors: "",
      phoneRules: [
        v => /^[2-9]\d{2}-\d{3}-\d{4}$/.test(v) || "phone must be valid"
      ]
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
            phone: this.phone,
            desc: this.desc,
            created_at: new Date(),
            user: firebase.auth().currentUser.uid
          })
          .then(response => {
            if (response) {
              this.title = "";
              router.push("/profile");
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
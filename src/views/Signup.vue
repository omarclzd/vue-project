<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="#323232">
            <v-toolbar-title>Signup Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                name="displayName"
                label="username"
                type="displayName"
                v-model="displayName"
                :rules="usernameRules"
                required
              ></v-text-field>
              <v-text-field
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                required
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#43A047" :disabled="!valid" @click="submit">Signup</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Signup",
  data() {
    return {
      valid: false,
      displayName: "",
      email: "",
      password: "",
      usernameRules: [
        v => !!v || "Username is required",
        v => v.length >= 2 || "Username must be greater than 2 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be greater than 6 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("userJoin", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>
<style scoped>
</style>
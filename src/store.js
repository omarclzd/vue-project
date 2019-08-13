import Vue from "vue";
import Vuex from "vuex";

import firebase from "firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: null,
    user: null,
    isAuthenticated: false,
    userPosts: null
  },
  getters: {
    getUser: state => {
      return state.user;
    },
    getPosts: state => {
      return state.posts;
    },
    getUserPosts: state => {
      return state.userPosts;
    },
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setPosts: state => {
      let posts = [];
      firebase
        .firestore()
        .collection("posts")
        .orderBy("created_at")
        .onSnapshot(snapshot => {
          posts = [];
          snapshot.forEach(doc => {
            posts.push({
              id: doc.id,
              title: doc.data().title,
              posted: doc.data().created_at
            });
          });
          state.posts = posts;
        });
    },
    setUserPosts: state => {
      let userPosts = [];
      firebase
        .firestore()
        .collection("posts")
        .where("user", "==", firebase.auth().currentUser.uid)
        .orderBy("created_at")
        .onSnapshot(snapshot => {
          userPosts = [];
          snapshot.forEach(doc => {
            userPosts.push({
              id: doc.id,
              title: doc.data().title,
              posted: doc.data().created_at
            });
          });
          state.userPosts = userPosts;
        });
    }
  },
  actions: {
    setPosts: context => {
      context.commit("setPosts");
    },
    setUserPosts: context => {
      context.commit("setUserPosts");
    },
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          user.updateProfile({ displayName: this.displayName });
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/profile");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    }
  }
});

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddPost from "./views/AddPost.vue";
import PostDetails from "./views/PostDetails.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/add-post",
      name: "addpost",
      component: AddPost,
      meta: {
        authRequired: true
      }
    },
    {
      path: "/post-details/:id",
      name: "post-details",
      component: PostDetails
    },
    {
      path: "/profile",
      name: "profile",

      component: () =>
        import(/* webpackChunkName: "profile" */ "./views/Profile.vue"),
      meta: {
        authRequired: true
      }
    },
    {
      path: "/sign-in",
      name: "signin",
      component: () => import("./views/Signin.vue")
    },
    {
      path: "/sign-up",
      name: "signup",
      component: () => import("./views/Signup.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({
        path: "/sign-in"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

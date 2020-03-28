import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layout/Default-Layout";
import RecTemplate from "@/views/rec-template/RecTemplate";
import PassportLayout from "@/layout/Passport-Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "default",
    component: DefaultLayout,
    redirect: { name: "RecTemplate" },
    children: [
      {
        path: "rectemplate",
        name: "RecTemplate",
        component: RecTemplate
      },
      {
        path: "user",
        name: "User",
        component: () => import("@/views/user/User.vue")
      }
    ]
  },
  {
    path: "/passport",
    name: "passport",
    component: PassportLayout,
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/login/Login.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

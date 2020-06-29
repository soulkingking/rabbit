import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layout/Default-Layout";
import RecTemplate from "@/views/rec-template/RecTemplate";
import PassportLayout from "@/layout/Passport-Layout";
import OfficialWebSideLayout from "@/layout/Official-WebSide-Layout";

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
    path:"/webside",
    name:"WebSide",
    component:OfficialWebSideLayout,
    redirect: { name: "WebSideRecTemplate" },
    children: [
      {
        path: "rectemplate",
        name: "WebSideRecTemplate",
        component: RecTemplate
      },
      {
        path: "user",
        name: "WebSideUser",
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

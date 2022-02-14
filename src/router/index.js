import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wannaKnow",
    name: "WannaKnow",
    component: () => import("../views/WannaKnow/WannaKnow.vue"),
    redirect: { name: "ListView" },
    children: [
      {
        path: "/list",
        name: "ListView",
        component: () => import("@/views/WannaKnow/ListView.vue"),
      },
      {
        path: "/calendar",
        name: "CalendarView",
        component: () => import("@/views/WannaKnow/CalendarView.vue"),
      },
    ],
  },
  {
    path: "/apply",
    name: "Apply",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Apply.vue"),
  },
  {
    path: "/sideBar",
    name: "SideBar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SideBar.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/WannaKnow/WannaKnow.vue"
      ),
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Apply.vue"),
  },
  {
    path: "/sideBar",
    name: "SideBar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SideBar.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

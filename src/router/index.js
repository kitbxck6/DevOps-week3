import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Homeview.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/Aboutview.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profileview.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/Contactview.vue"),
    }
  ],
});

export default router;

import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes,
});

export default router;
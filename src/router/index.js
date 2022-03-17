import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Single from '@/views/Single'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/single',
    name: 'single',
    component: Single,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes,
});

export default router;
import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import Favorites from '../views/Favorites.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: Error,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
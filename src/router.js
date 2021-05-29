import {
  createWebHistory,
  createRouter
} from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Invalid from "./views/Invalid.vue";
import App from "./views/App.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/app:catchAll(.*)",
    component: App
  },
  {
    path: "/:catchAll(.*)",
    component: Invalid
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
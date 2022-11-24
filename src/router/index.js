import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home.vue";
import Login from "../pages/login.vue";
import About from "../pages/about.vue";
import Workbench from "../pages/workbench.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [{ path: "workbench", name: "workbench", component: Workbench }],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    component: Login,
    hidden: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import TaskPage from "./pages/TaskPage.vue";
import DashboardPage from "./pages/DashboardPage.vue";

const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectPage,
    },
    {
      path: "/tasks",
      name: "tasks",
      component: TaskPage,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardPage,
    },
  ],
});
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");

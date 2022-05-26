import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Page1 from "../views/PageNum1.vue";
import Page2 from "../views/PageNum2.vue";
import Page3 from "../views/PageNum3.vue";
import Page4 from "../views/PageNum4.vue";
import Page5 from "../views/PageNum5.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/Page1",
    name: "PageNum1",
    component:Page1
  },
  {
    path: "/Page2",
    name: "PageNum2",
    component:Page2
  },
  {
    path: "/Page3",
    name: "PageNum3",
    component:Page3
  },
  {
    path: "/Page4",
    name: "PageNum4",
    component:Page4
  },
  {
    path: "/Page5",
    name: "PageNum5",
    component: Page5,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

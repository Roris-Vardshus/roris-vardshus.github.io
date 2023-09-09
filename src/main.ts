import { createRouter, createWebHashHistory } from "vue-router"
import { createApp } from "vue";
import { InlineSvgPlugin } from 'vue-inline-svg';

import "./style.css";
import App from "./App.vue";
import routes from "@/routes/route";

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App)
    .use(router)
    .use(InlineSvgPlugin)
    .mount('#app');
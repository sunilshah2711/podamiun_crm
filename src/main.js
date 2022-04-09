import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// css start
import "./assets/css/global.css";
import "./assets/css/dropzone.css";
const app = createApp(App);

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileLines,
  faXmark,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faGoogle, faFileLines, faXmark, faCloudArrowUp);

// Google Auth
import gAuthPlugin from "vue3-google-oauth2";

app.use(router);
const gauthClientId =
  "651159967373-ijjba9238o8f4eueqpq3m9hbh88jkjfo.apps.googleusercontent.com";

app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: "email",
  prompt: "consent",
});

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");

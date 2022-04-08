import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileLines,
  faXmark,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import gAuthPlugin from "vue3-google-oauth2";

// // Datatable
// import 'datatables.net'
// import 'datatables.net-dt'
// import 'datatables.net-dt/css/jquery.dataTables.min.css'
// import 'jszip'
// import 'pdfmake'
// import 'datatables.net-buttons-dt'
// import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css'
// import 'datatables.net-buttons/js/buttons.colVis'
// import 'datatables.net-buttons/js/buttons.flash'
// import 'datatables.net-buttons/js/buttons.html5'
// import 'datatables.net-buttons/js/buttons.print'

import "./assets/css/global.css";
import "./assets/css/dropzone.css";

const app = createApp(App);
library.add(faGoogle, faFileLines, faXmark, faCloudArrowUp);
app.use(router);
const gauthClientId =
  "966211017574-14b3bp0n0nqrcm4u1k4o0i2h6753qvn6.apps.googleusercontent.com";
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: "email",
  prompt: "consent",
});
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");

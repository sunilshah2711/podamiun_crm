import { createRouter, createWebHistory } from "vue-router";
import Dashbord from "../pages/Dashbord.vue";
// import Login from "../pages/Login.vue";
// import Workspace from "../pages/Workspace.vue";
// import Campaigns from "../pages/Campaigns.vue";
// import Automations from "../pages/Automations.vue";
// import Sender from "../pages/Sender.vue";
// import Admin from "../pages/Admin.vue";
// import ImageLibrary from "../pages/ImageLibrary.vue";
// import Support from "../pages/Support.vue";
// import EmailCampaigns from "../pages/EmailCampaigns.vue";
// import Templates from "../pages/EmailBuilder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashbord",
      component: Dashbord,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ["/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");
//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;

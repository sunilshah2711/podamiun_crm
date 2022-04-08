import { createRouter, createWebHistory } from "vue-router";
import Dashbord from "../pages/Dashbord.vue";
import Login from "../pages/Login.vue";
import Workspace from "../pages/Workspace.vue";
import Campaigns from "../pages/Campaigns.vue";
import Automations from "../pages/Automations.vue";
import Sender from "../pages/Sender.vue";
import Admin from "../pages/Admin.vue";
import ImageLibrary from "../pages/ImageLibrary.vue";
import Support from "../pages/Support.vue";
import EmailCampaigns from "../pages/EmailCampaigns.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashbord",
      component: Dashbord,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/workspace",
      name: "workspace",
      component: Workspace,
    },
    {
      path: "/campaigns",
      name: "campaigns",
      component: Campaigns,
    },
    {
      path: "/automations",
      name: "automations",
      component: Automations,
    },
    {
      path: "/sender",
      name: "sender",
      component: Sender,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/image-library",
      name: "image-library",
      component: ImageLibrary,
    },
    {
      path: "/support",
      name: "support",
      component: Support,
    },
    {
      path: "/email-campaigns",
      name: "email-campaigns",
      component: EmailCampaigns,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BuyView from "../views/BuyView.vue";
import DownloadView from "../views/DownloadView.vue";
import ContactView from "../views/ContactView.vue";
import AgreementView from "../views/AgreementView.vue";
import PolicyView from "../views/PolicyView.vue";
import BuyCryptoView from "../views/BuyCryptoView.vue";
import BuyCardView from "../views/BuyCardView.vue";
import WayForPayView from "../views/WayForPayView.vue";
import WayForPayWarning from "../views/WayForPayWarningView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/buy",
      name: "buy",
      component: BuyView,
    },
    {
      path: "/download",
      name: "download",
      component: DownloadView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/agreement",
      name: "agreement",
      component: AgreementView,
    },
    {
      path: "/policy",
      name: "policy",
      component: PolicyView,
    },
    {
      path: "/buyCrypto",
      name: "buyCrypto",
      component: BuyCryptoView,
    },
    {
      path: "/buyCard",
      name: "buyCard",
      component: BuyCardView,
    },
    {
      path: "/wayForPay",
      name: "wayForPay",
      component: WayForPayView,
    },
    {
      path: "/wayForPayWarning",
      name: "wayForPayWarning",
      component: WayForPayWarning,
    },
  ],
});

export default router;

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import EventBus from "@/plugins/event-bus";
import msToMm from "@/filters/ms-to-mm";
import blur from "@/directives/blur";

Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(Buefy);
Vue.use(blur);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

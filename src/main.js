import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import DxTreeView from "devextreme-vue/tree-view";
import store from "./store/store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "devextreme/dist/css/dx.light.css";

import VueColorPicker from "@duoa/vue-color-picker";
// Because this components has its styles, you must also import the css file.
import "@duoa/vue-color-picker/dist/vue-color-picker.css";

Vue.component("DxTreeView", DxTreeView);
Vue.use(VueColorPicker);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");

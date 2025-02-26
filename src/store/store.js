// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  errorHandler: (error) => {
    console.error("Lỗi khi tải dữ liệu:", error);
  },
});

export default store;

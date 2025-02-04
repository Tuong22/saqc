import { SET_COUNT } from "./mutation-types";
// src/store/mutations.js
export default {
  [SET_COUNT](state, payload) {
    state.count = (state.count || 0) + payload.amount;
  },
};

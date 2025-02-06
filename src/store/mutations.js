import { SET_COUNT, SET_THEME } from "./mutation-types";
// src/store/mutations.js
export default {
  [SET_COUNT](state, payload) {
    state.count = (state.count || 0) + payload.amount;
  },
  [SET_THEME](state, newTheme) {
    state.theme = newTheme;
  }
};

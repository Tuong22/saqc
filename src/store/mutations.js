// src/store/mutations.js
export default {
    SELECT_MENU(state, menuCode) {
      state.selectedMenu = menuCode;
    },
    COUNT_MENUS(state) {
      state.menuCount = state.menus.length;
    },
  };
  
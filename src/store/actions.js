import { GET_COUNT } from "./action-types";
import { SET_COUNT } from "./mutation-types";

export default {
  [GET_COUNT](context) {
    context.commit(SET_COUNT, { amount: 1 });
  },
};

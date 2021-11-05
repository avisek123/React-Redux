// create reducer

import { BUY_BOOK, SELL_BOOK } from "../action/bookAction";

const intialState = {
  numberOfBooks: 10,
};

const bookReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - parseFloat(action.payload),
      };
    case SELL_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks + action.payload,
      };
    default:
      return state;
  }
};
export default bookReducer;

// create reducer

import { BUY_BOOK, SELL_BOOK, GET_CITIES } from "../action/bookAction";

const intialState = {
  numberOfBooks: 10,
  cities: [],
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
        numberOfBooks: state.numberOfBooks + parseFloat(action.payload),
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};
export default bookReducer;

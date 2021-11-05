// import axios from "axios";
// create Type

export const BUY_BOOK = "BUY_BOOK";
export const SELL_BOOK = "SELL_BOOK";

// create action
export const buyBook = (number) => {
  return {
    type: BUY_BOOK,
    payload:number
  };
};
// action num ber 2
export const sellBook = () => {
  return {
    type: SELL_BOOK,
  };
};

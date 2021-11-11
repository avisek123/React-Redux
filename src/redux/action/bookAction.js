// fake api
const API_URL = "https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca";
// import axios from "axios";
// create Type

export const BUY_BOOK = "BUY_BOOK";
export const SELL_BOOK = "SELL_BOOK";
export const GET_CITIES = "GET_CITIES";

// create action
export const buyBook = (number) => {
  return {
    type: BUY_BOOK,
    payload: number,
  };
};
// action num ber 2
export const sellBook = (number) => {
  return {
    type: SELL_BOOK,
    payload: number,
  };
};

export const getCities = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();

      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
      } else {
        console.log("Unable to fetch!");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

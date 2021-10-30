const redux = require("redux");
//store redux
const createStore = redux.createStore;
const Buy_Book = "Buy_Book";
const intialState = {
  numberOfBooks: 10,
  numberOfPens: 15,
};

function buyBook() {
  return {
    // actual action
    type: Buy_Book,
    payload: "My first redux code",
  };
}
function buyPen() {
  return {
    // actual action
    type: Buy_Pen,
    payload: "My Second redux code",
  };
}

const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case "Buy_Book":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };
    case "Buy_Pen":
      return {
        ...state,
        numberOfPens: state.numberOfPens - 1,
      };
    default:
      return state;
  }
};

const store = createStore(Reducer);
console.log("Intial State", store.getStore());
const unsubscribe = store.subscribe(() => {
  console.log("Update State", store.getStore());
});
store.dispatch(buyBook());
store.dispatch(buyPen());
unsubscribe();

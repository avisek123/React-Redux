const {
  redux,
  createStore,
  combineReducers,
  applyMiddleware,
} = require("redux");
//store redux

const Buy_Book = "Buy_Book";

const intialStateBook = {
  numberOfBooks: 10,
};
const intialStatePen = {
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

const BookReducer = (state = intialStateBook, action) => {
  switch (action.type) {
    case "Buy_Book":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };

    default:
      return state;
  }
};

const PenReducer = (state = intialStatePen, action) => {
  switch (action.type) {
    case "Buy_Pen":
      return {
        ...state,
        numberOfPens: state.numberOfPens - 1,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  book: BookReducer,
  pen: PenReducer,
});
const logger = (store = () => {
  return (next) => {
    return (action) => {
      const result = next(action);
      console.log(action);
      return action;
    };
  };
});
const store = createStore(reducer, applyMiddleware(logger));
console.log("Intial State", store.getStore());
const updateValue = store.subscribe(() => {
  console.log("Update State", store.getStore());
});
store.dispatch(buyBook());
store.dispatch(buyPen());
updateValue();

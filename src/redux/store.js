import { createStore, applyMiddleware, combineReducers } from "redux";
import bookReducer from "./reducer/bookReducer";
// install npm i redux-logger
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  book: bookReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import bookReducer from "./book/bookReducer";
// install npm i redux-logger

const store = createStore(bookReducer, applyMiddleware(logger));
export default store;

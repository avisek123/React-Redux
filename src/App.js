import React from "react";
import BookContainer from "./components/BookContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;

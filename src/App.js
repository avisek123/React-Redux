import React from "react";
import BookContainer from "./components/BookContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookBookContainer from "./components/HookBookContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <BookContainer /> */}
        <HookBookContainer />
      </div>
    </Provider>
  );
}

export default App;

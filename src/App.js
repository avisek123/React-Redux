import React from "react";
import { Provider } from "react-redux";
import Form from "./components/Form";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
      </div>
    </Provider>
  );
}

export default App;

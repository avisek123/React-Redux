import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook, sellBook, getCities } from "../redux";

function HookBookContainer() {
  const [input, setInput] = React.useState("");
  const numberOfBooks = useSelector((state) => state.book);

  const dispatch = useDispatch();
  console.log(numberOfBooks);

  return (
    <div>
      Hook Container
      <h2>Number Of Books {numberOfBooks?.numberOfBooks}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(buyBook(input))}>Buy Book</button>
      <button onClick={() => dispatch(sellBook(input))}>Sell Book</button>
      <button onClick={() => dispatch(getCities())}>Call Api</button>
    </div>
  );
}

export default HookBookContainer;

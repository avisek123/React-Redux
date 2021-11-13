import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux";

function HookBookContainer() {
  const response = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  console.log(response);

  return (
    <div>
      Hook Container
      <h2>City Data </h2>
    </div>
  );
}

export default HookBookContainer;

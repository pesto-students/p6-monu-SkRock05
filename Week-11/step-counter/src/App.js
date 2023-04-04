import React from "react";
import "./App.css";
import Button from "./components/Button";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();

  const incCount = () => {
    dispatch({ type: "INCREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="container">
      <h1>You've walked {myState} steps today!</h1>
      {/* <Button onClick={incCount}>Add a Step</Button> */}
      <button onClick={incCount}>Add a Step</button>
      <Button onClick={reset}>Reset Step</Button>
    </div>
  );
}

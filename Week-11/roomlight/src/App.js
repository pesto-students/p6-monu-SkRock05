import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const myState = useSelector((state) => state.initialValue);
  const dispatch = useDispatch();

  const lightedness = myState ? "lit" : "dark";

  const flipLight = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
}

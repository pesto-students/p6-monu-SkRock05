import React from "react";

export function CommonButton(props) {
  // console.log(props);
  return (
    <button className={props.className} onClick={props.event}>
      {props.children}
    </button>
  );
}

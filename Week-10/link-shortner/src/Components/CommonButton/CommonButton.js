import React from "react";

export function CommonButton(props) {
  return <button className={props.className}>{props.children}</button>;
}

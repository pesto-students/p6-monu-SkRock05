import React from "react";
import "./CommonUrl.css";

function CommonUrl(props) {
  return (
    <span className={props.className}>
      <a
        href="#1"
        className={props.className ? props.className : "commonLinkStyle"}
      >
        {props.children}
      </a>
    </span>
  );
}

export { CommonUrl };

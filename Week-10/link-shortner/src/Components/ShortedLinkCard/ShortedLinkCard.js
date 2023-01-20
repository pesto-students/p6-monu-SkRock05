import React from "react";
import { CommonButton } from "../CommonButton/CommonButton";
import "./ShortedLinkCard.css";

export function ShortedLinkCard(props) {
  return (
    <div className="resultCard">
      <div className="inputLinkContainer">{props.inputLink}</div>
      <div className="resultLinkContainer">
        <div className="resultLink">{props.shortedLink}</div>
        <CommonButton className="copyLink">COPY</CommonButton>
      </div>
    </div>
  );
}

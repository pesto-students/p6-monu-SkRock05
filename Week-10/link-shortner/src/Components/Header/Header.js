import React from "react";
import { CommonUrl } from "../CommonUrl";
import PageUrl from "../PageUrl";
import "./Header.css";

function Header() {
  return (
    <div className="headContainer">
      <div className="leftLink">
        <PageUrl />
      </div>
      <div className="centerLink">
        <CommonUrl>Features</CommonUrl>
        <CommonUrl>Pricing</CommonUrl>
        <CommonUrl>Resource</CommonUrl>
      </div>
      <div className="endLink">
        <CommonUrl>Login</CommonUrl>
        <CommonUrl>Sign Up</CommonUrl>
      </div>
    </div>
  );
}

export default Header;

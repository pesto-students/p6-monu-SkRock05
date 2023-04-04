import React from "react";
import { CommonUrl } from "../CommonUrl";
import PageUrl from "../PageUrl";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footerContainer">
      <div className="bottomLeftLink">
        <PageUrl />
      </div>
      <div className="bottomCenterLink">
        <div className="column1">
          <CommonUrl className="commonUrlStyle">Features</CommonUrl>
          <CommonUrl className="commonUrlStyle">Link Shortning</CommonUrl>
          <CommonUrl className="commonUrlStyle">Branded Links</CommonUrl>
        </div>
        <div className="column2">
          <CommonUrl className="commonUrlStyle">Resource</CommonUrl>
          <CommonUrl className="commonUrlStyle">Blog</CommonUrl>
          <CommonUrl className="commonUrlStyle">Developers</CommonUrl>
        </div>
        <div className="column3">
          <CommonUrl className="commonUrlStyle">Company</CommonUrl>
          <CommonUrl className="commonUrlStyle">About</CommonUrl>
          <CommonUrl className="commonUrlStyle">Our Team</CommonUrl>
        </div>
      </div>
      <div className="bottomEndLink">
        <CommonUrl className="commonUrlStyle">Login</CommonUrl>
        <CommonUrl className="commonUrlStyle">Sign Up</CommonUrl>
      </div>
    </div>
  );
}

import React from "react";
import mainImage from "../../Assets/Images/Customizable Illustrations.png";
import { CommonButton } from "../CommonButton/CommonButton";
import { ShortedLinkCard } from "../ShortedLinkCard/ShortedLinkCard";
import "./MainContainer.css";

function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="upperContainer">
        <div className="textContainer">
          <h1 style={{ fontSize: 45, paddingBottom: 20, fontWeight: 100 }}>
            More than just shorter Links
          </h1>
          <span>
            Build your brand's recognition and get detailed insights how your
            links are performing
          </span>
        </div>
        <div className="imageContainer">
          <img src={mainImage} alt="Sitted man" className="imageClass" />
        </div>
      </div>
      <div className="lowerContainer">
        <div className="inputContainer">
          <input type="text" className="inputBanner" />
          <CommonButton type="button" className="shortnerButton">
            Shorten It!!
          </CommonButton>
        </div>
        <div className="shortedLinkContainer">
          <ShortedLinkCard
            inputLink="https://helloworld.com"
            shortedLink="https://hola.com"
          />
        </div>
      </div>
    </div>
  );
}

export { MainContainer };

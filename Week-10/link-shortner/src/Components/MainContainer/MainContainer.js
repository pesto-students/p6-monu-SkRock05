import React, { useRef, useState } from "react";
import mainImage from "../../Assets/Images/Customizable Illustrations.png";
import { CommonButton } from "../CommonButton/CommonButton";
import { ShortedLinkCard } from "../ShortedLinkCard/ShortedLinkCard";
import "./MainContainer.css";

function MainContainer() {
  const [inputLink, setInputLink] = useState();
  const [outputLink, setOutputLink] = useState([]);
  // const inputElement = useRef();
  const fetchData = async () => {
    const inputUrl = `https://api.shrtco.de/v2/shorten?url=${inputLink}`;
    console.log("inputLink : ", inputLink);
    console.log("inputUrl : ", inputUrl);

    let response = await fetch(inputUrl);
    let data = await response.json();
    console.log(data);
    outputLink.push(data);
    // outputLink.map((val, elm) => {
    //   console.log(val);
    // });
    console.log(outputLink);
  };

  const showShortedLink = () => {
    outputLink.map((elm, val) => {
      return (
        <ShortedLinkCard
          inputLink={elm.result.original_link}
          shortedLink={elm.result.full_share_link}
        />
      );
    });
  };

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
          <input
            type="text"
            className="inputBanner"
            onChange={(e) => setInputLink(e.target.value)}
          />
          {/* {console.log(inputElement)} */}
          <CommonButton
            type="button"
            className="shortnerButton"
            event={fetchData}
          >
            Shorten It!!
          </CommonButton>
          {/* {console.log(inputLink)} */}
        </div>
        <div className="shortedLinkContainer">
          {console.log(showShortedLink())}
        </div>
      </div>
    </div>
  );
}

export { MainContainer };

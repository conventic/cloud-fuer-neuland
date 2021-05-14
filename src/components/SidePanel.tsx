import React from "react";
import Testimage from "../img/testimage.jpg";

export const SidePanel = () => {
  return (
    <div className="sidepanel__container">
      <div className="sidepanel__placeholder"></div>
      <div className="clip-path__container--outer">
        <div className="clip-path__container--inner">
          <p>Test</p>
          <img src={Testimage} alt="Testimage" />
          <p>Test</p>
          <img src={Testimage} alt="Testimage" />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import CvtLogo from "../img/conventic_logo.svg";
import CFDNLogo from "../../static/img/CFDN_Logo.png";
import SYSTEM_DATA from "../data/system.yaml";

export const SidePanel = ({ classnames }: { classnames?: string }) => {
  return (
    <div
      className={
        classnames
          ? "sidepanel__container" + " " + classnames
          : "sidepanel__container"
      }
    >
      <div className="sidepanel__placeholder"></div>
      <div className="clip-path__container--outer">
        <div className="clip-path__container--inner">
          <p>{SYSTEM_DATA.SIDEPANEL.ACTION}</p>
          <img src={CvtLogo} alt="Conventic-Logo" />
          <p>{SYSTEM_DATA.SIDEPANEL.UND}</p>
          <img src={CFDNLogo} alt="Testimage" />
        </div>
      </div>
    </div>
  );
};

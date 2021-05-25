import React from "react";
import CFDNLogo from "../../../static/img/CFDN_Logo.png";

import { LinkIntern, LinkExtern } from "../Link";

import SYSTEM_DATA from "../../data/system.yaml";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { CircleIcon } from "../CircleIcon";

const Navbar = () => {
  return (
    <nav
      className="navbar is-fixed-top is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="navbar__container--outer">
        <div className="container">
          <div className="navbar__brand">
            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.HOME}
              classname={"navbar-item"}
            >
              <img src={CFDNLogo} alt="CFDN-Logo" />
            </LinkIntern>
          </div>
        </div>
        <div className="navbar__menu">
          <div className="navbar__container--links">
            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.JOBS}
              classname={"navbar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.JOBS}
            </LinkIntern>

            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.NEULAND}
              classname={"navbar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.NEULAND}
            </LinkIntern>

            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.PROJEKTE}
              classname={"navbar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.PROJEKTE}
            </LinkIntern>

            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.MITMACHEN}
              classname={"navbar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.MITMACHEN}
            </LinkIntern>
            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.KONTAKT}
              classname={"navbar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.KONTAKT}
            </LinkIntern>
          </div>
          <div className="navbar__container--icons">
            <CircleIcon>
              <LinkExtern
                url={SYSTEM_DATA.LINKS.EXTERN.LINKEDIN}
                newTab={true}
                classname={"navbar__link--icon"}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#000000" />
              </LinkExtern>
            </CircleIcon>
            <CircleIcon classnames={"navbar__container--icon-black"}>
              <LinkExtern
                url={SYSTEM_DATA.LINKS.EXTERN.XING}
                newTab={true}
                classname={"navbar__link--icon"}
              >
                <FontAwesomeIcon icon={faXing} size="1x" color="#FFFFFF" />
              </LinkExtern>
            </CircleIcon>
            <CircleIcon classnames={"navbar__container--icon-black"}>
              <LinkExtern
                url={SYSTEM_DATA.LINKS.EXTERN.TWITTER}
                newTab={true}
                classname={"navbar__link--icon"}
              >
                <FontAwesomeIcon icon={faTwitter} size="1x" color="#FFFFFF" />
              </LinkExtern>
            </CircleIcon>
            <CircleIcon classnames={"navbar__container--icon-black"}>
              <LinkExtern
                url={SYSTEM_DATA.LINKS.EXTERN.INSTAGRAM}
                newTab={true}
                classname={"navbar__link--icon"}
              >
                <FontAwesomeIcon icon={faInstagram} size="1x" color="#FFFFFF" />
              </LinkExtern>
            </CircleIcon>
            <CircleIcon>
              <LinkExtern
                url={SYSTEM_DATA.LINKS.EXTERN.FACEBOOK}
                newTab={true}
                classname={"navbar__link--icon"}
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#000000" />
              </LinkExtern>
            </CircleIcon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

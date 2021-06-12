import React, { useState } from "react";
import CFDNLogo from "../../../static/img/CFDN_Logo.png";

import { LinkIntern, LinkExtern } from "../Link";

import SYSTEM_DATA from "../../data/system.yaml";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CircleIcon } from "../CircleIcon";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);

  const LargeScreen = () => {
    return (
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
    );
  };

  const SmallScreen = () => {
    if (!open) {
      return null;
    } else {
      return (
        <>
          <div className={"sidebar"}>
            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.JOBS}
              classname={"sidebar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.JOBS}
            </LinkIntern>

            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.NEULAND}
              classname={"sidebar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.NEULAND}
            </LinkIntern>

            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.PROJEKTE}
              classname={"sidebar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.PROJEKTE}
            </LinkIntern>

            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.MITMACHEN}
              classname={"sidebar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.MITMACHEN}
            </LinkIntern>
            <LinkIntern
              url={SYSTEM_DATA.LINKS.INTERN.KONTAKT}
              classname={"sidebar__item"}
              activeclassname={"navbar__item--active"}
            >
              {SYSTEM_DATA.LINKS.NAMES.KONTAKT}
            </LinkIntern>

            <div className="sidebar__container--icon">
              <CircleIcon>
                <LinkExtern
                  url={SYSTEM_DATA.LINKS.EXTERN.LINKEDIN}
                  newTab={true}
                  classname={"navbar__link--icon"}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    color="#000000"
                  />
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
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="1x"
                    color="#FFFFFF"
                  />
                </LinkExtern>
              </CircleIcon>
              <CircleIcon>
                <LinkExtern
                  url={SYSTEM_DATA.LINKS.EXTERN.FACEBOOK}
                  newTab={true}
                  classname={"navbar__link--icon"}
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    color="#000000"
                  />
                </LinkExtern>
              </CircleIcon>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <nav
      className="navbar is-fixed-top is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="navbar__container--outer">
        <div className="navbar__brand">
          <LinkIntern
            url={SYSTEM_DATA.LINKS.INTERN.HOME}
            classname={"navbar-item"}
          >
            <img src={CFDNLogo} alt="CFDN-Logo" />
          </LinkIntern>
        </div>

        {(() => {
          if (width >= 1024) {
            return LargeScreen();
          } else {
            return SmallScreen();
          }
        })()}
        {width <= 1024 ? (
          <a
            role="button"
            className="navbar__burger"
            aria-label="menu"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? (
              <FontAwesomeIcon icon={faBars} size="2x" color="#5e5e5e" />
            ) : (
              <div style={{ transform: "rotate(45deg)" }}>
                <FontAwesomeIcon icon={faPlus} size="2x" color="#5e5e5e" />
              </div>
            )}
          </a>
        ) : null}
      </div>
      <div
        style={width <= 1024 && open ? { display: "block" } : { display: "none" }}
        className={"sidebar__opac--background"}
        onClick={() => setOpen(!open)}
      ></div>
    </nav>
  );
};

export default Navbar;

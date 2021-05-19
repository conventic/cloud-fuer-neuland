import React from "react";
import { Link } from "gatsby";

import SYSTEM_DATA from "../../data/system.yaml";
import ArrowUp from "../../img/arrow_up.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container--outer">
        <div className="columns is-marginless is-paddingless footer__container--inner">
          <div className="column is-8 footer__menu">
            <div>{SYSTEM_DATA.FOOTER.ADDRESS}</div>
            <div>
              <Link to={SYSTEM_DATA.LINKS.INTERN.IMPRESSUM}>
                {SYSTEM_DATA.LINKS.NAMES.IMPRESSUM}
              </Link>
              /
              <Link to={SYSTEM_DATA.LINKS.INTERN.DATENSCHUTZ}>
                {SYSTEM_DATA.LINKS.NAMES.DATENSCHUTZ}
              </Link>
            </div>
          </div>
          <div className="column is-1 footer__arrow">
            <img src={ArrowUp} alt="ArrowUp" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

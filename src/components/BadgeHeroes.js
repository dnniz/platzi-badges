import React from "react";

import confLogo from "../images/badge-header.svg";
import "../pages/styles/Badges.css";

function BadgeHeroes() {
  return (
    <div className="Badges">
      <div className="Badges__hero">
        <div className="Badges__container">
          <img className="Badges_conf-logo" src={confLogo} alt="logo conf" />
        </div>
      </div>
    </div>
  );
}

export default BadgeHeroes;

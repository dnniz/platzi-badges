import React from "react";

import "./styles/Badges.css";
import Navbar from "../components/Navbar";
import confLogo from "../images/badge-header.svg";
import dataJson from "../db.json";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  state = {
    data: dataJson.badges
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="logo conf"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary">
              New Badge
            </a>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;

import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import dataJson from "../db.json";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  state = {
    data: dataJson.badges
  };
  6;
  render() {
    return (
      <React.Fragment>
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
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

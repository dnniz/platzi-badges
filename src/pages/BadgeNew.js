import React from "react";

import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge.js";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Dennis"
                lastName="Pineda"
                jobTitle=".NET Developer"
                twitter="dnniz"
                avatarUrl="https://s.gravatar.com/avatar/c92c31407aba877767cca7c1638e63b8?s=80"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

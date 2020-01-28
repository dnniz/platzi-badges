import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import BadgeListItem from "../components/BadgeListItem";

class BadgeList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-secondary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge, i) => {
            return (
              <li
                key={i}
                data-id={badge.id}
                onClick={() => this.props.redirectEdit(badge.id)}
                className="BadgesListItem"
              >
                <BadgeListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgeList;

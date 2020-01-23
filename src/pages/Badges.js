import React from "react";
import { Link } from "react-router-dom";

import api from "../api";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");

    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    console.log("2/4. render()");
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

  componentDidMount() {
    console.log("3. componentDidMount()");
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      console.log(data);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    /* DELETE: */
    // console.log({
    //   prevProps: prevProps,
    //   prevState: prevState
    // });

    // console.log({
    //   props: this.props,
    //   state: this.state
    // });
  }

  componentWillUnmount() {
    console.log("6. componentWillMount()");

    clearTimeout(this.timeOutId);
  }
}

export default Badges;

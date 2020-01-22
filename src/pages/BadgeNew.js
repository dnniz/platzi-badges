import React from "react";

import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/c92c31407aba877767cca7c1638e63b8?s=80"
              />
            </div>
            <div className="col-sm-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;

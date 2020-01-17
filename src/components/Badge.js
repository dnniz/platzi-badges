import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import confLog from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLog} alt="Logo conf" />
        </div>
        <div>
          <img
            src="https://s.gravatar.com/avatar/c92c31407aba877767cca7c1638e63b8?s=80"
            alt="Avatar"
          />
          <h1>
            Dennis <br /> Pineda
          </h1>
        </div>
        <div>
          <p>.NET Developer</p>
          <p>@dnniz</p>
        </div>
        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;

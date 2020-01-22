import React from "react";
import { Link } from "react-router-dom";

import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <div className="container">
        <div className="row">
          {/* d-none d-md-block */}
          {/* <div className="col"></div> */}
          <div className="offset-md-2 col-md-8 text-center">
            <h1>404: Not Found</h1>
            <p>¡Ups! La página solicitada no fue encontrada</p>
            <Link className="btn btn-primary" to="/">
              Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

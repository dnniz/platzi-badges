import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";

const container = document.getElementById("app");

var tettsuo = () => {
  return alert("clickme");
};

ReactDOM.render(<Badge />, container);

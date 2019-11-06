/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";

require("../public/style.css");

const App = () => {
  return <div>Hello World!</div>;
};

ReactDOM.render(<App />, document.querySelector("#app"));

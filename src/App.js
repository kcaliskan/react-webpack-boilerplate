/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));

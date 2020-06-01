import React, { Component } from "react";
import { render } from "react-dom";
import Finder from "./components/Finder";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Finder />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

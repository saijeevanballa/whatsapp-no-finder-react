import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Finder from "./components/Finder";
import Navbar from "./components/Navbar";
import Public from "./components/Public";
import Footer from "./components/Footer";



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

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/public" component={Public} />
    </div>
  </Router>
)

render(routing, document.getElementById("root"));



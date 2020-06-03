import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../index.css";

class Navbar extends  Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render(){
    let urlPath = window.location.href
    console.log(urlPath)
    return (
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <a class="navbar-brand" href="/">
          Whatsapp Hub
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className="nav-item" className={urlPath.includes("/")? "active": ""}>
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item" lassName={urlPath.includes("/public")? "active": ""}>
              <a class="nav-link" href="/public">
                Public Numbers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Public Groups
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
  }
};

export default Navbar;

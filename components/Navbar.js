import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-dark bg-primary">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand text-white" href="/">
          Whatsapp Hub
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className="nav-item"
              className={location.pathname == "/" ? "active" : ""}
            >
              <a
                className="nav-link text-white"
                href="/"
              >
                Home
              </a>
            </li>
            <li
              className="nav-item"
              className={location.pathname == "/public" ? "active" : ""}
            >
              <a className="nav-link text-white" href="/public">
                Public Numbers <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className="nav-item"
              className={location.pathname == "/groups" ? "active" : ""}
            >
              <a className="nav-link text-white" href="#">
                Public Groups
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

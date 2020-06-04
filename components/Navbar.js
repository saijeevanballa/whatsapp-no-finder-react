import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../index.css";

function Navbar(props) {
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
        <div>
          <button
            class="btn btn-default btn-lg btn-link text-white"
            style={{ textDecoration: "none" }}
          >
            <Link
              className="text-white"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Whatsapp Hub
            </Link>
          </button>
          <span class="badge badge-notify">{props.num || ""}</span>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className="nav-item"
              className={location.pathname == "/public" ? "active" : ""}
            >
              <Link className="nav-link text-white" to="/public">
                Public Numbers
              </Link>
            </li>
            <li
              className="nav-item"
              className={location.pathname == "/groups" ? "active" : ""}
            >
              <Link
                className="nav-link text-white"
                data-toggle="modal"
                data-target=".bd-example-modal-sm"
                to="#"
              >
                Public Groups
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-light bg-light fixed-bottom">
        <span class="navbar-text">Navbar text with an inline element</span>
      </nav>

      <div
        class="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Public Groups
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-danger">Comming Soon..</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

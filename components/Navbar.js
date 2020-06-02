import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-dark bg-primary">
        <a className="navbar-brand" href="#!">
          Find Whatsapp number
        </a>
        <div>
          <a className="navbar-brand" href="/public">
            Public
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

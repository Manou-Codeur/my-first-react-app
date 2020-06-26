import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Movie-component/movie-style.css";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navBar">
          <NavLink className="link" activeClassName="activeLinks" to="/movies">
            Movies
          </NavLink>
          <NavLink
            className="link"
            activeClassName="activeLinks"
            to="/customers"
          >
            Customers
          </NavLink>
          <NavLink className="link" activeClassName="activeLinks" to="/rental">
            Rental
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;

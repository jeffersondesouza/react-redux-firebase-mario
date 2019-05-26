import React from "react";
import { NavLink } from "react-router-dom";

const SingInLinks = () => (
  <ul className="right">
    <li>
      <NavLink to="/create" activeClassName="grey darken-4">
        New Project
      </NavLink>
    </li>
    <li>
      <NavLink to="/">
        Log Out
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/"
        className="btn btn-floating pink lighten-1"
      >
        NN
      </NavLink>
    </li>
  </ul>
);

export default SingInLinks;

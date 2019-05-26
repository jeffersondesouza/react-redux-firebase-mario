import React from "react";
import { NavLink } from "react-router-dom";

const SingOutLinks = () => (
  <ul className="right">
    <li>
      <NavLink to="/sign-up" activeClassName="grey darken-4">Sign Up</NavLink>
    </li>
    <li>
      <NavLink to="/sign-in" activeClassName="grey darken-4">Login</NavLink>
    </li>
  </ul>
);

export default SingOutLinks;

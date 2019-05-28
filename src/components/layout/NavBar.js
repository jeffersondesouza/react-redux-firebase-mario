import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SingInLinks from "./SingInLinks";
import SingOutLinks from "./SingOutLinks";

const NavBar = () => (
  <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to="/" className="brand-logo">
        MarioPLan
      </Link>
      <SingInLinks />
      <SingOutLinks />
    </div>
  </nav>
);

const mapStateToPros = state => {
  console.log('state:', state)
  return {};
};
export default connect(mapStateToPros)(NavBar);

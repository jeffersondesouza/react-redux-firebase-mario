import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signOut } from "./../../store/actions/authAction";

import SingInLinks from "./SingInLinks";
import SingOutLinks from "./SingOutLinks";

const NavBar = props => {
  const { auth } = props;
  console.log("auth:", auth.uid);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPLan
        </Link>
        {auth.uid ? (
          <SingInLinks onSignOut={props.signOut} />
        ) : (
          <SingOutLinks />
        )}
      </div>
    </nav>
  );
};

const mapStateToPros = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(NavBar);

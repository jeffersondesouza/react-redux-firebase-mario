import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { signIn } from "./../../store/actions/authAction";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container white">
        <header>
          <h5 className="grey-text text-darken-3">Sign In</h5>
        </header>
        <form onSubmit={this.handleSubmit} className="white">
          <p className="red-text center">{authError.error}</p>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: params => dispatch(signIn(params))
});

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

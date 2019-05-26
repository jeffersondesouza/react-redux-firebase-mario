import React, { Component } from "react";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container white">
        <header>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
        </header>
        <form onSubmit={this.handleSubmit} className="white">
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
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;

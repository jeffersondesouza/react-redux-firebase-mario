import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { createProject } from "../../store/actions/projectActions";

export class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/sign-in" />;
    }

    return (
      <div className="container white">
        <header>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
        </header>
        <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              name="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Create Project
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDisparchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDisparchToProps
)(CreateProject);

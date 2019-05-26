import React, { Component } from "react";

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
    console.log(this.state);
  };

  render() {
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

export default CreateProject;

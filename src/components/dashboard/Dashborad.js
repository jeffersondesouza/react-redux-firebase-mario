import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashborad extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="dashborad container">
        <div className="row">
          <div className="col s12 m6 ">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return { projects: state.firestore.ordered.projects || [] };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(Dashborad);

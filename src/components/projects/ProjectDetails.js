import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const ProjectDetails = props => {
  const { project } = props;

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content} </p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              Posted by {project.authFirstName} {project.authLastName}
            </div>
            <div>{moment(project.createdAt.seconds).calendar()}</div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="container center">Loading...</div>;
};

const mapStateToProps = (state, props) => {
  const projectId = props.match.params.id;
  const projects = state.firestore.ordered.projects || [];
  const project = projects.find(project => project.id === projectId);

  return { project };
};

export default compose(
  firestoreConnect([
    {
      collection: "projects"
    }
  ]),
  connect(mapStateToProps)
)(ProjectDetails);

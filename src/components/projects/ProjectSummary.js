import React from "react";

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>{project.content}</p>
      <p className="grey-text">Posted by Net Ninja</p>
    </div>
  </div>
);

export default ProjectSummary;

import React from "react";
import { Link } from "react-router-dom";

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 project-summary">
    <Link to={`/project/${project.id}`}>
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">Posted by Net Ninja</p>
      </div>
    </Link>
  </div>
);

export default ProjectSummary;

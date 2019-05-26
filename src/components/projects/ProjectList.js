import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => (
  <ul className="project-list section">
    {projects && projects.map(project => (
      <li key={project.id}>
        <ProjectSummary project={project} />
      </li>
    ))}
  </ul>
);

export default ProjectList;

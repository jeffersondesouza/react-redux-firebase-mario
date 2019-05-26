import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => (
  <ul className="project-list section">
    <li>
      <ProjectSummary />
    </li>
    <li>
      <ProjectSummary />
    </li>
    <li>
      <ProjectSummary />
    </li>
  </ul>
);

export default ProjectList;

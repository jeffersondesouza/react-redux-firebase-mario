import React from "react";

const ProjectDetails = props => {
  const { id } = props.match.params;
  console.log('id:', id)

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title</span>
          <p>
            LorenExcepteur aliquip duis aliqua ipsum do veniam enim excepteur
            occaecat nostrud adipisicing aliqua aliqua. Minim qui ut in eiusmod
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Ner Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

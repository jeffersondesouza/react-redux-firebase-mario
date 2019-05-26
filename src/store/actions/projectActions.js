import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAILURE
} from "../constants/projects";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const newProject = {
      ...project,
      authFirstName: "Luigi",
      authLastName: "MarioBro",
      authID: 12334,
      createdAt: new Date()
    };

    getFirestore()
      .collection("projects")
      .add(newProject)
      .then(res => {
        console.log("res:", res);
        dispatch({ type: CREATE_PROJECT_REQUEST, payload: newProject });
      })
      .catch(error => {
        console.log('error:', error)
        dispatch({ type: CREATE_PROJECT_FAILURE, error });
      });
  };
};

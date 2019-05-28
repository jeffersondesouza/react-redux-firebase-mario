import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAILURE
} from "../constants/projects";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const newProject = {
      ...project,
      authFirstName: getState().firebase.auth.email,
      authLastName: "MarioBro",
      authID: getState().firebase.auth.uid,
      createdAt: new Date()
    };

    getFirestore()
      .collection("projects")
      .add(newProject)
      .then(res => {
        dispatch({ type: CREATE_PROJECT_REQUEST, payload: newProject });
      })
      .catch(error => {
        dispatch({ type: CREATE_PROJECT_FAILURE, error });
      });
  };
};

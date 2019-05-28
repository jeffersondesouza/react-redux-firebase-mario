import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from "../constants/auth";

export const signIn = params => {
  const { email, password } = params;

  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    dispatch({ type: SIGN_IN_REQUEST });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: SIGN_IN_FAILURE, error });
      });
  };
};

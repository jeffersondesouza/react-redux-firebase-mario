import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS
} from "../constants/auth";

export const signIn = params => {
  const { email, password } = params;

  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    dispatch({ type: SIGN_IN_REQUEST });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => dispatch({ type: SIGN_IN_SUCCESS }))
      .catch(error =>
        dispatch({ type: SIGN_IN_FAILURE, error: "Login Failure" })
      );
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: SIGN_OUT_REQUEST });

    firebase
      .auth()
      .signOut()
      .then(res => dispatch({ type: SIGN_OUT_SUCCESS }))
      .catch(error => dispatch({ type: SIGN_OUT_SUCCESS, error }));
  };
};

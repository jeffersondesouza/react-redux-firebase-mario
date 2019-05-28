import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
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

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: SIGN_IN_FAILURE, err });
      });
  };
};

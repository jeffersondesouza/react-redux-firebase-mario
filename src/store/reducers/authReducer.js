import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from "../constants/auth";

const initState = {
  isSigningIn: false,
  isSigningOut: false,
  error: ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isSigningIn: true
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSigningIn: false
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        error: action.error
      };

    case SIGN_OUT_REQUEST:
      return {
        ...state,
        isSigningOut: true
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isSigningOut: false
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        isSigningOut: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default authReducer;

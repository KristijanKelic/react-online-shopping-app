import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSucess = user => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = errorMessage => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: errorMessage
});

export const emailSignInStart = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START
});

export const emailSignInSuccess = emilAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: emilAndPassword
});

export const emailSignInFailure = errorMessage => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: errorMessage
});

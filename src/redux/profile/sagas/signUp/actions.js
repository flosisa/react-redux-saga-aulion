import actionTypes from './actionTypes';

export const signUp = payload => ({
  type: actionTypes.SIGN_UP.request, payload
});

export const signUpClear = payload => ({
  type: actionTypes.SIGN_UP.clear, payload
});

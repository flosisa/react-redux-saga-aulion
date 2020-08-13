import actionTypes from './actionTypes';

export const signIn = payload => ({
  type: actionTypes.SIGN_IN.request, payload
});
import actionTypes from './actionTypes';

export const signOut = payload => ({
  type: actionTypes.SIGN_OUT.request, payload
});
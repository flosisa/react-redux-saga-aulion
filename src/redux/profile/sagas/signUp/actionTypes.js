import createActionType from 'Util/redux/createActionType'
import { SIGN_UP } from '../../actionTypes';

export default ({
  [SIGN_UP]: createActionType(SIGN_UP),
})
import createActionType from 'Util/redux/createActionType'
import { SIGN_OUT } from '../../actionTypes';

export default ({
  [SIGN_OUT]: createActionType(SIGN_OUT),
})
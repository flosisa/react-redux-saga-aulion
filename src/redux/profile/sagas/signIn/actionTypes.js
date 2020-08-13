import createActionType from 'Util/redux/createActionType'
import { SIGN_IN } from '../../actionTypes';

export default ({
  [SIGN_IN]: createActionType(SIGN_IN),
})
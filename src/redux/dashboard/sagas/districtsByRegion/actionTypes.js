import createActionType from 'Util/redux/createActionType'
import { DISTRICTS_BY_REGION } from '../../actionTypes';

export default ({
  [DISTRICTS_BY_REGION]: createActionType(DISTRICTS_BY_REGION),
})
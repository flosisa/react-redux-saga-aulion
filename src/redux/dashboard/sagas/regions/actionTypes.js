import createActionType from 'Util/redux/createActionType'
import { REGIONS } from '../../actionTypes';

export default ({
  [REGIONS]: createActionType(REGIONS),
})
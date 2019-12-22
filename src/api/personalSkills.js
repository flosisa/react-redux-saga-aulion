import { getNotAuthInstance } from 'Util/httpClient'
import {
  PERSONAL_SKILLS,
} from 'Constants/api'

export const personalSkills = data => getNotAuthInstance()
  .get(PERSONAL_SKILLS, data)
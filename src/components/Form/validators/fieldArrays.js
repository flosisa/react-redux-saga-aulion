import { prop } from 'ramda';

const validate = values => {
  const errors = {}

  const fieldMembers = prop('fieldArrayName', values) || [];
  const membersArrayErrors = []

  fieldMembers.forEach((member, memberIndex) => {
    const memberErrors = {}
    if (!member || !member.memberOneFieldName) {
      memberErrors.memberOneFieldName = 'memberOneFieldName is required!'
      membersArrayErrors[memberIndex] = memberErrors
    }
    if (!member || !member.memberTwoFieldName) {
      memberErrors.memberTwoFieldName = 'memberTwoFieldName is required!'
      membersArrayErrors[memberIndex] = memberErrors
    }
  })
  if (membersArrayErrors.length) {
    errors.fieldArrayName = membersArrayErrors
  }

  return errors
}

export default validate;
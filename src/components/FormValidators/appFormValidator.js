import React from 'react';
import IntlMessages from 'Util/IntlMessages';

function validate(values) {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'First name is required!'
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = <IntlMessages id='form.personalInfo-phoneNumber.required' />
  } else if (values.phoneNumber.length <= 10) {
    errors.phoneNumber = <IntlMessages id='form.personalInfo-phoneNumber.invalid' />
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required!'
  }
  if (!values.email) {
    errors.email = <IntlMessages id='form.addresses-email.required' />
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = <IntlMessages id='form.addresses-email.invalid' />
  }

  return errors;
}

export default validate;
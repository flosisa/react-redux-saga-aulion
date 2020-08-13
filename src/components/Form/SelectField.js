import React from 'react'
import { Input } from 'reactstrap'

const SelectField = props => {
  const {
    input,
    style,
    className,
    meta: { touched, error },
    options,
    label,
    errorText
  } = props

  return (
    <div className="form-field">
      <div>{label}</div>
      <div>
        <Input
          {...input}
          type="select"
          style={style}
          invalid={error && touched}
          className={className}
          invalid={error && touched}
        >
          {options}
        </Input>
        {touched && error && <div className="form-input__required">{errorText || error}</div>}
      </div>
    </div>
  )
}

export default SelectField;
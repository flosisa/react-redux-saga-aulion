import React from 'react'
import { Input } from 'reactstrap'

const InputField = props => {
  const {
    input,
    type,
    label,
    style,
    className,
    autoFocus,
    autoComplete,
    meta: { touched, error },
    errorText,
    disabled
  } = props

  return (
    <div className="form-field">
      <div>{label}</div>
      <div>
        <Input
          {...input}
          type={type}
          style={style}
          className={className}
          invalid={error && touched}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          disabled={disabled}
        />
        {(errorText || touched && error) && <div className="form-input__required">{errorText || error}</div>}
      </div>
    </div>
  )
}

export default InputField;

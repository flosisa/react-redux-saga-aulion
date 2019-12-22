import React from 'react'
import { Input, FormFeedback, Label } from 'reactstrap'
import classNames from 'classnames'
import ExclamationIcon from 'Assets/svg/exclamation-circle-solid.svg';

function InputField(props) {
  const {
    input,
    type,
    placeholder,
    style,
    className,
    autoFocus,
    errorText,
    meta: { touched, error, active },
  } = props

  return (
    <div>
      <Label style={{ color: '#0085F0', marginBottom: 0 }}>{active || (input.value && !touched) ? placeholder : ''}</Label>
      <Input
        {...input}
        type={type}
        placeholder={active ? '' : placeholder}
        style={{ ...style }}
        className={classNames(className)}
        invalid={error && touched}
        autoComplete="off"
        autoFocus={autoFocus}
      />
      {
        touched && error
          ? <div style={{ paddingTop: 4, display: 'flex', alignItems: 'center' }}>
            <ExclamationIcon style={{ width: 20, height: 20, color: '#dc3545', paddingRight: 4 }} />
            <FormFeedback style={{ display: 'inline', marginTop: 2 }}>{errorText || error}</FormFeedback>
          </div> : <div style={{ paddingTop: 0, visibility: 'hidden' }}>
            <ExclamationIcon style={{ width: 20, height: 20, color: '#dc3545', paddingRight: 0 }} />
          </div>
      }
    </div>
  )
}

export default InputField;
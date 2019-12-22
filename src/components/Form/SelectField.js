import React from 'react'
import { Label, Input, FormFeedback } from 'reactstrap'
import classNames from 'classnames'
import ExclamationIcon from 'Assets/svg/exclamation-circle-solid.svg';

function SelectField(props) {
  const {
    label,
    input,
    type,
    style,
    className,
    meta: { touched, error, active },
    children,
    errorText,
  } = props

  return (
    <div>
      <Label style={active ? { color: '#0085F0', marginBottom: 0 } : { marginBottom: 0 }}>{active ? label : ''}</Label>
      <Input
        {...input}
        type={type}
        style={{ ...style }}
        className={classNames(className)}
        invalid={error && touched}
      >
        {children}
      </Input>
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

export default SelectField;
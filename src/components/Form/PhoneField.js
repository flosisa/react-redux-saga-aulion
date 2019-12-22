import React from 'react'
import { FormFeedback, Label } from 'reactstrap'
import { prop } from 'ramda'
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css'
import ExclamationIcon from 'Assets/svg/exclamation-circle-solid.svg';

function InputField(props) {
  const {
    input,
    defaultCountry,
    placeholder,
    containerStyle,
    inputStyle,
    name,
    autoComplete,
    autoFocus,
    errorText,
    meta: { touched, error, active },
  } = props

  const value = prop('value', input);

  function handleChange(number) {
    const { input: { onChange } } = props

    onChange(number)
  }

  return (
    <div>
      <Label style={{ color: '#0085F0', marginBottom: 0 }}>{active ? placeholder : ''}</Label>
      <ReactPhoneInput
        defaultCountry={defaultCountry}
        onChange={handleChange}
        value={value}
        disableAreaCodes
        placeholder={placeholder}
        enableSearchField={true}
        countryCodeEditable={true}
        containerStyle={containerStyle}
        inputStyle={inputStyle}
        inputExtraProps={{
          name: name,
          required: true,
          autoFocus: autoFocus,
          autoComplete: autoComplete,
        }}
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
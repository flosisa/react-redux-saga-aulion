import React from 'react'
import Select from 'react-select';
import { FormFeedback } from 'reactstrap'
import ExclamationIcon from 'Assets/svg/exclamation-circle-solid.svg';
import { prop } from 'ramda'

function ReactSelectField(props) {
  const {
    input,
    className,
    options,
    autoFocus,
    isMulti,
    placeholder,
    errorText,
    meta: { touched, error },
  } = props

  const value = prop('value', input);

  const handleChange = selectedOption => {
    const { input: { onChange } } = props

    onChange(selectedOption)
  }

  return (
    <div>
      <Select
        value={value}
        className={className}
        onChange={handleChange}
        options={options}
        autoFocus={autoFocus}
        className={className}
        isMulti={isMulti}
        placeholder={placeholder}
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
  );
}

export default ReactSelectField;
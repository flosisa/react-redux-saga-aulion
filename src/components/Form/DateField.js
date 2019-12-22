import React from 'react'
import { prop } from 'ramda'
import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/src/stylesheets/datepicker.scss";
import ExclamationIcon from 'Assets/svg/exclamation-circle-solid.svg';
import { FormFeedback, Label } from 'reactstrap'
import classNames from 'classnames'

function DateField(props) {
  const {
    input,
    dateFormat,
    style,
    placeholder,
    errorText,
    showMonthDropdown,
    showYearDropdown,
    dropdownMode,
    meta: { touched, error, active },
  } = props

  const value = prop('value', input) || null

  function handleChange(date) {
    const { input: { onChange } } = props

    onChange(date)
  }

  return (
    <div>
      <Label style={{ color: '#0085F0', marginBottom: 0 }}>{active ? placeholder : ''}</Label>
      <DatePicker
        className={classNames({ 'is-invalid': touched && error }, 'form-control', 'date-picker-custom')}
        dateFormat={dateFormat}
        onChange={handleChange}
        selected={value}
        style={style}
        placeholderText={placeholder}
        showMonthDropdown={showMonthDropdown}
        showYearDropdown={showYearDropdown}
        dropdownMode={dropdownMode}
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

export default DateField;
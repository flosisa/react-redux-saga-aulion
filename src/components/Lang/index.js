import React, { Fragment } from 'react'
import {
  compose, prop, pipe, map,
} from 'ramda'
import { connect } from 'react-redux'
import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap'
import { localeOptions } from 'Constants/defaultValues'
import { changeLocale } from 'Redux/actions'

const enhance = compose(
  connect(({ settings }) => ({
    locale: prop('locale', settings),
  })),
);

function Lang(props) {
  const { locale, style, dispatch } = props

  function handleLocaleChange(id) {
    dispatch(changeLocale(id))
  }

  const langMenu = pipe(
    map(item => (
      <DropdownItem
        key={prop('id', item)}
        onClick={() => handleLocaleChange(prop('id', item))}
      >
        {prop('name', item)}
      </DropdownItem>
    )),
  )

  return (
    <Fragment>
      <div style={style} className="d-inline-block">
        <UncontrolledDropdown className="ml-2">
          <DropdownToggle
            caret
            color="light"
            size="sm"
            className="language-button"
          >
            <span className="name">
              {locale.charAt(0).toUpperCase() + locale.slice(1)}
            </span>
          </DropdownToggle>
          <DropdownMenu className="mt-3" right>
            {langMenu(localeOptions)}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </Fragment>
  )
}

export default enhance(Lang)
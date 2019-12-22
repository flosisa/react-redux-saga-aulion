import React from 'react'
import IntlMessages from 'Util/IntlMessages'

function TableNoData() {
  return (
    <div
      style={{ textAlign: 'center', margin: '20px' }}
    >
      <h1
        className='text-muted'
        style={{ padding: '0px', margin: '0px' }}
      >
        <IntlMessages id="table.empty" />
      </h1>
    </div>
  )
}

export default TableNoData
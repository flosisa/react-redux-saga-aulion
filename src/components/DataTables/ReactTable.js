import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import TableNoData from './TableNoData'

export default props => {
  const { tableData, tableColumns } = props;

  return <ReactTable
    className="-highlight"
    data={tableData}
    columns={tableColumns}
    minRows={0}
    resizable={true}
    showPagination={false}
    NoDataComponent={TableNoData}
  />
}
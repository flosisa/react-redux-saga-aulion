import React from 'react';
import ReactTable from 'react-table'
import TableNoData from './TableNoData'
import 'react-table/react-table.css';

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
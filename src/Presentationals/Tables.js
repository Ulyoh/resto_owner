import React from 'react';
import PropTypes from 'prop-types';
import TableOrder from './TableOrder';

const Tables = props => (
  props.tablesList.map(table =>
    <TableOrder key={`table${table.tableId}`}{...table} />)
);

Tables.propTypes = {
  tablesList: PropTypes.arrayOf(PropTypes.objectOf(TableOrder.object).isRequire).isRequired,
};

export default Tables;

import React from 'react';
import PropTypes from 'prop-types';
import TableOrder from './TableOrder';

const Tables = props => (
  props.tablesList.map(table =>
    <TableOrder id="tables" key={`table${table.tableId}`}{...table} />)
);

Tables.propTypes = {
  tablesList: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Tables;

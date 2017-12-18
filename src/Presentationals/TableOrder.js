import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Order from './Order';

const TableOrder = (props) => {
  const orderIdList = Object.assign(props.orderIdList);
  const linesQty = orderIdList.length;
  let linesLeft = linesQty;
  let list = []; // eslint-disable-line prefer-const
  orderIdList.forEach((orderId) => {
    list.push(<Order key={`${props.tableId}_${orderId}`} orderId={orderId} > test</Order>);
    if (linesLeft > 1) list.push(<Divider key={`${props.tableId}_${orderId}divider`} />);
    linesLeft -= 1;
  });

  if (list.length <= 0) return null;

  return (
    <Paper zDepth={2}>
      <h1>{props.tableId}</h1>
      {list}
    </Paper>
  );
};

TableOrder.propTypes = {
  tableId: PropTypes.string.isRequired,
  orderIdList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default TableOrder;

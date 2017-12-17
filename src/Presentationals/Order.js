import React from 'react';
import PropTypes from 'prop-types';
import ContButtonsMoreLess from '../Containers/ContButtonsMoreLess';

const Order = props => (
  <ContButtonsMoreLess orderId={props.orderId} />
);

Order.propTypes = {
  orderId: PropTypes.string.isRequired,
};

export default Order;

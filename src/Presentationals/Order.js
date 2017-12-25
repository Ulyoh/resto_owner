import React from 'react';
import PropTypes from 'prop-types';
import ButtonsMoreLessCont from '../Containers/ButtonsMoreLessCont';

const Order = props => (
  <ButtonsMoreLessCont orderId={props.orderId} />
);

Order.propTypes = {
  orderId: PropTypes.string.isRequired,
};

export default Order;

import { combineReducers } from 'redux';
import filters from './filters';
import orders from './orders';

const ordersView = combineReducers({
  orders,
  filters,
});

export default ordersView;

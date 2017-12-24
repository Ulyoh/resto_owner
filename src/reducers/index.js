import { combineReducers } from 'redux';
import filter from './filter';
import orders from './orders';

const ordersView = combineReducers({
  filter,
  orders,
});

export default ordersView;

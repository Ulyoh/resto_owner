import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ordersView from './reducers';
import App from './App';
import initOrders from './datas/initOrders';
import initFilters from './datas/initFilters';


const store = createStore(ordersView, {
  filters: initFilters,
  orders: initOrders,
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(// eslint-disable-line function-paren-newline
    <Provider store={store}><App /></Provider>, div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ordersView from './reducers';
import initOrders from './datas/initOrders';
import initFilters from './datas/initFilters';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(ordersView, {
  orders: initOrders,
  filters: initFilters,
});

ReactDOM.render( // eslint-disable-line function-paren-newline
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

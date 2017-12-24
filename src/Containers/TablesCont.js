import { connect } from 'react-redux';
import Tables from '../Presentationals/Tables';

export const mapStateToProps = (state) => {
  const step1 = {};
  state.orders.forEach((order) => {
    if (!step1[order.tableId]) {
      step1[order.tableId] = {
        tableId: order.tableId,
        orderIdList: [],
      };
    }
    step1[order.tableId].orderIdList.push(order.id);
  });
  const tablesList = [];
  Object.keys(step1).forEach((tableId) => {
    tablesList.push(step1[tableId]);
  });
  return { tablesList };
};

export default connect(mapStateToProps)(Tables);

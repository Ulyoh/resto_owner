import { connect } from 'react-redux';
import ButtonsMoreLess from '../Presentationals/ButtonsMoreLess';
import datas from '../datas/datas';
import { onDone, oneMoreTodo, allDone } from '../actions';

export const mapStateToProps = (state, ownProps) => {
  const order = state.orders.find(item => (ownProps.orderId.toString() === item.id.toString()));

  const group = datas.groups[order.groupId];
  const children = `${datas.lists[group.listId].name} -> ${datas.groups[order.groupId].name} -> ${
    datas.articles[order.articleId].name}`;
  return {
    orderId: order.id,
    labelOneDone: datas.txt.labelOneDone,
    labelOneMoreToDo: datas.txt.labelOneMoreToDo,
    labelAllDone: datas.txt.labelAllDone,
    children,
    orderDone: order.done,
    orderToDo: order.toDo,
  };
};

const mapDispatchToProps = dispatch => ({
  oneDoneClick: orderId => dispatch(onDone(orderId)),
  oneMoreTodoClick: orderId => dispatch(oneMoreTodo(orderId)),
  allDoneClick: orderId => dispatch(allDone(orderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsMoreLess);

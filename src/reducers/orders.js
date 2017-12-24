
const updateOrderOneDone = (order) => {
  if (order.done >= order.toDo) { return Object.assign({}, order, { done: order.toDo }); }
  return Object.assign({}, order, { done: order.done + 1 });
};
const updateOrderOneMoreTodo = (order) => {
  if (order.done <= 0) { return Object.assign({}, order, { done: 0 }); }
  return Object.assign({}, order, { done: order.done - 1 });
};
const updateOrderAllDone = (order) => {
  if (order.done >= order.toDo) { return Object.assign({}, order, { done: order.done }); }
  return Object.assign({}, order, { done: order.toDo });
};

const orders = (state = null, action) => {
  switch (action.type) {
    case 'ONE_DONE':
      return state.map((order) => {
        if (order.id === action.orderId) { return updateOrderOneDone(order); }
        return order;
      });

    case 'ON_MORE_TODO':
      return state.map((order) => {
        if (order.id === action.orderId) { return updateOrderOneMoreTodo(order); }
        return order;
      });

    case 'ALL_DONE':
      return state.map((order) => {
        if (order.id === action.orderId) { return updateOrderAllDone(order); }
        return order;
      });

    default: return state;
  }
};

export default orders;

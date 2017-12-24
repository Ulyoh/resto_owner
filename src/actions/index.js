
export const toggleFilterGroup = groupId => ({
  type: 'TOGGLE_FILTER_GROUP',
  groupId,
});

export const toggleFilterStatus = statusId => ({
  type: 'TOGGLE_FILTER_STATUS',
  statusId,
});

export const onDone = orderId => ({
  type: 'ONE_DONE',
  orderId,
});

export const oneMoreTodo = orderId => ({
  type: 'ON_MORE_TODO',
  orderId,
});

export const allDone = orderId => ({
  type: 'ALL_DONE',
  orderId,
});

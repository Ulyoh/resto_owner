import { toggleFilterGroup, toggleFilterStatus, onDone, oneMoreTodo, allDone } from './index';
import { actionsTypes } from '../datas/constants';

describe('actions: ', () => {
  it('toggleFilterGroup should return corresponding type', () => {
    expect(toggleFilterGroup('groupId')).toEqual({
      type: actionsTypes.TOGGLE_FILTER_GROUP,
      groupId: 'groupId',
    });
  });
  it('toggleFilterStatus should return corresponding type', () => {
    expect(toggleFilterStatus('statusId')).toEqual({
      type: actionsTypes.TOGGLE_FILTER_STATUS,
      statusId: 'statusId',
    });
  });
  it('onDone should return corresponding type', () => {
    expect(onDone('orderId')).toEqual({
      type: actionsTypes.ONE_DONE,
      orderId: 'orderId',
    });
  });
  it('oneMoreTodo should return corresponding type', () => {
    expect(oneMoreTodo('orderId')).toEqual({
      type: actionsTypes.ON_MORE_TODO,
      orderId: 'orderId',
    });
  });
  it('allDone should return corresponding type', () => {
    expect(allDone('orderId')).toEqual({
      type: actionsTypes.ALL_DONE,
      orderId: 'orderId',
    });
  });
});

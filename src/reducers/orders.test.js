import orders from './orders';
import { status } from '../datas/constants';

const state = [
  {
    id: '0',
    tableId: '100',
    articleId: '100',
    groupId: '10',
    status: status.PREPARING,
    toDo: 2,
    done: 1,
    orderTime: 0,
    timeToStartToPrepare: '',
  },
  {
    id: '1',
    tableId: '100',
    articleId: '220',
    groupId: '15',
    status: status.PREPARING,
    toDo: 5,
    done: 0,
    orderTime: 0,
    timeToStartToPrepare: '',
  },
  {
    id: '2',
    tableId: '100',
    articleId: '101',
    groupId: '10',
    status: status.PREPARING,
    toDo: 4,
    done: 4,
    orderTime: 0,
    timeToStartToPrepare: '',
  },
];

const stateCopy = state.slice(0);

describe('reducer: orders:', () => {
  it('state should be the same if the specified action is unrelevant', () => {
    const action = {
      type: 'NOT_AN_ACTION',
      orderId: '0',
    };
    expect(orders(state, action)).toEqual(state);
  });
  describe('onDone:', () => {
    it('should add one to the order.done value', () => {
      const action = {
        type: 'ONE_DONE',
        orderId: '0',
      };
      expect(state[0].done).toBe(1);
      expect(orders(state, action)[0].done).toBe(2);
    });
    it('should does not change if done = todo', () => {
      const action = {
        type: 'ONE_DONE',
        orderId: '2',
      };
      expect(state[2].done).toBe(4);
      expect(orders(state, action)[2].done).toBe(4);
    });
  });
  it('should keep the previsous state unchanged', () => {
    expect(state).toEqual(stateCopy);
  });
  describe('onMoreTodo:', () => {
    it('should decrease of one the order.done value', () => {
      const action = {
        type: 'ON_MORE_TODO',
        orderId: '2',
      };
      expect(state[2].done).toBe(4);
      expect(orders(state, action)[2].done).toBe(3);
    });
    it('should does not change if done = 0', () => {
      const action = {
        type: 'ON_MORE_TODO',
        orderId: '1',
      };
      expect(state[1].done).toBe(0);
      expect(orders(state, action)[1].done).toBe(0);
    });
  });
  it('should keep the previsous state unchanged', () => {
    expect(state).toEqual(stateCopy);
  });
  describe('allDone:', () => {
    it('should set order.done = order.todo', () => {
      const action = {
        type: 'ALL_DONE',
        orderId: '1',
      };
      expect(state[1].done).toBe(0);
      expect(orders(state, action)[1].done).toBe(5);
    });
  });
  it('should keep the previsous state unchanged', () => {
    expect(state).toEqual(stateCopy);
  });
});

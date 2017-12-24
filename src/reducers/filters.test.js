import filters from './filters';
import { status } from '../datas/constants';

const state = {
  showGroups: {
    10: true,
    15: true,
    20: true,
    30: true,
    50: true,
    70: true,

  },
  showStatus: {
    [status.ORDERED]: true,
    [status.PREPARING]: true,
    [status.PREPARED]: true,
    [status.DELIVERED]: true,
    [status.PAYED]: true,
  },
};

const stateGroup20False = {
  showGroups: {
    10: true,
    15: true,
    20: false,
    30: true,
    50: true,
    70: true,

  },
  showStatus: {
    [status.ORDERED]: true,
    [status.PREPARING]: true,
    [status.PREPARED]: true,
    [status.DELIVERED]: true,
    [status.PAYED]: true,
  },
};

const stateStatusPayedFalse = {
  showGroups: {
    10: true,
    15: true,
    20: true,
    30: true,
    50: true,
    70: true,

  },
  showStatus: {
    [status.ORDERED]: true,
    [status.PREPARING]: true,
    [status.PREPARED]: true,
    [status.DELIVERED]: true,
    [status.PAYED]: false,
  },
};

const stateCopy = { ...state };

describe('reducer: filters:', () => {
  it('state should be the same if the specified action is unrelevant', () => {
    const action = {
      type: 'NOT_AN_ACTION',
      groupId: '0',
    };
    expect(filters(state, action)).toEqual(state);
  });
  it('state should toggle a specific group by id', () => {
    const action = {
      type: 'TOGGLE_FILTER_GROUP',
      groupId: '20',
    };
    expect(filters(state, action)).toEqual(stateGroup20False);
  });
  it('should keep the previsous state unchanged', () => {
    expect(state).toEqual(stateCopy);
  });
  it('state should toggle a specific status by id', () => {
    const action = {
      type: 'TOGGLE_FILTER_STATUS',
      statusId: status.PAYED,
    };
    expect(filters(state, action)).toEqual(stateStatusPayedFalse);
  });
  it('should keep the previsous state unchanged', () => {
    expect(state).toEqual(stateCopy);
  });
});

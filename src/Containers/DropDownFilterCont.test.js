import { mapStateToProps } from './DropDownFilterCont';
import { status } from '../datas/constants';

const initialState = {
  showGroups: {
    10: true,
    15: true,
    20: false,

  },
  showStatus: {
    [status.ORDERED]: false,
    [status.PREPARING]: true,
  },
};

const result = {
  list: [
    {
      id: '10',
      type: 'group',
      label: 'Apéritifs',
      checked: true,
    },
    {
      id: '15',
      type: 'group',
      label: 'Vins',
      checked: true,
    },
    {
      id: '20',
      type: 'group',
      label: 'Sans Alcool',
      checked: false,
    },
    {
      id: status.ORDERED,
      type: 'status',
      label: 'commandé',
      checked: false,
    },
    {
      id: status.PREPARING,
      type: 'status',
      label: 'en préparation',
      checked: true,
    },
  ],
};

const copyState = Object.assign({}, initialState);

describe('<DropDownFilterCont>', () => {
  it('should convert the state to props', () => {
    expect(mapStateToProps(initialState)).toEqual(result);
  });
  it('should not modified the original state', () => {
    expect(initialState).toEqual(copyState);
  });
});

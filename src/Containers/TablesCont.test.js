
import { mapStateToProps } from './TablesCont';

const orders = [
  {
    id: '1',
    tableId: '300',
    articleId: '100',
  },
  {
    id: '2',
    tableId: '100',
    articleId: '220',
  },
  {
    id: '3',
    tableId: '200',
    articleId: '101',
  },
  {
    id: '4',
    tableId: '100',
    articleId: '500',
  },
  {
    id: '5',
    tableId: '100',
    articleId: '501',
  },
  {
    id: '6',
    tableId: '200',
    articleId: '522',
  },
];

const initialState = { orders };

const tablesList = [
  {
    tableId: '100',
    orderIdList: ['2', '4', '5'],
  }, {
    tableId: '200',
    orderIdList: ['3', '6'],
  }, {
    tableId: '300',
    orderIdList: ['1'],
  },
];

const resultProps = { tablesList };

const copyState = Object.assign({}, initialState);

describe('<TablesCont>', () => {
  it('should convert normalized orders from state to nested values', () => {
    expect(mapStateToProps(initialState)).toEqual(resultProps);
  });
  it('should not modified the original state', () => {
    expect(initialState).toEqual(copyState);
  });
});

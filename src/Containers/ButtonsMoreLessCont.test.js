import { mapStateToProps } from './ButtonsMoreLessCont';
import initOrders from '../datas/initOrders';
import datas from '../datas/datas';

const initialState = { orders: initOrders };

describe('ButtonsMoreLessCont:', () => {
  it('should convert the state to props', () => {
    expect(mapStateToProps(initialState, { orderId: 1 })).toEqual({
      orderId: '1',
      labelOneDone: datas.txt.labelOneDone,
      labelOneMoreToDo: datas.txt.labelOneMoreToDo,
      labelAllDone: datas.txt.labelAllDone,
      children: 'boissons -> Apéritifs -> martini rouge',
      orderDone: 0,
      orderToDo: 2,
    });
  });
});

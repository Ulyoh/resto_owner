import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonsMoreLess from './ButtonsMoreLess';
import datas from '../datas/datas';


Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    orderId: 'id',
    oneMoreTodoClick: jest.fn(),
    oneDoneClick: jest.fn(),
    allDoneClick: jest.fn(),
    labelOneDone: datas.txt.labelOneDone,
    labelOneMoreToDo: datas.txt.labelOneMoreToDo,
    labelAllDone: datas.txt.labelAllDone,
    children: "order's name",
    orderDone: 2,
    orderToDo: 5,
  };

  const enzymeWrapper = mount(<MuiThemeProvider><ButtonsMoreLess {...props} /></MuiThemeProvider>);

  return {
    props,
    enzymeWrapper,
  };
}

describe('ButtonsMoreLess', () => {
  it('should call props.oneMoreTodoClick', () => {
    const { enzymeWrapper, props } = setup();
    // TODO : when update to material ui v1: use class to find (does not work decemer 17th 2017)
    const buttons = enzymeWrapper.find('button');

    const oneMoreToDoBtn = buttons.first();
    expect(props.oneMoreTodoClick).not.toBeCalled();
    oneMoreToDoBtn.simulate('click', { preventDefault() {} });
    expect(props.oneMoreTodoClick).toBeCalled();
  });

  it('should call props.oneDoneClick', () => {
    const { enzymeWrapper, props } = setup();
    // TODO : when update to material ui v1: use class to find (does not work decemer 17th 2017)
    const buttons = enzymeWrapper.find('button');

    const oneDoneButton = buttons.at(1);
    expect(props.oneDoneClick).not.toBeCalled();
    oneDoneButton.simulate('click', { preventDefault() {} });
    expect(props.oneDoneClick).toBeCalled();
  });

  it('should call props.allDoneClic', () => {
    const { enzymeWrapper, props } = setup();
    // TODO : when update to material ui v1: use class to find (does not work decemer 17th 2017)
    const buttons = enzymeWrapper.find('button');

    const allDoneBtn = buttons.at(2);
    expect(props.allDoneClick).not.toBeCalled();
    allDoneBtn.simulate('click', { preventDefault() {} });
    expect(props.allDoneClick).toBeCalled();
  });
});


describe('ButtonsMoreLess', () => {
  const props = {
    orderId: 'id',
    oneDoneClick: () => {},
    oneMoreTodoClick: () => {},
    allDoneClick: () => {},
    labelOneDone: datas.txt.labelOneDone,
    labelOneMoreToDo: datas.txt.labelOneMoreToDo,
    labelAllDone: datas.txt.labelAllDone,
    children: "order's name",
    orderDone: 2,
    orderToDo: 5,
  };

  it('should show all buttons enable', () => {
    const component = renderer.create( // eslint-disable-line function-paren-newline
      <MuiThemeProvider>
        <ButtonsMoreLess {...props} />
      </MuiThemeProvider>);

    // all button must be validated
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show "one more" and "all done" buttons disabled', () => {
    props.orderDone = 5;
    // "one done" and "all done" must be devalidated"
    const component = renderer.create( // eslint-disable-line function-paren-newline
      <MuiThemeProvider>
        <ButtonsMoreLess {...props} />
      </MuiThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show "one less" button disabled', () => {
    props.orderDone = 0;
    // "one more todo" must be devalidated"
    const component = renderer.create( // eslint-disable-line function-paren-newline
      <MuiThemeProvider>
        <ButtonsMoreLess {...props} />
      </MuiThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

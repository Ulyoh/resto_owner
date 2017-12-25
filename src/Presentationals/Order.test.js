import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Order from './Order';

Enzyme.configure({ adapter: new Adapter() });

// mock children containers:
jest.mock('../Containers/ContButtonsMoreLess', () => {
  const ContButtonsMoreLess = () => (<span />);
  return ContButtonsMoreLess;
});

const props = {
  orderId: 'orderId',
};

function setup() {
  const enzymeWrapper = mount(<Order {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Order', () => {
  const { enzymeWrapper } = setup();
  const { ...buttonsProps } = enzymeWrapper.find('ContButtonsMoreLess').props();

  it('should give the right props to ContButtonsMoreLess', () => {
    expect(buttonsProps).toEqual({
      orderId: 'orderId',
    });
  });
});

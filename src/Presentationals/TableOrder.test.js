import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableOrder from './TableOrder';

Enzyme.configure({ adapter: new Adapter() });

// mock children containers:
jest.mock('../Containers/ButtonsMoreLessCont', () => {
  const ButtonsMoreLessCont = () => (<span />);
  return ButtonsMoreLessCont;
});

function setup(props) {
  return mount(<MuiThemeProvider><TableOrder {...props} /></MuiThemeProvider>);
}

describe('TableOrder', () => {
  it('should contain the table number as a title', () => {
    const props = {
      tableId: '123',
      orderIdList: ['id1', 'id2', 'id3', 'id4'],
    };
    const enzymeWrapper = setup(props);
    expect(enzymeWrapper.find('h1')).toHaveLength(1);
  });
  it('should have one divider less than orderIdList length', () => {
    const props = {
      tableId: '123',
      orderIdList: ['id1', 'id2', 'id3', 'id4'],
    };
    const enzymeWrapper = setup(props);
    // hr is used by material ui to create the divider
    expect(enzymeWrapper.find('hr')).toHaveLength(3);
    expect(enzymeWrapper.find('Order')).toHaveLength(4);
    // Paper is represent by a div
    expect(enzymeWrapper.find('div')).toHaveLength(1);
  });
  it('should have no divider if length list is 1', () => {
    const props = {
      tableId: '123',
      orderIdList: ['id1'],
    };
    const enzymeWrapper = setup(props);
    // hr is used by material ui to create the divider
    expect(enzymeWrapper.find('hr')).toHaveLength(0);
    expect(enzymeWrapper.find('Order')).toHaveLength(1);
    // Paper is represent by a div
    expect(enzymeWrapper.find('div')).toHaveLength(1);
  });
  it('should have one divider less than orderIdList length', () => {
    const props = {
      tableId: '123',
      orderIdList: [],
    };
    const enzymeWrapper = setup(props);
    // hr is used by material ui to create the divider
    expect(enzymeWrapper.find('hr')).toHaveLength(0);
    // Paper is represent by a div
    expect(enzymeWrapper.find('div')).toHaveLength(0);
  });
});

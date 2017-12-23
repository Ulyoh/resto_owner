import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tables from './Tables';

Enzyme.configure({ adapter: new Adapter() });

function setup(props) {
  return mount(<MuiThemeProvider><Tables {...props} /></MuiThemeProvider>);
}

describe('Tables', () => {
  it('should contain same qty of <TableOrder/> as the length list', () => {
    const props = {
      tablesList: [
        {
          tableId: 'id1',
          orderIdList: [],
        }, {
          tableId: 'id2',
          orderIdList: [],
        }],
    };

    const enzymeWrapper = setup(props);
    expect(enzymeWrapper.find('TableOrder')).toHaveLength(2);
  });
});

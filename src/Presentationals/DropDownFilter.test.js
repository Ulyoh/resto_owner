import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownFilter from './DropDownFilter';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    list: [
      {
        label: '1 checked',
        checked: true,
        onCheck: jest.fn(),
      },
      {
        label: '2 checked',
        checked: true,
        onCheck: jest.fn(),
      },
      {
        label: '3 not checked',
        checked: false,
        onCheck: jest.fn(),
      },
      {
        label: '4 not checked',
        checked: false,
        onCheck: jest.fn(),
      },
      {
        label: '5 checked5',
        checked: true,
        onCheck: jest.fn(),
      },
    ],
  };

  const enzymeWrapper = mount(<MuiThemeProvider><DropDownFilter {...props} /></MuiThemeProvider>);

  return {
    props,
    enzymeWrapper,
  };
}

describe('DropDownFilter', () => {
  it('should set the checked button properly', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('Checkbox').filter('[checked=true]')).toHaveLength(3);
    expect(enzymeWrapper.find('Checkbox').filter('[checked=false]')).toHaveLength(2);
  });
  /* TODO: make the following test working properly
  it('should set the checked button properly (snapshot)', () => {
    const { props } = setup();
    const component = renderer.create( // eslint-disable-line function-paren-newline
      <MuiThemeProvider>
        <DropDownFilter {...props} />
      </MuiThemeProvider>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  }); */
  it('should call the onCheck function', () => {
    const { enzymeWrapper, props } = setup();
    /* TODO : when update to material ui v1: replace 'input' by 'CheckBox'
     in find (does not work at decemer 23th 2017) */
    const firstCheckBox = enzymeWrapper.find('input').first();
    expect(props.list[0].onCheck).not.toBeCalled();
    firstCheckBox.simulate('change', { preventDefault() {} });
    expect(props.list[0].onCheck).toBeCalled();
  });
});

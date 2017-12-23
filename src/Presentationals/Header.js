import React from 'react';
// import PropTypes from 'prop-types';
import Toolbar, { ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownFilterCont from '../Containers/DropDownFilterCont';
import datas from '../datas/datas';

const onClick = (e) => {
  e.preventDefault();
  document.getElementsById('table').animate({ scrollTop: 0 }, 'fast');
};

const Header = () => (
  <Toolbar>
    <ToolbarGroup firstChild>
      <DropDownFilterCont />
    </ToolbarGroup>
    <ToolbarGroup lastChild>
      <RaisedButton
        label={datas.txt.goUp}
        primary
        onClick={onClick}
      />
    </ToolbarGroup>
  </Toolbar>);

Header.propTypes = {
};

export default Header;

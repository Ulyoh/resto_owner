import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'material-ui/Checkbox';

const DropDownFilter = props => (
  props.list.map(item => <CheckBox key={`ckb${item.label}`} {...item} />));

DropDownFilter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired,
  })).isRequired,
};

export default DropDownFilter;

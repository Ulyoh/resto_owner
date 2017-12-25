import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'material-ui/Checkbox';

const onChange = (id, type, cb) => {
  if (type === 'group') cb.toggleFilterGroup(id);
  if (type === 'status') cb.toggleFilterStatus(id);
};

const DropDownFilter = props => (
  props.list.map((item) => {
    const {
      id, type, label, checked,
    } = item;
    return (<CheckBox
      key={`ckb${label}`}
      checked={checked}
      onCheck={() => { onChange(id, type, props.cb); }}
    />
    );
  }));

DropDownFilter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['group', 'status']).isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  })).isRequired,
  cb: PropTypes.shape({
    toggleFilterGroup: PropTypes.func.isRequired,
    toggleFilterStatus: PropTypes.func.isRequired,
  }),
};

export default DropDownFilter;

import { connect } from 'react-redux';
import DropDownFilter from '../Presentationals/DropDownFilter';
import { toggleFilterGroup, toggleFilterStatus } from '../actions';
import datas from '../datas/datas';

export const mapStateToProps = (state) => {
  const { showGroups, showStatus } = state;
  const list = [];
  Object.keys(showGroups).forEach((id) => {
    list.push({
      id,
      type: 'group',
      label: datas.groups[id].name,
      checked: showGroups[id],
    });
  });
  console.log(datas.status);
  Object.keys(showStatus).forEach((id) => {
    list.push({
      id,
      type: 'status',
      label: datas.status[id],
      checked: showStatus[id],
    });
  });

  return { list };
};


const mapDispatchToProps = dispatch => ({
  cb: {
    toggleFilterGroup: groupId => dispatch(toggleFilterGroup(groupId)),
    toggleFilterStatus: groupId => dispatch(toggleFilterStatus(groupId)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownFilter);

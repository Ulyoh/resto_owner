const toggleFilterGroup = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER_GROUP':
      return Object.assign({}, state, {
        [action.groupId]: !state[action.groupId],
      });
    default: return state;
  }
};

const toggleFilterStatus = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER_STATUS':
      return Object.assign({}, state, {
        [action.statusId]: !state[action.statusId],
      });
    default: return state;
  }
};
const initState = {
  showGroups: null,
  showStatus: null,
};
const filters = (state = initState, action) => ({
  showGroups: toggleFilterGroup(state.showGroups, action),
  showStatus: toggleFilterStatus(state.showStatus, action),
});

export default filters;

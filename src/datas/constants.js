
const status = {
  ORDERED: 0,
  PREPARING: 10,
  PREPARED: 20,
  DELIVERED: 30,
  PAYED: 40,
};

const empty = {
  forESLint: 'shutup',
};

const actionsTypes = {
  TOGGLE_FILTER_GROUP: 'TOGGLE_FILTER_GROUP',
  TOGGLE_FILTER_STATUS: 'TOGGLE_FILTER_STATUS',
  ONE_DONE: 'ONE_DONE',
  ON_MORE_TODO: 'ON_MORE_TODO',
  ALL_DONE: 'ALL_DONE',
};
export { status, empty, actionsTypes };

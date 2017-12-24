import { status } from './constants';

const initFilters = {
  showGroups: {
    10: true,
    15: true,
    20: true,
    30: true,
    50: true,
    70: true,

  },
  showStatus: {
    [status.ORDERED]: true,
    [status.PREPARING]: true,
    [status.PREPARED]: true,
    [status.DELIVERED]: true,
    [status.PAYED]: true,

  },
};

export default initFilters;

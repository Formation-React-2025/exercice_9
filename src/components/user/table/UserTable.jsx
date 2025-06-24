import React  from 'react';
import PropTypes from 'prop-types';
import SortDirectionConstants from '../../../constants/SortDirection.constants';
import User from '../../../models/User.model';
import DateUtils from '../../../utils/Date.utils';
import Table from '../../table/Table';
import UserColumns from './UserColumns';

const {
  toTimestampString,
} = DateUtils;

const {
  USER_COLUMNS,
} = UserColumns;

const {
  ASC,
  DESC,
} = SortDirectionConstants;

const compareStrings = (str1, str2) => str1.localeCompare(str2);
const compareDates = (date1, date2) => compareStrings(toTimestampString(date1), toTimestampString(date2));

const sortFn = (order, direction) => {
  if (!order || !direction || (direction !== ASC && direction !== DESC)) {
    return () => 0;
  }

  const multiplicateur = direction === ASC ? 1 : -1;
  if (order === 'dateNaissance') {
    return (row1, row2) => (-1 * multiplicateur * compareDates(row1[order], row2[order]));
  }

  if (order === 'modifiedAt') {
    return (row1, row2) => (multiplicateur * compareDates(row1[order], row2[order]));
  }

  return (row1, row2) => (multiplicateur * compareStrings(row1[order], row2[order]));
};


const UserTable = ({
  users = [],
}) => (
  <Table
    columns={USER_COLUMNS}
    rows={users}
    sortFn={sortFn}
  />
);

UserTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)),
};

export default UserTable;

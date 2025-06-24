import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SortDirectionConstants from '../../../constants/SortDirection.constants';
import User from '../../../models/User.model';
import DateUtils from '../../../utils/Date.utils';
import HeaderCell from '../../table/header-cell/HeaderCell';
import UserRow from './UserRow';
import UserColumns from './UserColumns';
import './UserTable.css';

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
}) => {
  const [
    sort,
    setSort,
  ] = useState({
    order: '',
    direction: '',
  });

  return (
    <table className="user-table">
      <thead>
        <tr>
          {USER_COLUMNS.map((c) => (
            <HeaderCell
              key={c.id}
              column={c}
              sort={sort}
              onSortChange={setSort}
            />
          ))}
        </tr>
      </thead>

      <tbody>
        {users.toSorted(sortFn(sort.order, sort.direction)).map((u) => (
            <UserRow
              key={u.id}
              user={u}
              columns={USER_COLUMNS}
            />
        ))}
      </tbody>

    </table>
  )
};

UserTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)),
};

export default UserTable;

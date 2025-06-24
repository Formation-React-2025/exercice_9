import React from 'react';
import PropTypes from 'prop-types';
import UserCell from './UserCell';
import UserColumns from './UserColumns';
import User from '../../../models/User.model';

const {
  columnPropsType,
} = UserColumns;

const UserRow = ({
  user,
  columns,
}) => (
  <tr>
    {columns.map((c) => (
      <UserCell
        key={c.id}
        user={user}
        column={c}
      />
    ))}
  </tr>
);

UserRow.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  columns: PropTypes.arrayOf(columnPropsType),
};

export default UserRow;

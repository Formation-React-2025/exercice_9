import React from 'react';
import PropTypes from 'prop-types';
import User from '../../../models/User.model';
import UserColumns from './UserColumns';

const {
  columnPropsType,
} = UserColumns;

const UserCell = ({
  column,
  user,
}) => (column.component === 'th' && (
  <th scope="row">
    {column.render(user)}
  </th>
)) || (
  <td>
    {column.render(user)}
  </td>
);

UserCell.propTypes = {
  column: columnPropsType.isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};

export default UserCell;

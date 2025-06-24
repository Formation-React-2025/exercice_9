import React from 'react';
import PropTypes from 'prop-types';
import UserColumns from '../../user/table/UserColumns';

const {
  columnPropsType,
} = UserColumns;

const Cell = ({
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

Cell.propTypes = {
  column: columnPropsType.isRequired,
  user: PropTypes.any,
};

export default Cell;

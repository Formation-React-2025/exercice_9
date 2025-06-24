import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../cell/Cell';
import UserColumns from '../../user/table/UserColumns';
import User from '../../../models/User.model';

const {
  columnPropsType,
} = UserColumns;

const Row = ({
  user,
  columns,
}) => (
  <tr>
    {columns.map((c) => (
      <Cell
        key={c.id}
        user={user}
        column={c}
      />
    ))}
  </tr>
);

Row.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  columns: PropTypes.arrayOf(columnPropsType),
};

export default Row;

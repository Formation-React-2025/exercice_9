import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../pagination/Pagination';
import HeaderCell from './header-cell/HeaderCell';
import Row from './row/Row';
import './Table.css';

const Table = ({
  columns = [],
  rows = [],
  sortFn = (order, direction) => ((row1, row2) => 0),
}) => {
  const [
    currentState,
    setCurrentState,
  ] = useState({
    sort: {
      order: '',
      direction: '',
    },
    page: {
      index: 0,
      size: 10,
    },
  });

  const onSortChange = (sort) => setCurrentState({
    ...currentState,
    sort,
  });

  const onPageChange = (pageNumber) => setCurrentState({
    ...currentState,
    page: {
      ...currentState.page,
      index: pageNumber - 1,
    }
  });

  return (
    <table>
      <thead>
        <tr>
          {columns.map((c) => (
            <HeaderCell
              key={c.id}
              column={c}
              sort={currentState.sort}
              onSortChange={onSortChange}
            />
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.toSorted(sortFn(
          currentState.sort.order,
          currentState.sort.direction
        )).slice(
          currentState.page.index * currentState.page.size,
          (currentState.page.index + 1) * currentState.page.size
        ).map((u) => (
            <Row
              key={u.id}
              user={u}
              columns={columns}
            />
        ))}
      </tbody>

      <tfoot>
        <tr>
          <th
            scope="row"
            colSpan="8"
          >
            <Pagination
              pageSize={currentState.page.size}
              total={rows.length}
              onPageChange={onPageChange}
            />
          </th>
        </tr>
      </tfoot>
    </table>
)
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    render: PropTypes.func,
    component: PropTypes.string,
  })),
  rows: PropTypes.arrayOf(PropTypes.any),
  sortFn: PropTypes.func,
};

export default Table;

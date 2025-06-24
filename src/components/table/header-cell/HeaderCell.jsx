import React from 'react';
import PropTypes from 'prop-types';
import SortDirectionConstants from '../../../constants/SortDirection.constants';
import ColumnTypes from '../../../types/Column.types';
import SortTypes from '../../../types/Sort.types';
import SortIncactiveIcon from '../../icons/sort/SortIncactiveIcon';
import SortDescIcon from '../../icons/sort/SortDescIcon';
import './HeaderCell.css';

const {
  ASC,
  DESC,
} = SortDirectionConstants;

const newSort = (previousOrder, previousDirection, order) => {
  if (previousOrder !== order || !previousDirection) {
    return {
      order,
      direction: ASC,
    };
  }

  if (previousDirection === DESC) {
    return {
      order: '',
      direction: ''
    };
  }

  return {
    order,
    direction: DESC,
  };
};

const buttonClassName = (sort, id) => {
  if (sort.order !== id || sort.direction === '') {
    return 'inactive';
  }

  if (sort.direction === ASC) {
    return 'active-asc';
  }

  return 'active-desc';
}

const HeaderCell = ({
  column,
  sort = {
    order: '',
    direction: '',
  },
  onSortChange = undefined,
}) => (
  <th
    className="sort-header"
    scope="col"
  >
    <button
      className={buttonClassName(sort, column.id)}
      type="button"
      onClick={() => onSortChange?.(newSort(sort.order, sort.direction, column.id))}
    >
      {column.title}

      {((sort.order !== column.id || !sort.direction) && (
        <SortIncactiveIcon
          color="transparent"
        />
      )) || (
        <SortDescIcon />
      )}
    </button>
  </th>
);

HeaderCell.propTypes = {
  column: ColumnTypes.isRequired,
  sort: SortTypes,
  onSortChange: PropTypes.func,
};

export default HeaderCell;


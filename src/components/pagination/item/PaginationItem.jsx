import React from 'react';
import PropTypes from 'prop-types';
import './PaginationItem.css';

const PaginationItem = ({
  active = false,
  onClick = undefined,
  pageNumber = 0,
}) => (
  <button
    className={`pagination-item${active ? ' active' : ''}`}
    onClick={() => onClick?.()}
  >
    {pageNumber}
  </button>
);

PaginationItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  pageNumber: PropTypes.number,
};

export default PaginationItem;

import React from 'react';
import PropTypes from 'prop-types';
import './PaginationArrow.css';

const PaginationArrow = ({
  disabled = false,
  onClick = undefined,
  children = undefined,
}) => (
  <button
    type="button"
    className="pagination-arrow"
    onClick={() => onClick?.()}
    disabled={disabled}
  >
    {children}
  </button>
);

PaginationArrow.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default PaginationArrow;

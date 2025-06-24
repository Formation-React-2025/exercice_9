import React from 'react';
import PropTypes from 'prop-types';

const SortIncactiveIcon = ({
  size = '24px',
  color = 'currentColor',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={size}
    width={size}
    fill={color}
  >
    <path
      d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"
    />
  </svg>
)
;

SortIncactiveIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default SortIncactiveIcon;

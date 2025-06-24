import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = ({
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
    <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
  </svg>
);

ArrowLeft.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default ArrowLeft;
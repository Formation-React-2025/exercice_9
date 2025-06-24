import React from 'react';
import PropTypes from 'prop-types';

const SortDescIcon = ({
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
      d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
    />
  </svg>
);

SortDescIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default SortDescIcon;

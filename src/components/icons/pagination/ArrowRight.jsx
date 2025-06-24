import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = ({
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
        d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
      />
    </svg>
  )
;

ArrowRight.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default ArrowRight;

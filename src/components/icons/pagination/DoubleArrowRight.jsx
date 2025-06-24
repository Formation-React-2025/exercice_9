import React  from 'react';
import PropTypes from 'prop-types';

const DoubleArrowRight = ({
  className = undefined,
  size= '24px',
  color = 'currentColor',
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={size}
    width={size}
    fill={color}
  >
    <path
      d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
    />
  </svg>
);

DoubleArrowRight.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default DoubleArrowRight;

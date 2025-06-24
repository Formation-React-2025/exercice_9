import React  from 'react';
import PropTypes from 'prop-types';
import DoubleArrowRight from './DoubleArrowRight';
import '../Icons.css';

const DoubleArrowLeft = ({
  size= '24px',
  color = 'currentColor',
}) => (
  <DoubleArrowRight
    className="rotate-180"
    size={size}
    color={color}
  />
);

DoubleArrowLeft.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default DoubleArrowLeft;

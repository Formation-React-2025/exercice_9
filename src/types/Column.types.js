import PropTypes from 'prop-types';

const ColumnTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  render: PropTypes.func.isRequired,
  component: PropTypes.string,
});

export default ColumnTypes;

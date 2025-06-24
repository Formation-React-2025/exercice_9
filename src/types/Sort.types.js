import PropTypes from 'prop-types';
import SortDirectionConstants from '../constants/SortDirection.constants';

const {
  ASC,
  DESC,
} = SortDirectionConstants;

const SortTypes = PropTypes.shape({
  order: PropTypes.string,
  direction: PropTypes.oneOf([
    '',
    ASC,
    DESC,
  ])
});

export default SortTypes;

import CivilitesConstants from '../../../constants/Civilites.constants';
import PropTypes from 'prop-types';

const {
  CIVILITES,
} = CivilitesConstants;

const IDENTIFIANT_COLUMN = {
  id: 'id',
  title: 'Identifiant',
  render: (u) => u.id,
  component: 'th',
};

const CIVILITE_COLUMN = {
  id: 'civilite',
  title: 'Civilité',
  render: (u) => CIVILITES[u.civilite],
};

const PRENOM_COLUMN = {
  id: 'prenom',
  title: 'Prénom',
  render: (u) => u.prenom,
};

const NOM_COLUMN = {
  id: 'nom',
  title: 'Nom',
  render: (u) => u.nom,
};

const AGE_COLUMN = {
  id: 'dateNaissance',
  title: 'Âge',
  render: (u) => `${u.getAge()} ans`,
};

const E_MAIL_COLUMN = {
  id: 'email',
  title: 'E-mail',
  render: (u) => u.email,
};

const DATE_DERNIERE_MODIFICATION_COLUMN = {
  id: 'modifiedAt',
  title: 'Date de dernière modification',
  render: (u) => `Le ${u.modifiedAt.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })}`,
};

const USER_COLUMNS = [
  IDENTIFIANT_COLUMN,
  CIVILITE_COLUMN,
  PRENOM_COLUMN,
  NOM_COLUMN,
  AGE_COLUMN,
  E_MAIL_COLUMN,
  DATE_DERNIERE_MODIFICATION_COLUMN,
];

const columnPropsType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  render: PropTypes.func.isRequired,
  component: PropTypes.string,
});

const columnDefaultProps = {
  title: '',
  component: 'td',
};

const UserColumns = {
  USER_COLUMNS,
  columnPropsType,
  columnDefaultProps,
};

export default UserColumns;

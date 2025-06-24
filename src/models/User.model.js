import DateUtils from '../utils/Date.utils';
import {
  differenceInYears,
} from 'date-fns';

const {
  toDate,
  toTimestamp,
} = DateUtils;

class User {
  constructor(u) {
    this.id = u.id;
    this.createdAt = toTimestamp(u.createdAt);
    this.createdBy = u.createdBy?.trim() ?? '';
    this.modifiedAt = toTimestamp(u.modifiedAt);
    this.modifiedBy = u.modifiedBy?.trim() ?? '';
    this.civilite = u.civilite?.trim() ?? '';
    this.prenom = u.prenom?.trim() ?? '';
    this.nom = u.nom?.trim() ?? '';
    this.dateNaissance = toDate(u.dateNaissance);
    this.email = u.email?.trim() ?? '';
  }

  getAge() {
    if (!this.dateNaissance) {
      return null;
    }

    return differenceInYears(new Date(), this.dateNaissance);
  }
}

export default User;

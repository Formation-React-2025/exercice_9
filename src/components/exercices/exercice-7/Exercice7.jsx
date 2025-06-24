import React, { useMemo, } from 'react';
import ExerciceLayout from '../../layout/exercice-layout/ExerciceLayout';
import usersJon from '../../../datas/users.json';
import User from '../../../models/User.model';
import UserTable from './UserTable';

const Exercice7 = () => {
  const users = useMemo(() => usersJon.map((u) => new User(u)), []);

  return (
    <ExerciceLayout
      title="Exercice 7 - Tableau avec tri et pagination"
    >
      <UserTable users={users} />
    </ExerciceLayout>
  );
};

export default Exercice7;

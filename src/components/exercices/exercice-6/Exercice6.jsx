import React, { useState, } from 'react';
import ExerciceLayout from '../../layout/exercice-layout/ExerciceLayout';
import UserTable from './UserTable';
import usersJon from '../../../datas/users_small.json';
import User from '../../../models/User.model';

const Exercice6 = () => {
  const [
    users,
  ] = useState(usersJon.map((u) => new User(u)));

  return (
    <ExerciceLayout
      title="Exercice 6"
    >
      <UserTable users={users} />
    </ExerciceLayout>
  );
}

export default Exercice6;

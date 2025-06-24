import React from 'react';
import { useQuery, } from '@tanstack/react-query';
import User from '../../../models/User.model';
import ExerciceLayout from '../../layout/exercice-layout/ExerciceLayout';
import UserTable from '../../user/table/UserTable';
import axios from 'axios';

const getUser = async (id) => {
  const response = await axios.get(`http://localhost:8080/users`);
  return response.data?.map((u) => new User(u));
};

const Exercice8 = () => {
  const {
    data: users,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUser,
  });

  return (
    <ExerciceLayout
      title="Exercice 8 - Récupération des users depuis une API externe"
    >
      <UserTable users={users} />
    </ExerciceLayout>
  );
};

export default Exercice8;

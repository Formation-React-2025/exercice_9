import React, { useState, } from 'react';
import User from '../../../models/User.model';
import usersJon from '../../../datas/users_small.json';
import UserRow from './UserRow';
import UserColumns from './UserColumns';
import './UserTable.css';

const {
  USER_COLUMNS,
} = UserColumns;

const UserTable = () => {
  const [
    users,
  ] = useState(usersJon.map((u) => new User(u)));

  return (
    <table className="user-table">
      <thead>
        <tr>
          {USER_COLUMNS.map((c) => (
            <th key={c.id}>
              {c.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
            <UserRow
              key={u.id}
              user={u}
              columns={USER_COLUMNS}
            />
        ))}
      </tbody>

    </table>
  )
};


export default UserTable;

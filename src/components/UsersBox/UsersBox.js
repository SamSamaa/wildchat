import React from 'react';
import MyProfile from '../MyProfile/MyProfile';
import Counter from '../Counter/Counter';
import UsersList from '../UsersList/UsersList';

function UsersBox() {
  return (
    <div className='Usersbox'>
      <MyProfile />
      <Counter />
      <UsersList />
    </div>
  )
}

export default UsersBox;
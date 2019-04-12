import React from 'react';
import MyProfile from './MyProfile/MyProfile';
import Counter from './Counter/Counter';
import UsersList from './UsersList/UsersList';
import './UsersBox.css'

function UsersBox() {
  return (
    <div className='UsersBox'>
      <MyProfile />
      <Counter />
      <UsersList />
    </div>
  )
}

export default UsersBox;
import React from 'react';
import MyProfile from './MyProfile/MyProfile';
import Counter from './Counter/Counter';
import UsersList from './UsersList/UsersList';
import './UsersBox.css'

function UsersBox(props) {
  return (
    <div className='UsersBox'>
      <MyProfile />
      <Counter />
      <UsersList atUser={props.atUser} />
    </div>
  )
}

export default UsersBox;
import React from 'react';
import User from '../User/User';
import { List } from 'semantic-ui-react';
import './UsersList.css';

function UsersList() {
  return (
    <List className='UsersList'>
      <List.Item><User /></List.Item>
      <List.Item><User /></List.Item>
      <List.Item><User /></List.Item>
      <List.Item><User /></List.Item>
      <List.Item><User /></List.Item>
      <List.Item><User /></List.Item>
    </List>
  )
}

export default UsersList;
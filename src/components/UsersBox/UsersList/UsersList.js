import React, { useState} from 'react';
import User from '../../User/User';
import { List } from 'semantic-ui-react';
import { Client } from "../../../Client";
import './UsersList.css';

function UsersList() {

  const [users, setUsers] = useState([]);

  Client.receivedNewConnection(data => setUsers(data.users));
  Client.receiveDisconnection(() => setUsers(users));

  return (
    <List className='UsersList'>
      {
        users.map((user, index) => {
          return <List.Item key={index} ><User name={user} /></List.Item>
        })
      }
    </List>
  )
}

export default UsersList;
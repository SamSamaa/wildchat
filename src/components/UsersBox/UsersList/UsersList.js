import React, { useState, useEffect } from 'react';
import User from '../../User/User';
import { List } from 'semantic-ui-react';
import { Client } from "../../../Client";
import './UsersList.css';

function UsersList(props) {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    Client.receivedNewConnection((data) => {setUsers(data.users); setUser(data.user)});
    Client.receiveDisconnection((data) => setUsers(data.users));
  }, []); // = componentDidMount

  return (
    <List className='UsersList'>
      {props.connected ?
        users.map((user, index) => {
          return <List.Item key={index} >
            <User
              atUser={props.atUser}
              user={user}/>
          </List.Item>
        })
        : null}
    </List>
  )
}

export default UsersList;
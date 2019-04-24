import React, { useState, useEffect } from 'react';
import User from '../../User/User';
import { List } from 'semantic-ui-react';
import { Client } from "../../../Client";
import './UsersList.css';

function UsersList(props) {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    Client.receivedNewConnection((data) => setUsers(data));
    Client.receiveDisconnection((data) => setUsers(data));
  }, []); // = componentDidMount


  return (
    <List className='UsersList'>
      {
        users.map((user, index) => {
          return <List.Item key={index} ><User atUser={props.atUser}  name={user.name} id={user.id}/></List.Item>
        })
      }
    </List>
  )
}

export default UsersList;
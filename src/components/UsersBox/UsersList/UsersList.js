import React, { useState, useEffect, useContext } from 'react';
import User from '../../User/User';
import { ConnectedCtx } from '../../../App';
import { List } from 'semantic-ui-react';
import { Client } from "../../../Client";
import './UsersList.css';

function UsersList(props) {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const [connected, setConnected] = useContext(ConnectedCtx);

  useEffect(() => {
    Client.receivedNewConnection((data) => {setUsers(data.users); setUser(data.user)});
    Client.receiveDisconnection((data) => setUsers(data.users));
  }, []) // = componentDidMount

  return (
    <List className='UsersList'>
      {connected ?
        users.map((user, index) => {
          return <List.Item key={index} >
            <User
              user={user}/>
          </List.Item>
        })
        : null}
    </List>
  )
}

export default UsersList;
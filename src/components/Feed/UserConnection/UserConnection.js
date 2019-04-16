import React, { useState, useEffect } from 'react';
import User from '../../User/User';
import {Message, List } from 'semantic-ui-react';
import { Client } from "../../../Client";
import './UserConnection.css';

function UserConnection() {

  const [connected, setConnected] = useState('');
  const [disconnected, setDisconnected] = useState('');

  Client.receiveNewUserConnection(data => setConnected(data.name));
  Client.receiveNewUserDisconnection(data => setDisconnected(data.name));


  return (
    <div>
    <Message compact className='msg'>
      <User name={connected} /> is connected !
    </Message>
    <Message compact className='msg'>
      <User name={disconnected} /> is disconnected !
    </Message>
    </div>
  )
}

export default UserConnection;
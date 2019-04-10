import React from 'react';
import User from '../User/User';
import Msg from '../Msg/Msg';
import { Message } from 'semantic-ui-react';
import './UserMsg.css';

function UserMsg() {
  return (
    <Message compact className='msg'><p className='msg'><User /> <Msg /></p></Message>
  )
}

export default UserMsg;
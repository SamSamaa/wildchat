import React from 'react';
import User from '../User/User';
import Msg from '../Msg/Msg';
import './UserMsg.css';

function UserMsg() {
  return (
    <p className='msg'><User /> <Msg /></p>
  )
}

export default UserMsg;
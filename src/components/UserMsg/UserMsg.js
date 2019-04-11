import React from 'react';
import User from '../User/User';
import Msg from '../Msg/Msg';
import { Message } from 'semantic-ui-react';
import './UserMsg.css';


function UserMsg(props) {
  return (
    <Message compact className='msg' ><p className='msg'><User name={props.name} /> <Msg message={props.message}/></p></Message>
  )
}

export default UserMsg;
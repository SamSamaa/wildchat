import React from 'react';
import User from '../User/User';
import Msg from '../Msg/Msg';
import { Message } from 'semantic-ui-react';
import './UserMsg.css';

//props serve to receive data from parent component
function UserMsg(props) {
  return (
    // we receive props.name from Feed and "transform" it in name to send to child component User
    // we receive props.message from Feed and "transform" it in message to send to child component Msg
    <Message compact className='msg' ><p className='msg'><User name={props.name} /> <Msg message={props.message}/></p></Message>
  )
}

export default UserMsg;
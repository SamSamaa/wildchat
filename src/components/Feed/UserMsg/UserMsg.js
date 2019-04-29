import React from 'react';
import User from '../../User/User';
import Msg from '../Msg/Msg';
import { Message } from 'semantic-ui-react';
import './UserMsg.css';

//props serve to receive data from parent component
function UserMsg({message}) {

  return (
    // we receive props.name from Feed and "transform" it in name to send to child component User
    // we receive props.message from Feed and "transform" it in message to send to child component Msg
    <Message compact className='msg' >
      <div className='msg' className={message.privateMessage ? 'private' : ''}>
        <User user={message.user} />
        <Msg 
          message={message}
        />
      </div>
    </Message>
  )
}

export default UserMsg;
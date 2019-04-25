import React, { useState, useEffect, useRef } from "react";
import { Client } from "../../Client";
import { Form } from 'semantic-ui-react';
import './InputMsg.css';

const InputMsg = (props) => {

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [idEmet, setIdEmet] = useState('');
  const [value, setValue] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [privateMessage, setPrivateMessage] = useState(false);


  Client.receivedNewUser((data) => {
    setName(data.user.name)
    setIdEmet(data.user.id)
  });
  //method to emit message to server via client and to delete message from the input message box

  const sendMessage = () => {
    Client.sendMessageEmit(message, name, idEmet, selectedUser.id, privateMessage);
    setMessage('');
    setSelectedUser('');
    setPrivateMessage(false);
    setValue('');
  }


  useEffect(() => {
    setSelectedUser(props.selectUser);
    console.log(selectedUser)
    if (selectedUser !== '') {
      setValue(`@${selectedUser.user} `);
      setPrivateMessage(true);
    }
  }, [props.selectUser])

  return (
    <Form className='InputMsg' onSubmit={() => sendMessage()}>
      <Form.Input
        action='Send'
        placeholder='Type your message...'
        value={value}
        onChange={(e) => { setValue(e.target.value); setMessage(e.target.value) }}
      />
    </Form>
  )
}

export default InputMsg;
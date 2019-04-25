import React, { useState, useEffect, useRef } from "react";
import { Client } from "../../Client";
import { Form } from 'semantic-ui-react';
import './InputMsg.css';

const InputMsg = (props) => {

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [idEmet, setIdEmet] = useState('');

  const isInitialMount = useRef(true);


  Client.receivedNewUser((data) => {
    setName(data.user.name)
    setIdEmet(data.user.id)
  });
  //method to emit message to server via client and to delete message from the input message box
  const sendMessage = () => {
    // let arrayMsg = message.split('')
    // if (arrayMsg.length > 1) {
      if (props.selectUser === '' || props.selectUser === undefined) {
        console.log('public')
        Client.sendMessageEmit(message, name);
        setMessage('');
      } else {
        console.log('private', props.selectUser.user);
        setMessage(`@${props.selectUser.user} `);
        Client.sendPrivateMessage(message, name, idEmet, props.selectUser.id);
      };
    // }
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      sendMessage();
    }
  }, [props.selectUser])

  return (
    <Form className='InputMsg' onSubmit={() => sendMessage()}>
      <Form.Input
        action='Send'
        placeholder='Type your message...'
        value={message}
        onChange={(e) => { setMessage(e.target.value) }}
      />
    </Form>
  )
}

export default InputMsg;
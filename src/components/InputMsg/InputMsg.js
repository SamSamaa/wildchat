import React, { useState, useEffect } from "react";
import { Client } from "../../Client";
import { Form } from 'semantic-ui-react';
import './InputMsg.css';


const InputMsg = () => {

  const [message, setMessage] = useState('');

  const [name, setName] = useState('');

  //client method to set user id in sendMessage function to connect the right user to the right message
  Client.receivedNewConnection(data => setName(data.id))

  //method to emit message to server via client and to delete message from the input message box
  const sendMessage = () => {
    Client.sendMessageEmit(message, name);
    setMessage('');
  }

  return (
    <Form className='InputMsg' onSubmit={() => sendMessage()}>
      <Form.Input action='Send' placeholder='Type your message...' value={message} onChange={(e) => { setMessage(e.target.value) }} />
    </Form>
  )
}

export default InputMsg;


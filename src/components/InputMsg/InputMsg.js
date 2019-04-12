import React, {useState} from "react";
import { Client } from "../../Client";
import { Form } from 'semantic-ui-react';
import './InputMsg.css';


const InputMsg = () => {

  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  Client.receivedNewConnection(data => setName(data.id))

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


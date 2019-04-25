import React, { useState } from "react";
import { Client } from "../../Client";
import { Form } from 'semantic-ui-react';
import './InputMsg.css';


const InputMsg = () => {

  const [message, setMessage] = useState('');

  const [name, setName] = useState('');

  Client.receivedNewUser(data => setName(data.name));

  //method to emit message to server via client and to delete message from the input message box
  const sendMessage = () => {
    console.log(name);
    Client.sendMessageEmit(message, name);
    setMessage('');
  }

  const [systMsg, setSystMsg] = useState({});
  
  Client.receiveSystMsg((data => setSystMsg(data)));

  return (
    <div>
      <Form className='InputMsg' onSubmit={() => sendMessage()}>
        <Form.Input action='Send' placeholder='Type your message...' value={message} onChange={(e) => { setMessage(e.target.value) }} />
      </Form>
      <div>
      <div id="SystemeMessage"> {systMsg.user ? systMsg.user.name : null} {systMsg.statut ===0? " is disconnected" : null} {systMsg.statut ===1? " is connected" : null} </div>
      </div>
    </div>
  )
}

export default InputMsg;


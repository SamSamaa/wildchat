import React, { useState, useEffect } from "react";
import { Client } from "../../Client";
import { Form } from 'semantic-ui-react';
import './InputMsg.css';

const InputMsg = (props) => {

  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState({});
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    setConnected(props.connected)
  }, [props])

  Client.receivedNewUser(data => setProfile({ name: data.user.name, profilPic: data.user.profilPic }));

  //method to emit message to server via client and to delete message from the input message box
  const sendMessage = () => {
    Client.sendMessageEmit(message, profile);
    setMessage('');
  }

  return (
    <div>
      {connected ? <Form className='InputMsg' onSubmit={() => sendMessage()}>
        <Form.Input action='Send' placeholder='Type your message...' value={message} onChange={(e) => { setMessage(e.target.value) }} />
      </Form>
        :
        <Form className='InputMsg' onSubmit={() => sendMessage()}>
          <Form.Input disabled action='Send' placeholder='Type your message...' value={message} onChange={(e) => { setMessage(e.target.value) }} />
        </Form>
      }
    </div>
  )
}

export default InputMsg;
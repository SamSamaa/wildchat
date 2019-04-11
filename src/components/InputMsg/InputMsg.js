// import React from 'react';
// import { Form } from 'semantic-ui-react'
// import './InputMsg.css';

// function InputMsg() {
// return (
//   <Form className='InputMsg'>
//     <Form.Input action='Send' placeholder='Type your message...' />
//   </Form>
// )
// }

// export default InputMsg;

import React, { useState, useEffect } from "react";
import { Client } from "../../Client";
import { Form } from 'semantic-ui-react';
import './InputMsg.css';


const InputMsg = () => {

  const [message, setMessage] = useState('');

  const sendMessage = () => {
    Client.sendMessageEmit(message);
    setMessage('');
  }

  return (
    <Form className='InputMsg' onSubmit={() => sendMessage()}>
      <Form.Input action='Send' placeholder='Type your message...' value={message} onChange={(e) => { setMessage(e.target.value) }} />
    </Form>
  )
}

export default InputMsg;


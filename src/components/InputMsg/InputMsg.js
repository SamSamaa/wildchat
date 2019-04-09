import React from 'react';
import { Form } from 'semantic-ui-react'
import './InputMsg.css';

function InputMsg() {
  return (
    <Form className='InputMsg'>
        <Form.Input action='Send' placeholder='Type your message...'/>
    </Form>
  )
}

export default InputMsg;
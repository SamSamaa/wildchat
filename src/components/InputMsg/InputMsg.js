import React, { useState, useEffect, useContext } from "react";
import { Client } from "../../Client";
import { ConnectedCtx, SelectedUserCtx, SelectedColorCtx } from '../../App';
import { Form } from 'semantic-ui-react';
import './InputMsg.css';

const InputMsg = () => {

  const [message, setMessage] = useState('');
  const [user, setUser] = useState({});
  const [connected, setConnected] = useContext(ConnectedCtx);
  const [selectedColor, setSelectedColor] = useContext(SelectedColorCtx)
  const [value, setValue] = useState('');
  const [selectedUser, setSelectedUser] = useContext(SelectedUserCtx);
  const [privateMessage, setPrivateMessage] = useState(false);
  const [systMsg, setSystMsg] = useState({});

  Client.receivedNewUser((data) => {
    setUser({
       name: data.user.name, 
       idUser: data.user.idUser,
       profilePic: data.user.profilePic
      });
  });

  //method to emit message to server via client and to delete message from the input message box
  const sendMessage = () => {
    Client.sendMessageEmit(message, user, selectedUser.id, privateMessage);
    setMessage('');
    setSelectedUser('');
    setPrivateMessage(false);
    setValue('');
  };

  useEffect(() => {
    if (selectedUser !== '') {
      setValue(`@${selectedUser.user} `);
      setPrivateMessage(true);
    }
  }, [selectedUser])
  
  Client.receiveSystMsg((data => setSystMsg(data)));

  return (
    <div>
      {connected ? <Form className='InputMsg' onSubmit={() => sendMessage()}>
      <Form.Input
        className={selectedColor}
        action='Send'
        placeholder='Type your message...'
        value={value}
        onChange={(e) => { setValue(e.target.value); setMessage(e.target.value) }}
      />
    </Form>
        :
        <Form className='InputMsg' onSubmit={() => sendMessage()}>
        <Form.Input
          className={selectedColor}
          disabled
          action='Send'
          placeholder='Type your message...'
          value={value}
          onChange={(e) => { setValue(e.target.value); setMessage(e.target.value) }}
        />
      </Form>
      }
      <div>
        <div id="SystemeMessage"> {systMsg.user ? systMsg.user.name : null} {systMsg.statut ===0? " is disconnected" : null} {systMsg.statut ===1? " is connected" : null} </div>
      </div>
    </div>
  )
}

export default InputMsg;
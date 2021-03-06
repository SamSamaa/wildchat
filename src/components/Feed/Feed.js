import React, { useState, useEffect, useContext } from "react";
import UserMsg from './UserMsg/UserMsg';
import { ConnectedCtx } from '../../App';
import { Client } from "../../Client";
import { List } from 'semantic-ui-react';
import './Feed.css';

function Feed() {
  const [messages, setMessages] = useState([]);
  const [systMsg, setSystMsg] = useState({});
  const [connected, setConnected] = useContext(ConnectedCtx);

  useEffect(() =>{
    if (connected === false){
      setMessages([]);
    }
  }, [connected])
  

  Client.receivedNewUser(data => {
    setMessages(data.history);
  });

  Client.receiveSystMsg((data => setSystMsg(data)));

  // see client.js file for explanations
  useEffect(() => {
      const handleMessage = (data) => { addMessage(data) };
      Client.receiveMessageOn(handleMessage);
      return () => {
        Client.receiveMessageOff(handleMessage);
      }
    }, [messages])

    const addMessage = (data) => {
      setMessages([...messages, data]);
    };
  
  useEffect(() => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
  })

  return (
    <List className="Feed">
      {messages.map((message, index) => {
        return (
          <List.Item key={index} className='bulleMsg'>
            <UserMsg
              message={message}
              />
          </List.Item> //we pass parameters name and message to child component UserMsg
        );
      })}
      <div id='bottom'></div>
      </List>
  )
}

export default Feed;
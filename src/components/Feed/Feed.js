import React, { useState, useEffect } from "react";
import UserMsg from '../UserMsg/UserMsg';
import { List } from 'semantic-ui-react';
import { Client } from "../../Client";
import './Feed.css';


function Feed() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleMessage = (data) => { addMessage(data) };
    Client.receiveMessageOn(handleMessage);
    return () => {
      Client.receiveMessageOff(handleMessage);
    }
  }, [messages])

  const addMessage = (data) => {
    setMessages([...messages, data]);
  }

  useEffect(() => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <List className="Feed">
      {messages.map((message, index) => {
        return (
          // <div key={index}>{message.message}</div>
          <List.Item key={index}><UserMsg message={message.message}/></List.Item>
        )
      })}

      <div id='bottom'></div>
    </List>
  )
}

export default Feed;
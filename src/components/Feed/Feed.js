import React, { useState, useEffect } from "react";
import UserMsg from '../UserMsg/UserMsg';
import { Client } from "../../Client";
import { List } from 'semantic-ui-react';
import './Feed.css';


function Feed() {
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

  const [name, setName] = useState('');

  Client.receivedNewConnection(data => setName(data.id));

  useEffect(() => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <List className="Feed">
      {messages.map((message, index) => {
        return (
          <List.Item key={index}><UserMsg name={name} message={message.message}/></List.Item>
        )
      })}

      <div id='bottom'></div>
    </List>
  )
}

export default Feed;
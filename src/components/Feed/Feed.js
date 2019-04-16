import React, { useState, useEffect } from "react";
import UserMsg from './UserMsg/UserMsg';
import { Client } from "../../Client";
import { List } from 'semantic-ui-react';
import './Feed.css';


function Feed() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Client.receiveHistoryMessage(data => setMessages(data))
  }, []);

  // see client.js file for explanations
  useEffect(() => {
    const handleMessage = (data) => { addMessage(data) };
    Client.receiveMessageOn(handleMessage);
    return () => {
      Client.receiveMessageOff(handleMessage);
    };
  }, [messages]);
  console.log(messages)
  const addMessage = (data) => {
    setMessages([...messages, data]);
  };

  useEffect(() => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <List className="Feed">
      {messages.map((message, index) => {
        return (
          <List.Item key={index}><UserMsg name={message.name} message={message.message} date={message.date} /></List.Item> //we pass parameters name and message to child component UserMsg
        );
      })}
      <div id='bottom'></div>
    </List>
  )
}

export default Feed;

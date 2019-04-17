import React, { useState, useEffect } from "react";
import UserMsg from './UserMsg/UserMsg';
import { Client } from "../../Client";
import { List } from 'semantic-ui-react';
import './Feed.css';
// import SystemeMessage from "./SystemeMessage/SystemeMessage";


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

  const [systMsg, setSystMsg] = useState({});
  
  Client.receiveSystMsg((data => setSystMsg(data)));

  return (
    <List className="Feed">
      <List.Item>
        <div id="SystemeMessage"> {systMsg.user ? systMsg.user.name : null} {systMsg.statut ===0? " is disconnected" : null} {systMsg.statut ===1? " is connected" : null} </div>
      </List.Item>
      {messages.map((message, index) => {
        return (
          <div>
          <List.Item key={index}>
            <UserMsg name={message.name} message={message.message}/>
          </List.Item>
           {/* we pass parameters name and message to child component UserMsg */}
          </div>
        );
      })}
         
      <div id='bottom'></div>
    </List>
  )
}

export default Feed;

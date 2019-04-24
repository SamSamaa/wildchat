import React, { useState, useEffect } from "react";
import UserMsg from './UserMsg/UserMsg';
import { Client } from "../../Client";
import { List } from 'semantic-ui-react';
import './Feed.css';
import InputMsg from "../InputMsg/InputMsg";


function Feed(props) {
  const [messages, setMessages] = useState([]);
  const [privateMessages, setPrivateMessages] = useState([]);

  Client.receivedNewUser(data => {
    setMessages(data.history);
  });


  // see client.js file for explanations
  useEffect(() => {
      const handleMessage = (data) => { addMessage(data) };
      Client.receiveMessageOn(handleMessage);
      return () => {
        Client.receiveMessageOff(handleMessage);
      }
    }, [messages]);

    const addMessage = (data) => {
      setMessages([...messages, data]);
    };
  
    // Client.receivePrivateMessage((data) => {
    //   // setPrivateMessages(data)
    //   console.log(data)
    // })
    useEffect(() => {
      const handlePrivateMessage = (data) => { addPrivateMessage(data) };
      Client.receivePrivateMessage(handlePrivateMessage);
      return () => {
        Client.receivePrivateMessageOff(handlePrivateMessage);
      }
    }, [privateMessages]);
    console.log(privateMessages)

  const addPrivateMessage = (data) => {
    setPrivateMessages([...privateMessages, data]);
  };

  useEffect(() => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div>
    <List className="Feed">
      {messages.map((message, index) => {
        return (
          <List.Item key={index}>
            <UserMsg
              atUser={props.atUser}
              name={message.name}
              message={message.message}
              date={message.date}
            />
          </List.Item> //we pass parameters name and message to child component UserMsg
        );
      })}

      {privateMessages.map((message, index) => {
        return (
          <List.Item key={index}>
            <UserMsg
              atUser={props.atUser}
              name={message.name}
              message={message.message}
              date={message.date}
            />
          </List.Item> //we pass parameters name and message to child component UserMsg
        );
      })
      }
      <div id='bottom'></div>
      </List>
      {/* <InputMsg
      atUser={props.atUser}
      name={message.name}
      message={message.message}
      date={message.date}
    /> */}

  </div>
  )
}

export default Feed;
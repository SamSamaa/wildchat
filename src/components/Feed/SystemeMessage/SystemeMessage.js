import React, { useState, useEffect } from 'react';
import {Message, List } from 'semantic-ui-react';
import { Client } from "../../../Client";
import './SystemeMessage.css';

function SystemeMessage() {

  const [systMsg, setSystMsg] = useState({});
  
  Client.receiveSystMsg((data => setSystMsg(data)));
  console.log(systMsg)

  return (
    <div id="SystemeMessage">
      {systMsg.user ? systMsg.user.name : null} {systMsg.statut ===0? " is disconnected" : null} {systMsg.statut ===1? " is connected" : null}
    </div>
  )
}

export default SystemeMessage;
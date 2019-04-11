import React, { useState, useEffect } from 'react';
import UserMsg from '../UserMsg/UserMsg';
import { Client } from "../../Client";
import { List } from 'semantic-ui-react';
import './Feed.css';

function Feed() {

  const [name, setName] = useState('');

  Client.receivedNewConnection(data => setName(data.id));

  useEffect(() => {
    document.getElementById('bottom').scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <List className="Feed">
      <List.Item><UserMsg name={name} /></List.Item>
      <div id='bottom'></div>
    </List>
  )
}

export default Feed;
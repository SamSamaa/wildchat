import React, { useState, useEffect, useContext } from 'react';
import { ConnectedCtx } from '../../../App';
import { List } from 'semantic-ui-react';
import { Client } from "../../../Client";

function Counter() {

  const [users, setUsers] = useState([]);
  const [connected, setConnected] = useContext(ConnectedCtx);
  console.log(connected + 'context counter')

  useEffect(() => {
    Client.receivedNewConnection((data) => setUsers(data));
    Client.receiveDisconnection((data) => setUsers(data.users));
  }, []); // = componentDidMount

return (
    <List className='Counter'>
      Users Online : {connected ? users.length : ''}
    </List>
  )
}

export default Counter;
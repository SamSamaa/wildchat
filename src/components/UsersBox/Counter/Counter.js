import React, { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';
import { Client } from "../../../Client";

function Counter(props) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    Client.receivedNewConnection((data) => setUsers(data.users));
    Client.receiveDisconnection((data) => setUsers(data.users));
  }, []); // = componentDidMount

return (
    <List className='Counter'>
      Users Online : {props.connected ? users.length : ''}
    </List>
  )
}

export default Counter;
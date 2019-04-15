import React, { useState, useEffect} from 'react';
import { List } from 'semantic-ui-react';
import { Client } from "../../../Client";


function Counter() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    Client.receivedNewConnection((data) => setUsers(data));
    Client.receiveDisconnection((data) => setUsers(data));
  }, []); // = componentDidMount
  
return (
    <List className='Counter'>
      Users Online : {users.length}
    </List>
  )
}

export default Counter;
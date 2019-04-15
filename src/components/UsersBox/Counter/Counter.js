import React, { useState, useEffect} from 'react';
import UsersList from '../UsersList/UsersList';
import { List } from 'semantic-ui-react';
import { Client } from "../../../Client";


function Counter() {

  const [users, setUsers] = useState([]);

//client method to set users array when there is new connection (don't work well)
Client.receivedNewConnection(data => setUsers(data.users));
Client.receiveDisconnection(() => setUsers(users));
  
return (
    <List className='Counter'>
      Users Online : {users.length}
    </List>
  )
}

export default Counter;
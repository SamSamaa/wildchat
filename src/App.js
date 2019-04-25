import React, { useState } from 'react';
import Feed from './components/Feed/Feed';
import InputMsg from './components/InputMsg/InputMsg';
import Logo from './components/Logo/Logo';
import UsersBox from './components/UsersBox/UsersBox';
import Parameters from './components/Parameters/Parameters';
import { Icon } from 'semantic-ui-react';
import './App.css';

function App() {

  const [active, toggleActive] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  // const [messageSent, setMessageSent] = useState(false);

  const toggleUsers = () => toggleActive(!active);

  const atUser = (user, id) => {
    setSelectedUser({user, id});
    console.log(selectedUser + 'app')
  }

  return (
    <div className='App'>
      <div className='chat'>
        <Feed atUser={atUser}/>
        <InputMsg selectUser={selectedUser} />
      </div>
      <div className={'infos' + (active ? ' active' : ' inactive')} >
        <button className='toggle' onClick={toggleUsers}>
          <Icon name={active ? 'chevron circle right' : 'chevron circle left'} />
        </button>
        <Logo />
        <UsersBox atUser={atUser}/>
        <Parameters />
      </div>
    </div>
  );
}

export default App;
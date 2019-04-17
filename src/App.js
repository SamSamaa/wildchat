import React, { useState, useEffect } from 'react';
import Feed from './components/Feed/Feed';
import InputMsg from './components/InputMsg/InputMsg';
import Logo from './components/Logo/Logo';
import UsersBox from './components/UsersBox/UsersBox';
import Parameters from './components/Parameters/Parameters';
import { Icon } from 'semantic-ui-react';
import './App.css';

function App(props) {

  const [active, toggleActive] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const toggleUsers = () => toggleActive(!active);

  const atUser = (user) => {
    setSelectedUser(user);
  }

  useEffect(() => {
    console.log(selectedUser);
  }, [selectedUser])

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
        <UsersBox atUser={atUser} userName={props.name}/>
        <Parameters />
      </div>
    </div>
  );
}

export default App;
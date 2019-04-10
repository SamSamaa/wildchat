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

  const toggleUsers = () => toggleActive(!active);


  return (
    <div className='App'>
      <div className='chat'>
        <Feed />
        <InputMsg />
      </div>
      <div className='infos' style={active ? { marginLeft: '30vw' } : { marginLeft: '100vw' }}>
        <button className='toggle' onClick={toggleUsers}>
          <Icon name={ active ? 'chevron circle right' : 'chevron circle left'} color='violet'/>
        </button>
        <Logo />
        <UsersBox />
        <Parameters />
      </div>
    </div>
  );
}

export default App;
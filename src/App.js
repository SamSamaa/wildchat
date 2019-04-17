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
  const [date, setDate] = useState(false);

  const toggleDate = () => setDate(!date);

  const toggleUsers = () => toggleActive(!active);

  return (
    <div className='App'>
      <div className='chat'>
        <Feed showDate={date} />
        <InputMsg />
      </div>
      <div className={'infos' + (active ? ' active' : ' inactive')} >
        <button className='toggle' onClick={toggleUsers}>
          <Icon name={active ? 'chevron circle right' : 'chevron circle left'} />
        </button>
        <Logo />
        <UsersBox />
        <Parameters toggleDate={toggleDate}/>
      </div>
    </div>
  );
}

export default App;
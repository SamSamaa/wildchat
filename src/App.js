import React, { useState, createContext  } from 'react';
import Feed from './components/Feed/Feed';
import InputMsg from './components/InputMsg/InputMsg';
import Logo from './components/Logo/Logo';
import UsersBox from './components/UsersBox/UsersBox';
import Parameters from './components/Parameters/Parameters';
import { Icon } from 'semantic-ui-react';
import './App.css';

export const ConnectedCtx = createContext(false);
export const ShowDateCtx = createContext(false);
export const SelectedUserCtx = createContext('');
export const SelectedColorCtx = createContext('');

function App() {

  const [active, toggleActive] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [connected, setConnected] = useState(false);
  const [selectedColor, setSelectedColor] = useState('')

  const toggleUsers = () => toggleActive(!active);

  return (
    <ConnectedCtx.Provider value={[connected, setConnected]}>
    <ShowDateCtx.Provider value={[showDate, setShowDate]}>
    <SelectedUserCtx.Provider value={[selectedUser, setSelectedUser]}>
    <SelectedColorCtx.Provider value={[selectedColor, setSelectedColor]}>
    <div className={'App' + ' ' + selectedColor}>
      <div className='chat'>
        <Feed />
        <InputMsg />
      </div>
      <div className={'infos' + (active ? ' active' : ' inactive')} >
        <button className='toggle' onClick={toggleUsers}>
          <Icon name={active ? 'chevron circle right' : 'chevron circle left'} />
        </button>
        <Logo />
        <UsersBox />
        <Parameters />
      </div>
    </div>
    </SelectedColorCtx.Provider>
    </SelectedUserCtx.Provider>
    </ShowDateCtx.Provider>
    </ConnectedCtx.Provider>
  );
}

export default App;
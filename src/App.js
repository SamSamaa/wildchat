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
  const [color, setColor] = useState("");
  const [connected, setConnected] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const toggleDate = () => setDate(!date);
  const clickColorBlue = () => setColor("blue");
  const clickColorRed = () => setColor("red");
  const clickColorGreen = () => setColor("green");
  const clickColorViolet = () => setColor("");
  const clickColorGrey = () => setColor("grey");
  const clickColorNight = () => setColor("night");

  const toggleUsers = () => toggleActive(!active);

  const atUser = (user, id) => {
    setSelectedUser({user, id});
    console.log(selectedUser + 'app')
  }

  const isConnected = (connected) => {setConnected(connected)}
  
  return (
    <div className={'App' + ' ' + color}>
      <div className='chat'>
        <Feed showDate={date} connected={connected} atUser={atUser}/>
        <InputMsg connected={connected} colorBtn={color} selectUser={selectedUser}/>
      </div>
      <div className={'infos' + (active ? ' active' : ' inactive')} >
        <button className='toggle' onClick={toggleUsers}>
          <Icon name={active ? 'chevron circle right' : 'chevron circle left'} />
        </button>
        <Logo />
        <UsersBox connected={connected} atUser={atUser}/>
        <Parameters
          toggleDate={toggleDate}
          showDate={date}
          clickColorBlue={clickColorBlue}
          clickColorGreen={clickColorGreen}
          clickColorViolet={clickColorViolet}
          clickColorGrey={clickColorGrey}
          clickColorRed={clickColorRed}
          clickColorNight={clickColorNight}
          isConnected={isConnected}
        />
      </div>
    </div>
  );
}

export default App;
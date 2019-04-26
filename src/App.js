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

  const toggleDate = () => setDate(!date);
  const clickColorBlue = () => setColor("blue");
  const clickColorRed = () => setColor("red");
  const clickColorGreen = () => setColor("green");
  const clickColorViolet = () => setColor("");
  const clickColorGrey = () => setColor("grey");
  const clickColorNight = () => setColor("night");

  const isConnected = (connected) => {setConnected(connected)}
  const toggleUsers = () => toggleActive(!active);
  
  return (
    <div className={'App' + ' ' + color}>
      <div className='chat'>
        <Feed showDate={date} connected={connected}/>
        <InputMsg connected={connected} colorBtn={color}/>
      </div>
      <div className={'infos' + (active ? ' active' : ' inactive')} >
        <button className='toggle' onClick={toggleUsers}>
          <Icon name={active ? 'chevron circle right' : 'chevron circle left'} />
        </button>
        <Logo />
        <UsersBox connected={connected} />
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
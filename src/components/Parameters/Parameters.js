import React from 'react';
import './Parameters.css';
import Tool from './Tools/Tool';
import Info from './Tools/Info';
import Login from './Tools/Login/Login';

function Parameters(props) {
  
  return (
    <div className='Parameters' >
      <Tool 
        toggleDate={props.toggleDate}
        showDate={props.showDate}
        clickColorBlue={props.clickColorBlue}
        clickColorGreen={props.clickColorGreen}
        clickColorViolet={props.clickColorViolet}
        clickColorGrey={props.clickColorGrey}
        clickColorRed={props.clickColorRed}
        clickColorNight={props.clickColorNight} />
      <Info />
      <Login isConnected={props.isConnected} />
    </div>
  )
}

export default Parameters;

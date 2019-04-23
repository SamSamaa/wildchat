import React from 'react';
import './Parameters.css';
import Tool from './Tools/Tool';
import Info from './Tools/Info';

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
    </div>
  )
}

export default Parameters;

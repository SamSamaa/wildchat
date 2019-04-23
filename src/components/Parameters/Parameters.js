import React from 'react';
import './Parameters.css';
import Tool from './Tools/Tool';
import Info from './Tools/Info';

function Parameters(props) {
  return (
    <div className='Parameters' >
      <Tool toggleDate={props.toggleDate} showDate={props.showDate} />
      <Info />
    </div>
  )
}

export default Parameters;

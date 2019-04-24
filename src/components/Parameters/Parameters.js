import React from 'react';
import './Parameters.css';
import Tool from './Tools/Tool';
import Info from './Tools/Info';
import Login from './Tools/Login/Login';

function Parameters(props) {
  
  return (
    <div className='Parameters' >
      <Tool />
      <Info />
      <Login isConnected={props.isConnected} />
    </div>
  )
}

export default Parameters;

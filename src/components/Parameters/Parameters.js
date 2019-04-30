import React from 'react';
import './Parameters.css';
import Tool from './Tools/Tool';
import Info from './Tools/Info';
import Login from './Tools/Login/Login';

function Parameters() {
  
  return (
    <div className='Parameters' >
      <Tool />
      <Info />
      <Login />
    </div>
  )
}

export default Parameters;

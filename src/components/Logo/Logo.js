import React from 'react';
import Wild_Chat_Logo from './Wild_Chat_Logo.png';
import './Logo.css';

function Logo() {
  return (
    <div className='Logo' >
      <img src={Wild_Chat_Logo} alt='logo wild chat'></img>
    </div>
  )
}

export default Logo;
import React from 'react';
import './User.css';

//props serve to receive data from parent component
function User(props) {
  return (
    // we receive props.name from UserMsg
    <div className="row">
      <img src={props.user.profilPic}  alt='' />
      <strong >{props.user.name}</strong>
    </div>
  )
}

export default User
import React, { useState, useEffect, useContext } from 'react';
import './User.css';
import { SelectedUserCtx } from '../../App';

//props serve to receive data from parent component
function User(props) {

  const [selectedUser, setSelectedUser] = useContext(SelectedUserCtx);
  
  const handleOnClick = () => {
    setSelectedUser({
      user :props.user.name, 
      id: props.user.idUser})
  };

  return (
    // we receive props.name from UserMsg
    <div className="row">
      <img className="image" src={props.user.profilePic}  alt='' />
      <strong onClick={handleOnClick} >{props.user.name}</strong>
    </div>
  )
}

export default User
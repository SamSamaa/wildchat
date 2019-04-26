import React from 'react';
import './User.css';

//props serve to receive data from parent component
function User(props) {
  const handleOnClick = () => {
    props.atUser(props.user.name, props.user.idUser)
  }

  return (
    // we receive props.name from UserMsg
    <div className="row">
      <img src={props.user.profilePic}  alt='' />
      <strong onClick={handleOnClick} >{props.user.name}</strong>
    </div>
  )
}

export default User
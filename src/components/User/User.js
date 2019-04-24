import React from 'react';

//props serve to receive data from parent component
function User(props) {
  return (
    // we receive props.name from UserMsg
    <strong onClick={() => props.atUser(props.name, props.id)}>{props.name}</strong>
  )
}

export default User;
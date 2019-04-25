import React from 'react';

//props serve to receive data from parent component
function User(props) {
  const handleOnClick = () => {
    props.atUser(props.name, props.id)
    console.log(props)
  }

  return (
    // we receive props.name from UserMsg
    <strong onClick={handleOnClick}>{props.name}</strong>
  )
}

export default User;